import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import 'dotenv/config';

let ai: GoogleGenAI | null = null;
try {
  if (process.env.GEMINI_API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
} catch (error) {
  console.warn("Failed to initialize Google Gen AI client", error);
}

const SYSTEM_PROMPT = `You are a helpful and persuasive admissions assistant for Fazo School. 
Your goal is to act as a lead collector. 
You should be friendly, conversational, and answer any general questions about the school using the context that it's a premium K-12 institution with excellent facilities (science labs, sports complex, modern library, smart classrooms) and highly qualified teachers.
Persuade parents why Fazo School is the best choice for their children (focusing on holistic development, academic excellence, and safe environment).
Crucially, you must collect their contact information (Name, Email or Phone Number, and their child's grade level) so the admissions team can reach out to them. Do not ask for everything at once, keep it conversational. Once you have their name, email/phone, and grade, thank them and let them know the admissions team will contact them shortly.`;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  app.post("/api/chat", async (req, res) => {
    try {
      if (!ai) {
        return res.status(503).json({ error: "Gemini API is not configured." });
      }

      const { messages } = req.body;
      
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Invalid request payload" });
      }

      let formattedMessages = messages.map((m: any) => ({
        role: m.isBot ? "model" : "user",
        parts: [{ text: m.text }],
      }));

      // Gemini requires the first message to be from the user
      while (formattedMessages.length > 0 && formattedMessages[0].role === "model") {
        formattedMessages.shift();
      }

      if (formattedMessages.length === 0) {
        return res.status(400).json({ error: "No user messages provided" });
      }

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: formattedMessages,
        config: {
          systemInstruction: SYSTEM_PROMPT,
          temperature: 0.7,
        }
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Chat API error:", error);
      res.status(500).json({ error: "Failed to generate response" });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

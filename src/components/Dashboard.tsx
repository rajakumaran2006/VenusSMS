import { Header } from "./Header";
import { CreditCardWidget } from "./widgets/CreditCardWidget";
import { FinancialStatsWidget } from "./widgets/FinancialStatsWidget";
import { CircularStatsWidget } from "./widgets/CircularStatsWidget";
import { AcademicProgressWidget } from "./widgets/AcademicProgressWidget";
import { RevenueChartWidget } from "./widgets/RevenueChartWidget";
import { DemographicsWidget } from "./widgets/DemographicsWidget";
import { ActivityManagerWidget } from "./widgets/ActivityManagerWidget";
import { ReviewWidget } from "./widgets/ReviewWidget";

export function Dashboard() {
  return (
    <div className="flex-1 flex flex-col h-full bg-white relative">
      <div className="flex-1 overflow-y-auto px-10 py-10 hide-scrollbar flex flex-col gap-10">
        <Header />
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 w-full">
          
          {/* Left Column */}
          <div className="xl:col-span-3 flex flex-col gap-6">
            <CreditCardWidget />
            <DemographicsWidget />
          </div>

          {/* Middle Column */}
          <div className="xl:col-span-5 flex flex-col gap-6">
            <FinancialStatsWidget />
            <ActivityManagerWidget />
          </div>

          {/* Right Column */}
          <div className="xl:col-span-4 flex flex-col gap-6">
            {/* Top Row of Right Column */}
            <div className="grid grid-cols-2 gap-6">
               <CircularStatsWidget />
               <AcademicProgressWidget />
            </div>
            <RevenueChartWidget />
            <ReviewWidget />
          </div>

        </div>
      </div>
    </div>
  );
}

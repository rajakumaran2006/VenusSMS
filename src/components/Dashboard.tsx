import { Navbar, Header } from "./Header";
import { CreditCardWidget } from "./widgets/CreditCardWidget";
import { FinancialStatsWidget } from "./widgets/FinancialStatsWidget";
import { CircularStatsWidget } from "./widgets/CircularStatsWidget";
import { AcademicProgressWidget } from "./widgets/AcademicProgressWidget";
import { RevenueChartWidget } from "./widgets/RevenueChartWidget";
import { DemographicsWidget } from "./widgets/DemographicsWidget";
import { ActivityManagerWidget } from "./widgets/ActivityManagerWidget";
import { ReviewWidget } from "./widgets/ReviewWidget";

interface DashboardProps {
  onMenuClick: () => void;
}

export function Dashboard({ onMenuClick }: DashboardProps) {
  return (
    <div className="flex-1 flex flex-col bg-white relative h-full overflow-hidden">
      {/* Top Navbar stays fixed at the top */}
      <Navbar onMenuClick={onMenuClick} />
      
      {/* Dashboard Page Content */}
      <div className="flex-1 overflow-y-auto px-4 py-6 md:px-10 md:py-10 flex flex-col gap-8 md:gap-10">
        <Header />
        
        {/* Main Grid Layout - Flat elements to allow grid alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 xl:grid-cols-12 gap-6 w-full items-stretch">
          
          {/* Row 1 - Overview & stats */}
          <div className="lg:col-span-6 xl:col-span-3 flex flex-col">
            <CreditCardWidget />
          </div>

          <div className="lg:col-span-6 xl:col-span-5 flex flex-col">
            <FinancialStatsWidget />
          </div>

          <div className="lg:col-span-12 xl:col-span-4 flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 h-full">
              <CircularStatsWidget />
              <AcademicProgressWidget className="sm:col-span-2" />
            </div>
          </div>

          {/* Row 2 - Demographics, Activity, and Trends */}
          <div className="lg:col-span-6 xl:col-span-3 flex flex-col">
            <DemographicsWidget />
          </div>

          <div className="lg:col-span-6 xl:col-span-5 flex flex-col">
            <ActivityManagerWidget />
          </div>

          <div className="lg:col-span-12 xl:col-span-4 flex flex-col gap-6">
            <RevenueChartWidget />
            <ReviewWidget />
          </div>

        </div>
      </div>
    </div>
  );
}

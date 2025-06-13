import { AppSidebar } from '@/components/app-sidebar'
import { ChartAreaInteractive } from '@/components/chart-area-interactive'
import { DataTable } from '@/components/data-table'
import { SectionCards } from '@/components/section-cards'
import { SiteHeader } from '@/components/site-header'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

import data from "./data.json"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset className="overflow-hidden">
        <SiteHeader />
        <div className="flex flex-1 flex-col min-h-0 overflow-hidden">
          <div className="flex flex-1 flex-col gap-4 md:gap-6 overflow-y-auto overflow-x-hidden">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 w-full min-w-0">
              <SectionCards />
              <div className="px-4 lg:px-6 w-full min-w-0">
                <ChartAreaInteractive />
              </div>
              <div className="w-full min-w-0">
                <DataTable data={data} />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
import { adminSystem } from "./admin-system"
import { contractFarming } from "./contract-farming"
import { eventDemo } from "./event"
import { exportCar } from "./export-car"
import { filmSchedule } from "./film-schedule"
import { haccp } from "./haccp"
import { inventory } from "./inventory"
import { logisticsOps } from "./logistics-ops"
import { logisticsSorting } from "./logistics-sorting"
import { nursingEval } from "./nursing-eval"
import { oneErp } from "./one-erp"
import { payflow } from "./payflow"
import { procurement } from "./procurement"
import { review } from "./review"
import { salesOps } from "./sales-ops"
import type { DemoConfig } from "./types"
import { usedcarCrawl } from "./usedcar-crawl"

export const demos: Record<string, DemoConfig> = Object.fromEntries(
  [
    adminSystem,
    logisticsSorting,
    logisticsOps,
    inventory,
    usedcarCrawl,
    haccp,
    eventDemo,
    payflow,
    review,
    contractFarming,
    salesOps,
    filmSchedule,
    nursingEval,
    oneErp,
    exportCar,
    procurement,
  ].map((d) => [d.slug, d]),
)

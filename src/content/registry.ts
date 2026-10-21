import type { PageContent } from './types';
import { immigrationHub } from './pages/immigrationHub';
import { marriageResidency } from './pages/marriageResidency';
import { digitalNomadVisa } from './pages/digitalNomadVisa';
import { retirementVisa } from './pages/retirementVisa';
import { goldenVisa } from './pages/goldenVisa';
import { businessInvestorVisa } from './pages/businessInvestorVisa';
import { familyReunionVisa } from './pages/familyReunionVisa';
import { childResidency } from './pages/childResidency';
import { workVisas } from './pages/workVisas';
import { citizenshipHub } from './pages/citizenshipHub';
import { oneYearNaturalization } from './pages/oneYearNaturalization';
import { ordinaryNaturalization } from './pages/ordinaryNaturalization';
import { extraordinaryNaturalization } from './pages/extraordinaryNaturalization';
import { cplpNaturalization } from './pages/cplpNaturalization';
import { childBornAbroad } from './pages/childBornAbroad';
import { descentAdults } from './pages/descentAdults';
import { reacquireCitizenship } from './pages/reacquireCitizenship';
import { realEstateHub } from './pages/realEstateHub';
import { purchaseSupport } from './pages/purchaseSupport';
import { preliminaryReview } from './pages/preliminaryReview';
import { acquisition } from './pages/acquisition';
import { offPlan } from './pages/offPlan';
import { dueDiligence } from './pages/dueDiligence';
import { holdingStructures } from './pages/holdingStructures';
import { realEstateDisputes } from './pages/realEstateDisputes';
import { saleSupport } from './pages/saleSupport';
import { bankingHub } from './pages/bankingHub';
import { moneyTransferBrazil } from './pages/moneyTransferBrazil';
import { bankAccountGuide } from './pages/bankAccountGuide';
import { escrowServices } from './pages/escrowServices';
import { estatePlanningHub } from './pages/estatePlanningHub';
import { lifetimeEstatePlanning } from './pages/lifetimeEstatePlanning';
import { internationalEstatePlanning } from './pages/internationalEstatePlanning';
import { lastWillTestament } from './pages/lastWillTestament';
import { livingWill } from './pages/livingWill';
import { medicalPowerOfAttorney } from './pages/medicalPowerOfAttorney';
import { financialPowerOfAttorney } from './pages/financialPowerOfAttorney';
import { inheritanceHub } from './pages/inheritanceHub';
import { probateProcess } from './pages/probateProcess';
import { foreignersInherit } from './pages/foreignersInherit';
import { transferInheritedFunds } from './pages/transferInheritedFunds';
import { foreignHeirsHearings } from './pages/foreignHeirsHearings';
import { localProbateAttorney } from './pages/localProbateAttorney';
import { inheritanceDisputes } from './pages/inheritanceDisputes';
import { forcedHeirship } from './pages/forcedHeirship';
import { searchWills } from './pages/searchWills';

const PAGES: PageContent[] = [
  immigrationHub,
  marriageResidency,
  digitalNomadVisa,
  retirementVisa,
  goldenVisa,
  businessInvestorVisa,
  familyReunionVisa,
  childResidency,
  workVisas,
  citizenshipHub,
  oneYearNaturalization,
  ordinaryNaturalization,
  extraordinaryNaturalization,
  cplpNaturalization,
  childBornAbroad,
  descentAdults,
  reacquireCitizenship,
  realEstateHub,
  purchaseSupport,
  preliminaryReview,
  acquisition,
  offPlan,
  dueDiligence,
  holdingStructures,
  realEstateDisputes,
  saleSupport,
  bankingHub,
  moneyTransferBrazil,
  bankAccountGuide,
  escrowServices,
  estatePlanningHub,
  lifetimeEstatePlanning,
  internationalEstatePlanning,
  lastWillTestament,
  livingWill,
  medicalPowerOfAttorney,
  financialPowerOfAttorney,
  inheritanceHub,
  probateProcess,
  foreignersInherit,
  transferInheritedFunds,
  foreignHeirsHearings,
  localProbateAttorney,
  inheritanceDisputes,
  forcedHeirship,
  searchWills
];

const BY_ROUTE = new Map<string, PageContent>();
for (const page of PAGES) {
  for (const route of [page.route, ...(page.aliases ?? [])]) {
    if (BY_ROUTE.has(route)) throw new Error(`Duplicate content route: ${route}`);
    BY_ROUTE.set(route, page);
  }
}

/** Finds the content page for a route; trailing slashes are ignored */
export function findContentPage(route: string): PageContent | undefined {
  return BY_ROUTE.get(route.replace(/\/+$/, ''));
}

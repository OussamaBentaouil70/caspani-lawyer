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
  reacquireCitizenship
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

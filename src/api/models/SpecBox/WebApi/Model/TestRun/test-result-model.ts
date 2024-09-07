/* tslint:disable */
/* eslint-disable */
export interface TestResultModel {
  assertionGroupTitle: string;
  assertionTitle: string;
  completedAt?: string | null;
  featureCode: string;
  featureTitle: string;
  id: string;
  report?: string | null;
  startedAt?: string | null;
  status: string;
  testRunId: string;
  updatedAt: string;
}

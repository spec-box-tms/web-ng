/* tslint:disable */
/* eslint-disable */
export interface TestResultHistoryModel {
  completedAt: string;
  id: string;
  report?: string | null;
  status: string;
  testRunId: string;
  testRunTitle: string;
  version?: string | null;
}

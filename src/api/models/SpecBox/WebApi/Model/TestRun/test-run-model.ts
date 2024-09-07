/* tslint:disable */
/* eslint-disable */
export interface TestRunModel {
  blockedCount: number;
  completedAt?: string | null;
  configuration?: string | null;
  createdAt: string;
  description?: string | null;
  environment?: string | null;
  failedCount: number;
  id: string;
  invalidCount: number;
  passedCount: number;
  projectCode: string;
  skippedCount: number;
  startedAt?: string | null;
  title: string;
  totalCount: number;
  version?: string | null;
}

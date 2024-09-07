/* tslint:disable */
/* eslint-disable */
import { ProjectVersionModel as SpecBoxWebApiModelCommonProjectVersionModel } from '../../../../../models/SpecBox/WebApi/Model/Common/project-version-model';
import { TestRunConfigurationsModel as SpecBoxWebApiModelTestRunTestRunConfigurationsModel } from '../../../../../models/SpecBox/WebApi/Model/TestRun/test-run-configurations-model';
import { TestRunModel as SpecBoxWebApiModelTestRunTestRunModel } from '../../../../../models/SpecBox/WebApi/Model/TestRun/test-run-model';
export interface ProjectTestRunsModel {
  configurations: SpecBoxWebApiModelTestRunTestRunConfigurationsModel;
  project: SpecBoxWebApiModelCommonProjectVersionModel;
  testRuns: Array<SpecBoxWebApiModelTestRunTestRunModel>;
}

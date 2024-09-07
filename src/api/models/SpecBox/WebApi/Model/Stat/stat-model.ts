/* tslint:disable */
/* eslint-disable */
import { ProjectVersionModel as SpecBoxWebApiModelCommonProjectVersionModel } from '../../../../../models/SpecBox/WebApi/Model/Common/project-version-model';
import { AssertionsStatModel as SpecBoxWebApiModelStatAssertionsStatModel } from '../../../../../models/SpecBox/WebApi/Model/Stat/assertions-stat-model';
import { AutotestsStatModel as SpecBoxWebApiModelStatAutotestsStatModel } from '../../../../../models/SpecBox/WebApi/Model/Stat/autotests-stat-model';
export interface StatModel {
  assertions: Array<SpecBoxWebApiModelStatAssertionsStatModel>;
  autotests: Array<SpecBoxWebApiModelStatAutotestsStatModel>;
  project: SpecBoxWebApiModelCommonProjectVersionModel;
}

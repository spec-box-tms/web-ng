/* tslint:disable */
/* eslint-disable */
import { VersionModel as SpecBoxWebApiModelCommonVersionModel } from '../../../../../models/SpecBox/WebApi/Model/Common/version-model';
export interface ProjectModel {
  code: string;
  description?: string | null;
  repositoryUrl?: string | null;
  title: string;
  versions: Array<SpecBoxWebApiModelCommonVersionModel>;
}
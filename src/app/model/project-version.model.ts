import { VersionModel } from '../../api/models/SpecBox/WebApi/Model/Common/version-model';
import { toUndefined } from '../lib/model/to-undefined';

export interface ProjectVersion {
  version?: string;
  updatedAt: Date;
}

export function mapVersionModel({
  version,
  updatedAt,
}: VersionModel): ProjectVersion {
  return {
    version: toUndefined(version),
    updatedAt: new Date(updatedAt),
  };
}

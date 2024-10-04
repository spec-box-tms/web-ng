import { VersionModel } from '../../api/models/SpecBox/WebApi/Model/Common/version-model';
import { ProjectVersionIdent } from './ids/project-version-ident';

export interface ProjectVersion {
  version: ProjectVersionIdent;
  updatedAt: Date;
}

export function mapVersionModel({
  version,
  updatedAt,
}: VersionModel): ProjectVersion {
  return {
    version: ProjectVersionIdent(version),
    updatedAt: new Date(updatedAt),
  };
}

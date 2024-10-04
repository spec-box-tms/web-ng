import { ProjectResponse } from '../../api/models/SpecBox/WebApi/Model/Common/project-response';
import { toUndefined } from '../lib/model/to-undefined';
import { ProjectCode } from './ids/project.code';
import { mapVersionModel, ProjectVersion } from './project-version.model';

export interface Project {
  code: string;
  title: string;
  description?: string;
  repositoryUrl?: string;
  versions: ProjectVersion[];
}

export function mapProjectResponse({
  code,
  title,
  description,
  repositoryUrl,
  versions,
}: ProjectResponse): Project {
  return {
    code: ProjectCode(code),
    title,
    description: toUndefined(description),
    repositoryUrl: toUndefined(repositoryUrl),
    versions: versions.map(mapVersionModel),
  };
}

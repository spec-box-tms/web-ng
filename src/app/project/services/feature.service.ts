import { inject, Injectable } from '@angular/core';
import { Observable, shareReplay, switchMap } from 'rxjs';
import { ApiFeatureService } from '../../../api/services';
import { mapArray } from '../../lib/map-array';
import { ProjectVersionIdent } from '../../model/ids/project-version-ident';
import { ProjectCode } from '../../model/ids/project.code';
import { Feature, mapFeatureResponse } from '../model/feature.model';
import { ProjectContext } from '../project-context.service';
import { FeatureCode } from '../model/feature.code';
import { FeatureModel } from '../../../api/models/SpecBox/WebApi/Model/Project/feature-model';

@Injectable()
export class FeatureService {
  private readonly apiFeatureService = inject(ApiFeatureService);
  private readonly projectContext = inject(ProjectContext);

  features$ = this.projectContext.projectIdentity$.pipe(
    switchMap(({ code, version }) => this.list$(code, version)),
    shareReplay(1)
  );

  list$(
    projectCode: ProjectCode,
    version: ProjectVersionIdent
  ): Observable<Feature[]> {
    return this.apiFeatureService
      .listFeatures$Json({ projectCode, version })
      .pipe(mapArray(mapFeatureResponse));
  }

  get$(
    projectCode: ProjectCode,
    version: ProjectVersionIdent,
    featureCode: FeatureCode
  ): Observable<FeatureModel> {
    return this.apiFeatureService.getFeature$Json({
      projectCode,
      version,
      featureCode,
    });
  }
}

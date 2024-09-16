import { AccessTokenModel } from '../../../api/models/SpecBox/WebApi/Model/Auth/access-token-model';

export interface TokenResponseModel {
  accessToken: string;
  refreshToken: string;
}

export function mapTokenResponse({
  accessToken,
  refreshToken,
}: AccessTokenModel): TokenResponseModel {
  return {
    accessToken,
    refreshToken,
  };
}

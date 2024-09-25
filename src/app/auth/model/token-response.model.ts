import { AccessTokenResponse } from '../../../api/models/SpecBox/WebApi/Model/Auth/access-token-response';

export interface TokenResponseModel {
  accessToken: string;
  refreshToken: string;
}

export function mapTokenResponse({
  accessToken,
  refreshToken,
}: AccessTokenResponse): TokenResponseModel {
  return {
    accessToken,
    refreshToken,
  };
}

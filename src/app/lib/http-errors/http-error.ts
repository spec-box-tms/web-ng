import { HttpErrorResponse } from "@angular/common/http";
import { HttpBadRequest } from "./http-bad-request-details";
import { HttpConflictError } from "./http-conflict-error";
import { HttpNotFoundError } from "./http-not-found";

type HttpErrors = HttpBadRequest | HttpConflictError | HttpNotFoundError;

export class HttpError extends HttpErrorResponse {

  get knownError(): HttpErrors {
    return this.error;
  }

  constructor(error: HttpErrorResponse) {
    super({});
    Object.assign(this, error);
  }
}

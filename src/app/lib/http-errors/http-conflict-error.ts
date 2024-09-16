import { HttpBaseError } from "./http-base-error";

export interface HttpConflictError extends HttpBaseError {
  status: 401;
}
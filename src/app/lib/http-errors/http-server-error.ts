import { HttpBaseError } from './http-base-error';

export interface HttpServerError extends HttpBaseError {
  status: 500;
}

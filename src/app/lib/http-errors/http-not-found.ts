import { HttpBaseError } from './http-base-error';

export interface HttpNotFoundError extends HttpBaseError {
  status: 404;
}

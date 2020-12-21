import { oak } from '../../deps.ts';

export function NotFoundHandler(context: oak.Context) {
  context.response.status = 404;
  context.response.body = 'Not found :(';
}

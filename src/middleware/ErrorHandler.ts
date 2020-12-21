import { oak } from '../../deps.ts';

export async function ErrorHandler(
  context: oak.Context, next: () => Promise<void>
) {
  try {
    await next();
  } catch (error) {
    context.response.status = error.status;
    context.response.body = error.message;
  }
}

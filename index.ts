import { oak, signal } from './deps.ts';

const { Application, Router } = oak;

const app = new Application();
const router = new Router();

// Listen on port 8080
app
  .use(
    router.routes(),
    (context) => {
      context.response.status = 404;
      context.response.body = 'Not found';
    }
  )
  .listen({
    port: 8080
  });

// Handle POSIX signals
const sig = signal.signal(
  Deno.Signal.SIGUSR1,
  Deno.Signal.SIGINT
);

for await (const _ of sig) {
  console.log('Quitting, goodbye! ~Kees');
  Deno.exit(0);
}

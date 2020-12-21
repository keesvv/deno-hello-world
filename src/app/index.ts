import { oak, signal } from '../../deps.ts';
import { NotFoundHandler } from '../middleware/index.ts';
import { router } from '../router/index.ts';

// Instantiate an application
const app = new oak.Application();

// Listen on port 8080
app
  .use(
    router.routes(),
    NotFoundHandler
  )
  .listen({ port: 8080 });

// Handle POSIX signals
const sig = signal.signal(
  Deno.Signal.SIGUSR1,
  Deno.Signal.SIGINT
);

for await (const _ of sig) {
  console.log('Quitting, goodbye! ~Kees');
  Deno.exit(0);
}

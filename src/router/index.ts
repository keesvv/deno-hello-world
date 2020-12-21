import { oak, redis } from '../../deps.ts';

const router = new oak.Router();
const redisClient = await redis.connect({
  hostname: 'localhost'
});

router.get('/', (context) => {
  context.response.body = 'Hello, world!';
});

router
  .get('/store', async (context) => {
    const key = context.request.url.searchParams.get('key');
    if (!key) {
      throw new oak.httpErrors.BadRequest();
    }

    const value = await redisClient.hget('hello-world', key);
    if (!value) {
      throw new oak.httpErrors.NotFound();
    }

    context.response.body = value;
  })
  .put('/store', async (context) => {
    const body = await context.request.body({ type: 'json' }).value;

    await redisClient.hset(
      'hello-world',
      [body.key, body.value]
    );

    context.response.status = 200;
  });

export { router };

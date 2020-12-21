import { oak } from '../../deps.ts';

const router = new oak.Router();

router.get('/', (context) => {
  context.response.body = 'Hello, world!';
});

export { router };

import { Configuration, OpenAIApi } from 'openai';
import { env } from '~/env.mjs';

const configuration = new Configuration({
  apiKey: env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default openai
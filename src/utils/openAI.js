// import OpenAI from 'openai';
// import { GPT_API_KEY } from './constants';

// const client = new OpenAI({
//   apiKey: GPT_API_KEY, // This is the default and can be omitted
//   dangerouslyAllowBrowser: true
// });

// export default client

import {GoogleGenAI} from '@google/genai';

const ai = new GoogleGenAI({apiKey: process.env.REACT_GEMINI_KEY});

export default ai;
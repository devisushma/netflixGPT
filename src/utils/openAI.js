// import OpenAI from 'openai';
// import { GPT_API_KEY } from './constants';

// const client = new OpenAI({
//   apiKey: GPT_API_KEY, // This is the default and can be omitted
//   dangerouslyAllowBrowser: true
// });

// export default client

import {GoogleGenAI} from '@google/genai';
import {GEMINI_KEY} from "./constants"

const ai = new GoogleGenAI({apiKey: GEMINI_KEY});

export default ai;
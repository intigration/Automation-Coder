import { writable } from 'svelte/store';
import type { MessageLog } from '$/types/chat.types';
import { prompts } from '$/data/prompts';

const tabs = ['Refactor', 'Update', 'Explain', 'Generate'] as const;
const models= ['llama3']
const initialMessages: MessageLog = tabs.reduce((acc, tab) => {
  acc[tab] = [{ role: 'system', content: prompts[tab], model:models[0] }];
  return acc;
}, {} as MessageLog);

export const messageLog = writable<MessageLog>(initialMessages);

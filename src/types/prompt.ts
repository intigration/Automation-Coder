import { OllamaModel,OllamaModelID } from './ollama';

export interface Prompt {
  id: string;
  name: string;
  description: string;
  content: string;
  model: OllamaModelID.DEFAULTMODEL;
  folderId: string | null;
}

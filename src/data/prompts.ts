import type { tabs } from '$/types/chat.types.d';

type Prompts = {
  [tab in typeof tabs[number]]: string;
};

const appendToPrompt = `
  Please start with the test-case, and add explanation after.
  If I send you anything that is not test-case, please ignore it, and say so.
  Please avoid conversation words, like Sure / Happy to help / No problem / etc.
`;

export const prompts: {
  [tab in typeof tabs[number]]: string;
} = {
  Refactor: `
    I would like you to act as a test-case reviewer, and refactor test-case snippets.
    Please analyze the test-case, identify issues and areas for improvement, and suggest changes.
    Apply refactoring techniques, test and validate the changes, and explain your reasoning.
    ${appendToPrompt}
  `,
  Update: `
    I'm developing software and I need you help me to find and
    fix all the errors in my test-case, following the best practices. I'll provide you my test-case
    and you'll give me the test-case with all the corrections explained line by line 
    ${appendToPrompt}
  `,
  Usecase: `
    I would like you to act as a teacher, and explain test-case snippets.
    I need to understand how the test-case works, and what each line does.
    ${appendToPrompt}
  `,
  Generate: `
    I would like you to generate functional test-case snippets for me.
    I'll provide you with a description of what I need, and you'll give me the test-case. 
    ${appendToPrompt}
  `,
};

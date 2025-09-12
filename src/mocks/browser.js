// src/mocks/browser.js
import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

// This creates the worker with your handlers
export const worker = setupWorker(...handlers);

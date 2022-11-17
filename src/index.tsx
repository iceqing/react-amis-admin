/**
 * @file entry of this example.
 */
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

(self as any).MonacoEnvironment = {
    getWorkerUrl: function (moduleId:any, label:string) {
      if (label === 'json') {
        return '/json.worker.bundle.js';
      }
      if (label === 'css') {
        return '/css.worker.bundle.js';
      }
      if (label === 'html') {
        return '/html.worker.bundle.js';
      }
      if (label === 'typescript' || label === 'javascript') {
        return '/ts.worker.bundle.js';
      }
      return '/editor.worker.bundle.js';
    }
  }


createRoot(document.getElementById('root')!).render(
  <App />
);

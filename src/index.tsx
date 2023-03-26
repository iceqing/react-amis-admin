import * as React from 'react';
import { render } from 'react-dom';
import App from './App';

self.MonacoEnvironment = {
  getWorker: async function (workerId, label) {
    switch (label) {
      case 'json': {
        // @ts-ignore
        const jsonWorker = (await import('monaco-editor/esm/vs/language/json/json.worker?worker')).default;
        return jsonWorker();
      }
      case 'css':
      case 'scss':
      case 'less': {
        // @ts-ignore
        const cssWorker = (await import("monaco-editor/esm/vs/language/css/css.worker?worker")).default;
        return cssWorker();
      }
      case 'html':
        {
          // @ts-ignore
          const htmlWorker = (await import('monaco-editor/esm/vs/language/html/html.worker?worker')).default;
          return htmlWorker();
        }
      case 'typescript':
      case 'javascript': {
        // @ts-ignore
        const tsWorker = (await import('monaco-editor/esm/vs/language/typescript/ts.worker?worker')).default;
        return tsWorker();
      }
      default: {
        // @ts-ignore
        const EditorWorker = (await import('monaco-editor/esm/vs/editor/editor.worker?worker')).default;
        return EditorWorker();
      }
    }
  }
};


render(
  <App />, document.getElementById('root')!
);

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";
import viteEasyMock from "vite-easy-mock";
import visualizer from 'rollup-plugin-visualizer'
export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [
                    ["@babel/plugin-proposal-decorators", { legacy: true }],
                    ["@babel/plugin-proposal-class-properties", { loose: true }],
                ],
            },
        }),
        viteEasyMock(),
        reactRefresh(),
        visualizer({ open: true })
    ],
    base: "/",
    resolve: {
        extensions: [".js", ".ts", ".tsx", ".json"],
        alias: [{ find: "@", replacement: "/src/" }],
    },
    optimizeDeps: {
        esbuildOptions: {
            plugins: [],
        },
        include: [
            `monaco-editor/esm/vs/language/json/json.worker`,
            `monaco-editor/esm/vs/language/css/css.worker`,
            `monaco-editor/esm/vs/language/html/html.worker`,
            `monaco-editor/esm/vs/language/typescript/ts.worker`,
            `monaco-editor/esm/vs/editor/editor.worker`
        ],
    },
    server: {
        port: 4000,
        host: "localhost",
        open: "/",
    },
});

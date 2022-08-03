import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh'
import { viteMockServe } from "vite-plugin-mock";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
        babel: {
            plugins: [
                ["@babel/plugin-proposal-decorators", {legacy: true}],
                ["@babel/plugin-proposal-class-properties", {loose: true}],
            ],
        }
    }), reactRefresh(),
        viteMockServe({
                mockPath: 'mock',
                localEnabled: true,
        }
        )
    ],
    base: '/',
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.json'],
        alias: [{find: '@', replacement: '/src/'}],
    },
    optimizeDeps:{
        esbuildOptions:{
            plugins:[
            ]
        }
    },
    server: {
        port: 4000,
        host: 'localhost',
        open: '/',
    }
});
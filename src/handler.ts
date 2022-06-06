import express from 'express';
import fs from 'fs';

export type Route = {
    method?: 'get' | 'post' | 'put' | 'delete';
    run: (req: express.Request, res: express.Response) => void,
}

class Handler {
    constructor(private app: express.Application) {}

    listen() {
        const files = this.getFiles(`${__dirname}/routes`);
        files.forEach(async (file) => {
            if (!(file.endsWith('.ts') || file.endsWith('.js'))) return;
            const route: Route | Route[] | undefined = (await import(file)).default;
            if (route == undefined) return;

            const path = `/${file.split(__dirname)[1].slice(1).split('/').splice(1).join('/')
                .slice(0, -3)}`;

            if (Array.isArray(route)) return route.forEach((r) => this.app[r.method ? r.method : 'get'](path == '/index' ? '/' : path, r.run));
            this.app[route.method ? route.method : 'get'](path == '/index' ? '/' : path, route.run);
        });
    }

    private getFiles(dir: string): string[] {
        const files = [];
        const list = fs.readdirSync(dir);
        list.forEach((file) => {
            file = `${dir}/${file}`;
            const stat = fs.statSync(file);
            if (stat && stat.isDirectory()) {
                files.push(...this.getFiles(file));
            } else { files.push(file); }
        });
        return files;
    }
}

export default Handler;

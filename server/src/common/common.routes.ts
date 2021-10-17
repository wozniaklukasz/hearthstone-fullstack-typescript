import express from 'express';

export abstract class CommonRoutes {
    app: express.Application;

    protected constructor(app: express.Application) {
        this.app = app;
        this.configureRoutes();
    }

    abstract configureRoutes(): void;
}

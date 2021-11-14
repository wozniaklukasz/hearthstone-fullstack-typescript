import { Application } from 'express';

export abstract class CommonRoutes<T> {
  app: Application;
  controller: T;

  protected constructor(app: Application, controller: T) {
    this.app = app;
    this.controller = controller;
    this.configureRoutes();
  }

  abstract configureRoutes(): void;
}

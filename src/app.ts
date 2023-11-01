import express, { Application } from "express";
import ServiceNoteRoute from "./infra/routes/service-note";

export default class App {
  public server: Application;

  constructor() {
    this.server = express();
    this.bootstrappingMiddlewares();
  }

  private bootstrappingMiddlewares() {
    this.server.use(express.json());
    this.server.use(new ServiceNoteRoute().routes);
  }
}

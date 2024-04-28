import express, { Application } from "express";
import ServiceNoteRoute from "./infra/routes/service-note.route";
import "dotenv/config";
//import mongoose from "mongoose";

export default class App {
  public server: Application;

  constructor() {
    //const strCon: string = process.env.MONGOOSE_URL ?? "";
    this.server = express();
    this.bootstrappingMiddlewares();
    // mongoose.connect(strCon);
  }

  private bootstrappingMiddlewares() {
    this.server.use(express.json());
    this.server.use(new ServiceNoteRoute().routes);
  }
}

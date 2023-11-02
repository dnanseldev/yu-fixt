import { Router } from "express";
import ServiceNoteController from "../controllers/service-note";
import "dotenv/config";

const API_URL = process.env.BASE_API_URL;

export default class ServiceNoteRoute {
  private route: Router;
  private serviceNoteController = new ServiceNoteController();

  constructor() {
    this.route = Router();

    this.route.get("/", this.serviceNoteController.home);
    this.route.get(
      `${API_URL}/s_notes`,
      this.serviceNoteController.getAllNotes
    );
    this.route.get(
      `${API_URL}/s_notes/:id`,
      this.serviceNoteController.getNoteById
    );
    this.route.post(
      `${API_URL}/s_notes`,
      this.serviceNoteController.addNewNote
    );
    this.route.put(`${API_URL}/s_notes`, this.serviceNoteController.updateNote);
    this.route.patch(
      `${API_URL}/s_notes`,
      this.serviceNoteController.updateNoteById
    );
  }

  public get routes(): Router {
    return this.route;
  }
}

import { Request, Response } from "express";

export default class ServiceNoteController {
  private templateModel(req: Request, res: Response) {
    res.status(200).json({
      status: "sucess",
      //results: this.tours.length,
      data: {
        // tours: this.tours,
      },
    });
  }

  public home(req: Request, res: Response): void {
    const user = "Daniel Stonebuilt";
    res.status(200).send(`
      <div>
            <h1>HOME PAGE</h1>
            <p>Welcome ${user} lets build this project!</p>
      </div>
      `);
  }

  public getAllNotes(req: Request, res: Response): void {
    res.status(200).json({
      status: "success",
      data: {},
    });
  }

  public getNoteById(req: Request, res: Response): void {
    res.status(200).json({
      status: "success",
      data: {},
    });
  }

  public addNewNote(req: Request, res: Response): void {
    res.status(201).json({
      status: "success",
      data: {},
    });
  }

  public updateNote(req: Request, res: Response): void {
    res.status(200).json({
      status: "success",
      data: {},
    });
  }

  public updateNoteById(req: Request, res: Response): void {
    res.status(200).json({
      status: "success",
      data: {},
    });
  }
}

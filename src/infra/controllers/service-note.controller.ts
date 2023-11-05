import { Request, Response } from "express";
import { ServiceNoteDTO } from "../../domain/entities/service-note";
import MechanicUseCases from "../../application/use_cases/mechanic.usecase";
import { InMemoryServiceNoteRepository } from "../repositories/inmemory-service-note.repository";
import { Guid } from "../../domain/interfaces/utils";

export default class ServiceNoteController {
  //service_notes: ServiceNoteDTO[] = [];
  //repository: IServiceNoteRepository<ServiceNoteDTO>;
  mech_use_case: MechanicUseCases;

  constructor() {
    this.mech_use_case = new MechanicUseCases(
      new InMemoryServiceNoteRepository()
    );
  }

  templateModel = async (req: Request, res: Response): Promise<void> => {
    res.status(200).json({
      status: "sucess",
      //results: this.tours.length,
      data: {
        // tours: this.tours,
      },
    });
  };

  addNewNote = async (req: Request, res: Response): Promise<void> => {
    const new_service_note = req.body as ServiceNoteDTO;

    //const str = this.mech_use_case.helloTest();
    // console.log(await str);
    await this.mech_use_case.SaveEntity(new_service_note);

    console.log(new_service_note);
    res.status(201).json({
      status: "success",
      data: {
        service_note: new_service_note,
      },
    });
  };

  home = async (req: Request, res: Response): Promise<void> => {
    const user = "Daniel Stonebuilt";
    res.status(200).send(`
      <div>
            <h1>HOME PAGE</h1>
            <p>Welcome ${user} lets build this project!</p>
      </div>
      `);
  };

  getAllNotes = async (req: Request, res: Response): Promise<void> => {
    const service_notes = await this.mech_use_case.getAllEntities();
    console.log(service_notes);
    res.status(200).json({
      status: "success",
      result: service_notes.length,
      data: {
        sn: service_notes,
      },
    });
  };

  getNoteById = async (req: Request, res: Response): Promise<void> => {
    console.log(req.params);
    const ID: Guid = {
      value: req.params.id,
    };

    const service_note = await this.mech_use_case.getEntityById(ID);

    res.status(200).json({
      status: "success",
      data: {
        sn: service_note,
      },
    });
  };

  updateNote = async (req: Request, res: Response): Promise<void> => {
    res.status(200).json({
      status: "success",
      data: {},
    });
  };

  updateNoteById = async (req: Request, res: Response): Promise<void> => {
    res.status(200).json({
      status: "success",
      data: {},
    });
  };
}

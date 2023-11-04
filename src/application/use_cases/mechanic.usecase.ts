import { ServiceNoteDTO } from "../../domain/entities/service-note";
import ICommumRepository from "../interfaces/basic.repository";

export default class MechanicUseCases {
  //service_note: ServiceNoteDTO;
  private repository: ICommumRepository<unknown>;

  constructor(repository: ICommumRepository<unknown>) {
    this.repository = repository;
  }
  /*
  async saveServiceNote(service_note: ServiceNoteDTO): Promise<void> {
    this.repository.Create(service_note);
  }

  async getAllServiceNotes(): Promise<ServiceNoteDTO[]> {
    return this.repository.FindAll();
  }

  async helloTest(): Promise<string> {
    return Promise.resolve("Das ist ein test");
    //return "Das ist ein test";
  }
  */
  async getAllEntities(): Promise<unknown[]> {
    return this.repository.FindAll();
  }

  async SaveEntity(entity: unknown) {
    this.repository.Create(entity);
  }

  async helloTest(): Promise<string> {
    return Promise.resolve("Das ist ein test");
    //return "Das ist ein test";
  }
}

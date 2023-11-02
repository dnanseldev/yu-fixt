import { ServiceNoteDTO } from "../../domain/entities/service-note";
import { Guid } from "../../domain/interfaces/utils";

export interface IServiceNoteRepository<serviceNoteDTO> {
  Create(item: serviceNoteDTO): Promise<void>;
  Update(id: Guid, item: serviceNoteDTO): Promise<void>;
  Delete(id: Guid): Promise<void>;
  Find(item: serviceNoteDTO): Promise<serviceNoteDTO[]>;
  FindOne(id: Guid): Promise<serviceNoteDTO>;
}

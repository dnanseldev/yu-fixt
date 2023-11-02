import { IServiceNoteRepository } from "../../application/interfaces/service-note.repository";
import { ServiceNoteDTO } from "../../domain/entities/service-note";
import { Guid } from "../../domain/interfaces/utils";

export class InMemoryServiceNote
  implements IServiceNoteRepository<ServiceNoteDTO>
{
  serviceNotes: ServiceNoteDTO[] = [];

  async Create(item: ServiceNoteDTO): Promise<void> {
    this.serviceNotes.push(item);
  }
  async Update(id: Guid, item: ServiceNoteDTO): Promise<void> {
    this.serviceNotes.map((sn) => (sn.eID === id ? { ...sn, item } : sn));
  }
  async Delete(id: Guid): Promise<void> {
    const idx: number = this.serviceNotes.findIndex((sn) => sn.eID === id);
    if (idx !== -1) this.serviceNotes.slice(idx, 1);
  }
  async Find(item: ServiceNoteDTO): Promise<ServiceNoteDTO[]> {
    return this.serviceNotes.filter((sn) => sn.eID === item.eID);
  }
  async FindOne(id: Guid): Promise<ServiceNoteDTO> {
    return this.serviceNotes.find((sn) => sn.eID === id)!;
  }
}

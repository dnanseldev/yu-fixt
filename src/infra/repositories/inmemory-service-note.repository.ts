import ICommumRepository from "../../application/interfaces/basic.repository";
import { ServiceNoteDTO } from "../../domain/entities/service-note";
import { Guid } from "../../domain/interfaces/utils";

export class InMemoryServiceNoteRepository
  implements ICommumRepository<ServiceNoteDTO>
{
  serviceNotes: ServiceNoteDTO[] = [];

  async Create(item: ServiceNoteDTO) {
    this.serviceNotes.push(item);
  }

  async Update(id: Guid, item: ServiceNoteDTO) {
    this.serviceNotes.map((sn) => (sn.eID === id ? { ...sn, item } : sn));
  }

  async Delete(id: Guid) {
    const idx: number = this.serviceNotes.findIndex((sn) => sn.eID === id);
    if (idx !== -1) this.serviceNotes.slice(idx, 1);
  }

  async Find(item: ServiceNoteDTO) {
    return this.serviceNotes.filter((sn) => sn.eID === item.eID);
  }

  async FindOne(id: Guid): Promise<ServiceNoteDTO> {
    return this.serviceNotes.find((sn) => sn.eID.value === id.value)!;
  }

  async FindAll(): Promise<ServiceNoteDTO[]> {
    return this.serviceNotes;
  }
}

import { TEntity } from "../interfaces/base-entity";
import { Guid } from "../interfaces/utils";

export type ServiceNoteDTO = {
  eID: Guid;
  vehicleID: Guid;
  userID: Guid;
  eventDate: Date;
  serviceCatalog: string[];
  description: string;
  sponsored: boolean;
};

export class ServiceNote extends TEntity {
  readonly is_valid_state: boolean = false;
  constructor(readonly serviceNote: ServiceNoteDTO) {
    super();
    this.serviceNote = serviceNote;
  }

  get getServiceNote() {
    return this.serviceNote;
  }
}

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

export class ServiceNote {}

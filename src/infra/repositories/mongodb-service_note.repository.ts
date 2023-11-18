import ICommumRepository from "../../application/interfaces/basic.repository";
import { Guid } from "../../domain/interfaces/utils";
import { ServiceNoteDTO } from "../../domain/entities/service-note";
import { ObjectId } from "bson";

export default class MongoDBServiceNoteRepository
  implements ICommumRepository<ServiceNoteDTO>
{
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  /*
  type TUser {
  username String
  email String
  password String
  sys_id Int[]
  current_id Int
}
   */

  async Create(item: ServiceNoteDTO): Promise<void> {
    const time_elapsed = Date.now();
    const today = new Date(time_elapsed);
    const create = await this.prisma.cliente.create({
      data: {
        eID: new ObjectId().toString(),
        name: "Daniel Stonebuilt",
        age: 39,
      },
    });

    console.log(create);
  }
  Update(id: Guid, item: ServiceNoteDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }
  Delete(id: Guid): Promise<void> {
    throw new Error("Method not implemented.");
  }
  Find(item: ServiceNoteDTO): Promise<ServiceNoteDTO[]> {
    throw new Error("Method not implemented.");
  }
  FindOne(id: Guid): Promise<ServiceNoteDTO> {
    throw new Error("Method not implemented.");
  }
  FindAll(): Promise<ServiceNoteDTO[]> {
    throw new Error("Method not implemented.");
  }
}

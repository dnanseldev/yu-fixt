import { Guid } from "../../domain/interfaces/utils";

export default interface ICommumRepository<T> {
  Create(item: T): Promise<void>;
  Update(id: Guid, item: T): Promise<void>;
  Delete(id: Guid): Promise<void>;
  Find(item: T): Promise<T[]>;
  FindOne(id: Guid): Promise<T>;
  FindAll(): Promise<T[]>;
}

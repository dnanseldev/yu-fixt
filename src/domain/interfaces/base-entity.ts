export abstract class TEntity {
  protected ID: unknown;

  get EntityID() {
    return this.ID;
  }
}

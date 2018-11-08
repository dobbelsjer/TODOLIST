export class Task {
  constructor(
    public id?: number,
    public ownerId?: number,
    public content?: string,
    public done?: boolean
  ) {}
}

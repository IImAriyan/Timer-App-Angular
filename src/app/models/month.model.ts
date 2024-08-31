export class Month {
  id: number;
  name: string;
  daysNumber : number;
  constructor(id: number = 0, name: string = "", daysNumber: number = 0) {
    this.id = id;
    this.name = name;
    this.daysNumber = daysNumber;
  }
}

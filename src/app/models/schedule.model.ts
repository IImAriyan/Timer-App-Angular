export class Schedule {
  id: number
  forDate: Date;
  title: string;
  timeStart: string;
  timeEnd: string;
  y:number;
  constructor(id: number, forDate: Date, title: string, timeStart: string, timeEnd: string, y:number) {
    this.id = id;
    this.forDate = forDate;
    this.title = title;
    this.timeStart = timeStart;
    this.timeEnd = timeEnd;
    this.y = y;
  }
}

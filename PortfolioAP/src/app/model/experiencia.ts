export class Experiencia {
  id? : number;
  nombreXP : string;
  descripXP : string;

  constructor(nombreXP: string, descripXP: string){
    this.nombreXP = nombreXP;
    this.descripXP = descripXP;
  }
}

export class GradModel {

  constructor(public name: string,
              public course: string,
              private _id: string, 
              public email: string,
              public github:string,
              public linkedin:string,
              public facebook:string,
              public gallery:string,
              public details:string,
              public moto:string
              ) {}

  get id() {
    return this._id;
  }
  getImgUrlAfter() {
     return `public/img/grad/${this.name}/after.png`
}
  getImgUrlBefore() {
  return `public/img/grad/${this.name}/before.png`
  }
}

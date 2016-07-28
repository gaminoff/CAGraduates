export class GradModel {

  constructor(public name: string,
              public course: string,
              private _id: string, 
              public email: string,
              public gitHub:string,
              public linked:string,
              public facebook:string,
              public galery:string,
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

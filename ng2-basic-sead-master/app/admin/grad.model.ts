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
              public moto:string,
              private imgUrl:string
              ) {}

  get id() {
    return this._id;
  }
  getImgUrlAfter() {
     return this.imgUrl;
}
  getImgUrlBefore() {
  return this.imgUrl;
  }
}

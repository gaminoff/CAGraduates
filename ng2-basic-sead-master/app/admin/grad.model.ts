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
              private imgBeforeUrl:string,
              private imgAfterUrl:string
              ) {}

  get id() {
    return this._id;
  }
  getImgUrlAfter() {
    // console.log('getting img url: ', this.imgUrl);
     return this.imgAfterUrl;
}
  getImgUrlBefore() {
  return this.imgBeforeUrl;
  }
}

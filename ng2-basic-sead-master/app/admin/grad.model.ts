export class GradModel {

  constructor(public name: string, public course: string, private _id: string) {}

  get id() {
    return this._id;
  }
  getImgUrl() {
    return `public/img/grad/${this.name}.png`;
  }
}

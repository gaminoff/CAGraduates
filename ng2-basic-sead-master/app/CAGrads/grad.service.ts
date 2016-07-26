import { Injectable } from '@angular/core';

const testGrad = {name: 'Shuki'}


@Injectable()
export class GradService {


    constructor() { }

    get(id : string) {
        return Promise.resolve(testGrad);
    }



}
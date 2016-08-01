import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {GradModel} from './grad.model'; 

@Injectable()
export class GradService {

  private baseUrl = 'http://localhost:3003/data/grad/';

  constructor(private http: Http) {}

  public get url() {
      return this.baseUrl;
  }

  // query (GETs a list)
  query(): Promise<GradModel[]> {

    let prmGrads = this.http.get(this.baseUrl)
      .toPromise()
      .then(res => {
        const jsonGrads = res.json();
        return jsonGrads.map((jsonGrad : any) =>
          new GradModel(jsonGrad.name,
                        jsonGrad.course,
                        jsonGrad._id,
                        jsonGrad.email,
                        jsonGrad.github,
                        jsonGrad.linkedin,
                        jsonGrad.facebook,
                        jsonGrad.gallery,
                        jsonGrad.details,
                        jsonGrad.moto,
                        jsonGrad.imgBeforeUrl,
	                      jsonGrad.imgAfterUrl
        ))
      });

    prmGrads.catch(err => {
      console.log('GradService::query - Problem talking to server');
    });

    return prmGrads;
  }

  // get (GETs a single)
  get(id: string) : Promise<GradModel> {
    let prmGrad = this.http.get(this.baseUrl + id)
      .toPromise()
      .then(res => {
        const jsonGrad = res.json();
        return new GradModel(
                        jsonGrad.name,
                        jsonGrad.course,
                        jsonGrad._id,
                        jsonGrad.email,
                        jsonGrad.github,
                        jsonGrad.linkedin,
                        jsonGrad.facebook,
                        jsonGrad.gallery,
                        jsonGrad.details,
                        jsonGrad.moto,
                        jsonGrad.imgBeforeUrl,
	                      jsonGrad.imgAfterUrl
                        );
      });

    prmGrad.catch(err => {
      console.log('GradService::get - Problem talking to server');
    });
    return prmGrad;

  }

  // DELETE 
  remove(id: string) : Promise<GradModel[]> {
    let prmGrad = this.http.delete(this.baseUrl + id)
      .toPromise()
      .then(res => {
        return this.query();
      });

    prmGrad.catch(err => {
      console.log('GradService::remove - Problem talking to server', err);
    });
    return prmGrad;
  }

  // save - Adds (POST) or update (PUT)  
  save(gradData: any, id?: string) : Promise<GradModel>{

    let response : any;
    let prmGrad : Promise<GradModel>;
    console.log('gradData in gradService: ', gradData);
    console.log('gradData ID in gradService: ', id);
    if (id) {
      const url = this.baseUrl + id;
      response = this.http.put(url, gradData)
    } else {
	    const url = this.baseUrl;
       response = this.http.post(url, gradData)
    }

    prmGrad = response.toPromise()
      .then((res : any) => {
          const jsonGrad = res.json();
          return new GradModel(
                        jsonGrad.name,
                        jsonGrad.course,
                        jsonGrad._id,
                        jsonGrad.email,
                        jsonGrad.github,
                        jsonGrad.linkedin,
                        jsonGrad.facebook,
                        jsonGrad.gallery,
                        jsonGrad.details,
                        jsonGrad.moto,
                        jsonGrad.imgBeforeUrl,
	                      jsonGrad.imgAfterUrl
                        );
      });

    prmGrad.catch(err => {
      console.log('GradService::save - Problem talking to server', err);
    });
    return prmGrad;
  }
}


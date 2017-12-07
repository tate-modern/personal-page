import { Injectable } from '@angular/core';
import {
    Headers,
    Http,
    RequestOptions,
    Response,
    URLSearchParams,
} from '@angular/http';

import { each } from 'lodash';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class HttpService {

    constructor(public http: Http) {}

    getPromise(endpoint: string) {
        return this.http.get(endpoint).toPromise();
    }

    get(endpoint: string, params?: any) {
        let req;
        if (params) {
            const reqParams = this.formatParams(params);
            req = this.http.get(endpoint, { search: reqParams });
        } else {
            req = this.http.get(endpoint);
        }

        return req;
    }

    post(endpoint: string, params = {}) {
        const req = this.http.post(endpoint, params);
        return req.catch(this.handleError);
    }

    postFile( endpoint: string, file: any, headers: any ) {
        const formData = new FormData();
        formData.append('file', file);

        const options = new RequestOptions({
            headers: new Headers(headers),
            withCredentials: true,
        });

        return this.http
                   .post(endpoint, formData, options)
                   .catch(this.handleError);
    }

    put(endpoint: string, params = {}) {
        const req = this.http.put(endpoint, params);
        return req.map(this.extractData).catch(this.handleError);
    }

    delete(endpoint: string, id: string) {
        const req = this.http.delete(`${endpoint}/${id}`);
        return req.map(this.extractData).catch(this.handleError);
    }

    formatParams(params) {
        const resultParams: URLSearchParams = new URLSearchParams();
        each(params, function(val, key){
            resultParams.set(key, val);
        });

        return resultParams;
    }

    public extractData(res: Response) {
        const body = res.json();
        return body.rows || body || [];
    }

    handleError (error: any) {
        let errMsg;
        if (error.message) {
            errMsg = error.message;
        } else if (error.status) {
            errMsg = `${error.status} - ${error.statusText}`;
        } else {
            errMsg = 'Server error';
        }

        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { HttpService } from './http.service';
import { FeedbackConfig } from './feedback.constant';

@Injectable()
export class FeedbackService extends HttpService {

    private config = {
        email: FeedbackConfig.email,
        version: FeedbackConfig.version,
        feedbackTypes: FeedbackConfig.types,
    };

    constructor(
        public http: Http,
        private httpService: HttpService,
    ) {
        super(http);
    }

    getTypes() {
        return this.config.feedbackTypes;
    }

    postFeedback(endpoint: string, data: Object, userName: string): Observable<any> {
        data = Object.assign(data, {
            userName,
            destination: this.config.email,
            version: this.config.version,
        });

        return this.httpService.post(endpoint, data);
    }
}

import { Component, EventEmitter, Input, ViewEncapsulation } from '@angular/core';
import { FeedbackService } from './feedback.service';
import { fadeInAnimation } from '../../_animations/index';

@Component({
    selector: 'component-one',
    templateUrl: './component-one.template.html',
    animations: [fadeInAnimation],
    // styleUrls: ['./feedback.styles.scss'],
    outputs: ['feedbackToggle'],
    host: { '[@fadeInAnimation]': '' },
    encapsulation: ViewEncapsulation.None
})

export class ComponentOne {
    @Input()
    set feedbackOpened(opened: boolean) {
        this._feedbackOpened = opened;
        if (!this._feedbackOpened) {
            this.isSubmitted = false;
        }
    }
    get feedbackOpened() {
        return this._feedbackOpened;
    }

    @Input()
    set feedbackEndpoint(feedbackEndpoint: string) {
        this.endpoint = `${feedbackEndpoint}/email`;
    }
    get feedbackEndpoint() {
        return this.endpoint;
    }

    @Input() feedbackUserName: string;
    @Input() helpCenterUrl: string = 'http://help-center.kargo.com/Default.htm';
    @Input() submitCallback: Function;

    public isSubmitted = false;
    public feedbackToggle = new EventEmitter();

    private _feedbackOpened = false;
    private feedbackBody: string = '';
    private feedbackType;
    private feedbackTypes: Array<any>;
    private endpoint: string;

    constructor(private feedbackService: FeedbackService) {}

    ngOnInit() {
        this.feedbackTypes = this.feedbackService.getTypes();
    }

    updateFeedbackType(type) {
        this.feedbackType = type.name;
    }

    toggleFeedback() {
        this._feedbackOpened = !this._feedbackOpened;
        this.feedbackToggle.emit({
            value: this._feedbackOpened,
        });
    }

    hasFeedbackType() {
        return !!this.feedbackType;
    }

    entriesValid() {
        return this.hasFeedbackType() && this.feedbackBody.trim().length > 0;
    }

    sendFeedback() {
        this.isSubmitted = true;

        const feedback = {
            type: this.feedbackType,
            feedbackBody: this.feedbackBody.trim(),
        };

        this.feedbackService
            .postFeedback(this.endpoint, feedback, this.feedbackUserName)
            .subscribe((res) => {
              this.resetFeedback();
              if (this.submitCallback) this.submitCallback();
            });
    }

    resetFeedback() {
        this.feedbackBody = '';
        this.feedbackType = '';
    }
}



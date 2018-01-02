import { Component, EventEmitter, Input, ViewEncapsulation } from '@angular/core';
import { fadeInAnimation } from '../../_animations/index';

@Component({
    selector: 'component-one',
    templateUrl: './component-one.template.html',
    animations: [fadeInAnimation],
    // styleUrls: ['./feedback.styles.scss'],
    host: { '[@fadeInAnimation]': '' },
    encapsulation: ViewEncapsulation.None
})

export class ComponentOne {
}



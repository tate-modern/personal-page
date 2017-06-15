import { Component, ViewEncapsulation } from '@angular/core';

import { fadeInAnimation } from '../../_animations/index';

@Component({
    selector: 'component-one',
    templateUrl: './component-one.template.html',
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' },
    // styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ComponentOne {
}

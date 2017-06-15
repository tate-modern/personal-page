import { Component, ViewEncapsulation } from '@angular/core';

import { fadeInAnimation } from '../../_animations/index';

@Component({
    selector: 'home',
    templateUrl: './home.template.html',
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' },
    styleUrls: ['./home.styles.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Home {
}

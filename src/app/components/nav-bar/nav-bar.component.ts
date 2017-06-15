import { Component, ViewEncapsulation } from '@angular/core';

import { fadeInAnimation } from '../../_animations/index';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.template.html',
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' },
    styleUrls: ['./nav-bar.styles.scss'],
})

export class NavBar {
}

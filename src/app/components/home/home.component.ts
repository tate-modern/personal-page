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

	setDate() {
		let firstYear = 2008;
		let currentYear = new Date().getFullYear();
		return currentYear - firstYear;
	}

}

import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInAnimation } from '../../_animations/index';

@Component({
    selector: 'intro',
    templateUrl: './intro.template.html',
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' },
    styleUrls: ['./intro.styles.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Intro {

    constructor ( private router: Router) {}

    navigateToHome() {
        this.router.navigate(['home']);
    }
}

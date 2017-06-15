import { Component, ViewEncapsulation } from '@angular/core';

import { fadeInAnimation } from '../../_animations/index';

@Component({
  selector: 'component-two',
  templateUrl: './component-two.template.html',
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' },
  // styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ComponentTwo {
}

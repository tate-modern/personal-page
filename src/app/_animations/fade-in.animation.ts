// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('fadeInAnimation', [
        transition(
            ':enter', [
              style({opacity: 0}),
              animate('0.5s 1s ease-in-out', style({opacity: 1}))
            ]
        ),
        transition(
            ':leave', [
              style({'opacity': 1}),
              animate('0.25s 0.25s ease-in-out', style({opacity: 0}))
            ]
        )
    ]);
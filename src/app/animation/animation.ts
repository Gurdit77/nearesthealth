import { animate, animateChild, query,  style, transition, trigger,group } from "@angular/animations";


export const slideInAnimation = 
    trigger('routeAnimations', [
      
        transition('* <=> AboutPage', [
          style({ position: 'relative' }),
          query(':enter, :leave', [
            style({
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex:'9',
              backgroundColor:'#fff',
              opacity:1,
              width: '100%'
            })
          ]),
          query(':enter', [
            style({  top: '30px',opacity:1 })
          ], {optional:true}),
          query(':leave', animateChild(), {optional:true}),
          group([
            query(':leave', [
              animate('200ms ease-out', style({ top: '30px',opacity:0 }))
            ], {optional:true}),
            query(':enter', [
              animate('300ms ease-out', style({ top: '0px',opacity:1 }))
            ])
          ]),
          query(':enter', animateChild()),
        ]),
        transition('* <=> HomePage', [
          style({ position: 'relative' }),
          query(':enter, :leave', [
            style({
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex:'9',
              backgroundColor:'#fff',
              opacity:1,
              width: '100%'
            })
          ]),
          query(':enter', [
            style({  top: '30px',opacity:1 })
          ]),
          query(':leave', animateChild(), {optional:true}),
          group([
            query(':leave', [
              animate('200ms ease-out', style({ top: '30px',opacity:0 }))
            ], {optional:true}),
            query(':enter', [
              animate('300ms ease-out', style({ top: '0px',opacity:1 }))
            ])
          ]),
          query(':enter', animateChild()),
        ]),
        transition('* <=> how', [
          style({ position: 'relative' }),
          query(':enter, :leave', [
            style({
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex:'9',
              backgroundColor:'#fff',
              opacity:1,
              width: '100%'
            })
          ]),
          query(':enter', [
            style({  top: '30px',opacity:1 })
          ]),
          query(':leave', animateChild(), {optional:true}),
          group([
            query(':leave', [
              animate('200ms ease-out', style({ top: '30px',opacity:0 }))
            ], {optional:true}),
            query(':enter', [
              animate('300ms ease-out', style({ top: '0px',opacity:1 }))
            ])
          ]),
          query(':enter', animateChild()),
        ]),
        transition('* <=> immune', [
          style({ position: 'relative' }),
          query(':enter, :leave', [
            style({
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex:'9',
              backgroundColor:'#fff',
              opacity:1,
              width: '100%'
            })
          ]),       
          query(':leave', animateChild(), {optional:true}),
          group([
            query(':leave', [
              animate('200ms ease-out', style({ top: '30px',opacity:0 }))
            ], {optional:true}),
            query(':enter', [
              animate('300ms ease-out', style({ top: '0px',opacity:1 }))
            ])
          ]),
          query(':enter', animateChild(), {optional:true}),
        ])
]);

import { trigger, transition, animate, keyframes, style, state } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

  animations: [
    trigger('dynamicText', [
      transition('* => *', [
        animate('2s ease-in-out', keyframes([
          style({opacity: 0, transform: 'scale(0.8)', offset: 0}),
          style({opacity: 1, transform: 'scale(1)', offset: 0.5}),
          style({opacity: 0, transform: 'scale(0.8)', offset: 1})
        ]))
      ])
    ]),
    trigger('scaleIn', [
      state('void', style({opacity: 0, transform: 'scale(0.8)'})),
      transition(':enter', [
        animate('1s 0.5s ease-out', style({opacity: 1, transform: 'scale(1)'}))
      ])
    ])
  ]

})
export class HomeComponent {

}

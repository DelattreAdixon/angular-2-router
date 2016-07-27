import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
    template:  `
        <div class="light-green padded">
            <p>
                <a [routerLink]="['/card/diamond']" routerLinkActive="disabled">Diamonds</a> | 
                <a [routerLink]="['/card/heart']" routerLinkActive="disabled">Hearts</a> |
                <a [routerLink]="['/card/club']" routerLinkActive="disabled">Clubs</a> |
                <a [routerLink]="['/card/spade']" routerLinkActive="disabled">Spades</a>
            </p>
            <div class="border not-padded">
                <router-outlet></router-outlet>
            </div>
        </div>`,
    styles: [`
        .light-green {background-color: #bdf5bd;}
        .darker-green {background-color: #90ee90;}
        .suit span {font-size: 40px;}
        .red {color: red;}`
    ],
    encapsulation: ViewEncapsulation.None,
    directives: [ROUTER_DIRECTIVES]
})
export class CardComponent {
}
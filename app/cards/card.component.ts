import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
    template:  `
        <div class="cards padded">
            <p>
                <a [routerLink]="['/card/diamond']">Diamond</a> | 
                <a [routerLink]="['/card/heart']">Heart</a> |
                <a [routerLink]="['/card/club']">Club</a> |
                <a [routerLink]="['/card/spade']">Spade</a>
            </p>
            <div class="border padded">
                <router-outlet></router-outlet>
            </div>
        </div>`,
    styles: [`
        .cards {background-color: #bdf5bd;}
        .suit span {font-size: 40px;}
        .red {color: red;}`
    ],
    encapsulation: ViewEncapsulation.None,
    directives: [ROUTER_DIRECTIVES]
})
export class CardComponent {
}
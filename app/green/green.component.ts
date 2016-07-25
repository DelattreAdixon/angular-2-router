import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    template:  `
        <div class="padded">
            <p>
                <a [routerLink]="['/green/star']">Star</a> | 
                <a [routerLink]="['/green/heart']">Heart</a>
            </p>
            <div class="border padded">
                <router-outlet></router-outlet>
            </div>
        </div>`,
    styles: [`div {background-color: #bdf5bd;}`],
    directives: [ROUTER_DIRECTIVES]
})
export class GreenComponent {
}
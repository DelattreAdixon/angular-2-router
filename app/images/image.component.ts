import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
    template:  `
        <div class="light-red padded">
            <p>
                <a [routerLink]="['/image/leela']" routerLinkActive="disabled">Leela</a> | 
                <a [routerLink]="['/image/fry']" routerLinkActive="disabled">Fry</a>
            </p>
            <div class="border not-padded">
                <router-outlet></router-outlet>
            </div>
        </div>`,
    styles: [`
        .light-red {background-color: #ffe6e6;}
        .darker-red {background-color: #ffcccc;}`
    ],
    encapsulation: ViewEncapsulation.None,
    directives: [ROUTER_DIRECTIVES]
})
export class ImageComponent {}
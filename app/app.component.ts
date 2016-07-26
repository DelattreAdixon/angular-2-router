import { Component, ViewEncapsulation } from '@angular/core';

import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
    selector: 'router-app',
    template:  `
        <div>
            <p>
                <a [routerLink]="['/card']">Cards</a> |
                <a [routerLink]="['/blue']">Blue</a>
            </p>
            <div class="border not-padded">
                <router-outlet></router-outlet>
            </div>    
        </div>`,
    styles: [`
        div {
            padding: 10px;
        }
        .not-padded {
            padding: 0;
        }
        .border {
            border: 1px solid #b3b3b3;
        }`],
    encapsulation: ViewEncapsulation.None,
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
}
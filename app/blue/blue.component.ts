import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    template:  `
        <div class="padded">
            <p>
                <a [routerLink]="['/blue/arrow']">Arrow</a> | 
                <a [routerLink]="['/blue/note']">Note</a>
            </p>
            <div class="border padded">
                <router-outlet></router-outlet>
            </div>
        </div>`,
    styles: ['div {background-color: #ceebfd;}'],
    directives: [ROUTER_DIRECTIVES]
})
export class BlueComponent {
}
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
    template:  `
        <div class="padded">
            <p>
                <a [routerLink]="['/size/small']">Small</a> | 
                <a [routerLink]="['/size/medium']">Medium</a> |
                <a [routerLink]="['/size/large']">Large</a>
            </p>
            <div class="border padded">
                <router-outlet></router-outlet>
            </div>
        </div>`,
    styles: ['div {background-color: #ceebfd;}'],
    directives: [ROUTER_DIRECTIVES]
})
export class SizeComponent {}
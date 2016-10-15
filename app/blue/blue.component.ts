import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    template:  `
        <div class="very-pale-blue padded">
            <p>
                <a [routerLink]="['/blue/light']" routerLinkActive="disabled">Light Blue</a> |
                <a [routerLink]="['/blue/medium']" routerLinkActive="disabled">Medium Blue</a> |
                <a [routerLink]="['/blue/dark']" routerLinkActive="disabled">Dark Blue</a>
            </p>
            <div class="border not-padded">
                <router-outlet></router-outlet>
            </div>
        </div>`,
    styles: ['.very-pale-blue {background-color: #e6e6ff;}'],
    encapsulation: ViewEncapsulation.None
})
export class BlueComponent {
}
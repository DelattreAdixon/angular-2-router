import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    template:  `
        <div class="very-pale-red padded">
            <p>
                <a [routerLink]="['/red/light']" routerLinkActive="disabled">Light Red</a> |
                <a [routerLink]="['/red/medium']" routerLinkActive="disabled">Medium Red</a> |
                <a [routerLink]="['/red/dark']" routerLinkActive="disabled">Dark Red</a>
            </p>
            <div class="border not-padded">
                <router-outlet></router-outlet>
            </div>
        </div>`,
    styles: ['.very-pale-red {background-color: #ffe6e6;}'],
    encapsulation: ViewEncapsulation.None
})
export class RedComponent {
}
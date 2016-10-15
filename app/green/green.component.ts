import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    template:  `
        <div class="very-pale-green padded">
            <h2>Green</h2>
            <p>
                <a [routerLink]="['/green/light']" routerLinkActive="disabled">Light Green</a> |
                <a [routerLink]="['/green/medium']" routerLinkActive="disabled">Medium Green</a> |
                <a [routerLink]="['/green/dark']" routerLinkActive="disabled">Dark Green</a>
            </p>
            <div class="border not-padded">
                <router-outlet></router-outlet>
            </div>
        </div>`,
    styles: ['.very-pale-green {background-color: #e6ffe6;}'],
    encapsulation: ViewEncapsulation.None
})
export class GreenComponent {
}
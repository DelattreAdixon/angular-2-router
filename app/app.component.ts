import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'router-app',
    template:  `
        <div>
            <p>
                <a [routerLink]="['/size']" routerLinkActive="disabled">Size</a> |
                <a [routerLink]="['/card']" routerLinkActive="disabled">Cards</a> |
                <a [routerLink]="['/image']" routerLinkActive="disabled">Image</a>
            </p>
            <div class="border not-padded">
                <router-outlet></router-outlet>
            </div>    
        </div>`,
    styles: [`
        div {padding: 10px;}
        .not-padded {padding: 0;}
        .border {border: 1px solid #b3b3b3;}
        .disabled {
            pointer-events: none; 
            cursor: default;
            color: #404040;
            text-decoration: none;
        }`
    ],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
}
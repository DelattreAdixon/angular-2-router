import {Component} from '@angular/core';

@Component({
    template: `
        <div>
            <h1>Diamonds</h1>
            <p class="suit">
                <span [innerHTML]="'&diams;'"></span>
                <span class="red" [innerHTML]="'&diams;'"></span>
            </p>
        </div>`
})
export class DiamondComponent {}
import {Component} from '@angular/core';

@Component({
    template: `
        <div class="darker-green">
            <h1>Diamonds</h1>
            <p class="suit">
                <span [innerHTML]="'&diams;'"></span>
                <span class="red" [innerHTML]="'&diams;'"></span>
            </p>
        </div>`
})
export class DiamondComponent {}
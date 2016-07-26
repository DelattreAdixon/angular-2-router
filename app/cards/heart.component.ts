import {Component} from '@angular/core';

@Component({
    template: `
        <div class="darker-green">
            <h1>Hearts</h1>
            <p class="suit">
                <span [innerHTML]="'&hearts;'"></span>
                <span class="red" [innerHTML]="'&hearts;'"></span>
            </p>    
        </div>`
})
export class HeartComponent {}
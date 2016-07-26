import {Component} from '@angular/core';

@Component({
    template: `
        <div>
            <h1>Clubs</h1>
            <p class="suit">
                <span [innerHTML]="'&clubs;'"></span>
                <span class="red" [innerHTML]="'&clubs;'"></span>
            </p>
        </div>`
})
export class ClubComponent {}
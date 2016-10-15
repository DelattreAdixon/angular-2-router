import {Component} from '@angular/core';

@Component({
    template: `
        <div class="dark-red">
            <h3>Dark</h3>
        </div>`,
    styles: ['.dark-red {background-color: DarkRed}']
})
export class DarkRedComponent {}
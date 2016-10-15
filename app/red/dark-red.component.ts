import {Component} from '@angular/core';

@Component({
    template: `
        <div class="dark-red">
            <h1>Dark</h1>
        </div>`,
    styles: ['.dark-red {background-color: DarkRed}']
})
export class DarkRedComponent {}
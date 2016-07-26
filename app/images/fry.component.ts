import { Component } from '@angular/core';

@Component({
    template: `
        <div class="darker-red">
            <h1>Philip J. Fry</h1>
            <img [src]="'http://apps.lishman.com/images/fry.jpg'" alt="Philip J. Fry">
        </div>`
})
export class FryComponent {}
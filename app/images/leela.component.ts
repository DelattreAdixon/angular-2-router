import { Component } from '@angular/core';

@Component({
    template: `
        <div class="darker-red">
            <h1>Turanga Leela</h1>
            <img [src]="'http://apps.lishman.com/images/leela.jpg'" alt="Turanga Leela">
        </div>`
})
export class LeelaComponent {}
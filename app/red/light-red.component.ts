import {Component} from '@angular/core';

@Component({
    template: `
        <div class="light-red">
            <h1>Light</h1>
        </div>`,
    styles: ['.light-red {background-color: #ff8080;}']
})
export class LightRedComponent {}
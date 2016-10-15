import {Component} from '@angular/core';

@Component({
    template: `
        <div class="light-red">
            <h3>Light</h3>
        </div>`,
    styles: ['.light-red {background-color: #ff8080;}']
})
export class LightRedComponent {}
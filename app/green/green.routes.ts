import { RouterConfig } from '@angular/router';

import { GreenComponent } from "./green.component";
import { StarComponent } from "./star.component";
import { HeartComponent } from "./heart.component";

export const GreenRoutes: RouterConfig = [
    {
        path: 'green',
        component: GreenComponent,
        children: [
            {path: '', component: HeartComponent},
            {path: 'heart', component: HeartComponent},
            {path: 'star', component: StarComponent}
        ]
    },
];
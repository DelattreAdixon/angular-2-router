import { Routes } from "@angular/router";

import { ImageComponent } from "./image.component";
import { LeelaComponent } from "./leela.component";
import { FryComponent } from "./fry.component";

export const ImageRoutes: Routes = [
    {
        path: 'image',
        component: ImageComponent,
        children: [
            {path: '', redirectTo: 'leela'},
            {path: 'leela', component: LeelaComponent},
            {path: 'fry', component: FryComponent}
        ]
    },
];
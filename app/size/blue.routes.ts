import { RouterConfig } from '@angular/router';

import { BlueComponent } from "./blue.component";
import { ArrowComponent } from "./arrow.component";
import { NoteComponent } from "./note.component";

export const BlueRoutes: RouterConfig = [
    {
        path: 'blue',
        component: BlueComponent,
        children: [
            {path: '', component: ArrowComponent},
            {path: 'arrow', component: ArrowComponent},
            {path: 'note', component: NoteComponent}
        ]
    },
];
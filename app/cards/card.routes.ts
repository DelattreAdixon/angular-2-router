import { RouterConfig } from '@angular/router';

import { CardComponent } from "./card.component";
import { DiamondComponent } from "./diamond.component";
import { HeartComponent } from "./heart.component";
import { ClubComponent } from "./club.component";
import { SpadeComponent } from "./spade.component";

export const CardRoutes: RouterConfig = [
    {
        path: 'card',
        component: CardComponent,
        children: [
            {path: '', redirectTo: 'diamond'},
            {path: 'diamond', component: DiamondComponent},
            {path: 'heart', component: HeartComponent},
            {path: 'club', component: ClubComponent},
            {path: 'spade', component: SpadeComponent}
        ]
    },
];
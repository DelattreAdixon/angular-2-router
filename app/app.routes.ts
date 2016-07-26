import { provideRouter, RouterConfig } from '@angular/router';

import { CardRoutes } from "./cards/card.routes";
import { BlueRoutes } from "./size/blue.routes";

export const routes: RouterConfig = [
    {path: '', redirectTo: '/cards', pathMatch: 'full'},
    ...CardRoutes,
    ...BlueRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
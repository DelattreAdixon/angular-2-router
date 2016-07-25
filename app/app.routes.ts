import { provideRouter, RouterConfig } from '@angular/router';

import { GreenRoutes } from "./green/green.routes";
import { BlueRoutes } from "./blue/blue.routes";

export const routes: RouterConfig = [
    {path: '', redirectTo: '/green', pathMatch: 'full'},
    ...GreenRoutes,
    ...BlueRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
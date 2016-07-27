import { provideRouter, RouterConfig } from '@angular/router';

import { CardRoutes } from "./cards/card.routes";
import { SizeRoutes } from "./size/size.routes";
import { ImageRoutes } from "./images/image.routes";

export const routes: RouterConfig = [
    {path: '', redirectTo: '/size/medium', pathMatch: 'full'},
    ...CardRoutes,
    ...SizeRoutes,
    ...ImageRoutes
];

export const appRouterProviders = [
    provideRouter(routes)
];
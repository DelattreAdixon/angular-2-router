import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardRoutes } from "./cards/card.routes";
import { SizeRoutes } from "./size/size.routes";
import { ImageRoutes } from "./images/image.routes";

export const routes: Routes = [
    {path: '', redirectTo: '/size/medium', pathMatch: 'full'},
    ...CardRoutes,
    ...SizeRoutes,
    ...ImageRoutes
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
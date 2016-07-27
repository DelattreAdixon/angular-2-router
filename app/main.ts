import { bootstrap } from '@angular/platform-browser-dynamic'
import { HashLocationStrategy, LocationStrategy} from "@angular/common";

import { AppComponent } from './app.component'
import { appRouterProviders } from './app.routes';

bootstrap(AppComponent, [
    appRouterProviders,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
]);

import {bootstrap} from '@angular/platform-browser-dynamic'
import {HTTP_PROVIDERS} from '@angular/http';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {ROUTER_PROVIDERS} from "@angular/router";
import {AppComponent} from './app.component'
import { APP_ROUTER_PROVIDERS } from './app.routes';

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
]);

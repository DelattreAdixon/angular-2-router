import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

import { AppComponent } from "./app.component";
import { routing } from "./app.routes";
import { CardComponentList } from "./cards/card.component-list";
import { ImageComponentList } from "./images/image.component-list";
import { SizeComponentList } from "./size/size.component-list";

@NgModule({
    imports:      [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        ...CardComponentList,
        ...ImageComponentList,
        ...SizeComponentList
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ]
})
export class AppModule { }
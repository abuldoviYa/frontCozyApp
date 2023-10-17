import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SiteMainComponent } from './layout/site-main/site-main.component';
import { SiteHeaderComponent } from './layout/site-header/site-header.component';
import { SiteFooterComponent } from './layout/site-footer/site-footer.component';
import { SiteHeaderTopMenuComponent } from './layout/site-header/site-header-top-menu/site-header-top-menu.component';
import { SiteHeaderMiddleComponent } from './layout/site-header/site-header-middle/site-header-middle.component';
import { SiteHeaderLowComponent } from './layout/site-header/site-header-low/site-header-low.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductCardComponent } from './product-card/product-card.component';
import {RouterOutlet} from "@angular/router";
import { SiteContentComponent } from './layout/site-content/site-content.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgOptimizedImage} from "@angular/common";
import { ProductPriceComponent } from './product-card/product-price/product-price.component';
import {ApiServiceService} from "./api-service.service";

@NgModule({
  declarations: [
    AppComponent,
    SiteMainComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    SiteHeaderTopMenuComponent,
    SiteHeaderMiddleComponent,
    SiteHeaderLowComponent,
    ProductCardComponent,
    SiteContentComponent,
    ProductPriceComponent,

  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    RouterOutlet,
    NgbModule,
    NgOptimizedImage,


  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

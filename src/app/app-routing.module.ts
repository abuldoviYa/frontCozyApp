import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SiteMainComponent} from "./layout/site-main/site-main.component";
import {ProductCardComponent} from "./product-card/product-card.component";
import {SiteContentComponent} from "./layout/site-content/site-content.component";

export const routes: Routes = [
  { path: '', component: SiteMainComponent,
    children: [
      { path: '', component: SiteContentComponent },
      { path: 'products', component: ProductCardComponent },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }

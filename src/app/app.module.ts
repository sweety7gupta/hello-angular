import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FoodMenuComponent } from './food-menu/food-menu.component';
import { FoodService } from './services/food.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		FoodMenuComponent,
		AppComponent,
	],
	imports: [
		BrowserModule,
    AppRoutingModule,
    HttpClientModule
	],
	providers: [FoodService],
	bootstrap: [AppComponent]
})
export class AppModule { }

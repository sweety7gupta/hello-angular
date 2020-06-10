import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service'

@Component({
	selector: 'app-food-menu',
	templateUrl: './food-menu.component.html',
	styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {
	foodItems = [];

	constructor( 
		private foodService: FoodService
	){

	}

	ngOnInit() {
		this.foodService.getFoodItems()
			.subscribe((response) => { 
				this.foodItems = response as any;
			});
	}
}

// http://www.mocky.io/v2/5ed527a13300003014f7a86d
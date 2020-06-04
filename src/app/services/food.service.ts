import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FoodService {
	constructor(
		private http: HttpClient
	) { }

	getFoodItems() {

	}
}

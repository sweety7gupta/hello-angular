import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class FoodService {
	constructor(
		private http: HttpClient
	) {}

	getFoodItems() {
		return this.http.get('http://www.mocky.io/v2/5ed527a13300003014f7a86d');
	}
}

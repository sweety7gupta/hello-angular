import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  namesDataFromApi = [];
  names = [];
  txtName;

  fetchData = () => {
    fetch('http://www.mocky.io/v2/5ecd12983200005700236666')
      .then(response => {
        response.json().then(data => {
          this.namesDataFromApi = this.names = data.names;
        });
      });
  }

  getClassName = (name) => {
    return name.length > 5 ? 'pass' : 'fail';
  }

  addName() {
    if (this.txtName) {
      this.names.push(this.txtName);
    }
  }

  updateTxtName($event) {
    this.txtName = $event.target.value;
  }

  filter($event) {
    const filterText = $event.target.value;
    const filteredNames = [];

    for (const name of this.namesDataFromApi) {
      if (name.toLowerCase().indexOf(filterText) > -1) {
        filteredNames.push(name);
      }
    }

    this.names = filteredNames;
  }
}

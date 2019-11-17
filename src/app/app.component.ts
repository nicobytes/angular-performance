import { Component, OnInit } from '@angular/core';

import { Employee } from './models/employee.model';
import { GeneratorService } from './generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  salesList: Employee[] = [];
  rndList: Employee[] = [];
  label: string;

  constructor(
    private generator: GeneratorService
  ) {}

  ngOnInit() {
    this.salesList = this.generator.generateList();
    this.rndList = this.generator.generateList();
  }

  add(list: Employee[], name: string) {
    list.unshift({
      name,
      rate: this.generator.generateNumber([20, 50])
    });
  }

  remove(list: Employee[], node: Employee) {
    list.splice(list.indexOf(node), 1);
  }
}

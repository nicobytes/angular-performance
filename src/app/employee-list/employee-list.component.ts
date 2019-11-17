import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Employee } from './../models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent implements OnInit {

  @Input() data: Employee[] = [];
  @Input() department: string;

  @Output() remove = new EventEmitter<Employee>();
  @Output() add = new EventEmitter<string>();

  input: FormControl = new FormControl('');

  constructor() {
  }

  ngOnInit() {
  }

  addEmployee(event: Event) {
    event.preventDefault();
    this.add.emit(this.input.value);
    this.input.setValue('');
  }

  calculate(num: number) {
    console.log('calculate', this.department);
    if (num > 0 && num <= 33) {
      return 'low';
    } else if (num > 33 && num <= 66) {
      return 'medium';
    } else if (num > 66) {
      return 'hight';
    }
  }

}

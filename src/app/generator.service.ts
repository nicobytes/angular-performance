import { Injectable } from '@angular/core';

import { Employee } from './models/employee.model';

const names = [
  'Nicolas',
  'Zulema',
  'Santiago',
  'Andrea',
  'Valentina',
  'Lucia',
  'Nancy',
  'Beto'
];

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor() { }

  generateList(): Employee[] {
    const list: Employee[] = [];
    for (let i = 0; i < 5; i += 1) {
      list.push({
        name: this.generateNames(names),
        rate: this.generateNumber([10, 100])
      });
    }
    return list;
  }

  generateNames(labels: string[]) {
    return labels[Math.floor(Math.random() * labels.length)];
  }

  generateNumber(numRange: [number, number]) {
    const diff = numRange[1] - numRange[0];
    return numRange[0] + Math.floor(Math.random() * diff);
  }
}

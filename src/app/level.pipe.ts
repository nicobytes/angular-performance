import { Pipe, PipeTransform } from '@angular/core';
import { memoize } from 'lodash';

const calcLevel = memoize((value: number) => {
  console.log('calc');
  if (value > 0 && value <= 33) {
    return 'low';
  } else if (value > 33 && value <= 66) {
    return 'medium';
  } else if (value > 66) {
    return 'hight';
  }
});

@Pipe({
  name: 'level'
})
export class LevelPipe implements PipeTransform {

  transform(value: number): string {
    console.log('level pipe', value);
    const rta = calcLevel(value);
    console.log('rta', rta);
    return rta;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'level'
})
export class LevelPipe implements PipeTransform {

  transform(value: number): string {
    console.log('level pipe', value);
    if (value > 0 && value <= 33) {
      return 'low';
    } else if (value > 33 && value <= 66) {
      return 'medium';
    } else if (value > 66) {
      return 'hight';
    }
  }

}

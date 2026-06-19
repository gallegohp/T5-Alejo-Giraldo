import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vocales',
  standalone: false
})
export class VocalesPipe implements PipeTransform {

  transform(value: string): string {
    return value
      .replace(/(a)/g, "@")
      .replace(/(e)/g, "3")
      .replace(/(i)/g, "1")
      .replace(/(o)/g, "0")
      .replace(/(u)/g, "5");
  }

}

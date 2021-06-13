import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceString',
})
export class ReplaceStringPipe implements PipeTransform {
  transform(
    value: any,
    replaceWith: any,
    args: any,
    replaceFirst: boolean
  ): any {
    if (!args) {
      return value;
    }

    const regex = replaceFirst ? new RegExp(args, 'i') : new RegExp(args, 'gi');
    const match = value.match(regex);

    if (!match) {
      return value;
    }

    return value.replace(
      regex,
      `<span class='highlight'>${replaceWith}</span>`
    );
  }
}

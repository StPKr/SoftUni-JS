import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTrimmer',
  standalone: true
})
export class TextTrimmerPipe implements PipeTransform {

  transform(text: string, ...args: unknown[]): unknown {
    if (!text) return text;

    const match = text.match(/^([^\.]*\.)/);
    return match ? match[0] : text; 
  }

}

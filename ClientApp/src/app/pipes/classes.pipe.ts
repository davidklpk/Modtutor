import { Pipe, PipeTransform } from '@angular/core';
import { Class } from '../interfaces/class';

@Pipe({
  name: 'classes'
})

export class ClassesPipe implements PipeTransform {

  transform(items: Class[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();

    return items.filter( it => {
      return it.name.toLowerCase().includes(searchText);
    });
  }
}

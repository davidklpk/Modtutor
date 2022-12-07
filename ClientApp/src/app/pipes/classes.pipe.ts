import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course';

@Pipe({
  name: 'classes'
})

export class ClassesPipe implements PipeTransform {

  transform(items: Course[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();

    return items.filter( it => {
      return it.courseName.toLowerCase().includes(searchText);
    });
  }
}

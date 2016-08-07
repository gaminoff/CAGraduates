import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy',
  pure: false
})

export class FilterByPipe implements PipeTransform {
  transform(list: any[], filter: any): any {
    // console.log('in filter', list);
    list = list.filter(item=>item.name);
    if (!list) return [];
    if (!filter) return list;
    return list.filter(item=>{
      return (item.name.toLowerCase().indexOf(filter.byName.toLowerCase()) !== -1) &&
             (item.course.toLowerCase().indexOf(filter.byCourse.toLowerCase()) !== -1)
    })
  }
}

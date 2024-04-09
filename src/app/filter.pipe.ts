import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(appointments: any[], searchText: string): any[] {
    if (!appointments || !searchText) {
      return appointments;
    }
    searchText = searchText.toLowerCase();
    return appointments.filter(appointment => {
      return appointment.id.toString().toLowerCase().includes(searchText);
    });
  }
}

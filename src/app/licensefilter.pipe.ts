import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'licensefilter'
})
export class LicensefilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './IProduct';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: IProduct[],args: string): unknown {
    if(!args) { // If user has not provided the parameter value
      return value;
    }

    return value.filter(
      item=> item.productName.toLowerCase().indexOf(args.toLowerCase()) > -1 //If matches return more than -1
    );

   // return value.filter(
     // item => item.price === id ? item.price > id : value
    //);

   

}
}

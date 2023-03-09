import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], args: any): any {
    
    if(!value) return null;
    if(!args) return value;

    args = args.toUpperCase()

    return value.filter((data:any)=>{
     
    //  console.log(data.capital[0]);

      return (
             JSON.stringify(data.name.common).toUpperCase().includes(args) || 
             JSON.stringify(data.population).toUpperCase().includes(args) || 
             JSON.stringify(data.region).toUpperCase().includes(args) 
            // || JSON.stringify((data.capital[0]).toUpperCase().includes(args))
             );
    })
  }

}

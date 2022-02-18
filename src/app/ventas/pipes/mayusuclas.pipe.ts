import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{
    
    transform(value: string, enMayusuclas: boolean):string {

        if( enMayusuclas === true ){
            return value.toUpperCase();
        }
        else {
            return value.toLocaleLowerCase()
        }
    }
}
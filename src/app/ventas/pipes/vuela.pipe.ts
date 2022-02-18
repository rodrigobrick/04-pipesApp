import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform{
    
    transform(value: boolean):string {
        return( value )
            ? 'vuela'
            : 'no vuela';
    }
}
        /*
        if( value === true ){
            return 'Vuela'
        }
        else {
            return 'No vuela'
        }*/
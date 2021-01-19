import { AbstractControl } from "@angular/forms";

export class MyValidators{
    static isPricevalid(abtControl: AbstractControl): object {
        const value= abtControl.value;
        if (value > 10000){
            return {price_invalid: true};
        }

        return null;
    }

}
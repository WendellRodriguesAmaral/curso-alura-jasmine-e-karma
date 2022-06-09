import { Injectable } from "@angular/core";

import {v4 as uuidv4} from 'uuid';

@Injectable() //sem escopo para ser adicionado no provider depois
export class UniqueIdService{

    private numberOfGeneratedIds =0;

    private validId = /^[A-Za-z]+[\w\-\:\.]*$/;

    public generateUniqueIdWithPrefix(prefix:string):string{

        if(!prefix || !this.validId.test(prefix)){ //se o prefix for vazio ou nulo e se o prefix NÃO obedecer ao regex...
            throw Error("Prefix can not be empty"); 
        }

        const uniqueId = this.generateUniqueId();
        this.numberOfGeneratedIds++;
        return `${prefix}-${uniqueId}`;
    }

    public getNumberOfGeneratedUniqueIds():number{
        return this.numberOfGeneratedIds;
    }

    private generateUniqueId():string{
        return uuidv4();  //gera um id unico
    }


}
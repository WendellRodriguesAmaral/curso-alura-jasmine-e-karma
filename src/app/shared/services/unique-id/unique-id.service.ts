import { Injectable } from "@angular/core";

import {v4 as uuidv4} from 'uuid';

@Injectable() //sem escopo para ser adicionado no provider depois
export class UniqueIdService{

    private numberOfGeneratedIds =0;

    public generateUniqueIdWithPrefix(prefix:string):string{

        if(!prefix){
            throw Error("Prefix can not be empty"); // se não passar o prefixo como parametro, lança um error.
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
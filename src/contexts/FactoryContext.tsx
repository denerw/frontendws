import {createContext, useState, ReactNode, useEffect} from 'react';
import cars from '../../cars.json'

interface Factory {
    marca_id: number;
    marca_nome:String;
}

interface FactoriesContextData {
    id: number;
    nome: String;
}

interface FactoriesProviderProps{
    children: ReactNode;
    id: number;
}


export const FactoryContext = createContext({} as FactoriesContextData);

export function FactoryProvider ({children, ...rest}: FactoriesProviderProps){
    // const factory = rest.thisFactory;

    // const id = factory.marca_id;
    // const nome = factory.marca_nome;

    const id = rest.id;

    var nome = '';
    cars.cars.map(carMap =>   
        {if(carMap.marca_id == id){
        nome = carMap.marca_nome;
         } 
        }
    )

    return(
        <FactoryContext.Provider  
        value={{
            id,
            nome
        }}
        >
           {children}
        </FactoryContext.Provider>
    );

}
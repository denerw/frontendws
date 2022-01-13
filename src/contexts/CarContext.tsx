import {createContext, useState, ReactNode, useEffect} from 'react';

interface Car {
    // type: 'body' | 'eye';
    // description: string;
    // amount: number;
    id: number;
    marca_id: number;
    marca_nome:String;
    nome_modelo:String; 
    ano:number;
    combustivel : String; 
    num_portas:number;
    valor_fipe: number;
    cor: String; 
    timestamp_cadastro : number;
}

interface CarsContextData {
    id: number;
    marca_id: number;
    marca: String;
    modelo: String;
    ano: number;
    combustivel: String;
    portas: number;
    valor: number;
    cor: String;
    cadastro: number;  
}

interface CarsProviderProps{
    children: ReactNode;
    // carIndex: number;
    thisCar : Car;
    // level: number;
    // currentExperience: number;
    // challengesCompleted: number;
}


export const CarsContext = createContext({} as CarsContextData);

export function CarProvider ({children, ...rest}: CarsProviderProps){
    // const car = cars[rest.carIndex];
    const car = rest.thisCar;

    const id = car.id;
    const marca_id = car.marca_id;
    const marca = car.marca_nome;
    const modelo = car.nome_modelo;
    const ano =  car.ano;
    const combustivel = car.combustivel;
    const portas = car.num_portas
    const valor = car.valor_fipe;
    const cor = car.cor;
    const cadastro = car.timestamp_cadastro

    return(
        <CarsContext.Provider  
        value={{
            id,
            marca_id,
            marca,
            modelo,
            ano,
            combustivel,
            portas,
            valor,
            cor,
            cadastro
        }}
        >
           {children}
        </CarsContext.Provider>
    );

}
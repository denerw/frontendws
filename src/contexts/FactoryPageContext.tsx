import {createContext, useState, ReactNode, useEffect} from 'react';

interface FactoryPage {
    marca_id: number;
}

interface FactoryPagesContextData {
    id: number;
}

interface FactoryPagesProviderProps{
    children: ReactNode;
    id: number;
}


export const FactoryPageContext = createContext({} as FactoryPagesContextData);

export function FactoryPageProvider ({children, ...rest}: FactoryPagesProviderProps){
    const id = rest.id;

    return(
        <FactoryPageContext.Provider  
        value={{
            id
        }}
        >
           {children}
        </FactoryPageContext.Provider>
    );

}
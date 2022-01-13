import {createContext, useState, ReactNode, useEffect} from 'react';

interface FactoryHeader {
    selectedScreen: number;
}

interface FactoryHeaderContextData {
    factoryIndex: number;
    showFactory: (factoryToShow: any) => void;
}

interface FactoryHeaderProviderProps{
    children: ReactNode;
}


export const FactoryHeaderContext = createContext({} as FactoryHeaderContextData);

export function FactoryHeaderProvider ({children, ...rest}: FactoryHeaderProviderProps){
    const [factoryIndex, setFactory] = useState(1);

    function showFactory(factoryToShow){
        setFactory(factoryToShow);
        console.log(factoryIndex)
    }

    return(
        <FactoryHeaderContext.Provider  
        value={{
            factoryIndex,
            showFactory
        }}
        >
           {children}
        </FactoryHeaderContext.Provider>
    );

}
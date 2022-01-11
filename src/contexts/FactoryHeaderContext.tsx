import {createContext, useState, ReactNode, useEffect} from 'react';

interface FactoryHeader {
    selectedScreen: number;
}

interface FactoryHeaderContextData {
    factoryIndex: number;
    showFactory1:()=>void;
    showFactory2:()=>void;
    showFactory3:()=>void;
    showFactory4:()=>void;
}

interface FactoryHeaderProviderProps{
    children: ReactNode;
    //selectedScreen: number;
}


export const FactoryHeaderContext = createContext({} as FactoryHeaderContextData);

export function FactoryHeaderProvider ({children, ...rest}: FactoryHeaderProviderProps){
    const [factoryIndex, setFactory] = useState(1);

    function showFactory1(){
        setFactory(1);
    }

    function showFactory2(){
        setFactory(2);
    }

    function showFactory3(){
        setFactory(3);
    }

    function showFactory4(){
        setFactory(4);
    }
    

    return(
        <FactoryHeaderContext.Provider  
        value={{
            factoryIndex,
            showFactory1,
            showFactory2,
            showFactory3,
            showFactory4
        }}
        >
           {children}
        </FactoryHeaderContext.Provider>
    );

}
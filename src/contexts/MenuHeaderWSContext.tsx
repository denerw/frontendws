import {createContext, useState, ReactNode, useEffect} from 'react';

interface MenuHeaderWS {
    selectedScreen: number;
}

interface MenuHeaderWSContextData {
    screen: number;
    showHome:()=>void;
    showCarros:()=>void;
    showMarcas:()=>void;
    showInserir:()=>void;
}

interface MenuHeaderWSProviderProps{
    children: ReactNode;
}


export const MenuHeaderWSContext = createContext({} as MenuHeaderWSContextData);

export function MenuHeaderWSProvider ({children, ...rest}: MenuHeaderWSProviderProps){
    const [screen, setScreen] = useState(0);

    function showHome(){
        setScreen(0);
    }

    function showCarros(){
        setScreen(1);
    }

    function showMarcas(){
        setScreen(2);
    }

    function showInserir(){
        setScreen(3);
    }
    

    return(
        <MenuHeaderWSContext.Provider  
        value={{
            screen,
            showHome,
            showCarros,
            showMarcas,
            showInserir
        }}
        >
           {children}
        </MenuHeaderWSContext.Provider>
    );

}
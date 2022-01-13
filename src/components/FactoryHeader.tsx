import { useContext, useEffect, useState } from 'react';
import { FactoryHeaderContext } from '../contexts/FactoryHeaderContext';
import { MenuHeaderWSContext } from '../contexts/MenuHeaderWSContext';
import styles from '../styles/components/FactoryHeader.module.css';
import cars from '../../cars.json'



export function FactoryHeader(){
    const {showFactory} = useContext(FactoryHeaderContext);
    

    var marcaIdsEncontrados =[]; 

    return(
            <div className = {styles.factoryHeaderContainer}>
                {
                cars.cars.map((carMap, i) => { //Varre o array de carros pra procurar por marcas
                    
                    if (!marcaIdsEncontrados.includes(carMap.marca_id)) { //Varre o array pra verificar se todas as marcas já geraram botões na tela
                        marcaIdsEncontrados.push(carMap.marca_id)
                        return (
                            <button key={i} className = {styles.factoryHeaderButton} type="button"
                            onClick = {() => {showFactory(carMap.marca_id)}}>
                                {carMap.marca_nome}
                            </button>
                            )
                    }
                }
                )}
            </div> 
    );
}
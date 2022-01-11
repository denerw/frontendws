import { useContext } from 'react'
import styles from '../styles/components/FactoryBox.module.css'
import { CarProvider } from '../contexts/CarContext';
import { FactoryContext, FactoryProvider } from '../contexts/FactoryContext'
import cars from '../../cars.json'
import { CarBox } from './CarBox';

export function FactoryBox(){
    const{id, nome} = useContext(FactoryContext);
    return(
        <div className = {styles.factoryBoxContainer}>

        <h1>{nome}</h1>
        {cars.map(carMap =>   
            {if(carMap.marca_id == id){
            return(
             <CarProvider thisCar = {carMap}>
             <div><CarBox /></div>
             </CarProvider>)
             } 
            }
        )}


        </div>
    )
}
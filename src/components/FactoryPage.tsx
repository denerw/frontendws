
import { useContext } from 'react';
import { FactoryContext, FactoryProvider } from '../contexts/FactoryContext';
import styles from '../styles/components/FactoryPage.module.css';
import { CarBox } from './CarBox';
import cars from '../../cars.json'
import { CarProvider } from '../contexts/CarContext';
import { FactoryBox } from './FactoryBox';
import { FactoryPageContext } from '../contexts/FactoryPageContext';
import { FactoryHeader } from './FactoryHeader';
import { FactoryHeaderContext } from '../contexts/FactoryHeaderContext';


export function FactoryPage(){
    const {id} = useContext(FactoryPageContext);
    const {nome} = useContext(FactoryContext);
    const {factoryIndex} = useContext(FactoryHeaderContext);
    
    return(
        <div className = {styles.factoryPageContainer}>
        <FactoryHeader/>
        <header><h1>{nome}</h1></header>

        {/* <FactoryProvider id={id}> */}
        <FactoryProvider id={factoryIndex}>
        <FactoryBox/>
        </FactoryProvider>

        </div>
    )
}
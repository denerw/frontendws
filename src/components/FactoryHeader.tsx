import { useContext } from 'react';
import { FactoryHeaderContext } from '../contexts/FactoryHeaderContext';
import { MenuHeaderWSContext } from '../contexts/MenuHeaderWSContext';
import styles from '../styles/components/FactoryHeader.module.css';

export function FactoryHeader(){
    const {showFactory1, showFactory2, showFactory3, showFactory4} = useContext(FactoryHeaderContext);
    return(
       
            <div>
            <button className = {styles.factoryHeaderButton} type="button"
            onClick = {showFactory1}>
                TOYOTA
            </button>
            <button className = {styles.factoryHeaderButton} type="button"
            onClick = {showFactory2}>
                FORD
            </button>
            <button className = {styles.factoryHeaderButton} type="button"
            onClick = {showFactory3}>
                VOLKSWAGEN
            </button >
            <button className = {styles.factoryHeaderButton} type="button"
            onClick = {showFactory4}>
                FIAT
            </button >
            </div>
           
       
    );
}
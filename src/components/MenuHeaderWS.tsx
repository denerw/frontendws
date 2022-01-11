import { useContext } from 'react';
import { MenuHeaderWSContext } from '../contexts/MenuHeaderWSContext';
import styles from '../styles/components/HeaderWS.module.css';

export function MenuHeaderWS(){
    const {screen, showHome, showCarros, showMarcas, showInserir} = useContext(MenuHeaderWSContext);
    return(
        <header className = {styles.headerContainer}>
            <div>
            <button className = {styles.headerButton} type="button"
            onClick = {showHome}>
                Home
            </button>
            <button className = {styles.headerButton} type="button"
            onClick = {showCarros}>
                Carros
            </button>
            <button className = {styles.headerButton} type="button"
            onClick = {showMarcas}>
                Marcas
            </button >
            <button className = {styles.headerButton} type="button"
            onClick = {showInserir}>
                Inserir
            </button >
            </div>
            <div>
                <img src="ws-logo.png" alt="WS Logo" />
            </div>     
        </header>
    );
}
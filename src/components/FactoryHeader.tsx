import { useContext, useEffect, useState } from 'react';
import { FactoryHeaderContext } from '../contexts/FactoryHeaderContext';
import { MenuHeaderWSContext } from '../contexts/MenuHeaderWSContext';
import styles from '../styles/components/FactoryHeader.module.css';
import cars from '../../cars.json'

import { Base64 } from 'js-base64';

export function FactoryHeader(){
    const {showFactory} = useContext(FactoryHeaderContext);

    /////////// CONECTAR COM BACKEND ////////////////
    let username = 'usuario1'
    let password = 'testews'
    let base64 = require('js-base64');
    let headers = new Headers();

    headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password));

    const [requestState, setRequestState] = useState([])
    useEffect(() => {
        fetch('api/excel/factories', {method: 'GET', headers: headers}).then(res =>{
            if(res.ok){
                return res.json()
            } else {console.log("Não rolou")}
        }).then(jsonResponse => setRequestState(jsonResponse))
    },[])

    console.log(requestState)
    /////////////////////////////////////////////////
 
    var marcaIdsEncontrados =[]; 

    return(
            <div className = {styles.factoryHeaderContainer}>
                {
                cars.cars.map(carMap => { //Varre o array de carros pra procurar por marcas
                    
                    if (!marcaIdsEncontrados.includes(carMap.marca_id)) { //Varre o array pra verificar se todas as marcas já geraram botões na tela
                        marcaIdsEncontrados.push(carMap.marca_id)
                        return (
                            <button className = {styles.factoryHeaderButton} type="button"
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
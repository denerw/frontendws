import { useContext } from 'react'
import { CarProvider, CarsContext } from '../contexts/CarContext';
import styles from '../styles/components/CarBox.module.css'

interface CarProps {
    id: number;
    marca_id: number;
    marca_nome:String;
    nome_modelo:String; 
    ano:number;
    combustivel : String; 
    num_portas:number;
    valor_fipe: number;
    cor: String; 
    timestamp_cadastro : number;
}

export function CarBox(){
    const {modelo, id, marca, ano, combustivel, portas, valor, cor, cadastro} = useContext(CarsContext);

    function timestampToDate(ts){
        var date = new Date(ts * 1000);
        var day = date.getDay();
        var month = date.getMonth();
        var year = date.getFullYear();
        var hours = date.getHours();
        var minutes = "0"+ date.getMinutes();
        var seconds = "0" + date.getSeconds();

        var finalDate = day + "/" + month + "/" + year + " " + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        return(
            finalDate
        )
    }

    return(
        <div className={styles.carBoxContainer}>

        <strong> {modelo}</strong>
    
        <div>
        <div>ID: {id}</div>
        </div>

        {console.log(modelo)}

        <div>
        <div>Marca: {marca}</div>
        </div>

        <div>
        <div>Ano: {ano}</div>
        </div>

        <div>
        <div>Combustível: {combustivel}</div>
        </div>

        <div>
        <div>Portas: {portas}</div>
        </div>

        <div>
        <div>Valor: {valor}</div>
        </div>

        <div>
        <div>Cor: {cor}</div>
        </div>

        <div>
        <div>Cadastro em: {timestampToDate(cadastro)}</div>
        </div>

        </div>

    )
}









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

    return(
        <div className={styles.carBoxContainer}>

        <header className={styles.carBoxHeader}>
            <strong> {modelo}</strong>
        </header>

        <div>
        <div>ID:</div><div>{id}</div>
        </div>

        {console.log(modelo)}

        <div>
        <div>Marca:</div><div>{marca}</div>
        </div>

        <div>
        <div>Ano:</div><div>{ano}</div>
        </div>

        <div>
        <div>Combustível:</div><div>{combustivel}</div>
        </div>

        <div>
        <div>Portas:</div><div>{portas}</div>
        </div>

        <div>
        <div>Valor:</div><div>{valor}</div>
        </div>

        <div>
        <div>Cor:</div><div>{cor}</div>
        </div>

        <div>
        <div>Cadastro em:</div><div>{cadastro}</div>
        </div>

        </div>

    )
}









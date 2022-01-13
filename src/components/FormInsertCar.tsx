import styles from '../styles/components/FormInsertCar.module.css'
import {useForm} from "react-hook-form";
// import fs from 'fs';
import cars from '../../cars.json'
import { timeStamp } from 'console';


export function FormInsertCar(){
    const {register, handleSubmit, formState:{errors}} = useForm();

    var marcaIdsEncontrados=[]

    const onSubmit = (data) => {
        

        let marcaNome
        
        const timestamp = Math.floor((new Date().getTime())/1000);



        const numberMarcaId = parseInt(data.marca_id)

        switch (numberMarcaId) {
            case 1:
                marcaNome = "TOYOTA";
                break;

            case 2:
                marcaNome = "FORD";
                break;

            case 3:
                marcaNome = "VW";
                break;

            case 4:
                marcaNome = "FIAT";
                break;

            default:
                break;
        }

        
        const newCar = {
            id: 9, 
            marca_id: numberMarcaId, 
            marca_nome: marcaNome, 
            nome_modelo: data.modelo, 
            ano: data.ano, 
            combustivel : data.combustivel, 
            num_portas: data.portas, 
            valor_fipe: data.valor, 
            cor: data.cor, 
            timestamp_cadastro : timestamp
        }

        cars.cars.push(newCar)
    }

 return(
     <div className={styles.formInsertNewContainer}>
         <h1>INSERIR UM NOVO VEÍCULO</h1>
        
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div>
                Modelo
            <input type="text" name="modelo" placeholder="Modelo" {...register("modelo")}  />
            </div>

             <div>
                 Marca
                 <select name="marca_id" {...register("marca_id", { required: true })}>
                    <option value="">Selecione</option>
                    {
                    cars.cars.map((carMap, i) => { //Varre o array de carros pra procurar por marcas
                    
                    if (!marcaIdsEncontrados.includes(carMap.marca_id)) { //Varre o array pra verificar se todas as marcas já geraram opções de seleção
                        marcaIdsEncontrados.push(carMap.marca_id)
                        return (
                            <option key={i} value={carMap.marca_id}>{carMap.marca_nome}</option>
                            )
                    }
                    }
                    )}
                 </select>
             </div>
             
            {/* <div>
                Marca
            <input type="text" name="marca_id" placeholder="Marca" {...register("marca_id")} />
            </div> */}

            <div>
                Ano
            <input type="number" name="ano" placeholder="Ano" {...register("ano")} />
            </div>

            <div>
                 Combustivel
                 <select name="combustivel" {...register("combustivel", { required: true })}>
                     <option value="">Selecione</option>
                     <option value="alcool">Álcool</option>
                     <option value="diesel">Diesel</option>
                     <option value="flex">Flex</option>
                     <option value="gasolina">Gasolina</option>
                     <option value="GNV">GNV</option>
                 </select>
             </div>

            <div>
                Portas
            <input type="number" name="portas" placeholder="Portas" {...register("portas")} />
            </div>

            <div>
                Valor(R$)
            <input type="number" name="valor" placeholder="Valor" {...register("valor")} />
            </div>

            <div>
                Cor
            <input type="text" name="cor" placeholder="Cor" {...register("cor")} />
            </div>


            <button>Inserir Carro</button>
        </form>
     </div>

 )
}
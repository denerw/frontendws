import styles from '../styles/components/FormInsertCar.module.css'
import {useForm} from "react-hook-form";
// import fs from 'fs';
//import cars from '../../cars.json'


export function FormInsertCar(){
    const {register, handleSubmit, formState:{errors}} = useForm();

    const onSubmit = (data) => {
        console.log("retornou")

        let marcaId

        //const fs = require("fs");
        // let carsjson = fs.readFileSync("cars.json","utf-8");
        // let cars = JSON.parse(carsjson);

        switch (data.marca) {
            case "TOYOTA":
                marcaId = 1;
                break;

            case "FORD":
                marcaId = 2;
                break;

            case "VW":
                marcaId = 3;
                break;

            case "FIAT":
                marcaId = 4;
                break;

            default:
                break;
        }

        const newCar = {
            id: 8, 
            marca_id: marcaId, 
            marca_nome: data.marca, 
            nome_modelo: data.modelo, 
            ano: data.ano, 
            combustivel : data.combustivel, 
            num_portas: data.portas, 
            valor_fipe: data.valor, 
            cor: data.cor, 
            timestamp_cadastro : 1636636150
        }
        console.log(newCar)

        // cars.push(newCar)

        // carsjson = JSON.stringify(cars);
        // fs.writeFileSync("cars.json",carsjson,"utf-8");
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
                 <select name="marca" {...register("marca", { required: true })}>
                     <option value="">Selecione</option>
                     <option value="TOYOTA">Toyota</option>
                     <option value="FORD">Ford</option>
                     <option value="VW">Volkswagen</option>
                     <option value="FIAT">FIAT</option>
                 </select>
             </div>

            {/* <div>
                Marca
            <input type="text" name="marca" placeholder="Marca" {...register("marca")} />
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

            {/* <div>
                Combustível
            <input type="text" name="combustivel" placeholder="Combustível" {...register("combustivel")} />
            </div> */}

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
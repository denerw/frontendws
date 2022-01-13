import { CarProvider } from '../contexts/CarContext';
import styles from '../styles/components/AllCarsPage.module.css';
import { CarBox } from './CarBox';
import cars from '../../cars.json'


export function AllCarsPage(){
    return(
        <div className = {styles.allCarsPageContainer}>
        
        {cars.cars.map(carMap =>             
             <CarProvider thisCar = {carMap}>
             <div><CarBox /></div>
             </CarProvider>
        )}
    
        </div>
    )
}

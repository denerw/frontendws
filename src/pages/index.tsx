import Head from 'next/head'
import { AllCarsPage } from '../components/AllCarsPage';
import { FactoryPage } from '../components/FactoryPage';
import { MenuHeaderWS } from '../components/MenuHeaderWS';
import { HomePageBody } from '../components/HomePageBody';
import { FactoryPageProvider } from '../contexts/FactoryPageContext';
import styles from '../styles/pages/Home.module.css';
import { MenuHeaderWSContext, MenuHeaderWSProvider } from '../contexts/MenuHeaderWSContext';
import { useContext } from 'react';
import { FactoryHeaderProvider } from '../contexts/FactoryHeaderContext';
import { FormInsertCar } from '../components/FormInsertCar';

export default function Home() {
  const {screen} = useContext(MenuHeaderWSContext);

  let screenToShow;

  switch(screen){
    case 0:
      screenToShow =<HomePageBody/>
      break;
    
    case 1:
      screenToShow = <AllCarsPage/>
      break;
    
    case 2:
      screenToShow =
      <FactoryHeaderProvider>
        <FactoryPageProvider id = {3}>
         <FactoryPage/>
        </FactoryPageProvider>
      </FactoryHeaderProvider>
      break;

    case 3:
      screenToShow = <FormInsertCar/>
      break;
  }

  return (
   
    <div className={styles.container} >
    <Head>
      <title>WsFrontend</title>
    </Head>
   
    <MenuHeaderWS />

    {screenToShow}

    {console.log(screen)}
  
   </div>
  

  )
}

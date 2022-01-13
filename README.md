**FRONTEND-WS**
Breve descritivo do uso dos componentes do app:

**CarBox.tsx**
Este componente expõe os dados dos veículos cadastrados no arquivo car.json. É utilizado dentro de "FactoryBox.tsx" e "AllCarsPage.tsx" e tem seus dados e funções fornecidos por CarContext.tsx.

**FactoryBox.tsx**
Este componente exibe os veículos cadastrados em uma determinada fábrica. Este componente é chamado por "FactoryPage.tsx" e ambos estes componentes tem suas características e funções fornecidas por FactoryContext.tsx.

**FactoryHeader.tsx**
É o componente que faz a seleção do contexto de fábrica a ser utilizado para renderização da página de fábricas.

**FormInsertCar.tsx**
É chamado na página de formulário e recebe os dados para a adição de um novo carro.

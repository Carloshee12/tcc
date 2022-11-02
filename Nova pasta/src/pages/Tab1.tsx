import { IonHeader, IonPage, IonTitle, IonToolbar, IonText } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Manual</IonTitle>
          
       

        </IonToolbar>
        <IonText>

<div className='IonText'>
  <div className='Manual'>
    <h1>Manual de utilização do usuário</h1>
    <h2>Bem vindos ao aplicativo desenvolvido para o nosso TCC, aqui vamos ensinar o uso básico do aplicativo </h2>
    <p>1- Ao abrir o aplicativo está é a primeira tela, caso o usuário deseje pular para a aba seguinte precisa clicar apenas na aba "Função Galeria" ou "Sobre o trabalho". </p>
        
    <br></br>
    <p> 2- Clicando no botão "Função galeria", o usuário ira lidar com algumas informações na tela, mandando escolher uma imagem. </p>
    <p>3- Ao clicar no botão "Enviar arquivo" vai abrir uma aba para o usuário escolher uma imagem para ser utilizada pelo aplicativo.</p>
    <p>4- Ao escolher a imagem irá aparecer dois novos botões o botão em verde "Processamento de imagem" é o botão que irá executar a função de tradução de imagem para texto.</p>
    <p>5- O botão em vermelho "Use outra imagem" que irá permitir ao usuário escolher outra imagem caso deseje. </p>
    <p>6-Ao clicar no botão verde "Processamento de imagem", irá iniciar o funcionamento do aplicativo e irá ser gerado um caixa com o texto extraido.</p>
    <p>7-Ao executar os passos anteriores, é só clicar no botão azul que tem o simbolo de duas mãos e irá ser aberto o V-Libras.</p>
    <p>8- Com o v-livras aberto é só clicar na caixa com o texto que foi gerado e o texto irá ser interpretado pelo V-libras.</p>
  </div>
</div>       

</IonText>
      </IonHeader>


     
    </IonPage>
  );
};

export default Tab1;
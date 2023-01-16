import { IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonImg, IonSlide, IonContent, IonSlides, IonIcon } from '@ionic/react';
import { arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';
import './Tab1.css'; 
// Import das imagens
import TabBar from '../assets/img/TabBar.png';
import Boneco from '../assets/img/boneco.png';
import botaoEnviar from '../assets/img/botao_enviar.jpg';
import maos from '../assets/img/maos.png';
import MenuPrincipalGaleria from '../assets/img/menu-principal-galeria.png';
import ProcessamentoImg from '../assets/img/processamento_imagem.png';
import Texto from '../assets/img/texto_extraido.png';
import OutraImg from '../assets/img/use_outra_imagem.png';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Manual</IonTitle>
        </IonToolbar>      

        <IonText>
          <div className='Slide'>
            <h2>Manual de utilização do usuário</h2>
            <h4>Bem-vindos ao aplicativo desenvolvido para o nosso TCC, aqui vamos ensinar o uso básico do 
                aplicativo </h4> 
            <p>O manual foi dividido em 9 passos, Para seguir para o próximo passo arrasta caixinha azul para 
              o lado.</p>
          </div>
          <IonContent className='Content'>
                  
            <IonSlides pager={true} className='Slide'>

                <IonSlide>
                    <div>
                      <p>1º - Deve-se iniciar o Vlibras para tradução de toda pagina, para iss basta clicar no botão azul que tem o símbolo de duas mãos e 
                      irá ser aberto o V-Libras.</p>
                      <IonImg src={maos} alt='Icone Vlibras' className='img-manual-mao' />
                    </div>
                    <div>
                      <IonIcon icon={arrowForwardOutline} />
                      <p className='arraste'>Arraste para o proximo</p>
                    </div>
                </IonSlide>   

                <IonSlide>
                  <div>
                    <IonIcon icon={arrowBackOutline} />
                    <p className='arraste'>Arraste para o anterior</p>
                  </div>
                  <div>
                    <p>2º - Ao abrir o aplicativo está é a primeira tela, caso o usuário deseje pular para a aba 
                      seguinte precisa clicar apenas na aba "Função Galeria" ou "Sobre o trabalho". </p>
                    <IonImg src={TabBar} alt='TabBar com foco na Função galeria' className='img-manual' />
                  </div>
                  <div>
                    <IonIcon icon={arrowForwardOutline} />
                    <p className='arraste'>Arraste para o proximo</p>
                  </div>
                </IonSlide>

                <IonSlide>
                <div>
                    <IonIcon icon={arrowBackOutline} />
                    <p className='arraste'>Arraste para o anterior</p>
                  </div>
                  <div>
                    <p>3º - Clicando no botão "Função galeria", o usuário ira lidar com algumas informações na tela, 
                      mandando escolher uma imagem. </p>
                    <IonImg src={MenuPrincipalGaleria} alt='Menu Principal da função galeria' className='img-manual' />
                  </div>
                  <div>
                    <IonIcon icon={arrowForwardOutline} />
                    <p className='arraste'>Arraste para o proximo</p>
                  </div>
                </IonSlide>
                
                <IonSlide>
                <div>
                    <IonIcon icon={arrowBackOutline} />
                    <p className='arraste'>Arraste para o anterior</p>
                  </div>
                  <div>
                    <p>
                      4º - Ao clicar no botão "Enviar arquivo" vai abrir uma aba para o usuário escolher uma imagem 
                      para ser utilizada pelo aplicativo para leitura e tradução para texto reconhecível pelo Vlibras.
                    </p>
                    <IonImg src={botaoEnviar} alt='Botão Enviar' className='img-manual' />
                </div>
                <div>
                    <IonIcon icon={arrowForwardOutline} />
                    <p className='arraste'>Arraste para o proximo</p>
                  </div>
                </IonSlide>

              <IonSlide>
                <div>
                    <IonIcon icon={arrowBackOutline} />
                    <p className='arraste'>Arraste para o anterior</p>
                </div>
                <div>
                  <p>5º - Ao escolher a imagem irá aparecer dois novos botões o botão em verde "Processamento de 
                    imagem" é o botão que irá executar a função de tradução de imagem para texto.</p>
                  <IonImg src={ProcessamentoImg} alt='Botão Processamento de imagem' className='img-manual' />
                </div>
                <div>
                    <IonIcon icon={arrowForwardOutline} />
                    <p className='arraste'>Arraste para o proximo</p>
                  </div>
              </IonSlide>

              <IonSlide>
                <div>
                    <IonIcon icon={arrowBackOutline} />
                    <p className='arraste'>Arraste para o anterior</p>
                </div>
                <div>
                  <p>6º - O botão em vermelho "Use outra imagem" que irá permitir ao usuário escolher outra imagem 
                    caso deseje. </p>
                    <IonImg src={OutraImg} alt='Botão Use outra imagem' className='img-manual' />
                </div>
                <div>
                    <IonIcon icon={arrowForwardOutline} />
                    <p className='arraste'>Arraste para o proximo</p>
                  </div>
              </IonSlide>

              <IonSlide>
                <div>
                    <IonIcon icon={arrowBackOutline} />
                    <p className='arraste'>Arraste para o anterior</p>
                </div>
                <div>
                  <p>7º -Ao clicar no botão verde "Processamento de imagem", irá iniciar o funcionamento do aplicativo e 
                  irá ser gerado um caixa com o texto extraído. </p>
                  <IonImg src={Texto} alt='Texto Gerado' className='img-manual-texto' />
                </div>
                <div>
                    <IonIcon icon={arrowForwardOutline} />
                    <p className='arraste'>Arraste para o proximo</p>
                  </div>
              </IonSlide>           

              <IonSlide> 
                <div>
                    <IonIcon icon={arrowBackOutline} />
                    <p className='arraste'>Arraste para o anterior</p>
                </div>               
                <p>8º - Com o v-livras aberto é só clicar na caixa com o texto que foi gerado e o texto irá ser 
                interpretado pelo V-libras.</p>
                <IonImg src={Boneco} alt='VLibras' className='img-manual' />
              </IonSlide>              
            </IonSlides>
          </IonContent> 

          <IonContent className='Content'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/hkj_570pPL8" 
              title="YouTube video player" frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen></iframe>
          </IonContent>
        </IonText>        
      </IonHeader>
    </IonPage>
  );
};

export default Tab1;
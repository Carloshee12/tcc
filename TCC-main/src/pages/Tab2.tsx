import { IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import { SetStateAction, useState } from "react";
import OcrGalleryReading from "../components/OcrGalleryReading.js";

const Tab2: React.FC = () => {
  const [ocrData, setOcrData] = useState("")

  // Receba os dados do OCR como suporte do child component
  const onReadOcrData = (ocrData: SetStateAction<string>) => {
    setOcrData(ocrData)
  }

  // Prop deteta que o botão de imagem de mudança foi clicado
  const onRemoveClicked = () => {
    setOcrData("")
  }
  return (
    <IonPage class='walppaper'>
    <div className='titulo'>
      <IonHeader>
        <IonToolbar>
          <IonTitle class= "action-sheet-ios">Função Galeria</IonTitle>
        </IonToolbar>
      </IonHeader>
    </div>

      
    
        <div className="funcao">
          <OcrGalleryReading
            onReadOcrData={onReadOcrData}
            onRemoveClicked={onRemoveClicked}
          />
    
       
      </div>
        
      <div id="OCR" className='OCR'>
        
          <p>
            {ocrData}
          </p>
      </div>
    
    </IonPage>
  );
};

export default Tab2;

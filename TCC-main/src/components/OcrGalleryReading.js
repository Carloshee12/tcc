import { useState } from "react"
import { createWorker } from "tesseract.js"
import './styles.css'


// OCR Statuses
const STATUSES = {
  IDLE: "",
  FAILED: "Falha na leitura!",
  PENDING: "Processando...",
  SUCCEEDED: "Processamento completo",
}

function OcrGalleryReading({onReadOcrData, onRemoveClicked}) {
  const [selectedImage, setSelectedImage] = useState(null) // define o estado da imgaem "no caso imagem vazia"
  // define o estado da leitura que é vazio pois não possui imagem selecionada
  const [ocrState, setOcrState] = useState(STATUSES.IDLE)
  // cria a estação de trabalho do tesseract
  const worker = createWorker()
  
  
  // Process image with OCR
  const readImageText = async() => {
    setOcrState(STATUSES.PENDING)
    try {
      await worker.load()
      // define a linguagem da leitura que nesse caso é portugues e ingles
      await worker.loadLanguage("por")//carrega a linguagem
      await worker.initialize("por") // inicia a linguagem
      // faz a leitura da imagem e trasforma em caracteres
      const { data: { text } } = await worker.recognize(selectedImage) 
      await worker.terminate() // fecha a intancia de trabalho
      
      onReadOcrData(text) // retorna o texto
      setOcrState(STATUSES.SUCCEEDED)// define o processo como sucesso
    } catch (err) {
      setOcrState(STATUSES.FAILED)// define o processo como erro
    }
  }

  // caso o botão de remova a imagem for celecionado 
  const handleRemoveClicked = () => {
    // define o estado da imgaem "no caso imagem vazia"
    setSelectedImage(null)
    onRemoveClicked()
    // define o estado da leitura que é vazio pois não possui imagem selecionada
    setOcrState(STATUSES.IDLE)
  }

  return (
    <div>
      {selectedImage && (
        <div>
          <img src={URL.createObjectURL(selectedImage)} alt="scanned file"  />
        </div>
      )}
        {selectedImage?
          <> 
        <span>
            <button className="button-container" 
              onClick={readImageText}> 
              Processamento de imagem 
            </button>
          </span>

          <span>
            
              <button className="remove-button"
                disabled={ocrState === STATUSES.PENDING}
                onClick={handleRemoveClicked}>
                Use outra imagem
              </button>
          </span>
            </>
            
          :
          <>
          
          <div className="container">
             <h2 id= "titulo-escolha">Escolha uma imagem</h2>
             <label for = "ocr-image">Enviar arquivo</label>
            {/* input da imagem */}
            <input
              type="file"
              id="ocr-image"
              onChange={(event) => {
                setSelectedImage(event.target.files[0])
              }}
            />
            
          </div>
          <p>Formatos suportados:bmp, jpg, png, pbm</p>
          </>
        }
      

      <div className="status">
        {ocrState}
      </div>
    
    </div>
  )  
}

export default OcrGalleryReading
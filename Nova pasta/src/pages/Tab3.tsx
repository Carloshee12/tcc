import React from 'react';
import { IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonText, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import { useState } from "react"
import { createWorker } from "tesseract.js"
function Tab3() {
  
  return (
    <div>
      <IonPage>
    <div>
      <IonHeader>
        <IonToolbar>
          <IonTitle class= "action-sheet-ios">Sobre o Projeto</IonTitle>
        </IonToolbar>
      </IonHeader>
    </div>
            <IonTextarea>
          <IonText>

            <div className='IonText'>
              <div className='Objetivo'>
                <h1>Objetivo</h1>
                <p>Pensando na inclusão dos surdos, na promoção da acessibilidade a realidade vivenciada, o objetivo 
                  desse trabalho de conclusão de curso é desenvolver um protótipo “Página Web”, com o papel de auxiliar deficientes auditivos 
                  a se comunicar, e superar dificuldades constantes em desempenhar tarefas do cotidiano relacionadas a 
                  leitura, pois percebe-se a necessidade de construção desta TA, para auxiliar estrategicamente na 
                  promoção de saúde e inclusão social, reduzindo barreiras existentes.  </p>
                <br></br>
              </div>

              <div className='Sobre_desenvolvedores'>
                <h1>Sobre os desenvolvedores</h1>
                <h3>Carlos Henrique</h3>
                <p>Graduando em engenharia da computação, sempre foi apaixonado por tecnologia e ainda mais apaixonado por jogos. </p>

                <h3>Milainy Benjamim</h3>
                <p>
                  Graduanda do curso de engenharia da computação, atualmente trabalha como engenheira de júnior
                  na avanade. Com grande paixão por inteligência artificial, principalmente por Visão computacional e 
                  automação de processos robóticos (RPA), foi idealizadora deste projeto e desenvolvedora da aba 
                  "Função Galeria".
                </p>
              </div>
            </div>       
          
          </IonText>
        </IonTextarea>
          
    </IonPage>
    </div>
    
  )}
export default Tab3;
import "./../../node_modules/video-react/dist/video-react.css"
import React from 'react'
import { CardChilder, Container, Card, Img, Video, Button, TextButton, TextBody, Top, Check } from './../styles/app.styles'
import video from "./../assets/video/video1.mp4"
import image from "./../assets/image/flyer.jpg"
import whats from "./../assets/image/whatsapp1.png";
import check from "./../assets/image/check.png"
function Body() {
  return (
    <Container >
      <TextBody>
        Como funciona esse mercado, bom você apenas vai copiar e colar todos as entradas que nossa equipe faz e como você vai fazer isso,<p />
        todos os dias mandamos um relatório de possíveis entradas daí você escolhe em qual horário vai estar com tempo livre <p />
         para se concentrar e começar a cópia e colar e encher seu Bolso de dinheiro todos os dias!</TextBody>
      <Top>
        <Video className="myvideo" src={video} controls autoPlay muted />
        <CardChilder>
          <Check>
            <img src={check} /> <h3>Sala de sinais</h3>
          </Check>
          <Check>
            <img src={check} /> <h3>Treinamento de mindet</h3>
          </Check>
          <Check>
            <img src={check} /> <h3>Acompanhamento semanal</h3>
          </Check>
          <Check>
            <img src={check} /> <h3>Treinamento de gerenciamento</h3>
          </Check>
          <Check>
            <img src={check} /> <h3>Treinamento de estrategia</h3>
          </Check>
        </CardChilder>
      </Top>
      <Card alignItems="center">
        <Img src={image} />
        <Button >
          <TextButton href="https://api.whatsapp.com/send?phone=5598982451395&text=Olá, gostaria da oportunidade para mudar de vida,%20tudo%20bem?" > <img src={whats} /></TextButton>
        </Button>
      </Card>
    </Container >
  );
}

export default Body;

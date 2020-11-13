import "./../../node_modules/video-react/dist/video-react.css"
import React from 'react'
import { Container, Card, Title, Img, Video, Button, TextButton } from './../styles/app.styles'
import video from "./../assets/video/video1.mp4"
import image from "./../assets/image/flyer.jpg"
import whats from "./../assets/image/whatsapp1.png"
function Body() {
  return (
    < Container >
      <Card alignItems="center">
        <Video className="myvideo" src={video} controls autoPlay />
        <Img src={image} />
        <Button >
          <TextButton href="https://api.whatsapp.com/send?phone=5598982451395&text=Olá, gostaria da oportunidade para mudar de vida,%20tudo%20bem?" > <img src={whats} /></TextButton>
        </Button>
      </Card>
    </Container >
  );
}

export default Body;

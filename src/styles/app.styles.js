import styled from 'styled-components';

export const Container = styled.div`
margin-toP:250px;

`;
export const Card = styled.div`
display:grid;
justify-items:center; `;

export const Img = styled.img`
  `;

export const Video = styled.video`
padding: 30px;
align-self: center;
`;
export const Button = styled.button`
margin-top:30px;
width:500px;
height:100px;
border-radius:10px;
cursor: pointer;
text-align: center;
margin-bottom:30px;
border: 4px solid #4CAF50;
transition-duration:0.5s;
background-color: #00FF00;
img{
  width:100px;
}
:hover{
  width:550px;
  height:118px;
  font-size:18px;
  img{
    transition-duration:0.5s;
  width:120px;
}
}
`;
export const TextButton = styled.a`
box-shadow:none;
font-family:Arial, Helvetica, sans-serif;
font-size:3em;
`;

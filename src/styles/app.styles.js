import styled from 'styled-components';

export const Container = styled.div`
justify-items:center;
margin-toP:250px;

`;
export const Card = styled.div`
display:grid;
justify-items:center; `;

export const Img = styled.img`
  `;

export const Video = styled.video`
align-self: center;
margin:40px;
margin-bottom:40px;
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
export const TextBody = styled.h3`
margin: 40px;
text-align:left;
font-size: 2em;
text-shadow: 2px 2px 5px white;
font-family:Arial, Helvetica, sans-serif;
`;
export const Top = styled.div`
display:flex;
justify-content:center;

`;
export const CardChilder = styled.div`
margin:40px;
text-align:center;
`;
export const Check = styled.div`
  display: flex;
  margin: 0px;
  padding: 0px;
  margin-bottom:90px;
   img{
   height:50px;
  };
  h3 {
  margin:0;
  font-size: 36px;
   text-shadow: 2px 2px 5px white;
 font-family:Arial, Helvetica, sans-serif;
  }
`;
// export const Check = styled.div`

// margin-left:30px;
// img{
//   height:50px;
// }
// h3{
//   margin:0;
//   font-size: 36px;
// text-shadow: 2px 2px 5px white;
// font-family:Arial, Helvetica, sans-serif;
// }
// `;
// export default function SkillCard(props){
//     return (
//         <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="w-11/12  p-4 text-center justify-center border-2 border-gray-800 bg-dark-200 rounded-md flex flex-col h-48">
//             <img src={props.img} className="w-20 max-h-20 mx-auto" alt={props.name}></img>
//             <div className="mt-2">
//                 <h1 className="font-bold md:text-xl">{props.name}</h1>
                
//             </div>
//         </div>
//     )
// }

import React from 'react'
import styled from 'styled-components';

const Card = (props) => {
    const { name } = props;
  return (
    <Container>
        <span><img src={props.img}  alt={props.name} style={{alignItems:'center '}}></img ></span>
        <h1>{name}</h1>
    </Container>
  )
}

export default Card;

const Container = styled.div`
    width: 95%;
    height: 70%;
    background:  #191923;
    padding: 1rem;
    text-align: center;
    span{
        font-size: 4rem;
    }
    
    h1{
        font-size: 1.2rem;
        padding-bottom: 1rem;
    }

    p{
        font-size: 0.8rem;
    }
    img {
        width: 100px;
        height: 110px;
        align-items: center;
     }
        
`
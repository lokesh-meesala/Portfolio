import React from 'react'
import styled from 'styled-components';

const Project = (props) => {
    const {link,role, disc,img } = props.item;
  return (
    <Container className='project'>
        <img src={img} alt="project" />
        <div className="disc">
        {/* <div className='role'> */}
            <h3>{role}</h3>
        {/* </div> */}
            <p>{disc}
            <a href={link} target="_blank">Demo</a>
            </p>
        </div>
    </Container>
  )
}

export default Project;

const Container = styled.div`
    height: 10rem;
    background-color: #4e5156;
    margin: 0 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 400ms ease-in-out;
    }
    .disc{
        position: absolute;
        right: 0;
        left: 0;
        bottom: -10rem;
        text-align: left;
        padding: 0.5rem;
        background: linear-gradient(rgba(0,0,0, 0.100), rgba(0,0,0, 0.80));
        transition: all 400ms ease-in-out;
        h1{
            font-size: 1rem;
        }
        h3{
            color: #fff;
            font-size: 1.2rem;
            text-align: top;
            margin-top: 0.5rem;
            margin-left: 0;
        }
        p{
            width: 100%;
            font-size: 0.8rem;
            a{
                margin-left: 10px;
                color: red;
            }
        }
    }

    .role{
        position:absolute;  
        // bottom: -10rem;
        text-align: left;
        padding: 0.5rem;
        background: linear-gradient(rgba(0,0,0, 0.100), rgba(0,0,0, 0.70));
        transition: all 400ms ease-in-out;
        h1{
            font-size: 1.2rem;
            color: #fff;
            text-align: top;
        }
    }


    :hover > img{
        transform: scale(1.3);
    }

    :hover > .disc{
        bottom: 0;
    }
    :hover > .role{
        top: 0;
    }

`
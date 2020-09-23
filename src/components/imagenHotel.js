import React from 'react'
import {graphql, useStaticQuery} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImageBackground = styled(BackgroundImage)`
    height: 700px;
`;

const TextoImagen = styled.div`
    background-image: linear-gradient( to top, rgba(34,48,63,.8), rgba(34,49,63,.8) );
    color: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content:center;

    h1 {
        font-size: 3.5rem;
        margin: 0%;

        @media (min-width: 992px){
            font-size: 5.8rem;
        }
    }

    p{font-size: 2.6rem;}
`;

const ImagenHotel = () => {

const {image} = useStaticQuery(graphql`
query {
    image: file(relativePath: {eq:"News_1200x800px.png"}){
     sharp:childImageSharp{
       fluid{
           ...GatsbyImageSharpFluid_withWebp
                     }
           }
               }
       }
`);

// console.log(image.sharp.fluid);

    return ( 
            <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
                <TextoImagen>
                    <h1>Bienvenidos a Hotel Gatsby</h1>
                    <p>El mejor lugar para tus vacaciones</p> 
                    <p>This is a simple example of a Website built with Gatsby and DatoCMS. We don't have the rights of images.</p>      
                </TextoImagen>
            </ImageBackground> 
            
            );
            
}
 
export default ImagenHotel;
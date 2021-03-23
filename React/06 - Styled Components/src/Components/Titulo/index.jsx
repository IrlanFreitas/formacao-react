// import React from "react";
import styled from 'styled-components'

const Titulo = styled.h1`
  color: ${({ theme }) => theme.text};
  padding: 25px 0;
`

//! Styled Components já entende o funcionamento 
//! do componente, só precisamos estilizar.
// const Titulo = ({ children }) => {
//   return <h1 className="titulo">{children}</h1>;
// };

export default Titulo;

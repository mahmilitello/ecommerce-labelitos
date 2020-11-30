import React from 'react';
import {Header} from './Styled';

export class Cabecalho extends React.Component{
  render(){
    return (
      <Header>
        <h1>LabeLitos</h1>
        <h3>Não são pedras! São Labelitos!</h3>
      </Header>
    );
  };
};
import React from 'react';
import {
  FiltroContainer,
  Chapolin
} from './Styled';
import imgChap from '../img/aerolitochapolin.jpeg';

export class Filtro extends React.Component{
  onChangeMinimoFiltro = (event) => {
    const valor = Number(event.target.value)

    const novoValorFiltro = {
      'minimoValor': valor
    }

    this.props.onChangeFiltro(novoValorFiltro)
  }

  onChangeMaximoFiltro = (event) => {
    const valor = Number(event.target.value)

    const novoValorFiltro = {
      'maximoValor': valor
    }

    this.props.onChangeFiltro(novoValorFiltro)
  }


  render(){
    return (
      <FiltroContainer>
        <h3>Filtros:</h3>
        <p>Valor Máximo</p>
        <input 
          type='number'
          min={0}
          name='valorMaximo' 
          onChange={ this.onChangeMaximoFiltro }  
        />
        <p>Valor Mínimo</p>
        <input 
          type='number'
          min={0}
          name='valorMinimo'
          onChange={ this.onChangeMinimoFiltro }
        />
        <p>Buscar Produto</p>
        <input 
          type='text'
          name='busca'
          value={ this.props.valorBusca }
          onChange={ this.props.mudarBusca }
        />
        <Chapolin src={ imgChap } />
      </FiltroContainer>
    );
  };
};
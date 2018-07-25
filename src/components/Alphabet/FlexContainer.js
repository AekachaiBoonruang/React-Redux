import React, {Component} from 'react';
import styled from 'styled-components';

const FlexContainerLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 420px;
  margin-top: 20px;
  margin-left: 20px;
  font-size: 20px;
  text-align: center;
`;

const GridHeader = styled.div`
  border: 1px solid;
  width: 420px;
  height: 40px;
  text-align: center;
  background-color: yellow;
`;

const FlexItem = styled.div`
  border: 1px solid;
  width: 70px;
  height: 70px;
  font-size: 15px;
`;


function FlexContainer({alphabet}) {

    const ListGridAlphabet = alphabet.map((alphabet) =>
        <FlexItem >{alphabet}</FlexItem>
    );

    return (
        <FlexContainerLayout>
            <GridHeader><b>German Alaphabet</b></GridHeader>
            {ListGridAlphabet}
        </FlexContainerLayout>
    );

}

export default FlexContainer;

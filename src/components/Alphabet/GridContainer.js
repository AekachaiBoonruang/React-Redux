import React from 'react';
import styled from 'styled-components';

const GridContainerLayout = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  display: grid;
  grid-template-rows: 40px repeat(5, 70px);
  grid-template-columns: repeat(6, 70px);
  text-align: center;
  font-size: 20px;
`;

const GridHeader = styled.div`
  border: 1px solid;
  text-align: center;
  grid-column-start: 1;
  grid-column-end: 7;
  background-color: yellow;
`;

const GridItem = styled.div`
  border: 1px solid;
  font-size: 15px;
`;

function GridContainer({alphabet}) {

    const ListGridAlphabet = alphabet.map((alphabet) =>
        <GridItem >{alphabet}</GridItem>
    );

    return (
        <GridContainerLayout>
            <GridHeader><b>German Alaphabet</b></GridHeader>
            {ListGridAlphabet}
        </GridContainerLayout>
    );

}

export default GridContainer;

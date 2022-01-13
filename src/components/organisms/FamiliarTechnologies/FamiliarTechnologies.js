import React from 'react';

import SingleColumn from 'components/molecules/SingleColumn/SingleColumn';
import Columns from 'components/templates/Columns/Columns';
import { Container } from 'components/templates/Container/Container';
import { Title } from 'components/atoms/Title/Title';

import { Wrapper } from './FamiliarTechnologies.styles';

import { familiarTechnologiesData } from 'data/familiarTechnologies';

const FamiliarTechnologies = () => {
  const singleTechnologyInSingleColumnComponent = familiarTechnologiesData.map((technology, index) => (
    <SingleColumn key={index} {...technology} isWhite isTechnology />
  ));

  return (
    <Wrapper>
      <Container>
        <Title isBig isWhite>
          Familiar Technologies
        </Title>
        <Columns>{singleTechnologyInSingleColumnComponent}</Columns>
      </Container>
    </Wrapper>
  );
};

export default FamiliarTechnologies;

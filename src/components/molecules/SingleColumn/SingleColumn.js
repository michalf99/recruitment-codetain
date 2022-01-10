import React from 'react';
import { Wrapper, Icon, Description } from './SingleColumns.styles';
import { Title } from 'components/atoms/Title/Title';

const SingleColumn = ({ icon, title, description }) => {
  return (
    <Wrapper>
      <Icon src={icon} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default SingleColumn;

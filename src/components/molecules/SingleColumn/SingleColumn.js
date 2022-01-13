import React from 'react';
import { Wrapper, Icon } from './SingleColumns.styles';
import { Description } from 'components/atoms/Description/Description';
import { Title } from 'components/atoms/Title/Title';
import PropTypes from 'prop-types';

const SingleColumn = ({ icon, title, description, isWhite, isTechnology }) => {
  return (
    <Wrapper>
      <Icon src={icon} alt={title} isTechnology={isTechnology} />
      <Title isWhite={isWhite} isTechnology={isTechnology}>
        {title}
      </Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

SingleColumn.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default SingleColumn;

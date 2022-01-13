import React, { useState } from 'react';
import { Container } from 'components/templates/Container/Container';
import Columns from 'components/templates/Columns/Columns';

import { Img, StyledSection, ImgWrapper } from './Gallery.styles';

import { images } from 'data/gallery';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const singleImage = images.map((image, index) => (
    <ImgWrapper key={index} isSelected={selectedImage === image}>
      <Img src={image} alt="programming" onClick={() => setSelectedImage(image)} />
    </ImgWrapper>
  ));

  return (
    <StyledSection>
      <Container>
        <div>
          <Img src={selectedImage} alt="selected" isSelected />
        </div>
        <Columns>{singleImage}</Columns>
      </Container>
    </StyledSection>
  );
};

export default Gallery;

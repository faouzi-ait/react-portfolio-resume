import React from 'react';
import styled from 'styled-components';

const ImageStyle = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  
  &:hover {
    // opacity: 0.5;
  }
`;

const ImageLabel = styled.p`
  font-size: 0.8rem;
  font-style: italic;
  font-weight: bold;
  text-align: center;
`;

function Image({ src, label, ...rest }) {
  return (
    <div>
      <ImageStyle src={src} {...rest} />
      <ImageLabel>{label}</ImageLabel>
    </div>
  );
}

export default Image;

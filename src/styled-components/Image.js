import React from 'react';
import styled from 'styled-components';

const ImageStyle = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  transition: all 200ms linear;

  &:hover {
  }
`;

function Image({ src, label, ...rest }) {
  return (
    <div>
      <ImageStyle src={src} {...rest} />
    </div>
  );
}

export default Image;

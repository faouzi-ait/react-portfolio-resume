import React from 'react';
import styled from 'styled-components';

const ImageStyle = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  // border: 2px solid;
  transition: all 300ms ease-in-out;

  &:hover {
    scale: 1.15;
    // opacity: .5;
  }
`;

// const ImageLabel = styled.div`
//   font-size: 0.8rem;
//   font-family: Overpass;
//   font-style: italic;
//   text-align: center;
// `;

function Image({ src, label, ...rest }) {
  return (
    <>
      <ImageStyle src={src} {...rest} />
      {/* <ImageLabel>{label}</ImageLabel> */}
    </>
  );
}

export default Image;

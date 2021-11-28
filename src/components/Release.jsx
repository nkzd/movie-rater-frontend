import React from 'react';
import styled from 'styled-components';

const Release = ({ image, title }) => {
  const addDefaultSrc = (ev) => {
    ev.target.src = `https://via.placeholder.com/175x256?text=${title}`;
  };
  return (
    <StyledPoster>
      <StyledImage
        onError={addDefaultSrc}
        className='img-responsive'
        src={image}
        alt='poster'
      />
    </StyledPoster>
  );
};

const StyledImage = styled.img`
  width: 175px;
  height: 256px;
`;

const StyledPoster = styled.div`
  justify-self: center;
  align-self: center;
`;

export default Release;

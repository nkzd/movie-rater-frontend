import React from 'react';
import styled from 'styled-components';
import Release from './Release';
import ReactStars from 'react-rating-stars-component';
import { rateRelease } from '../util/api';

const RatingRelease = ({ id, image, title, averageRating }) => {
  const ratingChanged = async (newRating) => {
    await rateRelease(id, newRating * 2);
  };
  return (
    <StyledContainer>
      <Release image={image} title={title} />
      <ReactStars
        value={averageRating / 2}
        count={5}
        onChange={ratingChanged}
        size={24}
        isHalf={true}
        activeColor='#ffd700'
      />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default RatingRelease;

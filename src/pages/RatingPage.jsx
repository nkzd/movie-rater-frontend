import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RatingRelease from '../components/RatingRelase';
import { fetchAll } from '../util/api';

const RatingPage = () => {
  const [releases, setReleases] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchReleases();
  }, []);

  const fetchReleases = () => {
    fetchAll()
      .then((response) => {
        setReleases(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  if (error) return `Error: ${error.message}`;

  return (
    <StyledContainer>
      <StyledPosterArea>
        {releases.map((release) => (
          <RatingRelease
            key={release.id}
            id={release.id}
            image={release.image}
            title={release.title}
            averageRating={release.averageRating}
          />
        ))}
      </StyledPosterArea>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  margin-top: 30px;
`;

const StyledPosterArea = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
`;

export default RatingPage;

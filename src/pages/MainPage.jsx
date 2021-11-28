import React, { useState } from 'react';
import styled from 'styled-components';
import Release from '../components/Release';
import { fetchBySearch } from '../util/api';

const MainPage = () => {
  const [releases, setReleases] = useState([]);
  const [type, setType] = useState('movie');
  const [searchQuery, setSearchQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(0);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (searchQuery.length === 0 || searchQuery.length > 2) {
      fetchReleases();
    }
  }, [searchQuery, type, pageNumber]);

  const fetchReleases = () => {
    fetchBySearch(type, searchQuery, pageNumber)
      .then((response) => {
        pageNumber === 0
          ? setReleases(response.data)
          : setReleases([...releases, ...response.data]);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const handleTypeChange = (event) => {
    setPageNumber(0);
    setType(event.target.value);
  };

  const handleSearchChange = (event) => {
    setPageNumber(0);
    setSearchQuery(event.target.value);
  };

  const handleLoadMore = () => {
    setPageNumber(pageNumber + 1);
  };

  if (error) return <div>{`Error: ${error.message}`}</div>;

  return (
    <StyledContainer>
      <div onChange={handleTypeChange}>
        <input type='radio' value='movie' name='type' defaultChecked /> Movies
        <input type='radio' value='tv' name='type' /> TV
      </div>
      <StyledInput
        type='text'
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder='Search'
      />
      <StyledPosterArea>
        {releases.map((release) => (
          <Release
            key={release.id}
            image={release.image}
            title={release.title}
          />
        ))}
        {releases.length > 0 && (
          <LoadMorePoster onClick={handleLoadMore}>Load More...</LoadMorePoster>
        )}
      </StyledPosterArea>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  margin-top: 30px;
`;

const StyledInput = styled.input`
  width: 100%;
`;

const StyledPosterArea = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
`;

const LoadMorePoster = styled.div`
  justify-self: center;
  align-self: center;
  width: 175px;
  height: 256px;
  display: grid;
  place-items: center;
  cursor: pointer;
  color: var(--links);
  text-decoration: underline;
`;

export default MainPage;

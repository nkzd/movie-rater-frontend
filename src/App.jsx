import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import MainPage from './pages/MainPage';
import RatingPage from './pages/RatingPage';

function App() {
  return (
    <StyledContainer>
      <h1>Simple movie ratings</h1>
      <Link to='/'>Home</Link>&nbsp;&nbsp;
      <Link to='/rating'>Rating</Link>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/rating' element={<RatingPage />} />
      </Routes>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
`;

export default App;

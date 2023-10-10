import { Survey } from './components/Survey';
import { ResetButton } from './components/ResetButton';
import { OverallRating } from './components/OverallRating';
import { Rating } from './components/Rating';
import { useState } from 'react';
import { Button } from '@mui/material';

function App() {
  const [state, setState] = useState({});

  return (
    <>
      <h1>Restaurant survey</h1>

      <Survey>
        <Rating ratingAspect="foodQuality">Food quality</Rating>
        <Rating ratingAspect="cleanliness">Cleanliness</Rating>
        <Rating ratingAspect="staff">Staff</Rating>
        <Rating ratingAspect="price">Price</Rating>

        <OverallRating>Overall</OverallRating>

        <ResetButton>Reset</ResetButton>
      </Survey>
      <Button onClick={() => setState({})}>Rerender</Button>
    </>
  );
}

export default App;

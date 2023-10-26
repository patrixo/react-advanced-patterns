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
        <Rating ratingAspect="price">Price</Rating>
        <Rating ratingAspect="staff">Staff</Rating>

        {/* Flexible Compounds components */}
        <OverallRating>Overall</OverallRating>
        <div>
          <ResetButton>Reset</ResetButton>
        </div>
      </Survey>
      <Button onClick={() => setState({})}>Force Rerender App</Button>
    </>
  );
}

export default App;

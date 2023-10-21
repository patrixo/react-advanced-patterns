import { Rating as RatingMUI } from '@mui/material';
import { useContext } from 'react';
import { SurveyContext } from './Survey';

export function OverallRating({ children }) {
  const [state] = useContext(SurveyContext);

  const overallRating =
    Object.values(state).reduce((acc, val) => acc + val, 0) /
    Object.values(state).length;
    
  return (
    <>
      <h3>{children}</h3>
      <RatingMUI precision={0.5} readOnly value={overallRating}></RatingMUI>
    </>
  );
}

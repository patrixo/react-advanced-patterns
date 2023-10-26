import { Rating as RatingMUI } from '@mui/material';
import { useSurveyContextValue } from './Survey';

export function OverallRating({ children }) {
  const state = useSurveyContextValue();

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

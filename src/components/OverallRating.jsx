import { Rating as RatingMUI } from '@mui/material';
import { useSurveyValueContext } from './Survey';

export function OverallRating({ children }) {
  const survey = useSurveyValueContext();

  const overallRating =
    Object.values(survey).reduce((acc, val) => acc + val, 0) /
    Object.values(survey).length;

    console.log('Overall render')
  return (
    <>
      <p>{children}</p>
      <RatingMUI precision={0.5} readOnly value={overallRating}></RatingMUI>
    </>
  );
}

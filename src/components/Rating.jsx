import { useContext } from 'react';
import { Rating as RatingMUI } from '@mui/material';
import { SurveyContext, surveyActionType } from './Survey';

export const Rating = ({ ratingAspect, children }) => {
  const [state, dispatch] = useContext(SurveyContext);

  const updateRating = (_, rating) =>
    dispatch({ type: surveyActionType.update, ratingAspect, rating });

  return (
    <>
      <h3>{children}</h3>
      <RatingMUI value={state[ratingAspect]} onChange={updateRating} />
    </>
  );
};

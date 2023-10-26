import { Rating as RatingMUI } from '@mui/material';
import {
  surveyActionType,
  useSurveyContextUpdate,
  useSurveyContextValue,
} from './Survey';
import { memo, useCallback } from 'react';

export const Rating = ({ ratingAspect, children }) => {
  const state = useSurveyContextValue();
  const dispatch = useSurveyContextUpdate();

  const updateRating = useCallback(
    (_, ratingValue) =>
      dispatch({ type: surveyActionType.rate, ratingAspect, ratingValue }),
    [dispatch, ratingAspect],
  );

  return (
    <RatingMemo ratingAspect={state[ratingAspect]} updateRating={updateRating}>
      {children}
    </RatingMemo>
  );
};

const RatingPC = ({ children, ratingAspect, updateRating }) => {
  console.log('Rating component');

  return (
    <>
      <h3>{children}</h3>
      <RatingMUI value={ratingAspect} onChange={updateRating} />
    </>
  );
};

const RatingMemo = memo(RatingPC);

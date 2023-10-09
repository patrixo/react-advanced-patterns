import { memo, useCallback } from 'react';
import { Rating as RatingMUI } from '@mui/material';
import { surveyActionType, useSurveyMutationContext, useSurveyRating } from './Survey';

const updateRatingAndDoSomeLogic = (dispatch, ratingAspect, rating) => {
  // some logic here...
  dispatch({ type: surveyActionType.update, ratingAspect, rating });
}

export const Rating = ({ ratingAspect, children }) => {
  const rating = useSurveyRating(ratingAspect)
  const dispatch = useSurveyMutationContext();

  const updateRating = useCallback(
    (_, rating) => {
      updateRatingAndDoSomeLogic(dispatch, ratingAspect, rating)
    },
    [dispatch, ratingAspect],
  );

  return (
    <RatingComponent rating={rating} updateRating={updateRating}>
      {children}
    </RatingComponent>
  );
};

const RatingComponent = memo(({ children, rating, updateRating }) => {
  RatingComponent.displayName = 'RatingComponent';
  console.log('Rating render');

  return (
    <>
      <p>{children}</p>
      <RatingMUI value={rating} onChange={updateRating} />
    </>
  );
});

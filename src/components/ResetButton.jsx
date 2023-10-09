import { Button } from '@mui/material';
import { surveyActionType, useSurveyMutationContext } from './Survey';

export const ResetButton = ({ children }) => {
  const dispatch = useSurveyMutationContext();
  console.log('Reset button render');

  const resetSurvey = () => {
    dispatch({ type: surveyActionType.reset });
  };

  return (
    <div style={{display: 'block'}}>
      <Button onClick={resetSurvey}>{children}</Button>
    </div>
  );
};

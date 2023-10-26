import { Button } from '@mui/material';
import { surveyActionType, useSurveyContextUpdate } from './Survey';

export const ResetButton = ({ children }) => {
  const dispatch = useSurveyContextUpdate();
  const resetSurvey = () => {
    dispatch({ type: surveyActionType.reset });
  };

  return <Button onClick={resetSurvey}>{children}</Button>;
};

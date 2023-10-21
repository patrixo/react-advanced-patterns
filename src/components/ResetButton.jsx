import { Button } from '@mui/material';
import { SurveyContext, surveyActionType } from './Survey';
import { useContext } from 'react';

export const ResetButton = ({ children }) => {
  const [_, dispatch] = useContext(SurveyContext);

  const resetSurvey = () => {
    dispatch({ type: surveyActionType.reset });
  };

  return (
      <Button onClick={resetSurvey}>{children}</Button>
  );
};

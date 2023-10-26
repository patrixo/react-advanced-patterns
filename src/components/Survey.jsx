import { createContext, useContext, useReducer } from 'react';
import { Rating } from './Rating';

export const SurveyContextValue = createContext(undefined);
export const SurveyContextUpdate = createContext(undefined);

SurveyContextValue.displayName = 'SurveyContextValue';
SurveyContextUpdate.displayName = 'SurveyContextUpdate';

export const surveyActionType = {
  rate: 'RATE',
  reset: 'RESET',
};

function surveyReducer(state, action) {
  switch (action.type) {
    case surveyActionType.rate: {
      return {
        ...state,
        [action.ratingAspect]: action.ratingValue,
      };
    }
    case surveyActionType.reset: {
      const resetRating = {};
      for (const key in state) {
        resetRating[key] = 0;
      }
      return resetRating;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export const useSurveyContextValue = () => {
  const context = useContext(SurveyContextValue);

  if (!context) {
    throw new Error(
      'useSurveyContextValue has to be used within Survey context provider',
    );
  }

  return context;
};

export const useSurveyContextUpdate = () => {
  const context = useContext(SurveyContextUpdate);

  if (!context) {
    throw new Error(
      'useSurveyContextUpdate has to be used within Survey context provider',
    );
  }

  return context;
};

export const Survey = ({ children }) => {
  const createInitState = () =>
    children
      .filter(child => child.type === Rating)
      .reduce((o, r) => ({ ...o, [r.props.ratingAspect]: 0 }), {});

  const [survey, dispatch] = useReducer(surveyReducer, null, createInitState);
  return (
    <SurveyContextUpdate.Provider value={dispatch}>
      <SurveyContextValue.Provider value={survey}>
        {children}
      </SurveyContextValue.Provider>
    </SurveyContextUpdate.Provider>
  );
};

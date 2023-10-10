import { createContext, useContext, useReducer } from 'react';

const SurveyValuesContext = createContext(null);
const SurveyValuesProvider = SurveyValuesContext.Provider;

const SurveyMutationContext = createContext(null);
const SurveyMutationProvider = SurveyMutationContext.Provider;

SurveyValuesContext.displayName = 'SurveyContext';

export const surveyActionType = {
  update: 'UPDATE',
  reset: 'RESET',
};

function surveyReducer(state, action) {
  switch (action.type) {
    case surveyActionType.update: {
      return {
        ...state,
        [action.ratingAspect]: action.rating,
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

export const useSurveyValueContext = () => {
  const context = useContext(SurveyValuesContext);

  if (!context) {
    throw new Error(
      'useSurveyValueContext must be used inside Survey context provider - <Survey />',
    );
  }
  return context;
};

export const useSurveyRating = surveyAspect => {
  const survey = useSurveyValueContext();
  return survey[surveyAspect];
};

export const useSurveyMutationContext = () => {
  const context = useContext(SurveyMutationContext);
  if (!context) {
    throw new Error(
      'useSurveyMutationContext must be used inside context provider - <Survey />',
    );
  }
  return context;
};

export const Survey = ({ children }) => {
  const createInitState = () => {
    return children
      .filter(item => !!item.props.ratingAspect)
      .reduce((o, r) => ({ ...o, [r.props.ratingAspect]: 0 }), {});
  };

  const [survey, dispatch] = useReducer(surveyReducer, null, createInitState);
  return (
    <SurveyValuesProvider value={survey}>
      <SurveyMutationProvider value={dispatch}>
        {children}
      </SurveyMutationProvider>
    </SurveyValuesProvider>
  );
};

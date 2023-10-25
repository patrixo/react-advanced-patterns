import { createContext, useReducer } from 'react';
import { Rating } from './Rating';

export const SurveyContext = createContext(undefined);

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

export const Survey = ({ children }) => {
  const initState = children
    .filter(child => child.type === Rating)
    .reduce((o, r) => ({ ...o, [r.props.ratingAspect]: 0 }), {});

  const [survey, dispatch] = useReducer(surveyReducer, initState);
  return (
    <SurveyContext.Provider value={[survey, dispatch]}>
      {children}
    </SurveyContext.Provider>
  );
};

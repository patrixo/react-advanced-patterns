import { createContext, useReducer } from 'react';

export const SurveyContext = createContext(null);

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

export const Survey = ({ children }) => {
  const createInitState = () => {
    return children
      .filter(item => !!item.props.ratingAspect)
      .reduce((o, r) => ({ ...o, [r.props.ratingAspect]: 0 }), {});
  };

  const [survey, dispatch] = useReducer(surveyReducer, null, createInitState);
  return (
    <SurveyContext.Provider value={[survey, dispatch]}>
        {children}
    </SurveyContext.Provider>
  );
};

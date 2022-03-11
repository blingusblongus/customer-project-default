export const forms = (state = [], action) => {
  switch (action.type) {
    case 'SET_FORMS':
      return [...action.payload];
    default:
      return state;
  }
};

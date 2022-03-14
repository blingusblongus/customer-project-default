export const forms = (state = [], action) => {
  switch (action.type) {
    case 'SET_FORMS':
      console.log('forms updated');
      return [...action.payload];
    default:
      return state;
  }
};

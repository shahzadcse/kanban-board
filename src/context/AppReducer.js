export default (state, action) => {
  //console.log(state);
  switch (action.type) {
    case "ADD_TASK":
      return {
        cards: [action.payload, ...state.cards],
      };
    default:
      return state;
  }
};

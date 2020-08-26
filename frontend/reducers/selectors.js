export const selectDimensions = (state) => (
  state.entities.dimensions ? Object.values(state.entities.dimensions) : []
);

export const selectMissives = (state) => (
  state.entities.missives ? Object.values(state.entities.missives) : []
);

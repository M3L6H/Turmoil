export const selectComrades = ({ entities: { comrades } }) => (
  comrades ? Object.values(comrades) : []
);

export const selectComradeBeings = ({ entities: { comradeBeings } }) => (
  comradeBeings ? Object.values(comradeBeings) : []
);

export const selectDimensions = (state) => (
  state.entities.dimensions ? Object.values(state.entities.dimensions) : []
);

export const selectMissives = (state) => (
  state.entities.missives ? Object.values(state.entities.missives) : []
);

export const selectSearchBeings = ({ entities: { searchBeings } }) => (
  searchBeings ? Object.values(searchBeings) : []
);

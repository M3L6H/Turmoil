export const selectDimensions = (state) => (
    Object.values(state.entities.dimensions)
);

export const selectMissives = (state) => (
    Object.values(state.entities.missives)
);

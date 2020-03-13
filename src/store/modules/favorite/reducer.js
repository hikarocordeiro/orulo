import produce from 'immer';

export default function favorite(state = [], action) {
  switch (action.type) {
    case '@favorite/ADD':
      return produce(state, draft => {
        const buildingIndex = draft.findIndex(b => b.id === action.building.id);

        if (buildingIndex <= 0) {
          draft.push(action.building);
        }
      });
    case '@favorite/REMOVE':
      return produce(state, draft => {
        const buildingIndex = draft.findIndex(b => b.id === action.id);

        if (buildingIndex >= 0) {
          draft.splice(buildingIndex, 1);
        }
      });
    default:
      return state;
  }
}

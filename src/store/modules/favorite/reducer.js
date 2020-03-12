import produce from 'immer';

export default function favorite(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return produce(state, draft => {
        const buildingIndex = draft.findIndex(b => b.id === action.building.id);

        if (buildingIndex <= 0) {
          draft.push(action.building);
        }
      });
    default:
      return state;
  }
}

export function addToFavorite(building) {
  return {
    type: '@favorite/ADD',
    building,
  };
}

export function removeFromFavorite(id) {
  return {
    type: '@favorite/REMOVE',
    id,
  };
}

export const selectCategoriesMap = (state) => {
  const categoriesArray = Array.isArray(state.categories.categories) ? state.categories.categories : [];
  return categoriesArray.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
};
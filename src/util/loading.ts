type SliceState = {
    type: string;
};

const loadingActions = [
    'addCategoryRequest',
    'getAllCategoryRequest',
    'updateCategoryRequest',
    'addProductRequest',
    'getAllProductRequest',
    'getProductRequest',
    'updateProductRequest',
    'deleteProductRequest',
];

export const isLoading = (slice: SliceState, actions: string[]): boolean => {
    return actions.some(action => slice?.type.endsWith(action));
};

export const isCategoryLoading = (category: SliceState): boolean => {
    return isLoading(category, loadingActions.filter(action => action.includes('Category')));
};

export const isProductLoading = (product: SliceState): boolean => {
    return isLoading(product, loadingActions.filter(action => action.includes('Product')));
};
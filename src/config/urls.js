export const BASE_URL = "http://localhost:8080";

//public endpoints
//export const AUTHENTICATION = `${BASE_URL}/authentication`;
export const LOG_IN_URL = `${BASE_URL}/authentication/login`;
export const SIGN_IN_URL = `${BASE_URL}/authentication/register`;

// Meals endpoints
export const getMealByNameURL = (name) =>`${BASE_URL}/meal/find-by-name/${name}`;
export const CREATE_UPDATE_MEAL_BY_DAY = `${BASE_URL}/meal-programming/create-or-update`;
export const DELETE_MEAL_BY_DAY=`${BASE_URL}/meal-programming/create-or-update`;
export const CALCULATE_INGREDIENTS_BY_MEALS=`${BASE_URL}/meal-programming/calculate-ingredients-by-meals`;
export const MEAL_GET_ALL=`${BASE_URL}/meal/get-all`;
export const deleteMealById = (id) => `${BASE_URL}/meal/delete-by-id/${id}`;

export const MEASU_INGR_GET_ALL = `${BASE_URL}/measured-ingredient/get-all`;
export const MEAL_CREATE_UPDATE = `${BASE_URL}/meal/create-or-update`;
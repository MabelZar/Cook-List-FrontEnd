import React, { createContext, useState, useEffect, useContext } from "react";
import { apiRequest } from "../services/apiRequest";
import { AuthContext } from "../auth/AuthWrapper";


export const MealContext = createContext();


export const MealProvider = ({ children }) => {
    const { authToken } = useContext(AuthContext);
    const [meal, setMeal] = useState([]);
    const [filteredMeal, setFilteredMeal] = useState([]);


    const fetchMeal = async () => {
        try {
            const url = authToken ? "GET_MEAL_URL" : "GET_MEAL_NO_AUTH_URL";
            const headers = authToken ? { Authorization: `Bearer ${authToken}` } : {};
            /*const data = await apiRequest(url, 'GET', null, headers);

            let sortedMeal = [];

            if (authToken) {
                const loggedUserId = parseInt(localStorage.getItem("userId"), 10);
                const userMeal = data.filter(meal => meal.user.id === loggedUserId);
                const otherMeal = data.filter(meal => meal.user.id !== loggedUserId);
                sortedMeal = [...userMeal, ...otherMeal];
            } else {
                sortedMeal = data;
            }

            setMeal(sortedMeal);
            setFilteredMeal(sortedMeal);*/
        } catch (error) {
            console.error('Error fetching destinations:', error);
        }
    };

    useEffect(() => {
        fetchMeal();
    }, [authToken]);

    const refreshMeal = async () => {
        await fetchMeal();
    };

    const filterMeal = (query) => {
        if (!query) {
            setFilteredMeal(meal);
        } else {
            const filtered = meal.filter(
                (meal) =>
                    meal.title.toLowerCase().includes(query.toLowerCase()) ||
                meal.location.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredMeal(filtered);
        }
    };

    return (
        <MealContext.Provider value={{ filteredMeal, setFilteredMeal, filterMeal, refreshMeal }}>
            {children}
        </MealContext.Provider>
    );
};

import axios from "axios";
import {data} from "./cachedApiData";
import { Dessert, DessertThumbnail } from "../models/dessert";

export { getById, getAll }


const API_URL = "https://www.themealdb.com/api/json/v1/1/";
const FETCH_BY_ID_ENDPOINT = API_URL + "lookup.php?i=";
const CATEGORIES_ENDPOINT = API_URL + "filter.php?c=Dessert";


async function apiGet(endpoint, config) {
    console.log("Fetching: " + endpoint);
    try {
        return (await axios.get(endpoint, config));
    }
    catch (error) {
        throw error;
    }
}

function reduceToIngredientsAndMeasures(data) {
    return Object.fromEntries(
        Object.entries(data).filter(
        ([key]) => key.startsWith('strIngredient') || key.startsWith('strMeasure')
        )
    );
}

function zipIngredients(data){
    return Array.from({ length: 20 }, 
        (_, i) => (
        {
            ingredient: data[`strIngredient${i + 1}`]?.trim(),
            measurement: data[`strMeasure${i + 1}`]?.trim() || ""
        }
    )).filter(item => item.ingredient);
}

async function getById(id) {
    const result = await apiGet(FETCH_BY_ID_ENDPOINT + id);
    const recipeData = result.data.meals[0];
    const dessert = new Dessert(
        recipeData.idMeal,
        recipeData.strMeal,
        zipIngredients(reduceToIngredientsAndMeasures(recipeData)),
        recipeData.strInstructions,
        recipeData.strMealThumb,
    );
    return dessert;
}

async function getAll() {
    // const result = await apiGet(CATEGORIES_ENDPOINT);
    // return result.data.meals;
    const wait = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    await wait(2000);
    const result = data.meals.map(dessert => (new DessertThumbnail(dessert.idMeal, dessert.strMeal, dessert.strMealThumb)));
    return result;
}
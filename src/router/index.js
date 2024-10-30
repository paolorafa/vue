import { createRouter, createWebHistory } from "vue-router";
import SearchByLetter from '../views/SearchByLetter.vue'
import MealsByIngredients from '../views/MealsByIngredients.vue'
import MealsByName from '../views/MealsByName.vue'
import DefaultLayoyt from '../components/DefaultLayoyt.vue'
import MealsDetail from '../views/MealsDetail.vue'
import Ingredients from '../views/Ingredients.vue'

const routes = [
    {
        path: '/',
        component: DefaultLayoyt,
        children: [
            {
                path: '',
                name: 'home',
                
            },
            {
                path: '/search-meals',
                name: 'search-meals',
                component: SearchByLetter
            },
            {
                path: '/ingredients',
                name: 'ingredients',
                component: Ingredients
            },
            {
                path: '/meals-by-ingredients/:ingredient',
                name: 'meals-by-ingredients',
                component: MealsByIngredients
            },
            {
                path: '/meals-by-letter',
                name: 'meals-by-letter',
                component: MealsByName
            },
            {
                path: '/search/:letter',
                name: 'byLetter',
                component: SearchByLetter
            },
            {
                path: '/meal/:id',
                name: 'meals-detail',
                component: MealsDetail
            }
        ]
    },
]

const router = createRouter ({
    history: createWebHistory(),
    routes
})

export default router;
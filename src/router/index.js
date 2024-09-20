import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from '../views/HomeComponent.vue';
import List from '../views/List.vue'
import SearchMeal from '../views/SearchMeal.vue'
import MealsByIngredients from '../views/MealsByIngredients.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import DefaultLayoyt from '../components/DefaultLayoyt.vue'

const routes = [
    {
        path: '/',
        component: DefaultLayoyt,
        children: [
            {
                path: '/',
                name: 'home',
                component: HomeComponent
            },
            {
                path: '/search-meals/:meal?',
                name: 'search-meals',
                component: SearchMeal
            },
            {
                path: '/meals-by-ingredients/:ingredient?',
                name: 'meals-by-ingredients',
                component: MealsByIngredients
            },
            {
                path: '/meals-by-letter/:letter?',
                name: 'meals-by-letter',
                component: MealsByLetter
            },
            {
                path: '/letter/:letter',
                name: 'byLetter',
                component: List
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
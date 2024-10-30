import axiosClient from '../axiosClient';

export function SearchMeal({commit}, keyword){
    axiosClient.get(`search.php?s=${keyword}`)
    .then(({data})=>{

        commit('setSearchMeal', data.meals);
        console.log(data.meals);
        
    })
}

export function SearchByLetter({commit}, letter){
    axiosClient.get(`search.php?f=${letter}`)
    .then(({data})=>{

        commit('setSearchByLetter', data.meals);     
        console.log(data.meals);
        
                
    })
}
export function SearchByIngredient({commit}, ingredient){
    axiosClient.get(`filter.php?i=${ingredient}`)
    .then(({data})=>{
        commit('setSearchByIngredient', data.meals || [])
        console.log(data.meals);
    })
}
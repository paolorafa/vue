import axiosClient from '../axiosClient';

export function SearchMeal({commit}, keyword){
    axiosClient.get(`search.php?s=${keyword}`)
    .then(({data})=>{

        commit('setSearchMeal', data.meals)
        console.log(data.meals);
        
    })
}
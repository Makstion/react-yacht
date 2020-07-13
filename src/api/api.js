import * as axios from "axios";

export const axiosLink =  axios.create({
    baseURL: 'https://yacht-react-game.firebaseio.com/'
})

const baseURL = "https://yacht-react-game.firebaseio.com/winners.json";
//
// axios.get('https://yacht-react-game.firebaseio.com/winner.json').then(response =>{
//     console.log(response, 'works!')
// })

export const winnersAPI = {
    setWinner(winner) {
        return axios.post(`${baseURL}`, winner)
    }
}
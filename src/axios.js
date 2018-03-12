import axios from 'axios';

//import in the file you want to use this URL
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

//Global URL will work, this is only work where it is called
export default instance;
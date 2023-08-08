import axios from 'axios';

// creates axios instance
export default axios.create({
    baseURL: `http://localhost:9000/`
});

import axios from 'axios';
import { useAuthStore } from '@stores/auth';
const token = JSON.parse(localStorage.getItem('auth'))?.token;

async function sendRequest (options) {
    const optionsWithToken = Object.assign({}, options, 
        {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Accept': 'application/json'
            },
        }
    );
    const response = await axios(optionsWithToken).catch(function (error) {
        console.log(error.response);
        return error.response;
    });
    if (response.status === 200)
        return response.data;
    else 
        return response;
}

export default sendRequest;
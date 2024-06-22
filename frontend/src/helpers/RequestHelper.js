import axios from 'axios';

const sendGetRequest = async (url) => {

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data);
    }

}

const sendPostRequest = async (url, postParams) => {
    return await axios.post(url, { ...postParams })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            throw new Error(error.response.data);
        });
}


export { sendGetRequest, sendPostRequest };
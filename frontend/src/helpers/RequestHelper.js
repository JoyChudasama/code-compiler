import axios from 'axios';

const sendGetRequest = async (url) => {

    try {
        const response = await axios.get(url);
        return response.data; 
    } catch (error) {
        console.dir(error)
        throw new Error('Oops...Something went wrong. Please try again later.');
    }

}

const sendPostRequest = async (url, postParams) => {
    return await axios.post(url, { ...postParams })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.dir(error)
            throw new Error('Oops...Something went wrong. Please try again later.');
        });
}


export { sendGetRequest, sendPostRequest };
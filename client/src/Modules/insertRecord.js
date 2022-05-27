const axios = require('axios');

const insertRecord = (object) => {
    axios
        .post('http://127.0.0.1:3002/api/post', object)
        .then((response) => {
            return response;
        })
        .catch((err) => {
            console.log(err);
        });
}


export default insertRecord
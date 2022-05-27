const axios = require('axios');

const updateRecord = (object) => {
    axios
        .post('http://127.0.0.1:3002/api/put', object)
        .then((response) => {
            return response;
        })
        .catch((err) => {
            console.log(err);
        });
}

export default updateRecord
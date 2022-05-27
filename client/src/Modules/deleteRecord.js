const axios = require('axios');

const deleteRecord = (id) => {
    axios
        .get(`http://127.0.0.1:3002/api/delete?id=${id}`)
        .then((response) => {
            return response;
        })
        .catch((err) => {
            console.log(err);
        });
}

export default deleteRecord
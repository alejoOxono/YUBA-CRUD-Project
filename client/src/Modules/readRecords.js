const axios = require('axios');

const readRecords = (setData) => {
    axios
        .get('http://127.0.0.1:3002/api/get')
        .then((response) => {
            let result = response.data;
            setData(result);
        })
        .catch((err) => {
            console.log('Error: ' + err);
        })
}


export default readRecords
const { connect } = require("../db");
const { Departamento } = connect.models;

const select = async () => {

    let result = await Departamento.findAll();
    return result;

}

module.exports =  select
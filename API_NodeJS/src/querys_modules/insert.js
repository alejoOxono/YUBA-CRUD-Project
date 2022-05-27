const { connect } = require("../db");
const { Departamento } = connect.models;

const insert = async (data) => {
    
    await Departamento.findOrCreate({
        where: { codigo: data.codigo },
        defaults: {
            departamento: data.departamento
        }
    });
    return;

}

module.exports = insert
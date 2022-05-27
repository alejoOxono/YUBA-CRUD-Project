const { connect } = require("../db");
const { Departamento } = connect.models;

const update = async (data) => {
    
    await Departamento.update({ 
        codigo: data.codigo,
        departamento: data.departamento
    }, {
        where: {
            id: data.id 
        }
    });
    return;

}

module.exports = update
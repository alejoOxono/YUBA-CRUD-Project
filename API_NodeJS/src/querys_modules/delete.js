const { connect } = require("../db");
const { Departamento } = connect.models;

const deleteFunction = async (id) => {

    await Departamento.destroy({
        where: {
            id: id
        }
    });
    return;

}

module.exports = deleteFunction
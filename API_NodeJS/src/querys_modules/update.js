const { connect } = require("../db");
const { Departamento } = connect.models;

const update = async (data) => {

    await User.update({ id: data.id }, {
        where: {
            codigo: data.codigo,
            departamento: data.departamento
        }
    });
    return

}

module.exports = update
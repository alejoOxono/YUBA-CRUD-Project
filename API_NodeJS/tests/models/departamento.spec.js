const { connect } = require('../../src/db.js');
const { Departamento } = connect.models;


describe('Conexión a Base de datos', () => {
  before(() => connect.authenticate()
    .catch((err) => {
      console.error('No fue posible establecer conexión: ', err);
    }));

  beforeEach(() => Departamento.sync({ force: true }));
  describe('Validacion de xcmpos de tabla departamento', () => {
    it('Generará un error si el campo departamento es null', (done) => {
      Departamento.create({ codigo: 23 })
        .then(() => done(new Error('Requiere campos: código y departamento')))
        .catch(() => done());
    });
    it('Generará un error si el campo codigo es null', (done) => {
      Departamento.create({ departamento: 'TICS' })
        .then(() => done(new Error('Requiere campos: código y departamento')))
        .catch(() => done());
    });
  });
});

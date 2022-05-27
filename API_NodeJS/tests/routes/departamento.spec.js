const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');

const agent = session(app);
const datos = {
  codigo: 12,
  departamento: 'Tecnologías de la información',
};

describe('Rutas para la manipulación de la tabla departamento', () => {

  describe('POST /api/post', () => {
    it('Se debería tener una respuesta afirmativa de ingreso de datos', () =>
      agent.post('/api/post')
        .send(datos)
        .then((res) => {
          expect(res.body.response).equal('los datos han sido correctamente ingresados')
        }))
  });

  describe('GET /api/get', () => {
    it('Se debería obtener una respuesta valida cod:200 del servidor', () =>
      agent.get('/api/get').expect(200)
    );
  });

});

module.exports = [
    {
        name: 'apikey',
        type: 'input',
        message: 'Ingresa tu API KEY',
        validate: function( value ) {
            if (value.length) {
              return true;
            } else {
              return 'Por favor ingresa tu api key';
            }
          }
      }


]
module.exports = [
    {
        name: 'email',
        type: 'input',
        message: 'Ingresa tu email',
        validate: function( value ) {
            if (value.length) {
              return true;
            } else {
              return 'Por favor ingresa tu email';
            }
          }
      }


]
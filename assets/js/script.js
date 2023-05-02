var obtenerCodigo = document.querySelector('#obtcodigo');
    var checkbox = document.querySelector('#checkUno');

    function ValidarDescuento(){
      obtenerCodigo.addEventListener('click', function() {
        if (checkbox.checked) {
          var codigoDescuento = ['MNO123ST', 'PQR340XS', 'GUP770LM'];
          var codigoAleatorio = codigoDescuento[Math.floor(Math.random() * codigoDescuento.length)];
          document.querySelector('#codigo').textContent = codigoAleatorio;
        } else {
          alert('Debe aceptar los términos y condiciones');
        }
      });
      
      checkbox.addEventListener('click', function() {
        if (checkbox.checked) {
          document.querySelector('#codigo').textContent = '';
        }
      });  

    }
    
    ValidarDescuento();
 

    
    





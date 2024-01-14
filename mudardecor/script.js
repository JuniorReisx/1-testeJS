
   document.getElementById("botao") .addEventListener('click', function() {
   
      document.body.style.backgroundColor = muda()
      this.style.backgroundColor = muda()
    });
  
  
    function muda() {
      var aleatória = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += aleatória[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  ;
const helloPromise = () => {
    return new Promise( (resolve, reject) => {
  
      let randomBoolean = Math.random() > .5;
  console.log (randomBoolean)
      if(randomBoolean) resolve('Hello!');
      else reject('Whoops!');
  
    });
  }
  
  helloPromise(6.5) 
    .then(response => console.log(response))
    .catch(error => console.log(error));

    // ejemplo promesas 

    function hola(nombre) {
      return new Promise((resolve, reject) => {
          setTimeout(function(){
              console.log("Hola " + nombre);
              resolve(nombre);
          }, 1000);
      })
  }
  
  function hablar(nombre){
      return new Promise((resolve, reject) => {
          setTimeout(function(){
              console.log("Bla bla bla");
              resolve({nombre, apellido: "Gómez"});
          }, 1000);
      });
  }
  
  function adios({nombre, apellido}){
      return new Promise((resolve, reject) => {
          setTimeout(function(){
              console.log(`Adios ${nombre} ${apellido}`);
              resolve();
          }, 1000);
      });
  }
  
  // ---
  
  console.log("Iniciado el proceso...");
  hola("Daniel")
      .then(hablar)
      .then(adios)
      .then(() => {
          console.log("Terminado el proceso");
      })
      .catch(error => {
          console.error("Ha habido un error");
          console.error(error);
      })

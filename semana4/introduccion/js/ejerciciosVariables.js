  // Crear las variables aquí
  var x = 5;
  var y = 10;
  var resultado = x + y;
  document.getElementById("demo").innerHTML = resultado;


  // Crear las variables aquí
  var firstName = "John", lastName = "Doe", age = 35;

  document.getElementById("demo2").innerHTML = firstName + " " + lastName + " tiene " + age + " años";

  let dato, resultado2;

  dato = window.prompt("introduce tu nombre");
  resultado2 = `Hola, como estas ${dato}`
  console.log('resultado2', resultado2, "resultado", resultado);
  document.write(resultado2);

  let dato2, num;

  dato2 = window.prompt("introduce un número");
  num = parseInt(dato2);
  num = num * 2;

  let arrayDeEtiquetas = document.getElementsByClassName("demo3");
  // document.getElementsByClassName("demo3")[0].innerHTML = num;
  // document.getElementsByClassName("demo3")[1].innerHTML = num;
  // document.getElementsByClassName("demo3")[2].innerHTML = num;
  // document.getElementsByClassName("demo3")[3].innerHTML = num;

  for (let index = 0; index < arrayDeEtiquetas.length; index++) {
      document.getElementsByClassName("demo3")[index].innerHTML = num
  }
export const returnArreglo = () => {
  return ["ABCDEFGHIJK", 123456789];
};

//Destructuring del arreglo
const [letras, numeros] = returnArreglo();
console.log(letras, numeros);

//Cómo funciona useState del Reactjs
export const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

const [nombre, setNombre] = useState("Lokesh Pereiro");

//De primeras, podemos decir que el useState tan solo es una funcion que devuelve un arreglo que dentro contiene un valor que recibe y una función que podía modificar el valor que recibe o hacer otra tarea...
console.log(nombre);
setNombre();

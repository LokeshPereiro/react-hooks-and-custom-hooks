## useContext()

--> Contenedor de información que se va a colocar a un nivel superior de la jerarquía al que los componentes hijos pueden acceder a la información, leer y ejecutar los métodos que se encuentran dentro de ese contexto.

- El contexto es una forma de compartir datos que pueden ser considerados "globales" para un árbol de componentes en React, pero sin la necesidad de pasar explícitamente esos datos a través de las props.

## Importante!

- xProvider va a ser nuestro wrapper
- xContext es quien tiene los datos a compartir, por lo que, los componentes consumirán los 'values'

# Memo

Este hook, que no es hook, nos permite saltarnos el rerenderizado de un componente cuando sus props no se han cambiado. "Memorizar un componente"

```
const MemoizedComponent = memo(SomeComponent, arePropsEqual?)
```

# useMemo()

Lo mismo que el anterior que me permite memorizar algún valor, ejecutar una determinada función... sin la necesidad de que se redibuje el componente.

```
const cachedValue = useMemo(calculateValue, dependencies)
```

# useCallback()

<b>useCallback</b> es un Hook de React que te permite almacenar la definición de una función entre renderizados subsecuentes.

```
const cachedFn = useCallback(fn, dependencies)
```

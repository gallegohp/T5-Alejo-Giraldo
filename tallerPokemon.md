# Taller: Consumo de API REST con HttpClient y RxJS

## Enunciado

Desarrollar un servicio en Angular v19 que consuma la PokéAPI y presente un listado de Pokémon con su información de detalle.

La aplicación debe organizarse con la estructura de módulos propia de Angular:

- Módulo raíz
- Servicio
- Componente de lista

El reto técnico central reside en la estructura de la API:

El endpoint de lista devuelve únicamente el nombre y una URL por cada Pokémon; los datos completos solo están disponibles consultando cada URL de forma individual.

La solución debe resolverse con operadores RxJS encadenados en el `pipe` del servicio, sin realizar suscripciones anidadas ni usar `async/await`.

La interfaz debe mostrar tarjetas con:

- Imagen
- Nombre
- Al menos 4 propiedades adicionales

Además, los estados de carga y error deben ser visibles en pantalla.

---

# Endpoints de referencia

Se indican los endpoints de partida. La exploración de la documentación oficial en https://pokeapi.co/docs/v2 hace parte del ejercicio.

## 1. Lista de Pokémon

```http
GET https://pokeapi.co/api/v2/pokemon?limit=20&offset=0
```

Retorna una lista de Pokémon.

Cada elemento del arreglo `results` contiene:

- `name`
- `url`

Los datos de detalle no están incluidos en esta respuesta.

---

## 2. Detalle de Pokémon

```http
GET https://pokeapi.co/api/v2/pokemon/:id_o_nombre
```

Retorna la información completa de un Pokémon.

La URL devuelta por el endpoint anterior apunta directamente a este recurso.

---

# Requerimientos

## Obligatorios

### 1. Configuración del módulo

Registrar `HttpClientModule` en el módulo raíz.

La inyección de `HttpClient` debe funcionar correctamente antes de continuar.

---

### 2. Modelo tipado

Definir interfaces TypeScript que representen:

- La respuesta de lista
- El detalle de un Pokémon

Restricción:

- No se permite el uso de `any`.

---

### 3. Servicio con operadores RxJS

Implementar un método que devuelva:

```ts
Observable<Pokemon[]>
```

Aplicando en su `pipe`, como mínimo:

- `switchMap`
- `forkJoin`
- `map`

Restricción:

- No se aceptan suscripciones anidadas.

---

### 4. Componente de lista

Suscribirse al observable del servicio en:

```ts
ngOnInit()
```

Mostrar las tarjetas usando:

```html
*ngFor
```

Incluir estados visuales de:

- Carga
- Error

---

# Opcionales

## Paginación

Modificar el parámetro:

```txt
offset
```

y volver a disparar la consulta.

---

## Búsqueda con debounce

Crear un campo de texto que utilice:

- `debounceTime`
- `switchMap`

para consultar Pokémon por nombre.

---

## Detalle de tipo

Al seleccionar el tipo de un Pokémon:

1. Consultar el endpoint correspondiente.
2. Mostrar información adicional.

---

## Caché

Utilizar:

```ts
shareReplay(1)
```

para evitar peticiones duplicadas ante múltiples suscriptores.

---

## Comparador de Pokémon

Permitir seleccionar dos Pokémon y mostrar una tabla comparativa de estadísticas utilizando:

```ts
forkJoin
```

---

# Criterios de entrega

## Repositorio

- Publicar en GitHub.
- Utilizar commits descriptivos.
- Incluir README con instrucciones de ejecución.

---

## RxJS

El servicio debe contener y utilizar correctamente:

- `switchMap`
- `forkJoin`

---

## Manejo de errores

Utilizar:

```ts
catchError(...)
```

en el `pipe`

o

la propiedad `error` de la suscripción.

Los errores deben mostrarse visualmente en la interfaz.

---

## Tipado

- Interfaces TypeScript completas.
- Sin uso de `any`.
- Sin tipos ambiguos o inferidos incorrectamente.

---

## Sustentación

Cada aprendiz debe:

1. Explicar el funcionamiento de su proyecto.
2. Responder las preguntas realizadas por el instructor.
# Objetivo Técnico

Construir una aplicación Angular v19 que consuma la PokéAPI utilizando HttpClient y RxJS.

La solución debe:

1. Obtener una lista de Pokémon.
2. Consultar el detalle de cada Pokémon mediante su URL individual.
3. Combinar todas las respuestas utilizando `forkJoin`.
4. Transformar los datos con `map`.
5. Encadenar las peticiones con `switchMap`.
6. Mostrar los resultados en tarjetas.
7. Gestionar estados de carga y error.
8. Mantener tipado estricto en TypeScript sin utilizar `any`.
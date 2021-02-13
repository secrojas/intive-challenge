# Challenge - Intive - Implementar Random User API

## Proyecto en ambiente de producción
[Ver la web](https://intive-challenge-srojas.netlify.app/) del proyecto.

## Descripción del proyecto

Challenge para Intive: Implementar el uso de la api RAMDOMUSER.ME
En primera instancia se muestra un listado de usuarios que se obtiene de la api en cuestión.
Se usa el siguiente endpoint para que siempre traiga los mismos datos:
https://randomuser.me/api/?seed=srojasweb&results=

En la variable results, desde la pantalla inicial se puede setear el rango de usuarios (50/100/200/500).

De esta manera se asegura de siempre obtener el mismo conjunto de datos.

El listado de usuarios muestra nombre completo, imagen pequeña, ciuidad, país e email. Al hacer click sobre el nombre o botón, direcciona a una vista de detalle, donde se observa la imagen de mayor tamaño, nombre completo, ciuidad, país, email, teléfono y domicilio.

**ACLARACION**

Me encontre con el inconveniente de que falla para ver el detalle del usuario. Al ser una api donde no hay un endpoint para consultar un usuario directamente por un ID o algún identificador directamente, tuve que optar por traer todos los registros, según el endpoint indicado inicialmente, con el mayor limite: https://randomuser.me/api/?seed=srojasweb&results=500
Luego recorrer ese listado de resultados y machearlo con el campo uuid del usuario (campo al que no pude acceder probando con algun endpoint a la api, ya que trae siempre resultados ramdon si no especificamos un seed). Este proceso me fallta en alguna parte, ya que no se logra cargar del todo como se pretende.

Adjunto video demostrativo para tratar de mostrar el problema con el que me encontre.

[VER VIDEO](https://youtu.be/mAmyEav8LhQ) del proyecto y su funcionamiento.

**Tecnologías empleadas**

- React JS - Javascript - CSS - HTML
- Estilos con Bootstrap y Material-UI
- Integración con apis
- Implementación de CONTEXT
- Uso de rutas con react-router-dom
- Deploy sobre Netlify


## Clonar el proyecto

Se deben instalar las depencias luego de clonado (ó descargado) el proyecto:

### `npm install`

Ejecutar en el servidor local:

### `npm start`



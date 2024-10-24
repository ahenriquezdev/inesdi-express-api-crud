
# Posts API

Esta API permite gestionar publicaciones (posts), permitiendo crear, obtener, actualizar y eliminar posts en una base de datos temporal utilizando MongoDB en memoria con `MongoMemoryServer` y Mongoose.

## Requisitos

- Node.js
- npm (Node Package Manager)

## Instalación

1. Clona este repositorio o descarga los archivos.
2. Instala las dependencias necesarias:

   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto para configurar el puerto de la aplicación (opcional):

   ```
   PORT=8000
   ```

## Uso

Para iniciar el servidor, ejecuta el siguiente comando:

```bash
npm start
```

La API estará corriendo en `http://localhost:8000`.

## Endpoints

### 1. Crear un nuevo post

```http
POST /api/posts
```

- **Descripción**: Crea un nuevo post en la base de datos.
- **Body (JSON)**:

  ```json
  {
    "title": "Título del post",
    "text": "Contenido del post",
    "author": "Nombre del autor"
  }
  ```

- **Respuesta exitosa (201)**:

  ```json
  {
    "success": true,
    "message": "Post created successfully",
    "data": {
      "id": "64f1a23b91d2a456789b1234",
      "title": "Título del post",
      "text": "Contenido del post",
      "author": "Nombre del autor",
      "createdAt": "2023-10-24T10:00:00.000Z",
      "updatedAt": "2023-10-24T10:00:00.000Z"
    }
  }
  ```

- **Respuesta de error (400)**:

  ```json
  {
    "success": false,
    "message": "Post creation failed"
  }
  ```

### 2. Obtener todos los posts

```http
GET /api/posts
```

- **Descripción**: Obtiene una lista de todos los posts disponibles.
- **Respuesta exitosa (200)**:

  ```json
  {
    "success": true,
    "message": "Posts retrieved successfully",
    "data": [
      {
        "id": "64f1a23b91d2a456789b1234",
        "title": "Primer post",
        "text": "Contenido del primer post",
        "author": "Autor 1"
      },
      {
        "id": "64f1a23b91d2a456789b1235",
        "title": "Segundo post",
        "text": "Contenido del segundo post",
        "author": "Autor 2"
      }
    ]
  }
  ```

- **Respuesta de error (400)**:

  ```json
  {
    "success": false,
    "message": "Posts retrieval failed"
  }
  ```

### 3. Obtener un post por ID

```http
GET /api/posts/:id
```

- **Descripción**: Obtiene un post específico basado en su ID.
- **Parámetro**: `id` (ID del post).
- **Respuesta exitosa (200)**:

  ```json
  {
    "success": true,
    "message": "Post retrieved successfully",
    "data": {
      "id": "64f1a23b91d2a456789b1234",
      "title": "Título del post",
      "text": "Contenido del post",
      "author": "Nombre del autor"
    }
  }
  ```

- **Respuesta de error (404)**:

  ```json
  {
    "success": false,
    "message": "Post not found"
  }
  ```

### 4. Actualizar un post por ID

```http
PATCH /api/posts/:id
```

- **Descripción**: Actualiza un post existente en la base de datos.
- **Parámetro**: `id` (ID del post).
- **Body (JSON)**:

  ```json
  {
    "title": "Nuevo título",
    "text": "Nuevo contenido"
  }
  ```

- **Respuesta exitosa (200)**:

  ```json
  {
    "success": true,
    "message": "Post updated successfully",
    "data": {
      "id": "64f1a23b91d2a456789b1234",
      "title": "Nuevo título",
      "text": "Nuevo contenido",
      "author": "Nombre del autor"
    }
  }
  ```

- **Respuesta de error (404)**:

  ```json
  {
    "success": false,
    "message": "Post not found"
  }
  ```

- **Respuesta de error (400)**:

  ```json
  {
    "success": false,
    "message": "Post update failed",
    "error": "Error message here"
  }
  ```

### 5. Eliminar un post por ID

```http
DELETE /api/posts/:id
```

- **Descripción**: Elimina un post específico de la base de datos.
- **Parámetro**: `id` (ID del post).
- **Respuesta exitosa (200)**:

  ```json
  {
    "success": true,
    "message": "Post deleted successfully"
  }
  ```

- **Respuesta de error (404)**:

  ```json
  {
    "success": false,
    "message": "Post not found"
  }
  ```

## Uso de MongoMemoryServer

Esta API utiliza MongoDB en memoria para el almacenamiento temporal de datos, implementado con `MongoMemoryServer`. Los datos no se persisten fuera de la ejecución de la aplicación, lo que la hace ideal para pruebas o desarrollo local.

## Tecnologías utilizadas

- Node.js
- Express
- MongoMemoryServer con Mongoose

## Licencia

Este proyecto está bajo la licencia MIT.

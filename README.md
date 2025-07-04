# Sistema de Gestión de Inventario Quirúrgico (API RESTful)

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">Una robusta API construida con NestJS, TypeORM y MySQL, diseñada para la administración eficiente de un inventario de instrumental quirúrgico.</p>

---

## Configuración Inicial

Para poner en marcha este proyecto, asegúrate de contar con las siguientes herramientas en tu entorno de desarrollo:

* *Node.js*: Imprescindible. Se recomienda la versión 18 o superior.
* *npm (Node Package Manager)*: Viene incluido con la instalación de Node.js.
* *Servidor MySQL*: Necesitarás una instancia de MySQL en funcionamiento. Puedes utilizar soluciones como Laragon, XAMPP, WAMP, MAMP, o una instalación directa de MySQL.
* *NestJS CLI*: La interfaz de línea de comandos de NestJS. Si aún no la tienes, instálala globalmente:
    bash
    npm install -g @nestjs/cli
    

## Guía de Inicio Rápido

Sigue estos sencillos pasos para tener la API funcionando en tu máquina local:

1.  *Clona el repositorio del proyecto:*
    Abre tu terminal y ejecuta:
    bash
    git clone [https://https://github.com/JDiego2022/tallerFinalNest]
    cd proyecto_final
    

2.  *Instala las dependencias del proyecto:*
    Una vez dentro del directorio del proyecto, instala todas las librerías necesarias:
    bash
    npm install
    

3.  *Configura la conexión a la base de datos:*
    En la *raíz de tu proyecto*, crea un archivo llamado .env y añade tus credenciales de MySQL. Asegúrate de que los valores coincidan con tu configuración local:
    
    DB_HOST=localhost
    DB_PORT=3306
    DB_USERNAME=root
    DB_PASSWORD=tu_contraseña_mysql  # <--- ¡IMPORTANTE! Reemplaza con tu contraseña real de MySQL
    DB_DATABASE=inventario_quirurgico
    PORT=3000
    
    *Nota Importante:* La base de datos inventario_quirurgico debe existir en tu servidor MySQL. Si aún no la has creado, hazlo antes de iniciar la API (puedes usar HeidiSQL en Laragon, phpMyAdmin, MySQL Workbench, o tu cliente MySQL preferido).

4.  *Inicia el servidor de la API:*
    Con la base de datos creada y el archivo .env configurado, puedes iniciar la aplicación en modo de desarrollo:
    bash
    npm run start:dev
    
    La API estará accesible en http://localhost:3000 (o el puerto que hayas especificado en tu archivo .env). TypeORM se encargará de sincronizar automáticamente el esquema de la base de datos con las entidades definidas en el código.

---
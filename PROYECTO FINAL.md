* Debe crear una base de datos acerca de Libros y Autores:

```sql
CREATE TABLE Libro (id INT, ISBN VARCHAR(16) NOT NULL, title VARCHAR(512) NOT NULL, autor_license VARCHAR(12), FOREIGN KEY (autor_license) REFERENCES Autor(license), editorial TINYTEXT, pages SMALLINT, year SMALLINT NOT NULL, genre TINYTEXT, language TINYTEXT NOT NULL, format TINYTEXT, sinopsis TEXT, content TEXT);
```

```sql
CREATE TABLE Autor (id INT, license VARCHAR(12) NOT NULL, name TINYTEXT NOT NULL, lastName TINYTEXT, secondLastName TINYTEXT, year SMALLINT);
```

### PUNTOS EXTRA: Como puede apreciar en el bloque de Código SQL, existe una relación entre Libros y Autor (Se ha removido el PK/FK para evitar conflictos con la generación aleatoria)

* Debe crear 2 usuarios en MySQL, donde el Usuario 'A' puede crear y ver datos en la tabla 'Libros', así como ver datos de la tabla 'Autor'.
* El Usuario 'B' puedes crear y ver datos de la tabla 'Autor', así como ver datos de la tabla 'Libros'
* Generar un reporte de rendimiento para MySQL que mida los siguientes aspectos de la base de datos:
  - El tiempo que toma crear 100,000 Libros en la Base de Datos usando datos aleatorios en CSV
  - El tiempo que toma insertar el CSV
  - El tiempo que toma insertar masivamente, estresando la base de datos con 3,500 Libros
  - El tiempo que toma generar 100 archivos CSV, donde cada archivo incluye 1000 Libros
  - El tiempo que toma insertar los 100 archivos a MySQL
  - El tiempo que toma obtener en 1 solo query: El mayor número de paginas, menor número de páginas, el promedio de número de páginas, el año más cercano a la actualidad, el año más antigüo, y el número total de libros.
  - El tiempo que toma generar 150,000 Autores (Decidan de qué forma generarlos) e insertarlos
  - El tiempo que toma exportar ambas tablas a CSV
  - El tiempo que toma respaldar ambas tablas a MongoDB, eliminarlas de MySQL, exportar el respaldo de MongoDB y restaurarlo en MySQL.
  - El tiempo que toma hacer el dump de toda la base de datos de MySQL ("Snapshot")
  - El tiempo que toma importar de nuevo todo el "snapshot" de la base de datos

* Usando un usuario diferente a 'A' y 'B', mida el tiempo que toma fallar cuando intenta insertar un Autor
* Usando un usuario diferente a 'A' y 'B', mida el tiempo que toma fallar cuando intenta insertar un Libro

* Por último, genere 1,000,000 de datos en MongoDB para libros, exporte solamente los campos: ISBN, year y pages a un CSV
  - De este CSV, cree una tabla nueva llamada "old_books" en MySQL e importe los datos del CSV anterior

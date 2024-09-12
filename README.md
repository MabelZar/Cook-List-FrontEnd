# Cook-List-FrontEnd 

# Descripción del Proyecto 📖   
Este proyecto es una aplicación web que permite a los usuarios tener una programacion semanal de las comidas de la semana  y tener una lista de compras de acuerdo a ella. El proyecto esta desarrollado con Java para el back-end haciendo uso de la estructura MVC de 3 capas y la creación de una API con SpringBoot y por el front-end se conectara a una base de datos PostgreSQL con React.js  

# Funcionalidades 📋    

Autenticación:   

Formulario de registro que solicita nombre, e-mail, integrantes de la familia y contraseña. Formulario de acceso que solicita e-mail y contraseña.  

Menu Semanal:  

Los usuarios autenticados podrán acceder a la applicacion y crear su propia programacion semanal de comidas segun la semana seleccionada, podran seleccionar una comida por dia y tendran la opcion de editar y eliminar el plato seleccionado.  

Tendra un botón para guardar la programación semanal y confirmación de exito.  

Visualizar la lista de ingredientes correspondientes a los platos programados por semana. Además podrá marcar cada ingrediente como completado.  

Podra compartir la lista generada por WhatsApp.  

Buscador de Platos: Permite mostrar una lista de platos a tiempo real mientras el usuario escriba en el.  

Comidas:  

Podra crear un nuevo plato con sus ingredientes y cantidad necesarios.   

# Tecnologías Utilizadas 🛠️  

Back-end:  

Java  

SpringBoot  

PostgreSQL  
 

Front-end: 

HTML  

Tailwind  

JavaScript  

React.js  

# Otras Herramientas:    

Maven    

Postman

IDE(Eclipce)  

# Cómo usar la aplicación 🔧  

Clonar el repositorio  

`git clone https://github.com/tuusuario/Cook-List-BackEnd.git`   

# Back-end  

 Configuración del Back-end  

1. Crea una base de datos en PostgreSQL  

2. Modifica las propiedades de conexión en el archivo application.properties  
```
spring.datasource.url=jdbc:postgresql://localhost:5432/nombre_de_tu_base_de_datos
spring.datasource.username=tu_usuario
spring.datasource.password=tu_contraseña
```  

Construir y ejecutar el back-end:  
```
cd cook-list-backend
mvn clean install
mvn spring-boot:run
```  

# Front-end  

Configuración del Front-End  

1. Instalar dependencias del Front-end  
```
cd cook-list-frontend
npm install
npm start
o npm run dev
```  

# Contribución 🤝   

1. Haz un fork al repositorio.  

2. Crea una nueva rama: `git checkout -b feature/name.`   

3. Haz tus cambios.  

4. Haz push de tu rama: `git push origin feature/name.`  

5. Crea un pull request.  

# Autora ✒️   
 
Mabel Zárate Espíritu https://github.com.MabelZar  


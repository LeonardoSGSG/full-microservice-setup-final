# Full Microservice Setup – Intercorp Retail

Este proyecto contiene la arquitectura completa basada en microservicios para la prueba técnica de Intercorp Retail. Incluye 4 microservicios, base de datos PostgreSQL, Kafka, Zookeeper, un frontend Angular y un archivo `docker-compose.yml` para facilitar el despliegue.

## 🧱 Estructura del Proyecto

```
full-microservice-setup/
│
├── docker-compose.yml
├── README.md
│
├── ms01-consumer-db/          # Consume mensajes de Kafka y guarda en PostgreSQL
├── ms02-transform-timestamp/ # Agrega timestamps a los mensajes y los reenvía
├── ms04-rest-api/            # Expone datos combinados de Kafka y BD vía REST
├── ms05-xml-reader/          # Lee archivos XML y publica en Kafka
```

---

## 🚀 ¿Cómo ejecutar el proyecto?

### ✅ Requisitos

- Docker
- Docker Compose

### 🧩 Comandos

1. Clona este repositorio:

   ```bash
   git clone https://github.com/LeonardoSGSG/full-microservice-setup.git
   cd full-microservice-setup
   ```

2. Levanta todos los servicios:

   ```bash
   docker-compose up --build
   ```

3. Listo 🎉. Los servicios estarán corriendo en:

   - `ms05-xml-reader`: http://localhost:8081
   - `ms01-consumer-db`: http://localhost:8082
   - `ms02-transform-timestamp`: http://localhost:8083
   - `ms04-rest-api`: http://localhost:8084
   - `Frontend Angular`: http://localhost:4200

4. PostgreSQL estará disponible en:
   - **Host:** `localhost`
   - **Puerto:** `5432`
   - **Base de datos:** `persondb`
   - **Usuario:** `leonardo`
   - **Contraseña:** `admin`

---

## 📦 Tecnologías utilizadas

- Angular 17 (standalone API)
- NGINX (para servir la app Angular)
- Java 17
- Spring Boot 3.5.0
- Apache Kafka + Zookeeper
- PostgreSQL
- Docker & Docker Compose

---

## 🧪 Endpoints de prueba

- `GET http://localhost:8084/api/data/db`  
  Devuelve las personas almacenadas en la base de datos.

- `GET http://localhost:8084/api/data/consolidated`  
  Devuelve los datos combinados entre Kafka y la base de datos.

---

## 💻 Funcionalidad del Frontend

La aplicación Angular (intercorp-retail-frontend) permite visualizar los datos consolidados obtenidos desde el microservicio ms04-rest-api.
Características:

Tabla con todos los registros.

Búsqueda por nombre, apellido, ciudad, país o correo electrónico.

Muestra la fecha y hora de la última actualización realizada desde el scheduler (MS05).

El frontend es compilado y servido automáticamente desde NGINX.

No es necesario ejecutar ng serve.

---

## 📂 Consideraciones de entrega

- Cada microservicio contiene su propio `Dockerfile`.
- Todo el ecosistema es orquestado por un solo `docker-compose.yml`.
- Flujo esperado de los datos:
  XML
  ↓
  Microservicio 05
  ↓
  Kafka Topic 01
  ├──→ Microservicio 01 → PostgreSQL
  ↓
  Microservicio 02
  ↓
  Kafka Topic 02
  ├──→ PostgreSQL (a través de MS01, indirectamente)
  ↓
  Microservicio 04
  ↓
  Angular Frontend

---

## 📝 Autor

Leonardo Sipión  
Prueba técnica – Intercorp Retail  
Junio 2025

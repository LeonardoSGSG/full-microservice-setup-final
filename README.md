# Full Microservice Setup – Intercorp Retail

Este proyecto contiene la arquitectura completa basada en microservicios para la prueba técnica de Intercorp Retail. Incluye 4 microservicios, base de datos PostgreSQL, Kafka, Zookeeper y un archivo `docker-compose.yml` para facilitar el despliegue.

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
   git clone https://github.com/tu-usuario/full-microservice-setup.git
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

4. PostgreSQL estará disponible en:
   - **Host:** `localhost`
   - **Puerto:** `5432`
   - **Base de datos:** `persondb`
   - **Usuario:** `leonardo`
   - **Contraseña:** `admin`

---

## 📦 Tecnologías utilizadas

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

## 📂 Consideraciones de entrega

- Cada microservicio contiene su propio `Dockerfile`.
- Todo el ecosistema es orquestado por un solo `docker-compose.yml`.
- Se espera que los datos fluyan desde XML → Kafka → BD → REST.

---

## 📝 Autor

Leonardo Sipión  
Prueba técnica – Intercorp Retail  
Junio 2025

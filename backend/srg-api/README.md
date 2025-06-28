# 🧾 API – Sistema de Gestión de Reservas (SGR)

Este proyecto forma parte del desarrollo del sistema SGR, orientado a la gestión de reservas para restaurantes. El backend fue construido con **Node.js + Express** y expone una API REST con operaciones CRUD básicas.

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express.js
- CORS
- JSON como almacenamiento simulado (por ahora)
- Git y GitHub para control de versiones

---

## 🧩 Endpoints disponibles

| Método | Ruta                  | Descripción                    |
|--------|------------------------|--------------------------------|
| GET    | /api/reservas          | Obtener todas las reservas     |
| POST   | /api/reservas          | Crear una nueva reserva        |
| PUT    | /api/reservas/:id      | Editar una reserva existente   |
| DELETE | /api/reservas/:id      | Eliminar una reserva           |

---

## 📌 Ejemplo de JSON para POST/PUT

```json
{
  "nombre": "Pedro López",
  "fecha": "2025-06-30",
  "hora": "19:30",
  "personas": 3,
  "mesa": "2"
}

## 🌍 **Sistema de Idiomas**

Para garantizar la compatibilidad multilingüe en la plataforma, se implementará una estructura de datos específica para gestionar los idiomas disponibles.

### 📌 **Estructura de la Base de Datos**
Se creará una tabla para almacenar los idiomas soportados, con el siguiente esquema:

| Campo            | Tipo        | Descripción                                   |
|-----------------|------------|-----------------------------------------------|
| `id`            | Entero (PK) | Identificador único del idioma.              |
| `language_name` | Texto       | Nombre del idioma (ej. "English", "Español"). |
| `language_code_2` | Texto (2)  | Código ISO 639-1 de dos caracteres (ej. "en", "es"). |
| `language_code_3` | Texto (3)  | Código ISO 639-2/3 de tres caracteres (ej. "eng", "spa"). |
| `created_at`    | Timestamp   | Fecha de creación del registro.              |
| `updated_at`    | Timestamp   | Fecha de la última actualización.            |

### ⚙️ **Configuración Inicial del Idioma**
- **Idioma predeterminado de la plataforma:** Inglés (`English`).
- **Idioma base para las frases y contenidos:** Inglés (`English`).

### 🔍 **Notas y Futuras Implementaciones**
📌 En versiones futuras, el sistema podrá admitir múltiples idiomas y ofrecer traducciones dinámicas de contenido y frases dentro de la plataforma.
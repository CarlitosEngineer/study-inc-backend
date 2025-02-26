
# Models

## Module - Global

### **Tabla `languages` (Lengauges)**

| Campo        | Tipo        | Descripción |
|-------------|------------|-------------------------------------------|
| `id`        | Entero (PK) | Identificador único del idioma.          |
| `language_name` | Texto   | Nombre del idioma (ej. "English", "Español"). |
| `language_code_2` | Texto (2) | Código ISO 639-1 (ej. "en", "es"). |
| `language_code_3` | Texto (3) | Código ISO 639-2/3 (ej. "eng", "spa"). |
| `direction_id` | Entero (FK) | Referencia a `text_directions.id`. |
| `is_active` | Booleano | Define si el idioma está activo en el sistema. |
| `created_at` | Timestamp | Fecha de creación del registro. |
| `updated_at` | Timestamp | Fecha de la última actualización. |

### **Tabla `text_directions` (Traducciones de citas)**

| Campo      | Tipo        | Descripción |
|-----------|------------|---------------------------------|
| `id`      | Entero (PK) | Identificador único de la dirección. |
| `name`    | Texto       | Nombre (`"Left to Right"`, `"Right to Left"`). |
| `code`    | Texto (3)   | Código (`"LTR"`, `"RTL"`). |
| `created_at` | Timestamp | Fecha de creación. |
| `updated_at` | Timestamp | Fecha de actualización. |

## Module - Quotes

### **Tabla `quotes` (Citas)**
| Campo         | Tipo        | Descripción |
|--------------|------------|------------------------------------------------|
| `id`         | Entero (PK) | Identificador único de la frase. |
| `text`       | Texto       | Contenido de la frase en el idioma original. |
| `year`       | Entero      | Año de creación o referencia de la frase. |
| `author_id`  | Entero (FK) | Referencia a `authors.id`. |
| `source_id`  | Entero (FK) | Referencia a `sources.id`. |
| `languages_id` | Entero (FK) | Referencia a `languages.id`. |
| `created_at` | Timestamp   | Fecha de creación del registro. |
| `updated_at` | Timestamp   | Fecha de la última actualización. |

### **Tabla `categories` (Categorías de citas)**
| Campo  | Tipo        | Descripción |
|--------|------------|------------------------------------------------|
| `id`   | Entero (PK) | Identificador único de la categoría. |
| `name` | Texto       | Nombre de la categoría (Ejemplo: "Motivacional", "Histórica"). |

### **Tabla `quote_categories` (Relación Cita-Categoría, Many-to-Many)**
| Campo      | Tipo        | Descripción |
|------------|------------|------------------------------------------------|
| `id`       | Entero (PK) | Identificador único de la relación. |
| `quote_id` | Entero (FK) | ID de la cita en la tabla `quotes`. |
| `category_id` | Entero (FK) | ID de la categoría en la tabla `categories`. |

### **Tabla `quote_translations` (Traducciones de citas)**
| Campo       | Tipo        | Descripción |
|------------|------------|------------------------------------------------|
| `id`       | Entero (PK) | Identificador único de la traducción. |
| `quote_id` | Entero (FK) | ID de la cita en la tabla `quotes`. |
| `text`     | Texto       | Texto de la cita traducida. |
| `language` | Texto (ISO) | Código del idioma (`"es"`, `"en"`, `"fr"`, etc.). |

### **Tabla `sources` (Fuentes de citas)**

| Campo       | Tipo        | Descripción |
|------------|------------|-----------------------------------------------|
| `id`       | Entero (PK) | Identificador único de la fuente.            |
| `name`     | Texto       | Nombre de la fuente (ej. "Hamlet", "Star Wars"). |
| `type`     | Texto       | Tipo de fuente (ej. "Libro", "Película", "Serie", "Discurso", etc.). |
| `year`     | Entero      | Año de publicación o lanzamiento (si aplica). |
| `created_at` | Timestamp | Fecha de creación del registro.              |
| `updated_at` | Timestamp | Fecha de la última actualización.            |

### **Tabla `authors` (Autores)**
| Campo         | Tipo        | Descripción |
|--------------|------------|------------------------------------------------|
| `id`         | Entero (PK) | Identificador único del autor. |
| `name`       | Texto       | Nombre completo del autor (ej. "Albert Einstein"). |
| `birth_year` | Entero      | Año de nacimiento (opcional). |
| `death_year` | Entero      | Año de fallecimiento (opcional, `NULL` si sigue vivo). |
| `nationality` | Texto      | Nacionalidad del autor (ej. "Alemán"). |
| `description` | Texto      | Breve biografía del autor (opcional). |
| `created_at` | Timestamp   | Fecha de creación del registro. |
| `updated_at` | Timestamp   | Fecha de la última actualización. |


## Module - Global

### 📌 **Estructura de la Base de Datos**




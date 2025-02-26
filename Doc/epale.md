
#### **Tabla `languages` (Lengauges)**
Registro de lenguages

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

#### **Tabla `text_directions` (Traducciones de citas)**
en que direccion para leer los lenguages

| Campo      | Tipo        | Descripción |
|-----------|------------|---------------------------------|
| `id`      | Entero (PK) | Identificador único de la dirección. |
| `name`    | Texto       | Nombre (`"Left to Right"`, `"Right to Left"`). |
| `code`    | Texto (3)   | Código (`"LTR"`, `"RTL"`). |
| `created_at` | Timestamp | Fecha de creación. |
| `updated_at` | Timestamp | Fecha de actualización. |

---

### **Tabla `quotes` (Citas)**
Almacena las citas con sus atributos principales.

| Campo        | Tipo        | Descripción |
|-------------|------------|------------------------------------------------|
| `id`        | Entero (PK) | Identificador único de la cita. |
| `text`      | Texto       | Contenido de la cita en el idioma original. |
| `year`      | Entero      | Año de creación o referencia de la cita. |
| `author_id` | Entero (FK) | Referencia a `authors.id`. |
| `source_id` | Entero (FK) | Referencia a `sources.id`. |
| `language_id` | Entero (FK) | Referencia a `languages.id`. |
| `status_id` | Entero (FK) | Referencia a `statuses.id`. |
| `created_at` | Timestamp  | Fecha de creación del registro. |
| `updated_at` | Timestamp  | Fecha de la última actualización. |

### **Tabla `categories` (Categorías de Citas)**
Define las **categorías principales** para clasificar citas.

| Campo  | Tipo        | Descripción |
|--------|------------|------------------------------------------------|
| `id`   | Entero (PK) | Identificador único de la categoría. |
| `name` | Texto       | Nombre de la categoría (Ejemplo: "Citas según su origen"). |
| `slug` | Texto (ÚNICO) | Nombre en formato URL (`citas-segun-su-origen`). |

### **Tabla `subcategories` (Subcategorías de Citas)**
Cada categoría tiene **subcategorías** específicas (Ejemplo: "Citas científicas" dentro de "Citas según su origen").

| Campo        | Tipo        | Descripción |
|-------------|------------|------------------------------------------------|
| `id`        | Entero (PK) | Identificador único de la subcategoría. |
| `category_id` | Entero (FK) | Referencia a `categories.id` (la categoría padre). |
| `name`      | Texto       | Nombre de la subcategoría (Ejemplo: "Cita científica"). |
| `slug`      | Texto (ÚNICO) | Nombre en formato URL (`cita-cientifica`). |
| `description` | Texto      | Descripción breve de la subcategoría. |

### **Tabla `quote_subcategories` (Relación Citas-Subcategorías)**
Relación **Many-to-Many** entre `quotes` y `subcategories`, asegurando que cada cita tenga **una sola subcategoría por cada categoría**.

| Campo        | Tipo        | Descripción |
|-------------|------------|------------------------------------------------|
| `id`        | Entero (PK) | Identificador único del registro. |
| `quote_id`  | Entero (FK) | Referencia a `quotes.id`. |
| `subcategory_id` | Entero (FK) | Referencia a `subcategories.id`. |
| `category_id` | Entero (FK) | Referencia a `categories.id`, extraída desde `subcategories`. |

### **Tabla `statuses` (Estados de Citas)**
Almacena los diferentes estados posibles de una cita, permitiendo flexibilidad en caso de que se necesiten agregar nuevos estados en el futuro.

| Campo  | Tipo        | Descripción |
|--------|------------|------------------------------------------------|
| `id`   | Entero (PK) | Identificador único del estado. |
| `name` | Texto       | Nombre del estado (Ejemplo: "Pendiente", "Aprobado", "Rechazado"). |
| `slug` | Texto (ÚNICO) | Versión en texto plano para búsquedas y URLs (`pending`, `approved`, `rejected`). |
| `created_at` | Timestamp  | Fecha de creación del registro. |
| `updated_at` | Timestamp  | Fecha de la última actualización. |
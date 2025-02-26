
# ⚙️ Module - Quote

## 📌 Quote - Funcionalidad

### 📌 1️⃣ Quote - requirements

### 📌 2️⃣ Quote - requirements not

## 📌 Quote - Models

### **Tabla `quotes` (Citas)**
| Campo         | Tipo        | Descripción |
|--------------|------------|------------------------------------------------|
| `id`         | Entero (PK) | Identificador único de la frase. |
| `text`       | Texto       | Contenido de la frase en el idioma original. |
| `year`       | Entero      | Año de creación o referencia de la frase. |
| `author`     | Texto       | Autor de la frase (puede ser `"Anónimo"` si se desconoce). |
| `source`     | Texto       | Fuente de la cita (libro, película, conferencia, etc.). |
| `language`   | Texto (ISO) | Código del idioma original (`"es"`, `"en"`, `"fr"`, etc.). |
| `created_at` | Timestamp   | Fecha de creación del registro. |
| `updated_at` | Timestamp   | Fecha de la última actualización. |

#### Reglas del modelo:

1. ✅ **Una cita puede pertenecer a múltiples categorías**, pero **solo una por cada clasificación**.  
2. ❌ **No se puede asignar dos etiquetas de la misma clasificación** (ejemplo: no puede ser *"Cita textual original"* y *"Cita traducida"* a la vez).  
3. ✅ **Las citas pueden tener etiquetas de diferentes clasificaciones**, lo que permite una búsqueda y organización más flexible.  

### 📌 Model - Quote (Cita)

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

### 📌 Model - Quote (Cita)




---

## ⚙️ **Opciones de filtrado y ordenación**

La API ofrecerá filtros avanzados para mejorar la experiencia de búsqueda:  

- 📌 **Filtrar por categoría**.  
- 📌 **Filtrar por autor**.  
- 📌 **Filtrar por año de creación**.  
- 📌 **Ordenar por popularidad (más votadas)**.  




// ----///////////////////////////////////////////////////////////////////


### **📌 Opinión y mejoras sobre el modelo de base de datos de citas**  

Tu modelo es bastante sólido y funcional para almacenar citas. Sin embargo, hay algunas mejoras que podrías considerar para hacerlo más flexible, escalable y adaptable a futuras funcionalidades.  

---

## **✅ Puntos fuertes de tu modelo**
1. **Sencillo y eficiente** → Guarda lo esencial sin redundancia.  
2. **Campos bien definidos** → Identificación (`id`), contenido (`text`), metadatos (`year`, `author`), y control de cambios (`created_at`, `updated_at`).  
3. **Evita datos nulos** → Usa `"Anónimo"` cuando el autor es desconocido, evitando valores `NULL`.  

---

## **🔍 Sugerencias de mejora**
Aquí hay algunos puntos que podrías considerar para mejorar tu modelo:  

### **1️⃣ Agregar una clave foránea para categorías**  
- Actualmente, el modelo no tiene una forma clara de asociar una cita con su(s) categoría(s).  
- **Solución:** Crear una tabla `categories` y una tabla intermedia `quote_categories` para manejar la relación.  

---

### **2️⃣ Agregar soporte para múltiples idiomas**  
- Actualmente, `text` solo almacena una versión de la cita en un único idioma.  
- **Solución:** Crear una tabla `quote_translations` para manejar traducciones de la misma cita.  

---

### **3️⃣ Agregar un campo de fuente**  
- Algunas citas provienen de libros, películas, discursos, etc.  
- **Solución:** Agregar `source` como campo opcional para identificar el origen de la cita.  

---

### **📌 Modelo mejorado**
Aquí tienes una versión mejorada del modelo, manteniendo simplicidad pero agregando escalabilidad:  





---























### **📌 Modelos de Base de Datos para la Clasificación de Citas**  
Para representar la clasificación de citas en una base de datos relacional, debemos considerar las relaciones entre citas y categorías. Como una cita puede pertenecer a **múltiples categorías** pero solo una por cada clasificación, lo mejor es **separar las categorías en una tabla** y usar una **tabla intermedia** para gestionar la relación **Many-to-Many**.

---

## **🔥 Diseño de Modelos**

### **1️⃣ Tabla `quotes` (Citas)**
Almacena las citas con sus atributos principales.

| Campo         | Tipo        | Descripción |
|--------------|------------|------------------------------------------------|
| `id`         | Entero (PK) | Identificador único de la cita. |
| `text`       | Texto       | Contenido de la cita en el idioma original. |
| `year`       | Entero      | Año de creación o referencia de la cita. |
| `author_id`  | Entero (FK) | Referencia a `authors.id`. |
| `source_id`  | Entero (FK) | Referencia a `sources.id`. |
| `language_id` | Entero (FK) | Referencia a `languages.id`. |
| `created_at` | Timestamp   | Fecha de creación del registro. |
| `updated_at` | Timestamp   | Fecha de la última actualización. |

---

### **2️⃣ Tabla `categories` (Categorías de Citas)**
Almacena las categorías, como **"Citas según su origen"**, **"Citas según su estructura lógica"**, etc.

| Campo  | Tipo        | Descripción |
|--------|------------|------------------------------------------------|
| `id`   | Entero (PK) | Identificador único de la categoría. |
| `name` | Texto       | Nombre de la categoría (Ejemplo: "Citas según su origen"). |

---

### **3️⃣ Tabla `subcategories` (Subcategorías de Citas)**
Cada categoría tiene subcategorías específicas (Ejemplo: "Citas científicas" dentro de "Citas según su origen").

| Campo        | Tipo        | Descripción |
|-------------|------------|------------------------------------------------|
| `id`        | Entero (PK) | Identificador único de la subcategoría. |
| `category_id` | Entero (FK) | Referencia a `categories.id` (la categoría padre). |
| `name`      | Texto       | Nombre de la subcategoría (Ejemplo: "Cita científica", "Cita filosófica"). |
| `description` | Texto      | Descripción breve de la subcategoría. |

---

### **4️⃣ Tabla `quote_subcategories` (Relación Citas-Subcategorías)**
Relación **Many-to-Many** entre `quotes` y `subcategories`, asegurando que cada cita tenga **una sola subcategoría por cada categoría**.

| Campo        | Tipo        | Descripción |
|-------------|------------|------------------------------------------------|
| `id`        | Entero (PK) | Identificador único del registro. |
| `quote_id`  | Entero (FK) | Referencia a `quotes.id`. |
| `subcategory_id` | Entero (FK) | Referencia a `subcategories.id`. |

---

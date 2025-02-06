
## 📝 **Sistema de Frases**  

El sistema permitirá la gestión y recuperación de frases a través de una API REST, facilitando su organización, almacenamiento y acceso.  

### 📌 **Estructura de la Base de Datos**  

Se implementará una tabla para almacenar las frases disponibles, con el siguiente esquema:

| Campo        | Tipo        | Descripción |
|-------------|------------|------------------------------------------------|
| `id`        | Entero (PK) | Identificador único de la frase. |
| `text`      | Texto       | Contenido de la frase. |
| `year`      | Entero      | Año de creación o referencia de la frase. |
| `author`    | Texto       | Autor de la frase (puede ser `"Anónimo"` si se desconoce). |
| `created_at` | Timestamp  | Fecha de creación del registro. |
| `updated_at` | Timestamp  | Fecha de la última actualización. |

### 📌 **Clasificación de Frases**  

Las frases podrán organizarse en distintas categorías para mejorar la experiencia de búsqueda y filtrado.  

#### 🔹 **Por emociones**  
Ejemplos: Motivación, Felicidad, Tristeza, Amor, Sabiduría.  

#### 🔹 **Por contexto o situaciones**  
Ejemplos: Negocios, Deporte, Relaciones, Vida Espiritual.  

### 🌐 **Acceso a las Frases a través de la API**  

Se desarrollará una API REST pública para permitir el acceso a las frases almacenadas.  

#### ⚙️ **Opciones de filtrado y ordenación**  
La API ofrecerá filtros avanzados para mejorar la experiencia de búsqueda:  
- 📌 **Filtrar por categoría**.  
- 📌 **Filtrar por autor**.  
- 📌 **Filtrar por año de creación**.  
- 📌 **Ordenar por popularidad (más votadas)**.  

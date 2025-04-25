
# Models

## Module - Global

### **Tabla `languages` (Lengauges)**
Registro de lenguages

| Campo        | Tipo        | Descripción |
|-------------|------------|-------------------------------------------|
| `id`        | Entero (PK) | Identificador único del idioma.          |
| `language_name` | Texto   | Nombre del idioma (ej. "English", "Español"). |
| `language_code_2` | Texto (2) | Código ISO 639-1 (ej. "en", "es"). |
| `language_code_3` | Texto (3) | Código ISO 639-2/3 (ej. "eng", "spa"). |
| `direction_id` | Texto (3) | Writing & read directions (`"LTR"`, `"RTL"`) |
| `is_active` | Booleano | Define si el idioma está activo en el sistema. |
| `created_at` | Timestamp | Fecha de creación del registro. |
| `updated_at` | Timestamp | Fecha de la última actualización. |

### **Tabla `genders` (Géneros binarios)**
Registro de generos universal

| Campo                 | Tipo        | Descripción |
|----------------------|------------|------------------------------------------------|
| `id`                | Entero (PK) | Identificador único del género (`1` = Masculino, `0` = Femenino, `NULL` = No especificado). |
| `slug`              | Texto (ÚNICO) | Nombre en formato de URL (`masculino`, `femenino`, `no-especificado`). |
| `char_representation` | Texto (1)  | Representación en un solo carácter (`M`, `F`, `N`). |

### **Tabla `countries` (Países)**
Almacena información sobre los países según los estándares ISO 3166-1.

| Campo         | Tipo        | Descripción |
|--------------|------------|------------------------------------------------|
| `id`         | Entero (PK) | Identificador único del país. |
| `name`       | Texto (ÚNICO) | Nombre del país. |
| `iso3166_2`  | Texto (2)  | Código ISO 3166-1 alfa-2. |
| `iso3166_3`  | Texto (3)  | Código ISO 3166-1 alfa-3. |
| `num_code`   | Entero (3) | Código numérico de 3 dígitos del país. |
| `phone_code` | Entero (1-4) | Código de marcación internacional. |
| `created_at` | Timestamp | Fecha de creación del registro. |
| `updated_at` | Timestamp | Fecha de la última actualización. |

### **Tabla `statuses` (Estados de Citas)**
Almacena los diferentes estados posibles de una cita, permitiendo flexibilidad en caso de que se necesiten agregar nuevos estados en el futuro.

| Campo  | Tipo        | Descripción |
|--------|------------|------------------------------------------------|
| `id`   | Entero (PK) | Identificador único del estado. |
| `name` | Texto       | Nombre del estado (Ejemplo: "Pendiente", "Aprobado", "Rechazado"). |
| `slug` | Texto (ÚNICO) | Versión en texto plano (`pending`, `approved`, `rejected`). |
| `color_code` | Texto (7) | Código de color HEX (`#FFCC00` para "Pendiente", `#00CC00` para "Aprobado"). |
| `created_at` | Timestamp  | Fecha de creación del registro. |
| `updated_at` | Timestamp  | Fecha de la última actualización. |

## Module - Accounts

### **Tabla `account_statuses` (Estados de Cuenta)**
Esta tabla almacena los diferentes estados posibles de una cuenta.

| Campo  | Tipo        | Descripción |
|--------|------------|------------------------------------------------|
| `id`   | Entero (PK) | Identificador único del estado. |
| `name` | Texto (ÚNICO) | Nombre del estado (`Activa`, `Suspendida`, `Eliminada`). |
| `slug` | Texto (ÚNICO) | Versión en texto plano (`active`, `suspended`, `deleted`). |
| `created_at` | Timestamp | Fecha de creación del estado. |
| `updated_at` | Timestamp | Fecha de la última actualización. |

### **Tabla `accounts` (Identificación única del usuario)**
Esta tabla almacena el **ID base del usuario** y actúa como referencia para las demás.  

| Campo    | Tipo        | Descripción |
|---------|------------|------------------------------------------------|
| `id`    | Entero (PK) | Identificador único del usuario. |
| `status_id` | Entero (FK) | Referencia a `account_statuses.id`. |
| `created_at` | Timestamp | Fecha de creación de la cuenta. |
| `updated_at` | Timestamp | Fecha de la última actualización. |

### **Tabla `account_details` (Datos Personales del Usuario)**
| Campo         | Tipo        | Descripción |
|--------------|------------|------------------------------------------------|
| `account_id` | Entero (FK) | Referencia a `accounts.id`. |
| `first_name` | Texto       | Nombre(s) del usuario (puede ser NULL si no se proporciona). |
| `last_name`  | Texto       | Apellido(s) del usuario (puede ser NULL si no se proporciona). |
| `gender_id`  | Entero (FK) | Referencia a `genders.id` (puede ser NULL). |
| `birthdate`  | Fecha       | Fecha de nacimiento. |
| `country_id` | Entero (FK) | Referencia a `countries.id`. |

### **Tabla `account_security` (Datos de Seguridad y Autenticación)**
| Campo         | Tipo        | Descripción |
|--------------|------------|------------------------------------------------|
| `account_id` | Entero (FK) | Referencia a `accounts.id`. |
| `email`      | Texto (ÚNICO) | Dirección de correo electrónico. |
| `password_hash` | Texto    | Contraseña en formato hash. |
| `phone`      | Texto (ÚNICO) | Número de teléfono sin código de país. |
| `is_verified` | Booleano  | `true` si el correo está verificado, `false` si no. |
| `is_verified_user` | Booleano | `true` si el usuario ha sido verificado (ejemplo: KYC o manualmente). |
| `last_login` | Timestamp | Última fecha de inicio de sesión. |

### **Tabla `account_settings` (Configuraciones del Usuario)**
| Campo         | Tipo        | Descripción |
|--------------|------------|------------------------------------------------|
| `account_id` | Entero (FK) | Referencia a `accounts.id`. |
| `language_id` | Entero (FK) | Referencia a `languages.id`. |
| `uses_dark_mode` | Booleano | `true` = Modo oscuro, `false` = Modo claro. |

## Module - Quotes

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

---

# Models - FINALIZADOS

## Module - Global

### **Tabla `languages` (Lengauges)**
### **Tabla `writing_directions` (Sentido de escritura)**
### **Tabla `genders` (Géneros binarios)**
### **Tabla `gender_translations` (Traducciones de género)**
### **Tabla `countries` (Países)**
### **Tabla `statuses` (Estados de Citas)**

## Module - Accounts

### **Tabla `account_statuses` (Estados de Cuenta)**
### **Tabla `accounts` (Identificación única del usuario)**
### **Tabla `account_details` (Datos Personales del Usuario)**
### **Tabla `account_security` (Datos de Seguridad y Autenticación)**
### **Tabla `account_settings` (Configuraciones del Usuario)**

## Module - Quotes

### **Tabla `categories` (Categorías de citas)**
### **Tabla `quote_categories` (Relación Cita-Categoría, Many-to-Many)**
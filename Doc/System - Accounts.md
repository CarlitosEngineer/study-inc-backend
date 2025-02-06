## 👥 **Sistema de Cuentas y Roles de Usuarios**  

Para interactuar con la API (agregar, modificar o votar frases), los usuarios deberán contar con una cuenta registrada.  

### 📌 **Estructura de la Base de Datos**  

Se implementará una tabla para almacenar la información de los usuarios registrados, con el siguiente esquema:

| Campo        | Tipo        | Descripción |
|-------------|------------|------------------------------------------------|
| `id`        | Entero (PK) | Identificador único del usuario. |
| `email`     | Texto       | Dirección de correo electrónico del usuario (único). |
| `password`  | Texto (Hash) | Contraseña en formato seguro (hash). |
| `username`  | Texto       | Nombre de usuario único. |
| `created_at` | Timestamp  | Fecha de creación de la cuenta. |
| `updated_at` | Timestamp  | Fecha de la última actualización de la cuenta. |

### 🏷️ **Sistema de Roles de Usuarios**  

Para garantizar una gestión adecuada del sistema, se implementará un sistema de roles con diferentes niveles de acceso.  

#### 📌 **Tipos de cuentas iniciales**  

🔹 **Usuario Normal**  
- Puede agregar frases y votar por ellas.  
- No tiene permisos de moderación.  

🔹 **Moderador**  
- Son usuarios normales que, al alcanzar una gran cantidad de puntos, demuestran su compromiso con la API.  
- Pueden **moderar frases**: agregar, editar y eliminar frases según solicitudes de otros usuarios o por cuenta propia.  
- Se basan en un **sistema de puntos meritocrático**, donde aquellos con más puntos tienen mayor prioridad en decisiones sobre otros moderadores.  

🔹 **Administrador**  
- Tienen control total sobre la API REST.  
- Pueden gestionar moderadores y administrar el sistema sin restricciones.  

### 🔮 **Futuras Implementaciones**  
📌 Se podrán agregar más roles personalizados en el futuro para adaptarse a las necesidades del sistema.  


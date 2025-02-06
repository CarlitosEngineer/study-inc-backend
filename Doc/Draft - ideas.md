
# Requirements

# 📌 **Borrador de Ideas para la API REST**

---

## 📌 **6️⃣ Sistema de Votaciones**
- Se implementará un sistema de votación para destacar frases populares.
- 📌 **Reglas de votación**:
  - Cada usuario puede votar **solo una vez por cada frase**.
  - Un usuario puede votar por múltiples frases, pero no puede votar más de una vez por la misma frase.
  - Votar no da puntos al usuario que vota, pero **sí da puntos a la frase votada**.
  - Cada voto aumenta en **+1 punto** la popularidad de la frase.

📌 **Cómo se almacenarán los votos**:
- Se creará una tabla para registrar los votos de los usuarios y evitar duplicados.

📌 **Ranking de frases más votadas**:
- Se implementará un ranking donde las frases más votadas sean destacadas.
- Se podrán ver frases más votadas por:
  - Día 📅
  - Semana 🗓
  - Mes 📆
  - Todos los tiempos 🏆

---

---



## 📌 **2️⃣ Sistema de Puntos y Niveles**
- Los usuarios tendrán un sistema de puntos que servirá para incentivar su participación en la API.
- Los puntos estarán almacenados en una tabla de puntajes de la cuenta.
- El sistema de niveles se basará en los puntos acumulados por el usuario:
  - **Cada 100 puntos equivalen a 1 nivel**.
  - **Ejemplo**: Un usuario con 450 puntos tendrá **nivel 4** y estará a medio camino del **nivel 5**.
- No habrá un límite máximo de niveles.

📌 **Recompensas según el nivel**:
- A partir de cierto nivel, los usuarios pueden ganar **privilegios especiales**.
- En el futuro, los usuarios de nivel alto podrán **convertirse en moderadores**.

---


## 📌 **5️⃣ Sistema de Moderación**
- A partir de cierto nivel, los usuarios podrán postularse para convertirse en moderadores.
- 📌 **Requisitos para ser moderador**:
  - Alcanzar un número mínimo de puntos.
  - Enviar una solicitud con información detallada para verificar su identidad e intenciones.

📌 **Reglas para los moderadores**:
- Se establecerá un sistema de autorregulación para evitar abusos de moderación.
- Se podrá **reportar moderadores** en caso de que realicen acciones indebidas.
- Se registrará un **historial de moderaciones** para garantizar transparencia.

📌 **Sistema de penalizaciones**:
- Si un usuario de alto nivel comete abusos o errores graves, podrá ser sancionado con la reducción de puntos.
- 📌 **Ejemplo de penalizaciones**:
  - Corrección inválida: **-10 puntos**.
  - Spam de frases: **-25 puntos**.
  - Reportes válidos en su contra: **-20 puntos**.

## 📌 **Conclusión y Siguientes Pasos**
| Función | Estado |
|---------|--------|
| **Sistema de idiomas** | ✅ Confirmado (solo en inglés por ahora). |
| **Sistema de puntos y niveles** | ✅ Confirmado (100 pts = 1 nivel, sin límite). |
| **Sistema de cuentas** | ✅ Confirmado (por ahora solo usuarios normales y administradores). |
| **Sistema de frases** | ✅ Confirmado (estructura definida, con categorías y filtros). |
| **Sistema de moderación** | ✅ Confirmado (basado en niveles y reportes). |
| **Sistema de votaciones** | ✅ Confirmado (1 voto por usuario por frase, con ranking de popularidad). |

📌 **Próximos pasos:**
1. **Revisar si quieres agregar más reglas al sistema de moderación.**
2. **Definir si habrá hitos en los niveles (cada cierto nivel puede haber recompensas o insignias).**
3. **Finalizar el modelado de la base de datos y pasar a la fase de desarrollo.**

---

💡 **Preguntas para ti antes de avanzar al siguiente paso:**
1. ¿Quieres agregar hitos en los niveles? Ejemplo: cada 10 niveles una insignia o privilegio especial.
2. ¿Los moderadores podrán ser sancionados por la comunidad o solo por administradores?
3. ¿Quieres agregar algún otro filtro avanzado a la API REST?

Si confirmas estos puntos, podemos avanzar al **modelado de datos** y luego a la implementación de la API. 🚀
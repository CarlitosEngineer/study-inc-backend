
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
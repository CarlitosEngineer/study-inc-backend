```sql
CREATE TABLE countries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    iso3166_2 TEXT NOT NULL UNIQUE CHECK (LENGTH(iso3166_2) = 2),
    iso3166_3 TEXT NOT NULL UNIQUE CHECK (LENGTH(iso3166_3) = 3),
    num_code TEXT NOT NULL UNIQUE CHECK (LENGTH(num_code) = 3),
    phone_code TEXT NOT NULL UNIQUE CHECK (LENGTH(phone_code) BETWEEN 1 AND 4)
);
```

📌 **Explanation**:  
- `id`: Auto-incremented primary key.  
- `name`: Country name (unique).  
- `iso3166_2`: 2-letter ISO 3166-1 alpha-2 code.  
- `iso3166_3`: 3-letter ISO 3166-1 alpha-3 code.  
- `num_code`: 3-digit numeric country code.  
- `phone_code`: Country dialing code (1 to 4 digits).  

Let me know if you need changes! 🚀
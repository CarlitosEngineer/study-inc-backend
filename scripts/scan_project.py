import os

# 📌 Configuración: Define la ruta del proyecto dinámicamente
PROYECTO_BASE = os.path.expanduser("~/Documents/study-inc-backend")  # Ajusta automáticamente la ruta en cualquier equipo
IGNORAR_CARPETAS = {"node_modules", ".git", "temp", "doc"}  # Carpetas que no se deben escanear

# Definir la ruta relativa para el archivo de salida
OUTPUT_DIR = os.path.join(PROYECTO_BASE, "doc")
OUTPUT_FILE = os.path.join(OUTPUT_DIR, "project_structure.txt")

def scan_project_structure(directory, output_file):
    """
    Escanea todas las carpetas y subcarpetas de un directorio y guarda la estructura en un archivo de texto,
    ignorando carpetas específicas.
    
    :param directory: Ruta de la carpeta raíz del proyecto.
    :param output_file: Ruta completa del archivo donde se guardará la estructura.
    """
    # Crear el directorio si no existe
    os.makedirs(os.path.dirname(output_file), exist_ok=True)
    
    with open(output_file, "w", encoding="utf-8") as file:
        for root, dirs, files in os.walk(directory):
            # Ignorar carpetas especificadas
            dirs[:] = [d for d in dirs if d not in IGNORAR_CARPETAS]

            # Nivel de profundidad basado en la cantidad de subdirectorios
            level = root.replace(directory, "").count(os.sep)
            indent = "│   " * level + "├── "  # Formato de jerarquía

            # Escribir la carpeta actual
            file.write(f"{indent}[{os.path.basename(root)}]\n")

            # Escribir los archivos dentro de la carpeta
            sub_indent = "│   " * (level + 1) + "├── "
            for f in files:
                file.write(f"{sub_indent}{f}\n")
    
    print(f"✅ Estructura del proyecto guardada en: {output_file}")

# 📌 Ejecutar el script
if __name__ == "__main__":
    if os.path.exists(PROYECTO_BASE):
        scan_project_structure(PROYECTO_BASE, OUTPUT_FILE)
    else:
        print(f"❌ La ruta '{PROYECTO_BASE}' no existe. Verifica la configuración.")

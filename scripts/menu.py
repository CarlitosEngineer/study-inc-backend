import os
import sys

def clear_screen():
    os.system('cls' if os.name == 'nt' else 'clear')

def show_menu():
    while True:
        clear_screen()
        print("=========================")
        print("     Menú Principal     ")
        print("=========================")
        print("0. Salir")
        print("1. Instalar dependencias")
        print("2. Iniciar la aplicación en desarrollo")
        print("3. Escanear el proyecto")
        print("4. Ejecutar linter")
        print("5. Formatear código")
        print("6. Migrar base de datos")
        print("7. Insertar datos de prueba")
        print("8. Reiniciar base de datos")
        print("9. Limpiar proyecto")
        print("10. Compilar TypeScript")
        print("=========================")
        
        option = input("Selecciona una opción: ")
        
        if option == "1":
            print("\nInstalando dependencias...\n")
            os.system("npm install")
        elif option == "2":
            print("\nIniciando la aplicación en desarrollo...\n")
            os.system("npm run dev")
        elif option == "3":
            print("\nEscaneando el proyecto...\n")
            os.system("npm run scan")
        elif option == "4":
            print("\nEjecutando linter...\n")
            os.system("npm run lint")
        elif option == "5":
            print("\nFormateando código...\n")
            os.system("npm run format")
        elif option == "6":
            print("\nMigrando base de datos...\n")
            os.system("npm run db:migrate")
        elif option == "7":
            print("\nInsertando datos de prueba...\n")
            os.system("npm run db:seed")
        elif option == "8":
            print("\nReiniciando base de datos...\n")
            os.system("npm run db:reset")
        elif option == "9":
            print("\nLimpiando el proyecto...\n")
            os.system("npm run clean")
        elif option == "10":
            print("\nCompilando TypeScript...\n")
            os.system("npm run build")
        elif option == "0":
            print("Saliendo...")
            sys.exit(0)
        else:
            print("Opción no válida. Inténtalo de nuevo.")
        
        input("\nPresiona ENTER para volver al menú...")

if __name__ == "__main__":
    show_menu()

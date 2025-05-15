![CódiGolLogo](https://github.com/FernadoCodeDev/CodiGol-Demo/blob/main/ImageReadme/CodiGolLogo.webp)

#  ⚽ **CódiGol**

CódiGol es un pequeño videojuego web diseñado para ayudarte a aprender y practicar Tailwind CSS de forma divertida y diferente. Inspirado en la emoción del fútbol, este juego te reta a anotar goles completando desafíos de diseño utilizando Tailwind.

Esta idea surgió como un concepto que tenía guardado, y gracias a la [Hackathon de MiduDev 2025](https://github.com/midudev/hackaton-clerk-2025?tab=readme-ov-file#%EF%B8%8F-c%C3%B3mo-participar-en-la-hackat%C3%B3n), decidí retomarla y convertirla en una demo funcional con el que participar en dicha Hackathon.

El proyecto está enfocado en ser una forma interactiva y entretenida de aprender Tailwind CSS, más allá de solo leer documentación técnica. Como parte de esta hackathon, se integró Clerk para gestionar la autenticación de usuarios: es necesario registrarse o iniciar sesión para poder jugar.


## 🧠 ¿Qué aprenderás?

- Fundamentos y clases de utilidad de **Tailwind CSS**
- Estilos responsive
- Buenas prácticas al trabajar con **Tailwind CSS**

## 🛠 Tecnologías utilizadas

[![My Skills](https://skillicons.dev/icons?i=react,tailwind)](https://skillicons.dev)

- **Clerk** (para el sistema de login)

 ## 🔐 Autenticación con Clerk

Para poder jugar, los usuarios deben crear una cuenta o iniciar sesión.
**Clerk** se ha utilizado para manejar la autenticación, protegiendo las rutas del juego y personalizando la experiencia del jugador con sesiones activas.

## Integración con Clerk
CódiGol utiliza Clerk como sistema de autenticación para gestionar el acceso de los usuarios. La integración de Clerk permite proteger rutas y garantizar que solo los usuarios registrados puedan acceder a la experiencia completa del juego.

Cuando un usuario intenta iniciar el juego sin estar autenticado, se activa automáticamente el modal de inicio de sesión o registro proporcionado por Clerk.

A continuación se muestran capturas del flujo de autenticación:

<p align="center"> <img src="https://github.com/FernadoCodeDev/CodiGol-Demo/blob/main/ImageReadme/imgReadmeN1.webp" width="600" alt="Pantalla de inicio protegida por Clerk" /> <br/> <em>Pantalla inicial con botón de acceso</em> </p> <p align="center"> <img src="https://github.com/FernadoCodeDev/CodiGol-Demo/blob/main/ImageReadme/imgReadmeN2.webp" width="600" alt="Modal de login de Clerk" /> <br/> <em></em>Modal con una pequeña Introducción sobre CódiGol </p> <p align="center"> <img src="https://github.com/FernadoCodeDev/CodiGol-Demo/blob/main/ImageReadme/imgReadmeN3.webp" width="600" alt="Usuario autenticado" /> <br/> <em>Modal de login de Clerk desplegado</em> </p> <p align="center"> <img src="https://github.com/FernadoCodeDev/CodiGol-Demo/blob/main/ImageReadme/imgReadmeN4.webp" width="600" alt="Protección de rutas con Clerk" /> <br/> <em>Ruta protegida que verifican si el usuario ya ha iniciado sesión de otro modo lo redirige a la página principal</em> </p>

## 🌐 Enlace a la demo

[Juega CódiGol ahora](https://codigol-demo.netlify.app/)  


# Detalles Técnicos 

## 🚀 Instalación y uso local

Si deseas correr CódiGol en tu máquina local, sigue estos pasos:

1. Clona el repositorio
2. Instala las dependencias
     ```
    npm install
3. Inicia el servidor de desarrollo
    ```
     npm start
## ⚡ ¿Por qué usar npm start?
CódiGol está construido con React, por lo que requiere un entorno de desarrollo para compilar y visualizar correctamente la aplicación.
El comando npm start inicia el servidor de desarrollo de React, permitiendo ver los cambios en tiempo real.

## 🚧  Estructura del proyecto 🧱
La arquitectura de CódiGol está pensada para mantener el código limpio, modular y fácil de escalar. Aquí se explica cada carpeta y archivo clave del proyecto:
    
  ```
src/
├── assets/
│   ├── images/         # Imágenes utilizadas en el juego (fondos, jugadores, logos, etc.)
│   └── svg/            # Archivos SVG como íconos o elementos vectoriales
│
├── context/
│   └── GameContext.jsx # Maneja el estado global del juego (progreso, marcador, etc.)
│
├── Data/
│   ├── Dialogue.js           # Contiene los diálogos del entrenador y escenas del juego
│   ├── exercises.js          # Ejercicios interactivos para practicar Tailwind
│   ├── Game.js               # Datos y configuración del partido en curso
│   ├── MatchData.js          # Información de los partidos (equipos, rondas, etc.)
│   ├── MatchPresentation.js  # Datos para la pantalla de presentación del partido
│   ├── SubBench.js           # Datos de los jugadores en la banca
│   └── Training.js           # Datos para la sección de entrenamiento
│
├── Hook/
│   └── ProtectedRoute.jsx    # Hook que protege rutas para usuarios autenticados con Clerk
│
├── Page/
│   └── ProtectedRoute.jsx    # Páginas que muestra contenido de cada escena
│
├── screens/
│   ├── LessonIntro.jsx       # Introducción teórica de cada lección
│   ├── Training.jsx          # Entrenamiento previo al partido (resolución de ejercicios)
│   ├── MatchPresentation.jsx # Pantalla de presentación tipo “versus” antes del partido
│   ├── SubBench.jsx          # Pantalla de selección de jugador desde la banca
│   ├── Game.jsx              # Escenario principal donde se juega y se resuelven ejercicios
│   ├── LeagueTable.jsx       # Tabla de posiciones o progreso en la liga
│   ├── FinalScore.jsx        # Muestra el resultado final del partido
│   └── FinalScene.jsx        # Escena final del juego 
│
├── styles/
│   ├── index.css             # Archivo base de estilos generales
│   └── tailwind.css          # Importaciones de Tailwind y configuración personalizada
│
├── ui/                       # Componentes reutilizables en diferentes pantallas
│   ├── CodeEditor.jsx        # Editor donde el jugador escribe código
│   ├── DialogueBox.jsx       # Cuadro de diálogo para mensajes del entrenador
│   ├── Editor.jsx            # Componente visual del editor
│   ├── EventTime.jsx         # Representa eventos en tiempo real durante el juego
│   ├── Modal.jsx             # Modal genérico
│   ├── ModalNavigation.jsx   # Modal para navegación entre fases
│   ├── ModalSize.jsx         # Modal para elegir tamaño de componente visual
│   ├── Navigation.jsx        # Barra de navegación del juego
│   ├── Preview.jsx           # Vista previa del resultado del código
│   ├── ScoreBoard.jsx        # Marcador en tiempo real del partido
│   ├── Timer.jsx             # Cronómetro del juego
│   └── TrainingPoint.jsx     # Punto de progreso en el entrenamiento
│
├── utils/                    # Funciones de utilidad para lógica del juego
│   ├── EvaluateAnswer.js         # Evalúa si el código del jugador es correcto
│   ├── navigateToNextPhase.js   # Lógica para pasar a la siguiente fase del juego
│   ├── routeFlow.js             # Flujo de rutas del juego según el estado
│   ├── routeGuard.js            # Protege rutas si no hay sesión iniciada
│   └── useTime.js               # Hook personalizado para el manejo del tiempo
│
├── App.jsx                 # Define el flujo de rutas principales y estructura del juego
└── index.js                # Punto de entrada de la aplicación

```

#



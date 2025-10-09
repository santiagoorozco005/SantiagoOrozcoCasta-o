# Portafolio Web Expandido - Santiago Orozco Castaño

Este es tu portafolio web expandido con nuevas secciones y funcionalidades. A continuación encontrarás las instrucciones para personalizar cada sección con tu información.

## 🚀 Nuevas Secciones Agregadas

### 1. **¿Quién Soy?** (`/componets/Layouts/QuienSoy/`)
- **Archivo principal**: `QuienSoy.jsx`
- **Estilos**: `QuienSoy.css`
- **Qué personalizar**:
  - Reemplaza `[Aquí puedes escribir una descripción personal...]` con tu biografía
  - Agrega tu foto de perfil en la sección `.placeholder-image`
  - Actualiza las pasiones y objetivos en las tarjetas
  - Modifica las estadísticas personales (años de experiencia, proyectos, etc.)

### 2. **Mis Proyectos** (`/componets/Layouts/Proyectos/`)
- **Archivo principal**: `Proyectos.jsx`
- **Estilos**: `Proyectos.css`
- **Qué personalizar**:
  - Reemplaza el array `proyectos` con tus proyectos reales
  - Agrega imágenes de tus proyectos
  - Actualiza los enlaces de demo y GitHub
  - Modifica las tecnologías utilizadas en cada proyecto

### 3. **Tecnologías y Herramientas** (`/componets/Layouts/Tecnologias/`)
- **Archivo principal**: `Tecnologias.jsx`
- **Estilos**: `Tecnologias.css`
- **Qué personalizar**:
  - Actualiza los niveles de habilidad (porcentajes) en cada tecnología
  - Agrega o quita tecnologías según tu experiencia
  - Modifica las herramientas adicionales
  - Actualiza las estadísticas al final de la sección

### 4. **Contacto** (`/componets/Layouts/Contacto/`)
- **Archivo principal**: `Contacto.jsx`
- **Estilos**: `Contacto.css`
- **Qué personalizar**:
  - Reemplaza `[tu-email@ejemplo.com]` con tu email real
  - Actualiza tu número de teléfono
  - Agrega tus enlaces reales de LinkedIn y GitHub
  - Configura el formulario de contacto (opcional: integrar con un servicio de email)

## 📝 Campos Específicos a Personalizar

### En QuienSoy.jsx:
```jsx
// Línea ~47: Descripción personal
<p>
  [Aquí puedes escribir una descripción personal sobre ti...]
</p>

// Líneas ~60-65: Pasiones
<p>
  [Describe tus pasiones: programación, tecnología...]
</p>

// Líneas ~75-80: Objetivos
<p>
  [Describe tus objetivos profesionales...]
</p>

// Líneas ~87-105: Estadísticas
<h3>[X]</h3> // Reemplaza [X] con números reales
```

### En Proyectos.jsx:
```jsx
// Líneas ~25-65: Array de proyectos
const proyectos = [
  {
    titulo: "[Nombre del Proyecto 1]", // Cambia por el nombre real
    descripcion: "[Descripción detallada...]", // Tu descripción
    tecnologias: ["React", "Node.js"], // Tecnologías que usaste
    enlaceDemo: "#", // URL de tu demo
    enlaceGithub: "#", // URL de tu repositorio
    // ... más campos
  }
];
```

### En Tecnologias.jsx:
```jsx
// Líneas ~30-35: Niveles de habilidad
{ nombre: "JavaScript", nivel: 90, color: "#f7df1e" }, // Ajusta el nivel (0-100)
```

### En Contacto.jsx:
```jsx
// Líneas ~45-65: Información de contacto
{
  titulo: "Email",
  valor: "[tu-email@ejemplo.com]", // Tu email real
  enlace: "mailto:[tu-email@ejemplo.com]"
}
```

## 🎨 Personalización de Estilos

Cada sección tiene su propio archivo CSS que puedes modificar:
- Colores principales: `#00d4ff` (azul) y `#ff6b6b` (coral)
- Puedes cambiar estos colores en cada archivo CSS
- Los gradientes y efectos están definidos en las clases CSS

## 📱 Navegación Actualizada

El navbar (`/componets/UI/Navbar/Navbar.jsx`) ahora incluye enlaces a todas las secciones:
- ¿Quién Soy?
- Experiencia
- Estudios
- Proyectos
- Tecnologías
- Contacto

## 🔧 Instalación y Uso

1. Copia todos los archivos a tu proyecto React
2. Instala las dependencias necesarias:
   ```bash
   npm install aos lucide-react
   ```
3. Personaliza el contenido según las instrucciones anteriores
4. Ejecuta tu proyecto:
   ```bash
   npm start
   ```

## 📋 Lista de Tareas para Personalizar

- [ ] Agregar tu foto de perfil en QuienSoy
- [ ] Escribir tu biografía personal
- [ ] Actualizar información de contacto (email, teléfono)
- [ ] Agregar tus proyectos reales con imágenes
- [ ] Configurar enlaces de GitHub y LinkedIn
- [ ] Ajustar niveles de habilidad en tecnologías
- [ ] Personalizar colores si lo deseas
- [ ] Probar el formulario de contacto
- [ ] Optimizar imágenes de proyectos
- [ ] Revisar responsive design en móvil

## 🎯 Funcionalidades Incluidas

- ✅ Diseño responsive
- ✅ Animaciones con AOS
- ✅ Navegación suave entre secciones
- ✅ Formulario de contacto funcional
- ✅ Barras de progreso para habilidades
- ✅ Tarjetas interactivas para proyectos
- ✅ Enlaces a redes sociales
- ✅ Efectos hover y transiciones

¡Tu portafolio está listo para ser personalizado! 🚀

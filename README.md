# PISTACHO - Production Company Landing Page

Landing page para PISTACHO, una agencia creativa multidisciplinaria en Buenos Aires, Argentina.

## 🚀 Características

- **Diseño Responsive**: Adaptado para desktop y dispositivos móviles
- **Arquitectura de Componentes**: Código modular y fácil de mantener
- **TypeScript**: Tipado estático para mayor seguridad
- **Vite**: Build tool moderno y rápido

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Header/         # Navegación superior con logo y menú
│   │   ├── Header.tsx
│   │   ├── Header.css
│   │   └── index.ts
│   ├── Hero/           # Sección principal con video y título
│   │   ├── Hero.tsx
│   │   ├── Hero.css
│   │   └── index.ts
│   ├── Contact/        # Información de contacto
│   │   ├── Contact.tsx
│   │   ├── Contact.css
│   │   └── index.ts
│   └── Footer/         # Pie de página
│       ├── Footer.tsx
│       ├── Footer.css
│       └── index.ts
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

## 🎨 Componentes

### Header
- Logo en la esquina superior izquierda
- Menú hamburguesa en la esquina superior derecha
- Posición fija para que permanezca visible al hacer scroll

### Hero
- Óvalo central que contendrá el video
- Título "PISTACHO" y subtítulo "PRODUCTION COMPANY"
- Responsive: óvalo horizontal en desktop, vertical en mobile

### Contact
- Sección "LET'S WORK TOGETHER"
- Información de contacto: email, Instagram, teléfono
- Enlaces interactivos

### Footer
- Logo pequeño
- Descripción de la empresa
- Copyright

## 🛠️ Instalación y Uso

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de la build de producción
npm preview
```

## 📝 Próximos Pasos

### 1. Agregar Logo
Coloca tu logo en `src/assets/` y actualiza:
- `src/components/Header/Header.tsx` (línea 8)
- `src/components/Footer/Footer.tsx` (línea 8)

```tsx
// Reemplazar:
<div className="logo-placeholder">🌷</div>

// Por:
<img src="/ruta-a-tu-logo.png" alt="PISTACHO" />
```

### 2. Agregar Video
Coloca tu video en `public/` y actualiza `src/components/Hero/Hero.tsx`:

```tsx
// Reemplazar el div con clase "video-placeholder"

// Por:
<video 
  autoPlay 
  loop 
  muted 
  playsInline
  className="hero__video"
>
  <source src="/tu-video.mp4" type="video/mp4" />
</video>
```

Y agrega estos estilos en `Hero.css`:

```css
.hero__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

## 🎨 Paleta de Colores

- **Amarillo primario**: `#FFD700` - Títulos principales
- **Dorado secundario**: `#D4A574` - Subtítulos
- **Rosa**: `#FFC0CB` - Óvalo del video
- **Texto oscuro**: `#333333`
- **Texto claro**: `#666666`

## 📱 Breakpoints Responsive

- **Desktop**: > 768px - Óvalo horizontal
- **Mobile**: ≤ 768px - Óvalo vertical, contacto en scroll

## 🧪 Testing

La arquitectura de componentes permite un testing fácil:
- Cada componente es independiente
- Props claramente definidas
- Estilos encapsulados

## 📄 Licencia

© 2026 Pistacho. Todos los derechos reservados.


# Up: Una aventura de altura

Aplicación interactiva sobre la película **Up (2009)** — "*Una aventura de altura*" en español — producida por **Pixar** y distribuida por **Walt Disney Pictures**.

## ✨ Características

- **Hero / Resumen temático**: La frase que resume el significado de la película.
- **Personajes**: Cada personaje con su ilustración SVG original, frase representativa, y lo que significa la película para él/ella.
- **Rompecabezas de memoria**: Empareja cada emoticono con su nombre (8 personajes).
- **Escenas con puntuación 1–5**: Evalúa cada escena y envía tu calificación a Supabase.
- **Autores**: Director, guionistas, productor, compositor y estudiante.
- **Videos de escenas**: Enlace al trailer oficial + representaciones animadas con HTML/CSS de cada escena.
- **Contador de visitas**: Registra visitas en Supabase y los muestra en tiempo real.

## 🎨 Paleta de colores

| Color | Código | Uso |
|---|---|---|
| Azul (primario) | `#2563EB` | Fondo, botones azul |
| Azul claro | `#DBEAFE` | Fondo de tarjetas |
| Blanco | `#FFFFFF` | Fondo principal |
| Morado | `#7C3AED` | Destaque, botones morados |
| Morado claro | `#EDE9FE` | Fondo de significados |

## 📁 Estructura

```
UpAventura/
├── index.html        # Página principal (todas las secciones)
├── styles.css        # Estilos con variables CSS (azul/blanco/morado)
├── app.js            # Lógica: personajes, rompecabezas, puntuaciones, contador
├── package.json      # Configuración para Vercel
├── vercel.json       # Configuración de despliegue en Vercel
├── .env.example      # Plantilla de variables de entorno para Supabase
└── supabase/
    └── schema.sql    # Esquema de la base de datos (visits, ratings, puzzle_results)
```

## 🚀 Cómo ejecutar localmente

```bash
# 1. Abrir el directorio del proyecto en una terminal
cd UpAventura

# 2. Iniciar un servidor local (ej. con Python)
python -m http.server 8000

# 3. Abrir en el navegador
#    http://localhost:8000
```

## ☁️ Cómo desplegar en Vercel

```bash
# 1. Instalar la CLI de Vercel (si no está instalada)
npm i -g vercel

# 2. Iniciar sesión en Vercel
vercel login

# 3. Desplegar
vercel

# 4. Producción
vercel --prod
```

> La primera vez te pedirá configurar el proyecto. Elige el directorio raíz y confirma.

## 🔑 Cómo configurar Supabase

1. Ve a **https://app.supabase.com** e inicia sesión.
2. Crea un nuevo proyecto.
3. Una vez listo, ve a **Project Settings → API**.
4. Copia:
   - `Project URL` → pega en `SUPABASE_URL`
   - `Project API (anon) key` → pega en `SUPABASE_ANON_KEY`
5. Para la base de datos, ejecuta el contenido de `supabase/schema.sql` en la pestaña **SQL Editor** del proyecto Supabase.
6. Si usas la CLI de Supabase localmente:
   ```bash
   supabase init
   supabase db push --project-ref TU-PROJETO
   ```
7. Configura las variables de entorno en Vercel:
   - **Dashboard** → tu proyecto → **Settings → Environment Variables**
   - Añade `SUPABASE_URL` y `SUPABASE_ANON_KEY`

## ⚠️ Limitaciones y notas

- **Imágenes de personajes**: Las imágenes protegidas por copyright no se pueden usar. Se usan ilustraciones **SVG originales** creadas para este proyecto (ver las tarjetas de personajes).
- **Videos de escenas**: Los clips de la película son de propiedad de Disney/Pixar. Se incluye el enlace al **trailer oficial** y representaciones animadas con CSS/HTML.
- **Contador de visitas**: El contador se incrementa en cada carga de página. Se requiere configuración de Supabase para que funcione.
- **Riesgo de seguridad**: Las políticas de seguridad (RLS) de la base de datos permiten inserciones anónimas con fines demostrativos. En un entorno de producción, se recomienda autenticación.

## 📊 Datos verificados de la película

- **Título original**: Up
- **Director**: Pete Docter
- **Guion**: Pete Docter, Bob Peterson, Tom McCarthy
- **Productor**: Jonas Rivera
- **Música**: Michael Giacchino
- **Estudio**: Pixar Animation Studios
- **Distribuidor**: Walt Disney Studios Motion Pictures
- **Fecha de liberación**: 29 de mayo de 2009 (EE. UU.)
- **Duración**: 96 minutos
- **Presupuesto**: ~175 millones USD
- **Recaudación**: ~735 millones USD
- **Premios**: 2 Oscars (Mejor película de animación, Mejor canción original "When She Loved Me")

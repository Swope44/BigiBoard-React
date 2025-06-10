# DigiBoard-React

DigiBoard ReactJS Frontend

## File Structure

```plaintext
index.html              # Main HTML file, entry point for the app
LICENSE                 # Project license
package.json            # Project metadata and dependencies
README.md               # Project documentation
vite.config.js          # Vite configuration for development/build
postcss.config.js       # PostCSS configuration (if present, for Tailwind)
tailwind.config.js      # Tailwind CSS configuration
src/                    # Source code directory
  ├── App.jsx           # Main React component (dashboard UI)
  ├── main.jsx          # React entry point, renders App
  └── index.css         # Tailwind CSS imports and custom styles
```

- **index.html**: The root HTML file loaded by Vite, contains the root div for React.
- **package.json**: Lists dependencies (React, Vite, Tailwind, etc.) and scripts.
- **vite.config.js**: Configures Vite for React and Tailwind.
- **tailwind.config.js**: Tells Tailwind which files to scan for class names.
- **src/App.jsx**: The main dashboard component, where the UI is built.
- **src/main.jsx**: Entry point that mounts the React app to the DOM.
- **src/index.css**: Imports Tailwind’s base, components, and utilities.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the app in your browser at the local URL provided by Vite.

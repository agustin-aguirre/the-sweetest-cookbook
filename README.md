# TESTING CON JEST Y ES6

1. npm create vite@latest my-react-app -- --template react
2. cd my-react-app
3. npm install
4. npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event babel-jest @babel/preset-env @babel/preset-react identity-obj-proxy
5. npm install --save-dev @testing-library/jest-dom
6. Agregar scripts de test

En tu package.json, agrega el siguiente script:

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "test": "jest"
}

7. crear en root del proyecto: jest.config.mjs
export default {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
};

8. en el root del proyecto añadir: babel.config.mjs:
export default {
  presets: [
    ['@babel/preset-env', { targets: 'defaults' }],
    ['@babel/preset-react', { runtime: 'automatic' }]
  ],
};

9. (Opcional) Crear un archivo de prueba

Por ejemplo, crea App.test.jsx:

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world', () => {
  render(<App />);
  expect(screen.getByText(/hello/i)).toBeInTheDocument();
});

10. app.jsx
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>This is a basic React component with Vite and Jest.</p>
    </div>
  );
}

export default App;

11. npm test o npm run test
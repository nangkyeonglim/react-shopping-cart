import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  const isBuild = command === 'build';

  return {
    plugins: [
      react({
        babel: {
          presets: [],
          plugins: isBuild
            ? [
                [
                  'react-remove-properties',
                  {
                    properties: ['data-cy'],
                  },
                ],
              ]
            : [],
          babelrc: true,
          configFile: true,
        },
      }),
    ],
  };
});

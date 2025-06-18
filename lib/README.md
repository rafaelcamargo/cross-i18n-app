# Cross-i18n Components

A React components library with built-in internationalization support using react-i18next.

## Installation

```bash
npm install cross-i18n-components
```

## Peer Dependencies

This library requires the following peer dependencies:

```bash
npm install react react-dom react-i18next i18next
```

## Usage

### Basic Usage

```jsx
import React from 'react';
import { HelloWorld, HelloWorldTranslations } from 'cross-i18n-components';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();
  
  // Initialize translations
  i18n.addResourceBundle('en-US', 'translation', HelloWorldTranslations['en-US']);
  i18n.addResourceBundle('pt-BR', 'translation', HelloWorldTranslations['pt-BR']);
  
  // Change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en-US')}>English</button>
      <button onClick={() => changeLanguage('pt-BR')}>Português</button>
      
      <HelloWorld />
    </div>
  );
}
```

### Advanced Usage with Custom Styling

```jsx
import React from 'react';
import { HelloWorld } from 'cross-i18n-components';

function App() {
  return (
    <HelloWorld 
      className="custom-hello-world"
      style={{ 
        backgroundColor: '#f0f0f0',
        padding: '20px',
        borderRadius: '8px'
      }}
    />
  );
}
```

## Available Components

### HelloWorld

A simple component that displays "Hello World" in different languages.

**Props:**
- `className` (string): CSS class name
- `style` (object): Inline styles

**Translation Keys:**
- `hello.world`: The main "Hello World" text
- `hello.greeting`: A welcome message

## Supported Languages

- English (en-US)
- Portuguese (pt-BR)

## Building

To build the library:

```bash
npm run build
```

This will create both CommonJS and ES6 module distributions in the `dist` folder.

## Development

To start development mode with watch:

```bash
npm run dev
```

## License

MIT 

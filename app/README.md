# Cross-i18n React Application

A React application with internationalization support using react-i18next, configured with craco and tested with Jest and Testing Library.

## Features

- React 18 application
- Internationalization (i18n) with react-i18next
- Support for English and Portuguese languages
- Language selector with real-time switching
- Modern UI with responsive design
- Comprehensive test suite with Jest and Testing Library
- Craco configuration for project customization

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm

### Installation

1. Navigate to the app directory:
   ```bash
   cd app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the development server:

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Building for Production

To create a production build:

```bash
npm run build
```

### Running Tests

To run the test suite:

```bash
npm test
```

This will run Jest in watch mode. Press `a` to run all tests or `q` to quit.

## Project Structure

```
app/
├── public/
│   └── index.html
├── src/
│   ├── locales/
│   │   ├── en/
│   │   │   └── translation.json
│   │   └── pt/
│   │       └── translation.json
│   ├── App.js
│   ├── App.css
│   ├── App.test.js
│   ├── index.js
│   ├── index.css
│   ├── i18n.js
│   └── setupTests.js
├── package.json
├── craco.config.js
└── README.md
```

## Available Scripts

- `npm start` - Starts the development server
- `npm run build` - Creates a production build
- `npm test` - Runs the test suite
- `npm run eject` - Ejects from Create React App (not recommended)

## Technologies Used

- **React** - UI library
- **react-i18next** - Internationalization
- **i18next** - Translation framework
- **craco** - Configuration override for Create React App
- **Jest** - Testing framework
- **Testing Library** - React testing utilities

## Adding New Languages

To add a new language:

1. Create a new translation file in `src/locales/[language-code]/translation.json`
2. Add the language to the resources object in `src/i18n.js`
3. Add the language option to the select element in `src/App.js`
4. Update tests to include the new language

## License

This project is open source and available under the MIT License. 

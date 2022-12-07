# @mineral/cra-starter

This is the Mineral Starter App for [React](https://reactjs.org/) based on
[Create React App](https://github.com/facebook/create-react-app).

## Features

- [Mineral](https://github.gwd.broadcom.net/ESD/mineral) based UI
  - AppShell, Header, Footer, Navigation, Pages, etc.
  - Supports both light & dark mode
- Patterns
  - Modular directory structure
  - Routing, code-splitting, error-boundaries
  - Example pages and data
  - Unit tests and utils via [testing-library](https://testing-library.com/)
- Configuration
  - [Artifactory](https://cawiki.ca.com/display/TOOLS/Artifactory+-+General+information)
  - [ESlint](https://eslint.org/), [Prettier](https://prettier.io/),
    [EditorConfig](https://editorconfig.org/),
    [lint-staged](https://github.com/okonet/lint-staged),
    [commitlint](https://commitlint.js.org/)
  - [VSCode](https://code.visualstudio.com/) settings and extension
    recommendations
  - GitHub PR template
  - Simple Jenkinsfile for running lint and tests in CI
  - [TypeScript](https://www.typescriptlang.org/)
- NPM scripts
  - Custom scripts for common scenarios

## Getting Started

Ensure that you are either on the corporate network or VPN as
[mineral npm packages are distributed on Artifactory](https://github.gwd.broadcom.net/ESD/mineral/blob/master/README.md#installation)
and thus a connection is required for dependency installation.

```sh
# Clone repo to my-app
git clone git@github.gwd.broadcom.net:ESD/mineral-cra-starter.git my-app

# Change directory to my-app
cd my-app

# Install dependencies
yarn

# Start dev server
yarn start
```

## Available Scripts

The following scripts may be executed using your package manager, `yarn` being
the default, e.g. `yarn start`. _`npm` may be used alternatively, though you'll
need to adjust some scripts accordingly._

```
analyze       // Analyze build contents
build         // Create a production build
checks        // Run all static checks
clean         // Remove any built/generated files
format        // Run code formatter
format:check  // Run code formatting check
lint          // Run code linters
lint:fix      // Run code linters and attempt to fix issues automatically
prepare       // NPM lifecycle script; leveraged for git hook configuration
start         // Start a development server
test          // Run tests
test:ci       // Run tests - intended for use on CI
test:coverage // Run tests and generate code-coverage report
test:debug    // Run tests with debugger/breakpoints enabled
test:watch    // Run tests in watch mode
typecheck     // Run TypeScript typechecks
```

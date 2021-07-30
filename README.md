# Design Patterns with React Native

## Technical features

- Implementation of View-Model

  - View-Model initialised and injected via navigation component
  - View-Model acts as business logic layer

- Implementation of Singleton

  - Singleton initialises all services
  - Singleton instances are housed under `ServiceContainer`
  - Singleton initialised on app start

- Implementation of Dependency Injection and Inversion of Control

  - Dependency Injection implemented using `inversify`, `inversify-react` and `reflect-metadata`
  - Dependency Injection initialised upon request
  - Dependency Injection can be used via `react-hooks` in a functional component or can beget via the `container.get` method providwd by `inversify`

- Implementation of Observer Pattern
  - Simple observer pattern with strongly-typed implementation
  - Observable is built in an extensible way, simply extend `BaseObservable`
  - Observer lifecycle tied to individual component
  - Observer pattern has been implemented with functional components leveraging on `react-hooks`

## Getting Started

- Clone, download or fork
- Run npm install or yarn install (Yarn advised)
- Run react-native-run-android / react-native-run-ios

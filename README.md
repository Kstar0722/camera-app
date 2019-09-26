# SensAI

sens.ai, is a digital platform dedicated to simplify computer vision. When combined with an camera and edge computer device, sens.ai provides an off-the-shelve experience to artificial intelligence. The platform receives and analyses images creating custom alerts and analytics for trained scenarios. In the platform, you’ll be able to easily train computer vision models and get notifications as they are identified. 
sens.ai will help you classify, analyze, store and retrieve camera footage or ad-hoc pictures.

## Folder Structure

```
.
+-- src
    | +-- app
    |     | +-- core
    |     |     | +-- authentication
    |     |     | +-- guards
    |     |     | +-- http
    |     |     | +-- interceptors
    |     |     |     | --- insert-auth-token-interceptors.ts
    |     |     | +-- services
    |     | +-- modules
    |     |     | +-- dashboard
    |     |     |     | +-- components
    |     |     |     | +-- pages
    |     |     |     | +-- template
    |     |     |     |     | --- template.component.[html|scss|ts|spec.ts]
    |     |     | +-- home
    |     | +-- shared
    |     |     | +-- components
    |     |     | +-- directives
    |     |     | +-- modules
    |     |     | +-- pipes
    | +-- assets
    |     | +-- img
    |     | +-- script
    |     | +-- style
    |     | +-- video
    | +-- environments
    |     | --- environment.prod.ts
    |     | --- environment.ts
```
### Git

username: developer

## Angular CLI Scripts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

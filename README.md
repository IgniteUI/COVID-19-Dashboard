# COVID-19-Dashboard

App available here - https://igniteui.github.io/COVID-19-Dashboard/

This project was generated with [Ignite UI CLI](https://github.com/IgniteUI/igniteui-cli) version 5.0.1.

## Development server

Run `ig start` to build the application, start a web server and open the application in the default browser. Then navigate to `http://localhost:4200/`. Default serving port can be configured in `ignite-ui-cli.json` via `defaultPort` property.

## Build

Run `ig build` to build the application into an output directory.

## Create web bundle (update the hosted website)
Use the command `npm run build` or you can manually build the project with:

1. Run `ng build`
2. Go to `dist folder` and copy paste the content in the `docs` folder. Change the base href url to be `<base href="https://igniteui.github.io/COVID-19-Dashboard/">`

> Note: If you receive 'ERROR Error: Uncaught (in promise): TypeError: Cannot read property 'from' of undefined. TypeError: Cannot read property 'from' of undefined'), use `npm run build:web:noProd`

## dist and docs folders

`docs` folder is used for the [GitHub Pages](https://igniteui.github.io/COVID-19-Dashboard/) site. Related to [`Publishing your GitHub Pages site from a /docs folder on your `master` branch`](https://igniteui.github.io/COVID-19-Dashboard/)
Use `ng build --prod --aot` to build the project, `copy -> paste` into `docs` folder the generated content in `dist` folder, and replace the `base href`.

## Step by step mode

If you want to get a guided experience through the available options, you can initialize the step by step mode that will help you to create and setup your new application, as well as update project previously created with the Ignite UI CLI. To start the guide, simply run the `ig` command.

## List templates

The `ig list` lists all available templates. When you run the command within a project folder it will list all available templates, even if you have provided different ones.

## Adding components

Add a new component or template to the project passing component ID and choosing a name.

`ig add <component/template> <component_name>`

The ID matches either a component ("grid", "combo", etc) or a predefined template. Predefined templates can provide either multiple components or fulfilling a specific use case like "form-validation", "master-detail" and so on.

## Running unit tests

Run `ig test` to execute the unit tests via [Karma](https://karma-runner.github.io). Runs all `.spec.ts` files under `./src` folder.

## Running end-to-end tests

Run `ig test --e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). Runs all `.e2e-spec.ts` files under `e2e` folder.

## Help

`ig help` lists the available commands and provides a brief description of what they do.

### Further help

To get more help on the IgniteUI CLI go check out the [IgniteUI CLI Wiki](https://github.com/IgniteUI/igniteui-cli/wiki).

## Angular CLI compatibility
You can run all of the supported Angular CLI commands. More details at [Angular CLI](https://github.com/angular/angular-cli).


## In-built Engines:

A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.

The Express application generator uses `Pug` as its default, but it also supports `Handlebars`, and `EJS`, among others.

To render template files, set the following application setting properties, in the default app.js created by the generator:

views, the directory where the template files are located. Eg: app.set('views', './views'). This defaults to the views directory in the application root directory.
view engine, the template engine to use. For example, to use the Pug template engine: app.set('view engine', 'pug').

`app.set("view engine", "hbs");`

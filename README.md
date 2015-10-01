<!---------------------------------------------------------------------------->
<!-- STOP, LOOK & LISTEN!                                                   -->
<!-- ====================                                                   -->
<!-- Do NOT edit this file directly since it's generated from a template    -->
<!-- file, using https://github.com/IonicaBizau/node-blah                   -->
<!--                                                                        -->
<!-- If you found a typo in documentation, fix it in the source files       -->
<!-- (`lib/*.js`) and make a pull request.                                  -->
<!--                                                                        -->
<!-- If you have any other ideas, open an issue.                            -->
<!--                                                                        -->
<!-- Please consider reading the contribution steps (CONTRIBUTING.md).      -->
<!-- * * * Thanks! * * *                                                    -->
<!---------------------------------------------------------------------------->

![lien](https://raw.githubusercontent.com/LienJS/Resources/master/logo/header.png)

# lien [![Donate now][donate-now]][paypal-donations]

Another lightweight NodeJS framework. Lien is the link between request and response objects.

## Installation

```sh
$ npm i lien
```

## Example

```js
// Dependencies
var Lien = require("lien");

// Init lien server
var server = new Lien({
    host: "localhost"
  , port: 9000
  , root: __dirname + "/public"
});

// Listen for load
server.on("load", function (err) {
    console.log(err || "Server started on port 9000.");
    err && process.exit(1);
});

// Add page
server.page.add("/", function (lien) {
    lien.end("Hello World");
});

server.page.add("/test", "/index.html");

```

## Press Highlights
None yet. If you wrote or found an article about this project, [add it][contributing] in this section.  :memo:

## Documentation

### `Lien(opt_options)`
Creates a new Lien instance.

#### Params
- **Object** `opt_options`: An object containing the following properties:
 - `host` (String): The server host.
 - `port` (Integer): The server port.
 - `root` (String): The public directory (default: `__dirname + "/public"`).
 - `cache` (Integer): The number of seconds for keeping the files in cache (default: `300`).

#### Return
- **Object** The Lien instance.

### `add(url, fn)`
Adds a new custom handler for specified url.

#### Params
- **String** `url`: The url to listen to.
- **Function** `fn`: The custom handler.

### `exists(url)`
Checks if there are any url handlers.

#### Params
- **String** `url`: The url to listen to.

#### Return
- **Array|Undefined** The array of handlers or `undefined` if there is no event.

### `run(url, lien)`
Executes the custom handlers.

#### Params
- **String** `url`: The url to listen to.
- **Lien** `lien`: The lien object.

#### Return
- **Boolean** `true` if any of the request prevented the response, `false` otherwise.

### `add(route, method, callback)`
Adds a new page route to the Lien instance.

#### Params
- **String|RegExp** `route`: A String or RegExp value that will handle pathnames.
- **String** `method`: The HTTP method. If provided, the callback will be handled only for that type of HTTP method.
- **Function** `callback`: The route handler. It will be called with `lien` object.

#### Return
- ****

### `delete(route, method)`
Deletes a page route.

#### Params
- **String** `route`: Route that should be deleted.
- **String** `method`: The HTTP method.

#### Return
- ****

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## License
[KINDLY][license] © [Ionică Bizău][website]–The [LICENSE](/LICENSE) file contains
a copy of the license.

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015
[contributing]: /CONTRIBUTING.md
[website]: http://ionicabizau.net
[docs]: /DOCUMENTATION.md
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=MG98D7NPFZ3MG
[donate-now]: http://i.imgur.com/6cMbHOC.png
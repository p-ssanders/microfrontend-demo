#   Microfrontend Demo

This repository contains 3 applications intended to demonstrate run-time composition of UIs:
 
- composite-ui
- app-one
- app-two

Each app exposes an `asset-manifest.json` which includes a link to the app's main JavaScript bundle. The `composite-ui` provides a navigation bar whose links load the content of `app-one` or `app-two` by requesting the respective app's manifest, and downloading the app's bundle. Each app's bundle includes a function called `render{AppName}` that the composite-ui invokes to render the app into the DOM of the composite-ui.

##  Build

```shell script
./gradlew clean build
```

##  Run

```shell script
./gradlew composite-ui:bootRun -Pargs="--server.port=8080"
./gradlew app-one:bootRun -Pargs="--server.port=8081"
./gradlew app-two:bootRun -Pargs="--server.port=8082"
```

##  References
- https://martinfowler.com/articles/micro-frontends.html
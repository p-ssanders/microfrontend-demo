#   Microfrontend Demo

This repository contains 3 applications intended to demonstrate run-time composition of UIs:
 
- composite-ui
- app-one
- app-two

The `composite-ui` UI loads the content of `app-one`'s UI by default below its content, a navigation bar, which provides
navigation to load the content of `app-two`'s UI.

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
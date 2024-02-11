# k6-qac

This is the K6 builder for the extension used y Globo QAC Team


# Changelog

# version 1.4.2

* update k6 to 0.49
    * Adds a built-in web dashboard that displays test results in real time.
    * Introduces clear functionality to the browser module's locator classes.
    * Merges the gRPC experimental module back into the gRPC core module.
    * Enables the ability to get the selection from an element in k6/html.
    * Collects internal modules and outputs used by a script.
    * Prepares k6/experimental/timers for stabilization.

# version 1.4.1

* update xk6 to v0.10.0
    * Update dependencies
    * Add codeowners configuration 
    * Update release ci to no longer rely on community extensions

# version 1.4.0

* update k6 to 0.48
    * https://github.com/grafana/k6/releases/tag/v0.48.0
    * A new k6 new subcommand to generate a new test script
    * A new k6/experimental/fs module for file interactions
* add support o HLS testing

# version 1.3.1

* update k6 to 0.47
* DNS test
* ldap test
* mongoDB test
* output to clickhouse
* SQL test
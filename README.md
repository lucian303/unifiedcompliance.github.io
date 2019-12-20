# unifiedcompliance.github.io

Unified Compliance, API 2.0 developer documentation.

## Setup

### Features

* [Jekyll](https://jekyllrb.com/)
* Sass uses the built-in support that comes with Jekyll
* [Swagger UI](https://swagger.io/tools/swagger-ui/) builds and outputs the API yaml data

### How To's

#### Adding API Documentation

1. Create a yaml data for the API endpoint. These are stored in `/data`
1. Create a front-end view of the doc page. These are stored in `/docs`
    1. Update `title`
    1. Update `yamlUrl` to point to the yaml file created in the previous step. This parameter gets passed to Swagger UI to process.
1. Add a sidebar link to the new documentation. This file is stored in `/_includes/table-of-contents.html`.

#### Updating API Documentation

You shouldn't need to make any front-end changes to the API doc's corresponding front-end file in `/docs`. If updates are made to the API yaml data file and no errors are found during Jekyll compilation, Swagger UI should process and output the API documentation without issues.
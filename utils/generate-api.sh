#!/usr/bin/env sh
curl http://localhost:8080/swagger/v1/swagger.json -o swagger.json
# ng-openapi-gen --config "utils/generate-api.configuration.json" --input swagger.json --output src/api
ng-openapi-gen --config "utils/generate-api.configuration.json" 
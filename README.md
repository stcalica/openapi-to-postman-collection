# Postman Publish Action openapi-to-postman-collection

This repository contains a GitHub Action to help automate publishing Postman Collections to the Public API Network. 
You can use this actions to transform an OpenAPI schema into a Postman collection, and update a Postman collection programmatically as part of your CI/CD workflows.

For a full list of actions and code, check here: [https://github.com/stcalica/postman-publish-action](https://github.com/stcalica/postman-publish-action)

## Actions

### **Transform OpenAPI to Postman Collection**
   This action converts an OpenAPI schema into a Postman collection. This is useful when you want to ensure your OpenAPI spec is synchronized with your Postman collection for testing or sharing purposes.

   #### Inputs:
   - `postman_api_key`: Your Postman API key for authentication.
   - `openapi_schema`: TThe OpenAPI schema you want to transform into a Postman collection.

   #### Example Usage:
   ```yaml
   - name: Transform OpenAPI to Postman Collection
     uses: stcalica/postman-publish-action@master
     with:
       postman_api_key: ${{ secrets.POSTMAN_API_KEY }}
       openapi_schema: openapi: 3.0.3
                      info:
                        title: Cat Breeds API
                        description: A simple API to get a list of all cat breeds.
                        version: "1.0.0"
                      paths:
                        /breeds:
                          get:
                            summary: Get all cat breeds
                            description: Returns a list of all cat breeds.
                            responses:
                              '200':
                                description: A JSON array of cat breeds
                                content:
                                  application/json:
                                    schema:
                                      type: array
                                      items:
                                        type: object
                                        properties:
                                          id:
                                            type: string
                                            description: The unique identifier for the breed
                                            example: "abys"
                                          name:
                                            type: string
                                            description: The name of the breed
                                            example: "Abyssinian"
                                          origin:
                                            type: string
                                            description: The country of origin for the breed
                                            example: "Egypt"
                                          description:
                                            type: string
                                            description: A brief description of the breed
                                            example: "Active, playful, and curious."
                      
                      components:
                        schemas:
                          CatBreed:
                            type: object
                            properties:
                              id:
                                type: string
                              name:
                                type: string
                              origin:
                                type: string
                              description:
                                type: string
   ```

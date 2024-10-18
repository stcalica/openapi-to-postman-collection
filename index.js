const core = require('@actions/core');
const fs = require('fs');
var Converter = require('openapi-to-postmanv2')
const path = process.env.GITHUB_ENV;

async function run() {
    const openapiSchema = core.getInput('openapi_schema');
    Converter.convert({ type: 'string', data: openapiSchema },
        {}, (err, conversionResult) => {
          if (!conversionResult.result) {
            console.log('Could not convert', conversionResult.reason);
          }
          else {
            core.setOutput('postman_collection', JSON.stringify(conversionResult.output[0].data));
          }
        }
      );
      
}

run();

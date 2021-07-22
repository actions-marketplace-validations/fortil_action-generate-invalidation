const AWS = require("aws-sdk");
const cloudfront = new AWS.CloudFront();
const core = require('@actions/core');

const INVALIDATION_ID = core.getInput('INVALIDATION_ID');

function run() {
  const params = {
    DistributionId: `${INVALIDATION_ID}`, /* required */
    InvalidationBatch: { /* required */
      CallerReference: `purchase-reference-${Math.floor(Math.random() * 1000)}`, /* required */
      Paths: { /* required */
        Quantity: 1, /* required */
        Items: [
          '/',
          /* more items */
        ]
      }
    }
  };
  return new Promise((res, rej) => cloudfront.createInvalidation(params, function(err, data) {
    if (err) rej(err || err.stack); // an error occurred
    else     res(data);           // successful response
  }));
}

run();
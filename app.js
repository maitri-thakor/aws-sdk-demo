// Import the AWS SDK
const AWS = require('aws-sdk')

// Configure AWS with the credentials and region
AWS.config.update({
  region: 'ap-southeast-2', // Replace with My region
})

// Create an S3 instance
const s3 = new AWS.S3()

// Function to upload a file to S3
const uploadFile = () => {
  const params = {
    Bucket: 'maitri-2024', // Replace with My actual S3 bucket name
    Key: 'test-file.txt', // The name of the file to be saved in S3
    Body: 'Hello !', // The content of the file to upload
  }

  s3.upload(params, (err, data) => {
    if (err) {
      console.log('Error', err)
    } else {
      console.log('Upload Success', data.Location)
    }
  })
}

// Call the function to upload the file
uploadFile()

const cosmosClient = require('./cosmosClient');

async function example() {
    try {
        // Get task result
        const result = await cosmosClient.getTaskResult(37); // Replace 37 with your task ID
        console.log('Task result:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}

example();
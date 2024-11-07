const express = require('express');
const cors = require('cors');
const cosmosClient = require('./cosmosClient');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoints
app.get('/api/task/:taskId', async (req, res) => {
    try {
        const taskId = req.params.taskId;
        const [result, input] = await Promise.all([
            cosmosClient.getTaskResult(taskId)            
        ]);

        res.json({
            taskId,
            result,
            input
        });
    } catch (error) {
        console.error('Error fetching task data:', error);
        res.status(500).json({ 
            error: 'Failed to fetch task data',
            message: error.message 
        });
    }
});

// Separate endpoints if you prefer
app.get('/api/task/:taskId/result', async (req, res) => {
    try {
        const result = await cosmosClient.getTaskResult(req.params.taskId);
        res.json(result);
    } catch (error) {
        console.error('Error fetching task result:', error);
        res.status(500).json({ 
            error: 'Failed to fetch task result',
            message: error.message 
        });
    }
});

app.get('/api/task/:taskId/input', async (req, res) => {
    try {
        const input = await cosmosClient.getTaskInput(req.params.taskId);
        res.json(input);
    } catch (error) {
        console.error('Error fetching task input:', error);
        res.status(500).json({ 
            error: 'Failed to fetch task input',
            message: error.message 
        });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

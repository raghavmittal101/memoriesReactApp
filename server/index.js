import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

// initialize express application app
const app = express();
app.use(cors());
app.use('/posts', postRoutes);

// setting up body parser for sending requests
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

const CONNECTION_URL = 'mongodb+srv://mernstack123:mernstack123@cluster0.ovnng.mongodb.net/memories_app?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

    // mongoose.set('useFindAndModify', false);
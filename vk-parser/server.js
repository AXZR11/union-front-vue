const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());

const PORT = 3000;

app.get('/api/posts', async (req, res) => {
  try {
    const response = await axios.get('https://api.vk.com/method/wall.get', {
      params: {
        owner_id: process.env.VK_GROUP_ID, // ID вашей группы из переменной окружения
        access_token: process.env.VK_ACCESS_TOKEN,
        v: '5.131',
      },
    });

    if (response.data.error) {
      return res.status(500).json({ error: response.data.error });
    }

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    res.status(500).json({ error: 'Error fetching posts' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

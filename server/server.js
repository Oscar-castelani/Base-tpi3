const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path'); 
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));


app.get('/api/products', (req, res) => {
  const products = [
    { 
      id: 1, 
      name: 'Pirámide', 
      description: `
        <strong>Medidas</strong> <br>
        <strong>Alto:</strong> 50 cm <br>
        <strong>Boca:</strong> 30 cm <br>
        <strong>Base:</strong> 20cm <br>
        
      `,
      price: 9800, 
      urlImg: 'images/fibro/fibro-7.jpg'
    },
    {
      id: 2, 
       name: 'Pirámide', 
      description: `
        <strong>Medidas</strong> <br>
        <strong>Alto:</strong> 80 cm <br>
        <strong>Boca:</strong> 30 cm <br>
        <strong>Base:</strong> 20cm <br>  
      `,
      price: 11400, 
      urlImg: 'images/fibro/fibro-4.jpg'
    },
    { 
      id: 3, 
      name: 'Volcada', 
      description: `
        <strong>Medidas</strong> <br>
        <strong>Alto:</strong> 50 cm <br>
        <strong>Boca:</strong> 30 cm <br>
        <strong>Base:</strong> 20cm <br>  
      `,
      price: 9200, 
      urlImg: 'images/fibro/fibro-12.jpg'
    },

    { 
      id: 4, 
      name: 'Misionera', 
      description: `
        <strong>Medidas</strong> <br>
        <strong>Alto:</strong> 67 cm <br>
        <strong>Boca:</strong> 37 cm <br>
        <strong>Base:</strong> 30cm <br>  
      `,
      price: 20000, 
      urlImg: 'images/fibro/fibro-3.jpg'
    },

    {
      id: 5, 
      name: 'Misionera', 
      description: `
        <strong>Medidas</strong> <br>
        <strong>Alto:</strong> 50 cm <br>
        <strong>Boca:</strong> 37 cm <br>
        <strong>Base:</strong> 30cm <br>  
      `,
      price: 17000, 
      urlImg: 'images/fibro/fibro-8.jpg'
    },


    {
      id: 6, 
      name: 'Prisma', 
      description: `
        <strong>Medidas</strong> <br>
        <strong>Alto:</strong> 50 cm <br>
        <strong>Boca:</strong> 20 cm <br>
        <strong>Base:</strong> 20cm <br>  
      `,
      price: 7200, 
      urlImg: 'images/fibro/fibro-5.jpg'
    },
    {
      id: 7, 
      name: 'Prisma', 
      description: `
        <strong>Medidas</strong> <br>
        <strong>Alto:</strong> 40 cm <br>
        <strong>Boca:</strong> 20 cm <br>
        <strong>Base:</strong> 20cm <br>  
      `,
      price: 6500, 
      urlImg: 'images/fibro/fibro-11.jpg'
    },
    {
      id: 8, 
      name: 'Jardinera', 
      description: `
        <strong>Medidas</strong> <br>
        <strong>Alto:</strong> 40 cm <br>
        <strong>Largo:</strong> 1 metro <br>
        <strong>Ancho:</strong> 20cm <br>  
      `,
      price: 15000, 
      urlImg: 'images/fibro/fibro-9.jpg'
    },
    {
      id: 9, 
      name: 'Jardinera', 
      description: `
        <strong>Medidas</strong> <br>
        <strong>Alto:</strong> 30 cm <br>
        <strong>Largo:</strong> 80cm <br>
        <strong>Ancho:</strong> 30cm <br> 
      `,
      price: 10500, 
      urlImg: 'images/fibro/fibro-2.jpg'
    },
    {
      id: 10, 
      name: 'Buho',
      description: `
        <strong>Medidas</strong> <br>
        <strong>Alto:</strong> 20 cm <br>
        <strong>Boca:</strong> 20 cm <br>
        <strong>Base:</strong> 15cm <br>  
      `,
      price: 4500, 
      urlImg: 'images/fibro/fibro-10.jpg'
    },
    {
      id: 11, 
      name: 'Floreal',
      description: `
        <strong>Medidas</strong> <br>
        <strong>Alto:</strong> 34 cm <br>
        <strong>Boca:</strong> 40 cm <br>
        <strong>Base:</strong> 24 cm <br>  
      `,
      price: 9200, 
      urlImg: 'images/fibro/fibro-6.jpg'
    },
    {
      id: 12, 
      name: 'Cubo',
      description: `
        <strong>Medidas</strong> <br>
        <strong>Alto:</strong> 40 cm <br>
        <strong>Boca:</strong> 40 cm <br>
        <strong>Base:</strong> 40cm <br>  
      `,
      price: 10600, 
      urlImg: 'images/fibro/fibro-1.jpg'
    },


    
    
  ];

  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
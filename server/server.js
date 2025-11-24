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

// Macetas de plástico
const plasticProducts = [
  {
    id: 1,
    name: 'Jardinera',
    description: `
      <strong>Marca:</strong> Matri <br>
      <strong>Modelo:</strong> Owen <br>
      <strong>Nro:</strong> 35  <br>
      <strong>Color:</strong> Marrón <br>
    `,
    price: 3500,
    urlImg: 'images/plástico/plástico-10.jpg'
  },

   {
    id: 2,
    name: 'Jardinera',
    description: `
      <strong>Marca:</strong> Matri <br>
      <strong>Modelo:</strong> Owen <br>
      <strong>Nro:</strong> 35  <br>
      <strong>Color:</strong> Blanco <br>
    `,
    price: 3500,
    urlImg: 'images/plástico/plástico-9.jpg'
  },

   {
    id: 3,
    name: 'Jardinera',
    description: `
      <strong>Marca:</strong> Matri <br>
      <strong>Modelo:</strong> Owen <br>
      <strong>Nro:</strong> 35  <br>
      <strong>Color:</strong> Negro <br>
    `,
    price: 3500,
    urlImg: 'images/plástico/plástico-8.jpg'
  },
   {
    id: 4,
    name: 'Milan',
    description: `
      <strong>Marca:</strong> T.A <br>
      <strong>Modelo:</strong> Milan <br>
      <strong>Nro:</strong> 20  <br>
      <strong>Color:</strong> Rosa <br>
    `,
    price: 4500,
    urlImg: 'images/plástico/plástico-7.jpg'
  },
   {
    id: 5,
     name: 'Milan',
    description: `
      <strong>Marca:</strong> T.A <br>
      <strong>Modelo:</strong> Milan <br>
      <strong>Nro:</strong> 20  <br>
      <strong>Color:</strong> Azul <br>
    `,
    price: 4500,
    urlImg: 'images/plástico/plástico-6.jpg'
  },
   {
    id: 6,
     name: 'Milan',
    description: `
      <strong>Marca:</strong> T.A <br>
      <strong>Modelo:</strong> Milan <br>
      <strong>Nro:</strong> 20  <br>
      <strong>Color:</strong> Negro <br>
    `,
    price: 4500,
    urlImg: 'images/plástico/plástico-5.jpg'
  },
   {
    id: 7,
     name: 'Pirámide',
    description: `
      <strong>Marca:</strong> Matri <br>
      <strong>Modelo:</strong> Owen <br>
      <strong>Nro:</strong> 20  <br>
      <strong>Color:</strong> Blanco <br>
    `,
    price: 4900,
    urlImg: 'images/plástico/plástico-12.jpg'
  },
   {
    id: 8,
    name: 'Pirámide',
    description: `
      <strong>Marca:</strong> Matri <br>
      <strong>Modelo:</strong> Owen <br>
      <strong>Nro:</strong> 20  <br>
      <strong>Color:</strong> Negro <br>
    `,
    price: 4900,
    urlImg: 'images/plástico/plástico-11.jpg'
  },
   {
    id: 9,
    name: 'Finny',
    description: `
      <strong>Marca:</strong> Matri <br>
      <strong>Modelo:</strong> Finny <br>
      <strong>Nro:</strong> 24  <br>
      <strong>Color:</strong> Beige <br>
    `,
    price: 3900,
    urlImg: 'images/plástico/plástico-1.jpg'
  },
   {
    id: 10,
    name: 'Finny',
    description: `
      <strong>Marca:</strong> Matri <br>
      <strong>Modelo:</strong> Finny <br>
      <strong>Nro:</strong> 20  <br>
      <strong>Color:</strong> Blanco <br>
    `,
    price: 2700,
    urlImg: 'images/plástico/plástico-2.jpg'
  },
   {
    id: 11,
    name: 'Ibiza',
    description: `
      <strong>Marca:</strong> Matri <br>
      <strong>Modelo:</strong> Ibiza <br>
      <strong>Nro:</strong> 30  <br>
      <strong>Color:</strong> Negro <br>
    `,
    price: 4500,
    urlImg: 'images/plástico/plástico-3.jpg'
  },
   {
    id: 12,
    name: 'Ibiza',
    description: `
      <strong>Marca:</strong> Matri <br>
      <strong>Modelo:</strong> Ibiza <br>
      <strong>Nro:</strong> 30  <br>
      <strong>Color:</strong> Beige <br>
    `,
    price: 4500,
    urlImg: 'images/plástico/plástico-4.jpg'
  },

];

app.get('/api/products/plastico', (req, res) => {
  res.json(plasticProducts);  
});

const hogar = [
  {
    id: 1,
    name: 'Cesto',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Modelo:</strong> ..... <br>
      <strong>Nro:</strong> .....  <br>
      <strong>Color:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/hogar/organizador de ropa.jpg'
  },
  {
    id: 2,
    name: 'Humidificador',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Modelo:</strong> ..... <br>
      <strong>Nro:</strong> .....  <br>
      <strong>Color:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/hogar/humi.jpg'
  },
  {
    id: 3,
    name: 'Rociador',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Modelo:</strong> ..... <br>
      <strong>Nro:</strong> .....  <br>
      <strong>Color:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/hogar/rociador.jpg'
  },

   {
    id: 4,
    name: 'Lampara',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Modelo:</strong> ..... <br>
      <strong>Nro:</strong> .....  <br>
      <strong>Color:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/hogar/lamparas.jpg'
  },
   {
    id: 5,
    name: 'Batidor',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Modelo:</strong> ..... <br>
      <strong>Nro:</strong> .....  <br>
      <strong>Color:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/hogar/batidor.jpg'
  },

   {
    id: 6,
    name: 'Mopa',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Modelo:</strong> ..... <br>
      <strong>Nro:</strong> .....  <br>
      <strong>Color:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/hogar/mopa.jpg'
  },

   {
    id: 7,
    name: 'Cesto',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Modelo:</strong> ..... <br>
      <strong>Nro:</strong> .....  <br>
      <strong>Color:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/hogar/organizador de ropa.jpg'
  },
  {
    id: 8,
    name: 'Humidificador',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Modelo:</strong> ..... <br>
      <strong>Nro:</strong> .....  <br>
      <strong>Color:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/hogar/humi.jpg'
  },

   {
    id: 9,
    name: 'Rociador',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Modelo:</strong> ..... <br>
      <strong>Nro:</strong> .....  <br>
      <strong>Color:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/hogar/rociador.jpg'
  },

   {
    id: 10,
    name: 'Lampara',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Modelo:</strong> ..... <br>
      <strong>Nro:</strong> .....  <br>
      <strong>Color:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/hogar/lamparas.jpg'
  },
  {
    id: 5,
    name: 'Batidor',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Modelo:</strong> ..... <br>
      <strong>Nro:</strong> .....  <br>
      <strong>Color:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/hogar/batidor.jpg'
  },

   {
    id: 6,
    name: 'Mopa',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Modelo:</strong> ..... <br>
      <strong>Nro:</strong> .....  <br>
      <strong>Color:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/hogar/mopa.jpg'
  },
  

  
  
];

app.get('/api/products/hogar', (req, res) => {
  res.json(hogar);
});

const venenos = [
  {
    id: 1,
    name: 'Hortal',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/venenos/veneno-1.jpg'
  },
  {
    id: 2,
    name: 'Hormiz',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/venenos/veneno-2.jpg'
  },
  {
    id: 3,
    name: 'Jabón Potásico',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/venenos/veneno-3.jpg'
  },
  {
    id:4,
    name: 'Fertifox',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/venenos/veneno-4.jpg'
  },
  {
    id: 5,
    name: 'Ecthol 5',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/venenos/veneno-5.jpg'
  },
  {
    id: 6,
    name: 'Myrmec',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/venenos/veneno-6.jpg'
  },

  {
    id: 7,
    name: 'Hortal',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/venenos/veneno-1.jpg'
  },
  {
    id: 8,
    name: 'Hormiz',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/venenos/veneno-2.jpg'
  },
  {
    id: 9,
    name: 'Jabón Potásico',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/venenos/veneno-3.jpg'
  },
  {
    id:10,
    name: 'Fertifox',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/venenos/veneno-4.jpg'
  },
   {
    id: 11,
    name: 'Ecthol 5',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/venenos/veneno-5.jpg'
  },
  {
    id: 12,
    name: 'Myrmec',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/venenos/veneno-6.jpg'
  }
];
app.get('/api/products/venenos', (req, res) => {
  res.json(venenos);
});

const plantas = [
  {
    id: 1,
    name: 'Sansevieria',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/plantas/planta-1.jpg'
  },
   {
    id: 2,
    name: 'Palmito',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/plantas/planta-2.jpg'
  },
   {
    id: 3,
    name: 'Yuca',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/plantas/planta-3.jpg'
  },
   {
    id: 4,
    name: 'Palo de Agua',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/plantas/planta-4.jpg'
  },
   {
    id: 5,
    name: 'Pothus',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/plantas/planta-5.jpg'
  },
   {
    id: 6,
    name: 'Monstera',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/plantas/planta-6.jpg'
  },
   {
    id: 7,
    name: 'Sansevieria',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/plantas/planta-1.jpg'
  },
   {
    id: 8,
    name: 'Palmito',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/plantas/planta-2.jpg'
  },
   {
    id: 9,
    name: 'Yuca',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/plantas/planta-3.jpg'
  },
   {
    id: 10,
    name: 'Palo de Agua',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/plantas/planta-4.jpg'
  },
   {
    id: 11,
    name: 'Pothus',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/plantas/planta-5.jpg'
  },
   {
    id: 12,
    name: 'Monstera',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/plantas/planta-6.jpg'
  }
  
];

app.get('/api/products/plantas', (req, res) => {
  res.json(plantas);
});

const mascotas = [
  {
    id: 1,
    name: 'Plato Gato',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/mascotas/mascotas-1.jpg'
  },
  {
    id: 2,
    name: 'Bandejas Sanitarias',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/mascotas/mascotas-2.jpg'
  },
  {
    id: 3,
    name: 'Cepillo',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/mascotas/mascotas-3.jpg'
  },
  {
    id: 4,
    name: 'Plato Oval',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/mascotas/mascotas-4.jpg'
  },
  {
    id: 5,
    name: 'Plato Pez',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/mascotas/mascotas-5.jpg'
  },
  {
    id: 6,
    name: 'Cepillo Doble',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/mascotas/mascotas-6.jpg'
  },
  {
    id: 7,
    name: 'Plato Gato',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/mascotas/mascotas-1.jpg'
  },
  {
    id: 8,
    name: 'Bandejas Sanitarias',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/mascotas/mascotas-2.jpg'
  },
  {
    id: 9,
    name: 'Cepillo',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/mascotas/mascotas-3.jpg'
  },
  {
    id: 10,
    name: 'Plato Oval',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/mascotas/mascotas-4.jpg'
  },
  {
    id: 11,
    name: 'Plato Pez',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/mascotas/mascotas-5.jpg'
  },
  {
    id: 12,
    name: 'Cepillo Doble',
    description: `
      <strong>Marca:</strong> ..... <br>
      <strong>Tipo:</strong> .....  <br>
      <strong>Contenido:</strong> ..... <br>
    `,
    price: 0,
    urlImg: 'images/mascotas/mascotas-6.jpg'
  }
];

app.get('/api/products/mascotas', (req, res) => {
  res.json(mascotas);
});

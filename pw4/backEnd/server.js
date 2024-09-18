const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Middleware para ler o corpo das requisições como JSON
app.use(express.json());

// Definir o caminho para o arquivo .txt
const filePath = path.join(__dirname, 'data.txt');

// Endpoint para salvar dados no arquivo
app.post('/save-data', (req, res) => {
  const { data } = req.body;
  
  // Validação simples para garantir que 'data' está presente
  if (!data) {
    return res.status(400).json({ error: 'No data provided' });
  }
  
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return res.status(500).json({ error: 'Error writing file' });
    }
    res.status(200).json({ message: 'File saved successfully' });
  });
});

// Endpoint para ler dados do arquivo
app.get('/read-data', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).json({ error: 'Error reading file' });
    }
    res.status(200).json({ data });
  });
});

// Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

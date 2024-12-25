// const express = require('express');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// const PORT = 3000;
// const folderPath = path.join(__dirname, 'files');

// // Ensure the folder exists
// if (!fs.existsSync(folderPath)) {
//   fs.mkdirSync(folderPath);
// }

// // Endpoint to create a file
// app.post('/create-file', (req, res) => {
//   const timestamp = new Date().toISOString();
//   const filename = ${timestamp.replace(/[:.]/g, '-')}.txt;
//   const filePath = path.join(folderPath, filename);

//   fs.writeFile(filePath, timestamp, (err) => {
//     if (err) {
//       return res.status(500).send('Error creating file');
//     }
//     res.send({ message: 'File created', filename });
//   });
// });

// // Endpoint to retrieve all text files
// app.get('/files', (req, res) => {
//   fs.readdir(folderPath, (err, files) => {
//     if (err) {
//       return res.status(500).send('Error reading directory');
//     }
//     const textFiles = files.filter((file) => file.endsWith('.txt'));
//     res.send({ files: textFiles });
//   });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(Server running on http://localhost:${PORT});
// });

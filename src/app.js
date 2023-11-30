const express = require('express');
const recoveryRoutes = require('./routes/recovery');

const app = express();
app.use(express.json());

app.use('/api/auth', recoveryRoutes);

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Servicio de recuperación de contraseñas corriendo en el puerto ${PORT}`);
});

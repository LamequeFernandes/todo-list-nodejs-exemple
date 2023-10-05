import app from './app'
import { UsuarioPostSchema } from './schemas/usuario.schema';

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});

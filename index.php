 <!DOCTYPE html>
 <html lang="pt-br">
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css">
        <title>Sistema de login Priii systems</title>
    </head>
<body class="bg-dark">


<main class="container mt-4">
      <!--conteudo principal-->
        <section class="row">
            <div class="col-lg-4 offset-lg-4" id="alerta">

            <div class="alert alert-success text-center">
                <strong id="resultado">
                Terrivel mundo sem o sublime!! 
  </strong>
    </div>
  </div>     
  </section>
 
 <!--formulario de login-->           
 <section class="row">
    <div class="col-lg-4 offset-lg-4 bg-light rounded" id="caixaLogin">
        <h2 class="text-center mt-2">Entrada no sistema</h2>
            <from action"#" id="formLogin" class="p-2">

            <div class"frorm-group">
                <input type="text" name="nomeUsuario" id="nomeUsuario" class="form-control"
                placeholder="Nome do usuário" required>
            </div>

            <div class"frorm-group">
                    
                <input type="password" name="nomeUsuario" id="nomeUsuario" class="form-control"
                placeholder="Senha do usuário" required>

            </div>

            <div class"frorm-group">
                
                <div class="custom-control custom-checkbox">
                
                        <input type="checkbox" name"lembrar" id="lembrar" class="form-check-input">
                            <label for="Lembrar">Lembrar de mim </label>

                                <a href="#" id="btnEsqueci" class="float-right">
                                Esqueci a senha!!
                 </div>

            </div>

            <div class"frorm-group">
            
                    <input type="submit" value="::Entrar::"
                    name="btnEntrar" id="btnEntrar"
                    class="btn btn-primary btn-block">

            </div>

            <div class"frorm-group">
                    <p class="center">Novo Usuário?     
                    <a href="#" id="btnCadastrar">Cadastre-se aqui.</a>
                 </p>
            </div>
        </from>
    </div>
 </section>
 
 
 </main>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.15.0/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
</body>
</html>
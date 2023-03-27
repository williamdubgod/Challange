import React from "react";
import ImgCadastro from '../Img/Cadastro/cadastro.png'

function handleFormSubmit(event) {
    event.preventDefault(); // previne o envio padrão do formulário
  
    const form = event.target;
    const nome = form.elements.nome.value;
    const email = form.elements.email.value;
    const senha = form.elements.senha.value;
    const confirmarSenha = form.elements.confirmarSenha.value;
  
    let primeiroCampoVazio = null;
  
    if (!nome) {
      primeiroCampoVazio = form.elements.nome;
    } else if (!email) {
      primeiroCampoVazio = form.elements.email;
    } else if (!senha) {
      primeiroCampoVazio = form.elements.senha;
    } else if (!confirmarSenha) {
      primeiroCampoVazio = form.elements.confirmarSenha;
    }
  
    if (!primeiroCampoVazio) {
      // verifica se a senha tem no mínimo 6 caracteres, uma letra maiúscula e uma minúscula
      const senhaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
      if (!senhaRegex.test(senha)) {
        alert('A senha deve conter no mínimo 6 caracteres, uma letra maiúscula e uma minúscula.');
        focusInputField(form.elements.senha);
        return;
      }
  
      // verifica se a confirmação de senha é igual à senha
      if (senha !== confirmarSenha) {
        alert('Os campos de senha devem ser iguais.');
        focusInputField(form.elements.confirmarSenha);
        return;
      }
  
      // todos os campos estão preenchidos e válidos, envia o formulário e redireciona para a página /login
      form.submit();
      window.location.href = '/login';
    } else {
      // exibe mensagem de erro
      alert('Por favor, preencha todos os campos antes de enviar o formulário.');
  
      // define o foco no primeiro campo que não foi preenchido
      focusInputField(primeiroCampoVazio);
    }
  }
  
  function focusInputField(inputField) {
    inputField.classList.add('input-focus');
    inputField.focus();
    inputField.select();
  }
  
  export default function Cadastro() {
    return (
      <body id="body-login-cadastro">
        <div id="container">
          <img src={ImgCadastro} alt={'Mulher fazendo login'} id="img-principal-cadastro" />
          <div id="info-formulario">
            <form id="form-login-cadastro" name="form" action="/" onSubmit={handleFormSubmit}>
              <h1 id="titulo-login-cadastro">
                <strong>Criar Conta</strong>
              </h1>
              <br />
              <p>
                <label className="label" htmlFor="nome">Nome Completo</label>
                <br />
                <input
                  type="text"
                  className="input"
                  name="nome"
                />
              </p>
              <br />
              <p>
                <label htmlFor="email">Celular ou E-Mail</label>
                <br />
                <input
                  type="text"
                  className="input"
                  name="email"
                />
              </p>
              <br />
              <p>
                <label htmlFor="senha">Senha</label>
                <br />
                <input
                  type="password"
                  className="input"
                  name="senha"
                />
              </p>
              <br />
              <p>
                <label htmlFor="senha">Confirmar senha</label>
                <br />
                <input
                  type="password"
                  className="input"
                  name="confirmarSenha"
                />
              </p>
              <br />
              <button id="botao-login-cadastro">Cadastrar</button>
              <br />
            </form>
          </div>
        </div>
      </body>
    );
  }
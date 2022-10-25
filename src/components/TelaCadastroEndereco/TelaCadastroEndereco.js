import {
    Form,
    FormContainer,
    Input,
    StyledLabel,
    SendButton,
    BackToLoginButton
  } from "../TelaCadastro/styled";

function TelaCadastroEndereco(props) {
return(
    <FormContainer>
      <h1>Cadastro de Endereço </h1>
      <Form>
        <StyledLabel htmlFor="titulo">
          Endereço:
          <Input id="titulo" />
        </StyledLabel>
        <SendButton onClick={() => props.mudarTela(4)}>Cadastrar</SendButton>
        <BackToLoginButton onClick={() => props.mudarTela(2)}>
          Voltar
        </BackToLoginButton>
        </Form>
    </FormContainer>

    );
}
export default TelaCadastroEndereco;


// Um input para endereço
// Um input para número da residência
// um input para telefone
// um input para complemento
// um botão para ser usado para passar a próxima página
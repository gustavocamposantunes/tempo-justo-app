export class InvalidCredentialsError extends Error {
  constructor(message: string = "Email ou senha inválidos") {
    super(message);
    this.name = "InvalidCredentialsError";
  }
}

export class InternalServerError extends Error {
  constructor(message: string = "Erro ao fazer o login") {
    super(message);
    this.name = "InternalServerError";
  }
}

export class UserNotFoundError extends Error {
  constructor(message) {
    super(message)
    this.name = "UserNotFoundError"
    this.stack = ""
  }
}

export class InvalidPasswordError extends Error {
  constructor(message) {
    super(message)
    this.name = "InvalidPasswordError"
    this.stack = ""
  }
}
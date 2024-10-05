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

export class ChangePasswordError extends Error {
  constructor(message) {
    super(message)
    this.name = "ChangePasswordError"
    this.stack = ""
  }
}

export class CouldNotSavePlanError extends Error {
  constructor(message) {
    super(message)
    this.name = "CouldNotSavePlanError"
    this.stack = ""
  }
}
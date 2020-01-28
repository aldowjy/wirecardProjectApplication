export const validation = {
  oldPassword: {
    presence: true,
    format: {
      pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_\~\-\`\\\"\'+|\[\]}{:;'?>.<,]).*$/,
      message: '^At least an uppercase alphabet, numeral, and special character',
    },
    length: {
      minimum: 10,
      message: '^Your password must be at least 10 characters'
    },
  },
  newPassword: {
    presence: true,
    format: {
      pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_\~\-\`\\\"\'+|\[\]}{:;'?>.<,]).*$/,
      message: '^At least an uppercase alphabet, numeral, and special character',
    },
    length: {
      minimum: 10,
      message: '^Your password must be at least 10 characters'
    },
  },
  confirmPassword: {
    presence: true,
    format: {
      pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_\~\-\`\\\"\'+|\[\]}{:;'?>.<,]).*$/,
      message: '^At least an uppercase alphabet, numeral, and special character',
    },
    length: {
      minimum: 10,
      message: '^Your password must be at least 10 characters'
    },
  }
}
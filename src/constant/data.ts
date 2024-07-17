export const registertatusMessages = {
  201: {
    title: 'Sucesso',
    description:
      'Registro realizado com sucesso. Redirecionando para o login...',
    variant: 'default',
    duration: 3000,
  },
  409: {
    title: 'Erro',
    description:
      'Email já existente. Por favor, verifique os dados e tente novamente.',
    variant: 'destructive',
    duration: 3000,
  },
  400: {
    title: 'Erro',
    description:
      'A senha deve ter no mínimo 8 caracteres. Por favor, verifique os dados e tente novamente.',
    variant: 'destructive',
    duration: 3000,
  },
};

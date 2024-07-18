type VariantType = 'destructive' | 'default';

interface StatusMessage {
  title: string;
  description: string;
  variant: VariantType;
  className?: string;
  duration: number;
}

export const registerStatusMessages: Record<number, StatusMessage> = {
  201: {
    title: 'Sucesso',
    description:
      'Registro realizado com sucesso. Redirecionando para o login...',
    variant: 'default',
    className: 'bg-green-400 text-white',
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

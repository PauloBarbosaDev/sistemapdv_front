import LogoGeneric from '../../../Common/LogoGeneric/LogoGeneric';
import FooterIcons from '../FooterIcons/FooterIcons';
import FooterList from '../FooterList/FooterList';

const FooterMain = () => {
  return (
    <div className="flex justify-around items-center bg-lightBase min-h-[26.313rem]">
      <div className="flex flex-col gap-8">
        <LogoGeneric />
        <p className="text-title leading-[3.5rem] text-darkBlue w-[31.125rem] font-bold">
          Vamos transformar seu negócio?
        </p>
        <FooterIcons />
      </div>
      <div className="flex gap-[6.25rem]">
        <FooterList
          title="PsistemaPDV"
          items={[
            'Acessar Sistema',
            'Teste Grátis',
            'Sobre nós',
            'Trabalhe Conosco',
            'Planos e Preços',
            'Blog',
          ]}
        />
        <FooterList
          title="Funcionalidades"
          items={[
            'Cadastro de Usuários',
            'Cadastro de Produtos',
            'Cadastro de Categorias',
            'Controle de Estoque',
            'Cadastro de Vendas',
            'Relatórios',
          ]}
        />
      </div>
    </div>
  );
};

export default FooterMain;

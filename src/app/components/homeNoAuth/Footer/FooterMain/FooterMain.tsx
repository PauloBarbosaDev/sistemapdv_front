import LogoGeneric from '../../../Common/LogoGeneric/LogoGeneric';
import FooterIcons from '../FooterIcons/FooterIcons';
import FooterList from '../FooterList/FooterList';

const FooterMain = () => {
  return (
    <div className="flex justify-around items-center bg-lightBase min-h-[26.313rem] lg:p-8 xl:p-0">
      <div className="flex flex-col gap-8 p-3 sm:p-0">
        <LogoGeneric />
        <p className="text-4xl max-w-sm sm:text-5xl sm:max-w-lg lg:max-w-sm xl:max-w-lg leading-[2.4rem] sm:leading-[3.563rem] text-darkBlue  font-bold">
          Vamos transformar seu negócio?
        </p>
        <FooterIcons />
      </div>
      <div className="hidden lg:flex lg:gap-10 xl:flex xl:gap-[6.25rem]">
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

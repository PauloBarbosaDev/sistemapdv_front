import { LucidePieChart } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../ui/card';
import { ChartGeneric } from '../../../Common/ChartGeneric/ChartGeneric';

const HomeCards = () => {
  return (
    <>
      <Card className="w-full">
        <CardHeader className="flex-row justify-center space-x-4 bg-lightBase shadow-custom">
          <LucidePieChart width={40} height={40} />
          <CardTitle className="text-xl sm:text-2xl">
            GRÁFICO DE VENDAS NO MÊS
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartGeneric />
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardHeader className="flex-row justify-center space-x-4 bg-lightBase shadow-custom">
          <LucidePieChart width={40} height={40} />
          <CardTitle className="text-xl sm:text-2xl">
            GRÁFICO DE VENDAS NO MÊS
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartGeneric />
        </CardContent>
      </Card>
    </>
  );
};

export default HomeCards;

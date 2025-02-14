
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Circle } from "lucide-react";

interface Driver {
  id: string;
  name: string;
  license: string;
  category: string;
  status: 'available' | 'driving' | 'off';
  lastActivity?: string;
}

// Mock data for drivers
const mockDrivers: Driver[] = [
  {
    id: '1',
    name: 'João Silva',
    license: '12345678900',
    category: 'D',
    status: 'available',
    lastActivity: '2024-03-18'
  },
  {
    id: '2',
    name: 'Maria Santos',
    license: '98765432100',
    category: 'E',
    status: 'driving',
    lastActivity: '2024-03-18'
  },
  {
    id: '3',
    name: 'Pedro Oliveira',
    license: '45678912300',
    category: 'D',
    status: 'off',
    lastActivity: '2024-03-17'
  }
];

const DriversPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Motoristas</h1>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Novo Motorista
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockDrivers.map((driver) => (
          <Card 
            key={driver.id}
            className="hover:shadow-lg transition-shadow cursor-pointer"
          >
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                {driver.name}
                <Circle className={`w-3 h-3 fill-current ${
                  driver.status === 'available' ? 'text-green-500' :
                  driver.status === 'driving' ? 'text-blue-500' :
                  'text-gray-500'
                }`} />
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                CNH: {driver.license} (Categoria {driver.category})
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Última atividade:</span>
                  <span className="text-muted-foreground">
                    {driver.lastActivity ? new Date(driver.lastActivity).toLocaleDateString() : 'N/A'}
                  </span>
                </div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  driver.status === 'available' ? 'bg-green-100 text-green-800' :
                  driver.status === 'driving' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {driver.status === 'available' ? 'Disponível' :
                   driver.status === 'driving' ? 'Em rota' :
                   'Indisponível'}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DriversPage;

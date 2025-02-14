
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface Vehicle {
  id: string;
  plate: string;
  model: string;
  year: string;
  status: 'active' | 'maintenance' | 'inactive';
}

// Mock data for vehicles
const mockVehicles: Vehicle[] = [
  {
    id: '1',
    plate: 'ABC1234',
    model: 'Toyota Corolla',
    year: '2022',
    status: 'active'
  },
  {
    id: '2',
    plate: 'XYZ5678',
    model: 'Honda Civic',
    year: '2023',
    status: 'maintenance'
  },
  {
    id: '3',
    plate: 'DEF9012',
    model: 'Volkswagen Golf',
    year: '2021',
    status: 'active'
  }
];

const VehiclesPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Veículos</h1>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Novo Veículo
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockVehicles.map((vehicle) => (
          <Card 
            key={vehicle.id}
            className="hover:shadow-lg transition-shadow cursor-pointer"
          >
            <CardHeader>
              <CardTitle className="text-lg">
                {vehicle.model} ({vehicle.year})
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Placa: {vehicle.plate}
              </p>
            </CardHeader>
            <CardContent>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                vehicle.status === 'active' ? 'bg-green-100 text-green-800' :
                vehicle.status === 'maintenance' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {vehicle.status === 'active' ? 'Ativo' :
                 vehicle.status === 'maintenance' ? 'Em manutenção' :
                 'Inativo'}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VehiclesPage;

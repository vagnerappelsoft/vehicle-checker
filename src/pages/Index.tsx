
import { useState } from 'react';
import { VehicleSelector } from '@/components/VehicleSelector';
import { VehicleChecklist } from '@/components/VehicleChecklist';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus } from 'lucide-react';

interface Vehicle {
  plate: string;
  model: string;
  year: string;
}

interface Checklist {
  id: string;
  vehicle: Vehicle;
  date: string;
  status: 'pending' | 'completed';
  progress: number;
}

// Temporary mock data
const mockChecklists: Checklist[] = [
  {
    id: '1',
    vehicle: {
      plate: 'ABC1234',
      model: 'Toyota Corolla',
      year: '2022'
    },
    date: '2024-03-18',
    status: 'completed',
    progress: 100
  },
  {
    id: '2',
    vehicle: {
      plate: 'XYZ5678',
      model: 'Honda Civic',
      year: '2023'
    },
    date: '2024-03-18',
    status: 'pending',
    progress: 45
  }
];

const Index = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  if (isCreating) {
    return <VehicleSelector onSelect={(vehicle) => {
      setSelectedVehicle(vehicle);
      setIsCreating(false);
    }} />;
  }

  if (selectedVehicle) {
    return <VehicleChecklist vehicleInfo={selectedVehicle} />;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Checklists</h1>
        <Button 
          onClick={() => setIsCreating(true)}
          className="bg-primary hover:bg-primary/90"
        >
          <Plus className="w-4 h-4 mr-2" />
          Novo Checklist
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockChecklists.map((checklist) => (
          <Card 
            key={checklist.id}
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedVehicle(checklist.vehicle)}
          >
            <CardHeader>
              <CardTitle className="text-lg">
                {checklist.vehicle.model} ({checklist.vehicle.year})
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Placa: {checklist.vehicle.plate}
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Data: {new Date(checklist.date).toLocaleDateString()}</span>
                  <span className={`font-medium ${
                    checklist.status === 'completed' ? 'text-green-600' : 'text-orange-600'
                  }`}>
                    {checklist.status === 'completed' ? 'Concluído' : 'Em andamento'}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full transition-all"
                    style={{ width: `${checklist.progress}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;

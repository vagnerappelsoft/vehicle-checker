
import { useState } from 'react';
import { VehicleSelector } from '@/components/VehicleSelector';
import { VehicleChecklist } from '@/components/VehicleChecklist';

interface Vehicle {
  plate: string;
  model: string;
  year: string;
}

const Index = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      {!selectedVehicle ? (
        <VehicleSelector onSelect={setSelectedVehicle} />
      ) : (
        <VehicleChecklist vehicleInfo={selectedVehicle} />
      )}
    </div>
  );
};

export default Index;

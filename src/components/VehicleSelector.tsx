
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Vehicle {
  plate: string;
  model: string;
  year: string;
}

export const VehicleSelector = ({ onSelect }: { onSelect: (vehicle: Vehicle) => void }) => {
  const [vehicle, setVehicle] = useState<Vehicle>({
    plate: '',
    model: '',
    year: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSelect(vehicle);
  };

  return (
    <Card className="w-full max-w-md mx-auto animate-fade-in">
      <CardHeader>
        <CardTitle className="text-2xl font-light text-center">Vehicle Information</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="plate">License Plate</Label>
            <Input
              id="plate"
              value={vehicle.plate}
              onChange={(e) => setVehicle({ ...vehicle, plate: e.target.value })}
              className="transition-all duration-200 focus:ring-primary"
              placeholder="Enter license plate"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="model">Model</Label>
            <Input
              id="model"
              value={vehicle.model}
              onChange={(e) => setVehicle({ ...vehicle, model: e.target.value })}
              className="transition-all duration-200 focus:ring-primary"
              placeholder="Enter vehicle model"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="year">Year</Label>
            <Input
              id="year"
              value={vehicle.year}
              onChange={(e) => setVehicle({ ...vehicle, year: e.target.value })}
              className="transition-all duration-200 focus:ring-primary"
              placeholder="Enter vehicle year"
              required
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 transition-all duration-200"
          >
            Start Checklist
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

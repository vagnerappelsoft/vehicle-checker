
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

interface ChecklistItem {
  id: string;
  category: string;
  label: string;
  checked: boolean;
}

const defaultItems: ChecklistItem[] = [
  { id: '1', category: 'Exterior', label: 'Headlights', checked: false },
  { id: '2', category: 'Exterior', label: 'Taillights', checked: false },
  { id: '3', category: 'Exterior', label: 'Tire pressure', checked: false },
  { id: '4', category: 'Interior', label: 'Seat belts', checked: false },
  { id: '5', category: 'Interior', label: 'Dashboard lights', checked: false },
  { id: '6', category: 'Mechanical', label: 'Oil level', checked: false },
  { id: '7', category: 'Mechanical', label: 'Brake fluid', checked: false },
  { id: '8', category: 'Mechanical', label: 'Engine sound', checked: false },
];

interface VehicleChecklistProps {
  vehicleInfo: {
    plate: string;
    model: string;
    year: string;
  };
}

export const VehicleChecklist = ({ vehicleInfo }: VehicleChecklistProps) => {
  const [items, setItems] = useState(defaultItems);
  const { toast } = useToast();

  const progress = Math.round((items.filter(item => item.checked).length / items.length) * 100);

  const handleCheck = (id: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));

    if (progress + (100 / items.length) >= 100) {
      toast({
        title: "Checklist Complete!",
        description: "All items have been verified.",
      });
    }
  };

  const categories = Array.from(new Set(items.map(item => item.category)));

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 animate-fade-in p-4">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl font-light">
            {vehicleInfo.model} ({vehicleInfo.year})
          </CardTitle>
          <p className="text-sm text-muted-foreground">Plate: {vehicleInfo.plate}</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {categories.map(category => (
        <Card key={category} className="transition-all duration-200 hover:shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-medium">{category}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {items
                .filter(item => item.category === category)
                .map(item => (
                  <div key={item.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={item.id}
                      checked={item.checked}
                      onCheckedChange={() => handleCheck(item.id)}
                      className="transition-all duration-200"
                    />
                    <Label
                      htmlFor={item.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {item.label}
                    </Label>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

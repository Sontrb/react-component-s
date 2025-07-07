import { Button } from "@/components/ui/button";

interface ServiceTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const services = [
  "Photo Editing",
  "Virtual Staging", 
  "Real Estate Video Editing",
  "Day To Dusk",
  "Item Removal",
  "Panorama Stitching",
  "Portrait Retouching",
  "Floor Plan"
];

export const ServiceTabs = ({ activeTab, onTabChange }: ServiceTabsProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-12">
      {services.map((service) => (
        <Button
          key={service}
          variant={activeTab === service ? "tab-active" : "tab"}
          size="sm"
          onClick={() => onTabChange(service)}
          className="px-4 py-2"
        >
          {service}
        </Button>
      ))}
    </div>
  );
};
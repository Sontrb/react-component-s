import { useState } from "react";
import { NewDayHero } from "@/components/NewDayHero";
import { ServiceTabs } from "@/components/ServiceTabs";
import { ComparisonSection } from "@/components/ComparisonSection";
import beforeBrightness from "@/assets/before-brightness.jpg";
import afterBrightness from "@/assets/after-brightness.jpg";
import beforeColor from "@/assets/before-color.jpg";
import afterColor from "@/assets/after-color.jpg";

const Index = () => {
  const [activeTab, setActiveTab] = useState("Photo Editing");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-warm-gray">
      <div className="container mx-auto px-4 py-16">
        <NewDayHero />
        
        <ServiceTabs 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
        
        <div className="space-y-16">
          <ComparisonSection
            title="Brightness & Contrast Adjustment"
            beforeImage={beforeBrightness}
            afterImage={afterBrightness}
            beforeAlt="Living room before brightness adjustment"
            afterAlt="Living room after brightness adjustment"
          />
          
          <ComparisonSection
            title="Color Correction"
            beforeImage={beforeColor}
            afterImage={afterColor}
            beforeAlt="Kitchen before color correction"
            afterAlt="Kitchen after color correction"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;

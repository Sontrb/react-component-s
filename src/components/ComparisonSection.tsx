interface ComparisonSectionProps {
  title: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

export const ComparisonSection = ({ 
  title, 
  beforeImage, 
  afterImage, 
  beforeAlt, 
  afterAlt 
}: ComparisonSectionProps) => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
        {title}
      </h3>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="relative group">
          <div className="absolute -top-3 left-4 bg-muted text-muted-foreground px-3 py-1 rounded-md text-sm font-medium z-10">
            Before
          </div>
          <div className="overflow-hidden rounded-lg shadow-elegant group-hover:shadow-comparison transition-all duration-500">
            <img 
              src={beforeImage} 
              alt={beforeAlt}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
        
        <div className="relative group">
          <div className="absolute -top-3 left-4 bg-gold text-gold-foreground px-3 py-1 rounded-md text-sm font-medium z-10">
            After
          </div>
          <div className="overflow-hidden rounded-lg shadow-elegant group-hover:shadow-comparison transition-all duration-500">
            <img 
              src={afterImage} 
              alt={afterAlt}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
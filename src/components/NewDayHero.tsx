import { Button } from "@/components/ui/button";

export const NewDayHero = () => {
  return (
    <div className="text-center max-w-4xl mx-auto mb-16">
      <div className="mb-8">
        <span className="text-gold text-xl font-bold">NewDay</span>
        <span className="text-foreground text-lg ml-2">
          is a real estate photo editing team based in Vietnam. We offer photographers a comprehensive suite of services, including{" "}
        </span>
        <span className="text-gold font-semibold">Image Enhancement</span>
        <span className="text-foreground text-lg">, day-to-dusk conversions, </span>
        <span className="text-gold font-semibold">Twilight edits</span>
        <span className="text-foreground text-lg">, </span>
        <span className="text-gold font-semibold">Virtual Staging</span>
        <span className="text-foreground text-lg">, and </span>
        <span className="text-gold font-semibold">Floor Plans</span>
        <span className="text-foreground text-lg">
          . Our goal is to help photographers save time and grow their businesses by providing High-Quality Photo and Video Editing Services and professional services.
        </span>
      </div>
      
      <div className="mb-6">
        <p className="text-foreground text-lg mb-2">
          You have an order and don't have time to edit everything by yourself, we are always ready to help.
        </p>
        <Button variant="gold" size="lg" className="text-lg px-8 py-3">
          Place Order
        </Button>
      </div>
      
      <p className="text-foreground text-lg">
        Our samples are available in the Outstanding Service. We welcome your feedback and encourage you to contact us today for a free trial.
      </p>
    </div>
  );
};
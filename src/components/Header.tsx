import logo from "@/assets/logo-colo-calor.png";

export const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4 py-4 flex justify-center">
        <img 
          src={logo} 
          alt="Método Colo & Calor - 8 passos para uma amamentação de sucesso" 
          className="h-12 md:h-16 w-auto"
        />
      </div>
    </header>
  );
};

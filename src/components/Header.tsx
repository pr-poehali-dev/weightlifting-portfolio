import React from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-orange-500/20">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            <span className="text-orange-500">Тяжелая</span>Атлетика
          </div>

          <div className="hidden md:flex space-x-8">
            {[
              { id: "about", label: "Обо мне" },
              { id: "sport", label: "Тяжелая атлетика" },
              { id: "training", label: "Тренировки" },
              { id: "results", label: "Результаты" },
              { id: "contact", label: "Связь" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-orange-500 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button className="md:hidden text-white">
            <Icon name="Menu" size={24} />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

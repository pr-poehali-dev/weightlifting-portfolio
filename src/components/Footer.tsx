import React from "react";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-3xl font-bold mb-4">
              <span className="text-orange-500">Тяжелая</span>Атлетика
            </div>
            <p className="text-gray-400">
              Профессиональный спорт • Тренировки • Достижения
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="#"
              className="bg-slate-800 p-3 rounded-lg hover:bg-orange-500 transition-colors"
            >
              <Icon name="Instagram" size={24} />
            </a>
            <a
              href="#"
              className="bg-slate-800 p-3 rounded-lg hover:bg-orange-500 transition-colors"
            >
              <Icon name="MessageCircle" size={24} />
            </a>
            <a
              href="#"
              className="bg-slate-800 p-3 rounded-lg hover:bg-orange-500 transition-colors"
            >
              <Icon name="Mail" size={24} />
            </a>
            <a
              href="#"
              className="bg-slate-800 p-3 rounded-lg hover:bg-orange-500 transition-colors"
            >
              <Icon name="Phone" size={24} />
            </a>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Александр Иванов. Все права защищены.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Мастер спорта международного класса по тяжелой атлетике
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

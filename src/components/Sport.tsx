import React from "react";
import Icon from "@/components/ui/icon";

const Sport = () => {
  return (
    <section id="sport" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Тяжелая <span className="text-orange-500">атлетика</span>
            </h2>
            <p className="text-xl text-gray-600">
              Олимпийский вид спорта, требующий силы, техники и координации
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={32} className="text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Рывок</h3>
              </div>
              <p className="text-gray-600 text-center mb-6">
                Подъем штанги с пола над головой одним непрерывным движением.
                Требует взрывной силы, гибкости и точной техники.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon
                    name="CheckCircle"
                    size={16}
                    className="text-orange-500"
                  />
                  <span className="text-sm text-gray-600">
                    Взрывная сила ног
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    name="CheckCircle"
                    size={16}
                    className="text-orange-500"
                  />
                  <span className="text-sm text-gray-600">
                    Гибкость и координация
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    name="CheckCircle"
                    size={16}
                    className="text-orange-500"
                  />
                  <span className="text-sm text-gray-600">Техника подседа</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name="TrendingUp"
                    size={32}
                    className="text-orange-500"
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Толчок</h3>
              </div>
              <p className="text-gray-600 text-center mb-6">
                Двухфазное движение: подъем на грудь и толчок от груди.
                Демонстрирует силу, стабильность и техническое мастерство.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon
                    name="CheckCircle"
                    size={16}
                    className="text-orange-500"
                  />
                  <span className="text-sm text-gray-600">Подъем на грудь</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    name="CheckCircle"
                    size={16}
                    className="text-orange-500"
                  />
                  <span className="text-sm text-gray-600">
                    Фиксация на груди
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    name="CheckCircle"
                    size={16}
                    className="text-orange-500"
                  />
                  <span className="text-sm text-gray-600">
                    Толчок над головой
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-2xl text-white">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Icon
                  name="Globe"
                  size={48}
                  className="text-orange-500 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Олимпийский спорт</h3>
                <p className="text-gray-300">
                  Входит в программу Олимпийских игр с 1896 года
                </p>
              </div>
              <div>
                <Icon
                  name="Users"
                  size={48}
                  className="text-orange-500 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2">187 стран</h3>
                <p className="text-gray-300">Количество стран-членов IWF</p>
              </div>
              <div>
                <Icon
                  name="Award"
                  size={48}
                  className="text-orange-500 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2">10 категорий</h3>
                <p className="text-gray-300">
                  Весовых категорий у мужчин и женщин
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sport;

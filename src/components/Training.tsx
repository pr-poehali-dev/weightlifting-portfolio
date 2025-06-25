import React from "react";
import Icon from "@/components/ui/icon";

const Training = () => {
  return (
    <section id="training" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              <span className="text-orange-500">Тренировки</span>
            </h2>
            <p className="text-xl text-gray-600">
              Тренировочный процесс и команда профессионалов
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Тренировочная база
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Icon name="MapPin" size={24} className="text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">
                      СДЮШОР №5
                    </h4>
                    <p className="text-gray-600">
                      г. Москва, ул. Спортивная, 15
                    </p>
                    <p className="text-gray-600">
                      Специализированный зал тяжелой атлетики
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Icon name="Clock" size={24} className="text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">
                      График тренировок
                    </h4>
                    <p className="text-gray-600">
                      Пн, Ср, Пт: 10:00 - 12:00 (техника)
                    </p>
                    <p className="text-gray-600">
                      Вт, Чт, Сб: 16:00 - 18:00 (сила)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Icon
                      name="Dumbbell"
                      size={24}
                      className="text-orange-500"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">
                      Оборудование
                    </h4>
                    <p className="text-gray-600">Олимпийские грифы Eleiko</p>
                    <p className="text-gray-600">
                      Помост соревновательного стандарта
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Тренировочный зал"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                  alt="Тренер"
                  className="rounded-xl shadow-lg w-full max-w-md mx-auto"
                />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                  Мой тренер
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900">
                      Петров Сергей Михайлович
                    </h4>
                    <p className="text-orange-500 font-medium">
                      Заслуженный тренер России
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Icon
                        name="Award"
                        size={16}
                        className="text-orange-500"
                      />
                      <span className="text-gray-600">
                        25+ лет тренерского стажа
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon
                        name="Trophy"
                        size={16}
                        className="text-orange-500"
                      />
                      <span className="text-gray-600">
                        Подготовил 15 мастеров спорта
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon
                        name="Target"
                        size={16}
                        className="text-orange-500"
                      />
                      <span className="text-gray-600">
                        Специалист по технической подготовке
                      </span>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                    <p className="text-gray-700 italic">
                      "Работаем над каждым движением до совершенства. В тяжелой
                      атлетике нет мелочей — каждый миллиметр имеет значение."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;

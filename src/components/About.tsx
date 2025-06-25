import React from "react";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Обо <span className="text-orange-500">мне</span>
            </h2>
            <p className="text-xl text-gray-600">
              Познакомьтесь с моей спортивной историей
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Icon name="User" size={24} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Ваше имя
                    </h3>
                    <p className="text-gray-600">
                      Опишите свои достижения и статус в спорте
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Icon
                      name="Calendar"
                      size={24}
                      className="text-orange-500"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Ваш опыт в спорте
                    </h3>
                    <p className="text-gray-600">
                      Расскажите, когда начали заниматься
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Icon name="Target" size={24} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Ваша специализация
                    </h3>
                    <p className="text-gray-600">
                      Укажите вашу весовую категорию и упражнения
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    "Здесь вы можете рассказать свою историю в спорте,
                    поделиться философией тренировок и мотивацией. Что вас
                    вдохновляет? Какие цели вы ставите перед собой?"
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Портрет атлета"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-4 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">МСМК</div>
                    <div className="text-sm">Мастер спорта</div>
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

export default About;

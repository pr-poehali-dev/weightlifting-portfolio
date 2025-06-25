import React from "react";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              <span className="text-orange-500">Связь</span>
            </h2>
            <p className="text-xl text-gray-600">
              Свяжитесь со мной для сотрудничества или консультаций
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-4 rounded-lg">
                  <Icon name="Phone" size={24} className="text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Телефон
                  </h3>
                  <p className="text-gray-600">+7 (999) 123-45-67</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Доступен с 9:00 до 21:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-4 rounded-lg">
                  <Icon name="Mail" size={24} className="text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Email
                  </h3>
                  <p className="text-gray-600">
                    alexandr.weightlifter@email.com
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Отвечу в течение 24 часов
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-4 rounded-lg">
                  <Icon
                    name="MessageCircle"
                    size={24}
                    className="text-orange-500"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Telegram
                  </h3>
                  <p className="text-gray-600">@weightlifter_alex</p>
                  <p className="text-sm text-gray-500 mt-1">Быстрая связь</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-4 rounded-lg">
                  <Icon
                    name="Instagram"
                    size={24}
                    className="text-orange-500"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Instagram
                  </h3>
                  <p className="text-gray-600">@alex_weightlifting</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Тренировки и соревнования
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Услуги</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-orange-500"
                  />
                  <span className="text-gray-700">Персональные тренировки</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-orange-500"
                  />
                  <span className="text-gray-700">Консультации по технике</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-orange-500"
                  />
                  <span className="text-gray-700">Составление программ</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-orange-500"
                  />
                  <span className="text-gray-700">
                    Подготовка к соревнованиям
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-orange-500"
                  />
                  <span className="text-gray-700">
                    Мастер-классы и семинары
                  </span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-orange-500 text-white rounded-lg">
                <h4 className="font-semibold mb-2">
                  Первая консультация бесплатно!
                </h4>
                <p className="text-sm text-orange-100">
                  Обсудим ваши цели и составим план тренировок
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

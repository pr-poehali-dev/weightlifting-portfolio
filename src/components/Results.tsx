import React from "react";
import Icon from "@/components/ui/icon";

const Results = () => {
  const achievements = [
    {
      year: "2024",
      competition: "Чемпионат России",
      place: "2 место",
      snatch: "150 кг",
      cleanJerk: "185 кг",
      total: "335 кг",
    },
    {
      year: "2023",
      competition: "Кубок Европы",
      place: "1 место",
      snatch: "148 кг",
      cleanJerk: "182 кг",
      total: "330 кг",
    },
    {
      year: "2023",
      competition: "Чемпионат России",
      place: "1 место",
      snatch: "145 кг",
      cleanJerk: "180 кг",
      total: "325 кг",
    },
    {
      year: "2022",
      competition: "Первенство мира (молодежь)",
      place: "3 место",
      snatch: "140 кг",
      cleanJerk: "175 кг",
      total: "315 кг",
    },
    {
      year: "2022",
      competition: "Чемпионат России",
      place: "2 место",
      snatch: "138 кг",
      cleanJerk: "172 кг",
      total: "310 кг",
    },
  ];

  const personalBests = [
    { exercise: "Рывок", weight: "150 кг", date: "15.04.2024" },
    { exercise: "Толчок", weight: "185 кг", date: "15.04.2024" },
    { exercise: "Сумма двоеборья", weight: "335 кг", date: "15.04.2024" },
  ];

  return (
    <section id="results" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              <span className="text-orange-500">Результаты</span>
            </h2>
            <p className="text-xl text-gray-600">
              Спортивные достижения и личные рекорды
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {personalBests.map((record, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg text-center"
              >
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Trophy" size={32} className="text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {record.exercise}
                </h3>
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  {record.weight}
                </div>
                <p className="text-gray-600 text-sm">{record.date}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-slate-900 p-6">
              <h3 className="text-2xl font-bold text-white text-center">
                Таблица достижений
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">
                      Год
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">
                      Соревнование
                    </th>
                    <th className="px-4 py-3 text-center font-semibold text-slate-900">
                      Место
                    </th>
                    <th className="px-4 py-3 text-center font-semibold text-slate-900">
                      Рывок
                    </th>
                    <th className="px-4 py-3 text-center font-semibold text-slate-900">
                      Толчок
                    </th>
                    <th className="px-4 py-3 text-center font-semibold text-slate-900">
                      Сумма
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {achievements.map((achievement, index) => (
                    <tr
                      key={index}
                      className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-4 py-4 font-medium text-slate-900">
                        {achievement.year}
                      </td>
                      <td className="px-4 py-4 text-slate-700">
                        {achievement.competition}
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            achievement.place === "1 место"
                              ? "bg-yellow-100 text-yellow-800"
                              : achievement.place === "2 место"
                                ? "bg-slate-100 text-slate-800"
                                : "bg-orange-100 text-orange-800"
                          }`}
                        >
                          {achievement.place}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center font-semibold text-slate-900">
                        {achievement.snatch}
                      </td>
                      <td className="px-4 py-4 text-center font-semibold text-slate-900">
                        {achievement.cleanJerk}
                      </td>
                      <td className="px-4 py-4 text-center font-bold text-orange-500">
                        {achievement.total}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 rounded-2xl text-white">
              <Icon name="Target" size={48} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Цель на 2024 год</h3>
              <p className="text-lg">
                Квалификация на Олимпийские игры в Париже
              </p>
              <p className="text-orange-100 mt-2">
                Необходимый результат: 340+ кг в сумме двоеборья
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;

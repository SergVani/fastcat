// ===== SITE DATA =====

const SITE_DATA = {
  camps: [
    {
      id: 1, season: "summer", icon: "☀️",
      name: "Летние спортивные каникулы",
      dates: "30 июля — 7 августа",
      duration: "9 дней",
      spots: 20, spotsLeft: 7
    },
    {
      id: 2, season: "summer", icon: "☀️",
      name: "Летние спортивные каникулы",
      dates: "15 августа — 22 августа",
      duration: "8 дней",
      spots: 20, spotsLeft: 12
    },
    {
      id: 3, season: "autumn", icon: "🍂",
      name: "Осенние каникулы",
      dates: "7 — 14 ноября",
      duration: "8 дней",
      spots: 20, spotsLeft: 15
    },
    {
      id: 4, season: "winter", icon: "❄️",
      name: "Зимние каникулы",
      dates: "1 декабря — 10 декабря",
      duration: "10 дней",
      spots: 20, spotsLeft: 18
    },
    {
      id: 5, season: "winter", icon: "🎄",
      name: "Новогодние каникулы",
      dates: "3 января — 13 января",
      duration: "11 дней",
      spots: 20, spotsLeft: 4
    },
    {
      id: 6, season: "winter", icon: "⛷️",
      name: "Зимние каникулы",
      dates: "1 февраля — 10 февраля",
      duration: "10 дней",
      spots: 20, spotsLeft: 16
    }
  ],

  locations: [
    {
      id: 1,
      name: "Россия",
      subtitle: "Теплеево Резорт",
      region: "Московская область",
      description: "Загородный комплекс в 44 га соснового леса с озёрами и рекой. Бассейны, спа, своя пивоварня и масса активностей.",
      emoji: "🌲",
      color: "#1B4332",
      gradient: "linear-gradient(135deg, #1B4332, #2D6A4F)",
      anchor: "russia-teplevo",
      cover: "images/teplezeevo_otel/teplezeevo_otel_1.png"
    },
    {
      id: 2,
      name: "Россия",
      subtitle: "Moscow Country Club 5★",
      region: "Московская область",
      description: "Пятизвёздочный комплекс в Нахабино со 120 га леса и первым в России профессиональным гольф-полем на 18 лунок.",
      emoji: "⛳",
      color: "#1B4332",
      gradient: "linear-gradient(135deg, #14532D, #16A34A)",
      anchor: "russia-mcc",
      cover: "images/Moscow_Country_Club/Moscow_Country_Club_1.jpg"
    },
    {
      id: 3,
      name: "Россия",
      subtitle: "Максима Парк Отель 3★",
      region: "Московская область",
      description: "Загородный комплекс с конным клубом Maxima Stables, 25-метровым бассейном, спа и фермерской кухней.",
      emoji: "🐴",
      color: "#1B4332",
      gradient: "linear-gradient(135deg, #166534, #4D7C0F)",
      anchor: "russia-maxima",
      cover: "images/maksima_park_otel/maksima_park_otel_1.jpg"
    },
    {
      id: 4,
      name: "Кыргызстан",
      subtitle: "Озеро Иссык-Куль",
      region: "Центральная Азия",
      description: "Крупнейшее высокогорное озеро Тянь-Шаня на высоте 1600 м — голубая прозрачная вода и биосферный заповедник ЮНЕСКО.",
      emoji: "🏔️",
      color: "#0369A1",
      gradient: "linear-gradient(135deg, #0369A1, #0891B2)",
      anchor: "kyrgyzstan",
      cover: "images/issykkul/fastcat_issykkul_1.jpg"
    },
    {
      id: 5,
      name: "Турция",
      subtitle: "Крейсер по Эгейскому морю",
      region: "Средиземноморье",
      description: "Незабываемый яхтенный круиз по бирюзовым водам Эгейского моря с заходом в живописные бухты и античные города.",
      emoji: "⛵",
      color: "#0E7490",
      gradient: "linear-gradient(135deg, #0E7490, #06B6D4)",
      anchor: "turkey"
    },
    {
      id: 6,
      name: "Турция",
      subtitle: "Горнолыжный курорт Эрджиес",
      region: "Каппадокия",
      description: "Катание на склонах вулкана Эрджиес (3917 м): 112 км трасс, 19 подъёмников и Каппадокия в 70 км.",
      emoji: "⛷️",
      color: "#0E7490",
      gradient: "linear-gradient(135deg, #1E3A8A, #38BDF8)",
      anchor: "turkey-erciyes",
      cover: "images/turkiye/fastcat_urkiye_1.jpeg"
    },
    {
      id: 7,
      name: "Италия",
      subtitle: "Озеро Комо",
      region: "Северная Италия",
      description: "Аристократическая Ломбардия — легендарное озеро с виллами эпохи Возрождения, альпийскими пейзажами и изысканной кухней.",
      emoji: "🇮🇹",
      color: "#9D174D",
      gradient: "linear-gradient(135deg, #9D174D, #DB2777)",
      anchor: "italy",
      cover: "images/como/como_1.jpeg"
    },
    {
      id: 8,
      name: "Испания",
      subtitle: "Остров Тенерифе",
      region: "Канарские острова",
      description: "«Остров вечной весны» в Атлантике с вулканом Тейде (3718 м), чёрными и золотыми пляжами и тёплым климатом круглый год.",
      emoji: "🌋",
      color: "#B45309",
      gradient: "linear-gradient(135deg, #B45309, #F59E0B)",
      anchor: "tenerife",
      cover: "images/tenerife/tenerife_1.jpg"
    }
  ],

  schedule: [
    { time: "07:30", activity: "Подъём и утренняя зарядка", type: "fitness", icon: "🌅" },
    { time: "08:00", activity: "Завтрак (шведский стол)", type: "meal", icon: "🍳" },
    { time: "09:00", activity: "Утренняя тренировка — бег / лыжи / ОФП", type: "sport", icon: "🏃" },
    { time: "11:00", activity: "Восстановительный блок (растяжка, МФР)", type: "fitness", icon: "🧘" },
    { time: "12:00", activity: "Обед (шведский стол)", type: "meal", icon: "🥗" },
    { time: "13:30", activity: "Свободное время / Бассейн / СПА", type: "free", icon: "🏊" },
    { time: "15:00", activity: "Мастер-класс / Творческая активность", type: "creative", icon: "🎨" },
    { time: "16:30", activity: "Командные игры / Спортивные состязания", type: "game", icon: "⚽" },
    { time: "18:30", activity: "Ужин (шведский стол)", type: "meal", icon: "🍽️" },
    { time: "20:00", activity: "Вечерняя интеллектуальная программа", type: "evening", icon: "🧠" },
    { time: "22:00", activity: "Свободное время / Отбой", type: "free", icon: "🌙" }
  ],

  blog: [
    {
      id: 1,
      title: "Как подготовиться к первому спортивному лагерю",
      excerpt: "Советы для тех, кто впервые решил провести каникулы активно: что взять с собой, как настроиться и чего ожидать.",
      category: "Советы", date: "15 мая 2025", readTime: "5 мин", emoji: "🎒"
    },
    {
      id: 2,
      title: "Бег для начинающих: с нуля до первых 5 км",
      excerpt: "Наши тренеры делятся программой тренировок для тех, кто никогда раньше не бегал, но хочет начать здоровый образ жизни.",
      category: "Тренировки", date: "28 апреля 2025", readTime: "7 мин", emoji: "🏃"
    },
    {
      id: 3,
      title: "Озеро Иссык-Куль: почему это место меняет людей",
      excerpt: "Репортаж с летнего кемпа в Кыргызстане: горы, чистый воздух и удивительная атмосфера единения с природой.",
      category: "Направления", date: "12 апреля 2025", readTime: "8 мин", emoji: "🏔️"
    },
    {
      id: 4,
      title: "5 причин выбрать активный отдых вместо пляжа",
      excerpt: "Почему спортивный лагерь — это не про усталость, а про перезарядку, новые знакомства и настоящее удовольствие.",
      category: "Отдых", date: "5 апреля 2025", readTime: "4 мин", emoji: "⚡"
    },
    {
      id: 5,
      title: "Лыжный сезон: как мы провели зимние каникулы",
      excerpt: "Фотоотчёт и истории участников зимнего кемпа: первые спуски, падения, победы и незабываемые вечера у камина.",
      category: "Истории", date: "20 февраля 2025", readTime: "6 мин", emoji: "⛷️"
    },
    {
      id: 6,
      title: "Командные игры: почему это важно для взрослых",
      excerpt: "Психолог клуба рассказывает, как совместные активности меняют отношения в группе и прокачивают уверенность в себе.",
      category: "Психология", date: "8 января 2025", readTime: "6 мин", emoji: "🤝"
    }
  ],

  promos: [
    {
      id: 1, discount: "−15%", title: "Раннее бронирование",
      desc: "При записи за 60 дней и более",
      until: "До 30 июня 2025",
      conditions: ["Действует на все направления", "Оплата 50% при записи", "Свободный выбор даты заезда", "Бесплатная отмена за 30 дней"]
    },
    {
      id: 2, discount: "−10%", title: "Приведи друга",
      desc: "Скидка при записи вдвоём",
      until: "Акция постоянная",
      conditions: ["Запись двух и более человек", "Скидка начисляется обоим", "Двухместное размещение", "Совместная программа тренировок"]
    },
    {
      id: 3, discount: "−20%", title: "Программа лояльности",
      desc: "Для постоянных участников",
      until: "Для 2-го и последующих кемпов",
      conditions: ["Накопительная система баллов", "Действует на все сезоны", "Дополнительный бонус в день рождения", "Приоритетное бронирование мест"]
    }
  ]
};

// ===== ADMIN DATA (localStorage) =====

function getAdminData(key, defaultVal) {
  try {
    const d = localStorage.getItem('fc_' + key);
    return d ? JSON.parse(d) : defaultVal;
  } catch { return defaultVal; }
}
function setAdminData(key, val) {
  localStorage.setItem('fc_' + key, JSON.stringify(val));
}

function initAdminData() {
  if (!localStorage.getItem('fc_programs')) {
    setAdminData('programs', SITE_DATA.camps.map(c => ({...c})));
  }
  if (!localStorage.getItem('fc_schedule')) {
    setAdminData('schedule', SITE_DATA.schedule.map((s,i) => ({...s, id: i+1})));
  }
  if (!localStorage.getItem('fc_registrations')) {
    setAdminData('registrations', [
      { id: 1, name: "Анна Соколова", phone: "+7 925 123 4567", email: "anna@mail.ru", camp: "Летние каникулы 30 июля", level: "Начальный", status: "confirmed", date: "2025-05-10" },
      { id: 2, name: "Михаил Петров", phone: "+7 916 987 6543", email: "m.petrov@gmail.com", camp: "Новогодние каникулы", level: "Средний", status: "pending", date: "2025-05-12" },
      { id: 3, name: "Екатерина Иванова", phone: "+7 977 555 0011", email: "kate_iv@yandex.ru", camp: "Осенние каникулы", level: "Про", status: "confirmed", date: "2025-05-14" }
    ]);
  }
  if (!localStorage.getItem('fc_blog')) {
    setAdminData('blog', SITE_DATA.blog.map(b => ({...b, published: true})));
  }
}

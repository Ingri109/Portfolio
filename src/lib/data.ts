export type ProjectLink = { github?: string; live?: string; };

export const hrData = {
  hero: {
    greeting: "👋 Hi, I'm Orest Muzyka",
    name: "Orest Muzyka",
    role: "Full-Stack Developer",
    specialization: "Specializing in React / Next.js & C# .NET",
    location: "BASED IN POLAND | OPEN TO RELOCATION",
  },
  experience: [
    {
      id: "udtech",
      position: "Full Stack Developer | UDTECH",
      dates: "05.2025 - 05.2026",
      description:
        "Built and maintained full-stack web features using React, Next.js, Node.js and C#, delivering stable, responsive user interfaces. Optimized image loading and AI workflows, improving page load speed by 20% and doubling AI response performance (100% faster). Redesigned search logic to expand the website's target audience reach by around 40%.",
      metrics: ["20%", "100% faster", "40%"],
    },
  ],
  projects: [
    {
      id: "your-love",
      title: "Your Love",
      type: "Full-Stack Diploma Project",
      description:
        "Додаток розроблений для покращення спілкування та зміцнення стосунків між партнерами, особливо для тих, хто перебуває на відстані або відчуває нестачу спільного часу. Проєкт вирішує проблему непорозумінь шляхом створення приватного цифрового простору для пари.",
      features: [
        "Інтерактивність: відстеження настрою, самопочуття партнера та спільний \"Wish list\".",
        "Реальний час: WebSockets для безперебійної синхронізації в реальному часі.",
        "Безпека: вхід через Google та Discord OAuth.",
      ],
      images: [
        "/projects/your-love/YourLove_IMG_1.jpg",
        "/projects/your-love/YourLove_IMG_2.jpg",
        "/projects/your-love/YourLove_IMG_3.jpg",
        "/projects/your-love/YourLove_IMG_4.jpg",
      ],
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Nest.js",
        "GraphQL",
        "PostgreSQL",
        "WebSockets",
      ],
    },
    {
      id: "movie-ticket-booking",
      title: "Movie Ticket Booking Platform",
      type: "Commercial / Portfolio Project",
      links: {
        live: "https://movie-ticket-tau.vercel.app/",
        github: "https://github.com/Ingri109/MovieTicket"
      },
      description:
        "Сучасна альтернатива застарілим платформам кінотеатрів з нелогічним UX. Головна мета: зробити шлях користувача від пошуку фільму до отримання квитка максимально швидким, приємним та інтуїтивно зрозумілим.",
      features: [
        "Продуманий UX/UI: динамічний роутинг та миттєва навігація без перезавантаження.",
        "Надійність: клієнтська та серверна валідація форм.",
        "Високопродуктивна архітектура: мікросервіси на C#, RabbitMQ та Redis для роботи під високими навантаженнями.",
      ],
      images: [
        "/projects/movie-ticket/MovieTicket_IMG_1.jpg",
        "/projects/movie-ticket/MovieTicket_IMG_2.jpg",
        "/projects/movie-ticket/MovieTicket_IMG_3.jpg",
        "/projects/movie-ticket/MovieTicket_IMG_4.jpg",
      ],
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "C#",
        "Microservices",
        "RabbitMQ",
        "Redis",
        "Supabase",
      ],
    },
    {
      id: "game-hub",
      title: "Game HUB",
      type: "Full-Stack Application (Released V1.0)",
      links: {
        live: "https://game-hub-beta-nine-90.vercel.app/",
        github: "https://github.com/Ingri109/GameHUB"
      },
      description:
        "Game HUB — це соціальна платформа для геймерів, створена для того, щоб зробити спільний ігровий процес ще драйвовішим та веселішим. Проєкт вирішує проблему синхронізації часу між гравцями та додає елемент фанової гейміфікації у звичайні ігрові сесії.",
      features: [
        "Синхронізація розкладу: Інтерактивний календар для перегляду доступності інших гравців.",
        "Гейміфікація лобі: Видача унікальних нагород після гри (\"Найкращий снайпер\", \"MVP\", \"Жартівник\").",
        "Екосистема Discord: Авторизація через Discord. Майбутня інтеграція бота для автоматичного створення сесій та нагадувань.",
      ],
      images: [
        "/projects/game-hub/GameHUB_IMG_1.jpg",
        "/projects/game-hub/GameHUB_IMG_2.jpg",
        "/projects/game-hub/GameHUB_IMG_3.jpg",
        "/projects/game-hub/GameHUB_IMG_4.jpg",
      ],
      stack: [
        "Next.js",
        "C#",
        "Microservices",
        "WebSockets",
        "Redis",
        "Supabase",
        "Discord API",
      ],
    },
  ],
  education: {
    university: "University College Of Enterprise And Administration (WSPA), Lublin",
    degree: "B.Eng. in Computer Science",
    dates: "Oct 2022 - Aug 2026",
    gpa: "4.71",
  },
  languages: [
    { name: "Ukrainian", level: "Native", icon: "🇺🇦" },
    { name: "English", level: "Upper-Int. (B2)", icon: "🇬🇧" },
    { name: "Polish", level: "Upper-Int. (B2)", icon: "🇵🇱" },
  ],
  contact: {
    linkedin: "https://www.linkedin.com/in/orest-muzyka-fullstackdev",
    github: "https://github.com/Ingri109",
    email: "orest.muzyka.it@gmail.com",
    phone: "+48881641600",
    cta: "Let's build something amazing together",
  },
};

export const businessData = {
  hero: {
    title: "Веб-рішення, які працюють на ваш бізнес",
    subtitle: "Створюю швидкі лендинги, інтернет-магазини та кастомні CRM-системи, які автоматизують продажі та генерують заявки 24/7.",
    cta: {
      text: "Обговорити проєкт",
      link: "https://instagram.com/om.webdew",
    }
  },
  services: [
    {
      id: "landing",
      title: "Лендинг (Односторінковий сайт)",
      forWho: "Сфера послуг, експерти, локальний бізнес. Ваш онлайн-менеджер 24/7.",
      features: "Бездоганна мобільна версія (90% трафіку), миттєве завантаження, логічна структура, заявки в Telegram/Email.",
      price: "від $100"
    },
    {
      id: "ecommerce",
      title: "Інтернет-магазин (E-commerce)",
      forWho: "Продаж товарів, інфопродуктів та онлайн-курсів.",
      features: "Зручний каталог із фільтрами, оформлення без зайвих кроків, підключення платіжних систем (LiqPay, Stripe), зручна адмін-панель.",
      price: "від $300"
    },
    {
      id: "custom",
      title: "Кастомна розробка (Складні вебсервіси)",
      forWho: "Нестандартні бізнес-моделі та автоматизація процесів.",
      features: "Системи бронювання, особисті кабінети та CRM, інтеграції з API, висока безпека даних.",
      price: "від $500"
    }
  ],
  workflow: [
    {
      step: 1,
      title: "Брифінг та Оцінка",
      description: "Короткий зідзвон/переписка. Вивчаю задачу, пропоную рішення, фіксую терміни і вартість."
    },
    {
      step: 2,
      title: "Прототип та Дизайн",
      description: "Створюю структуру та візуал. Ви бачите, як усе виглядатиме до написання коду."
    },
    {
      step: 3,
      title: "Розробка та Тестування",
      description: "Пишу чистий код, налаштовую сервіси (оплати, CRM), тестую на всіх пристроях."
    },
    {
      step: 4,
      title: "Запуск та Підтримка",
      description: "Переношу сайт на ваш домен, навчаю користуватися, надаю підтримку."
    }
  ],
  caseStudies: [
    {
      id: "booking",
      title: "Платформа онлайн-бронювання та продажу MovieTicket",
      task: "Створити сервіс для швидкого пошуку подій та купівлі квитків без зависань.",
      links: {
        live: "https://movie-ticket-tau.vercel.app/"
      },
      solution: "Інтуїтивний інтерфейс, оформлення за 3 кроки, система витримує високі навантаження.",
      tags: ["UI/UX Дизайн", "Онлайн-оплати", "Висока швидкість", "Автоматизація"],
      images: [
        "/projects/movie-ticket/MovieTicket_IMG_1.jpg",
        "/projects/movie-ticket/MovieTicket_IMG_2.jpg",
        "/projects/movie-ticket/MovieTicket_IMG_3.jpg",
        "/projects/movie-ticket/MovieTicket_IMG_4.jpg",
      ]
    },
    {
      id: "community",
      title: "Інтерактивна платформа для ком'юніті GameHUB",
      task: "Інструмент для планування спільних подій та утримання уваги користувачів.",
      links: {
        live: "https://game-hub-beta-nine-90.vercel.app/"
      },
      solution: "Інтерактивний календар, система гейміфікації (нагороди), швидка реєстрація через сторонні сервіси.",
      tags: ["Особисті кабінети", "Гейміфікація", "Інтеграція API", "Бази даних"],
      images: [
        "/projects/game-hub/GameHUB_IMG_1.jpg",
        "/projects/game-hub/GameHUB_IMG_2.jpg",
        "/projects/game-hub/GameHUB_IMG_3.jpg",
        "/projects/game-hub/GameHUB_IMG_4.jpg",
      ]
    }
  ],
  freeAudit: {
    title: "Готові масштабувати ваш бізнес?",
    description: "Замовте безкоштовний аудит вашого поточного сайту або обговорiть розробку нового проєкту. Знайдемо слабкі місця та розробимо план, як перетворити їх на реальний прибуток.",
    cta: {
      text: "Отримати аудит сайту",
      link: "https://instagram.com/om.webdew"
    }
  }
};

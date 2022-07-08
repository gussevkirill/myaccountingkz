export const reviews = [
    {
        id: 1,
        text: ' ТОО «КМ КАZ СВОТР» выражает благодарность ИП My.Accounting.KZ.за предоставление высококачественных услуг по бухгалтерскому учету, отчетности в контролирующие органы, правовые консультации, кадровый учет и помощь в оптимизации налогов.Особая признательность за профессиональные навыки директора Сапрыгиной Любови Андреевны и надежное сотрудничество. Основываясь на позитивном опыте взаимодействия, рекомендуем аутсорсинговую компанию ИП My.Accounting.KZ.как надежного и ответственного партнера.',
        author: 'Директор ТОО «КМ КАХ Касымов М.И'
    },
    {
        id: 2,
        text: `Настоящим письмом Индивидуальный Предпринематель Касымов МИ. выражает ‘благодарность ИП My.Accounting.KZ.За данный период сотрудничества нам были
        оказаны услуги в сфере бухгалтерского учета, налогообложения, консультирование по юридическим и кадровым вопросам и многое другое.Следует отметить, что.
        ‘уровень бухгалтерских и консалтинговых услуг, которые оказывали и оказывают нам данная компании, позволяет говорить о высокой квалификации,
        профессионализме и опыте нашего партнера. Нам очень приятно работать с людьми, которые переживают за наше дело и готовы помочь в любую минуту.Хотим поблагодарить Сапрыгину Любовь 'Андреевну за добросовестность, честность, оперативность и профессионализм. Желаем вам творческих успехов и надеемся на плодотворное сотрудничество.`,
        author: 'Директор Манарбек Искакович К.'
    },
    {
        id: 3,
        text: `Наша фирма ТОО «ЭкоСервис Бурабай» рада рекомендовать Сапрыгину Любовь
        Андресвну как спициалиста своего дела. По вопросу ведения налогового учета
        нашего ТОО и аутсорсингу бухгалтерского учета вся работа выполняется
        качественно и своевременно. На протяжении пяти лет мы пользуемся комплексом
        услуг и результатом нашего сотрудничества является полностью отлаженный
        процесс ведения бухгалтерского и налогового учета, учитывая все особенности и
        специфику деятельности нашей компании.
        Особенно благодарим Сапрыгину Любовь Андреевну за высокий
        профессионализм, ответственность, оперативность и безупречную точность в
        работе.`,
        author: 'Директор TOO "ЭкоСервис Бурабай" С.Касенова'
    },
    {
        id: 4,
        text: `Уважаемая Любовь Андреевна, разрешите от лица Ассоциации
        «NewBioSource» выразить Вам благодарность за высокий уровень
        оказываемых вами услуг по бухгалтерскому сопровождению.
        Ваша консультационная поддержка и — своевременность
        выполняемых работ существенно помогают нам идти к поставленным
        целям.
        Надеемся на дальнейшее сотрудничество с Вами и такой же высокий
        уровень вашего профессионализма.`,
        author: ' Президент ОЮЛ АПБРО "NewBioSource" Оразбеков Е.Т.'
    },
]


export const phoneMask = (phone) => phone
    .replace(/\D/g, '')
    .replace(/^(\d)/, '+$1')
    .replace(/^(\+\d{1})(\d{1,3})/, '$1 $2')
    .replace(/(\d{3})(\d{1,3})/, '$1 $2')
    .replace(/(\d{3})(\d{1,4})/, '$1 $2')
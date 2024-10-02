// src/data.js
export const projects = [
    {
        name: '"ИСОН" - система помощи принятия решений',
        className: 'highlight',
        details: [
            { text: 'патент №: <a href="https://new.fips.ru/registers-doc-view/fips_servlet?DB=EVM&DocNumber=2021662181&TypeFile=html" target="_blank" rel="noopener noreferrer">2021662181</a>', className: 'emph' },
            { text: 'выявление точек неучтенного потребления электроэнергии', className: 'emph' },
            { text: 'сокращение времени на принятие решений', className: 'emph' },
            { text: 'ансамбль ML алгоритмов / топология, как граф', className: 'emph' },
        ],
    },
    {
        name: '"Управление НИОКР" - ERP (управление бизнес-процессами)',
        className: 'highlight',
        details: [
            { text: 'многомодульная система для управления бизнес-процессами компании', className: 'emph' },
            { text: 'семантический поиск документов на основе ElasticSearch.', className: 'emph' },
        ],
    },
    {
        name: '"АСМД" - система мониторинга и диагностики трансформаторного оборудования',
        className: 'highlight',
        details: [
            { text: 'прогнозирование технического состояния оборудования', className: 'emph' },
            { text: 'пакетная обработка ETL', className: 'emph' },
        ],
    },
    {
        name: 'Системы бизнес-аналитики на базе Power BI и QlikView',
        className: 'highlight',
        details: [
            { text: 'создание информационных панелей', className: 'emph' },
            { text: 'создание сквозного конвейера обработки данных', className: 'emph' },
        ],
    },
];

export const courses = [
    {
        name: 'Coursera',
        className: 'highlight',
        details: [
            { text: 'Master of Applied Data Science', className: 'emph' },
            { text: 'Google Project Management', className: 'emph' },
            { text: 'Introduction to Data Analytics', className: 'emph' },
        ],
    },
    {
        name: 'Kaggle',
        className: 'highlight',
        details: [
            { text: 'Advanced SQL <a href={`${process.env.PUBLIC_URL}/AdvancedSQL.png`} target="_blank" rel="noopener noreferrer">(сертификат)</a>', className: 'emph' },
            { text: 'Data Cleaning <a href="/DataCleaning.png" target="_blank" rel="noopener noreferrer">(сертификат)</a>', className: 'emph' },
            { text: 'Python <a href="/Python.png" target="_blank" rel="noopener noreferrer">(сертификат)</a>', className: 'emph' },
        ],
    },
    {
        name: 'Школа DevOps, Санкт-Петербург',
        className: 'highlight',
        details: [
            { text: 'DevOps Старт <a href="/devOPS.png" target="_blank" rel="noopener noreferrer">(сертификат)</a>', className: 'emph' }
        ]
    },
    {
        name: 'Stepik',
        className: 'highlight',
        details: [
            { text: 'Поколение Python', className: 'emph' },
            { text: 'Интерактивный тренажер по SQL', className: 'emph' },
        ],
    },
    { name: 'KARPOV.COURSES. Симулятор аналитика данных', className: 'highlight' },
    {
        name: 'Sololearn',
        className: 'highlight',
        details: [
            { text: 'HTML <a href="/HTML.jpg" target="_blank" rel="noopener noreferrer">(сертификат)</a>', className: 'emph' }
        ]
    },
];

export const conferences = [
    {
        name: 'в качестве докладчика',
        className: 'highlight',
        details: [
            { text: 'CIGRE, INFORMATION SYSTEMS AND TELECOMUNICATION, 2022, Paris <a href="/template.pdf" target="_blank" rel="noopener noreferrer">(презентация)</a>', className: 'emph' },
            { text: 'Energynet.CØN 2021, online', className: 'emph' },
            { text: 'Energynet.CØN 2020, online', className: 'emph' },
            { text: 'Power BI meetup 2020, Санкт-Петербург', className: 'emph' },
            { text: 'УМНИК Энерджинет 2019, Москва <a href="/umnik.png" target="_blank" rel="noopener noreferrer">(сертификат)</a>', className: 'emph' },
            { text: '33rd IBIMA Conference: 10-11 April 2019, Granada, Spain', className: 'emph' },
            { text: 'Научная конференция "Промышленный менеджмент, экономика и экология - 2017", Санкт-Петербург', className: 'emph' },
        ],
    },
];

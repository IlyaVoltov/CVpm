// src/data.js

const createLink = (url, text) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`;

export const projects = [
    {
        name: '"ИСОН" - система помощи принятия решений',
        className: 'highlight',
        details: [
            { text: `патент №: ${createLink('https://new.fips.ru/registers-doc-view/fips_servlet?DB=EVM&DocNumber=2021662181&TypeFile=html', '2021662181')}`, className: 'emph' },
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
            { text: `${createLink(`${process.env.PUBLIC_URL}/DataVisualization.png`, 'Data Visualization')}`, className: 'emph' },
            { text: `${createLink(`${process.env.PUBLIC_URL}/AdvancedSQL.png`, 'Advanced SQL')}`, className: 'emph' },
            { text: `${createLink(`${process.env.PUBLIC_URL}/DataCleaning.png`, 'Data Cleaning')}`, className: 'emph' },
            { text: `${createLink(`${process.env.PUBLIC_URL}/Python.png`, 'Python')}`, className: 'emph' },
        ],
    },
    {
        name: 'Школа DevOps, Санкт-Петербург',
        className: 'highlight',
        details: [
            { text: `${createLink(`${process.env.PUBLIC_URL}/devOPS.png`, 'DevOps Старт')}`, className: 'emph' }
        ]
    },
    {
        name: 'Stepik',
        className: 'highlight',
        details: [
            { text: 'Профессия Middle&Senior Product Manager', className: 'emph' },
            { text: 'Поколение Python', className: 'emph' },
            { text: 'Интерактивный тренажер по SQL', className: 'emph' },
        ],
    },
    { name: 'KARPOV.COURSES. Симулятор аналитика данных', className: 'highlight' },
    {
        name: 'Sololearn',
        className: 'highlight',
        details: [
            { text: `${createLink(`${process.env.PUBLIC_URL}/HTML.jpg`, 'HTML')}`, className: 'emph' }
        ]
    },
];

export const conferences = [
    {
        name: 'в качестве докладчика',
        className: 'highlight',
        details: [
            { text: `${createLink(`${process.env.PUBLIC_URL}/template.pdf`, 'CIGRE, INFORMATION SYSTEMS AND TELECOMUNICATION, 2022, Paris')}`, className: 'emph' },
            { text: 'Energynet.CØN 2021, online', className: 'emph' },
            { text: 'Energynet.CØN 2020, online', className: 'emph' },
            { text: 'Power BI meetup 2020, Санкт-Петербург', className: 'emph' },
            { text: `${createLink(`${process.env.PUBLIC_URL}/umnik.png`, 'УМНИК Энерджинет 2019, Москва')}`, className: 'emph' },
            { text: '33rd IBIMA Conference: 10-11 April 2019, Granada, Spain', className: 'emph' },
            { text: 'Научная конференция "Промышленный менеджмент, экономика и экология - 2017", Санкт-Петербург', className: 'emph' },
        ],
    },
];

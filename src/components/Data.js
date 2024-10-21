import { useTranslation } from 'react-i18next';


const createLink = (url, text) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`;

export function Projects() {
    const { t } = useTranslation();

    return [
        {
            name: t('ProjectsModal.nameISON'),
            className: 'highlight',
            details: [
                { text: t('ProjectsModal.details.energyConsumption'), className: 'emph' },
                { text: t('ProjectsModal.details.decisionMaking'), className: 'emph' },
                { text: t('ProjectsModal.details.mlAlgorithms'), className: 'emph' },
            ],
        },
        {
            name: t('projects.project1.name'),
            className: 'highlight',
            details: [
                { text: t('projects.project1.details.detail1'), className: 'emph' },
                { text: t('projects.project1.details.detail2'), className: 'emph' },
            ],
        },
        {
            name: t('projects.project2.name'),
            className: 'highlight',
            details: [
                { text: t('projects.project2.details.detail1'), className: 'emph' },
                { text: t('projects.project2.details.detail2'), className: 'emph' },
            ],
        },
        {
            name: t('projects.project3.name'),
            className: 'highlight',
            details: [
                { text: t('projects.project3.details.detail1'), className: 'emph' },
                { text: t('projects.project3.details.detail2'), className: 'emph' },
            ],
        },
    ];
}

export function Courses() {
    const { t } = useTranslation();

    return [
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
            name: t('CoursesModal.name'),
            className: 'highlight',
            details: [
                { text: `${createLink(`${process.env.PUBLIC_URL}/devOPS.png`, 'DevOps Старт')}`, className: 'emph' }
            ]
        },
        {
            name: 'Stepik',
            className: 'highlight',
            details: [
                { text: `${createLink(`${process.env.PUBLIC_URL}/econom.pdf`, ' Introductory Econometrics: a Practical Approach')}`, className: 'emph' },
                { text: t('CoursesModal.profPM'), className: 'emph' },
                { text: t('CoursesModal.generationP'), className: 'emph' },
                { text: t('CoursesModal.interectSQL'), className: 'emph' },
            ],
        },
        { name: t('CoursesModal.nameKarpov'), className: 'highlight' },
        {
            name: 'Sololearn',
            className: 'highlight',
            details: [
                { text: `${createLink(`${process.env.PUBLIC_URL}/HTML.jpg`, 'HTML')}`, className: 'emph' }
            ]
        },
    ];
}

export function Conferences() {
    const { t } = useTranslation();

    return [
        {
            name: t('ConferencesModal.name'),
            className: 'highlight',
            details: [
                { text: `${createLink(`${process.env.PUBLIC_URL}/template.pdf`, 'CIGRE, INFORMATION SYSTEMS AND TELECOMUNICATION, 2022, Paris')}`, className: 'emph' },
                { text: t('ConferencesModal.details.energynet2021'), className: 'emph' },
                { text: t('ConferencesModal.details.energynet2020'), className: 'emph' },
                { text: t('ConferencesModal.details.powerBIMeetup'), className: 'emph' },
                { text: `${createLink(`${process.env.PUBLIC_URL}/umnik.png`, 'УМНИК Энерджинет 2019, Москва')}`, className: 'emph' },
                { text: t('ConferencesModal.details.ibima'), className: 'emph' },
                { text: t('ConferencesModal.details.industrialManagement'), className: 'emph' },
            ],
        },
    ];
}

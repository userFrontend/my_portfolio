import { v4 } from "uuid"
import chatImg from './images/logo.jpg'
import carImg from './images/logo_site.jpg'
import quizImg from './images/quiz.jpg'
import gallaryImg from './images/photo_2024-02-12_15-23-12.jpg'
import taskImg from './images/task app.jpg'

export const data = [
    {
        id: v4(),
        js: 'React & Backend',
        src: chatImg,
        title: 'Chat',
        title_end: 'Message',
        link: 'https://chat-message-site.netlify.app/',
        git: 'https://github.com/userFrontend/mernChat-client.git'
    },
    {
        id: v4(),
        js: 'React & Backend',
        src: carImg,
        title: 'Online',
        title_end: 'Market',
        link: 'https://car-shopping-online.netlify.app',
        git: 'https://github.com/userFrontend/Car-app-frontend.git'
    },
    {
        id: v4(),
        js: 'React & Backend',
        src: quizImg,
        title: 'Quiz',
        title_end: 'App',
        link: 'https://quize-app-exam.netlify.app',
        git: ''
    },
    {
        id: v4(),
        js: 'React & Backend',
        src: gallaryImg,
        title: 'Gallary',
        title_end: 'Save',
        link: 'https://gallary-save-app.netlify.app/',
        git: ''
    },
    {
        id: v4(),
        js: 'EJS & MySQL',
        src: taskImg,
        title: 'Task',
        title_end: 'App',
        link: 'https://task-app-nd22.onrender.com',
        git: 'https://github.com/userFrontend/Task_app.git'
    },
]
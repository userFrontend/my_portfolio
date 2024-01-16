import { v4 } from "uuid"
import chatImg from './images/logo.jpg'
import carImg from './images/logo_site.jpg'
import quizImg from './images/quiz.jpg'

export const data = [
    {
        id: v4(),
        js: 'React & Backend',
        src: chatImg,
        title: 'Chat',
        title_end: 'Message',
        link: 'https://chat-message-site.netlify.app/'
    },
    {
        id: v4(),
        js: 'React & Backend',
        src: carImg,
        title: 'Online',
        title_end: 'Market',
        link: 'https://car-shopping-online.netlify.app'
    },
    {
        id: v4(),
        js: 'React & Backend',
        src: quizImg,
        title: 'Quiz',
        title_end: 'App',
        link: 'https://quize-app-exam.netlify.app'
    },
]
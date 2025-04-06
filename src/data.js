import { v4 } from "uuid"
import chatImg from './images/logo.jpg'
import carImg from './images/logo_site.jpg'
// import quizImg from './images/quiz.jpg'
import gallaryImg from './images/photo_2024-02-12_15-23-12.jpg'
import taskImg from './images/task app.jpg'
import parallaxImg from './images/parallax.jpg'
import scrollImg from './images/scroll.jpg'
import showcaseImg from './images/showcase.jpg'
import olxImg from './images/olx.jpg'
import pizza from './images/kuda.jpg'
import hanyuban from './images/hanyuban.jpg'

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
        src: olxImg,
        title: 'OLX.UZ',
        title_end: 'CLONE',
        link: 'https://olx-clone-test.netlify.app',
        git: 'https://github.com/userFrontend/OLX-clone.git'
    },
    {
        id: v4(),
        js: 'React & Backend',
        src: pizza,
        title: 'Kuda',
        title_end: 'Pizza',
        link: 'https://koda-pizza.netlify.app/',
        git: 'https://github.com/userFrontend/Kuda-Pizza-clone.git'
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
    // {
    //     id: v4(),
    //     js: 'React & Backend',
    //     src: quizImg,
    //     title: 'Quiz',
    //     title_end: 'App',
    //     link: 'https://quize-app-exam.netlify.app',
    //     git: ''
    // },
    {
        id: v4(),
        js: 'React & Backend',
        src: gallaryImg,
        title: 'Gallary',
        title_end: 'Save',
        link: 'https://gallary-save-app.netlify.app/',
        git: 'https://github.com/userFrontend/Gallary-Cloud.git'
    },
    {
        id: v4(),
        js: 'React & SCSS',
        src: hanyuban,
        title: 'Education',
        title_end: 'Hanyuban',
        link: 'https://hanyuban.netlify.app/',
        git: 'https://github.com/userFrontend/Education-Site.git'
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
    // {
    //     id: v4(),
    //     js: 'HTML & CSS',
    //     src: parallaxImg,
    //     title: 'Parallax',
    //     title_end: 'Effect',
    //     link: 'https://parallax-effect-3d.netlify.app',
    //     git: ''
    // },
    // {
    //     id: v4(),
    //     js: 'HTML & CSS',
    //     src: scrollImg,
    //     title: 'Creative',
    //     title_end: 'Scroll',
    //     link: 'https://creative-scroll-site.netlify.app',
    //     git: ''
    // },
    // {
    //     id: v4(),
    //     js: 'HTML & CSS',
    //     src: showcaseImg,
    //     title: 'Showcase',
    //     title_end: 'Effect',
    //     link: 'https://showcase-3d.netlify.app',
    //     git: ''
    // },
]
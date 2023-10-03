import { createRouter, createWebHistory } from 'vue-router';

import myHome from './components/views/OpeningPage';

import SecondPage from './components/HomePage';

import myLogin from './components/views/loginPage';
import myRegister from './components/views/registerPage';
import BlogPage from './components/views/BlogPage'; // Remove the dot here
import BlogDetailsPage from './components/views/BlogDetailsPage';

const routes = [
    { path: '/', name: 'home', component: myHome},
    { path: '/SecondPage', name: 'SecondPage', component: SecondPage},
    { path: '/login', component: myLogin },
    { path: '/register', component: myRegister },
    { path: '/blogs', component: BlogPage },
    { path: '/blog', component: BlogDetailsPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

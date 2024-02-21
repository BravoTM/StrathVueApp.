import{createRouter, createWebHistory }from"vue-router";

import HomepageVue from "@/components/Homepage.vue";

import Events from "./../components/Events.vue";
import AboutUs from "./../components/AboutUs.vue";
import Patnership from "./../components/Patnership.vue";
import Alumni from "./../components/Alumni.vue";
import Library from "./../components/Library.vue";
import Contactus from "./../components/ContactUs.vue";
import Course from "./../components/Courses.vue";


const routes =[
    {
        path: '/',
        name: 'Homepage',
        component: HomepageVue,
    },
    {
        path: '/events',
        name: 'events',
        component: Events,
    },
    {
        path: '/courses',
        name: 'courses',
        component: Course,
    },
    {
        path: '/contactus',
        name: 'contactus',
        component: Contactus,
    },
    {
        path: '/library',
        name: 'library',
        component: Library,
    },
    {
        path: '/aboutus',
        name: 'aboutus',
        component: AboutUs,
    },
    {
        path: '/alumni',
        name: 'alumni',
        component: Alumni,
    },
    {
        path: '/Patnership',
        name: 'Patnership',
        component: Patnership,
    },
]

const router =createRouter({
    history: createWebHistory(),
    routes,
});

export default router
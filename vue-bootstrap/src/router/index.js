import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Card from "../views/card.vue";
import Form from "../views/form.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/card",
        name: "Card",
        component: Card
    },
    {
        path: "/form",
        name: "Form",
        component: Form
    }
];

const router = new VueRouter({
    routes
});

export default router;

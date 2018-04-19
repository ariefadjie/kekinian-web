import VueRouter from 'vue-router';

export default new VueRouter({
    routes : [
        {
            path : '/',
            components : require('./views/Home')
        },
        {
            path : '/about',
            components : require('./views/About')
        },
        {
            path : '/contact',
            components : require('./views/Contact')
        },
        { 
            path : '/place/:id',
            params : true,
            components : require('./views/Place')
        }
    ],
    linkActiveClass : 'is-active'
});
/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Hello World",
      reviews: [
        {
          text: "Vue.js is the best thing since sliced bread!",
          rating: 5,
          reviewer: "Dani"
        },
        {
          text: "I love Vue.js for programming!",
          rating: 4,
          reviewer: "Jaron"
        },
        {
          text: "Vue.js is dope.",
          rating: 5,
          reviewer: "Nadine"
        }
      ]
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});
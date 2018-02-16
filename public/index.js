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
          text: "Vue.js is great!",
          rating: 4,
          reviewer: "Jaron"
        },
        {
          text: "Vue.js is dope.",
          rating: 5,
          reviewer: "Nadine"
        }
      ],
      newReview: {text: "", rating: "", reviewer: ""}
    };
  },
  created: function() {},
  methods: {
    addReview: function() {
      if(this.newReview.text && this.newReview.rating && this.newReview.reviewer) {
        this.reviews.push(this.newReview);
        this.newReview = {text: "", rating: "", reviewer: ""};
      }
    },
    deleteReview: function(reviewObject) {
      var index = this.reviews.indexOf(reviewObject);
      this.reviews.splice(index, 1);
    },
    isPositive: function(reviewObject){
      // if it finds the index of the word bad, returns index. if bad is not in the string, returns -1
      console.log(reviewObject.text.indexOf('bad'))
      return reviewObject.text.indexOf('bad') === -1
    }
  },
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
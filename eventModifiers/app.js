var app = new Vue({
  el :'#vueComp',    
  data: {
    title : 'Vue Event Modifiers',
    age : 24,
    goolgeLink : 'https://www.google.com'
  },
  methods:{
    inc : function (value) {
            this.age += value;
    },
    popup: function () {
        alert('Button clicked');
    }
  }
})
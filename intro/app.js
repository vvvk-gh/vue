var app = new Vue({
    el : '#vueComp',
    data : {
        title : 'Vue basics',
        name : 'Vamsi',
        age : '23'
    },
    methods :{
        greet : function(){
            return `Hello ${this.name} and are you here to learn ${this.title}`

        }
    }
})

//new Vue({}); is how we create a new vue instance
//this new vue component is directly bind to the dom what ever you changes you make that applies to the dom
// try app.name = "somename" //it gets changed

//no direct contact with html , we use it as an entry point

//el should be the section , div that you want to target 
// for class :(el : '.target') , for id : (el : '#target')

//variables should go in data object , you can have n number variables inside the data ,
//methods should go in methods object , you can also have n number of methods inside the 

// You can't use the variables and methods out of your target selector , if used you will get normal


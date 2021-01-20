var app = new Vue({
    el : '#vueComp',
    data:{
        title : 'Events',
        age:24,
        x:0,
        y:0
    },
    methods:{
        inc : function(inc){
            this.age += inc;
        },
        dec : function(dec){
            this.age -= dec;
        },
        updateXY : function(event){
            this.x = event.offsetX; 
            this.y = event.offsetY;
        }
    }
})
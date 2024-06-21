var app=new Vue ({
    el:'#app',
    data:{
        message :"Hello World",
        //count:0,
        visitor_name:"",
        visitors:[]
    },
    methods:{
        sayHi:function(){
            this.message="Hiii";
            this.count=this.count+1;
            this.visitors.push(this.visitor_name);
            this.visitor_name="";
        }
    },
    computed:{
        counting:function(){
            return this.visitors.length;
        }
    }       
    
})
Vue.component('message-board',{
    props:['title'],
    template:`
    <div>
        <h4>{{title}}</h4>
        <p>Your Name:<input type="text" v-model="visitor_name"/></p>
        <p>Your Message: <input type="text" v-model="visitor_message"/></p>

        <button v-on:click="sayHi">Say Hi</button>

        <ul>
            <li v-for="message in messages">{{message["visitor_name"]}} : {{message["visitor_message"]}}</li>
        </ul>
    </div>
    `,
    data:function(){
        return{
        visitor_name:"",
        visitor_message:"",
        messages:[]
        }
    },
    methods:{
        sayHi:function(){
            this.messages.push({"visitor_name":this.visitor_name , "visitor_message":this.visitor_message});
            this.visitor_name="";
            this.visitor_message="";
            this.$emit("add_count");
        }
    },
    computed:{
        counting:function(){
            return this.messages.length;
        }
    }  
})

var app=new Vue ({
    el:'#app',
    data:{
        count:0
    },
    methods:{ //for maintainig total message count of all users
        addCount:function(){
            this.count=this.count+1;
        }
    }
    // data:{
    //     visitor_name:"",
    //     visitor_message:"",
    //     messages:[]
    // },
    // methods:{
    //     sayHi:function(){
    //         this.messages.push({"visitor_name":this.visitor_name , "visitor_message":this.visitor_message});
    //         this.visitor_name="";
    //         this.visitor_message="";
    //     }
    // },
    // computed:{
    //     counting:function(){
    //         return this.messages.length;
    //     }
    // }       
    
})
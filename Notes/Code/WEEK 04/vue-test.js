var app =new Vue ({
    el:'#app',
    data:{
        message:'Hello',
        fsize:'42px',
        msg2:'Dummy',
        msg3:'Dummy2'
    },
    methods:{
        updateMsg(){
            this.message='Back to Square One';
        }
    },
    computed:{
        myFontSize:function(){
            return `${this.message.length+10}px`;
        }
    },
    watch: {
        message:function(nmsg,omsg){
            this.msg2=`Old: ${omsg}, New: ${nmsg}`;
            this.msg3=`New:${nmsg}`;
        }
    }
})
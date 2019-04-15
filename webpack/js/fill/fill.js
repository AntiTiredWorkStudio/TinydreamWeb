var uid = Options.GetUserInfo().openid;

var fill = new Vue({
    el:'#fill',
    data:{
        headicons:[
            {
                hedicon:'http://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaELNMOWpmBVxdBriaDWJbibLPK6vLTg6NsL9QYM4AlDWibl1EcE8zEibzqCvaw1YksQOuGUgnTWwWTsa0Q/132'
            },
            {
                hedicon:'http://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaELNMOWpmBVxdBriaDWJbibLPK6vLTg6NsL9QYM4AlDWibl1EcE8zEibzqCvaw1YksQOuGUgnTWwWTsa0Q/132'
            },
            {
                hedicon:'http://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaELNMOWpmBVxdBriaDWJbibLPK6vLTg6NsL9QYM4AlDWibl1EcE8zEibzqCvaw1YksQOuGUgnTWwWTsa0Q/132'
            },
            {
                hedicon:'http://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaELNMOWpmBVxdBriaDWJbibLPK6vLTg6NsL9QYM4AlDWibl1EcE8zEibzqCvaw1YksQOuGUgnTWwWTsa0Q/132'
            },
            {
                hedicon:'http://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaELNMOWpmBVxdBriaDWJbibLPK6vLTg6NsL9QYM4AlDWibl1EcE8zEibzqCvaw1YksQOuGUgnTWwWTsa0Q/132'
            },
        ],//头像
    },
    created(){
        this.info(this)
    },
    methods:{
        // 详情信息
        info(self){
            self.$toast.loading({
                duration:0,
                forbidClick:true,
                loadingType:'circular',
                message:'信息加载中...'
            })
            TD_Request('op','uinfo',{uid:uid},function(code,data){
                console.log(data)
            },function(code,data){
                console.log(data);
            })
        }
    }
})
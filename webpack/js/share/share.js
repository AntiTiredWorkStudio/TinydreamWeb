var uid = Options.GetUserInfo().openid;

var share = new Vue({
    el:'#share',
    data:{
        imgArr:['https://tdream.antit.top/LongPress2Share01.jpg',
        'https://tdream.antit.top/LongPress2Share02.jpg',
        'https://tdream.antit.top/LongPress2Share03.jpg',
        'https://tdream.antit.top/LongPress2Share04.jpg',
        'https://tdream.antit.top/LongPress2Share05.jpg',
        'https://tdream.antit.top/LongPress2Share06.jpg',
        'https://tdream.antit.top/LongPress2Share07.jpg',
        'https://tdream.antit.top/LongPress2Share08.jpg',
        'https://tdream.antit.top/LongPress2Share09.jpg',
        'https://tdream.antit.top/LongPress2Share10.jpg',
        'https://tdream.antit.top/LongPress2Share11.jpg',
        'https://tdream.antit.top/LongPress2Share12.jpg',]
    },
    created(){
        Options.TestServer = true;
        console.log(Math.floor(Math.random()*this.imgArr.length))
    }
})
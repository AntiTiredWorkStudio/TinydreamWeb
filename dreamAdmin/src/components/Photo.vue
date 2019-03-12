<template>
    <div class="photo">
        <van-button class="btn" type='primary' plain>
            <p>
                <span class="title">20190303</span>
                <span class="look">点击查看</span>
            </p>
            <p>
                <span class="nickname">Michael Kong</span>
            </p>
            <p>
                中奖编号:<span class="lid">20190303-10000098</span>
            </p>
            <p style="text-align:center">
                <van-uploader :after-read="onRead">
                    <van-button type='primary' plain class="upload">选择文件</van-button>
                </van-uploader>
                <van-button type='primary' plain class="upload" style="margin-left:2vw" @click="upload">上传</van-button>
            </p>
        </van-button>
    </div>
</template>

<script>
export default {
    name:'photo',
    data () {
        return {
            file:''
        }
    },
    methods: {
        onRead(file,content){
            console.log(file,content)
            this.file = file
        },
        upload(){
            console.log(this.file)
            // 上传逻辑
        }
    },
}
</script>

<style scoped lang="less">
    .photo{
        width: 100%;
        .btn{
            width: 96vw;
            margin: 0 auto;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            padding-top: 2vw;
            height: 30vw;
            text-align: left;
            
            p{
                line-height: 1.5;
                .look{
                    float:right;
                    text-decoration: underline;
                    color: #0099ff;
                }
                .upload{
                    height: 10vw;
                }
            }
        }
    }
</style>

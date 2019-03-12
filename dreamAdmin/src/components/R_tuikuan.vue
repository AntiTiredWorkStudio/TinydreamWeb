<template>
    <div class="tuikuan">
        <van-collapse v-model="activeName">
            <van-collapse-item v-for="(rpack,index) in rpacks" class="state" :value="rpack.state" :class="{run:rpack.state != '未退款' ? true : false}" :title="rpack.title+'期'" :key="index">
                <div class="main">
                    <div class="top">
                        <span class="title">{{rpack.title}}期</span>
                        <span class="state" :class="{end:rpack.state == '未退款' ? true : false}">{{rpack.state}}</span>
                    </div>
                    <div class="inner">
                        <p>
                            昵称：{{rpack.nickname}}
                        </p>
                        <p>
                            红包id：{{rpack.rid}}
                        </p>
                        <p>
                            单价(元)：{{rpack.price}}
                        </p>
                        <p>
                            领取状态：{{rpack.l_state}}
                        </p>
                        <p>
                            未领份数：{{rpack.m_num}}
                        </p>
                        <p>
                            退款金额(元)：{{rpack.tkbill}}
                        </p>
                        <p class="btn" :class="{hide:rpack.state == '未退款' ? true : false}">
                            <van-button type="primary">退款</van-button>
                        </p>
                    </div>
                </div>
            </van-collapse-item>
        </van-collapse>
    </div>
</template>

<script>
export default {
    name:'tuikuan',
    data () {
        return {
            activeName:[],
            rpacks:[
                {
                    title:'20190208',
                    nickname:'HugoBarry',
                    rid:'326166535125',
                    tkbill:100,
                    price:5,
                    l_state:'100/101',
                    m_num:1,
                    state:'未退款'
                },
                {
                    title:'20190208',
                    nickname:'HugoBarry',
                    rid:'326166535125',
                    tkbill:100,
                    price:5,
                    l_state:'100/101',
                    m_num:1,
                    state:'未退款'
                },
                {
                    title:'20190208',
                    nickname:'HugoBarry',
                    rid:'326166535125',
                    tkbill:100,
                    price:5,
                    l_state:'100/101',
                    m_num:1,
                    state:'已退款'
                }
            ]
        }
    }
}
</script>

<style scoped lang="less">
    .tuikuan{
        width: 100%;
        background-color: #fff;
        .state.run{
            color: #07c160 !important;
        }
        .main{
            height: 100vw;
            // border: 1px solid #eee;
            .top{
                width: 100%;
                overflow: hidden;
                line-height: 1.5;
                .title{
                    float: left;
                    font-size: 5vw;
                    color:#07c160;
                    vertical-align: bottom;
                }
                .state{
                    font-size: 5vw;
                    color: #07c160;
                    float: right;
                }
                .state.end{
                    color:red;
                }
                .state.run{
                    color:#07c160;
                }
            }

            .inner{
                width: 100%;
                p{
                    margin-top: 5vw;
                    font-size: 5vw;
                }

            }
        }
        .btn{
            text-align: right;
            display: none;
        }
        .btn.hide{
            display: block;
        }
    }
</style>

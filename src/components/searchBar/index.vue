<template>
    <div class="classify-type">
        <ul class="classify-type-ul">
            <li @click="active(0)" class="classify-type-ul-li">
                <i></i>
                全国
                <div :style="{display: a==0 ? 'block' : 'none'}" class="classify-type-left">
                    <ul >
                        <li>全国</li>
                        <li v-for="item in fcitys" :key="item.CITYJX" >{{item.JXNAME}}</li>
                    </ul>
                </div>
            </li>
            <li @click="active(1)" class="classify-type-ul-li">
                <i></i>
                全部分类
                <div :style="{display: a==1 ? 'block' : 'none'}" class="classify-type-left">
                    <ul>
                        <li>全部分类</li>
                        <li v-for="item in typeas" :key="item.PRODUCTTYPEAID">{{item.NAME}}</li>
                    </ul>
                </div>
            </li>
            <li @click="active(2)" class="classify-type-ul-li">
                <i></i>
                全部时间
                <div :style="{display: a==2 ? 'block' : 'none'}" class="classify-type-right">
                    <ul>
                        <li>全部时间</li>
                        <li></li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    name: 'searchBar',
    data() {
          return {
            a: 9,
          };
        },
    props:{
        fcitys:Array,
        typeas:Array
    },
    methods: {
       active(a){
           return this.a=a;
       }
    },
    
}
</script>
<style lang="scss">
    .classify-type{
        height: 46px;
        width: 100%;
        margin-bottom: 20px;
        .classify-type-ul{
            width:100%;
            height: 100%;
            display: flex;
            border-bottom: 1px solid #f9fafa;
            box-sizing: border-box;
            .classify-type-ul-li{
                flex: 1;
                text-align: center;
                line-height: 45px;
                color: #999ea3;
                position: relative;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                padding: 0 20px 0 10px;
            }
            .classify-type-left {
                position: fixed;
                width: 100%;
                height: calc(100% - 76px);
                left: 0;
                z-index: 100;
                background: rgba(0, 0, 0, .5);
                overflow: auto;
                ul{
                    width:100%;
                    padding: 20px 0;
                    background: #fff;
                    // height: 1000px;
                    border-radius: 0 0 20px 20px;
                    zoom:1;
                    overflow: hidden;
                    li{
                        height: 45px;
                        line-height: 45px;
                        text-align: center;
                        float: left;
                        width: 33.33%;
                        color:#000;
                        // background: #fff;
                    }
                }
            }
        }
        
    }
</style>

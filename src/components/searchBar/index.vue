<template>
    <div class="classify-type">
        <ul class="classify-type-ul">
            <!-- 城市分类部分 -->
            <li @click="active('1')" class="classify-type-ul-li">
                {{title_l}}<i class="iconfont icon-xiala"></i>
                <div :style="{display: a==1 ? 'block' : 'none'}" class="classify-type-l">
                    <ul >
                        <li @click.stop="addres(''),active(''),ciStyle(0,'全国')"
                        :style="{color: cstyle==0 ? '#FF2959' : '#000'}"
                        >全国</li>
                        <li v-for="item in fcitys"
                        :style="{color: item.CITYJX==address ? '#FF2959' : '#000'}"
                        :key="item.CITYJX"
                        @click.stop="addres(item.CITYJX,item.JXNAME),active('')"
                        >{{item.JXNAME}}</li>
                    </ul>
                </div>
            </li>
            <!-- 演出类型部分 -->
            <li @click="active('2')" class="classify-type-ul-li">
                {{title_c}}<i class="iconfont icon-xiala"></i>
                <div :style="{display: a==2 ? 'block' : 'none'}" class="classify-type-l">
                    <ul>
                        <li @click.stop="kinds(''),active(''),ksStyle(0,'全部分类')"
                        :style="{color: kstyle==0 ? '#FF2959' : '#000'}"
                        >全部分类</li>
                        <li v-for="item in typeas"
                        :style="{color: item.TYPEAJX==kind ? '#FF2959' : '#000'}"
                        :key="item.TYPEAJX"
                        @click.stop="kinds(item.TYPEAJX,item.NAME),active('')"
                        >{{item.NAME}}</li>
                    </ul>
                </div>
            </li>
            <!-- 演出时间部分 -->
            <li @click="active('3')" class="classify-type-ul-li">
                {{title_r}}<i class="iconfont icon-xiala"></i>
                <div :style="{display: a==3 ? 'block' : 'none'}" class="classify-type-l">
                    <ul>
                        <li @click.stop="tim(''),active(''),timStyle(0,'全部时间')"
                        :style="{color: tstyle==0 ? '#FF2959' : '#000'}"
                        >全部时间</li>
                        <li @click.stop="tim('today'),active(''),timStyle(1,'今天')"
                        :style="{color: tstyle==1 ? '#FF2959' : '#000'}"
                        >今天</li>
                        <li @click.stop="tim('tomorrow'),active(''),timStyle(2,'明天')"
                        :style="{color: tstyle==2 ? '#FF2959' : '#000'}"
                        >明天</li>
                        <li @click.stop="tim('thisWeek'),active(''),timStyle(3,'本周内')"
                        :style="{color: tstyle==3 ? '#FF2959' : '#000'}"
                        >本周内</li>
                        <li @click.stop="tim('thisWeekEnd'),active(''),timStyle(4,'本周末')"
                        :style="{color: tstyle==4 ? '#FF2959' : '#000'}"
                        >本周末</li>
                        <li @click.stop="tim('nextWeek'),active(''),timStyle(5,'下周')"
                        :style="{color: tstyle==5 ? '#FF2959' : '#000'}"
                        >下周</li>
                        <li @click.stop="tim('thisMonth'),active(''),timStyle(6,'本月')"
                        :style="{color: tstyle==6 ? '#FF2959' : '#000'}"
                        >本月</li>
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
            a: '',
            address:'',
            kind:'',
            times:'',
            title_l:'全国',
            title_c:'全部分类',
            title_r:'全部时间',
            tstyle:0,
            cstyle:0,
            kstyle:0,
          };
        },
    props:{
        fcitys:Array,
        typeas:Array
    },
    methods: {
        active(a){
           this.a=a;
       },
        addres(a,b){
            this.title_l=b
            this.address=a;
            this.cstyle=1;
            this.$emit("addre",this.address);
            this.$router.push({
                path: '/category',
                query:{
                    a:this.address
                }
            })
        },
        kinds(a,b){
            // console.log(a)
            this.title_c=b
            this.kind=a
            this.kstyle=1;
            this.$emit("kinds",this.kind);
            this.$router.push({
                path: '/category',
                query:{
                    b:this.kind
                }
            })
        },
        tim(a){
            // console.log(a)
            this.times=a
            this.$emit("tim",this.times);
            this.$router.push({
                path: '/category',
                query:{
                    c:this.times
                }
            })
        },
        timStyle(a,b){
            this.tstyle=a;
            this.title_r=b
        },
        ciStyle(a,b){
            this.cstyle=a;
            this.title_l=b
        },
        ksStyle(a,b){
            this.kstyle=a;
            this.title_c=b
        }

    }
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
            .classify-type-l {
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
                        font-size: 14px;
                        // background: #fff;
                    }
                }
            }
        }
        
    }
</style>

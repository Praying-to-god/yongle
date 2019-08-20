<template>
    <div class="category-list">
        <ul class="category-list__ul">
            <li class="category-list__item" v-for="item in pagerMemorys" :key="item.isdate">
                <a href="#" class="goods-con">
                    <div class="left">
                        <img :src="pbgimgs[pagerMemorys.indexOf(item)]" :alt="item.name">
                        <i :class="item.status==='0'?'gradual-red':'ticket-state-blue'" class="tip">{{item.status==='0'?'售票中':'预定'}}</i>
                    </div>
                    <div class="right">
                        <p>{{item.name}}</p>
                        <span>{{item.begindate.replace(/-/g,'.')}}</span>
                        <span>{{item.vname}}</span>
                        <strong>{{parseInt(item.minprice)+'-'+item.maxprice+'元'}}</strong>
                    </div>
                </a>
            </li>
        </ul>


    </div>
</template>

<script>

export default {
    name: 'categoryList',
    props:{
        pagerMemorys:Array,
        pbgimgs:Array
    },
    methods: {
       
    
    
    },
    
}
</script>
<style lang="scss">
.category-list{
    width: 100%;
    padding:0 20px;
    .category-list__ul{
        width: 335px;
        .goods-con{
            display: block;
            margin-bottom: 15px;
            border-bottom: 1px solid #fafafb;
            padding-bottom: 15px;
            overflow: hidden;
            color:#000;
        }
        .left{
            position: relative;
            float: left;
            width: 85px;
            height: 113px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0px 1px 4px 0px rgba(58, 64, 69, 0.3);
        }
        img{
            width:100%;
            position: absolute;
        }
        .tip{
            display: block;
            height: 20px;
            line-height: 20px;
            color: #fff;
            font-style: normal;
            position: absolute;
            top: 0;
            font-size: 11px;
            font-weight: bold;
            border-radius: 10px 0;
            padding: 0 5px;
            left: 0;
            text-align: center;
            // background-position: 0 -24.19rem;
        }
        .ticket-state-blue{
            background: linear-gradient(to right, #3dd9c1, #00a0c2);
        }
        .gradual-red{
            background: linear-gradient(to right, #ff7e6f, #ff2959);
            box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
        }
        }
        .right{
            margin-left: 15px;
            float: left;
            width: calc(100% - 100px);
        }
        p{
            height: 40px;
            line-height: 20px;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            font-weight: bold;
            font-size: 14px;
        }

    }

</style>

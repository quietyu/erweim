<template>
  
        <ul v-if="dataHots.length" class="data-hot">
            <li v-for="dataHot in dataHots">
              <div class="left">
                <img :src=dataHot.imgUrl alt="">
              </div>
              <div class="right">
                <h2 class="title">{{dataHot.title}}</h2>
                <div class="data-hot-content">{{dataHot.content}}</div>
                <div class="dataHot-bottom">
                
                  <span class="free" v-if="dataHot.pay">免费</span>
                  
                  <span class="unfree" v-else>{{dataHot.sale}}</span>
                  <div class="bottom-right">
                  <span  class="collect">收藏</span>
                  <span  class="comment">{{dataHot.comNum}}</span>
                  </div>
                </div>
              </div>
            </li>
        </ul>
     
</template>

<script>
export default {
  path:'/admin',
  name: 'proList',
  data () {
    return {
      dataHots:[
        {imgUrl:'../../static/home/hotImg1.png',title:'工业机器人控制系统',content:'根据"工业机器人操作与应用"这典型工作任务设定课程',pay:true,comNum:'18',mostNew:1},
        {imgUrl:'../../static/home/hotImg2.png',title:'电气控制系统',content:'根据"工业机器人操作与应用"这典型工作任务设定课程',pay:false,sale:'￥1.00',comNum:'18'},
        {imgUrl:'../../static/home/hotImg3.png',title:'3D打印注意事项',content:'根据"工业机器人操作与应用"这典型工作任务设定课程',pay:false,sale:'￥212.00',comNum:'18',mostNew:1}
        ]
    }
  },
  methods:{
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>

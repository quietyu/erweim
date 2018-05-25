<template>
  
    
  <div class="layout">
  	<!-- 头部 -->
    <div class="header">
      <div class="logo">
        活动中心
      </div>
    </div>
    <!-- 导航条nav -->
    <div>
    	<div class="nav">
		  <mu-tabs :value="activeTab" @change="handleTabChange">
		    <mu-tab value="tab1" title="热门"/>
		    <mu-tab value="tab2" title="最新"/>
		    <mu-tab value="tab3" @active="handleActive" title="推荐"/>
		  </mu-tabs>
		  <router-link class="search" to="/search" ><img src="../../static/home/search.svg" alt=""></router-link>
		</div>
    <!-- 热门 -->
	  <div v-if="activeTab === 'tab1'">
	    <app-banner class="banner" :listImg="listImg"></app-banner>
      <div class="pro-list">
      <proList></proList>
      </div>
	  </div>
    <!-- 活动中心-最新 -->
	  <div v-if="activeTab === 'tab2'">
	    <app-banner class="banner" :listImg="listImg"></app-banner>
      <div class="new_list">
        <ul v-for='dataHot in dataHots'>
          <li v-if="dataHot.mostNew==1">
           <mu-card>

              <mu-card-media>
                <img :src="dataHot.imgUrl" />
                <div class="modal"></div>
              </mu-card-media>
                <div class="card_bottom">
                  <h2 class="title">{{dataHot.title}}</h2>
                  <div class="new_content">{{dataHot.content}}</div>
                  <div class="dataHot-bottom">
                    <span class="free" v-if="dataHot.pay">免费</span>
                    <span class="unfree" v-else>{{dataHot.sale}}</span>
                    <div class="bottom-right">
                      <span  class="collect">收藏</span>
                      <span  class="comment">{{dataHot.comNum}}</span>
                    </div>
                  </div>
                </div>
            </mu-card>
          </li>
        </ul>
       
      </div>
	  </div>
    <!-- 活动中心-推荐 -->
	  <div v-if="activeTab === 'tab3'" class="sug-content">
	    <div class="banner">
       <img src="../../static/home/banner2.png" alt=""> 
      </div>
      <div class="pro-list">
        <proList></proList>
      </div>
	  </div>
	</div>
    <!-- 尾部 -->
    <bottomNavigation></bottomNavigation>
  
</div>
 
    
  
</template>

<script>
import bottomNavigation from './commom/bottomNavigation'
import proList from './commom/proList'
import a from '../../static/home/banner1.png'
import b from '../../static/home/banner2.png'
import c from '../../static/home/banner3.png'
import Banner from './commom/banner.vue'
export default {
  components: {
        bottomNavigation,
        proList,
        'app-banner':Banner
   },
   created() {
             // console.log(a, b, c)
         },
  name: 'home',
  data () {
    return {
      activeTab:'tab1',
      listImg:[
      	{url:a},
      	{url:b},
      	{url:c}
      ],
      newList:[],
      dataHots:[
        {imgUrl:'../../static/home/hotImg1.png',title:'工业机器人控制系统',content:'根据"工业机器人操作与应用"这典型工作任务设定课程',pay:true,comNum:'18',mostNew:1},
        {imgUrl:'../../static/home/hotImg2.png',title:'电气控制系统',content:'根据"工业机器人操作与应用"这典型工作任务设定课程',pay:false,sale:'￥1.00',comNum:'18'},
        {imgUrl:'../../static/home/hotImg3.png',title:'3D打印注意事项',content:'根据"工业机器人操作与应用"这典型工作任务设定课程',pay:false,sale:'￥212.00',comNum:'18',mostNew:1}
        ]
    }
  },
  methods:{
  	handleTabChange(val){
  		this.activeTab=val
  	}
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.logo{background:#000;color:#fff;font-size:0.33rem;line-height:0.7rem;}
	.nav{position:relative;}
	.mu-tabs{width:45%;margin:0 auto;background:#fff;line-height: 0.94rem;}
	.mu-tab-link{font-size:0.34rem;color:rgb(52,51,51);}
	.mu-tab-link.mu-tab-active{color:rgb(255,88,0);}
	.search{float:right;position:absolute;top:0.25rem;width:0.5rem;right:0.41rem;}
  .swiper-container{height:2.5rem;}
  
</style>

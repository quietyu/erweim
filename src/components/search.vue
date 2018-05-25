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
    	<div class="search">
		    <img src="../../static/home/search.svg" alt=""><input placeholder="请输入关键字"><span v-on:click="backUp">取消</span>
		</div>
	</div> 

  <div class="content">
    <div class="history">
      <div class="title">历史搜索</div>
    </div>
    <div class="hot">
      <div class="title">热门搜索</div>
    </div>
  </div>
   
  
</div>
 
    
  
</template>

<script>

export default {
  name: 'search',
  methods:{
      backUp(){
        this.$router.go(-1)
      }
    }
  }
  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.logo{background:#000;color:#fff;font-size:0.33rem;line-height:0.7rem;}
  .search{position:relative;padding:0.14rem 0 0.14rem 0.28rem;text-align: left;border-bottom:1px solid rgb(239,239,239);}
  .search img{position: absolute;top:0.25rem;left:0.42rem;width:0.5rem;opacity: 0.5;}
  .search input{font-size:0.26rem;background:rgb(239,240,245);border:0;width:82%;padding:0.16rem;padding-left:0.9rem;color:rgb(188,189,199);margin-right:0.27rem;border-radius: 0.1rem;-o-border-radius: 0.1rem;-ms-border-radius: 0.1rem;-moz-border-radius: 0.1rem;-webkit-border-radius: 0.1rem;}
  .search span{color:rgb(109,109,10);font-size:0.28rem;}

</style>

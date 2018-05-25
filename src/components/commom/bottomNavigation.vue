<template>
  <div class="footer">
  	<mu-paper>
	  <mu-bottom-nav :value="bottomNav" @change="handleChange">
	    <mu-bottom-nav-item class="active-center" value="active-center" title="活动中心" icon="account_balance"/>
	    <mu-bottom-nav-item class="project-kind" value="project-kind" title="课程分类" icon="widgets"/>
	    <mu-bottom-nav-item class="personal" value="personal" title="我的" icon="perm_identity"/>
	  </mu-bottom-nav>
	</mu-paper>
  </div>
</template>

<script>
export default {
  name: 'bottomNavigation',
  data () {
    return {
      bottomNav:'active-center'
    }
  },
  methods:{
  	handleChange(val){
  		this.bottomNav=val
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer{position: fixed;bottom:0;width:100%;}
	.active-center span:before{}
</style>

<template>
<section>
	<ul>
		<li v-for="(item, index) in route" :key="index"> <router-link :to="item.path" v-if="item.text"> {{item.text}} </router-link> </li>
	</ul>
	<section>
		<router-view></router-view>
	</section>
</section>
</template>

<script>
export default {
	data: function(){
		return {route:[
			{ path: '/', text: ''},
			{ path: '/counter', text: 'Counter' },
			{ path: '/todo', text: 'Todo' }
		]};
	},
}
</script>

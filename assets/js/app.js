new Vue({
	el:'#app',
	data:{
		skills: [],
		works: []
	},
	mounted(){ this.getData() },
	methods: {
		getData(){
			axios('assets/js/skills.json').then(r=>{ this.skills = r.data });
			axios('assets/js/works.json').then(r=>{ this.works = r.data })
		},
	}
});
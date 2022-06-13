new Vue({
	el:'#app',
	data:{
		skills: [],
		works: []
	},
	mounted(){
		this.getSkills();
		this.getWorks()
	},
	methods: {
		getSkills(){ axios('assets/js/skills.json').then(r=>{ this.skills = r.data }) },
		getWorks(){ axios('assets/js/works.json').then(r=>{ this.works = r.data }) }
	}
});
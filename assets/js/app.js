const app = Vue.createApp({
	data() {
		return {
			skills: [],
			works: [],
			jobs: [],
			viewworks: true,
			viewskills: true,
			viewjobs: false
		}
	},
	mounted() { this.getData() },
	methods: {
		getData() {
			axios('assets/js/skills.json').then(r => { this.skills = r.data });
			axios('assets/js/works.json').then(r => { this.works = r.data });
			axios('assets/js/jobs.json').then(r => { this.jobs = r.data });
		}
	}
});
app.mount('#app');
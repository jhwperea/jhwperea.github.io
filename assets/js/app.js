const app = Vue.createApp({
	data() {
		return {
			skills: [],
			works: [],
			jobs: [],
			viewworks: true,
			viewskills: true
		}
	},
	mounted() { this.getData() },
	methods: {
		getData() {
			axios('assets/js/skills.json').then(r => { this.skills = r.data });
			axios('assets/js/works.json').then(r => { this.works = r.data });
			axios('assets/js/jobs.json').then(r => { this.jobs = r.data });
		},
		openModal(nameModal){
			const modal = new bootstrap.Modal(document.getElementById(nameModal));
			modal.show()
		}
	}
});
app.mount('#app');
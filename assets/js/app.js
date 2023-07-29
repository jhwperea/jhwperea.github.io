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
$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 10,
		nav: false,
		autoplay: true,
		autoplayTimeout: 1000,
		responsiveClass: true,
		responsive: {
			0: { items: 3 },
			600: { items: 6 },
			1000: { items: 12 }
		}
	});
});
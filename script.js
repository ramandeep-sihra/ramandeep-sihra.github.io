const Portfolio = function () {
	function makeWords() {
		return [
			{ text: "T-SQL", weight: 15 },
			{ text: "SAP-ERP", weight: 13 },
			{ text: "MS Excel", weight: 10 },
			{ text: "MS Access", weight: 8 },
			{ text: "MS Sharepoint", weight: 7 },
			{ text: "MS Dynamics", weight: 5 },
			{ text: "SSMS", weight: 5 },
			{ text: "Basware", weight: 5 }
		];
	}

	function makeWordCloud(words) {
		let delay_ms = 200;
		$('.experience-domains').jQCloud(words, { delay: delay_ms });
	}

	function displayWordCloud() {
		let count = 1;
		$(window).on('scroll', function () {
			let y_scroll_pos = window.pageYOffset;
			let scroll_pos_test = 2700;
			if (y_scroll_pos > scroll_pos_test && count == 1) {
				makeWordCloud(makeWords());
				++count;
			}
		});
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"Am A Data Enthusiast",
				"help large companies with their data needs",
				"extract, validate & process data",
				"am a problem solver & creative thinker",
				"like querying data and creating reports",
				"Am an Aspiring Data Analyst!"
			],
			stringsElement: null,
			typeSpeed: 1,
			contentType: 'text',
			callback: function () {
				$("#writing-text").css({ "color": "#fff", "background-color": "#C8412B" });
			},
			preStringTyped: function () { },
			onStringTyped: function () { }
		});
	}

	return { displayWordCloud, typeAnimation }
}();

Portfolio.displayWordCloud();
Portfolio.typeAnimation();
$(function () {
	// Grab thr template script
	var theTemplateScript = $("#address-template").html();

	// Compile thr template
	var theTemplate = Handlebars.compile(theTemplateScript);

	//Define data object
	var context = {
		"city": "London",
		"street": "Baker Street",
		"number": "221B"
	};

	// Pass datd to the template
	var theCompiledHtml = theTemplate(context);

	// Add the compiled html to the page
	$('.content-placeholder').html(theCompiledHtml);

});

// Second
$(function () {
	var theTemplateScript = $("#expressions-template").html();

	var theTemplate = Handlebars.compile(theTemplateScript);

	var context = {
		"description": {
			"escaped": "Using {{}} brackets will result in escaped HTML:",
			"unescaped": "Using {{{}}} will leave the context as it is:"
		},
		"example": "<button> Hello </button>"
	};

	var theCompiledHtml = theTemplate(context);

	$('.main-placeholder').html(theCompiledHtml);

});

// Third
$(function () {
	var theTemplateScript = $("#example-template").html();

	var theTemplate = Handlebars.compile(theTemplateScript);

	var context = {
		people: [
			{ firstName: 'Homer', lastName: 'Simson' },
			{ firstName: 'Peter', lastName: 'Griffin' },
			{ firstName: 'Eric', lastName: 'Cartman' },
			{ firstName: 'Kenny', lastName: 'McCormick' },
			{ firstName: 'Bart', lastName: 'Simson'}
		]
	};

	var theCompiledHtml = theTemplate(context);

	$(".third").append(theCompiledHtml);
});

// Fourth
$(function () {
	//Register a helper
	Handlebars.registerHelper('capitalize', function(str) {
		// str is the argument passed to the helper when called
		str = str || '';
		return str.slice(0,1).toUpperCase() + str.slice(1);
	});

	var theTemplateScript = $("#built-in-helpers-template").html();

	var theTemplate = Handlebars.compile(theTemplateScript);

	var context = {
		animals: [
			{
				name: "cow",
				noise: "moooo"
			},
			{
				name: "cat",
				noise: "meow"
			},
			{
				name: "fish",
				noise: ""
			},
			{
				name: "farmer",
				noise: "Get off my property!"
			}

		]
	};

	var theCompiledHtml = theTemplate(context);

	$('.fourth').html(theCompiledHtml);

});
// Fifth

$(function () {
	var theTemplateScript = $("#block-expressions-template").html();

	// name of helper is provided as the first parameter
	Handlebars.registerHelper('uppercase', function(options) {
		return options.fn(this).toUpperCase();
	});

	var theTemplate = Handlebars.compile(theTemplateScript);

	var context = {
		"code": "up up down down left right b a salect start"
	};

	var theCompiledHtml = theTemplate(context);

	$('.fifth').html(theCompiledHtml);
});

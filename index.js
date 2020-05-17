let $ 		= require('jquery')
let consts 	= require('./src/js/constants.js')
let fns 	= require('./src/js/functions.js')
let urls 	= require('./src/js/url.json')

if (!$('.class').length) {
	throw new Error(urls.logout)
} else {
	console.log(urls.signup)
}
// Here is a comment
consts.users.forEach(u => {
	console.log(u.name + " expects to live " + fns.sub(u.hope,u.age) + " years.")
	$('body').append(`<div id="user${u.id}">
						<p>Name: ${u.name}</p>
						<p>Age: ${u.age}</p>
					</div>`)
})



(function(){
	var jquery_version = '2.1.4';
	var site_url = 'http://127.0.0.1:8000/';
	var static_url = site_url + 'static/';
	var min_width = 100;
	var min_height = 100;

	function bookmarklet(msg) {
		// Here goes our bookmarklet code
	};
	// Check if jQuery is loaded
	if(typeof window.jQuery != 'undefined') {
		bookmarklet();
	}   else {
		// Check for conflicts
		var conflict = typeof window.$ != 'undefined'
		;
		// Create the script and point to Google API
		var script = document.createElement('script');
		script.setAttribute('src',
			'http://ajax.googleapis.com/ajax/libs/jquery/' +
			jquery_version + '/jquery.min.js');
		//  Add the script to the 'head' for processing
		document.getElementByTagName('head')[0].appendChild(script);
		//  Create a way to wait until script loading
		var attempts = 15;
		(function(){
			// Check again if jQuery is undefined
			if(typeof window.jQuery == 'undefined') {
				if(--attempts > 0) {
					// Calls himself in a few milliseconds
					window.setTimeout(arguments.callee, 250)
				}
				else {
					// Too much attempts to load, send error
					alert('An error ocurred while loading jQuery')
				}
			}
            else {
            	bookmarklet();
            }
		})();
	}
})()

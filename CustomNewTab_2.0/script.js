document.getElementById('bar').onkeypress = function(e){
	if (!e) e = window.event;
	if (e.keyCode == '13' && document.getElementById('bar').value.trim() != ''){
		// https://duckduckgo.com/?q=
		window.location="https://www.google.com/search?q=" + encodeURIComponent(this.value);
		return false;
	}
}
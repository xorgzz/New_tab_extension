document.getElementById('bar').onkeypress = function(e){
	if (!e) e = window.event;
	if (e.keyCode == '13' && document.getElementById('bar').value.trim() != ''){
		window.location="https://duckduckgo.com/?q=" + encodeURIComponent(this.value);
		return false;
	}
}

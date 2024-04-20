let currentBrowser;
getCurrentBrowser();


function getCurrentBrowser() {
	cookie = decodeURIComponent(document.cookie);
	splitCookies = cookie.split(';');
	
	for (let i=0; i<splitCookies.length; i++) {
		if (splitCookies[i].split("=")[0] == "currentBrowser") {
			cookie = splitCookies[i].split("=")[1];
			break;
		}
	}

	if (cookie == "google") {
		goGoogle();
	} else if (cookie == "ddg") {
		goDdg();
	} else if (cookie == "ahmia") {
		goAhmia();
	} else if (cookie == "reddit") {
		goReddit();
	} else if (cookie == "yt") {
		goYt();
	} else if (cookie == "git") {
		goGit();
	} else {
		goDdg();
	}
}

function listen() {
	document.getElementById('bar').addEventListener("keypress", function(e){
		if (!e) e = window.event;
		if (e.key == 'Enter' && document.getElementById('bar').value.trim() != ''){
			if (currentBrowser == "google") {
				window.location="https://www.google.com/search?q=" + encodeURIComponent(this.value);
			} else if (currentBrowser == "ddg") {
				window.location="https://duckduckgo.com/?q=" + encodeURIComponent(this.value);
			} else if (currentBrowser == "ahmia") {
				window.location="https://ahmia.fi/search/?q=" + encodeURIComponent(this.value);
			} else if (currentBrowser == "reddit") {
				window.location="https://www.reddit.com/search/?q=" + encodeURIComponent(this.value);
			} else if (currentBrowser == "git") {
				window.location="https://github.com/search?q=" + encodeURIComponent(this.value);
			} else if (currentBrowser == "yt") {
				window.location="https://www.youtube.com/results?search_query=" + encodeURIComponent(this.value);
			}
			return false;
		}
	});
}

function goGoogle() {
	baseBrowserUtil(
		"google",
		`<h2 class="google"><span class="blue">G</span><span class="red">o</span><span class="yellow">o</span><span class="blue">g</span><span class="green">l</span><span class="red">e</span></h2>`,
		`<input type="text" id="bar" autocomplete="off" autofocus="on" placeholder="Google stuff here">`
	);
}

function goGit() {
	baseBrowserUtil(
		"git",
		`<h2 class="ddg"><span class="white">Github</span></h2>`,
		`<input type="text" id="bar" autocomplete="off" autofocus="on" placeholder="Github search">`
	);
}

function goAhmia() {
	baseBrowserUtil(
		"ahmia",
		`<h2 class="ddg"><span class="purple">Ahmia</span></h2>`,
		`<input type="text" id="bar" autocomplete="off" autofocus="on" placeholder="Your Tor searches go here">`
	);
}

function goReddit() {
	baseBrowserUtil(
		"reddit",
		`<h2 class="social"><span class="redditish">Reddit</span></h2>`,
		`<input type="text" id="bar" autocomplete="off" autofocus="on" placeholder="Bears, beets, battlestar galactica">`
	);
}

function goDdg() {
	baseBrowserUtil(
		"ddg",
		`<h2 class="ddg"><span class="orange">DuckDuckGo</span></h2>`,
		`<input type="text" id="bar" autocomplete="off" autofocus="on" placeholder="Private stuff goes here">`
	);
}

function goYt() {
	baseBrowserUtil(
		"yt",
		`<h2 class="social"><span class="red">YouTube</span></h2>`,
		`<input type="text" id="bar" autocomplete="off" autofocus="on" placeholder="For videos, search here ~Yoda">`
	);
}

function baseBrowserUtil(name, banner, placeholder) {
	currentBrowser = name;
	document.cookie = `currentBrowser=${name}`;
	document.querySelector("#banner").innerHTML = banner;
	document.querySelector("#query").innerHTML = placeholder;

	listen();
}

document.querySelector("#google").addEventListener("click", goGoogle);
document.querySelector("#ddg").addEventListener("click", goDdg);
document.querySelector("#ahmia").addEventListener("click", goAhmia);
document.querySelector("#reddit").addEventListener("click", goReddit);
document.querySelector("#yt").addEventListener("click", goYt);
document.querySelector("#git").addEventListener("click", goGit);
/* chrome.js — shared app chrome for VDOverdue.
   Builds the top bar, nav tabs, and footer. Every page calls chromeInit(tabId).
   Chrome 80 compatible: no ?. / ?? / arrow / template literals. */

function chromeInit(activeTab) {
	var body = document.body;

	// --- Top bar ---
	var top = document.createElement("div");
	top.id = "appTopBar";
	top.innerHTML =
		'<div id="appWordmark"><span class="wm-emoji" aria-hidden="true">\uD83D\uDCDA</span>VDOverdue<span class="wm-emoji" aria-hidden="true">\uD83D\uDCD6</span></div>' +
		'<a id="appTopIcon" href="./settings.html" title="Settings"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5m0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78zM5.048 3.967l-.087.065zm-.431.355A4.98 4.98 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8zm.344 7.646.087.065z"/></svg></a>';
	body.insertBefore(top, body.firstChild);

	// --- Nav bar ---
	var nav = document.createElement("div");
	nav.id = "appNavBar";

	var tabs = [
		{ id: "navWebcam", label: "Webcam", href: "./index.html",
			svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"/></svg>' },
		{ id: "navScreenShare", label: "Screen share", href: "./share.html",
			svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/><path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5zM1 5V2h14v3zm0 1h14v8H1z"/></svg>' },
		{ id: "navSpeedTest", label: "Speed test", href: "./speedtest.html",
			svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2m-4.268.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.39.39 0 0 0-.029-.518z"/><path fill-rule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.95 11.95 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0"/></svg>' },
	];

	var html = '<span id="navViewSwitch">';
	for (var i = 0; i < tabs.length; i++) {
		var cls = tabs[i].id === activeTab ? ' class="active"' : "";
		html += '<button id="' + tabs[i].id + '" type="button"' + cls + ">" +
			tabs[i].svg + "<span>" + tabs[i].label + "</span></button>";
	}
	html += "</span>";
	nav.innerHTML = html;
	body.insertBefore(nav, top.nextSibling);

	// --- Tab routing: same-tab navigation ---
	for (var j = 0; j < tabs.length; j++) {
		(function (tab) {
			if (tab.id === activeTab) {
				return;
			}
			document.getElementById(tab.id).onclick = function () {
				window.location.href = tab.href;
			};
		})(tabs[j]);
	}

	// --- Footer ---
	var footer = document.createElement("div");
	footer.id = "appFooter";
	footer.innerHTML =
		'Based on <a href="https://vdo.ninja" target="_blank" rel="noopener">VDO.Ninja</a> ' +
		'version 31.2, by Steve Seguin' +
		' &middot; ' +
		'<a href="https://docs.vdo.ninja/help/privacy-and-security-details/vdo.ninja-terms-of-service" target="_blank" rel="noopener">Terms of Service</a>' +
		' &middot; ' +
		'<a href="https://docs.vdo.ninja/help/privacy-and-security-details/vdo.ninja-privacy-policy" target="_blank" rel="noopener">Privacy Policy</a>' +
		' &middot; ' +
		'<a href="https://docs.vdo.ninja/help/privacy-and-security-details/abuse-and-child-safety" target="_blank" rel="noopener">Report Abuse</a>';
	body.appendChild(footer);
}

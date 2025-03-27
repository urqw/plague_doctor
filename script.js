/**
 * Copyright (C) 2018 Nikita Tseykovets <tseikovets@rambler.ru>
 * SPDX-License-Identifier: GPL-2.0-or-later
 */

var target = document.getElementById('buttons');

// Implementing hotkeys for buttons
document.addEventListener('keydown', function(event) {
	var number = event.key;
	if(number== 0) {
		number = 10;
	}
	if(number >= 1 && number <= 10) {
		var buttons = target.getElementsByTagName('button');
		if(number <= buttons.length) {
			buttons[number - 1].click();
		}
	}
});

// Automatic number assignment to buttons
var observer = new MutationObserver(function(mutations) {
	var buttons = target.getElementsByTagName('button'), n = buttons.length;
	if(n > 0) {
		for(var i = 0; i < n; i++) {
			buttons[i].innerHTML = '<b>'+(i+1)+':</b> '+buttons[i].innerHTML;
		}
	}
});
var config = { childList: true }
observer.observe(target, config);
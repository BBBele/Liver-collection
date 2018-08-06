/*
 * @Author: zy9@github.com/zy410419243
 * @Date: 2018-07-04 20:31:22
 * @Last Modified by: zy9
 * @Last Modified time: 2018-08-06 21:50:23
 */
// 创建一个用于粘贴battle id的文本框
const initInputForBattle = () => {
	let input = document.getElementById('battle_input');

	if(!input) {
		input = document.createElement('input');

		input.id = 'battle_input';
		input.style.width = '0px';
		input.style.height = '0px';

		document.body.appendChild(input);
	}
};

/**
 * 点击icon时，获得剪切板内容，像是battle id的话，
 * 去请求battle room地址
 */
const getBattleRoomHref = (isListenBoard) => {
	if(isListenBoard) {
		// handleBoardPost();
	} else {
		chrome.browserAction.onClicked.addListener(() => {
			handleBoardPost();
		});
	}
};

const handleBoardPost = () => {
	chrome.tabs.query({ active: true }, tabs => {
		// 只有打开的gbf窗口才能进房
		let tabId;

		for(let tab of tabs) {
			const { id, url } = tab;

			if(tab.url.includes('game')) {
				tabId = id;

				break;
			}
		}

		if(!tabId) {
			return;
		}

		const port = chrome.tabs.connect(tabId, { name: 'popup_to_content' });

		let input = document.getElementById('battle_input');

		input.focus();
		input.value = '';

		/**
         * chrome不能直接获得剪切板内容，只能先粘贴到input中，再获得input的值
         *
         * https://stackoverflow.com/questions/25622359/clipboard-copy-paste-on-content-script-chrome-extension
        */
		document.execCommand('paste');

		let value = input.value.trim();

		let reg = /^[A-Za-z0-9]+$/gi;

		if(reg.test(value) && value.length == 8) {
			port.postMessage({ message: 'battle_key_check', battleId: value });
		} else {
			console.log('check failed');
		}
	});
};

// 判断是否出现hl，比如刷星本的时候这个就有用了
const handleHasHL = () => {
	chrome.tabs.query({ active: true }, tabs => {
		// 只有打开的gbf窗口才能进房
		let tabId;

		for(let tab of tabs) {
			const { id, url } = tab;

			if(tab.url.includes('game')) {
				tabId = id;

				break;
			}
		}

		if(!tabId) {
			return;
		}

		const port = chrome.tabs.connect(tabId, { name: 'popup_to_content' });

		port.postMessage({ message: 'check_has_hl' });
	});
};

export { initInputForBattle, getBattleRoomHref, handleBoardPost, handleHasHL };
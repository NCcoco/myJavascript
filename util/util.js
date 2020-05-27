/** 根据范围生成随机数 */
function selectFrom(min, max) {
	let choices = max - min;
	return Math.floor(Math.random() * choices + min);
}

/** 绑定onload事件 */
function addLoadEvent(func) {
	let old = window.onload;
	if(typeof old === 'function') {
		window.onload = function() {
			old();
			func();
	   }
	} else {
		window.onload = func;
	}
}

/** 将元素插入指定元素的后面 */
function insertAfter(newElement, targetElement) {
	let parent = targetElement.parent;
	if(parent.lastNode === targetElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}

/** 通过URL获取查询参数对象 */
function getQueryStringArgs() {
	let qs = window.location.search.length > 0 ? window.location.search.substring(1) : "";
	
	let args = {};
	
	let items = qs.length ? qs.split("&") : [];
	
	for(let i = 0; i < items.length; i ++) {
		let item = items[i].split("=");
		let name = decodeURIComponent( item[0]);
		let value = decodeURIComponent( item[1]);
		args[name] = value;
	}
	return args;
}

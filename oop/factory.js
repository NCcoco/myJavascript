/** 工厂模式创建对象 */
function createFactory() {
	let o = {};
	o.name = "coco";
	o.age = 25;
	o.sayHi = function() {
		console.info(this.name + "你好");
	}
	return o;
}

// use
let a = createFactory();
let b = createFactory();

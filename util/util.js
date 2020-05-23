/** 根据范围生成随机数 */
function selectFrom(min, max) {
	let choices = max - min;
	return Math.floor(Math.random() * choices + min);
}

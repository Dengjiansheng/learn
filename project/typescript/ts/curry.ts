function createCurry() {
	var args = Array.prototype.slice.call(arguments);
	var func = args.shift();
	var funcL = func.length;
	return function () {
		var _args = Array.prototype.slice.call(arguments);
		_args = args.concat(_args);
		if (_args.length < funcL) {
			return createCurry.apply(this, [func].concat(_args));
		}
		return func.apply(this, _args);
	}
}
function _map (func, array) {
	return array.map(func);
}
var _getNewArray = createCurry(_map);
var getNewArray = _getNewArray(function (item) {
    return item * 100 + '%';
});
getNewArray([1,2,3,4])
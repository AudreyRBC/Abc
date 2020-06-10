export const getRandomIntInclusive = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

export function closest(el, selector, stopSelector) {
	var retval = null;
	while (el) {
		if (el.matches(selector)) {
			retval = el;
			break
		} else if (stopSelector && el.matches(stopSelector)) {
			break
		}
		el = el.parentElement;
	}
	return retval;
}



if (!Element.prototype.matches) {
	Element.prototype.matches =
		Element.prototype.matchesSelector ||
		Element.prototype.mozMatchesSelector ||
		Element.prototype.msMatchesSelector ||
		Element.prototype.oMatchesSelector ||
		Element.prototype.webkitMatchesSelector ||
		function (s) {
			var matches = (this.document || this.ownerDocument).querySelectorAll(s),
				i = matches.length;
			while (--i >= 0 && matches.item(i) !== this) {}
			return i > -1;
		};
}

Math.hypot = function (x, y) {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=896264#c28
    var max = 0;
    var s = 0;
    for (var i = 0; i < arguments.length; i += 1) {
      var arg = Math.abs(Number(arguments[i]));
      if (arg > max) {
        s *= (max / arg) * (max / arg);
        max = arg;
      }
      s += arg === 0 && max === 0 ? 0 : (arg / max) * (arg / max);
    }
    return max === 1 / 0 ? 1 / 0 : max * Math.sqrt(s);
  };
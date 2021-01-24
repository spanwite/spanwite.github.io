/// <reference path="../node_modules/@types/jquery/index.d.ts" />
var __extends =
	(this && this.__extends) ||
	(function () {
		var extendStatics = function (d, b) {
			extendStatics =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function (d, b) {
						d.__proto__ = b;
					}) ||
				function (d, b) {
					for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
				};
			return extendStatics(d, b);
		};
		return function (d, b) {
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
		};
	})();
var Base = /** @class */ (function () {
	function Base() {}
	Base.prototype.append = function (val) {
		this.set(this.get() + val);
	};
	return Base;
})();
var question = new /** @class */ ((function (_super) {
	__extends(Question, _super);
	function Question() {
		var _this = (_super !== null && _super.apply(this, arguments)) || this;
		_this.value = '';
		return _this;
	}
	Question.prototype.set = function (newVal) {
		this.value = newVal;
	};
	Question.prototype.get = function () {
		return this.value;
	};
	return Question;
})(Base))();
var result = new /** @class */ ((function (_super) {
	__extends(Result, _super);
	function Result() {
		var _this = (_super !== null && _super.apply(this, arguments)) || this;
		_this.$element = $('#result');
		return _this;
	}
	Result.prototype.set = function (newVal) {
		this.$element.html(newVal);
	};
	Result.prototype.get = function () {
		return this.$element.html();
	};
	return Result;
})(Base))();
var KEYBOARD_SYMBOLS = {
	0: true,
	1: true,
	2: true,
	3: true,
	4: true,
	5: true,
	6: true,
	7: true,
	8: true,
	9: true,
	'.': true,
	',': '.',
	'/': '÷',
	'*': '×',
	'+': true,
	'-': true,
	'%': true,
	Backspace: 'ce',
	Escape: 'c',
	Enter: '=',
	' ': 'toggle',
};
var ACTION_SYMBOLS = {
	'+': true,
	'-': true,
	'%': true,
	'×': true,
	'÷': true,
};
var ACTION_MAPPER = {
	'÷': '/',
	'×': '*',
};
function doAction(action) {
	switch (action) {
		case 'toggle':
			{
				var $parent = $('.buttons_other').closest('.buttons_other');
				$parent.toggleClass('_visible');
				if ($parent.hasClass('_visible')) {
					$parent.find('button:not(._toggle)').stop(true, true).fadeIn(500);
				} else {
					$parent.find('button:not(._toggle)').stop(true, true).fadeOut(500);
				}
			}
			break;
		case 'c':
			result.set('');
			question.set('');
			break;
		case 'ce':
			{
				var val = result.get().replace(/ /g, '').slice(-1);
				if (ACTION_SYMBOLS[val] === true) {
					result.set(result.get().slice(0, -3));
				} else {
					result.set(result.get().slice(0, -1));
				}
				question.set(question.get().slice(0, -1));
			}
			break;
		case '÷':
		case '×':
		case '-':
		case '+':
		case '%':
			{
				var lastChar = result.get().replace(/ /g, '').slice(-1);
				var questionChar = ACTION_MAPPER[action] ? ACTION_MAPPER[action] : action;
				if (ACTION_SYMBOLS[lastChar] === true) {
					result.set(result.get().slice(0, -3));
					question.set(question.get().slice(0, -1));
				}
				result.append(' ' + action + ' ');
				question.append(questionChar);
			}
			break;
		case '0':
		case '1':
		case '2':
		case '3':
		case '4':
		case '5':
		case '6':
		case '7':
		case '8':
		case '9':
		case '(':
		case ')':
			{
				result.append(action);
				question.append(action);
			}
			break;
		case '.':
			{
				var lastChar = question.get().slice(-1);
				var num = question
					.get()
					.replace(/ /g, '')
					.replace(/.*[-*+/%]([^-*+/%])/, '$1');
				if (ACTION_SYMBOLS[lastChar] !== true && !num.includes('.') && lastChar) {
					result.append('.');
					question.append('.');
				}
			}
			break;
		case '=':
			{
				result.set(eval(question.get()));
				question.set(result.get());
			}
			break;
	}
}
$('[data-action]').on('click', function () {
	var action = $(this).attr('data-action');
	doAction(action !== null && action !== void 0 ? action : '');
});
$(document).on('keydown', function (event) {
	var _a, _b;
	var key =
		(_b = (_a = event.originalEvent) === null || _a === void 0 ? void 0 : _a.key) !== null && _b !== void 0
			? _b
			: '';
	var actionKey = KEYBOARD_SYMBOLS[key];
	if (actionKey) {
		event.preventDefault();
		doAction(typeof actionKey === 'string' ? actionKey : key);
	}
});

!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["react","prop-types"],e):"object"==typeof exports?exports.ReactDraggable=e(require("react"),require("prop-types")):n.ReactDraggable=e(n.react,n["prop-types"])}(window,function(__WEBPACK_EXTERNAL_MODULE__2__,__WEBPACK_EXTERNAL_MODULE__3__){return function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _Draggable = __webpack_require__(1);\n\nvar _Draggable2 = _interopRequireDefault(_Draggable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Draggable2.default;\n\n//# sourceURL=webpack://ReactDraggable/./assets/js/src/main.js?')},function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(3);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Draggable = function (_React$Component) {\n  _inherits(Draggable, _React$Component);\n\n  function Draggable(props) {\n    _classCallCheck(this, Draggable);\n\n    // if the component drag should take place\n    var _this = _possibleConstructorReturn(this, (Draggable.__proto__ || Object.getPrototypeOf(Draggable)).call(this, props));\n\n    _this.doDrag = true;\n\n    var _this$props = _this.props,\n        cssPosition = _this$props.cssPosition,\n        position = _this$props.position;\n\n    // initial state object\n\n    _this.state = {\n      pos: position || { x: 0, y: 0 },\n      dragging: false,\n      elementStyle: {\n        position: cssPosition || 'absolute'\n      },\n      scrollLocked: false,\n      dragLocked: false,\n      dragStartInputPos: {\n        x: 0,\n        y: 0\n      },\n      dragStartElementPos: {\n        x: 0,\n        y: 0\n      }\n    };\n\n    // bind functions to component\n    _this.renderChild = _this.renderChild.bind(_this);\n    _this.setPosition = _this.setPosition.bind(_this);\n    _this.positionContent = _this.positionContent.bind(_this);\n    _this.onDragStart = _this.onDragStart.bind(_this);\n    _this.onDrag = _this.onDrag.bind(_this);\n    _this.onDragStop = _this.onDragStop.bind(_this);\n    _this.onDragLeave = _this.onDragLeave.bind(_this);\n    return _this;\n  }\n\n  /**\r\n   * Called before component mounts to DOM\r\n   * @returns {undefined} undefined\r\n   */\n\n\n  _createClass(Draggable, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      var position = this.props.position;\n\n\n      if (position) {\n        this.positionContent();\n      }\n    }\n\n    /**\r\n     * Called after component mounts to DOM\r\n     * @returns {undefined} undefined\r\n     */\n\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      document.addEventListener('mousemove', this.onDrag);\n      document.addEventListener('touchmove', this.onDrag);\n      document.addEventListener('mouseup', this.onDragStop);\n      document.addEventListener('touchend', this.onDragStop);\n    }\n\n    /**\r\n     * Called when component updates\r\n     * @returns {undefined} undefined\r\n     */\n\n  }, {\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate(prevProps) {\n      var position = this.props.position;\n\n\n      if (position && (!prevProps.position || prevProps.position && (position.x !== prevProps.position.x || position.y !== prevProps.position.y))) {\n        this.setPosition({ x: position.x, y: position.y });\n      } else if (position && prevProps.position && position.x === prevProps.position.x && position.y === prevProps.pos.y && (position.x !== this.state.pos.x || position.y !== this.state.pos.y)) {\n        this.setPosition({ x: position.x, y: position.y });\n      }\n    }\n\n    /**\r\n     * Called before component is removed from the DOM\r\n     * @returns {undefined} undefined\r\n     */\n\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      document.removeEventListener('mousemove', this.onDrag);\n      document.removeEventListener('touchmove', this.onDrag);\n      document.removeEventListener('mouseup', this.onDragStop);\n      document.removeEventListener('touchend', this.onDragStop);\n    }\n\n    /**\r\n     * Renders component\r\n     * @returns {Object} React element\r\n     */\n\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          className = _props.className,\n          classNameWhileDragging = _props.classNameWhileDragging;\n\n      var classNameProp = className || '';\n      var classNameWhileDraggingProp = classNameWhileDragging || '';\n      var newClassName = 'component-draggable ' + classNameProp + ' ' + classNameWhileDraggingProp;\n      var children = this.renderChild();\n\n      return _react2.default.createElement(\n        'div',\n        {\n          className: newClassName,\n          onTouchStart: this.onDragStart,\n          onTouchCancel: this.onDragLeave,\n          onMouseDown: this.onDragStart,\n          onDragLeave: this.onDragLeave,\n          role: 'draggableelement'\n        },\n        children\n      );\n    }\n\n    /**\r\n     * Renders the child element\r\n     * @returns {Object} React element\r\n     */\n\n  }, {\n    key: 'renderChild',\n    value: function renderChild() {\n      var inst = this;\n      var _props2 = this.props,\n          children = _props2.children,\n          style = _props2.style;\n      var elementStyle = inst.state.elementStyle;\n\n\n      return _react2.default.Children.map(children, function (child) {\n        var newStyle = {};\n        var childStyle = {};\n        var newElementStyle = {};\n\n        if (child.props && child.props.style) {\n          childStyle = child.props.style;\n        }\n\n        if (inst.state && elementStyle) {\n          newElementStyle = elementStyle;\n        }\n\n        newStyle = Object.assign(childStyle, newElementStyle, style);\n\n        return _react2.default.cloneElement(child, {\n          style: newStyle,\n          ref: 'draggableChild'\n        });\n      });\n    }\n\n    /**\r\n     * Positions the draggable element\r\n     * @param {Object} pos - An object with x and y position values\r\n     * @returns {undefined} undefined\r\n     */\n\n  }, {\n    key: 'setPosition',\n    value: function setPosition(pos) {\n      this.setState({\n        pos: pos\n      }, this.positionContent);\n    }\n\n    /**\r\n     * If the 'touchScrollLock' prop is set to true, and dragging is locked\r\n     * to the 'x' or 'y' axis, and the user is dragging\r\n     * (or scrolling on mobile) on the opposite axis, stop any dragging.\r\n     * This is so the content doesn't move when a user is scrolling on a\r\n     * mobile device.\r\n     * @param {Number} pageX - The x position of mouse or touch event\r\n     * @param {Number} pageY - The y position of mouse or touch event\r\n     * @returns {undefined} undefined\r\n     */\n\n  }, {\n    key: 'setScrollLock',\n    value: function setScrollLock(pageX, pageY) {\n      var _props3 = this.props,\n          touchScrollLock = _props3.touchScrollLock,\n          lock = _props3.lock;\n      var _state = this.state,\n          dragLocked = _state.dragLocked,\n          pos = _state.pos,\n          scrollLocked = _state.scrollLocked;\n\n\n      var difX = 0;\n      var difY = 0;\n\n      if (touchScrollLock && (lock === 'x' || lock === 'y')) {\n        difY = pageY - pos.y;\n        difX = pageX - pos.x;\n\n        if (difY < 0) {\n          difY *= -1;\n        }\n\n        if (difX < 0) {\n          difX *= -1;\n        }\n\n        if (lock === 'x') {\n          // if the content is locked to dragging horizontally\n          if (difX > difY) {\n            // if the user is intending to swipe horizontally\n            if (difX > 10 && !scrollLocked) {\n              this.doDrag = true;\n              this.setState({ dragLocked: true });\n            }\n          } else if (!dragLocked) {\n            // if the user is intending to swipe vertically\n            this.setState({ scrollLocked: true });\n          }\n        } else if (difY > difX) {\n          // if the content is locked to dragging vertically\n          // if the user is intending to swipe vertically\n          if (difY > 10 && !scrollLocked) {\n            this.doDrag = true;\n            this.setState({ dragLocked: true });\n          }\n        } else if (!dragLocked) {\n          this.setState({ scrollLocked: true });\n        }\n      }\n    }\n\n    /**\r\n     * Gets the updated position values\r\n     * @param {Number} pageX - The x position of mouse or touch event\r\n     * @param {Number} pageY - The y position of mouse or touch event\r\n     * @returns {Object} The x and y coordinates to move the content to\r\n     */\n\n  }, {\n    key: 'getNewPosition',\n    value: function getNewPosition(pageX, pageY) {\n      var _props4 = this.props,\n          bounds = _props4.bounds,\n          lock = _props4.lock,\n          zoom = _props4.zoom;\n      var _state2 = this.state,\n          dragStartElementPos = _state2.dragStartElementPos,\n          dragStartInputPos = _state2.dragStartInputPos;\n\n      var newPos = {\n        x: dragStartElementPos.x + 1 / zoom * (pageX - dragStartInputPos.x),\n        y: dragStartElementPos.y + 1 / zoom * (pageY - dragStartInputPos.y)\n      };\n\n      if (bounds) {\n        // if the bounds were supplied, don't let the content move outside\n        // of them\n        var newBounds = bounds;\n\n        if (newPos.x < newBounds.x1) {\n          newPos.x = newBounds.x1;\n        }\n\n        if (newPos.y < newBounds.y1) {\n          newPos.y = newBounds.y1;\n        }\n\n        if (newPos.x > newBounds.x2) {\n          newPos.x = newBounds.x2;\n        }\n\n        if (newPos.y > newBounds.y2) {\n          newPos.y = newBounds.y3;\n        }\n      }\n\n      if (lock === 'x') {\n        newPos.y = dragStartElementPos.y;\n      }\n\n      if (lock === 'y') {\n        newPos.x = dragStartElementPos.x;\n      }\n\n      return newPos;\n    }\n\n    /**\r\n     * Positions the draggable element\r\n     * @returns {undefined} undefined\r\n     */\n\n  }, {\n    key: 'positionContent',\n    value: function positionContent() {\n      var _this2 = this;\n\n      var _state3 = this.state,\n          elementStyle = _state3.elementStyle,\n          pos = _state3.pos;\n\n      var xPos = pos.x + 'px';\n      var yPos = pos.y + 'px';\n      var positionTransformString = 'translate3d(' + xPos + ', ' + yPos + ', 0px)';\n      var transformStyle = {\n        transform: positionTransformString\n      };\n      var newStyle = Object.assign(elementStyle, transformStyle);\n\n      this.setState({\n        elementStyle: newStyle\n      }, function () {\n        // allow the component to be dragged again because all values have been\n        // updated through the React lifecycle\n        _this2.doDrag = true;\n      });\n    }\n\n    /**\r\n     * Called when the user's mouse is pressed\r\n     * @param {Event} e A mousedown event\r\n     * @returns {undefined} undefined\r\n     */\n\n  }, {\n    key: 'onDragStart',\n    value: function onDragStart(e) {\n      var _props5 = this.props,\n          disabled = _props5.disabled,\n          dragStartCallback = _props5.dragStartCallback,\n          preventDefaultEvents = _props5.preventDefaultEvents;\n      var pos = this.state.pos;\n\n      this.mouseDownOnElement = true;\n\n      if (!disabled) {\n        var pageX = e.clientX;\n        var pageY = e.clientY;\n\n        if (e.type !== 'mousedown') {\n          pageX = e.changedTouches[0].clientX;\n          pageY = e.changedTouches[0].clientY;\n        }\n\n        this.mouseDownWhileDisabled = false;\n\n        this.setState({\n          scrollLocked: false,\n          dragStartInputPos: {\n            x: pageX,\n            y: pageY\n          },\n          dragStartElementPos: {\n            x: pos.x,\n            y: pos.y\n          }\n        });\n\n        if (dragStartCallback) {\n          dragStartCallback(pos, e.target);\n        }\n\n        if (preventDefaultEvents) {\n          e.stopPropagation();\n          e.preventDefault();\n        }\n      } else {\n        this.mouseDownWhileDisabled = true;\n      }\n    }\n\n    /**\r\n     * Called when the user's mouse is moved\r\n     * @param {Event} e A mousemove event\r\n     * @returns {undefined} undefined\r\n     */\n\n  }, {\n    key: 'onDrag',\n    value: function onDrag(e) {\n      var _this3 = this;\n\n      var _props6 = this.props,\n          disabled = _props6.disabled,\n          dragCallback = _props6.dragCallback,\n          preventDefaultEvents = _props6.preventDefaultEvents;\n      var scrollLocked = this.state.scrollLocked;\n\n\n      if (this.mouseDownOnElement && !disabled) {\n        var pageX = e.clientX;\n        var pageY = e.clientY;\n\n        if (e.type !== 'mousemove') {\n          pageX = e.changedTouches[0].clientX;\n          pageY = e.changedTouches[0].clientY;\n        }\n\n        this.setScrollLock(pageX, pageY);\n\n        if (this.doDrag && !scrollLocked) {\n          this.doDrag = false;\n\n          var newPos = this.getNewPosition(pageX, pageY);\n\n          this.setState({\n            dragging: true,\n            pos: newPos\n          }, function () {\n            _this3.positionContent();\n          });\n\n          if (dragCallback) {\n            dragCallback(newPos, e.target);\n          }\n        }\n      }\n\n      if (preventDefaultEvents) {\n        e.stopPropagation();\n        e.preventDefault();\n      }\n    }\n\n    /**\r\n     * Called when the user's mouse is released\r\n     * @param {Event} e A mouseup event\r\n     * @returns {undefined} undefined\r\n     */\n\n  }, {\n    key: 'onDragStop',\n    value: function onDragStop(e) {\n      var _props7 = this.props,\n          disabled = _props7.disabled,\n          dragStopCallback = _props7.dragStopCallback,\n          preventDefaultEvents = _props7.preventDefaultEvents;\n      var _state4 = this.state,\n          pos = _state4.pos,\n          scrollLocked = _state4.scrollLocked;\n\n\n      if (this.mouseDownOnElement && !disabled && !this.mouseDownWhileDisabled) {\n        if (dragStopCallback && !scrollLocked) {\n          dragStopCallback({\n            x: pos.x,\n            y: pos.y\n          }, e.target);\n        }\n\n        this.setState({\n          dragging: false,\n          scrollLocked: false,\n          dragLocked: false\n        });\n\n        if (preventDefaultEvents) {\n          e.stopPropagation();\n          e.preventDefault();\n        }\n      }\n\n      this.mouseDownOnElement = false;\n    }\n\n    /**\r\n     * Called when the user is dragging but releases the mouse\r\n     * outside of the draggable component\r\n     * @returns {undefined} undefined\r\n     */\n\n  }, {\n    key: 'onDragLeave',\n    value: function onDragLeave() {\n      var dragLeaveCallback = this.props.dragLeaveCallback;\n      var dragging = this.state.dragging;\n\n\n      if (dragging) {\n        this.setState({\n          scrollLocked: false,\n          dragLocked: false\n        });\n\n        if (dragLeaveCallback) {\n          dragLeaveCallback();\n        }\n      }\n    }\n  }]);\n\n  return Draggable;\n}(_react2.default.Component);\n\nDraggable.defaultProps = {\n  bounds: null,\n  className: null,\n  cssPosition: null,\n  disabled: false,\n  dragCallback: null,\n  dragLeaveCallback: null,\n  dragStartCallback: null,\n  dragStopCallback: null,\n  lock: null,\n  position: null,\n  preventDefaultEvents: false,\n  style: null,\n  touchScrollLock: false,\n  zoom: 1\n};\n\n/**\r\n * Expected propTypes\r\n * @prop {Object} bounds - An array of coordinates, forming a square, that the\r\n * user cannot drag the component outside of\r\n * @prop {Object} children - Child React elements\r\n * @prop {String} className - A string of additional classnames to add\r\n * to the element\r\n * @prop {String} classNameWhileDragging - A string of additional classnames to add\r\n * to the element while it's being dragged\r\n * @prop {String} cssPosition - The css positioning for for the element\r\n * (i.e. 'absolute' or 'fixed', defaults to 'absolute')\r\n * @prop {Boolean} disabled - If the component is disabled\r\n * @prop {Function} dragCallback - A callback function while the user is\r\n * dragging\r\n * @prop {Function} dragStartCallback - A callback function for when the user\r\n * stops dragging\r\n * @prop {Function} dragStopCallback - A callback function for when the user\r\n * stops dragging\r\n * @prop {Function} dragLeaveCallback - A callback function for when the user\r\n * is dragging and the mouse/touch leaves the draggable component\r\n * @prop {String} lock - An axis to lock element to when dragging, either\r\n * 'x' or 'y'\r\n * @prop {Boolean} preventDefaultEvents - Whether to prevent default\r\n * mouse/touch events\r\n * @prop {Object} style - A style object\r\n * @prop {String} touchScrollLock - If set to true, prevents the content from\r\n * being dragged if the user is scrolling in the opposite direction on a touch\r\n * device\r\n * @prop {Number} zoom - Used to add support for page zoom when dragging. Default is 1.\r\n */\nDraggable.propTypes = {\n  bounds: _propTypes2.default.shape({\n    x1: _propTypes2.default.number.isRequired,\n    y1: _propTypes2.default.number.isRequired,\n    x2: _propTypes2.default.number.isRequired,\n    y2: _propTypes2.default.number.isRequired\n  }),\n  children: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]).isRequired,\n  className: _propTypes2.default.string,\n  cssPosition: _propTypes2.default.string,\n  disabled: _propTypes2.default.bool,\n  dragCallback: _propTypes2.default.func,\n  dragLeaveCallback: _propTypes2.default.func,\n  dragStartCallback: _propTypes2.default.func,\n  dragStopCallback: _propTypes2.default.func,\n  lock: _propTypes2.default.string,\n  position: _propTypes2.default.object,\n  preventDefaultEvents: _propTypes2.default.bool,\n  style: _propTypes2.default.object,\n  touchScrollLock: _propTypes2.default.bool,\n  zoom: _propTypes2.default.number\n};\n\nexports.default = Draggable;\n\n//# sourceURL=webpack://ReactDraggable/./assets/js/src/components/Draggable.jsx?")},function(module,exports){eval("module.exports = __WEBPACK_EXTERNAL_MODULE__2__;\n\n//# sourceURL=webpack://ReactDraggable/external_%22react%22?")},function(module,exports){eval("module.exports = __WEBPACK_EXTERNAL_MODULE__3__;\n\n//# sourceURL=webpack://ReactDraggable/external_%22prop-types%22?")}])});
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { jsx as ___EmotionJSX } from "@emotion/core";

/**
 * NOTE: 'GlobalNav' is the layout primitive, which will be wrapped by the more
 * opinionated 'GlobalNavigation' component.
 */
import React, { Component, Fragment } from 'react';
import { NavigationAnalyticsContext } from '@atlaskit/analytics-namespaced-context';
import throttle from 'lodash.throttle';
import { FirstPrimaryItemWrapper, PrimaryItemsList, SecondaryItemsList } from './primitives';
var THROTTLE_INTERVAL = 100;

var GlobalNavigation =
/*#__PURE__*/
function (_Component) {
  _inherits(GlobalNavigation, _Component);

  function GlobalNavigation() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, GlobalNavigation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GlobalNavigation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "throttledListener", throttle(_this.listener, THROTTLE_INTERVAL));

    _defineProperty(_assertThisInitialized(_this), "vh", 0);

    return _this;
  }

  _createClass(GlobalNavigation, [{
    key: "listener",
    value: function listener() {
      this.vh = window.innerHeight * 0.01; // $FlowFixMe - document.documentElement will be HTMLElement, not null

      document.documentElement.style.setProperty('--vh', "".concat(this.vh, "px"));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.listener();
      window.addEventListener('resize', this.throttledListener);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.throttledListener);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          ItemComponent = _this$props.itemComponent,
          primaryItems = _this$props.primaryItems,
          secondaryItems = _this$props.secondaryItems,
          theme = _this$props.theme;
      var wrapperStyles = theme.mode.globalNav({
        topOffset: theme.topOffset
      }); // Fix for mobile

      wrapperStyles = _objectSpread({}, wrapperStyles, {
        height: "calc((var(--vh, 1vh) * 100) - ".concat(theme.topOffset, "px)")
      });
      return ___EmotionJSX(NavigationAnalyticsContext, {
        data: {
          attributes: {
            navigationLayer: 'global'
          },
          componentName: 'globalNav'
        }
      }, ___EmotionJSX("div", {
        css: wrapperStyles
      }, ___EmotionJSX(PrimaryItemsList, null, ___EmotionJSX(NavigationAnalyticsContext, {
        data: {
          attributes: {
            navigationIconGrouping: 'primary'
          }
        }
      }, ___EmotionJSX(Fragment, null, primaryItems.map(function (props, index) {
        // Render the first item with a margin beneath it and a large icon
        if (!index) {
          var Icon = props.icon,
              rest = _objectWithoutProperties(props, ["icon"]);

          return ___EmotionJSX(FirstPrimaryItemWrapper, {
            key: props.id
          }, ___EmotionJSX(ItemComponent, _extends({}, rest, {
            icon: function icon(provided) {
              return ___EmotionJSX(Icon, _extends({}, provided, {
                size: "large"
              }));
            },
            size: "large",
            index: index
          })));
        }

        return ___EmotionJSX(ItemComponent, _extends({}, props, {
          key: props.id,
          size: "small",
          index: index
        }));
      })))), ___EmotionJSX(SecondaryItemsList, null, ___EmotionJSX(NavigationAnalyticsContext, {
        data: {
          attributes: {
            navigationIconGrouping: 'secondary'
          }
        }
      }, ___EmotionJSX(Fragment, null, secondaryItems.map(function (props, index) {
        return ___EmotionJSX(ItemComponent, _extends({}, props, {
          key: props.id,
          size: "small",
          index: index
        }));
      }))))));
    }
  }]);

  return GlobalNavigation;
}(Component);

export { GlobalNavigation as default };
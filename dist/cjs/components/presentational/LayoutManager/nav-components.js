"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComposedGlobalNavigation = exports.ComposedContainerNavigation = void 0;

var _core = require("@emotion/core");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _css2 = _interopRequireDefault(require("@emotion/css"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _reactFastCompare = _interopRequireDefault(require("react-fast-compare"));

var _colors = require("@atlaskit/theme/colors");

var _primitives = require("../ContentNavigation/primitives");

var _ContentNavigation = _interopRequireDefault(require("../ContentNavigation"));

var _ResizeTransition = require("../ResizeTransition");

var _primitives2 = require("../../../common/primitives");

var _theme2 = require("../../../theme");

var _constants = require("../../../common/constants");

var ComposedContainerNavigation =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ComposedContainerNavigation, _Component);

  function ComposedContainerNavigation() {
    (0, _classCallCheck2.default)(this, ComposedContainerNavigation);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ComposedContainerNavigation).apply(this, arguments));
  }

  (0, _createClass2.default)(ComposedContainerNavigation, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var props = this.props;
      return !(0, _reactFastCompare.default)(props, nextProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          containerNavigation = _this$props.containerNavigation,
          datasets = _this$props.datasets,
          EXPERIMENTAL_FLYOUT_ON_HOVER = _this$props.experimental_flyoutOnHover,
          EXPERIMENTAL_HIDE_NAV_VISUALLY_ON_COLLAPSE = _this$props.experimental_hideNavVisuallyOnCollapse,
          productNavigation = _this$props.productNavigation,
          transitionState = _this$props.transitionState,
          transitionStyle = _this$props.transitionStyle,
          isCollapsed = _this$props.isCollapsed,
          isResizing = _this$props.isResizing,
          getNavRef = _this$props.getNavRef,
          expand = _this$props.expand,
          view = _this$props.view;
      var isVisible = transitionState !== 'exited';
      var shouldDisableInteraction = isResizing || (0, _ResizeTransition.isTransitioning)(transitionState);
      var dataset = datasets ? datasets.contextualNavigation : {};
      return (0, _core.jsx)(_primitives.ContentNavigationWrapper, (0, _extends2.default)({
        key: "product-nav-wrapper",
        innerRef: getNavRef,
        disableInteraction: shouldDisableInteraction,
        style: transitionStyle
      }, dataset), (0, _core.jsx)(_ContentNavigation.default, {
        container: containerNavigation,
        isVisible: isVisible,
        key: "product-nav",
        product: productNavigation,
        experimental_hideNavVisuallyOnCollapse: EXPERIMENTAL_HIDE_NAV_VISUALLY_ON_COLLAPSE,
        view: view
      }), isCollapsed && !EXPERIMENTAL_FLYOUT_ON_HOVER ?
      /* eslint-disable jsx-a11y/click-events-have-key-events */
      (0, _core.jsx)("div", {
        "aria-label": "Click to expand the navigation",
        role: "button",
        onClick: expand,
        css:
        /*#__PURE__*/
        (0, _css2.default)({
          cursor: 'pointer',
          height: '100%',
          outline: 0,
          position: 'absolute',
          transition: 'background-color 100ms',
          width: _constants.CONTENT_NAV_WIDTH_COLLAPSED,
          ':hover': {
            backgroundColor: containerNavigation ? _colors.N30 : 'rgba(255, 255, 255, 0.08)'
          },
          ':active': {
            backgroundColor: _colors.N40A
          }
        }, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL0xheW91dE1hbmFnZXIvbmF2LWNvbXBvbmVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUZZIiwiZmlsZSI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL0xheW91dE1hbmFnZXIvbmF2LWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQsIHR5cGUgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkZWVwRXF1YWwgZnJvbSAncmVhY3QtZmFzdC1jb21wYXJlJztcbmltcG9ydCB7IE4zMCwgTjQwQSB9IGZyb20gJ0BhdGxhc2tpdC90aGVtZS9jb2xvcnMnO1xuXG5pbXBvcnQgeyBDb250ZW50TmF2aWdhdGlvbldyYXBwZXIgfSBmcm9tICcuLi9Db250ZW50TmF2aWdhdGlvbi9wcmltaXRpdmVzJztcbmltcG9ydCBDb250ZW50TmF2aWdhdGlvbiBmcm9tICcuLi9Db250ZW50TmF2aWdhdGlvbic7XG5pbXBvcnQgeyBpc1RyYW5zaXRpb25pbmcsIHR5cGUgVHJhbnNpdGlvblN0YXRlIH0gZnJvbSAnLi4vUmVzaXplVHJhbnNpdGlvbic7XG5pbXBvcnQgeyBTaGFkb3cgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vcHJpbWl0aXZlcyc7XG5pbXBvcnQgeyBsaWdodCwgVGhlbWVQcm92aWRlciB9IGZyb20gJy4uLy4uLy4uL3RoZW1lJztcbmltcG9ydCB7XG4gIENPTlRFTlRfTkFWX1dJRFRIX0NPTExBUFNFRCxcbiAgR0xPQkFMX05BVl9XSURUSCxcbn0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50cyc7XG5cbnR5cGUgQ29tcG9zZWRDb250YWluZXJOYXZpZ2F0aW9uUHJvcHMgPSB7XG4gIGNvbnRhaW5lck5hdmlnYXRpb246ID9Db21wb25lbnRUeXBlPHt9PixcbiAgZGF0YXNldHM/OiBPYmplY3QsXG4gIGV4cGVyaW1lbnRhbF9mbHlvdXRPbkhvdmVyOiBib29sZWFuLFxuICBwcm9kdWN0TmF2aWdhdGlvbjogQ29tcG9uZW50VHlwZTx7fT4sXG4gIHRyYW5zaXRpb25TdGF0ZTogVHJhbnNpdGlvblN0YXRlLFxuICB0cmFuc2l0aW9uU3R5bGU6IE9iamVjdCxcbiAgaXNDb2xsYXBzZWQ6IGJvb2xlYW4sXG4gIGlzUmVzaXppbmc6IGJvb2xlYW4sXG4gIGdldE5hdlJlZjogKCkgPT4gdm9pZCxcbiAgZXhwYW5kOiAoKSA9PiB2b2lkLFxuICB2aWV3PzogT2JqZWN0IHwgbnVsbCxcbiAgZXhwZXJpbWVudGFsX2hpZGVOYXZWaXN1YWxseU9uQ29sbGFwc2U6IGJvb2xlYW4sXG59O1xuZXhwb3J0IGNsYXNzIENvbXBvc2VkQ29udGFpbmVyTmF2aWdhdGlvbiBleHRlbmRzIENvbXBvbmVudDxDb21wb3NlZENvbnRhaW5lck5hdmlnYXRpb25Qcm9wcz4ge1xuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzOiBDb21wb3NlZENvbnRhaW5lck5hdmlnYXRpb25Qcm9wcykge1xuICAgIGNvbnN0IHsgcHJvcHMgfSA9IHRoaXM7XG4gICAgcmV0dXJuICFkZWVwRXF1YWwocHJvcHMsIG5leHRQcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY29udGFpbmVyTmF2aWdhdGlvbixcbiAgICAgIGRhdGFzZXRzLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuICAgICAgZXhwZXJpbWVudGFsX2ZseW91dE9uSG92ZXI6IEVYUEVSSU1FTlRBTF9GTFlPVVRfT05fSE9WRVIsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG4gICAgICBleHBlcmltZW50YWxfaGlkZU5hdlZpc3VhbGx5T25Db2xsYXBzZTogRVhQRVJJTUVOVEFMX0hJREVfTkFWX1ZJU1VBTExZX09OX0NPTExBUFNFLFxuICAgICAgcHJvZHVjdE5hdmlnYXRpb24sXG4gICAgICB0cmFuc2l0aW9uU3RhdGUsXG4gICAgICB0cmFuc2l0aW9uU3R5bGUsXG4gICAgICBpc0NvbGxhcHNlZCxcbiAgICAgIGlzUmVzaXppbmcsXG4gICAgICBnZXROYXZSZWYsXG4gICAgICBleHBhbmQsXG4gICAgICB2aWV3LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgaXNWaXNpYmxlID0gdHJhbnNpdGlvblN0YXRlICE9PSAnZXhpdGVkJztcbiAgICBjb25zdCBzaG91bGREaXNhYmxlSW50ZXJhY3Rpb24gPVxuICAgICAgaXNSZXNpemluZyB8fCBpc1RyYW5zaXRpb25pbmcodHJhbnNpdGlvblN0YXRlKTtcblxuICAgIGNvbnN0IGRhdGFzZXQgPSBkYXRhc2V0cyA/IGRhdGFzZXRzLmNvbnRleHR1YWxOYXZpZ2F0aW9uIDoge307XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRlbnROYXZpZ2F0aW9uV3JhcHBlclxuICAgICAgICBrZXk9XCJwcm9kdWN0LW5hdi13cmFwcGVyXCJcbiAgICAgICAgaW5uZXJSZWY9e2dldE5hdlJlZn1cbiAgICAgICAgZGlzYWJsZUludGVyYWN0aW9uPXtzaG91bGREaXNhYmxlSW50ZXJhY3Rpb259XG4gICAgICAgIHN0eWxlPXt0cmFuc2l0aW9uU3R5bGV9XG4gICAgICAgIHsuLi5kYXRhc2V0fVxuICAgICAgPlxuICAgICAgICA8Q29udGVudE5hdmlnYXRpb25cbiAgICAgICAgICBjb250YWluZXI9e2NvbnRhaW5lck5hdmlnYXRpb259XG4gICAgICAgICAgaXNWaXNpYmxlPXtpc1Zpc2libGV9XG4gICAgICAgICAga2V5PVwicHJvZHVjdC1uYXZcIlxuICAgICAgICAgIHByb2R1Y3Q9e3Byb2R1Y3ROYXZpZ2F0aW9ufVxuICAgICAgICAgIGV4cGVyaW1lbnRhbF9oaWRlTmF2VmlzdWFsbHlPbkNvbGxhcHNlPXtcbiAgICAgICAgICAgIEVYUEVSSU1FTlRBTF9ISURFX05BVl9WSVNVQUxMWV9PTl9DT0xMQVBTRVxuICAgICAgICAgIH1cbiAgICAgICAgICB2aWV3PXt2aWV3fVxuICAgICAgICAvPlxuICAgICAgICB7aXNDb2xsYXBzZWQgJiYgIUVYUEVSSU1FTlRBTF9GTFlPVVRfT05fSE9WRVIgPyAoXG4gICAgICAgICAgLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvY2xpY2stZXZlbnRzLWhhdmUta2V5LWV2ZW50cyAqL1xuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbGljayB0byBleHBhbmQgdGhlIG5hdmlnYXRpb25cIlxuICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXtleHBhbmR9XG4gICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICBvdXRsaW5lOiAwLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQtY29sb3IgMTAwbXMnLFxuICAgICAgICAgICAgICB3aWR0aDogQ09OVEVOVF9OQVZfV0lEVEhfQ09MTEFQU0VELFxuXG4gICAgICAgICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb250YWluZXJOYXZpZ2F0aW9uXG4gICAgICAgICAgICAgICAgICA/IE4zMFxuICAgICAgICAgICAgICAgICAgOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICc6YWN0aXZlJzoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogTjQwQSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0YWJJbmRleD17LTF9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IC8qIGVzbGludC1lbmFibGUgKi9cbiAgICAgICAgbnVsbH1cbiAgICAgIDwvQ29udGVudE5hdmlnYXRpb25XcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cblxudHlwZSBDb21wb3NlZEdsb2JhbE5hdmlnYXRpb25Qcm9wcyA9IHtcbiAgY29udGFpbmVyTmF2aWdhdGlvbjogP0NvbXBvbmVudFR5cGU8e30+LFxuICBkYXRhc2V0cz86IE9iamVjdCxcbiAgZ2xvYmFsTmF2aWdhdGlvbjogQ29tcG9uZW50VHlwZTx7fT4sXG4gIHRvcE9mZnNldD86IG51bWJlcixcbiAgc2hvdWxkSGlkZUdsb2JhbE5hdlNoYWRvdz86IGJvb2xlYW4sXG4gIGV4cGVyaW1lbnRhbF9hbHRlcm5hdGVGbHlvdXRCZWhhdmlvdXI6IGJvb2xlYW4sXG4gIGNsb3NlRmx5b3V0OiAoKSA9PiB2b2lkLFxuICB2aWV3PzogT2JqZWN0IHwgbnVsbCxcbn07XG5cbi8vIFNoYWxsb3cgY29tcGFyaXNpb24gb2YgcHJvcHMgaXMgc3VmZmljZWludCBpbiB0aGlzIGNhc2VcbmV4cG9ydCBjbGFzcyBDb21wb3NlZEdsb2JhbE5hdmlnYXRpb24gZXh0ZW5kcyBDb21wb25lbnQ8Q29tcG9zZWRHbG9iYWxOYXZpZ2F0aW9uUHJvcHM+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbnRhaW5lck5hdmlnYXRpb24sXG4gICAgICBkYXRhc2V0cyxcbiAgICAgIGdsb2JhbE5hdmlnYXRpb246IEdsb2JhbE5hdmlnYXRpb24sXG4gICAgICB0b3BPZmZzZXQsXG4gICAgICBzaG91bGRIaWRlR2xvYmFsTmF2U2hhZG93LFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuICAgICAgZXhwZXJpbWVudGFsX2FsdGVybmF0ZUZseW91dEJlaGF2aW91cjogRVhQRVJJTUVOVEFMX0FMVEVSTkFURV9GTFlPVVRfQkVIQVZJT1VSLFxuICAgICAgY2xvc2VGbHlvdXQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBkYXRhc2V0ID0gZGF0YXNldHMgPyBkYXRhc2V0cy5nbG9iYWxOYXZpZ2F0aW9uIDoge307XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICB7Li4uZGF0YXNldH1cbiAgICAgICAgb25Nb3VzZU92ZXI9e1xuICAgICAgICAgIEVYUEVSSU1FTlRBTF9BTFRFUk5BVEVfRkxZT1VUX0JFSEFWSU9VUiA/IGNsb3NlRmx5b3V0IDogbnVsbFxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxUaGVtZVByb3ZpZGVyXG4gICAgICAgICAgdGhlbWU9e3RoZW1lID0+ICh7XG4gICAgICAgICAgICB0b3BPZmZzZXQsXG4gICAgICAgICAgICBtb2RlOiBsaWdodCwgLy8gSWYgbm8gdGhlbWUgYWxyZWFkeSBleGlzdHMgZGVmYXVsdCB0byBsaWdodCBtb2RlXG4gICAgICAgICAgICAuLi50aGVtZSxcbiAgICAgICAgICB9KX1cbiAgICAgICAgPlxuICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgIHshc2hvdWxkSGlkZUdsb2JhbE5hdlNoYWRvdyAmJiAoXG4gICAgICAgICAgICAgIDxTaGFkb3dcbiAgICAgICAgICAgICAgICBpc0JvbGQ9eyEhY29udGFpbmVyTmF2aWdhdGlvbn1cbiAgICAgICAgICAgICAgICBpc092ZXJEYXJrQmdcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBHTE9CQUxfTkFWX1dJRFRIIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPEdsb2JhbE5hdmlnYXRpb24gLz5cbiAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */"),
        tabIndex: -1
      }) :
      /* eslint-enable */
      null);
    }
  }]);
  return ComposedContainerNavigation;
}(_react.Component);

exports.ComposedContainerNavigation = ComposedContainerNavigation;

// Shallow comparision of props is sufficeint in this case
var ComposedGlobalNavigation =
/*#__PURE__*/
function (_Component2) {
  (0, _inherits2.default)(ComposedGlobalNavigation, _Component2);

  function ComposedGlobalNavigation() {
    (0, _classCallCheck2.default)(this, ComposedGlobalNavigation);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ComposedGlobalNavigation).apply(this, arguments));
  }

  (0, _createClass2.default)(ComposedGlobalNavigation, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          containerNavigation = _this$props2.containerNavigation,
          datasets = _this$props2.datasets,
          GlobalNavigation = _this$props2.globalNavigation,
          topOffset = _this$props2.topOffset,
          shouldHideGlobalNavShadow = _this$props2.shouldHideGlobalNavShadow,
          EXPERIMENTAL_ALTERNATE_FLYOUT_BEHAVIOUR = _this$props2.experimental_alternateFlyoutBehaviour,
          closeFlyout = _this$props2.closeFlyout;
      var dataset = datasets ? datasets.globalNavigation : {};
      return (0, _core.jsx)("div", (0, _extends2.default)({}, dataset, {
        onMouseOver: EXPERIMENTAL_ALTERNATE_FLYOUT_BEHAVIOUR ? closeFlyout : null
      }), (0, _core.jsx)(_theme2.ThemeProvider, {
        theme: function theme(_theme) {
          return (0, _objectSpread2.default)({
            topOffset: topOffset,
            mode: _theme2.light
          }, _theme);
        }
      }, (0, _core.jsx)(_react.Fragment, null, !shouldHideGlobalNavShadow && (0, _core.jsx)(_primitives2.Shadow, {
        isBold: !!containerNavigation,
        isOverDarkBg: true,
        style: {
          marginLeft: _constants.GLOBAL_NAV_WIDTH
        }
      }), (0, _core.jsx)(GlobalNavigation, null))));
    }
  }]);
  return ComposedGlobalNavigation;
}(_react.Component);

exports.ComposedGlobalNavigation = ComposedGlobalNavigation;
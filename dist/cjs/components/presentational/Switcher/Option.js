"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _css3 = _interopRequireDefault(require("@emotion/css"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _constants = require("@atlaskit/theme/constants");

var _colors = require("@atlaskit/theme/colors");

var _avatar = _interopRequireDefault(require("@atlaskit/avatar"));

var _select = require("@atlaskit/select");

var gridSize = (0, _constants.gridSize)();

var _ref = process.env.NODE_ENV === "production" ? {
  name: "oeeumh",
  styles: "display:flex;flex-direction:column;flex-grow:1;overflow-x:hidden;"
} : {
  name: "oeeumh",
  styles: "display:flex;flex-direction:column;flex-grow:1;overflow-x:hidden;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL1N3aXRjaGVyL09wdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQkkiLCJmaWxlIjoiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvU3dpdGNoZXIvT3B0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFJlYWN0LCB7XG4gIFB1cmVDb21wb25lbnQsXG4gIHR5cGUgQ29tcG9uZW50VHlwZSxcbiAgdHlwZSBOb2RlLFxuICB0eXBlIFJlZixcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZm9udFNpemUsIGdyaWRTaXplIGFzIGdyaWRTaXplRm4gfSBmcm9tICdAYXRsYXNraXQvdGhlbWUvY29uc3RhbnRzJztcbmltcG9ydCB7IE4yMDAgfSBmcm9tICdAYXRsYXNraXQvdGhlbWUvY29sb3JzJztcbmltcG9ydCBBdmF0YXIgZnJvbSAnQGF0bGFza2l0L2F2YXRhcic7XG5pbXBvcnQgeyBjb21wb25lbnRzIH0gZnJvbSAnQGF0bGFza2l0L3NlbGVjdCc7XG5cbmNvbnN0IGdyaWRTaXplID0gZ3JpZFNpemVGbigpO1xuXG5jb25zdCBDb250ZW50V3JhcHBlciA9IChwcm9wczogKikgPT4gKFxuICA8ZGl2XG4gICAgY3NzPXt7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5jb25zdCBUZXh0V3JhcHBlciA9IChwcm9wczogKikgPT4gKFxuICA8ZGl2XG4gICAgY3NzPXt7XG4gICAgICBmbGV4OiAnMSAxIGF1dG8nLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICBsaW5lSGVpZ2h0OiAxNiAvIGZvbnRTaXplKCksXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuY29uc3QgU3ViVGV4dFdyYXBwZXIgPSAocHJvcHM6ICopID0+IChcbiAgPGRpdlxuICAgIGNzcz17e1xuICAgICAgY29sb3I6IE4yMDAsXG4gICAgICBmbGV4OiAnMSAxIGF1dG8nLFxuICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgbGluZUhlaWdodDogMTQgLyAxMixcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcbmNvbnN0IEVsZW1lbnRXcmFwcGVyID0gKHsgaXMsIC4uLnByb3BzIH06IHsgaXM6ICdiZWZvcmUnIHwgJ2FmdGVyJyB9KSA9PiB7XG4gIGNvbnN0IGRpcmVjdGlvbiA9IHsgYmVmb3JlOiAnbWFyZ2luUmlnaHQnLCBhZnRlcjogJ21hcmdpbkxlZnQnIH07XG4gIGNvbnN0IG1hcmdpbiA9IGRpcmVjdGlvbltpc107XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e3tcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleFNocmluazogMCxcbiAgICAgICAgW21hcmdpbl06IGdyaWRTaXplLFxuICAgICAgfX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufTtcblxudHlwZSBQcmVzZW50YXRpb25Qcm9wcyA9IHtcbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICBpc1NlbGVjdGVkOiBib29sZWFuLFxufTtcbnR5cGUgRGF0YVR5cGUgPSB7XG4gIGF2YXRhcj86IHN0cmluZywgLy8gVVJMIGZvciB0aGUgQXZhdGFyIGNvbXBvbmVudFxuICBjb21wb25lbnQ/OiBDb21wb25lbnRUeXBlPFByZXNlbnRhdGlvblByb3BzPixcbiAgaHJlZj86IHN0cmluZyxcbiAgc3ViVGV4dD86IHN0cmluZyxcbiAgdGFyZ2V0Pzogc3RyaW5nLCAvLyBOT1RFOiB0YXJnZXQgd2lsbCBvbmx5IGJlIHVzZWQgaWYgaHJlZiBpcyBhbHNvIHNldFxuICB0ZXh0OiBOb2RlLFxuICB0bz86IHN0cmluZywgLy8gaHJlZiBlcXVpdmFsZW50IGZvciBSZWFjdFJvdXRlci5MaW5rXG59O1xudHlwZSBJbm5lclByb3BzID0ge1xuICAnYXJpYS1zZWxlY3RlZCc6IGJvb2xlYW4sXG4gIGlkOiBzdHJpbmcsXG4gIG9uQ2xpY2s6ICgqKSA9PiB2b2lkLFxuICBvbk1vdXNlTW92ZTogKCopID0+IHZvaWQsXG4gIG9uTW91c2VPdmVyOiAoKikgPT4gdm9pZCxcbiAgcm9sZTogc3RyaW5nLFxuICB0YWJJbmRleDogbnVtYmVyLFxufTtcbnR5cGUgSXRlbVByb3BzID0ge1xuICBpbm5lclJlZjogUmVmPCo+LFxuICBkYXRhOiBEYXRhVHlwZSxcbiAgaW5uZXJQcm9wczogSW5uZXJQcm9wcyxcbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICBpc1NlbGVjdGVkOiBib29sZWFuLFxuICBvbkNsaWNrPzogKFN5bnRoZXRpY0V2ZW50PE1vdXNlRXZlbnQ+KSA9PiB2b2lkLFxuICBnZXRTdHlsZXM6IEZ1bmN0aW9uLFxuICB0aGVtZTogT2JqZWN0LFxuICBjeDogRnVuY3Rpb24sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb24gZXh0ZW5kcyBQdXJlQ29tcG9uZW50PEl0ZW1Qcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaW5uZXJQcm9wcyxcbiAgICAgIGlubmVyUmVmLFxuICAgICAgZGF0YTogeyBhdmF0YXIsIHN1YlRleHQsIHRleHQgfSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9e2lubmVyUmVmfSB7Li4uaW5uZXJQcm9wc30+XG4gICAgICAgIDxjb21wb25lbnRzLk9wdGlvbiB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgICAgeyEhYXZhdGFyICYmIChcbiAgICAgICAgICAgIDxFbGVtZW50V3JhcHBlciBpcz1cImJlZm9yZVwiPlxuICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgc3JjPXthdmF0YXJ9XG4gICAgICAgICAgICAgICAgYXBwZWFyYW5jZT1cInNxdWFyZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0VsZW1lbnRXcmFwcGVyPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPENvbnRlbnRXcmFwcGVyPlxuICAgICAgICAgICAgPFRleHRXcmFwcGVyPnt0ZXh0fTwvVGV4dFdyYXBwZXI+XG4gICAgICAgICAgICB7ISFzdWJUZXh0ICYmIDxTdWJUZXh0V3JhcHBlcj57c3ViVGV4dH08L1N1YlRleHRXcmFwcGVyPn1cbiAgICAgICAgICA8L0NvbnRlbnRXcmFwcGVyPlxuICAgICAgICA8L2NvbXBvbmVudHMuT3B0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */"
};

var ContentWrapper = function ContentWrapper(props) {
  return (0, _core.jsx)("div", (0, _extends2.default)({
    css: _ref
  }, props));
};

var TextWrapper = function TextWrapper(props) {
  return (0, _core.jsx)("div", (0, _extends2.default)({
    css:
    /*#__PURE__*/
    (0, _css3.default)({
      flex: '1 1 auto',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      lineHeight: 16 / (0, _constants.fontSize)()
    }, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL1N3aXRjaGVyL09wdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QkkiLCJmaWxlIjoiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvU3dpdGNoZXIvT3B0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFJlYWN0LCB7XG4gIFB1cmVDb21wb25lbnQsXG4gIHR5cGUgQ29tcG9uZW50VHlwZSxcbiAgdHlwZSBOb2RlLFxuICB0eXBlIFJlZixcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZm9udFNpemUsIGdyaWRTaXplIGFzIGdyaWRTaXplRm4gfSBmcm9tICdAYXRsYXNraXQvdGhlbWUvY29uc3RhbnRzJztcbmltcG9ydCB7IE4yMDAgfSBmcm9tICdAYXRsYXNraXQvdGhlbWUvY29sb3JzJztcbmltcG9ydCBBdmF0YXIgZnJvbSAnQGF0bGFza2l0L2F2YXRhcic7XG5pbXBvcnQgeyBjb21wb25lbnRzIH0gZnJvbSAnQGF0bGFza2l0L3NlbGVjdCc7XG5cbmNvbnN0IGdyaWRTaXplID0gZ3JpZFNpemVGbigpO1xuXG5jb25zdCBDb250ZW50V3JhcHBlciA9IChwcm9wczogKikgPT4gKFxuICA8ZGl2XG4gICAgY3NzPXt7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5jb25zdCBUZXh0V3JhcHBlciA9IChwcm9wczogKikgPT4gKFxuICA8ZGl2XG4gICAgY3NzPXt7XG4gICAgICBmbGV4OiAnMSAxIGF1dG8nLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICBsaW5lSGVpZ2h0OiAxNiAvIGZvbnRTaXplKCksXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuY29uc3QgU3ViVGV4dFdyYXBwZXIgPSAocHJvcHM6ICopID0+IChcbiAgPGRpdlxuICAgIGNzcz17e1xuICAgICAgY29sb3I6IE4yMDAsXG4gICAgICBmbGV4OiAnMSAxIGF1dG8nLFxuICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgbGluZUhlaWdodDogMTQgLyAxMixcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcbmNvbnN0IEVsZW1lbnRXcmFwcGVyID0gKHsgaXMsIC4uLnByb3BzIH06IHsgaXM6ICdiZWZvcmUnIHwgJ2FmdGVyJyB9KSA9PiB7XG4gIGNvbnN0IGRpcmVjdGlvbiA9IHsgYmVmb3JlOiAnbWFyZ2luUmlnaHQnLCBhZnRlcjogJ21hcmdpbkxlZnQnIH07XG4gIGNvbnN0IG1hcmdpbiA9IGRpcmVjdGlvbltpc107XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e3tcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleFNocmluazogMCxcbiAgICAgICAgW21hcmdpbl06IGdyaWRTaXplLFxuICAgICAgfX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufTtcblxudHlwZSBQcmVzZW50YXRpb25Qcm9wcyA9IHtcbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICBpc1NlbGVjdGVkOiBib29sZWFuLFxufTtcbnR5cGUgRGF0YVR5cGUgPSB7XG4gIGF2YXRhcj86IHN0cmluZywgLy8gVVJMIGZvciB0aGUgQXZhdGFyIGNvbXBvbmVudFxuICBjb21wb25lbnQ/OiBDb21wb25lbnRUeXBlPFByZXNlbnRhdGlvblByb3BzPixcbiAgaHJlZj86IHN0cmluZyxcbiAgc3ViVGV4dD86IHN0cmluZyxcbiAgdGFyZ2V0Pzogc3RyaW5nLCAvLyBOT1RFOiB0YXJnZXQgd2lsbCBvbmx5IGJlIHVzZWQgaWYgaHJlZiBpcyBhbHNvIHNldFxuICB0ZXh0OiBOb2RlLFxuICB0bz86IHN0cmluZywgLy8gaHJlZiBlcXVpdmFsZW50IGZvciBSZWFjdFJvdXRlci5MaW5rXG59O1xudHlwZSBJbm5lclByb3BzID0ge1xuICAnYXJpYS1zZWxlY3RlZCc6IGJvb2xlYW4sXG4gIGlkOiBzdHJpbmcsXG4gIG9uQ2xpY2s6ICgqKSA9PiB2b2lkLFxuICBvbk1vdXNlTW92ZTogKCopID0+IHZvaWQsXG4gIG9uTW91c2VPdmVyOiAoKikgPT4gdm9pZCxcbiAgcm9sZTogc3RyaW5nLFxuICB0YWJJbmRleDogbnVtYmVyLFxufTtcbnR5cGUgSXRlbVByb3BzID0ge1xuICBpbm5lclJlZjogUmVmPCo+LFxuICBkYXRhOiBEYXRhVHlwZSxcbiAgaW5uZXJQcm9wczogSW5uZXJQcm9wcyxcbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICBpc1NlbGVjdGVkOiBib29sZWFuLFxuICBvbkNsaWNrPzogKFN5bnRoZXRpY0V2ZW50PE1vdXNlRXZlbnQ+KSA9PiB2b2lkLFxuICBnZXRTdHlsZXM6IEZ1bmN0aW9uLFxuICB0aGVtZTogT2JqZWN0LFxuICBjeDogRnVuY3Rpb24sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb24gZXh0ZW5kcyBQdXJlQ29tcG9uZW50PEl0ZW1Qcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaW5uZXJQcm9wcyxcbiAgICAgIGlubmVyUmVmLFxuICAgICAgZGF0YTogeyBhdmF0YXIsIHN1YlRleHQsIHRleHQgfSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9e2lubmVyUmVmfSB7Li4uaW5uZXJQcm9wc30+XG4gICAgICAgIDxjb21wb25lbnRzLk9wdGlvbiB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgICAgeyEhYXZhdGFyICYmIChcbiAgICAgICAgICAgIDxFbGVtZW50V3JhcHBlciBpcz1cImJlZm9yZVwiPlxuICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgc3JjPXthdmF0YXJ9XG4gICAgICAgICAgICAgICAgYXBwZWFyYW5jZT1cInNxdWFyZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0VsZW1lbnRXcmFwcGVyPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPENvbnRlbnRXcmFwcGVyPlxuICAgICAgICAgICAgPFRleHRXcmFwcGVyPnt0ZXh0fTwvVGV4dFdyYXBwZXI+XG4gICAgICAgICAgICB7ISFzdWJUZXh0ICYmIDxTdWJUZXh0V3JhcHBlcj57c3ViVGV4dH08L1N1YlRleHRXcmFwcGVyPn1cbiAgICAgICAgICA8L0NvbnRlbnRXcmFwcGVyPlxuICAgICAgICA8L2NvbXBvbmVudHMuT3B0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */")
  }, props));
};

var SubTextWrapper = function SubTextWrapper(props) {
  return (0, _core.jsx)("div", (0, _extends2.default)({
    css:
    /*#__PURE__*/
    (0, _css3.default)({
      color: _colors.N200,
      flex: '1 1 auto',
      fontSize: 12,
      lineHeight: 14 / 12,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL1N3aXRjaGVyL09wdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q0kiLCJmaWxlIjoiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvU3dpdGNoZXIvT3B0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFJlYWN0LCB7XG4gIFB1cmVDb21wb25lbnQsXG4gIHR5cGUgQ29tcG9uZW50VHlwZSxcbiAgdHlwZSBOb2RlLFxuICB0eXBlIFJlZixcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZm9udFNpemUsIGdyaWRTaXplIGFzIGdyaWRTaXplRm4gfSBmcm9tICdAYXRsYXNraXQvdGhlbWUvY29uc3RhbnRzJztcbmltcG9ydCB7IE4yMDAgfSBmcm9tICdAYXRsYXNraXQvdGhlbWUvY29sb3JzJztcbmltcG9ydCBBdmF0YXIgZnJvbSAnQGF0bGFza2l0L2F2YXRhcic7XG5pbXBvcnQgeyBjb21wb25lbnRzIH0gZnJvbSAnQGF0bGFza2l0L3NlbGVjdCc7XG5cbmNvbnN0IGdyaWRTaXplID0gZ3JpZFNpemVGbigpO1xuXG5jb25zdCBDb250ZW50V3JhcHBlciA9IChwcm9wczogKikgPT4gKFxuICA8ZGl2XG4gICAgY3NzPXt7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5jb25zdCBUZXh0V3JhcHBlciA9IChwcm9wczogKikgPT4gKFxuICA8ZGl2XG4gICAgY3NzPXt7XG4gICAgICBmbGV4OiAnMSAxIGF1dG8nLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICBsaW5lSGVpZ2h0OiAxNiAvIGZvbnRTaXplKCksXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuY29uc3QgU3ViVGV4dFdyYXBwZXIgPSAocHJvcHM6ICopID0+IChcbiAgPGRpdlxuICAgIGNzcz17e1xuICAgICAgY29sb3I6IE4yMDAsXG4gICAgICBmbGV4OiAnMSAxIGF1dG8nLFxuICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgbGluZUhlaWdodDogMTQgLyAxMixcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcbmNvbnN0IEVsZW1lbnRXcmFwcGVyID0gKHsgaXMsIC4uLnByb3BzIH06IHsgaXM6ICdiZWZvcmUnIHwgJ2FmdGVyJyB9KSA9PiB7XG4gIGNvbnN0IGRpcmVjdGlvbiA9IHsgYmVmb3JlOiAnbWFyZ2luUmlnaHQnLCBhZnRlcjogJ21hcmdpbkxlZnQnIH07XG4gIGNvbnN0IG1hcmdpbiA9IGRpcmVjdGlvbltpc107XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e3tcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleFNocmluazogMCxcbiAgICAgICAgW21hcmdpbl06IGdyaWRTaXplLFxuICAgICAgfX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufTtcblxudHlwZSBQcmVzZW50YXRpb25Qcm9wcyA9IHtcbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICBpc1NlbGVjdGVkOiBib29sZWFuLFxufTtcbnR5cGUgRGF0YVR5cGUgPSB7XG4gIGF2YXRhcj86IHN0cmluZywgLy8gVVJMIGZvciB0aGUgQXZhdGFyIGNvbXBvbmVudFxuICBjb21wb25lbnQ/OiBDb21wb25lbnRUeXBlPFByZXNlbnRhdGlvblByb3BzPixcbiAgaHJlZj86IHN0cmluZyxcbiAgc3ViVGV4dD86IHN0cmluZyxcbiAgdGFyZ2V0Pzogc3RyaW5nLCAvLyBOT1RFOiB0YXJnZXQgd2lsbCBvbmx5IGJlIHVzZWQgaWYgaHJlZiBpcyBhbHNvIHNldFxuICB0ZXh0OiBOb2RlLFxuICB0bz86IHN0cmluZywgLy8gaHJlZiBlcXVpdmFsZW50IGZvciBSZWFjdFJvdXRlci5MaW5rXG59O1xudHlwZSBJbm5lclByb3BzID0ge1xuICAnYXJpYS1zZWxlY3RlZCc6IGJvb2xlYW4sXG4gIGlkOiBzdHJpbmcsXG4gIG9uQ2xpY2s6ICgqKSA9PiB2b2lkLFxuICBvbk1vdXNlTW92ZTogKCopID0+IHZvaWQsXG4gIG9uTW91c2VPdmVyOiAoKikgPT4gdm9pZCxcbiAgcm9sZTogc3RyaW5nLFxuICB0YWJJbmRleDogbnVtYmVyLFxufTtcbnR5cGUgSXRlbVByb3BzID0ge1xuICBpbm5lclJlZjogUmVmPCo+LFxuICBkYXRhOiBEYXRhVHlwZSxcbiAgaW5uZXJQcm9wczogSW5uZXJQcm9wcyxcbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICBpc1NlbGVjdGVkOiBib29sZWFuLFxuICBvbkNsaWNrPzogKFN5bnRoZXRpY0V2ZW50PE1vdXNlRXZlbnQ+KSA9PiB2b2lkLFxuICBnZXRTdHlsZXM6IEZ1bmN0aW9uLFxuICB0aGVtZTogT2JqZWN0LFxuICBjeDogRnVuY3Rpb24sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb24gZXh0ZW5kcyBQdXJlQ29tcG9uZW50PEl0ZW1Qcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaW5uZXJQcm9wcyxcbiAgICAgIGlubmVyUmVmLFxuICAgICAgZGF0YTogeyBhdmF0YXIsIHN1YlRleHQsIHRleHQgfSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9e2lubmVyUmVmfSB7Li4uaW5uZXJQcm9wc30+XG4gICAgICAgIDxjb21wb25lbnRzLk9wdGlvbiB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgICAgeyEhYXZhdGFyICYmIChcbiAgICAgICAgICAgIDxFbGVtZW50V3JhcHBlciBpcz1cImJlZm9yZVwiPlxuICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgc3JjPXthdmF0YXJ9XG4gICAgICAgICAgICAgICAgYXBwZWFyYW5jZT1cInNxdWFyZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0VsZW1lbnRXcmFwcGVyPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPENvbnRlbnRXcmFwcGVyPlxuICAgICAgICAgICAgPFRleHRXcmFwcGVyPnt0ZXh0fTwvVGV4dFdyYXBwZXI+XG4gICAgICAgICAgICB7ISFzdWJUZXh0ICYmIDxTdWJUZXh0V3JhcHBlcj57c3ViVGV4dH08L1N1YlRleHRXcmFwcGVyPn1cbiAgICAgICAgICA8L0NvbnRlbnRXcmFwcGVyPlxuICAgICAgICA8L2NvbXBvbmVudHMuT3B0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */")
  }, props));
};

var ElementWrapper = function ElementWrapper(_ref2) {
  var is = _ref2.is,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["is"]);
  var direction = {
    before: 'marginRight',
    after: 'marginLeft'
  };
  var margin = direction[is];
  return (0, _core.jsx)("div", (0, _extends2.default)({
    css:
    /*#__PURE__*/
    (0, _css3.default)((0, _defineProperty2.default)({
      alignItems: 'center',
      display: 'flex',
      flexShrink: 0
    }, margin, gridSize), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL1N3aXRjaGVyL09wdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRE0iLCJmaWxlIjoiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvU3dpdGNoZXIvT3B0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFJlYWN0LCB7XG4gIFB1cmVDb21wb25lbnQsXG4gIHR5cGUgQ29tcG9uZW50VHlwZSxcbiAgdHlwZSBOb2RlLFxuICB0eXBlIFJlZixcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZm9udFNpemUsIGdyaWRTaXplIGFzIGdyaWRTaXplRm4gfSBmcm9tICdAYXRsYXNraXQvdGhlbWUvY29uc3RhbnRzJztcbmltcG9ydCB7IE4yMDAgfSBmcm9tICdAYXRsYXNraXQvdGhlbWUvY29sb3JzJztcbmltcG9ydCBBdmF0YXIgZnJvbSAnQGF0bGFza2l0L2F2YXRhcic7XG5pbXBvcnQgeyBjb21wb25lbnRzIH0gZnJvbSAnQGF0bGFza2l0L3NlbGVjdCc7XG5cbmNvbnN0IGdyaWRTaXplID0gZ3JpZFNpemVGbigpO1xuXG5jb25zdCBDb250ZW50V3JhcHBlciA9IChwcm9wczogKikgPT4gKFxuICA8ZGl2XG4gICAgY3NzPXt7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5jb25zdCBUZXh0V3JhcHBlciA9IChwcm9wczogKikgPT4gKFxuICA8ZGl2XG4gICAgY3NzPXt7XG4gICAgICBmbGV4OiAnMSAxIGF1dG8nLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICBsaW5lSGVpZ2h0OiAxNiAvIGZvbnRTaXplKCksXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuY29uc3QgU3ViVGV4dFdyYXBwZXIgPSAocHJvcHM6ICopID0+IChcbiAgPGRpdlxuICAgIGNzcz17e1xuICAgICAgY29sb3I6IE4yMDAsXG4gICAgICBmbGV4OiAnMSAxIGF1dG8nLFxuICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgbGluZUhlaWdodDogMTQgLyAxMixcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcbmNvbnN0IEVsZW1lbnRXcmFwcGVyID0gKHsgaXMsIC4uLnByb3BzIH06IHsgaXM6ICdiZWZvcmUnIHwgJ2FmdGVyJyB9KSA9PiB7XG4gIGNvbnN0IGRpcmVjdGlvbiA9IHsgYmVmb3JlOiAnbWFyZ2luUmlnaHQnLCBhZnRlcjogJ21hcmdpbkxlZnQnIH07XG4gIGNvbnN0IG1hcmdpbiA9IGRpcmVjdGlvbltpc107XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e3tcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleFNocmluazogMCxcbiAgICAgICAgW21hcmdpbl06IGdyaWRTaXplLFxuICAgICAgfX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufTtcblxudHlwZSBQcmVzZW50YXRpb25Qcm9wcyA9IHtcbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICBpc1NlbGVjdGVkOiBib29sZWFuLFxufTtcbnR5cGUgRGF0YVR5cGUgPSB7XG4gIGF2YXRhcj86IHN0cmluZywgLy8gVVJMIGZvciB0aGUgQXZhdGFyIGNvbXBvbmVudFxuICBjb21wb25lbnQ/OiBDb21wb25lbnRUeXBlPFByZXNlbnRhdGlvblByb3BzPixcbiAgaHJlZj86IHN0cmluZyxcbiAgc3ViVGV4dD86IHN0cmluZyxcbiAgdGFyZ2V0Pzogc3RyaW5nLCAvLyBOT1RFOiB0YXJnZXQgd2lsbCBvbmx5IGJlIHVzZWQgaWYgaHJlZiBpcyBhbHNvIHNldFxuICB0ZXh0OiBOb2RlLFxuICB0bz86IHN0cmluZywgLy8gaHJlZiBlcXVpdmFsZW50IGZvciBSZWFjdFJvdXRlci5MaW5rXG59O1xudHlwZSBJbm5lclByb3BzID0ge1xuICAnYXJpYS1zZWxlY3RlZCc6IGJvb2xlYW4sXG4gIGlkOiBzdHJpbmcsXG4gIG9uQ2xpY2s6ICgqKSA9PiB2b2lkLFxuICBvbk1vdXNlTW92ZTogKCopID0+IHZvaWQsXG4gIG9uTW91c2VPdmVyOiAoKikgPT4gdm9pZCxcbiAgcm9sZTogc3RyaW5nLFxuICB0YWJJbmRleDogbnVtYmVyLFxufTtcbnR5cGUgSXRlbVByb3BzID0ge1xuICBpbm5lclJlZjogUmVmPCo+LFxuICBkYXRhOiBEYXRhVHlwZSxcbiAgaW5uZXJQcm9wczogSW5uZXJQcm9wcyxcbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICBpc1NlbGVjdGVkOiBib29sZWFuLFxuICBvbkNsaWNrPzogKFN5bnRoZXRpY0V2ZW50PE1vdXNlRXZlbnQ+KSA9PiB2b2lkLFxuICBnZXRTdHlsZXM6IEZ1bmN0aW9uLFxuICB0aGVtZTogT2JqZWN0LFxuICBjeDogRnVuY3Rpb24sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb24gZXh0ZW5kcyBQdXJlQ29tcG9uZW50PEl0ZW1Qcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaW5uZXJQcm9wcyxcbiAgICAgIGlubmVyUmVmLFxuICAgICAgZGF0YTogeyBhdmF0YXIsIHN1YlRleHQsIHRleHQgfSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9e2lubmVyUmVmfSB7Li4uaW5uZXJQcm9wc30+XG4gICAgICAgIDxjb21wb25lbnRzLk9wdGlvbiB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgICAgeyEhYXZhdGFyICYmIChcbiAgICAgICAgICAgIDxFbGVtZW50V3JhcHBlciBpcz1cImJlZm9yZVwiPlxuICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgc3JjPXthdmF0YXJ9XG4gICAgICAgICAgICAgICAgYXBwZWFyYW5jZT1cInNxdWFyZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0VsZW1lbnRXcmFwcGVyPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPENvbnRlbnRXcmFwcGVyPlxuICAgICAgICAgICAgPFRleHRXcmFwcGVyPnt0ZXh0fTwvVGV4dFdyYXBwZXI+XG4gICAgICAgICAgICB7ISFzdWJUZXh0ICYmIDxTdWJUZXh0V3JhcHBlcj57c3ViVGV4dH08L1N1YlRleHRXcmFwcGVyPn1cbiAgICAgICAgICA8L0NvbnRlbnRXcmFwcGVyPlxuICAgICAgICA8L2NvbXBvbmVudHMuT3B0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */")
  }, props));
};

var Option =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Option, _PureComponent);

  function Option() {
    (0, _classCallCheck2.default)(this, Option);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Option).apply(this, arguments));
  }

  (0, _createClass2.default)(Option, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          innerProps = _this$props.innerProps,
          innerRef = _this$props.innerRef,
          _this$props$data = _this$props.data,
          avatar = _this$props$data.avatar,
          subText = _this$props$data.subText,
          text = _this$props$data.text;
      return (0, _core.jsx)("div", (0, _extends2.default)({
        ref: innerRef
      }, innerProps), (0, _core.jsx)(_select.components.Option, this.props, !!avatar && (0, _core.jsx)(ElementWrapper, {
        is: "before"
      }, (0, _core.jsx)(_avatar.default, {
        borderColor: "transparent",
        src: avatar,
        appearance: "square"
      })), (0, _core.jsx)(ContentWrapper, null, (0, _core.jsx)(TextWrapper, null, text), !!subText && (0, _core.jsx)(SubTextWrapper, null, subText))));
    }
  }]);
  return Option;
}(_react.PureComponent);

exports.default = Option;
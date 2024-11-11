/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("var registerBlockType = wp.blocks.registerBlockType;\nvar RichText = wp.blockEditor.RichText;\nregisterBlockType(\"custom/block\", {\n  title: \"Custom Block\",\n  icon: \"smiley\",\n  category: \"common\",\n  attributes: {\n    content: {\n      type: \"string\",\n      source: \"html\",\n      selector: \"p\"\n    }\n  },\n  edit: function edit(_ref) {\n    var attributes = _ref.attributes,\n      setAttributes = _ref.setAttributes;\n    var onChangeContent = function onChangeContent(newContent) {\n      setAttributes({\n        content: newContent\n      });\n    };\n    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RichText, {\n      tagName: \"p\",\n      onChange: onChangeContent,\n      value: attributes.content\n    }));\n  },\n  save: function save(_ref2) {\n    var attributes = _ref2.attributes;\n    return /*#__PURE__*/React.createElement(RichText.Content, {\n      tagName: \"p\",\n      value: attributes.content\n    });\n  }\n});\n\n//# sourceURL=webpack://block/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
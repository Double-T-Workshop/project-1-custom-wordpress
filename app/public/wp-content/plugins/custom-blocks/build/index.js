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

/***/ "./src/blocks/block-four/index.js":
/*!****************************************!*\
  !*** ./src/blocks/block-four/index.js ***!
  \****************************************/
/***/ (() => {

eval("function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }\nwp.blocks.registerBlockType(\"custom/block-four\", {\n  attributes: {\n    videoUrl: {\n      type: \"string\",\n      \"default\": \"\"\n    },\n    videoAlt: {\n      type: \"string\",\n      \"default\": \"\"\n    },\n    overlayText: {\n      type: \"string\",\n      source: \"html\",\n      selector: \"h2\"\n    }\n  },\n  edit: function edit(_ref) {\n    var attributes = _ref.attributes,\n      setAttributes = _ref.setAttributes;\n    var videoUrl = attributes.videoUrl,\n      videoAlt = attributes.videoAlt,\n      overlayText = attributes.overlayText;\n    var blockProps = wp.blockEditor.useBlockProps();\n    var onVideoSelect = function onVideoSelect(media) {\n      setAttributes({\n        videoUrl: media.url,\n        videoAlt: media.alt || \"Background video\"\n      });\n    };\n    return /*#__PURE__*/React.createElement(\"div\", _extends({}, blockProps, {\n      className: \"video-background-block\"\n    }), /*#__PURE__*/React.createElement(wp.blockEditor.InspectorControls, null, /*#__PURE__*/React.createElement(wp.components.PanelBody, {\n      title: \"Video Settings\"\n    }, /*#__PURE__*/React.createElement(wp.blockEditor.MediaUploadCheck, null, /*#__PURE__*/React.createElement(wp.blockEditor.MediaUpload, {\n      onSelect: onVideoSelect,\n      allowedTypes: [\"video\"],\n      render: function render(_ref2) {\n        var open = _ref2.open;\n        return /*#__PURE__*/React.createElement(wp.components.Button, {\n          onClick: open,\n          variant: \"secondary\"\n        }, videoUrl ? \"Change Video\" : \"Select Video\");\n      }\n    })))), /*#__PURE__*/React.createElement(\"div\", {\n      className: \"video-container\"\n    }, videoUrl && /*#__PURE__*/React.createElement(\"video\", {\n      src: videoUrl,\n      alt: videoAlt,\n      autoPlay: true,\n      muted: true,\n      loop: true,\n      className: \"background-video\"\n    }), /*#__PURE__*/React.createElement(\"div\", {\n      className: \"overlay-text\"\n    }, /*#__PURE__*/React.createElement(wp.blockEditor.RichText, {\n      tagName: \"h2\",\n      value: overlayText,\n      onChange: function onChange(newText) {\n        return setAttributes({\n          overlayText: newText\n        });\n      },\n      placeholder: \"Enter overlay text...\"\n    }))));\n  },\n  save: function save(_ref3) {\n    var attributes = _ref3.attributes;\n    var videoUrl = attributes.videoUrl,\n      videoAlt = attributes.videoAlt,\n      overlayText = attributes.overlayText;\n    var blockProps = wp.blockEditor.useBlockProps.save();\n    return /*#__PURE__*/React.createElement(\"div\", _extends({}, blockProps, {\n      className: \"video-background-block\"\n    }), videoUrl && /*#__PURE__*/React.createElement(\"video\", {\n      src: videoUrl,\n      alt: videoAlt,\n      autoPlay: true,\n      muted: true,\n      loop: true,\n      className: \"background-video\"\n    }), /*#__PURE__*/React.createElement(\"div\", {\n      className: \"overlay-text\"\n    }, /*#__PURE__*/React.createElement(wp.blockEditor.RichText.Content, {\n      tagName: \"h2\",\n      value: overlayText\n    })));\n  }\n});\n\n//# sourceURL=webpack://custom-blocks/./src/blocks/block-four/index.js?");

/***/ }),

/***/ "./src/blocks/block-one/index.js":
/*!***************************************!*\
  !*** ./src/blocks/block-one/index.js ***!
  \***************************************/
/***/ (() => {

eval("// import { useBlockProps } from \"@wordpress/block-editor\";\n\n// wp.blocks.registerBlockType(\"custom/block-one\", {\n//   edit() {\n//     const blockProps = useBlockProps();\n\n//     return (\n//       <div {...blockProps}>\n//         <p>Custom Block 1 - Editable content here.</p>\n//       </div>\n//     );\n//   },\n//   save() {\n//     const blockProps = useBlockProps.save();\n\n//     return (\n//       <div {...blockProps}>\n//         <p>Custom Block 1 - Saved content here.</p>\n//       </div>\n//     );\n//   },\n// });\n\nwp.blocks.registerBlockType(\"custom/block-one\", {\n  attributes: {\n    imageUrl: {\n      type: \"string\",\n      \"default\": \"\"\n    },\n    imageAlt: {\n      type: \"string\",\n      \"default\": \"\"\n    },\n    content: {\n      type: \"string\",\n      source: \"html\",\n      selector: \"p\"\n    }\n  },\n  edit: function edit(_ref) {\n    var attributes = _ref.attributes,\n      setAttributes = _ref.setAttributes;\n    var imageUrl = attributes.imageUrl,\n      imageAlt = attributes.imageAlt,\n      content = attributes.content;\n    var blockProps = wp.blockEditor.useBlockProps();\n    var onImageSelect = function onImageSelect(media) {\n      setAttributes({\n        imageUrl: media.url,\n        imageAlt: media.alt\n      });\n    };\n    return /*#__PURE__*/React.createElement(\"div\", blockProps, /*#__PURE__*/React.createElement(wp.blockEditor.InspectorControls, null, /*#__PURE__*/React.createElement(wp.components.PanelBody, {\n      title: \"Image Settings\"\n    }, /*#__PURE__*/React.createElement(wp.blockEditor.MediaUploadCheck, null, /*#__PURE__*/React.createElement(wp.blockEditor.MediaUpload, {\n      onSelect: onImageSelect,\n      allowedTypes: [\"image\"],\n      render: function render(_ref2) {\n        var open = _ref2.open;\n        return /*#__PURE__*/React.createElement(wp.components.Button, {\n          onClick: open,\n          variant: \"secondary\"\n        }, imageUrl ? \"Change Image\" : \"Select Image\");\n      }\n    })))), /*#__PURE__*/React.createElement(\"div\", {\n      className: \"image-text-block\"\n    }, imageUrl && /*#__PURE__*/React.createElement(\"img\", {\n      src: imageUrl,\n      alt: imageAlt\n    }), /*#__PURE__*/React.createElement(wp.blockEditor.RichText, {\n      tagName: \"p\",\n      value: content,\n      onChange: function onChange(newContent) {\n        return setAttributes({\n          content: newContent\n        });\n      },\n      placeholder: \"Enter text here...\"\n    })));\n  },\n  save: function save(_ref3) {\n    var attributes = _ref3.attributes;\n    var imageUrl = attributes.imageUrl,\n      imageAlt = attributes.imageAlt,\n      content = attributes.content;\n    var blockProps = wp.blockEditor.useBlockProps.save();\n    return /*#__PURE__*/React.createElement(\"div\", blockProps, imageUrl && /*#__PURE__*/React.createElement(\"img\", {\n      src: imageUrl,\n      alt: imageAlt\n    }), /*#__PURE__*/React.createElement(wp.blockEditor.RichText.Content, {\n      tagName: \"p\",\n      value: content\n    }));\n  }\n});\n\n//# sourceURL=webpack://custom-blocks/./src/blocks/block-one/index.js?");

/***/ }),

/***/ "./src/blocks/block-three/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/block-three/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);\n\nwp.blocks.registerBlockType(\"custom/block-three\", {\n  edit: function edit() {\n    var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)();\n    return /*#__PURE__*/React.createElement(\"div\", blockProps, /*#__PURE__*/React.createElement(\"p\", null, \"Custom Block 3 - Editable content here.\"));\n  },\n  save: function save() {\n    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save();\n    return /*#__PURE__*/React.createElement(\"div\", blockProps, /*#__PURE__*/React.createElement(\"p\", null, \"Custom Block 3 - Saved content here.\"));\n  }\n});\n\n//# sourceURL=webpack://custom-blocks/./src/blocks/block-three/index.js?");

/***/ }),

/***/ "./src/blocks/block-two/index.js":
/*!***************************************!*\
  !*** ./src/blocks/block-two/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);\n\nwp.blocks.registerBlockType(\"custom/block-two\", {\n  edit: function edit() {\n    var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)();\n    return /*#__PURE__*/React.createElement(\"div\", blockProps, /*#__PURE__*/React.createElement(\"p\", null, \"Custom Block 2 - Editable content here.\"));\n  },\n  save: function save() {\n    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save();\n    return /*#__PURE__*/React.createElement(\"div\", blockProps, /*#__PURE__*/React.createElement(\"p\", null, \"Custom Block 2 - Saved content here.\"));\n  }\n});\n\n//# sourceURL=webpack://custom-blocks/./src/blocks/block-two/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_block_one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/block-one */ \"./src/blocks/block-one/index.js\");\n/* harmony import */ var _blocks_block_one__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_block_one__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _blocks_block_two__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/block-two */ \"./src/blocks/block-two/index.js\");\n/* harmony import */ var _blocks_block_three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/block-three */ \"./src/blocks/block-three/index.js\");\n/* harmony import */ var _blocks_block_four__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/block-four */ \"./src/blocks/block-four/index.js\");\n/* harmony import */ var _blocks_block_four__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_blocks_block_four__WEBPACK_IMPORTED_MODULE_3__);\n// src/index.js\n\n\n\n\n\n//# sourceURL=webpack://custom-blocks/./src/index.js?");

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = wp.blockEditor;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _textsrc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textsrc.js */ "./src/textsrc.js");


const container = document.querySelector('#content');

function pageLoad (){
    const header = document.createElement('div');
    header.classList.add('header');
    const btnsDiv = document.createElement('div');
    btnsDiv.classList.add('btns');
    const info = document.createElement('div');
    info.classList.add('info');
    const text = document.createElement('div');
    text.classList.add('text');

    //Header
    const title = document.createElement('h1');
    title.textContent = _textsrc_js__WEBPACK_IMPORTED_MODULE_0__.bakeryName;
    header.appendChild(title);

    for(let i = 0; i < 3; i++){
        let btn = document.createElement('button');
        btn.textContent = _textsrc_js__WEBPACK_IMPORTED_MODULE_0__.btnsContent[i];
        btnsDiv.appendChild(btn);
    }
    header.appendChild(btnsDiv);

    //Info
    const img = document.createElement('img');
    img.src = '../src/aboutimg.jpg';
    info.appendChild(img);

    const textTitle = document.createElement('h3');
    const txt = document.createElement('p');
    const secText = document.createElement('p');
    textTitle.textContent = _textsrc_js__WEBPACK_IMPORTED_MODULE_0__.textHead;
    txt.textContent = _textsrc_js__WEBPACK_IMPORTED_MODULE_0__.text1;
    secText.textContent = _textsrc_js__WEBPACK_IMPORTED_MODULE_0__.text2;
    text.appendChild(textTitle);
    text.appendChild(txt);
    text.appendChild(secText);
    info.appendChild(text);
    
    container.appendChild(header);
    container.appendChild(info);

    return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad());

/***/ }),

/***/ "./src/textsrc.js":
/*!************************!*\
  !*** ./src/textsrc.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bakeryName": () => (/* binding */ bakeryName),
/* harmony export */   "btnsContent": () => (/* binding */ btnsContent),
/* harmony export */   "text1": () => (/* binding */ text1),
/* harmony export */   "text2": () => (/* binding */ text2),
/* harmony export */   "textHead": () => (/* binding */ textHead)
/* harmony export */ });
const bakeryName = 'Norway Bakery';
const btnsContent = ['Home', 'Menu', 'Contact'];
const textHead = "Lorem ipsum dolor";
const text1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus sed felis id interdum. Vestibulum mi nisl, consectetur quis urna ac, dignissim vehicula leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ultrices mi eget pharetra congue. Fusce tincidunt est vestibulum accumsan malesuada. Etiam hendrerit porttitor gravida. Proin id ligula a eros pellentesque vestibulum ut non purus. Vestibulum dapibus sapien ligula, vitae feugiat turpis varius id. Suspendisse at cursus erat."
const text2 ="Ne cum omnes vitae theophrastus, ad tollit aliquando inciderint sea. At commune hendrerit eos, sumo animal sea ei. Utamur recteque eu pri, cu electram concludaturque ius, posse habemus ea eam. Eum discere equidem alienum et, sit at dicam legere iriure. Ex regione civibus vim, solum ridens iisque in vim."



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad.js */ "./src/pageLoad.js");


(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE2RTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbURBQVU7QUFDbEM7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0EsMEJBQTBCLG9EQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixpREFBUTtBQUNwQyxzQkFBc0IsOENBQUs7QUFDM0IsMEJBQTBCLDhDQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRHpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ0xBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOcUM7QUFDckM7QUFDQSx3REFBUSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3RleHRzcmMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiYWtlcnlOYW1lLCBidG5zQ29udGVudCwgdGV4dEhlYWQsIHRleHQxLCB0ZXh0Mn0gZnJvbSAnLi90ZXh0c3JjLmpzJztcclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcblxyXG5mdW5jdGlvbiBwYWdlTG9hZCAoKXtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xyXG4gICAgY29uc3QgYnRuc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnRuc0Rpdi5jbGFzc0xpc3QuYWRkKCdidG5zJyk7XHJcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcclxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRleHQuY2xhc3NMaXN0LmFkZCgndGV4dCcpO1xyXG5cclxuICAgIC8vSGVhZGVyXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGJha2VyeU5hbWU7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAzOyBpKyspe1xyXG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidG4udGV4dENvbnRlbnQgPSBidG5zQ29udGVudFtpXTtcclxuICAgICAgICBidG5zRGl2LmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICB9XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYnRuc0Rpdik7XHJcblxyXG4gICAgLy9JbmZvXHJcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGltZy5zcmMgPSAnLi4vc3JjL2Fib3V0aW1nLmpwZyc7XHJcbiAgICBpbmZvLmFwcGVuZENoaWxkKGltZyk7XHJcblxyXG4gICAgY29uc3QgdGV4dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGNvbnN0IHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IHNlY1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0ZXh0VGl0bGUudGV4dENvbnRlbnQgPSB0ZXh0SGVhZDtcclxuICAgIHR4dC50ZXh0Q29udGVudCA9IHRleHQxO1xyXG4gICAgc2VjVGV4dC50ZXh0Q29udGVudCA9IHRleHQyO1xyXG4gICAgdGV4dC5hcHBlbmRDaGlsZCh0ZXh0VGl0bGUpO1xyXG4gICAgdGV4dC5hcHBlbmRDaGlsZCh0eHQpO1xyXG4gICAgdGV4dC5hcHBlbmRDaGlsZChzZWNUZXh0KTtcclxuICAgIGluZm8uYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICBcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYWdlTG9hZCgpOyIsImNvbnN0IGJha2VyeU5hbWUgPSAnTm9yd2F5IEJha2VyeSc7XHJcbmNvbnN0IGJ0bnNDb250ZW50ID0gWydIb21lJywgJ01lbnUnLCAnQ29udGFjdCddO1xyXG5jb25zdCB0ZXh0SGVhZCA9IFwiTG9yZW0gaXBzdW0gZG9sb3JcIjtcclxuY29uc3QgdGV4dDEgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIERvbmVjIG1heGltdXMgc2VkIGZlbGlzIGlkIGludGVyZHVtLiBWZXN0aWJ1bHVtIG1pIG5pc2wsIGNvbnNlY3RldHVyIHF1aXMgdXJuYSBhYywgZGlnbmlzc2ltIHZlaGljdWxhIGxlby4gUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMuIFV0IHVsdHJpY2VzIG1pIGVnZXQgcGhhcmV0cmEgY29uZ3VlLiBGdXNjZSB0aW5jaWR1bnQgZXN0IHZlc3RpYnVsdW0gYWNjdW1zYW4gbWFsZXN1YWRhLiBFdGlhbSBoZW5kcmVyaXQgcG9ydHRpdG9yIGdyYXZpZGEuIFByb2luIGlkIGxpZ3VsYSBhIGVyb3MgcGVsbGVudGVzcXVlIHZlc3RpYnVsdW0gdXQgbm9uIHB1cnVzLiBWZXN0aWJ1bHVtIGRhcGlidXMgc2FwaWVuIGxpZ3VsYSwgdml0YWUgZmV1Z2lhdCB0dXJwaXMgdmFyaXVzIGlkLiBTdXNwZW5kaXNzZSBhdCBjdXJzdXMgZXJhdC5cIlxyXG5jb25zdCB0ZXh0MiA9XCJOZSBjdW0gb21uZXMgdml0YWUgdGhlb3BocmFzdHVzLCBhZCB0b2xsaXQgYWxpcXVhbmRvIGluY2lkZXJpbnQgc2VhLiBBdCBjb21tdW5lIGhlbmRyZXJpdCBlb3MsIHN1bW8gYW5pbWFsIHNlYSBlaS4gVXRhbXVyIHJlY3RlcXVlIGV1IHByaSwgY3UgZWxlY3RyYW0gY29uY2x1ZGF0dXJxdWUgaXVzLCBwb3NzZSBoYWJlbXVzIGVhIGVhbS4gRXVtIGRpc2NlcmUgZXF1aWRlbSBhbGllbnVtIGV0LCBzaXQgYXQgZGljYW0gbGVnZXJlIGlyaXVyZS4gRXggcmVnaW9uZSBjaXZpYnVzIHZpbSwgc29sdW0gcmlkZW5zIGlpc3F1ZSBpbiB2aW0uXCJcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBiYWtlcnlOYW1lLCBcclxuICAgIGJ0bnNDb250ZW50LFxyXG4gICAgdGV4dEhlYWQsXHJcbiAgICB0ZXh0MSxcclxuICAgIHRleHQyXHJcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcGFnZUxvYWQgZnJvbSAnLi9wYWdlTG9hZC5qcyc7XHJcblxyXG5wYWdlTG9hZCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDTEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ042RTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbURBQVU7QUFDbEM7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0EsMEJBQTBCLG9EQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixpREFBUTtBQUNwQyxzQkFBc0IsOENBQUs7QUFDM0IsMEJBQTBCLDhDQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3RleHRzcmMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvcGFnZUxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYmFrZXJ5TmFtZSA9ICdOb3J3YXkgQmFrZXJ5JztcclxuY29uc3QgYnRuc0NvbnRlbnQgPSBbJ0hvbWUnLCAnTWVudScsICdDb250YWN0J107XHJcbmNvbnN0IHRleHRIZWFkID0gXCJMb3JlbSBpcHN1bSBkb2xvclwiO1xyXG5jb25zdCB0ZXh0MSA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRG9uZWMgbWF4aW11cyBzZWQgZmVsaXMgaWQgaW50ZXJkdW0uIFZlc3RpYnVsdW0gbWkgbmlzbCwgY29uc2VjdGV0dXIgcXVpcyB1cm5hIGFjLCBkaWduaXNzaW0gdmVoaWN1bGEgbGVvLiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy4gVXQgdWx0cmljZXMgbWkgZWdldCBwaGFyZXRyYSBjb25ndWUuIEZ1c2NlIHRpbmNpZHVudCBlc3QgdmVzdGlidWx1bSBhY2N1bXNhbiBtYWxlc3VhZGEuIEV0aWFtIGhlbmRyZXJpdCBwb3J0dGl0b3IgZ3JhdmlkYS4gUHJvaW4gaWQgbGlndWxhIGEgZXJvcyBwZWxsZW50ZXNxdWUgdmVzdGlidWx1bSB1dCBub24gcHVydXMuIFZlc3RpYnVsdW0gZGFwaWJ1cyBzYXBpZW4gbGlndWxhLCB2aXRhZSBmZXVnaWF0IHR1cnBpcyB2YXJpdXMgaWQuIFN1c3BlbmRpc3NlIGF0IGN1cnN1cyBlcmF0LlwiXHJcbmNvbnN0IHRleHQyID1cIk5lIGN1bSBvbW5lcyB2aXRhZSB0aGVvcGhyYXN0dXMsIGFkIHRvbGxpdCBhbGlxdWFuZG8gaW5jaWRlcmludCBzZWEuIEF0IGNvbW11bmUgaGVuZHJlcml0IGVvcywgc3VtbyBhbmltYWwgc2VhIGVpLiBVdGFtdXIgcmVjdGVxdWUgZXUgcHJpLCBjdSBlbGVjdHJhbSBjb25jbHVkYXR1cnF1ZSBpdXMsIHBvc3NlIGhhYmVtdXMgZWEgZWFtLiBFdW0gZGlzY2VyZSBlcXVpZGVtIGFsaWVudW0gZXQsIHNpdCBhdCBkaWNhbSBsZWdlcmUgaXJpdXJlLiBFeCByZWdpb25lIGNpdmlidXMgdmltLCBzb2x1bSByaWRlbnMgaWlzcXVlIGluIHZpbS5cIlxyXG5cclxuZXhwb3J0IHtcclxuICAgIGJha2VyeU5hbWUsIFxyXG4gICAgYnRuc0NvbnRlbnQsXHJcbiAgICB0ZXh0SGVhZCxcclxuICAgIHRleHQxLFxyXG4gICAgdGV4dDJcclxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7YmFrZXJ5TmFtZSwgYnRuc0NvbnRlbnQsIHRleHRIZWFkLCB0ZXh0MSwgdGV4dDJ9IGZyb20gJy4vdGV4dHNyYy5qcyc7XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG5cclxuZnVuY3Rpb24gcGFnZUxvYWQgKCl7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcclxuICAgIGNvbnN0IGJ0bnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJ0bnNEaXYuY2xhc3NMaXN0LmFkZCgnYnRucycpO1xyXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ3RleHQnKTtcclxuXHJcbiAgICAvL0hlYWRlclxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBiYWtlcnlOYW1lO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMzsgaSsrKXtcclxuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gYnRuc0NvbnRlbnRbaV07XHJcbiAgICAgICAgYnRuc0Rpdi5hcHBlbmRDaGlsZChidG4pO1xyXG4gICAgfVxyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGJ0bnNEaXYpO1xyXG5cclxuICAgIC8vSW5mb1xyXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWcuc3JjID0gJy4uL3NyYy9hYm91dGltZy5qcGcnO1xyXG4gICAgaW5mby5hcHBlbmRDaGlsZChpbWcpO1xyXG5cclxuICAgIGNvbnN0IHRleHRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBjb25zdCB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBzZWNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdGV4dFRpdGxlLnRleHRDb250ZW50ID0gdGV4dEhlYWQ7XHJcbiAgICB0eHQudGV4dENvbnRlbnQgPSB0ZXh0MTtcclxuICAgIHNlY1RleHQudGV4dENvbnRlbnQgPSB0ZXh0MjtcclxuICAgIHRleHQuYXBwZW5kQ2hpbGQodGV4dFRpdGxlKTtcclxuICAgIHRleHQuYXBwZW5kQ2hpbGQodHh0KTtcclxuICAgIHRleHQuYXBwZW5kQ2hpbGQoc2VjVGV4dCk7XHJcbiAgICBpbmZvLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFnZUxvYWQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UpdatingDom.js":
/*!****************************!*\
  !*** ./src/UpdatingDom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayBoard: () => (/* binding */ displayBoard),\n/* harmony export */   displayHit: () => (/* binding */ displayHit),\n/* harmony export */   displayLose: () => (/* binding */ displayLose),\n/* harmony export */   displayMiss: () => (/* binding */ displayMiss),\n/* harmony export */   displayShips: () => (/* binding */ displayShips),\n/* harmony export */   displayUsersTurn: () => (/* binding */ displayUsersTurn),\n/* harmony export */   displayWin: () => (/* binding */ displayWin),\n/* harmony export */   startGameDom: () => (/* binding */ startGameDom)\n/* harmony export */ });\nvar text = document.querySelector(\".top-text\");\nfunction displayUsersTurn() {\n  text.innerHTML = \"attack the enemy\";\n}\nfunction displayWin() {\n  text.innerHTML = \"you won!\";\n}\nfunction displayLose() {\n  text.innerHTML = \"you lost!\";\n}\nfunction displayBoard(container) {\n  for (var i = 1; i <= 8; i++) {\n    var newRow = document.createElement(\"div\");\n    newRow.classList.add(\"tile\");\n    newRow.classList.add(\"live\");\n    newRow.dataset.y = i;\n    newRow.dataset.x = 1;\n    container.appendChild(newRow);\n    for (var j = 1; j <= 7; j++) {\n      var newTile = document.createElement(\"div\");\n      newTile.classList.add(\"tile\");\n      newTile.classList.add(\"live\");\n      newTile.dataset.y = i;\n      newTile.dataset.x = j + 1;\n      container.appendChild(newTile);\n    }\n  }\n}\nfunction displayShips(player, container) {\n  for (var i = 0; i < player.gameboard.ships.length; i++) {\n    for (var j = 0; j < player.gameboard.ships[i].size; j++) {\n      var shipTile = document.querySelector(\"\".concat(container, \" [data-x=\\\"\").concat(player.gameboard.ships[i].coords[j][0], \"\\\"][data-y=\\\"\").concat(player.gameboard.ships[i].coords[j][1], \"\\\"]\"));\n      shipTile.classList.add(\"placedShip\");\n    }\n  }\n}\nfunction displayHit(attackCoords, container) {\n  var tile = document.querySelector(\"\".concat(container, \" [data-x=\\\"\").concat(attackCoords[0], \"\\\"][data-y=\\\"\").concat(attackCoords[1], \"\\\"]\"));\n  tile.classList.add(\"hit\");\n}\nfunction displayMiss(attackCoords, container) {\n  var tile = document.querySelector(\"\".concat(container, \"  [data-x=\\\"\").concat(attackCoords[0], \"\\\"][data-y=\\\"\").concat(attackCoords[1], \"\\\"]\"));\n  tile.classList.add(\"black\");\n}\nfunction startGameDom() {\n  var buttons = document.querySelector(\".buttons\");\n  buttons.classList.add(\"fade-out\");\n  setTimeout(function () {\n    buttons.remove();\n    displayUsersTurn();\n    var placedContainer = document.querySelector(\".container1\");\n    placedContainer.remove();\n    var boardContainer = document.querySelector(\".middle\");\n    var enemyContainer = document.createElement(\"div\");\n    var playerContainer = document.createElement(\"div\");\n    enemyContainer.classList.add(\"container2\");\n    playerContainer.classList.add(\"container1\");\n    boardContainer.appendChild(playerContainer);\n    boardContainer.appendChild(enemyContainer);\n    displayBoard(playerContainer);\n    displayBoard(enemyContainer);\n  }, 1000);\n}\n\n//# sourceURL=webpack://weather-app/./src/UpdatingDom.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ playGame)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _UpdatingDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdatingDom */ \"./src/UpdatingDom.js\");\n/* harmony import */ var _generateShips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generateShips */ \"./src/generateShips.js\");\n/* harmony import */ var _sounds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sounds */ \"./src/sounds.js\");\n\n\n\n\n\nfunction playGame(shipCoords1, shipCoords2, shipCoords3, shipCoords4) {\n  var player1 = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"player\");\n  var player2 = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"computer\");\n  var randomShips = (0,_generateShips__WEBPACK_IMPORTED_MODULE_2__.generateShips)();\n  player1.gameboard.createShip(3, shipCoords1);\n  player1.gameboard.createShip(4, shipCoords2);\n  player1.gameboard.createShip(2, shipCoords3);\n  player1.gameboard.createShip(5, shipCoords4);\n  player2.gameboard.createShip(2, randomShips[0].coordinates);\n  player2.gameboard.createShip(3, randomShips[1].coordinates);\n  player2.gameboard.createShip(4, randomShips[2].coordinates);\n  player2.gameboard.createShip(5, randomShips[3].coordinates);\n  (0,_UpdatingDom__WEBPACK_IMPORTED_MODULE_1__.displayShips)(player1, \".container1\");\n  mainLoop(player1, player2);\n}\nfunction mainLoop(player1, player2) {\n  var container = document.querySelector(\".container2\");\n  var delayBeforeMainLoop = 1500;\n  var delayBeforeAttack = 1500;\n  addHoverEffect();\n  if (player1.gameboard.checkIfLost() || player2.gameboard.checkIfLost()) {\n    endGame();\n  } else container.addEventListener(\"click\", function eventHandler(e) {\n    var clickedCoords = [Number(e.target.dataset.x), Number(e.target.dataset.y)];\n    if (e.target.classList.contains(\"live\")) {\n      addHoverEffect();\n      player2.gameboard.recieveAttack(clickedCoords, \".container2\");\n      e.target.classList.remove(\"live\");\n      container.removeEventListener(\"click\", eventHandler);\n      if (player1.gameboard.checkIfLost() || player2.gameboard.checkIfLost()) {\n        endGame();\n      } else setTimeout(function () {\n        player1.sendRandomAttack(\".container1\");\n        setTimeout(function () {\n          mainLoop(player1, player2);\n        }, delayBeforeMainLoop);\n      }, delayBeforeAttack);\n    } else return;\n  });\n  function endGame() {\n    var displayFunction = player1.gameboard.checkIfLost() ? loserLoop : winnerLoop;\n    displayFunction();\n  }\n  function addHoverEffect() {\n    var viableAttacks = document.querySelectorAll(\".container2 .live\");\n    viableAttacks.forEach(function (element) {\n      element.classList.toggle(\"viable-attack\");\n    });\n  }\n}\nfunction loserLoop() {\n  (0,_UpdatingDom__WEBPACK_IMPORTED_MODULE_1__.displayLose)();\n  (0,_sounds__WEBPACK_IMPORTED_MODULE_3__.playLoseSound)();\n}\nfunction winnerLoop() {\n  (0,_UpdatingDom__WEBPACK_IMPORTED_MODULE_1__.displayWin)();\n  (0,_sounds__WEBPACK_IMPORTED_MODULE_3__.playWinSound)();\n}\n\n//# sourceURL=webpack://weather-app/./src/game.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _UpdatingDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdatingDom */ \"./src/UpdatingDom.js\");\n/* harmony import */ var _sounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sounds */ \"./src/sounds.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n\n\nvar gameboard = /*#__PURE__*/function () {\n  function gameboard() {\n    _classCallCheck(this, gameboard);\n    this.misses = {};\n    this.attacks = {};\n    this.ships = [];\n    this.sunkenShips = 0;\n    this.turns = 0;\n  }\n  _createClass(gameboard, [{\n    key: \"createShip\",\n    value: function createShip(size, coords) {\n      this.ships.push(new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](size, coords));\n    }\n  }, {\n    key: \"recieveAttack\",\n    value: function recieveAttack(attackCoords, container) {\n      this.logAttacks(attackCoords);\n      var preHits = this.getTotalHits();\n      for (var i = 0; i <= this.ships.length - 1; i++) {\n        for (var j = 0; j <= this.ships[i].size - 1; j++) {\n          if (attackCoords.toString() == this.ships[i].coords[j]) {\n            this.turns++;\n            this.ships[i].hit();\n            (0,_sounds__WEBPACK_IMPORTED_MODULE_2__.playHitSound)();\n            console.log(\"hit\");\n            (0,_UpdatingDom__WEBPACK_IMPORTED_MODULE_1__.displayHit)(attackCoords, container);\n            if (this.ships[i].isSunk()) {\n              console.log(\"this shit sunk\");\n              this.sunkenShips++;\n              this.checkIfLost();\n            }\n          }\n        }\n      }\n      var postHits = this.getTotalHits();\n      if (preHits == postHits) {\n        this.logMisses(attackCoords);\n        this.turns++;\n        (0,_sounds__WEBPACK_IMPORTED_MODULE_2__.playMissSound)();\n        (0,_UpdatingDom__WEBPACK_IMPORTED_MODULE_1__.displayMiss)(attackCoords, container);\n      } else return;\n    }\n  }, {\n    key: \"getTotalHits\",\n    value: function getTotalHits() {\n      var tempHits = 0;\n      for (var i = 0; i < this.ships.length; i++) {\n        tempHits = tempHits + this.ships[i].hits;\n      }\n      return tempHits;\n    }\n  }, {\n    key: \"logMisses\",\n    value: function logMisses(attackCoords) {\n      for (var i = 0; i < 64; i++) {\n        if (!this.misses[i]) {\n          this.misses[i] = attackCoords;\n          return;\n        }\n      }\n    }\n  }, {\n    key: \"logAttacks\",\n    value: function logAttacks(attackCoords) {\n      for (var i = 0; i < 64; i++) {\n        if (!this.attacks[i]) {\n          this.attacks[i] = attackCoords;\n          return;\n        }\n      }\n    }\n  }, {\n    key: \"checkIfLost\",\n    value: function checkIfLost() {\n      return this.sunkenShips === this.ships.length;\n    }\n  }]);\n  return gameboard;\n}();\n\n\n//# sourceURL=webpack://weather-app/./src/gameboard.js?");

/***/ }),

/***/ "./src/generateShips.js":
/*!******************************!*\
  !*** ./src/generateShips.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateShips: () => (/* binding */ generateShips)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction generateShips() {\n  var boardSize = 8;\n  var shipSizes = [2, 3, 4, 5];\n  var ships = [];\n  function overlaps(shipCoords) {\n    var _iterator = _createForOfIteratorHelper(ships),\n      _step;\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var ship = _step.value;\n        var _iterator2 = _createForOfIteratorHelper(ship.coordinates),\n          _step2;\n        try {\n          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n            var coord = _step2.value;\n            var _iterator3 = _createForOfIteratorHelper(shipCoords),\n              _step3;\n            try {\n              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n                var newCoord = _step3.value;\n                if (coord[0] === newCoord[0] && coord[1] === newCoord[1]) {\n                  return true;\n                }\n              }\n            } catch (err) {\n              _iterator3.e(err);\n            } finally {\n              _iterator3.f();\n            }\n          }\n        } catch (err) {\n          _iterator2.e(err);\n        } finally {\n          _iterator2.f();\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n    return false;\n  }\n  function generateShipCoordinates(size) {\n    var shipCoords = [];\n    var row, col;\n    var orientation = Math.random() < 0.5 ? \"horizontal\" : \"vertical\";\n    if (orientation === \"horizontal\") {\n      row = Math.floor(Math.random() * boardSize) + 1;\n      col = Math.floor(Math.random() * (boardSize - size)) + 1;\n    } else {\n      row = Math.floor(Math.random() * (boardSize - size)) + 1;\n      col = Math.floor(Math.random() * boardSize) + 1;\n    }\n    for (var i = 0; i < size; i++) {\n      if (orientation === \"horizontal\") {\n        shipCoords.push([row, col + i]);\n      } else {\n        shipCoords.push([row + i, col]);\n      }\n    }\n    return shipCoords;\n  }\n  while (ships.length < 4) {\n    ships.length = 0;\n    var isOverlap = false;\n    var _iterator4 = _createForOfIteratorHelper(shipSizes),\n      _step4;\n    try {\n      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {\n        var size = _step4.value;\n        var shipCoords = generateShipCoordinates(size);\n        if (overlaps(shipCoords)) {\n          isOverlap = true;\n          break;\n        } else {\n          ships.push({\n            size: size,\n            coordinates: shipCoords\n          });\n        }\n      }\n    } catch (err) {\n      _iterator4.e(err);\n    } finally {\n      _iterator4.f();\n    }\n    if (isOverlap) {\n      continue;\n    }\n  }\n  return ships;\n}\n\n//# sourceURL=webpack://weather-app/./src/generateShips.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _UpdatingDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdatingDom */ \"./src/UpdatingDom.js\");\n/* harmony import */ var _shipPlacement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shipPlacement */ \"./src/shipPlacement.js\");\n/* harmony import */ var _images_github_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/github.svg */ \"./src/images/github.svg\");\n\n\n\n\n\nvar git = document.getElementById(\"git\");\ngit.src = _images_github_svg__WEBPACK_IMPORTED_MODULE_3__;\nvar container = document.querySelector(\".container1\");\n(0,_UpdatingDom__WEBPACK_IMPORTED_MODULE_1__.displayBoard)(container);\n(0,_shipPlacement__WEBPACK_IMPORTED_MODULE_2__.placeShips)();\n(0,_shipPlacement__WEBPACK_IMPORTED_MODULE_2__.rotateShip)();\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar player = /*#__PURE__*/function () {\n  function player(name) {\n    _classCallCheck(this, player);\n    this.name = name;\n    this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n  _createClass(player, [{\n    key: \"sendRandomAttack\",\n    value: function sendRandomAttack(container) {\n      var temp = this.getRandomCoords();\n      var keysArray = Object.keys(this.gameboard.attacks);\n      var count = keysArray.length;\n      var isValid = true;\n      for (var i = 0; i < count; i++) {\n        if (this.looseArrayEquality(temp, this.gameboard.attacks[i])) {\n          isValid = false;\n        } else ;\n      }\n      if (isValid == false) {\n        this.sendRandomAttack(container);\n      } else {\n        this.gameboard.recieveAttack(temp, container);\n        return;\n      }\n    }\n  }, {\n    key: \"getRandomCoords\",\n    value: function getRandomCoords() {\n      var rndInt = Math.floor(Math.random() * 8) + 1;\n      var rndInt2 = Math.floor(Math.random() * 8) + 1;\n      return [rndInt, rndInt2];\n    }\n  }, {\n    key: \"looseArrayEquality\",\n    value: function looseArrayEquality(temp, attackCord) {\n      return temp.every(function (value, index) {\n        return value == attackCord[index];\n      });\n    }\n  }]);\n  return player;\n}();\n\n\n//# sourceURL=webpack://weather-app/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ship)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar ship = /*#__PURE__*/function () {\n  function ship(size, coords) {\n    _classCallCheck(this, ship);\n    this.size = size;\n    this.hits = 0;\n    this.coords = coords;\n  }\n  _createClass(ship, [{\n    key: \"hit\",\n    value: function hit() {\n      return this.hits++;\n    }\n  }, {\n    key: \"isSunk\",\n    value: function isSunk() {\n      if (this.hits == this.size) {\n        return true;\n      } else return false;\n    }\n  }]);\n  return ship;\n}();\n\n\n//# sourceURL=webpack://weather-app/./src/ship.js?");

/***/ }),

/***/ "./src/shipPlacement.js":
/*!******************************!*\
  !*** ./src/shipPlacement.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   placeShips: () => (/* binding */ placeShips),\n/* harmony export */   rotateShip: () => (/* binding */ rotateShip)\n/* harmony export */ });\n/* harmony import */ var _UpdatingDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdatingDom */ \"./src/UpdatingDom.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _sounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sounds */ \"./src/sounds.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = \"function\" == typeof Symbol ? Symbol : {}, a = i.iterator || \"@@iterator\", c = i.asyncIterator || \"@@asyncIterator\", u = i.toStringTag || \"@@toStringTag\"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, \"\"); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, \"_invoke\", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: \"normal\", arg: t.call(e, r) }; } catch (t) { return { type: \"throw\", arg: t }; } } e.wrap = wrap; var h = \"suspendedStart\", l = \"suspendedYield\", f = \"executing\", s = \"completed\", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { [\"next\", \"throw\", \"return\"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if (\"throw\" !== c.type) { var u = c.arg, h = u.value; return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) { invoke(\"next\", t, i, a); }, function (t) { invoke(\"throw\", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke(\"throw\", t, i, a); }); } a(c.arg); } var r; o(this, \"_invoke\", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error(\"Generator is already running\"); if (o === s) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = f; var p = tryCatch(e, r, n); if (\"normal\" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y; var i = tryCatch(o, e.iterator, r.arg); if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = \"normal\", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: \"root\" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || \"\" === e) { var r = e[a]; if (r) return r.call(e); if (\"function\" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) { var e = \"function\" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () { return this; }), define(g, \"toString\", function () { return \"[object Generator]\"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if (\"root\" === i.tryLoc) return handle(\"end\"); if (i.tryLoc <= this.prev) { var c = n.call(i, \"catchLoc\"), u = n.call(i, \"finallyLoc\"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error(\"try statement without catch or finally\"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) { var i = o; break; } } i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, \"catch\": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if (\"throw\" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, \"next\" === this.method && (this.arg = t), y; } }, e; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar direction = 0;\nfunction rotateShip() {\n  var rotate = document.getElementById(\"rotate\");\n  rotate.addEventListener(\"click\", function () {\n    if (direction == 0) {\n      direction = 1;\n      console.log(direction);\n    } else if (direction == 1) {\n      direction = 0;\n    }\n  });\n}\nfunction placeShips() {\n  return _placeShips.apply(this, arguments);\n}\nfunction _placeShips() {\n  _placeShips = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {\n    var startButton;\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          _context.next = 3;\n          return placeShip(3, \"ship1\");\n        case 3:\n          _context.next = 5;\n          return placeShip(4, \"ship2\");\n        case 5:\n          _context.next = 7;\n          return placeShip(2, \"ship3\");\n        case 7:\n          _context.next = 9;\n          return placeShip(5, \"ship4\");\n        case 9:\n          startButton = document.querySelector(\".start\");\n          startButton.addEventListener(\"click\", getUserShipCoords);\n          _context.next = 16;\n          break;\n        case 13:\n          _context.prev = 13;\n          _context.t0 = _context[\"catch\"](0);\n          console.error(\"Failed to place ships:\", _context.t0);\n        case 16:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee, null, [[0, 13]]);\n  }));\n  return _placeShips.apply(this, arguments);\n}\nfunction placeShip(size, shipNumber) {\n  var tiles = document.querySelectorAll(\".tile\");\n  return new Promise(function (resolve, reject) {\n    tiles.forEach(function (tile) {\n      tile.addEventListener(\"mouseenter\", handleMouseEnter);\n      tile.addEventListener(\"mouseleave\", handleMouseLeave);\n      tile.addEventListener(\"click\", handleMouseClick);\n    });\n    function removeEventListeners() {\n      tiles.forEach(function (tile) {\n        tile.removeEventListener(\"mouseenter\", handleMouseEnter);\n        tile.removeEventListener(\"mouseleave\", handleMouseLeave);\n        tile.removeEventListener(\"click\", handleMouseClick);\n      });\n    }\n    function handleMouseEnter(event) {\n      var tile = event.target;\n      var xCord = tile.dataset.x;\n      var yCord = tile.dataset.y;\n      try {\n        if (direction == 1) {\n          paintShip(0, 1);\n        } else if (direction == 0) {\n          paintShip(1, 0);\n        }\n      } catch (error) {\n        console.error(\"An error occurred:\", error);\n      }\n      function paintShip(x, y) {\n        for (var i = 0; i < size; i++) {\n          var ship = document.querySelector(\"[data-x=\\\"\".concat(Number(xCord) + i * x, \"\\\"][data-y=\\\"\").concat(Number(yCord) + i * y, \"\\\"]\"));\n          if (ship) {\n            if (ship.classList.contains(\"placedShip\")) {\n              console.error(\"Invalid ship placement\");\n              tile.removeEventListener(\"click\", handleMouseClick);\n              return;\n            }\n            ship.classList.add(\"prePlacedShip\");\n          } else {\n            console.error(\"Invalid ship placement\");\n            tile.removeEventListener(\"click\", handleMouseClick);\n            return;\n          }\n        }\n      }\n    }\n    function handleMouseLeave(event) {\n      var tile = event.target;\n      var ship1 = document.querySelectorAll(\".prePlacedShip\");\n      ship1.forEach(function (ship) {\n        ship.classList.remove(\"prePlacedShip\");\n      });\n    }\n    function handleMouseClick(event) {\n      (0,_sounds__WEBPACK_IMPORTED_MODULE_2__.playPopSound)();\n      var shipTiles = document.querySelectorAll(\".prePlacedShip\");\n      shipTiles.forEach(function (tile) {\n        tile.classList.add(\"placedShip\");\n        tile.classList.add(shipNumber);\n      });\n      removeEventListeners();\n      resolve();\n    }\n  });\n}\nfunction getUserShipCoords() {\n  var ship1 = {};\n  var ship2 = {};\n  var ship3 = {};\n  var ship4 = {};\n  for (var i = 1; i <= 4; i++) {\n    var ship = document.querySelectorAll(\".ship\".concat(i));\n    for (var j = 0; j < ship.length; j++) {\n      var x = parseInt(ship[j].dataset.x);\n      var y = parseInt(ship[j].dataset.y);\n      switch (i) {\n        case 1:\n          ship1[j] = [x, y];\n          break;\n        case 2:\n          ship2[j] = [x, y];\n          break;\n        case 3:\n          ship3[j] = [x, y];\n          break;\n        case 4:\n          ship4[j] = [x, y];\n          break;\n        default:\n          break;\n      }\n    }\n  }\n  (0,_UpdatingDom__WEBPACK_IMPORTED_MODULE_0__.startGameDom)();\n  setTimeout(function () {\n    (0,_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ship1, ship2, ship3, ship4);\n  }, 1000);\n}\n\n//# sourceURL=webpack://weather-app/./src/shipPlacement.js?");

/***/ }),

/***/ "./src/sounds.js":
/*!***********************!*\
  !*** ./src/sounds.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   playHitSound: () => (/* binding */ playHitSound),\n/* harmony export */   playLoseSound: () => (/* binding */ playLoseSound),\n/* harmony export */   playMissSound: () => (/* binding */ playMissSound),\n/* harmony export */   playPopSound: () => (/* binding */ playPopSound),\n/* harmony export */   playWinSound: () => (/* binding */ playWinSound)\n/* harmony export */ });\n/* harmony import */ var _sounds_hit_sound_wav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sounds/hit-sound.wav */ \"./src/sounds/hit-sound.wav\");\n/* harmony import */ var _sounds_miss_sound_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sounds/miss-sound.wav */ \"./src/sounds/miss-sound.wav\");\n/* harmony import */ var _sounds_pop_sound_wav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sounds/pop-sound.wav */ \"./src/sounds/pop-sound.wav\");\n/* harmony import */ var _sounds_lose_sound_wav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sounds/lose-sound.wav */ \"./src/sounds/lose-sound.wav\");\n/* harmony import */ var _sounds_win_sound_wav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sounds/win-sound.wav */ \"./src/sounds/win-sound.wav\");\n\n\n\n\n\nfunction playHitSound() {\n  var myAudio = new Audio(_sounds_hit_sound_wav__WEBPACK_IMPORTED_MODULE_0__);\n  myAudio.play();\n}\nfunction playMissSound() {\n  var myAudio = new Audio(_sounds_miss_sound_wav__WEBPACK_IMPORTED_MODULE_1__);\n  myAudio.play();\n}\nfunction playPopSound() {\n  var myAudio = new Audio(_sounds_pop_sound_wav__WEBPACK_IMPORTED_MODULE_2__);\n  myAudio.play();\n}\nfunction playLoseSound() {\n  var myAudio = new Audio(_sounds_lose_sound_wav__WEBPACK_IMPORTED_MODULE_3__);\n  myAudio.play();\n}\nfunction playWinSound() {\n  var myAudio = new Audio(_sounds_win_sound_wav__WEBPACK_IMPORTED_MODULE_4__);\n  myAudio.play();\n}\n\n//# sourceURL=webpack://weather-app/./src/sounds.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body,\nhtml {\n  height: 100vh;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n  background: linear-gradient(\n    -45deg,\n    #da8414,\n    #7b2e2e,\n    #00603d,\n    #196569,\n    #1e2384\n  );\n  background-size: 400% 400%;\n  animation: gradient 15s ease infinite;\n  overflow: hidden;\n}\n\n@keyframes gradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\n@keyframes sonarAnimation {\n  0% {\n    transform: scale(0.1);\n    opacity: 0.6;\n  }\n  100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n\n.container {\n  height: 100%;\n  padding: 0;\n  margin: 0;\n}\n\n.header {\n  height: 20%;\n  display: flex;\n  justify-content: space-around;\n}\n\n.main {\n  height: 75%;\n  display: flex;\n  gap: 100px;\n  align-items: center;\n  flex-direction: column;\n}\n\n.top {\n  font-family: \"Black Ops One\", system-ui;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 100px;\n  align-items: center;\n  margin: 0;\n  height: 15%;\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.middle {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 100px;\n}\n\n.footer {\n  height: 5%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n}\n\n.title {\n  font-family: \"Black Ops One\", system-ui;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 250px;\n  align-items: center;\n  margin: 0;\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.live {\n  cursor: pointer;\n}\n\n.container1,\n.container2 {\n  height: 700px;\n  width: 700px;\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  grid-template-rows: repeat(8, 1fr);\n  gap: 10px;\n  position: relative;\n  perspective: 800px;\n}\n\n.container2 {\n  opacity: 0;\n  animation: fadeIn 2s forwards;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.buttons {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  justify-content: center;\n  opacity: 1;\n  transform: translateX(0);\n  transition: opacity 1s ease, transform 1s ease;\n}\n\n.buttons.fade-out {\n  opacity: 0;\n  transform: translateX(200px);\n}\n\n.start,\n.rotate {\n  font-size: 35px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.6);\n  font-family: \"Open Sans\", sans-serif;\n  text-align: center;\n  border: none;\n  border-radius: 8px;\n  padding: 12px 24px;\n  background-color: #243959;\n  width: 60%;\n  max-width: 300px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\n.start:hover,\n.rotate:hover {\n  background-color: #182436;\n}\n\n.rotate:active {\n  background-color: #7f7f7f;\n}\n\n.sig {\n  height: 100%;\n  font-size: 60px;\n  font-weight: 100;\n  color: rgba(255, 255, 255, 0.6);\n  font-family: \"Open Sans\", sans-serif;\n  text-align: center;\n  margin: 0;\n}\n\n#git {\n  height: 100%;\n  width: 80px;\n}\n\n.tile {\n  border: 3px solid rgba(254, 254, 254, 0.8);\n  background: none;\n}\n\n.viable-attack {\n  transition: all 1s ease;\n}\n\n.container2 .viable-attack:hover {\n  background-color: rgba(255, 255, 255, 0.4);\n}\n\n@keyframes rotateY {\n  from {\n    transform: rotateY(0deg);\n  }\n  to {\n    transform: rotateY(180deg);\n  }\n}\n\n.black {\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.4);\n  position: relative;\n  transform-style: preserve-3d;\n  animation: rotateY 1s linear forwards;\n}\n\n.black:before,\n.black:after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  backface-visibility: hidden;\n}\n\n.black:before {\n  background-color: rgba(255, 255, 255, 0.4); /* Front color */\n}\n\n.black:after {\n  background-color: #000000; /* Back color */\n  transform: rotateY(180deg);\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.8);\n}\n\n.hit,\n.hit.placedShip {\n  position: relative;\n  transform-style: preserve-3d;\n  animation: rotateY 1s linear forwards;\n}\n\n.hit.placedShip:before,\n.hit.placedShip:after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  backface-visibility: hidden;\n}\n\n.hit:before,\n.hit:after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  backface-visibility: hidden;\n}\n\n.hit:before {\n  background-color: rgba(255, 255, 255, 0.4); /* Front color */\n  box-shadow: none;\n}\n\n.hit.placedShip:before {\n  background-color: rgba(0, 255, 0, 0.4); /* Front color */\n  box-shadow: 0 0 10px 5px rgba(0, 255, 0, 0.8);\n}\n\n.hit:after {\n  background-color: rgb(252, 0, 0); /* Back color */\n  transform: rotateY(180deg);\n  box-shadow: 0 0 10px 5px rgba(252, 0, 0, 0.8);\n}\n\n.hit.placedShip:after {\n  background-color: rgb(252, 0, 0); /* Back color */\n  transform: rotateY(180deg);\n  box-shadow: 0 0 10px 5px rgba(252, 0, 0, 0.8);\n}\n\n.placedShip {\n  background-color: rgba(0, 255, 0, 0.4);\n}\n\n.prePlacedShip {\n  transition: all 1s ease;\n}\n\n.prePlacedShip {\n  background-color: rgba(0, 255, 0, 0.4);\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/images/github.svg":
/*!*******************************!*\
  !*** ./src/images/github.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"46b6ac7bb6c8c641ceb4.svg\";\n\n//# sourceURL=webpack://weather-app/./src/images/github.svg?");

/***/ }),

/***/ "./src/sounds/hit-sound.wav":
/*!**********************************!*\
  !*** ./src/sounds/hit-sound.wav ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"05e4b4620a0756f099cd.wav\";\n\n//# sourceURL=webpack://weather-app/./src/sounds/hit-sound.wav?");

/***/ }),

/***/ "./src/sounds/lose-sound.wav":
/*!***********************************!*\
  !*** ./src/sounds/lose-sound.wav ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ecae68bcf35952e635c1.wav\";\n\n//# sourceURL=webpack://weather-app/./src/sounds/lose-sound.wav?");

/***/ }),

/***/ "./src/sounds/miss-sound.wav":
/*!***********************************!*\
  !*** ./src/sounds/miss-sound.wav ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"492ea39fc7b5a9d83398.wav\";\n\n//# sourceURL=webpack://weather-app/./src/sounds/miss-sound.wav?");

/***/ }),

/***/ "./src/sounds/pop-sound.wav":
/*!**********************************!*\
  !*** ./src/sounds/pop-sound.wav ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ae2de8e7e136703f3626.wav\";\n\n//# sourceURL=webpack://weather-app/./src/sounds/pop-sound.wav?");

/***/ }),

/***/ "./src/sounds/win-sound.wav":
/*!**********************************!*\
  !*** ./src/sounds/win-sound.wav ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ce2d94cfc6b215916553.wav\";\n\n//# sourceURL=webpack://weather-app/./src/sounds/win-sound.wav?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Move.ts":
/*!*********************!*\
  !*** ./src/Move.ts ***!
  \*********************/
/*! namespace exports */
/*! export Move [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Move\": () => /* binding */ Move\n/* harmony export */ });\n/* harmony import */ var _Pointer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pointer */ \"./src/Pointer.ts\");\n/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decorators */ \"./src/decorators.ts\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (undefined && undefined.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\n\r\n\r\nvar Move = /** @class */ (function () {\r\n    function Move(arr) {\r\n        var _this = this;\r\n        this.canSelect = true;\r\n        this.point = 0;\r\n        this.time = 0;\r\n        new _Pointer__WEBPACK_IMPORTED_MODULE_0__.Pointer;\r\n        _Pointer__WEBPACK_IMPORTED_MODULE_0__.Pointer.setpoint(this.point);\r\n        this.arr = arr;\r\n        this.path = [];\r\n        this.col = [\"\", \"green\", \"blue\", \"aquamarine\", \"yellow\", \"pink\", \"grey\", \"black\"];\r\n        this.nextcol = [];\r\n        this.setnextcol();\r\n        this.update();\r\n        // console.log(this.path)\r\n        // console.log(this.arr)\r\n        document.body.onclick = function (e) {\r\n            // console.log(\"klik\")\r\n            var el = e.target;\r\n            if (el.parentElement.id == \"game\") {\r\n                _this.click(el);\r\n            }\r\n        };\r\n        document.body.onmousemove = function (e) {\r\n            var el = e.target;\r\n            // console.log(el)\r\n            if (el.className == \"pole\") {\r\n                // this.mousemove(e.pageX, e.pageY, this);\r\n                if (_this.is_down) {\r\n                    // console.log(\"POLE\")\r\n                    _this.flag = true;\r\n                    _this.path = [];\r\n                    _this.ret(el);\r\n                }\r\n            }\r\n        };\r\n        console.log(this.time);\r\n        this.interv();\r\n    }\r\n    Move.prototype.interv = function () {\r\n        var _this = this;\r\n        var timerId = setInterval(function () {\r\n            _this.time++;\r\n            document.getElementById(\"czas\").innerHTML = \"Czas gry: \" + _this.time + \" s\";\r\n        }, 1000);\r\n    };\r\n    Move.prototype.setnextcol = function () {\r\n        this.nextcol = [];\r\n        document.getElementById(\"preview\").innerHTML = \"\";\r\n        for (var i = 0; i < 3; i++) {\r\n            var c = Math.floor(Math.random() * 7);\r\n            c = c + 1;\r\n            var r = -c;\r\n            var f = r.toString();\r\n            console.log(r);\r\n            this.nextcol.push(f);\r\n            var circle = document.createElement(\"div\");\r\n            circle.className = \"kula\";\r\n            circle.style.backgroundColor = this.col[c];\r\n            document.getElementById(\"preview\").appendChild(circle);\r\n        }\r\n        console.log(this.nextcol);\r\n    };\r\n    Move.prototype.next = function () {\r\n        var count = 0;\r\n        for (var y = 1; y < 10; y++) {\r\n            for (var x = 1; x < 10; x++) {\r\n                if (parseInt(this.arr[y][x]) < 0) {\r\n                    count++;\r\n                }\r\n            }\r\n        }\r\n        if (count >= 78) {\r\n            alert(\"Koniec gry\\nUzbierano \" + this.point + \" punktów\\nCzas gry: \" + this.time + \" sekund\");\r\n            window.location.reload(true);\r\n        }\r\n        else {\r\n            for (var t = 0; t < this.nextcol.length; t++) {\r\n                var y = Math.floor(Math.random() * 9);\r\n                var x = Math.floor(Math.random() * 9);\r\n                if (parseInt(this.arr[y + 1][x + 1]) < 0) {\r\n                    t--;\r\n                }\r\n                else {\r\n                    this.arr[y + 1][x + 1] = this.nextcol[t];\r\n                }\r\n            }\r\n            this.update();\r\n            this.setnextcol();\r\n        }\r\n    };\r\n    Move.prototype.ret = function (el) {\r\n        // console.log(el.id)\r\n        var x = parseInt(el.id.split(\"_\")[1]);\r\n        var y = parseInt(el.id.split(\"_\")[2]);\r\n        if (this.arr[x][y] != \"S\" && this.arr[x][y] != \"M\" && parseInt(this.arr[x][y]) >= 0) {\r\n            // if (this.arr[x][y] != \"S\" && this.arr[x][y] != \"M\" && this.arr[x][y] != \"X\") {\r\n            // console.log(this.arr[x][y])\r\n            this.retrek(parseInt(this.arr[x][y]), el, []);\r\n        }\r\n    };\r\n    Move.prototype.retrek = function (num, el, tab) {\r\n        // this.path.push(el.id)\r\n        tab.push(el.id);\r\n        var x = parseInt(el.id.split(\"_\")[1]);\r\n        var y = parseInt(el.id.split(\"_\")[2]);\r\n        var min = num - 1;\r\n        // console.log(x, y, num-1)\r\n        if (this.arr[x - 1][y] == min.toString() && this.flag) {\r\n            // console.log(\"MINUS\")\r\n            this.retrek(min, document.getElementById(\"i_\" + (x - 1) + \"_\" + y), tab);\r\n            // console.log(document.getElementById(`i_${x - 1}_${y}`))\r\n        }\r\n        if (this.arr[x][y - 1] == min.toString() && this.flag) {\r\n            this.retrek(min, document.getElementById(\"i_\" + x + \"_\" + (y - 1)), tab);\r\n        }\r\n        if (this.arr[x + 1][y] == min.toString() && this.flag) {\r\n            this.retrek(min, document.getElementById(\"i_\" + (x + 1) + \"_\" + y), tab);\r\n        }\r\n        if (this.arr[x][y + 1] == min.toString() && this.flag) {\r\n            this.retrek(min, document.getElementById(\"i_\" + x + \"_\" + (y + 1)), tab);\r\n        }\r\n        if (min == 0) {\r\n            if (this.flag) {\r\n                this.flag = false;\r\n                this.path = tab;\r\n                this.show();\r\n            }\r\n        }\r\n    };\r\n    Move.prototype.show = function () {\r\n        for (var y = 1; y < 10; y++) {\r\n            for (var x = 1; x < 10; x++) {\r\n                if (parseInt(this.arr[y][x]) > 0) {\r\n                    document.getElementById(\"i_\" + y + \"_\" + x).style.backgroundColor = \"white\";\r\n                }\r\n            }\r\n        }\r\n        for (var i = 0; i < this.path.length; i++) {\r\n            document.getElementById(this.path[i]).style.backgroundColor = \"red\";\r\n        }\r\n    };\r\n    Move.prototype.click = function (el) {\r\n        var _this = this;\r\n        var x = parseInt(el.id.split(\"_\")[1]);\r\n        var y = parseInt(el.id.split(\"_\")[2]);\r\n        if (this.is_down) {\r\n            //meta\r\n            // console.log(this.path)\r\n            // console.log(el.id)\r\n            if (this.sx == x && this.sy == y) {\r\n                // console.log(\"odklik\")\r\n                this.is_down = false;\r\n                // this.arr[x][y] = this.val\r\n                for (var y = 1; y < 10; y++) {\r\n                    for (var x = 1; x < 10; x++) {\r\n                        document.getElementById(\"i_\" + y + \"_\" + x).style.backgroundColor = \"white\";\r\n                        if (parseInt(this.arr[x][y]) > 0) {\r\n                            this.arr[x][y] = \"0\";\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n            else if (parseInt(this.arr[x][y]) < 0) {\r\n                for (var i = 1; i < 10; i++) {\r\n                    for (var j = 1; j < 10; j++) {\r\n                        document.getElementById(\"i_\" + j + \"_\" + i).style.backgroundColor = \"white\";\r\n                        if (parseInt(this.arr[j][i]) > 0) {\r\n                            this.arr[j][i] = \"0\";\r\n                        }\r\n                    }\r\n                }\r\n                document.getElementById(\"i_\" + x + \"_\" + y).style.backgroundColor = \"red\";\r\n                this.arr[this.sx][this.sy] = this.val;\r\n                this.is_down = false;\r\n                this.path = [];\r\n                this.is_down = true;\r\n                this.val = this.arr[x][y];\r\n                this.sx = x;\r\n                this.sy = y;\r\n                this.rek(this.sx, this.sy, 0);\r\n            }\r\n            if (this.path.includes(el.id)) {\r\n                if (parseInt(this.arr[x][y]) > 0 || this.arr[x][y] != \"S\") {\r\n                    this.is_down = false;\r\n                    this.arr[x][y] = this.val;\r\n                    this.krok = 1;\r\n                    this.arr[this.sx][this.sy] = \"0\";\r\n                    console.log(\"przestawiono\");\r\n                    var ddd = setTimeout(function () {\r\n                        _this.next();\r\n                    }, 500);\r\n                    // console.log(this.sx, this.sy)\r\n                    for (var y = 1; y < 10; y++) {\r\n                        for (var x = 1; x < 10; x++) {\r\n                            document.getElementById(\"i_\" + y + \"_\" + x).style.backgroundColor = \"white\";\r\n                            if (parseInt(this.arr[x][y]) > 0) {\r\n                                this.arr[x][y] = \"0\";\r\n                            }\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            if (parseInt(this.arr[x][y]) < 0) {\r\n                if (this.arr[x - 1][y] == \"0\" || this.arr[x + 1][y] == \"0\" || this.arr[x][y - 1] == \"0\" || this.arr[x][y + 1] == \"0\") {\r\n                    this.is_down = true;\r\n                    document.getElementById(\"i_\" + x + \"_\" + y).style.backgroundColor = \"red\";\r\n                    this.val = this.arr[x][y];\r\n                    this.sx = x;\r\n                    this.sy = y;\r\n                    this.rek(this.sx, this.sy, 0);\r\n                }\r\n            }\r\n        }\r\n        this.update();\r\n    };\r\n    Move.prototype.rek = function (x, y, step) {\r\n        // this.krok++\r\n        // console.log(this.krok)\r\n        if (this.arr[x - 1][y] == \"0\" || parseInt(this.arr[x - 1][y]) > step + 1) {\r\n            this.arr[x - 1][y] = (step + 1).toString();\r\n            this.rek(x - 1, y, step + 1);\r\n        }\r\n        if (this.arr[x][y - 1] == \"0\" || parseInt(this.arr[x][y - 1]) > step + 1) {\r\n            this.arr[x][y - 1] = (step + 1).toString();\r\n            this.rek(x, y - 1, step + 1);\r\n        }\r\n        if (this.arr[x][y + 1] == \"0\" || parseInt(this.arr[x][y + 1]) > step + 1) {\r\n            this.arr[x][y + 1] = (step + 1).toString();\r\n            this.rek(x, y + 1, step + 1);\r\n        }\r\n        if (this.arr[x + 1][y] == \"0\" || parseInt(this.arr[x + 1][y]) > step + 1) {\r\n            this.arr[x + 1][y] = (step + 1).toString();\r\n            this.rek(x + 1, y, step + 1);\r\n        }\r\n    };\r\n    Move.prototype.check = function () {\r\n        this.def = [];\r\n        this.d = false;\r\n        for (var y = 1; y < 10; y++) {\r\n            for (var x = 1; x < 10; x++) {\r\n                // console.log(y, x)\r\n                if (parseInt(this.arr[y][x]) < 0) {\r\n                    this.checkext(y, x, this.arr[y][x], 1, [], 0);\r\n                    // this.del(this.def)\r\n                }\r\n            }\r\n        }\r\n    };\r\n    Move.prototype.checkext = function (y, x, num, step, tab, dir) {\r\n        var _this = this;\r\n        // console.log(\"rekourencja\")\r\n        // console.log(y, x)\r\n        tab.push(\"i_\" + y + \"_\" + x);\r\n        if (this.arr[y + 1][x + 1] == num && dir == 0 || this.arr[y + 1][x + 1] == num && dir == 3) {\r\n            //3\r\n            this.checkext(y + 1, x + 1, this.arr[y + 1][x + 1], step + 1, tab, 3);\r\n        }\r\n        else if (this.arr[y][x + 1] == num && dir == 0 || this.arr[y][x + 1] == num && dir == 4) {\r\n            //4\r\n            this.checkext(y, x + 1, this.arr[y][x + 1], step + 1, tab, 4);\r\n        }\r\n        else if (this.arr[y + 1][x] == num && dir == 0 || this.arr[y + 1][x] == num && dir == 2) {\r\n            //2\r\n            this.checkext(y + 1, x, this.arr[y + 1][x], step + 1, tab, 2);\r\n        }\r\n        else if (this.arr[y + 1][x - 1] == num && dir == 0 || this.arr[y + 1][x - 1] == num && dir == 1) {\r\n            //1\r\n            this.checkext(y + 1, x - 1, this.arr[y + 1][x - 1], step + 1, tab, 1);\r\n        }\r\n        else if (tab.length > 4) {\r\n            // console.log(\"ZNALEZIONO\", tab)\r\n            // this.del(tab)\r\n            for (var i = 0; i < tab.length; i++) {\r\n                if (this.def.includes(tab[i])) {\r\n                }\r\n                else {\r\n                    this.def.push(tab[i]);\r\n                    console.log(\"sssss\");\r\n                    console.log(this.def);\r\n                }\r\n            }\r\n            if (this.d == false) {\r\n                this.d = true;\r\n                var ddd = setTimeout(function () {\r\n                    _this.del(_this.def);\r\n                }, 300);\r\n            }\r\n        }\r\n    };\r\n    Move.prototype.del = function (tab) {\r\n        console.log(tab);\r\n        console.log(\"usuwanie\");\r\n        for (var i = 0; i < tab.length; i++) {\r\n            document.getElementById(tab[i]).innerHTML = \"\";\r\n            var x = parseInt(tab[i].split(\"_\")[1]);\r\n            var y = parseInt(tab[i].split(\"_\")[2]);\r\n            console.log(x, y);\r\n            this.arr[x][y] = \"0\";\r\n            this.point = this.point + 1;\r\n            _Pointer__WEBPACK_IMPORTED_MODULE_0__.Pointer.setpoint(this.point);\r\n        }\r\n    };\r\n    Move.prototype.update = function () {\r\n        var test = document.getElementsByClassName('kula');\r\n        // console.log(test)\r\n        for (var i = 0; i < test.length; i++) {\r\n            // console.log(test[i])\r\n            // test[i].remove()\r\n        }\r\n        console.table(this.arr);\r\n        for (var y = 1; y < 10; y++) {\r\n            for (var x = 1; x < 10; x++) {\r\n                //napisy\r\n                // document.getElementById(`i_${y}_${x}`).innerHTML = this.arr[y][x]\r\n                document.getElementById(\"i_\" + y + \"_\" + x).innerHTML = \"\";\r\n                var d = parseInt(this.arr[y][x]);\r\n                var dd = -d;\r\n                if (d < 0) {\r\n                    // console.log(this.col[dd])\r\n                    // document.getElementById(`i_${y}_${x}`).style.backgroundColor = this.col[dd]\r\n                    var circle = document.createElement(\"div\");\r\n                    circle.className = \"kula\";\r\n                    circle.style.backgroundColor = this.col[dd];\r\n                    document.getElementById(\"i_\" + y + \"_\" + x).appendChild(circle);\r\n                }\r\n                else {\r\n                    document.getElementById(\"i_\" + y + \"_\" + x).style.backgroundColor = \"white\";\r\n                }\r\n            }\r\n        }\r\n        //odpalać sprawdzanie kulek\r\n        this.check();\r\n    };\r\n    __decorate([\r\n        _decorators__WEBPACK_IMPORTED_MODULE_1__.log,\r\n        __metadata(\"design:type\", Function),\r\n        __metadata(\"design:paramtypes\", []),\r\n        __metadata(\"design:returntype\", void 0)\r\n    ], Move.prototype, \"setnextcol\", null);\r\n    return Move;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://src/./src/Move.ts?");

/***/ }),

/***/ "./src/Plansza.ts":
/*!************************!*\
  !*** ./src/Plansza.ts ***!
  \************************/
/*! namespace exports */
/*! export Plansza [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Plansza\": () => /* binding */ Plansza\n/* harmony export */ });\nvar Plansza = /** @class */ (function () {\r\n    function Plansza() {\r\n        this.create();\r\n        this.arr = [];\r\n        this.tab();\r\n        this.update();\r\n    }\r\n    Plansza.prototype.create = function () {\r\n        for (var i = 1; i <= 9; i++) {\r\n            for (var u = 1; u <= 9; u++) {\r\n                var pole = document.createElement(\"div\");\r\n                pole.className = \"pole\";\r\n                pole.id = \"i_\" + i + \"_\" + u;\r\n                var zm = document.getElementById(\"game\");\r\n                zm.appendChild(pole);\r\n            }\r\n        }\r\n    };\r\n    Plansza.prototype.tab = function () {\r\n        for (var y = 0; y <= 10; y++) {\r\n            this.arr[y] = [];\r\n            for (var x = 0; x <= 10; x++) {\r\n                this.arr[y][x] = \"Z\";\r\n            }\r\n        }\r\n        for (var y = 1; y < 10; y++) {\r\n            for (var x = 1; x < 10; x++) {\r\n                this.arr[y][x] = \"0\";\r\n            }\r\n        }\r\n        for (var t = 0; t < 3; t++) {\r\n            var y = Math.floor(Math.random() * 9);\r\n            var x = Math.floor(Math.random() * 9);\r\n            var c = Math.floor(Math.random() * 6);\r\n            c = c + 1;\r\n            console.log(\"y: \" + y + \"x: \" + x);\r\n            console.log(c);\r\n            if (c != 0) {\r\n                c = -c;\r\n            }\r\n            var f = c.toString();\r\n            console.log(f);\r\n            if (parseInt(this.arr[y + 1][x + 1]) < 0) {\r\n                t--;\r\n            }\r\n            else {\r\n                this.arr[y + 1][x + 1] = f;\r\n            }\r\n        }\r\n        console.table(this.arr);\r\n    };\r\n    Plansza.prototype.update = function () {\r\n        for (var y = 1; y < 10; y++) {\r\n            for (var x = 1; x < 10; x++) {\r\n                //napisy\r\n                // document.getElementById(`i_${y}_${x}`).innerHTML = this.arr[y][x]\r\n            }\r\n        }\r\n    };\r\n    return Plansza;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://src/./src/Plansza.ts?");

/***/ }),

/***/ "./src/Pointer.ts":
/*!************************!*\
  !*** ./src/Pointer.ts ***!
  \************************/
/*! namespace exports */
/*! export Pointer [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Pointer\": () => /* binding */ Pointer\n/* harmony export */ });\nvar Pointer = /** @class */ (function () {\r\n    function Pointer() {\r\n        this.point = 0;\r\n    }\r\n    Pointer.setpoint = function (point) {\r\n        document.getElementById(\"licznik\").innerHTML = \"Punkty: \" + point;\r\n    };\r\n    return Pointer;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://src/./src/Pointer.ts?");

/***/ }),

/***/ "./src/decorators.ts":
/*!***************************!*\
  !*** ./src/decorators.ts ***!
  \***************************/
/*! namespace exports */
/*! export log [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"log\": () => /* binding */ log\n/* harmony export */ });\nfunction log(target, name, descriptor) {\r\n    console.log(target);\r\n    console.log(name);\r\n    console.log(descriptor);\r\n    document.getElementById(\"preview\").style.border = \"1px solid black\";\r\n}\r\n\n\n//# sourceURL=webpack://src/./src/decorators.ts?");

/***/ }),

/***/ "./src/script.ts":
/*!***********************!*\
  !*** ./src/script.ts ***!
  \***********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Move__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Move */ \"./src/Move.ts\");\n/* harmony import */ var _Plansza__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Plansza */ \"./src/Plansza.ts\");\n\r\n\r\n// import { Pointer } from \"./Pointer\"\r\n// new Plansza()\r\nvar ddd = new _Plansza__WEBPACK_IMPORTED_MODULE_1__.Plansza();\r\nconsole.log(ddd.arr);\r\nnew _Move__WEBPACK_IMPORTED_MODULE_0__.Move(ddd.arr);\r\n\n\n//# sourceURL=webpack://src/./src/script.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/script.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
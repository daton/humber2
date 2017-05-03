webpackJsonp([0,4],{

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(585),
        styles: [__webpack_require__(554)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BlankPageComponent = (function () {
    function BlankPageComponent() {
    }
    return BlankPageComponent;
}());
BlankPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-blank-page',
        template: __webpack_require__(586)
    })
], BlankPageComponent);

//# sourceMappingURL=blankPage.component.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(371);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankPageRoutes; });

var BlankPageRoutes = [
    {
        path: 'blankpage',
        component: __WEBPACK_IMPORTED_MODULE_0__index__["a" /* BlankPageComponent */]
    }
];
//# sourceMappingURL=blankPage.routes.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BSComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BSComponentComponent = (function () {
    function BSComponentComponent() {
        var _this = this;
        // Button
        this.singleModel = '1';
        this.radioModel = 'Middle';
        this.checkModel = { left: false, middle: true, right: false };
        // Dropdown
        this.disabled = false;
        this.status = { isopen: false };
        this.items = ['The first choice!', 'And another choice for you.', 'but wait! A third!'];
        // Pagination
        this.totalItems = 64;
        this.currentPage = 4;
        this.smallnumPages = 0;
        this.numPages = 0;
        this.maxSize = 5;
        this.bigTotalItems = 175;
        this.bigCurrentPage = 1;
        // Alert
        this.alerts = [{
                type: 'danger',
                msg: 'Oh snap! Change a few things up and try submitting again.'
            },
            {
                type: 'success',
                msg: 'Well done! You successfully read this important alert message.',
                closable: true
            }
        ];
        // Progressbar
        this.max = 200;
        this.stacked = [];
        // Rating
        this.x = 5;
        this.y = 2;
        this.maxRating = 10;
        this.rate = 7;
        this.isReadonly = false;
        this.ratingStates = [
            { stateOn: 'fa fa-check', stateOff: 'fa fa-check-circle' },
            { stateOn: 'fa fa-star', stateOff: 'fa fa-star-o' },
            { stateOn: 'fa fa-heart', stateOff: 'fa fa-ban' },
            { stateOn: 'fa fa-heart' },
            { stateOff: 'fa fa-power-off' }
        ];
        // Tabs
        this.tabs = [
            { title: 'Title 1', content: 'Dynamic content 1' },
            { title: 'Title 2', content: 'Dynamic content 2', disabled: true },
            { title: 'Title 3', content: 'Dynamic content 3', removable: true }
        ];
        // Typehead
        this.selected = '';
        this.asyncSelected = '';
        this.typeaheadLoading = false;
        this.typeaheadNoResults = false;
        this.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas',
            'California', 'Colorado',
            'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
            'Illinois', 'Indiana', 'Iowa',
            'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
            'Michigan', 'Minnesota',
            'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
            'New Jersey', 'New Mexico',
            'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon',
            'Pennsylvania', 'Rhode Island',
            'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virginia', 'Washington',
            'West Virginia', 'Wisconsin', 'Wyoming'];
        this.statesComplex = [
            { id: 1, name: 'Alabama' }, { id: 2, name: 'Alaska' }, { id: 3, name: 'Arizona' },
            { id: 4, name: 'Arkansas' }, { id: 5, name: 'California' },
            { id: 6, name: 'Colorado' }, { id: 7, name: 'Connecticut' },
            { id: 8, name: 'Delaware' }, { id: 9, name: 'Florida' },
            { id: 10, name: 'Georgia' }, { id: 11, name: 'Hawaii' },
            { id: 12, name: 'Idaho' }, { id: 13, name: 'Illinois' },
            { id: 14, name: 'Indiana' }, { id: 15, name: 'Iowa' },
            { id: 16, name: 'Kansas' }, { id: 17, name: 'Kentucky' },
            { id: 18, name: 'Louisiana' }, { id: 19, name: 'Maine' },
            { id: 21, name: 'Maryland' }, { id: 22, name: 'Massachusetts' },
            { id: 23, name: 'Michigan' }, { id: 24, name: 'Minnesota' },
            { id: 25, name: 'Mississippi' }, { id: 26, name: 'Missouri' },
            { id: 27, name: 'Montana' }, { id: 28, name: 'Nebraska' },
            { id: 29, name: 'Nevada' }, { id: 30, name: 'New Hampshire' },
            { id: 31, name: 'New Jersey' }, { id: 32, name: 'New Mexico' },
            { id: 33, name: 'New York' }, { id: 34, name: 'North Dakota' },
            { id: 35, name: 'North Carolina' }, { id: 36, name: 'Ohio' },
            { id: 37, name: 'Oklahoma' }, { id: 38, name: 'Oregon' },
            { id: 39, name: 'Pennsylvania' }, { id: 40, name: 'Rhode Island' },
            { id: 41, name: 'South Carolina' }, { id: 42, name: 'South Dakota' },
            { id: 43, name: 'Tennessee' }, { id: 44, name: 'Texas' },
            { id: 45, name: 'Utah' }, { id: 46, name: 'Vermont' },
            { id: 47, name: 'Virginia' }, { id: 48, name: 'Washington' },
            { id: 49, name: 'West Virginia' }, { id: 50, name: 'Wisconsin' },
            { id: 51, name: 'Wyoming' }
        ];
        this.random();
        this.randomStacked();
        this.statesObs = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            // Runs on every search
            observer.next(_this.asyncSelected);
        }).mergeMap(function (token) { return _this.getStatesAsObservable(token); });
    }
    BSComponentComponent.prototype.getStatesAsObservable = function (token) {
        var query = new RegExp(token, 'i');
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.statesComplex.filter(function (state) {
            return query.test(state.name);
        }));
    };
    // Alert
    BSComponentComponent.prototype.closeAlert = function (i) {
        this.alerts.splice(i, 1);
    };
    BSComponentComponent.prototype.addAlert = function () {
        this.alerts.push({ msg: 'Another alert!', type: 'warning', closable: true });
    };
    // Dropdown
    BSComponentComponent.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    BSComponentComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    // Pagination
    BSComponentComponent.prototype.setPage = function (pageNo) {
        this.currentPage = pageNo;
    };
    ;
    BSComponentComponent.prototype.pageChanged = function (event) {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    };
    ;
    // Progressbar
    BSComponentComponent.prototype.random = function () {
        var value = Math.floor((Math.random() * 100) + 1);
        var type;
        if (value < 25) {
            type = 'success';
        }
        else if (value < 50) {
            type = 'info';
        }
        else if (value < 75) {
            type = 'warning';
        }
        else {
            type = 'danger';
        }
        this.showWarning = (type === 'danger' || type === 'warning');
        this.dynamic = value;
        this.type = type;
    };
    ;
    BSComponentComponent.prototype.randomStacked = function () {
        var types = ['success', 'info', 'warning', 'danger'];
        this.stacked = [];
        var total = 0;
        var n = Math.floor((Math.random() * 4) + 1);
        for (var i = 0; i < n; i++) {
            var index = Math.floor((Math.random() * 4));
            var value = Math.floor((Math.random() * 30) + 1);
            total += value;
            this.stacked.push({
                value: value,
                max: value,
                type: types[index]
            });
        }
    };
    ;
    // Rating
    BSComponentComponent.prototype.hoveringOver = function (value) {
        this.overStar = value;
        this.percent = 100 * (value / this.max);
    };
    ;
    BSComponentComponent.prototype.resetStar = function () {
        this.overStar = void 0;
    };
    // Tabs
    BSComponentComponent.prototype.alertMe = function () {
        setTimeout(function () {
            alert('You\'ve selected the alert tab!');
        });
    };
    ;
    BSComponentComponent.prototype.setActiveTab = function (index) {
        this.tabs[index].active = true;
    };
    ;
    BSComponentComponent.prototype.removeTabHandler = function () {
        console.log('Remove Tab handler');
    };
    ;
    BSComponentComponent.prototype.changeTypeaheadLoading = function (e) {
        this.typeaheadLoading = e;
    };
    BSComponentComponent.prototype.changeTypeaheadNoResults = function (e) {
        this.typeaheadNoResults = e;
    };
    BSComponentComponent.prototype.typeaheadOnSelect = function (e) {
        console.log("Selected value: " + e.item);
    };
    return BSComponentComponent;
}());
BSComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-bs-component',
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* ChangeDetectionStrategy */].OnPush,
        template: __webpack_require__(587),
        styles: ["\n     .tooltip.customClass .tooltip-inner {\n        color: #880000;\n        background-color: #ffff66;\n        box-shadow: 0 6px 12px rgba(0,0,0,.175);\n      }\n      .tooltip.customClass .tooltip-arrow {\n        display: none;\n      }\n    "]
    }),
    __metadata("design:paramtypes", [])
], BSComponentComponent);

//# sourceMappingURL=bsComponent.component.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(373);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BSComponentRoutes; });

var BSComponentRoutes = [
    {
        path: 'components',
        component: __WEBPACK_IMPORTED_MODULE_0__index__["a" /* BSComponentComponent */]
    }
];
//# sourceMappingURL=bsComponent.routes.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BSElementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BSElementComponent = (function () {
    function BSElementComponent() {
    }
    return BSElementComponent;
}());
BSElementComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-bs-element',
        template: __webpack_require__(588)
    })
], BSElementComponent);

//# sourceMappingURL=bsElement.component.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(375);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BSElementRoutes; });

var BSElementRoutes = [
    {
        path: 'element',
        component: __WEBPACK_IMPORTED_MODULE_0__index__["a" /* BSElementComponent */]
    }
];
//# sourceMappingURL=bsElement.routes.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChartComponent = (function () {
    function ChartComponent() {
    }
    ChartComponent.prototype.ngOnInit = function () {
        var container = $('#container');
        container.highcharts({
            chart: {
                type: 'area'
            },
            title: {
                text: 'Historic and Estimated Worldwide Population Distribution by Region'
            },
            subtitle: {
                text: 'Source: Wikipedia.org'
            },
            xAxis: {
                categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
                tickmarkPlacement: 'on',
                title: {
                    enabled: false
                }
            },
            yAxis: {
                title: {
                    text: 'Percent'
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>' +
                    ': <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
                shared: true
            },
            plotOptions: {
                area: {
                    stacking: 'percent',
                    lineColor: '#ffffff',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#ffffff'
                    }
                }
            },
            series: [{
                    name: 'Asia',
                    data: [502, 635, 809, 947, 1402, 3634, 5268]
                }, {
                    name: 'Africa',
                    data: [106, 107, 111, 133, 221, 767, 1766]
                }, {
                    name: 'Europe',
                    data: [163, 203, 276, 408, 547, 729, 628]
                }, {
                    name: 'America',
                    data: [18, 31, 54, 156, 339, 818, 1201]
                }, {
                    name: 'Oceania',
                    data: [2, 2, 2, 6, 13, 30, 46]
                }]
        });
        var areaChart = $('#area-chart');
        areaChart.highcharts({
            chart: {
                type: 'area'
            },
            title: {
                text: 'Area chart with negative values'
            },
            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },
            credits: {
                enabled: false
            },
            series: [{
                    name: 'John',
                    data: [5, 3, 4, 7, 2]
                }, {
                    name: 'Jane',
                    data: [2, -2, -3, 2, 1]
                }, {
                    name: 'Joe',
                    data: [3, 4, 4, -2, 5]
                }]
        });
        var totalFruit = $('#total-fruit');
        totalFruit.highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Total fruit consumtion, grouped by gender'
            },
            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },
            yAxis: {
                allowDecimals: false,
                min: 0,
                title: {
                    text: 'Number of fruits'
                }
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '<br/>' +
                        'Total: ' + this.point.stackTotal;
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },
            series: [{
                    name: 'John',
                    data: [5, 3, 4, 7, 2],
                    stack: 'male'
                }, {
                    name: 'Joe',
                    data: [3, 4, 4, 2, 5],
                    stack: 'male'
                }, {
                    name: 'Jane',
                    data: [2, 5, 6, 2, 1],
                    stack: 'female'
                }, {
                    name: 'Janet',
                    data: [3, 0, 4, 4, 3],
                    stack: 'female'
                }]
        });
        var snowDepth = $('#snow-depth');
        snowDepth.highcharts({
            chart: {
                type: 'spline'
            },
            title: {
                text: 'Snow depth at Vikjafjellet, Norway'
            },
            subtitle: {
                text: 'Irregular time data in Highcharts JS'
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: {
                    month: '%e. %b',
                    year: '%b'
                },
                title: {
                    text: 'Date'
                }
            },
            yAxis: {
                title: {
                    text: 'Snow depth (m)'
                },
                min: 0
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
            },
            plotOptions: {
                spline: {
                    marker: {
                        enabled: true
                    }
                }
            },
            series: [{
                    name: 'Winter 2012-2013',
                    // Define the data points. All series have a dummy year
                    // of 1970/71 in order to be compared on the same x axis. Note
                    // that in JavaScript, months start at 0 for January, 1 for February etc.
                    data: [
                        [Date.UTC(1970, 9, 21), 0],
                        [Date.UTC(1970, 10, 4), 0.28],
                        [Date.UTC(1970, 10, 9), 0.25],
                        [Date.UTC(1970, 10, 27), 0.2],
                        [Date.UTC(1970, 11, 2), 0.28],
                        [Date.UTC(1970, 11, 26), 0.28],
                        [Date.UTC(1970, 11, 29), 0.47],
                        [Date.UTC(1971, 0, 11), 0.79],
                        [Date.UTC(1971, 0, 26), 0.72],
                        [Date.UTC(1971, 1, 3), 1.02],
                        [Date.UTC(1971, 1, 11), 1.12],
                        [Date.UTC(1971, 1, 25), 1.2],
                        [Date.UTC(1971, 2, 11), 1.18],
                        [Date.UTC(1971, 3, 11), 1.19],
                        [Date.UTC(1971, 4, 1), 1.85],
                        [Date.UTC(1971, 4, 5), 2.22],
                        [Date.UTC(1971, 4, 19), 1.15],
                        [Date.UTC(1971, 5, 3), 0]
                    ]
                }, {
                    name: 'Winter 2013-2014',
                    data: [
                        [Date.UTC(1970, 9, 29), 0],
                        [Date.UTC(1970, 10, 9), 0.4],
                        [Date.UTC(1970, 11, 1), 0.25],
                        [Date.UTC(1971, 0, 1), 1.66],
                        [Date.UTC(1971, 0, 10), 1.8],
                        [Date.UTC(1971, 1, 19), 1.76],
                        [Date.UTC(1971, 2, 25), 2.62],
                        [Date.UTC(1971, 3, 19), 2.41],
                        [Date.UTC(1971, 3, 30), 2.05],
                        [Date.UTC(1971, 4, 14), 1.7],
                        [Date.UTC(1971, 4, 24), 1.1],
                        [Date.UTC(1971, 5, 10), 0]
                    ]
                }, {
                    name: 'Winter 2014-2015',
                    data: [
                        [Date.UTC(1970, 10, 25), 0],
                        [Date.UTC(1970, 11, 6), 0.25],
                        [Date.UTC(1970, 11, 20), 1.41],
                        [Date.UTC(1970, 11, 25), 1.64],
                        [Date.UTC(1971, 0, 4), 1.6],
                        [Date.UTC(1971, 0, 17), 2.55],
                        [Date.UTC(1971, 0, 24), 2.62],
                        [Date.UTC(1971, 1, 4), 2.5],
                        [Date.UTC(1971, 1, 14), 2.42],
                        [Date.UTC(1971, 2, 6), 2.74],
                        [Date.UTC(1971, 2, 14), 2.62],
                        [Date.UTC(1971, 2, 24), 2.6],
                        [Date.UTC(1971, 3, 2), 2.81],
                        [Date.UTC(1971, 3, 12), 2.63],
                        [Date.UTC(1971, 3, 28), 2.77],
                        [Date.UTC(1971, 4, 5), 2.68],
                        [Date.UTC(1971, 4, 10), 2.56],
                        [Date.UTC(1971, 4, 15), 2.39],
                        [Date.UTC(1971, 4, 20), 2.3],
                        [Date.UTC(1971, 5, 5), 2],
                        [Date.UTC(1971, 5, 10), 1.85],
                        [Date.UTC(1971, 5, 15), 1.49],
                        [Date.UTC(1971, 5, 23), 1.08]
                    ]
                }]
        });
    };
    return ChartComponent;
}());
ChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-chart-cmp',
        template: __webpack_require__(589)
    })
], ChartComponent);

//# sourceMappingURL=chart.component.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(377);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartRoutes; });

var ChartRoutes = [
    {
        path: 'chart',
        component: __WEBPACK_IMPORTED_MODULE_0__index__["a" /* ChartComponent */]
    }
];
//# sourceMappingURL=chart.route.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
*  This class represents the lazy loaded DashboardComponent.
*/
var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-dashboard-cmp',
        template: __webpack_require__(590)
    })
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_routes__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__charts_chart_route__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blank_page_blankPage_routes__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tables_table_routes__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forms_forms_routes__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__grid_grid_routes__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bs_component_bsComponent_routes__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bs_element_bsElement_routes__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__index__ = __webpack_require__(385);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutes; });









var DashboardRoutes = [
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_8__index__["a" /* DashboardComponent */],
        children: __WEBPACK_IMPORTED_MODULE_0__home_home_routes__["a" /* HomeRoutes */].concat(__WEBPACK_IMPORTED_MODULE_1__charts_chart_route__["a" /* ChartRoutes */], __WEBPACK_IMPORTED_MODULE_6__bs_component_bsComponent_routes__["a" /* BSComponentRoutes */], __WEBPACK_IMPORTED_MODULE_3__tables_table_routes__["a" /* TableRoutes */], __WEBPACK_IMPORTED_MODULE_2__blank_page_blankPage_routes__["a" /* BlankPageRoutes */], __WEBPACK_IMPORTED_MODULE_4__forms_forms_routes__["a" /* FormRoutes */], __WEBPACK_IMPORTED_MODULE_5__grid_grid_routes__["a" /* GridRoutes */], __WEBPACK_IMPORTED_MODULE_7__bs_element_bsElement_routes__["a" /* BSElementRoutes */])
    }
];
//# sourceMappingURL=dashboard.routes.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormComponent = (function () {
    function FormComponent() {
    }
    return FormComponent;
}());
FormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-form-cmp',
        template: __webpack_require__(591)
    })
], FormComponent);

//# sourceMappingURL=forms.component.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(380);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormRoutes; });

var FormRoutes = [
    {
        path: 'forms',
        component: __WEBPACK_IMPORTED_MODULE_0__index__["a" /* FormComponent */]
    },
];
//# sourceMappingURL=forms.routes.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GridComponent = (function () {
    function GridComponent() {
    }
    return GridComponent;
}());
GridComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-grid-cmp',
        template: __webpack_require__(592)
    })
], GridComponent);

//# sourceMappingURL=grid.component.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(382);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridRoutes; });

var GridRoutes = [
    {
        path: 'grid',
        component: __WEBPACK_IMPORTED_MODULE_0__index__["a" /* GridComponent */]
    },
];
//# sourceMappingURL=grid.routes.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(384);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutes; });

var HomeRoutes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_0__index__["a" /* HomeComponent */]
    }
];
//# sourceMappingURL=home.routes.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TableComponent = (function () {
    function TableComponent() {
    }
    return TableComponent;
}());
TableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-tables-cmp',
        template: __webpack_require__(597)
    })
], TableComponent);

//# sourceMappingURL=table.component.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(386);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableRoutes; });

var TableRoutes = [
    {
        path: 'tables',
        component: __WEBPACK_IMPORTED_MODULE_0__index__["a" /* TableComponent */]
    },
];
//# sourceMappingURL=table.routes.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__(144);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_routes__ = __webpack_require__(145);
/* unused harmony namespace reexport */
/**
 * This barrel file provides the export for the lazy loaded AboutComponent.
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
*  This class represents the lazy loaded LoginComponent.
*/
var LoginComponent = (function () {
    function LoginComponent() {
    }
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-login-cmp',
        template: __webpack_require__(598)
    })
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(143);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutes; });

var LoginRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_0__index__["a" /* LoginComponent */]
    }
];
//# sourceMappingURL=login.routes.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__topnav_index__ = __webpack_require__(394);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__topnav_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_index__ = __webpack_require__(392);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__sidebar_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__name_list_index__ = __webpack_require__(390);
/* unused harmony namespace reexport */
/**
 * This barrel file provides the exports for the shared resources (services, components).
 */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
*  This class represents the lazy loaded SignupComponent.
*/
var SignupComponent = (function () {
    function SignupComponent() {
    }
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-signup-cmp',
        template: __webpack_require__(601)
    })
], SignupComponent);

//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(396);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupRoutes; });

var SignupRoutes = [
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_0__index__["a" /* SignupComponent */]
    }
];
//# sourceMappingURL=signup.routes.js.map

/***/ }),

/***/ 357:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 357;


/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(388);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_module__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signup_signup_module__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_module__ = __webpack_require__(378);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_7__login_login_module__["a" /* LoginModule */],
            __WEBPACK_IMPORTED_MODULE_8__signup_signup_module__["a" /* SignupModule */],
            __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_module__["a" /* DashboardModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_routes__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signup_signup_routes__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_routes__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_index__ = __webpack_require__(143);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });




var routes = __WEBPACK_IMPORTED_MODULE_0__login_login_routes__["a" /* LoginRoutes */].concat(__WEBPACK_IMPORTED_MODULE_1__signup_signup_routes__["a" /* SignupRoutes */], __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_routes__["a" /* DashboardRoutes */], [
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__login_index__["a" /* LoginComponent */] }
]);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blankPage_component__ = __webpack_require__(126);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BlankPageModule = (function () {
    function BlankPageModule() {
    }
    return BlankPageModule;
}());
BlankPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__blankPage_component__["a" /* BlankPageComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__blankPage_component__["a" /* BlankPageComponent */]]
    })
], BlankPageModule);

//# sourceMappingURL=blankPage.module.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blankPage_component__ = __webpack_require__(126);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__blankPage_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blankPage_routes__ = __webpack_require__(127);
/* unused harmony namespace reexport */
/**
 * This barrel file provides the export for the lazy loaded BlankpageComponent.
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bsComponent_component__ = __webpack_require__(128);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BSComponentModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var BSComponentModule = (function () {
    function BSComponentModule() {
    }
    return BSComponentModule;
}());
BSComponentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["a" /* Ng2BootstrapModule */].forRoot()
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__bsComponent_component__["a" /* BSComponentComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_5__bsComponent_component__["a" /* BSComponentComponent */]]
    })
], BSComponentModule);

//# sourceMappingURL=bsComponent.module.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bsComponent_component__ = __webpack_require__(128);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__bsComponent_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bsComponent_routes__ = __webpack_require__(129);
/* unused harmony namespace reexport */
/**
*  This barrel file provides the export for the lazy loaded BSComponent.
*/


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bsElement_component__ = __webpack_require__(130);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BSElementModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BSElementModule = (function () {
    function BSElementModule() {
    }
    return BSElementModule;
}());
BSElementModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__bsElement_component__["a" /* BSElementComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__bsElement_component__["a" /* BSElementComponent */]]
    })
], BSElementModule);

//# sourceMappingURL=bsElement.module.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bsElement_component__ = __webpack_require__(130);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__bsElement_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bsElement_routes__ = __webpack_require__(131);
/* unused harmony namespace reexport */
/**
 * This barrel file provides the export for the lazy loaded BSelementComponent.
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chart_component__ = __webpack_require__(132);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChartModule = (function () {
    function ChartModule() {
    }
    return ChartModule;
}());
ChartModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__chart_component__["a" /* ChartComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__chart_component__["a" /* ChartComponent */]]
    })
], ChartModule);

//# sourceMappingURL=chart.module.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chart_component__ = __webpack_require__(132);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__chart_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chart_route__ = __webpack_require__(133);
/* unused harmony namespace reexport */
/**
 * This barrel file provides the export for the lazy loaded ChartComponent.
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_module__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__charts_chart_module__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blank_page_blankPage_module__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tables_table_module__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__forms_forms_module__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__grid_grid_module__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bs_component_bsComponent_module__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__bs_element_bsElement_module__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_index__ = __webpack_require__(146);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__["a" /* Ng2BootstrapModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_5__charts_chart_module__["a" /* ChartModule */],
            __WEBPACK_IMPORTED_MODULE_7__tables_table_module__["a" /* TableModule */],
            __WEBPACK_IMPORTED_MODULE_8__forms_forms_module__["a" /* FormModule */],
            __WEBPACK_IMPORTED_MODULE_9__grid_grid_module__["a" /* GridModule */],
            __WEBPACK_IMPORTED_MODULE_10__bs_component_bsComponent_module__["a" /* BSComponentModule */],
            __WEBPACK_IMPORTED_MODULE_11__bs_element_bsElement_module__["a" /* BSElementModule */],
            __WEBPACK_IMPORTED_MODULE_6__blank_page_blankPage_module__["a" /* BlankPageModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_12__dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_13__shared_index__["a" /* TopNavComponent */], __WEBPACK_IMPORTED_MODULE_13__shared_index__["b" /* SidebarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_12__dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_13__shared_index__["a" /* TopNavComponent */], __WEBPACK_IMPORTED_MODULE_13__shared_index__["b" /* SidebarComponent */]]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms_component__ = __webpack_require__(136);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FormModule = (function () {
    function FormModule() {
    }
    return FormModule;
}());
FormModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__forms_component__["a" /* FormComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__forms_component__["a" /* FormComponent */]]
    })
], FormModule);

//# sourceMappingURL=forms.module.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forms_component__ = __webpack_require__(136);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__forms_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__forms_routes__ = __webpack_require__(137);
/* unused harmony namespace reexport */
/**
 * This barrel file provides the export for the lazy loaded FormsComponent.
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_component__ = __webpack_require__(138);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GridModule = (function () {
    function GridModule() {
    }
    return GridModule;
}());
GridModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__grid_component__["a" /* GridComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__grid_component__["a" /* GridComponent */]]
    })
], GridModule);

//# sourceMappingURL=grid.module.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_component__ = __webpack_require__(138);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__grid_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_routes__ = __webpack_require__(139);
/* unused harmony namespace reexport */
/**
 * This barrel file provides the export for the lazy loaded HomeComponent.
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__["a" /* Ng2BootstrapModule */].forRoot()],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_2__home_component__["b" /* TimelineComponent */], __WEBPACK_IMPORTED_MODULE_2__home_component__["c" /* ChatComponent */], __WEBPACK_IMPORTED_MODULE_2__home_component__["d" /* NotificationComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_2__home_component__["b" /* TimelineComponent */], __WEBPACK_IMPORTED_MODULE_2__home_component__["c" /* ChatComponent */], __WEBPACK_IMPORTED_MODULE_2__home_component__["d" /* NotificationComponent */]]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(73);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_routes__ = __webpack_require__(140);
/* unused harmony namespace reexport */
/**
*  This barrel file provides the export for the lazy loaded HomeComponent.
*/


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_component__ = __webpack_require__(134);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dashboard_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_routes__ = __webpack_require__(135);
/* unused harmony namespace reexport */
/**
*  This barrel file provides the export for the lazy loaded DashboardComponent.
*/


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__table_component__ = __webpack_require__(141);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__table_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__table_routes__ = __webpack_require__(142);
/* unused harmony namespace reexport */
/**
 * This barrel file provides the export for the lazy loaded HomeComponent.
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table_component__ = __webpack_require__(141);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TableModule = (function () {
    function TableModule() {
    }
    return TableModule;
}());
TableModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__table_component__["a" /* TableComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__table_component__["a" /* TableComponent */]]
    })
], TableModule);

//# sourceMappingURL=table.module.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(125);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(368);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_component__ = __webpack_require__(144);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */]]
    })
], LoginModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__name_list_service__ = __webpack_require__(391);
/* unused harmony namespace reexport */
/**
 * This barrel file provides the export for the shared NameListService.
 */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* unused harmony export NameListService */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * This class provides the NameList service with methods to read names and add names.
 */
var NameListService = (function () {
    /**
     * Creates a new NameListService with the injected Http.
     * @param {Http} http - The injected Http.
     * @constructor
     */
    function NameListService(http) {
        this.http = http;
    }
    /**
     * Returns an Observable for the HTTP GET request for the JSON resource.
     * @return {string[]} The Observable for the HTTP request.
     */
    NameListService.prototype.get = function () {
        return this.http.get('/assets/data.json')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    /**
      * Handle HTTP error
      */
    NameListService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return NameListService;
}());
NameListService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], NameListService);

var _a;
//# sourceMappingURL=name-list.service.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sidebar__ = __webpack_require__(393);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__sidebar__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SidebarComponent = (function () {
    function SidebarComponent() {
        this.isActive = false;
        this.showMenu = '';
    }
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-sidebar-cmp',
        template: __webpack_require__(599)
    })
], SidebarComponent);

//# sourceMappingURL=sidebar.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__topnav__ = __webpack_require__(395);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__topnav__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TopNavComponent = (function () {
    function TopNavComponent() {
    }
    TopNavComponent.prototype.changeTheme = function (color) {
        var link = $('<link>');
        link
            .appendTo('head')
            .attr({ type: 'text/css', rel: 'stylesheet' })
            .attr('href', 'themes/app-' + color + '.css');
    };
    TopNavComponent.prototype.rtl = function () {
        var body = $('body');
        body.toggleClass('rtl');
    };
    TopNavComponent.prototype.sidebarToggler = function () {
        var sidebar = $('#sidebar');
        var mainContainer = $('.main-container');
        sidebar.toggleClass('sidebar-left-zero');
        mainContainer.toggleClass('main-container-ml-zero');
    };
    return TopNavComponent;
}());
TopNavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-top-nav',
        template: __webpack_require__(600),
    })
], TopNavComponent);

//# sourceMappingURL=topnav.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signup_component__ = __webpack_require__(147);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__signup_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signup_routes__ = __webpack_require__(148);
/* unused harmony namespace reexport */
/**
*  This barrel file provides the export for the lazy loaded SignupComponent.
*/


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_component__ = __webpack_require__(147);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignupModule = (function () {
    function SignupModule() {
    }
    return SignupModule;
}());
SignupModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__signup_component__["a" /* SignupComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__signup_component__["a" /* SignupComponent */]]
    })
], SignupModule);

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)();
// imports


// module
exports.push([module.i, "body {\n  -ms-overflow-x: hidden;\n  overflow-x: hidden; }\n\n.timeline {\n  position: relative;\n  padding: 20px 0 20px;\n  list-style: none; }\n\n.timeline:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 3px;\n  margin-left: -1.5px;\n  background-color: #eeeeee; }\n\n.timeline > li {\n  position: relative;\n  margin-bottom: 20px; }\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table; }\n\n.timeline > li:after {\n  clear: both; }\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table; }\n\n.timeline > li:after {\n  clear: both; }\n\n.timeline > li > .timeline-panel {\n  float: left;\n  position: relative;\n  width: 46%;\n  padding: 20px;\n  border: 1px solid #d4d4d4;\n  border-radius: 2px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175); }\n\n.timeline > li > .timeline-panel:before {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 26px;\n  right: -15px;\n  border-top: 15px solid transparent;\n  border-right: 0 solid #ccc;\n  border-bottom: 15px solid transparent;\n  border-left: 15px solid #ccc; }\n\n.timeline > li > .timeline-panel:after {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 27px;\n  right: -14px;\n  border-top: 14px solid transparent;\n  border-right: 0 solid #fff;\n  border-bottom: 14px solid transparent;\n  border-left: 14px solid #fff; }\n\n.timeline > li > .timeline-badge {\n  z-index: 100;\n  position: absolute;\n  top: 16px;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  margin-left: -25px;\n  border-radius: 50% 50% 50% 50%;\n  text-align: center;\n  font-size: 1.4em;\n  line-height: 50px;\n  color: #fff;\n  background-color: #999999; }\n\n.timeline > li.timeline-inverted > .timeline-panel {\n  float: right; }\n\n.timeline > li.timeline-inverted > .timeline-panel:before {\n  right: auto;\n  left: -15px;\n  border-right-width: 15px;\n  border-left-width: 0; }\n\n.timeline > li.timeline-inverted > .timeline-panel:after {\n  right: auto;\n  left: -14px;\n  border-right-width: 14px;\n  border-left-width: 0; }\n\n.timeline-badge.primary {\n  background-color: #2e6da4 !important; }\n\n.timeline-badge.success {\n  background-color: #3f903f !important; }\n\n.timeline-badge.warning {\n  background-color: #f0ad4e !important; }\n\n.timeline-badge.danger {\n  background-color: #d9534f !important; }\n\n.timeline-badge.info {\n  background-color: #5bc0de !important; }\n\n.timeline-title {\n  margin-top: 0;\n  color: inherit; }\n\n.timeline-body > p,\n.timeline-body > ul {\n  margin-bottom: 0; }\n\n.timeline-body > p + p {\n  margin-top: 5px; }\n\n@media (max-width: 767px) {\n  ul.timeline:before {\n    left: 40px; }\n  ul.timeline > li > .timeline-panel {\n    width: calc(100% - 90px);\n    width: -webkit-calc(100% - 90px); }\n  ul.timeline > li > .timeline-badge {\n    top: 16px;\n    left: 15px;\n    margin-left: 0; }\n  ul.timeline > li > .timeline-panel {\n    float: right; }\n  ul.timeline > li > .timeline-panel:before {\n    right: auto;\n    left: -15px;\n    border-right-width: 15px;\n    border-left-width: 0; }\n  ul.timeline > li > .timeline-panel:after {\n    right: auto;\n    left: -14px;\n    border-right-width: 14px;\n    border-left-width: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 186,
	"./af.js": 186,
	"./ar": 191,
	"./ar-ly": 187,
	"./ar-ly.js": 187,
	"./ar-ma": 188,
	"./ar-ma.js": 188,
	"./ar-sa": 189,
	"./ar-sa.js": 189,
	"./ar-tn": 190,
	"./ar-tn.js": 190,
	"./ar.js": 191,
	"./az": 192,
	"./az.js": 192,
	"./be": 193,
	"./be.js": 193,
	"./bg": 194,
	"./bg.js": 194,
	"./bn": 195,
	"./bn.js": 195,
	"./bo": 196,
	"./bo.js": 196,
	"./br": 197,
	"./br.js": 197,
	"./bs": 198,
	"./bs.js": 198,
	"./ca": 199,
	"./ca.js": 199,
	"./cs": 200,
	"./cs.js": 200,
	"./cv": 201,
	"./cv.js": 201,
	"./cy": 202,
	"./cy.js": 202,
	"./da": 203,
	"./da.js": 203,
	"./de": 205,
	"./de-at": 204,
	"./de-at.js": 204,
	"./de.js": 205,
	"./dv": 206,
	"./dv.js": 206,
	"./el": 207,
	"./el.js": 207,
	"./en-au": 208,
	"./en-au.js": 208,
	"./en-ca": 209,
	"./en-ca.js": 209,
	"./en-gb": 210,
	"./en-gb.js": 210,
	"./en-ie": 211,
	"./en-ie.js": 211,
	"./en-nz": 212,
	"./en-nz.js": 212,
	"./eo": 213,
	"./eo.js": 213,
	"./es": 215,
	"./es-do": 214,
	"./es-do.js": 214,
	"./es.js": 215,
	"./et": 216,
	"./et.js": 216,
	"./eu": 217,
	"./eu.js": 217,
	"./fa": 218,
	"./fa.js": 218,
	"./fi": 219,
	"./fi.js": 219,
	"./fo": 220,
	"./fo.js": 220,
	"./fr": 223,
	"./fr-ca": 221,
	"./fr-ca.js": 221,
	"./fr-ch": 222,
	"./fr-ch.js": 222,
	"./fr.js": 223,
	"./fy": 224,
	"./fy.js": 224,
	"./gd": 225,
	"./gd.js": 225,
	"./gl": 226,
	"./gl.js": 226,
	"./he": 227,
	"./he.js": 227,
	"./hi": 228,
	"./hi.js": 228,
	"./hr": 229,
	"./hr.js": 229,
	"./hu": 230,
	"./hu.js": 230,
	"./hy-am": 231,
	"./hy-am.js": 231,
	"./id": 232,
	"./id.js": 232,
	"./is": 233,
	"./is.js": 233,
	"./it": 234,
	"./it.js": 234,
	"./ja": 235,
	"./ja.js": 235,
	"./jv": 236,
	"./jv.js": 236,
	"./ka": 237,
	"./ka.js": 237,
	"./kk": 238,
	"./kk.js": 238,
	"./km": 239,
	"./km.js": 239,
	"./ko": 240,
	"./ko.js": 240,
	"./ky": 241,
	"./ky.js": 241,
	"./lb": 242,
	"./lb.js": 242,
	"./lo": 243,
	"./lo.js": 243,
	"./lt": 244,
	"./lt.js": 244,
	"./lv": 245,
	"./lv.js": 245,
	"./me": 246,
	"./me.js": 246,
	"./mi": 247,
	"./mi.js": 247,
	"./mk": 248,
	"./mk.js": 248,
	"./ml": 249,
	"./ml.js": 249,
	"./mr": 250,
	"./mr.js": 250,
	"./ms": 252,
	"./ms-my": 251,
	"./ms-my.js": 251,
	"./ms.js": 252,
	"./my": 253,
	"./my.js": 253,
	"./nb": 254,
	"./nb.js": 254,
	"./ne": 255,
	"./ne.js": 255,
	"./nl": 256,
	"./nl.js": 256,
	"./nn": 257,
	"./nn.js": 257,
	"./pa-in": 258,
	"./pa-in.js": 258,
	"./pl": 259,
	"./pl.js": 259,
	"./pt": 261,
	"./pt-br": 260,
	"./pt-br.js": 260,
	"./pt.js": 261,
	"./ro": 262,
	"./ro.js": 262,
	"./ru": 263,
	"./ru.js": 263,
	"./se": 264,
	"./se.js": 264,
	"./si": 265,
	"./si.js": 265,
	"./sk": 266,
	"./sk.js": 266,
	"./sl": 267,
	"./sl.js": 267,
	"./sq": 268,
	"./sq.js": 268,
	"./sr": 270,
	"./sr-cyrl": 269,
	"./sr-cyrl.js": 269,
	"./sr.js": 270,
	"./ss": 271,
	"./ss.js": 271,
	"./sv": 272,
	"./sv.js": 272,
	"./sw": 273,
	"./sw.js": 273,
	"./ta": 274,
	"./ta.js": 274,
	"./te": 275,
	"./te.js": 275,
	"./th": 276,
	"./th.js": 276,
	"./tl-ph": 277,
	"./tl-ph.js": 277,
	"./tlh": 278,
	"./tlh.js": 278,
	"./tr": 279,
	"./tr.js": 279,
	"./tzl": 280,
	"./tzl.js": 280,
	"./tzm": 282,
	"./tzm-latn": 281,
	"./tzm-latn.js": 281,
	"./tzm.js": 282,
	"./uk": 283,
	"./uk.js": 283,
	"./uz": 284,
	"./uz.js": 284,
	"./vi": 285,
	"./vi.js": 285,
	"./x-pseudo": 286,
	"./x-pseudo.js": 286,
	"./zh-cn": 287,
	"./zh-cn.js": 287,
	"./zh-hk": 288,
	"./zh-hk.js": 288,
	"./zh-tw": 289,
	"./zh-tw.js": 289
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 558;


/***/ }),

/***/ 585:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 586:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 587:
/***/ (function(module, exports) {

module.exports = "<!-- Page Heading -->\n<div class=\"row\">\n\t<div class=\"col-xl-12\">\n\t\t<h2 class=\"page-header\">Bootstrap Grid</h2>\n\t\t<ol class=\"breadcrumb\">\n\t\t\t<li><i class=\"fa fa-dashboard\"></i> <a href=\"Javascript:void(0)\"\n\t\t\t\trouterLink=\"/dashboard/home'\">Dashboard</a></li>\n\t\t\t<li class=\"active\"><i class=\"fa fa-th-list\"></i> Component</li>\n\t\t</ol>\n\t</div>\n</div>\n<!-- /.row -->\n<div class=\"row\">\n\t<div class=\"col-lg-12\">\n\t\t<div class=\"card card-block\">\n\t\t\t<h4 class=\"card-title\">Alert</h4>\n\t\t\t<alert *ngFor=\"let alert of alerts;let i = index\" [type]=\"alert.type\"\n\t\t\t\tdismissible=\"true\" (close)=\"closeAlert(i)\"> {{ alert?.msg }}\n\t\t\t</alert>\n\t\t\t<alert dismissOnTimeout=\"3000\">This alert will dismiss in 3s</alert>\n\t\t\t<button type=\"button\" class='btn btn-primary' (click)=\"addAlert()\">Add\n\t\t\t\tAlert</button>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-lg-6\">\n\t\t<div class=\"card card-block\">\n\t\t\t<h4 class=\"card-title\">Single toggle</h4>\n\t\t\t<pre class=\"card card-block card-header\">{{singleModel}}</pre>\n\t\t\t<button type=\"button\" class=\"btn btn-primary\"\n\t\t\t\t[(ngModel)]=\"singleModel\" btnCheckbox btnCheckboxTrue=\"1\"\n\t\t\t\tbtnCheckboxFalse=\"0\">Single Toggle</button>\n\t\t</div>\n\t\t<div class=\"card card-block\">\n\t\t\t<h4>Radio &amp; Uncheckable Radio</h4>\n\t\t\t<pre class=\"card card-block card-header\">{{radioModel || 'null'}}</pre>\n\t\t\t<div class=\"btn-group\">\n\t\t\t\t<label class=\"btn btn-primary\" [(ngModel)]=\"radioModel\"\n\t\t\t\t\tbtnRadio=\"Left\">Left</label> <label class=\"btn btn-primary\"\n\t\t\t\t\t[(ngModel)]=\"radioModel\" btnRadio=\"Middle\">Middle</label> <label\n\t\t\t\t\tclass=\"btn btn-primary\" [(ngModel)]=\"radioModel\" btnRadio=\"Right\">Right</label>\n\t\t\t</div>\n\t\t\t<div class=\"btn-group\">\n\t\t\t\t<label class=\"btn btn-success\" [(ngModel)]=\"radioModel\"\n\t\t\t\t\tbtnRadio=\"Left\" uncheckable>Left</label> <label\n\t\t\t\t\tclass=\"btn btn-success\" [(ngModel)]=\"radioModel\" btnRadio=\"Middle\"\n\t\t\t\t\tuncheckable>Middle</label> <label class=\"btn btn-success\"\n\t\t\t\t\t[(ngModel)]=\"radioModel\" btnRadio=\"Right\" uncheckable>Right</label>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-lg-6\">\n\t\t<div class=\"card card-block\">\n\t\t\t<h4 class=\"card-title\">Checkbox</h4>\n\t\t\t<pre class=\"card card-block card-header\">Model via JsonPipe: {{checkModel | json}}</pre>\n\t\t\t<pre class=\"card card-block card-header\">Left: {{checkModel.left}} | Middle: {{checkModel.middle}} | Right: {{checkModel.right}}</pre>\n\t\t\t<h4 class=\"card-title\">Checkbox</h4>\n\t\t\t<div class=\"btn-group\">\n\t\t\t\t<label class=\"btn btn-primary\" [(ngModel)]=\"checkModel.left\"\n\t\t\t\t\tbtnCheckbox>Left</label> <label class=\"btn btn-primary\"\n\t\t\t\t\t[(ngModel)]=\"checkModel.middle\" btnCheckbox>Middle</label> <label\n\t\t\t\t\tclass=\"btn btn-primary\" [(ngModel)]=\"checkModel.right\" btnCheckbox>Right</label>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-sm-12\">\n\t\t<div class=\"card card-block\">\n\t\t\t<h4 class=\"card-title\">Dropdown</h4>\n\t\t\t<div (click)=\"$event.preventDefault()\">\n\t\t\t\t<!-- Simple dropdown -->\n\t\t\t\t<span dropdown (on-toggle)=\"toggled($event)\"> <a href=\"\"\n\t\t\t\t\tid=\"simple-dropdown\" dropdownToggle> Click me for a dropdown,\n\t\t\t\t\t\tyo! </a>\n\t\t\t\t\t<ul class=\"dropdown-menu\" aria-labelledby=\"simple-dropdown\">\n\t\t\t\t\t\t<li *ngFor=\"let choice of items\"><a class=\"dropdown-item\"\n\t\t\t\t\t\t\thref=\"#\">{{choice}}</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</span>\n\n\t\t\t\t<!-- Single button -->\n\t\t\t\t<div class=\"btn-group\" dropdown [(isOpen)]=\"status.isopen\">\n\t\t\t\t\t<button id=\"single-button\" type=\"button\" class=\"btn btn-primary\"\n\t\t\t\t\t\tdropdownToggle [disabled]=\"disabled\">\n\t\t\t\t\t\tButton dropdown <span class=\"caret\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\"\n\t\t\t\t\t\taria-labelledby=\"single-button\">\n\t\t\t\t\t\t<li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n\t\t\t\t\t\t<li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another\n\t\t\t\t\t\t\t\taction</a></li>\n\t\t\t\t\t\t<li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something\n\t\t\t\t\t\t\t\telse here</a></li>\n\t\t\t\t\t\t<li class=\"divider dropdown-divider\"></li>\n\t\t\t\t\t\t<li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated\n\t\t\t\t\t\t\t\tlink</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\n\t\t\t\t<!-- Split button -->\n\t\t\t\t<div class=\"btn-group\" dropdown>\n\t\t\t\t\t<button id=\"split-button\" type=\"button\" class=\"btn btn-danger\">Action</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger dropdown-toggle\"\n\t\t\t\t\t\tdropdownToggle>\n\t\t\t\t\t\t<span class=\"caret\"></span> <span class=\"sr-only\">Split\n\t\t\t\t\t\t\tbutton!</span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\"\n\t\t\t\t\t\taria-labelledby=\"split-button\">\n\t\t\t\t\t\t<li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n\t\t\t\t\t\t<li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another\n\t\t\t\t\t\t\t\taction</a></li>\n\t\t\t\t\t\t<li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something\n\t\t\t\t\t\t\t\telse here</a></li>\n\t\t\t\t\t\t<li class=\"divider dropdown-divider\"></li>\n\t\t\t\t\t\t<li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated\n\t\t\t\t\t\t\t\tlink</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\n\t\t\t\t<hr />\n\t\t\t\t<p>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\"\n\t\t\t\t\t\t(click)=\"toggleDropdown($event)\">Toggle button dropdown</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-sm\"\n\t\t\t\t\t\t(click)=\"disabled = !disabled\">Enable/Disable</button>\n\t\t\t\t</p>\n\n\t\t\t\t<hr>\n\t\t\t\t<!-- Single button with keyboard nav -->\n\t\t\t\t<div class=\"btn-group\" dropdown keyboardNav=\"true\">\n\t\t\t\t\t<button id=\"simple-btn-keyboard-nav\" type=\"button\"\n\t\t\t\t\t\tclass=\"btn btn-primary\" dropdownToggle>\n\t\t\t\t\t\tDropdown with keyboard navigation <span class=\"caret\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\"\n\t\t\t\t\t\taria-labelledby=\"simple-btn-keyboard-nav\">\n\t\t\t\t\t\t<li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n\t\t\t\t\t\t<li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another\n\t\t\t\t\t\t\t\taction</a></li>\n\t\t\t\t\t\t<li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something\n\t\t\t\t\t\t\t\telse here</a></li>\n\t\t\t\t\t\t<li class=\"divider dropdown-divider\"></li>\n\t\t\t\t\t\t<li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated\n\t\t\t\t\t\t\t\tlink</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-lg-6\" style=\"margin-top: 10px;\">\n\t\t<div class=\"card card-block\">\n\t\t\t<h4 class=\"card-title\">Default</h4>\n\t\t\t<pagination [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\"\n\t\t\t\t(pageChanged)=\"pageChanged($event)\"></pagination>\n\t\t\t<pagination [boundaryLinks]=\"true\" [totalItems]=\"totalItems\"\n\t\t\t\t[(ngModel)]=\"currentPage\" class=\"pagination-sm\"\n\t\t\t\tpreviousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\"\n\t\t\t\tlastText=\"&raquo;\"></pagination>\n\t\t\t<pagination [directionLinks]=\"false\" [boundaryLinks]=\"true\"\n\t\t\t\t[totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\"></pagination>\n\t\t\t<pagination [directionLinks]=\"false\" [totalItems]=\"totalItems\"\n\t\t\t\t[(ngModel)]=\"currentPage\" (numPages)=\"smallnumPages = $event\"></pagination>\n\t\t\t<pre class=\"card card-block card-header\">The selected page no: {{currentPage}}/{{smallnumPages}}</pre>\n\t\t\t<button type=\"button\" class=\"btn btn-info\" (click)=\"setPage(3)\">Set\n\t\t\t\tcurrent page to: 3</button>\n\t\t</div>\n\t</div>\n\t<div class=\"col-lg-6\" style=\"margin-top: 10px;\">\n\t\t<div class=\"card card-block\">\n\t\t\t<h4 class=\"card-title\">Pager</h4>\n\t\t\t<hr />\n\t\t\t<h4>Limit the maximum visible buttons</h4>\n\t\t\t<pagination [totalItems]=\"bigTotalItems\" [(ngModel)]=\"bigCurrentPage\"\n\t\t\t\t[maxSize]=\"maxSize\" class=\"pagination-sm\" [boundaryLinks]=\"true\"></pagination>\n\t\t\t<pagination [totalItems]=\"bigTotalItems\" [(ngModel)]=\"bigCurrentPage\"\n\t\t\t\t[maxSize]=\"maxSize\" class=\"pagination-sm\" [boundaryLinks]=\"true\"\n\t\t\t\t[rotate]=\"false\" (numPages)=\"numPages = $event\"></pagination>\n\t\t\t<pre class=\"card card-block card-header\">Page: {{bigCurrentPage}} / {{numPages}}</pre>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"card card-block\">\n\t<div class=\"row\">\n\t\t<div class=\"cal-lg-12\">\n\t\t\t<div class=\"card-block\">\n\t\t\t\t<h5>In bootstrap 4 progress has a different concept, no inner\n\t\t\t\t\ttext, no default transition animation</h5>\n\t\t\t\t<h4>Static</h4>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<progress class=\"progress\" value=\"55\" max=\"100\"></progress>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<progress class=\"progress progress-striped\" value=\"22\" max=\"100\"\n\t\t\t\t\t\t\ttype=\"warning\">22%</progress>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<progress class=\"progress progress-striped active\" max=\"200\"\n\t\t\t\t\t\t\tvalue=\"166\" type=\"danger\">\n\t\t\t\t\t\t\t<i>166 / 200</i>\n\t\t\t\t\t\t</progress>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<h4>\n\t\t\t\t\tDynamic\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-primary\"\n\t\t\t\t\t\t(click)=\"random()\">Randomize</button>\n\t\t\t\t</h4>\n\t\t\t\t<progress class=\"progress progress-striped progress-animated\"\n\t\t\t\t\t[max]=\"max\" [value]=\"dynamic\">\n\t\t\t\t\t<span style=\"color: white; white-space: nowrap;\">{{dynamic}}\n\t\t\t\t\t\t/ {{max}}</span>\n\t\t\t\t</progress>\n\n\t\t\t\t<small><em>No animation</em></small>\n\t\t\t\t<progress class=\"progress progress-success\" [value]=\"dynamic\"\n\t\t\t\t\t[max]=\"100\">\n\t\t\t\t\t<b>{{dynamic}}%</b>\n\t\t\t\t</progress>\n\n\t\t\t\t<small><em>Object (changes type based on value)</em></small>\n\t\t\t\t<progress\n\t\t\t\t\tclass=\"progress progress-striped progress-animated active progress-{{ type }}\"\n\t\t\t\t\t[value]=\"dynamic\" [max]=\"max\">\n\t\t\t\t\t{{type}} <i *ngIf=\"showWarning\">!!! Watch out !!!</i>\n\t\t\t\t</progress>\n\n\t\t\t\t<hr />\n\t\t\t\t<h4>\n\t\t\t\t\tStacked\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-primary\"\n\t\t\t\t\t\t(click)=\"randomStacked()\">Randomize</button>\n\t\t\t\t</h4>\n\t\t\t\t<div class=\"row col-lg-12\">\n\t\t\t\t\t<!-- todo: implement as component -->\n\t\t\t\t\t<progress *ngFor=\"let baz of stacked\"\n\t\t\t\t\t\tclass=\"progress progress-{{ baz?.type }}\" style=\"float: left;\"\n\t\t\t\t\t\t[ngStyle]=\"{width: baz.value + '%'}\" [value]=\"baz.value\"\n\t\t\t\t\t\t[max]=\"baz.max\">\n\t\t\t\t\t\t<span *ngIf=\"baz.value > 3\">{{baz?.value}}%</span>\n\t\t\t\t\t</progress>\n\t\t\t\t\t<!-- gray background -->\n\t\t\t\t\t<progress class=\"progress\" value=\"0\" max=\"100\" style=\"width: 100%;\"></progress>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-lg-12\">\n\t\t<div class=\"card card-block\">\n\t\t\t<h4 class=\"card-title\">Default</h4>\n\t\t\t<rating [(ngModel)]=\"rate\" [max]=\"maxRating\" [readonly]=\"isReadonly\"\n\t\t\t\t(onHover)=\"hoveringOver($event)\" (onLeave)=\"resetStar($event)\"\n\t\t\t\t[titles]=\"['one','two','three']\"></rating>\n\t\t\t<span class=\"label\"\n\t\t\t\t[ngClass]=\"{'label-warning': percent<30, 'label-info': percent>=30 && percent<70, 'label-success': percent>=70}\"\n\t\t\t\t[ngStyle]=\"{display: (overStar && !isReadonly) ? 'inline' : 'none'}\">{{percent}}%</span>\n\n\t\t\t<pre class=\"card card-block card-header\" style=\"margin: 15px 0;\">Rate: <b>{{rate}}</b> - Readonly is: <i>{{isReadonly}}</i> - Hovering over: <b>{{overStar || \"none\"}}</b>\n\t\t\t</pre>\n\n\t\t\t<button type=\"button\" class=\"btn btn-sm btn-danger\"\n\t\t\t\t(click)=\"rate = 0\" [disabled]=\"isReadonly\">Clear</button>\n\t\t\t<button type=\"button\" class=\"btn btn-sm btn-primary\"\n\t\t\t\t(click)=\"isReadonly = ! isReadonly\">Toggle Readonly</button>\n\t\t\t<hr />\n\n\t\t\t<h4>Custom icons</h4>\n\t\t\t<div>\n\t\t\t\t<rating [(ngModel)]=\"x\" max=\"15\" stateOn=\"glyphicon-ok-sign\"\n\t\t\t\t\tstateOff=\"glyphicon-ok-circle\"></rating>\n\t\t\t\t<b>(<i>Rate:</i> {{x}})\n\t\t\t\t</b>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<rating [(ngModel)]=\"y\" [ratingStates]=\"ratingStates\"></rating>\n\t\t\t\t<b>(<i>Rate:</i> {{y}})\n\t\t\t\t</b>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-lg-6\">\n\t\t<div class=\"card card-block\" (click)=\"$event.preventDefault()\">\n\t\t\t<p>Select a tab by setting active binding to true:</p>\n\t\t\t<p>\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\"\n\t\t\t\t\t(click)=\"tabs[0].active = true\">Select second tab</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\"\n\t\t\t\t\t(click)=\"tabs[1].active = true\">Select third tab</button>\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\"\n\t\t\t\t\t(click)=\"tabs[1].disabled = ! tabs[1].disabled\">Enable /\n\t\t\t\t\tDisable third tab</button>\n\t\t\t</p>\n\t\t\t<hr />\n\t\t\t<tabset> <tab heading=\"Static title\">Static content</tab> <tab\n\t\t\t\t*ngFor=\"let tabz of tabs\" [heading]=\"tabz.title\"\n\t\t\t\t[active]=\"tabz.active\" (select)=\"tabz.active = true\"\n\t\t\t\t(deselect)=\"tabz.active = false\" [disabled]=\"tabz.disabled\"\n\t\t\t\t[removable]=\"tabz.removable\" (removed)=\"removeTabHandler(tabz)\">\n\t\t\t{{tabz?.content}} </tab> <tab (select)=\"alertMe()\"> <ng-template\n\t\t\t\ttabHeading> <i class=\"glyphicon glyphicon-bell\"></i>\n\t\t\tAlert! </ng-template> I've got an HTML heading, and a select callback. Pretty cool!\n\t\t\t</tab> </tabset>\n\t\t</div>\n\t</div>\n\t<div class=\"col-lg-6\">\n\t\t<div class=\"card card-block\">\n\t\t\t<tabset [vertical]=\"true\" type=\"pills\"> <tab\n\t\t\t\theading=\"Vertical 1\">Vertical content 1</tab> <tab\n\t\t\t\theading=\"Vertical 2\">Vertical content 2</tab> </tabset>\n\t\t\t<hr />\n\t\t\t<p>\n\t\t\t\t<i>Bootstrap 4 doesn't have justified classes</i>\n\t\t\t</p>\n\t\t\t<tabset [justified]=\"true\"> <tab heading=\"Justified\">Justified\n\t\t\tcontent</tab> <tab heading=\"SJ\">Short Labeled Justified content</tab> <tab\n\t\t\t\theading=\"Long Justified\">Long Labeled Justified content</tab> </tabset>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-sm-12\">\n\t\t<div class=\"card card-block\">\n\t\t\t<div class=\"card-title\">Tooltip</div>\n\t\t\t<a href=\"#\" class=\"btn btn-danger\" placement=\"top\"\n\t\t\t\ttooltip=\"On the top!\">On Top</a> <a href=\"#\" class=\"btn btn-warning\"\n\t\t\t\tplacement=\"bottom\" tooltip=\"On the bottom!\">On Bottom</a> <a\n\t\t\t\thref=\"#\" class=\"btn btn-success\" placement=\"left\"\n\t\t\t\ttooltip=\"On the left!\">On Left</a> <a href=\"#\" class=\"btn btn-info\"\n\t\t\t\tplacement=\"right\" tooltip=\"On the right!\">On Right</a>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-sm-12\">\n\t\t<div class=\"card card-block\" style=\"height: 500px;\">\n\t\t\t<h4>Static arrays</h4>\n\t\t\t<pre class=\"card card-block card-header\">Model: {{selected | json}}</pre>\n\t\t\t<input [(ngModel)]=\"selected\" [typeahead]=\"states\"\n\t\t\t\tclass=\"form-control\">\n\n\t\t\t<h4>Asynchronous results</h4>\n\t\t\t<pre class=\"card card-block card-header\">Model: {{asyncSelected | json}}</pre>\n\t\t\t<input [(ngModel)]=\"asyncSelected\" [typeahead]=\"statesObs\"\n\t\t\t\t(typeaheadLoading)=\"changeTypeaheadLoading($event)\"\n\t\t\t\t(typeaheadNoResults)=\"changeTypeaheadNoResults($event)\"\n\t\t\t\t(typeaheadOnSelect)=\"typeaheadOnSelect($event)\"\n\t\t\t\t[typeaheadOptionsLimit]=\"7\" [typeaheadOptionField]=\"'name'\"\n\t\t\t\tplaceholder=\"Locations loaded with timeout\" class=\"form-control\">\n\t\t\t<div *ngIf=\"typeaheadLoading===true\">\n\t\t\t\t<i class=\"glyphicon glyphicon-refresh ng-hide\" style=\"\"></i>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"typeaheadNoResults===true\" class=\"\" style=\"\">\n\t\t\t\t<i class=\"glyphicon glyphicon-remove\"></i> No Results Found\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 588:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n\t<!-- Page Heading -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\t\t\t<h2 class=\"page-header\">Bootstrap Elements</h2>\n\t\t\t<ol class=\"breadcrumb\">\n\t\t\t\t<li><i class=\"fa fa-dashboard\"></i> <a\n\t\t\t\t\thref=\"Javascript:void(0)\" routerLink=\"/dashboard/home\">Dashboard</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"active\"><i class=\"fa fa-desktop\"></i> Bootstrap\n\t\t\t\t\tElements</li>\n\t\t\t</ol>\n\t\t</div>\n\t</div>\n\t<!-- /.row -->\n\n\t<!-- Main jumbotron for a primary marketing message or call to action -->\n\t<div class=\"jumbotron\">\n\t\t<h1>Hello, world!</h1>\n\t\t<p>This is a template for a simple marketing or informational\n\t\t\twebsite. It includes a large callout called a jumbotron and three\n\t\t\tsupporting pieces of content. Use it as a starting point to create\n\t\t\tsomething more unique.</p>\n\t\t<p>\n\t\t\t<a href=\"javascript:;\" class=\"btn btn-primary btn-lg\" role=\"button\">Learn\n\t\t\t\tmore »</a>\n\t\t</p>\n\t</div>\n\n\t<div class=\"page-header\">\n\t\t<h1>Buttons</h1>\n\t\t<hr>\n\t</div>\n\t<p>\n\t\t<button type=\"button\" class=\"btn btn-lg btn-secondary\">Default</button>\n\t\t<button type=\"button\" class=\"btn btn-lg btn-primary\">Primary</button>\n\t\t<button type=\"button\" class=\"btn btn-lg btn-success\">Success</button>\n\t\t<button type=\"button\" class=\"btn btn-lg btn-info\">Info</button>\n\t\t<button type=\"button\" class=\"btn btn-lg btn-warning\">Warning</button>\n\t\t<button type=\"button\" class=\"btn btn-lg btn-danger\">Danger</button>\n\t\t<button type=\"button\" class=\"btn btn-lg btn-link\">Link</button>\n\t</p>\n\t<p>\n\t\t<button type=\"button\" class=\"btn btn-secondary\">Default</button>\n\t\t<button type=\"button\" class=\"btn btn-primary\">Primary</button>\n\t\t<button type=\"button\" class=\"btn btn-success\">Success</button>\n\t\t<button type=\"button\" class=\"btn btn-info\">Info</button>\n\t\t<button type=\"button\" class=\"btn btn-warning\">Warning</button>\n\t\t<button type=\"button\" class=\"btn btn-danger\">Danger</button>\n\t\t<button type=\"button\" class=\"btn btn-link\">Link</button>\n\t</p>\n\t<p>\n\t\t<button type=\"button\" class=\"btn btn-sm btn-secondary\">Default</button>\n\t\t<button type=\"button\" class=\"btn btn-sm btn-primary\">Primary</button>\n\t\t<button type=\"button\" class=\"btn btn-sm btn-success\">Success</button>\n\t\t<button type=\"button\" class=\"btn btn-sm btn-info\">Info</button>\n\t\t<button type=\"button\" class=\"btn btn-sm btn-warning\">Warning</button>\n\t\t<button type=\"button\" class=\"btn btn-sm btn-danger\">Danger</button>\n\t\t<button type=\"button\" class=\"btn btn-sm btn-link\">Link</button>\n\t</p>\n\n\t<br>\n\n\t<div class=\"page-header\">\n\t\t<h1>Thumbnails</h1>\n\t\t<hr>\n\t</div>\n\t<img class=\"img-thumbnail\" src=\"http://placehold.it/400x400\" alt=\"\">\n\n\t<div class=\"page-header\">\n\t\t<h1>Dropdown menus</h1>\n\t\t<hr>\n\t</div>\n\t<div class=\"dropdown theme-dropdown clearfix\">\n\t\t<button class=\"btn btn-secondary dropdown-toggle\" type=\"button\"\n\t\t\tid=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n\t\t\taria-expanded=\"false\">Dropdown</button>\n\t\t<div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n\t\t\t<a class=\"dropdown-item\" href=\"javascript:;\">Action</a> <a\n\t\t\t\tclass=\"dropdown-item\" href=\"javascript:;\">Another action</a> <a\n\t\t\t\tclass=\"dropdown-item\" href=\"javascript:;\">Something else here</a>\n\t\t</div>\n\t</div>\n\n\t<br>\n\n\t<div class=\"page-header\">\n\t\t<h1>Navbars</h1>\n\t</div>\n\n\t<nav class=\"navbar navbar-light bg-faded\">\n\t\t<button class=\"navbar-toggler hidden-sm-up\" type=\"button\"\n\t\t\tdata-toggle=\"collapse\" data-target=\"#exCollapsingNavbar2\">☰\n\t\t</button>\n\t\t<div class=\"collapse navbar-toggleable-xs\" id=\"exCollapsingNavbar2\">\n\t\t\t<a class=\"navbar-brand\" href=\"javascript:;\">Responsive navbar</a>\n\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t<li class=\"nav-item-elements nav-item active\"><a\n\t\t\t\t\tclass=\"nav-link nav-link-elements\" href=\"javascript:;\">Home <span\n\t\t\t\t\t\tclass=\"sr-only\">(current)</span></a></li>\n\t\t\t\t<li class=\"nav-item-elements nav-item\"><a\n\t\t\t\t\tclass=\"nav-link nav-link-elements\" href=\"javascript:;\">Features</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item-elements nav-item\"><a\n\t\t\t\t\tclass=\"nav-link nav-link-elements\" href=\"javascript:;\">Pricing</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item-elements nav-item\"><a\n\t\t\t\t\tclass=\"nav-link nav-link-elements\" href=\"javascript:;\">About</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t</nav>\n\t<br>\n\t<nav class=\"navbar navbar-dark bg-inverse\">\n\t\t<button class=\"navbar-toggler hidden-sm-up\" type=\"button\"\n\t\t\tdata-toggle=\"collapse\" data-target=\"#exCollapsingNavbar3\">☰\n\t\t</button>\n\t\t<div class=\"collapse navbar-toggleable-xs\" id=\"exCollapsingNavbar3\">\n\t\t\t<a class=\"navbar-brand\" href=\"javascript:;\">Responsive navbar</a>\n\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t<li class=\"nav-item nav-item-elements active\"><a\n\t\t\t\t\tclass=\"nav-link nav-link-elements\" href=\"javascript:;\">Home <span\n\t\t\t\t\t\tclass=\"sr-only\">(current)</span></a></li>\n\t\t\t\t<li class=\"nav-item nav-item-elements\"><a\n\t\t\t\t\tclass=\"nav-link nav-link-elements\" href=\"javascript:;\">Features</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item nav-item-elements\"><a\n\t\t\t\t\tclass=\"nav-link nav-link-elements\" href=\"javascript:;\">Pricing</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item nav-item-elements\"><a\n\t\t\t\t\tclass=\"nav-link nav-link-elements\" href=\"javascript:;\">About</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t</nav>\n\n\t<div class=\"page-header\">\n\t\t<h1>Alerts</h1>\n\t\t<hr>\n\t</div>\n\t<div class=\"alert alert-success\">\n\t\t<strong>Well done!</strong> You successfully read this important alert\n\t\tmessage.\n\t</div>\n\t<div class=\"alert alert-info\">\n\t\t<strong>Heads up!</strong> This alert needs your attention, but it's\n\t\tnot super important.\n\t</div>\n\t<div class=\"alert alert-warning\">\n\t\t<strong>Warning!</strong> Best check yo self, you're not looking too\n\t\tgood.\n\t</div>\n\t<div class=\"alert alert-danger\">\n\t\t<strong>Oh snap!</strong> Change a few things up and try submitting\n\t\tagain.\n\t</div>\n\n\t<div class=\"page-header\">\n\t\t<h1>Progress bars</h1>\n\t\t<hr>\n\t</div>\n\t<progress class=\"progress\" value=\"25\" max=\"100\">\n\t\t<div class=\"progress\">\n\t\t\t<span class=\"progress-bar\" style=\"width: 25%;\">25%</span>\n\t\t</div>\n\t</progress>\n\t<progress class=\"progress progress-success\" value=\"50\" max=\"100\">\n\t\t<div class=\"progress\">\n\t\t\t<span class=\"progress-bar\" style=\"width: 50%;\">50%</span>\n\t\t</div>\n\t</progress>\n\t<progress class=\"progress progress-info\" value=\"65\" max=\"100\">\n\t\t<div class=\"progress\">\n\t\t\t<span class=\"progress-bar\" style=\"width: 65%;\">65%</span>\n\t\t</div>\n\t</progress>\n\t<progress class=\"progress progress-warning\" value=\"80\" max=\"100\">\n\t\t<div class=\"progress\">\n\t\t\t<span class=\"progress-bar\" style=\"width: 80%;\">80%</span>\n\t\t</div>\n\t</progress>\n\t<progress class=\"progress progress-danger\" value=\"95\" max=\"100\">\n\t\t<div class=\"progress\">\n\t\t\t<span class=\"progress-bar\" style=\"width: 95%;\">95%</span>\n\t\t</div>\n\t</progress>\n\t<progress class=\"progress progress-striped progress-animated\"\n\t\tvalue=\"25\" max=\"100\">25%</progress>\n\t<br>\n\n\t<div class=\"page-header\">\n\t\t<h1>List groups</h1>\n\t\t<hr>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-4\">\n\t\t\t<ul class=\"list-group\">\n\t\t\t\t<li class=\"list-group-item\">Cras justo odio</li>\n\t\t\t\t<li class=\"list-group-item\">Dapibus ac facilisis in</li>\n\t\t\t\t<li class=\"list-group-item\">Morbi leo risus</li>\n\t\t\t\t<li class=\"list-group-item\">Porta ac consectetur ac</li>\n\t\t\t\t<li class=\"list-group-item\">Vestibulum at eros</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<!-- /.col-sm-4 -->\n\t\t<div class=\"col-sm-4\">\n\t\t\t<div class=\"list-group\">\n\t\t\t\t<a href=\"javascript:;\" class=\"list-group-item active\">Cras justo\n\t\t\t\t\todio</a> <a href=\"javascript:;\" class=\"list-group-item\">Dapibus ac\n\t\t\t\t\tfacilisis in</a> <a href=\"javascript:;\" class=\"list-group-item\">Morbi\n\t\t\t\t\tleo risus</a> <a href=\"javascript:;\" class=\"list-group-item\">Porta\n\t\t\t\t\tac consectetur ac</a> <a href=\"javascript:;\" class=\"list-group-item\">Vestibulum\n\t\t\t\t\tat eros</a>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- /.col-sm-4 -->\n\t\t<div class=\"col-sm-4\">\n\t\t\t<div class=\"list-group\">\n\t\t\t\t<a href=\"javascript:;\" class=\"list-group-item active\">\n\t\t\t\t\t<h4 class=\"list-group-item-heading\">List group item heading</h4>\n\t\t\t\t\t<p class=\"list-group-item-text\">Donec id elit non mi porta\n\t\t\t\t\t\tgravida at eget metus. Maecenas sed diam eget risus varius\n\t\t\t\t\t\tblandit.</p>\n\t\t\t\t</a> <a href=\"javascript:;\" class=\"list-group-item\">\n\t\t\t\t\t<h4 class=\"list-group-item-heading\">List group item heading</h4>\n\t\t\t\t\t<p class=\"list-group-item-text\">Donec id elit non mi porta\n\t\t\t\t\t\tgravida at eget metus. Maecenas sed diam eget risus varius\n\t\t\t\t\t\tblandit.</p>\n\t\t\t\t</a> <a href=\"javascript:;\" class=\"list-group-item\">\n\t\t\t\t\t<h4 class=\"list-group-item-heading\">List group item heading</h4>\n\t\t\t\t\t<p class=\"list-group-item-text\">Donec id elit non mi porta\n\t\t\t\t\t\tgravida at eget metus. Maecenas sed diam eget risus varius\n\t\t\t\t\t\tblandit.</p>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- /.col-sm-4 -->\n\t</div>\n\n\t<div class=\"page-header\">\n\t\t<h1>Cards</h1>\n\t\t<hr>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-4\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-header card-default\">Card title</div>\n\t\t\t\t<div class=\"card-block\">Card content</div>\n\t\t\t</div>\n\t\t\t<div class=\"card card-primary card-inverse\">\n\t\t\t\t<div class=\"card-header card-primary\">Card title</div>\n\t\t\t\t<div class=\"card-block bg-white\">Card content</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- /.col-sm-4 -->\n\t\t<div class=\"col-sm-4\">\n\t\t\t<div class=\"card card-success card-inverse\">\n\t\t\t\t<div class=\"card-header card-success\">Card title</div>\n\t\t\t\t<div class=\"card-block bg-white\">Card content</div>\n\t\t\t</div>\n\t\t\t<div class=\"card card-info card-inverse\">\n\t\t\t\t<div class=\"card-header card-info\">Card title</div>\n\t\t\t\t<div class=\"card-block bg-white\">Card content</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- /.col-sm-4 -->\n\t\t<div class=\"col-sm-4\">\n\t\t\t<div class=\"card card-warning card-inverse\">\n\t\t\t\t<div class=\"card-header card-warning\">Card title</div>\n\t\t\t\t<div class=\"card-block bg-white\">Card content</div>\n\t\t\t</div>\n\t\t\t<div class=\"card card-danger card-inverse\">\n\t\t\t\t<div class=\"card-header card-danger\">Card title</div>\n\t\t\t\t<div class=\"card-block bg-white\">Card content</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- /.col-sm-4 -->\n\t\t<div class=\"col-sm-4\">\n\t\t\t<div class=\"card card-success card-inverse\">\n\t\t\t\t<div class=\"card-header card-success\">Card title</div>\n\t\t\t\t<div class=\"card-block bg-white\">Card content</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- /.col-sm-4 -->\n\t\t<div class=\"col-sm-4\">\n\t\t\t<div class=\"card card-warning card-inverse\">\n\t\t\t\t<div class=\"card-header card-warning\">Card title</div>\n\t\t\t\t<div class=\"card-block bg-white\">Card content</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- /.col-sm-4 -->\n\t\t<div class=\"col-sm-4\">\n\t\t\t<div class=\"card card-danger card-inverse\">\n\t\t\t\t<div class=\"card-header card-danger\">Card title</div>\n\t\t\t\t<div class=\"card-block bg-white\">Card content</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- /.col-sm-4 -->\n\t</div>\n\n</div>"

/***/ }),

/***/ 589:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<!-- Page Heading -->\n\t<div class=\"row\">\n\t\t<div class=\"col-xl-12\">\n\t\t\t<h1 class=\"page-header\">Charts</h1>\n\t\t\t<ol class=\"breadcrumb\">\n\t\t\t\t<li><i class=\"fa fa-dashboard\"></i> <a\n\t\t\t\t\thref=\"Javascript:void(0)\" routerLink=\"/dashboard/home\">\n\t\t\t\t\t\tDashboard</a></li>\n\t\t\t\t<li class=\"active\"><i class=\"fa fa-fw fa-bar-chart-o\"></i> High\n\t\t\t\t\tChart</li>\n\t\t\t</ol>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-xl-6\">\n\t\t\t<div class=\"card card-block\">\n\t\t\t\t<div id=\"container\"\n\t\t\t\t\tstyle=\"min-width: 310px; height: 400px; max-width: 800px; margin: 0 auto\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xl-6\">\n\t\t\t<div class=\"card card-block\">\n\t\t\t\t<div id=\"area-chart\"\n\t\t\t\t\tstyle=\"min-width: 310px; height: 400px; margin: 0 auto\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<h1>&nbsp;</h1>\n\t\t<div class=\"col-xl-6\">\n\t\t\t<div class=\"card card-block\">\n\t\t\t\t<div id=\"total-fruit\"\n\t\t\t\t\tstyle=\"min-width: 310px; height: 400px; margin: 0 auto\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xl-6\">\n\t\t\t<div class=\"card card-block\">\n\t\t\t\t<div id=\"snow-depth\"\n\t\t\t\t\tstyle=\"min-width: 310px; height: 400px; margin: 0 auto\"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 590:
/***/ (function(module, exports) {

module.exports = "<app-top-nav></app-top-nav>\n<app-sidebar-cmp></app-sidebar-cmp>\n<section class=\"main-container\" [ngClass]=\"{sidebarPushRight: isActive}\">\n\t<router-outlet></router-outlet>\n</section>"

/***/ }),

/***/ 591:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<!-- Page Heading -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\t\t\t<h2 class=\"page-header\">Forms</h2>\n\t\t\t<ol class=\"breadcrumb\">\n\t\t\t\t<li><i class=\"fa fa-dashboard\"></i> <a\n\t\t\t\t\thref=\"Javascript:void(0)\" routerLink=\"/dashboard/home\">Dashboard</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"active\"><i class=\"fa fa-edit\"></i> Forms</li>\n\t\t\t</ol>\n\t\t</div>\n\t</div>\n\t<!-- /.row -->\n\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-6\">\n\n\t\t\t<form role=\"form\">\n\t\t\t\t<fieldset class=\"form-group\">\n\t\t\t\t\t<label>Text Input</label> <input class=\"form-control\">\n\t\t\t\t\t<p class=\"help-block\">Example block-level help text here.</p>\n\t\t\t\t</fieldset>\n\n\t\t\t\t<fieldset class=\"form-group\">\n\t\t\t\t\t<label>Text Input with Placeholder</label> <input\n\t\t\t\t\t\tclass=\"form-control\" placeholder=\"Enter text\">\n\t\t\t\t</fieldset>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Static Control</label>\n\t\t\t\t\t<p class=\"form-control-static\">email@example.com</p>\n\t\t\t\t</div>\n\n\t\t\t\t<fieldset class=\"form-group\">\n\t\t\t\t\t<label for=\"exampleInputFile\">File input</label> <input type=\"file\"\n\t\t\t\t\t\tclass=\"form-control-file\" id=\"exampleInputFile\">\n\t\t\t\t</fieldset>\n\n\t\t\t\t<fieldset class=\"form-group\">\n\t\t\t\t\t<label>Text area</label>\n\t\t\t\t\t<textarea class=\"form-control\" rows=\"3\"></textarea>\n\t\t\t\t</fieldset>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Checkboxes</label>\n\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t<label> <input type=\"checkbox\" value=\"\"> Checkbox\n\t\t\t\t\t\t\t1\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t<label> <input type=\"checkbox\" value=\"\"> Checkbox\n\t\t\t\t\t\t\t2\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t<label> <input type=\"checkbox\" value=\"\"> Checkbox\n\t\t\t\t\t\t\t3\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Inline Checkboxes</label> <label class=\"checkbox-inline\">\n\t\t\t\t\t\t<input type=\"checkbox\">1\n\t\t\t\t\t</label> <label class=\"checkbox-inline\"> <input type=\"checkbox\">2\n\t\t\t\t\t</label> <label class=\"checkbox-inline\"> <input type=\"checkbox\">3\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\n\t\t\t\t<fieldset class=\"form-group\">\n\t\t\t\t\t<label>Radio Buttons</label>\n\t\t\t\t\t<div class=\"radio\">\n\t\t\t\t\t\t<label> <input type=\"radio\" name=\"optionsRadios\"\n\t\t\t\t\t\t\tid=\"optionsRadios1\" value=\"option1\" checked> Radio 1\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radio\">\n\t\t\t\t\t\t<label> <input type=\"radio\" name=\"optionsRadios\"\n\t\t\t\t\t\t\tid=\"optionsRadios2\" value=\"option2\"> Radio 2\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"radio\">\n\t\t\t\t\t\t<label> <input type=\"radio\" name=\"optionsRadios\"\n\t\t\t\t\t\t\tid=\"optionsRadios3\" value=\"option3\"> Radio 3\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</fieldset>\n\n\t\t\t\t<fieldset class=\"form-group\">\n\t\t\t\t\t<label>Inline Radio Buttons</label> <label class=\"radio-inline\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"optionsRadiosInline\"\n\t\t\t\t\t\tid=\"optionsRadiosInline1\" value=\"option1\" checked>1\n\t\t\t\t\t</label> <label class=\"radio-inline\"> <input type=\"radio\"\n\t\t\t\t\t\tname=\"optionsRadiosInline\" id=\"optionsRadiosInline2\"\n\t\t\t\t\t\tvalue=\"option2\">2\n\t\t\t\t\t</label> <label class=\"radio-inline\"> <input type=\"radio\"\n\t\t\t\t\t\tname=\"optionsRadiosInline\" id=\"optionsRadiosInline3\"\n\t\t\t\t\t\tvalue=\"option3\">3\n\t\t\t\t\t</label>\n\t\t\t\t</fieldset>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Selects</label> <select class=\"form-control\">\n\t\t\t\t\t\t<option>1</option>\n\t\t\t\t\t\t<option>2</option>\n\t\t\t\t\t\t<option>3</option>\n\t\t\t\t\t\t<option>4</option>\n\t\t\t\t\t\t<option>5</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\n\t\t\t\t<fieldset class=\"form-group\">\n\t\t\t\t\t<label>Multiple Selects</label> <select multiple\n\t\t\t\t\t\tclass=\"form-control\">\n\t\t\t\t\t\t<option>1</option>\n\t\t\t\t\t\t<option>2</option>\n\t\t\t\t\t\t<option>3</option>\n\t\t\t\t\t\t<option>4</option>\n\t\t\t\t\t\t<option>5</option>\n\t\t\t\t\t</select>\n\t\t\t\t</fieldset>\n\n\t\t\t\t<button type=\"submit\" class=\"btn btn-secondary\">Submit\n\t\t\t\t\tButton</button>\n\t\t\t\t<button type=\"reset\" class=\"btn btn-secondary\">Reset Button</button>\n\n\t\t\t</form>\n\n\t\t</div>\n\t\t<div class=\"col-lg-6\">\n\t\t\t<h4>Disabled Form States</h4>\n\n\t\t\t<form role=\"form\">\n\n\t\t\t\t<fieldset disabled>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"disabledSelect\">Disabled input</label> <input\n\t\t\t\t\t\t\tclass=\"form-control\" id=\"disabledInput\" type=\"text\"\n\t\t\t\t\t\t\tplaceholder=\"Disabled input\" disabled>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"disabledSelect\">Disabled select menu</label> <select\n\t\t\t\t\t\t\tid=\"disabledSelect\" class=\"form-control\">\n\t\t\t\t\t\t\t<option>Disabled select</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t<label> <input type=\"checkbox\"> Disabled Checkbox\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Disabled\n\t\t\t\t\t\tButton</button>\n\n\t\t\t\t</fieldset>\n\n\t\t\t</form>\n\t\t\t<br>\n\n\t\t\t<h4>Form Validation</h4>\n\n\t\t\t<form role=\"form\">\n\n\t\t\t\t<div class=\"form-group has-success\">\n\t\t\t\t\t<label class=\"form-control-label\" for=\"inputSuccess\">Input\n\t\t\t\t\t\twith success</label> <input type=\"text\"\n\t\t\t\t\t\tclass=\"form-control form-control-success\" id=\"inputSuccess\">\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group has-warning\">\n\t\t\t\t\t<label class=\"form-control-label\" for=\"inputWarning\">Input\n\t\t\t\t\t\twith warning</label> <input type=\"text\"\n\t\t\t\t\t\tclass=\"form-control form-control-warning\" id=\"inputWarning\">\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group has-danger\">\n\t\t\t\t\t<label class=\"form-control-label\" for=\"inputError\">Input\n\t\t\t\t\t\twith danger</label> <input type=\"text\"\n\t\t\t\t\t\tclass=\"form-control form-control-danger\" id=\"inputError\">\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\t\t\t<h4>Input Groups</h4>\n\n\t\t\t<form role=\"form\">\n\n\t\t\t\t<div class=\"form-group input-group\">\n\t\t\t\t\t<span class=\"input-group-addon\">@</span> <input type=\"text\"\n\t\t\t\t\t\tclass=\"form-control\" placeholder=\"Username\">\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group input-group\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\"> <span\n\t\t\t\t\t\tclass=\"input-group-addon\">.00</span>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group input-group\">\n\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-eur\"></i></span> <input\n\t\t\t\t\t\ttype=\"text\" class=\"form-control\" placeholder=\"Font Awesome Icon\">\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group input-group\">\n\t\t\t\t\t<span class=\"input-group-addon\">$</span> <input type=\"text\"\n\t\t\t\t\t\tclass=\"form-control\"> <span class=\"input-group-addon\">.00</span>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group input-group\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\"> <span\n\t\t\t\t\t\tclass=\"input-group-btn\"><button class=\"btn btn-secondary\"\n\t\t\t\t\t\t\ttype=\"button\">\n\t\t\t\t\t\t\t<i class=\"fa fa-search\"></i>\n\t\t\t\t\t\t</button></span>\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\t\t\t<p>\n\t\t\t\tFor complete documentation, please visit <a target=\"_blank\"\n\t\t\t\t\thref=\"http://v4-alpha.getbootstrap.com/components/forms/\">Bootstrap's\n\t\t\t\t\tForm Documentation</a>.\n\t\t\t</p>\n\n\t\t</div>\n\t</div>\n\t<!-- /.row -->\n\n</div>"

/***/ }),

/***/ 592:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n\t<!-- Page Heading -->\n\t<div class=\"row\">\n\t\t<div class=\"col-xl-12\">\n\t\t\t<h2 class=\"page-header\">Bootstrap Grid</h2>\n\t\t\t<ol class=\"breadcrumb\">\n\t\t\t\t<li><i class=\"fa fa-dashboard\"></i> <a\n\t\t\t\t\thref=\"Javascript:void(0)\" routerLink=\"/dashboard/home\">Dashboard</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"active\"><i class=\"fa fa-wrench\"></i> Bootstrap Grid\n\t\t\t\t</li>\n\t\t\t</ol>\n\t\t</div>\n\t</div>\n\t<!-- /.row -->\n\n\t<div class=\"row\">\n\t\t<div class=\"col-xl-12 text-xs-center\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-block\">.col-xl-12</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- /.row -->\n\n\t<div class=\"row\">\n\t\t<div class=\"col-xl-6 text-xs-center\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-block\">.col-xl-6</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xl-6 text-xs-center\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-block\">.col-xl-6</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- /.row -->\n\n\t<div class=\"row\">\n\t\t<div class=\"col-xl-4 text-xs-center\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-block\">.col-xl-4</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xl-4 text-xs-center\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-block\">.col-xl-4</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xl-4 text-xs-center\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-block\">.col-xl-4</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- /.row -->\n\n\t<div class=\"row\">\n\t\t<div class=\"col-xl-3 text-xs-center\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-block\">.col-xl-3</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xl-3 text-xs-center\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-block\">.col-xl-3</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xl-3 text-xs-center\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-block\">.col-xl-3</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xl-3 text-xs-center\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-block\">.col-xl-3</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- /.row -->\n\n\t<div class=\"row\">\n\t\t<div class=\"col-xl-2 text-xs-center\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-block\">.col-xl-2</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xl-2 text-xs-center\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-block\">.col-xl-2</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xl-2 text-xs-center\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-block\">.col-xl-2</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xl-2 text-xs-center\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-block\">.col-xl-2</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xl-2 text-xs-center\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-block\">.col-xl-2</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xl-2 text-xs-center\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-block\">.col-xl-2</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- /.row -->\n\n\t<div class=\"row\">\n\t\t<div class=\"col-xl-1 text-xs-center\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-block\">.col-xl-1</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xl-1 text-xs-center\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-block\">.col-xl-1</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xl-1 text-xs-center\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-block\">.col-xl-1</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xl-1 text-xs-center\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-block\">.col-xl-1</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xl-1 text-xs-center\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-block\">.col-xl-1</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xl-1 text-xs-center\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-block\">.col-xl-1</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xl-1 text-xs-center\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-block\">.col-xl-1</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xl-1 text-xs-center\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-block\">.col-xl-1</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xl-1 text-xs-center\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-block\">.col-xl-1</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xl-1 text-xs-center\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-block\">.col-xl-1</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xl-1 text-xs-center\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-block\">.col-xl-1</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xl-1 text-xs-center\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-block\">.col-xl-1</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- /.row -->\n\n\t<div class=\"row\">\n\t\t<div class=\"col-xl-8 text-xs-center\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-block\">.col-xl-8</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xl-4 text-xs-center\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-block\">.col-xl-4</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- /.row -->\n\n\t<div class=\"row\">\n\t\t<div class=\"col-xl-3 text-xs-center\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-block\">.col-xl-3</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xl-6 text-xs-center\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-block\">.col-xl-6</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xl-3 text-xs-center\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-block\">.col-xl-3</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- /.row -->\n\n</div>"

/***/ }),

/***/ 593:
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-panel card card-default\">\n\t<div class=\"card-header\">\n\t\t<i class=\"fa fa-comments fa-fw\"></i> Chat\n\t\t<div class=\" pull-right\" dropdown>\n\t\t\t<button id=\"chat-dropdown\" type=\"button\"\n\t\t\t\tclass=\"btn btn-secondary btn-sm\" dropdownToggle>\n\t\t\t\t<span class=\"caret\"></span>\n\t\t\t</button>\n\t\t\t<ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"chat-dropdown\">\n\t\t\t\t<li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\"> <i\n\t\t\t\t\t\tclass=\"fa fa-refresh fa-fw\"></i> Refresh\n\t\t\t\t</a></li>\n\t\t\t\t<li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\"> <i\n\t\t\t\t\t\tclass=\"fa fa-check-circle fa-fw\"></i> Available\n\t\t\t\t</a></li>\n\t\t\t\t<li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\"> <i\n\t\t\t\t\t\tclass=\"fa fa-times fa-fw\"></i> Busy\n\t\t\t\t</a></li>\n\t\t\t\t<li class=\"divider dropdown-divider\"></li>\n\t\t\t\t<li role=\"menuitem\"><a href=\"#\" class=\"dropdown-item\"> <i\n\t\t\t\t\t\tclass=\"fa fa-times fa-fw\"></i> Busy\n\t\t\t\t</a></li>\n\t\t\t\t<li><a href=\"#\" class=\"dropdown-item\"> <i\n\t\t\t\t\t\tclass=\"fa fa-clock-o fa-fw\"></i> Away\n\t\t\t\t</a></li>\n\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t<li><a href=\"#\" class=\"dropdown-item\"> <i\n\t\t\t\t\t\tclass=\"fa fa-sign-out fa-fw\"></i> Sign Out\n\t\t\t\t</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t<!-- /.panel-heading -->\n\t<div class=\"card-block\">\n\t\t<ul class=\"chat\">\n\t\t\t<li class=\"left clearfix\"><span class=\"chat-img pull-left\">\n\t\t\t\t\t<img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\"\n\t\t\t\t\tclass=\"img-circle\">\n\t\t\t</span>\n\t\t\t\t<div class=\"chat-body clearfix\">\n\t\t\t\t\t<div class=\"header\">\n\t\t\t\t\t\t<strong class=\"primary-font\">Jack Sparrow</strong> <small\n\t\t\t\t\t\t\tclass=\"pull-right text-muted\"> <i\n\t\t\t\t\t\t\tclass=\"fa fa-clock-o fa-fw\"></i> 12 mins ago\n\t\t\t\t\t\t</small>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\t\t\t\t\t\tCurabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n\t\t\t\t\t</p>\n\t\t\t\t</div></li>\n\t\t\t<li class=\"right clearfix\"><span class=\"chat-img pull-right\">\n\t\t\t\t\t<img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\"\n\t\t\t\t\tclass=\"img-circle\">\n\t\t\t</span>\n\t\t\t\t<div class=\"chat-body clearfix\">\n\t\t\t\t\t<div class=\"header\">\n\t\t\t\t\t\t<small class=\" text-muted\"> <i class=\"fa fa-clock-o fa-fw\"></i>\n\t\t\t\t\t\t\t13 mins ago\n\t\t\t\t\t\t</small> <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\t\t\t\t\t\tCurabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n\t\t\t\t\t</p>\n\t\t\t\t</div></li>\n\t\t\t<li class=\"left clearfix\"><span class=\"chat-img pull-left\">\n\t\t\t\t\t<img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\"\n\t\t\t\t\tclass=\"img-circle\">\n\t\t\t</span>\n\t\t\t\t<div class=\"chat-body clearfix\">\n\t\t\t\t\t<div class=\"header\">\n\t\t\t\t\t\t<strong class=\"primary-font\">Jack Sparrow</strong> <small\n\t\t\t\t\t\t\tclass=\"pull-right text-muted\"> <i\n\t\t\t\t\t\t\tclass=\"fa fa-clock-o fa-fw\"></i> 14 mins ago\n\t\t\t\t\t\t</small>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\t\t\t\t\t\tCurabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n\t\t\t\t\t</p>\n\t\t\t\t</div></li>\n\t\t\t<li class=\"right clearfix\"><span class=\"chat-img pull-right\">\n\t\t\t\t\t<img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\"\n\t\t\t\t\tclass=\"img-circle\">\n\t\t\t</span>\n\t\t\t\t<div class=\"chat-body clearfix\">\n\t\t\t\t\t<div class=\"header\">\n\t\t\t\t\t\t<small class=\" text-muted\"> <i class=\"fa fa-clock-o fa-fw\"></i>\n\t\t\t\t\t\t\t15 mins ago\n\t\t\t\t\t\t</small> <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\t\t\t\t\t\tCurabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n\t\t\t\t\t</p>\n\t\t\t\t</div></li>\n\t\t</ul>\n\t</div>\n\t<!-- /.card-body -->\n\t<div class=\"card-footer\">\n\t\t<div class=\"input-group\">\n\t\t\t<input id=\"btn-input\" type=\"text\" class=\"form-control input-sm\"\n\t\t\t\tplaceholder=\"Type your message here...\"> <span\n\t\t\t\tclass=\"input-group-btn\">\n\t\t\t\t<button class=\"btn btn-warning btn-sm\" id=\"btn-chat\">Send</button>\n\t\t\t</span>\n\t\t</div>\n\t</div>\n\t<!-- /.card-footer -->\n</div>\n"

/***/ }),

/***/ 594:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<h2 class=\"text-muted\">\n\t\tDashboard <small>Statistics Overview</small>\n\t</h2>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<carousel [interval]=\"myInterval\"> <slide\n\t\t\t\t*ngFor=\"let slidez of slides;let index=index\"\n\t\t\t\t[active]=\"slidez.active\"> <img [src]=\"slidez.image\">\n\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t<h4>Slide {{index}}</h4>\n\t\t\t\t<p>{{slidez.text}}</p>\n\t\t\t</div>\n\t\t\t</slide> <i class=\"fa fa-chevron-left left carousel-control\"></i> <i\n\t\t\t\tclass=\"fa fa-chevron-right right carousel-control\"></i> </carousel>\n\t\t</div>\n\t</div>\n\t<hr>\n\t<div class=\"row\">\n\t\t<div class=\"col-xl-3 col-lg-6\">\n\t\t\t<div class=\"card card-primary card-inverse\">\n\t\t\t\t<div class=\"card-header card-primary\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-xs-3\">\n\t\t\t\t\t\t\t<i class=\"fa fa-comments fa-5x\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-xs-9 text-xs-right\">\n\t\t\t\t\t\t\t<div class=\"huge\">26</div>\n\t\t\t\t\t\t\t<div>New Comments!</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-footer card-default\">\n\t\t\t\t\t<a href=\"javascript:;\"> <span class=\"pull-xs-left\">View\n\t\t\t\t\t\t\tDetails</span> <span class=\"pull-xs-right\"><i\n\t\t\t\t\t\t\tclass=\"fa fa-arrow-circle-right\"></i></span>\n\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xl-3 col-lg-6\">\n\t\t\t<div class=\"card card-success card-inverse\">\n\t\t\t\t<div class=\"card-header card-success\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-xs-3\">\n\t\t\t\t\t\t\t<i class=\"fa fa-tasks fa-5x\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-xs-9 text-xs-right\">\n\t\t\t\t\t\t\t<div class=\"huge\">12</div>\n\t\t\t\t\t\t\t<div>New Tasks!</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-footer card-green\">\n\t\t\t\t\t<a class=\"text-success\" href=\"javascript:void(0);\"> <span\n\t\t\t\t\t\tclass=\"pull-xs-left\">View Details</span> <span\n\t\t\t\t\t\tclass=\"pull-xs-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xl-3 col-lg-6\">\n\t\t\t<div class=\"card card-warning card-inverse\">\n\t\t\t\t<div class=\"card-header card-warning\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-xs-3\">\n\t\t\t\t\t\t\t<i class=\"fa fa-shopping-cart fa-5x\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-xs-9 text-xs-right\">\n\t\t\t\t\t\t\t<div class=\"huge\">124</div>\n\t\t\t\t\t\t\t<div>New Orders!</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-footer card-yellow\">\n\t\t\t\t\t<a class=\"text-warning\" href=\"javascript:void(0);\"> <span\n\t\t\t\t\t\tclass=\"pull-xs-left\">View Details</span> <span\n\t\t\t\t\t\tclass=\"pull-xs-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xl-3 col-lg-6\">\n\t\t\t<div class=\"card card-danger card-inverse\">\n\t\t\t\t<div class=\"card-header card-danger\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-xs-3\">\n\t\t\t\t\t\t\t<i class=\"fa fa-support fa-5x\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-xs-9 text-xs-right\">\n\t\t\t\t\t\t\t<div class=\"huge\">13</div>\n\t\t\t\t\t\t\t<div>Support Tickets!</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-footer card-red\">\n\t\t\t\t\t<a class=\"text-danger\" href=\"javascript:void(0);\"> <span\n\t\t\t\t\t\tclass=\"pull-xs-left\">View Details</span> <span\n\t\t\t\t\t\tclass=\"pull-xs-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<alert *ngFor=\"let alert of alerts; let i = index\" [type]=\"alert.type\"\n\t\tdismissible=\"true\" (close)=\"closeAlert(i)\"> {{ alert?.msg }} </alert>\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-8\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t<i class=\"fa fa-clock-o fa-fw\"></i> Responsive Timeline\n\t\t\t\t</div>\n\t\t\t\t<!-- /.card-header -->\n\t\t\t\t<app-timeline-cmp></app-timeline-cmp>\n\t\t\t\t<!-- /.card-body -->\n\t\t\t</div>\n\t\t\t<!-- /.card -->\n\t\t</div>\n\t\t<!-- /.col-lg-8 -->\n\t\t<div class=\"col-lg-4\">\n\t\t\t<div class=\"card card-default\">\n\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t<i class=\"fa fa-bell fa-fw\"></i> Notifications card\n\t\t\t\t</div>\n\t\t\t\t<!-- /.card-header -->\n\t\t\t\t<app-notifications-cmp></app-notifications-cmp>\n\t\t\t\t<!-- /.card-body -->\n\t\t\t</div>\n\t\t\t<!-- /.card -->\n\n\t\t\t<app-chat-cmp></app-chat-cmp>\n\t\t\t<!-- /.card .chat-card -->\n\t\t</div>\n\t\t<!-- /.col-lg-4 -->\n\t</div>\n\n</div>\n"

/***/ }),

/***/ 595:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-body\">\n\t<div class=\"list-group\">\n\t\t<a href=\"#\" class=\"list-group-item\"> <i\n\t\t\tclass=\"fa fa-comment fa-fw\"></i> New Comment <span\n\t\t\tclass=\"pull-right text-muted small\"><em>4 minutes ago</em> </span>\n\t\t</a> <a href=\"#\" class=\"list-group-item\"> <i\n\t\t\tclass=\"fa fa-twitter fa-fw\"></i> 3 New Followers <span\n\t\t\tclass=\"pull-right text-muted small\"><em>12 minutes ago</em> </span>\n\t\t</a> <a href=\"#\" class=\"list-group-item\"> <i\n\t\t\tclass=\"fa fa-envelope fa-fw\"></i> Message Sent <span\n\t\t\tclass=\"pull-right text-muted small\"><em>27 minutes ago</em> </span>\n\t\t</a> <a href=\"#\" class=\"list-group-item\"> <i class=\"fa fa-tasks fa-fw\"></i>\n\t\t\tNew Task <span class=\"pull-right text-muted small\"><em>43\n\t\t\t\t\tminutes ago</em> </span>\n\t\t</a> <a href=\"#\" class=\"list-group-item\"> <i\n\t\t\tclass=\"fa fa-upload fa-fw\"></i> Server Rebooted <span\n\t\t\tclass=\"pull-right text-muted small\"><em>11:32 AM</em> </span>\n\t\t</a> <a href=\"#\" class=\"list-group-item\"> <i class=\"fa fa-bolt fa-fw\"></i>\n\t\t\tServer Crashed! <span class=\"pull-right text-muted small\"><em>11:13\n\t\t\t\t\tAM</em> </span>\n\t\t</a> <a href=\"#\" class=\"list-group-item\"> <i\n\t\t\tclass=\"fa fa-warning fa-fw\"></i> Server Not Responding <span\n\t\t\tclass=\"pull-right text-muted small\"><em>10:57 AM</em> </span>\n\t\t</a> <a href=\"#\" class=\"list-group-item\"> <i\n\t\t\tclass=\"fa fa-shopping-cart fa-fw\"></i> New Order Placed <span\n\t\t\tclass=\"pull-right text-muted small\"><em>9:49 AM</em> </span>\n\t\t</a> <a href=\"#\" class=\"list-group-item\"> <i class=\"fa fa-money fa-fw\"></i>\n\t\t\tPayment Received <span class=\"pull-right text-muted small\"><em>Yesterday</em>\n\t\t</span>\n\t\t</a>\n\t</div>\n\t<!-- /.list-group -->\n\t<a href=\"#\" class=\"btn btn-default btn-block\">View All Alerts</a>\n</div>\n"

/***/ }),

/***/ 596:
/***/ (function(module, exports) {

module.exports = "<div class=\"card-block\">\n\t<ul class=\"timeline\">\n\t\t<li>\n\t\t\t<div class=\"timeline-badge\">\n\t\t\t\t<i class=\"fa fa-check\"></i>\n\t\t\t</div>\n\t\t\t<div class=\"timeline-panel\">\n\t\t\t\t<div class=\"timeline-heading\">\n\t\t\t\t\t<h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<small class=\"text-muted\"><i class=\"fa fa-clock-o\"></i> 11\n\t\t\t\t\t\t\thours ago via Twitter</small>\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"timeline-body\">\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n\t\t\t\t\t\tLibero laboriosam dolor perspiciatis omnis exercitationem. Beatae,\n\t\t\t\t\t\tofficia pariatur? Est cum veniam excepturi. Maiores praesentium,\n\t\t\t\t\t\tporro voluptas suscipit facere rem dicta, debitis.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t\t<li class=\"timeline-inverted\">\n\t\t\t<div class=\"timeline-badge warning\">\n\t\t\t\t<i class=\"fa fa-credit-card\"></i>\n\t\t\t</div>\n\t\t\t<div class=\"timeline-panel\">\n\t\t\t\t<div class=\"timeline-heading\">\n\t\t\t\t\t<h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"timeline-body\">\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n\t\t\t\t\t\tAutem dolorem quibusdam, tenetur commodi provident cumque magni\n\t\t\t\t\t\tvoluptatem libero, quis rerum. Fugiat esse debitis optio, tempore.\n\t\t\t\t\t\tAnimi officiis alias, officia repellendus.</p>\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n\t\t\t\t\t\tLaudantium maiores odit qui est tempora eos, nostrum provident\n\t\t\t\t\t\texplicabo dignissimos debitis vel! Adipisci eius voluptates, ad\n\t\t\t\t\t\taut recusandae minus eaque facere.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t\t<li>\n\t\t\t<div class=\"timeline-badge danger\">\n\t\t\t\t<i class=\"fa fa-bomb\"></i>\n\t\t\t</div>\n\t\t\t<div class=\"timeline-panel\">\n\t\t\t\t<div class=\"timeline-heading\">\n\t\t\t\t\t<h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"timeline-body\">\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n\t\t\t\t\t\tRepellendus numquam facilis enim eaque, tenetur nam id qui vel\n\t\t\t\t\t\tvelit similique nihil iure molestias aliquam, voluptatem totam\n\t\t\t\t\t\tquaerat, magni commodi quisquam.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t\t<li class=\"timeline-inverted\">\n\t\t\t<div class=\"timeline-panel\">\n\t\t\t\t<div class=\"timeline-heading\">\n\t\t\t\t\t<h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"timeline-body\">\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n\t\t\t\t\t\tVoluptates est quaerat asperiores sapiente, eligendi, nihil.\n\t\t\t\t\t\tItaque quos, alias sapiente rerum quas odit! Aperiam officiis\n\t\t\t\t\t\tquidem delectus libero, omnis ut debitis!</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t\t<li>\n\t\t\t<div class=\"timeline-badge info\">\n\t\t\t\t<i class=\"fa fa-save\"></i>\n\t\t\t</div>\n\t\t\t<div class=\"timeline-panel\">\n\t\t\t\t<div class=\"timeline-heading\">\n\t\t\t\t\t<h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"timeline-body\">\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n\t\t\t\t\t\tNobis minus modi quam ipsum alias at est molestiae excepturi\n\t\t\t\t\t\tdelectus nesciunt, quibusdam debitis amet, beatae consequuntur\n\t\t\t\t\t\timpedit nulla qui! Laborum, atque.</p>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t\t<button type=\"button\"\n\t\t\t\t\t\t\tclass=\"btn btn-primary btn-sm dropdown-toggle\"\n\t\t\t\t\t\t\tdata-toggle=\"dropdown\">\n\t\t\t\t\t\t\t<i class=\"fa fa-gear\"></i> <span class=\"caret\"></span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\n\t\t\t\t\t\t\t<li><a href=\"#\">Action</a></li>\n\t\t\t\t\t\t\t<li><a href=\"#\">Another action</a></li>\n\t\t\t\t\t\t\t<li><a href=\"#\">Something else here</a></li>\n\t\t\t\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t\t\t\t<li><a href=\"#\">Separated link</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t\t<li>\n\t\t\t<div class=\"timeline-panel\">\n\t\t\t\t<div class=\"timeline-heading\">\n\t\t\t\t\t<h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"timeline-body\">\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n\t\t\t\t\t\tSequi fuga odio quibusdam. Iure expedita, incidunt unde quis nam!\n\t\t\t\t\t\tQuod, quisquam. Officia quam qui adipisci quas consequuntur\n\t\t\t\t\t\tnostrum sequi. Consequuntur, commodi.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t\t<li class=\"timeline-inverted\">\n\t\t\t<div class=\"timeline-badge success\">\n\t\t\t\t<i class=\"fa fa-graduation-cap\"></i>\n\t\t\t</div>\n\t\t\t<div class=\"timeline-panel\">\n\t\t\t\t<div class=\"timeline-heading\">\n\t\t\t\t\t<h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"timeline-body\">\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n\t\t\t\t\t\tDeserunt obcaecati, quaerat tempore officia voluptas debitis\n\t\t\t\t\t\tconsectetur culpa amet, accusamus dolorum fugiat, animi dicta\n\t\t\t\t\t\taperiam, enim incidunt quisquam maxime neque eaque.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t</ul>\n</div>\n"

/***/ }),

/***/ 597:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<!-- Page Heading -->\n\t<div class=\"row\">\n\t\t<div class=\"col-xl-12\">\n\t\t\t<h2 class=\"page-header\">Tables</h2>\n\t\t\t<ol class=\"breadcrumb\">\n\t\t\t\t<li><i class=\"fa fa-dashboard\"></i> <a\n\t\t\t\t\thref=\"Javascript:void(0);\" routerLink=\"/dashboard/home\">Dashboard</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"active\"><i class=\"fa fa-table\"></i> Tables</li>\n\t\t\t</ol>\n\t\t</div>\n\t</div>\n\t<!-- /.row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-xl-6 col-lg-12\">\n\t\t\t<h4>Basic example</h4>\n\t\t\t<div class=\"card card-block\">\n\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>#</th>\n\t\t\t\t\t\t\t\t<th>First Name</th>\n\t\t\t\t\t\t\t\t<th>Last Name</th>\n\t\t\t\t\t\t\t\t<th>Username</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th scope=\"row\">1</th>\n\t\t\t\t\t\t\t\t<td>Mark</td>\n\t\t\t\t\t\t\t\t<td>Otto</td>\n\t\t\t\t\t\t\t\t<td>@mdo</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th scope=\"row\">2</th>\n\t\t\t\t\t\t\t\t<td>Jacob</td>\n\t\t\t\t\t\t\t\t<td>Thornton</td>\n\t\t\t\t\t\t\t\t<td>@fat</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th scope=\"row\">3</th>\n\t\t\t\t\t\t\t\t<td>Larry</td>\n\t\t\t\t\t\t\t\t<td>the Bird</td>\n\t\t\t\t\t\t\t\t<td>@twitter</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<h4>Table head options</h4>\n\t\t\t<div class=\"card card-block\">\n\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t<thead class=\"thead-inverse\">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>#</th>\n\t\t\t\t\t\t\t\t<th>First Name</th>\n\t\t\t\t\t\t\t\t<th>Last Name</th>\n\t\t\t\t\t\t\t\t<th>Username</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th scope=\"row\">1</th>\n\t\t\t\t\t\t\t\t<td>Mark</td>\n\t\t\t\t\t\t\t\t<td>Otto</td>\n\t\t\t\t\t\t\t\t<td>@mdo</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th scope=\"row\">2</th>\n\t\t\t\t\t\t\t\t<td>Jacob</td>\n\t\t\t\t\t\t\t\t<td>Thornton</td>\n\t\t\t\t\t\t\t\t<td>@fat</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th scope=\"row\">3</th>\n\t\t\t\t\t\t\t\t<td>Larry</td>\n\t\t\t\t\t\t\t\t<td>the Bird</td>\n\t\t\t\t\t\t\t\t<td>@twitter</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t<thead class=\"thead-default\">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>#</th>\n\t\t\t\t\t\t\t\t<th>First Name</th>\n\t\t\t\t\t\t\t\t<th>Last Name</th>\n\t\t\t\t\t\t\t\t<th>Username</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th scope=\"row\">1</th>\n\t\t\t\t\t\t\t\t<td>Mark</td>\n\t\t\t\t\t\t\t\t<td>Otto</td>\n\t\t\t\t\t\t\t\t<td>@mdo</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th scope=\"row\">2</th>\n\t\t\t\t\t\t\t\t<td>Jacob</td>\n\t\t\t\t\t\t\t\t<td>Thornton</td>\n\t\t\t\t\t\t\t\t<td>@fat</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th scope=\"row\">3</th>\n\t\t\t\t\t\t\t\t<td>Larry</td>\n\t\t\t\t\t\t\t\t<td>the Bird</td>\n\t\t\t\t\t\t\t\t<td>@twitter</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<h4>Bordered table</h4>\n\t\t\t<div class=\"card card-block\">\n\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t<table class=\"table table-bordered\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>#</th>\n\t\t\t\t\t\t\t\t<th>First Name</th>\n\t\t\t\t\t\t\t\t<th>Last Name</th>\n\t\t\t\t\t\t\t\t<th>Username</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th scope=\"row\">1</th>\n\t\t\t\t\t\t\t\t<td>Mark</td>\n\t\t\t\t\t\t\t\t<td>Otto</td>\n\t\t\t\t\t\t\t\t<td>@mdo</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th scope=\"row\">2</th>\n\t\t\t\t\t\t\t\t<td>Mark</td>\n\t\t\t\t\t\t\t\t<td>Otto</td>\n\t\t\t\t\t\t\t\t<td>@TwBootstrap</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th scope=\"row\">3</th>\n\t\t\t\t\t\t\t\t<td>Jacob</td>\n\t\t\t\t\t\t\t\t<td>Thornton</td>\n\t\t\t\t\t\t\t\t<td>@fat</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th scope=\"row\">4</th>\n\t\t\t\t\t\t\t\t<td colspan=\"2\">Larry the Bird</td>\n\t\t\t\t\t\t\t\t<td>@twitter</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<h4>Small table</h4>\n\t\t\t<div class=\"card card-block\">\n\t\t\t\t<table class=\"table table-sm\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>#</th>\n\t\t\t\t\t\t\t<th>First Name</th>\n\t\t\t\t\t\t\t<th>Last Name</th>\n\t\t\t\t\t\t\t<th>Username</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th scope=\"row\">1</th>\n\t\t\t\t\t\t\t<td>Mark</td>\n\t\t\t\t\t\t\t<td>Otto</td>\n\t\t\t\t\t\t\t<td>@mdo</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th scope=\"row\">2</th>\n\t\t\t\t\t\t\t<td>Jacob</td>\n\t\t\t\t\t\t\t<td>Thornton</td>\n\t\t\t\t\t\t\t<td>@fat</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th scope=\"row\">3</th>\n\t\t\t\t\t\t\t<td colspan=\"2\">Larry the Bird</td>\n\t\t\t\t\t\t\t<td>@twitter</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xl-6 col-lg-12\">\n\t\t\t<h4>Inverse table</h4>\n\t\t\t<div class=\"card card-block\">\n\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t<table class=\"table table-inverse\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>#</th>\n\t\t\t\t\t\t\t\t<th>First Name</th>\n\t\t\t\t\t\t\t\t<th>Last Name</th>\n\t\t\t\t\t\t\t\t<th>Username</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th scope=\"row\">1</th>\n\t\t\t\t\t\t\t\t<td>Mark</td>\n\t\t\t\t\t\t\t\t<td>Otto</td>\n\t\t\t\t\t\t\t\t<td>@mdo</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th scope=\"row\">2</th>\n\t\t\t\t\t\t\t\t<td>Jacob</td>\n\t\t\t\t\t\t\t\t<td>Thornton</td>\n\t\t\t\t\t\t\t\t<td>@fat</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th scope=\"row\">3</th>\n\t\t\t\t\t\t\t\t<td>Larry</td>\n\t\t\t\t\t\t\t\t<td>the Bird</td>\n\t\t\t\t\t\t\t\t<td>@twitter</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<h4>Striped Rows</h4>\n\t\t\t<div class=\"card card-block\">\n\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t<table class=\"table table-hover table-striped\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Page</th>\n\t\t\t\t\t\t\t\t<th>Visits</th>\n\t\t\t\t\t\t\t\t<th>% New Visits</th>\n\t\t\t\t\t\t\t\t<th>Revenue</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>/index.html</td>\n\t\t\t\t\t\t\t\t<td>1265</td>\n\t\t\t\t\t\t\t\t<td>32.3%</td>\n\t\t\t\t\t\t\t\t<td>$321.33</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>/about.html</td>\n\t\t\t\t\t\t\t\t<td>261</td>\n\t\t\t\t\t\t\t\t<td>33.3%</td>\n\t\t\t\t\t\t\t\t<td>$234.12</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>/sales.html</td>\n\t\t\t\t\t\t\t\t<td>665</td>\n\t\t\t\t\t\t\t\t<td>21.3%</td>\n\t\t\t\t\t\t\t\t<td>$16.34</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>/blog.html</td>\n\t\t\t\t\t\t\t\t<td>9516</td>\n\t\t\t\t\t\t\t\t<td>89.3%</td>\n\t\t\t\t\t\t\t\t<td>$1644.43</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>/404.html</td>\n\t\t\t\t\t\t\t\t<td>23</td>\n\t\t\t\t\t\t\t\t<td>34.3%</td>\n\t\t\t\t\t\t\t\t<td>$23.52</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>/services.html</td>\n\t\t\t\t\t\t\t\t<td>421</td>\n\t\t\t\t\t\t\t\t<td>60.3%</td>\n\t\t\t\t\t\t\t\t<td>$724.32</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>/blog/post.html</td>\n\t\t\t\t\t\t\t\t<td>1233</td>\n\t\t\t\t\t\t\t\t<td>93.2%</td>\n\t\t\t\t\t\t\t\t<td>$126.34</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<h4>Hoverable rows</h4>\n\t\t\t<div class=\"card card-block\">\n\t\t\t\t<table class=\"table table-hover\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>#</th>\n\t\t\t\t\t\t\t<th>First Name</th>\n\t\t\t\t\t\t\t<th>Last Name</th>\n\t\t\t\t\t\t\t<th>Username</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th scope=\"row\">1</th>\n\t\t\t\t\t\t\t<td>Mark</td>\n\t\t\t\t\t\t\t<td>Otto</td>\n\t\t\t\t\t\t\t<td>@mdo</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th scope=\"row\">2</th>\n\t\t\t\t\t\t\t<td>Jacob</td>\n\t\t\t\t\t\t\t<td>Thornton</td>\n\t\t\t\t\t\t\t<td>@fat</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th scope=\"row\">3</th>\n\t\t\t\t\t\t\t<td colspan=\"2\">Larry the Bird</td>\n\t\t\t\t\t\t\t<td>@twitter</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t\t<h4>Contextual classes</h4>\n\t\t\t<div class=\"card card-block\">\n\t\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>#</th>\n\t\t\t\t\t\t\t<th>First Name</th>\n\t\t\t\t\t\t\t<th>Last Name</th>\n\t\t\t\t\t\t\t<th>Username</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr class=\"table-active\">\n\t\t\t\t\t\t\t<th scope=\"row\">1</th>\n\t\t\t\t\t\t\t<td>Mark</td>\n\t\t\t\t\t\t\t<td>Otto</td>\n\t\t\t\t\t\t\t<td>@mdo</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr class=\"table-success\">\n\t\t\t\t\t\t\t<th scope=\"row\">2</th>\n\t\t\t\t\t\t\t<td>Jacob</td>\n\t\t\t\t\t\t\t<td>Thornton</td>\n\t\t\t\t\t\t\t<td>@fat</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr class=\"table-info\">\n\t\t\t\t\t\t\t<th scope=\"row\">3</th>\n\t\t\t\t\t\t\t<td>Larry</td>\n\t\t\t\t\t\t\t<td>the Bird</td>\n\t\t\t\t\t\t\t<td>@twitter</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr class=\"table-warning\">\n\t\t\t\t\t\t\t<th scope=\"row\">3</th>\n\t\t\t\t\t\t\t<td>Larry</td>\n\t\t\t\t\t\t\t<td>the Bird</td>\n\t\t\t\t\t\t\t<td>@twitter</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr class=\"table-danger\">\n\t\t\t\t\t\t\t<th scope=\"row\">3</th>\n\t\t\t\t\t\t\t<td>Larry</td>\n\t\t\t\t\t\t\t<td>the Bird</td>\n\t\t\t\t\t\t\t<td>@twitter</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 598:
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-4 col-lg-offset-4\">\n\t\t\t<img src=\"assets/img/SB-admin.png\" width=\"150px\" class=\"user-avatar\" />\n\t\t\t<h1>SB Admin BS 4 Angular 4</h1>\n\t\t\t<form role=\"form\">\n\t\t\t\t<div class=\"form-content\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"text\" ng-model=\"name\"\n\t\t\t\t\t\t\tclass=\"form-control input-underline input-lg\" id=\"\"\n\t\t\t\t\t\t\tplaceholder=\"Email\">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"password\"\n\t\t\t\t\t\t\tclass=\"form-control input-underline input-lg\" id=\"\"\n\t\t\t\t\t\t\tplaceholder=\"Password\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<a class=\"btn rounded-btn\" routerLink=\"/dashboard/home\"> Log in\n\t\t\t\t</a> &nbsp; <a type=\"submit\" class=\"btn rounded-btn\"\n\t\t\t\t\trouterLink=\"/signup\">Register</a>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 599:
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-default\" id=\"toggle-sidebar\" type=\"button\"\n\t(click)=\"eventCalled()\">&#9776;</button>\n<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive}\">\n\t<ul class=\"list-group\">\n\t\t<a routerLink=\"/dashboard/home\"\n\t\t\t[routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n\t\t\t<i class=\"fa fa-fw fa-dashboard\"></i> Dashboard\n\t\t</a>\n\t\t<a [routerLink]=\"['chart']\"\n\t\t\t[routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n\t\t\t<i class=\"fa fa-fw fa-bar-chart-o\"></i> Charts\n\t\t</a>\n\t\t<a [routerLink]=\"['tables']\"\n\t\t\t[routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n\t\t\t<i class=\"fa fa-fw fa-table\"></i> Tables\n\t\t</a>\n\t\t<a [routerLink]=\"['forms']\"\n\t\t\t[routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n\t\t\t<i class=\"fa fa-fw fa-edit\"></i> Forms\n\t\t</a>\n\t\t<a [routerLink]=\"['element']\"\n\t\t\t[routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n\t\t\t<i class=\"fa fa-fw fa-desktop\"></i> Bootstrap Elements\n\t\t</a>\n\t\t<a [routerLink]=\"['grid']\" [routerLinkActive]=\"['router-link-active']\"\n\t\t\tclass=\"list-group-item\"> <i class=\"fa fa-fw fa-wrench\"></i>\n\t\t\tBootstrap Grid\n\t\t</a>\n\t\t<a [routerLink]=\"['components']\"\n\t\t\t[routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n\t\t\t<i class=\"fa fa-th-list\"></i> &nbsp;Component\n\t\t</a>\n\t\t<div class=\"nested-menu\">\n\t\t\t<a class=\"list-group-item\" (click)=\"addExpandClass('pages')\"> <span><i\n\t\t\t\t\tclass=\"fa fa-plus\"></i> &nbsp; Menu</span>\n\t\t\t</a>\n\t\t\t<li class=\"nested\" [ngClass]=\"{'expand' : showMenu === 'pages' }\">\n\t\t\t\t<ul class=\"submenu\">\n\t\t\t\t\t<li><a href=\"\"><span>Submenu</span></a></li>\n\t\t\t\t\t<li><a href=\"\"><span>Submenu</span></a></li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t</div>\n\t\t<a [routerLink]=\"['blankpage']\"\n\t\t\t[routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n\t\t\t<i class=\"fa fa-file-o\"></i> &nbsp;BlankPage\n\t\t</a>\n\t\t<a class=\"list-group-item more-themes\" href=\"http://www.strapui.com/\">\n\t\t\tMore Themes </a>\n\t</ul>\n</nav>"

/***/ }),

/***/ 600:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-inverse navbar-fixed-top topnav\">\n\t<div class=\"collapse navbar-toggleable-xs clearfix text-center\">\n\t\t<a class=\"navbar-brand\" [routerLink]=\"['/dashboard','/home']\">SB\n\t\t\tAdmin BS 4 Angular 4</a>\n\n\t\t<ul\n\t\t\tclass=\"nav navbar-nav top-nav navbar-right pull-xs-right top-right-nav\">\n\t\t\t<li class=\"nav-item buy-now\"><a\n\t\t\t\thref=\"https://github.com/start-angular/SB-Admin-BS4-Angular-2/archive/master.zip\"\n\t\t\t\tclass=\"btn btn-default-outline buy-now-btn\" role=\"button\"\n\t\t\t\tstyle=\"padding: .375rem 1rem !important; border-color: #999;\">Download\n\t\t\t\t\tNow</a></li>\n\t\t\t<li class=\"dropdown nav-item\" dropdown>\n\t\t\t\t<!-- <div class=\"dropdown\"> --> <a class=\"nav-link dropdown-toggle\"\n\t\t\t\thref=\"javascript:;\" id=\"dropdownMenu4\" dropdownToggle><i\n\t\t\t\t\tclass=\"fa fa-envelope\"></i> <b class=\"caret\"></b><span\n\t\t\t\t\tclass=\"sr-only\">(current)</span></a>\n\t\t\t\t<ul class=\"dropdown-menu message-dropdown\"\n\t\t\t\t\taria-labelledby=\"dropdownMenu4\">\n\t\t\t\t\t<li class=\"message-preview\"><a href=\"javascript:;\"\n\t\t\t\t\t\tclass=\"dropdown-item\">\n\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t<span class=\"media-left\"> <img class=\"media-object\"\n\t\t\t\t\t\t\t\t\tsrc=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\"\n\t\t\t\t\t\t\t\t\talt=\"\">\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t<h5 class=\"media-heading\">\n\t\t\t\t\t\t\t\t\t\t<strong>John Smith</strong>\n\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t<p class=\"small text-muted\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<p class=\"last\">Lorem ipsum dolor sit amet, consectetur...</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</a></li>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<li class=\"message-preview\"><a href=\"javascript:;\"\n\t\t\t\t\t\tclass=\"dropdown-item\">\n\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t<span class=\"media-left\"> <img class=\"media-object\"\n\t\t\t\t\t\t\t\t\tsrc=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\"\n\t\t\t\t\t\t\t\t\talt=\"\">\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t<h5 class=\"media-heading\">\n\t\t\t\t\t\t\t\t\t\t<strong>John Smith</strong>\n\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t<p class=\"small text-muted\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<p class=\"last\">Lorem ipsum dolor sit amet, consectetur...</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</a></li>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<li class=\"message-preview\"><a href=\"javascript:;\"\n\t\t\t\t\t\tclass=\"dropdown-item\">\n\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t<span class=\"media-left\"> <img class=\"media-object\"\n\t\t\t\t\t\t\t\t\tsrc=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\"\n\t\t\t\t\t\t\t\t\talt=\"\">\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t<h5 class=\"media-heading\">\n\t\t\t\t\t\t\t\t\t\t<strong>John Smith</strong>\n\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t<p class=\"small text-muted\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<p class=\"last\">Lorem ipsum dolor sit amet, consectetur...</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</a></li>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<li class=\"dropdown-item message-footer\"><a\n\t\t\t\t\t\thref=\"javascript:;\" class=\"dropdown-item text-center\">Read All\n\t\t\t\t\t\t\tNew Messages</a></li>\n\t\t\t\t</ul> <!-- </div> -->\n\t\t\t</li>\n\t\t\t<li class=\"dropdown nav-item\" dropdown>\n\t\t\t\t<!-- <div class=\"dropdown\"> --> <a href=\"javascript:;\" id=\"name2\"\n\t\t\t\tclass=\"nav-link dropdown-toggle\" dropdownToggle> <i\n\t\t\t\t\tclass=\"fa fa-bell\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\n\t\t\t</a>\n\t\t\t\t<ul class=\"dropdown-menu alert-dropdown\" aria-labelledby=\"name2\">\n\t\t\t\t\t<li><a href=\"javascript:;\" class=\"dropdown-item\">Alert\n\t\t\t\t\t\t\tName <span class=\"label label-default\"> Alert Badge</span>\n\t\t\t\t\t</a></li>\n\t\t\t\t\t<li><a href=\"javascript:;\" class=\"dropdown-item\">Alert\n\t\t\t\t\t\t\tName <span class=\"label label-default\"> Alert Badge</span>\n\t\t\t\t\t</a></li>\n\t\t\t\t\t<li><a href=\"javascript:;\" class=\"dropdown-item\">Alert\n\t\t\t\t\t\t\tName <span class=\"label label-default\"> Alert Badge</span>\n\t\t\t\t\t</a></li>\n\t\t\t\t\t<li class=\"dropdown-divider\"></li>\n\t\t\t\t\t<li><a href=\"javascript:;\" class=\"dropdown-item\">View All</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul> <!-- </div> -->\n\t\t\t</li>\n\t\t\t<li class=\"dropdown nav-item\" dropdown><a href=\"javascript:;\"\n\t\t\t\tid=\"single-button\" class=\"nav-link dropdown-toggle\" dropdownToggle>\n\t\t\t\t\t<i class=\"fa fa-user\"></i> John Smith <b class=\"caret\"></b>\n\t\t\t</a>\n\t\t\t\t<ul class=\"dropdown-menu\" aria-labelledby=\"single-button\">\n\t\t\t\t\t<li><a class=\"dropdown-item\" href=\"javascript:;\"><i\n\t\t\t\t\t\t\tclass=\"fa fa-fw fa-user\"></i> Profile</a></li>\n\t\t\t\t\t<li><a class=\"dropdown-item\" href=\"javascript:;\"><i\n\t\t\t\t\t\t\tclass=\"fa fa-fw fa-envelope\"></i> Inbox</a></li>\n\t\t\t\t\t<li><a class=\"dropdown-item\" href=\"javascript:;\"><i\n\t\t\t\t\t\t\tclass=\"fa fa-fw fa-gear\"></i> Settings</a></li>\n\t\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t\t<li><a class=\"dropdown-item\" href=\"javascript:;\"\n\t\t\t\t\t\t[routerLink]=\"['/']\"> <i class=\"fa fa-fw fa-power-off\"></i>\n\t\t\t\t\t\t\tLog Out\n\t\t\t\t\t</a></li>\n\t\t\t\t</ul></li>\n\t\t</ul>\n\t</div>\n</nav>"

/***/ }),

/***/ 601:
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-4 col-lg-offset-4\">\n\t\t\t<img src=\"assets/img/SB-admin.png\" width=\"150px;\" class=\"user-avatar\" />\n\t\t\t<h1>SB Admin BS 4 Angular2</h1>\n\t\t\t<form role=\"form\">\n\t\t\t\t<div class=\"form-content\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control input-underline input-lg\"\n\t\t\t\t\t\t\tid=\"\" placeholder=\"Full Name\">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control input-underline input-lg\"\n\t\t\t\t\t\t\tid=\"\" placeholder=\"Email\">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"password\"\n\t\t\t\t\t\t\tclass=\"form-control input-underline input-lg\" id=\"\"\n\t\t\t\t\t\t\tplaceholder=\"Password\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"password\"\n\t\t\t\t\t\t\tclass=\"form-control input-underline input-lg\" id=\"\"\n\t\t\t\t\t\t\tplaceholder=\"Repeat Password\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<a type=\"submit\" class=\"btn rounded-btn\"\n\t\t\t\t\trouterLink=\"/dashboard/home\"> Register </a>&nbsp; <a type=\"submit\"\n\t\t\t\t\tclass=\"btn rounded-btn\" routerLink=\"/\"> Log in </a>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(358);


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TimelineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ChatComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NotificationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
*  This class represents the lazy loaded HomeComponent.
*/
var TimelineComponent = (function () {
    function TimelineComponent() {
    }
    return TimelineComponent;
}());
TimelineComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-timeline-cmp',
        template: __webpack_require__(596),
        styles: [__webpack_require__(553)],
    })
], TimelineComponent);

var ChatComponent = (function () {
    function ChatComponent() {
    }
    return ChatComponent;
}());
ChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-chat-cmp',
        template: __webpack_require__(593)
    })
], ChatComponent);

var NotificationComponent = (function () {
    function NotificationComponent() {
    }
    return NotificationComponent;
}());
NotificationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-notifications-cmp',
        template: __webpack_require__(595)
    })
], NotificationComponent);

var HomeComponent = (function () {
    /* END*/
    function HomeComponent() {
        /* Carousel Variable */
        this.myInterval = 5000;
        this.index = 0;
        this.slides = [];
        this.imgUrl = [
            "assets/img/slider1.jpg",
            "assets/img/slider2.jpg",
            "assets/img/slider3.jpg",
            "assets/img/slider0.jpg"
        ];
        /* END */
        /* Alert component */
        this.alerts = [
            {
                type: 'danger',
                msg: 'Oh snap! Change a few things up and try submitting again.'
            },
            {
                type: 'success',
                msg: 'Well done! You successfully read this important alert message.',
                closable: true
            }
        ];
        for (var i = 0; i < 4; i++) {
            this.addSlide();
        }
    }
    HomeComponent.prototype.closeAlert = function (i) {
        this.alerts.splice(i, 1);
    };
    /* Carousel */
    HomeComponent.prototype.addSlide = function () {
        var i = this.slides.length;
        this.slides.push({
            image: this.imgUrl[i],
            text: ['Dummy ', 'Dummy ', 'Dummy ', 'Dummy '][this.slides.length % 4] + "\n            " + ['text 0', 'text 1', 'text 2', 'text 3'][this.slides.length % 4]
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-home-cmp',
        template: __webpack_require__(594)
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ })

},[646]);
//# sourceMappingURL=main.bundle.js.map
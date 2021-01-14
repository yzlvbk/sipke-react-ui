'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var prefix = "spike";
function classes(componentName) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var className = new Array();
    args.forEach(function (arg) {
        if (typeof arg === "string") {
            className.push(prefix + "-" + componentName.toLowerCase() + (arg && "-" + arg));
        }
        else if (arg instanceof Array) {
            arg.forEach(function (str) { return typeof str === "string" && className.push(str); });
        }
        else if (typeof arg === "object" && !(arg instanceof Array)) {
            for (var key in arg) {
                if (arg.hasOwnProperty(key) && arg[key]) {
                    className.push(key);
                }
            }
        }
    });
    return className.filter(function (v) { return v; }).join(" ");
}

var componentName = 'Wave';
var Wave = /** @class */ (function (_super) {
    __extends(Wave, _super);
    function Wave() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animating = false;
        _this.animatingClassName = "spike-react-wave-animation-animating";
        _this.animationStart = function () {
            if (_this.animating || _this.props.closeWave)
                return;
            _this.animating = true;
            _this.originClassName = _this.node.className;
            _this.node.className = classes('', [_this.originClassName, _this.animatingClassName]);
            _this.node.addEventListener('animationend', _this.animationEnd);
        };
        _this.animationEnd = function () {
            _this.animating = false;
            _this.node.className = classes('', [_this.originClassName]);
            _this.node.addEventListener('animationend', _this.animationEnd);
        };
        return _this;
    }
    Wave.prototype.componentDidMount = function () {
        this.node = ReactDOM__default['default'].findDOMNode(this);
        this.node.addEventListener("click", this.animationStart);
    };
    Wave.prototype.render = function () {
        var children = this.props.children;
        return typeof children === 'string' ? (React.createElement("span", { className: "sipke-wave-string-wrapper" }, children)) : (children);
    };
    Wave.displayName = componentName;
    Wave.defaultProps = {
        closeWave: false
    };
    return Wave;
}(React.Component));

/* eslint-disable no-sequences */

/* eslint-disable eqeqeq */
// eslint-disable-next-line no-use-before-define
// eslint-disable-next-line no-unused-expressions
// eslint-disable-next-line no-sequences
// eslint-disable-next-line no-use-before-define
// eslint-disable-next-line no-unused-expressions
// eslint-disable-next-line no-use-before-define
// eslint-disable-next-line no-unused-expressions
!function (s) {
  var l,
      i = '<svg><symbol id="icon-github" viewBox="0 0 1024 1024"><path d="M512 43.8464c-265.0752 0-480 214.8864-480 480 0 212.0832 137.5296 392.0064 328.2432 455.4624 23.9808 4.4352 32.8128-10.4064 32.8128-23.0976 0-11.4432-0.4416-49.2672-0.6528-89.3568-133.536 29.0304-161.7216-56.64-161.7216-56.64-21.8304-55.4688-53.2992-70.2336-53.2992-70.2336-43.5456-29.7984 3.2832-29.184 3.2832-29.184 48.192 3.3792 73.5744 49.4592 73.5744 49.4592 42.816 73.3824 112.2816 52.1664 139.6992 39.8976 4.3008-31.0272 16.7424-52.2048 30.4704-64.1856-106.6176-12.1344-218.688-53.2992-218.688-237.216 0-52.3968 18.7584-95.232 49.4592-128.832-4.992-12.096-21.4272-60.9024 4.6464-127.0272 0 0 40.32-12.8832 132.0384 49.2096 38.2848-10.6368 79.3536-15.9744 120.1536-16.1664 40.7808 0.192 81.8688 5.5104 120.2304 16.1664 91.6224-62.112 131.8656-49.2096 131.8656-49.2096 26.1312 66.1248 9.696 114.9312 4.7232 127.0272 30.7776 33.6192 49.4016 76.4352 49.4016 128.832 0 184.3584-112.3008 224.9472-219.1872 236.832 17.2224 14.8992 32.5632 44.1024 32.5632 88.8768 0 64.224-0.5568 115.9104-0.5568 131.7312 0 12.768 8.64 27.744 32.9664 23.04 190.6176-63.5328 327.9744-243.3984 327.9744-455.4048 0-265.1136-214.9056-480-480-480z"  ></path></symbol><symbol id="icon-user" viewBox="0 0 1024 1024"><path d="M772.016477 696.022177c-39.228443-39.229466-85.763292-68.49807-136.530536-86.546122 26.774807-13.283538 51.500954-30.976502 73.254398-52.729945 52.55189-52.550867 81.494059-122.422214 81.494059-196.74085s-28.941146-144.189983-81.494059-196.741873c-52.550867-52.550867-122.422214-81.493036-196.74085-81.493036s-144.189983 28.942169-196.741873 81.493036c-52.55189 52.550867-81.494059 122.422214-81.494059 196.741873s28.941146 144.189983 81.494059 196.74085c21.753443 21.753443 46.480614 39.446407 73.256444 52.729945-50.76929 18.049075-97.303116 47.316655-136.532583 86.546122-66.188468 66.187445-104.009865 153.166425-107.422591 246.208495l48.730864 0c3.387144-80.028685 36.140105-154.783249 93.129051-211.770148 55.771211-55.771211 128.557958-88.326675 206.650547-92.867084 6.27389 0.418532 12.582573 0.645706 18.929118 0.645706 6.345522 0 12.656251-0.227174 18.929118-0.645706 78.091566 4.54041 150.880359 37.095873 206.650547 92.867084 56.987922 56.986899 89.741907 131.741463 93.129051 211.770148l48.730864 0C876.027365 849.188602 838.204945 762.209622 772.016477 696.022177zM282.466792 360.004237c0-126.564557 102.96814-229.53372 229.53372-229.53372 126.564557 0 229.53372 102.969163 229.53372 229.53372 0 120.304993-93.040023 219.280192-210.942293 228.77545-6.170536-0.304945-12.369725-0.460488-18.591427-0.460488-6.222725 0-12.420891 0.155543-18.59245 0.460488C375.505791 579.284429 282.466792 480.30923 282.466792 360.004237z"  ></path></symbol><symbol id="icon-dot" viewBox="0 0 1024 1024"><path d="M211.25894928 445.16799951c-36.90675879 0-66.83115757 29.91343744-66.83115756 66.83200049 0 36.89664038 29.92355585 66.83115757 66.83115756 66.83115757 36.90760171 0 66.83200049-29.93451718 66.83200049-66.83115757C278.09094976 475.08143696 248.16739392 445.16799951 211.25894928 445.16799951zM511.99957813 445.16799951c-36.90675879 0-66.83115757 29.91343744-66.83115757 66.83200049 0 36.89664038 29.92355585 66.83115757 66.83115756 66.83115757 36.90760171 0 66.83200049-29.93451718 66.8320005-66.83115757C578.83157862 475.08143696 548.90717983 445.16799951 511.99957813 445.16799951zM812.74020779 445.16799951c-36.90675879 0-66.83115757 29.91343744-66.83115755 66.83200049 0 36.89664038 29.92355585 66.83115757 66.83115755 66.83115757s66.83115757-29.93451718 66.83115757-66.83115757C879.57052161 475.08143696 849.64696576 445.16799951 812.74020779 445.16799951z"  ></path></symbol><symbol id="icon-triangle-reverse" viewBox="0 0 1024 1024"><path d="M71.68 308.8l416 485.376c12.16 14.176 36.448 14.176 48.608 0l416-485.376c8.128-9.472 9.984-22.848 4.768-34.176C951.84 263.296 940.512 256.00000001 928 256l-832 0c-12.51200001 0-23.84 7.296-29.056 18.624S63.552 299.328 71.68 308.8z"  ></path></symbol><symbol id="icon-arrow" viewBox="0 0 1024 1024"><path d="M185.19249219 969.84134094C174.61478562 969.84134094 164.23336719 964.73787031 157.9303625 955.27245875 147.91970844 940.24557313 151.97631312 919.94073875 167.00319875 909.90827469 167.00319875 909.90827469 780.46654719 500.93270937 780.46654719 500.93270937 780.46654719 500.93270937 167.00319875 91.95714406 167.00319875 91.95714406 151.97631312 81.92468 147.91970844 61.64165562 157.9303625 46.59296 167.94101656 31.56607438 188.22404094 27.44403969 203.29454656 37.52012281 203.29454656 37.52012281 857.58566 473.71419875 857.58566 473.71419875 866.70211625 479.79910625 872.15454219 489.98423844 872.15454219 500.93270937 872.15454219 511.88118031 866.70211625 522.0881225 857.58566 528.15122 857.58566 528.15122 203.29454656 964.34529594 203.29454656 964.34529594 197.7112625 968.07475531 191.40825781 969.84134094 185.19249219 969.84134094Z"  ></path></symbol><symbol id="icon-right" viewBox="0 0 1024 1024"><path d="M281.37302562 962.25308469C295.99990063 976.87994844 319.64141469 976.95328438 334.16676594 962.42792281L731.73616625 564.85854781C760.918085 535.67662156 760.9342175 488.37951031 731.73616625 459.18144031L334.16676594 61.61206625C319.63646375 47.08176031 296.10187437 47.05805187 281.37302562 61.78690344 266.74615156 76.41376719 266.66446344 100.04692906 281.39610875 114.77858938L652.1301275 485.51259687C666.76975156 500.15223219 666.86177281 523.79573094 652.1301275 538.52735469L281.39610875 909.26139875C266.75648469 923.90099656 266.64417406 947.52423313 281.37302562 962.25308469Z"  ></path></symbol><symbol id="icon-info" viewBox="0 0 1024 1024"><path d="M512 68.26666667c-245.07733333 0-443.73333333 198.656-443.73333333 443.73333333s198.656 443.73333333 443.73333333 443.73333333 443.73333333-198.656 443.73333333-443.73333333-198.656-443.73333333-443.73333333-443.73333333zM581.59786667 675.25973333c-33.4848 50.2784-67.54986667 89.01973333-124.85973334 89.01973334-39.1168-6.38293333-55.1936-34.4064-46.72853333-62.976l73.728-244.18986667c1.80906667-5.97333333-1.19466667-12.35626667-6.656-14.30186667-5.4272-1.91146667-16.0768 5.15413333-25.2928 15.2576l-44.57813333 53.62346667c-1.19466667-9.0112-0.13653333-23.89333333-0.13653334-29.9008 33.4848-50.2784 88.50773333-89.94133333 125.81546667-89.94133333 35.46453333 3.61813333 52.25813333 31.98293333 46.08 63.14666666l-74.24 245.38453334c-0.98986667 5.5296 1.9456 11.1616 6.9632 12.93653333 5.46133333 1.91146667 16.93013333-5.15413333 26.18026667-15.2576l44.544-53.58933333c1.19466667 9.0112-0.8192 24.7808-0.8192 30.78826666zM571.66506667 356.31786667c-28.19413333 0-51.06346667-20.54826667-51.06346667-50.7904s22.86933333-50.75626667 51.06346667-50.75626667 51.06346667 20.54826667 51.06346666 50.75626667c0 30.27626667-22.86933333 50.7904-51.06346666 50.7904z"  ></path></symbol><symbol id="icon-setting" viewBox="0 0 1024 1024"><path d="M855.872 543.632c1.008-10.464 1.632-20.976 1.632-31.632s-0.624-21.168-1.632-31.632l80.208-63.408c17.376-14.208 21.84-38.688 10.704-58.032l-85.536-149.664c-10.848-19.008-34.08-28.128-56.064-19.68l-93.984 38.208c-17.232-12.384-35.28-22.992-53.856-31.68l-14.256-101.568c-3.36-21.984-22.656-38.544-44.832-38.544l-171.12 0c-22.464 0-41.328 16.176-44.88 38.88l-14.208 101.232c-18.624 8.736-36.672 19.344-53.904 31.68l-94.224-38.352c-20.304-7.872-44.88 0.816-55.728 19.824l-85.536 149.616c-11.136 19.488-6.672 43.968 10.992 58.32l79.872 63.168c-1.008 10.416-1.632 20.976-1.632 31.632s0.624 21.216 1.632 31.632l-80.304 63.408c-17.232 14.256-21.696 38.688-10.56 57.984l85.584 149.76c10.896 18.96 34.656 28.08 56.016 19.584l93.984-38.208c17.28 12.384 35.328 22.992 53.856 31.632l14.256 101.712c3.504 22.32 22.368 38.496 44.784 38.496l171.072 0c22.176 0 41.424-16.56 44.928-38.88l14.208-101.28c18.576-8.736 36.624-19.296 53.856-31.68l94.224 38.4c5.28 2.064 10.8 3.072 16.464 3.072 16.128 0 31.2-8.736 39.36-22.896l85.392-149.568c11.184-19.296 6.864-43.776-10.944-58.512l-79.824-63.024zM823.232 789.968l-106.512-43.344c-7.968-3.312-16.992-2.016-23.76 3.264-21.024 16.32-43.488 29.52-66.816 39.216-7.824 3.264-13.344 10.464-14.544 18.864l-15.696 112.08-166.128 2.448-16.032-114.528c-1.152-8.4-6.72-15.552-14.544-18.864-23.136-9.6-45.648-22.848-66.816-39.216-4.272-3.264-9.456-4.992-14.688-4.992-3.024 0-6.096 0.576-9.024 1.776l-102.768 44.304-86.448-146.592 90.336-71.328c6.624-5.232 9.984-13.584 8.928-21.936-1.728-12.864-2.832-25.872-2.832-39.12s1.104-26.256 2.784-39.024c1.104-8.4-2.256-16.704-8.928-21.936l-89.424-68.304 81.84-148.704 106.416 43.296c7.968 3.264 16.992 2.016 23.76-3.216 21.072-16.32 43.632-29.568 66.96-39.36 7.824-3.264 13.296-10.416 14.496-18.816l13.344-111.936 168.48-2.448 16.032 114.48c1.152 8.4 6.72 15.552 14.544 18.816 23.232 9.696 45.744 22.896 66.864 39.264 6.816 5.232 15.84 6.48 23.76 3.264l102.768-44.256 86.496 146.496-90.384 71.424c-6.624 5.232-10.032 13.536-8.976 21.888 1.632 12.864 2.832 25.872 2.832 39.12s-1.152 26.256-2.832 39.12c-1.056 8.352 2.352 16.656 8.976 21.888l89.376 68.208-81.84 148.704zM512.768 331.04c-98.976 0-179.472 81.168-179.472 180.96 0 99.744 80.496 180.96 179.472 180.96 98.976 0 179.424-81.168 179.424-180.96 0-99.792-80.496-180.96-179.424-180.96zM512.768 644.96c-72.48 0-131.472-59.616-131.472-132.96s58.992-132.96 131.472-132.96c72.48 0 131.424 59.664 131.424 132.96s-58.992 132.96-131.424 132.96z"  ></path></symbol><symbol id="icon-close" viewBox="0 0 1024 1024"><path d="M842.947458 778.116917 576.847937 512.013303 842.946434 245.883083c8.67559-8.674567 13.447267-20.208251 13.43908-32.477692-0.008186-12.232602-4.7727-23.715121-13.414521-32.332383-8.655124-8.677637-20.149922-13.450337-32.384571-13.4575-12.286838 0-23.808242 4.771677-32.474622 13.434987L512.019443 447.143876 245.88206 181.050496c-8.66331-8.66331-20.175505-13.434987-32.416294-13.434987-12.239765 0-23.75196 4.770653-32.414247 13.43294-8.66024 8.636704-13.428847 20.12434-13.437034 32.356942-0.008186 12.269441 4.76349 23.803125 13.437034 32.476669l266.135336 266.13022L181.050496 778.11794c-8.664334 8.66331-13.43601 20.173458-13.43601 32.41527 0 12.239765 4.7727 23.752983 13.437034 32.417317 8.662287 8.66331 20.173458 13.43294 32.413224 13.43294 12.240789 0 23.754007-4.770653 32.416294-13.43294l266.134313-266.100544 266.101567 266.100544c8.66331 8.66331 20.185738 13.43294 32.4429 13.43294 12.265348-0.008186 23.74889-4.771677 32.369222-13.412474C860.81643 825.081555 860.821547 795.991006 842.947458 778.116917z"  ></path></symbol><symbol id="icon-lock" viewBox="0 0 1024 1024"><path d="M786.28571469 991.97714281L237.71428531 991.97714281C187.2228575 991.97714281 146.28571437 973.92000031 146.28571437 923.40571438L146.28571437 534.83428531C146.28571437 484.3428575 187.2228575 443.40571438 237.71428531 443.40571438L237.71428531 443.40571438 237.71428531 306.2628575 237.71428531 306.2628575C237.71428531 154.78857125 360.5028575 31.97714281 512 31.97714281 663.47428531 31.97714281 786.28571469 154.78857125 786.28571469 306.2628575L786.28571469 443.40571438C836.7771425 443.40571438 877.71428563 484.3428575 877.71428563 534.83428531L877.71428563 923.40571438C877.71428563 973.92000031 836.7771425 991.97714281 786.28571469 991.97714281ZM740.57142875 306.2628575L740.57142875 306.2628575C740.57142875 306.2628575 740.57142875 306.2628575 740.57142875 306.2628575 740.57142875 180.0228575 638.21714281 77.69142875 512 77.69142875 385.76 77.69142875 283.40571406 180.0228575 283.40571406 306.2628575 283.40571406 306.2628575 283.40571406 306.2628575 283.40571406 306.2628575L283.42857125 306.2628575 283.42857125 443.40571438 740.57142875 443.40571438 740.57142875 306.2628575ZM831.99999969 534.83428531C831.99999969 509.6 811.52 489.12000031 786.28571469 489.12000031L237.71428531 489.12000031C212.45714281 489.12000031 192.00000031 509.6 192.00000031 534.83428531L192.00000031 923.40571438C192.00000031 948.66285687 212.45714281 946.26285688 237.71428531 946.26285688L786.28571469 946.26285688C811.52 946.26285688 831.99999969 948.66285687 831.99999969 923.40571438L831.99999969 534.83428531ZM534.8571425 783.03999969L534.8571425 854.85714312C534.8571425 867.47428531 524.61714313 877.71428563 512 877.71428563 499.38285687 877.71428563 489.1428575 867.47428531 489.1428575 854.85714312L489.1428575 783.03999969C449.7828575 772.84571469 420.57142812 737.39428531 420.57142812 694.83428563 420.57142812 644.34285687 461.50857125 603.40571469 512 603.40571469 562.49142875 603.40571469 603.42857188 644.34285687 603.42857188 694.83428563 603.42857188 737.39428531 574.2171425 772.84571469 534.8571425 783.03999969ZM512 649.11999969C486.7428575 649.11999969 466.28571406 669.60000031 466.28571406 694.83428563 466.28571406 720.09142812 486.7428575 740.57142875 512 740.57142875 537.23428531 740.57142875 557.71428594 720.09142812 557.71428594 694.83428563 557.71428594 669.60000031 537.23428531 649.11999969 512 649.11999969Z"  ></path></symbol><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M880 835.2L608 560c35.2-44.8 57.6-102.4 57.6-163.2 0-147.2-118.4-265.6-265.6-265.6-147.2 0-265.6 118.4-265.6 265.6 0 147.2 118.4 265.6 265.6 265.6 60.8 0 118.4-22.4 163.2-57.6l275.2 275.2 41.6-44.8z m-480-236.8c-112 0-201.6-89.6-201.6-201.6S288 198.4 400 198.4s201.6 89.6 201.6 201.6-92.8 198.4-201.6 198.4z"  ></path></symbol><symbol id="icon-success" viewBox="0 0 1024 1024"><path d="M511.97011719 62.92988281c-248.00976563 0-449.1 200.96982422-449.1 449.07011719 0 248.03964844 201.09023437 449.07011719 449.1 449.07011719 248.13017578 0 449.15976562-201.02958984 449.15976562-449.07011719 0-248.10029297-201.02958984-449.07011719-449.15976562-449.07011719zM767.27041016 372.82958984l-323.7600586 331.38017579c-6.98994141 7.52958984-16.67988281 10.98017578-26.46035156 10.74023437-9.77958984 0.23994141-19.37988281-3.20976563-26.46035156-10.74023438l-133.91982422-141.5399414c-13.79970703-14.58017578-12.41982422-38.27988281 3.02958984-52.86005859 15.48017578-14.58017578 39.17988281-14.61005859 52.94970703-0.08964844l104.90976563 110.91005859 293.79023437-300.78017578c13.79970703-14.55029297 37.50029297-14.45976562 52.91982422 0.08964844 15.48017578 14.63994141 16.80029297 38.33964844 2.99970703 52.8899414z"  ></path></symbol><symbol id="icon-time" viewBox="0 0 1024 1024"><path d="M770.32333333 257.969C702.60133333 190.289 612.59433333 153 516.80533333 153c-95.754 0-185.768 37.289-253.46 104.976C195.62633333 325.686 158.33333333 415.717 158.33333333 511.486c-0.017 95.78 37.249 185.795 104.955 253.543 67.685 67.65 157.707 104.939 253.454 104.939 95.789 0 185.842-37.315 253.582-105.012C910.06633333 625.204 910.08733333 397.782 770.32333333 257.969L770.32333333 257.969zM737.28533333 731.919c-58.907 58.895-137.23 91.365-220.544 91.365-83.258 0-161.559-32.453-220.425-91.295-58.867-58.88-91.28-137.187-91.268-220.501 0-83.302 32.429-161.62 91.317-220.482 58.88-58.863 137.156-91.281 220.439-91.281 83.293 0 161.586 32.414 220.48 91.287C858.82733333 412.582 858.82733333 610.387 737.28533333 731.919L737.28533333 731.919zM671.71933333 599.342l-123.915-71.667L547.80433333 332.244c0-16.491-13.384-29.876-29.878-29.876-16.486 0-29.87 13.383-29.87 29.876l0 209.117c0 11.082 13.771 20.372 22.732 25.513 2.48 3.732 9.292 7.105 13.443 9.499l123.231 74.685c14.277 8.241 29.753 3.346 37.999-10.935C693.70833333 625.841 686.03133333 607.59 671.71933333 599.342L671.71933333 599.342z"  ></path></symbol><symbol id="icon-snow" viewBox="0 0 1024 1024"><path d="M931.72762719 717.03549688l-129.91340907-75.00690001 119.12408813-37.22507718a32.75192438 32.75192438 0 1 0-19.54364531-62.547345l-176.73752625 55.21367812-147.13408688-84.95150437 144.21597844-83.26207407 179.65563469 56.13518625a32.67513281 32.67513281 0 0 0 41.02629656-21.50184937 32.7711225 32.7711225 0 0 0-21.50184938-41.04549563l-122.06139375-38.12738718 131.71802813-76.04359594a32.7711225 32.7711225 0 0 0-32.75192531-56.74952531l-129.91340813 75.0069 27.31886813-121.77342282a32.7711225 32.7711225 0 0 0-63.92960719-14.36016375l-40.54634531 180.65393438-146.88451125 84.79792031V290.43495687l138.18778125-127.30246968a32.75192438 32.75192438 0 1 0-44.38596188-48.18718125L543.88801156 201.35586406V64.78072156a32.75192438 32.75192438 0 0 0-65.54224593 0v134.94330563l-92.03559657-84.77872125a32.75192438 32.75192438 0 1 0-44.38596187 48.18718125l136.44075656 125.67063281v166.46655281l-144.48475219-83.41565812-40.54634531-180.65393438A32.73272719 32.73272719 0 0 0 254.18898125 166.41535812a32.73272719 32.73272719 0 0 0-24.78472125 39.14488594l27.31886812 121.77342281-130.56614343-75.37166343a32.73272719 32.73272719 0 1 0-32.75192532 56.71112906l132.37076344 76.4275575-122.06139469 38.12738719a32.75192438 32.75192438 0 1 0 19.54364625 62.547345l179.65563469-56.13518625 143.56324313 82.8781125-146.48135157 84.56754281-176.73752625-55.21367813a32.75192438 32.75192438 0 1 0-19.54364625 62.547345l119.12408813 37.22507719-130.56614344 75.39086156a32.7711225 32.7711225 0 1 0 32.7711225 56.74952438l132.37076344-76.42755656-28.00999875 124.76832281a32.7711225 32.7711225 0 0 0 63.91040812 14.36016375l41.21827875-183.66803344 143.81281875-83.03169656v169.82621719l-136.44075656 125.67063281a32.75192438 32.75192438 0 1 0 44.40516 48.18718219l92.03559656-84.77872219v130.48935094a32.75192438 32.75192438 0 0 0 65.52304782 0v-132.12118782l93.80181937 86.41055907a32.75192438 32.75192438 0 1 0 44.38596188-48.18718219l-138.18778125-127.30246969v-169.21187812l146.21257875 84.41395875 41.21827781 183.64883437a32.7711225 32.7711225 0 1 0 63.92960719-14.36016375l-27.99080063-124.76832281 131.71802813 76.043595a32.71352906 32.71352906 0 0 0 44.75072437-11.9988 32.71352906 32.71352906 0 0 0-11.97960187-44.71232813z m0-1e-8"  ></path></symbol><symbol id="icon-question" viewBox="0 0 1024 1024"><path d="M512 64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64z m32 704h-64v-64h64v64z m11.2-203.2l-5.6 4.8c-3.2 2.4-5.6 8-5.6 12.8v58.4h-64v-58.4c0-24.8 11.2-48 29.6-63.2l5.6-4.8c56-44.8 83.2-68 83.2-108 0-48-38.4-86.4-86.4-86.4-49.6 0-86.4 36.8-86.4 86.4h-64c0-84 66.4-150.4 150.4-150.4 83.2 0 150.4 67.2 150.4 150.4 0 72.8-49.6 112.8-107.2 158.4z"  ></path></symbol><symbol id="icon-double" viewBox="0 0 1024 1024"><path d="M550.52 483.38L145.16 75.5c-16.38-16.38-42.48-16.38-57.96 0-16.2 16.38-16.2 42.48 0 57.96l373.5 376.02L74.24 890.18c-16.38 16.38-16.38 42.48 0 57.96 16.38 16.38 42.48 16.38 58.68 0L539 547.64c17.28-14.58 33.48-40.68 11.52-64.26z m0 0"  ></path><path d="M950.12 483.38L544.76 75.5c-16.38-16.38-42.48-16.38-57.96 0-16.38 16.38-16.38 42.48 0 57.96l373.5 376.02-386.46 380.7c-16.38 16.38-16.38 42.48 0 57.96 16.38 16.38 42.48 16.38 58.68 0L938.6 547.64c17.28-14.58 33.48-40.68 11.52-64.26z m0 0"  ></path></symbol><symbol id="icon-calendar" viewBox="0 0 1024 1024"><path d="M832 213.333333h-64V128a21.333333 21.333333 0 0 0-42.666667 0v85.333333H298.666667V138.666667a21.333333 21.333333 0 0 0-42.666667 0V213.333333H192a64 64 0 0 0-64 64v576a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V277.333333a64 64 0 0 0-64-64zM192 256h64v96a21.333333 21.333333 0 0 0 42.666667 0V256h426.666666v85.333333a21.333333 21.333333 0 0 0 42.666667 0v-85.333333h64a21.333333 21.333333 0 0 1 21.333333 21.333333v149.333334H170.666667v-149.333334a21.333333 21.333333 0 0 1 21.333333-21.333333z m640 618.666667H192a21.333333 21.333333 0 0 1-21.333333-21.333334V469.333333h682.666666v384a21.333333 21.333333 0 0 1-21.333333 21.333334z"  ></path></symbol><symbol id="icon-error" viewBox="0 0 1024 1024"><path d="M515 67.8c-243 0-440 197-440 440s197 440 440 440 440-197 440-440-197-440-440-440z m198 580.8c17.2 17.2 17.2 45 0 62.2-17.2 17.2-45 17.2-62.2 0L515 575 379.3 710.8c-17.2 17.2-45 17.2-62.2 0-17.2-17.2-17.2-45 0-62.2l135.8-135.8L317 377c-17.2-17.2-17.2-45 0-62.2 17.2-17.2 45-17.2 62.2 0L515 450.6l135.8-135.8c17.2-17.2 45-17.2 62.2 0 17.2 17.2 17.2 45 0 62.2L577.3 512.8 713 648.6z"  ></path></symbol><symbol id="icon-check" viewBox="0 0 1024 1024"><path d="M328 821.03333333c-1.8 0-3.5-0.1-5.3-0.4-12.4-1.7-23.2-9-29.4-19.8L134 522.13333333c-11-19.2-4.3-43.6 14.9-54.6s43.6-4.3 54.6 14.9l133.2 233.2 491-492.5c15.6-15.6 40.9-15.7 56.6-0.1 15.6 15.6 15.7 40.9 0.1 56.6L358.2 807.43333333l-1.9 1.9c-7.6 7.6-17.8 11.7-28.3 11.7z"  ></path></symbol><symbol id="icon-codepen" viewBox="0 0 1024 1024"><path d="M973.784375 331.445l-438.75-292.5c-14.975625-9.215625-30.958125-9.3-46.070625 0l-438.75 292.5C38.96375 338.943125 32 352.338125 32 365.729375v292.498125c0 13.393125 6.96375 26.78625 18.215625 34.28625l438.75 292.54125c14.975625 9.215625 30.958125 9.3 46.070625 0l438.75-292.54125c11.25-7.498125 18.215625-20.893125 18.215625-34.28625V365.729375c-0.001875-13.39125-6.965625-26.78625-18.2175-34.284375zM553.25 150.370625l323.03625 215.35875-144.106875 96.429375L553.25 342.693125V150.370625z m-82.5 0v192.3225l-178.929375 119.465625-144.106875-96.429375L470.75 150.370625zM114.5 442.8725l103.393125 69.106875L114.5 581.08625v-138.21375z m356.25 430.715625L147.71375 658.229375l144.106875-96.429375L470.75 681.265625v192.3225z m41.25-264.10875l-145.715625-97.5 145.715625-97.5 145.715625 97.5-145.715625 97.5z m41.25 264.10875V681.265625l178.929375-119.465625 144.106875 96.429375L553.25 873.588125z m356.25-292.501875l-103.393125-69.106875L909.5 442.8725v138.21375z"  ></path></symbol><symbol id="icon-warning" viewBox="0 0 1024 1024"><path d="M512 70.62068937c-243.86206875 0-441.37931063 197.51724094-441.37931063 441.37931063s197.51724094 441.37931063 441.37931063 441.37931063 441.37931063-197.51724094 441.37931063-441.37931063-197.51724094-441.37931063-441.37931063-441.37931063z m0 155.03448282c33.10344844 0 60.13793063 27.03448313 60.13793063 60.13793156 0 0-30.3448275 279.17241375-30.3448275 280.82758594-2.20689656 28.68965531-14.89655156 50.20689656-29.79310313 50.20689656s-27.58620656-21.51724125-29.79310312-50.20689656c0-2.20689656-30.3448275-280.82758594-30.3448275-280.82758594 0-33.10344844 27.03448313-60.13793063 60.13793062-60.13793156z m0 572.68965562c-33.65517281 0-60.689655-27.03448313-60.689655-60.689655s27.03448313-60.689655 60.689655-60.68965594 60.689655 27.03448313 60.689655 60.68965594-27.03448313 60.689655-60.689655 60.689655z"  ></path></symbol><symbol id="icon-full" viewBox="0 0 1024 1024"><path d="M992.65625 404l-331.5-48.1875L512.9375 55.25v757.125l296.53125 156-56.71875-330.375z" fill="#fadb14" ></path><path d="M512.9375 812.375V55.25L364.4375 355.8125 32.75 404l239.90625 234-56.53125 330.375z" fill="#fadb14" ></path></symbol><symbol id="icon-spin" viewBox="0 0 1024 1024"><path d="M224 224m-192 0a192 192 0 1 0 384 0 192 192 0 1 0-384 0Z" fill="#e6f7ff" ></path><path d="M800 224m-192 0a192 192 0 1 0 384 0 192 192 0 1 0-384 0Z" fill="#91d5ff" ></path><path d="M800 800m-192 0a192 192 0 1 0 384 0 192 192 0 1 0-384 0Z" fill="#40a9ff" ></path><path d="M224 800m-192 0a192 192 0 1 0 384 0 192 192 0 1 0-384 0Z" fill="#096dd9" ></path></symbol><symbol id="icon-loading" viewBox="0 0 1024 1024"><path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3 0.1 19.9-16 36-35.9 36z"  ></path></symbol><symbol id="icon-half" viewBox="0 0 1024 1024"><path d="M992.65625 404l-331.5-48.1875L512.9375 55.25v757.125l296.53125 156-56.71875-330.375z" fill="#e8e8e8" ></path><path d="M512.9375 812.375V55.25L364.4375 355.8125 32.75 404l239.90625 234-56.53125 330.375z" fill="#fadb14" ></path></symbol><symbol id="icon-empty" viewBox="0 0 1024 1024"><path d="M992.65625 404l-331.5-48.1875L512.9375 55.25v757.125l296.53125 156-56.71875-330.375z" fill="#e8e8e8" ></path><path d="M512.9375 812.375V55.25L364.4375 355.8125 32.75 404l239.90625 234-56.53125 330.375z" fill="#e8e8e8" ></path></symbol><symbol id="icon-triangle" viewBox="0 0 1024 1024"><path d="M952.32 715.2l-416-485.376c-12.16-14.176-36.448-14.176-48.608 0l-416 485.376c-8.128 9.472-9.984 22.848-4.768 34.176C72.16 760.704 83.488 767.99999999 96 768l832 0c12.51200001 0 23.84-7.296 29.056-18.624S960.448 724.672 952.32 715.2z"  ></path></symbol></svg>',
      c = (l = document.getElementsByTagName("script"))[l.length - 1].getAttribute("data-injectcss");

  if (c && !s.__iconfont__svg__cssinject__) {
    s.__iconfont__svg__cssinject__ = !0;

    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (l) {
      console && console.log(l);
    }
  }

  !function (l) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(l, 0);else {
        var c = function c() {
          document.removeEventListener("DOMContentLoaded", c, !1), l();
        };

        document.addEventListener("DOMContentLoaded", c, !1);
      }
    } else document.attachEvent && (t = l, o = s.document, e = !1, a = function a() {
      e || (e = !0, t());
    }, (_i = function i() {
      try {
        o.documentElement.doScroll("left");
      } catch (l) {
        return void setTimeout(_i, 50);
      }

      a();
    })(), o.onreadystatechange = function () {
      "complete" == o.readyState && (o.onreadystatechange = null, a());
    });

    var t, o, e, a, _i;
  }(function () {
    var l, c, t, o, e, a;
    (l = document.createElement("div")).innerHTML = i, i = null, (c = l.getElementsByTagName("svg")[0]) && (c.setAttribute("aria-hidden", "true"), c.style.position = "absolute", c.style.width = 0, c.style.height = 0, c.style.overflow = "hidden", t = c, (o = document.body).firstChild ? (e = t, (a = o.firstChild).parentNode.insertBefore(e, a)) : o.appendChild(t));
  });
}(window);

var componentName$1 = 'Icon';
var Icon = function (props) {
    var className = props.className, size = props.size, style = props.style, name = props.name, children = props.children, rest = __rest(props, ["className", "size", "style", "name", "children"]);
    return (React__default['default'].createElement("svg", __assign({ className: classes(componentName$1, '', [className]), "aria-hidden": "true", style: Object.assign({}, style, { width: size + 'px', height: size + 'px' }) }, rest),
        React__default['default'].createElement("use", { xlinkHref: "#icon-" + name })));
};
Icon.defaultProps = {
    size: 14
};

var componentName$2 = 'Button';
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderIcon = function () {
            var _a = _this.props, icon = _a.icon, size = _a.size, loading = _a.loading;
            var className = classes(componentName$2, 'icon', [size], { loading: loading });
            return loading ? (React__default['default'].createElement(Icon, { name: 'loading', className: className })) : (icon && React__default['default'].createElement(Icon, { name: icon, className: className }));
        };
        return _this;
    }
    Button.prototype.render = function () {
        var cn = componentName$2;
        var _a = this.props, position = _a.position, icon = _a.icon, loading = _a.loading, size = _a.size, type = _a.type, htmlType = _a.htmlType, ghost = _a.ghost, style = _a.style, className = _a.className, disabled = _a.disabled, children = _a.children, rest = __rest(_a, ["position", "icon", "loading", "size", "type", "htmlType", "ghost", "style", "className", "disabled", "children"]);
        var buttonClassName = classes(cn, '', [position, size, type, className], { ghost: ghost, disabled: disabled });
        return (React__default['default'].createElement(Wave, null,
            React__default['default'].createElement("button", __assign({ className: buttonClassName, style: style, type: htmlType, disabled: disabled }, rest),
                this.renderIcon(),
                React__default['default'].createElement("span", { className: classes(cn, 'inner') }, children))));
    };
    Button.displayName = componentName$2;
    Button.defaultProps = {
        position: 'left',
        type: 'default',
        size: 'medium',
        loading: false,
        disabled: false,
        ghost: false,
        htmlType: 'button'
    };
    return Button;
}(React.Component));

var componentName$3 = 'ButtonGroup';
var ButtonGroup = /** @class */ (function (_super) {
    __extends(ButtonGroup, _super);
    function ButtonGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonGroup.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, children = _a.children;
        return (React.createElement("div", { className: classes(componentName$3, '', [className]), style: style }, children));
    };
    ButtonGroup.displayName = componentName$3;
    return ButtonGroup;
}(React.Component));

var componentName$4 = 'Affix';
var Affix = /** @class */ (function (_super) {
    __extends(Affix, _super);
    function Affix() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.top = 0;
        _this.saveAffixRef = function (node) {
            _this.affixRef = node;
        };
        _this.saveWrapperRef = function (node) {
            _this.wrapperRef = node;
        };
        _this.setTop = function () {
            if (window.scrollY === 0) {
                _this.top = _this.affixRef.getBoundingClientRect().top;
            }
            else {
                // 挂载时若窗口不为0，先滚动至0
                var scrollX_1 = window.scrollX, scrollY_1 = window.scrollY;
                window.scrollTo(scrollX_1, 0);
                _this.top = _this.affixRef.getBoundingClientRect().top;
                window.scrollTo(scrollX_1, scrollY_1);
            }
        };
        _this.handleScroll = function () {
            var distance = _this.props.distance;
            if (window.scrollY > _this.top - distance) {
                var _a = _this.wrapperRef.getBoundingClientRect(), top_1 = _a.top, bottom = _a.bottom, left = _a.left, right = _a.right;
                _this.wrapperRef.style.width = right - left + 'px';
                _this.wrapperRef.style.height = bottom - top_1 + 'px';
                _this.wrapperRef.style.left = left + 'px';
                _this.wrapperRef.style.top = distance + 'px';
                _this.wrapperRef.style.position = 'fixed';
            }
            else {
                _this.wrapperRef.style.position = 'static';
            }
        };
        return _this;
    }
    Affix.prototype.componentDidMount = function () {
        window.addEventListener('scroll', this.handleScroll);
        this.setTop();
    };
    Affix.prototype.render = function () {
        var _a = this.props, style = _a.style, className = _a.className, children = _a.children, rest = __rest(_a, ["style", "className", "children"]);
        return (React.createElement("div", { className: classes(componentName$4, ''), ref: this.saveAffixRef },
            React.createElement("div", __assign({ className: classes(componentName$4, 'wrapper', [className]), style: style, ref: this.saveWrapperRef }, rest), children)));
    };
    Affix.displayName = componentName$4;
    Affix.defaultProps = {
        distance: 0
    };
    return Affix;
}(React.Component));

var componentName$5 = 'CascaderMenu';
var CascaderMenu = /** @class */ (function (_super) {
    __extends(CascaderMenu, _super);
    function CascaderMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClickItem = function (option) {
            if (option.disabled) {
                return;
            }
            var _a = _this.props, level = _a.level, handleChangeValue = _a.handleChangeValue;
            if (!_this.state.currentOption ||
                option.value !== _this.state.currentOption.value) {
                _this.setState({
                    currentOption: option
                });
            }
            handleChangeValue(option, level);
        };
        _this.state = {
            currentOption: null
        };
        return _this;
    }
    CascaderMenu.getDerivedStateFromProps = function (nextProps, prevState) {
        // 未选中任何一项
        if (!nextProps.valueArr) {
            return { currentOption: null };
        }
        // 被截掉
        if (prevState.currentOption &&
            prevState.currentOption.value &&
            nextProps.valueArr.indexOf(prevState.currentOption.value) === -1) {
            return { currentOption: null };
        }
        return null;
    };
    CascaderMenu.prototype.render = function () {
        var _this = this;
        var cn = componentName$5;
        var _a = this.props, options = _a.options, level = _a.level, handleChangeValue = _a.handleChangeValue, valueArr = _a.valueArr, itemClassName = _a.itemClassName, itemStyle = _a.itemStyle;
        var currentOption = this.state.currentOption;
        return (React.createElement(React.Fragment, null,
            React.createElement("ul", { className: classes(cn, '') }, options.map(function (option) { return (React.createElement("li", { className: classes(cn, 'item', [itemClassName], {
                    selected: valueArr && valueArr.indexOf(option.value) > -1,
                    'has-children': option.children && option.children.length,
                    disabled: option.disabled
                }), style: itemStyle, key: option.value, onClick: function () { return _this.handleClickItem(option); } },
                option.label,
                option.children && option.children.length && (React.createElement("span", { className: classes(cn, 'item-icon-wrapper') },
                    React.createElement(Icon, { name: "arrow", size: 8 }))))); })),
            currentOption &&
                currentOption.children &&
                currentOption.children.length && (React.createElement(CascaderMenu, { options: currentOption.children, level: level + 1, handleChangeValue: handleChangeValue, valueArr: valueArr, itemClassName: itemClassName, itemStyle: itemStyle }))));
    };
    CascaderMenu.displayName = componentName$5;
    CascaderMenu.propTypes = {
        options: PropTypes.arrayOf(PropTypes.object),
        level: PropTypes.number,
        handleChangeValue: PropTypes.func,
        valueArr: PropTypes.arrayOf(PropTypes.string),
        itemClassName: PropTypes.string,
        itemStyle: PropTypes.object
    };
    return CascaderMenu;
}(React.Component));

var componentName$6 = 'Unfold';
var Unfold = /** @class */ (function (_super) {
    __extends(Unfold, _super);
    function Unfold() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.monitored = false;
        _this.transitionEffect = {
            vertical: '',
            horizontal: ''
        };
        _this.leaveTo = {
            vertical: {
                paddingTop: '0',
                paddingBottom: '0',
                borderTopWidth: '0',
                borderBottomWidth: '0',
                height: '0'
            },
            horizontal: {
                paddingLeft: '0',
                paddingRight: '0',
                borderLeftWidth: '0',
                borderRightWidth: '0',
                width: '0'
            }
        };
        _this.prevCssProp = {
            paddingLeft: '',
            paddingRight: '',
            paddingTop: '',
            paddingBottom: '',
            borderTopWidth: '',
            borderBottomWidth: '',
            borderLeftWidth: '',
            borderRightWidth: '',
            width: '',
            height: '',
            overflowX: '',
            overflowY: '',
            overflow: ''
        };
        _this.prevSize = {
            width: null,
            height: null
        };
        _this.setNodeStyle = function (node, cssProp) {
            Object.keys(cssProp).forEach(function (key) {
                node.style[key] = cssProp[key];
            });
        };
        _this.handleTransitionEnd = function (e) {
            var visible = _this.props.visible;
            var _a = _this.prevCssProp, overflowX = _a.overflowX, overflowY = _a.overflowY, overflow = _a.overflow;
            var _b = _this.prevSize, width = _b.width, height = _b.height;
            _this.setNodeStyle(_this.node, {
                overflowX: overflowX,
                overflowY: overflowY,
                overflow: overflow,
                width: width,
                height: height
            });
            if (!visible && _this.node) {
                _this.node.style.display = 'none';
            }
        };
        return _this;
    }
    Unfold.prototype.componentDidMount = function () {
        var _a = this.props, visible = _a.visible, transitionTime = _a.transitionTime;
        if (visible) {
            this.rendered = true;
        }
        this.transitionEffect = {
            vertical: "\n      " + transitionTime + "s height cubic-bezier(.645, .045, .355, 1), \n      " + transitionTime + "s padding-top cubic-bezier(.645, .045, .355, 1), \n      " + transitionTime + "s padding-bottom cubic-bezier(.645, .045, .355, 1)",
            horizontal: "\n      " + transitionTime + "s width cubic-bezier(.645, .045, .355, 1), \n      " + transitionTime + "s padding-left cubic-bezier(.645, .045, .355, 1), \n      " + transitionTime + "s padding-right cubic-bezier(.645, .045, .355, 1)"
        };
        this.addTransitionListener();
    };
    Unfold.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (!this.monitored) {
            this.addTransitionListener();
        }
        var prevVisible = prevProps.visible;
        var visible = this.props.visible;
        // to enter
        if (visible && !prevVisible) {
            this.rendered = true;
            this.showNode();
            // to leave
        }
        else if (!visible && prevVisible) {
            this.hideNode();
        }
    };
    Unfold.prototype.componentWillUnmount = function () {
        if (this.node) {
            this.node.removeEventListener('transitionend', this.handleTransitionEnd);
        }
    };
    Unfold.prototype.addTransitionListener = function () {
        if (!ReactDOM.findDOMNode(this)) {
            return;
        }
        this.node = ReactDOM.findDOMNode(this);
        this.node.addEventListener('transitionend', this.handleTransitionEnd);
        this.monitored = true;
        this.getNodeSize(this.node);
    };
    Unfold.prototype.getNodeSize = function (node) {
        var display = node.style.display;
        if (display === 'none') {
            node.style.display = '';
        }
        var _a = node.getBoundingClientRect(), top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom;
        var rectWidth = right - left;
        var rectHeight = bottom - top;
        var _b = node.style, paddingLeft = _b.paddingLeft, paddingRight = _b.paddingRight, paddingTop = _b.paddingTop, paddingBottom = _b.paddingBottom, borderTopWidth = _b.borderTopWidth, borderBottomWidth = _b.borderBottomWidth, borderLeftWidth = _b.borderLeftWidth, borderRightWidth = _b.borderRightWidth, width = _b.width, height = _b.height, overflowX = _b.overflowX, overflowY = _b.overflowY, overflow = _b.overflow;
        if (display === 'none') {
            node.style.display = display;
        }
        this.prevCssProp = {
            paddingLeft: paddingLeft,
            paddingRight: paddingRight,
            paddingTop: paddingTop,
            paddingBottom: paddingBottom,
            borderTopWidth: borderTopWidth,
            borderBottomWidth: borderBottomWidth,
            borderLeftWidth: borderLeftWidth,
            borderRightWidth: borderRightWidth,
            width: width || rectWidth + 'px',
            height: height || rectHeight + 'px',
            overflowX: overflowX,
            overflowY: overflowY,
            overflow: overflow
        };
        this.prevSize = {
            width: width,
            height: height
        };
    };
    Unfold.prototype.hideNode = function () {
        // 关闭时先获取最新的 node 数据
        this.getNodeSize(this.node);
        var _a = this, node = _a.node, leaveTo = _a.leaveTo, transitionEffect = _a.transitionEffect, prevCssProp = _a.prevCssProp;
        var vertical = this.props.vertical;
        var paddingLeft = prevCssProp.paddingLeft, paddingRight = prevCssProp.paddingRight, paddingTop = prevCssProp.paddingTop, paddingBottom = prevCssProp.paddingBottom, borderTopWidth = prevCssProp.borderTopWidth, borderBottomWidth = prevCssProp.borderBottomWidth, borderLeftWidth = prevCssProp.borderLeftWidth, borderRightWidth = prevCssProp.borderRightWidth, width = prevCssProp.width, height = prevCssProp.height;
        this.nodeDisplay = node.style.display;
        node.style.overflowX = 'hidden';
        node.style.overflowY = 'hidden';
        node.style.overflow = 'hidden';
        if (vertical) {
            this.setNodeStyle(this.node, {
                transition: '',
                paddingTop: paddingTop,
                paddingBottom: paddingBottom,
                borderTopWidth: borderTopWidth,
                borderBottomWidth: borderBottomWidth,
                width: width,
                height: height
            });
            // inforce repaint
            this.node.getBoundingClientRect();
            this.setNodeStyle(this.node, __assign({ transition: transitionEffect.vertical }, leaveTo.vertical));
        }
        else {
            this.setNodeStyle(this.node, {
                transition: '',
                paddingLeft: paddingLeft,
                paddingRight: paddingRight,
                borderLeftWidth: borderLeftWidth,
                borderRightWidth: borderRightWidth,
                width: width,
                height: height
            });
            // inforce repaint
            this.node.getBoundingClientRect();
            this.setNodeStyle(this.node, __assign({ transition: transitionEffect.horizontal }, leaveTo.horizontal));
        }
    };
    Unfold.prototype.showNode = function () {
        var _a = this, node = _a.node, leaveTo = _a.leaveTo, transitionEffect = _a.transitionEffect, prevCssProp = _a.prevCssProp;
        var vertical = this.props.vertical;
        var paddingLeft = prevCssProp.paddingLeft, paddingRight = prevCssProp.paddingRight, paddingTop = prevCssProp.paddingTop, paddingBottom = prevCssProp.paddingBottom, borderTopWidth = prevCssProp.borderTopWidth, borderBottomWidth = prevCssProp.borderBottomWidth, borderLeftWidth = prevCssProp.borderLeftWidth, borderRightWidth = prevCssProp.borderRightWidth, width = prevCssProp.width, height = prevCssProp.height;
        node.style.display = this.nodeDisplay;
        node.style.overflowX = 'hidden';
        node.style.overflowY = 'hidden';
        node.style.overflow = 'hidden';
        if (vertical) {
            this.setNodeStyle(this.node, __assign({ transition: '' }, leaveTo.vertical));
            // inforce repaint
            this.node.getBoundingClientRect();
            this.setNodeStyle(this.node, {
                transition: transitionEffect.vertical,
                paddingTop: paddingTop,
                paddingBottom: paddingBottom,
                borderTopWidth: borderTopWidth,
                borderBottomWidth: borderBottomWidth,
                height: height,
                width: width
            });
        }
        else {
            this.setNodeStyle(this.node, __assign({ transition: '' }, leaveTo.horizontal));
            // inforce repaint
            this.node.getBoundingClientRect();
            this.setNodeStyle(this.node, {
                transition: transitionEffect.horizontal,
                paddingLeft: paddingLeft,
                paddingRight: paddingRight,
                borderLeftWidth: borderLeftWidth,
                borderRightWidth: borderRightWidth,
                height: height,
                width: width
            });
        }
    };
    Unfold.prototype.render = function () {
        var rendered = this.rendered;
        var _a = this.props, visible = _a.visible, children = _a.children, vertical = _a.vertical, transitionTime = _a.transitionTime, rest = __rest(_a, ["visible", "children", "vertical", "transitionTime"]);
        return (((visible || rendered) &&
            React.cloneElement(children, rest)) ||
            null);
    };
    Unfold.displayName = componentName$6;
    Unfold.defaultProps = {
        vertical: false,
        transitionTime: 0.3
    };
    Unfold.propTypes = {
        visible: PropTypes.bool.isRequired,
        vertical: PropTypes.bool,
        transitionTime: PropTypes.number
    };
    return Unfold;
}(React.Component));

var componentName$7 = 'Cascader';
var Cascader = /** @class */ (function (_super) {
    __extends(Cascader, _super);
    function Cascader(props) {
        var _this = _super.call(this, props) || this;
        // 监听 document，点击别处关闭
        _this.handleClickDocument = function (e) {
            var target = e.target;
            var menuVisible = _this.state.menuVisible;
            if (!_this.cascaderEl.contains(target) && menuVisible) {
                _this.setState({
                    menuVisible: false
                });
            }
        };
        _this.saveCascaderEl = function (node) {
            _this.cascaderEl = node;
        };
        _this.handleClickInput = function () {
            _this.setState({
                menuVisible: !_this.state.menuVisible
            });
        };
        _this.handleChangeValue = function (option, level) {
            // 最后一级
            if (!option.children) {
                _this.handleClickLastLevel(option, level);
                // 中间层级
            }
            else {
                _this.handleClickMidLevel(option, level);
            }
        };
        // 监听点击最后一层，点击后需要关闭菜单，若 valueArr 改变，需更新输入框显示的值
        _this.handleClickLastLevel = function (option, level) {
            var onChange = _this.props.onChange;
            var valueArr = _this.state.valueArr || [];
            var selectedOptions = _this.state.selectedOptions || [];
            // 相同，未改变，关闭菜单
            if (valueArr[level] === option.value) {
                _this.setState({
                    menuVisible: false
                });
                // 不同，更改后关闭菜单
            }
            else {
                var valueArrCopy = JSON.parse(JSON.stringify(valueArr));
                var selectedOptionsCopy = JSON.parse(JSON.stringify(selectedOptions));
                valueArrCopy.splice(level, 1, option.value);
                selectedOptionsCopy.splice(level, 1, option);
                _this.setState({
                    valueArr: valueArrCopy,
                    selectedOptions: selectedOptionsCopy,
                    inputValueFromLabel: _this.getLabelString(selectedOptionsCopy),
                    menuVisible: false
                });
                if (onChange) {
                    onChange(valueArrCopy, selectedOptionsCopy);
                }
            }
        };
        // 监听点击中间层，若改变，只在 changeOnSelect 为真时更新输入框显示的值
        _this.handleClickMidLevel = function (option, level) {
            var _a = _this.props, changeOnSelect = _a.changeOnSelect, onSelect = _a.onSelect;
            var valueArr = _this.state.valueArr || [];
            var selectedOptions = _this.state.selectedOptions || [];
            // 相同，截掉后面的
            if (valueArr[level] === option.value) {
                // 选中即改变时,更新输入框显示的值
                if (changeOnSelect) {
                    _this.setState({
                        valueArr: valueArr.slice(0, level + 1),
                        selectedOptions: selectedOptions.slice(0, level + 1),
                        inputValueFromLabel: _this.getLabelString(selectedOptions.slice(0, level + 1))
                    });
                }
                else {
                    _this.setState({
                        valueArr: valueArr.slice(0, level + 1),
                        selectedOptions: selectedOptions.slice(0, level + 1)
                    });
                }
                // 始终调用回调
                if (onSelect) {
                    onSelect(valueArr.slice(0, level + 1), selectedOptions.slice(0, level + 1));
                }
                // 不同，替换并截掉后面的
            }
            else {
                var valueArrCopy = JSON.parse(JSON.stringify(valueArr));
                var selectedOptionsCopy = JSON.parse(JSON.stringify(selectedOptions));
                valueArrCopy.splice(level, 1, option.value);
                selectedOptionsCopy.splice(level, 1, option);
                // 选中即改变时,更新输入框显示的值
                if (changeOnSelect) {
                    _this.setState({
                        valueArr: valueArrCopy.slice(0, level + 1),
                        selectedOptions: selectedOptionsCopy.slice(0, level + 1),
                        inputValueFromLabel: _this.getLabelString(selectedOptionsCopy.slice(0, level + 1))
                    });
                }
                else {
                    _this.setState({
                        valueArr: valueArrCopy.slice(0, level + 1),
                        selectedOptions: selectedOptionsCopy.slice(0, level + 1)
                    });
                }
                // 始终调用回调
                if (onSelect) {
                    onSelect(valueArrCopy.slice(0, level + 1), selectedOptionsCopy.slice(0, level + 1));
                }
            }
        };
        _this.getLabelString = function (selectedOptions) {
            var prev = [];
            return (selectedOptions
                .reduce(function (base, current) {
                base.push(current.label);
                return base;
            }, prev)
                .join(' / ') || '');
        };
        _this.handleOnClear = function () {
            _this.setState({
                valueArr: [],
                selectedOptions: [],
                inputValueFromLabel: '',
                menuVisible: false
            });
            if (_this.props.onChange) {
                _this.props.onChange([], []);
            }
        };
        _this.state = {
            valueArr: [],
            selectedOptions: [],
            inputValueFromLabel: '',
            menuStyle: {
                top: ''
            },
            menuVisible: false
        };
        return _this;
    }
    Cascader.prototype.componentDidMount = function () {
        var _a = this.cascaderEl.getBoundingClientRect(), bottom = _a.bottom, top = _a.top;
        this.setState({
            menuStyle: {
                top: bottom - top + 4 + "px"
            }
        });
        document.addEventListener('click', this.handleClickDocument, true);
    };
    Cascader.prototype.componentWillUnmount = function () {
        document.removeEventListener('click', this.handleClickDocument, true);
    };
    Cascader.prototype.render = function () {
        var cn = componentName$7;
        var _a = this.props, options = _a.options, placeholder = _a.placeholder, itemClassName = _a.itemClassName, itemStyle = _a.itemStyle, className = _a.className, style = _a.style;
        var _b = this.state, valueArr = _b.valueArr, menuVisible = _b.menuVisible, menuStyle = _b.menuStyle, inputValueFromLabel = _b.inputValueFromLabel;
        return (React.createElement("div", { className: classes(cn, '', {
                active: menuVisible
            }), ref: this.saveCascaderEl },
            React.createElement("span", { className: classes(cn, 'input-wrapper') },
                placeholder && !inputValueFromLabel && (React.createElement("span", { className: classes(cn, 'placeholder') }, placeholder)),
                React.createElement("input", { type: "text", className: classes(cn, 'input', [className]), style: style, readOnly: true, onClick: this.handleClickInput, value: inputValueFromLabel }),
                React.createElement("span", { className: classes(cn, 'icon-wrapper', ['arrow']) },
                    React.createElement(Icon, { name: "arrow", size: 8 })),
                inputValueFromLabel && (React.createElement("span", { className: classes(cn, 'icon-wrapper', ['close']), onClick: this.handleOnClear },
                    React.createElement(Icon, { name: "close", size: 10 })))),
            options && options.length && (React.createElement(Unfold, { visible: menuVisible, vertical: true },
                React.createElement("div", { className: classes(cn, 'menu-container'), style: menuStyle },
                    React.createElement(CascaderMenu, { options: options, level: 0, handleChangeValue: this.handleChangeValue, valueArr: valueArr, itemClassName: itemClassName, itemStyle: itemStyle }))))));
    };
    Cascader.displayName = componentName$7;
    Cascader.defaultProps = {
        changeOnSelect: false
    };
    Cascader.propTypes = {
        options: PropTypes.arrayOf(PropTypes.object).isRequired,
        placeholder: PropTypes.string,
        itemStyle: PropTypes.object,
        itemClassName: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        onChange: PropTypes.func,
        onSelect: PropTypes.func,
        changeOnSelect: PropTypes.bool
    };
    return Cascader;
}(React.Component));

var componentName$8 = "CheckBox";
var CheckBox = /** @class */ (function (_super) {
    __extends(CheckBox, _super);
    function CheckBox(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function (e) {
            var _a = _this.props, disabled = _a.disabled, onChange = _a.onChange;
            var derivedChecked = _this.state.derivedChecked;
            if (disabled) {
                return;
            }
            _this.setState({ derivedChecked: !derivedChecked });
            if (onChange) {
                onChange(!derivedChecked, e);
            }
        };
        _this.state = {
            derivedChecked: props.defaultChecked || false
        };
        return _this;
    }
    CheckBox.getDerivedStateFromProps = function (nextProps, prevState) {
        if ("checked" in nextProps) {
            return { derivedChecked: nextProps.checked };
        }
        return null;
    };
    CheckBox.prototype.render = function () {
        var cn = componentName$8;
        var _a = this.props, disabled = _a.disabled, indeterminate = _a.indeterminate, children = _a.children;
        var derivedChecked = this.state.derivedChecked;
        return (React.createElement("div", { className: classes(cn, ""), onClick: this.handleClick },
            React.createElement("div", { className: classes(cn, "selection", {
                    disabled: disabled,
                    indeterminate: indeterminate,
                    checked: derivedChecked
                }) }),
            children));
    };
    CheckBox.displayName = componentName$8;
    CheckBox.propTypes = {
        checked: PropTypes.bool,
        defaultChecked: PropTypes.bool,
        disabled: PropTypes.bool,
        indeterminate: PropTypes.bool,
        onChange: PropTypes.func
    };
    return CheckBox;
}(React.Component));

var componentName$9 = "CheckBoxGroup";
var CheckBoxGroup = /** @class */ (function (_super) {
    __extends(CheckBoxGroup, _super);
    function CheckBoxGroup(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (key) {
            var onChange = _this.props.onChange;
            var derivedValue = _this.state.derivedValue;
            var newValue = derivedValue.indexOf(key) > -1
                ? derivedValue.filter(function (item) { return item !== key; })
                : __spreadArrays([key], derivedValue);
            _this.setState({
                derivedValue: newValue
            });
            if (onChange) {
                onChange(newValue);
            }
        };
        _this.selectAll = function (isAll) {
            var _a = _this.props, options = _a.options, onChange = _a.onChange;
            var newValue = isAll
                ? options.reduce(function (prev, current) { return __spreadArrays([current.value], prev); }, [])
                : [];
            _this.setState({
                derivedValue: newValue
            });
            if (onChange) {
                onChange(newValue);
            }
        };
        _this.getStatus = function () {
            var options = _this.props.options;
            var derivedValue = _this.state.derivedValue;
            if (derivedValue.length > 0 && derivedValue.length < options.length) {
                return "indeterminate";
            }
            else if (derivedValue.length === options.length) {
                return "all";
            }
            else {
                return "none";
            }
        };
        _this.handleAll = function () {
            if (_this.getStatus() === "all") {
                _this.selectAll(false);
            }
            else {
                _this.selectAll(true);
            }
        };
        _this.state = {
            derivedValue: props.defaultValue || []
        };
        return _this;
    }
    CheckBoxGroup.getDerivedStateFromProps = function (nextProps, prevState) {
        if ("value" in nextProps) {
            return { derivedValue: nextProps.value };
        }
        return null;
    };
    CheckBoxGroup.prototype.render = function () {
        var _this = this;
        var cn = componentName$9;
        var _a = this.props, options = _a.options, title = _a.title, className = _a.className, style = _a.style;
        var derivedValue = this.state.derivedValue;
        return (React.createElement("div", { className: classes(cn, "", [className]), style: style },
            React.createElement(CheckBox, { indeterminate: this.getStatus() === "indeterminate", checked: this.getStatus() === "all", onChange: this.handleAll }, title),
            options.map(function (option) { return (React.createElement(CheckBox, { key: option.value, checked: derivedValue.indexOf(option.value) > -1, disabled: option.disabled === true, onChange: function () { return _this.handleChange(option.value); } }, option.label)); })));
    };
    CheckBoxGroup.displayName = componentName$9;
    CheckBoxGroup.defaultProps = {
        title: "All"
    };
    CheckBoxGroup.propTypes = {
        options: PropTypes.arrayOf(PropTypes.object).isRequired,
        defaultValue: PropTypes.arrayOf(PropTypes.string),
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        value: PropTypes.arrayOf(PropTypes.string),
        onChange: PropTypes.func,
        className: PropTypes.string,
        style: PropTypes.object
    };
    return CheckBoxGroup;
}(React.Component));

function arrayIsEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    var newArr1 = JSON.parse(JSON.stringify(arr1)).sort();
    var newArr2 = JSON.parse(JSON.stringify(arr2)).sort();
    for (var i = 0; i < newArr1.length; i++) {
        if (newArr1[i] !== newArr2[i]) {
            return false;
        }
    }
    return true;
}

var componentName$a = 'Collapse';
var Collapse = /** @class */ (function (_super) {
    __extends(Collapse, _super);
    function Collapse(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClickHeader = function (key, e) {
            var _a = _this.props, onChange = _a.onChange, accordion = _a.accordion;
            var derivedActiveKey = _this.state.derivedActiveKey;
            // only one open
            if (accordion) {
                _this.setState({
                    derivedActiveKey: derivedActiveKey.indexOf(key) > -1 ? [] : [key]
                }, function () {
                    if (onChange) {
                        onChange(_this.state.derivedActiveKey, e);
                    }
                });
            }
            else {
                _this.setState({
                    derivedActiveKey: derivedActiveKey.indexOf(key) > -1
                        ? derivedActiveKey.filter(function (item) { return item !== key; })
                        : __spreadArrays([key], derivedActiveKey)
                }, function () {
                    if (onChange) {
                        onChange(_this.state.derivedActiveKey, e);
                    }
                });
            }
        };
        _this.renderChildren = function () {
            var handleClickHeader = _this.handleClickHeader;
            var _a = _this.props, showArrow = _a.showArrow, children = _a.children;
            var derivedActiveKey = _this.state.derivedActiveKey;
            return React.Children.map(children, function (child) {
                if (!child) {
                    return null;
                }
                var key = child.key;
                return React.cloneElement(child, {
                    derivedActiveKey: derivedActiveKey,
                    showArrow: showArrow,
                    uniqueKey: key,
                    onClick: handleClickHeader
                });
            });
        };
        _this.state = {
            derivedActiveKey: props.defaultActiveKey || []
        };
        return _this;
    }
    Collapse.getDerivedStateFromProps = function (nextProps, prevState) {
        var activeKey = nextProps.activeKey;
        var derivedActiveKey = prevState.derivedActiveKey;
        if (!('activeKey' in nextProps) || activeKey === derivedActiveKey) {
            return null;
        }
        else if (activeKey instanceof Array &&
            derivedActiveKey instanceof Array) {
            var isEqual = arrayIsEqual(activeKey, derivedActiveKey);
            if (isEqual) {
                return null;
            }
            else {
                return { derivedActiveKey: activeKey };
            }
        }
        return { derivedActiveKey: activeKey };
    };
    Collapse.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style;
        return (React.createElement("div", { className: classes(componentName$a, '', [className]), style: style }, this.renderChildren()));
    };
    Collapse.displayName = componentName$a;
    Collapse.defaultProps = {
        accordion: false,
        showArrow: true
    };
    Collapse.propTypes = {
        activeKey: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.arrayOf(PropTypes.string)
        ]),
        defaultActiveKey: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.arrayOf(PropTypes.string)
        ]),
        onChange: PropTypes.func,
        style: PropTypes.object,
        className: PropTypes.string
    };
    return Collapse;
}(React.Component));

var componentName$b = 'Panel';
var Panel = /** @class */ (function (_super) {
    __extends(Panel, _super);
    function Panel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClickHeader = function (e) {
            var _a = _this.props, uniqueKey = _a.uniqueKey, onClick = _a.onClick, disabled = _a.disabled;
            if (disabled) {
                return;
            }
            onClick(uniqueKey, e);
        };
        return _this;
    }
    Panel.prototype.render = function () {
        var cn = componentName$b;
        var _a = this.props, header = _a.header, disabled = _a.disabled, derivedActiveKey = _a.derivedActiveKey, uniqueKey = _a.uniqueKey, showArrow = _a.showArrow, className = _a.className, style = _a.style, children = _a.children;
        var active = derivedActiveKey.indexOf(uniqueKey) > -1;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: classes(cn, 'header', {
                    disabled: disabled,
                    active: active,
                    'with-arrow': showArrow
                }), onClick: this.handleClickHeader },
                showArrow && (React.createElement("span", { className: "arrow-wrapper" },
                    React.createElement(Icon, { name: "arrow", size: 10 }))),
                header),
            React.createElement(Unfold, { visible: active, vertical: true },
                React.createElement("div", { className: classes(cn, 'body', [className]), style: style }, children))));
    };
    Panel.displayName = componentName$b;
    Panel.propTypes = {
        header: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
            .isRequired,
        uniqueKey: PropTypes.string,
        derivedActiveKey: PropTypes.arrayOf(PropTypes.string),
        disabled: PropTypes.bool,
        showArrow: PropTypes.bool,
        onClick: PropTypes.func,
        style: PropTypes.object,
        className: PropTypes.string
    };
    return Panel;
}(React.Component));

function parseDateString(str) {
    if (str) {
        var dateObject = new Date(str);
        return {
            year: dateObject.getFullYear(),
            month: dateObject.getMonth() + 1,
            date: dateObject.getDate()
        };
    }
    else {
        var dateObject = new Date();
        return {
            year: dateObject.getFullYear(),
            month: dateObject.getMonth() + 1,
            date: dateObject.getDate()
        };
    }
}

var componentName$c = 'Transition';
var Transition = /** @class */ (function (_super) {
    __extends(Transition, _super);
    function Transition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.monitored = false;
        _this.setNodeStyle = function (node, cssProp) {
            Object.keys(cssProp).forEach(function (key) {
                node.style[key] = cssProp[key];
            });
        };
        _this.handleTransitionEnd = function (e) {
            var visible = _this.props.visible;
            if (!visible && _this.node) {
                _this.node.style.display = 'none';
            }
        };
        return _this;
    }
    Transition.prototype.componentDidMount = function () {
        var visible = this.props.visible;
        if (visible) {
            this.rendered = true;
        }
        this.addTransitionListener();
    };
    Transition.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (!this.monitored) {
            this.addTransitionListener();
        }
        var prevVisible = prevProps.visible;
        var visible = this.props.visible;
        // to enter
        if (visible && !prevVisible) {
            this.rendered = true;
            this.showNode();
            // to leave
        }
        else if (!visible && prevVisible) {
            this.hideNode();
        }
    };
    Transition.prototype.componentWillUnmount = function () {
        if (this.node) {
            this.node.removeEventListener('transitionend', this.handleTransitionEnd);
        }
    };
    Transition.prototype.addTransitionListener = function () {
        if (!ReactDOM.findDOMNode(this)) {
            return;
        }
        this.node = ReactDOM.findDOMNode(this);
        this.node.addEventListener('transitionend', this.handleTransitionEnd);
        this.monitored = true;
    };
    Transition.prototype.hideNode = function () {
        var _a = this.props, transitionActive = _a.transitionActive, beforeLeave = _a.beforeLeave, afterLeave = _a.afterLeave, beforeEnter = _a.beforeEnter, afterEnter = _a.afterEnter;
        this.nodeDisplay = this.node.style.display;
        this.setNodeStyle(this.node, __assign({ transition: '' }, (beforeLeave || afterEnter || {})));
        // inforce repaint
        this.node.getBoundingClientRect();
        this.setNodeStyle(this.node, __assign(__assign({}, transitionActive), (afterLeave || beforeEnter || {})));
    };
    Transition.prototype.showNode = function () {
        var _a = this.props, transitionActive = _a.transitionActive, beforeLeave = _a.beforeLeave, afterLeave = _a.afterLeave, beforeEnter = _a.beforeEnter, afterEnter = _a.afterEnter;
        this.node.style.display = this.nodeDisplay;
        this.setNodeStyle(this.node, __assign({ transition: '' }, (beforeEnter || afterLeave || {})));
        // inforce repaint
        this.node.getBoundingClientRect();
        this.setNodeStyle(this.node, __assign(__assign({}, transitionActive), (afterEnter || beforeLeave || {})));
    };
    Transition.prototype.render = function () {
        var rendered = this.rendered;
        var _a = this.props, visible = _a.visible, children = _a.children, afterEnter = _a.afterEnter, afterLeave = _a.afterLeave, beforeEnter = _a.beforeEnter, beforeLeave = _a.beforeLeave, transitionActive = _a.transitionActive, rest = __rest(_a, ["visible", "children", "afterEnter", "afterLeave", "beforeEnter", "beforeLeave", "transitionActive"]);
        return (((visible || rendered) &&
            React.cloneElement(children, rest)) ||
            null);
    };
    Transition.displayName = componentName$c;
    Transition.defaultProps = {
        transitionActive: {
            transition: '300ms all cubic-bezier(.645, .045, .355, 1)'
        }
    };
    Transition.propTypes = {
        visible: PropTypes.bool.isRequired,
        afterEnter: PropTypes.object,
        afterLeave: PropTypes.object,
        beforeEnter: PropTypes.object,
        beforeLeave: PropTypes.object,
        transitionActive: PropTypes.object
    };
    return Transition;
}(React.Component));

function getDateLists(year, month) {
    // 获取当月天数即获取下月的第0天
    var currentMonthLength = new Date(year, month, 0).getDate();
    var dateList = Array.from({ length: currentMonthLength }, function (val, index) { return index + 1; });
    // 获取上一月天数
    var prevMonthLength = new Date(year, month - 1, 0).getDate();
    // 获取当月第一天的星期，星期天则设置为7
    var startDay = new Date(year, month - 1, 1).getDay() || 7;
    // 当月第一天不为星期一则需要填补前缀
    var prefix = [];
    for (var i = 0; i < startDay - 1; i++) {
        prefix.unshift(prevMonthLength - i);
    }
    // 前缀和当前月不满42则需填后缀
    var distance = 42 - prefix.length - dateList.length;
    var suffix = [];
    for (var i = 0; i < distance; i++) {
        suffix.push(i + 1);
    }
    return { prefix: prefix, dateList: dateList, suffix: suffix };
}

var componentName$d = 'DatePanel';
var DatePanel = /** @class */ (function (_super) {
    __extends(DatePanel, _super);
    function DatePanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isSelected = function (year, month, date) {
            var value = _this.props.value;
            if (!value) {
                return false;
            }
            var selectedYear = value.year, selectedMonth = value.month, selectedDate = value.date;
            return (selectedYear === year && selectedMonth === month && selectedDate === date);
        };
        _this.isToday = function (year, month, date) {
            var dateObject = new Date();
            return (year === dateObject.getFullYear() &&
                month === dateObject.getMonth() + 1 &&
                date === dateObject.getDate());
        };
        _this.renderPrefix = function (prefix) {
            var _a = _this.props, year = _a.year, month = _a.month;
            var cn = componentName$d;
            return prefix.map(function (n) { return (React.createElement("li", { key: "prefix" + n, className: classes(cn, 'date', ['prefix'], {
                    selected: month === 1
                        ? _this.isSelected(year - 1, 12, n)
                        : _this.isSelected(year, month - 1, n),
                    today: month === 1
                        ? _this.isToday(year - 1, 12, n)
                        : _this.isToday(year, month - 1, n)
                }), onClick: function () { return _this.handleClickDate(year, month - 1, n); } }, n)); });
        };
        _this.renderDateList = function (dateList) {
            var _a = _this.props, year = _a.year, month = _a.month;
            var cn = componentName$d;
            return dateList.map(function (n) { return (React.createElement("li", { key: "date-list" + n, className: classes(cn, 'date', ['date-list'], {
                    selected: _this.isSelected(year, month, n),
                    today: _this.isToday(year, month, n)
                }), onClick: function () { return _this.handleClickDate(year, month, n); } }, n)); });
        };
        _this.renderSuffix = function (suffix) {
            var _a = _this.props, year = _a.year, month = _a.month;
            var cn = componentName$d;
            return suffix.map(function (n) { return (React.createElement("li", { key: "suffix" + n, className: classes(cn, 'date', ['suffix'], {
                    selected: month === 12
                        ? _this.isSelected(year + 1, 1, n)
                        : _this.isSelected(year, month + 1, n),
                    today: month === 12
                        ? _this.isSelected(year + 1, 1, n)
                        : _this.isSelected(year, month + 1, n)
                }), onClick: function () { return _this.handleClickDate(year, month + 1, n); } }, n)); });
        };
        _this.renderDateLists = function () {
            var _a = _this.props, year = _a.year, month = _a.month;
            var _b = getDateLists(year, month), prefix = _b.prefix, dateList = _b.dateList, suffix = _b.suffix;
            return _this.renderPrefix(prefix)
                .concat(_this.renderDateList(dateList))
                .concat(_this.renderSuffix(suffix));
        };
        _this.handleClickDate = function (year, month, date) {
            var onClickDate = _this.props.onClickDate;
            if (onClickDate) {
                if (month === 0) {
                    onClickDate({ year: year - 1, month: 12, date: date });
                }
                else if (month === 13) {
                    onClickDate({ year: year + 1, month: 1, date: date });
                }
                else {
                    onClickDate({ year: year, month: month, date: date });
                }
            }
        };
        return _this;
    }
    DatePanel.prototype.render = function () {
        var cn = componentName$d;
        return (React.createElement("ul", { className: "spike-datepanel" },
            React.createElement("li", { className: classes(cn, 'day') }, "\u4E00"),
            React.createElement("li", { className: classes(cn, 'day') }, "\u4E8C"),
            React.createElement("li", { className: classes(cn, 'day') }, "\u4E09"),
            React.createElement("li", { className: classes(cn, 'day') }, "\u56DB"),
            React.createElement("li", { className: classes(cn, 'day') }, "\u4E94"),
            React.createElement("li", { className: classes(cn, 'day') }, "\u516D"),
            React.createElement("li", { className: classes(cn, 'day') }, "\u65E5"),
            this.renderDateLists()));
    };
    DatePanel.displayName = componentName$d;
    DatePanel.propTypes = {
        year: PropTypes.number.isRequired,
        month: PropTypes.number.isRequired,
        value: PropTypes.object,
        onClickDate: PropTypes.func
    };
    return DatePanel;
}(React.Component));

var componentName$e = 'MonthPanel';
var MonthPanel = /** @class */ (function (_super) {
    __extends(MonthPanel, _super);
    function MonthPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.monthArray = [
            '一月',
            '二月',
            '三月',
            '四月',
            '五月',
            '六月',
            '七月',
            '八月',
            '九月',
            '十月',
            '十一月',
            '十二月'
        ];
        _this.handleClickMonth = function (month) {
            var onClickMonth = _this.props.onClickMonth;
            if (onClickMonth) {
                onClickMonth(month);
            }
        };
        return _this;
    }
    MonthPanel.prototype.render = function () {
        var _this = this;
        var cn = componentName$e;
        var month = this.props.month;
        return (React.createElement("ul", { className: classes(cn, '') }, this.monthArray.map(function (str, index) { return (React.createElement("li", { key: str, onClick: function () { return _this.handleClickMonth(index + 1); }, className: classes(cn, 'month') },
            React.createElement("span", { className: classes(cn, 'month-item', {
                    selected: month === index + 1
                }) }, str))); })));
    };
    MonthPanel.displayName = componentName$e;
    MonthPanel.propTypes = {
        month: PropTypes.number,
        onClickMonth: PropTypes.func
    };
    return MonthPanel;
}(React.Component));

var componentName$f = 'YearPanel';
var YearPanel = /** @class */ (function (_super) {
    __extends(YearPanel, _super);
    function YearPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClickYear = function (year, index) {
            var onClickYear = _this.props.onClickYear;
            if (onClickYear) {
                if (index === 0) {
                    onClickYear(year, 'first');
                }
                else if (index === 11) {
                    onClickYear(year, 'last');
                }
                else {
                    onClickYear(year, 'middle');
                }
            }
        };
        _this.renderYear = function () {
            var cn = componentName$f;
            var _a = _this.props, startYear = _a.startYear, year = _a.year;
            return Array.from({ length: 12 }, function (item, n) {
                return startYear + n - 1;
            }).map(function (val, index) {
                return (React.createElement("li", { className: classes(cn, 'year'), key: index, onClick: function () { return _this.handleClickYear(val, index); } },
                    React.createElement("span", { className: classes(cn, 'year-item', { selected: val === year }) }, val)));
            });
        };
        return _this;
    }
    YearPanel.prototype.render = function () {
        return React.createElement("ul", { className: classes(componentName$f, '') }, this.renderYear());
    };
    YearPanel.displayName = componentName$f;
    YearPanel.propTypes = {
        startYear: PropTypes.number,
        year: PropTypes.number,
        onClickYear: PropTypes.func
    };
    return YearPanel;
}(React.Component));

var componentName$g = 'DecadePanel';
var DecadePanel = /** @class */ (function (_super) {
    __extends(DecadePanel, _super);
    function DecadePanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClickDecade = function (decade, index) {
            var onClickDecade = _this.props.onClickDecade;
            if (onClickDecade) {
                if (index === 0) {
                    onClickDecade(decade, 'first');
                }
                else if (index === 11) {
                    onClickDecade(decade, 'last');
                }
                else {
                    onClickDecade(decade, 'middle');
                }
            }
        };
        _this.renderDecade = function () {
            var cn = componentName$g;
            var _a = _this.props, startDecade = _a.startDecade, decade = _a.decade;
            return Array.from({ length: 12 }, function (item, n) {
                return startDecade + (n - 1) * 10;
            }).map(function (val, index) {
                return (React.createElement("li", { className: classes(cn, 'decade'), key: index, onClick: function () { return _this.handleClickDecade(val, index); } },
                    React.createElement("span", { className: classes(cn, 'decade-item', { selected: val === decade }) }, val + '-' + (val + 9))));
            });
        };
        return _this;
    }
    DecadePanel.prototype.render = function () {
        return React.createElement("ul", { className: classes(componentName$g, '') }, this.renderDecade());
    };
    DecadePanel.displayName = componentName$g;
    DecadePanel.propTypes = {
        startDecade: PropTypes.number,
        decade: PropTypes.number,
        onClickDecade: PropTypes.func
    };
    return DecadePanel;
}(React.Component));

var componentName$h = 'DatePicker';
var DatePicker = /** @class */ (function (_super) {
    __extends(DatePicker, _super);
    function DatePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClickDocument = function (e) {
            var calendarVisible = _this.state.calendarVisible;
            var target = e.target;
            if (!_this.datePickerRef.contains(target) && calendarVisible) {
                _this.setState({
                    calendarVisible: false
                });
            }
        };
        _this.saveDatePickerRef = function (node) {
            _this.datePickerRef = node;
        };
        // 监听点击 input 打开 calendar 面板
        _this.handleClickInput = function () {
            _this.setState({
                calendarVisible: true,
                mode: 'date'
            });
        };
        // 调用 onChange 回调
        _this.handleOnChange = function () {
            var onChange = _this.props.onChange;
            var derivedValue = _this.state.derivedValue;
            if (onChange) {
                if (derivedValue) {
                    var year = derivedValue.year, month = derivedValue.month, date = derivedValue.date;
                    onChange(year +
                        '-' +
                        _this.fixNumberToString(month) +
                        '-' +
                        _this.fixNumberToString(date), derivedValue);
                }
                else {
                    onChange('', null);
                }
            }
        };
        // 监听 date 面板点击
        _this.handleClickDate = function (value) {
            _this.setState({
                derivedValue: value,
                pickerValue: value,
                calendarVisible: false
            }, _this.handleOnChange);
        };
        // 监听点击 date 面板设置为今天
        _this.handleClickToday = function () {
            _this.setState({
                derivedValue: parseDateString(),
                pickerValue: parseDateString(),
                calendarVisible: false
            }, _this.handleOnChange);
        };
        // 监听点击清除图标
        _this.handleOnClear = function () {
            _this.setState({
                derivedValue: null,
                pickerValue: parseDateString()
            }, _this.handleOnChange);
        };
        // 监听 month 面板点击
        _this.handleClickMonth = function (month) {
            var pickerValue = _this.state.pickerValue;
            _this.setState({
                pickerValue: Object.assign({}, pickerValue, { month: month }),
                mode: 'date'
            });
        };
        // 监听 year 面板点击
        _this.handleClickYear = function (year, type) {
            var pickerValue = _this.state.pickerValue;
            switch (type) {
                case 'first':
                    _this.setState({
                        pickerValue: Object.assign({}, pickerValue, {
                            year: pickerValue.year - 10
                        })
                    });
                    break;
                case 'middle':
                    _this.setState({
                        pickerValue: Object.assign({}, pickerValue, { year: year }),
                        mode: 'date'
                    });
                    break;
                case 'last':
                    _this.setState({
                        pickerValue: Object.assign({}, pickerValue, {
                            year: pickerValue.year + 10
                        })
                    });
                    break;
            }
        };
        // 监听 decade 面板点击
        _this.handleClickDecade = function (decade, type) {
            var pickerValue = _this.state.pickerValue;
            switch (type) {
                case 'first':
                    _this.setState({
                        pickerValue: Object.assign({}, pickerValue, {
                            year: pickerValue.year - 100
                        })
                    });
                    break;
                case 'middle':
                    _this.setState({
                        pickerValue: Object.assign({}, pickerValue, { year: decade }),
                        mode: 'year'
                    });
                    break;
                case 'last':
                    _this.setState({
                        pickerValue: Object.assign({}, pickerValue, {
                            year: pickerValue.year + 100
                        })
                    });
                    break;
            }
        };
        // 渲染日历面板
        _this.renderCalendarBody = function () {
            var _a = _this.state, mode = _a.mode, pickerValue = _a.pickerValue, derivedValue = _a.derivedValue;
            switch (mode) {
                case 'date':
                    return (React.createElement(DatePanel, { year: pickerValue.year, month: pickerValue.month, value: derivedValue, onClickDate: _this.handleClickDate }));
                case 'month':
                    return (React.createElement(MonthPanel, { month: pickerValue.month, onClickMonth: _this.handleClickMonth }));
                case 'year':
                    return (React.createElement(YearPanel, { startYear: Math.floor(pickerValue.year / 10) * 10, year: pickerValue.year, 
                        // @ts-ignore
                        onClickYear: _this.handleClickYear }));
                case 'decade':
                    return (React.createElement(DecadePanel, { startDecade: Math.floor(pickerValue.year / 100) * 100, decade: Math.floor(pickerValue.year / 10) * 10, 
                        // @ts-ignore
                        onClickDecade: _this.handleClickDecade }));
                default:
                    return null;
            }
        };
        // 监听日期面板点击单箭头更改月份
        _this.handleClickArrow = function (position) {
            var pickerValue = _this.state.pickerValue;
            // month-1
            if (position === 'left') {
                pickerValue.month === 1
                    ? _this.setState({
                        pickerValue: Object.assign({}, pickerValue, {
                            year: pickerValue.year - 1,
                            month: 12
                        })
                    })
                    : _this.setState({
                        pickerValue: Object.assign({}, pickerValue, {
                            month: pickerValue.month - 1
                        })
                    });
                // month+1
            }
            else {
                pickerValue.month === 12
                    ? _this.setState({
                        pickerValue: Object.assign({}, pickerValue, {
                            year: pickerValue.year + 1,
                            month: 1
                        })
                    })
                    : _this.setState({
                        pickerValue: Object.assign({}, pickerValue, {
                            month: pickerValue.month + 1
                        })
                    });
            }
        };
        // 监听 month year decade 面板点击双箭头
        _this.handleClickDouble = function (position) {
            var _a = _this.state, mode = _a.mode, pickerValue = _a.pickerValue;
            // left -
            if (position === 'left') {
                switch (mode) {
                    case 'month':
                        _this.setState({
                            pickerValue: Object.assign({}, pickerValue, {
                                year: pickerValue.year - 1
                            })
                        });
                        break;
                    case 'year':
                        _this.setState({
                            pickerValue: Object.assign({}, pickerValue, {
                                year: pickerValue.year - 10
                            })
                        });
                        break;
                    case 'decade':
                        _this.setState({
                            pickerValue: Object.assign({}, pickerValue, {
                                year: pickerValue.year - 100
                            })
                        });
                        break;
                }
                // right +
            }
            else {
                switch (mode) {
                    case 'month':
                        _this.setState({
                            pickerValue: Object.assign({}, pickerValue, {
                                year: pickerValue.year + 1
                            })
                        });
                        break;
                    case 'year':
                        _this.setState({
                            pickerValue: Object.assign({}, pickerValue, {
                                year: pickerValue.year + 10
                            })
                        });
                        break;
                    case 'decade':
                        _this.setState({
                            pickerValue: Object.assign({}, pickerValue, {
                                year: pickerValue.year + 100
                            })
                        });
                        break;
                }
            }
        };
        // 监听点击动作条中间文字
        _this.handleClickValue = function () {
            var mode = _this.state.mode;
            switch (mode) {
                case 'month':
                    _this.setState({
                        mode: 'year'
                    });
                    break;
                case 'year':
                    _this.setState({
                        mode: 'decade'
                    });
                    break;
            }
        };
        // 渲染动作条
        _this.renderCalendarHandler = function () {
            var _a = _this.state, mode = _a.mode, pickerValue = _a.pickerValue;
            switch (mode) {
                case 'date':
                    return (React.createElement(React.Fragment, null,
                        React.createElement("li", { className: "left" },
                            React.createElement("span", { className: "icon-wrapper", onClick: function () {
                                    return _this.setState({
                                        pickerValue: Object.assign({}, pickerValue, {
                                            year: pickerValue.year - 1
                                        })
                                    });
                                } },
                                React.createElement(Icon, { name: "double", size: 10 })),
                            React.createElement("span", { className: "icon-wrapper", onClick: function () { return _this.handleClickArrow('left'); } },
                                React.createElement(Icon, { name: "right", size: 11 }))),
                        React.createElement("li", { className: "middle" },
                            React.createElement("span", { className: "value", onClick: function () { return _this.setState({ mode: 'year' }); } },
                                pickerValue.year,
                                "\u5E74\u00A0"),
                            React.createElement("span", { className: "value", onClick: function () { return _this.setState({ mode: 'month' }); } },
                                _this.fixNumberToString(pickerValue.month),
                                "\u6708")),
                        React.createElement("li", { className: "right" },
                            React.createElement("span", { className: "icon-wrapper", onClick: function () { return _this.handleClickArrow('right'); } },
                                React.createElement(Icon, { name: "right", size: 11 })),
                            React.createElement("span", { className: "icon-wrapper", onClick: function () {
                                    return _this.setState({
                                        pickerValue: Object.assign({}, pickerValue, {
                                            year: pickerValue.year + 1
                                        })
                                    });
                                } },
                                React.createElement(Icon, { name: "double", size: 10 })))));
                default:
                    return (React.createElement(React.Fragment, null,
                        React.createElement("li", { className: "left" },
                            React.createElement("span", { className: "icon-wrapper", onClick: function () { return _this.handleClickDouble('left'); } },
                                React.createElement(Icon, { name: "double", size: 10 }))),
                        React.createElement("li", { className: "middle" },
                            React.createElement("span", { className: classes(componentName$h, ['value'], {
                                    decade: mode === 'decade'
                                }), onClick: _this.handleClickValue }, _this.getHandleBarText())),
                        React.createElement("li", { className: "right" },
                            React.createElement("span", { className: "icon-wrapper", onClick: function () { return _this.handleClickDouble('right'); } },
                                React.createElement(Icon, { name: "double", size: 10 })))));
            }
        };
        // 动作条中间文字
        _this.getHandleBarText = function () {
            var _a = _this.state, mode = _a.mode, pickerValue = _a.pickerValue;
            if (mode === 'year') {
                var year = Math.floor(pickerValue.year / 10) * 10;
                return year + '-' + (year + 9);
            }
            else if (mode === 'month') {
                return pickerValue.year + '';
            }
            else if (mode === 'decade') {
                var year = Math.floor(pickerValue.year / 100) * 100;
                return year + '-' + (year + 99);
            }
            return '';
        };
        // 获取 input 渲染文字
        _this.getStringFromDerivedValue = function () {
            var derivedValue = _this.state.derivedValue;
            if (!derivedValue) {
                return '';
            }
            else {
                var year = derivedValue.year, month = derivedValue.month, date = derivedValue.date;
                return (year +
                    '-' +
                    _this.fixNumberToString(month) +
                    '-' +
                    _this.fixNumberToString(date));
            }
        };
        // 1 => '01'
        _this.fixNumberToString = function (n) {
            if (n > 9) {
                return n + '';
            }
            else {
                return "0" + n;
            }
        };
        var defaultValue = props.defaultValue, defaultPickerValue = props.defaultPickerValue;
        // 是否可被解析
        var valueCanBeParsed = defaultValue && !isNaN(Date.parse(defaultValue));
        var pickerValueCanBeParsed = defaultPickerValue && !isNaN(Date.parse(defaultPickerValue));
        _this.state = {
            derivedValue: valueCanBeParsed ? parseDateString(defaultValue) : null,
            pickerValue: pickerValueCanBeParsed
                ? parseDateString(defaultPickerValue)
                : parseDateString(),
            calendarVisible: false,
            mode: 'date',
            startYear: 0,
            startDecade: 0
        };
        return _this;
    }
    DatePicker.getDerivedStateFromProps = function (nextProps, prevState) {
        if (nextProps.value && !isNaN(Date.parse(nextProps.value))) {
            return {
                derivedValue: parseDateString(nextProps.value),
                pickerValue: parseDateString(nextProps.value)
            };
        }
        return null;
    };
    DatePicker.prototype.componentDidMount = function () {
        document.addEventListener('click', this.handleClickDocument, true); // 第三个参数为 true，让事件在捕获阶段触发，重要，否则被点击元素被移除的话会导致判断不准
    };
    DatePicker.prototype.componentDidUpdate = function (prevProps, prevState) {
        var onOpenChange = this.props.onOpenChange;
        var calendarVisible = this.state.calendarVisible;
        if (onOpenChange && prevState.calendarVisible !== calendarVisible) {
            onOpenChange(calendarVisible);
        }
    };
    DatePicker.prototype.componentWillUnmount = function () {
        document.removeEventListener('click', this.handleClickDocument, true);
    };
    DatePicker.prototype.render = function () {
        var cn = componentName$h;
        var _a = this.props, placeholder = _a.placeholder, footer = _a.footer, className = _a.className, style = _a.style, zIndex = _a.zIndex;
        var _b = this.state, calendarVisible = _b.calendarVisible, mode = _b.mode;
        return (React.createElement("div", { className: classes(cn, ''), ref: this.saveDatePickerRef },
            React.createElement("span", { className: classes(cn, 'input-wrapper') },
                placeholder && !this.getStringFromDerivedValue() && (React.createElement("span", { className: classes(cn, 'placeholder') }, placeholder)),
                React.createElement("input", { type: "text", value: this.getStringFromDerivedValue(), className: classes(cn, 'input', [className]), style: style, readOnly: true, onClick: this.handleClickInput }),
                React.createElement("span", { className: classes(cn, 'icon-wrapper') },
                    React.createElement(Icon, { name: "calendar", size: 16 })),
                this.getStringFromDerivedValue() && (React.createElement("span", { className: classes(cn, 'icon-wrapper', ['close']), onClick: this.handleOnClear },
                    React.createElement(Icon, { name: "close", size: 12 })))),
            React.createElement(Transition, { visible: calendarVisible, beforeEnter: { height: '260px', opacity: 0 }, afterEnter: { height: '330px', opacity: 1 } },
                React.createElement("div", { className: classes(cn, 'calendar'), style: { zIndex: zIndex } },
                    placeholder && !this.getStringFromDerivedValue() && (React.createElement("span", { className: "calendar-placeholder" }, placeholder)),
                    React.createElement("input", { type: "text", value: this.getStringFromDerivedValue(), className: "calendar-input", readOnly: true }),
                    React.createElement("ul", { className: "calendar-handlebar" }, this.renderCalendarHandler()),
                    React.createElement("div", { className: "calendar-body" }, this.renderCalendarBody()),
                    mode === 'date' && (React.createElement("div", { className: "calendar-footer" }, footer ? (footer) : (React.createElement("span", { className: "footer-text", onClick: this.handleClickToday }, "\u4ECA\u00A0\u5929"))))))));
    };
    DatePicker.displayName = componentName$h;
    DatePicker.defaultProps = {
        zIndex: 80
    };
    DatePicker.propTypes = {
        value: PropTypes.string,
        defaultValue: PropTypes.string,
        defaultPickerValue: PropTypes.string,
        placeholder: PropTypes.string,
        footer: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        onChange: PropTypes.func,
        onOpenChange: PropTypes.func,
        zIndex: PropTypes.number,
        className: PropTypes.string,
        style: PropTypes.object
    };
    return DatePicker;
}(React.Component));

var componentName$i = 'Col';
var Col = /** @class */ (function (_super) {
    __extends(Col, _super);
    function Col() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getColClassName = function () {
            var _a = _this.props, gutter = _a.gutter, span = _a.span, _b = _a.offset, offset = _b === void 0 ? 0 : _b, children = _a.children, className = _a.className, style = _a.style, options = __rest(_a, ["gutter", "span", "offset", "children", "className", "style"]);
            var classNameArr = ["col-span-" + span, "col-offset-" + offset];
            Object.keys(options).forEach(function (key) {
                if (options[key]) {
                    var _a = options[key], optionSpan = _a.span, _b = _a.offset, optionOffset = _b === void 0 ? 0 : _b;
                    classNameArr.push(key + "-col-span-" + optionSpan);
                    classNameArr.push(key + "-col-offset-" + optionOffset);
                }
            });
            if (className) {
                classNameArr.push(className);
            }
            return classNameArr;
        };
        return _this;
    }
    Col.prototype.render = function () {
        var cn = componentName$i;
        var _a = this.props, gutter = _a.gutter, span = _a.span, offset = _a.offset, sm = _a.sm, md = _a.md, lg = _a.lg, xl = _a.xl, className = _a.className, style = _a.style, children = _a.children, rest = __rest(_a, ["gutter", "span", "offset", "sm", "md", "lg", "xl", "className", "style", "children"]);
        return (React.createElement("div", __assign({ className: classes(cn, '', this.getColClassName()) }, rest, { style: __assign({ paddingLeft: gutter / 2 + "px", paddingRight: gutter / 2 + "px" }, style) }), children));
    };
    Col.displayName = componentName$i;
    Col.defaultProps = {
        gutter: 0
    };
    Col.propTypes = {
        gutter: PropTypes.number,
        span: PropTypes.number,
        offset: PropTypes.number,
        className: PropTypes.string,
        style: PropTypes.object
    };
    return Col;
}(React.Component));

var componentName$j = 'Row';
var Row = /** @class */ (function (_super) {
    __extends(Row, _super);
    function Row() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Row.prototype.render = function () {
        var cn = componentName$j;
        var _a = this.props, gutter = _a.gutter, className = _a.className, style = _a.style, children = _a.children, rest = __rest(_a, ["gutter", "className", "style", "children"]);
        return (React.createElement("div", __assign({ className: classes(cn, '', [className]) }, rest, { style: __assign({ marginLeft: -gutter / 2 + "px", marginRight: -gutter / 2 + "px" }, style) }), React.Children.map(children, function (child) {
            return React.cloneElement(child, {
                gutter: gutter
            });
        })));
    };
    Row.displayName = componentName$j;
    Row.defaultProps = {
        gutter: 0
    };
    Row.propTypes = {
        gutter: PropTypes.number,
        className: PropTypes.string,
        style: PropTypes.object
    };
    return Row;
}(React.Component));

var spikeUniqueIdMap = {};
function uniqueId(prefix) {
    if (prefix === void 0) { prefix = "$spike$"; }
    if (!spikeUniqueIdMap[prefix]) {
        spikeUniqueIdMap[prefix] = 0;
    }
    spikeUniqueIdMap[prefix]++;
    return prefix + ("" + spikeUniqueIdMap[prefix]);
}

var messageContainerMap = {};
function addMessageContainer(messageId, container) {
    messageContainerMap[messageId] = container;
}
function ensureUniqueMessage(messageId) {
    if (messageContainerMap[messageId]) {
        throw new Error("Dunplicate messageId found: " + messageId);
    }
}
function openMessage(options, mode) {
    var messageId = uniqueId('$spike-message$-');
    ensureUniqueMessage(messageId);
    var content = options.content, _a = options.duration, duration = _a === void 0 ? 3 : _a, _b = options.top, top = _b === void 0 ? 24 : _b, _c = options.showIcon, showIcon = _c === void 0 ? true : _c, onClose = options.onClose, className = options.className, style = options.style;
    var container = document.createElement('div');
    document.body.append(container);
    var messageInstance = React__default['default'].createElement(Message, {
        mode: mode,
        content: content,
        duration: duration,
        top: top,
        showIcon: showIcon,
        messageId: messageId,
        onClose: onClose,
        className: className,
        style: style
    });
    ReactDOM__default['default'].render(messageInstance, container);
    addMessageContainer(messageId, container);
}
function removeMessage(messageId) {
    if (!messageContainerMap[messageId])
        return;
    var container = messageContainerMap[messageId];
    ReactDOM__default['default'].unmountComponentAtNode(container);
    container.remove();
    delete messageContainerMap[messageId];
}
function info(options) {
    openMessage(options, 'info');
}
function success(options) {
    openMessage(options, 'success');
}
function warning(options) {
    openMessage(options, 'warning');
}
function error(options) {
    openMessage(options, 'error');
}

var componentName$k = 'Message';
var Message = /** @class */ (function (_super) {
    __extends(Message, _super);
    function Message() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { visible: false };
        _this.close = function () {
            _this.setState({ visible: false });
            _this.leaveTimeout = setTimeout(function () {
                _this.afterLeave();
            }, 300);
        };
        _this.afterLeave = function () {
            var _a = _this.props, messageId = _a.messageId, onClose = _a.onClose;
            Message.removeMessage(messageId);
            if (onClose) {
                onClose();
            }
        };
        return _this;
    }
    Message.prototype.componentDidMount = function () {
        var _this = this;
        var duration = this.props.duration;
        this.setState({ visible: true });
        if (duration) {
            setTimeout(function () {
                _this.close();
            }, duration * 1000);
        }
    };
    Message.prototype.render = function () {
        var cn = componentName$k;
        var _a = this.props, mode = _a.mode, top = _a.top, content = _a.content, showIcon = _a.showIcon, duration = _a.duration, className = _a.className, style = _a.style;
        var visible = this.state.visible;
        return (React.createElement(Transition, { visible: visible, beforeEnter: {
                transform: "translateX(-50%) translateY(" + -top + "px)",
                opacity: 0
            }, afterEnter: {
                transform: "translateX(-50%) translateY(0)",
                opacity: 1
            } },
            React.createElement("div", { className: classes(cn, '', [className], { 'with-icon': showIcon }), style: Object.assign({}, style, { top: top + "px" }) },
                React.createElement("span", { className: classes(cn, 'icon-wrapper', [mode]) },
                    React.createElement(Icon, { name: mode, size: 16 })),
                content,
                duration === 0 && (React.createElement("span", { className: classes(cn, 'close'), onClick: this.close },
                    React.createElement(Icon, { name: "close", size: 12 }))))));
    };
    Message.prototype.componentWillUnmount = function () {
        var _a = this, closeTimeout = _a.closeTimeout, leaveTimeout = _a.leaveTimeout;
        if (closeTimeout) {
            window.clearTimeout(closeTimeout);
        }
        if (leaveTimeout) {
            window.clearTimeout(leaveTimeout);
        }
    };
    Message.displayName = componentName$k;
    Message.info = info;
    Message.success = success;
    Message.warning = warning;
    Message.error = error;
    Message.removeMessage = removeMessage;
    return Message;
}(React.Component));

var modalContainerMap = {};
function addModalContainer(modalId, container) {
    modalContainerMap[modalId] = container;
}
function ensureUniqueModal(modalId) {
    if (modalContainerMap[modalId]) {
        throw new Error("Duplicate modalId found: " + modalId);
    }
}
function openModal(options) {
    var modalId = uniqueId('$spike-modal$-');
    ensureUniqueModal(modalId);
    return new Promise(function (resolve, reject) {
        var title = options.title, content = options.content, okText = options.okText, _a = options.okType, okType = _a === void 0 ? 'primary' : _a, cancelText = options.cancelText, _b = options.cancelType, cancelType = _b === void 0 ? 'default' : _b, maskClosable = options.maskClosable, afterClose = options.afterClose, className = options.className, style = options.style;
        var container = document.createElement('div');
        document.body.append(container);
        var modalInstance = React__default['default'].createElement(Modal, {
            visible: true,
            mode: 'imperative',
            title: title,
            content: content,
            okText: okText,
            okType: okType,
            cancelText: cancelText,
            cancelType: cancelType,
            maskClosable: maskClosable,
            promiseHandler: { resolve: resolve, reject: reject },
            modalId: modalId,
            afterClose: afterClose,
            className: className,
            style: style
        });
        ReactDOM__default['default'].render(modalInstance, container);
        addModalContainer(modalId, container);
    });
}
function removeModal(modalId) {
    if (!modalContainerMap[modalId])
        return;
    var container = modalContainerMap[modalId];
    ReactDOM__default['default'].unmountComponentAtNode(container);
    container.remove();
    delete modalContainerMap[modalId];
}

var componentName$l = 'Modal';
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { modalVisible: _this.props.mode === 'declarative' };
        // 获取滚动条宽度
        _this.getScrollBarWidth = function () {
            return (window.innerWidth - document.body.clientWidth ||
                document.documentElement.clientHeight);
        };
        _this.afterLeave = function () {
            // 关闭后还原
            document.body.style.overflow = _this.bodyOverflow;
            document.body.style.paddingRight = _this.bodyPaddingRight;
            var _a = _this.props, modalId = _a.modalId, afterClose = _a.afterClose;
            if (afterClose) {
                afterClose();
            }
            if (modalId) {
                Modal.removeModal(modalId);
            }
        };
        // 'imperative' 模式下关闭 modal
        _this.closeModal = function () {
            _this.setState({
                modalVisible: false
            }, function () {
                _this.timeout = setTimeout(function () {
                    _this.afterLeave();
                }, 300);
            });
        };
        _this.handleOnConfirm = function (e) {
            var _a = _this.props, onConfirm = _a.onConfirm, mode = _a.mode, promiseHandler = _a.promiseHandler;
            if (mode === 'declarative') {
                _this.timeout = setTimeout(function () {
                    _this.afterLeave();
                }, 300);
                if (onConfirm) {
                    onConfirm(e);
                }
            }
            if (mode === 'imperative' && promiseHandler) {
                _this.closeModal();
                promiseHandler.resolve();
            }
        };
        _this.handleOnCancel = function (e) {
            var _a = _this.props, onCancel = _a.onCancel, mode = _a.mode, promiseHandler = _a.promiseHandler;
            if (mode === 'declarative') {
                _this.timeout = setTimeout(function () {
                    _this.afterLeave();
                }, 300);
                if (onCancel) {
                    onCancel(e);
                }
            }
            if (mode === 'imperative' && promiseHandler) {
                _this.closeModal();
                promiseHandler.reject();
            }
        };
        return _this;
    }
    Modal.prototype.componentDidMount = function () {
        var visible = this.props.visible;
        var modalVisible = this.state.modalVisible;
        if (visible && modalVisible) {
            this.bodyPaddingRight = document.body.style.paddingRight;
        }
        if (!modalVisible) {
            this.setState({
                modalVisible: true
            });
        }
    };
    Modal.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _a = this.props, mode = _a.mode, visible = _a.visible;
        var modalVisible = this.state.modalVisible;
        // 声明式调用
        if (mode === 'declarative') {
            // false => true 打开
            if (visible) {
                this.bodyOverflow = document.body.style.overflow;
                this.bodyPaddingRight = document.body.style.paddingRight;
                document.body.style.paddingRight = this.getScrollBarWidth() + 'px';
                document.body.style.overflow = 'hidden';
            }
        }
        else if (mode === 'imperative') {
            // 命令式调用
            // false => true 打开
            if (!prevState.modalVisible && modalVisible) {
                this.bodyOverflow = document.body.style.overflow;
                this.bodyPaddingRight = document.body.style.paddingRight;
                document.body.style.paddingRight = this.getScrollBarWidth() + 'px';
                document.body.style.overflow = 'hidden';
            }
        }
    };
    Modal.prototype.render = function () {
        var cn = componentName$l;
        var _a = this.props, title = _a.title, footer = _a.footer, visible = _a.visible, mode = _a.mode, content = _a.content, okText = _a.okText, okType = _a.okType, cancelText = _a.cancelText, cancelType = _a.cancelType, className = _a.className, style = _a.style, children = _a.children;
        var modalVisible = this.state.modalVisible;
        return ReactDOM__default['default'].createPortal(React__default['default'].createElement(React__default['default'].Fragment, null,
            React__default['default'].createElement(Transition, { visible: visible && modalVisible, beforeEnter: { opacity: 0 }, afterEnter: { opacity: 0.7 } },
                React__default['default'].createElement("div", { className: classes(cn, 'mask') })),
            React__default['default'].createElement(Transition, { visible: visible && modalVisible, beforeEnter: {
                    opacity: 0,
                    transform: 'translateX(-50%) translateY(-50%) scale(0)',
                    top: '50%'
                }, afterEnter: {
                    opacity: 1,
                    transform: 'translateX(-50%) translateY(-50%) scale(1)',
                    top: '30%'
                } },
                React__default['default'].createElement("div", { className: classes(cn, 'content', [className]), style: style },
                    React__default['default'].createElement("div", { className: classes(cn, 'header') }, title || 'Modal'),
                    React__default['default'].createElement("div", { className: classes(cn, 'body') }, mode === 'declarative' ? children : content),
                    React__default['default'].createElement("div", { className: classes(cn, 'footer') }, footer || (React__default['default'].createElement(React__default['default'].Fragment, null,
                        React__default['default'].createElement(Button, { style: { marginRight: '8px' }, onClick: this.handleOnCancel, type: cancelType }, cancelText),
                        React__default['default'].createElement(Button, { type: okType, onClick: this.handleOnConfirm }, okText))))))), document.body);
    };
    Modal.prototype.componentWillUnmount = function () {
        if (this.timeout) {
            window.clearTimeout(this.timeout);
        }
    };
    Modal.displayName = componentName$l;
    Modal.openModal = openModal;
    Modal.removeModal = removeModal;
    Modal.defaultProps = {
        mode: 'declarative',
        maskClosable: false,
        okText: '确 定',
        okType: 'primary',
        cancelText: '取 消',
        cancelType: 'default'
    };
    return Modal;
}(React.Component));

function calculatePagerPages(current, total) {
    var arr = getUniqueArray(getOriginArray(current, total)).sort(function (a, b) { return a - b; });
    var base = [];
    var pages = arr.reduce(function (prev, item) {
        prev.push(item);
        var length = prev.length;
        var temp = prev[length - 2];
        if (temp && item - temp > 1) {
            prev.splice(prev.length - 1, 0, "...");
        }
        return prev;
    }, base);
    return pages.filter(function (n) { return (n >= 1 && n <= total) || n === "..."; });
}
function getOriginArray(current, total) {
    if (current <= 4) {
        return [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            current - 1,
            current - 2,
            current,
            current + 1,
            current + 2,
            total
        ];
    }
    if (current >= total - 3) {
        return [
            1,
            current - 1,
            current - 2,
            current,
            current + 1,
            current + 2,
            total - 6,
            total - 5,
            total - 4,
            total - 3,
            total - 2,
            total - 1,
            total
        ];
    }
    return [
        1,
        current - 1,
        current - 2,
        current,
        current + 1,
        current + 2,
        total
    ];
}
function getUniqueArray(arr) {
    var map = {};
    var results = [];
    arr.forEach(function (item) {
        if (!map[item]) {
            results.push(item);
            map[item] = true;
        }
    });
    return results;
}

var componentName$m = 'Pager';
var Pager = /** @class */ (function (_super) {
    __extends(Pager, _super);
    function Pager(props) {
        var _this = _super.call(this, props) || this;
        // 监听点击省略号
        _this.handleClickDot = function (index) {
            var derivedCurrent = _this.state.derivedCurrent;
            var total = _this.props.total;
            // prev
            if (index === 1) {
                var n = derivedCurrent - 5 < 1 ? 1 : derivedCurrent - 5;
                _this.setState({
                    derivedCurrent: n
                });
                _this.handleOnChange(n);
            }
            else {
                var n = derivedCurrent + 5 > total ? total : derivedCurrent + 5;
                _this.setState({
                    derivedCurrent: n
                });
                _this.handleOnChange(n);
            }
        };
        _this.handleOnChange = function (n) {
            var onChange = _this.props.onChange;
            if (onChange) {
                onChange(n);
            }
        };
        _this.state = {
            derivedCurrent: props.defaultCurrent || 1,
            derivedTotal: props.total
        };
        return _this;
    }
    Pager.getDerivedStateFromProps = function (nextProps, prevState) {
        var current = nextProps.current, total = nextProps.total;
        var derivedCurrent = prevState.derivedCurrent, derivedTotal = prevState.derivedTotal;
        var shouldChangeCurrent = 'current' in nextProps && current !== derivedCurrent;
        var shouldChangeTotal = 'total' in nextProps && total !== derivedTotal;
        if (shouldChangeCurrent && shouldChangeTotal) {
            return { derivedCurrent: current, derivedTotal: total };
        }
        else if (shouldChangeCurrent && !shouldChangeTotal) {
            return { derivedCurrent: current };
        }
        else if (!shouldChangeCurrent && shouldChangeTotal) {
            return { derivedTotal: total };
        }
        return null;
    };
    Pager.prototype.handleClickNum = function (n) {
        if (n !== this.state.derivedCurrent) {
            this.setState({
                derivedCurrent: n
            });
            this.handleOnChange(n);
        }
    };
    Pager.prototype.handleSkip = function (payload) {
        var derivedCurrent = this.state.derivedCurrent;
        var total = this.props.total;
        if (derivedCurrent + payload > total || derivedCurrent + payload < 1) {
            return;
        }
        else {
            this.setState({
                derivedCurrent: derivedCurrent + payload
            });
            this.handleOnChange(derivedCurrent + payload);
        }
    };
    Pager.prototype.render = function () {
        var _this = this;
        var cn = componentName$m;
        var _a = this.props, simple = _a.simple, size = _a.size, className = _a.className, style = _a.style, hideOnSinglePage = _a.hideOnSinglePage;
        var _b = this.state, derivedCurrent = _b.derivedCurrent, derivedTotal = _b.derivedTotal;
        var pages = calculatePagerPages(derivedCurrent, derivedTotal);
        return derivedTotal === 1 && hideOnSinglePage ? null : (React.createElement("ul", { className: classes(cn, '', [size, className], { simple: simple }), style: style },
            React.createElement("li", { className: classes(cn, 'num', { disabled: derivedCurrent < 2 }), onClick: function () { return _this.handleSkip(-1); } },
                React.createElement(Icon, { name: "arrow", className: classes(cn, 'icon', ['prev']), size: 10 })),
            pages.map(function (item, index) {
                return item === '...' ? (React.createElement("li", { className: classes(cn, 'num', ['seprator']), key: item + "-" + index },
                    React.createElement(Icon, { name: "dot", onClick: function () { return _this.handleClickDot(index); } }))) : (React.createElement("li", { className: classes(cn, 'num', {
                        active: derivedCurrent === item
                    }), key: item + "-" + index, onClick: function () { return _this.handleClickNum(item); } }, item));
            }),
            React.createElement("li", { className: classes(cn, 'num', {
                    disabled: derivedCurrent >= derivedTotal
                }), onClick: function () { return _this.handleSkip(1); } },
                React.createElement(Icon, { name: "arrow", className: classes(cn, 'icon'), size: 10 }))));
    };
    Pager.displayName = componentName$m;
    Pager.defaultProps = {
        simple: false,
        size: 'default',
        defaultCurrent: 1,
        hideOnSinglePage: false
    };
    Pager.propTypes = {
        current: PropTypes.number,
        total: PropTypes.number.isRequired,
        onChange: PropTypes.func,
        simple: PropTypes.bool,
        size: PropTypes.oneOf(['small', 'default']),
        defaultCurrent: PropTypes.number,
        className: PropTypes.string,
        style: PropTypes.object,
        hideOnSinglePage: PropTypes.bool
    };
    return Pager;
}(React.Component));

var componentName$n = 'Popover';
var Popover = /** @class */ (function (_super) {
    __extends(Popover, _super);
    function Popover(props) {
        var _this = _super.call(this, props) || this;
        _this.delay = 200;
        _this.saveWrapperRef = function (node) {
            _this.wrapperRef = node;
        };
        _this.saveContentRef = function (node) {
            _this.contentRef = node;
        };
        _this.saveArrowRef = function (node) {
            _this.arrowRef = node;
        };
        // 设置箭头图标颜色
        _this.setArrowBorderColor = function () {
            var _a = _this, contentRef = _a.contentRef, arrowRef = _a.arrowRef;
            var position = _this.props.position;
            if (!contentRef) {
                return;
            }
            var color = window.getComputedStyle(contentRef).backgroundColor;
            arrowRef.style.borderTopColor = color;
            arrowRef.style.borderBottomColor = color;
            arrowRef.style.borderLeftColor = color;
            arrowRef.style.borderRightColor = color;
            switch (position) {
                case 'top':
                    arrowRef.style.borderTopColor = 'transparent';
                    arrowRef.style.borderLeftColor = 'transparent';
                    break;
                case 'bottom':
                    arrowRef.style.borderBottomColor = 'transparent';
                    arrowRef.style.borderRightColor = 'transparent';
                    break;
                case 'left':
                    arrowRef.style.borderBottomColor = 'transparent';
                    arrowRef.style.borderLeftColor = 'transparent';
                    break;
                case 'right':
                    arrowRef.style.borderTopColor = 'transparent';
                    arrowRef.style.borderRightColor = 'transparent';
                    break;
            }
        };
        // 定位 pop
        _this.locateContent = function () {
            var _a = _this, wrapperRef = _a.wrapperRef, triggerNode = _a.triggerNode;
            var _b = triggerNode.getBoundingClientRect(), triggerTop = _b.top, triggerLeft = _b.left, triggerRight = _b.right, triggerBottom = _b.bottom;
            var triggerWidth = triggerRight - triggerLeft;
            var triggerHeight = triggerBottom - triggerTop;
            var scrollX = window.scrollX, scrollY = window.scrollY;
            var position = _this.props.position;
            switch (position) {
                case 'top':
                    wrapperRef.style.left = triggerLeft + scrollX + triggerWidth / 2 + 'px';
                    wrapperRef.style.top = triggerTop + scrollY + 'px';
                    break;
                case 'bottom':
                    wrapperRef.style.left = triggerLeft + scrollX + triggerWidth / 2 + 'px';
                    wrapperRef.style.top = triggerBottom + scrollY + 'px';
                    break;
                case 'left':
                    wrapperRef.style.left = triggerLeft + scrollX + 'px';
                    wrapperRef.style.top = triggerTop + triggerHeight / 2 + scrollY + 'px';
                    break;
                case 'right':
                    wrapperRef.style.left = triggerRight + scrollX + 'px';
                    wrapperRef.style.top = triggerTop + triggerHeight / 2 + scrollY + 'px';
                    break;
            }
        };
        _this.handleClick = function (e) {
            _this.triggerNode = e.currentTarget;
            var derivedVisible = _this.state.derivedVisible;
            var trigger = _this.props.trigger;
            if (!derivedVisible && trigger === 'click') {
                _this.open();
            }
        };
        // 监听点击 document
        _this.handleClickDocument = function (e) {
            var popClosable = _this.props.popClosable;
            if (popClosable) {
                _this.close();
                return;
            }
            var target = e.target;
            if (!_this.wrapperRef.contains(target)) {
                _this.close();
            }
        };
        _this.handleMouseEnter = function (e) {
            _this.triggerNode = e.currentTarget;
            var trigger = _this.props.trigger;
            if (trigger === 'hover') {
                _this.open();
                if (_this.timeout) {
                    window.clearTimeout(_this.timeout);
                    _this.timeout = null;
                }
            }
        };
        _this.handleMouseLeave = function (e) {
            var trigger = _this.props.trigger;
            if (trigger === 'hover') {
                _this.timeout = setTimeout(function () {
                    _this.close();
                }, _this.delay);
            }
        };
        _this.handleMouseEnterPop = function (e) {
            var trigger = _this.props.trigger;
            if (trigger === 'hover' && _this.timeout) {
                window.clearTimeout(_this.timeout);
                _this.timeout = null;
            }
        };
        _this.handleMouseLeavePop = function (e) {
            var trigger = _this.props.trigger;
            if (trigger === 'hover' && !_this.timeout) {
                _this.timeout = setTimeout(function () {
                    _this.close();
                }, _this.delay);
            }
        };
        _this.handleFocus = function (e) {
            _this.triggerNode = e.currentTarget;
            var trigger = _this.props.trigger;
            if (trigger === 'focus') {
                _this.open();
            }
        };
        _this.handleBlur = function (e) {
            var trigger = _this.props.trigger;
            if (trigger === 'focus') {
                _this.close();
            }
        };
        _this.open = function () {
            _this.setState({
                derivedVisible: true
            });
            var onVisibleChange = _this.props.onVisibleChange;
            if (onVisibleChange) {
                onVisibleChange(true);
            }
        };
        _this.close = function () {
            _this.setState({
                derivedVisible: false
            });
            var onVisibleChange = _this.props.onVisibleChange;
            if (onVisibleChange) {
                onVisibleChange(false);
            }
        };
        // 获取监听 props
        _this.getChildrenEventHandlers = function () {
            var _a = _this, onClick = _a.handleClick, onMouseEnter = _a.handleMouseEnter, onMouseLeave = _a.handleMouseLeave, onFocus = _a.handleFocus, onBlur = _a.handleBlur;
            var trigger = _this.props.trigger;
            if (trigger === 'click') {
                return { onClick: onClick };
            }
            else if (trigger === 'hover') {
                return { onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave };
            }
            return { onFocus: onFocus, onBlur: onBlur };
        };
        _this.state = {
            derivedVisible: props.defaultVisible
        };
        return _this;
    }
    Popover.getDerivedStateFromProps = function (nextProps, prevState) {
        var visible = nextProps.visible;
        if ('visible' in nextProps) {
            return { derivedVisible: visible };
        }
        return null;
    };
    Popover.prototype.componentDidMount = function () {
        if (this.state.derivedVisible) {
            this.locateContent();
            this.setArrowBorderColor();
        }
    };
    Popover.prototype.componentDidUpdate = function (prevProps, prevState) {
        var prevDerivedVisible = prevState.derivedVisible;
        var derivedVisible = this.state.derivedVisible;
        var trigger = this.props.trigger;
        // false => true，打开，定位
        if (!prevDerivedVisible && derivedVisible) {
            this.locateContent();
            this.setArrowBorderColor();
            // 触发方式是 'click', 监听
            if (trigger === 'click') {
                document.addEventListener('click', this.handleClickDocument);
            }
        }
        // true => false，关闭，触发方式是 'click' 时移除监听
        if (prevDerivedVisible && !derivedVisible && trigger === 'click') {
            document.removeEventListener('click', this.handleClickDocument);
        }
    };
    Popover.prototype.componentWillUnmount = function () {
        document.removeEventListener('click', this.handleClickDocument);
        if (this.timeout) {
            window.clearTimeout(this.timeout);
        }
    };
    // 渲染 children 时传递监听 props
    Popover.prototype.renderChildren = function () {
        var children = this.props.children;
        if (!children) {
            return null;
        }
        return typeof children === 'string' ? (React.createElement("span", __assign({}, this.getChildrenEventHandlers()), children)) : (React.cloneElement(React.Children.only(children), this.getChildrenEventHandlers()));
    };
    Popover.prototype.render = function () {
        var cn = componentName$n;
        var _a = this.props, content = _a.content, position = _a.position, className = _a.className, style = _a.style;
        var derivedVisible = this.state.derivedVisible;
        var wrapperClassName = classes(cn, 'content-wrapper', [
            'position-' + position
        ]);
        var contentClassName = classes(cn, 'content', [className]);
        return (React.createElement(React.Fragment, null,
            React.createElement(Transition, { visible: derivedVisible, beforeEnter: { opacity: 0 }, afterEnter: { opacity: 1 } },
                React.createElement(React.Fragment, null, ReactDOM.createPortal(React.createElement("div", { className: wrapperClassName, ref: this.saveWrapperRef, onMouseEnter: this.handleMouseEnterPop, onMouseLeave: this.handleMouseLeavePop },
                    React.createElement("div", { className: contentClassName, style: style, ref: this.saveContentRef },
                        content,
                        React.createElement("div", { className: classes(cn, 'content-arrow', [
                                "position-" + position
                            ]), ref: this.saveArrowRef }))), document.body))),
            this.renderChildren()));
    };
    Popover.displayName = componentName$n;
    Popover.defaultProps = {
        trigger: 'hover',
        position: 'top',
        defaultVisible: false,
        popClosable: false
    };
    Popover.propTypes = {
        content: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
            .isRequired,
        trigger: PropTypes.oneOf(['click', 'hover', 'focus']),
        position: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
        defaultVisible: PropTypes.bool,
        visible: PropTypes.bool,
        onVisibleChange: PropTypes.func,
        className: PropTypes.string,
        style: PropTypes.object,
        popClosable: PropTypes.bool
    };
    return Popover;
}(React.Component));

var componentName$o = 'Spin';
var Spin = /** @class */ (function (_super) {
    __extends(Spin, _super);
    function Spin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Spin.prototype.render = function () {
        var cn = componentName$o;
        var _a = this.props, spinning = _a.spinning, size = _a.size, tip = _a.tip, className = _a.className, style = _a.style, children = _a.children;
        return (React.createElement("div", { className: classes(cn, 'wrapper', [className], { 'with-children': !!children }), style: style },
            React.createElement("div", { className: classes(cn, 'mask', { active: !!children, spinning: spinning }) }),
            React.createElement(Transition, { visible: !!spinning, beforeEnter: { opacity: 0 }, afterEnter: { opacity: 1 } },
                React.createElement("div", { className: classes(cn, 'container', { 'with-tip': !!tip, 'with-children': !!children }) },
                    React.createElement(Icon, { className: classes(cn, ''), size: size, name: "spin" }),
                    tip && React.createElement("span", { className: classes(cn, 'tip') }, tip))),
            children));
    };
    Spin.displayName = componentName$o;
    Spin.defaultProps = {
        spinning: true,
        size: 16
    };
    return Spin;
}(React.Component));

var componentName$p = 'Switch';
var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    function Switch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            derivedChecked: _this.props.checked || false
        };
        _this.handleClick = function (e) {
            var _a = _this.props, disabled = _a.disabled, onChange = _a.onChange;
            if (disabled)
                return;
            var derivedChecked = _this.state.derivedChecked;
            _this.setState({ derivedChecked: !derivedChecked });
            if (onChange) {
                onChange(!derivedChecked, e);
            }
        };
        return _this;
    }
    Switch.getDerivedStateFromProps = function (nextProps, prevState) {
        var checked = nextProps.checked, controlled = nextProps.controlled;
        var derivedChecked = prevState.derivedChecked;
        if ('checked' in nextProps && checked !== derivedChecked && controlled) {
            return { derivedChecked: checked };
        }
        return null;
    };
    Switch.prototype.render = function () {
        var cn = componentName$p;
        var _a = this.props, size = _a.size, disabled = _a.disabled, style = _a.style, className = _a.className, controlled = _a.controlled;
        var derivedChecked = this.state.derivedChecked;
        var switchClassName = classes(cn, '', [className, size], { checked: derivedChecked, disabled: disabled });
        return (React.createElement("span", { className: switchClassName, style: style, onClick: controlled ? null : this.handleClick },
            React.createElement("span", { className: classes(cn, 'core') })));
    };
    Switch.diaplayName = componentName$p;
    Switch.defaultProps = {
        size: 'dafault',
        disabled: false,
        controlled: false
    };
    return Switch;
}(React.Component));

var componentName$q = 'Tabs';
var Tabs = /** @class */ (function (_super) {
    __extends(Tabs, _super);
    function Tabs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.keys = [];
        // @ts-ignore
        _this.state = { derivedActiveKey: _this.props.activekey || _this.props.children[0].key };
        _this.saveHeadRef = function (node) {
            _this.headRef = node;
        };
        _this.saveRoleRef = function (node) {
            _this.roleRef = node;
        };
        _this.saveBodyRef = function (node) {
            _this.bodyRef = node;
        };
        _this.getTitles = function () {
            var children = _this.props.children;
            var derivedActiveKey = _this.state.derivedActiveKey;
            return React.Children.map(children, function (child) {
                if (!child)
                    return null;
                var key = child.key;
                _this.keys.push(key);
                return (React.createElement("li", { key: key, ref: function (node) { return _this[key] = node; }, onClick: function (e) { return _this.handleClickTitle(key, child.props.disabled, e); }, className: classes(componentName$q, 'title', { active: key === derivedActiveKey, disabled: child.props.disabled }) }, child.props.title));
            });
        };
        _this.handleClickTitle = function (key, disabled, e) {
            if (disabled)
                return;
            if (key !== _this.state.derivedActiveKey) {
                _this.setState({
                    derivedActiveKey: key
                });
                if (_this.props.onChange) {
                    _this.props.onChange(key);
                }
            }
        };
        _this.locateUnderline = function (key, node) {
            var _a = _this, head = _a.headRef, body = _a.bodyRef, role = _a.roleRef, keys = _a.keys;
            var vertical = _this.props.vertical;
            var _b = head.getBoundingClientRect(), headLeft = _b.left, headTop = _b.top;
            var _c = node.getBoundingClientRect(), left = _c.left, right = _c.right, top = _c.top, bottom = _c.bottom;
            if (vertical) {
                // 垂直
                role.style.height = bottom - top + "px";
                role.style.transform = "translateY(" + (top - headTop) + "px)";
                var index = keys.indexOf(key);
                body.style.transform = "translateY(" + -100 * index + "%)";
            }
            else {
                // 水平
                role.style.width = right - left + 'px';
                role.style.transform = "translateX(" + (left - headLeft) + "px)";
                var index = keys.indexOf(key);
                body.style.transform = "translateX(" + -100 * index + "%)";
            }
        };
        return _this;
    }
    Tabs.prototype.componentDidMount = function () {
        var derivedActiveKey = this.state.derivedActiveKey;
        this.locateUnderline(derivedActiveKey, this[derivedActiveKey]);
        // console.log(this.state.derivedActiveKey)
    };
    Tabs.prototype.componentDidUpdate = function () {
        var derivedActiveKey = this.state.derivedActiveKey;
        this.locateUnderline(derivedActiveKey, this[derivedActiveKey]);
    };
    Tabs.prototype.render = function () {
        var cn = componentName$q;
        var _a = this.props, vertical = _a.vertical, className = _a.className, style = _a.style;
        return (React.createElement("div", { className: classes(cn, '', [className], { vertical: vertical }), style: style },
            React.createElement("ul", { className: classes(cn, 'head', { vertical: vertical }), ref: this.saveHeadRef },
                this.getTitles(),
                React.createElement("li", { className: classes(cn, "role", { vertical: vertical, horizontal: !vertical }), ref: this.saveRoleRef })),
            React.createElement("ul", { className: classes(cn, 'body', { vertical: vertical }), ref: this.saveBodyRef },
                React.createElement("li", { className: 'spike-tabpane active' }, "tabpane1"),
                React.createElement("li", { className: 'spike-tabpane' }, "tabpane2"),
                React.createElement("li", { className: 'spike-tabpane' }, "tabpane3"))));
    };
    Tabs.displayName = componentName$q;
    Tabs.defaultProps = {
        vertical: false
    };
    return Tabs;
}(React.Component));

var componentName$r = "TabPane";
var TabPane = /** @class */ (function (_super) {
    __extends(TabPane, _super);
    function TabPane() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabPane.prototype.render = function () {
        var _a = this.props, active = _a.active, className = _a.className, style = _a.style, children = _a.children;
        return (React.createElement("li", { className: classes(componentName$r, "", [className], { active: active }), style: style }, children));
    };
    TabPane.displayName = componentName$r;
    TabPane.defaultProps = {
        disabled: false
    };
    return TabPane;
}(React.Component));

exports.Affix = Affix;
exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.Cascader = Cascader;
exports.CheckBox = CheckBox;
exports.CheckBoxGroup = CheckBoxGroup;
exports.Col = Col;
exports.Collapse = Collapse;
exports.DatePicker = DatePicker;
exports.Icon = Icon;
exports.Message = Message;
exports.Modal = Modal;
exports.Pager = Pager;
exports.Panel = Panel;
exports.Popover = Popover;
exports.Row = Row;
exports.Spin = Spin;
exports.Switch = Switch;
exports.TabPane = TabPane;
exports.Tabs = Tabs;
exports.Transition = Transition;

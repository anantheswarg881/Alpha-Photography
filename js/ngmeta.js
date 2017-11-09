﻿/* ngMeta - v0.3.8 - 24-Apr-2016 
 https://github.com/vinaygopinath/ngMeta
*/
!function (a, b) { "function" == typeof define && define.amd ? define(["angular"], b) : "object" == typeof exports ? module.exports = b(require("angular")) : a.returnExports = b(a.angular) }(this, function (a) { a.module("ngMeta", []).provider("ngMeta", function () { "use strict"; function b(b) { var e = function (e, f) { if (!b.ngMeta) throw new Error("Cannot call setTitle when ngMeta is undefined. Did you forget to call ngMeta.init() in the run block? \nRefer: https://github.com/vinaygopinath/ngMeta#getting-started"); return b.ngMeta.title = a.isDefined(e) ? e : c.title, d.useTitleSuffix && (b.ngMeta.title += a.isDefined(f) ? f : c.titleSuffix), this }, f = function (d, e) { if (!b.ngMeta) throw new Error("Cannot call setTag when ngMeta is undefined. Did you forget to call ngMeta.init() in the run block? \nRefer: https://github.com/vinaygopinath/ngMeta#getting-started"); if ("title" === d || "titleSuffix" === d) throw new Error("Attempt to set '" + d + "' through 'setTag': 'title' and 'titleSuffix' are reserved tag names. Please use 'ngMeta.setTitle' instead"); return b.ngMeta[d] = a.isDefined(e) ? e : c[d], this }, g = function (b) { if (b = b || {}, b.disableUpdate) return !1; e(b.title, b.titleSuffix); var d = a.copy(c); delete b.title, delete b.titleSuffix, delete d.title, delete d.titleSuffix; for (var g = Object.keys(b), h = 0; h < g.length; h++) d.hasOwnProperty(g[h]) && delete d[g[h]], f(g[h], b[g[h]]); for (var i = Object.keys(d), j = 0; j < i.length; j++) f(i[j], d[i[j]]) }, h = function (b, c) { g(a.copy(c.meta)) }, i = function () { b.ngMeta = {}, b.$on("$routeChangeSuccess", h), b.$on("$stateChangeSuccess", h) }; return { init: i, setTitle: e, setTag: f } } var c = {}, d = { useTitleSuffix: !1 }; this.setDefaultTitle = function (a) { return c.title = a, this }, this.setDefaultTitleSuffix = function (a) { return c.titleSuffix = a, this }, this.setDefaultTag = function (a, b) { return c[a] = b, this }, this.useTitleSuffix = function (a) { return d.useTitleSuffix = !!a, this }, this.$get = ["$rootScope", function (a) { return new b(a) }] }) });
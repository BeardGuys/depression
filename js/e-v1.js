var __slice = [].slice;
(function (a) {
    var b, c, d, e, f, g, h, i, j;
    b = "2015-02-17", i = a.Wistia, f = function () {
        var c;
        return c = {}, c.wistia = b, c._initializers = {}, c._destructors = {}, c.extend = function () {
            var a, b, d;
            return a = arguments[0], b = 2 <= arguments.length ? __slice.call(arguments, 1) : [], b.length || (b = [a], a = c), (d = c.obj).merge.apply(d, [a].concat(__slice.call(b))), a
        }, c.proto = function (b) {
            return b == null && (b = a.location.href), c.url.proto(b)
        }, c.mixin = function (a, b) {
            var c, d, e;
            e = [];
            for (c in b)d = b[c], b.hasOwnProperty(c) && e.push(a[c] = d);
            return e
        }, c.data = function (a, b) {
            return c.obj.isArray(a) || (a = a.split(".")), b != null && c.obj.set(c, ["_data"].concat(a), b), c.obj.get(c, ["_data"].concat(a))
        }, c.removeData = function (a) {
            return c.obj.isArray(a) || (a = a.split(".")), c.obj.unset(c, ["_data"].concat(a))
        }, c._timeouts || (c._timeouts = {}), c.timeout = function (a, b, d) {
            var e, f = this;
            return d == null && (d = 1), c.debug("W.timeout", a, d), c.clearTimeouts(a), c.obj.isArray(a) || (a = a.split(".")), a = ["timeouts"].concat(a).join("."), b ? (e = setTimeout(function () {
                return delete c._timeouts[a], b()
            }, d), c._timeouts[a] = e) : c._timeouts[a]
        }, c.clearTimeouts = function (a) {
            var b, d, e, f;
            c.debug("W.clearTimeouts", a), c.obj.isArray(a) || (a = a.split(".")), a = ["timeouts"].concat(a).join("."), e = c._timeouts, f = [];
            for (b in e)d = e[b], (typeof b.indexOf == "function" ? b.indexOf(a) : void 0) !== 0 || b.length !== a.length && b.charAt(a.length) !== "." ? f.push(void 0) : (clearTimeout(d), f.push(delete c._timeouts[b]));
            return f
        }, c.seqId = function (a, b) {
            var d, e;
            return a == null && (a = "wistia_"), b == null && (b = ""), d = c._sequenceVal || 1, e = "" + a + d + b, c._sequenceVal = d + 1, e
        }, c.uniqId = function (a, b) {
            var c;
            return a == null && (a = ""), b == null && (b = ""), c = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
                var b, c;
                return b = Math.random() * 16 | 0, c = a === "x" ? b : b & 3 | 8, c.toString(16)
            }), a + c + b
        }, c.css = function () {
            var a, b, d;
            return arguments.length === 2 ? (d = arguments[0] || document.body || document.head, a = arguments[1]) : (d = document.body || document.head, a = arguments[0]), /\{/.test(a) && /\}/.test(a) ? c.util.addInlineCss(d, a) : (b = document.createElement("link"), b.setAttribute("rel", "stylesheet"), b.setAttribute("href", a), c.elem.append(d, b), b)
        }, c.script = function () {
            var a, b;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], (b = c.remote).scripts.apply(b, a)
        }, c.require = function () {
            var a, b;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], (b = c.remote).require.apply(b, a)
        }, c
    }, e = function () {
        return a.Wistia != null && a.Wistia.wistia != null
    }, e() || (a.Wistia = f()), a._wistiaChannel != null && (d = a._wistiaChannel, delete a._wistiaChannel, a.Wistia = c = f(), c.channelName = d, c._wistiaChannelMain = i);
    if (i != null && i.wistia == null) {
        j = [];
        for (g in i)h = i[g], j.push(Wistia[g] = h);
        return j
    }
})(window);
var __slice = [].slice;
(function (a) {
    if (a.obj)return;
    return a.obj = {
        merge: function () {
            var a, b, c, d, e, f = this;
            a = arguments[0], c = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
            if (!c.length)return a;
            for (d = 0, e = c.length; d < e; d++)b = c[d], this.eachDeep(b, function (b, c) {
                var d;
                d = f.get(a, c);
                if (f.isArray(b)) {
                    if (f.isEmpty(d))return f.set(a, c, [])
                } else {
                    if (!f.isObject(b))return f.set(a, c, b);
                    if (f.isEmpty(d))return f.set(a, c, {})
                }
            });
            return a
        },
        clone: function (a) {
            return a instanceof Array ? this.merge([], a) : this.merge({}, a)
        },
        get: function (a, b, c) {
            var d, e, f;
            typeof b == "string" ? b = b.split(".") : b = b.slice(0, b.length), d = a;
            while (a != null && b.length)f = b.shift(), (a[f] === void 0 || !this.isObject(a[f]) && !this.isArray(a[f])) && c && (f === 0 ? (a = d[e] = [], a[f] = {}) : a[f] = {}), d = a, e = f, a = a[f];
            return a
        },
        set: function (a, b, c) {
            var d;
            return typeof b == "string" ? b = b.split(".") : b = b.slice(0, b.length), d = b.pop(), a = this.get(a, b, !0), a != null && (this.isObject(a) || this.isArray(a)) && d != null ? c != null ? a[d] = c : delete a[d] : void 0
        },
        unset: function (a, b) {
            return this.set(a, b)
        },
        exists: function (a, b) {
            return this.get(a, b) !== void 0
        },
        cast: function (a) {
            return a == null ? a : this.isObject(a) || this.isArray(a) ? this.castDeep(a) : (a = "" + a, /^[1-9]\d*?$/.test(a) ? parseInt(a, 10) : a === "0" ? 0 : /^\d*\.\d+/.test(a) ? parseFloat(a) : /^true$/i.test(a) ? !0 : /^false$/i.test(a) ? !1 : a)
        },
        castDeep: function (a) {
            var b = this;
            return this.eachLeaf(a, function (c, d) {
                if (typeof c == "string")return b.set(a, d, b.cast(c))
            }), a
        },
        only: function (a, b) {
            var c, d, e, f, g, h;
            e = {}, d = {};
            for (g = 0, h = b.length; g < h; g++)c = b[g], d[c] = !0;
            for (c in a)f = a[c], d[c] && (e[c] = f);
            return e
        },
        except: function (a, b) {
            var c, d, e, f, g, h;
            e = {}, d = {};
            for (g = 0, h = b.length; g < h; g++)c = b[g], d[c] = !0;
            for (c in a)f = a[c], d[c] || (e[c] = f);
            return e
        },
        select: function (a, b) {
            var c, d, e, f, g, h, i, j, k;
            h = [], e = typeof b == "function", e && (d = b);
            for (j = 0, k = a.length; j < k; j++) {
                c = a[j];
                if (e)d(c) && h.push(c); else {
                    g = !0;
                    for (f in b) {
                        i = b[f];
                        if (i instanceof Array) {
                            if (!c[f] || c[f] < i[0] || c[f] > i[1]) {
                                g = !1;
                                break
                            }
                        } else if (i instanceof RegExp) {
                            if (!i.test(c[f])) {
                                g = !1;
                                break
                            }
                        } else if (c[f] !== i) {
                            g = !1;
                            break
                        }
                    }
                    g && h.push(c)
                }
            }
            return h
        },
        sort: function (b, c) {
            var d, e, f, g;
            return f = typeof c == "function", f && (e = c), g = function () {
                var a, c, e;
                e = [];
                for (a = 0, c = b.length; a < c; a++)d = b[a], e.push(d);
                return e
            }(), f ? g.sort(e) : g.sort(function (b, d) {
                var e, f, g, h, i;
                c instanceof Array ? h = a.obj.clone(c) : h = c.split(/\s*,\s*/), f = 0;
                while (f === 0 && h.length > 0) {
                    i = h.shift().split(/\s+/), g = i[0], e = i[1], e = e === "desc" ? -1 : 1;
                    if (b[g] < d[g]) {
                        f = -1 * e;
                        break
                    }
                    if (b[g] === d[g])f = 0; else {
                        f = 1 * e;
                        break
                    }
                }
                return f
            }), g
        },
        isArray: function (a) {
            return a != null && /^\s*function Array()/.test(a.constructor)
        },
        isObject: function (a) {
            return a != null && /^\s*function Object()/.test(a.constructor)
        },
        isRegExp: function (a) {
            return a != null && /^\s*function RegExp()/.test(a.constructor)
        },
        isBasicType: function (a) {
            return a != null && (this.isRegExp(a) || /^string|number|boolean|function$/i.test(typeof a))
        },
        isEmpty: function (a) {
            var b, c, d;
            if (a == null)return !0;
            if (this.isArray(a) && !a.length)return !0;
            if (this.isObject(a)) {
                b = !0;
                for (c in a)d = a[c], b = !1;
                return b
            }
            return !1
        },
        isSubsetDeep: function (a, b) {
            var c, d = this;
            return a === b ? !0 : a != null && b == null || a == null && b != null ? !1 : (c = !0, this.eachLeaf(a, function (a, e) {
                var f;
                f = d.get(b, e);
                if (a !== f)return c = !1
            }), c)
        },
        equalsDeep: function (a, b) {
            return this.isSubsetDeep(a, b) && this.isSubsetDeep(b, a)
        },
        eachDeep: function (a, b, c) {
            var d, e, f;
            c == null && (c = []);
            if (this.isBasicType(a))b(a, c); else if (this.isObject(a) || this.isArray(a)) {
                b(a, c);
                for (d in a)f = a[d], e = c.slice(0, c.length), e.push(d), this.eachDeep(f, b, e)
            } else b(a, c)
        },
        eachLeaf: function (a, b) {
            var c = this;
            return this.eachDeep(a, function (a, d) {
                if (!c.isArray(a) && !c.isObject(a))return b(a, d)
            })
        },
        hasDontEnumBug: !{toString: null}.propertyIsEnumerable("toString"),
        DontEnums: ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
        keys: function (b) {
            var c, d, e, f, g, h, i, j;
            if (Object.keys)return Object.keys(b);
            if (typeof o != "object" && typeof o != "function" || o === null)throw new TypeError("Object.keys called on a non-object");
            if (a.obj.hasDontEnumBug) {
                h = a.obj.DontEnums, i = [];
                for (f = 0, g = h.length; f < g; f++)d = h[f], o.hasOwnProperty(d) && i.push(d);
                return i
            }
            j = [];
            for (c in o)e = o[c], j.push(e);
            return j
        }
    }
})(Wistia), function (W) {
    if (W.util)return;
    return W.util = {
        bindEvent: function () {
            var a;
            return (a = W.elem).bind.apply(a, arguments)
        }, unbindEvent: function () {
            var a;
            return (a = W.elem).unbind.apply(a, arguments)
        }, elemHeight: function (a) {
            return W.elem.height(a)
        }, elemWidth: function (a) {
            return W.elem.width(a)
        }, elemInDom: function (a) {
            return W.elem.inDom(a)
        }, winHeight: function () {
            return W.elem.height(window)
        }, winWidth: function () {
            return W.elem.width(window)
        }, docHeight: function () {
            return W.elem.height(document)
        }, docWidth: function () {
            return W.elem.width(document)
        }, addInlineCss: function (a, b) {
            var c, d;
            return c = document.createElement("style"), c.id = Wistia.seqId("wistia_", "_style"), c.setAttribute("type", "text/css"), c.className = "wistia_injected_style", d = document.getElementsByTagName("style"), a.appendChild(c, a.nextSibling), c.styleSheet ? c.styleSheet.cssText = b : c.appendChild(document.createTextNode(b)), c
        }, cssTags: function (a) {
            return a.match(/<link.*?rel=['"]stylesheet['"][^>]*>|<style>[\s\S]+?<\/style>/ig) || []
        }, execCssTags: function (a) {
            var b, c, d, e, f, g, h;
            if (!a)return null;
            a instanceof Array || (a = Wistia.util.cssTags(a)), c = [];
            for (g = 0, h = a.length; g < h; g++) {
                b = a[g];
                if (/<link.*?rel=['"]stylesheet['"][^>]*>/.test(b)) {
                    if (e = b.match(/href=['"](.*?)['"]/i))d = document.createElement("link"), d.setAttribute("rel", "stylesheet"), d.setAttribute("href", e[1]), d.className = "wistia_injected_style", Wistia.elem.append(document.body || document.head, d), c.push(d)
                } else/<style>[\s\S]+?<\/style>/ig.test(b) && (e = b.match(/<style>([\s\S]+?)<\/style>/i)) && (f = Wistia.util.addInlineCss(document.body || document.head, e[1]), c.push(f))
            }
            return c
        }, removeCssTags: function (a) {
            return a.replace(/<link.*?rel=['"]stylesheet['"][^>]*>|<style>[\s\S]+?<\/style>/ig, "")
        }, unescapeHtml: function (a) {
            var b;
            return b = document.createElement("div"), b.innerHTML = a, b.childNodes.length > 0 ? b.childNodes[0].nodeValue : ""
        }, scriptTags: function (a) {
            return a.match(/<script.*?src[^>]*>\s*<\/script>|<script.*?>[\s\S]+?<\/script>/ig) || []
        }, execScriptTags: function (scriptTags, callback) {
            var hash, hashes, matches, scriptTag, src, _i, _len;
            if (!scriptTags)return null;
            scriptTags instanceof Array || (scriptTags = Wistia.util.scriptTags(scriptTags)), hashes = [];
            for (_i = 0, _len = scriptTags.length; _i < _len; _i++) {
                scriptTag = scriptTags[_i], hash = {};
                if ((matches = scriptTag.match(/<script.*?>/i)) && (matches = matches[0].match(/src="([^"]+)"/i)))hash.src = matches[1], hash.async = /async/i.test(scriptTag.replace(hash.src, "")); else if (matches = scriptTag.match(/<script>([\s\S]+?)<\/script>/i))src = matches[1], hash.fn = function () {
                    return eval(src)
                };
                hashes.push(hash)
            }
            return Wistia.remote.scripts(hashes, callback)
        }, removeScriptTags: function (a) {
            return a.replace(/<script.*?src[^>]*>\s*<\/script>|<script>[\s\S]+?<\/script>/g, "")
        }, scrollTop: function (a) {
            var b, c, d, e;
            return a != null ? ((b = document.body) != null && (b.scrollTop = a), (c = document.documentElement) != null ? c.scrollTop = a : void 0) : (typeof document != "undefined" && document !== null ? (d = document.documentElement) != null ? d.scrollTop : void 0 : void 0) || (typeof document != "undefined" && document !== null ? (e = document.body) != null ? e.scrollTop : void 0 : void 0) || 0
        }, scrollLeft: function (a) {
            var b, c, d, e;
            return a != null ? ((b = document.body) != null && (b.scrollLeft = a), (c = document.documentElement) != null ? c.scrollLeft = a : void 0) : (typeof document != "undefined" && document !== null ? (d = document.documentElement) != null ? d.scrollLeft : void 0 : void 0) || (typeof document != "undefined" && document !== null ? (e = document.body) != null ? e.scrollLeft : void 0 : void 0) || 0
        }, applyTransform: function (a, b) {
            var c, d, e, f, g;
            d = ["msTransform", "mozTransform", "webkitTransform", "transform"], g = [];
            for (e = 0, f = d.length; e < f; e++)c = d[e], g.push(a.style[c] = b);
            return g
        }, applyTransformOrigin: function (a, b) {
            var c, d, e, f, g;
            d = ["msTransformOrigin", "mozTransformOrigin", "webkitTransformOrigin", "transformOrigin"], g = [];
            for (e = 0, f = d.length; e < f; e++)c = d[e], g.push(a.style[c] = b);
            return g
        }, transitionCss: function () {
            var a, b, c;
            return arguments[0] instanceof Array ? (b = arguments, c = function () {
                var c, d, e;
                e = [];
                for (c = 0, d = b.length; c < d; c++)a = b[c], e.push("" + a[0] + " " + a[1] + " linear " + (a[2] || "0s"));
                return e
            }().join(",")) : (a = arguments, c = "" + a[0] + " " + a[1] + " linear " + (a[2] || "0s")), "-webkit-transition: " + c + ";\n-moz-transition: " + c + ";\n-o-transition: " + c + ";\n-ms-transition: " + c + ";\ntransition: " + c + ";"
        }, niceDuration: function (a) {
            var b, c, d;
            return b = d = 0, a > 0 && (b += Math.floor(a / 60), a %= 60), d = Math.round(a), d === 60 && (b += 1, d = 0), c = "" + b + ":" + this.padNumber(d, 2), c
        }, padNumber: function (a, b) {
            var c;
            b == null && (b = 0), c = "" + a;
            while (c.length < b)c = "0" + c;
            return c
        }, localDate: function (a) {
            var b, c;
            return a == null && (a = new Date), c = -a.getTimezoneOffset(), b = c >= 0 ? "+" : "-", "" + a.getFullYear() + "-" + this.padNumber(a.getMonth() + 1, 2) + "-" + this.padNumber(a.getDate(), 2) + "T" + this.padNumber(a.getHours(), 2) + ":" + this.padNumber(a.getMinutes(), 2) + ":" + this.padNumber(a.getSeconds(), 2) + b + this.padNumber(Math.abs(Math.floor(c / 60)), 2) + ":" + this.padNumber(Math.abs(Math.floor(c % 60)), 2)
        }, requestAnimationFrame: function (a) {
            var b;
            return b = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (a) {
                    return setTimeout(a, 1e3 / 60)
                }, b(a)
        }, notSetOrTrue: function (a) {
            return a == null || a === !0
        }, indexOf: function (a, b) {
            var c, d, e;
            for (c = d = 0, e = a.length; 0 <= e ? d <= e : d >= e; c = 0 <= e ? ++d : --d)if (typeof b == "function") {
                if (b(a[c]))return c
            } else if (a[c] === b && a[c] === b)return c;
            return -1
        }, insertIntoArray: function (a, b, c) {
            var d;
            return c == null && (c = {}), c.after ? (d = W.util.indexOf(a, c.detect || c.after), d >= 0 ? a.splice(d + 1, 0, b) : typeof console != "undefined" && console !== null ? console.log("" + c.after + " not found when trying to add " + b + " to array") : void 0) : c.before ? (d = W.util.indexOf(a, c.detect || c.before), d >= 0 ? a.splice(d, 0, b) : typeof console != "undefined" && console !== null ? console.log("" + c.before + " not found when trying to add " + b + " to array") : void 0) : c.index != null ? a.splice(c.index, 0, b) : a.push(b)
        }, throttle: function (a, b, c) {
            var d, e, f, g, h, i;
            return c == null && (c = {}), e = null, d = null, h = null, i = null, g = 0, f = function () {
                g = c.leading === !1 ? 0 : (new Date).getTime(), i = null, h = b.apply(e, d);
                if (!i)return e = d = null
            }, function () {
                var j, k;
                return j = (new Date).getTime(), !g && c.leading === !1 && (g = j), k = a - (j - g), e = this, d = arguments, k <= 0 || k > a ? (clearTimeout(i), i = null, g = j, h = b.apply(e, d), i || (e = d = null)) : !i && c.trailing !== !1 && (i = setTimeout(f, k)), h
            }
        }, toArray: function (a, b) {
            b == null && (b = /\s+/);
            if (a instanceof Array)return a;
            if (typeof a == "string")return a.split(b);
            throw new Error("Don't know how to convert " + a + " into an array.")
        }, poll: function (a, b, c, d, e) {
            var f, g, h;
            return c == null && (c = 50), d == null && (d = 5e3), g = null, h = (new Date).getTime(), f = function () {
                if ((new Date).getTime() - h > d) {
                    typeof e == "function" && e();
                    return
                }
                return a() ? b() : (clearTimeout(g), g = setTimeout(f, c))
            }, g = setTimeout(f, 1)
        }, aps: function (a) {
            var b, c, d, e;
            e = [];
            for (c = 0, d = a.length; c < d; c++)b = a[c], e.push(b);
            return e
        }, isDocReady: function () {
            return /loaded|complete/.test(document.readyState)
        }, onDocReady: function () {
            var a, b, c, d, e, f, g, h;
            return arguments.length > 1 ? (g = arguments[0], b = arguments[1]) : (g = 1e4, b = arguments[0]), W.util.isDocReady() ? b() : top === self && document.documentElement.doScroll ? (f = function () {
                var a;
                try {
                    return document.documentElement.doScroll("left"), !0
                } catch (b) {
                    return a = b, !1
                }
            }, W.util.poll(f, b, 50, g, b)) : (e = function (a) {
                if (W.util.isDocReady())return clearTimeout(d), h(), b()
            }, a = function () {
                return W.elem.bind(document, "DOMContentLoaded", e), W.elem.bind(document, "readystatechange", e), W.elem.bind(window, "load", e)
            }, h = function () {
                return W.elem.unbind(document, "DOMContentLoaded", e), W.elem.unbind(document, "readystatechange", e), W.elem.unbind(window, "load", e)
            }, c = function () {
                return h(), b()
            }, d = setTimeout(c, g), a())
        }, camelCase: function (a) {
            return a.replace(/[_-]([a-z])/g, function (a) {
                return a.charAt(1).toUpperCase()
            })
        }, snakeCase: function (a) {
            return a.replace(/[A-Z]/g, function (a) {
                return "_" + a.toLowerCase()
            })
        }, injectWistiaInterstateFontFace: function () {
            if (W._wistiaFontFaceStyle)return;
            return W._wistiaFontFaceStyle = W.css(this.wistiaInterstateFontFaceDefinition())
        }, removeWistiaInterstateFontFace: function () {
            return W.elem.remove(W._wistiaFontFaceStyle), W._wistiaFontFaceStyle = null
        }, wistiaInterstateFontFaceDefinition: function () {
            return "@font-face {\nfont-family: 'WistiaPlayerInterstate';\nsrc: url(data:application/x-font-ttf;charset=utf-8;base64," + this.interstateBase64() + ");\n}"
        }, interstateBase64: function () {
            return "AAEAAAARAQAABAAQRFNJRwAAAAEAAEAoAAAACEdQT1OnCGwPAAAp/AAAFiBHU1VCAAEAAAAAQBwAAAAKT1MvMnfilF4AACNAAAAAYGNtYXCyOx0yAAAjoAAAAk5jdnQgAAAAAAAAJ3wAAAAEZnBnbUM+8IgAACXwAAABCWdhc3AAGgAjAAAp7AAAABBnbHlmUVbRvgAAARwAAB+UaGVhZAmq2tgAACGEAAAANmhoZWEOEQUfAAAjHAAAACRobXR4gekp4wAAIbwAAAFgbG9jYWEVaPgAACDQAAAAtG1heHAAXgBRAAAgsAAAACBuYW1lhtvd3QAAJ4AAAAGYcG9zdAr2CvkAACkYAAAA1HByZXBoUamTAAAm/AAAAH8AAgBgAAAFUgWaAAcACgAAAQEzEyETMwEDEyECZP3833cCPnnl/fZ13/5GBZr6ZgFU/qwFmv75/YEAAAAAAwC6AAAE3wWaABMAHgArAAAAJyYmJzY3NjU0JyYmIyERITI2NQAHBiMhESEyFxYVEgcGIyERIRYWFxYWFQTfTiFVLVQuNHA2mF79sgI67f7+7i81Y/5/AYFnMy07OkCK/oEBhUVfIB4cAkFdJzQNKERMZ7NiLzH6ZuDYAhQyOAFzNjFV/Ss9QgHbASMiIlE1AAAAAAEAd//pBMMFsAAqAAAAJiMiBgcGAhUUFxYWFxYzMjc2NjcnBgYjIiYnJiY1NDY3NjYzMhcWFhc3BHDwq4nhUE9VRiFrQY2+rX87VzCzOJZtXZEwMTIyMTCRXWlHIjodvgUoiGtkY/7wodOkTowuZU0jVk13WlhIRUTCeXjCRUVIKhRALncAAAACALoAAAT8BZoADgAbAAAAAicmJiMhESEyNzY3NjUGBwYGIyMRMzIWFxYVBPxqYlz+lP54AYjCmqNaYdtwO7h8sbF8uDtwA4UBElpVVPpmSk+apvTugURJA/hJRIHuAAABALoAAAR1BZoACwAAJREhNSERITUhESE1AZECQP3AAsX8ZAO70QHF0AFj0fpm0QABALoAAARWBZoACQAAASERMxEhNSERIQRW/GTXAZz+ZALFBZr6ZgJ90wF3AAEAd//pBPYFsAAuAAABFTMVFAYGIyImJyYmNTQ2NzY2MzIXFhc3JiYjIgYHBgIVFBIXFhYzMjY3NjY1NQMx6k6TZV2RMTEzMzExkV1sRUI4vEzwq4nhUE9VVU9Q4Yl4yEhKTwLXzwZikU5IRUXCeHfDRUVIKSdadYSIa2Rj/vChov7wY2RrT0tN2oemAAAAAAEAugAABPwFmgALAAABIxEhESMRMxEhETME/Nf9bNfXApTXBZr9vAJE+mYCf/2BAAEAxQAAAZwFmgADAAABIxEzAZzX1wWa+mYAAAABADH/6QQjBZoAFAAAAREUBgcGBiMiJyYmJwcWFxYzIBERA0wgIyNtTntGITIV0Td6f8QB/gWa/Kxoky4vLUAeTzY+t2FlAkwDZQAAAQC6AAAFJQWaAAsAAAEjAREjETMRAQEzAQTJ9P220dEBCwGb9P4ABZr9JALc+mYBngFB/SEDkQABALoAAARcBZoABQAAJSERIxEhBFz9NdcDotMEx/pmAAEAuv/pBbwFmgALAAAJAiMRMxEBAREzEQTX/mX+XN7LAbABtNMFmvwaA+b6ZgPe/AsD9fwiBZoAAQC6AAAE/AWaAAkAAAERASMRMxEBMxEEK/1r3NECpM0FmvvaBCb6ZgQm+9oFmgAAAgB1/+kFOwWwABcALwAAAAInJiYjIgYHBgIVFBIXFhYzMjY3NhI1BgYHBgYjIiYnJiY1NDY3NjYzMhYXFhYVBTtXUVHhiIbiUlJYV1FR4YaI4lJSWNs5NDSPVVaQNTY6ODUzjlVWkDY2OwN0ARFiYWhpYmL+7aWm/u9hYmhpY2MBEaZ8w0ZESEpFRsR4eMNFREhJRUbEeAACALoAAATfBZoAEAAaAAAAJicmJiMhETMRITI2NzY2NQYGIyERITIXFhUE30Q/Palk/ajTAXdprj9ARdt8ev5/AYFyQUMERqk6ODn6ZgIXOjk5qW12ggHuP0F2AAIAd/99BTUFsAAbADQAAAACJyYmIyIGBwYCFRQSFxYWMzI3FzcnNjY3NjUCBycHFwYjIiYnJiY1NDY3NjYzMhYXFhYVBTVVT1DiionhUE9VVU9Q4YlraGCwYCxBJUvbdWiwaC4yXZExMTMzMTGRXV2TMTEzA24BEGNka2tkY/7woaL+8GNkayeTb5UqWk6i2P7mgKRvoQtKRkXEeHfDRUVISEVFw3cAAAIAugAABPwFmgARABwAAAE2NzY1NCYnJiYjIREzESEBMwIHBiMhESEyFxYVA8GSVFVIQT6mYP2L0wFEAR33wkRCbv5eAaJwQUMCSiRrbKlrpDYzNPpmAjf9yQN3PDkBzTs+bwABAGr/6QR7BbAAPgAAACYnJiYnJiYnJiY1NDc2MzIXFhYXNyYmJyYmJyIGBwYGFRQWFxYWFxYWFxYWFRQGIyInJicHFhcWMyA3NjY1BHs+PTijdV93IyMdOUF1blImQSeYNF06O35RY60/Qkg3ODShfFx7JSYikpdjZmNJmluEh5gBColAQAH6iDIuRiQcMRkZOSdPLjUkES0nmjFAGxsaATczNZVbXoQvLEQlHDIaHEAqamcuLU+VbD0/eTigYgABAGAAAAR7BZoABwAAASEVIREzESEEe/vlAaLXAaIFmtP7OQTHAAAAAQCw/+kE8gWaABUAAAERECEiJjURIxEUFhcWITI2NzY2NREEG/60oqbXRUSJAQmEz0ZGSAWa/Lj+b9PMAzr8wJPpUKVRT0/plQNEAAEAYAAABSEFmgAGAAABASMBMwEjAsX+heoB8uMB7OYBFASG+mYFmgABAG8AAAaBBZoADAAAAQEjAQMjATMBATMBIwTm/vO4/vLL2QEk1QETAQjZASXQAW4ELPvUBCz6ZgRD+70FmgAAAQBxAAAE6gWaAAsAAAEjAQEhAQEzAQEhAQTN/P7d/t//AAGg/kT8AT0BPwEB/kMFmv4DAf39Sv0cAir91gLmAAEAVAAABS8FmgAIAAABASMBETMRASMCw/6N/AIC1wIC9wMJApH8nf3JAjcDYwAAAAEAewAABLwFmgAJAAAlATUhFSEBFSE1AXQDSPvoAyn8rgRBxwQC0cf7/tHHAAAAAAIAaP/pA9MESgAkADUAAAE0JicmIyIGBxc2NjMyFhUVJiMiBgcGFRQXFhYzMjY3NjY3FTMmBwYjIiYnJjU0NjMyFxYXFQPTOjZpu3CxT1I/hVRjaFmXXZw4e3ozg0UxWSEiNCbP90JMTjFHGzx3ZlI8Oi4C4VmJLlkwMZ8jIF5YUCkqKluttmIqKRcSEiMjavomLBUVMFhKVgwNFpoAAAADAGj/6QPTBgoAAwAoADkAAAEDMwETNCYnJiMiBgcXNjYzMhYVFSYjIgYHBhUUFxYWMzI2NzY2NxUzJgcGIyImJyY1NDYzMhcWFxUCl9uoAVIdOjZpu3CxT1I/hVRjaFmXXZw4e3ozg0UxWSEiNCbP90JMTjFHGzx3ZlI8Oi4GCv65AUf811mJLlkwMZ8jIF5YUCkqKluttmIqKRcSEiMjavomLBUVMFhKVgwNFpoAAAIAnP/pBCMF1QAXACUAAAAnJiYjIgcGBgcRBxEzNRYWMzI2NzY2NQYGIyInJicRNjc2MzIRBCN4N5ZZXUYhNR/R0TCTS1aZOT1D03dzSko+KjE5R0PyAy6VREMoEyYcAght+phkNUZEQkbNhrCsLyY4AcU9Iir+ewAAAAABAGj/6QO8BEoAKwAAAAYHBiMiJicmJjU0Njc2NjMyFxYWFzcmJiMiBgcGBhUUFhcWFjMyNzY2NycDDjQaO0Y+YCEhIiQhIV44Sz8gNSd9TLt2YqxAQUhHQD+qYYVlKkcmhwERLg8iNTIwhU9RhS4uMiERKieVW1xMSErTgnzPSklQPRlFLoUAAgBt/+kD9AXVABcAJwAAAQcRJicmIyIGBwYGFRAXFhYzMjc2NxUzJgcGIyInJjU0NjMyFxYXEQP00TVATE5VmDo9Q3g3lVlRRUJB0fw8REd3PD93c0lLPykF1W3+ZzcfJUNCRc+G/tqVREMiIDtm/SYrXmHGqqwuKDf+OwAAAAACAGj/6QQEBEoAJgAvAAAAJicmJiMiBgcGBhUUFxYWFxYWMzI3NjY3JwYGBwYjIiYnJichNjUkNzYzMhcWFyEEBDk3Oqxvaa0+P0RGIEoyMnpDf1ksSSZ9JCscOUUyWyNOEQLHBv1EPz9rekM5CP4MAp7ESExUSUdJ0oa2gz1SISEmJxMvJYcZGQwYIyNOky4yzkdHUEZ4AAMAaP/pBAQGCgADACoAMwAAAQMzARImJyYmIyIGBwYGFRQXFhYXFhYzMjc2NjcnBgYHBiMiJicmJyE2NSQ3NjMyFxYXIQKT26gBUlI5Nzqsb2mtPj9ERiBKMjJ6Q39ZLEkmfSQrHDlFMlsjThECxwb9RD8/a3pDOQj+DAYK/rkBR/yUxEhMVElHSdKGtoM9UiEhJicTLyWHGRkMGCMjTpMuMs5HR1BGeAAAAAABAFgAAAKTBc8AFwAAACMiBwYVFSMVMxEzETM1IzU0NzYzMhc1AkpWfURQi4vTx8cbFzE1RQXPPUiJjsT8kQNvxHtAFhMVuAACAG3+cwP0BEoAJAAxAAABFSYnJiMiBgcGBhUUFhcWFjMyNzY3FRQGBwYGBxc2Njc2NjURACY1NDYzMhcWFxEGIwMhL0RKUFWXOj1EPzo3lVhRSEE9GB8js349pttAMi79w3h3c0lLPyl0gAQzZDQiJUNCRc+Glt1IREMkIDkSUWchKS8ErARNTD2ocQPN/HnGv6qsLig3/juJAAABAJwAAAP8BdUAFwAAATQmJyYjIgcGBxEHETMRNDc2MzIWFREzA/wwL2O9U0pHKtPTPDdqcmvTAmhyujx6ISA8Aghv+poCdYRJRZGW/aAAAAIAhwAAAZgFzwAXABsAAAAmJyYmIyIGBwYGFRQWFxYWMzI2NzY2NQMjETMBmBUTEzIbGzMSExYWExIzGxsyExMVH9PTBWEzExMVFhITMxsbMhITFhYTEzEb/u37zQAAAAIApAAAAqUGCgADAAcAAAEDMwEBIxEzAYbbqAFS/tLT0wYK/rkBR/4p+80AAv/F/nUBmAXPABcAJwAAACYnJiYjIgYHBgYVFBYXFhYzMjY3NjY1AxEUBgcGBgcXNjY3NjY1EQGYFRMTMhsbMxITFhYTEjMbGzITExXyEBcXVk1HcI4oJyAFYTMTExUWEhMzGxsyEhMWFhMTMRv+7fv6SlUdHSoWnxhENDOPagQCAAAAAQCcAAAD5QXVAAsAAAEBIwERBxEzETcTMwKiARDv/qzT06Pu5QLLAWj+JAN+b/qaAT3a/ekAAAABAKYAAAF5BdUAAwAAAQcRMwF509MF1W/6mgAAAQCcAAAGUARKAC4AAAE0JicmJiMiBwYGByYmIyIGBzUjETMRNDc2NjMyFhcWFREzETQ2NzYzMhcWFREzBlAxMTGFWXhOJT4gLY9rU4Uo09MxGFE0NU0aM9MYGDNsbDAz0wJoer07OjYrFDgnT09BPGb7zQJ1f0kkJiAiRKH9oAJ1PGckS0JGn/2gAAABAJwAAAP8BEoAFgAAATQnJiMiBwYHNSMRMxE0NzYzMhYVETMD/F9jvVNKRyrT0zc5bXNq0wJo8Xd6ISA8ZvvNAnWASEqSlf2gAAAAAgCcAAAD/AXZAB0ANAAAAAYjIicmJyYjIgYHBhUzNjYzMhcWFxYzMjY3NjUjEzQnJiMiBwYHNSMRMxE0NzYzMhYVETMDHyYiGzVSMjU5Lk8cPpIIJSIfMUw4NDouUBw9kdVfY71TSkcq09M3OW1zatMFlTMdMxMUJCNNgj4yHC8XFSQjS4X8lfF3eiEgPGb7zQJ1gEhKkpX9oAAAAgBo/+kEJwRKABcALgAAACYnJiYjIgYHBgYVFBYXFhYzMjY3NjY1BgYHBgYjIiYnJjU0Njc2NjMyFhcWFhUEJ0hBQLBmZq5BQklHQUCtZWeyQUNI1SUjJGE7PGMjSyQiIWA7P2ckJCUCms9KSU5MSEvRgXzPS0pQTElK04RQgzAyODAuX7BQgi8vMjIwMIVRAAAAAAMAaP/pBCcGCgADABsAMgAAAQMzARImJyYmIyIGBwYGFRQWFxYWMzI2NzY2NQYGBwYGIyImJyY1NDY3NjYzMhYXFhYVAp/bqAFSaUhBQLBmZq5BQklHQUCtZWeyQUNI1SUjJGE7PGMjSyQiIWA7P2ckJCUGCv65AUf8kM9KSU5MSEvRgXzPS0pQTElK04RQgzAyODAuX7BQgi8vMjIwMIVRAAAAAgCc/nUEIwRKABUAIgAAACcmJiMiBgc1IxE3ERYWMzI2NzY2NQYGIyInJicRNjYzMhEEI3g3lllQiT/R0TmNSFaZOT1D03dzSko+KjR/QfIDLpVEQ0I7ZvpCbAGDPD9EQkbNhrCsLyY4AcVASf57AAIAbf51A/QESgAWACMAAAEjFSYnJiMiBgcGBhUQFxYWMzI2NxE3AAYjIhE0NjMyFxYXEQP00TVATE5VmDo9Q3g3lVlPiUHR/v58RfJ3c0lLPykEM2Q3HyVDQkXPhv7alURDQjv+D2wCFUoBhaqsLig3/jsAAQCcAAADGwRKABIAAAAmIyIHBgc1IxEzETQ2MzIWFzcC+Vc+TUJDI9PTbWYyTCM4BDMXJCU0ZvvNAmaJjBMUyQAAAAABAFz/6QOLBEoANQAAACYjIgYHBgYVFBYXFhYXFhYXFhYVFAYjIiYnBxYWMzI2NzY1NCYnJiYnJicmJjU0NjMyFhc3Axa/Y1GGMTI1IiUkd1pCVx4hIWJiTKNLYFTiZlORNXotLip+Z3UrFRJJS02HQlwECkAmJCVvR0BgJyZCIxklExYvHjo9NzOfP0siJFKmSmspJD4oLiQRJBUtNS0vogAAAAEARP/pArYF1QAaAAAkBiMiJicmNREhNSERBxEjFTMRFBcWFjMyNzcCl1UnHikNGwEK/vbPmZlGIlM3dVoYwxkMDx5IAkjAAaJv/s3A/ZOYRCIfMroAAAABAJP/6QP0BDMAEwAAASMRFAYjIiY1ESMRFBYzMjY3FTMD9NNzanRq08K9VZEp0wQz/YuDj5GWAmD9mO/zRThmAAAAAAEARAAABBIEMwAGAAAJAiMBMwEDM/7+/vDdAYHTAXoEM/zJAzf7zQQzAAAAAQBSAAAFnAQzAAwAAAEDAyMDAyMBMxMTMwEEy7PMqsu00QEntMfItQErBDP9HgLi/R4C4vvNAvD9EAQzAAAAAAEAUgAAA+4EMwALAAABASMDAyMBATMTEzMCmgE98sTF9AE8/q7t3tf6Ai0CBv6cAWT9+v3TAYX+ewAAAAEARP6FBC8EMwAHAAAJAiMBAzMBA1D+6f7y5wGLnN8CHQQz/NYDKvvh/nEFrgAAAAEAdwAAA7QEMwAJAAAlIQE1IRUhARUhA7T9vwJB/OwCI/20Az24AtGquP0xrAAAAAIAZP/pBI8FsAAXACsAAAACJyYmIyIGBwYCFRQSFxYWMzI2NzYSNQIHBgYjIiYnJiY1EDc2MzIWFxYRBI9MSEbFdXXER0lOTUlHxXV1xEZITddVKXZJSXYpKixVU5ZJdSlWA34BFV9dYWFdYP7rsLH+619eYWFeYAEVsP72jkZHSEZGzoMBCJCNSEaR/voAAAEAJwAAAfwFmgAJAAABIwYHBgcVMxEzAfyuElVIeP7XBZpYMSoIlfu2AAAAAQBqAAAEWgWwACwAACUhNjY3NjY3NjY3NjY1NCYnJiYjIgcGBxc2NzYzMhYVFAYHBgYHBgYHBgYHIQRa/QINLiksjWxshCgqJURAPa5ol4BpbHtVS11ugIoYHh9uXHiqPEFJCAPwwzRZLjBuRENlMTN4T16QMS8vNStYlkggKGxhLkYjI1M7SYhPV9iOAAAAAQBW/+kEXgWwADIAAAAnJic2NzY1NCYnJiYjIgcGBxc2MzIXFhUUBiMjFTMyFxYVFAYjIicHFhcWMzI2NzY2NQReT0VwXzM3SENBsWmCemNTfYapk0U/f4F3eZRRVJ2gzqGHYXODmX3HRUZJAjBbTxwuSlJ3X5AvLS40K0mNeTw2ZWdytTw+dXiCmY9cMjk6OTmlagAAAAACAFQAAASeBZoACgANAAABIxEjARUhETMRMyUBEQSestz9RALVw7L8oQHqAfYDpPxPpf68AUK0Apb9agABAHv/6QR5BZoAJQAAACYnJiYjIgcTITUhAxc2NzYzMhYVFAYHBgYjIiYnBxYhMjY3NjUEeT08PLR0r34cApz8ri/HOD9CW5GUKCgpe1BkwVRu1gEFfcpHlQJJpzo7PVIBicH9OUQsFhiNg0ZxKCkrQjugmj8+gvkAAAAAAgBz/+kEnAWwABwALwAAACYnJiYjIgcGBxIlJwQHBgcGFRAXFjMyNjc2NjUGBgcGIyImJyYmNTQ3NjMyFxYVBJxGQT6qZIJjU0t7AhIK/tTPsVtPl4jrd8dISk/TKilXmEl2KiktVleYmlJQAjSoODU2KCJHAdwwthGWgti51f7hlIU+PD20c05nJEwpJiVmPH5KSUlIgAABAG0AAASDBZoADAAAExUhAgMCAzMSExITNW0DGt10fQfZBId59AWaw/7+/tb+wP6VAYMBPAEbAQe5AAADAGr/6QSLBbAAJwA9AE8AAAAnJic2NzY1NCYnJiYjIgYHBgYVFBcWFwYHBhUUFhcWFjMyNjc2NjUABgcGBiMiJicmJjU0Njc2MzIXFhYVEgcGIyInJjU0NzYzMhYXFhYVBItHQ3ZdMzc/PD2wb22xPj1AOTJbd0BHSEZEwnl5xUZGSv74JCIjYj0+YyIiIx0eQ4iESB8fNUtOoptVUlJVl0x4KSgqAiRfVywsRUtpVo80NDg5NDSQVm1MRigsVl+FaaQ3Nzg6NzikaAJbTB0dISEdHE8uLE0dQUMeTiz9BUVHR0N4dEZIJiMiYjkAAAACAFj/6QSBBbAAHgAwAAAAJicmJiMiBgcGBhUUFhcWFjMyNzY3AgUXJDc2NzY1JgYHBiMiJjU0NzYzMhYXFhYVBIFOR0S9cnjHSEpQR0E+qmWDY1JLe/3uCgEuzbFaTtMsKleZlqVTV5hHeCoqLAQL2UdDQj48PbNzbag3NjYoIUj+JDC3EZeB2brUKWUjSY2DgUpMKSYlZzwAAAAB/40AAAQ7BZoAAwAAAQEzAQNO/D/uA8AFmvpmBZoAAAIAnP/pAeAESgAXAC8AAAAmJyYmIyIGBwYGFRQWFxYWMzI2NzY2NRAmJyYmIyIGBwYGFRQWFxYWMzI2NzY2NQHgGhYWPCAgPBYWGhoWFjwgIDwWFhoaFhY8ICA8FhYaGhYWPCAgPBYWGgPGPBcXGhoXFzwgIDwWFhoaFhY8IP0FPBcXGhoXFzwgIDwWFhoaFhY8IAADAGL/6QW2AS8AFwAvAEcAACQmJyYmIyIGBwYGFRQWFxYWMzI2NzY2NSQmJyYmIyIGBwYGFRQWFxYWMzI2NzY2NSQmJyYmIyIGBwYGFRQWFxYWMzI2NzY2NQGmGhYWPCAgPBYWGhoWFjwgIDwWFhoCCBoWFjwgIDwWFhoaFhY8ICA8FhYaAggaFhY8ICA8FRYaGhYVPCAgPBYWGqs8FxcaGhcXPCAgPBYWGhoWFjwgIDwXFxoaFxc8ICA8FhYaGhYWPCAgPBcXGhoXFzwgIDwWFhoaFhY8IAACAJj/6QHLBZoABQAaAAABIxETMxMSJicmJiMiBwYGFRQXFjMyNjc2NjUBntkphyktGRUVOR4+LhUYLS0/HjkVFhgFmv2D/oEBf/2EOhYVGS4WOh5ALS0YFRY4HwAAAAACAF4AAASYBZoAGwAfAAABIxEzNSMRIxEhESMRIxUzESMVMxEzESERMxEzJREhEQSYzc3Nvf7ZvM3Nzc28ASe9zf1LAS8B/AGiqAFU/qwBVP6sqP5eqP6sAVT+rAFUpgGm/loAAQCc/+kB3wEvABcAACQmJyYmIyIGBwYGFRQWFxYWMzI2NzY2NQHfGRYWPCEhPBUWGRkWFTwhITwWFhmsPBcXGRkXFzwhITwWFhkZFhY8IQACAEb/6QQjBbAAKAA9AAAAJicmJiMiBwYHFzY2MzIWFRQHBgYHBgYHBgYVMzQ2NzY2NzY2NzY2NQAmJyYmIyIHBgYVFBcWMzI2NzY2NQQjRUJAtm2Xh3lciVWpZoWQJBI3K1hoHBwW3wwQEDszRl8gIiH+hxkVFTkePi4VGC0tPx45FRYYBI+PMTAxPTdfolNNXVdFLxcoGDFTMDB8Xj1QHR4yHCdIKi1wSfxuOhYVGS4WOh5ALS0YFRY4HwAAAAACAJMC/ANYBZoAAwAHAAATEzMTMxMzE5M0mTPFM5ozBZr9YgKe/WICngAAAAEAjQL8AZoFmgADAAATEzMTjTSlNAWa/WICngABACH/SANxBlIAAwAAAQEzAQKe/YPTAn0GUvj2BwoAAAEAwv8fAokFmgAHAAAFIxEzNSERIQKJ/Pz+OQHHMwUfrvmFAAEAgf8fAkgFmgAHAAABIRUzESMVIQJI/jn8/AHHBZqu+uGuAAEBef8fBAYFvAAYAAAEJicmJjU0NzY2NycGBwYHBhUUFxYXFhc3A6CVMzc5cDOWZVaccopJVlZLiHGdVjGYVVzWg/S5VZpPYFprg5exyL2sloBrW2AAAAABAPD/HwN9BbwAGQAAACcmJyYnBxYWFxYWFRQGBwYGBxc2NzY3NjUDfVZKiXKcVmeUMzc4ODczlWZWnXGJSlYDNayTg2taYFCYVF3Wg37SXFaaT2Bba4GYscgAAAEAcQKFAnEDVgADAAABIRUhAnH+AAIAA1bRAAACAHEDmAN7BZoAAwAHAAABAyETIQMhEwEMmwEMHQFUnAEMHQWa/f4CAv3+AgIAAAACAIUDmAOPBZoAAwAHAAATAzMTMwMzE6IdjZzVHY6bBZr9/gIC/f4CAgAAAAEAcQOYAZoFmgADAAABAyETAQybAQwdBZr9/gICAAAAAQCFA5gBrgWaAAMAABMDMxOiHY2cBZr9/gICAAEAhf8bAa4BHQADAAATAzMToh2NnAEd/f4CAgABAAAAWQBQAAMAAAAAAAEAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAB4AaACsANwA9AEKAVIBagF4AZ4BugHKAeYB/gJKAngCzAL+A14DcgOYA6wDzAPsBAQEHARsBMQFAgVGBYYF0gYoBkwGmgbCBvIHCAdKB2YHdAe6B+AILgh4CMoJAgk8CV4JsAncCf4KFAo0ClIKagqCCsoK4AsoC3QLkgvQDBwMOgyyDQANEA1aDcYN9g4oDlAOsA7GDtQO5A72DwgPNA9iD3APiA+eD64PvA/KAAEAAAABAMR6tnc6Xw889QADCAAAAAAA0kLkNQAAAADSQqwe/43+cwaBBlIAAAAHAAIAAAAAAAAEAAAAAikAAAWyAGAFZgC6BT0AdwVvALoE7AC6BKgAugVtAHcFtgC6AmAAxQTTADEFewC6BMMAugZ3ALoFtgC6BbAAdQU5ALoFrAB3BY0AugUCAGoE2wBgBaIAsAWBAGAG5wBvBUYAcQWDAFQFUAB7BGYAaARmAGgEjwCcBC0AaASPAG0EbwBoBG8AaALlAFgEjwBtBI8AnAIfAIcCHwCkAh//xQQ7AJwCHwCmBuMAnASPAJwEjwCcBI8AaASPAGgEjwCcBI8AbQNYAJwD/gBcAzkARASPAJMEVgBEBe4AUgQ/AFIEcwBEBDcAdwT2AGQCvAAnBPYAagT2AFYE9gBUBPYAewT2AHME9gBtBPYAagT2AFgDyf+NAnsAnAYZAGICYgCYBPYAXgJ7AJwEkQBGA+wAkwInAI0DkQAhAwoAwgMKAIEE9gF5BPYA8ALhAHEEAABxBAAAhQIfAHEAhQCFAAEAAAgA/mYAAAbn/43/egaBAAEAAAAAAAAAAAAAAAAAAABXAAMEYAGQAAUACAUzBMwAAACZBTMEzAAAAswAKQKFAAAAAAUAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFVLV04AQAAgIEQGZv5mAZoIAAGaAAAAAQAAAAAEMwWaAAAAIAACAAAAAwAAAAMAAAEiAAEAAAAAABwAAwABAAABIgAAAQYAAAAAAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAUhMSQAAAE1RUgAAAFNKTjs8PT4/QEFCQ0RGAAAAAEsAAgMEBQYHCAkKCwwNDg8QERITFBUWFxgZGhtPAFAAAAAcHh8gISMkJSYoKSorLC4wMTIzNDU2Nzg5OgAAAAAAAAAAAAAAAB0AAAAAAAAiAAAAJwAAAC0vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEcAAAAAAAAAAFRVVlcAAAAARQAAAAAAAABYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAEsAAAALAAgAAQADAAjACkALwA6AD8AWwBdAGEAZQBpAG8AegDhAOkA7QDxAPMgGiAdICYgRP//AAAAIAAnAC0AMAA/AEEAXQBhAGIAZgBqAHAA4QDpAO0A8QDzIBggHCAmIET//wAAAAAAAAAAAAwAAP/z/7v/vP+9AAD/wP88/zn/Ov88/zzgPuA44CHgAQABACwAMgA2ADoAAABMAAAAAAAAAAAAeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQBIAEwASQBNAFEAUgBTAEoATgA7ADwAPQA+AD8AQABBAEIAQwBEAEYAAgADAAQABQAGAAcACAAJAAoACwAMAA0ADgAPABAAEQASABMAFAAVABYAFwAYABkAGgAbAE8AKAApACoAKwAsAC4AALAALEAOBQYHDQYJFA4TCxIIERBDsAEVRrAJQ0ZhZEJDRUJDRUJDRUJDRrAMQ0ZhZLASQ2FpQkNGsBBDRmFksBRDYWlCQ7BAUHmxBkBCsQUHQ7BAUHmxB0BCsxAFBRJDsBNDYLAUQ2CwBkNgsAdDYLAgYUJDsBFDUrAHQ7BGUlp5swUFBwdDsEBhQkOwQGFCsRAFQ7ARQ1KwBkOwRlJaebMFBQYGQ7BAYUJDsEBhQrEJBUOwEUNSsBJDsEZSWnmxEhJDsEBhQrEIBUOwEUOwQGFQebIGQAZDYEKzDQ8MCkOwEkOyAQEJQxAUEzpDsAZDsApDEDpDsBRDZbAQQxA6Q7AHQ2WwD0MQOi0AAACxAAAAQrE7AEOwAFB5uP+/QBAAAQAAAwQBAAABAAAEAgIAQ0VCQ2lCQ7AEQ0RDYEJDRUJDsAFDsAJDYWpgQkOwA0NEQ2BCHLEtAEOwAVB5swcFBQBDRUJDsF1QebIJBUBCHLIFCgVDYGlCuP/NswABAABDsAVDRENgQhy4LQAdAAAAAAAAAAAMAJYAAQAAAAAAAQANAAAAAQAAAAAAAgAHAA0AAQAAAAAAAwAgABQAAQAAAAAABAANAAAAAQAAAAAABQANADQAAQAAAAAABgAVAEEAAwABBAkAAQAaAFYAAwABBAkAAgAOAHAAAwABBAkAAwBAAH4AAwABBAkABAAqAL4AAwABBAkABQAaAOgAAwABBAkABgAqAL5XaXN0aWEtUGxheWVyUmVndWxhcjEuMDAzO1VLV047V2lzdGlhLVBsYXllci1SZWd1bGFyVmVyc2lvbiAxLjAzM1dpc3RpYS1QbGF5ZXItUmVndWxhcgBXAGkAcwB0AGkAYQAtAFAAbABhAHkAZQByAFIAZQBnAHUAbABhAHIAMQAuADAAMAAzADsAVQBLAFcATgA7AFcAaQBzAHQAaQBhAC0AUABsAGEAeQBlAHIALQBSAGUAZwB1AGwAYQByAFcAaQBzAHQAaQBhAC0AUABsAGEAeQBlAHIALQBSAGUAZwB1AGwAYQByAFYAZQByAHMAaQBvAG4AIAAxAC4AMAAzADMAAgAAAAAAAP8EACkAAAAAAAAAAAAAAAAAAAAAAAAAAABZAAAAAwAkACUAJgAnACgAKQAqACsALAAtAC4ALwAwADEAMgAzADQANQA2ADcAOAA5ADoAOwA8AD0ARABpAEUARgBHAEgAcABJAEoASwBMAHQATQBOAE8AUABRAHgAUgB5AFMAVABVAFYAVwBYAFkAWgBbAFwAXQATABQAFQAWABcAGAAZABoAGwAcALwAHQCrAAQABgARACIABQAKABIAPgBAAAsADAAQALQAtQC2ALcAxAABAAMABwAKABMAB///AA8AAQAAAAoAMABOAAJERkxUAA5sYXRuABoABAAAAAD//wABAAAABAAAAAD//wABAAEAAmtlcm4ADmtlcm4AFgAAAAIAAAABAAAAAgAAAAEAAgAGABQAAgAAAAQAFgIcBMYNCgACAAAAARIiAAESdAAEAAAAFAAyAFwAhgCgALoAwADuAPQBFgEcASIBQAFeAWQBggGgAbIBzAHeAfAACgAX/7gAGf+4ADH/7AA2/8kAOP/DAEv/4QBM/+EATv/sAFD/4QBS/+EACgAZ/9sAJ//OAC3/mAAw/1wAMf9SADb/cQA4/0gASwAUAE7/CgBT/3EABgAX/9cAGf+uADH/4QA4/+EATv9IAFD/7AAGAAL/1wBK/80ATv/DAFD/uABS/8MAWP/DAAEALf95AAsAF//sABn/wwAe/+EAJ/+vAC3/owAw/48AMf9tADb/rgA4/48ATv72AFP/mgABACf/2AAIABf/1wAx/7gANv97AEv/1wBM/80AUP/XAFL/7ABT/0gAAQAn/2kAAQAn//YABwA2/9cAOP/NAEv/hQBM/+EATv/HAFD/pABS/64ABwA2/9cAOP/NAEv/hQBM/+EATv/HAFD/pABS/64AAQBL/80ABwAx/9cAOP/sAEv/7ABO/2YAUP+uAFL/rgBT/+wABwAx/80ANv/sAEv/7ABM/9cAUP/XAFL/1wBT/8MABAAZ/80AMf/hADj/1wA8ADMABgAZ/8MAHv/sADD/cQAx/1gANv+uADj/ewAEABn/1wAx/6QANv+uADj/1wAEABn/7AAx/64ANv+uADj/1wAFABf/mgAZ/0gANv/sADj/wwA8/8MAAhCaAAQAABEqEVIACQAlAAD/qv/s/5r/zf+FAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8U/+z/Cv9c/s3/w/+k/+f/mv9S/8P/mv/T/+f/0//X/+f/0//s/2b/XAAU/80AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/1wAAAAAAAAAfAAD/zQAAAAAAAAAA/8P/zf/DAAD/zf/DAAAAAAAA/rgAAP/X/x//7P+u/9f/4QAAAAAAAAAAAAAAAAAAAAAAAP/XAAAAAAAAAAAAAP+aAAD/w/+4AAD/mv+P/5r/7P+P/5r/1//D/8P+zQAA/8P/H//X/4//mv+u/9f/zf/XAAAAAAAAAAAAAAAAAAAAAAAAAAD/1wAAAAAAAAAA/64AAP+a/6T/mv/N/6T/mv+4/67/rv+uAAAAAP/X/+H/pP+4/9cAAP/N/80APQAAAAAAAAAAAAAAAP72/7j/MwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9v/s/0gAAAAA/3H/XP/hAAD/1wAA/9cAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9cAAAAAAAAAAP+4AAD/mv+u/5r/zf+u/5r/uP+u/67/zQAAAAD/1wAA/6T/uP/XAAD/1//NADMAAAAAAAAAAAAAAAAAAAAAAAAAHwAAAAAAAAAAAAAAAP/h/+H/4QAA/+H/4QAAAAAAAP8zAAAAAP8z/+z/zf/h/+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/NAAAAAAAAAAD/mgAA/0j/WP9I/77/WP9I/3v/rv+u/x8AAAAA/vb/4f9E/2b/cQAA/67/cf/n/+f/7P/sAAIODAAEAAAPWg+SABUAMgAA/yn/1/9xAHH/1//h/1z/M/9x/x//SP97/x//7P/b/+H/2//N/+H/2//D/+H/hf9x/9P/5//N/0gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/XAAD/mgAAAAD/4QAAAAD/zQAA/+P/5/+4/+H/1//h/9f/4f/h/9f/4f/s/83/zQAA/+H/7AAA/9P/4f/X/9v/0f/s/+z/4f/sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/rv/DAAAAAP/DAAD/zQAAAAAAAP/D/9f/mgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/sAAAAAP+a/5r/7P++AAD/wwAA/+z/7P+4/7gAFAAAAAAAAAAAAAAAAAAAAAAAAAAA/+wAAP9xAAAAAP/XAAAAAP+aAAAAAP/s/9f/4f/N/9f/zf/X/9f/zf/X/+H/pP+aAAD/4QAAAAAAAAAAAAAAAP+8AAAAAP/sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/N/9cAAAAA/+wAAP/XAAD/7AAA/8P/4f+PAAAAAAAAAAD/7AAAAAD/7AAA/+z/5QAA/+wAAAAA/83/w//X/+EAAP/sAAD/4QAA/+z/4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/s/67/7P/NAAAAAP/y/+H/4f/N/80AAAAAAAAAAAAAAAAAAAAAAAAAAAAA/5r/1/9IAAAAAP/D/5b/w/9c/67/uP+u/4X/1/+q/8P/qv/D/8P/qv/D/7j/cf9mAAD/uP+4/4//wwAA/9cAAP+kAAD/4f/h/9cAAAAAAAD/5wAAAAAAAAAAAAAAAAAAAAAAAP8K/9f+pAAp/9f/4f8z/zP/XP8K/wD/cf7XAAD/4f/h/+H/zf/h/+H/w//s/3H/XAAAAAD/uP8z/9cAAAAAAAD/wwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/pP+uAAAAAP+4AAD/zQAAAAAAAP+8/83/e//sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/hAAAAAP+g/5r/5//TAAD/wwAA/+cAAP/D/7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/8P/1wAAAAD/7P/T/+EAAP/sAAD/0f/N/5r/x//N/9P/zQAA/9P/zQAA/+z/7P/sAAAAAP/sAAD/w//s/+z/4f/d/+f/4f/s/83/1//NABQAAAAAAAAAAAAAAAAAAAAAAAAAAP+u/83/1wAA/9f/7P+4/+H/uP/X/83/uP+B/+z/7P/s/+z/5//s/+z/4f/s/7j/uAAA/+EAAP+4/67/w//D/83/9v/h/+z/2wAA/+H/1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vYAAAAA/xQAAAAA/ykAAAAAAAAAAP8A/wr/FP8K/5r/FP8K/7j/M/8fAAAAAP/NAAD/4f/X/vb/H/9I/7z/zf9v/1H/Cv8K/wr/7AAA/zP/4f/s/+H/M/+a/+EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4f+u/+H/zQAAAAAAAP/s/+f/zf/NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/uAAAAAD/rgAAAAD/1wAAAAAAAP/s/5b/pP+u/6T/4f+u/6T/7P/D/9f/1wAA/+cAAP/s/9f/SP/N/3v/4f/w/67/uP+F/1z/XP/sAAD/w//s/+z/7P/D/83/7AAAAAD/4QAA/zMAAAAA/x//4QAA/3EAAAAA/+z/7P8K/wr/H/8K/6T/H/8K/6T/SP9x/3EAAP+TAAD/zf/N/rj/XP8f/4//1/9R/0j+4f7N/s3/4QAA/1z/4f/h/+H/XP+F/+EAAAAAAAD/7P9cAAAAAP/DAAAAAP+4AAAAAAAA/+z/zf+4/8P/uP/h/8P/uP/X/9P/uP+4AAD/7AAA/9f/7AAA/9f/7P/H/+z/1//s/+wAAAAAAAAAAP/sAAAAAAAA/+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/h/8P/w/+F/+z/7P/s/+z/4f/s/+z/4f/s/8P/yQAAAAAAAAAAAAAAAAAA/9H/8v/h/+z/zQAA/+z/7P/sAAAAAAAA/+z/7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAP8p/z3/Uv89/67/Uv89/9f/XP9x/3EAAP/JAAAAAAAAAAAAAP8z/7z/7P+i/4T+j/7h/uEAAAAAAAAAAAAAAAD/XP+4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/7P/n/83/uP/X/+H/1wAK/+H/1wAUAAAAAAAAAAD/7AAAAAAAAAAAAAD/cQAA/83/5//X/uH+4f7hAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/h/0z/Zv9t/2b/w/9t/2b/zf+P/67/rgAA/80AAP/hAAAAAAAA/yn/uP/h/3v/hf8f/xT/FP/hAAAAAAAA/+H/4f+P/6r/4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/1//s/+z/zf/X/67/uP+u/83/uP+u/9f/w/97/3sAAP/X/+H/pAAAAAAAAAAA/8MAAP/h/+z/4f/s/+wAAAAAAAAAAAAAAAD/7P/sAAD/wwACBggABAAACAIIQgAVAB8AAP/N/83/hf/h/+H/4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/83/zf+u/+X/3//d/+H/9v/s/9v/9v/d/93/4f/d/+H/3f/2//b/5wAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/rv+u/4//0//X/9MAAP/h/83/yf/N//IAAAAAAAAAAAAA/+wAAP/d/83/0//2//AAAAAAAAAAAAAAAAAAAAAAAAAAFP/2//b/7P/NAB//j//X/4//uP/T/83/0//N/9P/2wAA/83/jwAU/+EAAP/s//b/9v/2/+wAFAAAAAAAAP/NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfAAAAAAAAAAD/zf/N/4//zf/b/9cAAP/XAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/zf/h//YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwAAAAAAAAAA/83/zf+4/8f/w//H/8f/wwAA/+EAAP/R/83/x//N/8f/zf/h/83/7AAA/83/0//l/64AAAAAAAD/9v/sAAD/mv+a/3v/2//b/9MAAP/h/7j/1//J//YAAAAAAAAAAAAA/+wAAP/T/9P/w//h//YAAAAAAAAAAAAA/+wAAP+4/7j/7AAAAAAAAP/HAAD/Uv/n/wD/uP/N/8f/zf/H/83/1wAA/9v/AAAUAAAAFAAKAAAAAAAAABQAFAAA/7j/uP+a/83/zf/N/+z/w//X/83/5//2/+z/7P/s/+z/7P/sAAD/1//n/9f/7P/s/9cAAAAAAAAAAP/sAAD/1//X/+H/3f/d/9f/zf/h/9f/7P/s/+H/1//N/9f/zf/X//L/8P/h/+z/7P/N/+H/1wAAAAAAAP/2AAAAAP/N/83/zQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/67/rv/sAAAAAAAA/90AAP97/+z/e/+4/9v/3f/b/93/2//dAAD/5/9mAAAAAAAA//YAAAAAAAAAAAAAAAD/rv+u/+wAAAAAAAD/1wAA/2b/7P9m/77/zf/X/83/1//N/9cAAP/n/1IAAAAAAAD/7AAAAAAAAAAAAAAAAP/X/9f/4QAAAAAAAP/bAAAAAAAAAAD/5f/f/9v/3//b/9//8P/s/+wAAAAA//YAAP/sAAAAAAAAAAAAAAAAAAAAAAAAAAD/3f/XAAAAAAAAAAD/4f/wAAAAAAAAAAAAAP/wAAD/1//n/83/7P/2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/d/9cAAAAAAAAAAP/h//AAAAAAAAAAAAAA//AAAP/X/+f/zf/s//YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/Zv/H/9v/1//b/9f/2//lAAD/5/9SAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/s/+wAAAAAAAAAAAAA/9P/1//N/9f/zf/X/+f/5wAAAAD/1//sAAAAAAAAAAAAAAAAAAAAAQD+AAQAAAAKAB4AJAAqADAANgA8AEIASABOAFQAAQAAAEgAAQA8/+wAAQA8/+EAAQA8/+wAAQA8/+EAAQA8//YAAQA8AB8AAQA8AHEAAQA8ABQAAQA8ADMAAQAUAAMABwARABIAFQAXABgAGQAaABsAHgAwADEANgA4AEwATgBPAFEAUwABAAwARgBHAEoATABOAE8AUQBTAFQAVQBWAFcAAgAKAAIAGwAAACAAIAAaADwAPAAbAEQARQAcAEgASQAeAEsASwAgAE0ATQAhAFAAUAAiAFIAUgAjAFgAWAAkAAIABAAcAB8AAAAhACUABAAoACkACQArADoACwABAAoAPAA+AD8AQABBAEMARABFAEkATQABAEcAEQABAAAAAAABAAAABwAAAAgABAAAAAYAAAAFAAIAAwACAAMAAQACAFYAGQAAAAsAAAAAAAAAAAAAAAAAFgAAAAAAAAAAAAAAAAAAAAAAHwADABcAAQAEAAIABQAaABsAGwAAAA0ADgAPAA8AEAARACQAIgAiACEAJAAjACAAIAAgABIAEgAeAAgAIAAcAAYAEwAKABQAGAAVAB0AAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkAAAAAAAAAAAAAAAAAAAAAAAwAAAAMAAEAAwAZABAAAQACAAMAEQAEAAAAAAAFAAYABwAAAAAACAASAAgACQAKAAsADAATAA0AFAAOAA8AAQACAFcAIAAAACEAAAAAAAAAMQAAAAAAJQAAAAAAAAAAABkAAAAZAAAAGgALABsAAQAMAB0ADQAiAA4ADgArAA8AEAARABEAEgATADAAKAAoACwAMAAtAC4ALgAuABQAFAAqAAYALgAjABUAFgAJABcAHwAYACQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAC8AJgApAAAAJgAHAAgAAAAeAAAAAgAAAAUAAwAcAAoAHAAKACcAAQAeAB0AEAABAAAAAgACAAMABAAFAAAAAAAGAAcAAAAFAAUABQAIAAgAEQASAAkACgALAAwAEwANABQADgAPAAEAHAA9AAwADAAAAA0ADgAPAA8AFwAQAAAAGgAaABsAAAAcAAAAAAAAABEAEQAAAAcAAAASABgAEwAEAAUACgAGABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0AFQAAAAAAFQADAAgAAAAJAAAAAQAAAAIAGQAeABYAHgAWAAsAAQAAAAAAAAAAAAAAAAABAAAAAA=="
        }
    }
}(Wistia);
var __slice = [].slice;
(function (a) {
    var b;
    b = a;
    if (b.elem)return;
    return b.elem = {}, b.elem.html = function (a, c) {
        var d, e;
        return d = b.util.cssTags(c), e = b.util.scriptTags(c), c = b.util.removeCssTags(c), c = b.util.removeScriptTags(c), b.util.execCssTags(d), a.innerHTML = c, b.util.execScriptTags(e)
    }, b.elem.fromObject = function (a) {
        var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v;
        if (b.obj.isArray(a))return function () {
            var c, d, e;
            e = [];
            for (c = 0, d = a.length; c < d; c++)m = a[c], e.push(b.elem.fromObject(m));
            return e
        }();
        n = a.tagName || "div", e = a.childNodes || [], b.obj.isArray(e) || (e = [e]), h = document.createElement(n);
        for (j in a) {
            p = a[j];
            if (j === "childNodes" || j === "tagName")continue;
            g = j.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
            if (j === "style")if (b.obj.isObject(p))for (k in p)o = p[k], h.style[k] = o; else {
                u = p.split(";");
                for (q = 0, s = u.length; q < s; q++)l = u[q], v = l.split(/\s*:\s*/), k = v[0], o = v[1], k && o && (h.style[k] = o)
            } else if (j === "events")for (i in p)c = p[i], b.elem.bind(h, i, c); else j === "className" || j === "class" ? h.className = p : j === "innerHTML" ? h.innerHTML = p : p != null && typeof p == "string" && h.setAttribute(g, p.toString())
        }
        for (r = 0, t = e.length; r < t; r++)f = e[r], b.obj.isObject(f) ? (d = b.elem.fromObject(f), b.elem.append(h, d)) : (d = document.createTextNode(f.toString()), b.elem.append(h, d));
        return h
    }, b.elem.toObject = function (a) {
        var c, d, e, f, g, h, i, j, k, l, m, n, o, p;
        if (b.obj.isArray(a))return function () {
            var c, d, e;
            e = [];
            for (c = 0, d = a.length; c < d; c++)h = a[c], e.push(b.elem.toObject(h));
            return e
        }();
        g = {}, g.tagName = a.tagName.toLowerCase(), o = b.obj.keys(a);
        for (k = 0, m = o.length; k < m; k++) {
            c = o[k];
            if (c === "tagName" || c === "childNodes" || c === "nodeType" || c === "nodeValue")continue;
            if (c === "style") {
                g.style = {}, p = b.obj.keys(a.style);
                for (l = 0, n = p.length; l < n; l++)f = p[l], i = a.style[f], i && !/^\d/.test(f) && f !== "length" && (g.style[f] = i)
            } else j = a.getAttribute(c), j != null && (g[c] = j)
        }
        return e = function () {
            var c, e, f, g;
            f = a.childNodes, g = [];
            for (c = 0, e = f.length; c < e; c++)d = f[c], d.nodeType === 1 ? g.push(b.elem.toObject(d)) : d.nodeType === 3 ? g.push(d.nodeValue) : g.push(null);
            return g
        }(), e = function () {
            var a, b, c;
            c = [];
            for (a = 0, b = e.length; a < b; a++)d = e[a], d && c.push(d);
            return c
        }(), e.length !== 0 && (g.childNodes = e), g
    }, b.elem.clone = function (a) {
        var b;
        return b = this.toObject(a), this.fromObject(b)
    }, b.elem.append = function (a, c) {
        var d, e, f;
        if (b.obj.isArray(c)) {
            for (e = 0, f = c.length; e < f; e++)d = c[e], b.elem.append(a, d);
            return
        }
        return a.appendChild(c)
    }, b.elem.prepend = function (a, c) {
        var d, e, f;
        if (b.obj.isArray(c)) {
            for (e = 0, f = c.length; e < f; e++)d = c[e], b.elem.prepend(a, d);
            return
        }
        return a.childNodes.length === 0 ? this.append(a, c) : a.insertBefore(c, a.childNodes[0])
    }, b.elem.before = function (a, c) {
        var d, e, f, g;
        if (b.obj.isArray(c)) {
            g = c.reverse();
            for (e = 0, f = g.length; e < f; e++)d = g[e], b.elem.before(a, d);
            return
        }
        return a.parentNode.insertBefore(c, a)
    }, b.elem.after = function (a, c) {
        var d, e, f, g;
        if (b.obj.isArray(c)) {
            g = c.reverse();
            for (e = 0, f = g.length; e < f; e++)d = g[e], b.elem.after(a, d);
            return
        }
        return a.parentNode.insertBefore(c, a.nextSibling)
    }, b.elem.remove = function (a) {
        var c, d, e, f;
        if (b.obj.isArray(a) || window.NodeList && a instanceof NodeList) {
            for (e = 0, f = a.length; e < f; e++)c = a[e], b.elem.remove(c);
            return
        }
        if ((a != null ? a.nodeType : void 0) === 1 && (d = a.parentNode))return d.removeChild(a), a = null
    }, b.elem.removeClass = function (a, b) {
        var c;
        if (!this.hasClass(a, b))return;
        if (a.className != null)return c = new RegExp("" + b, "g"), a.className = this.normalizeClassName(a.className.replace(c, ""))
    }, b.elem.addClass = function (a, b) {
        if (this.hasClass(a, b))return;
        return a.className != null ? (this.removeClass(a, b), a.className = this.normalizeClassName("" + a.className + " " + b)) : a.className = b
    }, b.elem.hasClass = function (a, b) {
        var c, d, e, f, g;
        return (a != null ? (g = a.className) != null ? g.indexOf : void 0 : void 0) ? (f = a.className.indexOf(b), c = f === 0 || a.className.charAt(f - 1) === " ", e = f + b.length === a.className.length, d = a.className.charAt(f + b.length) === " ", c && (e || d)) : !1
    }, b.elem.classes = function (a) {
        return (a.className || "").split(/\s+/)
    }, b.elem.normalizeClassName = function (a) {
        return a.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " ")
    }, b.elem.style = function () {
        var a, c, d, e, f, g, h, i, j;
        d = arguments[0], a = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        if (d instanceof Array || window.NodeList && d instanceof NodeList)return h = function () {
            var c, f, g, h;
            h = [];
            for (c = 0, f = d.length; c < f; c++)e = d[c], e.nodeType === 1 ? h.push((g = b.elem).style.apply(g, [e].concat(__slice.call(a)))) : h.push(void 0);
            return h
        }(), h;
        if (a.length === 2)return f = a[0], i = a[1], d.style[f] = i;
        if (a.length !== 1)return b.log.apply(b, ["Unexpected args for Wistia.elem.style", d].concat(__slice.call(a)));
        if (typeof a[0] != "string") {
            g = this.propsWithVendorPrefixes(a[0]), j = [];
            for (f in g)i = g[f], j.push(d.style[f] = i);
            return j
        }
        f = a[0];
        try {
            return d.currentStyle ? d.currentStyle[f] : window.getComputedStyle ? getComputedStyle(d, null).getPropertyValue(f) : null
        } catch (k) {
            return c = k, b.notice(c)
        }
    }, b.elem.vendoredProperties = function () {
        return {mixBlendMode: !0, transition: !0, transform: !0}
    }, b.elem.vendoredProperty = function (a) {
        return this.vendoredProperties()[a]
    }, b.elem.vendorPrefixes = function () {
        return ["webkit", "moz", "o", "ms"]
    }, b.elem.propsWithVendorPrefixes = function (a) {
        var b, c, d, e, f, g, h, i;
        e = {};
        for (d in a) {
            f = a[d], e[d] = f;
            if (this.vendoredProperty(d)) {
                i = this.vendorPrefixes();
                for (g = 0, h = i.length; g < h; g++)b = i[g], c = b + d.charAt(0).toUpperCase() + d.slice(1), d[c] || (e[c] = f)
            }
        }
        return e
    }, b.elem.width = function (a) {
        var c, d, e, f;
        return a === window ? window.innerWidth ? window.innerWidth : document.documentElement ? document.documentElement.offsetWidth : document.body.offsetWidth : a === document ? (c = document.body, d = document.documentElement, Math.max(c.scrollWidth, c.offsetWidth, d.clientWidth, d.scrollWidth, d.offsetWidth)) : b.detect.browser.quirks ? parseInt(a.offsetWidth, 10) : (e = typeof window.getComputedStyle == "function" ? (f = window.getComputedStyle(a, null)) != null ? f.width : void 0 : void 0) ? parseInt(e, 10) : a.currentStyle ? a.offsetWidth : -1
    }, b.elem.height = function (a) {
        var c, d, e, f;
        return a === window ? window.innerHeight ? window.innerHeight : document.documentElement ? document.documentElement.offsetHeight : document.body.offsetHeight : a === document ? (c = document.body, d = document.documentElement, Math.max(c.scrollHeight, c.offsetHeight, d.clientHeight, d.scrollHeight, d.offsetHeight)) : b.detect.browser.quirks ? parseInt(a.offsetHeight, 10) : (e = typeof window.getComputedStyle == "function" ? (f = window.getComputedStyle(a, null)) != null ? f.height : void 0 : void 0) ? parseInt(e, 10) : a.currentStyle ? a.offsetHeight : -1
    }, b.elem.isBoxModel = function () {
        var a;
        return this._isBoxModel != null ? this._isBoxModel : (a = document.createElement("div"), a.style.paddingLeft = a.style.width = "1px", document.body.appendChild(a), this._isBoxModel = a.offsetWidth === 2, document.body.removeChild(a), this._isBoxModel)
    }, b.elem.offset = function (a) {
        var b, c, d, e, f, g, h, i, j;
        return b = document.body, j = document.defaultView, f = document.documentElement, g = this.isBoxModel(), c = a.getBoundingClientRect(), e = f.clientTop || b.clientTop || 0, d = f.clientLeft || b.clientLeft || 0, i = (j != null ? j.pageYOffset : void 0) || g && f.scrollTop || b.scrollTop, h = (j != null ? j.pageXOffset : void 0) || g && f.scrollLeft || b.scrollLeft, {
            top: c.top + i - e,
            left: c.left + h - d
        }
    }, b.elem.containsOffset = function (a, c, d) {
        var e;
        return e = this.offset(a), e.right = e.left + b.elem.width(a), e.bottom = e.top + b.elem.height(a), e.left <= c && c < e.right && e.top <= d && d < e.bottom
    }, b.elem.scrollOffset = function (a) {
        var b, c;
        b = c = 0;
        if (a.parentNode)while (a != null ? a.offsetParent : void 0)c += a.scrollTop, b += a.scrollLeft, a = a.parentNode;
        return {left: b, top: c}
    }, b.elem.isHidden = function (a) {
        if (a.offsetParent === null && b.elem.style(a, "position") !== "fixed")return !0;
        while (a && a.nodeType === 1) {
            if (b.elem.style(a, "display") === "none")return !0;
            a = a.parentNode
        }
        return !1
    }, b.elem.inDom = function (a) {
        while (a = a.parentNode)if (a === document)return !0;
        return !1
    }, b.elem.isDescendantOf = function (a, b) {
        var c, d, e, f;
        f = this.ancestors(a);
        for (d = 0, e = f.length; d < e; d++) {
            c = f[d];
            if (c === b)return !0
        }
        return !1
    }, b.elem.ancestorHasClass = function (a, b) {
        var c, d, e, f;
        f = this.ancestors(a);
        for (d = 0, e = f.length; d < e; d++) {
            c = f[d];
            if (this.hasClass(c, b))return !0
        }
        return !1
    }, b.elem.ancestors = function (a) {
        var b, c;
        b = a, c = [];
        while (b = b.parentNode)c.push(b);
        return c
    }, b.elem.isInside = function (a, b) {
        return a === b || this.isDescendantOf(a, b)
    }, b.elem.animate = function (a, c, d) {
        var e, f, g;
        return c == null && (c = {}), d == null && (d = {}), d = b.obj.merge({
            time: 400,
            easing: "ease"
        }, d), f = function () {
            var a;
            a = [];
            for (e in c)g = c[e], a.push("" + e + " " + d.time + "ms " + d.easing);
            return a
        }().join(","), b.elem.style(a, {transition: f}), b.util.requestAnimationFrame(function () {
            return b.elem.style(a, c), setTimeout(function () {
                return b.elem.style(a, {transition: ""}), typeof d.callback == "function" ? d.callback() : void 0
            }, d.time)
        })
    }, b.elem.bind = function (a, c, d) {
        var e, f, g = this;
        return e = function () {
            var e, f, h, i;
            return f = arguments[0], e = 2 <= arguments.length ? __slice.call(arguments, 1) : [], f = f || window.event, !f.pageX && !f.pageY && (f.clientX || f.clientY) && (f.pageX = f.clientX + b.util.scrollLeft(), f.pageY = f.clientY + b.util.scrollTop()), f.preventDefault || (f.preventDefault = function () {
                return f.returnValue = !1
            }), f.stopPropagation || (f.stopPropagation = function () {
                return f.cancelBubble = !0
            }), f.which == null && (f.which = f.charCode != null ? f.charCode : f.keyCode), !f.which && f.button != null && (f.which = f.button & 1 ? 1 : f.button & 2 ? 3 : f.button & 4 ? 2 : b.detect.browser.msie && f.button === 0 ? 1 : 0), f.target || f.srcElement && (f.target = f.srcElement), ((i = f.target) != null ? i.nodeType : void 0) === 3 && (f.target = f.target.parentNode), h = d.apply(f.target, [f].concat(e)), h === g.unbind && g.unbind(a, c, d), h
        }, b._elemBind || (b._elemBind = {}), f = this._bindKey(a, c, d), b._elemBind[f] = e, e.elem = a, e.event = c, b.detect.browser.msie && b.detect.browser.version < 9 ? a.attachEvent("on" + c, e) : a.addEventListener(c, e, !1)
    }, b.elem.unbind = function (a, c, d) {
        var e, f;
        if (a._wistiaElemId == null || (d != null ? !d._wistiaBindId : !void 0))return;
        return f = this._bindKey(a, c, d), e = b._elemBind[f], e && (b.detect.browser.msie && b.detect.browser.version < 9 ? a.detachEvent("on" + c, e) : a.removeEventListener(c, e, !1), e.elem = null, e.event = null), delete b._elemBind[f]
    }, b.elem.unbindAll = function (a) {
        var c, d, e, f, g;
        f = b._elemBind, g = [];
        for (e in f)d = f[e], d && a === d.elem ? (c = d.event, b.detect.browser.msie && b.detect.browser.version < 9 ? d.elem.detachEvent("on" + c, d) : d.elem.removeEventListener(c, d, !1), d.elem = null, d.event = null, g.push(delete b._elemBind[e])) : g.push(void 0);
        return g
    }, b.elem.unbindAllInside = function (a) {
        var c, d, e, f, g;
        f = b._elemBind, g = [];
        for (e in f)d = f[e], d && b.elem.isInside(d.elem, a) ? (c = d.event, b.detect.browser.msie && b.detect.browser.version < 9 ? d.elem.detachEvent("on" + c, d) : d.elem.removeEventListener(c, d, !1), d.elem = null, d.event = null, g.push(delete b._elemBind[e])) : g.push(void 0);
        return g
    }, b.elem._bindKey = function (a, c, d) {
        return a._wistiaElemId || (a._wistiaElemId = b.seqId("wistia_elem_")), d._wistiaBindId || (d._wistiaBindId = b.seqId("wistia_bind_")), "" + a._wistiaElemId + "." + c + "." + d._wistiaBindId
    }, b.elem.rebind = function (a, b, c) {
        if (c)return this.unbind(a, b, c), this.bind(a, b, c)
    }, b.elem.bindOnce = function (a, c, d) {
        var e;
        return e = function () {
            return d.call.apply(d, [this].concat(__slice.call(arguments))), b.elem.unbind
        }, this.bind(a, c, e)
    }, b.elem.trigger = function () {
        var a, b, c, d;
        return b = arguments[0], c = arguments[1], a = 3 <= arguments.length ? __slice.call(arguments, 2) : [], b.fireEvent ? b.fireEvent("on" + c) : (d = document.createEvent("Events"), d.initEvent(c, !0, !1), c === "click" || c === "doubleclick" ? d.which = 1 : c === "rightclick" && (d.which = 2), d.target = b, b.dispatchEvent(d))
    }, b.elem.fullscreenElement = function () {
        return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement
    }, b.elem.requestFullscreen = function (a) {
        return a.requestFullscreen ? a.requestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullscreen ? a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : a.msRequestFullscreen ? a.msRequestFullscreen() : a.webkitEnterFullscreen ? a.webkitEnterFullscreen() : typeof console != "undefined" && console !== null ? console.log("no requestFullscreen functionality detected") : void 0
    }, b.elem.cancelFullscreen = function (a) {
        return document.cancelFullscreen ? document.cancelFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : (a != null ? a.webkitExitFullscreen : void 0) ? a.webkitExitFullscreen() : typeof console != "undefined" && console !== null ? console.log("no cancelFullscreen functionality detected") : void 0
    }, b.elem.stripEventAttributes = function (a) {
        var b, c, d, e, f, g, h, i, j, k;
        c = (a != null ? a.attributes : void 0) || [];
        try {
            for (f = 0, h = c.length; f < h; f++)b = c[f], /^on.+/i.test(b.name) && (a[b.name] = null, a.removeAttribute(b.name))
        } catch (l) {
            e = l, typeof console != "undefined" && console !== null && console.log(e)
        }
        j = a != null ? a.childNodes : void 0, k = [];
        for (g = 0, i = j.length; g < i; g++)d = j[g], d.nodeType === 1 ? k.push(this.stripEventAttributes(d)) : k.push(void 0);
        return k
    }, b.elem.mutationObserver = function (a) {
        var c;
        return c = b._detect.mutationObserver(), c ? new window[c](a) : null
    }, b.elem.domDistance = function (a, b) {
        var c, d, e, f, g;
        if (a === b)return {up: 0, across: 0, down: 0};
        d = [a], e = [b], c = 1, g = 0, f = null;
        while (a !== document.body) {
            a = a.parentNode;
            if (a === b)return {up: d.length, across: 0, down: 0};
            d.unshift(a)
        }
        a = d[d.length - 1];
        while (b !== document.body) {
            b = b.parentNode;
            if (b === a)return {up: 0, across: 0, down: e.length};
            e.unshift(b)
        }
        while (d[c] === e[c])c += 1;
        f = d[c];
        while (f) {
            f = f.nextSibling;
            if (f != null ? f.tagName : void 0) {
                g += 1;
                if (f === e[c])return {up: d.length - c - 1, across: g, down: e.length - c - 1}
            }
        }
        g = 0, f = d[c];
        while (f) {
            f = f.previousSibling;
            if (f != null ? f.tagName : void 0) {
                g -= 1;
                if (f === e[c])return {up: d.length - c - 1, across: g, down: e.length - c - 1}
            }
        }
    }, b.elem.allBetween = function (a, c, d) {
        var e, f, g, h, i, j, k, l;
        a == null && (a = document.body), c == null && (c = document.body), d == null && (d = "*"), j = [], d = d.toLowerCase(), f = b.elem.domDistance(a, c), i = a, h = 0, l = null;
        while (h < f.up) {
            if (i != null ? i.tagName : void 0) {
                if (d === "*" || i.tagName.toLowerCase() === d)j = j.concat([i]);
                k = i.nextSibling;
                while (k) {
                    if (k.tagName) {
                        if (d === "*" || k.tagName.toLowerCase() === d)j = j.concat([k]);
                        j = j.concat(b.util.aps(k.getElementsByTagName(d)))
                    }
                    k = k.nextSibling
                }
            }
            i = i.parentNode, i && (l = i), h += 1
        }
        e = Math.abs(f.across), i = l || a, h = 1;
        while (h < e) {
            f.across < 0 ? i = i.previousSibling : i = i.nextSibling;
            if (i.tagName) {
                if (0 < h && h < e) {
                    if (d === "*" || i.tagName.toLowerCase() === d)j = j.concat([i]);
                    j = j.concat(b.util.aps(i.getElementsByTagName(d)))
                }
                h += 1
            }
        }
        g = [], i = c, h = 0;
        while (h < f.down) {
            if (i != null ? i.tagName : void 0) {
                if (d === "*" || i.tagName.toLowerCase() === d)g = g.concat([i]);
                k = i.previousSibling;
                while (k) {
                    if (k.tagName) {
                        if (d === "*" || k.tagName.toLowerCase() === d)g = g.concat([k]);
                        g = g.concat(b.util.aps(k.getElementsByTagName(d)).reverse())
                    }
                    k = k.previousSibling
                }
            }
            i = i.parentNode, h += 1
        }
        return j = j.concat(g.reverse()), j
    }
})(Wistia);
var __slice = [].slice;
(function (a) {
    var b, c, d, e;
    if (a.bindable)return;
    a.bindable = {
        bind: function (b, c) {
            return a.debug(this.constructor.name, "bind", b), this._bindings || (this._bindings = {}), (typeof this.specialBind == "function" ? this.specialBind.apply(this, arguments) : void 0) === !0 ? this : (this._bindings[b] || (this._bindings[b] = []), this._bindings[b].push(c), this)
        }, unbind: function (b, c) {
            var d, e, f, g, h;
            a.debug(this.constructor.name, "unbind", b), this._bindings || (this._bindings = {});
            if ((typeof this.specialUnbind == "function" ? this.specialUnbind.apply(this, arguments) : void 0) === !0)return this;
            d = this._bindings[b];
            if (d)if (c) {
                f = [];
                for (e = g = 0, h = d.length; 0 <= h ? g < h : g > h; e = 0 <= h ? ++g : --g)c !== d[e] && f.push(d[e]);
                this._bindings[b] = f
            } else this._bindings[b] = [];
            return this._bindings[b] && !this._bindings[b].length && (this._bindings[b] = null, delete this._bindings[b]), this
        }, rebind: function (a, b) {
            return this.unbind(a, b), this.bind(a, b)
        }, hasBindings: function () {
            var a, b, c, d;
            this._bindings || (this._bindings = {}), b = !1, d = this._bindings;
            for (a in d)c = d[a], this._bindings.hasOwnProperty(a) && (b = !0);
            return b
        }, trigger: function () {
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p;
            g = arguments[0], b = 2 <= arguments.length ? __slice.call(arguments, 1) : [], g !== "flushlogs" && a.debug.apply(a, [this.constructor.name, "trigger", g].concat(__slice.call(b))), this._bindings || (this._bindings = {}), h = [];
            if (d = this._bindings[g]) {
                for (i = 0, m = d.length; i < m; i++) {
                    e = d[i];
                    try {
                        e && e.apply(this, b) === this.unbind && h.push({event: g, fn: e})
                    } catch (q) {
                        f = q, typeof f == "string" ? typeof console != "undefined" && console !== null && console.log(f) : (f.message && typeof console != "undefined" && console !== null && console.log(f.message), f.stack && typeof console != "undefined" && console !== null && console.log(f.stack))
                    }
                }
                for (j = 0, n = h.length; j < n; j++)c = h[j], this.unbind(c.event, c.fn)
            }
            if (d = this._bindings.all)for (k = 0, o = d.length; k < o; k++) {
                e = d[k];
                try {
                    e && e.apply(this, [g].concat(b)) === this.unbind && h.push({event: g, fn: e})
                } catch (q) {
                    f = q, typeof f == "string" ? typeof console != "undefined" && console !== null && console.log(f) : (f.message && typeof console != "undefined" && console !== null && console.log(f.message), f.stack && typeof console != "undefined" && console !== null && console.log(f.stack))
                }
            }
            for (l = 0, p = h.length; l < p; l++)c = h[l], this.unbind(c.event, c.fn);
            return this
        }
    }, d = a.bindable, e = [];
    for (b in d)c = d[b], a[b] ? e.push(void 0) : e.push(a[b] = c);
    return e
})(Wistia);
var __slice = [].slice;
(function (a) {
    return a.StopGo = function () {
        function a() {
            var a = this;
            return this._queue = [], this._green = !1, this._lock = !1, this.allInOne = function () {
                return a._allInOne.apply(a, arguments)
            }, this.defineMethodsOn(this.allInOne), this.allInOne
        }

        return a.prototype.defineMethodsOn = function (a) {
            var b, c, d, e, f = this;
            b = {}, e = [];
            for (c in this)d = this[c], e.push(function (c, d, e) {
                if (b.toString.call(d) === "[object Function]")return a[c] = function () {
                    return e[c].apply(e, arguments)
                }
            }(c, d, this));
            return e
        }, a.prototype.flush = function () {
            var a, b, c = this;
            a = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            if (!this._green)return this;
            this._lock = !0;
            while (this._queue.length > 0) {
                b = this._queue.shift(), a.length || !this.goArgs ? this.tryAndReport(function () {
                    return b.apply(null, a)
                }) : this.tryAndReport(function () {
                    return b.apply(null, c.goArgs)
                });
                if (this._block || !this._green)break
            }
            return this._lock = !1, this
        }, a.prototype._debug = function () {
            return typeof console != "undefined" && console !== null ? console.log.apply(console, arguments) : void 0
        }, a.prototype.synchronize = function () {
            var a, b, c, d;
            b = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            for (c = 0, d = b.length; c < d; c++)a = b[c], this.synchronizeFn(a);
            return this
        }, a.prototype.synchronizeFn = function (a) {
            var b, c, d, e = this;
            return c = null, b = function () {
                return clearTimeout(c), e._block = !1, e.go()
            }, d = function () {
                return e._block = !0, e.stop(), a(b)
            }, c = setTimeout(function () {
                return e._debug("StopGo#synchronize timed out", a), b()
            }, 5e3), this.runFn(d), this
        }, a.prototype.tryAndReport = function (a) {
            var b;
            try {
                return a()
            } catch (c) {
                return b = c, b.stack ? (typeof console != "undefined" && console !== null && console.log(b.message), typeof console != "undefined" && console !== null ? console.log(b.stack) : void 0) : typeof console != "undefined" && console !== null ? console.log(b) : void 0
            }
        }, a.prototype.clearSynchronized = function () {
            return this.setQueue([]), this._block = !1, this._green = !0
        }, a.prototype.filter = function (a) {
            var b;
            return this._queue = function () {
                var c, d, e, f;
                e = this._queue, f = [];
                for (c = 0, d = e.length; c < d; c++)b = e[c], a(b) && f.push(b);
                return f
            }.call(this), this
        }, a.prototype.push = function (a) {
            return this._queue.push(a), this
        }, a.prototype.go = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._green = !0, this.goArgs = a, this.flush.apply(this, a), this
        }, a.prototype.stop = function () {
            return this._green = !1, this
        }, a.prototype.run = function () {
            var a, b, c, d;
            b = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            for (c = 0, d = b.length; c < d; c++)a = b[c], this.runFn(a);
            return this
        }, a.prototype.runFn = function (a) {
            return this._green && !this._block ? this._lock ? this.tryAndReport(a) : (this.push(a), this.flush()) : this.push(a), this
        }, a.prototype.remove = function () {
            var a, b, c, d;
            b = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            for (c = 0, d = b.length; c < d; c++)a = b[c], this.removeFn(a);
            return this
        }, a.prototype.removeFn = function (a) {
            return this.filter(function (b) {
                return a !== b
            }), this
        }, a.prototype.setQueue = function (a) {
            return this._queue = a, this
        }, a.prototype.getQueue = function () {
            return this._queue
        }, a.prototype._allInOne = function () {
            var a, b;
            return a = arguments[0], b = 2 <= arguments.length ? __slice.call(arguments, 1) : [], a === !0 ? this.go.apply(this, b) : a === !1 ? this.stop() : a != null ? a instanceof Array ? this.run.apply(this, a) : typeof a == "string" ? this[a].apply(this, b) : this.run.apply(this, arguments) : this._green
        }, a
    }(), a.StopGo.when = function () {
        var b, c, d, e, f, g, h, i;
        e = 1 <= arguments.length ? __slice.call(arguments, 0) : [], c = new a.StopGo, b = function () {
            return c.go.apply(c, arguments)
        }, i = e.reverse(), f = function (a, c) {
            return b = function () {
                return c(function () {
                    return a.apply(null, arguments)
                })
            }
        };
        for (g = 0, h = i.length; g < h; g++)d = i[g], f(b, d);
        return b(), c
    }, a.StopGo.prototype._debug = function () {
        return a.notice.apply(a, arguments)
    }
})(Wistia), function () {
    function y(b) {
        var c, e, g, h = '{"A":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}', i = b == "json";
        if (i || b == "json-stringify" || b == "json-parse") {
            if (b == "json-stringify" || i) {
                if (c = typeof f.stringify == "function" && t) {
                    (g = function () {
                        return 1
                    }).toJSON = g;
                    try {
                        c = f.stringify(0) === "0" && f.stringify(new Number) === "0" && f.stringify(new String) == '""' && f.stringify(a) === d && f.stringify(d) === d && f.stringify() === d && f.stringify(g) === "1" && f.stringify([g]) == "[1]" && f.stringify([d]) == "[null]" && f.stringify(null) == "null" && f.stringify([d, a, null]) == "[null,null,null]" && f.stringify({A: [g, true, false, null, "\0\b\n\f\r\t"]}) == h && f.stringify(null, g) === "1" && f.stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" && f.stringify(new Date(-864e13)) == '"-271821-04-20T00:00:00.000Z"' && f.stringify(new Date(864e13)) == '"+275760-09-13T00:00:00.000Z"' && f.stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' && f.stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"'
                    } catch (j) {
                        c = !1
                    }
                }
                if (!i)return c
            }
            if (b == "json-parse" || i) {
                if (typeof f.parse == "function")try {
                    if (f.parse("0") === 0 && !f.parse(!1)) {
                        g = f.parse(h);
                        if (e = g.A.length == 5 && g.A[0] == 1) {
                            try {
                                e = !f.parse('"\t"')
                            } catch (j) {
                            }
                            if (e)try {
                                e = f.parse("01") != 1
                            } catch (j) {
                            }
                        }
                    }
                } catch (j) {
                    e = !1
                }
                if (!i)return e
            }
            return c && e
        }
    }

    var a = {}.toString, b, c, d, e = typeof define == "function" && define.amd, f = !e && typeof exports == "object" && exports;
    f = this.JSON || (this.JSON = {});
    var g, h, i, j, k, l, m, n, o, p, q, r, s, t = new Date(-0xc782b5b800cec), u, v, w;
    try {
        t = t.getUTCFullYear() == -109252 && t.getUTCMonth() === 0 && t.getUTCDate() == 1 && t.getUTCHours() == 10 && t.getUTCMinutes() == 37 && t.getUTCSeconds() == 6 && t.getUTCMilliseconds() == 708
    } catch (x) {
    }
    y("json") || (t || (u = Math.floor, v = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], w = function (a, b) {
        return v[b] + 365 * (a - 1970) + u((a - 1969 + (b = +(b > 1))) / 4) - u((a - 1901 + b) / 100) + u((a - 1601 + b) / 400)
    }), (b = {}.hasOwnProperty) || (b = function (c) {
        var d = {}, e;
        return (d.__proto__ = null, d.__proto__ = {toString: 1}, d).toString != a ? b = function (a) {
            var b = this.__proto__, c = a in (this.__proto__ = null, this);
            return this.__proto__ = b, c
        } : (e = d.constructor, b = function (a) {
            var b = (this.constructor || e).prototype;
            return a in this && !(a in b && this[a] === b[a])
        }), d = null, b.call(this, c)
    }), c = function (c, d) {
        var e = 0, f, g, h, i;
        (f = function () {
            this.valueOf = 0
        }).prototype.valueOf = 0, g = new f;
        for (h in g)b.call(g, h) && e++;
        return f = g = null, e ? e == 2 ? i = function (c, d) {
            var e = {}, f = a.call(c) == "[object Function]", g;
            for (g in c)(!f || g != "prototype") && !b.call(e, g) && (e[g] = 1) && b.call(c, g) && d(g)
        } : i = function (c, d) {
            var e = a.call(c) == "[object Function]", f, g;
            for (f in c)(!e || f != "prototype") && b.call(c, f) && !(g = f === "constructor") && d(f);
            (g || b.call(c, f = "constructor")) && d(f)
        } : (g = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], i = function (c, d) {
            var e = a.call(c) == "[object Function]", f, h;
            for (f in c)(!e || f != "prototype") && b.call(c, f) && d(f);
            for (h = g.length; f = g[--h]; b.call(c, f) && d(f));
        }), i(c, d)
    }, y("json-stringify") || (g = {
        "\\": "\\\\",
        '"': '\\"',
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t"
    }, h = function (a, b) {
        return ("000000" + (b || 0)).slice(-a)
    }, i = function (a) {
        var b = '"', c = 0, d;
        for (; d = a.charAt(c); c++)b += '\\"\b\f\n\r\t'.indexOf(d) > -1 ? g[d] : g[d] = d < " " ? "\\u00" + h(2, d.charCodeAt(0).toString(16)) : d;
        return b + '"'
    }, j = function (e, f, g, k, l, m, n) {
        var o = f[e], p, q, r, s, t, v, x, y, z, A, B, C, D, E, F, G;
        if (typeof o == "object" && o) {
            p = a.call(o);
            if (p == "[object Date]" && !b.call(o, "toJSON"))if (o > -1 / 0 && o < 1 / 0) {
                if (w) {
                    s = u(o / 864e5);
                    for (q = u(s / 365.2425) + 1970 - 1; w(q + 1, 0) <= s; q++);
                    for (r = u((s - w(q, 0)) / 30.42); w(q, r + 1) <= s; r++);
                    s = 1 + s - w(q, r), t = (o % 864e5 + 864e5) % 864e5, v = u(t / 36e5) % 24, x = u(t / 6e4) % 60, y = u(t / 1e3) % 60, z = t % 1e3
                } else q = o.getUTCFullYear(), r = o.getUTCMonth(), s = o.getUTCDate(), v = o.getUTCHours(), x = o.getUTCMinutes(), y = o.getUTCSeconds(), z = o.getUTCMilliseconds();
                o = (q <= 0 || q >= 1e4 ? (q < 0 ? "-" : "+") + h(6, q < 0 ? -q : q) : h(4, q)) + "-" + h(2, r + 1) + "-" + h(2, s) + "T" + h(2, v) + ":" + h(2, x) + ":" + h(2, y) + "." + h(3, z) + "Z"
            } else o = null; else typeof o.toJSON == "function" && (p != "[object Number]" && p != "[object String]" && p != "[object Array]" || b.call(o, "toJSON")) && (o = o.toJSON(e))
        }
        g && (o = g.call(f, e, o));
        if (o === null)return "null";
        p = a.call(o);
        if (p == "[object Boolean]")return "" + o;
        if (p == "[object Number]")return o > -1 / 0 && o < 1 / 0 ? "" + o : "null";
        if (p == "[object String]")return i(o);
        if (typeof o == "object") {
            for (D = n.length; D--;)if (n[D] === o)throw TypeError();
            n.push(o), A = [], E = m, m += l;
            if (p == "[object Array]") {
                for (C = 0, D = o.length; C < D; F || (F = !0), C++)B = j(C, o, g, k, l, m, n), A.push(B === d ? "null" : B);
                G = F ? l ? "[\n" + m + A.join(",\n" + m) + "\n" + E + "]" : "[" + A.join(",") + "]" : "[]"
            } else c(k || o, function (a) {
                var b = j(a, o, g, k, l, m, n);
                b !== d && A.push(i(a) + ":" + (l ? " " : "") + b), F || (F = !0)
            }), G = F ? l ? "{\n" + m + A.join(",\n" + m) + "\n" + E + "}" : "{" + A.join(",") + "}" : "{}";
            return n.pop(), G
        }
    }, f.stringify = function (b, c, d) {
        var e, f, g, h, i, k;
        if (typeof c == "function" || typeof c == "object" && c)if (a.call(c) == "[object Function]")f = c; else if (a.call(c) == "[object Array]") {
            g = {};
            for (h = 0, i = c.length; h < i; k = c[h++], (a.call(k) == "[object String]" || a.call(k) == "[object Number]") && (g[k] = 1));
        }
        if (d)if (a.call(d) == "[object Number]") {
            if ((d -= d % 1) > 0)for (e = "", d > 10 && (d = 10); e.length < d; e += " ");
        } else a.call(d) == "[object String]" && (e = d.length <= 10 ? d : d.slice(0, 10));
        return j("", (k = {}, k[""] = b, k), f, g, e, "", [])
    }), y("json-parse") || (k = String.fromCharCode, l = {
        "\\": "\\",
        '"': '"',
        "/": "/",
        b: "\b",
        t: "\t",
        n: "\n",
        f: "\f",
        r: "\r"
    }, m = function () {
        throw r = s = null, SyntaxError()
    }, n = function () {
        var a = s, b = a.length, c, d, e, f, g;
        while (r < b) {
            c = a.charAt(r);
            if ("\t\r\n ".indexOf(c) > -1)r++; else {
                if ("{}[]:,".indexOf(c) > -1)return r++, c;
                if (c == '"') {
                    for (d = "@", r++; r < b;) {
                        c = a.charAt(r);
                        if (c < " ")m(); else if (c == "\\") {
                            c = a.charAt(++r);
                            if ('\\"/btnfr'.indexOf(c) > -1)d += l[c], r++; else if (c == "u") {
                                e = ++r;
                                for (f = r + 4; r < f; r++)c = a.charAt(r), c >= "0" && c <= "9" || c >= "a" && c <= "f" || c >= "A" && c <= "F" || m();
                                d += k("0x" + a.slice(e, r))
                            } else m()
                        } else {
                            if (c == '"')break;
                            d += c, r++
                        }
                    }
                    if (a.charAt(r) == '"')return r++, d;
                    m()
                } else {
                    e = r, c == "-" && (g = !0, c = a.charAt(++r));
                    if (c >= "0" && c <= "9") {
                        c == "0" && (c = a.charAt(r + 1), c >= "0" && c <= "9") && m(), g = !1;
                        for (; r < b && (c = a.charAt(r), c >= "0" && c <= "9"); r++);
                        if (a.charAt(r) == ".") {
                            f = ++r;
                            for (; f < b && (c = a.charAt(f), c >= "0" && c <= "9"); f++);
                            f == r && m(), r = f
                        }
                        c = a.charAt(r);
                        if (c == "e" || c == "E") {
                            c = a.charAt(++r), (c == "+" || c == "-") && r++;
                            for (f = r; f < b && (c = a.charAt(f), c >= "0" && c <= "9"); f++);
                            f == r && m(), r = f
                        }
                        return +a.slice(e, r)
                    }
                    g && m();
                    if (a.slice(r, r + 4) == "true")return r += 4, !0;
                    if (a.slice(r, r + 5) == "false")return r += 5, !1;
                    if (a.slice(r, r + 4) == "null")return r += 4, null;
                    m()
                }
            }
        }
        return "$"
    }, o = function (a) {
        var b, c, d;
        a == "$" && m();
        if (typeof a == "string") {
            if (a.charAt(0) == "@")return a.slice(1);
            if (a == "[") {
                b = [];
                for (; ; c || (c = !0)) {
                    a = n();
                    if (a == "]")break;
                    c && (a == "," ? (a = n(), a == "]" && m()) : m()), a == "," && m(), b.push(o(a))
                }
                return b
            }
            if (a == "{") {
                b = {};
                for (; ; c || (c = !0)) {
                    a = n();
                    if (a == "}")break;
                    c && (a == "," ? (a = n(), a == "}" && m()) : m()), (a == "," || typeof a != "string" || a.charAt(0) != "@" || n() != ":") && m(), b[a.slice(1)] = o(n())
                }
                return b
            }
            m()
        }
        return a
    }, q = function (a, b, c) {
        var e = p(a, b, c);
        e === d ? delete a[b] : a[b] = e
    }, p = function (b, d, e) {
        var f = b[d], g;
        if (typeof f == "object" && f)if (a.call(f) == "[object Array]")for (g = f.length; g--;)q(f, g, e); else c(f, function (a) {
            q(f, a, e)
        });
        return e.call(b, d, f)
    }, f.parse = function (b, c) {
        var d, e;
        return r = 0, s = b, d = o(n()), n() != "$" && m(), r = s = null, c && a.call(c) == "[object Function]" ? p((e = {}, e[""] = d, e), "", c) : d
    }))
}.call(Wistia), function (a) {
    var b;
    return a.extend({
        url: {
            proto: function (a) {
                return a == null && (a = window.location.href), /^https:\/\//.test(a) ? "https:" : "http:"
            }, paramsToJson: function (b) {
                var c, d, e, f, g, h, i, j, k, l, m, n;
                j = {};
                if (!b)return j;
                i = b.split("&");
                for (l = 0, m = i.length; l < m; l++) {
                    h = i[l], n = h.split("="), g = n[0], k = n[1];
                    try {
                        g = this._debrack(decodeURIComponent(g)) || ""
                    } catch (o) {
                        d = o, setTimeout(function () {
                            return a.notice(d)
                        }, 50), g = ""
                    }
                    g = function () {
                        var b, c, d;
                        d = [];
                        for (b = 0, c = g.length; b < c; b++)f = g[b], d.push(a.obj.cast(f));
                        return d
                    }(), e = a.obj.get(j, g), e != null ? a.obj.isArray(e) ? e.push(this.urlComponentToJson(k)) : (c = [e], c.push(this.urlComponentToJson(k)), a.obj.set(j, g, c)) : a.obj.set(j, g, this.urlComponentToJson(k))
                }
                return j
            }, urlComponentToJson: function (b) {
                var c, d;
                d = function () {
                    try {
                        return decodeURIComponent(b)
                    } catch (d) {
                        return c = d, setTimeout(function () {
                            return a.notice(c)
                        }, 50), b
                    }
                }();
                if (typeof b != "string" || !/^[\{\[].*[\}\]]$/.test(d))return d;
                try {
                    return a.JSON.parse(d)
                } catch (e) {
                    return c = e, d
                }
            }, jsonToParams: function (b) {
                var c, d = this;
                return c = [], a.obj.eachLeaf(b, function (a, b) {
                    return c.push(encodeURIComponent(d._brack(b)) + "=" + encodeURIComponent(a))
                }), c.join("&")
            }, splitPath: function (a) {
                var b, c, d, e, f;
                d = [], a != null && (c = a.split(/\/+/));
                for (e = 0, f = c.length; e < f; e++)b = c[e], b != null && b !== "" && d.push(b);
                return d
            }, joinPath: function (a) {
                var b;
                return b = "", a != null && (b = "/" + a.join("/")), b
            }, _brack: function (a) {
                var b, c, d, e;
                c = a[0];
                for (b = d = 1, e = a.length; 1 <= e ? d < e : d > e; b = 1 <= e ? ++d : --d)c += "[" + a[b] + "]";
                return c
            }, _debrack: function (a) {
                return a.match(/([\w\-\_]+)/g)
            }
        }
    }), b = function () {
        function b(a) {
            this.params = {}, this.path = [], this.host = "", typeof a == "object" ? this.fromOptions(a) : a && this.fromRaw(a)
        }

        return b.prototype._paramsR = /\?(.+)$/, b.prototype.fromOptions = function (a) {
            var b, c, d, e;
            e = ["protocol", "host", "port", "params", "path"];
            for (c = 0, d = e.length; c < d; c++)b = e[c], a[b] != null && (this[b] = a[b]);
            return this
        }, b.prototype.fromRaw = function (b) {
            var c;
            this.rawUrl = b;
            if (c = b.match(/^((?:https?\:)|(?:file\:)|(?:ftp\:))?\/\//))this.protocol = c[1] || void 0;
            if (c = b.match(/\/\/([^\:\?\/]*)/))this.host = c[1] || void 0;
            if (c = b.match(/\/\/.*?((?:\/[^\?#$]+))/))this.rawPath = c[1], this._hasTrailingSlash = /\/$/.test(this.rawPath), this.path = a.url.splitPath(this.rawPath);
            if (c = b.match(/\:(\d+)/))this.port = parseInt(c[1], 10);
            if (c = b.match(/\?([^#]+)/))this.rawParams = c[1], this.params = a.url.paramsToJson(this.rawParams);
            if (c = b.match(/#(.*)$/))this.anchor = c[1];
            return this
        }, b.prototype.clone = function () {
            return new b({
                protocol: this.protocol,
                host: this.host,
                port: this.port,
                path: a.extend([], this.path),
                params: this.params,
                anchor: this.anchor
            })
        }, b.prototype.ext = function (a) {
            var b, c, d, e;
            return a != null ? (b = this.ext(), c = this.path.length - 1, d = new RegExp("\\." + b, "g"), b && (this.path[c] = "" + this.path[c].replace(d, "")), this.path[c] = "" + this.path[c] + "." + a) : ((e = this.path[this.path.length - 1].match(/\.(.*)$/)) != null ? e[1] : void 0) || null
        }, b.prototype.isRelative = function () {
            return (this.protocol == null || this.protocol === "" || this.protocol === window.location.protocol) && (!this.host || this.host === window.location.hostname)
        }, b.prototype.toString = function () {
            return this.isRelative() ? this.relative() : this.absolute()
        }, b.prototype.absolute = function () {
            var a, b;
            return b = "", this.protocol != null && (b = this.protocol), a = "", this.port != null && (a = ":" + this.port), "" + b + "//" + this.host + a + this.relative()
        }, b.prototype.relative = function () {
            var b, c;
            return c = "", this.path.length > 0 && (c = a.url.joinPath(this.path), this._hasTrailingSlash && (c += "/")), b = "?" + a.url.jsonToParams(this.params), b.length === 1 && (b = ""), "" + c + b + this.relativeAnchor()
        }, b.prototype.authority = function () {
            var a;
            return a = this.port != null ? ":" + this.port : "", "" + this.host + a
        }, b.prototype.relativeProtocol = function () {
            var a;
            return a = "", this.port != null && (a = ":" + this.port), "//" + this.host + a + this.relative()
        }, b.prototype.relativeAnchor = function () {
            var a;
            return a = "", this.anchor != null && (a = "#" + this.anchor), "" + a
        }, b
    }(), a.url.create = function (a) {
        return new b(a)
    }, a.url.parse = function (a) {
        return new b(a)
    }
}(Wistia);
var __slice = [].slice;
(function (a) {
    var b;
    b = a;
    if (b.log)return;
    return b._logLevels = {
        error: 0,
        warning: 1,
        notice: 2,
        info: 3,
        debug: 4
    }, b._logLevel = 0, b.logLevel = function (a) {
        return b._logLevels[a] != null ? (b._logLevel = b._logLevels[a], typeof console != "undefined" && console !== null ? console.log('Log level set to "' + a + '" (' + b._logLevels[a] + ")") : void 0) : typeof console != "undefined" && console !== null ? console.log('Unknown log level "' + a + '"') : void 0
    }, b._logs = [], b._lastLoggedAt = new Date, b._log = function () {
        var a, c, d, e, f, g, h, i, j, k, l;
        d = arguments[0], j = 2 <= arguments.length ? __slice.call(arguments, 1) : [], l = b._logLevels[d] <= b._logLevel;
        if (!l)return;
        f = !1, b._logGrep || b._logGrepv ? (c = function () {
            var b, c, d;
            d = [];
            for (b = 0, c = j.length; b < c; b++) {
                i = j[b];
                try {
                    d.push((typeof i.toString == "function" ? i.toString() : void 0) || "")
                } catch (e) {
                    a = e, d.push("")
                }
            }
            return d
        }().join(" "), g = !b._logGrep || c.match(b._logGrep), h = !b._logGrepv || !c.match(b._logGrepv), f = g && h) : f = !0;
        if (!f)return;
        k = new Date, e = [d, k], e = e.concat(j);
        if (b._logs.length >= 1e3 || k.getTime() - b._lastLoggedAt.getTime() > 5e3)b._logs = [];
        b._lastLoggedAt = k, b._logs.push(e);
        if (!(j.length === 1 && (a = j[0]) instanceof Error))return b.detect.browser.msie && (b.detect.browser.version < 9 || b.detect.browser.quirks) ? typeof console != "undefined" && console !== null ? console.log(j.join(" ")) : void 0 : typeof console != "undefined" && console !== null ? console.log.apply(console, j) : void 0;
        typeof console != "undefined" && console !== null && console.log(a.message);
        if (a.stack)return typeof console != "undefined" && console !== null ? console.log(a.stack) : void 0
    }, b.stacktrace = function () {
        var a;
        try {
            throw new Error("stacktrace")
        } catch (b) {
            return a = b, a.stack
        }
    }, b.info =
        function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], b._log.apply(b, ["info"].concat(__slice.call(a)))
        }, b.error = function () {
        var a;
        return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], b._log.apply(b, ["error"].concat(__slice.call(a)))
    }, b.notice = function () {
        var a;
        return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], b._log.apply(b, ["warning"].concat(__slice.call(a)))
    }, b.debug = function () {
        var a;
        return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], b._log.apply(b, ["debug"].concat(__slice.call(a)))
    }, b.log = b.error, b._initializers.initWLog = function () {
        var a, c, d, e, f, g, h, i, j, k, l;
        a = b.url.parse(location.href), document.referrer && (c = b.url.parse(document.referrer)), ((f = a != null ? (g = a.params) != null ? g.wlog : void 0 : void 0) || (f = c != null ? (h = c.params) != null ? h.wlog : void 0 : void 0)) && b.logLevel(f);
        if ((d = a != null ? (i = a.params) != null ? i.wgrep : void 0 : void 0) || (d = c != null ? (j = c.params) != null ? j.wgrep : void 0 : void 0))b._logGrep = new RegExp(d, "i");
        if ((e = a != null ? (k = a.params) != null ? k.wgrepv : void 0 : void 0) || (e = c != null ? (l = c.params) != null ? l.wgrepv : void 0 : void 0))return b._logGrepv = new RegExp(e, "i")
    }, b._destructors.destroyWLog = function () {
        return b._logLevel = 0, b._logGrep = null, b._logGrepv = null
    }
})(Wistia), function (a) {
    return a.extend({
        _detect: {
            na: navigator.userAgent,
            rwebkit: /(webkit)[ \/]([^\s]+)/i,
            ropera: /OPR\/([^\s]+)/i,
            rmsie: /(msie) ([^\s;]+)/i,
            rtrident: /(trident)\/\s*([^;]+)/i,
            rmozilla: /(mozilla)(?:.*? rv:([^\s\)]+))?/i,
            randroid: /(android) ([^;]+)/i,
            riphone: /(iphone)/i,
            ripad: /(ipad)/i,
            rwinphone: /(Windows Phone OS (\d+(?:\.\d+)?))/,
            rios: /OS (\d+)_(\d+)/i,
            rps3: /(playstation 3)/i,
            rblackberry: /BlackBerry|BB10/i,
            rfirefox: /(firefox)/i,
            rgearvr: /Mobile VR/i,
            browser: function () {
                return (this.browserMatch()[1] || "webkit").toLowerCase()
            },
            browserVersion: function () {
                return this.browserMatch()[2]
            },
            browserMatch: function () {
                var a;
                return (a = this.na.match(this.rwebkit)) != null ? a : (a = this.na.match(this.ropera)) != null ? a : (a = this.na.match(this.rmsie)) ? (document.documentMode != null && (a[2] = document.documentMode), a) : (a = this.na.match(this.rmozilla)) ? a : []
            },
            android: function () {
                var a;
                return a = this.na.match(this.randroid), a == null ? !1 : {version: a[2]}
            },
            oldandroid: function () {
                return this.android() && this.android().version < "4.1.0"
            },
            iphone: function () {
                return this.riphone.test(this.na)
            },
            blackberry: function () {
                return this.rblackberry.test(this.na)
            },
            retina: function () {
                return window.devicePixelRatio > 1
            },
            ipad: function () {
                return this.ripad.test(this.na)
            },
            safari: function () {
                return this.rwebkit.test(this.na) && !/chrome/i.test(this.na) && !this.ipad() && !this.iphone()
            },
            chrome: function () {
                return /Chrome/.test(this.na) && /Google Inc/.test(navigator.vendor)
            },
            opera: function () {
                return this.ropera.test(this.na)
            },
            iosVersion: function () {
                var a;
                return a = this.na.match(this.rios), a != null ? parseFloat("" + a[1] + "." + a[2]) : 0
            },
            windowsPhone: function () {
                return this.rwinphone.test(this.na)
            },
            ps3: function () {
                return this.rps3.test(this.na)
            },
            trident: function () {
                return this.rtrident.test(this.na)
            },
            firefox: function () {
                return this.rfirefox.test(this.na)
            },
            gearvr: function () {
                return this.rgearvr.test(this.na)
            },
            windows: function () {
                return /win/i.test(navigator.platform)
            },
            mac: function () {
                return /mac/i.test(navigator.platform)
            },
            linux: function () {
                return /linux/i.test(navigator.platform)
            },
            flash: function () {
                var a;
                return a = this.flashFullVersion(), {
                    version: parseFloat(a[0] + "." + a[1]),
                    major: parseInt(a[0], 10),
                    minor: parseInt(a[1], 10),
                    rev: parseInt(a[2], 10)
                }
            },
            flashFullVersion: function () {
                var a, b;
                try {
                    try {
                        a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                        try {
                            a.AllowScriptAccess = "always"
                        } catch (c) {
                            return b = c, [6, 0, 0]
                        }
                    } catch (c) {
                        b = c
                    }
                    return (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1].split(",")
                } catch (c) {
                    b = c;
                    try {
                        if (navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)return (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1].split(",")
                    } catch (c) {
                        b = c
                    }
                }
                return [0, 0, 0]
            },
            html5Video: function () {
                var a, b, c, d;
                b = document.createElement("video"), d = !1;
                try {
                    !b.canPlayType || (d = {}, c = 'video/mp4; codecs="avc1.42E01E', d.h264 = !!b.canPlayType(c + '"') || !!b.canPlayType(c + ', mp4a.40.2"'))
                } catch (e) {
                    a = e, d = {h264: !1}
                }
                return d
            },
            localStorage: function () {
                var a;
                try {
                    return "localStorage" in window && window.localStorage !== null
                } catch (b) {
                    return a = b, !1
                }
            },
            json: function () {
                return !!window.JSON && typeof JSON.parse == "function"
            },
            backgroundSize: function () {
                var a;
                return a = document.createElement("div"), a.style.backgroundSize === "" || a.style.webkitBackgroundSize === "" || a.style.mozBackgroundSize === "" || a.style.oBackgroundSize === ""
            },
            fullscreenEnabled: function () {
                return document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled
            },
            mutationObserver: function () {
                var a, b, c, d, e;
                b = ["WebKit", "Moz", "O", "Ms", ""];
                for (d = 0, e = b.length; d < e; d++) {
                    a = b[d], c = a + "MutationObserver";
                    if (window[c])return c
                }
                return null
            },
            romulusSupport: function () {
                return !!(!this.iphone() && !this.ipad() && !this.android() && !this.blackberry() && !this.opera() && (/webkit|mozilla/.test(this.browser()) || this.browser() === "msie" && this.browserVersion() >= 11) && this.localStorage() && this.html5Video().h264)
            }
        }
    }), a._initializers.initDetect = function () {
        if (!a.detect)return a.detect = {
            browser: {
                version: a._detect.browserVersion(),
                quirks: a._detect.browser() === "msie" && document.compatMode === "BackCompat",
                old: a._detect.browser() === "msie" && (document.compatMode === "BackCompat" || a._detect.browserVersion() < 7),
                ltie8: a._detect.browser() === "msie" && (document.compatMode === "BackCompat" || a._detect.browserVersion() < 8)
            },
            trident: a._detect.trident(),
            firefox: a._detect.firefox(),
            gearvr: a._detect.gearvr(),
            android: a._detect.android(),
            oldandroid: a._detect.oldandroid(),
            iphone: a._detect.iphone(),
            ipad: a._detect.ipad(),
            blackberry: a._detect.blackberry(),
            safari: a._detect.safari(),
            chrome: a._detect.chrome(),
            opera: a._detect.opera(),
            winphone: {version: a._detect.windowsPhone()[2]},
            ios: {version: a._detect.iosVersion()},
            windows: a._detect.windows(),
            mac: a._detect.mac(),
            linux: a._detect.linux(),
            retina: a._detect.retina(),
            ps3: a._detect.ps3(),
            flash: a._detect.flash(),
            video: a._detect.html5Video(),
            localstorage: a._detect.localStorage(),
            json: a._detect.json(),
            backgroundSize: a._detect.backgroundSize(),
            fullscreenEnabled: a._detect.fullscreenEnabled(),
            romulusSupport: a._detect.romulusSupport()
        }, a.detect.browser[a._detect.browser()] = !0
    }
}(Wistia), function (a) {
    var b;
    b = a;
    if (b.eventLoop)return;
    return b.EventLoop = function () {
        function a(a) {
            var c = this;
            this._timeoutId = null, this._latency = (a != null ? a.latency : void 0) || 100, this._blurLatency = (a != null ? a.blurLatency : void 0) || 2e3, this._functions = {}, this._paused = {}, b.elem.bind(window, "blur", function () {
                return c.blur()
            }), b.elem.bind(window, "focus", function () {
                return c.focus()
            }), this.start()
        }

        return a.prototype.start = function () {
            var a = this;
            return clearTimeout(this._timeoutId), this._loopFn == null && (this._loopFn = function () {
                return a.runFunctions(), a._timeoutId = setTimeout(a._loopFn, a._latency)
            }), this._loopFn()
        }, a.prototype.resync = function () {
            return this.start()
        }, a.prototype.resyncNextTick = function () {
            var a = this;
            return setTimeout(function () {
                return a.resync()
            }, 0)
        }, a.prototype.stop = function () {
            return clearTimeout(this._timeoutId)
        }, a.prototype.clear = function () {
            return this._functions = {}
        }, a.prototype.runFunctions = function () {
            var a, c, d, e, f, g, h, i, j, k, l;
            this._pausedDirty && this.updatePaused(), h = [], k = this._functions;
            for (d in k) {
                c = k[d], e = (new Date).getTime(), g = e - c.lastRanAt;
                if (!c.paused && g >= c.interval) {
                    c.lastRanAt = e;
                    try {
                        f = c.fn(), f === this.remove && h.push(d)
                    } catch (m) {
                        a = m, b.error(a)
                    }
                }
            }
            l = [];
            for (i = 0, j = h.length; i < j; i++)d = h[i], l.push(this.remove(d));
            return l
        }, a.prototype.add = function (a, b, c) {
            var d;
            d = (new Date).getTime();
            if (c() !== this.remove)return this._functions[a] = {
                addedAt: d,
                lastRanAt: d,
                interval: b,
                fn: c
            }, this._pausedDirty = !0
        }, a.prototype.remove = function (a) {
            var b = this;
            return this.forEachMatchingKey(a, function (a) {
                return delete b._functions[a]
            })
        }, a.prototype.forEachMatchingKey = function (a, b) {
            var c, d, e, f;
            e = this._functions, f = [];
            for (d in e)c = e[d], this.key1IncludesKey2(a, d) ? f.push(b(d, c)) : f.push(void 0);
            return f
        }, a.prototype.latency = function (a) {
            return a != null ? this._latency = a : this._latency
        }, a.prototype.interval = function (a, b) {
            return b != null ? this._functions[a].interval = b : this._functions[a].interval
        }, a.prototype.pause = function (a) {
            return this._paused[a] = !0, this._pausedDirty = !0
        }, a.prototype.unpause = function (a) {
            return this._paused[a] = !1, this._pausedDirty = !0
        }, a.prototype.isPaused = function (a) {
            var b, c, d;
            d = this._paused;
            for (c in d) {
                b = d[c];
                if (b && this.key1IncludesKey2(c, a))return !0
            }
            return !1
        }, a.prototype.updatePaused = function () {
            var a, b, c;
            c = this._functions;
            for (b in c)a = c[b], a.paused = this.isPaused(b);
            return this._pausedDirty = !1
        }, a.prototype.key1IncludesKey2 = function (a, b) {
            return (typeof b.indexOf == "function" ? b.indexOf(a) : void 0) === 0 && (b.length === a.length || b.charAt(a.length) === ".")
        }, a.prototype.blur = function () {
            if (this._blurred)return;
            return this._blurred = !0, this._savedLatency = this._latency, this._latency = this._blurLatency
        }, a.prototype.focus = function () {
            if (!this._blurred)return;
            return this._blurred = !1, this._latency = this._savedLatency, this.resync()
        }, a
    }(), b._initializers.initEventLoop = function () {
        var a;
        return a = 100, b.eventLoop = new b.EventLoop({latency: 100, blurLatency: a})
    }, b._destructors.destroyEventLoop = function () {
        var a;
        return (a = b.eventLoop) != null && a.stop(), b.eventLoop = null
    }
}(Wistia), function (a) {
    if (a.JudgeJudy)return;
    return a.JudgeJudy = function () {
        function b(a) {
            this.publicApi = a
        }

        return b.prototype.mediaData = function () {
            return this.publicApi._mediaData
        }, b.prototype.opts = function () {
            return this.publicApi._opts
        }, b.prototype.bestPlayerType = function (b) {
            var c, d, e, f, g;
            return e = this.mediaData(), b = a.obj.merge({}, this.opts(), b), c = e.assets, g = b.plea || a.localStorage("platformPreference") || b.platformPreference, d = b.force, g || (b.platformPreference === "romulus" ? f = "html5" : f = b.playerPreference || e.playerPreference, f === "auto" || !f ? this.fullRomulusSupport() ? g = "romulus" : this.wouldLookLikeAnAdToChrome() && this.baseRomulusSupport() && (g = "romulus") : f === "flash" ? g = "flash" : f === "html5" && (this.baseRomulusSupport() ? g = "romulus" : e.assets.iphone && (g = "html5"))), d === "romulus" ? d : a.detect.iphone || a.detect.ipad ? "html5" : a.detect.oldandroid ? this.isHttps() && this.flashSupport() ? "flash" : "external" : g === "romulus" && this.baseRomulusSupport() ? "romulus" : g === "html5" && this.h264Support() ? "html5" : g === "flash" && this.flashSupport() ? "flash" : g === "external" ? "external" : this.fullRomulusSupport() ? "romulus" : this.flashSupport() ? "flash" : this.baseRomulusSupport() ? "romulus" : this.h264Support() ? "html5" : this.noFallbackFromFlash() ? "flash" : "external"
        }, b.prototype.noFallbackFromFlash = function () {
            return a.detect.browser.msie && (a.detect.browser.version < 9 || a.detect.browser.quirks) || a.detect.browser.mozilla
        }, b.prototype.has2PassIphoneEncode = function () {
            var a;
            return (a = this.mediaData().assets.iphone) != null ? !!a["2pass"] : !!void 0
        }, b.prototype.isLessThan15Minutes = function () {
            return this.mediaData().duration < 900
        }, b.prototype.sdFlashIsScreencast = function () {
            var a;
            return (((a = this.mediaData().assets.flv) != null ? a.width : void 0) || 0) > 720
        }, b.prototype.hasNoFlashHdAssets = function () {
            return !this.hdFlashAsset()
        }, b.prototype.hdFlashAsset = function () {
            return a.Video.asset(this.mediaData(), {container: "flv", width: [940, 1920], bitrate: [1200, 2e4]})
        }, b.prototype.hasGoodRomulusAssetsForSdOnly = function () {
            return this.hasNoFlashHdAssets() && this.isLessThan15Minutes() && this.has2PassIphoneEncode() && !this.isScreencast()
        }, b.prototype.hasGoodRomulusAssetsForMd = function () {
            return this.isLessThan15Minutes() ? this.isScreencast() ? !!this.romulusScreencastAsset() : !!a.Video.asset(this.mediaData(), {
                container: "mp4",
                width: [720, 980]
            }) : !1
        }, b.prototype.original = function () {
            return a.Video.asset(this.mediaData(), {type: "original"})
        }, b.prototype.isScreencast = function () {
            return this.original().width > 640 && this.original().bitrate < 1200
        }, b.prototype.romulusScreencastAsset = function () {
            return a.Video.asset(this.mediaData(), {
                container: "mp4",
                bitrate: [300, 1300],
                sortBy: "width desc",
                width: [0, this.original().width]
            })
        }, b.prototype.hasGoodRomulusAssets = function () {
            return this.hasGoodRomulusAssetsForSdOnly() || this.hasGoodRomulusAssetsForMd()
        }, b.prototype.baseRomulusSupport = function () {
            return a.detect.romulusSupport && this.mediaData().assets.iphone
        }, b.prototype.fullRomulusSupport = function () {
            return a.detect.romulusSupport && this.hasGoodRomulusAssets() && this.fullscreenSupport()
        }, b.prototype.wouldLookLikeAnAdToChrome = function () {
            return a.detect.chrome && !a.detect.android && this.publicApi.looksUp() && (this.publicApi.containerWidth() < 398 || this.publicApi.containerHeight() < 298)
        }, b.prototype.h264Support = function () {
            return a.detect.video.h264
        }, b.prototype.flashSupport = function () {
            return a.detect.flash.version >= 9
        }, b.prototype.fullscreenSupport = function () {
            return a._detect.fullscreenEnabled()
        }, b.prototype.isHttps = function () {
            return window.location.protocol === "https:"
        }, b
    }()
}(Wistia), function (a) {
    var b;
    b = a;
    if (b.embed)return;
    return b._embed = {}, b.embed = function (a, c) {
        var d, e;
        return c == null && (c = {}), b.info("Wistia.embed", a, c), typeof a == "string" ? e = a : (e = a.hashedId, b.cacheMedia(e, a)), d = new b.PublicApi(e, c), d
    }
}(Wistia);
var __bind = function (a, b) {
    return function () {
        return a.apply(b, arguments)
    }
}, __slice = [].slice;
(function (a) {
    var b;
    b = a;
    if (b.PublicApi)return;
    return b.PublicApi = function () {
        function c(a, c) {
            this._initWithMediaData = __bind(this._initWithMediaData, this), this._allocEmbedSlot = __bind(this._allocEmbedSlot, this);
            var d, e = this;
            this.info("initialize"), this._judy = new b.JudgeJudy(this), this._hasImpl = new b.StopGo, this.hasPlugins = new b.StopGo, this.up = new b.StopGo, this.up(!0), this.down = new b.StopGo, this.down(!1), this.inViewport = new b.StopGo, this.inViewport(!1), this._playlistIndex = 0, this._attrs = {}, this.params = {}, this.options = {}, this._pluginStopGos = {}, this.plugins = {}, this.data = {}, this.hashedId(a), this._givenOptions = c, this._playlist = [], this._setupContainer(), this._validate(), this._inferPropertiesBeforeMediaData(), this._dedupContainer(), this._addToGlobalCache(), this._setupBindings(), this._resetTracker(), this.addToPlaylist(this.hashedId(), c), this.down(this.looksDown()), this.up(this.looksUp()), (d = window.wistiaEmbeds) != null && d.bindHandles(), this.trigger("initembed"), this.monitor(), this.embedded(function () {
                return e.monitor()
            }), this.ready(function () {
                return e.monitor()
            }), this._withFreeEmbedSlots(function () {
                return b.remote.media(e.hashedId(), e._initWithMediaData)
            })
        }

        return c.prototype._log = function () {
            var a, c, d;
            return a = arguments[0], c = 2 <= arguments.length ? __slice.call(arguments, 1) : [], b[a].apply(b, [this.constructor.name, this.hashedId() || "no hashedId", (d = this.container) != null ? d.id : void 0, this.uuid].concat(__slice.call(c)))
        }, c.prototype.error = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["error"].concat(__slice.call(a)))
        }, c.prototype.warn = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["notice"].concat(__slice.call(a)))
        }, c.prototype.notice = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["notice"].concat(__slice.call(a)))
        }, c.prototype.info = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["info"].concat(__slice.call(a)))
        }, c.prototype.debug = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["debug"].concat(__slice.call(a)))
        }, c.prototype.log = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["log"].concat(__slice.call(a)))
        }, c.prototype._withFreeEmbedSlots = function (a) {
            var c = this;
            return this._setupEmbedSlots(), this.embedded(function () {
                return setTimeout(function () {
                    return c._freeEmbedSlot()
                }, c._embedSlotThrottleInterval())
            }), this._freeEmbedSlotOnError == null && (this._freeEmbedSlotOnError = function () {
                return c._freeEmbedSlot(), c.unbind
            }), this.rebind("servererror", this._freeEmbedSlotOnError), b._embedSlotFree(function () {
                return c._allocEmbedSlot(), a()
            })
        }, c.prototype._setupEmbedSlots = function () {
            b._embedSlots == null && (b._embedSlots = []);
            if (!b._embedSlotFree)return b._embedSlotFree = new b.StopGo, b._embedSlotFree(!0)
        }, c.prototype._maxEmbedSlots = function () {
            var a, c, d;
            return d = function () {
                var d, e;
                d = b.data("video"), e = [];
                for (a in d)c = d[a], e.push(a);
                return e
            }().length, d > 20 ? 3 : d > 10 ? 6 : 10
        }, c.prototype._embedSlotThrottleInterval = function () {
            return 500
        }, c.prototype._freeEmbedSlot = function () {
            var a;
            b._embedSlots = function () {
                var c, d, e, f;
                e = b._embedSlots, f = [];
                for (c = 0, d = e.length; c < d; c++)a = e[c], a !== this && f.push(a);
                return f
            }.call(this);
            if (b._embedSlots.length < this._maxEmbedSlots())return b._embedSlotFree(!0)
        }, c.prototype._allocEmbedSlot = function () {
            b._embedSlots.push(this);
            if (b._embedSlots.length >= this._maxEmbedSlots())return b._embedSlotFree(!1)
        }, c.prototype._shouldLazyLoad = function () {
            var a;
            return a = this._gatherOptions(), !window._inWistiaIframe && parent === self && (a.lazyLoad || this.popover && a.lazyLoad !== !1)
        }, c.prototype._initWithMediaData = function (a) {
            var c, d, e = this;
            this.info("_initWithMediaData", a);
            try {
                b.Video.assets(a, {"public": !0}).length === 0 && b.Metrics.videoCount(this, "player/no-public-assets")
            } catch (f) {
                d = f, this.debug(d)
            }
            if (this.isRemoved()) {
                this.notice("abort, video already removed");
                return
            }
            if (a.error) {
                this.notice("display error message from server"), this._displayServerError(a), this.trigger("servererror");
                return
            }
            return this._mediaData = a, this.data.media = a, this.info("_optionSources", this._optionSources()), this._opts = this._gatherOptions(), this.info("_opts", b.obj.clone(this._opts)), b.obj.merge(this._mediaData, this._opts.mediaData), this._inferPropertiesAfterMediaData(), c = this._opts.channel || b.channel.rootChannelName(), c !== "main" && this.debug("requesting channel '" + c + "'"), b.channel.withChannel(c, function (a) {
                var d, f, g;
                return a != null ? (e.debug("got requested channel '" + c + "'"), d = a) : (e.debug("requested channel '" + c + "' failed to load"), d = b), g = d.PublicApi.classFor(e._judy.bestPlayerType()), e._impl = (new g(e)).init(), e.grid = e._impl.setupGrid(), e._hasImpl(!0), e.hasData(!0), f = e._impl, e._execPlugins(function () {
                    var a;
                    return e.hasPlugins(!0), ((a = e._embedContainer) != null ? a.parentNode : void 0) ? f === e._impl ? (e._impl.embed(), e._runMethodsFromOptions(), b.timeout("" + e.uuid + ".prefetch_next_media", function () {
                        return e.prefetchNextMedia()
                    }, 2e3), e._injectJsonLd()) : (f.remove(), e.notice("embed(): impl changed from", f, "to", e._impl, "removing zombie")) : e.notice("embed(): container removed, giving up")
                })
            })
        }, c.prototype._iframeUrl = function (a) {
            return a == null && (a = ""), "" + a + "//" + b.remote.externalEmbedHost(a) + "/embed/iframe/" + this.hashedId()
        }, c.prototype._removeJsonLd = function () {
            if (this._jsonLd)return b.elem.remove(this._jsonLd), this._jsonLd = null
        }, c.prototype._injectJsonLd = function () {
            var a, c, d;
            this._removeJsonLd();
            if (this._opts._inIframe)return;
            if (this._opts.seo === !1)return;
            if (b.detect.browser.msie && b.detect.browser.version < 9)return;
            return a = {
                "@context": "http://schema.org/",
                "@id": this._iframeUrl("https:"),
                "@type": "VideoObject",
                duration: "PT" + this.humanDuration().toUpperCase(),
                name: this.name(),
                thumbnailUrl: this.stillUrl({protocol: "https:"}),
                embedUrl: this._iframeUrl("https:"),
                uploadDate: this._createdAtIso8601()
            }, this._mediaData.captions && (a.transcript = (d = this._mediaData.captions[0]) != null ? d.text : void 0), this._mediaData.seoDescription && (a.description = this._mediaData.seoDescription), c = b.JSON.stringify(a), this._jsonLd = b.elem.fromObject({
                tagName: "script",
                type: "application/ld+json",
                childNodes: c
            }), this._jsonLd._wistia = !0, b.elem.append(document.head, this._jsonLd)
        }, c.prototype._createdAtIso8601 = function () {
            var a, b, c, d;
            return a = new Date(this._mediaData.createdAt * 1e3), d = a.getFullYear(), c = a.getMonth() + 1, b = a.getDate(), c < 10 && (c = "0" + c), b < 10 && (b = "0" + b), "" + d + "-" + c + "-" + b
        }, c.prototype._setDeprecatedProperties = function () {
            var a = this;
            return this.options = b.obj.clone(this._opts), this.params = b.obj.clone(this._opts), b.obj.merge(this.params, this._attrs), this._attrs.email && (this.params.trackEmail = this._attrs.email), this._hasImpl(function () {
                var b;
                return a.playerType = a.embedType = (b = a._impl) != null ? b.playerType : void 0
            })
        }, c.prototype.elem = function () {
            var a;
            return (a = this._impl) != null ? typeof a.elem == "function" ? a.elem() : void 0 : void 0
        }, c.prototype._resetTracker = function () {
            var a, c = this;
            return (a = this._tracker) != null && a.reset(), this._tracker || (this._tracker = new b.VideoTracker2(this)), this.tracker = this._tracker, this._visitorKey = this._tracker.visitorKey(), this._tracker.monitor(), this.hasData(function () {
                return c._impl._tracker = c._tracker
            })
        }, c.prototype._execPlugins = function (a) {
            return this._pluginScripts = b.plugin._scriptsFromVideo(this), this.info("_execPlugins", this._pluginScripts), b.plugin._execQueue(this, this._pluginScripts, a)
        }, c.prototype._optionSources = function (a) {
            var c, d, e, f, g;
            a == null && (a = {}), a = b.obj.merge({
                givenOptions: b.obj.clone(this._givenOptions),
                mediaData: b.obj.clone(this._mediaData),
                hashedId: this._hashedId,
                container: this.container
            }, a), d = a.givenOptions, d.version === "v1" ? c = {} : a.mediaData ? (c = b.obj.clone(a.mediaData.embed_options), delete c.stillUrl) : c = {}, f = {
                customize: c,
                global: b.options("__global__"),
                hashedId: b.options(a.hashedId),
                dom: b.options("__" + a.container.id + "_dom_options__"),
                container: b.options(a.container.id),
                inline: d
            };
            for (e in f)g = f[e], b.obj.isEmpty(g) && delete f[e];
            return f
        }, c.prototype._gatherOptions = function (a) {
            var c, d, e, f, g, h;
            a == null && (a = {}), d = {}, e = this._optionSources(a);
            for (c in e)f = e[c], ((g = a.only) != null ? g.indexOf(c) : void 0) >= 0 ? b.obj.merge(d, f) : ((h = a.except) != null ? h.indexOf(c) : void 0) < 0 ? b.obj.merge(d, f) : !a.only && !a.except && b.obj.merge(d, f);
            return b.obj.cast(d), this._normalizeOptions(d), d
        }, c.prototype.hashedId = function (a) {
            return a != null ? (this._hashedId = a, this) : this._hashedId
        }, c.prototype._normalizeOptions = function (a) {
            return a.twitter && (this.info("twitter detected"), b.obj.get(a, "plugin.socialbar-v1") && (this.info("disabled socialbar"), b.obj.set(a, "plugin.socialbar-v1.on", !1)), b.obj.get(a, "plugin.transcript-v2") && (this.info("disabled transcript"), b.obj.set(a, "plugin.transcript-v2.on", !1))), a.playButtonVisible != null && (a.playButton = b.obj.cast(a.playButtonVisible), delete a.playButtonVisible), a
        }, c.prototype._setupContainer = function () {
            return this._containerId = this._givenOptions.container ? this._givenOptions.container : "wistia_" + this.hashedId(), typeof this._containerId == "string" ? this.container = document.getElementById(this._containerId) : this.container = this._containerId, this.container && (this.container.wistiaApi = this, this._startingHtml = this.container.innerHTML, this.container.innerHTML = ""), this.info("container", this.container)
        }, c.prototype._inferPropertiesBeforeMediaData = function () {
            var a;
            this.chrome = b.elem.fromObject({
                id: b.seqId("wistia_chrome_"),
                style: b.generate.relativeBlockCss()
            }), b.elem.style(this.chrome, {
                overflow: "hidden",
                boxSizing: "content-box",
                mozBoxSizing: "content-box",
                webkitBoxSizing: "content-box"
            }), a = this._gatherOptions(), this._shouldBePopover() ? (this._embedContainer = b.elem.fromObject({
                id: "" + this.container.id + "_popover",
                style: {height: "" + this._popoverSize(a).height + "px", width: "" + this._popoverSize(a).width + "px"}
            }), b.elem.append(document.body, this._embedContainer), this.popover = new b.Popover(this)) : this._embedContainer = this.container, b.elem.append(this._embedContainer, this.chrome), a.uuid ? this.uuid = a.uuid : this.uuid = b.seqId(), this.info("uuid", this.uuid), a.playlistLoop != null && (this._attrs.playlistLoop = a.playlistLoop);
            if (this._embedContainer)return this._attrs.startingWidth = b.elem.width(this._embedContainer), this._attrs.startingHeight = b.elem.height(this._embedContainer)
        }, c.prototype._shouldBePopover = function () {
            var a;
            return a = this._gatherOptions(), !a._inIframe && (a.popover === !0 || a.popover === "v2")
        }, c.prototype._popoverSize = function (a) {
            var b, c, d, e, f;
            return a == null && (a = this._opts), a.popoverSize ? (f = ((e = a.popoverSize) != null ? e.split("x") : void 0) || [640, 360], d = f[0], b = f[1], d = parseInt(d), b = parseInt(b)) : this._mediaData ? (c = this.asset({
                container: "mp4",
                width: [0, 960],
                sortBy: "width desc"
            })) ? (d = c.width, b = c.height) : (d = 640, b = 360) : (d = 640, b = 360), {width: d, height: b}
        }, c.prototype._inferPropertiesAfterMediaData = function () {
            var a, c, d;
            return this._attrs.shouldTrack = !this._opts.doNotTrack, this._attrs.seekThreshold = this._opts.seekThreshold || 1.5, this._opts.rawEmbed != null ? this._attrs.rawEmbed = b.obj.cast(this._opts.rawEmbed) : this._opts._inIframe != null ? this._attrs.rawEmbed = !b.obj.cast(this._opts._inIframe || !1) : this._attrs.rawEmbed = !0, this._opts.pageUrl ? this._attrs.pageUrl = this._opts.pageUrl : this._attrs.pageUrl || (this._attrs.pageUrl = ((c = window.FreshUrl) != null ? c.originalUrl : void 0) || location.href), this._opts.trackEmail != null && (this._attrs.email = this._opts.trackEmail), !this._attrs.email && this._attrs.shouldTrack && (a = ((d = this._attrs.pageUrl) != null ? d.match(/wemail\=([^\&\#]+)/) : void 0) || null, a = a ? a[1] : null, a && (this._attrs.email = a)), this._attrs.playerColor = b.Video._sanePlayerColor(this._opts.playerColor || "636155"), this._attrs.trackWithJs = !0, this._attrs.newStillLogic = !0, this._opts.noDeprecatedProperties || this._setDeprecatedProperties(), this
        }, c.prototype._runMethodsFromOptions = function () {
            var a = this;
            this._opts.foreignData != null && this.foreignData(this._opts.foreignData), this._opts.email != null ? this.email(this._opts.email) : this._opts.trackEmail != null && this.email(this._opts.trackEmail), this._opts.videoFoam != null && this.videoFoam(this._opts.videoFoam), this._hasImpl(function () {
                if (a._opts.playerColor != null && a.playerType !== "flash")return a.playerColor(a._opts.playerColor)
            }), this._opts.volume != null && this.volume(this._opts.volume), this._opts.suppressPlay && this.suppressPlay(this._opts.suppressPlay), this._hasImpl(function () {
                if (!a.popover && a._opts.autoPlay && a._impl.canAutoPlay())return a.play()
            }), this._opts.pause && this.pause();
            if (this._opts.time != null)return this.time(this._opts.time, {lazy: b.detect.iphone || b.detect.ipad || b.detect.android})
        }, c.prototype._validate = function () {
            var a;
            a = this._errors();
            if (a.length > 0)throw new Error(a.join(", "));
            return !0
        }, c.prototype._errors = function () {
            var a;
            return a = [], this.container || a.push('Could not find element with ID "' + this._containerId + '" in DOM. Failed to initialize video "' + this._hashedId + '".'), a
        }, c.prototype._dedupContainer = function () {
            var a, c, d, e, f, g, h, i;
            if (b.data("video")) {
                c = [], g = b.data("video");
                for (d in g)a = g[d], ((h = a.container) != null ? h.id : void 0) === this.container.id && c.push(a);
                i = [];
                for (e = 0, f = c.length; e < f; e++)a = c[e], this.notice("_dedupContainer", a.container.id), i.push(a.remove());
                return i
            }
        }, c.prototype._addToGlobalCache = function () {
            return this.info("_addToGlobalCache", this.uuid), b.data(["video", this.uuid], this), b.data(["video-by-hashed-id", this.hashedId()], this)
        }, c.prototype._displayServerError = function (a) {
            return a.iframe ? this.container.innerHTML = "<iframe src='" + b.proto() + "//" + b.remote.embedHost() + "/embed/iframe/" + this.hashedId() + "' height='" + this.height() + "' width='" + this.width() + "' frameborder='0' scrolling='no'></iframe>" : this.container.innerHTML = "<div style='background:#fff;border:2px dashed #ddd;color:#aaa;font-family:Century Gothic,Arial;font-size:14px;text-align:center;width:" + this.width() + ";height:" + this.height() + ";'><div style='padding:20px;'>" + (a.message || a.error) + "</div></div>"
        }, c.prototype._implExec = function () {
            var a, c, d = this;
            return c = arguments[0], a = 2 <= arguments.length ? __slice.call(arguments, 1) : [], this._hasImpl(function () {
                var e;
                return d._impl[c] ? (e = d._impl)[c].apply(e, a) : d.warn("" + c + " is not defined", b.stacktrace())
            }), this
        }, c.prototype._implGet = function () {
            var a, c, d, e;
            return d = arguments[0], c = arguments[1], a = 3 <= arguments.length ? __slice.call(arguments, 2) : [], c == null && (c = null), this._hasImpl() ? this._impl[d] ? (e = this._impl)[d].apply(e, a) : this.warn("" + d + " is not defined", b.stacktrace()) : c
        }, c.prototype._implSetOrGet = function () {
            var a, b, c;
            return c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? __slice.call(arguments, 2) : [], a.length > 0 ? this._implExec.apply(this, [c].concat(__slice.call(a))) : this._implGet(c, b)
        }, c.prototype.rebuild = function () {
            var a = this;
            return this._hasImpl(function () {
                return a._impl.rebuild()
            })
        }, c.prototype.fullRebuild = function (a) {
            return a == null && (a = {}), this.replaceWith(this._impl._mediaData, b.obj.merge({
                force: this._impl.playerType,
                inPlace: !1,
                transition: "none"
            }, a))
        }, c.prototype.rebuildAs = function (a, c) {
            return c == null && (c = {}), this.fullRebuild(b.obj.merge(this._givenOptions, c, {
                force: a,
                transition: "none"
            }))
        }, c.prototype.replace = function (a, c) {
            return c == null && (c = {}), this.replaceWith(a, b.obj.merge({inPlace: !0, inlineOptionsOnly: !0}, c))
        }, c.prototype.replaceWith = function (a, c) {
            var d, e = this;
            return c == null && (c = {}), this.info("replaceWith", a, c), d = function () {
                var d;
                return b.obj.isObject(a) ? e._replaceWithMediaData(a, c) : (d = b.mediaFromCache(a)) ? e._replaceWithMediaData(d, c) : (e.hasData(!1), e._hasImpl(!1), b.remote.media(a, function (a) {
                    return e._replaceWithMediaData(a, c)
                }))
            }, this._hasImpl() ? d() : this._hasImpl(d), this
        }, c.prototype._replaceWithMediaData = function (a, c) {
            var d, e, f, g, h, i, j, k, l, m, n = this;
            c == null && (c = {}), this.info("_replaceWithMediaData", a, c);
            if (a.error) {
                this._displayServerError(a), this.trigger("servererror");
                return
            }
            if (!this._impl) {
                this._initWithMediaData(a, c);
                return
            }
            return c.playlistIndex != null ? (this._playlistIndex = c.playlistIndex, delete c.playlistIndex) : this._inPlaylist(a.hashedId) && (this._playlistIndex = this._playlistIndexOf(a.hashedId)), c.inlineOptionsOnly != null && (f = c.inlineOptionsOnly, delete c.inlineOptionsOnly), c.inPlace != null && (e = c.inPlace, delete c.inPlace), c.transition != null && (l = c.transition, delete c.transition), c.transitionTime != null && (m = c.transitionTime, delete c.transitionTime), c.pauseBefore != null ? (j = c.pauseBefore, delete c.pauseBefore) : j = !0, this.trigger("beforereplace"), this.hasData(!1), this._hasImpl(!1), this._tracker.stopMonitoring(), this._clobberVideoBindings(), i = this._impl, typeof i.wipeOutstandingAsyncFunctions == "function" && i.wipeOutstandingAsyncFunctions(), j && i.pause(), this._hashedId = a.hashedId, this._mediaData = a, this.data.media = a, this._givenOptions = c, this._opts = f ? this._gatherOptions({only: "inline"}) : this._gatherOptions(), this.info("_opts", b.obj.clone(this._opts)), b.obj.merge(this._mediaData, this._opts.mediaData), this._inferPropertiesAfterMediaData(), k = this._judy.bestPlayerType(), d = k !== i.playerType ? !1 : i.playerType === "html5" && b.elem.fullscreenElement() ? !0 : b.detect.iphone || b.detect.android || b.detect.ipad ? !0 : e != null ? e : !1, this.info("inPlace", d), g = b.PublicApi.classFor(k), h = this._impl = (new g(this)).init(), this._setupBindings(), d ? this.grid = this._impl.grid = i.grid : this.grid = this._impl.setupGrid(), this._hasImpl(!0), this.hasData(!0), this._resetTracker(), this.turnOffPluginApis(), d && (this.removePlugins(), i.stopStreaming()), this.hasPlugins(!1), (!d && l === "fade" || l === "crossfade") && b.elem.style(this._impl.gridChildren(), {opacity: 0}), this._execPlugins(function () {
                n.hasPlugins(!0);
                if (n._impl !== h) {
                    n.notice("replaceWith(): impl changed from", h, "to", n._impl, "not completing replacement");
                    return
                }
                return d ? n._replaceMode(function () {
                    return n._impl.initFrom(i)
                }) : n._replaceMode(function () {
                    return n._embedWithTransitionFrom(i, l, {time: m})
                }), n._runMethodsFromOptions(), n._allowContainerMatch() && n.width(n.containerWidth(), {constrain: !0}), n._injectJsonLd(), n.trigger("afterreplace"), b.timeout("" + n.uuid + ".prefetch_next_media", function () {
                    return n.prefetchNextMedia()
                }, 2e3)
            })
        }, c.prototype._embedWithTransitionFrom = function (a, c, d) {
            var e, f = this;
            return c == null && (c = "none"), this.info("_embedWithTransitionFrom", a, c), typeof (e = this._impl).transferStateFrom == "function" && e.transferStateFrom(a), c === "slide" || c === "slideleft" ? (this.info("slideleft"), a.slideOutLeft(d, function () {
                return a.remove()
            }), this._impl.embed(), this._impl.slideInLeft(d)) : c === "slideright" ? (this.info("slideright"), a.slideOutRight(d, function () {
                return a.remove()
            }), this._impl.embed(), this._impl.slideInRight(d)) : c === "fade" ? (this.info("fade"), a._opts.wmode !== "transparent" && (a.grid.center.style.backgroundColor = "#000"), d.time != null && (d.time = Math.round(d.time / 2)), a.fadeOut(d, function () {
                return a.remove(), f._impl._opts.wmode !== "transparent" && (f._impl.grid.center.style.backgroundColor = "#000"), f._impl.embed(), f._impl.fadeIn(d, function () {
                    var a;
                    return (a = f._impl.grid) != null ? a.center.style.backgroundColor = "" : void 0
                })
            })) : c === "crossfade" ? (this.info("crossfade"), b.elem.style(a.grid.root, {
                position: "absolute",
                zIndex: 0
            }), b.elem.style(this._impl.grid.root, {zIndex: 1}), this._impl.embed(), this._impl.fadeIn(d, function () {
                return a.remove(), b.elem.style(f._impl.grid.root, {zIndex: ""})
            })) : (this.info("no transition"), this._impl.embed(), a.remove())
        }, c.prototype._clobberVideoBindings = function () {
            var a, b, c, d;
            c = this._bindings, d = [];
            for (a in c)b = c[a], a !== "afterreplace" && a !== "beforereplace" && a !== "all" ? d.push(this.unbind(a)) : d.push(void 0);
            return d
        }, c.prototype._replaceMode = function (a) {
            var b = this;
            return this.info("_replaceMode", !0), this._impl._replacing = !0, a(), this._impl.embedded(function () {
                return b._impl._replacing = !1, b.info("_replaceMode", !1)
            })
        }, c.prototype.remove = function () {
            var a, c, d;
            return this.info("remove"), this.trigger("down"), this.trigger("beforeremove"), this._freeEmbedSlot(), this._implExec("remove", {trigger: !1}), this._hasImpl(!1), this._removeJsonLd(), (a = this.popover) != null && a.remove(), (c = this._impl) != null &&
            c.stopStreaming(), b.elem.remove(this._foamDummyElem), (d = b.eventLoop) != null && d.remove(this.uuid), b.clearTimeouts(this.uuid), this._unbindListeners(), b.elem.remove(this.chrome), b.removeData(["video", this.uuid]), this.trigger("afterremove"), this._bindings = {}
        }, c.prototype.fullRemove = function () {
            var a, c;
            return c = this._embedContainer, a = this.container, this.remove(), b.elem.remove(c), b.elem.remove(a), this.container = this._embedContainer = null, this
        }, c.prototype.isRemoved = function () {
            return !b.data(["video", this.uuid])
        }, c.prototype._unbindListeners = function () {
            b.elem.unbindAllInside(this.chrome);
            if (this._throttleTriggerViewport)return b.elem.unbind(window, "scroll", this._throttleTriggerViewport), b.elem.unbind(window, "resize", this._throttleTriggerViewport)
        }, c.prototype._saveState = function () {
            return this._savedState = {
                state: this.state(),
                time: this.time(),
                volume: this.volume(),
                inFullscreen: this.inFullscreen()
            }
        }, c.prototype.suspend = function () {
            if (this._suspended)return;
            return this._saveState(), this.info("suspend", b.obj.clone(this._savedState)), this.pause(), this.suppressPlay(!0), this.cancelFullscreen(), this._suspended = !0, this
        }, c.prototype.resume = function (a) {
            var c;
            return a == null && (a = {}), c = b.obj.merge({}, this._savedState, a), this.info("resume", b.obj.clone(c)), this._suspended = !1, this.suppressPlay(!1), this.volume(c.volume), c.time > 0 && (c.state === "ended" ? this.playerType === "flash" && this.duration() > 1800 ? this.time(c.time - 10) : this.time(c.time - 1) : this.time(c.time)), c.state === "playing" && this.play(), this
        }, c.prototype._setupBindings = function () {
            var a = this;
            return this.bind("afterend", function () {
                if (!a._suspended) {
                    if (a.nextVideo())return a.embedNext();
                    if (a._attrs.playlistLoop)return a.info("playlistLoop"), a.embedIndex(0, {autoPlay: !0})
                }
            }), this.bind("widthchange", function () {
                var b, c;
                return (b = a._impl) != null && (b._width = a._width = a.width()), (c = a._impl) != null ? c._videoWidth = a._videoWidth = a.videoWidth() : void 0
            }), this.bind("heightchange", function () {
                return a._impl._height = a._height = a.height(), a._impl._videoHeight = a._videoHeight = a.videoHeight()
            }), this._throttleTriggerViewport == null && (this._throttleTriggerViewport = b.util.throttle(300, function () {
                var b;
                b = a._isInViewportNow();
                if (b && !a._inViewport)return a.trigger("enterviewport"), a.inViewport(!0);
                if (a._inViewport && b)return a.trigger("leaveviewport"), a.inViewport(!1)
            })), b.elem.rebind(window, "scroll", this._throttleTriggerViewport), b.elem.rebind(window, "resize", this._throttleTriggerViewport), this.bind("initembed", this._throttleTriggerViewport), this.bind("up", this._throttleTriggerViewport)
        }, c.prototype._isInViewportNow = function () {
            var a, c, d, e, f;
            return this.down() || this.looksDown() ? !1 : (a = b.elem.offset(this.container), d = a.top, c = d + b.elem.height(this.container), f = b.util.scrollTop(), e = b.util.scrollTop() + b.elem.height(window), d >= f && d < e || c >= f && c < e || d <= f && c >= e)
        }, c.prototype._pauseEventLoop = function () {
            var a;
            b.eventLoop.pause(this.uuid);
            if ((a = this._impl) != null ? a.uuid : void 0)return b.eventLoop.pause(this._impl.uuid)
        }, c.prototype._unpauseEventLoop = function () {
            var a;
            b.eventLoop.unpause(this.uuid);
            if ((a = this._impl) != null ? a.uuid : void 0)return b.eventLoop.unpause(this._impl.uuid)
        }, c.prototype.playlistIndex = function () {
            return this._playlistIndexOf(this.hashedId())
        }, c.prototype.nextVideo = function () {
            return this.playlistIndex() >= 0 ? this._playlist[this.playlistIndex() + 1] || null : null
        }, c.prototype.previousVideo = function () {
            return this.playlistIndex() > 0 ? this._playlist[this.playlistIndex() - 1] || null : null
        }, c.prototype._playlistIndexOf = function (a) {
            var b, c, d, e;
            for (b = c = 0, d = this._playlist.length; 0 <= d ? c <= d : c >= d; b = 0 <= d ? ++c : --c)if (((e = this._playlist[b]) != null ? e.hashedId : void 0) === a)return b;
            return -1
        }, c.prototype._inPlaylist = function (a) {
            return this._playlistIndexOf(a) >= 0
        }, c.prototype._setTransitionOptions = function (a) {
            a.transition || (a.transition = this._opts.playlistTransition || "fade"), a.transitionTime || (a.transitionTime = this._opts.playlistTransitionTime);
            if (a.playlistIndex && a.transition === "slide")return a.playlistIndex >= this._playlistIndex ? a.transition = "slideleft" : a.transition = "slideright"
        }, c.prototype.embedNext = function (a) {
            var c, d;
            return d = this.nextVideo(), this.info("embedNext", d), c = b.obj.merge({autoPlay: !0}, d.options, a), c.playlistIndex = this._playlistIndex + 1, this._setTransitionOptions(c), this.replaceWith(d.hashedId, c)
        }, c.prototype.embedPrevious = function (a) {
            var c, d;
            return d = this.previousVideo(), this.info("embedPrevious", d), c = b.obj.merge({autoPlay: !0}, d.options, a), c.playlistIndex = this._playlistIndex - 1, this.replaceWith(d.hashedId, c)
        }, c.prototype.embedIndex = function (a, c) {
            var d, e;
            return e = this._playlist[a], this.info("embedIndex", a, e), d = b.obj.merge({autoPlay: !0}, e.options, c), d.playlistIndex = a, this.replaceWith(e.hashedId, d)
        }, c.prototype.addToPlaylist = function (a, c, d) {
            var e, f, g, h, i, j, k;
            c == null && (c = {}), d == null && (d = {}), this._playlist == null && (this._playlist = []), i = b.util.toArray(a);
            for (g = 0, h = i.length; g < h; g++)f = i[g], e = {
                hashedId: f,
                options: c
            }, d = b.obj.clone(d), d.after ? d.detect = function (a) {
                return a.hashedId === d.after
            } : d.before && (d.detect = function (a) {
                return a.hashedId === d.before
            }), this.info("addToPlaylist", e, d), b.util.insertIntoArray(this._playlist, e, d), f === ((j = this.nextVideo()) != null ? j.hashedId : void 0) ? this.prefetchMedia(f, c) : f === ((k = this.previousVideo()) != null ? k.hashedId : void 0) && this.prefetchMedia(f, c);
            return this.info("updated _playlist", b.obj.clone(this._playlist)), this._playlist
        }, c.prototype.prefetchNextMedia = function () {
            var a;
            if (!this._opts._inLegacyPlaylist && (a = this.nextVideo()))return this.prefetchMedia(a.hashedId, a.options)
        }, c.prototype.prefetchMedia = function (a, c) {
            var d = this;
            return this.info("@prefetchMedia", a), b.remote.media(a, function (b) {
                return d.info("prefetched", a), d._prefetchPluginScripts(b, c)
            })
        }, c.prototype._prefetchPluginScripts = function (a, c) {
            var d, e, f, g, h, i = this;
            this.info("@_prefetchPluginScripts for", a, c), d = this._gatherOptions({
                givenOptions: c,
                mediaData: a,
                hashedId: a.hashedId,
                container: this.container
            }), e = b.plugin._scriptsFromOptions(d), e = function () {
                var a, c, d;
                d = [];
                for (a = 0, c = e.length; a < c; a++)f = e[a], b.plugin._prefetched[f.src] || d.push(f);
                return d
            }();
            if (e.length === 0) {
                this.info("@_prefetchPluginScripts: no need to fetch plugins");
                return
            }
            for (g = 0, h = e.length; g < h; g++)f = e[g], b.plugin._prefetched[f.src] = "fetching";
            return this.info("prefetching scripts", e), b.remote.scripts(e, function () {
                var a, c;
                for (a = 0, c = e.length; a < c; a++)f = e[a], b.plugin._prefetched[f.src] = "fetched";
                return i.info("prefetched scripts", e)
            })
        }, c.prototype.addPlugin = function (a, c) {
            var d = this;
            return c == null && (c = {}), this.info("addPlugin", a, c), this._hasImpl(function () {
                if (!d.hasPlugin(a))return b.plugin._inject(d, a, c)
            }), this
        }, c.prototype.hasPlugin = function (a) {
            return !!this.plugin[a]
        }, c.prototype.turnOffPluginApis = function () {
            var a, b, c, d, e;
            this.info("turnOffPluginApis"), d = this.plugin, e = [];
            for (b in d)a = d[b], e.push(typeof (c = this._pluginStopGos)[b] == "function" ? c[b](!1) : void 0);
            return e
        }, c.prototype.removePlugins = function () {
            var a, b, c, d;
            this.info("removePlugins"), c = this.plugin, d = [];
            for (b in c)a = c[b], d.push(typeof a.remove == "function" ? a.remove() : void 0);
            return d
        }, c.prototype.containerWidth = function () {
            return this._attrs.rawEmbed && b.detect.browser.old ? b.grid.wrapperWidth(this) : this._attrs.rawEmbed ? b.elem.width(this._embedContainer) : b.util.winWidth()
        }, c.prototype.containerHeight = function () {
            return this._attrs.rawEmbed && b.detect.browser.old ? b.grid.wrapperHeight(this) : this._attrs.rawEmbed ? b.elem.height(this._embedContainer) : b.util.winHeight()
        }, c.prototype._goToDownState = function () {
            return this.info("_goToDownState"), this._stateBeforeDown = this._lastState, this.up(!1), this.down(!0), this.embedType !== "flash" && this.pause(), this.ready(!1), this.trigger("down")
        }, c.prototype._goToUpState = function () {
            var a;
            return this.info("_goToUpState"), this.down(!1), this.up(!0), this.ready(!1), this.embedType === "flash" ? this.rebuild() : (this.fit(), (a = this._impl) != null && a.checkForReady(), this._stateBeforeDown === "playing" && this.play()), this.trigger("up")
        }, c.prototype._checkDownState = function () {
            var a;
            a = this.looksDown();
            if (this.up() && a)return this.info("moving to down state"), this._goToDownState();
            if (this.down() && !a)return this.info("moving to up state"), this._goToUpState()
        }, c.prototype._removeHandleIfGoneFromDOM = function () {
            return this.embedded() ? this.elem() ? this._embedContainer && !this._embedContainer.parentNode ? (this.warn("container removed from DOM", this._embedContainer.id), this.remove(), !0) : !1 : (this.warn("video element removed from DOM", this._embedContainer.id), this.remove(), !0) : !1
        }, c.prototype._doFoam = function () {
            var a, c, d, e, f, g, h, i;
            this._parentBoxSizing == null && (this._parentBoxSizing = b.elem.style(this._embedContainer.parentNode, "box-sizing")), this.popover ? (i = b.elem.width(window), h = b.elem.height(window), g = i / h, g > this.aspect() ? f = Math.round((h - 160) * this.aspect()) : f = i - 160) : this._parentBoxSizing === "border-box" || b.detect.browser.ltie8 || b.detect.browser.msie && b.detect.browser.version === 8 ? (this._foamDummyElem || (this._foamDummyElem = b.elem.fromObject({
                "class": "wistia_video_foam_dummy",
                "data-source-container-id": this._embedContainer.id,
                style: {
                    border: 0,
                    display: "block",
                    height: 0,
                    margin: 0,
                    padding: 0,
                    position: "static",
                    visibility: "hidden",
                    width: "auto"
                }
            }), b.elem.before(this._embedContainer, this._foamDummyElem)), f = b.elem.width(this._foamDummyElem)) : f = b.elem.width(this._embedContainer.parentNode);
            if (!isNaN(f) && (this._lastParentWidth !== f || !this._didFoam))return this._didFoam = !0, e = f, d = e - this.extraWidth(), c = this.heightForWidth(d), a = c + this.extraHeight(), this.videoFoam().maxHeight && a > this.videoFoam().maxHeight && (a = this.videoFoam().maxHeight, c = a - this.extraHeight(), d = this.widthForHeight(c), e = d + this.extraWidth()), this.videoFoam().maxWidth && e > this.videoFoam().maxWidth && (e = this.videoFoam().maxWidth, d = e - this.extraWidth(), c = this.heightForWidth(d), a = c + this.extraHeight()), this.videoFoam().minHeight && a < this.videoFoam().minHeight && (a = this.videoFoam().minHeight, c = a - this.extraHeight(), d = this.widthForHeight(c), e = d + this.extraWidth()), this.videoFoam().minWidth && e < this.videoFoam().minWidth && (e = this.videoFoam().minWidth, d = e - this.extraWidth(), c = this.heightForWidth(d), a = c + this.extraHeight()), this.info("videoFoam set width", e), this.width(e, {constrain: !0}), this._lastParentWidth = f
        }, c.prototype._allowFoam = function () {
            var a;
            return this._hasImpl() && this.grid && this.up() && this.looksUp() && this._attrs.rawEmbed && (this.videoFoam() || ((a = this.popover) != null ? a.isResponsive() : void 0))
        }, c.prototype._allowContainerMatch = function () {
            return this.up() && !this._opts.dontMonitorSize && !this.inFullscreen()
        }, c.prototype._doContainerMatch = function () {
            var a, b;
            b = this.containerWidth(), a = this.containerHeight(), this._lastWidth !== b && (this.notice("container width changed to " + b + ", matching"), this.width(b, {dontChangeContainer: !0}), this.info("_doContainerMatch set width", b), this.trigger("widthchange", b, this._lastWidth), this._lastWidth = b);
            if (this._lastHeight !== a)return this.notice("container height changed to " + a + ", matching"), this.height(a, {dontChangeContainer: !0}), this.trigger("heightchange", a, this._lastHeight), this._lastHeight = a
        }, c.prototype.monitor = function () {
            var a = this;
            return this.info("monitor"), this._lastWidth = this._attrs.startingWidth, this._lastHeight = this._attrs.startingHeight, this._lastParentWidth = this.width(), this._didFoam = !1, this._hasImpl(function () {
                return b.eventLoop.add("" + a.uuid + ".monitor", 500, function () {
                    if (a._removeHandleIfGoneFromDOM())return;
                    a._checkDownState();
                    if (a.popover)return a.popover.fixedSizeTooBigForWindow() ? a._doFoam() : a._opts.popoverSize ? (a._lastWidth = a.width(), a._lastHeight = a.height(), a.width(a._popoverSize().width), a.height(a._popoverSize().height)) : a._doFoam();
                    if (a._allowFoam())return a._doFoam();
                    if (a._allowContainerMatch())return a._doContainerMatch()
                })
            })
        }, c.prototype.looksDown = function () {
            return !this._embedContainer || !b.elem.inDom(this._embedContainer) || b.elem.isHidden(this._embedContainer)
        }, c.prototype.looksUp = function () {
            return !this.looksDown()
        }, c.prototype.plugin = function (a, c) {
            var d, e = this;
            return (d = this._pluginStopGos[a]) || (d = this._pluginStopGos[a] = new b.StopGo, d(!!this.plugin[a])), d(function () {
                return c(e.plugin[a])
            })
        }, c.prototype.videoFoam = function (a) {
            return a != null ? (this.info("videoFoam", a), this._attrs.videoFoam = a) : this._attrs.videoFoam || !1
        }, c.prototype._formattedDurationToSeconds = function (a) {
            return b.TimeHelper.isValidHumanDuration(a) ? b.TimeHelper.humanDurationToSeconds(a) : b.TimeHelper.isValidIso8601(a) ? b.TimeHelper.iso8601ToSeconds(a) : a
        }, c.prototype.specialBind = function () {
            var a, b, c, d, e, f;
            return b = arguments[0], a = 2 <= arguments.length ? __slice.call(arguments, 1) : [], b === "crosstime" ? (d = a[0], c = a[1], this.onCrossTime(d, c), !0) : b === "betweentimes" ? (e = a[0], f = a[1], c = a[2], this.betweenTimes(e, f, c), !0) : !1
        }, c.prototype.specialUnbind = function () {
            var a, b, c, d, e, f;
            return b = arguments[0], a = 2 <= arguments.length ? __slice.call(arguments, 1) : [], b === "crosstime" ? (d = a[0], c = a[1], this.unbindOnCrossTime(d, callback), !0) : b === "betweentimes" ? (e = a[0], f = a[1], c = a[2], this.unbindBetweenTimes(e, f, c), !0) : !1
        }, c.prototype.onCrossTime = function (a, c) {
            var d, e, f, g, h, i, j, k = this;
            if (!/^(\d+\.)?\d+$/.test(a))throw"onCrossTime: Expected first argument to be a number";
            if (typeof c != "function")throw"onCrossTime: Expected second argument to be a function";
            return this._onCrossTimeBindings == null && (this._onCrossTimeBindings = {}), (j = this._onCrossTimeBindings)[a] == null && (j[a] = []), i = "" + this.uuid + "." + b.uniqId("after_time_"), d = this.time() > a, e = function () {
                var b;
                if (k.time() < a)return f();
                if (!d) {
                    d = !0, b = c.call(k);
                    if (b === k.unbind)return k.unbindOnCrossTime(a, c)
                }
            }, f = function () {
                if (k.time() >= a)return b.clearTimeouts(i), e();
                if (!d)return b.timeout(i, e, (a - k.time()) * 1e3)
            }, g = function () {
                if (k.time() < a) {
                    d = !1;
                    if (a - k.time() < 2)return f()
                } else if (!d)return e()
            }, h = function () {
                return b.clearTimeouts(i)
            }, this.bind("play", g), this.bind("timechange", g), this.bind("pause", h), this.bind("end", h), this.bind("waiting", h), this.state() === "playing" && !d && g(), this._onCrossTimeBindings[a].push({
                fn: c,
                setupTimeoutFromNowIfClose: g,
                suspendTimeoutIndefinitely: h
            }), this
        }, c.prototype.unbindOnCrossTime = function (a, b) {
            var c, d, e, f, g, h;
            if (!this._onCrossTimeBindings || !this._onCrossTimeBindings[a])return this;
            c = null, e = 0, h = this._onCrossTimeBindings[a];
            for (f = 0, g = h.length; f < g; f++) {
                d = h[f];
                if (d.fn === b) {
                    c = d;
                    break
                }
                e += 1
            }
            return c ? (this.unbind("play", c.setupTimeoutFromNowIfClose), this.unbind("timechange", c.setupTimeoutFromNowIfClose), this.unbind("pause", c.suspendTimeoutIndefinitely), this.unbind("end", c.suspendTimeoutIndefinitely), this.unbind("waiting", c.suspendTimeoutIndefinitely), this._onCrossTimeBindings[a].splice(e, 1), this._onCrossTimeBindings[a].length === 0 && delete this._onCrossTimeBindings[a], this) : this
        }, c.prototype.betweenTimes = function (a, b, c) {
            var d, e, f, g, h = this;
            if (!/^(\d+\.)?\d+$/.test(a) || !/^(\d+\.)?\d+$/.test(b))throw"betweenTimes: Expected first two arguments to be numbers";
            if (typeof c != "function")throw"betweenTimes: Expected second argument to be a function";
            return e = "" + a + "-" + b, this._betweenTimeBindings == null && (this._betweenTimeBindings = {}), (g = this._betweenTimeBindings)[e] == null && (g[e] = []), f = !1, d = function () {
                var d, e;
                e = h.time(), a <= e && e < b && !f ? (f = !0, d = c.call(h, f)) : !(a <= e && e < b) && f && (f = !1, d = c.call(h, f));
                if (d === h.unbind)return h.unbindBetweenTimes(a, b, c)
            }, this.onCrossTime(a, d), this.onCrossTime(b, d), this.bind("timechange", d), d(), this._betweenTimeBindings[e].push({
                fn: c,
                onTimechange: d
            }), this
        }, c.prototype.unbindBetweenTimes = function (a, b, c) {
            var d, e, f, g, h, i, j;
            g = "" + a + "-" + b;
            if (!this._betweenTimeBindings[g])return this;
            d = null, f = 0, j = this._betweenTimeBindings[g];
            for (h = 0, i = j.length; h < i; h++) {
                e = j[h];
                if (e.fn === c) {
                    d = e;
                    break
                }
                f += 1
            }
            return d ? (this.unbindOnCrossTime(a, d.onTimechange), this.unbindOnCrossTime(b, d.onTimechange), this.unbind("timechange", d.onTimechange), this._betweenTimeBindings[g].splice(f, 1), this._betweenTimeBindings[g].length === 0 && delete this._betweenTimeBindings[g], this) : this
        }, c.prototype.aspect = function () {
            return this._implGet("aspect", 0)
        },c.prototype.asset = function () {
            return this._implGet.apply(this, ["asset", null].concat(__slice.call(arguments)))
        },c.prototype.assets = function () {
            return this._implGet.apply(this, ["assets", null].concat(__slice.call(arguments)))
        },c.prototype.bigPlayButtonEnabled = function () {
            return this._implSetOrGet.apply(this, ["bigPlayButtonEnabled", !1].concat(__slice.call(arguments)))
        },c.prototype.cameraLookAt = function () {
            return this._implExec.apply(this, ["cameraLookAt"].concat(__slice.call(arguments)))
        },c.prototype.cancelFullscreen = function () {
            return this._implExec("cancelFullscreen")
        },c.prototype.duration = function () {
            return this._implGet("duration", null)
        },c.prototype.humanDuration = function () {
            return b.TimeHelper.secondsToHumanDuration(this.duration())
        },c.prototype.embedded = function () {
            return this._implSetOrGet.apply(this, ["embedded", !1].concat(__slice.call(arguments)))
        },c.prototype.eventKey = function () {
            return this._tracker.eventKey() || null
        },c.prototype.extraHeight = function () {
            return this._implGet("extraHeight", 0)
        },c.prototype.extraWidth = function () {
            return this._implGet("extraWidth", 0)
        },c.prototype.fit = function () {
            return this._implExec("fit")
        },c.prototype.fullscreenButtonEnabled = function () {
            return this._implSetOrGet.apply(this, ["fullscreenButtonEnabled", !1].concat(__slice.call(arguments)))
        },c.prototype.hasData = function () {
            return this._implSetOrGet.apply(this, ["hasData", !1].concat(__slice.call(arguments)))
        },c.prototype.height = function () {
            return this._implSetOrGet.apply(this, ["height", null].concat(__slice.call(arguments)))
        },c.prototype.heightForWidth = function () {
            return this._implGet.apply(this, ["heightForWidth", null].concat(__slice.call(arguments)))
        },c.prototype.ieSizeHack = function () {
            return this._implExec("ieSizeHack")
        },c.prototype.inFullscreen = function () {
            return this._implGet("inFullscreen", !1)
        },c.prototype.name = function () {
            return this._implGet("name", "")
        },c.prototype.pause = function () {
            return this._implExec("pause")
        },c.prototype.percentWatched = function () {
            return this._implGet("percentWatched", 0)
        },c.prototype.playbarControlEnabled = function () {
            return this._implSetOrGet.apply(this, ["playbarControlEnabled", !1].concat(__slice.call(arguments)))
        },c.prototype.play = function () {
            return this._implExec("play")
        },c.prototype.playbackRate = function () {
            return this._implSetOrGet.apply(this, ["playbackRate", 1].concat(__slice.call(arguments)))
        },c.prototype.playerColor = function () {
            return this._implSetOrGet.apply(this, ["playerColor", "636155"].concat(__slice.call(arguments)))
        },c.prototype.ready = function () {
            return this._implSetOrGet.apply(this, ["ready", !1].concat(__slice.call(arguments)))
        },c.prototype.secondsWatched = function () {
            return this._implGet("secondsWatched", 0)
        },c.prototype.secondsWatchedVector = function () {
            return this._implGet("secondsWatchedVector", [])
        },c.prototype.smallPlayButtonEnabled = function () {
            return this._implSetOrGet.apply(this, ["smallPlayButtonEnabled", !1].concat(__slice.call(arguments)))
        },c.prototype.state = function () {
            return this._implGet("state", "beforeplay")
        },c.prototype.stillUrl = function () {
            return this._implGet.apply(this, ["stillUrl", null].concat(__slice.call(arguments)))
        },c.prototype.suppressPlay = function () {
            return this._implSetOrGet.apply(this, ["suppressPlay", this].concat(__slice.call(arguments)))
        },c.prototype.time = function () {
            var a, b;
            return b = arguments[0], a = 2 <= arguments.length ? __slice.call(arguments, 1) : [], b != null ? this._implSetOrGet.apply(this, ["time", 0, this._formattedDurationToSeconds(b)].concat(__slice.call(a))) : this._implSetOrGet("time", 0)
        },c.prototype.timeInHumanDuration = function () {
            return a.TimeHelper.secondsToHumanDuration(this._implGet.apply(this, ["time", 0].concat(__slice.call(arguments))))
        },c.prototype.timeInIso8601Duration = function () {
            return a.TimeHelper.secondsToIso8601(this._implGet.apply(this, ["time", 0].concat(__slice.call(arguments))))
        },c.prototype.videoHeight = function () {
            return this._implSetOrGet.apply(this, ["videoHeight", null].concat(__slice.call(arguments)))
        },c.prototype.videoWidth = function () {
            return this._implSetOrGet.apply(this, ["videoWidth", null].concat(__slice.call(arguments)))
        },c.prototype.visitorKey = function () {
            return this._tracker.visitorKey() || null
        },c.prototype.volume = function () {
            return this._implSetOrGet.apply(this, ["volume", 0].concat(__slice.call(arguments)))
        },c.prototype.volumeControlEnabled = function () {
            return this._implSetOrGet.apply(this, ["volumeControlEnabled", !1].concat(__slice.call(arguments)))
        },c.prototype.width = function () {
            return this._implSetOrGet.apply(this, ["width", null].concat(__slice.call(arguments)))
        },c.prototype.widthForHeight = function () {
            return this._implGet.apply(this, ["widthForHeight", null].concat(__slice.call(arguments)))
        },c.prototype.getEmail = function () {
            return this.email()
        },c.prototype.getEventKey = function () {
            return this.eventKey()
        },c.prototype.getVisitorKey = function () {
            return this.visitorKey()
        },c.prototype.setEmail = function (a) {
            return this.email(a)
        },c.prototype.setPlayerColor = function () {
            return this._implExec.apply(this, ["playerColor"].concat(__slice.call(arguments)))
        },c.prototype.removeReadyFn = function () {
            var a, b = this;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._hasImpl(function () {
                var c;
                return (c = b._impl.ready).remove.apply(c, a)
            })
        },c.prototype.email = function (a) {
            var b, c, d = this;
            if (a != null) {
                this.info("email", a), b = this._attrs.email, this._attrs.email = a;
                if ((c = this._opts) != null ? !c.noDeprecatedProperties : !void 0)this.params.trackEmail = a;
                return this._hasImpl(function () {
                    var b;
                    return typeof (b = d._impl).email == "function" ? b.email(a) : void 0
                }), a !== b && this.trigger("emailchange", a), this
            }
            return this._attrs.email || null
        },c.prototype.foreignData = function (a) {
            var c;
            if (a === void 0)return this._attrs.foreignData || this._foreignData || null;
            if (a === null)return this._attrs.foreignData = null, this.trigger("foreigndatachange", a);
            this.info("foreignData", a);
            if (!b.obj.isObject(a))throw new Error("foreignData can only be an Object");
            return a = b.obj.clone(a), this._attrs.foreignData = a, (c = this.tracker) != null && c.transmit({force: !0}), this.trigger("foreigndatachange", a)
        },c.classFor = function (a) {
            var c;
            a instanceof b.Video ? a = a.embedType : a instanceof b.PublicApi && (a = (c = a._impl) != null ? c.embedType : void 0);
            switch (a) {
                case"romulus":
                    return b.VulcanVideo || b.RomulusVideo;
                case"html5":
                    return b.Html5Video;
                case"flash":
                    return b.FlashVideo;
                case"external":
                    return b.ExternalVideo;
                default:
                    return b.Video
            }
        },c
    }(), b.mixin(b.PublicApi.prototype, b.bindable)
})(Wistia), function (a) {
    if (a.generate)return;
    return a.generate = {}, a.generate.html = function (b) {
        var c, d, e, f, g, h, i, j, k, l, m, n, o, p;
        if (/string|number|boolean/.test(typeof b))return b.toString();
        if (b instanceof Array) {
            i = "";
            for (m = 0, o = b.length; m < o; m++)f = b[m], i += a.generate.html(f);
            return i
        }
        if (typeof b != "object")return b.toString();
        d = [];
        for (g in b)k = b[g], g === "tagName" ? j = k : g === "childNodes" ? e = k : d.push({key: g, val: k});
        j || (j = "div"), i = "<" + j;
        for (n = 0, p = d.length; n < p; n++)c = d[n], c.key === "style" && a.obj.isObject(c.val) && (c.val = function () {
                var a, b;
                a = c.val, b = [];
                for (h in a)l = a[h], b.push("" + h.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() + ":" + l);
                return b
            }().join(";") + ";"), i += " " + c.key + '="' + c.val + '"';
        return /^(br|hr|img|link|meta|input)$/i.test(j) ? i += " />" : (i += ">", e && (typeof e == "string" ? i += e : typeof e == "object" && (i += a.generate.html(e))), i += "</" + j + ">"), i
    }, a.generate.stillWidth = function (a) {
        var b, c, d, e, f;
        b = [640, 960, 1280], a.masterStillWidth < 1280 && b.push(a.masterStillWidth), f = b.sort(function (a, b) {
            return a - b
        });
        for (d = 0, e = f.length; d < e; d++) {
            c = f[d];
            if (a.videoWidth <= c)return c
        }
        return Math.max.apply(Math, b)
    }, a.generate.relativeBlockCss = function (a, b) {
        return a == null && (a = "100%"), b == null && (b = "100%"), "display:inline-block;*display:inline;height:" + b + ";margin:0;padding:0;position:relative;vertical-align:top;width:" + a + ";zoom:1;"
    }, a.extend({
        generate: {
            video: function (b, c, d) {
                d = a.obj.merge({}, c.params, d, {
                    uuid: c.uuid,
                    videoWidth: c.videoWidth(),
                    videoHeight: c.videoHeight()
                });
                switch (b) {
                    case"flash":
                        return a.generate.flashEmbedCode(c._mediaData, d);
                    case"html5":
                        return a.generate.html5EmbedElem(c._mediaData, d);
                    case"romulus":
                        return a.generate.romulusEmbedElem(c._mediaData, d);
                    case"external":
                        return a.generate.externalEmbedCode(c._mediaData, d);
                    case"flashUrl":
                        return a.generate.flashUrl(c._mediaData, d)
                }
            }
        }
    })
}(Wistia);
var __slice = [].slice;
(function (a) {
    var b, c;
    b = a;
    if (b.Video)return;
    return b.Video = function () {
        function a(a) {
            this.publicApi = a, this.uuid = b.seqId(), this.info("constructor"), this.chrome = this.publicApi.chrome, this.transferFacadeProperties(), this.ready = new b.StopGo, this.hasData = new b.StopGo, this.embedded = new b.StopGo, this.commandQueueOpen = new b.StopGo, this.hasData(!0), this.commandQueueOpen(!0), this.playing = new b.StopGo, this.notFullscreen = new b.StopGo, this.plugin || (this.plugin = {}), this.resetStateVariables(), this.setupPercentTracking(), this
        }

        return a.prototype._log = function () {
            var a, c, d;
            return c = arguments[0], a = 2 <= arguments.length ? __slice.call(arguments, 1) : [], b[c].apply(b, [this.constructor.name, this.hashedId() || "no hashedId", (d = this._embedContainer) != null ? d.id : void 0, this.uuid].concat(__slice.call(a)))
        }, a.prototype.error = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["error"].concat(__slice.call(a)))
        }, a.prototype.warn = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["notice"].concat(__slice.call(a)))
        }, a.prototype.notice = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["notice"].concat(__slice.call(a)))
        }, a.prototype.info = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["info"].concat(__slice.call(a)))
        }, a.prototype.debug = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["debug"].concat(__slice.call(a)))
        }, a.prototype.log = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["log"].concat(__slice.call(a)))
        }, a.FAILED = -1, a.QUEUED = 0, a.PROCESSING = 1, a.READY = 2, a.prototype.init = function () {
            return this.setupPipedreamTracking(), this
        }, a.prototype.transferFacadeProperties = function () {
            var a, b, c, d, e;
            b = "_attrs\n_embedContainer\n_givenOptions\n_hashedId\n_mediaData\n_opts\nchrome\ncontainer\ndata\ndown\nfullscreenContainer\nup".split(/[\n\s]+/), e = [];
            for (c = 0, d = b.length; c < d; c++)a = b[c], e.push(this[a] = this.publicApi[a]);
            return e
        }, a.prototype.elem = function () {
            return null
        }, a.prototype.embed = function () {
            throw new Error("Define in subclass!")
        }, a.prototype.checkForReady = function () {
            throw new Error("Define in subclass!")
        }, a.prototype.setupGrid = function () {
            return this.grid || (this.grid = b.createGrid(this), b.elem.append(this.chrome, this.grid.root)), this.grid
        }, a.prototype.placeEmbed = function (a) {
            var c, d = this;
            return this._opts.subContainer ? c = this._embedContainer : c = this.grid.center, this.info("placeEmbed", c, a), this.wrapperElem = b.elem.fromObject({
                id: b.seqId("wistia_video_wrapper_"),
                style: b.generate.relativeBlockCss()
            }), b.elem.style(this.wrapperElem, {overflow: "hidden"}), b.elem.append(c, this.wrapperElem), typeof a == "string" ? this.wrapperElem.innerHTML += a : b.elem.append(this.wrapperElem, a), this.embedded(function () {
                return d.correctForIntegers()
            }), this.ieSizeHack()
        }, a.prototype.stopStreaming = function () {
        }, a.prototype.wipeOutstandingAsyncFunctions = function () {
            var a;
            this.info("wipeOutstandingAsyncFunctions"), (a = b.eventLoop) != null && a.remove(this.uuid), b.clearTimeouts(this.uuid);
            if (this._remoteMediaKey)return b.clearTimeouts(this._remoteMediaKey)
        }, a.prototype.resetStateVariables = function () {
            return this.info("resetStateVariables"), this._lastTimePosition = -1, this._lastState = "beforeplay", this._streamSet = !1, this._issuedPlay = !1, this._issuedPause = !1, this._beforePlay = !0, this._hasPlayed = !1, this._waiting = 0, this._ended = !1, this.playing(!1)
        }, a.prototype.rebuild = function (a) {
            var c = this;
            return a == null && (a = {}), this.info("rebuild"), this.embedded(function () {
                return c.ready(!1), b.elem.remove(c.wrapperElem), c.embed()
            }), this
        }, a.prototype.cancelFullscreen = function () {
            return this.info("cancelFullscreen"), this.rebuild()
        }, a.prototype.requestFullscreen = function () {
        }, a.prototype.suspend = function () {
            return this.publicApi.suspend()
        }, a.prototype.resume = function () {
            return this.publicApi.resume()
        }, a.prototype.fit = function () {
            return this.info("fit"), b.detect.browser.old && (this._embedContainer.style.width = "" + this._opts.videoWidth + "px", this._embedContainer.style.height = "" + this._opts.videoHeight + "px"), this._opts.dontFit || (this.grid.root.style.height = "" + b.elem.height(this._embedContainer) + "px", this.grid.root.style.width = "" + b.elem.width(this._embedContainer) + "px"), b.grid.fitVertical(this), b.grid.fitHorizontal(this), this.correctForIntegers(), this.ieSizeHack()
        }, a.prototype.setupPercentTracking = function () {
            var a, b, c, d = this;
            if (this._trackPercent)return;
            if (this.state() === "playing")for (a = b = 0, c = Math.floor(this.time()); 0 <= c ? b < c : b > c; a = 0 <= c ? ++b : --b)this._logSecondWatched(a);
            return this._trackPercent == null && (this._trackPercent = function (a) {
                var b;
                b = d.percentWatched(), d._logSecondWatched(a);
                if (d.percentWatched() !== b)return d.trigger("percentwatchedchanged", d.percentWatched(), b)
            }), this.rebind("secondchange", this._trackPercent)
        }, a.prototype._checkDownState = function () {
            return this.publicApi._checkDownState()
        }, a.prototype._logSecondWatched = function (a) {
            var b;
            this._secondsWatched == null && (this._secondsWatched = function () {
                var a, c, d;
                d = [];
                for (b = a = 0, c = Math.floor(this.duration()); 0 <= c ? a < c : a > c; b = 0 <= c ? ++a : --a)d.push(0);
                return d
            }.call(this)), this._totalWatched == null && (this._totalWatched = 0), this._totalRewatched == null && (this._totalRewatched = 0);
            if (a >= this._secondsWatched.length)return;
            return this._secondsWatched[a] += 1, this._secondsWatched[a] === 1 ? this._totalWatched += 1 : this._totalRewatched += 1
        }, a.prototype.percentWatched = function () {
            return this.secondsWatched() / Math.floor(this.duration())
        }, a.prototype.secondsWatched = function () {
            return this._totalWatched || 0
        }, a.prototype.secondsWatchedVector = function () {
            return this._secondsWatched
        }, a.prototype.setupPipedreamTracking = function () {
            var a = this;
            if (this._opts.flashShim)return;
            return this.embedded(function () {
                var c, d, e, f;
                if (a._opts.flashShim)return;
                b.Metrics.videoCount(a, "player/initembed"), f = b.Metrics.assetBuckets(a);
                for (d = 0, e = f.length; d < e; d++)c = f[d], b.Metrics.videoCount(a, "player/initembed." + c);
                return a._determineAssetCacheStatus(function () {
                    var c;
                    return (typeof a.elem == "function" ? (c = a.elem()) != null ? c.getAttribute("preload") : void 0 : void 0) !== "none" ? b.Metrics.videoCount(a, "player/asset/" + a._cacheStatus) : a.bind("play", function () {
                        return b.Metrics.videoCount(a, "player/asset/" + a._cacheStatus), a.unbind
                    })
                }), a.bind("switched-asset-without-load", function () {
                    var a = this;
                    return this._determineAssetCacheStatus(function () {
                        return b.Metrics.videoCount(a, "player/asset/" + a._cacheStatus)
                    })
                })
            }), this.bind("play", function () {
                var c, d, e, f;
                b.Metrics.videoCount(a, "player/play"), f = b.Metrics.assetBuckets(a);
                for (d = 0, e = f.length; d < e; d++)c = f[d], b.Metrics.videoCount(a, "player/play." + c);
                return a.unbind
            }), b.Metrics.countEventOnce(this, "enter-fullscreen"), b.Metrics.countEventOnce(this, "end"), b.Metrics.countShowLoadingOnce(this), b.Metrics.countShowLoadingAll(this), b.Metrics.countShowLoadingLongTimeOnce(this), b.Metrics.countShowLoadingLongTimeAll(this), b.Metrics.sampleBufferingWaitDurationOnce(this), b.Metrics.sampleBufferingWaitDurationAll(this), b.Metrics.sampleTimeFromPlayToTimechangeAll(this), b.Metrics.sampleInitialWaitDuration(this)
        }, a.prototype.animate = function (a, c) {
            var d, e = this;
            return a == null && (a = {}), c == null && (c = {}), this.info("animate", a, c), d = c.callback, c.callback = function () {
                return b.elem.style(e.grid.root, {position: "relative"}), typeof d == "function" ? d() : void 0
            }, b.elem.style(this.grid.root, {position: "absolute"}), b.elem.animate(this.grid.root, a, c), this
        }, a.prototype.slide = function () {
            var a, b, c;
            return a = arguments[0], c = arguments[1], b = 3 <= arguments.length ? __slice.call(arguments, 2) : [], this.animate.apply(this, [{transform: "translate(" + a + "px," + c + "px)"}].concat(__slice.call(b)))
        }, a.prototype._shortAnimArgs = function (a) {
            var c;
            return typeof a[0] == "function" ? c = {callback: a[0]} : c = b.obj.merge({}, a[0], {callback: a[1]})
        }, a.prototype.slideOutLeft = function () {
            var a, c = this;
            return a = this._shortAnimArgs(arguments), b.elem.style(this.grid.root, {transform: "translate(0px, 0px)"}), setTimeout(function () {
                return c.slide(-c.videoWidth(), 0, a)
            }, 1), this
        }, a.prototype.slideInLeft = function (a) {
            var c, d = this;
            return c = this._shortAnimArgs(arguments), b.elem.style(this.grid.root, {transform: "translate(" + this.videoWidth() + "px, 0px)"}), setTimeout(function () {
                return d.slide(0, 0, c)
            }, 1), this
        }, a.prototype.slideOutRight = function (a) {
            var c, d = this;
            return c = this._shortAnimArgs(arguments), b.elem.style(this.grid.root, {transform: "translate(0px, 0px)"}), setTimeout(function () {
                return d.slide(d.videoWidth(), 0, c)
            }, 1), this
        }, a.prototype.slideInRight = function () {
            var a, c = this;
            return a = this._shortAnimArgs(arguments), b.elem.style(this.grid.root, {transform: "translate(" + -this.videoWidth() + "px, 0px)"}), setTimeout(function () {
                return c.slide(0, 0, a)
            }, 1), this
        }, a.prototype.fade = function () {
            var a, c, d;
            return c = arguments[0], a = 2 <= arguments.length ? __slice.call(arguments, 1) : [], c == null && (c = 0), (d = b.elem).animate.apply(d, [this.gridChildren(), {opacity: c}].concat(__slice.call(a)))
        }, a.prototype.fadeIn = function () {
            var a, c, d = this;
            return c = this._shortAnimArgs(arguments), a = c.callback, c.callback = function () {
                return b.elem
                    .style(d.gridChildren(), {opacity: ""}), typeof a == "function" ? a() : void 0
            }, b.elem.style(this.gridChildren(), {opacity: 0}), setTimeout(function () {
                return d.fade(1, c)
            }, 1)
        }, a.prototype.fadeOut = function () {
            var a, c = this;
            return a = this._shortAnimArgs(arguments), b.elem.style(this.gridChildren(), {opacity: 1}), setTimeout(function () {
                return c.fade(0, a)
            }, 1)
        }, a.prototype.gridChildren = function () {
            var a, c, d, e, f, g, h, i;
            d = [], h = this.grid;
            for (e in h) {
                c = h[e], i = c.childNodes;
                for (f = 0, g = i.length; f < g; f++)a = i[f], b.isGridElem(this.grid, a) || d.push(a)
            }
            return d
        }, a.prototype.correctForIntegers = function () {
            var a, c, d, e, f, g, h, i;
            if (b.detect.iphone || b.detect.ipad)return;
            d = this.elem();
            if (d != null ? !d.style : !void 0)return;
            if (!/video/i.test(d != null ? d.tagName : void 0))return;
            a = this.videoHeight(), c = this.videoWidth(), f = a * this.originalAspect(), e = Math.floor(c / this.originalAspect() / 2) * 2, h = e - a, i = f - c, g = b.detect.firefox && b.detect.browser.mozilla && b.detect.browser.version >= 36;
            if (b.detect.browser.webkit || g) {
                Math.abs(i) < 6 && Math.abs(h) < 6 ? d.style.objectFit = "fill" : d.style.objectFit = "contain";
                return
            }
            return 0 < h && h <= 6 ? (this.info("correctForIntegers heightDiff", h), d.style.height = "calc(100% + " + Math.ceil(h) + "px)", d.style.width = "100%", d.style.left = "", h > 1 ? d.style.top = "" + -Math.ceil(h / 2) + "px" : d.style.top = "") : 0 < i && i <= 6 ? (this.info("correctForIntegers widthDiff", i), d.style.width = "calc(100% + " + Math.ceil(i) + "px)", d.style.height = "100%", d.style.top = "", i > 1 ? d.style.left = "" + -Math.ceil(i / 2) + "px" : d.style.left = "") : (this.info("correctForIntegers perfect"), d.style.height = "100%", d.style.width = "100%", d.style.top = "", d.style.left = "")
        }, a.prototype.remove = function (a) {
            var c, d, e, f;
            a == null && (a = {}), this.info("remove"), a.trigger !== !1 && this.trigger("beforeremove"), this.hasData(!1), this.ready(!1), this.embedded(!1), this.stopStreaming(), e = this.plugin;
            for (d in e)c = e[d], c != null && typeof c.remove == "function" && c.remove();
            if ((f = this.grid) != null ? f.root : void 0)b.elem.unbindAllInside(this.grid.root), b.elem.remove(this.grid.root);
            return this.grid = null, a.trigger !== !1 && this.trigger("down"), a.trigger !== !1 && this.trigger("afterremove"), this.wipeOutstandingAsyncFunctions(), this._bindings = {}, this.cleanupRefs()
        }, a.prototype.isRemoved = function () {
            return this.grid === null
        }, a.prototype.cleanupRefs = function () {
            var a, b, c, d;
            typeof this.cleanup == "function" && this.cleanup(), d = [];
            for (a in this)b = this[a], d.push((c = this[a]) != null ? typeof c.cleanup == "function" ? c.cleanup() : void 0 : void 0);
            return d
        }, a.prototype._baseEventLoopDuration = 300, a.prototype._eventLoopDuration = 300, a.prototype.canAutoPlay = function () {
            return !this.suppressPlay()
        }, a.prototype.play = function () {
            var a = this;
            return this.info("play"), this.ready(function () {
                return a.play()
            }), this
        }, a.prototype.suppressPlay = function (a) {
            return a != null ? (this.info("suppressPlay", a), this._suppressPlay = !!a) : this._suppressPlay
        }, a.prototype.videoFoam = function () {
            var a;
            return (a = this.publicApi).videoFoam.apply(a, arguments)
        }, a.prototype.pause = function () {
            var a = this;
            return this.info("pause"), this.ready(function () {
                return a.pause()
            }), this
        }, a.prototype.time = function (a) {
            var b = this;
            return a != null ? (this.info("time", a), this.ready(function () {
                return b.time(a)
            }), this) : 0
        }, a.prototype.state = function () {
            return "beforeplay"
        }, a.prototype.duration = function () {
            return this._mediaData.duration || null
        }, a.prototype.volume = function (a) {
            var b = this;
            return a != null ? (this.info("volume", a), this.ready(function () {
                return b.volume(a)
            })) : 0
        }, a.prototype.name = function () {
            return this._mediaData.name || null
        }, a.prototype.hashedId = function () {
            return this._hashedId
        }, a.prototype.bigPlayButtonEnabled = function () {
            return this
        }, a.prototype.smallPlayButtonEnabled = function () {
            return this
        }, a.prototype.playbarControlEnabled = function () {
            return this
        }, a.prototype.volumeControlEnabled = function () {
            return this
        }, a.prototype.fullscreenButtonEnabled = function () {
            return this
        }, a.prototype.setPlayerColor = function (a) {
            return this.playerColor(a), this
        }, a.prototype.playerColor = function (a) {
            var c;
            return a != null ? (this.info("playerColor", a), c = this._attrs.playerColor, this._attrs.playerColor = b.Video._sanePlayerColor(a), c !== this._attrs.playerColor && this.trigger("playercolorchange", this._attrs.playerColor, c), this) : this._attrs.playerColor
        }, a._sanePlayerColor = function (a) {
            var b, c, d, e;
            if (a) {
                a = ("" + a).replace(/^#/g, "");
                if (a.length < 6) {
                    c = "";
                    for (b = d = 0, e = 6 - a.length; 0 <= e ? d < e : d > e; b = 0 <= e ? ++d : --d)c += "0";
                    a = "" + c + a
                }
                return /^[\da-f]{6}$/i.test(a) || (a = "636155"), a
            }
            return "636155"
        }, a.prototype.playbackRate = function (a) {
            return a != null ? this : 1
        }, a.prototype.width = function (a, c) {
            var d, e, f, g, h;
            return c == null && (c = {}), a != null ? (this.info("width", a, c), a = parseInt(a, 10), d = this.width(), this.grid.wrapper.style.width = this.chrome.style.width = "" + a + "px", c.dontChangeContainer || (this._embedContainer.style.width = "" + a + "px"), this.grid.center.style.width = "100%", this.embedType === "flash" && (f = this.elem()) != null && (f.style.width = "100%"), this._opts.dontFit ? (this.grid.main.style.width = "" + (a - b.elem.width(this.grid.left) - b.elem.width(this.grid.right)) + "px", this.grid.main.style.marginLeft = "" + b.elem.width(this.grid.left) + "px") : (b.grid.fitHorizontal(this), b.grid.fitVertical(this)), a !== d && this.trigger("widthchange", a, d), c.constrain && this.constrainToWidth(), this._width = a, this.correctForIntegers(), this.ieSizeHack(), this) : (b.detect.browser.old && (g = this.elem()) != null && (g.style.position = "absolute"), e = b.elem.width(this.grid.left) + b.elem.width(this.grid.center) + b.elem.width(this.grid.right), b.detect.browser.old && (h = this.elem()) != null && (h.style.position = "static"), e)
        }, a.prototype.height = function (a, c) {
            var d, e, f, g, h;
            return c == null && (c = {}), a != null ? (this.info("height", a, c), a = parseInt(a, 10), d = this.height(), this.grid.wrapper.style.height = this.chrome.style.height = "" + a + "px", c.dontChangeContainer || (this._embedContainer.style.height = "" + a + "px"), this.grid.center.style.height = "100%", this.embedType === "flash" && (f = this.elem()) != null && (f.style.height = "100%"), this._opts.dontFit ? (this.grid.main.style.height = "" + (a - b.elem.height(this.grid.above) - b.elem.height(this.grid.below)) + "px", this.grid.main.style.marginTop = "" + b.elem.height(this.grid.top) + "px") : (b.grid.fitHorizontal(this), b.grid.fitVertical(this)), a !== d && this.trigger("heightchange", a, d), c.constrain && this.constrainToHeight(), this.correctForIntegers(), this.ieSizeHack(), this) : (b.detect.browser.old && (g = this.elem()) != null && (g.style.position = "absolute"), e = b.elem.height(this.grid.center) + Math.max(b.elem.height(this.grid.above), b.elem.height(this.grid.top)) + Math.max(b.elem.height(this.grid.below), b.elem.height(this.grid.bottom)), b.detect.browser.old && (h = this.elem()) != null && (h.style.position = "static"), e)
        }, a.prototype.videoWidth = function (a, c) {
            var d, e, f, g, h;
            return c == null && (c = {}), a != null ? (this.info("videoWidth", a, c), a = parseInt(a, 10), e = this.width(), this.grid.center.style.width = "100%", this.grid.main.style.width = "" + a + "px", d = b.elem.width(this.grid.left) + b.elem.width(this.grid.right), this.grid.wrapper.style.width = this.chrome.style.width = "" + (a + d) + "px", c.dontChangeContainer || (this._embedContainer.style.width = "" + (a + d) + "px"), b.grid.fitHorizontal(this), b.grid.fitVertical(this), a !== e && this.trigger("widthchange", a, e), c.constrain && this.constrainToWidth(), this.correctForIntegers(), this.ieSizeHack(), this) : (b.detect.browser.old && (g = this.elem()) != null && (g.style.position = "absolute"), f = b.elem.width(this.grid.center), b.detect.browser.old && (h = this.elem()) != null && (h.style.position = "static"), f)
        }, a.prototype.videoHeight = function (a, c) {
            var d, e, f, g, h, i, j;
            return c == null && (c = {}), a != null ? (this.info("videoHeight", a, c), a = parseInt(a, 10), f = this.height(), this.grid.main.style.height = "" + a + "px", this.grid.center.style.height = "100%", this.grid.main.style.height = "" + a + "px", b.detect.browser.ltie8 && b.grid.zeroEmptySections(this), h = Math.max(b.elem.height(this.grid.above), b.elem.height(this.grid.top)), d = Math.max(b.elem.height(this.grid.below), b.elem.height(this.grid.bottom)), e = h + d, this.grid.wrapper.style.height = this.chrome.style.height = "" + (a + e) + "px", c.dontChangeContainer || (this._embedContainer.style.height = "" + (a + e) + "px"), b.grid.fitHorizontal(this), b.grid.fitVertical(this), a !== f && this.trigger("heightchange", a, f), c.constrain && this.constrainToHeight(), this.correctForIntegers(), this.ieSizeHack(), this) : (b.detect.browser.old && this.elem && (i = this.elem()) != null && (i.style.position = "absolute"), g = b.elem.height(this.grid.center), b.detect.browser.old && this.elem && (j = this.elem()) != null && (j.style.position = "static"), g)
        }, a.prototype.constrainToHeight = function () {
            return this.videoWidth(this.widthForHeight(this.videoHeight()))
        }, a.prototype.constrainToWidth = function () {
            return this.videoHeight(this.heightForWidth(this.videoWidth()))
        }, a.prototype.extraHeight = function () {
            var a, c;
            return c = Math.max(b.elem.height(this.grid.above), b.elem.height(this.grid.top)), a = Math.max(b.elem.height(this.grid.below), b.elem.height(this.grid.bottom)), c + a
        }, a.prototype.extraWidth = function () {
            return b.elem.width(this.grid.left) + b.elem.width(this.grid.right)
        }, a.prototype.heightForWidth = function (a) {
            return Math.round(a / this.aspect())
        }, a.prototype.widthForHeight = function (a) {
            return Math.round(a * this.aspect())
        }, a.prototype.aspect = function () {
            var a;
            return this._opts.aspect ? this._opts.aspect : this._currentAsset ? this._currentAsset.width / this._currentAsset.height : (a = this.asset({container: /mp4|flv/}), a.width / a.height)
        }, a.prototype.originalAspect = function () {
            return this.originalAsset() ? this.originalAsset().width / this.originalAsset().height : this.bestAsset().width / this.bestAsset().height
        }, a.prototype.ieSizeHack = function () {
            b.detect.browser.msie && (typeof this.elem == "function" ? this.elem() : void 0) && (this.info("ieSizeHack"), this.elem().offsetLeft % 2 === 0 ? this.elem().style.width = "" + (this.videoWidth() + 1) + "px" : this.elem().style.width = "100%")
        }, a.prototype.inFullscreen = function () {
            return !1
        }, a.prototype.savePlatformPreference = function (a) {
            return this.info("savePlatformPreference", a), b.localStorage("platformPreference", a)
        }, a.prototype.visitorKey = function () {
            return this._tracker.visitorKey()
        }, a.prototype.eventKey = function () {
            return this._tracker.eventKey()
        }, a.prototype.getVisitorKey = function () {
            return this.visitorKey()
        }, a.prototype.getEventKey = function () {
            return this.eventKey()
        }, a.prototype.disableTextTracks = function () {
            var a = this;
            return this.info("disableTextTracks"), this._disableTextTracks == null && (this._disableTextTracks = function () {
                var b, c, d, e, f, g;
                if ((e = a.elem()) != null ? !e.textTracks : !void 0)return;
                f = a.elem().textTracks, g = [];
                for (c = 0, d = f.length; c < d; c++)b = f[c], g.push(b.mode = "disabled");
                return g
            }), this.rebind("play", this._disableTextTracks)
        }, a.prototype.judyReport = function () {
            var a, c, d, e, f;
            c = "        has2PassIphoneEncode        isLessThan15Minutes        sdFlashIsScreencast        hasNoFlashHdAssets        hasGoodRomulusAssetsForSdOnly        hasGoodRomulusAssetsForMd        hasGoodRomulusAssets        baseRomulusSupport        fullRomulusSupport        h264Support        flashSupport        fullscreenSupport        ", f = c.split(/[\s\n]+/);
            for (d = 0, e = f.length; d < e; d++)a = f[d], a && console.log(a, b.judy[a](this.data.media));
            return this
        }, a.prototype.sdAsset = function () {
            throw new Error("Implement in subclass!")
        }, a.prototype.mdAsset = function () {
            throw new Error("Implement in subclass!")
        }, a.prototype.hdAsset = function () {
            throw new Error("Implement in subclass!")
        }, a.assets = function (a, c) {
            var d, e, f, g, h, i, j, k, l, m, n;
            c == null && (c = {}), f = ["select", "sortFn", "sortBy", "unique"], g = b.obj.only(c, f), j = g.select || b.obj.except(c, f), j && (g.select = j), i = g.select ? b.obj.select(a.unnamed_assets, g.select) : b.obj.clone(a.unnamed_assets);
            if (g.sortFn || g.sortBy)i = b.obj.sort(i, g.sortFn || g.sortBy);
            if (g.unique) {
                k = {};
                for (m = 0, n = i.length; m < n; m++)d = i[m], e = d["" + g.unique] || "__undefined__", k[e] || (k[e] = d);
                i = function () {
                    var a;
                    a = [];
                    for (h in k)l = k[h], a.push(l);
                    return a
                }()
            }
            return i
        }, a.asset = function (a, b) {
            return this.assets(a, b)[0] || null
        }, a.stillUrl = function (a, c) {
            var d, e, f, g, h;
            e = this.stillAsset(a, c), c = b.obj.merge({
                aspect: e.width / e.height,
                stillUrl: e.url,
                playButton: !1,
                playerColor: (h = a.embed_options) != null ? h.playerColor : void 0,
                videoWidth: e.width || 640,
                videoHeight: e.height || 360,
                stillSnap: !0
            }, c), c.stillSnap ? (g = b.generate.stillWidth({
                videoWidth: c.videoWidth,
                masterStillWidth: e.width
            }), f = Math.round(g / c.aspect)) : (g = c.videoWidth, f = c.videoHeight), d = b.url.parse(c.stillUrl);
            if (!this.isBakeryUrl(c.stillUrl))return c.stillUrl;
            c.protocol === "https:" && (d.protocol = "https:", d.host = b.constant.assetSslHost), d.params.image_crop_resized = "" + g + "x" + f;
            if (c.playButton == null || c.playButton)d.params.image_play_button = 1, d.params.image_play_button_color = "" + c.playerColor + "e0";
            return d.ext("jpg"), d.absolute()
        }, a.bakeryHosts = function () {
            return [b.constant.assetHost, b.constant.assetSslHost, b.constant.freeAssetHost, b.constant.freeAssetSslHost, "embed.wistia.com", "embed-a.wistia.com", "prime.wistia.com", "mixergy-cdn.wistia.com"]
        }, a.isBakeryUrl = function (a) {
            var c;
            return c = b.url.parse(a), c.host ? this.bakeryHosts().join(",").indexOf(c.host) >= 0 : !1
        }, a.stillAsset = function (a) {
            var b;
            return b = this.asset(a, {
                type: "still_image",
                sortBy: "created_at desc"
            }), b || (b = this.asset(a, {type: "original"})), b || (b = this.asset(a, {container: /flv|mp4/})), b
        },a.prototype.stillUrl = function (a) {
            return a = b.obj.merge({
                videoWidth: this.grid ? this.videoWidth() : null,
                videoHeight: this.grid ? this.videoHeight() : null
            }, this._opts, a), b.Video.stillUrl(this._mediaData, a)
        },a.prototype.stillAsset = function () {
            return b.Video.stillAsset(this._mediaData)
        },a.prototype.thumbnailAssets = function () {
            var a, b, c, d, e, f, g, h, i;
            if (this._opts.stillUrl)return [{height: null, url: this._opts.stillUrl, width: null}];
            b = this.stillAsset(), c = b.width / b.height, h = [320, 640, 960, 1280], i = [];
            for (f = 0, g = h.length; f < g; f++)e = h[f], a = Math.round(e / c), d = this.stillUrl({
                videoWidth: e,
                videoHeight: a
            }), i.push({height: a, url: d, width: e});
            return i
        },a.prototype.changeStill = function (a, c) {
            var d, e = this;
            return c == null && (c = {}), d = new Image, d.src = a, d.style.visibility = "hidden", d.style.position = "absolute", b.elem.append(document.body, d), d.onload = function () {
                var c, f, g, h;
                return h = b.elem.width(d), g = b.elem.height(d), b.elem.remove(d), f = function () {
                    var a, b, d, e;
                    d = this.assets(), e = [];
                    for (a = 0, b = d.length; a < b; a++)c = d[a], c.type !== "still_image" && e.push(c);
                    return e
                }.call(e), e._mediaData.unnamed_assets = f, e._mediaData.unnamed_assets.push({
                    type: "still_image",
                    url: a,
                    width: h,
                    height: g,
                    bitrate: 0,
                    status: b.Video.READY,
                    created_at: (new Date).getTime()
                }), e.rebuild()
            }
        },a.prototype.assets = function (a) {
            return b.Video.assets(this._mediaData, a)
        },a.prototype.asset = function () {
            var a, b;
            return typeof arguments[0] == "string" ? (a = arguments[0] + "Asset", b = arguments[1], this[a](b)) : (b = arguments[0], this.assets(b)[0] || null)
        },a.prototype.mp4Asset = function (a) {
            return this.asset(b.obj.merge({container: "mp4", "public": !0, status: b.Video.READY}, a))
        },a.prototype.flashAsset = function (a) {
            return this.asset(b.obj.merge({container: "flv", status: b.Video.READY}, a))
        },a.prototype.isScreencast = function () {
            return this.originalAsset().width > 640 && this.originalAsset().bitrate < 1200
        },a.prototype.originalAsset = function () {
            return this._original || (this._original = this.asset({type: "original"}))
        },a.prototype.iphoneAsset = function () {
            return this._iphoneAsset || (this._iphoneAsset = this.aspect() > 1 ? this.mp4Asset({width: 640}) || this.smallestNormalMp4Asset() : this.mp4Asset({width: 320}) || this.mp4Asset({width: 640}) || this.smallestNormalMp4Asset())
        },a.prototype.masterM3u8Asset = function (a) {
            var c;
            return ((c = this.hlsAssetsBySegmentDuration()) != null ? c[a] : void 0) != null ? {
                bitrate: "variable",
                ext: "m3u8",
                height: "variable",
                "public": !0,
                size: "variable",
                type: "hls_video",
                url: b.detect.browser.msie ? this.masterM3u8Url(a) : this.masterM3u8DataURI(a),
                width: "variable",
                slug: "hls_master_m3u8_seg" + a + "s"
            } : null
        },a.prototype.masterM3u8ContentFromAssets = function (a) {
            var b, c, d, e, f, g, h;
            f = this.assets({container: "m3u8", segment_duration: a}).sort(function (a, b) {
                var c, d;
                return (((c = a.metadata) != null ? c.max_bitrate : void 0) || 0) - (((d = b.metadata) != null ? d.max_bitrate : void 0) || 0)
            }), d = "#EXTM3U", e = [];
            for (g = 0, h = f.length; g < h; g++)b = f[g], c = b.metadata.max_bitrate * 8, e.push("#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=" + c + "\n" + b.url);
            return d + "\n" + e.join("\n")
        },a.prototype.masterM3u8DataURI = function (a) {
            return "data:application/x-mpegURL;base64," + b.base64.encode(this.masterM3u8ContentFromAssets(a))
        },a.prototype.masterM3u8Url = function (a) {
            return "" + b.proto() + "//" + b.remote.embedHost() + "/embed/medias/" + this.hashedId() + ".m3u8?segment_duration=" + a
        },a.prototype.chooseHlsAsset = function () {
            var a, b, c, d, e;
            return c = this.hlsAssetsBySegmentDuration(), b = function () {
                var b, f, g, h;
                g = function () {
                    var a;
                    a = [];
                    for (d in c)e = c[d], a.push(parseInt(d, 10));
                    return a
                }(), h = [];
                for (b = 0, f = g.length; b < f; b++)a = g[b], isNaN(a) || h.push(a);
                return h
            }().sort(function (a, b) {
                return a - b
            }), b.length === 0 ? {useHls: !1} : {useHls: !0, segmentDuration: b[0]}
        },a.prototype.hlsAssetsBySegmentDuration = function () {
            var a, b, c, d, e, f, g;
            b = {}, f = this.assets({container: "m3u8"});
            for (c = 0, d = f.length; c < d; c++)a = f[c], ((g = a.metadata) != null ? g.max_bitrate : void 0) != null && a.segment_duration != null && (b[e = a.segment_duration] != null ? b[e = a.segment_duration] : b[e] = []).push(a);
            return b
        },a.prototype.smallestNormalMp4Asset = function () {
            return this._smallestNormalMp4 || (this._smallestNormalMp4 = this.mp4Asset({
                    sortBy: "width asc",
                    width: [640, 1920]
                }))
        },a.prototype.properAssetUrl = function (a) {
            return /\.bin$/.test(a) ? a.replace(/\.bin$/, "") + "/file.mp4" : a
        },a.prototype._determineAssetCacheStatus = function (a) {
            var c, d = this;
            this.info("_determineAssetCacheStatus");
            if (!this._mediaData.createdAt || this._mediaData.createdAt < 1415981174)return;
            if (b.detect.browser.msie && b.detect.browser.version < 11)return;
            try {
                return b.util.poll(function () {
                    return d.elem()
                }, function () {
                    var c, e;
                    if (d.elem().tagName.toLowerCase() === "video")c = d.properAssetUrl(d._currentAsset.url); else if (/object|embed/.test(d.elem().tagName.toLowerCase()))c = d._currentAsset.url; else if (d.elem().tagName.toLowerCase() === "a")c = d._currentAsset.url; else return;
                    if (/^data/.test(c))return;
                    return e = b.remote.head(c), e.addEventListener("load", function () {
                        var c, f, g, h, i, j, k, l, m, n, o, p, q;
                        g = {};
                        if (l = e.getAllResponseHeaders()) {
                            h = l.split("\n");
                            for (p = 0, q = h.length; p < q; p++) {
                                k = h[p];
                                try {
                                    m = k.indexOf(":"), j = k.substring(0, m), o = k.substring(m + 1, k.length), j = j.replace(/^\s+/, "").replace(/\s+$/, ""), o = o.replace(/^\s+/, "").replace(/\s+$/, ""), j && (g[j] = o)
                                } catch (r) {
                                    f = r, b.notice(f)
                                }
                            }
                        }
                        return n = g.Server, i = g["X-Cache"] === "HIT", c = g["x-amz-version-id"], c ? (d._cacheStatus = "served-by-s3", d._assetServer = n, d._cacheHit = i) : /nginx/.test(n) ? (d._cacheStatus = "served-by-prime", d._assetServer = n, d._cacheHit = i) : /EC/.test(n) ? (d._cacheStatus = "served-by-edgecast", d._assetServer = n, d._cacheHit = i) : /PWS/.test(n) ? (d._cacheStatus = "served-by-cdnetworks", d._assetServer = n, d._cacheHit = i) : (d._cacheStatus = "served-by-unknown", d._assetServer = n, d._cacheHit = i), typeof a == "function" ? a() : void 0
                    })
                })
            } catch (e) {
                return c = e, this.notice(c)
            }
        },a.prototype.looksDown = function () {
            return this.publicApi.looksDown()
        },a.prototype.looksUp = function () {
            return this.publicApi.looksUp()
        },a
    }(), b.mixin(b.Video.prototype, b.bindable), c = b.Video.prototype.trigger, b.Video.prototype.trigger = function () {
        var a, b;
        return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], c.apply(this, a), (b = this.publicApi).trigger.apply(b, arguments)
    }
})(Wistia);
var __bind = function (a, b) {
    return function () {
        return a.apply(b, arguments)
    }
};
(function (a) {
    if (a.BigPlayButton)return;
    return a.BigPlayButton = function () {
        function b(b, c) {
            this.container = b, this.options = c != null ? c : {}, this.touchend = __bind(this.touchend, this), this.touchmove = __bind(this.touchmove, this), this.touchstart = __bind(this.touchstart, this), this.click = __bind(this.click, this), this.mouseup = __bind(this.mouseup, this), this.mousedown = __bind(this.mousedown, this), this.mouseout = __bind(this.mouseout, this), this.mouseover = __bind(this.mouseover, this), this.blur = __bind(this.blur, this), this.keyup = __bind(this.keyup, this), this.focus = __bind(this.focus, this), this.uuid = "" + (this.options.uuid || a.seqId()) + ".big_play_button", this.color(this.options.color || "636155"), this.options.tabbable == null && (this.options.tabbable = !0), this.backgroundElem = this.createBackgroundElem(), this.resetBackground(), this.elem = this.playElem = this.createPlayElem(), a.elem.append(this.container, this.backgroundElem), a.elem.append(this.container, this.playElem), this.fit(), this.setupBindings()
        }

        return b.prototype.destroy = function () {
            return this.destroyBindings(), a.elem.remove(this.playElem), a.elem.remove(this.backgroundElem), this._bottomTextElem && a.elem.remove(this._bottomTextElem), this._topTextElem && a.elem.remove(this._topTextElem), this.elem = null, this.backgroundElem = null, this.playElem = null, this._bottomTextElem = null, this._topTextElem = null
        }, b.prototype.createBackgroundElem = function () {
            return a.elem.fromObject({
                id: "" + this.uuid + "_background",
                style: {
                    height: "" + this.height() + "px",
                    position: "absolute",
                    width: "" + this.width() + "px",
                    zIndex: 1
                }
            })
        }, b.prototype.createPlayElem = function () {
            return a.elem.fromObject({
                id: "" + this.uuid + "_graphic",
                tabindex: this.options.tabbable ? "0" : "-1",
                "aria-role": "Button",
                "aria-label": "Play",
                style: {
                    background: "transparent url(" + this.iconBase64() + ") no-repeat 0 0",
                    cursor: "pointer",
                    display: "block",
                    height: "" + this.graphicHeight() + "px",
                    outline: "none",
                    position: "absolute",
                    width: "" + this.graphicWidth() + "px",
                    zIndex: 1
                }
            })
        }, b.prototype.createBottomTextElem = function () {
            return a.elem.fromObject({
                id: "" + this.uuid + "_bottom_text",
                style: {
                    color: this.options.bottomTextColor || "#fff",
                    fontFamily: this.options.bottomTextFontFamily || "Courier New, Courier, Sans-Serif",
                    fontSize: this.textFontSize(),
                    left: 0,
                    position: "absolute",
                    textAlign: "center",
                    width: "100%",
                    zIndex: 1
                },
                childNodes: this.options.bottomText
            })
        }, b.prototype.createTopTextElem = function () {
            return a.elem.fromObject({
                id: "" + this.uuid + "_top_text",
                style: {
                    color: this.options.topTextColor || "#fff",
                    fontFamily: this.options.topTextFontFamily || "Courier New, Courier, Sans-Serif",
                    fontSize: this.textFontSize(),
                    left: 0,
                    position: "absolute",
                    textAlign: "center",
                    width: "100%",
                    zIndex: 1
                },
                childNodes: this.options.topText
            })
        }, b.prototype.textFontSize = function () {
            return this.height() < 100 ? "11px" : this.shouldShrink() ? "16px" : "22px"
        }, b.prototype.oldIe = function () {
            return a.detect.browser.msie && a.detect.browser.version < 9
        }, b.prototype.setupBindings = function () {
            return a.elem.bind(this.playElem, "mouseover", this.mouseover), a.elem.bind(this.playElem, "mouseout", this.mouseout), a.elem.bind(this.playElem, "focus", this.focus), a.elem.bind(this.playElem, "blur", this.blur), a.elem.bind(this.playElem, "mousedown", this.mousedown), a.elem.bind(this.playElem, "mouseup", this.mouseup), a.elem.bind(this.playElem, "click", this.click), a.elem.bind(this.playElem, "touchstart", this.touchstart)
        }, b.prototype.destroyBindings = function () {
            return a.elem.unbind(this.playElem, "mouseover", this.mouseover), a.elem.unbind(this.playElem, "mouseout", this.mouseout), a.elem.unbind(this.playElem, "focus", this.focus), a.elem.unbind(this.playElem, "blur", this.blur), a.elem.unbind(this.playElem, "mousedown", this.mousedown), a.elem.unbind(this.playElem, "mouseup", this.mouseup), a.elem.unbind(this.playElem, "click", this.click), a.elem.unbind(this.playElem, "touchstart", this.touchstart), a.elem.unbind(document, "touchmove", this.touchmove), a.elem.unbind(document, "touchend", this.touchend), a.elem.unbind(document, "keyup", this.keyup)
        }, b.prototype.focus = function () {
            var b;
            return a.elem.addClass(this.playElem, "wistia_focus"), !this.onMobile() && this.options.autoHighlight !== !1 && this.highlightBackground(), a.elem.rebind(document, "keyup", this.keyup), this._focus = !0, typeof (b = this.options).onFocus == "function" && b.onFocus.apply(b, arguments), !0
        }, b.prototype.keyup = function (a) {
            var b, c;
            return typeof (b = this.options).onKeyup == "function" && b.onKeyup.apply(b, arguments), (a.keyCode === 32 || a.keyCode === 13) && typeof (c = this.options).onActivate == "function" && c.onActivate.apply(c, arguments), !0
        }, b.prototype.blur = function () {
            var b;
            return a.elem.unbind(this.playElem, "keyup", this.keyup), a.elem.removeClass(this.playElem, "wistia_focus"), !this.onMobile() && this.options.autoHighlight !== !1 && this.resetBackground(), this._focus = !1, typeof (b = this.options).onBlur == "function" && b.onBlur.apply(b, arguments), !0
        }, b.prototype.mouseover = function () {
            var b;
            return a.elem.addClass(this.playElem, "wistia_mouseover"), !this.onMobile() && this.options.autoHighlight !== !1 && this.highlightBackground(), typeof (b = this.options).onMouseover == "function" && b.onMouseover.apply(b, arguments), !0
        }, b.prototype.mouseout = function () {
            var b;
            return a.elem.removeClass(this.playElem, "wistia_mouseover"), !this.onMobile() && this.options.autoHighlight !== !1 && this.resetBackground(), typeof (b = this.options).onMouseout == "function" && b.onMouseout.apply(b, arguments), !0
        }, b.prototype.mousedown = function () {
            var b;
            return a.elem.addClass(this.playElem, "wistia_mousedown"), typeof (b = this.options).onMousedown == "function" && b.onMousedown.apply(b, arguments), !0
        }, b.prototype.mouseup = function () {
            var b;
            return a.elem.removeClass(this.playElem, "wistia_mousedown"), typeof (b = this.options).onMouseup == "function" && b.onMouseup.apply(b, arguments), !0
        }, b.prototype.click = function () {
            var a, b;
            return typeof (a = this.options).onClick == "function" && a.onClick.apply(a, arguments), this._blockClickActivate || typeof (b = this.options).onActivate == "function" && b.onActivate.apply(b, arguments), !0
        }, b.prototype.touchstart = function () {
            var b;
            return (this.onMobile() || this.options.autoHighlight === !1) && this.highlightBackground(), typeof (b = this.options).onTouchstart == "function" && b.onTouchstart.apply(b, arguments), this._swiped = !1, a.elem.bind(document, "touchmove", this.touchmove), a.elem.bind(document, "touchend", this.touchend), !0
        }, b.prototype.touchmove = function () {
            var a;
            return this._highlighted && this.onMobile() && this.options.autoHighlight !== !1 && this.resetBackground(), this._swiped = !0, typeof (a = this.options).onTouchmove == "function" && a.onTouchmove.apply(a, arguments), !0
        }, b.prototype.touchend = function () {
            var b, c;
            return a.elem.unbind(document, "touchmove", this.touchmove), a.elem.unbind(document, "touchend", this.touchend), this.onMobile() && this.options.autoHighlight !== !1 && this.resetBackground(), typeof (b = this.options).onTouchend == "function" && b.onTouchend.apply(b, arguments), this._swiped || (typeof (c = this.options).onActivate == "function" && c.onActivate.apply(c, arguments), this.blockClickActivateTemporarily()), this._swiped = !1, !0
        }, b.prototype.onMobile = function () {
            return a.detect.iphone || a.detect.ipad || a.detect.android
        }, b.prototype.blockClickActivateTemporarily = function () {
            var b = this;
            return this._blockClickActivate = !0, a.timeout("" + this.uuid + ".block_click_activate", function () {
                return b._blockClickActivate = !1
            }, 350)
        }, b.prototype.highlightBackground = function () {
            return this._highlighted = !0, this.oldIe() ? this.backgroundElem.style.filter = this.highlightColor().alpha(.8).toIeGradient() : this.backgroundElem.style.backgroundColor = this.highlightColor().alpha(.8).toRgbaOrHex()
        }, b.prototype.resetBackground = function () {
            return this._highlighted = !1, this.oldIe() ? this.backgroundElem.style.filter = this.color().alpha(.8).toIeGradient() : this.backgroundElem.style.backgroundColor = this.color().alpha(.8).toRgbaOrHex()
        }, b.prototype.fit = function () {
            return a.elem.style(this.backgroundElem, {
                height: "" + this.height() + "px",
                width: "" + this.width() + "px"
            }), a.elem.style(this.playElem, {
                backgroundImage: "url(" + this.iconBase64() + ")",
                backgroundSize: "" + this.graphicWidth() + "px " + this.graphicHeight() + "px",
                height: "" + this.graphicHeight() + "px",
                width: "" + this.graphicWidth() + "px"
            }), this._bottomTextElem && a.elem.style(this._bottomTextElem, {fontSize: this.textFontSize()}), this._topTextElem && a.elem.style(this._topTextElem, {fontSize: this.textFontSize()}), this.center()
        }, b.prototype.show = function () {
            return a.elem.style([this.backgroundElem, this.playElem], {display: "block"})
        }, b.prototype.hide = function () {
            return a.elem.style([this.backgroundElem, this.playElem], {display: "none"})
        }, b.prototype.correctedWidth = function () {
            var a;
            return a = this.containerWidth(), this.options.widthCorrection && (a += this.options.widthCorrection), a
        }, b.prototype.correctedHeight = function () {
            var a;
            return a = this.containerHeight(), this.options.heightCorrection && (a += this.options.heightCorrection), a
        }, b.prototype.mouseEventTargetIsInside = function (b) {
            return a.elem.isInside(b.target, this.playElem) || this._bottomTextElem && a.elem.isInside(b.target, this._bottomTextElem) || this._topTextElem && a.elem.isInside(b.target, this._topTextElem)
        }, b.prototype.center = function () {
            a.elem.style(this.backgroundElem, {
                left: "" + this.leftBackgroundOffset() + "px",
                top: "" + this.topBackgroundOffset() + "px"
            }), a.elem.style(this.playElem, {
                left: "" + this.leftGraphicOffset() + "px",
                top: "" + this.topGraphicOffset() + "px"
            }), this._bottomTextElem && a.elem.style(this._bottomTextElem, {
                left: 0,
                top: "" + (this.bottomGraphicOffset() + 3) + "px"
            });
            if (this._topTextElem)return a.elem.style(this._topTextElem, {
                bottom: "" + (this.bottomGraphicOffset() + 3) + "px",
                left: 0
            })
        }, b.prototype.leftBackgroundOffset = function () {
            return Math.round((this.correctedWidth() - this.width()) / 2)
        }, b.prototype.topBackgroundOffset = function () {
            return Math.round((this.correctedHeight() - this.height()) / 2)
        }, b.prototype.topGraphicOffset = function () {
            return Math.round((this.correctedHeight() - this.graphicHeight()) / 2)
        }, b.prototype.leftGraphicOffset = function () {
            return Math.round((this.correctedWidth() - this.graphicWidth()) / 2)
        }, b.prototype.rightGraphicOffset = function () {
            return this.leftGraphicOffset() + this.graphicWidth()
        }, b.prototype.bottomGraphicOffset = function () {
            return this.topGraphicOffset() + this.graphicHeight()
        }, b.prototype.containerWidth = function () {
            return a.elem.width(this.container)
        }, b.prototype.containerHeight = function () {
            return a.elem.height(this.container)
        }, b.prototype.shouldShrink = function () {
            return this.containerWidth() <= 320 || this.containerHeight() <= 200
        }, b.prototype.graphicWidth = function () {
            return this.shouldShrink() ? 60 : 127
        }, b.prototype.graphicHeight = function () {
            return this.shouldShrink() ? 38 : 81
        }, b.prototype.width = function () {
            return this._cover ? this.containerWidth() : this.graphicWidth()
        }, b.prototype.height = function () {
            return this._cover ? this.containerHeight() : this.graphicHeight()
        }, b.prototype.cover = function () {
            return this._cover = !0, this.supportsMultiply() ? (a.elem.style(this.backgroundElem, {mixBlendMode: "multiply"}), this.color(this.color(), .5)) : this.color(this.color(), .3), this.addBottomText(), this.addTopText(), this.fit()
        }, b.prototype.uncover = function () {
            return this._cover = !1, this.supportsMultiply() && a.elem.style(this.backgroundElem, {mixBlendMode: "normal"}), this.color(this.color(), .76), this.removeBottomText(), this.removeTopText(), this.fit()
        }, b.prototype.addBottomText = function () {
            if (!this.options.bottomText)return;
            if (this._bottomTextElem)return;
            return this.removeBottomText(), this._bottomTextElem = this.createBottomTextElem(), a.elem.append(this.container, this._bottomTextElem)
        }, b.prototype.removeBottomText = function () {
            if (this._bottomTextElem)return a.elem.remove(this._bottomTextElem), this._bottomTextElem = null
        }, b.prototype.addTopText = function () {
            if (!this.options.topText)return;
            if (this._topTextElem)return;
            return this.removeTopText(), this._topTextElem = this.createTopTextElem(), a.elem.append(this.container, this._topTextElem)
        }, b.prototype.removeTopText = function () {
            if (this._topTextElem)return a.elem.remove(this._topTextElem), this._topTextElem = null
        }, b.prototype.uncoverImmediately = function () {
            var b = this;
            return a.elem.style(this.backgroundElem, {transition: "none"}), a.util.requestAnimationFrame(function () {
                return b.uncover(), a.util.requestAnimationFrame(function () {
                    return a.elem.style(b.backgroundElem, {transition: "all 80ms ease-out"})
                })
            })
        }, b.prototype.supportsMultiply = function () {
            return a.detect.chrome || a.detect.safari
        }, b.prototype.color = function (b, c) {
            var d, e;
            return c == null && (c = .8), b != null ? (this._color = (new a.Color(b)).alpha(c), a.detect.browser.msie && a.detect.browser.version < 9 ? (d = this.backgroundElem) != null && (d.style.filter = this._color.toIeGradient()) : (e = this.backgroundElem) != null && (e.style.backgroundColor = this._color.toRgbaOrHex()), this._color) : this._color.clone()
        }, b.prototype.highlightColor = function () {
            return this.color().clone().lighten(40)
        }, b.prototype.iconBase64 = function () {
            return window.devicePixelRatio > 1 ? this.retinaBase64() : this.shouldShrink() ? this.smallNonRetinaBase64() : this.bigNonRetinaBase64()
        }, b.prototype.retinaBase64 = function () {
            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP4AAACiCAYAAABh2nDdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAulJREFUeNrs3d1tGlEQBtAlSgEpgXSAO8AdxB2QDuwONhWQDpxUAB14OyAdmA5IB+SOvDdCSHnLn/WdI91XP4z1aYY77DIMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAvnc/nQzsrlYCs4JdTOxvVgKzgd7t23qkKZAW/PLezVhnICn43qg7kBb88tbNUJcgKfr/4+6BSkBX8buviD/KCf7bzh8zgd/cqB3nBt/OH0OD3i7+1KkJW8O38ITj4/eJvqaKQFXw7fwgNfvfo4i/PQgleV/D/0J8+tnO3WCy+qXKGN0pAU5/3D3b+Oj5ZHf/SNHf/7yqu45Nj3Y7n/AWfQHXZV4/5bpXCqE/GqH+tLvw+uvjT8cmymrv/Ril0fHI6/qX93P1d/Ak+QcEvx8HO36hPnOXwsvMflULHJ6fjX5oGO38dnzjr4WXn72EfwSdM7fx3XvBp1Cdn1L9m56/jE6jv/D3so+MT1PEv2fnr+ASqC7+Dh30EnzzLefQflcKoT8aof60u/Grnf/Sf1PHJsZpHfzt/wSfMz52/Ugg+WWrk/6oMgk+OL+3c+oLPv/dWCfgLapdfO/29Uuj4ZJjauRF6wSfHpxb4Wys8oz4ZjvNoPymFjk+G/TzaC73gE6Au8B5a4L2Rx6hPCM/h6/iE+dwCfyP0Oj45o73dvOATZBq8XdeoT5S+mxd6HZ8Ax8Ev6Oj4ROm7eaEXfAL0Czyf5436hPCqLB2fMH03L/Q6PiGj/Z3v2ev45Kiwvxd6wSfHg908/KfOv1+97nqlspAT/Ec/aw05wT/5UQvICn6N9kuVhJzgjyoIOcE/+alqyAr+zgUe5AS/uvy9ikFO8O3mISz4W6M95ATfbh7Cgv9kNw9ZwR9VBXKC/+wCD7KCbzcPYcHfqAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvE4/BBgAB9Vp0xXzB8AAAAAASUVORK5CYII="
        }, b.
            prototype.bigNonRetinaBase64 = function () {
            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAABRCAYAAAD7G3lVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAATFJREFUeNrs22FtwkAYx+F2QcAkMAfgYBKQwBxMQh1MwiRQB+CgEoaDzkG5S1a+E5IF+n+e5D4ve3+7N0s4mgYAAAAAAAAAAAAA7jFN06cp5MavjuWsTSMzfjWWszORzPizQzmvJpMZ3xYIj28LiG8LpMeffdsCufGrn3LeTS0z/uzLFsiNbwuEx7cFxL9ugY1pZsafdSaaG78abIHc+LaA+MvbAi/+XG5Sww9L2QLtEm/+P/2oUzkfbduexc+LX51L/DdrP09fzvaZf4GVhjf7/Vv3vVFk/bfvMUhg/PoAZG+6efE9Aw+MP/oCSGZ8tz0wvtseGn9w2zPjdyaXF99n9aHx3fbA+G57aHy3PTC+N/mh8b3DD4zvtofGd9tD47vtAAAAAAAAAAAAADymiwADAOSj1JBfF8xMAAAAAElFTkSuQmCC"
        }, b.prototype.smallNonRetinaBase64 = function () {
            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAmCAYAAACYsfiPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJNJREFUeNrs1ksNhEAURNGWgAQkjAQkIAUJ7QApIwEJSEACEh6PBatJhmZJ1T1JCahU+lMKAACAioj4Zjqnwqc9MzoVvszya8evLTM4FdZeO/7TWzva6Kwd7dbMx6nwpboV3l99rh+WXV5/lh+sOrlcWueqvcOzpLNqQ2GtVW8KT0WZ3MeisXAtLixWBQAAQDoEGACTzSwy3SX7YgAAAABJRU5ErkJggg=="
        }, b
    }()
})(Wistia);
var __bind = function (a, b) {
    return function () {
        return a.apply(b, arguments)
    }
};
(function (a) {
    if (a.Thumbnail)return;
    return a.Thumbnail = function () {
        function b(b, c) {
            var d, e, f;
            this.container = b, this.options = c, this.hideOverlay = __bind(this.hideOverlay, this), this.showOverlay = __bind(this.showOverlay, this), this.touchend = __bind(this.touchend, this), this.touchmove = __bind(this.touchmove, this), this.touchstart = __bind(this.touchstart, this), this.click = __bind(this.click, this), this.mouseup = __bind(this.mouseup, this), this.mousedown = __bind(this.mousedown, this), this.mouseout = __bind(this.mouseout, this), this.mouseover = __bind(this.mouseover, this), this.blur = __bind(this.blur, this), this.keyup = __bind(this.keyup, this), this.focus = __bind(this.focus, this), this.loaded = new a.StopGo, this.uuid = "" + (this.options.uuid || a.seqId()) + ".thumbnail", this.options.tabbable == null && (this.options.tabbable = !0), ((f = this.options.images) != null ? f.length : void 0) > 0 || (e = a.proto() === "http:" ? "http://embed.wistia.com/deliveries/c0612aa8586d19f8471478c66c73ef7ab3f8e334/default-thumb.jpg" : "https://embed-ssl.wistia.com/deliveries/c0612aa8586d19f8471478c66c73ef7ab3f8e334/default-thumb.jpg", this.options.images = [{
                url: e,
                height: 360,
                width: 640
            }]), this.elem = this.createElem(), a.elem.append(this.container, this.elem), this.img = this.createImg(), this.overlay = this.createOverlay(), this.fit(), this.setupBindings(), this.isBakeryThumbnail() ? this.loadImageFirstTime() : this.loadImageFirstTimeAndGetDimensions(), this.options.bigPlayButton != null && this.options.bigPlayButton !== !1 && (d = a.obj.isObject(this.options.bigPlayButton) ? a.obj.clone(this.options.bigPlayButton) : {}, this.bigPlayButton = new a.BigPlayButton(this.elem, d))
        }

        return b.prototype.destroy = function () {
            var b;
            return (b = this.bigPlayButton) != null && b.destroy(), this.destroyBindings(), a.elem.remove(this.elem), this.elem = this.img = this.overlay = null
        }, b.prototype.preventDefault = function (a) {
            return a.preventDefault()
        }, b.prototype.setupBindings = function () {
            return a.elem.bind(this.elem, "mouseover", this.mouseover), a.elem.bind(this.elem, "mouseout", this.mouseout), a.elem.bind(this.elem, "focus", this.focus), a.elem.bind(this.elem, "blur", this.blur), a.elem.bind(this.elem, "mousedown", this.mousedown), a.elem.bind(this.elem, "mouseup", this.mouseup), a.elem.bind(this.elem, "click", this.click), a.elem.bind(this.elem, "touchstart", this.touchstart), a.elem.bind(this.img, "mousedown", this.preventDefault)
        }, b.prototype.destroyBindings = function () {
            return a.elem.unbind(this.elem, "mouseover", this.mouseover), a.elem.unbind(this.elem, "mouseout", this.mouseout), a.elem.unbind(this.elem, "focus", this.focus), a.elem.unbind(this.elem, "blur", this.blur), a.elem.unbind(this.elem, "mousedown", this.mousedown), a.elem.unbind(this.elem, "mouseup", this.mouseup), a.elem.unbind(this.elem, "click", this.click), a.elem.unbind(this.elem, "touchstart", this.touchstart), a.elem.unbind(this.img, "mousedown", this.preventDefault), a.elem.unbind(document, "touchmove", this.touchmove), a.elem.unbind(document, "touchend", this.touchend), a.elem.unbind(document, "keyup", this.keyup)
        }, b.prototype.focus = function () {
            var b;
            return a.elem.addClass(this.elem, "wistia_focus"), a.elem.rebind(document, "keyup", this.keyup), this._focus = !0, typeof (b = this.options).onFocus == "function" && b.onFocus.apply(b, arguments), !0
        }, b.prototype.keyup = function (a) {
            var b, c;
            return typeof (b = this.options).onKeyup == "function" && b.onKeyup.apply(b, arguments), (a.keyCode === 32 || a.keyCode === 13) && typeof (c = this.options).onActivate == "function" && c.onActivate.apply(c, arguments), !0
        }, b.prototype.blur = function () {
            var b;
            return a.elem.unbind(document, "keyup", this.keyup), a.elem.removeClass(this.elem, "wistia_focus"), this._focus = !1, typeof (b = this.options).onBlur == "function" && b.onBlur.apply(b, arguments), !0
        }, b.prototype.mouseover = function () {
            var b;
            return a.elem.addClass(this.elem, "wistia_mouseover"), typeof (b = this.options).onMouseover == "function" && b.onMouseover.apply(b, arguments), !0
        }, b.prototype.mouseout = function () {
            var b;
            return a.elem.removeClass(this.elem, "wistia_mouseover"), typeof (b = this.options).onMouseout == "function" ? b.onMouseout.apply(b, arguments) : void 0
        }, b.prototype.mousedown = function () {
            var b;
            return a.elem.addClass(this.elem, "wistia_mousedown"), typeof (b = this.options).onMousedown == "function" && b.onMousedown.apply(b, arguments), !0
        }, b.prototype.mouseup = function () {
            var b;
            return a.elem.removeClass(this.elem, "wistia_mousedown"), typeof (b = this.options).onMouseup == "function" && b.onMouseup.apply(b, arguments), !0
        }, b.prototype.click = function () {
            var a, b;
            return typeof (a = this.options).onClick == "function" && a.onClick.apply(a, arguments), this._blockClickActivate || typeof (b = this.options).onActivate == "function" && b.onActivate.apply(b, arguments), !0
        }, b.prototype.touchstart = function () {
            var b;
            return typeof (b = this.options).onTouchstart == "function" && b.onTouchstart.apply(b, arguments), this._swiped = !1, a.elem.bind(document, "touchmove", this.touchmove), a.elem.bind(document, "touchend", this.touchend), !0
        }, b.prototype.touchmove = function () {
            var b;
            return a.timeout("" + this.uuid + ".hide_overlay_later", this.hideOverlay, 300), this._swiped = !0, typeof (b = this.options).onTouchmove == "function" && b.onTouchmove.apply(b, arguments), !0
        }, b.prototype.touchend = function () {
            var b, c;
            return a.elem.unbind(document, "touchmove", this.touchmove), a.elem.unbind(document, "touchend", this.touchend), typeof (b = this.options).onTouchend == "function" && b.onTouchend.apply(b, arguments), this._swiped || (typeof (c = this.options).onActivate == "function" && c.onActivate.apply(c, arguments), this.blockClickActivateTemporarily()), this._swiped = !1, !0
        }, b.prototype.blockClickActivateTemporarily = function () {
            var b = this;
            return this._blockClickActivate = !0, a.timeout("" + this.uuid + ".block_click_activate", function () {
                return b._blockClickActivate = !1
            }, 350)
        }, b.prototype.hide = function () {
            return this.elem.style.display = "none"
        }, b.prototype.show = function () {
            return this.elem.style.display = "block"
        }, b.prototype.isBakeryThumbnail = function () {
            return !this.isNonBakeryThumbnail()
        }, b.prototype.isNonBakeryThumbnail = function () {
            return this.options.images.length === 1 && !a.Video.isBakeryUrl(this.options.images[0].url)
        }, b.prototype.bestImage = function () {
            var b, c, d, e, f;
            d = this.sortedImages(), b = a.elem.width(this.img), b <= 0 && (b = 640);
            if (b <= d[0].width)return d[0];
            for (e = 0, f = d.length; e < f; e++) {
                c = d[e];
                if (c.width >= b)return c
            }
            return d[d.length - 1]
        }, b.prototype.sortedImages = function () {
            var b, c;
            return this._sortedImages != null ? this._sortedImages : this._sortedImages = function () {
                var d, e, f, g;
                f = this.options.images.sort(function (a, b) {
                    return a.width - b.width
                }), g = [];
                for (d = 0, e = f.length; d < e; d++)c = f[d], b = a.obj.clone(c), b.aspect = b.width / b.height, g.push(b);
                return g
            }.call(this)
        }, b.prototype.quickPreload = function (b, c) {
            var d, e, f = this;
            return e = new Image, d = function () {
                if (!a.elem.inDom(f.container))return;
                return a.clearTimeouts("" + f.uuid + ".long_still_load"), typeof c == "function" ? c(e) : void 0
            }, a.elem.bind(e, "load", d), a.elem.bind(e, "error", d), a.timeout("" + this.uuid + ".long_still_load", d, 1e3), e.src = b
        }, b.prototype.surePreload = function (b, c) {
            var d, e, f = this;
            return e = new Image, d = function () {
                a.elem.unbind(e, "load", d), a.clearTimeouts("" + f.uuid + ".long_still_load");
                if (!a.elem.inDom(f.container))return;
                return typeof c == "function" ? c(e) : void 0
            }, a.elem.bind(e, "load", d), e.src = b
        }, b.prototype.loadImageFirstTimeAndGetDimensions = function () {
            var b, c = this;
            return b = this.bestImage(), this.quickPreload(b.url, function (d) {
                a.elem.style(d, {
                    visibility: "hidden",
                    position: "absolute"
                }), a.elem.append(document.body, d), c._customHeight = a.elem.height(d), c._customWidth = a.elem.width(d), c._customAspect = c._customWidth / c._customHeight, a.elem.remove(d), c._sortedImages = null;
                if (!c.elem || !c.img)return;
                return a.elem.append(c.elem, c.img), c.img.src = b.url, c.fitWithoutReload(), c.loaded(!0)
            })
        }, b.prototype.loadImageFirstTime = function () {
            var b, c = this;
            return b = this.bestImage(), this.quickPreload(b.url, function () {
                if (!c.elem || !c.img)return;
                return a.elem.append(c.elem, c.img), c.img.src = b.url, c.fitWithoutReload(), c.loaded(!0)
            })
        }, b.prototype.loadImageAtProperSize = function () {
            var a, b = this;
            return a = this.bestImage(), this.surePreload(a.url, function () {
                if (!b.elem || !b.img)return;
                return b.img.src = a.url, b.fitWithoutReload()
            })
        }, b.prototype.createElem = function () {
            return a.elem.fromObject({
                id: this.uuid,
                tabindex: this.options.tabbable ? "0" : "-1",
                style: {
                    cursor: "default",
                    display: "block",
                    height: "100%",
                    overflow: "hidden",
                    outline: "none",
                    position: "relative",
                    width: "100%"
                }
            })
        }, b.prototype.createImg = function () {
            return a.elem.fromObject({
                tagName: "img",
                id: "" + this.uuid + "_img",
                style: {
                    border: 0,
                    display: "block",
                    "float": "none",
                    height: "100%",
                    margin: 0,
                    maxHeight: "none",
                    maxWidth: "none",
                    padding: 0,
                    position: "absolute",
                    width: "100%"
                }
            })
        }, b.prototype.createOverlay = function () {
            var b, c;
            return b = a.elem.fromObject({
                id: "" + this.uuid + "_overlay",
                style: {
                    border: 0,
                    display: "block",
                    "float": "none",
                    height: "100%",
                    margin: 0,
                    maxWidth: "none",
                    padding: 0,
                    pointerEvents: "none",
                    position: "absolute",
                    width: "100%"
                }
            }), a.detect.browser.msie && (a.detect.browser.version < 9 || a.detect.browser.quirks) ? (c = (new a.Color(0, 0, 0)).alpha(.5).toIeGradient(), a.elem.style(b, {filter: c})) : a.elem.style(b, {backgroundColor: "rgba(0,0,0,.5)"}), b
        }, b.prototype.showOverlay = function () {
            return a.elem.append(this.elem, this.overlay)
        }, b.prototype.hideOverlay = function () {
            return a.elem.remove(this.overlay)
        }, b.prototype.containerWidth = function () {
            return a.elem.width(this.container)
        }, b.prototype.containerHeight = function () {
            return a.elem.height(this.container)
        }, b.prototype.containerAspect = function () {
            return this.containerWidth() / this.containerHeight()
        }, b.prototype.fitStrategy = function (a) {
            return a != null ? (this.options.fitStrategy = a, this.fit()) : /^cropfill|letterbox$/.test(this.options.fitStrategy) ? this.options.fitStrategy : "letterbox"
        }, b.prototype.fit = function () {
            return this.fitWithoutReload(), this.loadImageAtProperSize()
        }, b.prototype.fitWithoutReload = function () {
            var b;
            return a.elem.style(this.elem, {
                height: "" + this.containerHeight() + "px",
                width: "" + this.containerWidth() + "px"
            }), this.fitStrategy() === "cropfill" ? this.cropFillFit() : this.letterboxFit(), (b = this.bigPlayButton) != null ? b.fit() : void 0
        }, b.prototype.stretchLimit = function () {
            return this.options.stretchLimit != null ? this.options.stretchLimit : 10
        }, b.prototype.cropFillFit = function () {
            var b, c, d, e, f, g, h, i, j, k;
            return b = this._customAspect || this.bestImage().aspect, e = this.containerWidth(), d = this.containerHeight(), c = this.containerAspect(), this.options.stillSnap === !1 ? (g = e, f = d) : c > b ? (g = e, f = Math.round(g / b)) : c <= b && (f = d, g = Math.round(f * b)), k = d - f, i = e - g, j = Math.round(k / 2), h = Math.round(i / 2), Math.abs(j * 2) <= this.stretchLimit() && (j = 0, f = d), Math.abs(h * 2) <= this.stretchLimit() && (h = 0, g = e), a.elem.isHidden(this.elem) || !a.elem.inDom(this.elem) ? (a.elem.style(this.img, {
                height: "100%",
                width: "100%"
            }), h = j = 0) : a.elem.style(this.img, {
                height: "" + f + "px",
                width: "" + g + "px"
            }), a.elem.style(this.img, {border: 0, left: "" + h + "px", top: "" + j + "px"})
        }, b.prototype.letterboxFit = function () {
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q;
            return b = this._customAspect || this.bestImage().aspect, g = this.containerWidth(), f = this.containerHeight(), e = this.containerAspect(), this.options.stillSnap === !1 ? (k = g, j = f) : e > b ? (j = f, k = Math.round(j * b)) : e <= b && (k = g, j = Math.round(k / b)), q = Math.max(0, f - j), o = Math.max(0, g - k), p = Math.round(q / 2), n = Math.round(o / 2), m = d = p, i = l = n, d * 2 <= this.stretchLimit() && (d = 0, m = 0, j = f), i * 2 <= this.stretchLimit() && (i = 0, l = 0, k = g), c = this.options.backgroundColor || "#000", c === "transparent" ? c : (new a.Color(c)).alpha(.8).toRgbaOrHex(), a.elem.isHidden(this.elem) || !a.elem.inDom(this.elem) ? (a.elem.style(this.img, {
                height: "100%",
                width: "100%"
            }), m = d = h = l = 0) : a.elem.style(this.img, {
                height: "" + j + "px",
                width: "" + k + "px"
            }), a.elem.style(this.img, {
                borderTop: "" + m + "px solid " + c,
                borderBottom: "" + d + "px solid " + c,
                borderLeft: "" + i + "px solid " + c,
                borderRight: "" + l + "px solid " + c,
                left: 0,
                top: 0
            })
        }, b
    }()
})(Wistia);
var __bind = function (a, b) {
    return function () {
        return a.apply(b, arguments)
    }
};
(function (a) {
    if (a.Html5BigPlayButton)return;
    return a.Html5BigPlayButton = function () {
        function b(b) {
            this.video = b, this.touchend = __bind(this.touchend, this), this.touchmove = __bind(this.touchmove, this), this.touchstart = __bind(this.touchstart, this), this.name = "bigPlayButton", this.uuid = a.seqId("wistia_" + this.name + "_"), this.bpb = new a.BigPlayButton(this.video.chromeElem(), {
                uuid: this.video.uuid,
                color: this.video.playerColor(),
                onTouchstart: this.touchstart,
                onTouchmove: this.touchmove,
                onTouchend: this.touchend
            }), this.bpb.hide(), this.elem = this.bpb.elem, typeof this.setupBindings == "function" && this.setupBindings()
        }

        return b.prototype.initialize = function () {
            return a.util.notSetOrTrue(this.video._opts.playButton) && this.turnOn(), this
        }, b.prototype.touchstart = function () {
            return this.video._swiped = !1
        }, b.prototype.touchmove = function () {
            return this.video._swiped = !0
        }, b.prototype.touchend = function (a) {
            return this.bpb.mouseEventTargetIsInside(a) && (this.video._swiped ? this.video.still.hideOverlay() : (this.video.play(), this.video.bigPlayButton.hide(), this.video.still.showOverlay(), this.video.loadingIndicator.turnOn())), this.video._swiped = !1
        }, b.prototype.setupBindings = function () {
            var b = this;
            return a.elem.bind(this.video.chromeElem(), "click", function (a) {
                if (a.which === 3)return;
                return b.bpb.mouseEventTargetIsInside(a) && (b.video.play(), b.video.bigPlayButton.hide(), b.video.still.showOverlay(), b.video.loadingIndicator.turnOn()), !0
            }), this.video.bind("widthchange", function () {
                return b.reorient()
            }), this.video.bind("heightchange", function () {
                return b.reorient()
            })
        }, b.prototype.turnOn = function () {
            return this._on = !0, this.show()
        }, b.prototype.turnOff = function () {
            return this._on = !1, this.hide()
        }, b.prototype.on = function () {
            return this._on
        }, b.prototype.off = function () {
            return !this._on
        }, b.prototype.turnOn = function () {
            return this._on = !0, this.show(), this.video.trigger("control-on", this.name)
        }, b.prototype.show = function () {
            if (this.on() && /beforeplay|paused|ended/.test(this.video.state()))return this.bpb.show(), this.reorient()
        }, b.prototype.hide = function () {
            return this.bpb.hide()
        }, b.prototype.reorient = function () {
            return this.bpb.fit()
        }, b.prototype.updateColor = function () {
            return this.bpb.color(this.video.playerColor())
        }, b.prototype.remove = function () {
            return this.bpb.destroy(), this.elem = null
        }, b
    }()
})(Wistia);
var __bind = function (a, b) {
    return function () {
        return a.apply(b, arguments)
    }
};
(function (a) {
    if (a.Html5Still)return;
    return a.Html5Still = function () {
        function b(b) {
            var c = this;
            this.video = b, this.hideOverlay = __bind(this.hideOverlay, this), this.showOverlay = __bind(this.showOverlay, this), this.activate = __bind(this.activate, this), this.touchend = __bind(this.touchend, this), this.touchstart = __bind(this.touchstart, this), this.name = "still", this.uuid = a.seqId("wistia_" + this.name + "_"), this.thumbnail = new a.Thumbnail(this.video.chromeElem(), {
                tabbable: !1,
                onActivate: this.activate,
                onTouchstart: this.touchstart,
                onTouchend: this.touchend,
                stillSnap: this.video._opts.stillSnap,
                images: this.video.thumbnailAssets()
            }), a.elem.style(this.thumbnail.elem, {
                left: 0,
                position: "absolute",
                top: 0
            }), this.elem = this.thumbnail.elem, this.loaded = new a.StopGo, this.thumbnail.loaded(function () {
                return c.loaded(!0)
            }), typeof this.setupBindings == "function" && this.setupBindings()
        }

        return b.prototype.initialize = function () {
            return this.fitStill(), this
        }, b.prototype.touchstart = function () {
            return a.timeout("" + this.video.uuid + ".still_overlay", this.showOverlay)
        }, b.prototype.touchend = function () {
            if (this.thumbnail._swiped)return a.timeout("" + this.video.uuid + ".still_overlay", this.hideOverlay, 300)
        }, b.prototype.activate = function (b) {
            return a.elem.isInside(b.target, this.elem) && (this.video.play(), this.video.bigPlayButton.hide(), this.showOverlay(), this.video.loadingIndicator.turnOn()), !0
        }, b.prototype.setupBindings = function () {
            var b = this;
            return a.elem.bind(this.video.chromeElem(), "click", function (c) {
                if (c.which !== 1)return;
                return a.elem.isInside(c.target, b.elem) && (b.video.play(), b.video.bigPlayButton.hide(), b.showOverlay(), b.video.loadingIndicator.turnOn()), !0
            }), this.video.bind("widthchange", function () {
                return b.fitStill()
            }), this.video.bind("heightchange", function () {
                return b.fitStill()
            }), this.video.bind("play", this.hideOverlay), this.video.bind("timechange", this.hideOverlay), this.video.bind("pause", this.hideOverlay)
        }, b.prototype.showOverlay = function () {
            return this.thumbnail.showOverlay()
        }, b.prototype.hideOverlay = function () {
            return this.thumbnail.hideOverlay()
        }, b.prototype.fitStill = function () {
            return this.thumbnail.fit()
        }, b.prototype.shouldShow = function () {
            return this.video.state() === "beforeplay"
        }, b.prototype.show = function () {
            return this.thumbnail.show(), this.fitStill()
        }, b.prototype.hide = function () {
            return this.thumbnail.hide()
        }, b.prototype.remove = function () {
            return this.thumbnail.destroy(), this.elem = null
        }, b
    }()
})(Wistia);
var __bind = function (a, b) {
    return function () {
        return a.apply(b, arguments)
    }
};
(function (a) {
    if (a.Html5LoadingIndicator)return;
    return a.Html5LoadingIndicator = function () {
        function b(b) {
            var c = this;
            this.video = b, this.reorient = __bind(this.reorient, this), this.hide = __bind(this.hide, this), this.show = __bind(this.show, this), this.turnOff = __bind(this.turnOff, this), this.turnOn = __bind(this.turnOn, this), this.name = "loadingIndicator", this.uuid = a.seqId("wistia_" + this.name + "_"), this.elem = document.createElement("div"), this.elem.id = this.uuid, this.elem.className = "wistia_loading_indicator", this.elem.setAttribute("alt", "Loading..."), a.elem.append(this.video.chromeElem(), this.elem), typeof this.setupBindings == "function" && this.setupBindings(), a.elem.style(this.elem, {
                cursor: "pointer",
                display: "none",
                position: "absolute",
                height: "" + this.height() + "px",
                width: "" + this.width() + "px",
                zIndex: 1
            }), this.updateSvg(), this.throttleUpdateSvg = a.util.throttle(200, function () {
                return c.updateSvg()
            })
        }

        return b.prototype.updateSvg = function () {
            var b, c, d, e, f, g, h, i, j;
            if (this.svgSize === "small" && this.shouldShrink())return;
            if (this.svgSize === "big" && !this.shouldShrink())return;
            this.svgText = this.shouldShrink() ? "small" : "big", this.svgSize = this.shouldShrink() ? "small" : "big", this.activeSvgId = a.seqId("wistia_loading_svg_");
            if (a.detect.browser.msie && a.detect.browser.version < 10) {
                this.elem.innerHTML = "Loading...";
                return
            }
            this.shouldShrink() ? d = "M23,7 L41,18 L23,30 Z" : d = "M52,21 L81,40 L52,60 Z", f = '<svg version="1.2" id="' + this.activeSvgId + '" height="' + this.height() + '" width="' + this.width() + '" xmlns="http://www.w3.org/2000/svg" viewport="0 0 ' + this.width() + " " + this.height() + '" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <path fill="none" stroke="#' + this.primaryColor().toHex() + '" stroke-miterlimit="20" d="' + d + '" />\n</svg>', e = this.elem.ownerDocument.createRange(), e.selectNodeContents(this.elem), c = e.createContextualFragment(f), this.elem.appendChild(c), i = this.elem.childNodes;
            for (g = 0, h = i.length; g < h; g++)b = i[g], b && b !== this.styleElem && b.id !== this.activeSvgId && a.elem.remove(b);
            return this.pathLength = ((j = this.elem.getElementsByTagName("path")[0]) != null ? typeof j.getTotalLength == "function" ? j.getTotalLength() : void 0 : void 0) || 100, this.setupCss()
        }, b.prototype.initialize = function () {
            return this
        }, b.prototype.setupBindings = function () {
            return this.video.bind("widthchange", this.reorient), this.video.bind("heightchange", this.reorient), this.video.bind("startplay", this.turnOn), this.video.bind("waiting", this.turnOn), this.video.bind("play", this.turnOff), this.video.bind("pause", this.turnOff), this.video.bind("timechange", this.turnOff)
        }, b.prototype.setupCss = function () {
            return this.styleElem && a.elem.remove(this.styleElem), this.styleElem = a.css(this.elem, "#" + this.video.container.id + " .wistia_loading_indicator path {\n  stroke-width: " + this.strokeWidth() + "px;\n  stroke-dasharray: " + this.pathLength / 3 + ", " + this.pathLength * 2 / 3 + ";\n  -webkit-animation: wistia_dash 1s infinite linear forwards;\n}\n@-webkit-keyframes wistia_dash {\n  from { stroke-dashoffset: " + this.pathLength + "; }\n  to { stroke-dashoffset: 0; }\n}")
        }, b.prototype.strokeWidth = function () {
            return Math.max(Math.min(Math.floor(this.video.videoWidth() / 640 * 3), 3), 1)
        }, b.prototype.on = function () {
            return this._on
        }, b.prototype.off = function () {
            return !this._on
        }, b.prototype.shouldShrink = function () {
            return this.video.videoWidth() <= 320 || this.video.videoHeight() <= 200
        }, b.prototype.width = function () {
            return this.shouldShrink() ? 60 : 127
        }, b.prototype.height = function () {
            return this.shouldShrink() ? 38 : 81
        }, b.prototype.turnOn = function () {
            if (this._on)return;
            return this._on = !0, this.show()
        }, b.prototype.turnOff = function () {
            if (!this._on)return;
            return this._on = !1, this.hide()
        }, b.prototype.show = function () {
            if (this.on())return this.elem.style.display = "block", this.reorient()
        }, b.prototype.hide = function () {
            return this.elem.style.display = "none"
        }, b.prototype.reorient = function () {
            var b;
            return this.video.looksDown() ? a.elem.style(this.elem, {
                left: "-100%",
                width: "-100%"
            }) : (this.throttleUpdateSvg(), a.elem.style(this.elem, {
                width: "" + this.width() + "px",
                height: "" + this.height() + "px"
            }), (b = this.elem.getElementsByTagName("path")[0]) && a.elem.style(b, {strokeWidth: "" + this.strokeWidth() + "px"}), this.center())
        }, b.prototype.center = function () {
            var a, b, c;
            return c = this.video.videoHeight(), this.video._opts.controlsVisibleOnLoad && /flash|romulus/.test(this.video.playerType) && (c -= 22), a = Math.round((this.video.videoWidth() - this.width()) / 2), b = Math.round((c - this.height()) / 2), this.elem.style.left = "" + a + "px", this.elem.style.top = "" + b + "px"
        }, b.prototype.remove = function () {
            return a.elem.remove(this.elem)
        }, b.prototype.primaryColor = function () {
            return new a.Color("#ffffff")
        }, b
    }()
})(Wistia);
var __hasProp = {}.hasOwnProperty, __extends = function (a, b) {
    function d() {
        this.constructor = a
    }

    for (var c in b)__hasProp.call(b, c) && (a[c] = b[c]);
    return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a
};
(function (a) {
    var b;
    if (a.FlashVideo)return;
    a.FlashVideo = function (c) {
        function d() {
            return b = d.__super__.constructor.apply(this, arguments), b
        }

        return __extends(d, c), d.prototype.playerType = "flash", d.prototype.elem = function () {
            return document[this.uuid]
        }, d.prototype.embed = function () {
            var b = this;
            return this._currentAsset = this.bestAsset(), this.data.asset = this._currentAsset, this.resetStateVariables(), this.placeEmbed(this.createEmbedElem()), this._switchToHtml5 == null && (this._switchToHtml5 = function () {
                return a.timeout("" + b.uuid + ".delayed_rebuild_as_html5", function () {
                    return b.savePlatformPreference("romulus"), b.publicApi.rebuildAs("romulus"), b.trigger("widthchange"), b.trigger("heightchange")
                })
            }), a.unbind("switch-to-html5", this._switchToHtml5), a.bind("switch-to-html5", this._switchToHtml5), this.embedded(!0), this.checkForReady(), this
        }, d.prototype.checkForReady = function () {
            var b = this;
            return this.info("checkForReady"), this._checkDownState(), this._readyCheckFunc = function (c) {
                var d;
                c == null && (c = 0), b.info("_readyCheckFunc", c);
                if (c >= 25)return;
                return b.elem() && b._allFuncsUp() ? a.timeout("" + b.uuid + ".ready_delay", function () {
                    return b.info("ready(true)"), b.ready(!0), b.listenForEvents()
                }, 200) : (d = Math.max(1e3, 50 + c * 75), a.timeout("" + b.uuid + ".ready_check", function () {
                    return b._readyCheckFunc(c + 1)
                }, d))
            }, this.up(function () {
                return b.info("start _readyCheckFunc"), b._readyCheckFunc()
            })
        }, d.prototype.initFrom = function (b) {
            return a.elem.remove(b.wrapperElem), this.embed()
        }, d.prototype.cleanupRefs = function () {
            if (this._switchToHtml5)return a.unbind("switch-to-html5", this._switchToHtml5)
        }, d.prototype.bestAsset = function () {
            return this._forceAsset ? this._forceAsset : this._opts.videoQuality === "sd-only" ? this.mdOrSdAsset() : this._opts.videoQuality === "hd-only" ? this.hdAsset() || this.mdAsset() || this.sdAsset() : this._opts.videoQuality === "md" ? this.mdAsset() || this.sdAsset() : this.chosenAsset() ? this.chosenAsset() : this.isScreencast() && this.screencastAsset() ? this.screencastAsset() || this.mdOrSdAsset() : this.mdOrSdAsset()
        }, d.prototype.chosenAsset = function () {
            var a, b, c, d;
            return /width:/.test(this._opts.videoQuality) ? (d = this._opts.videoQuality.match(/width:([a-z]*)(\d+)/i), c = d[0], a = d[1], b = d[2], a === "" || a === "lte" ? this.flashAsset({
                width: [0, b],
                sortBy: "width desc"
            }) || this.flashAsset({
                width: [b, 1e4],
                sortBy: "width asc"
            }) : a === "gte" ? this.flashAsset({
                width: [b, 1e4],
                sortBy: "width asc"
            }) || this.flashAsset({width: [0, b], sortBy: "width desc"}) : null) : null
        }, d.prototype.mdOrSdAsset = function () {
            return this._mdOrSdAsset || (this._mdOrSdAsset = this._opts.videoQuality === "sd-only" ? this.sdAsset() : this._opts.videoQuality === "md" || this._opts.videoFoam || this.grid && this.videoWidth() >= 720 ? this.mdAsset() || this.sdAsset() : this.sdAsset())
        }, d.prototype.screencastAsset = function () {
            return this._screencastAsset || (this._screencastAsset = this.flashAsset({
                    bitrate: [0, 1300],
                    sortBy: "width desc, bitrate asc",
                    width: [0, this.originalAsset().width]
                }))
        }, d.prototype.sdAsset = function () {
            return this._sdAsset || (this._sdAsset = this.flashAsset({width: 640}) || this.flashAsset({sortBy: "width asc"}) || this.iphoneAsset() || this.mp4Asset())
        }, d.prototype.mdAsset = function () {
            return this._mdAsset || (this._mdAsset = this.flashAsset({
                    width: [720, 980],
                    sortBy: "width desc, bitrate desc"
                }))
        }, d.prototype.hdAsset = function () {
            return this._hdAsset || (this._hdAsset = this.flashAsset({
                    width: [980, this._opts.maxHdWidth || 1300],
                    sortBy: "width desc, bitrate desc"
                }))
        }, d.prototype.playerVersion = function () {
            return parseFloat(this.playerUrl().match(/_v(\d+(?:\.\d+)?)/)[1] || 2)
        }, d.prototype.stillUrl = function (b) {
            return b = a.obj.merge({playButton: !1}, b), d.__super__.stillUrl.call(this, b)
        }, d.prototype.generateFlashVars = function () {
            var b, c, d;
            c = {
                autoLoad: this._opts.autoLoad,
                autoPlay: !this.publicApi.popover && this._opts.autoPlay && !this.suppressPlay(),
                banner: this._mediaData.branding || this._opts.branding ? !0 : null,
                chromeless: this._opts.chromeless ? !0 : null,
                controlsVisibleOnLoad: this._opts.controlsVisibleOnLoad ? !0 : !1,
                customColor: this.playerVersion() >= 2 ? this.playerColor() : null,
                endVideoBehavior: this._opts.endVideoBehavior || null,
                endVideoCallback: this._opts.endVideoCallback || null,
                foreignData: this._opts.foreignData,
                fullscreenDisabled: this._opts.fullscreenButton === !1 ? !0 : null,
                mediaDuration: this._mediaData.duration,
                playButtonVisible: this._opts.playButton != null ? this._opts.playButton : !0,
                quality: a.detect.ps3 && !this._opts.videoQuality ? "sd-only" : this._opts.videoQuality,
                referrer: this._attrs.pageUrl,
                showAbout: this._mediaData.showAbout != null ? this._mediaData.showAbout : !0,
                showPlayButton: this._opts.smallPlayButton === !1 ? !1 : null,
                showPlaybar: this._opts.playbar === !1 ? !1 : null,
                showVolume: this._opts.volumeControl ? !0 : !1,
                stillUrl: this.stillUrl(),
                allowSwitchToHtml5: a.detect.romulusSupport,
                trackingTransmitInterval: this._opts.trackingTransmitInterval || this._mediaData.trackingTransmitInterval || null,
                unbufferedSeek: /flash/i.test(this.bestAsset().type),
                videoUrl: this.bestAsset().url,
                wemail: this.email(),
                wmode: this._opts.wmode || "opaque"
            }, a.detect.android && (c.quality = "sd-only"), this.chosenAsset() || (this.hdAsset() ? c.hdUrl = this.hdAsset().url : this.mdAsset() && this.mdAsset().url !== this.mdOrSdAsset().url && (c.hdUrl = this.mdAsset().url)), this._attrs.shouldTrack && !this._attrs.trackWithJs && (c.embedServiceURL = this._opts.distilleryUrl || this._mediaData.distilleryUrl, c.accountKey = this._opts.accountKey || this._mediaData.accountKey, c.mediaID = this._opts.mediaKey || this._mediaData.mediaKey);
            for (b in c)d = c[b], d == null && delete c[b];
            return c
        }, d.prototype.createEmbedObject = function () {
            var b, c, d, e, f;
            return f = this._opts.wmode || "opaque", d = {
                tagName: "object",
                id: this.uuid,
                classid: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                style: a.generate.relativeBlockCss()
            }, this._opts.wmode !== "transparent" && (d.bgcolor = "#000000"), c = this.generateFlashVars(), e = [{
                tagName: "param",
                name: "movie",
                value: this.playerUrl()
            }, {tagName: "param", name: "allowfullscreen", value: "true"}, {
                tagName: "param",
                name: "allowscriptaccess",
                value: "always"
            }, {tagName: "param", name: "wmode", value: f}, {
                tagName: "param",
                name: "flashvars",
                value: a.url.jsonToParams(c)
            }], b = {
                tagName: "embed",
                src: this.playerUrl(),
                name: this.uuid,
                type: "application/x-shockwave-flash",
                allowfullscreen: "true",
                allowscriptaccess: "always",
                wmode: f,
                flashvars: a.url.jsonToParams(c),
                style: a.generate.relativeBlockCss()
            }, f !== "transparent" && (b.bgcolor = "#000000"), d.childNodes = e.concat(b), d
        }, d.prototype.playerUrl = function () {
            var b, c;
            return ((c = this.bestAsset()) != null ? c.url : void 0) ? (b = a.url.parse(this.bestAsset().url), this.info("using player url derived from bestAsset", b.authority()), "" + a.proto() + "//" + b.authority() + "/flash/embed_player_v2.0.swf?2015-02-27") : (this.info("Couldn't determine player url from bestAsset. Falling back to defaults."), "" + a.proto() + "//" + a.remote.assetHost() + "/flash/embed_player_v2.0.swf?2015-02-27")
        }, d.prototype.createEmbedElem = function () {
            return a.generate.html(this.createEmbedObject())
        }, d.prototype._allFuncsUp = function () {
            var a, b, c, d;
            d = ["changeColor", "getCurrentTime", "getCurrentState", "videoPlay", "videoSeek", "getVolume", "setVolume", "setEmail"];
            for (b = 0, c = d.length; b < c; b++) {
                a = d[b];
                if (!this.elem()[a])return !1
            }
            return !0
        }, d.prototype.listenForEvents = function () {
            var b = this;
            return a.eventLoop.add("" + this.uuid + ".events", this._eventLoopDuration, function () {
                var a, c, d;
                if (b.up() && b.elem() && b._allFuncsUp())return a = b.state(), c = b.time(), d = b.volume(), a === "playing" && (b._lastState === "playing" || b._lastState === "beforeplay") && (b._lastTimePosition === -1 || b.time() === b._lastTimePosition) && b.trigger("waiting"), a !== b._lastState && (b.trigger("statechange", a), a === "playing" && b.trigger("play")), c !== b._lastTimePosition && c > 0 && (b.trigger("timechange", c), Math.floor(c) !== Math.floor(b._lastTimePosition) && b.trigger("secondchange", Math.floor(c)), Math.abs(c - b._lastTimePosition) > b._attrs.seekThreshold && b.trigger("seek", c, b._lastTimePosition), b._lastTimePosition = c), a !== b._lastState && (a === "paused" ? b.trigger("pause") : a === "ended" ? (b.trigger("end"), b.trigger("afterend")) : b._lastState === "playing" && a === "beforeplay" && b._opts.endVideoBehavior === "reset" && (b.trigger("end"), b.trigger("afterend"))), d !== b._lastVolume && (b.trigger("volumechange", d), b._lastVolume = d), b._lastState = a
            })
        }, d.prototype.play = function () {
            var a = this;
            return this.suppressPlay() ? this : (this.trigger("play-method-invoked"), this.ready(function () {
                return a.commandQueueOpen.synchronize(function (b) {
                    return a.trigger("play-initiated"), a.elem().videoPlay(), b()
                })
            }), this)
        }, d.prototype.pause = function () {
            var a = this;
            return this.ready(function () {
                return a.commandQueueOpen.synchronize(function (b) {
                    return a.elem().videoPause(), b()
                })
            }), this
        }, d.prototype.time = function (a) {
            var b, c = this;
            if (a != null)return this.suppressPlay() ? this : (this.ready(function () {
                return c.commandQueueOpen.synchronize(function (b) {
                    var d, e;
                    return e = c.state(), !c._streamSet || e === "beforeplay" || e === "ended" ? (c.info("time(" + a + "): seek before play from", e), d = function () {
                        return c.info("time(" + a + "): seek on play"), c._streamSet = !0, c.elem().videoSeek(a), e === "playing" ? c.elem().videoPlay() : c.elem().videoPause(), b(), c.unbind
                    }, c.bind("timechange", d), c.elem().videoPlay()) : (c.elem().videoSeek(a), /paused|ended/.test(e) && c.elem().videoPause(), b())
                })
            }), this);
            try {
                return this.elem().getCurrentTime() || 0
            } catch (d) {
                return b = d, -1
            }
        }, d.prototype.state = function () {
            var a;
            try {
                switch (this.elem().getCurrentState()) {
                    case 0:
                        return "ended";
                    case 1:
                        return "playing";
                    case 2:
                        return "paused";
                    default:
                        return "beforeplay"
                }
            } catch (b) {
                return a = b, "beforeplay"
            }
        }, d.prototype.volume = function (a) {
            var b, c = this;
            if (a != null)return this.ready(function () {
                var b;
                b = c.volume(), c.elem().setVolume(Math.min(Math.round(a * 100), 100));
                if (b !== c.volume())return c.trigger("volumechange", c.volume(), b)
            }), this;
            try {
                return b = this.elem().getVolume(), b > 0 && (b /= 100), b
            } catch (d) {
                return 1
            }
        }, d.prototype.controlEnabled = function (a, b) {
            var c = this;
            return b != null ? this.ready(function () {
                return c.elem()["" + a + "Enabled"](b)
            }) : this.elem()["" + a + "Enabled"]()
        }, d.prototype.bigPlayButtonEnabled = function (a) {
            return this.controlEnabled("bigPlayButton", a), this
        }, d.prototype.smallPlayButtonEnabled = function (a) {
            return this.controlEnabled("playButton", a), this
        }, d.prototype.playbarControlEnabled = function (a) {
            return this.controlEnabled("playbar", a), this
        }, d.prototype.volumeControlEnabled = function (a) {
            return this.controlEnabled("volumeControl", a), this
        }, d.prototype.fullscreenButtonEnabled = function (a) {
            return this.controlEnabled("fullscreenButton", a), this
        }, d.prototype.setPlayerColor = function (a) {
            return this.playerColor(a)
        }, d.prototype.playerColor = function (b) {
            var c, d = this;
            return b ? (c = this._attrs.playerColor, b = a.Video._sanePlayerColor(b), this._attrs.playerColor = b, this.playerVersion() >= 2 && this.ready(function () {
                d.elem().changeColor(b);
                if (c !== d._attrs.playerColor)return d.trigger("playercolorchange", d._attrs
                    .playerColor, c)
            }), this) : this._attrs.playerColor
        }, d.prototype.email = function (a) {
            var b = this;
            return a != null ? this.ready(function () {
                return b.elem().setEmail(a)
            }) : null
        }, d
    }(a.Video)
})(Wistia);
var __hasProp = {}.hasOwnProperty, __extends = function (a, b) {
    function d() {
        this.constructor = a
    }

    for (var c in b)__hasProp.call(b, c) && (a[c] = b[c]);
    return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a
};
(function (a) {
    var b;
    b = a;
    if (b.NoFlashVideo)return;
    return b.NoFlashVideo = function (a) {
        function c() {
            c.__super__.constructor.apply(this, arguments)
        }

        return __extends(c, a), c.prototype.embed = function () {
            var a = this;
            return this.placeEmbed('<div style="background:#fff;border:3px #eee dashed;color:#999;font-family:Helvetica,Arial;font-size:15px;height:100%;overflow:hidden;text-align:center;text-overflow:ellipsis;width:100%;">\n<div id="' + this.uuid + '_padding" style="padding:0px;">\n<p style="margin-top:0;">This video requires a Flash plugin to play in this browser.</p>\n<p style="margin-bottom:0;">Please download and install <a href="http://get.adobe.com/flashplayer/" style="color:#54bbff;text-decoration:underline;" target="_blank">Adobe Flash Player</a> to continue.</p>\n</div>\n</div>'), this.fit(), this._fit == null && (this._fit = function () {
                return a.fit()
            }), this.rebind("widthchange", this._fit), this.rebind("heightchange", this._fit)
        }, c.prototype.fit = function () {
            var a, c, d, e = this;
            if (!this.paddingElem())return;
            return d = Math.floor(this.height() * .3), this.paddingElem().style.paddingTop = "" + d + "px", this.paddingElem().style.paddingBottom = "" + d + "px", c = b.elem.height(this.paddingElem()) + d * 2, a = b.elem.height(this.container), c > a && (d = Math.max(0, Math.floor((a - c) / 2)), this.paddingElem().style.paddingTop = "" + d + "px", this.paddingElem().style.paddingBottom = "" + d + "px"), c = b.elem.height(this.paddingElem()) + d * 2, a = b.elem.height(this.container), this._clickToGetFlash == null && (this._clickToGetFlash = function () {
                return window.open("http://get.adobe.com/flashplayer/")
            }), c > a ? (this.paddingElem().setAttribute("title", "This video requires a Flash plugin to play in this browser. Click to get the Flash player from Adobe."), this.paddingElem().style.cursor = "pointer", b.elem.rebind(this.paddingElem(), "click", this._clickToGetFlash)) : (this.paddingElem().removeAttribute("title"), this.paddingElem().style.cursor = "", b.elem.unbind(this.paddingElem(), "click", this._clickToGetFlash))
        }, c.prototype.paddingElem = function () {
            return document.getElementById("" + this.uuid + "_padding")
        }, c
    }(b.Video)
})(Wistia);
var __bind = function (a, b) {
    return function () {
        return a.apply(b, arguments)
    }
}, __hasProp = {}.hasOwnProperty, __extends = function (a, b) {
    function d() {
        this.constructor = a
    }

    for (var c in b)__hasProp.call(b, c) && (a[c] = b[c]);
    return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a
}, __slice = [].slice;
(function (a) {
    var b, c;
    b = a;
    if (b.Html5Video)return;
    return b.Html5Video = function (a) {
        function d() {
            return this.hideControls = __bind(this.hideControls, this), this.showControls = __bind(this.showControls, this), c = d.__super__.constructor.apply(this, arguments), c
        }

        return __extends(d, a), d.prototype.playerType = "html5", d.prototype.elem = function () {
            return document.getElementById(this.uuid)
        }, d.prototype.source = function () {
            return this.elem().childNodes[0]
        }, d.prototype.chromeElem = function () {
            return document.getElementById("" + this.uuid + "_html5_player")
        }, d.prototype.embed = function () {
            var a = this;
            return this.info("embed"), this.onIos8Plus() ? (this.info("wait for docReady"), b.util.onDocReady(function () {
                return a.embedForReal()
            })) : this.embedForReal(), this
        }, d.prototype.embedForReal = function () {
            var a = this;
            return this.info("embedForReal"), this.resetStateVariables(), this._currentAsset = this.bestAsset(), this.data.asset = this._currentAsset, this.placeEmbed(this.createEmbedElem()), this._opts.uiWebView ? b.timeout("" + this.uuid + ".inject_source", function () {
                return b.elem.append(a.elem(), b.elem.fromObject(a.sourceElemObj())), a.setupEmbed()
            }, 100) : this.setupEmbed()
        }, d.prototype.setupEmbed = function () {
            return this.info("setupEmbed"), this._currentAsset = this.bestAsset(), this.data.asset = this._currentAsset, this.setupControls(), this.applyHacks(), this.setupBindings(), this.listenForEvents(), this.pollForEvents(), this.embedded(!0), this.checkForReady()
        }, d.prototype.checkForReady = function () {
            var a, c = this;
            return this.info("checkForReady"), this._checkDownState(), a = function () {
                return b.detect.iphone || b.detect.ipad ? (c.info("ready"), c._hasBeenReady = !0, c.info("@ready(true) synchronous"), c.ready(!0)) : b.timeout("" + c.uuid + ".delayed_ready", function () {
                    return c.info("ready"), c._hasBeenReady = !0, c.info("@ready(true) async"), c.ready(!0)
                })
            }, this._hasBeenReady && this.looksUp() ? a() : (this.info("set ready on up"), this.up(a))
        }, d.prototype.createEmbedElem = function () {
            var a, c, d;
            d = {
                id: "" + this.uuid + "_html5_player",
                style: {
                    background: "transparent",
                    display: "block",
                    height: "100%",
                    position: "relative",
                    width: "100%"
                }
            }, c = {
                tagName: "video",
                style: {
                    background: "transparent",
                    display: "block",
                    height: "100%",
                    left: "-100%",
                    position: "relative",
                    top: 0,
                    width: "100%"
                },
                id: this.uuid,
                preload: "none",
                poster: "//" + b.constant.embedHost + "/assets/images/blank.gif"
            };
            if (b.detect.browser.msie || b.detect.trident)c.style.minWidth = "10px", c.style.minHeight = "10px";
            return this._opts.chromeless || (c.controls = "controls"), this._opts.endVideoBehavior === "loop" && (c.loop = "loop"), this._opts.uiWebView || (a = this.sourceElemObj(), c.childNodes = [a]), d.childNodes = [c], b.elem.fromObject(d)
        }, d.prototype.sourceElemObj = function () {
            return {
                tagName: "source",
                src: this.properAssetUrl(this._currentAsset.url),
                type: "video/mp4" + this.videoDimension()
            }
        }, d.prototype.videoDimension = function () {
            return b.detect.gearvr ? this._opts.channel === "vr" ? ";dimension=360;" : "" : ""
        }, d.prototype.setupControls = function () {
            var a = this;
            this.info("setupControls"), this.still = (new b.Html5Still(this)).initialize(), this._opts.wmode !== "transparent" && this.still.loaded(function () {
                var b;
                return (b = a.chromeElem()) != null ? b.style.backgroundColor = "#000" : void 0
            }), this.bigPlayButton = (new b.Html5BigPlayButton(this)).initialize(), this.loadingIndicator = (new b.Html5LoadingIndicator(this)).initialize(), this.showControls();
            if (this.state() === "playing")return b.timeout("" + this.video.uuid + ".hide_still", this.hideControls)
        }, d.prototype.showControls = function () {
            if (!this._controlsVisible)return this.info("showControls"), this.still.show(), this.bigPlayButton.show(), this.hideVideoElem(), this._controlsVisible = !0
        }, d.prototype.hideControls = function () {
            if (this._controlsVisible)return this.info("hideControls"), this.still.hide(), this.bigPlayButton.hide(), this.showVideoElem(), this._controlsVisible = !1
        }, d.prototype.controlsVisible = function () {
            return !!this._controlsVisible
        }, d.prototype.hideVideoElem = function () {
            return this.info("hideVideoElem"), this.elem().style.left = "-100%"
        }, d.prototype.showVideoElem = function () {
            return this.info("showVideoElem"), this.elem().style.left = 0, this.correctForIntegers()
        }, d.prototype.setupBindings = function () {
            return this.rebind("play", this.hideControls), this.rebind("startplay", this.hideControls), this.setupIosBindings()
        }, d.prototype.setupIosBindings = function () {
            var a = this;
            if (!b.detect.ipad && !b.detect.iphone)return;
            this._iosOnEnd == null && (this._iosOnEnd = function () {
                a.info("_iosOnEnd");
                if (!a.publicApi.nextVideo())return a.showControls()
            }), this._iosOnPause == null && (this._iosOnPause = function () {
                return a.info("_iosOnPause"), a.showControls()
            }), b.detect.iphone && this.rebind("pause", this._iosOnPause);
            if (b.detect.iphone || b.detect.ipad)return this.rebind("end", this._iosOnEnd)
        }, d.prototype.fixWebkitControlsBug = function () {
            return this.info("fixWebkitControlsBug"), this.elem().removeAttribute("controls"), this.elem().setAttribute("controls", "controls")
        }, d.prototype.fit = function () {
            var a = this;
            return d.__super__.fit.apply(this, arguments), this.embedded(function () {
                return a.still.fitStill(), a.bigPlayButton.reorient(), a.loadingIndicator.reorient(), a.correctForIntegers()
            })
        }, d.prototype.cancelFullscreen = function () {
            if (this.inFullscreen())return this.info("cancelFullscreen"), b.elem.cancelFullscreen(this.elem())
        }, d.prototype.correctForIntegers = function () {
            if (!this.controlsVisible())return d.__super__.correctForIntegers.apply(this, arguments)
        }, d.prototype.applyHacks = function () {
            if (!b.detect.iphone && !b.detect.ipad)return this.disableTextTracks(), this.fixWebkitControlsBug()
        }, d.prototype.inFullscreen = function () {
            return !!this._inFullscreen
        }, d.prototype.inVideoEventContext = function () {
            return this._inPlayEventContext || this._inPauseEventContext || this._inEndEventContext
        }, d.prototype.listenForEvents = function () {
            var a = this;
            return this._relayPlay == null && (this._relayPlay = function () {
                var b, c;
                return a._inPlayEventContext = !0, a._hasPlayed = !0, a._beforePlay = !1, a.playing(!0), a.trigger("play"), a._inPlayEventContext = !1, (b = a.publicApi) != null ? (c = b._impl) != null ? c._inPlayEventContext = !1 : void 0 : void 0
            }), this._relayPause == null && (this._relayPause = function () {
                var b, c;
                return a._inPauseEventContext = !0, a.fireTimeChangedEventsIfChanged(), a.playing(!1), a.trigger("pause"), a._inPauseEventContext = !1, (b = a.publicApi) != null ? (c = b._impl) != null ? c._inPauseEventContext = !1 : void 0 : void 0
            }), this._relayEnd == null && (this._relayEnd = function () {
                var b, c;
                return a._inEndEventContext = !0, a.fireTimeChangedEventsIfChanged(), a.playing(!1), a.trigger("end"), a.trigger("afterend"), a._inEndEventContext = !1, (b = a.publicApi) != null ? (c = b._impl) != null ? c._inEndEventContext = !1 : void 0 : void 0
            }), this._relayRatechange == null && (this._relayRatechange = function () {
                return a.trigger("ratechange", a.playbackRate())
            }), this._relayVolumeChange == null && (this._relayVolumeChange = function () {
                return a.trigger("volumechange", a.volume())
            }), this._beginFullscreen == null && (this._beginFullscreen = function () {
                if (!a._inFullscreen)return a._inFullscreen = !0, a.trigger("enter-fullscreen")
            }), this._endFullscreen == null && (this._endFullscreen = function () {
                if (a._inFullscreen)return a._inFullscreen = !1, a.trigger("cancel-fullscreen")
            }), this._onEnterFullscreen == null && (this._onEnterFullscreen = function (b) {
                return b === a.elem() && (a.info("_onEnterFullscreen"), a._inFullscreen = !0, a.trigger("enter-fullscreen")), !0
            }), this._onCancelFullscreen == null && (this._onCancelFullscreen = function () {
                return a._inFullscreen && (a.info("_onCancelFullscreen"), a._inFullscreen = !1, a.trigger("cancel-fullscreen")), !0
            }), this.unbindListeners(), this.info("listenForEvents"), b.elem.bind(this.elem(), "playing", this._relayPlay), b.elem.bind(this.elem(), "pause", this._relayPause), b.elem.bind(this.elem(), "ended", this._relayEnd), b.elem.bind(this.elem(), "volumechange", this._relayVolumeChange), b.elem.bind(this.elem(), "ratechange", this._relayRatechange), b.elem.bind(this.elem(), "webkitbeginfullscreen", this._beginFullscreen), b.elem.bind(this.elem(), "webkitendfullscreen", this._endFullscreen), b.bind("enter-fullscreen", this._onEnterFullscreen), b.bind("cancel-fullscreen", this._onCancelFullscreen)
        }, d.prototype.unbindListeners = function () {
            return this.info("unbindListeners"), b.elem.unbind(this.elem(), "playing", this._relayPlay), b.elem.unbind(this.elem(), "pause", this._relayPause), b.elem.unbind(this.elem(), "ended", this._relayEnd), b.elem.unbind(this.elem(), "volumechange", this._relayVolumeChange), b.elem.unbind(this.elem(), "ratechange", this._relayRateChange), b.elem.unbind(this.elem(), "webkitbeginfullscreen", this._beginFullscreen), b.elem.unbind(this.elem(), "webkitendfullscreen", this._endFullscreen)
        }, d.prototype.pollForEvents = function () {
            var a = this;
            return this.info("pollForEvents"), b.eventLoop.add("" + this.uuid + ".events", this._eventLoopDuration, function () {
                var b;
                if (!a.looksDown())return b = a.state(), b === "playing" && b === a._lastState && a.time() === a._lastTimePosition && a.trigger("waiting"), b !== a._lastState && (a.trigger("statechange", b), a._lastState = b), a.fireTimeChangedEventsIfChanged()
            })
        }, d.prototype.fireTimeChangedEventsIfChanged = function () {
            var a;
            if ((a = this.time()) !== this._lastTimePosition && a > 0)return this.trigger("timechange", a), Math.floor(a) !== Math.floor(this._lastTimePosition) && this.trigger("secondchange", Math.floor(a)), Math.abs(a - this._lastTimePosition) > this._attrs.seekThreshold && this.trigger("seek", a, this._lastTimePosition), this._lastTimePosition = a
        }, d.prototype.onIos8Plus = function () {
            return parseInt(b.detect.ios.version, 10) >= 8
        }, d.prototype.canAutoPlay = function () {
            return !this.suppressPlay() && this.inUserEventContext()
        }, d.prototype.bestAsset = function () {
            return this._hlsChoice == null && (this._hlsChoice = this.chooseHlsAsset()), b.detect.iphone && this._hlsChoice.useHls ? this.masterM3u8Asset(this._hlsChoice.segmentDuration) : b.detect.gearvr ? this.mp4Asset({
                width: [0, 1e4],
                sortBy: "width desc, bitrate desc"
            }) : b.detect.iphone || b.detect.android ? this.iphoneAsset() || this.mp4Asset() : this._opts.videoQuality === "hd-only" || b.detect.retina && b.detect.ipad ? this.hdAsset() || this.mdAsset() || this.sdAsset() : this.chosenAsset() ? this.chosenAsset() : b.detect.ipad ? this.iphoneAsset() : this.mdOrSdAsset()
        }, d.prototype.chosenAsset = function () {
            var a, b, c, d;
            return /width:/.test(this._opts.videoQuality) ? (d = this._opts.videoQuality.match(/width:([a-z]*)(\d+)/i), c = d[0], a = d[1], b = d[2], a === "" || a === "lte" ? this.mp4Asset({
                width: [0, b],
                sortBy: "width desc"
            }) || this.mp4Asset({width: [b, 1e4], sortBy: "width asc"}) : a === "gte" ? this.mp4Asset({
                width: [b, 1e4],
                sortBy: "width asc"
            }) || this.mp4Asset({width: [0, b], sortBy: "width desc"}) : null) : null
        }, d.prototype.mdOrSdAsset = function () {
            return this._mdOrSdAsset || (this._mdOrSdAsset = this._opts.videoQuality === "sd-only" ? this.sdAsset() : this._opts.videoQuality === "md" || this._opts.videoFoam || this.videoWidth() >= 720 ? this.mdAsset() || this.sdAsset() : this.sdAsset())
        }, d.prototype.sdAsset = function () {
            return this._sdAsset || (this._sdAsset = this.isScreencast() ? this.screencastAsset() || this.smallestNormalMp4Asset() || this.mp4Asset() : this.iphoneAsset() || this.mp4Asset())
        }, d.prototype.mdAsset = function () {
            return this._mdAsset || (this._mdAsset = this.isScreencast() && this.screencastAsset() ? this.screencastAsset() : this.mp4Asset({
                    width: [720, 980],
                    sortBy: "width desc"
                }))
        }, d.prototype.hdAsset = function () {
            return this._hdAsset || (this._hdAsset = this.mp4Asset({
                    width: [980, this._opts.maxHdWidth || 1300],
                    sortBy: "width desc, bitrate desc"
                }))
        }, d.prototype.screencastAsset = function () {
            return this._screencastAsset || (this._screencastAsset = this.mp4Asset({
                    bitrate: [0, 1300],
                    sortBy: "width desc, bitrate asc",
                    width: [0, this.originalAsset().width]
                }))
        }, d.prototype.stillUrl = function (a) {
            return a = b.obj.merge({playButton: !1}, a), d.__super__.stillUrl.call(this, a)
        }, d.prototype.play = function () {
            var a = this;
            return this.suppressPlay() ? this : (this.info("play"), this.trigger("play-method-invoked"), this.ready(function () {
                var c;
                return c = function (c, d) {
                    return d == null && (d = !1), d || a.trigger("play-initiated"), b.detect.iphone || b.detect.ipad || b.detect.android || (a.hideControls(), a.trigger("startplay")), a.elem().play(), a.playing(function () {
                        return a.hideControls(), a.info("play: done"), typeof c == "function" ? c() : void 0
                    })
                }, b.detect.iphone || b.detect.ipad || b.detect.android ? a.inUserEventContext() ? a.commandQueueOpen.synchronize(c) : (a.info("play received, but cannot execute because not in the context of a user generated event. calling issuePlay() anyway, for devices that may respond."), c(null, !0)) : a.commandQueueOpen.synchronize(c)
            }), this)
        }, d.prototype.inUserEventContext = function () {
            return b.detect.ipad || b.detect.iphone || b.detect.android ? this.inVideoEventContext() || window.event && window.UIEvent && event instanceof UIEvent : !0
        }, d.prototype.pause = function () {
            var a = this;
            return this.info("pause"), this.ready(function () {
                return a.commandQueueOpen.synchronize(function (b) {
                    return a.elem().pause(), b()
                })
            }), this
        }, d.prototype.time = function (a, c) {
            var d, e = this;
            return c == null && (c = {}), a != null ? this.suppressPlay() ? this : (this.info("time", a), this.ready(function () {
                return e.state() === "beforeplay" || e.state() === "ended" ? e.commandQueueOpen.synchronize(function (d) {
                    var f, g;
                    return e.state() === "beforeplay" || e.state() === "ended" ? (e.info("seek before play"), g = e.state(), e.info("time " + a + ": state before seek is " + g), f = function () {
                        return b.detect.iphone || b.detect.ipad ? (e.info("time " + a + ": doing iOS event chain to seek before play"), b.elem.bindOnce(e.elem(), "canplaythrough", function () {
                            return b.elem.bindOnce(e.elem(), "progress", function () {
                                return b.elem.bindOnce(e.elem(), "seeked", function () {
                                    return g === "playing" ? e.info("time: " + a + ": play after seek") : (e.info("time: " + a + ": pause after seek"), e.elem().pause()), d()
                                }), e.elem().currentTime = a
                            })
                        })) : (e.info("time " + a + ": changing currentTime and waiting for seek"), e._waitForTimeChangeOrSeek(function () {
                            return g === "playing" ? e.info("time: " + a + ": play after seek") : (e.info("time: " + a + ": pause after seek"), e.elem().pause()), d()
                        }), e.elem().currentTime = a)
                    }, e._hasPlayed ? (e.info("time " + a + ": already played, seeking"), f()) : (e.info("time " + a + ": starting stream by calling play()"), c.lazy ? (e.bind("play", function () {
                        return e.elem().currentTime = a
                    }), d()) : (e.bind("play", function () {
                        return f(), e.unbind
                    }), e.elem().play()))) : (e.info("time " + a + ": already played, just change currentTime"), e._waitForTimeChangeOrSeek(d), e.elem().currentTime = a, d())
                }) : e.commandQueueOpen(function () {
                    return e.info("time " + a + ": already played, just change currentTime immediately"), e.elem().currentTime = a
                })
            }), this) : ((d = this.elem()) != null ? d.currentTime : void 0) || 0
        }, d.prototype._waitForTimeChangeOrSeek = function (a) {
            var c = this;
            return b.detect.browser.msie ? this.bind("timechange", function () {
                return a(), c.unbind
            }) : b.elem.bindOnce(this.elem(), "seeked", function () {
                return a()
            })
        }, d.prototype.state = function () {
            var a;
            try {
                return this._beforePlay ? "beforeplay" : this.elem().ended ? "ended" : this.elem().paused ? "paused" : "playing"
            } catch (b) {
                return a = b, "unknown"
            }
        }, d.prototype.volume = function (a) {
            var b, c = this;
            return a != null ? (this.info("volume", a), a = Math.max(0, Math.min(1, a)), this.ready(function () {
                return c.elem().volume = a
            }), this) : ((b = this.elem()) != null ? b.volume : void 0) || 0
        }, d.prototype.playerColor = function (a) {
            var c, d;
            return a != null ? (this.info("playerColor", a), c = this._attrs.playerColor, this._attrs.playerColor = b.Video._sanePlayerColor(a), (d = this.bigPlayButton) != null && d.updateColor(), c !== this._attrs.playerColor && this.trigger("playercolorchange", this._attrs.playerColor, c), this) : this._attrs.playerColor
        }, d.prototype.playbackRate = function (a) {
            return this.elem().playbackRate != null ? a != null ? (this.info("playbackRate", a), this.elem().playbackRate = a, this._eventLoopDuration = Math.max(50, Math.min(500, this._baseEventLoopDuration * a)), this._playbackRate = a, this.trigger("playbackRateChange", this._playbackRate), this) : this.elem().playbackRate : (this.info("playbackRate", a, "not supported"), d.__super__.playbackRate.call(this, a))
        }, d.prototype.stopStreaming = function () {
            var a, c, d, e, f;
            this.info("stopStreaming");
            try {
                return b.detect.trident ? (c = this.elem()) != null && (c.src = ".mp4") : (d = this.elem()) != null && (d.src = ""), (e = this.elem()) != null && e.load(), (f = this.elem()) != null ? f.currentTime = 0 : void 0
            } catch (g) {
                return a = g, this.notice(a)
            }
        }, d.prototype.removeNonVideoElements = function () {
            return this.info("removeNonVideoElements"), this.still.remove(), this.bigPlayButton.remove()
        }, d.prototype.initFrom = function (a) {
            return this.info("initFrom", a), this.uuid = a.uuid, this.wrapperElem = a.wrapperElem, this._inFullscreen = a._inFullscreen, this._inEndEventContext = a._inEndEventContext, this._inPlayEventContext = a._inPlayEventContext, this._inPauseEventContext = a._inPauseEventContext, this.resetStateVariables(), a.unbindListeners(), a.removeNonVideoElements(), this.setupEmbed(), this._opts.autoPlay && this.canAutoPlay() && this.hideControls(), this.switchToAsset(this._currentAsset, !0)
        }, d.prototype.hasForcedTrack = function () {
            var a, b, c, d;
            d = this.elem().textTracks;
            for (b = 0, c = d.length; b < c; b++) {
                a = d[b];
                if (a.kind === "forced")return !0
            }
            return !1
        }, d.prototype.hasTrackWithCues = function () {
            var a, b, c, d;
            d = this.elem().textTracks;
            for (b = 0, c = d.length; b < c; b++) {
                a = d[b];
                if (a.cues != null)return !0
            }
            return !1
        }, d.prototype.hasVisibleTrack = function () {
            var a, b, c, d;
            d = this.elem().textTracks;
            for (b = 0, c = d.length; b < c; b++) {
                a = d[b];
                if (a.mode === "showing")return !0
            }
            return !1
        }, d.prototype.wipeTextTrackCues = function (a) {
            var b, c, d, e, f;
            if (!a.cues)return;
            c = function () {
                var c, d, e, f;
                e = a.cues, f = [];
                for (c = 0, d = e.length; c < d; c++)b = e[c], f.push(b);
                return f
            }(), f = [];
            for (d = 0, e = c.length; d < e; d++)b = c[d], f.push(a.removeCue(b));
            return f
        }, d.prototype.wipeTextTrackCuesWithNote = function (a) {
            return this.wipeTextTrackCues(a), a.addCue(new VTTCue(1, 5, "No subtitles are available for the selected language."))
        }, d.prototype.wipeAllTextTrackCues = function () {
            var a, b, c, d, e;
            d = this.elem().textTracks, e = [];
            for (b = 0, c = d.length; b < c; b++)a = d[b], e.push(this.wipeTextTrackCuesWithNote(a));
            return e
        }, d.prototype.tapTextTrack = function (a) {
            var c, d = this;
            return c = null, b.timeout("" + this.uuid + ".tap_text_track_disable", function () {
                return c = a.mode, a.mode = "disabled", b.timeout("" + d.uuid + ".tap_text_track_reset", function () {
                    return a.mode = c
                }, 100)
            }, 50)
        }, d.prototype.updateTextTrack = function (a) {
            var b, c, d, e, f;
            c = this.findOrAddTextTrack(a), this.wipeTextTrackCues(c), f = a.hash.lines;
            for (d = 0, e = f.length; d < e; d++)b = f[d], c.addCue(new VTTCue(b.start, b.end, b.text.join("\n")));
            return this.tapTextTrack(c)
        }, d.prototype.findOrAddTextTrack = function (a) {
            var b;
            return (b = this.findTextTrack(a)) ? b : this.addTextTrack(a)
        }, d.prototype.addTextTrack = function (a) {
            var b;
            return b = this.elem().addTextTrack("subtitles", a.native_name, a.language), b.id = a.language, b.wistia = !0, b
        }, d.prototype.findTextTrack = function (a) {
            var b, c, d, e, f;
            f = ((e = this.elem()) != null ? e.textTracks : void 0) || [];
            for (c = 0, d = f.length; c < d; c++) {
                b = f[c];
                if (b.kind === "subtitles" && b.language === a.language)return b
            }
            return null
        }, d.prototype.hideTextTracks = function () {
            var a, b, c, d, e, f;
            e = (d = this.elem()) != null ? d.textTracks : void 0, f = [];
            for (b = 0, c = e.length; b < c; b++)a = e[b], a.mode === "showing" ? f.push(a.mode = "hidden") : f.push(void 0);
            return f
        }, d.prototype.selectTextTrack = function (a) {
            var b;
            if (!a)return;
            return this.hideTextTracks(), b = this.findTextTrack(a), b != null && (b.mode = "showing"), b
        }, d.prototype.trigger = function () {
            var a, b;
            b = arguments[0], a = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
            if (!/timechange|secondchange/.test(b) || !this._suppressTimechange)return d.__super__.trigger.apply(this, [b].concat(__slice.call(a)))
        }, d.prototype.switchToAsset = function (a, c) {
            var d = this;
            c == null && (c = !1), this.info("switchToAsset", a, c);
            if (!c && a.type === this._currentAsset.type)return;
            return this.commandQueueOpen.synchronize(function (e) {
                return b.detect.browser.mozilla ? (d.switchToAssetWithoutLoad(a, c), d.elem().load(), e()) : (d._suppressTimechange = !0, b.elem.rebind(d.elem(), "loadeddata", function () {
                    return d._suppressTimechange = !1, e(), b.elem.unbind
                }), d.switchToAssetWithoutLoad(a, c), d.elem().load())
            })
        }, d.prototype.switchToAssetWithoutLoad = function (a, b) {
            b == null && (b = !1), this.info("switchToAssetWithoutLoad", a, b);
            if (!b && a.type === this._currentAsset.type)return;
            return this._currentAsset = a, this.data.asset = a, this.elem().src = this.source().src = this.properAssetUrl(a.url), this.trigger("switched-to-asset-without-load", a.type)
        }, d.prototype.totalBuffered = function () {
            var a, c;
            return a = (c = this.elem()) != null ? c.buffered : void 0, b.Metrics.sumTimeRanges(a)
        }, d.prototype.totalPlayed = function () {
            var a, c;
            return a = (c = this.elem()) != null ? c.played : void 0, b.Metrics.sumTimeRanges(a)
        }, d
    }(b.Video)
})(Wistia), function (a) {
    var b;
    if ((b = a.Romulus) != null ? b.Control : void 0)return;
    return a.Romulus || (a.Romulus = {}), a.Romulus.Control = function () {
        function b(b) {
            var c = this;
            this.video = b, this.grid = this.video.grid, this.uuid = a.seqId("wistia_" + this.name + "_"), this.elem = document.createElement("div"), this.elem.id = this.uuid, this.elem.className = "wistia_romulus_control wistia_romulus_hidden", a.elem.append(this.video.romulusElem, this.elem), this.elem.style.cursor = "pointer", a.elem.bind(this.elem, "mouseover", function (a) {
                return typeof c.mouseover == "function" ? c.mouseover(a) : void 0
            }), a.elem.bind(this.elem, "mouseout", function (a) {
                return typeof c.mouseout == "function" ? c.mouseout(a) : void 0
            }), typeof this.setupBindings == "function" && this.setupBindings()
        }

        return b.prototype.cleanup = function () {
        }, b.prototype.show = function () {
            if (this.shouldShow())return this.elem.style.height = "" + this.height() + "px", this.elem.style.width = "" + this.width() + "px", a.elem.removeClass(this.elem, "wistia_romulus_hidden"), a.elem.addClass(this.elem, "wistia_romulus_visible")
        }, b.prototype.shouldShow = function () {
            return this.on() && !this.isAutoPlayBeforePlay() && !this.video.isRemoved() && (this._forceShow || this.isControlsVisibleOnLoad() || this.isMouseoverAfterPlay() || this.isPreviewingControls())
        }, b.prototype.isControlsVisibleOnLoad = function () {
            return this.video.state() === "beforeplay" && this.video._opts.controlsVisibleOnLoad && (this.video._mouseover || !this.video._replacing || !this.video._opts.autoPlay)
        }, b.prototype.isMouseoverAfterPlay = function () {
            return this.video._mouseover && this.video.state() !== "beforeplay"
        }, b.prototype.isPreviewingControls = function () {
            return this.video._previewControls && this.video.state() !== "beforeplay"
        }, b.prototype.hide = function () {
            return a.elem.removeClass(this.elem, "wistia_romulus_visible"), a.elem.addClass(this.elem, "wistia_romulus_hidden"), this.elem.style.height = "0px", this.elem.style.width = "0px"
        }, b.prototype.turnOn = function () {
            var a, b = this;
            a = this._on, this._on = !0, this.dontAnimate(this.elem, function () {
                return b.show()
            });
            if (this._on !== a)return this.video.trigger("control-on", this.name)
        }, b.prototype.turnOff = function () {
            var b, c = this;
            b = this._on, this._on = !1, a.elem.addClass(this.elem, "wistia_dont_animate"), this.hide(), a.util.requestAnimationFrame(function () {
                return a.elem.removeClass(c.elem, "wistia_dont_animate")
            });
            if (this._on !== b)return this.video.trigger("control-off", this.name)
        }, b.prototype.on = function () {
            return this._on
        }, b.prototype.off = function () {
            return !this._on
        }, b.prototype.initialize = function () {
            return this
        }, b.prototype.primaryColor = function () {
            return new a.Color(this.video.playerColor())
        }, b.prototype.secondaryColor = function () {
            return this.primaryColor().lighten(100)
        }, b.prototype.tertiaryColor = function () {
            return this.primaryColor().lighten(40)
        }, b.prototype.preventAnimation = function (b) {
            var c, d, e, f;
            b instanceof Array || (b = [b]), f = [];
            for (d = 0, e = b.length; d < e; d++)c = b[d], f.push(a.elem.addClass(c, "wistia_dont_animate"));
            return f
        }, b.prototype.allowAnimation = function (b) {
            var c, d, e, f;
            b instanceof Array || (b = [b]), f = [];
            for (d = 0, e = b.length; d < e; d++)c = b[d], f.push(a.elem.removeClass(c, "wistia_dont_animate"));
            return f
        }, b.prototype.dontAnimate = function (b, c) {
            var d = this;
            return this.preventAnimation(b), c(), a.util.requestAnimationFrame(function () {
                return d.allowAnimation(b)
            })
        }, b.prototype.updateColor = function () {
        }, b.prototype.remove = function () {
            return a.elem.remove(this.elem)
        }, b.prototype.isAutoPlayBeforePlay = function () {
            return this.video.state() === "beforeplay" && this.video._opts.autoPlay
        }, b
    }()
}(Wistia);
var __hasProp = {}.hasOwnProperty, __extends = function (a, b) {
    function d() {
        this.constructor = a
    }

    for (var c in b)__hasProp.call(b, c) && (a[c] = b[c]);
    return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a
};
(function (a) {
    if (a.Romulus.SmallPlayButton)return;
    return a.Romulus.SmallPlayButton = function (b) {
        function c(a) {
            this.video = a, this.name = "smallPlayButton", c.__super__.constructor.call(this, this.video), this.elem.style.position = "absolute", this.elem.style.bottom = "0px", this.elem.style.background = "" + this.primaryColor().alpha(.8).toRgba() + " url(" + this.playBase64() + ") no-repeat 0 0", this.elem.style.backgroundSize = "50px 32px", this.elem.style.width = "0px", this.elem.style.height = "0px", this.elem.setAttribute("alt", "Click to play")
        }

        return __extends(c, b), c.prototype.initialize = function () {
            var b = this;
            return !this.video._opts.chromeless && a.util.notSetOrTrue(this.video._opts.smallPlayButton) && this.video.still.loaded(function () {
                return b.turnOn()
            }), this
        }, c.prototype.setupBindings = function () {
            var b = this;
            return this.video.bind("play", function () {
                return a.elem.removeClass(b.elem, "paused"), a.elem.addClass(b.elem, "playing"), b.elem.setAttribute("alt", "Click to pause"), b.elem.style.backgroundImage = "url(" + b.pauseBase64() + ")", b.elem.style.backgroundPosition = "20px 7px", b.elem.style.backgroundSize = "11px 16px"
            }), this.video.bind("pause", function () {
                return a.elem.removeClass(b.elem, "playing"), a.elem.addClass(b.elem, "paused"), b.elem.setAttribute("alt", "Click to play"), b.elem.style.backgroundImage = "url(" + b.playBase64() + ")", b.elem.style.backgroundPosition = "0 0", b.elem.style.backgroundSize = "50px 32px"
            }), a.elem.bind(this.video.romulusElem, "click", function (c) {
                if (c.which !== 1)return;
                if (b.video.state() === "beforeplay")return b.video.play();
                if (a.elem.isInside(c.target, b.elem))return b.video.togglePlay()
            })
        }, c.prototype.mouseover = function () {
            return this.elem.style.backgroundColor = this.tertiaryColor().alpha(.8).toRgba()
        }, c.prototype.mouseout = function () {
            return this.elem.style.backgroundColor = this.primaryColor().alpha(.8).toRgba()
        }, c.prototype.width = function () {
            return 50
        }, c.prototype.height = function () {
            return 32
        }, c.prototype.playBase64 = function () {
            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAABMCAYAAACmj3NpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAARtJREFUeNrs2kFRAzEYgNEuCioBCeAACZWABCQsCpCABCRUAjioBHCwbA65MFx7+freTK4c/g8yG5LDAQAAAAAAAAAAAP7Ytm01hXbg4byve9PoBh6+93UykW7g6X1fR5PpBh4+9/VgOt3A04sJtQMPH7bsduD5AfZkWt3A05uJtQPPDzBn5nDguWU/m143sDPzjQQeLs7M7cDOzDcSeF5aJLbsO78a/xpn5YtLi+5fcObMvJQCX/HHfy3L8miLbvrZ16sxNLdoL0TCgVdTbQb2D49wYHfG0cAuHcKBvdsKB3bxHw3s6U448NmHVDewq8BoYGfbcGDPcaKBnW3DgT2JDQdeTaMZ2Nk2HtiHFAAAAAAAAAAAAFf1K8AAF3b4jLx17LUAAAAASUVORK5CYII="
        }, c.prototype.pauseBase64 = function () {
            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAgCAYAAAAWl4iLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADRJREFUeNrszLENADAIA0Fg/50TBkBJRXdfWvLl6eJRdtP++1UsBQaDwWAwGAwG78FXgAEAVEEIPN51OakAAAAASUVORK5CYII="
        }, c.prototype.updateColor = function () {
            return this.elem.style.backgroundColor = this.primaryColor().alpha(.8).toRgba()
        }, c
    }(a.Romulus.Control)
})(Wistia);
var __hasProp = {}.hasOwnProperty, __extends = function (a, b) {
    function d() {
        this.constructor = a
    }

    for (var c in b)__hasProp.call(b, c) && (a[c] = b[c]);
    return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a
};
(function (a) {
    if (a.Romulus.VolumeControl)return;
    return a.Romulus.VolumeControl = function (b) {
        function c(b) {
            this.video = b, this.name = "volumeControl", c.__super__.constructor.call(this, this.video), this.elem.innerHTML = "&nbsp;", this.elem.style.position = "absolute", this.elem.style.bottom = "0px", this.elem.style.height = "0px", this.elem.style.overflow = "hidden", this.elem.style.width = "0px", this.elem.setAttribute("alt", "Volume - click and drag to change"), this.levelElem = document.createElement("div"), this.levelElem.style.position = "absolute", this.levelElem.style.left = "0px", this.levelElem.style.top = "0px", this.levelElem.style.height = "" + this.height() + "px", this.levelElem.style.width = "" + this.width() + "px", this.levelElem.style.backgroundColor = this.primaryColor().alpha(.8).toRgba(), a.elem.append(this.elem, this.levelElem), this.inverseLevelElem = document.createElement("div"), this.inverseLevelElem.style.position = "absolute", this.inverseLevelElem.style.left = "" + this.width() + "px", this.inverseLevelElem.style.top = "0px", this.inverseLevelElem.style.height = "" + this.height() + "px", this.inverseLevelElem.style.width = "0px", this.inverseLevelElem.style.backgroundColor = this.primaryColor().alpha(.5).toRgba(), a.elem.append(this.elem, this.inverseLevelElem), this.iconElem = document.createElement("div"), this.iconElem.style.position = "absolute", this.iconElem.style.backgroundImage = "url(" + this.iconBase64() + ")", this.iconElem.style.backgroundSize = "21px 18px", this.iconElem.style.left = "15px", this.iconElem.style.top = "7px", this.iconElem.style.height = "18px", this.iconElem.style.width = "21px", a.elem.append(this.elem, this.iconElem)
        }

        return __extends(c, b), c.prototype.initialize = function () {
            var b = this;
            return !this.video._opts.chromeless && a.util.notSetOrTrue(this.video._opts.volumeControl) && this.video.still.loaded(function () {
                return b.turnOn()
            }), this
        }, c.prototype.cleanup = function () {
            return a.elem.unbind(document.body, "mousemove", this._onDragLevel), a.elem.unbind(document.body, "mouseup", this._onReleaseLevel), a.elem.unbind(document, "mouseout", this._onMouseLeavesWindow)
        }, c.prototype.setupBindings = function () {
            var b = this;
            return a.elem.bind(this.elem, "mousedown", function (a) {
                var c;
                if (a.which !== 1)return;
                return a.preventDefault(), c = (a.pageX - b.leftMostX()) / b.width(), b.updateLevel(c), b.video.volume(c), b.startDrag()
            }), a.elem.bind(this.elem, "click", function (a) {
                return a.stopPropagation()
            }), this.video.bind("volumechange", function () {
                if (!b.video.elem().seeking)return b.updateLevel(b.video.volume())
            })
        }, c.prototype.turnOn = function () {
            var a;
            return c.__super__.turnOn.apply(this, arguments), this.video._opts.volume != null ? this.updateLevel(this.video._opts.volume) : (a = this.savedVolume(), this.updateLevel(a), this.video.volume(a))
        }, c.prototype.leftMostX = function () {
            return this.video.inFullscreen() ? this.video.leftControlsWidth() + this.video.playbarControl.width() + 5 : a.elem.offset(this.elem).left
        }, c.prototype.startDrag = function () {
            var b = this;
            return this._onDragLevel == null && (this._onDragLevel = function (a) {
                var c;
                return c = Math.min(1, Math.max(0, (a.pageX - b.leftMostX()) / b.width())), b.updateLevel(c), b.video.volume(c)
            }), a.elem.bind(document.body, "mousemove", this._onDragLevel), this._onReleaseLevel == null && (this._onReleaseLevel = function (a) {
                return b.saveVolume(), b.stopDrag()
            }), a.elem.bind(document.body, "mouseup", this._onReleaseLevel)
        }, c.prototype.stopDrag =
            function () {
                this._onDragLevel && a.elem.unbind(document.body, "mousemove", this._onDragLevel), this._onReleaseLevel && a.elem.unbind(document.body, "mouseup", this._onReleaseLevel);
                if (this._onMouseLeavesWindow)return a.elem.unbind(document, "mouseout", this._onMouseLeavesWindow)
            }, c.prototype.updateLevel = function (a) {
            var b;
            return b = Math.min(this.width(), Math.max(0, Math.round(this.width() * a))), this.levelElem.style.width = "" + b + "px", this.inverseLevelElem.style.left = "" + b + "px", this.inverseLevelElem.style.width = "" + (this.width() - b) + "px", this.elem.setAttribute("alt", "Volume (" + Math.round(a * 100) + "%) - click and drag horizontally to change")
        }, c.prototype.saveVolume = function () {
            return a.localStorage("romulus.volume", this.video.volume())
        }, c.prototype.savedVolume = function () {
            var b;
            return this.on() ? (b = a.localStorage("romulus.volume")) != null ? b : 1 : 1
        }, c.prototype.mouseover = function () {
            return this.levelElem.style.backgroundColor = this.tertiaryColor().alpha(.8).toRgba()
        }, c.prototype.mouseout = function () {
            return this.levelElem.style.backgroundColor = this.primaryColor().alpha(.8).toRgba()
        }, c.prototype.width = function () {
            return 50
        }, c.prototype.height = function () {
            return 32
        }, c.prototype.iconBase64 = function () {
            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAkCAYAAAD/yagrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAfZJREFUeNrsWO1thDAMhVMHYIOyQRmBbsAIbHCMcJ0AdQLUCU6dADpBrhNwN8HdBmkiBdVyHYePAPlRSwiEA3l5tmM7h2hHkVLW6mqikEUBLOWvOMEedsR6UdfDPGvQZcisZuq6A2azUEzdEO8LAFSsNXlhAkKMGGf1R/OPQSqfAFMNDvxcOsYnaPyJ0A8uoO+JLxahXzmBgsXB73Kkr7yxqpmQFiHGNnpR6F3O+SNYSD8XoDZNKxlB4wUwY8r4Y8kQkc/ZQnrpEMaMLeOPPeEeg9Rzs8dooObblvHH2rZ3Amv0Y03dyAliCR5yS+KYQ+ZPocKLWBZ8ZhYiqKBCAVdsles/IQCk68w9I2qACOvWBtqBZwz0m1pEHMcPUKw8bwJUTXqlJjVydVRWWtIty7w/k86RPevRf6BzJSeiebIrrAoUZZ0bUr+AoOuQLtma0cKyVXFMw/3za3jxpFYTW9iQC9nUrByHrUhNc4EpFIDpGCs8xjD6tpDNCpjwHemO4PnDwjRlBbbEE1NzPaq6ethacGUeqg/uXit7C9B6ZIlXElXbIOclPbiYUOYJAoirFTlRlZPXvslDc5eATqL3tj/6bJcJAk6hHkBktuAL6UgHs11EoQkBsgkRJD4WEpzJ9yzzMpBGdXp9NW1IkOejtclEzuD5EWAA23jc4a3H7VsAAAAASUVORK5CYII="
        }, c.prototype.updateColor = function () {
            return this.levelElem.style.backgroundColor = this.primaryColor().alpha(.8).toRgba(), this.inverseLevelElem.style.backgroundColor = this.primaryColor().alpha(.5).toRgba()
        }, c
    }(a.Romulus.Control)
})(Wistia);
var __hasProp = {}.hasOwnProperty, __extends = function (a, b) {
    function d() {
        this.constructor = a
    }

    for (var c in b)__hasProp.call(b, c) && (a[c] = b[c]);
    return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a
};
(function (a) {
    if (a.Romulus.FullscreenButton)return;
    return a.Romulus.FullscreenButton = function (b) {
        function c(a) {
            this.video = a, this.name = "fullscreenButton", c.__super__.constructor.call(this, this.video), this.elem.innerHTML = "&nbsp;", this.elem.style.position = "absolute", this.elem.style.bottom = "0px", this.elem.style.width = "0px", this.elem.style.height = "0px", this.elem.style.background = "" + this.primaryColor().alpha(.8).toRgba() + " url(" + this.iconBase64() + ") no-repeat 12px 7px", this.elem.style.backgroundSize = "25px 18px", this.elem.style.mozUserSelect = "none", this.elem.style.msUserSelect = "none", this.elem.style.webkitUserSelect = "none", this.elem.style.webkitTouchCallout = "none", this.elem.setAttribute("alt", "Fullscreen - click to toggle")
        }

        return __extends(c, b), c.prototype.initialize = function () {
            var b = this;
            return !this.video._opts.chromeless && a.util.notSetOrTrue(this.video._opts.fullscreenButton) && this.video.still.loaded(function () {
                return b.turnOn()
            }), this
        }, c.prototype.setupBindings = function () {
            var b = this;
            return a.elem.bind(this.elem, "click", function (a) {
                if (a.which !== 1)return;
                return a.stopPropagation(), b.video.inFullscreen() ? b.video.cancelFullscreen() : b.video.requestFullscreen()
            })
        }, c.prototype.mouseover = function () {
            return this.elem.style.backgroundColor = this.tertiaryColor().alpha(.8).toRgba()
        }, c.prototype.mouseout = function () {
            return this.elem.style.backgroundColor = this.primaryColor().alpha(.8).toRgba()
        }, c.prototype.width = function () {
            return 50
        }, c.prototype.height = function () {
            return 32
        }, c.prototype.iconBase64 = function () {
            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAkCAYAAADLsGk3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAK9JREFUeNrsmW0KgCAMhjW6l96supmdzCYkjDBRCqbjfUHwh+Ae9oGbJrZpN0JKd7cYuBglWtk+0DpfzgVBG2t3O1o+u048fP4IOzWhpTJHnm6LIxpsSao9oiq0jgFK7OfSbJEjyBGAAAQgAAEIQAACEIAARKqxYmOgQE/9qZorst2be66VOsSt1HFNIp/tR44MlyO9vTE8ApD+0HKVibxYaeYltiDHD+LHaiRdAgwAGD3VmeLXH3kAAAAASUVORK5CYII="
        }, c.prototype.updateColor = function () {
            return this.elem.style.backgroundColor = this.primaryColor().alpha(.8).toRgba()
        }, c.prototype.turnOn = function () {
            if (a._detect.fullscreenEnabled())return c.__super__.turnOn.apply(this, arguments)
        }, c
    }(a.Romulus.Control)
})(Wistia);
var __hasProp = {}.hasOwnProperty, __extends = function (a, b) {
    function d() {
        this.constructor = a
    }

    for (var c in b)__hasProp.call(b, c) && (a[c] = b[c]);
    return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a
};
(function (a) {
    if (a.Romulus.Playbar)return;
    return a.Romulus.PlaybarControl = function (b) {
        function c(b) {
            this.video = b, this.name = "playbarControl", c.__super__.constructor.call(this, this.video), this.elem.style.position = "absolute", this.elem.style.bottom = "0px", this.elem.style.height = "0px", this.elem.style.overflow = "hidden", this.elem.style.width = "0px", this.elem.style.mozUserSelect = "none", this.elem.style.msUserSelect = "none", this.elem.style.webkitUserSelect = "none", this.elem.style.webkitTouchCallout = "none", this.elem.setAttribute("alt", "Playbar - click to seek"), a.elem.addClass(this.elem, "wistia_playbar"), this.backgroundElem = a.elem.fromObject({
                id: a.seqId("wistia_playbar_background_"),
                style: {
                    background: this.primaryColor().alpha(.5).toRgba(),
                    position: "absolute",
                    left: "4px",
                    top: "4px",
                    width: "" + this.width + "px",
                    height: "" + (this.height() - 8) + "px",
                    pointerEvents: "none"
                }
            }), a.elem.append(this.elem, this.backgroundElem), this.bufferedElem = a.elem.fromObject({
                id: a.seqId("buffered_"),
                "class": "wistia_buffered",
                style: {
                    background: this.secondaryColor().alpha(.8).toRgba(),
                    position: "absolute",
                    left: "4px",
                    top: "4px",
                    width: "0px",
                    height: "" + (this.height() - 8) + "px"
                }
            }), a.elem.append(this.elem, this.bufferedElem), this.borderElem = a.elem.fromObject({
                style: {
                    position: "absolute",
                    left: "0px",
                    top: "0px",
                    border: "4px solid " + this.primaryColor().alpha(.8).toRgba(),
                    pointerEvents: "none"
                }
            }), a.elem.append(this.elem, this.borderElem), this.watchedElem = a.elem.fromObject({
                id: a.seqId("watched_"),
                "class": "wistia_played",
                style: {
                    backgroundImage: "url(" + this.diagonalLinesBase64() + ")",
                    position: "absolute",
                    left: "0px",
                    top: "0px",
                    width: "0px",
                    height: "" + this.height() + "px"
                }
            }), a.elem.append(this.elem, this.watchedElem), this.timeElem = a.elem.fromObject({
                id: a.seqId("time_"),
                "class": "wistia_time",
                innerHTML: a.util.niceDuration(this.video.duration()),
                style: {
                    bottom: "7px",
                    color: "rgba(255, 255, 255, .7)",
                    cursor: "pointer",
                    display: "inline-block",
                    fontFamily: "Arial, Sans-Serif",
                    fontWeight: "bold",
                    fontSize: "15px",
                    lineHeight: "1.1em",
                    position: "absolute",
                    textShadow: "0 0 9px #7b796a",
                    whiteSpace: "nowrap",
                    width: "0px"
                }
            }), a.elem.append(this.watchedElem, this.timeElem), a.elem.bind(this.timeElem, "mousedown", function (a) {
                return a.preventDefault()
            }), this.scrubBar = a.elem.fromObject({
                id: a.seqId("scrub_bar_"),
                "class": "wistia_scrub_bar",
                innerHTML: "<div class='wistia_scrub_bar_top'>&nbsp;</div>\n<div class='wistia_scrub_bar_middle'>&nbsp;</div>\n<div class='wistia_scrub_bar_bottom'>&nbsp;</div>",
                style: {position: "absolute", left: "0px", top: "0px", width: "4px", height: "" + this.height() + "px"}
            }), a.elem.append(this.elem, this.scrubBar), this.updateScrubBar()
        }

        return __extends(c, b), c.prototype.initialize = function () {
            var b = this;
            return !this.video._opts.chromeless && a.util.notSetOrTrue(this.video._opts.playbar) && this.video.still.loaded(function () {
                return b.turnOn()
            }), this
        }, c.prototype.cleanup = function () {
            return a.elem.unbind(document.body, "mousemove", this._onDragScrubBar), a.elem.unbind(document.body, "mouseup", this._onReleaseScrubBar), a.elem.unbind(document.body, "mousemove", this._onMouseLeavesRomulus), a.elem.unbind(document, "mouseout", this._onMouseLeavesWindow)
        }, c.prototype.setupBindings = function () {
            var b = this;
            return a.elem.bind(this.elem, "mousedown", function (c) {
                var d;
                if (c.which !== 1)return;
                c.preventDefault();
                if (b.video.state() === "beforeplay")return b.video.play();
                d = (c.pageX - 2 - b.leftMostX()) / b.width(), b._stateOnDrag = b.video.state(), a.elem.addClass(b.elem, "wistia_dragging"), b.updateScrubBar(d), b.updateTime(d), b.startDrag();
                if (b.video.state() === "beforeplay")return b.video.play();
                b.video.ready(function () {
                    return b.video.videoElem.pause()
                });
                if (b._stateOnDrag === "playing")return a.elem.bind(document, "mouseup", function () {
                    return b.video.ready(function () {
                        if (b.video.state() !== "ended" && !b.video.publicApi._suspended)return b.video.videoElem.play()
                    }), b.instaUpdateScrubBar(b.video.time() / b.video.duration()), a.elem.unbind
                })
            }), this.video.bind("timechange", function (a) {
                return !b.video._seekingBeforePlay && !b._scrubbing && b.updateScrubBar(a / b.video.duration()), b.updateBuffered()
            }), this.video.bind("seek", function (a) {
                return b.instaUpdateScrubBar(a / b.video.duration())
            }), this.video.bind("startplay", function () {
                return b.instaUpdateScrubBar(b.video.time() / b.video.duration())
            }), this.video.bind("progress", function () {
                return b.updateBuffered()
            }), this.video.bind("pause", function () {
                return b.instaUpdateScrubBar(), b.updateBuffered()
            }), this.video.bind("end", function () {
                return a.timeout("" + b.video.uuid + ".after_end", function () {
                    return b.instaUpdateScrubBar(), b.updateBuffered()
                }, 50)
            }), this.video.bind("switched-to-asset", function () {
                return b.instaUpdateScrubBar()
            }), this.video.bind("widthchange", function () {
                return b.instaUpdateScrubBar(), b.updateBuffered()
            })
        }, c.prototype.instaUpdateScrubBar = function () {
            var a = this;
            return this.dontAnimate([this.scrubBar, this.watchedElem], function () {
                return a.updateScrubBar(a.video.time() / a.video.duration())
            })
        }, c.prototype.startDrag = function () {
            var b = this;
            return this._onDragScrubBar == null && (this._onDragScrubBar = function (c) {
                var d;
                return a.elem.addClass(b.elem, "wistia_dragging"), b.video.state() === "playing" && b.video.pause(), d = Math.min(1, Math.max(0, (c.pageX - 2 - b.leftMostX()) / b.width())), b.instaUpdateScrubBar(d), b.updateTime(d)
            }), a.elem.bind(document.body, "mousemove", this._onDragScrubBar), this._onReleaseScrubBar == null && (this._onReleaseScrubBar = function (a) {
                return b.stopDrag()
            }), a.elem.bind(document.body, "mouseup", this._onReleaseScrubBar), this.preventAnimation([this.scrubBar, this.watchedElem]), this._scrubbing = !0
        }, c.prototype.leftMostX = function () {
            return this.video.inFullscreen() ? this.video.leftControlsWidth() : a.elem.offset(this.elem).left
        }, c.prototype.stopDrag = function () {
            return a.elem.removeClass(this.elem, "wistia_dragging"), this._onDragScrubBar && a.elem.unbind(document.body, "mousemove", this._onDragScrubBar), this._onReleaseScrubBar && a.elem.unbind(document.body, "mouseup", this._onReleaseScrubBar), this._onMouseLeavesRomulus && a.elem.unbind(document.body, "mousemove", this._onMouseLeavesRomulus), this._onMouseLeavesWindow && a.elem.unbind(document, "mouseout", this._onMouseLeavesWindow), this._stateOnDrag === "ended" && this.video.play(), this._scrubbing = !1, this.updateScrubBar(this.video.time() / this.video.duration()), this.updateBuffered(), this.allowAnimation([this.scrubBar, this.watchedElem])
        }, c.prototype.updateScrubBar = function (b) {
            var c, d;
            return b == null && (b = 0), this.video.state() === "beforeplay" ? (this.scrubBar.style.left = "0px", this.watchedElem.style.width = "0px", this.watchedElem.style.overflow = "", this.timeElem.innerHTML = a.util.niceDuration(this.video.duration()), this.timeElem.style.left = "auto", this.timeElem.style.right = "" + (-a.elem.width(this.timeElem) - 8) + "px", this.timeElem.style.width = "0px") : (c = this.width() - 4, b > .99 && (b = 1), d = Math.max(0, Math.min(c, Math.round(this.width() * b) - 1)), this.scrubBar.style.left = "" + d + "px", this.watchedElem.style.width = "" + d + "px", this.watchedElem.style.overflow = "hidden", this.timeElem.style.left = "auto", this.timeElem.style.width = "auto", this.timeElem.style.right = "4px", this.timeElem.innerHTML = a.util.niceDuration(this.video.time()))
        }, c.prototype.updateTime = function (a) {
            var b;
            return b = Math.min(this.video.duration(), Math.max(0, a * this.video.duration())), this.video.time(b)
        }, c.prototype.updateBuffered = function () {
            var a, b, c, d, e, f;
            if (this._scrubbing)return;
            return d = this.sequentialBufferedRange(), this.video.state() === "beforeplay" ? (this.bufferedElem.style.left = "0px", this.bufferedElem.style.width = "0px") : d != null ? (f = Math.max(0, d[0] / this.video.duration()), c = Math.min(1, d[1] / this.video.duration()), f < .02 && (f = 0), c > .99 && (c = 1), e = 4 + Math.round(this.scrubWidth() * f), b = Math.round(this.scrubWidth() * c), a = b - e, this.bufferedElem.style.left = "" + e + "px", this.bufferedElem.style.width = "" + Math.max(0, a) + "px") : (this.bufferedElem.style.left = "0px", this.bufferedElem.style.width = "0px")
        }, c.prototype.sequentialBufferedRange = function () {
            var a, b, c, d, e, f, g, h, i, j, k, l;
            f = null;
            for (b = h = 0, j = this.video.videoElem.buffered.length; 0 <= j ? h < j : h > j; b = 0 <= j ? ++h : --h) {
                e = this.video.videoElem.buffered.start(b) - .5, a = this.video.videoElem.buffered.end(b) + .5;
                if (e <= (k = this.video.time()) && k < a) {
                    f = b;
                    break
                }
            }
            if (f != null) {
                d = f;
                for (b = i = f, l = this.video.videoElem.buffered.length; f <= l ? i < l : i > l; b = f <= l ? ++i : --i) {
                    g = this.video.videoElem.buffered.start(b) - .5, c = this.video.videoElem.buffered.end(d) + .5;
                    if (g <= c)d = b; else break
                }
                return e = this.video.videoElem.buffered.start(f), a = this.video.videoElem.buffered.end(d), [e, a]
            }
            return null
        }, c.prototype.width = function () {
            return this.video.videoWidth() - this.video.leftControlsWidth() - this.video.rightControlsWidth()
        }, c.prototype.scrubWidth = function () {
            return this.width() - 4
        }, c.prototype.height = function () {
            return 32
        }, c.prototype.reorient = function () {
            return this.elem.style.left = "" + this.video.leftControlsWidth() + "px", this.elem.style.width = "" + this.width() + "px", this.borderElem.style.width = "" + (this.width() - 8) + "px", this.borderElem.style.height = "" + (this.height() - 8) + "px", this.backgroundElem.style.width = "" + (this.width() - 8) + "px", this.backgroundElem.style.height = "" + (this.height() - 8) + "px"
        }, c.prototype.diagonalLinesBase64 = function () {
            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQFJREFUeNrsl6EOwkAQRC+T1CBAYDAIEFRgiiiW/6cCDAJTBKYGQQWmouyGbbLZD5gzNBnxcmbSd+3dpnEcC8lJUkoSm5FS2ksGyT39HiprgZWkscU1m2GgjebWjspa4CUpJAfJg82wV7ELnmg87QF1c7VFKmuByuAjmbFZCzwlnbWr2awFbu77TGxG8NKwGTm8e0YO754RvJRs1gIXg6Vkw2Yt0NuvsbZmVIbz0pkbKsO8FMETjeG8DMEThZHDu2c4L5Wd1VSeNuFWsnBHJo3hrkrncHWisBY4Bi9U1gJvSeu8UBk5vHtGDu+e4a7I3hON/WjWhtGJwv/RLPto9hVgAAkkA1W/Un5YAAAAAElFTkSuQmCC"
        }, c.prototype.updateColor = function () {
            return this.backgroundElem.style.backgroundColor = this.primaryColor().alpha(.5).toRgba(), this.bufferedElem.style.backgroundColor = this.secondaryColor().alpha(.8).toRgba(), this.borderElem.style.borderColor = this.primaryColor().alpha(.8).toRgba()
        }, c
    }(a.Romulus.Control)
})(Wistia);
var __hasProp = {}.hasOwnProperty, __extends = function (a, b) {
    function d() {
        this.constructor = a
    }

    for (var c in b)__hasProp.call(b, c) && (a[c] = b[c]);
    return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a
};
(function (a) {
    if (a.Romulus.BigPlayButton)return;
    return a.Romulus.BigPlayButton = function (b) {
        function c(b) {
            this.video = b, this.name = "bigPlayButton", c.__super__.constructor.call(this, this.video), a.elem.remove(this.elem), this.bpb = new a.BigPlayButton(this.video.romulusElem, {
                uuid: this.video.uuid,
                color: this.video.playerColor(),
                heightCorrection: this.video._opts.controlsVisibleOnLoad ? -22 : 0
            }), this.bpb.hide(), this.elem = this.bpb.elem, this.bpb.fit()
        }

        return __extends(c, b), c.prototype.initialize = function () {
            var b = this;
            return a.util.notSetOrTrue(this.video._opts.playButton) && (this.video._replacing ? this.turnOnWithoutShowing() : this.video.still.loaded(function () {
                return b.turnOn()
            })), this
        }, c.prototype.setupBindings = function () {
            var b = this;
            return this.video.state() === "playing" && a.timeout("" + this.video.uuid + ".hide_big_play_button", function () {
                return b.hide()
            }), this.video.bind("play", function () {
                return b.hide()
            }), this.video.bind("startplay", function () {
                return b.hide()
            }), a.elem.bind(this.video.romulusElem, "click", function (a) {
                if (a.which !== 1)return;
                if (b.bpb.mouseEventTargetIsInside(a))return b.video.showControls(), b.video.play()
            })
        }, c.prototype.turnOn = function () {
            return this._on = !0, this.show(), this.video.trigger("control-on", this.name)
        }, c.prototype.turnOnWithoutShowing = function () {
            return this._on = !0, this.video.trigger("control-on", this.name)
        }, c.prototype.show = function () {
            if (this.shouldShow())return this.bpb.show()
        }, c.prototype.shouldShow = function () {
            return this.on() && this.video.state() === "beforeplay" && (!this.video._opts.autoPlay || !this.video._replacing)
        }, c.prototype.hide = function () {
            return this.bpb.hide()
        }, c.prototype.reorient = function () {
            return this.bpb.fit()
        }, c.prototype.updateColor = function () {
            return this.bpb.color(this.primaryColor())
        }, c
    }(a.Romulus.Control)
})(Wistia);
var __hasProp = {}.hasOwnProperty, __extends = function (a, b) {
    function d() {
        this.constructor = a
    }

    for (var c in b)__hasProp.call(b, c) && (a[c] = b[c]);
    return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a
};
(function (a) {
    if (a.Romulus.Still)return;
    return a.Romulus.Still = function (b) {
        function c(b) {
            var d = this;
            this.video = b, this.name = "still", this.loaded = new a.StopGo, c.__super__.constructor.call(this, this.video), this.thumbnail = new a.Thumbnail(this.video.romulusElem, {
                tabbable: !1,
                onActivate: this.activate,
                stillSnap: this.video._opts.stillSnap,
                images: this.video.thumbnailAssets()
            }), this.thumbnail.hide(), a.elem.style(this.thumbnail.elem, {
                left: 0,
                position: "absolute",
                top: 0
            }), this.elem = this.thumbnail.elem, this.loaded = new a.StopGo, this.thumbnail.loaded(function () {
                return d.loaded(!0)
            }), typeof this.setupBindings == "function" && this.setupBindings()
        }

        return __extends(c, b), c.prototype.initialize = function () {
            return this.fitStill(), this
        }, c.prototype.setupBindings = function () {
            var b = this;
            return this.video.state() === "playing" && a.timeout("" + this.video.uuid + ".hide_still", function () {
                return b.hide()
            }), this.video.bind("play", function () {
                return b.hide()
            }), this.video.bind("startplay", function () {
                return a.timeout("" + b.video.uuid + ".delayed_hide_still", function () {
                    if (b.video.state() !== "beforeplay")return b.hide()
                }, 1e3)
            }), a.elem.bind(this.video.romulusElem, "click", function (c) {
                if (c.which !== 1)return;
                if (a.elem.isInside(c.target, b.elem))return b.video.showControls(), b.video.play()
            }), this._debounceFitStill = function (c) {
                return c == null && (c = 250), a.timeout("" + b.video.uuid + ".fitStill", function () {
                    return b.fitStill()
                }, c)
            }, this.video.bind("enter-fullscreen", function () {
                return b._debounceFitStill()
            }), this.video.bind("cancel-fullscreen", function () {
                return b._debounceFitStill()
            }), this.video.bind("heightchange", function () {
                return b.fitStill()
            }), this.video.bind("widthchange", function () {
                return b.fitStill()
            })
        }, c.prototype.fitStill = function () {
            return this.thumbnail.fit()
        }, c.prototype.shouldShow = function () {
            return this.video.state() === "beforeplay" && (!this.video._opts.autoPlay || !this.video._replacing)
        }, c.prototype.show = function () {
            if (this.shouldShow())return this.thumbnail.show(), this.fitStill()
        }, c.prototype.hide = function () {
            return this.thumbnail.hide()
        }, c.prototype.mouseover = function () {
        }, c.prototype.mouseout = function () {
        }, c.prototype.remove = function () {
            return this.thumbnail.destroy(), this.elem = null
        }, c
    }(a.Romulus.Control)
})(Wistia);
var __hasProp = {}.hasOwnProperty, __extends = function (a, b) {
    function d() {
        this.constructor = a
    }

    for (var c in b)__hasProp.call(b, c) && (a[c] = b[c]);
    return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a
};
(function (a) {
    if (a.Romulus.Branding)return;
    return a.Romulus.Branding = function (b) {
        function c(b) {
            var d = this;
            this.video = b, this.name = "branding", c.__super__.constructor.call(this, this.video), this.elem.style.overflow = "hidden", this.elem.style.position = "absolute", this.elem.style.left = "0px", this.elem.style.top = "0px", this.elem.style.backgroundColor = this.primaryColor().alpha(.8).toRgba(), this.elem.style.height = "0px", this.elem.style.width = "0px", this.elem.className = "wistia_romulus_control wistia_romulus_hidden", this.linkElem = a.elem.fromObject({
                tagName: "a",
                href: "http://wistia.com",
                tabindex: "-1",
                style: {
                    display: "block",
                    fontSize: "12px",
                    fontFamily: "Gill Sans, Sans-Serif",
                    height: "" + (this.height() - 4) + "px",
                    letterSpacing: "1px",
                    lineHeight: "" + (this.height() - 4) + "px",
                    paddingLeft: "5px",
                    paddingTop: "2px",
                    paddingBottom: "2px",
                    textDecoration: "none",
                    width: "" + (this.width() - 5) + "px"
                }
            }), this.video.hasData(function () {
                return d.linkElem.setAttribute("href", "http://wistia.com/about-wistia?player=" + d.video._mediaData.accountKey.match(/\d+/)[0])
            }), this.poweredByElem = a.elem.fromObject({
                tagName: "span",
                style: {color: "rgba(255, 255, 255, .65)"},
                innerHTML: "POWERED BY"
            }), this.wistiaElem = a.elem.fromObject({
                tagName: "span",
                style: {color: "#fff"},
                innerHTML: "WISTIA"
            }), a.elem.append(this.linkElem, this.poweredByElem), a.elem.append(this.linkElem, document.createTextNode(" ")), a.elem.append(this.linkElem, this.wistiaElem), a.elem.append(this.elem, this.linkElem)
        }

        return __extends(c, b), c.prototype.initialize = function () {
            return (this.video._opts.branding || this.video._mediaData.branding) && this.turnOn(), this
        }, c.prototype.setupBindings = function () {
            var b = this;
            return this.video.bind("widthchange", function () {
                return b.elem.style.width = "" + b.width() + "px", b.linkElem.style.width = "" + (b.width() - 5) + "px"
            }), a.elem.bind(this.elem, "click", function (a) {
                return a.stopPropagation()
            }), this.video.bind("play", function () {
                return b.showBeforePlay()
            })
        }, c.prototype.height = function () {
            return 18
        }, c.prototype.width = function () {
            return this.video.videoWidth()
        }, c.prototype.show = function () {
            if (this.video.state() !== "beforeplay")return c.__super__.show.apply(this, arguments)
        }, c.prototype.showBeforePlay = function () {
            if (this.on())return this.elem.style.height = "" + this.height() + "px", this.elem.style.width = "" + this.width() + "px", a.elem.removeClass(this.elem, "wistia_romulus_hidden"), a.elem.addClass(this.elem, "wistia_romulus_visible")
        }, c.prototype.mouseover = function () {
            return this.linkElem.style.textShadow = "0 0 8px rgba(255, 255, 255, .8)"
        }, c.prototype.mouseout = function () {
            return this.linkElem.style.textShadow = "none"
        }, c.prototype.updateColor = function () {
            return this.elem.style.backgroundColor = this.primaryColor().alpha(.8).toRgba()
        }, c
    }(a.Romulus.Control)
})(Wistia);
var __hasProp = {}.hasOwnProperty, __extends = function (a, b) {
    function d() {
        this.constructor = a
    }

    for (var c in b)__hasProp.call(b, c) && (a[c] = b[c]);
    return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a
};
(function (a) {
    if (a.Romulus.Loading)return;
    return a.Romulus.Loading = function (b) {
        function c(b) {
            this.video = b, this.name = "loading", c.__super__.constructor.call(this, this.video), this.elem.innerHTML = "Loading...", a.elem.removeClass(this.elem, "wistia_romulus_hidden"), a.elem.removeClass(this.elem, "wistia_romulus_visible"), a.elem.style(this.elem, {
                position: "absolute",
                display: "none",
                left: "0px",
                top: "0px",
                backgroundColor: this.primaryColor().toRgba(),
                color: "rgba(255, 255, 255, .8)",
                fontFamily: "Arial, Sans-Serif",
                fontStyle: "italic",
                lineHeight: "1.1em",
                padding: "2px 5px",
                display: "none"
            })
        }

        return __extends(c, b), c.prototype.initialize = function () {
            return this
        }, c.prototype.showSoon = function () {
            var b = this;
            if (this._showingSoon)return;
            return this._showingSoon = !0, a.timeout("" + this.video.uuid + ".show_loading", function () {
                return b.show()
            }, 2e3), this.video.bind("timechange", function (a) {
                return b.cancelShow(), b.video.unbind
            }), this._hideIfNotPlaying == null && (this._hideIfNotPlaying = function () {
                return b.video.state() === "paused" || b.video.state() === "ended" ? b.cancelShow() : a.timeout("" + b.video.uuid + ".hide_if_paused", b._hideIfNotPlaying, 500)
            }), this._hideIfNotPlaying()
        }, c.prototype.cancelShow = function () {
            return this._showingSoon = !1, a.clearTimeouts("" + this.video.uuid + ".show_loading"), a.clearTimeouts("" + this.video.uuid + ".hide_if_paused"), this.hide()
        }, c.prototype.setupBindings = function () {
            var a = this;
            return this.video.bind("waiting", function () {
                return a.showSoon()
            }), this.video.bind("play", function () {
                return a.showSoon()
            }), this.video.bind("seek", function () {
                if (a.video.state() === "playing")return a.showSoon()
            }), this.video.bind("show-controls", function () {
                return a.video.branding.on() ? a.elem.style.top = "18px" : a.elem.style.top = "0px"
            }), this.video.bind("hide-controls", function () {
                return a.elem.style.top = "0px"
            })
        }, c.prototype.show = function () {
            return this.elem.style.display = "block"
        }, c.prototype.hide = function () {
            return this.elem.style.display = "none"
        }, c.prototype.updateColor = function () {
            return this.elem.style.backgroundColor = this.primaryColor().toRgba()
        }, c
    }(a.Romulus.Control)
})(Wistia);
var __hasProp = {}.hasOwnProperty, __extends = function (a, b) {
    function d() {
        this.constructor = a
    }

    for (var c in b)__hasProp.call(b, c) && (a[c] = b[c]);
    return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a
}, __slice = [].slice;
(function (a) {
    if (a.Romulus.ContextMenu)return;
    return a.Romulus.ContextMenu = function (b) {
        function c(b) {
            this.video = b, this.name = "context_menu", this.showed = new Wistia.StopGo, c.__super__.constructor.call(this, this.video), a.elem.style(this.elem, {
                backgroundColor: "#fff",
                boxShadow: "0px 3px 10px rgba(0,0,0,.2)",
                height: "",
                left: "0px",
                lineHeight: "1.5em",
                position: "absolute",
                textShadow: "none",
                top: "0px",
                width: "" + this.width() + "px",
                zIndex: 1e5
            }), a.elem.addClass(this.elem, "wistia_context_menu"), a.elem.removeClass(this.elem, "wistia_romulus_hidden"), a.elem.removeClass(this.elem, "wistia_romulus_visible"), this.items = [], this.setupItems()
        }

        return __extends(c, b), c.prototype.initialize = function () {
            return this.turnOn(), this
        }, c.prototype.turnOn = function () {
            return c.__super__.turnOn.apply(this, arguments), this.hide()
        }, c.prototype.hide = function () {
            return this.elem.style.display = "none"
        }, c.prototype.show = function () {
            return this.elem.style.display = "block"
        }, c.prototype.cleanup = function () {
            return a.elem.unbind(document, "mouseup", this._hideContextMenuOnClickOutside), c.__super__.cleanup.apply(this, arguments)
        }, c.prototype.setupBindings = function () {
            var b = this;
            return this._showContextMenuOnRightClick == null && (this._showContextMenuOnRightClick = function (c) {
                return a.detect.mac && c.altKey || !a.detect.mac && c.ctrlKey || (c.preventDefault(), b.showed(!0), b.show(), b.repositionFromEvent(c), b._suppressHide = !0, a.timeout("" + b.video.uuid + ".contextmenu.suppress_hide", function () {
                    return b._suppressHide = !1
                }, 200)), !0
            }), a.elem.rebind(this.video.romulusElem, "contextmenu", this._showContextMenuOnRightClick), this._hideContextMenuOnClickOutside == null && (this._hideContextMenuOnClickOutside = function (c) {
                if (b._suppressHide)return;
                if (!a.elem.isInside(c.target, b.elem))return b.hide()
            }), a.elem.rebind(document, "mouseup", this._hideContextMenuOnClickOutside), this.video.bind("enter-fullscreen", function () {
                return b.hide()
            }), this.video.bind("cancel-fullscreen", function () {
                return b.hide()
            }), this._onSwitchedAsset == null && (this._onSwitchedAsset = function () {
                return b.playingIn.innerHTML = "Playing in <span id='playingInName'>" + b.assetName(b.video._currentAsset) + "</span>", b.video._forceAsset ? b.activateAsset(b.video._currentAsset) : (b.activateItem("auto"), b.deactivateAssets())
            }), this.video.bind("switched-to-asset", this._onSwitchedAsset), this.video.bind("switched-to-asset-without-load", this._onSwitchedAsset)
        }, c.prototype.repositionFromEvent = function (b) {
            var c, d, e, f, g;
            return this.video.inFullscreen() ? f = {
                left: a.util.scrollLeft(),
                top: a.util.scrollTop()
            } : f = a.elem.offset(this.video.romulusElem), d = b.pageX - f.left, g = b.pageY - f.top, e = d + this.width(), c = g + this.height(), e > this.video.videoWidth() && (d -= this.width() - 1), c > this.video.videoHeight() && (g -= this.height() - 1), this.elem.style.left = "" + Math.max(0, d) + "px", this.elem.style.top = "" + Math.max(0, g) + "px", this.fixZoom()
        }, c.prototype.fixZoom = function () {
            var a;
            return this.elem.style.zoom = 1, a = this.height() > this.video.videoHeight() ? this.video.videoHeight() / this.height() : 1, this.elem.style.zoom = a
        }, c.prototype.setupItems = function () {
            var b, c, d, e, f, g, h = this;
            this.addMenuItem("playingIn", {
                innerHTML: "Playing in <span id='playingInName'>" + this.assetName(this.video._currentAsset) + "</span>",
                events: {
                    click: function (a) {
                        return a.stopPropagation(), h.hide()
                    }
                },
                "class": "wistia_disabled"
            }), this.video.embedded(function () {
                var a;
                return (a = document.getElementById("playingInName")) != null ? a.innerHTML = h.assetName(h.video._currentAsset) : void 0
            }), this.addHr(), this.addMenuItem("auto", {
                innerHTML: "<span id='autoBullet' class='wistia_bullet'>&#9675;</span> Auto",
                events: {
                    click: function (a) {
                        return a.stopPropagation(), h.video._forceAsset = null, h.video.swapVideoAsset(h.video.bestAsset()), h.deactivateAssets(), h.activateItem("auto"), h.hide()
                    }
                }
            }), this.activateItem("auto"), f = this.assets(), c = function (a) {
                return h.addMenuItem(a.slug, {
                    innerHTML: "<span id='" + a.slug + "Bullet' class='wistia_bullet'>&#9675;</span> " + h.assetName(a),
                    events: {
                        click: function (b) {
                            return b.stopPropagation(), h.video.forceSwitchToAsset(a), h.deactivateItem("auto"), h.activateAsset(a), h.hide()
                        }
                    }
                })
            };
            for (d = 0, e = f.length; d < e; d++)b = f[d], c(b);
            ((g = a.detect.flash) != null ? g.version : void 0) >= 9 && (this.addHr(), this.addMenuItem("switchToFlash", {
                innerHTML: "Switch to Flash",
                events: {
                    click: function (a) {
                        return a.stopPropagation(), h.video.savePlatformPreference("flash"), h.video.publicApi.rebuildAs("flash"), h.video.trigger("widthchange"), h.video.trigger("heightchange"), h.hide()
                    }
                }
            })), this.video._mediaData.showAbout && (this.addHr(), this.addMenuItem("aboutWistia", {
                tagName: "a",
                href: "http://wistia.com/about-wistia?about=" + this.video._mediaData.accountKey.match(/\d+/)[0],
                target: "_blank",
                innerHTML: "About Wistia",
                style: {display: "block", textDecoration: "none"},
                events: {
                    click: function (a) {
                        return a.stopPropagation(), h.hide()
                    }
                }
            })), this.showed(function () {
                return a.jsonp.get("//" + a.constant.appHost + "/media_url", {hashed_id: h.video.hashedId()}, function (b) {
                    var c, d;
                    if (b.logged_in && !h.onPageUrl(b.media_url))return c = b.whitelabel ? "Logged In to Account" : "Logged In to Wistia", a.elem.remove(h.aboutWistia), h.addMenuItem("loggedIn", {
                        innerHTML: c,
                        "class": "wistia_disabled wistia_title",
                        events: {
                            click: function (a) {
                                return a.stopPropagation(), h.hide()
                            }
                        }
                    }), b.whitelabel || h.addMenuItem("troubleshooting", {
                        tagName: "a",
                        innerHTML: "Troubleshoot this embed",
                        href: "http://wistia.com/doc/troubleshooting?player=true&media=" + h.video.hashedId() + "&page=" + encodeURIComponent(h.video._attrs.pageUrl) + "#embedding",
                        target: "_blank",
                        style: {display: "block", textDecoration: "none"},
                        events: {
                            click: function (a) {
                                return a.stopPropagation(), h.hide()
                            }
                        }
                    }), d = b.whitelabel ? "Open video in account" : "Open video in Wistia", h.addMenuItem("viewInWistia", {
                        tagName: "a",
                        href: b.media_url,
                        target: "_blank",
                        innerHTML: d,
                        style: {display: "block", textDecoration: "none"},
                        events: {
                            click: function (a) {
                                return a.stopPropagation(), h.hide()
                            }
                        }
                    }), h.fixZoom()
                })
            });
            if (this.video.hdAsset() && this.video._opts.videoQuality === "hd-only")return this.activateItem("hdOnly"), this.deactivateItems("autoHd", "sdOnly")
        }, c.prototype.addMenuItem = function (b, c) {
            var d;
            return d = a.elem.fromObject(c), d.id = b, a.elem.addClass(d, "wistia_menu_item"), a.elem.addClass(d, "wistia_menu_item_" + b), a.elem.bind(d, "mousedown", function (a) {
                return a.preventDefault()
            }), a.elem.append(this.elem, d), this[b] = d, this.items.push(d)
        }, c.prototype.onPageUrl = function (b) {
            var c, d;
            return d = a.url.parse(location.href), c = a.url.parse(b), d._opts = {}, d.protocol = "http:", c._opts = {}, c.protocol = "http:", d.absolute() === c.absolute()
        }, c.prototype.addHr = function () {
            return a.elem.append(this.elem, a.elem.fromObject({
                style: {
                    fontSize: "0px",
                    height: "0px",
                    lineHeight: "0px",
                    borderTop: "1px solid #e8e8e8",
                    margin: "1px 0"
                }
            }))
        }, c.prototype.activateItem = function (a) {
            var b;
            return (b = document.getElementById("" + a + "Bullet")) != null ? b.innerHTML = "&#9679;" : void 0
        }, c.prototype.deactivateItem = function (a) {
            var b;
            return (b = document.getElementById("" + a + "Bullet")) != null ? b.innerHTML = "&#9675;" : void 0
        }, c.prototype.deactivateItems = function () {
            var a, b, c, d, e;
            b = 1 <= arguments.length ? __slice.call(arguments, 0) : [], e = [];
            for (c = 0, d = b.length; c < d; c++)a = b[c], e.push(this.deactivateItem(a));
            return e
        }, c.prototype.assets = function () {
            return this._assets || (this._assets = this.video.assets({
                    container: "mp4",
                    sortBy: "width asc, bitrate desc",
                    unique: "width",
                    "public": !0
                }))
        }, c.prototype.activateAsset = function (a) {
            return this.playingIn.innerHTML = "Playing in <span id='playingInName'>" + this.assetName(a) + "</span>", this.activateItem(a.slug), this.deactivateAssetsExcept(a)
        }, c.prototype.deactivateAsset = function (a) {
            return this.deactivateItem(a.slug)
        }, c.prototype.deactivateAssets = function () {
            var a, b, c, d, e;
            d = this.assets(), e = [];
            for (b = 0, c = d.length; b < c; b++)a = d[b], e.push(this.deactivateAsset(a));
            return e
        }, c.prototype.deactivateAssetsExcept = function (a) {
            var b, c, d, e, f;
            e = this.assets(), f = [];
            for (c = 0, d = e.length; c < d; c++)b = e[c], b.url !== a.url ? f.push(this.deactivateAsset(b)) : f.push(void 0);
            return f
        }, c.prototype.assetName = function (a) {
            return !a || !a.width || !a.height ? "?" : a.width >= 3840 ? "" + Math.max(4, Math.round(a.width / 1e3 * 10) / 10) + "k" : a.width >= 2700 ? "" + Math.max(2.7, Math.round(a.width / 1e3 * 10) / 10) + "k" : "" + a.height + "p"
        }, c.prototype.hideItem = function (b) {
            return a.elem.removeClass(this[b], "wistia_visible"), a.elem.addClass(this[b], "wistia_hidden")
        }, c.prototype.showItem = function (b) {
            return a.elem.removeClass(this[b], "wistia_hidden"), a.elem.addClass(this[b], "wistia_visible")
        }, c.prototype.visibleItems = function () {
            var a, b, c, d, e;
            d = this.items, e = [];
            for (b = 0, c = d.length; b < c; b++)a = d[b], a.style.display !== "none" && e.push(a);
            return e
        }, c.prototype.height = function () {
            return a.elem.height(this
                .elem)
        }, c.prototype.width = function () {
            return 200
        }, c.prototype.updateColor = function () {
        }, c.prototype.remove = function () {
            return this.cleanup(), a.elem.unbind(this.video.romulusElem, "contextmenu", this._showContextMenuOnRightClick), a.elem.remove(this.elem)
        }, c
    }(a.Romulus.Control)
})(Wistia);
var __hasProp = {}.hasOwnProperty, __extends = function (a, b) {
    function d() {
        this.constructor = a
    }

    for (var c in b)__hasProp.call(b, c) && (a[c] = b[c]);
    return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a
}, __slice = [].slice;
(function (a) {
    var b, c;
    b = a;
    if (b.RomulusVideo)return;
    return b.RomulusVideo = function (a) {
        function d() {
            return c = d.__super__.constructor.apply(this, arguments), c
        }

        return __extends(d, a), d.prototype.playerType = "romulus", d.prototype.elem = function () {
            return document.getElementById(this.uuid)
        }, d.prototype.embed = function () {
            return this.resetStateVariables(), this.setCurrentAsset(), this.placeEmbed(this.createEmbedElem()), this.setupEmbed()
        }, d.prototype.setupEmbed = function () {
            var a = this;
            return this.info("setupEmbed"), this.setCurrentAsset(), this.videoElem = document.getElementById(this.uuid), this.romulusElem = document.getElementById("" + this.uuid + "_romulus"), this.sourceElem = document.getElementById("" + this.uuid + "_source"), this.setupCss(), this.setupControls(), this.setupBindings(), this.fixWebkitControlsBug(), !b.detect.iphone && !b.detect.ipad && this.disableTextTracks(), this.checkForReady(), this.info("embedded"), this.embedded(!0), b.timeout("" + this.uuid + ".fit_later", function () {
                return a.fit()
            }, 500)
        }, d.prototype.checkForReady = function () {
            var a, c = this;
            return this._checkDownState(), a = function () {
                if (!c.videoElem)return;
                return c.videoElem.readyState >= 2 ? b.timeout("" + c.uuid + ".ready_later", function () {
                    return c.info("ready readyState", c.videoElem.readyState), c._hasBeenReady = !0, c.ready(!0)
                }) : (c._onLoadStart == null && (c._onLoadStart = function () {
                    return b.timeout("" + c.uuid + ".loadstart", function () {
                        return c.info("ready loadstart"), c._hasBeenReady = !0, c.ready(!0)
                    })
                }), b.elem.rebind(c.videoElem, "loadstart", c._onLoadStart)), b.timeout("" + c.uuid + ".ready_fallback", function () {
                    if (!c.ready() && c.up())return c.info("ready fallback"), c._hasBeenReady = !0, c.ready(!0)
                }, 200)
            }, this._hasBeenReady ? a() : this.up(a)
        }, d.prototype.transferStateFrom = function (a) {
            var b = this;
            this._heightBeforeFullscreen = a._heightBeforeFullscreen, this._widthBeforeFullscreen = a._widthBeforeFullscreen, this._inFullscreen = a._inFullscreen;
            if (a._inFullscreen)return this.notFullscreen(function () {
                return b.width(b._widthBeforeFullscreen), b.height(b._heightBeforeFullscreen)
            })
        }, d.prototype.createEmbedElem = function () {
            var a;
            return a = {
                id: "" + this.uuid + "_romulus",
                style: {
                    background: "transparent",
                    display: "block",
                    height: "100%",
                    overflow: "hidden",
                    position: "relative",
                    width: "100%"
                }
            }, a.childNodes = this.createVideoObject(this.uuid, this._currentAsset), b.elem.fromObject(a)
        }, d.prototype.createVideoObject = function (a, c) {
            var d, e, f, g, h, i, j;
            i = {
                tagName: "video",
                style: {
                    background: "transparent",
                    display: "block",
                    height: "100%",
                    position: "relative",
                    visibility: "visible",
                    width: "100%"
                },
                id: a,
                preload: "none",
                poster: "//" + b.constant.embedHost + "/assets/images/blank.gif"
            };
            if (b.detect.browser.msie || b.detect.trident)i.style.minWidth = "10px", i.style.minHeight = "10px";
            return f = this._opts.autoPlay && this._opts.popover !== !0 ? "auto" : this._opts.preload != null ? this._opts.preload : this._mediaData.preloadPreference, f === "metadata" ? i.preload = "metadata" : f === !0 || f === "auto" ? i.preload = "auto" : f === !1 || f === "none" ? i.preload = "none" : (d = function () {
                var a, c;
                a = b.data("video"), c = [];
                for (e in a)h = a[e], c.push(h);
                return c
            }(), this._opts._inIframe && top !== parent ? i.preload = "none" : this._opts._inIframe && parent.frames.length > 25 ? i.preload = "none" : this._opts._inIframe && (!window._allIframes || _allIframes.length > 2) ? i.preload = "none" : !this._opts._inIframe && d.length > 2 ? i.preload = "none" : ((j = this._mediaData.stats) != null ? j.loadCount : void 0) > 5e3 && this._mediaData.stats.uniquePlayCount / this._mediaData.stats.uniqueLoadCount < .1 ? i.preload = "none" : i.preload = "metadata"), g = {
                tagName: "source",
                id: "" + a + "_source",
                src: this.properAssetUrl(c.url),
                type: "video/mp4"
            }, i.childNodes = [g], i
        }, d.prototype.setupBindings = function () {
            return this.setupPlayerApiBindings(), this.setupDomBindings(), this.setupVideoBindings(), this.setupFullscreenBindings(), this.setupKeyBindings()
        }, d.prototype.setupPlayerApiBindings = function () {
            return this.listenForEvents(), this.pollForEvents()
        }, d.prototype.setupDomBindings = function () {
            var a = this;
            return this._onMouseoverVideo == null && (this._onMouseoverVideo = function (c) {
                return b.elem.containsOffset(a.romulusElem, c.pageX, c.pageY) && (a.debug("_onMouseoverVideo", c.pageX, c.pageY), a._keyBindingsActive = !0, a._mouseover = !0), !0
            }), b.elem.rebind(this.romulusElem, "mouseover", this._onMouseoverVideo), this._onMousemoveVideo == null && (this._onMousemoveVideo = function (c) {
                return b.elem.containsOffset(a.romulusElem, c.pageX, c.pageY) && (a.debug("_onMousemoveVideo", c.pageX, c.pageY), a._keyBindingsActive = !0, a._mouseover = !0), !0
            }), b.elem.rebind(this.romulusElem, "mousemove", this._onMousemoveVideo), this._onMouseoutVideo == null && (this._onMouseoutVideo = function (c) {
                return b.elem.containsOffset(a.romulusElem, c.pageX, c.pageY) || (a.debug("_onMouseoutVideo", c.pageX, c.pageY), a._keyBindingsActive = !1, a._mouseover = !1), !0
            }), b.elem.rebind(this.romulusElem, "mouseout", this._onMouseoutVideo), this._onMouseLeavesWindow == null && (this._onMouseLeavesWindow = function (b) {
                var c;
                c = b.relatedTarget || b.toElement;
                if (!c || c.nodeName === "HTML")a.debug("_onMouseLeavesWindow", c), a._mouseover = !1, a._keyBindingsActive = !1;
                return !0
            }), b.elem.rebind(document, "mouseout", this._onMouseLeavesWindow), this._onClickVideo == null && (this._onClickVideo = function (b) {
                return b.target === a.videoElem && (a.debug("_onClickVideo"), a.togglePlay(), a.showControls()), !0
            }), b.elem.rebind(this.romulusElem, "click", this._onClickVideo), this._onDblClickVideo == null && (this._onDblClickVideo = function (b) {
                return b.target === a.videoElem && (a.debug("_onDblClickVideo"), a.fullscreenButton.on() && (a.inFullscreen() ? a.cancelFullscreen() : a.requestFullscreen())), !0
            }), b.elem.rebind(this.romulusElem, "dblclick", this._onDblClickVideo), this._showControlsOnMouseover == null && (this._showControlsOnMouseover = function (b) {
                return a.state() !== "beforeplay" && (a.debug("_showControlsOnMouseover"), a.showControls()), !0
            }), b.elem.rebind(this.romulusElem, "mouseover", this._showControlsOnMouseover), this._hideControlsOnMouseout == null && (this._hideControlsOnMouseout = function (c) {
                return a.inFullscreen() ? (a.debug("_hideControlsOnMouseout -- in fullscreen, so showControls"), a.showControls()) : (a.debug("_hideControlsOnMouseout"), a.state() !== "beforeplay" && !b.elem.containsOffset(a.romulusElem, c.pageX, c.pageY) && a.hideControls()), !0
            }), b.elem.rebind(this.romulusElem, "mouseout", this._hideControlsOnMouseout), this._showControlsOnMousemove == null && (this._showControlsOnMousemove = function (b) {
                if (a.state() !== "beforeplay" && !a._suppressShowControls)return a.debug("_showControlsOnMousemove"), a.showControls()
            }), b.elem.rebind(this.romulusElem, "mousemove", this._showControlsOnMousemove), this._fullscreenResizeToWindow == null && (this._fullscreenResizeToWindow = function (c) {
                if (a.inFullscreen())return a.debug("_fullscreenResizeToWindow"), a.width(b.elem.width(window), {fullscreen: !0}), a.height(b.elem.height(window) - 1, {fullscreen: !0})
            }), b.elem.rebind(window, "resize", this._fullscreenResizeToWindow)
        }, d.prototype.setupVideoBindings = function () {
            var a = this;
            return this.videoElem.getAttribute("preload") !== "none" ? this._startedLoadingAt = (new Date).getTime() : this.bind("play", function () {
                return a._startedLoadingAt = (new Date).getTime(), a.unbind
            }), this.bind("progress", function () {
                if (a.videoElem.buffered.length > 0 && a.videoElem.buffered.end(0) > 0)return a._firstByteReceivedAt = (new Date).getTime(), a._startedLoadingAt != null && (a._timeToFirstByte = a._firstByteReceivedAt - a._startedLoadingAt), b.elem.unbind
            }), this.bind("control-on", function () {
                return a.repositionControls()
            }), this.bind("control-off", function () {
                return a.repositionControls()
            }), this.bind("widthchange", function () {
                return a.repositionControls()
            }), this.bind("heightchange", function () {
                return a.repositionControls()
            }), this.embedded(function () {
                if (a.bandwidthTest().isFresh())return a._supportsHd = a.bandwidthTest().savedResult().supportsHd;
                if (a.hdAsset() && a._supportsHd == null)return a.bind("play", function () {
                    return a.doBandwidthTest(), a.unbind
                })
            }), this.bind("play", function () {
                return a._beforePlay = !1, a._ended = !1
            }), this.bind("end", function () {
                if (a._opts.endVideoBehavior === "reset")return a.resetToFirstFrame();
                if (a._opts.endVideoBehavior === "loop")return a.play()
            })
        }, d.prototype.setupFullscreenBindings = function () {
            var a = this;
            return this._onEnterFullscreen == null && (this._onEnterFullscreen = function (c) {
                return c === a.chrome && (a.info("_onEnterFullscreen"), a._inFullscreen = !0, a.notFullscreen(!1), a.injectFullscreenStyles(), a.showControls(), a.width(b.elem.width(window), {fullscreen: !0}), a.height(b.elem.height(window) - 1, {fullscreen: !0}), a.videoElem.style.background = "#000", a.swapVideoAsset(a.bestAsset()), a.trigger("enter-fullscreen")), !0
            }), b.bind("enter-fullscreen", this._onEnterFullscreen), this._onCancelFullscreen == null && (this._onCancelFullscreen = function () {
                return a._inFullscreen && (a.info("_onCancelFullscreen"), a._inFullscreen = !1, a.hideControls(), a.videoElem.style.background = "transparent", a.swapVideoAsset(a.bestAsset()), a.showControls(), a.notFullscreen(!0), a.removeFullscreenStyles(), a.width(a._widthBeforeFullscreen), a.height(a._heightBeforeFullscreen), a.fit(), a.trigger("cancel-fullscreen")), !0
            }), b.bind("cancel-fullscreen", this._onCancelFullscreen)
        }, d.prototype.injectFullscreenStyles = function () {
            var a, c, d, e, f;
            if (this._fullscreenStyle)return;
            document.body.id || (this._docBodyId = b.seqId("wistia_", "_tmp_body_id"), document.body.setAttribute("id", this._docBodyId)), a = "#" + document.body.id + ", #" + document.body.id + " :full-screen-ancestor {\n  animation-name: none;\n  -webkit-animation-name: none;\n  transform: none;\n  -webkit-transform: none;\n}", f = ["webkit", "moz", "ms", "o"];
            for (d = 0, e = f.length; d < e; d++)c = f[d], a += "#" + document.body.id + " :-" + c + "-full-screen-ancestor {\n  animation-name: none;\n  -webkit-animation-name: none;\n  transform: none;\n  -webkit-transform: none;\n}" + "\n";
            return this._fullscreenStyle = b.css(a)
        }, d.prototype.removeFullscreenStyles = function () {
            if (!this._fullscreenStyle)return;
            return this._docBodyId && document.body.id === this._docBodyId && (document.body.removeAttribute("id"), this._docBodyId = null), b.elem.remove(this._fullscreenStyle), this._fullscreenStyle = null
        }, d.prototype.setupKeyBindings = function () {
            var a, c = this;
            return a = !1, this._onKeyDown = function (d) {
                var e, f;
                return e = /^(input|textarea|select)$/i.test((f = document.activeElement) != null ? f.tagName : void 0), c._keyBindingsActive && !e && (d.which === 32 ? (c.togglePlay(), c.showControls(), d.preventDefault()) : d.which === 37 ? (b.timeout("" + c.uuid + ".left_key_held", function () {
                    return a = !0
                }, 200), b.elem.bind(document, "keyup", function (d) {
                    return b.clearTimeouts("" + c.uuid + ".left_key_held"), a = !1, b.elem.unbind
                }), c.playbarControl.on() && (c.state() !== "playing" ? d.shiftKey ? c.time(c.time() - 1) : c.time(c.time() - 1 / 24) : d.shiftKey || a ? c.time(c.time() - c.fastTimeDiff(c.duration())) : c.time(c.time() - c.slowTimeDiff(c.duration())), c.showControls(), d.preventDefault())) : d.which === 39 ? (b.timeout("" + c.uuid + ".right_key_held", function () {
                    return a = !0
                }, 200), b.elem.bind(document, "keyup", function (d) {
                    return b.clearTimeouts("" + c.uuid + ".right_key_held"), a = !1
                }), c.playbarControl.on() && (c.state() !== "playing" ? d.shiftKey ? c.time(c.time() + 1) : c.time(c.time() + 1 / 24) : d.shiftKey || a ? c.time(c.time() + c.fastTimeDiff(c.duration())) : c.time(c.time() + c.slowTimeDiff(c.duration())), c.showControls(), d.preventDefault())) : d.which === 38 ? c.volumeControl.on() && (d.shiftKey ? (c.volume(c.volume() + .1), c.showControls()) : (c.volume(c.volume() + .01), c.showControls()), d.preventDefault()) : d.which === 40 ? c.volumeControl.on() && (d.shiftKey ? (c.volume(c.volume() - .1), c.showControls()) : (c.volume(c.volume() - .01), c.showControls()), d.preventDefault()) : c.fullscreenButton.on() && (d.which === 70 ? c.requestFullscreen() : d.which === 13 && (d.altKey || d.metaKey) ? c.requestFullscreen() : d.which === 122 && c.requestFullscreen())), !0
            }, b.elem.rebind(document, "keydown", this._onKeyDown)
        }, d.prototype.setupControls = function () {
            var a, c = this;
            this.info("setupControls");
            try {
                return this.still = (new b.Romulus.Still(this)).initialize(), this._opts.wmode !== "transparent" && this.still.loaded(function () {
                    return c.romulusElem.style.backgroundColor = "#000"
                }), this._controls = [this.smallPlayButton = (new b.Romulus.SmallPlayButton(this)).initialize(), this.playbarControl = (new b.Romulus.PlaybarControl(this)).initialize(), this.volumeControl = (new b.Romulus.VolumeControl(this)).initialize(), this.fullscreenButton = (new b.Romulus.FullscreenButton(this)).initialize(), this.branding = (new b.Romulus.Branding(this)).initialize()], this.bigPlayButton = (new b.Romulus.BigPlayButton(this)).initialize(), this.loading = (new b.Romulus.Loading(this)).initialize(), this.contextMenu = (new b.Romulus.ContextMenu(this)).initialize(), this._allControls = [this.smallPlayButton, this.playbarControl, this.volumeControl, this.fullscreenButton, this.branding, this.bigPlayButton, this.loading, this.contextMenu, this.still], this._bottomLeftControls = [this.smallPlayButton], this._bottomRightControls = [this.fullscreenButton, this.volumeControl], this.resetControls(), this.ready(function () {
                    if (c.volumeControl.off() && c._opts.volume == null)return c.volume(1)
                })
            } catch (d) {
                return a = d, this.error(a)
            }
        }, d.prototype.resetControls = function () {
            return this.info("resetControls"), this.repositionControls(), this.bigPlayButton.show(), this.state() === "beforeplay" && this.still.show(), this.playbarControl.updateScrubBar(), this._opts.controlsVisibleOnLoad ? this.showControls() : this.hideControls()
        }, d.prototype.repositionControls = function () {
            return this.info("repositionControls"), this.positionBottomLeftControls(), this.positionBottomRightControls(), this.playbarControl.reorient(), this.bigPlayButton.reorient()
        }, d.prototype.positionBottomLeftControls = function () {
            var a, b, c, d, e, f;
            b = 0, e = this._bottomLeftControls, f = [];
            for (c = 0, d = e.length; c < d; c++)a = e[c], a.on() ? (a.elem.style.left = "" + b + "px", f.push(b += a.width() + 5)) : f.push(void 0);
            return f
        }, d.prototype.positionBottomRightControls = function () {
            var a, b, c, d, e, f;
            b = 0, e = this._bottomRightControls, f = [];
            for (c = 0, d = e.length; c < d; c++)a = e[c], a.on() ? (a.elem.style.right = "" + b + "px", f.push(b += a.width() + 5)) : f.push(void 0);
            return f
        }, d.prototype.leftControlsWidth = function () {
            var a, b, c, d, e;
            b = 0, e = this._bottomLeftControls || [];
            for (c = 0, d = e.length; c < d; c++)a = e[c], a.on() && (b += a.width() + 5);
            return b
        }, d.prototype.rightControlsWidth = function () {
            var a, b, c, d, e;
            b = 0, e = this._bottomRightControls || [];
            for (c = 0, d = e.length; c < d; c++)a = e[c], a.on() && (b += a.width() + 5);
            return b
        }, d.prototype.controlEnabled = function (a, b) {
            if (b == null)return this[a].on();
            this.info("controlEnabled", a, b), b ? this[a].turnOn() : this[a].turnOff();
            if (this._opts.controlsVisibleOnLoad || this.state() !== "beforeplay")return this.showControls()
        }, d.prototype.bigPlayButtonEnabled = function (a) {
            return this.controlEnabled("bigPlayButton", a), this
        }, d.prototype.smallPlayButtonEnabled = function (a) {
            return this.controlEnabled("smallPlayButton", a), this
        }, d.prototype.playbarControlEnabled = function (a) {
            return this.controlEnabled("playbarControl", a), this
        }, d.prototype.volumeControlEnabled = function (a) {
            return this.controlEnabled("volumeControl", a), this
        }, d.prototype.fullscreenButtonEnabled = function (a) {
            return this.controlEnabled("fullscreenButton", a), this
        }, d.prototype.showControls = function () {
            var a, c, d, e, f = this;
            this.debug("showControls"), e = this._controls;
            for (c = 0, d = e.length; c < d; c++)a = e[c], a.show();
            return this.bigPlayButton.show(), b.timeout("" + this.uuid + ".hide_controls_if_no_movement", function () {
                if (f.inFullscreen() && f._mouseover)return f.hideControls()
            }, 2500), this.showCursor(), this._controlsVisible = !0, this.trigger("show-controls")
        }, d.prototype.forceShowControls = function () {
            var a, b, c, d, e, f, g, h;
            this.info("forceShowControls"), f = this._controls;
            for (b = 0, d = f.length; b < d; b++)a = f[b], a._forceShow = !0;
            this.showControls(), g = this._controls, h = [];
            for (c = 0, e = g.length; c < e; c++)a = g[c], h.push(a._forceShow = !1);
            return h
        }, d.prototype.previewControls = function () {
            return this.info("previewControls"), this._previewControls = !0, this.showControls(), this._previewControls = !1
        }, d.prototype.hideControls = function () {
            var a, b, c, d;
            this.info("hideControls"), d = this._controls;
            for (b = 0, c = d.length; b < c; b++)a = d[b], (a.name !== "bigPlayButton" || this.state() !== "beforeplay") && a.hide();
            return this.inFullscreen() && this.hideCursor(), this._controlsVisible = !1, this.trigger("hide-controls")
        }, d.prototype.hideCursor = function () {
            var a = this;
            return this.info("hideCursor"), this._suppressShowControls = !0, this._embedContainer.style.cursor = "none", b.timeout("" + this.uuid + ".suppress_show_controls", function () {
                return a._suppressShowControls = !1
            }, 500)
        }, d.prototype.showCursor = function () {
            return this._embedContainer.style.cursor = ""
        }, d.prototype.listenForEvents = function () {
            var a = this;
            return this.playRelay == null && (this.playRelay = function () {
                return a._hasPlayed = !0, a._ended = !1, a._waiting = 0, a.trigger("play")
            }), this.pauseRelay == null && (this.pauseRelay = function () {
                return a.fireTimeChangedEventsIfChanged(), a.trigger("pause")
            }), this.endRelay == null && (this.endRelay = function () {
                return a.fireTimeChangedEventsIfChanged(), a.trigger("end"), a.trigger("afterend")
            }), this.ratechangeRelay == null && (this.ratechangeRelay = function () {
                return a.trigger("ratechange", a.playbackRate())
            }), this.volumechangeRelay == null && (this.volumechangeRelay = function () {
                return a.trigger("volumechange", a.volume())
            }), this.waitingRelay == null && (this.waitingRelay = function () {
                return a.trigger("waiting")
            }), this.progressRelay == null && (this.progressRelay = function () {
                return a.trigger("progress")
            }), this.unbindVideoListeners(), this.info("listenForEvents"), b.elem.bind(this.videoElem, "pause", this.pauseRelay), b.elem.bind(this.videoElem, "playing", this.playRelay), b.elem.bind(this.videoElem, "ended", this.endRelay), b.elem.bind(this.videoElem, "volumechange", this.volumechangeRelay), b.elem.bind(this.videoElem, "ratechange", this.ratechangeRelay), b.elem.bind(this.videoElem, "waiting", this.waitingRelay), b.elem.bind(this.videoElem, "progress", this.progressRelay)
        }, d.prototype.unbindVideoListeners = function () {
            return this.info("unbindVideoListeners"), b.elem.unbind(this.videoElem, "pause", this.pauseRelay), b.elem.unbind(this.videoElem, "playing", this.playRelay), b.elem.unbind(this.videoElem, "ended", this.endRelay), b.elem.unbind(this.videoElem, "volumechange", this.volumechangeRelay), b.elem.unbind(this.videoElem, "ratechange", this.ratechangeRelay), b.elem.unbind(this.videoElem, "waiting", this.waitingRelay), b.elem.unbind(this.videoElem, "progress", this.progressRelay)
        }, d.prototype.unbindListeners = function () {
            return this.info("unbindListeners"), this.unbindVideoListeners(), b.elem.unbindAll(this.romulusElem), b.unbind("enter-fullscreen", this._onEnterFullscreen), b.unbind("cancel-fullscreen", this._onCancelFullscreen), b.elem.unbind(window, "resize", this._fullscreenResizeToWindow), b.elem.unbind(document, "mouseout", this._onMouseLeavesWindow), b.elem.unbind(document, "keydown", this._onKeyDown)
        }, d.prototype.pollForEvents = function () {
            var a = this;
            return this.info("pollForEvents"), b.eventLoop.add("" + this.uuid + ".events", this._eventLoopDuration, function () {
                var b;
                if (!a.looksDown()) {
                    b = a.state(), b === "playing" && b === a._lastState && a.time() === a._lastTimePosition && (a._waiting += 1, a.trigger("waiting")), b !== a._lastState && (a.trigger("statechange", b), a._lastState = b, b === "playing" ? a.playing(!0) : a.playing(!1)), a.fireTimeChangedEventsIfChanged();
                    if (b !== "ended" && a.mozillaAtEnd())return a.videoElem.pause(), a._ended = !0, a.trigger("end")
                }
            })
        }, d.prototype.mozillaAtEnd = function () {
            return b.detect.browser.mozilla && b.detect.windows && this._waiting >= 2 && Math.abs(this.time() - this.duration()) < 2
        }, d.prototype.fireTimeChangedEventsIfChanged = function () {
            var a;
            if ((a = this.time()) !== this._lastTimePosition && a > 0)return this._ended = !1, this._waiting = 0, this.trigger("timechange", a), Math.floor(a) !== Math.floor(this._lastTimePosition) && this.trigger("secondchange", Math.floor(a)), !this._beforePlay && !this._ended && Math.abs(a - this._lastTimePosition) > this._attrs.seekThreshold && this.trigger("seek", a, this._lastTimePosition), this._lastTimePosition = a
        }, d.prototype.setupCss = function () {
            return this.info("setupCss"), this.romulusStyle = b.css(this.romulusElem, "#" + this.chrome.id + ":fullscreen,\n#" + this.chrome.id + ":-webkit-full-screen,\n#" + this.chrome.id + ":-moz-full-screen {\nbackground:#000;\n}\n#" + this._embedContainer.id + " .wistia_romulus_control {\n  -webkit-font-smoothing: antialiased;\n  z-index: 1;\n}\n#" + this._embedContainer.id + " .wistia_romulus_hidden {\n  opacity: 0;\n  " + b.util.transitionCss(["opacity", "200ms"], ["width", "0s", "200ms"], ["height", "0s", "200ms"]) + "\n}\n#" + this._embedContainer.id + " .wistia_romulus_visible {\n  opacity: 1;\n  visibility: visible;\n  " + b.util.transitionCss(["opacity", "200ms"]) + "\n}\n#" + this._embedContainer.id + " .wistia_played {\n  " + b.util.transitionCss("width", "" + this._eventLoopDuration + "ms") + "\n}\n#" + this._embedContainer.id + " .wistia_playbar.wistia_dragging .wistia_played {\n  " + b.util.transitionCss("left", "0") + "\n}\n#" + this._embedContainer.id + " .wistia_scrub_bar {\n  " + b.util.transitionCss("left", "" + this._eventLoopDuration + "ms") + "\n}\n#" + this._embedContainer.id + " .wistia_playbar.wistia_dragging .wistia_scrub_bar {\n  " + b.util.transitionCss("left", "0") + "\n}\n#" + this._embedContainer.id + " .wistia_scrub_bar_top {\n  background: rgba(255, 255, 255, .33);\n  height: 4px;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 4px;\n}\n#" + this._embedContainer.id + " .wistia_scrub_bar_middle {\n  background: rgba(255, 255, 255, .66);\n  height: 24px;\n  left: 0;\n  position: absolute;\n  top: 4px;\n  width: 4px;\n}\n#" + this._embedContainer.id + " .wistia_scrub_bar_bottom {\n  background: rgba(255, 255, 255, .33);\n  height: 4px;\n  left: 0;\n  position: absolute;\n  top: 28px;\n  width: 4px;\n}\n#" + this._embedContainer.id + " .wistia_menu_item {\n  background: transparent;\n  color: #555;\n  font-family: Arial, Sans-Serif;\n  font-size: 14px;\n  font-weight: normal;\n  padding: 6px 16px;\n  transition: none;\n  -webkit-font-smoothing: antialiased;\n}\n#" + this._embedContainer.id + " .wistia_menu_item .wistia_bullet {\n  display: inline-block;\n  margin: -1px 7px 0 0;\n  vertical-align: top;\n}\n#" + this._embedContainer.id + " .wistia_menu_item.wistia_visible {\n  display: block;\n}\n#" + this._embedContainer.id + " .wistia_menu_item.wistia_hidden {\n  display: none;\n}\n#" + this._embedContainer.id + " .wistia_menu_item:hover {\n  background: #54bbff;\n  color: #fff;\n}\n#" + this._embedContainer.id + " .wistia_menu_item.wistia_disabled {\n  background: transparent;\n  color: #bbb;\n}\n#" + this._embedContainer.id + " .wistia_menu_item.wistia_title {\n  background: transparent;\n  color: #bbb;\n  font-size: 11px;\n  line-height: 1em;\n  padding-bottom: 3px;\n}\n#" + this._embedContainer.id + " .wistia_dont_animate {\n  -webkit-transition: none;\n  -moz-transition: none;\n  -o-transition: none;\n  -ms-transition: none;\n  transition: none;\n}\n#" + this.uuid + " {\n  -ms-object-fit: contain;\n  -o-object-fit: contain;\n  -moz-object-fit: contain;\n  -webkit-object-fit: contain;\n  object-fit: contain;\n}")
        }, d.prototype.fit = function () {
            var a = this;
            return d.__super__.fit.apply(this, arguments), this.embedded(function () {
                return a.correctForIntegers(), a.repositionControls(), a.still.fitStill(), a.bigPlayButton.reorient()
            })
        }, d.prototype.rangeBuffered = function () {
            var a, b, c, d, e, f;
            for (b = d = 0, e = this.videoElem.buffered.length; 0 <= e ? d < e : d > e; b = 0 <= e ? ++d : --d) {
                c = this.videoElem.buffered.start(b), a = this.videoElem.buffered.end(b);
                if (c <= (f = this.time()) && f < a)return [c, a]
            }
            return null
        }, d.prototype.timeBuffered = function () {
            var a;
            return a = this.rangeBuffered(), a ? a[1] - a[0] : 0
        }, d.prototype.totalBuffered = function () {
            var a;
            return b.Metrics.sumTimeRanges((a = this.videoElem) != null ? a.buffered : void 0)
        }, d.prototype.totalPlayed = function () {
            var a;
            return b.Metrics.sumTimeRanges((a = this.videoElem) != null ? a.played : void 0)
        }, d.prototype.togglePlay = function () {
            return this.info("togglePlay"), this.state() === "playing" ? this.pause() : this.play()
        }, d.prototype.requestFullscreen = function () {
            if (this.inFullscreen())return;
            return this.info("requestFullscreen"), this._widthBeforeFullscreen = this.width(), this._heightBeforeFullscreen = this.height(), b.elem.requestFullscreen(this.chrome)
        }, d.prototype.cancelFullscreen = function () {
            if (!this.inFullscreen())return;
            return this.info("cancelFullscreen"), b.elem.cancelFullscreen()
        }, d.prototype.inFullscreen = function () {
            return !!this._inFullscreen
        }, d.prototype.fixWebkitControlsBug = function () {
            if (b.detect.browser.webkit)return this.info("fixWebkitControlsBug"), this.videoElem.setAttribute("controls", "controls"), this.videoElem.removeAttribute("controls")
        }, d.prototype.stopStreaming = function () {
            var a, c, d, e;
            this.info("stopStreaming");
            try {
                return b.detect.trident ? (c = this.videoElem) != null && (c.src = ".mp4") : (d = this.videoElem) != null && (d.src = ""), (e = this.videoElem) != null ? e.load() : void 0
            } catch (f) {
                return a = f, this.notice(a)
            }
        }, d.prototype.cleanup = function () {
            return this.info("cleanup"), b.elem.unbind(document, "mouseout", this._onMouseLeavesWindow), b.elem.unbind(document, "keydown", this._onKeyDown), b.elem.unbind(window, "resize", this._fullscreenResizeToWindow), b.unbind("cancel-fullscreen", this._onCancelFullscreen), b.unbind("enter-fullscreen", this._onEnterFullscreen)
        }, d.prototype.resetToFirstFrame = function () {
            var a = this;
            return this.info("resetToFirstFrame"), this.commandQueueOpen(function () {
                return a._beforePlay = !0, a._ended = !1, a.resetControls()
            })
        }, d.prototype.fastTimeDiff = function (a) {
            return a < 30 ? 5 : a < 60 ? 10 : 10 + a / 60
        }, d.prototype.slowTimeDiff = function (a) {
            return a < 60 ? 2 : 10
        }, d.prototype.removeNonVideoElements = function () {
            var a, c, d, e;
            this.info("removeNonVideoElements"), e = this._allControls;
            for (c = 0, d = e.length; c < d; c++)a = e[c], a.remove();
            if (this.romulusStyle)return b.elem.remove(this.romulusStyle), this.romulusStyle = null
        }, d.prototype.initFrom = function (a) {
            var b, c, d, e;
            this.info("initFrom", a), c = "_cssBeforeFullscreen\n_heightBeforeFullscreen\n_inFullscreen\n_mouseover\n_widthBeforeFullscreen\nuuid\nwrapperElem".split(/[\s\n]+/);
            for (d = 0, e = c.length; d < e; d++)b = c[d], this[b] = a[b];
            return this.resetStateVariables(), a.unbindListeners(), a.removeNonVideoElements(), this.setupEmbed(), this.switchToAssetWithoutLoad(this._currentAsset, !0)
        }, d.prototype.setCurrentAsset = function () {
            return this._currentAsset = this.bestAsset(), this.data.asset = this._currentAsset, this.info("setCurrentAsset", this._currentAsset)
        }, d.prototype.switchToAsset = function (a, c) {
            var d, e, f = this;
            c == null && (c = !1), this.info("switchToAsset", a, c);
            if (!c && a.type === this._currentAsset.type)return;
            e = this.time(), d = this.state(), this._suppressTimechange = !0, b.elem.rebind(this.videoElem, "loadeddata", function () {
                return c ? (f.videoElem.style.visibility = "visible", f._suppressTimechange = !1) : e > 2 ? (f.time(e), f.commandQueueOpen.synchronize(function (b) {
                    return d === "playing" ? f.ready(function () {
                        return f.videoElem.play(), f._suppressTimechange = !1, f.videoElem.style.visibility = "visible", f.trigger("switched-to-asset", a.type), b()
                    }) : f.ready(function () {
                        return f.videoElem.pause(), f.videoElem.style.visibility = "visible", f._suppressTimechange = !1, f.trigger("switched-to-asset", a.type), b()
                    })
                })) : (d === "playing" && f.play(), f.videoElem.style.visibility = "visible", f._suppressTimechange = !1), f._playbackRate !== 1 && f.playbackRate(f._playbackRate), b.elem.unbind
            }), this.videoElem.style.visibility = "hidden", this.switchToAssetWithoutLoad(a, c), this.videoElem.load();
            if (d !== "beforeplay" && !this._opts.autoPlay)return this.videoElem.play()
        }, d.prototype.switchToAssetWithoutLoad = function (a, c) {
            c == null && (c = !1), this.info("switchToAssetWithoutLoad", a, c);
            if (!c && a.type === this._currentAsset.type)return;
            if (!b.elem.inDom(this.videoElem))return;
            return this._currentAsset = a, this.data.asset = a, this.videoElem.src = this.sourceElem.src = this.properAssetUrl(a.url), this.trigger("switched-to-asset-without-load", a.type)
        }, d.prototype.swapVideoAsset = function (a) {
            var c, d = this;
            if (a.url === this._currentAsset.url)return;
            if (!b.elem.inDom(this.videoElem))return;
            return b.detect.safari ? this.switchToAsset(a) : (this.clearVideoElems(), c = this.injectNewVideoElem(a), this.syncVideoElemWithCurrent(c, function () {
                return d.finishVideoElemSwap(c), d._currentAsset = a, d.data.asset = a, d.trigger("swapped-video-elem"), d.trigger("switched-to-asset", a)
            }))
        }, d.prototype.injectNewVideoElem = function (a) {
            var c, d, e;
            return c = b.seqId("wistia_", "_video_elem"), e = this.createVideoObject(c, a), d = b.elem.fromObject(e), b.elem.after(this.videoElem, d), b.elem.style(d, {
                left: "-100%",
                position: "absolute",
                top: 0
            }), this._videoElems == null && (this._videoElems = {}), this._videoElems[c] = d, d
        }, d.prototype.clearVideoElems = function () {
            var a, c, d, e;
            d = this._videoElems, e = [];
            for (c in d)a = d[c], b.elem.unbindAllInside(a), b.elem.remove(a), e.push(delete this._videoElems[a.id]);
            return e
        }, d.prototype.syncVideoElemWithCurrent = function (a, c) {
            var d = this;
            return b.elem.bind(a, "loadstart", function () {
                return b.timeout("" + d.uuid + ".delayed_video_elem_sync", function () {
                    var e;
                    return d.time() > 0 ? (a.volume = 0, a.playbackRate = d.playbackRate(), e = function (b) {
                        var c;
                        try {
                            return a.playbackRate = b
                        } catch (e) {
                            return c = e, d.error(c), d.unbind
                        }
                    }, d.bind("ratechange", e), b.elem.bind(a, "playing", function () {
                        return b.elem.bind(a, "seeked", function () {
                            return d.state() === "playing" ? a.play() : a.pause(), a.currentTime = d.time(), d.unbind("ratechange", e), typeof c == "function" && c(), b.elem.unbind
                        }), a.currentTime = d.time(), b.elem.unbind
                    }), a.play()) : typeof c == "function" ? c() : void 0
                }), b.elem.unbind
            })
        }, d.prototype.finishVideoElemSwap = function (a) {
            var c, d, e;
            return c = a.id, e = this.videoElem, d = this.sourceElem, this.unbindVideoListeners(), this.videoElem = a, this.videoElem.id = e.id, this.sourceElem = this.videoElem.childNodes[0], this.sourceElem.id = d.id, e.id = b.seqId("wistia_", "_defunct_video"), d.id = b.seqId("wistia_", "_defunct_source"), this.listenForEvents(), e.currentTime && (this.videoElem.currentTime = e.currentTime), this.videoElem.volume = e.volume, b.elem.style(e, {
                left: 0,
                position: "absolute",
                top: 0
            }), b.elem.style(this.videoElem, {
                left: 0,
                position: "relative"
            }), e.src = "", e.load(), b.elem.remove(e), delete this._videoElems[c]
        }, d.prototype.forceSwitchToAsset = function (a) {
            return this.info("forceSwitchToAsset", a), this._forceAsset = a, this.swapVideoAsset(a)
        }, d.prototype.supportsHd = function () {
            return this.hdAsset() ? this._supportsHd != null ? this._supportsHd : !0 : !1
        }, d.prototype.bestAsset = function () {
            return this._forceAsset ? this._forceAsset : this._opts.videoQuality === "sd-only" ? this.mdOrSdAsset() : this._opts.videoQuality === "hd-only" ? this.hdAsset() || this.mdAsset() || this.sdAsset() : this._opts.videoQuality === "md" ? this.mdAsset() || this.sdAsset() : this._opts.videoQuality === "low-fps" ? this.lowFpsAsset() || this.sdAsset() : this.chosenAsset() ? this.chosenAsset() : this.isScreencast() && this.screencastAsset() ? this.screencastAsset() : this.inFullscreen() ? this.supportsHd() ? this.hdAsset() || this.mdAsset() || this.sdAsset() : this.mdOrSdAsset() : this.mdOrSdAsset()
        }, d.prototype.chosenAsset = function () {
            var a, b, c, d;
            return /width:/.test(this._opts.videoQuality) ? (d = this._opts.videoQuality.match(/width:([a-z]*)(\d+)/i), c = d[0], a = d[1], b = d[2], /^\d+$/.test(b) ? (b = parseInt(b, 10), a === "" || a === "lte" ? this.mp4Asset({
                width: [0, b],
                sortBy: "width desc"
            }) || this.mp4Asset({width: [b, 1e4], sortBy: "width asc"}) : a === "gte" ? this.mp4Asset({
                width: [b, 1e4],
                sortBy: "width asc"
            }) || this.mp4Asset({width: [0, b], sortBy: "width desc"}) : null) : null) : null
        }, d.prototype.mdOrSdAsset = function () {
            return this._mdOrSdAsset || (this._mdOrSdAsset = this._opts.videoQuality === "sd-only" ? this.sdAsset() : this._opts.videoQuality === "md" || this._opts.videoFoam || this.videoWidth() >= 720 ? this.mdAsset() || this.sdAsset() : this.sdAsset())
        }, d.prototype.screencastAsset = function () {
            return this._screencastAsset || (this._screencastAsset = this.mp4Asset({
                    bitrate: [0, 1300],
                    sortBy: "width desc, bitrate asc",
                    width: [0, this.originalAsset().width]
                }))
        }, d.prototype.sdAsset = function () {
            return this._sdAsset || (this._sdAsset = this.iphoneAsset() || this.mp4Asset())
        }, d.prototype.mdAsset = function () {
            return this._mdAsset || (this._mdAsset = this.mp4Asset({
                    width: [720, 980],
                    sortBy: "width desc, bitrate desc"
                }))
        }, d.prototype.hdAsset = function () {
            return this._hdAsset || (this._hdAsset = this.mp4Asset({
                    width: [980, this._opts.maxHdWidth || 1300],
                    sortBy: "width desc, bitrate desc"
                }))
        }, d.prototype.lowFpsAsset = function () {
            return this._lowFpsAsset || (this._lowFpsAsset = this.mp4Asset({"public": !1}))
        }, d.prototype.stillUrl = function (a) {
            return a = b.obj.merge({playButton: !1}, a), d.__super__.stillUrl.call(this, a)
        }, d.prototype.bandwidthTest = function () {
            return this._bandwidthTest != null ? this._bandwidthTest : this._bandwidthTest = new b.BandwidthTest({
                timeoutLength: this._currentAsset.type === "iphone" ? 4e3 : 5e3,
                uuid: this.uuid,
                saveKey: "romulus.bandwidth"
            })
        }, d.prototype.doBandwidthTest = function () {
            var a, c, d, e, f = this;
            this.info("doBandwidthTest"), this._endBandwidthTestEarly == null && (this._endBandwidthTestEarly = function () {
                return f.info("_endBandwidthTestEarly"), f.bandwidthTest().endEarly(), b.Metrics.videoCount(f, "player/bandwidth_test/ended_early")
            }), e = ["seek", "pause", "end", "switched-to-asset-without-load"];
            for (c = 0, d = e.length; c < d; c++)a = e[c], this.rebind(a, this._endBandwidthTestEarly
            );
            return this._failBandwidthTestOnWaiting == null && (this._failBandwidthTestOnWaiting = function () {
                return f.info("_failBandwidthTestOnWaiting"), f.bandwidthTest().fail(), b.Metrics.videoCount(f, "player/bandwidth_test/failed"), f.unbind
            }), this.rebind("waiting", this._failBandwidthTestOnWaiting), this._endBandwidthTestOnTime = function () {
                var c, d, e;
                f.info("_endBandwidthTestOnTime"), f._supportsHd = f.bandwidthTest().supportsHd(), f._failBandwidthTestOnWaiting && f.unbind("waiting", f._failBandwidthTestOnWaiting);
                if (f._endBandwidthTestEarly) {
                    e = ["seek", "pause", "end", "switched-to-asset-without-load"];
                    for (c = 0, d = e.length; c < d; c++)a = e[c], f.unbind(a, f._endBandwidthTestEarly)
                }
                return b.Metrics.videoCount(f, "player/bandwidth_test/ended_on_time")
            }, this.bandwidthTest().bind("ended", this._endBandwidthTestOnTime), this.bandwidthTest().start()
        }, d.prototype.switchAllAssets = function (a, b) {
            var c;
            return b == null && (b = {}), this.info("switchAllAssets", a, b), this.still.img.src = this.stillUrl({playButton: !1}), c = this.bestAsset(), this.switchToAsset(c, !0)
        }, d.prototype.play = function () {
            var a = this;
            return this.suppressPlay() ? this : (this.info("play"), this.trigger("play-method-invoked"), this.ready(function () {
                return a.commandQueueOpen.synchronize(function (b) {
                    return a.trigger("play-initiated"), a.trigger("startplay"), a.mozillaAtEnd() ? (a.videoElem.currentTime = 0, a.videoElem.play()) : a.videoElem.play(), a.playing(function () {
                        return a.info("play: done"), b()
                    })
                })
            }), this)
        }, d.prototype.pause = function () {
            var a = this;
            return this.info("pause"), this.ready(function () {
                return a.commandQueueOpen.synchronize(function (b) {
                    return a.videoElem.pause(), a.info("pause: done"), b()
                })
            }), this
        }, d.prototype.time = function (a) {
            var b, c = this;
            return a != null ? (this.info("time", a), a = Math.max(0, Math.min(this.duration(), a)), this.ready(function () {
                return c.state() === "beforeplay" ? c.commandQueueOpen.synchronize(function (b) {
                    var d, e;
                    return c.state() === "beforeplay" ? (e = c.state(), c.info("time " + a + ": seek beforeplay"), d = c.volume(), c.playing(function () {
                        return c.info("time " + a + ": jump to time after playing"), c.videoElem.currentTime = a, e === "playing" ? c.info("time: " + a + ": play after seek") : (c.info("time: " + a + ": pause after seek"), c.videoElem.pause()), c.volume(d), c._sayWhenDoneSeeking(b), c.commandQueueOpen(function () {
                            return c.videoElem.style.visibility = "visible"
                        })
                    }), c.videoElem.style.visibility = "hidden", c.volume(0), c.info("time " + a + ": start stream by calling play"), c.trigger("startplay"), c.videoElem.play()) : (c.info("time " + a + ": set immediately after synchronize"), c.videoElem.currentTime = a, b())
                }) : (c.info("time " + a + ": set immediately"), c.commandQueueOpen(function () {
                    return c.videoElem.currentTime = a
                }))
            }), this) : ((b = this.videoElem) != null ? b.currentTime : void 0) || 0
        }, d.prototype._sayWhenDoneSeeking = function (a) {
            var c = this;
            return this.videoElem.seeking ? (this.info("waiting for seek"), b.elem.rebind(this.videoElem, "seeked", function () {
                return c.info("seeked"), a(), b.elem.unbind
            })) : (this.info("no wait for seek"), a())
        }, d.prototype.volume = function (a) {
            var b, c = this;
            return a != null ? (this.info("volume", a), a = Math.max(0, Math.min(1, a)), this.ready(function () {
                return c.commandQueueOpen(function () {
                    return c.videoElem.volume = a
                })
            }), this) : ((b = this.videoElem) != null ? b.volume : void 0) || 0
        }, d.prototype.trigger = function () {
            var a, b;
            b = arguments[0], a = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
            if (!/timechange|secondchange/.test(b) || !this._suppressTimechange)return d.__super__.trigger.apply(this, [b].concat(__slice.call(a)))
        }, d.prototype.state = function () {
            var a;
            try {
                return this._beforePlay ? "beforeplay" : this._ended ? "ended" : this.videoElem.ended ? "ended" : this.videoElem.paused ? "paused" : "playing"
            } catch (b) {
                return a = b, "unknown"
            }
        }, d.prototype.playerColor = function (a) {
            var c, d, e, f, g;
            if (a != null) {
                this.info("playerColor", a), d = this._attrs.playerColor, a = b.Video._sanePlayerColor(a), this._attrs.playerColor = (new b.Color(a)).toHex();
                if (this._allControls) {
                    g = this._allControls;
                    for (e = 0, f = g.length; e < f; e++)c = g[e], c.updateColor();
                    this.forceShowControls()
                }
                return d !== this._attrs.playerColor && this.trigger("playercolorchange", this._attrs.playerColor, d), this
            }
            return this._attrs.playerColor
        }, d.prototype.width = function (a, b) {
            var c = this;
            return b == null && (b = {}), a != null ? b.fullscreen || !this.inFullscreen() ? d.__super__.width.call(this, a, b) : (this.info("notFullscreen => width(" + a + ")"), this.notFullscreen(function () {
                return d.__super__.width.call(c, a, b)
            }), this) : d.__super__.width.apply(this, arguments)
        }, d.prototype.height = function (a, b) {
            var c = this;
            return b == null && (b = {}), a != null ? b.fullscreen || !this.inFullscreen() ? d.__super__.height.call(this, a, b) : (this.info("notFullscreen => height(" + a + ")"), this.notFullscreen(function () {
                return d.__super__.height.call(c, a, b)
            }), this) : d.__super__.height.apply(this, arguments)
        }, d.prototype.videoWidth = function (a, b) {
            var c = this;
            return b == null && (b = {}), a != null ? b.fullscreen || !this.inFullscreen() ? d.__super__.videoWidth.call(this, a, b) : (this.info("notFullscreen => videoWidth(" + a + ")"), this.notFullscreen(function () {
                return d.__super__.videoWidth.call(c, a, b)
            }), this) : d.__super__.videoWidth.apply(this, arguments)
        }, d.prototype.videoHeight = function (a, b) {
            var c = this;
            return b == null && (b = {}), a != null ? b.fullscreen || !this.inFullscreen() ? d.__super__.videoHeight.call(this, a, b) : (this.info("notFullscreen => videoHeight(" + a + ")"), this.notFullscreen(function () {
                return d.__super__.videoHeight.call(c, a, b)
            }), this) : d.__super__.videoHeight.apply(this, arguments)
        }, d.prototype.playbackRate = function (a) {
            return this.videoElem.playbackRate != null ? a != null ? (this.info("playbackRate", a), this.videoElem.playbackRate = a, this._eventLoopDuration = Math.max(50, Math.min(500, this._baseEventLoopDuration * a)), this._playbackRate = a, this.trigger("playbackRateChange", this._playbackRate), this) : this.videoElem.playbackRate : (this.info("playbackRate", a, "not supported"), d.__super__.playbackRate.call(this, a))
        }, d
    }(b.Video), b._onFullscreenChange == null && (b._onFullscreenChange = function () {
        return b.elem.fullscreenElement() ? b.trigger("enter-fullscreen", b.elem.fullscreenElement()) : b.trigger("cancel-fullscreen")
    }), b._initializers.initFullscreenTriggers = function () {
        return b.elem.rebind(document, "mozfullscreenchange", b._onFullscreenChange), b.elem.rebind(document, "webkitfullscreenchange", b._onFullscreenChange), b.elem.rebind(document, "MSFullscreenChange", b._onFullscreenChange), b.elem.rebind(document, "fullscreenchange", b._onFullscreenChange)
    }, b._destructors.destroyFullscreenTriggers = function () {
        return b.elem.unbind(document, "mozfullscreenchange", b._onFullscreenChange), b.elem.unbind(document, "webkitfullscreenchange", b._onFullscreenChange), b.elem.unbind(document, "MSFullscreenChange", b._onFullscreenChange), b.elem.unbind(document, "fullscreenchange", b._onFullscreenChange)
    }
})(Wistia), function (a) {
    return a.BandwidthTest = function () {
        function b(b) {
            this.opt = b, this.opt = a.obj.merge({
                minKbps: 2500,
                timeoutLength: 4e3,
                freshFor: 36e5
            }, this.opt), this.opt.uuid || (this.opt.uuid = a.seqId("bandwidth_test_"))
        }

        return b.prototype.start = function () {
            var b, c = this;
            return (b = this._testXhr) != null && b.abort(), this._testStart = (new Date).getTime(), this._testXhr = new XMLHttpRequest, this._testXhr.open("GET", this.testFileUrl(), !0), a.timeout("" + this.uuid + ".cancel_bandwidth_test", function () {
                return c.trigger("timeout"), c.fail()
            }, this.opt.timeoutLength), this._testDataLoaded = 0, this._onTestXhrProgress = function (a) {
                return c._testDataLoaded = a.loaded, c.trigger("progress", a)
            }, this._testXhr.addEventListener("progress", this._onTestXhrProgress), this._onTestXhrLoaded = function () {
                return c.succeed()
            }, this._testXhr.addEventListener("load", this._onTestXhrLoaded), this._testXhr.send(null), this.trigger("started")
        }, b.prototype.fail = function () {
            return this._sampleKbps(), this._supportsHd = !1, this.saveResult(), this.trigger("failed"), this.end()
        }, b.prototype.succeed = function () {
            return this._sampleKbps(), this._supportsHd = !0, this.saveResult(), this.trigger("succeeded"), this.end()
        }, b.prototype._sampleKbps = function () {
            return this._testEnd = (new Date).getTime(), this._testTime = (this._testEnd - this._testStart) / 1e3, this._kbps = this._testDataLoaded * 8 / 1e3 / this._testTime
        }, b.prototype.endEarly = function () {
            return this._supportsHd == null && this._testDataLoaded != null ? (this._sampleKbps(), this._supportsHd = this._testTime > 1 ? this._kbps >= this.opt.minKbps : !0, this.trigger("ended-early"), this.end()) : (this.end(), this.trigger("ended-early"))
        }, b.prototype.end = function () {
            var b, c, d;
            return this._onTestXhrLoaded && (b = this._testXhr) != null && b.removeEventListener("load", this._onTestXhrLoaded), this._onTestXhrProgress && (c = this._testXhr) != null && c.removeEventListener("progress", this._onTestXhrProgress), (d = this._testXhr) != null && d.abort(), this._testXhr = null, a.clearTimeouts("" + this.uuid + ".cancel_bandwidth_test"), this.trigger("ended")
        }, b.prototype.testFileUrl = function () {
            return this.opt.testFileUrl || "" + a.proto() + "//" + a.constant.embedHost + "/bandwidth_check.png?bust=20131016c"
        }, b.prototype.saveKey = function () {
            return this.opt.saveKey || "bandwidth_test"
        }, b.prototype.saveResult = function () {
            return a.localStorage(this.saveKey(), {
                updatedAt: (new Date).getTime(),
                supportsHd: this._supportsHd,
                clientKbps: this._kbps
            })
        }, b.prototype.savedResult = function () {
            return a.localStorage(this.saveKey())
        }, b.prototype.isFresh = function () {
            var a, b;
            return a = (new Date).getTime() - (((b = this.savedResult()) != null ? b.updatedAt : void 0) || 0), a < this.opt.freshFor
        }, b.prototype.supportsHd = function () {
            return this._supportsHd || !1
        }, b
    }(), a.mixin(a.BandwidthTest.prototype, a.bindable)
}(Wistia);
var __hasProp = {}.hasOwnProperty, __extends = function (a, b) {
    function d() {
        this.constructor = a
    }

    for (var c in b)__hasProp.call(b, c) && (a[c] = b[c]);
    return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a
};
(function (a) {
    var b;
    if (a.ExternalVideo)return;
    return a.ExternalVideo = function (c) {
        function d() {
            return b = d.__super__.constructor.apply(this, arguments), b
        }

        return __extends(d, c), d.prototype.playerType = "external", d.prototype.elem = function () {
            return document.getElementById(this.uuid)
        }, d.prototype.chromeElem = function () {
            return document.getElementById("" + this.uuid + "_external_player")
        }, d.prototype.createEmbedElem = function () {
            var b, c;
            return c = {
                id: "" + this.uuid + "_external_player",
                style: {
                    background: "transparent",
                    display: "block",
                    height: "100%",
                    position: "relative",
                    width: "100%"
                }
            }, b = {
                tagName: "a",
                href: this.sdAsset().url,
                id: this.uuid,
                target: "_parent",
                style: a.generate.relativeBlockCss(),
                alt: "Click to play video"
            }, c.childNodes = [b], a.elem.fromObject(c)
        }, d.prototype.stillUrl = function (b) {
            return b = a.obj.merge({playButton: !1}, b), d.__super__.stillUrl.call(this, b)
        }, d.prototype.embed = function () {
            var b, c, d = this;
            return this._currentAsset = this.sdAsset(), this.data.asset = this._currentAsset, this.placeEmbed(this.createEmbedElem()), this.elem().wistiaApi = this, this.bigPlayButton = (new a.Html5BigPlayButton(this)).initialize(), this.bigPlayButton.bpb.elem.style.pointerEvents = "none", this.bigPlayButton.bpb.backgroundElem.style.pointerEvents = "none", this.still = (new a.Html5Still(this)).initialize(), this._opts.stillUrl = (b = this.still.thumbnail) != null ? (c = b.img) != null ? c.getAttribute("src") : void 0 : void 0, this._opts.wmode !== "transparent" && this.still.loaded(function () {
                var b;
                return d.elem() && a.elem.prepend(d.elem(), d.still.elem), (b = d.chromeElem()) != null ? b.style.backgroundColor = "#000" : void 0
            }), a.elem.bind(this.elem(), "click", function () {
                return d.trigger("play"), a.timeout("" + d.uuid + ".fake_video_end", function () {
                    return d.trigger("end"), d.trigger("afterend")
                }, 500), !0
            }), this.embedded(!0), this.checkForReady()
        }, d.prototype.checkForReady = function () {
            var b, c = this;
            return this._checkDownState(), b = function () {
                return a.timeout("" + c.uuid + ".async_ready", function () {
                    return c._hasBeenReady = !0, c.ready(!0)
                })
            }, this._hasBeenReady ? b() : this.publicApi.up(b)
        }, d.prototype.fit = function () {
            var a = this;
            return d.__super__.fit.apply(this, arguments), this.embedded(function () {
                var b, c;
                return (b = a.still) != null && b.fitStill(), (c = a.bigPlayButton) != null ? c.reorient() : void 0
            })
        }, d.prototype.play = function () {
            return this
        }, d.prototype.time = function (a) {
            return a != null ? this : 0
        }, d.prototype.pause = function () {
            return this
        }, d.prototype.volume = function (a) {
            return a != null ? this : 1
        }, d.prototype.bestAsset = function () {
            return this.sdAsset()
        }, d.prototype.sdAsset = function () {
            return this.iphoneAsset() || this.mp4Asset()
        }, d.prototype.mdAsset = function () {
            return this.iphoneAsset() || this.mp4Asset()
        }, d.prototype.hdAsset = function () {
            return this.iphoneAsset() || this.mp4Asset()
        }, d.prototype.initFrom = function (b) {
            return a.elem.remove(b.wrapperElem), this.embed()
        }, d
    }(a.Video)
})(Wistia);
var __bind = function (a, b) {
    return function () {
        return a.apply(b, arguments)
    }
}, __slice = [].slice;
(function (a) {
    if (a.Popover)return;
    return a.Popover = function () {
        function b(b) {
            var c, d = this;
            this.video = b, this.fitVideo = __bind(this.fitVideo, this), this.show = __bind(this.show, this), this.showAndPlay = __bind(this.showAndPlay, this), this.hide = __bind(this.hide, this), this.fitOverlay = __bind(this.fitOverlay, this), this.fit = __bind(this.fit, this), this._onLeaveVideoOrCloseButton = __bind(this._onLeaveVideoOrCloseButton, this), this._onEnterVideoOrCloseButton = __bind(this._onEnterVideoOrCloseButton, this), this.unexpandPlayButtonOnMouseOut = __bind(this.unexpandPlayButtonOnMouseOut, this), this.unexpandPlayButtonImmediately = __bind(this.unexpandPlayButtonImmediately, this), this.unexpandPlayButton = __bind(this.unexpandPlayButton, this), this.expandPlayButton = __bind(this.expandPlayButton, this), this.setupThumbnailAfterMediaData = __bind(this.setupThumbnailAfterMediaData, this), this.click = __bind(this.click, this), this.info("init"), this.uuid = a.seqId(), this._embedContainer = this.video._embedContainer, a.elem.addClass(this._embedContainer, "wistia_popover_embed"), this._thumbContainer = a.elem.fromObject({
                id: "" + a.seqId() + ".thumb_container",
                style: {position: "relative"}
            }), this.video.container.style.display === "inline" && a.elem.style(this._thumbContainer, {display: "inline"}), a.elem.append(this.video.container, this._thumbContainer), c = this.video._gatherOptions(), this.info("opts", c), c.popoverContent === "thumbnail" || c.popoverContent == null ? this.video.hasData(this.setupThumbnailAfterMediaData) : (this.info("init with bare html", this.video._startingHtml), this._thumbContainer.innerHTML = this.video._startingHtml, a.elem.bind(this._thumbContainer, "click", this.click)), this.resizeToContainer(), this.createCloseButton(), this.hide(!0), this.setupBindings(), this.video.embedded(function () {
                if (d.video._opts.popoverShowOnLoad)return d.video._opts.autoPlay === !1 ? d.show() : d.showAndPlay()
            })
        }

        return b.prototype._log = function () {
            var b, c, d, e;
            return c = arguments[0], b = 2 <= arguments.length ? __slice.call(arguments, 1) : [], a[c].apply(a, ["popover", ((d = this.video) != null ? d.hashedId() : void 0) || "no hashedId", (e = this._thumbContainer) != null ? e.id : void 0].concat(__slice.call(b)))
        }, b.prototype.error = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["error"].concat(__slice.call(a)))
        }, b.prototype.warn = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["notice"].concat(__slice.call(a)))
        }, b.prototype.notice = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["notice"].concat(__slice.call(a)))
        }, b.prototype.info = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["info"].concat(__slice.call(a)))
        }, b.prototype.debug = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["debug"].concat(__slice.call(a)))
        }, b.prototype.log = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["log"].concat(__slice.call(a)))
        }, b.prototype.click = function (a) {
            return a.preventDefault(), this.showAndPlay()
        }, b.prototype.isMobile = function () {
            return a.detect.ipad || a.detect.iphone || a.detect.android
        }, b.prototype.setupThumbnailAfterMediaData = function () {
            var b;
            return this.info("setupThumbnailAfterMediaData"), this.thumbnail = new a.Thumbnail(this._thumbContainer, {
                tabbable: !0,
                fitStrategy: "cropfill",
                onActivate: this.showAndPlay,
                images: this.video._impl.thumbnailAssets(),
                bigPlayButton: a.util.notSetOrTrue(this.video._opts.playButton) ? (b = {
                    color: this.video.playerColor(),
                    tabbable: !0
                }, this.shouldAnimate() ? (b.autoHighlight = !1, a.util.notSetOrTrue(this.video._opts.popoverHoverDuration) ? b.bottomText = this.shortHumanDuration(this.video.duration()) : void 0, this.video._opts.popoverHoverName ? b.topText = this.video.name() : void 0) : void 0, b) : !1,
                onMouseover: this.shouldAnimate() ? this.expandPlayButton : null,
                onMouseout: this.shouldAnimate() ? this.unexpandPlayButtonOnMouseOut : null
            }), a.elem.style(this.thumbnail.elem, {cursor: "pointer"}), this.resizeToContainer(), this.monitor()
        }, b.prototype.shortHumanDuration = function (b) {
            var c, d, e, f, g;
            return e = a.TimeHelper.secondsToIso8601(b), g = e.split(":"), c = g[0], d = g[1], f = g[2], parseInt(c) === 0 && parseInt(d) === 0 ? "0:" + f : parseInt(c) === 0 ? "" + parseInt(d) + ":" + f : "" + parseInt(c) + ":" + d + ":" + f
        }, b.prototype.shouldAnimate = function () {
            return this.video._opts.popoverAnimateThumbnail === !0
        }, b.prototype.expandPlayButton = function () {
            var a, b;
            return (a = this.thumbnail) != null ? (b = a.bigPlayButton) != null ? b.cover() : void 0 : void 0
        }, b.prototype.unexpandPlayButton = function () {
            var a, b;
            return (a = this.thumbnail) != null ? (b = a.bigPlayButton) != null ? b.uncover() : void 0 : void 0
        }, b.prototype.unexpandPlayButtonImmediately = function () {
            var a, b;
            return (a = this.thumbnail) != null ? (b = a.bigPlayButton) != null ? b.uncoverImmediately() : void 0 : void 0
        }, b.prototype.unexpandPlayButtonOnMouseOut = function (b) {
            var c;
            c = a.elem.containsOffset(this.thumbnail.elem, b.pageX, b.pageY);
            if (!c)return this.unexpandPlayButton()
        }, b.prototype.fixedSizeTooBigForWindow = function () {
            return this.video._popoverSize().width + 160 > a.elem.width(window) || this.video._popoverSize().height + 160 > a.elem.height(window)
        }, b.prototype.isResponsive = function () {
            return !this.isFixedSize()
        }, b.prototype.isFixedSize = function () {
            return !!this.video._opts.popoverSize
        }, b.prototype.monitor = function () {
            var b = this;
            return this.info("monitor container size"), this._lastWidth = this.containerWidth(), this._lastHeight = this.containerHeight(), a.eventLoop.add("" + this.video.uuid + "_popover.watch_popover_thumb_elem", 300, function () {
                if (b._lastWidth !== b.containerWidth() || b._lastHeight !== b.containerHeight())return b.preventAnimation(), b.resizeToContainer(), b.allowAnimation(), b._lastWidth = b.containerWidth(), b._lastHeight = b.containerHeight()
            })
        }, b.prototype.resizeToContainer = function () {
            var b;
            return a.elem.style(this._thumbContainer, {
                height: "" + this.containerHeight() + "px",
                width: "" + this.containerWidth() + "px"
            }), (b = this.thumbnail) != null ? b.fit() : void 0
        }, b.prototype.containerWidth = function () {
            return a.elem.width(this.video.container)
        }, b.prototype.containerHeight = function () {
            return a.elem.height(this.video.container)
        }, b.prototype.setupBindings = function () {
            var b = this;
            return this.video.videoFoam() || a.elem.bind(window, "resize", this.fit), this.video.bind("widthchange", this.fit), this.video.bind("heightchange", this.fit), this._showIfHidden == null && (this._showIfHidden = function () {
                if (!b._visible)return b.show()
            }), this.video.bind("play", this._showIfHidden), a.elem.bind(this._embedContainer, "mouseover", this._onEnterVideoOrCloseButton), a.elem.bind(this._embedContainer, "mouseout", this._onLeaveVideoOrCloseButton), a.elem.bind(this._closeButton, "mouseover", this._onEnterVideoOrCloseButton), a.elem.bind(this._closeButton, "mouseout", this._onLeaveVideoOrCloseButton)
        }, b.prototype._onEnterVideoOrCloseButton = function (b) {
            var c;
            c = b.target || b.srcElement;
            if (a.elem.isInside(c, this._embedContainer) || a.elem.isInside(c, this._closeButton))return a.elem.style(this._closeButton, {opacity: .8})
        }, b.prototype._onLeaveVideoOrCloseButton = function (b) {
            var c;
            c = b.relatedTarget || b.toElement;
            if (a.elem.isInside(c, this._overlay))return a.elem.style(this._closeButton, {opacity: 0})
        }, b.prototype.unbindAll = function () {
            return a.elem.unbind(window, "resize", this.fit), this._overlay && this._hideOnClick && a.elem.unbind(this._overlay, "click", this._hideOnClick), this._hideOnEscape && a.elem.unbind(document, "keyup", this._hideOnEscape), this.video.unbind("widthchange", this.fit), this.video.unbind("heightchange", this.fit), this._showIfHidden && this.video.unbind("play", this._showIfHidden), a.elem.unbindAllInside(this._thumbContainer), a.elem.unbind(this._thumbContainer, "click", this.showAndPlay)
        }, b.prototype.remove = function () {
            var b;
            return (b = this.thumbnail) != null && b.destroy(), this.unbindAll(), a.eventLoop.remove("" + this.video.uuid + "_popover"), a.clearTimeouts("" + this.video.uuid + "_popover"), a.elem.remove(this._thumbContainer), a.elem.remove(this._overlay), a.elem.remove(this._closeButton), a.elem.remove(this._captionElem), this._thumbContainer = this._overlay = this._captionElem = this.thumbnail = null
        }, b.prototype.fit = function () {
            return this.fitOverlay(), this.fitVideo()
        }, b.prototype.bestOverlayHeight = function () {
            return Math.max(a.elem.height(document), a.elem.height(window))
        }, b.prototype.bestOverlayWidth = function () {
            return Math.max(a.elem.width(document), a.elem.width(window))
        }, b.prototype.createCloseButton = function () {
            var b = this;
            return this._closeButton = a.elem.fromObject({
                id: "" + this._embedContainer.id + "_popover_close_button",
                "class": "wistia_placebo_close_button",
                style: {
                    cursor: "pointer",
                    height: "34px",
                    left: 0,
                    opacity: 0,
                    position: "absolute",
                    top: 0,
                    width: "34px",
                    zIndex: 10002
                },
                childNodes: [{
                    tagName: "img",
                    src: this._closeButtonBase64(),
                    style: {height: "34px", verticalAlign: "top", width: "34px"}
                }]
            }), this._hideOnClickClose == null && (this._hideOnClickClose = function () {
                return b.hide()
            }), a.elem.rebind(this._closeButton, "click", this._hideOnClickClose), a.elem.append(document.body, this._closeButton)
        }, b.prototype._closeButtonBase64 = function () {
            return "data:image/gif;base64,R0lGODlhRABEAIABAP///////yH5BAEAAAEALAAAAABEAEQAAAKVjI+py+0Po5y02oszBPxyoGFfR41gWJlnpKJWu5muJzvw/NbLjefjruvRfgiecPg5GI/IzpLZfEKjyelMtbKisFoXltQVfcHhkkxaZtzQ6WIwwG4/42E03Rq/M+/6Xr9/RTTxVkc2aNiWqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGyvbUwAAOw=="
        }, b.prototype.createOverlay = function () {
            var b = this;
            return this.destroyOverlay(), this.info("createOverlay"), this._overlay = a.elem.fromObject({
                id: "" + this._embedContainer.id + "_overlay",
                "class": "wistia_popover_overlay",
                style: {
                    backgroundImage: "url(" + a.proto() + "//" + a.constant.embedHost + "/assets/images/blank.gif)",
                    height: "" + this.bestOverlayHeight() + "px",
                    left: 0,
                    opacity: 0,
                    position: "absolute",
                    top: 0,
                    width: "" + this.bestOverlayWidth() + "px",
                    zIndex: 1e4
                }
            }), a.detect.browser.msie && a.detect.browser.version < 9 ? a.elem.style(this._overlay, {filter: this._overlayColor().toIeGradient()}) : a.elem.style(this._overlay, {backgroundColor: this._overlayColor().toRgba()}), a.elem.append(document.body, this._overlay), this._blockClick = !0, this._hideOnClick == null && (this._hideOnClick = function () {
                b.info("hideOnClick", b._blockClick);
                if (!b._blockClick)return b.hide()
            }), a.elem.rebind(this._overlay, "click", this._hideOnClick), a.timeout("" + this.video.uuid + ".popover.allow_click", function () {
                return b._blockClick = !1
            }, 600)
        }, b.prototype._overlayColor = function () {
            var b, c;
            return b = a.Video._sanePlayerColor(this.video._opts.popoverOverlayColor || "000000"), c = this.video._opts.popoverOverlayOpacity != null ? this.video._opts.popoverOverlayOpacity : .5, (new a.Color(b)).alpha(c)
        }, b.prototype._playerColor = function () {
            return (new a.Color(this.video.playerColor())).alpha(.9)
        }, b.prototype.destroyOverlay = function () {
            return this.info("destroyOverlay"), a.elem.remove(this._overlay), this._overlay = null
        }, b.prototype.fitOverlay = function () {
            if (!this._visible)return;
            if (!this._overlay)return;
            return a.elem.style(this._overlay, {
                height: "" + this.bestOverlayHeight() + "px",
                width: "" + this.bestOverlayWidth() + "px"
            })
        }, b.prototype.hide = function (b) {
            var c, d, e, f = this;
            return b == null && (b = !1), this.info("hide"), this._visible = !1, a.elem.removeClass(document.body, "wistia_popover_mode"), a.detect.browser.msie && (a.detect.browser.version < 9 || a.detect.browser.quirks) && (b = !0), ((e = this.video._opts) != null ? e.popoverResume : void 0) && this.video.time() > 0 && this.video._saveState(), d = function () {
                return a.elem.style([f._embedContainer, f._closeButton], {
                    boxShadow: "",
                    left: "-99999px",
                    position: "absolute",
                    top: 0
                }), f.destroyOverlay(), f.destroyCaption(), f.allowScroll()
            }, this.video.pause(), a.timeout("" + this.uuid + ".delayed_rebuild", function () {
                var a;
                return (a = f.video._impl) != null && a.stopStreaming(), f.video.rebuild()
            }, 600), this.video.embedded(function () {
                f.video._pauseEventLoop();
                if (f.shouldAnimate())return f.unexpandPlayButtonImmediately()
            }), this.video.trigger("popoverhide"), b === !0 ? d() : (c = this.animateArgs(), c.push(d), this.animateClose.apply(this, c))
        }, b.prototype.animateClose = function (b, c, d) {
            var e = this;
            b == null && (b = !0), this.info("animateClose", b, c), this._overlay && (b || a.elem.style(this._overlay, {opacity: 0}), setTimeout(function () {
                return a.elem.animate(e._overlay, {opacity: 0})
            }, 1)), b || a.elem.style([this._embedContainer, this._closeButton], {opacity: 0}), setTimeout(function () {
                return a.elem.animate([e._embedContainer, e._closeButton], {
                    opacity: 0,
                    transform: e.transformProp(c)
                }, {callback: d})
            }, 1);
            if (this._captionElem)return b || a.elem.style(this._captionElem, {opacity: 0}), setTimeout(function () {
                return a.elem.animate(e._captionElem, {opacity: 0, transform: e.transformProp(c)})
            }, 1)
        }, b.prototype.showAndPlay = function () {
            return this.info("showAndPlay"), this.show(), this.video.play()
        }, b.prototype.transformProp = function (a) {
            return a === "up" ? "translate(0, " + Math.round(this.fullHeight() / 6) + "px)" : a === "down" ? "translate(0, " + -Math.round(this.fullHeight() / 6) + "px)" : a === "left" ? "translate(" + Math.round(this.fullWidth() / 6) + "px, 0)" : a === "right" ? "translate(" + -Math.round(this.fullWidth() / 6) + "px, 0)" : ""
        }, b.prototype.animateOpen = function (b, c) {
            var d = this;
            b == null && (b = !0), this.info("animateOpen", b, c), b || a.elem.style(this._overlay, {opacity: 1}), b || a.elem.style([this._embedContainer], {opacity: 1}), a.elem.style([this._embedContainer], {transform: this.transformProp(c)}), setTimeout(function () {
                return a.elem.animate([d._embedContainer], {
                    opacity: 1,
                    transform: "translate(0px, 0px)"
                }), a.elem.animate(d._overlay, {opacity: 1})
            }, 1);
            if (this._captionElem)return b || a.elem.style(this._captionElem, {opacity: 1}), a.elem.style(this._captionElem, {transform: this.transformProp(c)}), setTimeout(function () {
                return a.elem.animate(d._captionElem, {opacity: 1, transform: "translate(0px, 0px)"})
            }, 1)
        }, b.prototype.animateArgs = function () {
            return a.detect.browser.msie && (a.detect.browser.version < 9 || a.detect.browser.quirks) ? [!1, "none"] : this.video._opts.popoverAnimation === "fade" ? [!0, "none"] : this.video._opts.popoverAnimation === "slide" ? this.slideOrFadeBasedOnPlayerType() : this.video._opts.popoverAnimation === "none" ? [!1, "none"] : this.slideOrFadeBasedOnPlayerType()
        }, b.prototype.slideOrFadeBasedOnPlayerType = function () {
            return this.video.playerType === "flash" ? [!0, "none"] : [!0, "none"]
        }, b.prototype.show = function () {
            var b, c = this;
            return this.info("show"), this._visible = !0, a.elem.addClass(document.body, "wistia_popover_mode"), a.clearTimeouts("" + this.uuid + ".delayed_rebuild"), this.video._opts.popoverPreventScroll && this.preventScroll(), this.createOverlay(), this.applyVisibleStyles(), this.addCaption(), this.fitVideo(), this.animateOpen.apply(this, this.animateArgs()), this.setupVisibleBindings(), ((b = this.video._opts) != null ? b.popoverResume : void 0) && this.video.resume(), this.video.embedded(function () {
                return c.video._unpauseEventLoop()
            }), this.video.trigger("popovershow")
        }, b.prototype.preventScroll = function () {
            if (this._savedCss)return;
            return this._savedCss = {
                height: document.body.style.height || "",
                overflow: document.body.style.overflow || ""
            }, a.elem.style(document.body, {height: "100%", overflow: "hidden"})
        }, b.prototype.allowScroll = function () {
            if (!this._savedCss)return;
            return a.elem.style(document.body, {
                height: this._savedCss.height,
                overflow: this._savedCss.overflow
            }), this._savedCss = null
        }, b.prototype.setupVisibleBindings = function () {
            var b = this;
            return this._hideOnEscape == null && (this._hideOnEscape = function (c) {
                if (c.keyCode === 27)return b.info("hide on escape"), b.hide(), a.elem.unbind(document, "keyup", b._hideOnEscape)
            }), a.elem.rebind(document, "keyup", this._hideOnEscape)
        }, b.prototype.applyVisibleStyles = function () {
            var b, c, d, e, f, g, h;
            return d = this.video._opts.popoverBorderWidth || 0, b = (new a.Color(this.video._opts.popoverBorderColor || "#ffffff")).toHex(), c = this.video._opts.popoverBorderRadius || 0, f = this.video._opts.popoverBoxShadowBlur != null ? this.video._opts.popoverBoxShadowBlur : 50, h = this.video._opts.popoverBoxShadowSpread != null ? this.video._opts.popoverBoxShadowSpread : 20, g = this.video._opts.popoverBoxShadow != null ? this.video._opts.popoverBoxShadow : !0, e = g ? "0 0 " + f + "px " + h + "px rgba(0,0,0,.2)" : "", a.elem.style(this._embedContainer, {
                border: "" + d + "px solid #" + b,
                borderRadius: "" + c + "px",
                boxShadow: e,
                left: 0,
                opacity: 0,
                position: "absolute",
                top: 0,
                zIndex: 10001
            })
        }, b.prototype.addCaption = function () {
            if (!this.video._opts.popoverCaption && !this.video._opts.popoverCaptionContainer)return;
            this.destroyCaption(), this.info("addCaption"), this._captionElem = a.elem.fromObject({
                id: "" + this.video.uuid + "_popover_caption",
                style: {
                    color: "#ffffff",
                    fontFamily: "Verdana, Geneva, sans-serif",
                    fontSize: "14px",
                    left: 0,
                    opacity: 0,
                    position: "absolute",
                    top: 0,
                    width: 0,
                    zIndex: 10001
                }
            }), a.elem.append(document.body, this._captionElem);
            if (this.video._opts.popoverCaption)return this.info("build new caption with content", this.video._opts.popoverCaption), this._captionContainer ? this._captionContainer.style.display = "block" : this._captionContainer = a.elem.fromObject({
                innerHTML: this.video._opts.popoverCaption,
                style: {padding: "10px 0 0 0"}
            }), a.elem.append(this._captionElem, this._captionContainer);
            if (this.video._opts.popoverCaptionContainer)return this.info("use caption container", this.video._opts.popoverCaptionContainer), this._captionContainer ? this._captionContainer.style.display = "block" : this._captionContainer = document.getElementById(this.video._opts.popoverCaptionContainer), a.elem.style(this._captionContainer, {display: "block"}), a.elem.append(this._captionElem, this._captionContainer)
        }, b.prototype.destroyCaption = function () {
            return this.info("destroyCaption"), this._captionContainer && (a.elem.style(this._captionContainer, {display: "none"}), a.elem.append(document.body, this._captionContainer)), a.elem.remove(this._captionElem), this._captionElem = null
        }, b.prototype.fitCaption = function () {
            if (!this._captionElem)return;
            return a.elem.style(this._captionElem, {
                left: "" + parseInt(a.elem.style(this._embedContainer, "left"), 10) + "px",
                top: "" + (parseInt(a.elem.style(this._embedContainer, "top"), 10) + this.fullHeight()) + "px",
                width: "" + this.fullWidth() + "px"
            })
        }, b.prototype.height = function (b, c) {
            return c == null && (c = {}), b != null ? (this.preventAnimation(), a.elem.style(this.video.container, {height: "" + b + "px"}), c.constrain && a.elem.style(this.video.container, {width: "" + this.video.widthForHeight(b) + "px"}), this.resizeToContainer(), this.allowAnimation(), this) : a.elem.height(this.video.container)
        }, b.prototype.width = function (b, c) {
            return c == null && (c = {}), b != null ? (this.preventAnimation(), a.elem.style(this.video.container, {width: "" + b + "px"}), c.constrain && a.elem.style(this.video.container, {height: "" + this.video.heightForWidth(b) + "px"}), this.resizeToContainer(), this.allowAnimation(), this) : a.elem.width(this.video.container)
        }, b.prototype.preventAnimation = function () {
            return this._wistiaNoAnimateStyle == null && (this._wistiaNoAnimateStyle = a.css(this._thumbContainer, ".wistia_no_animate * {\ntransition: none !important;\n-mozilla-transition: none !important;\n-ms-transition: none !important;\n-o-transition: none !important;\n-webkit-transition: none !important;\n}")), a.elem.addClass(this._thumbContainer, "wistia_no_animate")
        }, b.prototype.allowAnimation = function () {
            return this._thumbContainer.offsetTop, a.elem.removeClass(this._thumbContainer, "wistia_no_animate")
        }, b.prototype.fullWidth = function () {
            return this.video.width() + (this.video._opts.popoverBorderWidth || 0) * 2
        }, b.prototype.fullHeight = function () {
            return this.video.height() + (this.video._opts.popoverBorderWidth || 0) * 2
        }, b.prototype.fitVideo = function () {
            var b;
            if (!this._visible)return;
            return b = this.bestVideoBoundingBox(), a.elem.style(this._embedContainer, {
                left: "" + b.left + "px",
                top: "" + b.top + "px"
            }), a.elem.style(this._closeButton, {left: "" + b.right + "px", top: "" + b.top + "px"}), this.fitCaption()
        }, b.prototype.bestVideoBoundingBox = function () {
            var b, c, d, e, f, g, h, i;
            return g = a.elem.width(window), f = a.elem.height(window), i = this.fullWidth(), c = this.fullHeight(), d = a.util.scrollLeft() + Math.round((g - i) / 2), h = a.util.scrollTop() + Math.round((f - c) / 2), e = d + i, b = h + c, {
                top: h,
                left: d,
                right: e,
                bottom: b,
                width: i,
                height: c
            }
        }, b
    }()
})(Wistia);
var __bind = function (a, b) {
    return function () {
        return a.apply(b, arguments)
    }
};
(function (a) {
    if (a.VideoTracker2)return;
    return a.VideoTracker2 = function () {
        function b(b) {
            var c = this;
            this.publicApi = b, this.onCameraPositionChange = __bind(this.onCameraPositionChange, this), this.resendAllFailedEvents = __bind(this.resendAllFailedEvents, this), this.retrySendingFailedEvent = __bind(this.retrySendingFailedEvent, this), this.eventQueue = [], this.clockStart = (new Date).getTime(), this.initializedOnce = !1, this.monitoring = !1, this.publicApi.hasData(function () {
                c.params = a.extend({transmitInterval: (c.publicApi._mediaData.trackingTransmitInterval || 10) * 1e3}, c.publicApi._opts), !!c.publicApi._attrs.shouldTrack
            }), this
        }

        return b.prototype.conversions = {
            "missing-conversion": 0,
            "pre-roll-email": 1,
            "post-roll-email": 2,
            "mid-roll-email": 3,
            "post-roll-click": 4,
            "mid-roll-click": 5,
            "non-video": 6
        }, b.prototype._getAccountKey = function () {
            return this.publicApi._opts.accountKey || this.publicApi._mediaData.accountKey
        }, b.prototype._data = function () {
            var b, c;
            return c = {
                account_key: this._getAccountKey(),
                session_id: this.visitorKey(),
                media_id: this.publicApi._mediaData.mediaKey,
                event_key: this.eventKey(),
                media_duration: parseFloat(this.publicApi._mediaData.duration),
                visitor_version: this._getVisitorVersion(),
                referrer: this.publicApi._attrs.pageUrl,
                event_details: this.eventQueue
            }, this.publicApi.email() && (c.email = this.publicApi.email()), this.publicApi._opts.anonymizeIp && (c.anonymizeIp = !0), b = this.publicApi.foreignData(), b && b["page_name"] != null && (b.page_name = b.page_name.replace(/'/g, '\\"'), c.foreignData = b), this.params.conversionType && (c.conversion_type = this.conversions[this.params.conversionType]), this.params.conversionData && (c.conversion_data = this.params.conversionData), a.JSON.stringify(c)
        }, b.prototype._secondsSinceTime = function (a) {
            return a ? Math.round(((new Date).getTime() - a) / 1e3) : null
        }, b.prototype.nullToNone = function (a) {
            return a === null ? "none" : a
        }, b.prototype.lastLoadForAccount = function () {
            return this.nullToNone(this._secondsSinceTime(Wistia.localStorage("accounts_loaded." + this._getAccountKey())))
        }, b.prototype.lastLoadForMedia = function () {
            return this.nullToNone(this._secondsSinceTime(Wistia.localStorage("medias_loaded." + this.publicApi.hashedId())))
        }, b.prototype.lastPlayForAccount = function () {
            return this.nullToNone(this._secondsSinceTime(Wistia.localStorage("accounts_played." + this._getAccountKey())))
        }, b.prototype.lastPlayForMedia = function () {
            return this.nullToNone(this._secondsSinceTime(Wistia.localStorage("medias_played." + this.publicApi.hashedId())))
        }, b.prototype.recordLoad = function () {
            return this.publicApi.info("recordLoad"), Wistia.localStorage("accounts_loaded." + this._getAccountKey(), (new Date).getTime()), Wistia.localStorage("medias_loaded." + this.publicApi.hashedId(), (new Date).getTime())
        }, b.prototype.recordPlay = function () {
            return this.publicApi.info("recordPlay"), Wistia.localStorage("accounts_played." + this._getAccountKey(), (new Date).getTime()), Wistia.localStorage("medias_played." + this.publicApi.hashedId(), (new Date).getTime())
        }, b.prototype.isValidKey = function (a) {
            return (a != null ? a.length : void 0) > 25 && /^[a-z0-9_\-\.]+$/i.test(a)
        }, b.prototype._saveVisitorVersion = function (a) {
            a == null && (a = 1);
            if (Wistia.localStorage("visitor_version") == null)return Wistia.localStorage("visitor_version", a)
        }, b.prototype._getVisitorVersion = function () {
            var a;
            return a = Wistia.localStorage("visitor_version"), a ? a : (this._saveVisitorVersion(0), 0)
        }, b.prototype.reset = function () {
            return this.stopMonitoring(), this.initializedOnce = !1, this._eventKey = null
        }, b.prototype.initialize = function () {
            return this.initializedOnce || (this.publicApi.info("video tracker initialize"), this._lastLoadForAccount = this.lastLoadForAccount(), this._lastLoadForMedia = this.lastLoadForMedia(), this._lastPlayForAccount = this.lastPlayForAccount(), this._lastPlayForMedia = this.lastPlayForMedia(), this._failedEventsQueue = [], this._retryTimer = null, this._retryInterval = 1e3, this.initializedOnce = !0, this.log("initialized"), this.recordLoad(), this.debounceTransmit()), this
        }, b.prototype.monitor = function () {
            var b = this;
            return this.publicApi.embedded(function () {
                return b.stopMonitoring(), b.publicApi.info("_tracker.monitor"), b.initialize(), b.onPlaybackRateChange == null && (b.onPlaybackRateChange = function (a) {
                    return b.log("playbackRateChange", null, a)
                }), b.onPlay == null && (b.onPlay = function () {
                    b.log("play"), b.recordPlay();
                    if (!b._played)return b._played = !0, b.debounceTransmit()
                }), b.onPause == null && (b.onPause = function () {
                    if (Math.abs(b.publicApi.duration() - b.publicApi.time()) > .3)return b.log("pause")
                }), b.onEnd == null && (b.onEnd = function () {
                    return b.log("end"), b.transmit()
                }), b.onSeek == null && (b.onSeek = function (a, c) {
                    if (Math.abs(c - a) >= 5)return b.log("seek")
                }), b.monitoring = !0, b.publicApi.rebind("play", b.onPlay), b.publicApi.rebind("pause", b.onPause), b.publicApi.rebind("end", b.onEnd), b.publicApi.rebind("seek", b.onSeek), b.publicApi.rebind("playbackRateChange", b.onPlaybackRateChange), b.monitorCameraPosition(), b.publicApi.state() === "playing" && b.onPlay(), a.timeout("" + b.publicApi.uuid + ".start_tracking_timeout", function () {
                    return b.publicApi.info("_tracker start tracking_loop"), a.eventLoop.add("" + b.publicApi.uuid + ".tracking_loop", b.params.transmitInterval, function () {
                        return b.publicApi.state() === "playing" && b.log("update"), b.transmit()
                    })
                }, Math.random() * b.params.transmitInterval + 1e3)
            })
        }, b.prototype.stopMonitoring = function () {
            this.publicApi.info("_tracker.stopMonitoring"), this.monitoring = !1, this.onPlay && this.publicApi.unbind("play", this.onPlay), this.onPause && this.publicApi.unbind("pause", this.onPause), this.onEnd && this.publicApi.unbind("end", this.onEnd);
            if (this.onSeek)return this.publicApi.unbind("seek", this.onSeek)
        }, b.prototype.distilleryUrl = function () {
            return this.publicApi._opts.distilleryUrl || this.publicApi._mediaData.distilleryUrl
        }, b.prototype.sendToDistillery = function (b) {
            var c, d = this;
            return c = 3e4, a.remote.script("" + this.distilleryUrl() + "?data=" + encodeURIComponent(b), null, c).loaded(function (a, c) {
                var e;
                if (a === "success")return d._retryInterval = 1e3, d.resendAllFailedEvents();
                if (c === "error")return d._failedEventsQueue.push(b), d._retryTimer && (clearTimeout(d._retryTimer), e = 6e4, d._retryInterval = Math.min(d._retryInterval * 2, e)), d._retryTimer = setTimeout(d.retrySendingFailedEvent, d._retryInterval)
            })
        }, b.prototype.retrySendingFailedEvent = function () {
            return this.sendToDistillery(this._failedEventsQueue.shift())
        }, b.prototype.resendAllFailedEvents = function () {
            var a, b, c, d, e, f, g, h, i = this;
            c = this._failedEventsQueue.length, clearTimeout(this._retryTimer);
            if (c > 0) {
                d = 350, h = this._failedEventsQueue, e = function (a, b) {
                    return setTimeout(function () {
                        return i.sendToDistillery(a)
                    }, d * b)
                };
                for (b = f = 0, g = h.length; f < g; b = ++f)a = h[b], e(a, b);
                return this._failedEventsQueue = []
            }
            return
        }, b.prototype.transmit = function (b) {
            var c = this;
            b == null && (b = {});
            if (!this.publicApi._attrs.shouldTrack)return;
            return a.visitorKey.ready(function () {
                var d, e;
                if (c.eventQueue.length > 0 || b.force)d = c._data(), c.publicApi.info("_tracker.transmit", d), c.publicApi.trigger("transmit-stats", d), c.sendToDistillery(a.base64.encode(d)), c.eventQueue = [];
                if (!a.visitorKey._reported) {
                    a.visitorKey._reported = !0, e = a.visitorKey.origin(), (e === "new" || e === "timeout") && a.Metrics.videoCount(c.publicApi, "player/visitor_key/new", 1, {
                        visitor_key: a.visitorKey.value(),
                        visitor_key_origin: e
                    }), e === "timeout" && a.Metrics.videoCount(c.publicApi, "player/visitor_key/shim_timeout", 1, {visitor_key: a.visitorKey.value()}), e === "suggested" && a.Metrics.videoCount(c.publicApi, "player/visitor_key/suggested", 1, {visitor_key: a.visitorKey.value()});
                    if (/-conflict$/.test(e))return a.Metrics.videoCount(c.publicApi, "player/visitor_key/conflict", 1, {visitor_key: a.visitorKey.value()})
                }
            })
        }, b.prototype.debounceTransmit = function () {
            var b = this;
            return a.timeout("" + this.publicApi.uuid + ".transmit_play_data", function () {
                return b.transmit()
            }, 350)
        }, b.prototype.log = function (a, b, c) {
            var d;
            if (!this.publicApi._attrs.shouldTrack)return;
            return this.publicApi.info("_tracker.log", a, b, c), a === "conversion" ? (this.params.conversionType = b, this.params.conversionData = c, this.transmit({force: !0})) : (d = {
                key: a,
                value: this.timeInVideo(),
                timeDelta: this.timeDelta()
            }, a === "initialized" ? (d.lastAccountInstance = this._lastLoadForAccount, d.lastMediaInstance = this._lastLoadForMedia) : a === "play" ? (d.lastAccountInstance = this._lastPlayForAccount, d.lastMediaInstance = this._lastPlayForMedia) : a === "playbackRateChange" ? d.value = c : a === "cameraPosition" && (d.value = c), this.publicApi.debug("_tracker.log", d), this.eventQueue.push(d))
        }, b.prototype.logConversionOpportunity = function (b) {
            var c;
            if (!this.publicApi._attrs.shouldTrack)return;
            return b.co_key != null ? (c = {
                key: "conversion",
                value: b,
                timeDelta: this.timeDelta()
            }, this.publicApi.info("_tracker.logConversionOpportunity", b), this.eventQueue.push(c)) : a.Metrics.videoCount(this.publicApi, "player/no-co-key", 1)
        }, b.prototype.logCaptionSelection = function (a) {
            var b;
            if (!this.publicApi._attrs.shouldTrack)return;
            if (!a.caption_key)return;
            return b = {
                key: "caption",
                value: a,
                timeDelta: this.timeDelta()
            }, this.publicApi.info("_tracker.logCaptionSelection", a), this.eventQueue.push(b)
        }, b.prototype.timeInVideo = function () {
            var a;
            return a = this.publicApi.time(), a == null && (this.publicApi.state() === "beforeplay" ? a = 0 : a = this.publicApi.duration()), a.toFixed(1)
        }, b.prototype.timeDelta = function () {
            return (new Date).getTime() - this.clockStart
        }, b.prototype.visitorKey = function () {
            return a.visitorKey.ready() ? a.visitorKey.value() : null
        }, b.prototype.eventKey = function () {
            return this.isValidKey(this._eventKey) ? this._eventKey : (this._eventKey = a.uniqId("v20150225_"), this._eventKey)
        }, b.prototype.monitorCameraPosition = function () {
            return this._lastPitch = 0, this._lastHeading = 0, this.publicApi.rebind("camera-position-change", this.onCameraPositionChange)
        }, b.prototype.onCameraPositionChange = function (a, b) {
            this._heading = a, this._pitch = b;
            if (this._cameraPauseTimeoutSet) {
                if (!this._insidePauseBoundary())return clearTimeout(this._cameraPauseTimeout), this._cameraPauseTimeoutSet = !1
            } else if (!this._insidePauseBoundary())return this._setPauseTimeout()
        }, b.prototype._setPauseTimeout = function () {
            var a = this;
            return this._startHeading = this._heading, this._startPitch = this._pitch, this._cameraPauseTimeoutSet = !0, this._cameraPauseTimeout = setTimeout(function () {
                var b;
                a._cameraPauseTimeoutSet = !1;
                if (a._insidePauseBoundary())return b = "" + a._heading.toFixed() + "," + a._pitch.toFixed(), a.log("cameraPosition", null, b)
            }, 100)
        }, b.prototype._insidePauseBoundary = function () {
            var a, b;
            return this._startHeading == null && (this._startHeading = 0), this._startPitch == null && (this._startPitch = 0), a = this._angularDistance(this._heading, this._startHeading), b = this._angularDistance(this._pitch, this._startPitch), a < 5 && b < 5
        }, b.prototype._angularDistance = function (a, b) {
            return Math.min(360 - Math.abs(a - b), Math.abs(a - b))
        }, b
    }()
})(Wistia), Wistia.extend({
    base64: {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function (a) {
            var b, c, d, e, f, g, h, i, j;
            i = 0, j = "";
            while (i < a.length)b = a.charCodeAt(i++), c = a.charCodeAt(i++), d = a.charCodeAt(i++), e = b >> 2, f = (b & 3) << 4 | c >> 4, g = (c & 15) << 2 | d >> 6, h = d & 63, isNaN(c) ? g = h = 64 : isNaN(d) && (h = 64), j = j + this._keyStr.charAt(e) + this._keyStr.charAt(f) + this._keyStr.charAt(g) + this._keyStr.charAt(h);
            return j
        }
    }
}), Wistia.extend({
    base64: {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        decode: function (a) {
            var b, c, d, e, f, g, h, i, j;
            i = 0, j = "", a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (i < a.length)e = this._keyStr.indexOf(a.charAt(i++)), f = this._keyStr.indexOf(a.charAt(i++)), g = this._keyStr.indexOf(a.charAt(i++)), h = this._keyStr.indexOf(a.charAt(i++)), b = e << 2 | f >> 4, c = (f & 15) << 4 | g >> 2, d = (g & 3) << 6 | h, j += String.fromCharCode(b), g !== 64 && (j += String.fromCharCode(c)), h !== 64 && (j += String.fromCharCode(d));
            return j
        }
    }
});
var __slice = [].slice;
(function (a) {
    if (a.remote)return;
    return a.constant = {
        appHost: "app.wistia.com",
        sslAppHost: "app.wistia.com",
        embedHost: "fast.wistia.com",
        sslEmbedHost: "fast.wistia.com",
        oembedHost: "get-embed.wistia.com",
        externalEmbedHost: "fast.wistia.net",
        externalSslEmbedHost: "fast.wistia.net",
        assetHost: "embed.wistia.com",
        assetSslHost: "embed-ssl.wistia.com",
        freeAssetHost: "embed.wistia.com",
        freeAssetSslHost: "embed-ssl.wistia.com",
        metricsHost: "pipedream.wistia.com"
    }, a.remote = {}, a.remote.assetUrlWithCorrectHost = function (b, c, d) {
        var e;
        return d == null && (d = a.url.proto()), e = a.url.parse(c), a.Video.isBakeryUrl(c) && (b.branding ? d === "https:" ? (e.host = a.constant.freeAssetSslHost, e.protocol = "https:") : (e.host = a.constant.freeAssetHost, e.protocol = "http:") : d === "https:" ? (e.host = a.constant.assetSslHost, e.protocol = "https:") : (e.host = a.constant.assetHost, e.protocol = "http:")), e.absolute()
    }, a.remote.embedHost = function (b) {
        return b == null && (b = window.location.protocol), b === "https:" ? a.constant.sslEmbedHost : a.constant.embedHost
    }, a.remote.externalEmbedHost = function (b) {
        return b == null && (b = window.location.protocol), b === "https:" ? a.constant.externalSslEmbedHost : a.constant.externalEmbedHost
    }, a.remote.appHost = function (b) {
        return b == null && (b = window.location.protocol), b === "https:" ? a.constant.sslAppHost : a.constant.appHost
    }, a.remote.assetHost = function (b) {
        return b == null && (b = window.location.protocol), b === "https:" ? a.constant.assetSslHost : a.constant.assetHost
    }, a.remote.script = function (b, c, d, e) {
        var f, g, h, i, j, k, l, m, n, o;
        return d == null && (d = 8e3), e == null && (e = {}), i = new a.StopGo, k = new a.StopGo, n = document.createElement("script"), n.src = b, n.async = !0, n.type = "text/javascript", o = n.id = e.id || a.seqId(), g = null, h = !1, f = function () {
            return clearTimeout(g), clearTimeout(j), g = setTimeout(function () {
                var a;
                if (a = document.getElementById(o))return a.parentNode.removeChild(a), a.onreadystatechange = n.onload = n.onerror = null
            }, 500)
        }, l = function (a) {
            return a == null && (a = "error"), function (b) {
                return h = !0, typeof c == "function" && c(), i(!0, "failed", a), f(), k.go()
            }
        }, m = function () {
            var a;
            a = n.readyState, !h && (!a || /loaded|complete/.test(a)) && (h = !0, typeof c == "function" && c(), i(!0, "success"), f())
        }, j = setTimeout(l("timeout"), d), n.onerror = l(), n.onreadystatechange = n.onload = m, a.elem.append(document.body || document.head, n), {
            loaded: i,
            error: function () {
                return k
            }
        }
    }, a.remote.scripts = function () {
        var b, c, d, e, f, g, h, i, j, k, l, m;
        h = 1 <= arguments.length ? __slice.call(arguments, 0) : [], h[0] instanceof Array && (c = h[1], h = h[0], c && (h = h.concat(c))), h[h.length - 1] === "require" ? (e = a.remote.requireScript, h = h.slice(0, -1)) : e = a.remote.script, h = this.scriptInputsToHash(h), f = [], b = [], j = function (b, c, d) {
            var g;
            return (g = a.StopGo).when.apply(g, f).run(function () {
                var a, f;
                if (b.fn)return f = function () {
                    var a;
                    try {
                        return b.fn()
                    } catch (e) {
                        return a = e, typeof console != "undefined" && console !== null && console.log(a.message), typeof console != "undefined" && console !== null ? console.log(a.stack) : void 0
                    } finally {
                        c.go(), d.go()
                    }
                }, b.async ? setTimeout(f, 1) : f();
                if (b.src)return a = function () {
                    return e(b.src).loaded(function (a) {
                        return d.go(), c.go()
                    })
                }, b.async ? (setTimeout(a, 1), c.go()) : setTimeout(a, 1)
            })
        };
        for (k = 0, l = h.length; k < l; k++)g = h[k], d = new a.StopGo, i = new a.StopGo, j(g, d, i), f.push(d), b.push(i);
        return {loaded: (m = a.StopGo).when.apply(m, b)}
    }, a.remote.require = function () {
        var b, c, d;
        return c = 1 <= arguments.length ? __slice.call(arguments, 0) : [], b = (d = a.remote).scripts.apply(d, __slice.call(c).concat(["require"])), b.wait = function (c) {
            return b.loaded(c), {
                require: function () {
                    var c;
                    return c = 1 <= arguments.length ? __slice.call(arguments, 0) : [], b.loaded(function () {
                        var b;
                        return (b = a.remote).require.apply(b, c)
                    })
                }
            }
        }
    }, a.remote.scriptInputsToHash = function (b) {
        var c, d, e, f;
        f = [];
        for (d = 0, e = b.length; d < e; d++)c = b[d], typeof c == "string" ? f.push({
            src: c,
            async: !1
        }) : a.obj.isObject(c) ? f.push(c) : f.push({fn: c, async: !1});
        return f
    }, a.remote.ajaxDefaults = {
        type: "GET",
        contentType: "",
        headers: void 0,
        data: void 0,
        dataType: void 0,
        timeout: 0,
        success: void 0,
        error: void 0,
        complete: void 0
    }, a.remote.get = function (b, c) {
        return a.remote.ajax(b, a.obj.merge({}, c, {type: "GET", data: void 0}))
    }, a.remote.head = function (b, c) {
        return a.remote.ajax(b, a.obj.merge({}, c, {type: "HEAD", data: void 0}))
    }, a.remote.post = function (b, c) {
        return a.remote.ajax(b, a.obj.merge({}, {contentType: "application/x-www-form-urlencoded"}, c, {type: "POST"}))
    }, a.remote.ajax = function (b, c) {
        var d, e, f, g, h, i, j, k, l, m, n, o, p;
        j = a.obj.merge({}, a.remote.ajaxDefaults, c), k = a.url.parse(b), k.protocol || (k.protocol = window.location.protocol || "http:"), m = k.absolute(), k = void 0, n = this._createXMLHTTPObject(m);
        if (!n) {
            j.error.call(null, n, "error", "Could not create XMLHttpRequest"), j.complete.call(null, n, "error");
            return
        }
        g = window.XDomainRequest != null && n instanceof window.XDomainRequest, p = !1, o = !1, e = function (a, b, c) {
            var d;
            return p || (d = j.error) != null && d.call(null, a, b, c), p = !0
        }, l = function (a, b, c) {
            var d;
            return p || (d = j.success) != null && d.call(null, a, b, c), p = !0
        }, d = function (a, b) {
            var c;
            return o || (c = j.complete) != null && c.call(null, a, b), a.onerror = a.ontimeout = a[g ? "onload" : "onreadystatechange"] = null, o = !0
        }, n.open(j.type, m, !0), i = function () {
            var b, c;
            if (n.status != null && n.status >= 200 && n.status < 300 || n.status === 304)if (j.dataType === "json" && typeof n.response != "object")try {
                c = a.JSON.parse(n.responseText), l(c, n.statusText, n)
            } catch (f) {
                b = f, e(n, "parseerror", b)
            } else l(n.response || n.responseText, n.statusText, n); else e(n, "error", n.statusText);
            return d(n, n.statusText)
        }, h = function (a, b) {
            return e(n, a, b), d(n, a)
        }, j.timeout && (n.timeout = j.timeout), j.dataType != null && (n.responseType = j.dataType), j.contentType && typeof n.setRequestHeader == "function" && n.setRequestHeader("Content-Type", j.contentType);
        for (f in j.headers)typeof n.setRequestHeader == "function" && n.setRequestHeader(f, j.headers[f]);
        if (g) {
            if (j.headers != null)return h("error", "custom headers disallowed for XDomainRequest");
            n.onload = function () {
                return n.status = 200, n.statusText = "OK", i()
            }, n.onerror = function () {
                return h("error", "error")
            }, n.ontimeout = function () {
                return h("timeout", "timeout")
            }
        } else n.onreadystatechange = function () {
            if (n.readyState === 4)return i()
        }, n.onerror = function () {
            return h("error", "error")
        }, n.ontimeout = function () {
            return h("timeout", "timeout")
        };
        return n.send(j.data), n
    }, a.remote._XMLHttpFactories = [function () {
        var b, c;
        return b = c = void 0, function (d) {
            var e, f;
            if (window.XDomainRequest == null)return;
            return b == null && (b = window.location.href), c == null && (c = a.url.parse(b.toLowerCase()) || {}), f = a.url.parse(d.toLowerCase()) || {}, e = !1, e || (e = c.protocol !== f.protocol), e || (e = c.host !== f.host), e ? new window.XDomainRequest : null
        }
    }(), function () {
        return new XMLHttpRequest
    }, function () {
        return new ActiveXObject("Microsoft.XMLHTTP")
    }], a.remote._createXMLHTTPObject = function (a) {
        var b, c, d, e, f, g;
        d = void 0, g = this._XMLHttpFactories;
        for (e = 0, f = g.length; e < f; e++) {
            c = g[e];
            try {
                d = c(a)
            } catch (h) {
                b = h;
                continue
            }
            if (!!d)break
        }
        return d
    }, a.remote.media = function (b, c) {
        var d, e;
        return a.mediaFromCache(b) ? (a.info("W.remote.media", b, "from local cache"), d = "remote-media." + b + "." + a.seqId(), a.timeout(d, function () {
            return c(a.mediaFromCache(b))
        }), d) : (a.info("W.remote.media", b, "fetching"), e = "" + (location.protocol === "https:" ? "https:" : "http:") + "//" + a.constant.embedHost + "/embed/medias/" + b + ".json", a.remote.fetch(e, {}, function (d) {
            d.error ? (a.info("W.remote.media", b, "error", d), a.cacheMedia(b, d), c(d)) : (a.cacheMedia(b, d.media), a.info("W.remote.media", b, "responded", d.media), c(d.media))
        }, {
            onerror: function () {
                window.console && console.log("Timed out fetching " + e)
            }, timeout: 1e4
        }))
    }, a.cacheMedia = function (b, c) {
        return a.data(["remote-media", b], c)
    }, a.uncacheMedia = function (b, c) {
        return a.removeData(["remote-media", b])
    }, a.mediaFromCache = function (b) {
        return a.data(["remote-media", b])
    }, a.remote.playlist = function (b, c) {
        var d;
        a.data(["remote-playlist", b]) ? a.timeout("remote-playlist." + b + "." + a.seqId(), function () {
            return c(a.data(["remote-playlist", b]))
        }) : (d = "" + (location.protocol === "https:" ? "https:" : "http:") + "//" + a.constant.embedHost + "/embed/playlists/" + b + ".json", a.remote.fetch(d, {}, function (d) {
            a.data(["remote-playlist", b], d), c(d)
        }, {
            onerror: function () {
                window.console && console.log("Timed out fetching " + d)
            }, timeout: 1e4
        }))
    }, a.remote.fetch = function (b, c, d, e) {
        var f;
        e == null && (e = {}), e.timeout || (e.timeout = 5e3), e.onerror || (e.onerror = function () {
        }), f = setTimeout(e.onerror, e.timeout), a.jsonp.get(b, c, function (a) {
            clearTimeout(f), d && d(a)
        })
    }
})(Wistia), Wistia.jsonp || (Wistia.jsonp = function () {
    function f(a) {
        var c = document.createElement("script"), d = !1;
        c.src = a, c.async = !0, c.onload = c.onreadystatechange = function () {
            !d && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") && (d = !0, c.onload = c.onreadystatechange = null, c && c.parentNode && c.parentNode.removeChild(c))
        }, b || (b = document.getElementsByTagName("head")[0]), b.appendChild(c)
    }

    function g(b, g, h) {
        c = "?", g = g || {};
        for (d in g)g.hasOwnProperty(d) && (c += encodeURIComponent(d) + "=" + encodeURIComponent(g[d]) + "&");
        var i = "wistiajson" + ++a;
        return e[i] = function (a) {
            h(a);
            try {
                delete e[i]
            } catch (b) {
            }
            e[i] = null
        }, f(b + c + "callback=" + i), i
    }

    var a = 0, b, c, d, e = this;
    return {get: g}
}());
var __slice = [].slice;
(function (a) {
    return a.Metrics || (a.Metrics = {
            videoCount: function (a, b, c, d) {
                return c == null && (c = 1), this.videoSend(a, "count", b, c, d)
            }, videoSample: function (a, b, c, d) {
                return this.videoSend(a, "sample", b, c, d)
            }, videoSend: function (b, c, d, e, f) {
                var g = this;
                return f == null && (f = {}), typeof b.hasData == "function" ? b.hasData(function () {
                    var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v;
                    h = (typeof b.bandwidthTest == "function" ? b.bandwidthTest().savedResult() : void 0) || {}, f = a.obj.merge({
                        location: (typeof location != "undefined" && location !== null ? (i = location.protocol) != null ? i.length : void 0 : void 0) && (typeof location != "undefined" && location !== null ? (j = location.hostname) != null ? j.length : void 0 : void 0) ? "" + location.protocol + "//" + location.hostname : null,
                        agent: navigator.userAgent,
                        account_key: (o = b._mediaData) != null ? o.accountKey : void 0,
                        at: b.time(),
                        video_id: b.hashedId(),
                        embed_type: b.playerType,
                        duration: b.duration(),
                        client_kbps: h.clientKbps,
                        supports_hd: h.supportsHd,
                        autoplay: (p = b._opts) != null ? !!p.autoPlay : !!void 0,
                        in_iframe: top !== self,
                        device_pixel_ratio: window.devicePixelRatio,
                        window_width: a.elem.width(window),
                        window_height: a.elem.height(window),
                        video_width: b.videoWidth(),
                        video_height: b.videoHeight(),
                        visitor_key: (q = b._tracker) != null ? q.visitorKey() : void 0,
                        event_key: (r = b._tracker) != null ? r.eventKey() : void 0,
                        event_time_delta: (s = b._tracker) != null ? s.timeDelta() : void 0,
                        connection_type: g.connectionType(),
                        version: 5,
                        channel: a.channelName
                    }, f), /romulus|html5/.test(b.playerType) && (a.detect.trident ? f.errorState = (t = b.elem()) != null ? (u = t.error) != null ? u.code : void 0 : void 0 : f.errorState = (v = b.elem()) != null ? v.error : void 0), b._cacheStatus != null && (f.cache_status = b._cacheStatus), b._assetServer != null && (f.asset_server = b._assetServer), b._cacheHit != null && (f.cache_hit = b._cacheHit), b.inFullscreen && (f.in_fullscreen = b.inFullscreen());
                    if ((k = b.data) != null ? k.asset : void 0)f.asset_type = b.data.asset.type;
                    if ((l = b.data) != null ? l.asset : void 0)f.asset_slug = b.data.asset.slug;
                    return ((m = b.videoElem) != null ? (n = m.buffered) != null ? n.length : void 0 : void 0) > 0 && (f.bufferedFrom0 = b.videoElem.buffered.end(0)), b._timeToFirstByte != null && (f.time_to_first_byte = b._timeToFirstByte), g.send(c, d, e, f)
                }) : void 0
            }, count: function (a, b, c) {
                return b == null && (b = 1), this.send("count", a, b, c)
            }, sample: function (a, b, c) {
                return this.send("sample", a, b, c)
            }, send: function (b, c, d, e) {
                var f, g, h, i, j = this;
                e == null && (e = {});
                try {
                    return (i = this._private).toMput == null && (i.toMput = []), g = a.obj.merge({
                        type: b,
                        key: c,
                        value: d != null ? d : null
                    }, e), h = a.JSON.stringify(g), a.info("send metrics", h), this._private.toMput.push(h), a.timeout("metrics.debounce", function () {
                        return j.msend.apply(j, j._private.toMput), j._private.toMput = []
                    }, 500)
                } catch (k) {
                    return f = k, typeof f == "string" ? typeof console != "undefined" && console !== null ? console.log(f) : void 0 : (typeof console != "undefined" && console !== null && console.log(f.message), typeof console != "undefined" && console !== null ? console.log(f.stack) : void 0)
                }
            }, msend: function () {
                var b, c;
                return b = 1 <= arguments.length ? __slice.call(arguments, 0) : [], c = "//" + a.constant.metricsHost + "/mput?topic=metrics", a.remote.post(c, {data: b.join("\n")})
            }, countEvent: function (a, b, c) {
                var d;
                return c || (c = b), (d = this._private.countEventCallbacks)[c] == null && (d[c] = this._private.mkCountEventCallback(b, c)), a.rebind(b, this._private.countEventCallbacks[c])
            }, countEventOnce: function (a, b, c) {
                var d;
                return c || (c = b), (d = this._private.countEventOnceCallbacks)[c] == null && (d[c] = this._private.mkCountEventOnceCallback(b, c)), a.rebind(b, this._private.countEventOnceCallbacks[c])
            }, sampleEvent: function (a, b, c) {
                var d;
                return c || (c = b), (d = this._private.sampleEventCallbacks)[c] == null && (d[c] = this._private.mkSampleEventCallback(b, c)), a.rebind(b, this._private.sampleEventCallbacks[c])
            }, countShowLoadingOnce: function (a) {
                var b = this;
                return a.rebind("waiting", this._private.deriveWaitingEvents), a.bind("show-loading", function (c, d) {
                    return b.videoCount(a, "player/show-loading/first", 1, {buffered: c, played: d}), a.unbind
                })
            }, countShowLoadingAll: function (a) {
                var b = this;
                return a.rebind("waiting", this._private.deriveWaitingEvents), a.bind("show-loading", function (c, d) {
                    return b.videoCount(a, "player/show-loading/all", 1, {buffered: c, played: d})
                })
            }, countShowLoadingLongTimeOnce: function (a) {
                var b = this;
                return a.rebind("waiting", this._private.deriveWaitingEvents), a.bind("show-loading-long-time", function (c, d) {
                    return b.videoCount(a, "player/show-loading-long-time/first", 1, {buffered: c, played: d}), a.unbind
                })
            }, countShowLoadingLongTimeAll: function (a) {
                var b = this;
                return a.rebind("waiting", this._private.deriveWaitingEvents), a.bind("show-loading-long-time", function (c, d) {
                    return b.videoCount(a, "player/show-loading-long-time/all", 1, {buffered: c, played: d})
                })
            }, sampleBufferingWaitDurationOnce: function (a) {
                var b = this;
                return a.rebind("waiting", this._private.deriveWaitingEvents), a.bind("buffering-wait-duration", function (c, d, e) {
                    return b.videoSample(a, "player/buffering-wait-duration/first", c, {
                        buffered: d,
                        played: e
                    }), a.unbind
                })
            }, sampleBufferingWaitDurationAll: function (a) {
                var b = this;
                return a.rebind("waiting", this._private.deriveWaitingEvents), a.bind("buffering-wait-duration", function (c, d, e) {
                    return b.videoSample(a, "player/buffering-wait-duration/all", c, {buffered: d, played: e})
                })
            }, sampleTimeFromPlayToTimechangeAll: function (a) {
                var b, c = this;
                return b = null, a.bind("play", function () {
                    return b = (new Date).getTime(), a.unbind
                }), a.bind("timechange", function (d) {
                    var e;
                    if (!(d > 2))return b ? (e = ((new Date).getTime() - b) / 1e3, c.videoSample(a, "player/play-to-timechange/all", e)) : c.videoCount(a, "player/timechange-before-play/all")
                })
            }, sampleInitialWaitDuration: function (b, c) {
                var d, e, f, g, h, i = this;
                return c == null && (c = 2e3), e = null, d = !1, h = "" + b.uuid + ".initial-wait-heartbeat", f = function (a) {
                    var c, d, f;
                    if (e) {
                        f = ((new Date).getTime() - e) / 1e3;
                        if (f > 900)return;
                        return c = b.totalBuffered != null ? b.totalBuffered() : null, d = b.totalPlayed != null ? b.totalPlayed() : null, i.videoSample(b, a, f, {
                            buffered: c,
                            played: d
                        })
                    }
                }, g = function () {
                    if (!d)return f("player/initial-wait-heartbeat"), a.timeout(h, g, c)
                }, b.bind("play-method-invoked", function () {
                    return i.videoCount(b, "player/play-method-invoked"), b.unbind
                }), b.bind("play-initiated", function () {
                    var d;
                    return e = (new Date).getTime(), d = b.totalBuffered != null ? b.totalBuffered() : null, i.videoCount(b, "player/play-initiated", 1, {buffered: d}), a.timeout(h, g, c), b.unbind
                }), b.bind("play", function () {
                    return d = !0, a.clearTimeouts(h), f("player/initial-wait"), b.unbind
                })
            }, assetBuckets: function (b) {
                var c, d, e;
                c = b._currentAsset, e = a.detect.iphone || a.detect.android || a.detect.blackberry || /mobile/i.test(navigator.userAgent);
                if (!c) {
                    try {
                        throw new Error("blah")
                    } catch (f) {
                        d = f, typeof console != "undefined" && console !== null && console.log(d.stack)
                    }
                    return []
                }
                return e ? a.detect.iphone ? ["mobile", "iphone"] : a.detect.android ? ["mobile", "android"] : ["mobile"] : /md/.test(c.type) ? ["md"] : /hd/.test(c.type) ? ["hd"] : ["sd"]
            }, connectionType: function () {
                var a;
                return a = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection, a != null ? a.type : void 0
            }, sumTimeRanges: function (a) {
                var b, c, d, e;
                if (a == null)return null;
                c = 0;
                for (b = d = 0, e = a.length; 0 <= e ? d < e : d > e; b = 0 <= e ? ++d : --d)c += a.end(b) - a.start(b);
                return c
            }, _private: {
                countEventCallbacks: {}, mkCountEventCallback: function (b, c) {
                    return function (d) {
                        return c || (c = b), a.Metrics.videoCount(this, "player/" + c, d)
                    }
                }, countEventOnceCallbacks: {}, mkCountEventOnceCallback: function (b, c) {
                    return function (d) {
                        return c || (c = b), a.Metrics.videoCount(this, "player/" + c, d), this.unbind
                    }
                }, sampleEventCallbacks: {}, mkSampleEventCallback: function (b, c) {
                    return function (d) {
                        return c || (c = b), a.Metrics.videoSample(this, "player/" + c, d)
                    }
                }, showLoadingDelay: 2e3, showLoadingLongTimeDelay: 5e3, deriveWaitingEvents: function () {
                    var b, c, d = this;
                    return b = "" + this.uuid + ".show-loading-trigger", c = "" + this.uuid + ".show-loading-long-time-trigger", this._startedWaitingAt = Date.now(), a.timeout(b, function () {
                        var a, b;
                        return a = d.totalBuffered != null ? d.totalBuffered() : null, b = d.totalPlayed != null ? d.totalPlayed() : null, d.trigger("show-loading", a, b)
                    }, a.Metrics._private.showLoadingDelay), a.timeout(c, function () {
                        var a, b;
                        return a = d.totalBuffered != null ? d.totalBuffered() : null, b = d.totalPlayed != null ? d.totalPlayed() : null, d.trigger("show-loading-long-time", a, b)
                    }, a.Metrics._private.showLoadingLongTimeDelay), this._clearShowLoadingTrigger == null && (this._clearShowLoadingTrigger = function () {
                        var e, f, g, h;
                        return a.clearTimeouts(b), a.clearTimeouts(c), f = Date.now() - d._startedWaitingAt, g = f / 1e3, e = d.totalBuffered != null ? d.totalBuffered() : null, h = d.totalPlayed != null ? d.totalPlayed() : null, d.trigger("buffering-wait-duration", g, e, h), d.rebind("waiting", a.Metrics._private.deriveWaitingEvents), d.unbind
                    }), this.rebind("timechange", this._clearShowLoadingTrigger), this.unbind
                }
            }
        })
})(Wistia), function (a) {
    a.Plugin || (a.Plugin = {});
    if (a.Plugin.Base)return;
    a.Plugin.Base = function () {
        function b() {
            this.pluginName = "plugin", this
        }

        return b.prototype.instances = function () {
            return a.data(["plugins", this.pluginName, this.video.uuid])
        }, b.prototype.register = function (b) {
            var c;
            return c = this.playlist || this.video, c.plugins[this.uuid] = b, a.data(["plugins", this.pluginName, c.uuid, this.uuid], b)
        }, b.prototype.remove = function (b) {
            var c;
            b == null && (b = {}), c = this.playlist || this.video, c.plugins[this.uuid] = null, a.removeData(["plugins", this.pluginName, c.uuid, this.uuid]), delete c.plugins[this.uuid], delete c.plugin[this.pluginName];
            if (!b.dontFit)return a.grid.fitHorizontal(c), a.grid.fitVertical(c)
        }, b.prototype.fit = function () {
        }, b.prototype.init = function (b, c) {
            return b.plugins == null && (b.plugins = {}), (b != null ? b.playlist : void 0) ? this.playlist = b : this.video = b, this.target = this.playlist || this.video, this.options = c || {}, this.params = a.extend({}, c || {}), this.uuid = this.params.uuid || a.seqId("wistia_", "_plugin")
        }, b
    }();
    if (!a.plugin)return a.plugin = function (b, c) {
        var d, e, f, g, h, i;
        if (d = (f = a.pluginQueue) != null ? (g = f[b]) != null ? g.shift() : void 0 : void 0)((h = d.video) != null ? h.looksDown() : void 0) ? (d.video.notice('W.plugin: delaying initialization of plugin until "up"', b, d.options), d.video.bind("up", function () {
            var a, e;
            return d.video.info("initializing plugin", b, d.options), a = c(d.video, d.options) || !0, d.video.plugin[b] = a, d.impl && (d.impl.plugin[b] = a), (e = d.video._pluginStopGos) != null && typeof e[b] == "function" && e[b](!0), this.unbind
        })) : d.video._impl === d.impl ? (d.video.info("W.plugin: initializing plugin", b, d.options), e = c(d.video, d.options) || !0, d.video.plugin[b] = e, d.impl && (d.impl.plugin[b] = e), (i = d.video._pluginStopGos) != null && typeof i[b] == "function" && i[b](!0)) : d.video.notice("W.plugin impl changed, ignoring initialization", b, d.options);
        if (!a.plugin[b])return a.plugin[b] = c
    }, a.plugin._scriptsFromVideo = function (b) {
        var c;
        return c = a.plugin._scriptsFromOptions(b._opts), a.plugin._setFnForDefinedPlugins(b, c), c
    }, a.plugin._prefetched = {}, a.plugin._scriptsFromOptions = function (b) {
        var c, d, e, f, g, h;
        e = [], h = b.plugin;
        for (d in h)b = h[d], (b != null ? b.on : void 0) !== !1 && (f = function () {
            switch (d) {
                case"socialbar":
                    return "socialbar-v1";
                case"requireEmail":
                    return "requireEmail-v1";
                case"postRoll":
                    return "postRoll-v1";
                case"transcript":
                    return "transcript-v2";
                default:
                    return d
            }
        }(), c = {
            name: f,
            options: b,
            src: "" + a.proto() + "//" + a.remote.embedHost() + "/assets/external/" + f + ".js",
            async: b.async != null ? b.async : !/^(requireEmail|socialbar|transcript|midrollLink)/.test(d)
        }, b.src && a.plugin._allow3rdParty() && (c.src = b.src), /transcript/.test(d) && (a.proto() === "https:" ? g = "https://s3.amazonaws.com/origin-p3.3playmedia.com/javascripts/vendor/jquery-1.6.2.min.js" : g = "http://p3.3playmedia.com/javascripts/vendor/jquery-1.6.2.min.js", e.push({
            src: g,
            async: !1
        })), e.push(c));
        return e
    }, a.plugin._inject = function (b, c, d) {
        var e, f;
        d == null && (d = {});
        if (d.on !== !1)return e = "" + a.proto() + "//" + a.remote.embedHost() + "/assets/external/" + c + ".js", f = [{
            name: c,
            options: d,
            src: d.src && a.plugin._allow3rdParty() ? d.src : e,
            async: !0
        }], a.plugin._setFnForDefinedPlugins(b, f), a.plugin._execQueue(b, f)
    }, a.plugin._allow3rdParty = function () {
        return !/([\w\_\-]+\.)?wistia\.(com|st)$/.test(window.location.hostname)
    }, a.plugin._setFnForDefinedPlugins = function (b, c) {
        var d, e, f, g;
        g = [];
        for (e = 0, f = c.length; e < f; e++)d = c[e], a.plugin[d.name] && g.push(function (c) {
            return c.fn = function () {
                var d, e, f;
                return d = a.plugin[c.name](b, c.options) || !0, b.plugin[c.name] = d, b._impl && (b._impl.plugin[c.name] = d), (f = b._pluginStopGos) != null ? typeof f[e = c.name] == "function" ? f[e](!0) : void 0 : void 0
            }, c.async = !1
        }(d));
        return g
    }, a.plugin._queueUndefinedPlugins = function (b, c) {
        var d, e, f, g, h, i;
        a.pluginQueue == null && (a.pluginQueue = {}), i = [];
        for (g = 0, h = c.length; g < h; g++)e = c[g], e.subScripts ? i.push(function () {
            var c, g, h, i;
            h = e.subScripts, i = [];
            for (c = 0, g = h.length; c < g; c++)f = h[c], d = f.name || f.src, a.pluginQueue[d] == null && (a.pluginQueue[d] = []), e.fn ? i.push(void 0) : i.push(a.pluginQueue[d].push({
                video: b,
                impl: b._impl,
                options: f.options
            }));
            return i
        }()) : (d = e.name || e.src, a.pluginQueue[d] == null && (a.pluginQueue[d] = []), e.fn ? i.push(void 0) : i.push(a.pluginQueue[d].push({
            video: b,
            impl: b._impl,
            options: e.options
        })));
        return i
    }, a.plugin._execQueue = function (b, c, d) {
        return a.plugin._queueUndefinedPlugins(b, c), a.remote.scripts(c, d)
    }, a.plugin._init = function (b, c, d) {
        var e, f, g;
        return g = b.charAt(0).toUpperCase() + b.substr(1), f = a.Plugin[g], e = new f, e.init(c, d), e
    }, a.plugin._instance = function (b, c, d) {
        return a.data(["plugins", b, c.uuid, d])
    }, a.plugin._remove = function (b, c, d) {
        var e;
        (e = a.plugin._instance(b, c, d)) != null && e.remove()
    }, a.plugin._isActive = function (b, c, d) {
        return !!a.plugin._instance(b, c, d)
    }, a.plugin._defined = function () {
        var b, c, d, e;
        d = a.plugin, e = [];
        for (b in d)c = d[b], /^_/.test(b) || e.push({name: b, options: c});
        return e
    }
}(Wistia), function (a) {
    return a.extend({
        seo: {
            writeMeta: function (a, b) {
                this.metaExists(a) || this.forceWriteMeta(a, b)
            }, forceWriteMeta: function (a, b) {
                var c, d;
                d = document.getElementsByTagName("script")[0], c = document.createElement("meta"), c.setAttribute("property", a), c.setAttribute("content", b), c._wistia = !0, d.parentNode.insertBefore(c, d)
            }, metaExists: function (a) {
                var b, c, d, e;
                e = document.getElementsByTagName("meta");
                for (c = 0, d = e.length; c < d; c++) {
                    b = e[c];
                    if (b.getAttribute("property") === a)return !0
                }
                return !1
            }, inject: function (b, c) {
                var d, e, f;
                c == null && (c = {}), this.metaExists("og:video") || (f = b.sitemap_entry, d = {
                    _mediaData: b,
                    _givenOptions: c,
                    _opts: c,
                    _attrs: {}
                }, e = new a.FlashVideo(d), e.sdAsset = function () {
                    return a.Video.asset(b, {container: "flv", sortBy: "width asc"})
                }, this.writeMeta("og:type", "article"), this.writeMeta("og:title", (f != null ? f.title : void 0) || document.title || e.name()), this.writeMeta("og:url", (f != null ? f.loc : void 0) || location.href), this.writeMeta("og:image", a.Video.stillUrl(e._mediaData)), this.writeMeta("og:video", "" + b.flashPlayerUrl + a.url.jsonToParams(e.generateFlashVars())), c.videoWidth && this.writeMeta("og:video:width", c.videoWidth), c.videoHeight && this.writeMeta("og:video:height", c.videoHeight), this.writeMeta("og:video:type", "application/x-shockwave-flash"))
            }
        }
    })
}(Wistia), function (a) {
    return a.extend({
        localStorage: function (b, c, d) {
            var e, f;
            d == null && (d = !1);
            if (!a.detect.localstorage)return;
            f = a.data("localStorage") || {};
            if (c != null) {
                d ? a.obj.unset(f, b) : a.obj.set(f, b, c), a.data("localStorage", f);
                try {
                    localStorage.wistia = a.JSON.stringify(f)
                } catch (g) {
                    e = g, typeof console != "undefined" && console !== null && console.log(e)
                }
                return c
            }
            return b != null ? a.obj.get(f, b) : f
        }, removeLocalStorage: function (a) {
            return this.localStorage(a, "nada", !0)
        }, dumpLocalStorage: function () {
            var b;
            if (!a.detect.localstorage)return;
            a.removeData("localStorage");
            try {
                localStorage.removeItem("wistia")
            } catch (c) {
                b = c, typeof console != "undefined" && console !== null && console.log(b)
            }
        }
    }), a._initializers.initLocalStorage = function () {
        var b;
        if (a.detect.localstorage)try {
            return localStorage.wistia ? a.data("localStorage", a.JSON.parse(localStorage.wistia)) : a.data("localStorage", {})
        } catch (c) {
            return b = c, a.data("localStorage", {})
        }
    }, a._destructors.destroyLocalStorage = function () {
        return a.removeData("localStorage")
    }
}(Wistia), function (a) {
    return a.extend({
        cookie: function (b, c, d) {
            var e, f, g, h;
            return arguments.length > 1 && String(c) !== "[object Object]" ? (d = a.extend({}, d), c == null && (d.expires = -1), typeof d.expires == "number" && (e = d.expires, h = d.expires = new Date, h.setDate(h.getDate() + e)), c = String(c), document.cookie = [encodeURIComponent(b), "=", d.raw ? c : encodeURIComponent(c), d.expires ? "; expires=" + d.expires.toUTCString() : "", d.path ? "; path=" + d.path : "", d.domain ? "; domain=" + d.domain : "", d.secure ? "; secure" : ""].join("")) : (d = c || {}, f = d.raw ? function (a) {
                return a
            } : decodeURIComponent, (g = (new RegExp("(?:^|; )" + encodeURIComponent(b) + "=([^;]*)")).exec(document.cookie)) ? f(g[1]) : null)
        }
    })
}(Wistia), function (a) {
    if (a.gridify)return;
    a.extend({
        gridifyCss: function (a) {
            var b;
            return b = a.replace(/_grid$/, ""), "#" + a + "_wrapper{-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;font-family:Arial,sans-serif;font-size:14px;height:100%;position:relative;text-align:left;width:100%;}\n#" + a + "_wrapper *{-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;}\n#" + a + "_above{position:relative;}\n#" + a + "_main{display:block;height:100%;position:relative;}\n#" + a + "_behind{height:100%;left:0;position:absolute;top:0;width:100%;}\n#" + a + "_center{height:100%;overflow:hidden;position:relative;width:100%;}\n#" + a + "_front{display:none;height:100%;left:0;position:absolute;top:0;width:100%;}\n#" + a + "_top_inside{position:absolute;left:0;top:0;width:100%;}\n#" + a + "_top{width:100%;position:absolute;bottom:0;left:0;}\n#" + a + "_bottom_inside{position:absolute;left:0;bottom:0;width:100%;}\n#" + a + "_bottom{width:100%;position:absolute;top:0;left:0;}\n#" + a + "_left_inside{height:100%;position:absolute;left:0;top:0;}\n#" + a + "_left{height:100%;position:absolute;right:0;top:0;}\n#" + a + "_right_inside{height:100%;right:0;position:absolute;top:0;}\n#" + a + "_right{height:100%;left:0;position:absolute;top:0;}\n#" + a + "_below{position:relative;}"
        }, gridifyHtml: function (a) {
            return {
                id: "" + a + "_wrapper",
                childNodes: [{id: "" + a + "_above"}, {
                    id: "" + a + "_main",
                    childNodes: [{id: "" + a + "_behind"}, {id: "" + a + "_center"}, {id: "" + a + "_front"}, {
                        id: "" + a + "_top_inside",
                        childNodes: {id: "" + a + "_top"}
                    }, {id: "" + a + "_bottom_inside", childNodes: {id: "" + a + "_bottom"}}, {
                        id: "" + a + "_left_inside",
                        childNodes: {id: "" + a + "_left"}
                    }, {id: "" + a + "_right_inside", childNodes: {id: "" + a + "_right"}}]
                }, {id: "" + a + "_below"}]
            }
        }, createGrid: function (a) {
            var b;
            return b = this.createGridSkeleton(), this.initGridDimensions(a, b), b
        }, createGridSkeleton: function () {
            var b, c, d, e, f, g, h, i;
            c = a.seqId("wistia_grid_"), d = a.elem.fromObject(a.gridifyHtml(c)), b = a.css(d, a.gridifyCss(c)), e = {}, e.css = b, e.root = d, a.elem.style(d, {display: "none"}), a.elem.append(document.body, d), g = ["wrapper", "main", "above", "below", "top", "right", "bottom", "left", "top_inside", "right_inside", "bottom_inside", "left_inside", "front", "center", "behind"];
            for (h = 0, i = g.length; h < i; h++)f = g[h], e[f] = document.getElementById("" + c + "_" + f);
            return a.elem.remove(d), a.elem.style(d, {display: "block"}), e
        }, initGridDimensions: function (b, c) {
            var d, e, f;
            e = b._embedContainer, d = b.chrome, f = b._opts, a.detect.browser.old && (d.style.width = e.style.width = "" + a.elem.width(e) + "px", d.style.height = e.style.height = "" + a.elem.height(e) + "px");
            if (!a.detect.browser.old)return d.style.height = "" + a.elem.height(e) + "px", c.main.style.width = "" + a.elem.width(e) + "px";
            if (f.rawEmbed && f.aspectRatio)return c.main.style.height = "" + a.elem.width(c.center) / f.aspectRatio + "px"
        }, gridify: function (b, c) {
            var d, e, f, g, h, i;
            e = {}, d = "" + c.id + "_grid", a.detect.browser.old && (c.style.width = "" + a.elem.width(c) + "px", c.style.height = "" + a.elem.height(c) + "px"), c.innerHTML = a.generate.html(a.gridifyHtml(d)), i = ["wrapper", "main", "above", "below", "top", "right", "bottom", "left", "top_inside", "right_inside", "bottom_inside", "left_inside", "front", "center", "behind"];
            for (g = 0, h = i.length; g < h; g++)f = i[g], e[f] = document.getElementById("" + d + "_" + f);
            return a.util.addInlineCss(e.wrapper, a.gridifyCss(d)), a.detect.browser.old ? b.rawEmbed && b.aspectRatio && (e.main.style.height = "" + a.elem.width(e.center) / b.aspectRatio + "px") : (e.wrapper.style.height = "" + a.elem.height(c) + "px", e.main.style.width = "" + a.elem.width(c) + "px"), e
        }, isGridElem: function (a, b) {
            var c, d;
            for (d in a) {
                c = a[d];
                if (b === c)return !0
            }
            return !1
        }, grid: {
            allNodesHidden: function (a) {
                var b, c, d;
                if (a.length === 0)return !0;
                for (c = 0, d = a.length; c < d; c++) {
                    b = a[c];
                    if (b.style && b.style.display !== "none")return !1
                }
                return !0
            }, zeroEmptySections: function (a) {
                var b, c, d, e, f, g;
                f = ["top", "bottom", "left", "right", "above", "below"], g = [];
                for (d = 0, e = f.length; d < e; d++)c = f[d], b = a.grid[c], b.childNodes.length ? this.allNodesHidden(b.childNodes) ? (b.style.height = "0px", b.style.fontSize = "0px", b.style.lineHeight = "0px", g.push(b.isEmpty = !0)) : (b.style.height = "", b.style.fontSize = "", g.push(b.style.lineHeight = "")) : (b.appendChild(document.createTextNode(" ")), b.style.height = "0px", b.style.fontSize = "0px", b.style.lineHeight = "0px", g.push(b.isEmpty = !0));
                return g
            }, wrapperHeight: function (b) {
                var c, d;
                return c = b.grid.wrapper, d = a.elem.height(c), a.detect.browser.old && (b._attrs.rawEmbed && b._embedContainer && (d = parseInt(b._embedContainer.currentStyle.height, 10)), b._attrs.rawEmbed || (d = a.util.winHeight())), d
            }, wrapperWidth: function (b) {
                var c, d;
                return c = b.grid.wrapper, d = a.elem.width(c), a.detect.browser.old && (b._attrs.rawEmbed && b._embedContainer && (d = parseInt(b._embedContainer.currentStyle.width, 10)), b._attrs.rawEmbed || (d = a.util.winWidth())), d
            }, fitVertical: function (b) {
                var c, d, e, f, g, h;
                if (b._opts.dontFit)return;
                this.zeroEmptySections(b), d = b.grid, e = d.main, h = d.wrapper, g = Math.max(a.elem.height(d.above), a.elem.height(d.top)), c = Math.max(a.elem.height(d.below), a.elem.height(d.bottom)), f = Math.max(0, this.wrapperHeight(b) - g - c), e.style.height = "" + f + "px", a.elem.width(d.left) === 0 && (e.style.left = "0px"), e.style.marginTop = "" + a.elem.height(d.top) + "px"
            }, fitHorizontal: function (b) {
                var c, d, e, f, g, h;
                if (b._opts.dontFit)return;
                this.zeroEmptySections(b), c = b.grid, h = c.wrapper, e = c.main, d = a.elem.width(c.left), g = a.elem.width(c.right), f = this.wrapperWidth(b) - d - g, e.style.width = f + "px", e.style.left = d + "px"
            }, fit: function (a, b) {
                /left|right/.test(b) ? this.fitHorizontal(a) : /top|bottom|above|below/.test(b) && this.fitVertical(a), a.ieSizeHack()
            }
        }
    })
}(Wistia), function (a) {
    if (a.Color)return;
    return a.Color = function () {
        function i(b) {
            b instanceof a.Color ? (this.r = b.r, this.g = b.g, this.b = b.b, this.a = b.a) : b ? this.parse(b) : (this.r = this.g = this.b = 0, this.a = 1), this
        }

        var b, c, d, e, f, g, h;
        return f = /^#?([0-9a-f]{3,4}|[0-9a-f]{6,8})$/i, h = /^rgba?\((\d{1,3}(?:\.\d+)?%?),\s*(\d{1,3}(?:\.\d+)?%?),\s*(\d{1,3}(?:\.\d+)?%?)(?:,\s*([01]?\.?\d*))?\)$/, g = /^\d+(\.\d+)*%$/, c = /([0-9a-f])/gi, b = function (a) {
            return .5 + a << 0
        }, e = function (a) {
            return g.test(a) ? parseFloat(a) * 2.55 : a
        }, d = function (a, b, c) {
            return c < 0 && (c += 1), c > 1 && (c -= 1), c < 1 / 6 ? a + (b - a) * 6 * c : c < .5 ? b : c < 2 / 3 ? a + (b - a) * (2 / 3 - c) * 6 : a
        }, i.prototype.parse = function (a) {
            var b, d;
            if (f.test(a)) {
                d = a.replace(/^\#/, "");
                if (d.length === 3 || d.length === 4)d = d.replace(c, "$1$1");
                this.r = parseInt(d.substr(0, 2), 16), this.g = parseInt(d.substr(2, 2), 16), this.b = parseInt(d.substr(4, 2), 16), d.length === 8 ? this.a = parseInt(d.substr(6, 2), 16) / 255 : this.a = 1
            } else h.test(a) && (b = a.match(h), this.r = parseFloat(e(b[1])), this.g = parseFloat(e(b[2])), this.b = parseFloat(e(b[3])), b[4] ? this.a = parseFloat(b[4]) : this.a = 1);
            return this
        }, i.prototype.clone = function () {
            return new a.Color(this)
        }, i.prototype._hslFromRgb = function () {
            var a, b, c, d, e, f, g, h, i, j;
            return h = this.r / 255, c = this.g / 255, a = this.b / 255, f = Math.max(h, c, a), g = Math.min(h, c, a), e = (f + g) / 2, j = f, f === g && (this._h = this._s = 0), b = f - g, b === 0 ? (this._h = 0, this._s = 0, this._l = h * 100, this) : (e > .5 ? i = b / (2 - f - g) : i = b / (f + g), f === h ? d = (c - a) / b + (c < a ? 6 : 0) : f === c ? d = (a - h) / b + 2 : d = (h - c) / b + 4, d /= 6, this._h = d * 360, this._s = i * 100, this._l = e * 100, this)
        }, i.prototype._rgbFromHsl = function () {
            var a, b, c, e, f;
            return a = this._h / 360, f = this._s / 100, b = this._l / 100, e = b < .5 ? b * (1 + f) : b + f - b * f, c = 2 * b - e, this.r = d(c, e, a + 1 / 3) * 255, this.g = d(c, e, a) * 255, this.b = d(c, e, a - 1 / 3) * 255, this
        }, i.prototype.blendChannel = function (a, b, c) {
            return this[a] = c * b + (1 - c) * this[a], this
        }, i.prototype.blend = function (b, c) {
            return b = new a.Color(b), this.blendChannel("r", b.r, c), this.blendChannel("g", b.g, c), this.blendChannel("b", b.b, c), this
        }, i.prototype.lightenChannel = function (a, b) {
            return this[a] += b, this[a] < 0 ? this[a] = 0 : this[a] > 255 && (this[a] = 255), this
        }, i.prototype.lighten = function (a) {
            return this.lightenChannel("r", a), this.lightenChannel("g", a), this.lightenChannel("b", a), this
        }, i.prototype.darken = function (a) {
            return this.lighten(-a)
        }, i.prototype.lightness = function (a) {
            return this._hslFromRgb(), a != null ? (this._l = Math.max(0, Math.min(100, a)), this._rgbFromHsl(), this) : this._l
        }, i.prototype.saturation = function (a) {
            return this._hslFromRgb(), a != null ? (this._s = Math.max(0, Math.min(100, a)), this._rgbFromHsl(), this) : this._s
        }, i.prototype.grayLevel = function () {
            return (.299 * this.r + .587 * this.g + .114 * this.b) / 255
        }, i.prototype.whiteLevel = function () {
            return Math.min(Math.min(this.r, this.g), this.b)
        }, i.prototype.isGrayscale = function () {
            return this.r === this.g && this.g === this.b
        }, i.prototype.distanceFrom = function (a) {
            return Math.sqrt(Math.pow(this.r - a.r, 2) + Math.pow(this.g - a.g, 2) + Math.pow(this.b - a.b, 2))
        }, i.prototype.channelDominance = function () {
            var a = this;
            return ["r", "g", "b"].sort(function (b, c) {
                return a[c] - a[b]
            })
        }, i.prototype.alpha = function (a) {
            return this.a != null ? (this.a = a, this) : this.a
        }, i.prototype.red = function (a) {
            return a != null ? (this.r = a, this) : this.r
        }, i.prototype.green = function (a) {
            return this.g != null ? (this.g = a, this) : this.g
        }, i.prototype.blue = function (a) {
            return this.b != null ? (this.b = a, this) : this.b
        }, i.prototype.toHex = function () {
            var a, b, c;
            return c = Math.round(this.r).toString(16), b = Math.round(this.g).toString(16), a = Math.round(this.b).toString(16), c.length === 1 && (c = "0" + c), b.length === 1 && (b = "0" + b), a.length === 1 && (a = "0" + a), "" + c + b + a
        }, i.prototype.toHexWithAlpha = function () {
            var a;
            return a = Math.round(this.a * 255).toString(16), a.length === 1 && (a = "0" + a), "" + a + this.toHex()
        }, i.prototype.toRgb = function () {
            return "rgb(" + Math.round(this.r) + "," + Math.round(this.g) + "," + Math.round(this.b) + ")"
        }, i.prototype.toRgba = function () {
            return "rgba(" + Math.round(this.r) + "," + Math.round(this.g) + "," + Math.round(this.b) + "," + this.a + ")"
        }, i.prototype.toRgbaOrHex = function () {
            return a.detect.browser.msie && a.detect.browser.version < 9 ? "#" + this.toHex() : this.toRgba()
        }, i.prototype.toPercent = function () {
            return "rgba(" + this.r / 255 * 100 + "%," + this.g / 255 * 100 + "%," + this.b / 255 * 100 + "%," + this.a + ")"
        }, i.prototype.toIeGradient = function () {
            return "progid:DXImageTransform.Microsoft.gradient(startColorStr='#" + this.toHexWithAlpha() + "', endColorStr='#" + this.toHexWithAlpha() + "')"
        }, i.prototype.toString = function () {
            return this.toPercent()
        }, i
    }()
}(Wistia), function (a) {
    if (a.embeds)return;
    return a.embeds = {}, a.embeds.setup = function (b) {
        var c, d, e, f, g;
        b = a.embeds.uninitialized(b);
        for (f = 0, g = b.length; f < g; f++)c = b[f], d = a.embeds.hashedIdForElem(c, {asyncOnly: !0}), c.id || (c.id = a.embeds.genIdFor(d)), e = a.embeds.optionsFromElemClass(c), a.options("__" + c.id + "_dom_options__", e), a.embed(d, {container: c.id});
        return a.watchForInit()
    }, a.embeds._setupThrottled = a.util.throttle(500, a.embeds.setup), a.embeds.optionsFromElemClass = function (b) {
        var c, d, e, f, g, h;
        d = [], h = a.elem.classes(b);
        for (f = 0, g = h.length; f < g; f++)c = h[f], c.indexOf("=") > 0 && d.push(c);
        return e = a.url.paramsToJson(d.join("&")), a.obj.cast(e), e
    }, a.embeds.hashedIdForElem = function (a, b) {
        var c, d, e, f, g, h;
        return b == null && (b = {}), b.asyncOnly ? ((c = a.className) != null ? (d = c.match(/wistia_async_([^\s]+)/)) != null ? d[1] : void 0 : void 0) || null : ((e = a.className) != null ? (f = e.match(/wistia_async_([^\s]+)/)) != null ? f[1] : void 0 : void 0) || ((g = a.className) != null ? (h = g.match(/wistia_([^\s]+)/)) != null ? h[1] : void 0 : void 0) || null
    }, a.embeds.genIdFor = function (a) {
        var b, c, d;
        b = "wistia-" + a, d = 1;
        for (; ;) {
            c = "" + b + "-" + d;
            if (!document.getElementById(c))break;
            d += 1
        }
        return c
    }, a.embeds._options = {}, a.embeds.options = function (b, c) {
        var d, e, f, g;
        a.obj.isObject(b) && (c = b, b = "__global__");
        if (c != null)return a.embeds._options[b] = a.obj.cast(a.obj.clone(c));
        if (b) {
            if (a.embeds._options[b])return a.embeds._options[b];
            d = a.api(b);
            if (d === null)return {};
            g = a.embeds._options;
            for (e in g) {
                f = g[e];
                if (a.api(e) === d)return f
            }
            return {}
        }
        return a.embeds._options
    }, a.options = a.embeds.options, a.embeds.api = function () {
        var b, c, d, e, f, g, h;
        return document.querySelectorAll ? document.querySelectorAll("div.wistia_embed,span.wistia_embed") : (c = ((g = document.body) != null ? g.getElementsByTagName("div") : void 0) || [], f = ((h = document.body) != null ? h.getElementsByTagName("span") : void 0) || [], b = function () {
            var b, e, f;
            f = [];
            for (b = 0, e = c.length; b < e; b++)d = c[b], a.elem.hasClass(d, "wistia_embed") && f.push(d);
            return f
        }(), e = function () {
            var b, c, e;
            e = [];
            for (b = 0, c = f.length; b < c; b++)d = f[b], a.elem.hasClass(d, "wistia_embed") && e.push(d);
            return e
        }(), b.concat(e))
    }, a.embeds.uninitialized = function (b) {
        var c, d, e, f, g;
        b == null && (b = a.embeds.api()), e = [];
        for (f = 0, g = b.length; f < g; f++)c = b[f], d = a.embeds.hashedIdForElem(c, {asyncOnly: !0}), d && !c.wistiaApi && e.push(c);
        return e
    }, a.embeds.initialized = function (b) {
        var c, d, e, f, g;
        b == null && (b = a.embeds.api()), e = [];
        for (f = 0, g = b.length; f < g; f++)c = b[f], d = a.embeds.hashedIdForElem(c), d && c.wistiaApi && e.push(c);
        return e
    }, a.embeds.observe = function () {
        var b;
        if (a.embeds.initObserver)return;
        return a.embeds.initObserver = a.elem.mutationObserver(function (b) {
            var c, d, e, f, g, h, i, j, k, l;
            d = [], c = !1;
            for (g = 0, i = b.length; g < i; g++) {
                e = b[g], ((k = e.addedNodes) != null ? k.length : void 0) > 0 && (c = !0), l = e.addedNodes || [];
                for (h = 0, j = l.length; h < j; h++)f = l[h], a.elem.hasClass(f, "wistia_embed") && d.push(f)
            }
            d.length > 0 && setTimeout(function () {
                return a.embeds.setup(d)
            }, 10);
            if (c)return a.embeds._setupThrottled()
        }), b = {subtree: !0, childList: !0}, a.detect.ios.version > 0 ? a.util.onDocReady(function () {
            return a.embeds.initObserver.observe(document.body, b)
        }) : a.embeds.initObserver.observe(document.body, b)
    }, a.embeds.unobserve = function () {
        var b;
        return (b = a.embeds.initObserver) != null && b.disconnect(), a.embeds.initObserver = null
    }, a.embeds.poll = function () {
        return a.eventLoop.add("poll_setup_embeds", 500, function () {
            return a.embeds.setup()
        })
    }, a.embeds.unpoll = function () {
        var b;
        return (b = a.eventLoop) != null ? b.remove("poll_setup_embeds") : void 0
    }, a.embeds.watch = function () {
        return a.embeds._dontWatch = !1, a._detect.mutationObserver() && !a.detect.trident ? a.embeds.observe() : a.embeds.poll()
    }, a.embeds.dontWatch = function () {
        return a.embeds._dontWatch = !0, a.embeds.unwatch()
    }, a.embeds.unwatch = function () {
        return a.embeds.unobserve(), a.embeds.unpoll()
    }, a.flushInit = function () {
        var b, c, d, e;
        if (!window.wistiaInit)return;
        if (wistiaInit instanceof Array)for (d = 0, e = wistiaInit.length; d < e; d++) {
            c = wistiaInit[d];
            try {
                typeof c == "function" && c(a)
            } catch (f) {
                b = f, typeof console != "undefined" && console !== null && console.log(b.message), typeof console != "undefined" && console !== null && console.log(b.stack)
            }
        } else typeof wistiaInit == "function" && wistiaInit(a);
        return window.wistiaInit = null
    }, a._queueNames = ["_wq", "wistiaInitQueue"], a.flushInitQueue = function () {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p;
        o = a._queueNames, p = [];
        for (k = 0, m = o.length; k < m; k++) {
            g = o[k], f = window[g];
            if (!(f && f instanceof Array && f.length > 0))continue;
            d = [];
            while (f.length > 0) {
                h = f.shift();
                if (a.obj.isObject(h)) {
                    j = function (b, c) {
                        var e, f;
                        return typeof c == "function" ? (f = function (a) {
                            return a.hasData(function () {
                                return c(a)
                            })
                        }, e = function () {
                            return b === "_all" ? a.api(f) : a.api(b, f)
                        }, d.push(e)) : a.obj.isObject(c) ? (b === "_all" ? e = function () {
                            return a.options(c)
                        } : e = function () {
                            return a.options(b, c)
                        }, d.push(e)) : a.error("Unknown initialization object:", c, "Expected Object or Function.")
                    };
                    for (e in h)i = h[e], j(e, i)
                } else typeof h == "function" ? function (b) {
                    var c;
                    return c = function () {
                        return b(a)
                    }, d.push(c)
                }(h) : a.notice("" + g + ": Don't know what to do with " + h + ", ignoring.")
            }
            for (l = 0, n = d.length; l < n; l++) {
                c = d[l];
                try {
                    typeof c == "function" && c(a)
                } catch (q) {
                    b = q, typeof console != "undefined" && console !== null && console.log(b.message), typeof console != "undefined" && console !== null && console.log(b.stack)
                }
            }
            p.push(f.length = 0)
        }
        return p
    }, a.watchForInit = function () {
        return a._pollInit == null && (a._pollInit = function () {
            return a.flushInitQueue(), a.flushInit()
        }), a._pollInit(), a.eventLoop.unpause("poll_init"), a.eventLoop.add("poll_init", 500, a._pollInit)
    }, a.api = function (b, c) {
        var d, e, f, g, h, i, j, k, l, m, n, o;
        if (b != null) {
            if (c)return a.api.onFind(b, c);
            if (typeof b == "function")return a.api.onFind(b);
            if (typeof b == "string") {
                i = b, f = document.getElementById(i), f || (f = (l = a.data(["video-by-hashed-id", i])) != null ? l.container : void 0);
                if (!f) {
                    e = a.api.all();
                    for (j = 0, k = e.length; j < k; j++) {
                        g = e[j];
                        if (((m = g.hashedId()) != null ? m.indexOf(i) : void 0) === 0 || ((n = g.container.id) != null ? n.indexOf(i) : void 0) === 0) {
                            f = g.container;
                            break
                        }
                    }
                }
            } else typeof b == "number" ? (h = b, d = a.api.all(), h < 0 && (h = d.length + h), f = ((o = d[h]) != null ? o.container : void 0) || null) : window.HtmlElement && b instanceof HtmlElement ? f = b : a.error("W.api: Unrecognized matcher", b);
            return (f != null ? f.wistiaApi : void 0) ? f.wistiaApi : null
        }
        return a.api.all()[0] || null
    }, a.api.all = function () {
        return a.api._apiHandles().concat(a.api._iframeHandles())
    }, a.api._apiHandles = function () {
        var b;
        return function () {
                var c, d, e, f;
                e = a.embeds.initialized(), f = [];
                for (c = 0, d = e.length; c < d; c++)b = e[c], f.push(b.wistiaApi);
                return f
            }() || []
    }, a.api._iframeHandles = function () {
        return wistiaEmbeds.iframeApiHandles()
    }, a.api.onFind = function (b, c) {
        var d;
        return typeof b == "function" && (c = b, b = null), d = function (d) {
            return b === null || a.api(b) === d ? (c(d), !0) : !1
        }, wistiaEmbeds.each(d), wistiaEmbeds.bind("initembed", d), wistiaEmbeds.bind("afterreplace", d)
    }, a._asyncInitSoonAfterLoad = function () {
        return setTimeout(function () {
            var b;
            try {
                return a.embeds.setup(), a.embeds._dontWatch || a.embeds.watch(), a.watchForInit()
            } catch (c) {
                b = c;
                if (window.wistiaDebug)return typeof console != "undefined" && console !== null ? console.log(b) : void 0
            }
        }, 10)
    }, a._initializers.initAsyncEmbeds = function () {
        if (!window._inWistiaIframe)return a.detect.ios.version > 0 ? a.util.onDocReady(a._asyncInitSoonAfterLoad) : (a.util.isDocReady() || a.util.onDocReady(a._asyncInitSoonAfterLoad), a._asyncInitSoonAfterLoad()), a.eventLoop.pause("poll_init")
    }, a._destructors.destroyAsyncEmbeds = function () {
        var b, c;
        return (b = a.eventLoop) != null && b.remove("poll_init"), (c = a.embeds) != null ? c.unwatch() : void 0
    }
}(Wistia);
var __bind = function (a, b) {
    return function () {
        return a.apply(b, arguments)
    }
};
(function (a) {
    var b;
    b = a;
    if (b.EmbedLink)return;
    return b.EmbedLink = function () {
        function a(a, c) {
            var d;
            this.elem = a, this._apiHandle = c, this._onClickLink = __bind(this._onClickLink, this), this.defaults = {
                autoPlay: !0,
                transition: "fade"
            }, this.givenOptions = b.EmbedLink.optionsFromElem(this.elem), this.options = b.obj.merge({}, this.defaults, this.givenOptions), this.hashedId = b.EmbedLink.hashedIdFromElem(this.elem), this.uuid = b.seqId("wistia_embed_link_"), this.options.includeInPlaylist === !1 && (this._apiHandle = null), this.options.includeInPlaylist !== !1 && ((d = this._apiHandle) != null ? d._opts.playlistLinks : void 0) && !this._apiHandle._inPlaylist(this.hashedId) && this.apiHandle().addToPlaylist(this.hashedId, this.options), b.elem.rebind(this.elem, "click", this._onClickLink), this.elem._wistiaEmbedLink = this
        }

        return a.prototype._onClickLink = function (a) {
            return a.preventDefault(), this._followLink()
        }, a.prototype._followLink = function () {
            var a, b, c;
            return this.hashedId === ((a = this.apiHandle()) != null ? a.hashedId() : void 0) && this._onlyRunnableOptionsGiven() ? (this.apiHandle()._givenOptions = this.options, this.apiHandle()._opts = this.apiHandle()._gatherOptions(), this.options.autoPlay && (b = this.apiHandle().plugin["postRoll-v1"]) != null && b.close(), this.apiHandle()._runMethodsFromOptions()) : ((c = this.apiHandle().popover) != null && c.show(), this.apiHandle().replaceWith(this.hashedId, this.options))
        }, a.prototype._onlyRunnableOptionsGiven = function () {
            var a, b, c;
            c = this.options;
            for (a in c) {
                b = c[a];
                if (!this._allRunnableOptions[a])return !1
            }
            return !0
        }, a.prototype._allRunnableOptions = {
            autoPlay: !0,
            pause: !0,
            time: !0,
            transition: !0,
            volume: !0
        }, a.prototype.apiHandle = function () {
            return this._apiHandle || (this.options.container ? b.api(this.options.container) : this.closestEmbed())
        }, a.prototype.closestEmbed = function (a) {
            var c, d, e, f;
            return c = b.api._apiHandles(), c.length === 0 ? null : c.length === 1 ? c[0] : (e = function () {
                var a, e, f;
                f = [];
                for (a = 0, e = c.length; a < e; a++)d = c[a], f.push([d, b.elem.domDistance(this.elem, d.container)]);
                return f
            }.call(this), a === "above" ? e = function () {
                var a, b, c;
                c = [];
                for (a = 0, b = e.length; a < b; a++)f = e[a], f[1].across < 0 && c.push(f);
                return c
            }() : a === "below" && (e = function () {
                var a, b, c;
                c = [];
                for (a = 0, b = e.length; a < b; a++)f = e[a], f[1].across > 0 && c.push(f);
                return c
            }()), e.sort(function (a, b) {
                var c, d;
                return c = a[1].up + a[1].down + Math.abs(a[1].across), d = b[1].up + b[1].down + Math.abs(b[1].across), c - d
            }), e[0][0])
        }, a.prototype.destroy = function () {
            return b.elem.unbind(this.elem, "click", this._onClickLink), this.elem._wistiaEmbedLink = null, b.EmbedLink._all[this.uuid] = null, delete b.EmbedLink._all[this.uuid]
        }, a.inManualPlaylist = function (a) {
            var b;
            return this.hashedIdFromElem(a) ? (b = this.optionsFromElem(a), b.container && b.includeInPlaylist !== !1) : !1
        }, a.inContainerPlaylist = function (a) {
            var c;
            return this.hashedIdFromElem(a) ? (c = this.optionsFromElem(a), c.includeInPlaylist !== !1 && b.elem.ancestorHasClass(a, "wistia_playlist_links")) : !1
        }, a.optionsFromElem = function (a) {
            var c, d;
            return d = this.optionsFromHref(a.getAttribute("href")), c = b.embeds.optionsFromElemClass(a), b.obj.merge(d, c)
        }, a.hashedIdFromElem = function (a) {
            return this.hashedIdFromHref(a.getAttribute("href")) || this.optionsFromElem(a).hashedId
        }, a.matchesElem = function (a) {
            return !!a && !!this.hashedIdFromElem(a)
        }, a.EMBED_LINK_REGEXP = /^\#wistia_([^\?]+)/, a.hashedIdFromHref = function (a) {
            return a && this.EMBED_LINK_REGEXP.test(a) ? a.match(this.EMBED_LINK_REGEXP)[1] : null
        }, a.optionsFromHref = function (a) {
            return this.hashedIdFromHref(a) && a.indexOf("?") >= 0 ? b.obj.cast(b.url.paramsToJson(a.substring(a.indexOf("?") + 1, a.length))) : {}
        }, a._all = {}, a.setup = function (a, c) {
            var d;
            return c ? b.info("PlaylistLink setup", a, c.container) : b.info("EmbedLink setup", a), a._wistiaEmbedLink && (a._wistiaEmbedLink.destroy(), a._wistiaEmbedLink = null), d = new b.EmbedLink(a, c), this._all[d.uuid] = d
        }, a.filterPlaylistLinkCandidates = function (a, c) {
            var d, e, f, g, h;
            c == null && (c = null), f = [];
            for (g = 0, h = a.length; g < h; g++)d = a[g], b.EmbedLink.matchesElem(d) && (e = this.optionsFromElem(d), e.includeInPlaylist !== !1 && (!c || c(d)) && f.push(d));
            return f
        }, a.firstHandleWithPlaylistLinks = function () {
            var a, c, d, e;
            e = b.api._apiHandles();
            for (c = 0, d = e.length; c < d; c++) {
                a = e[c];
                if (a._opts.playlistLinks)return a
            }
            return null
        }, a.playlistLinkElems = function (a, c, d) {
            var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s = this;
            k = this.firstHandleWithPlaylistLinks(), n = (a != null ? a.container : void 0) || null, i = c.container, m = (d != null ? d.container : void 0) || null;
            if (c._opts.playlistLinks === "auto")return h = this.filterPlaylistLinkCandidates(b.elem.allBetween(n, i, "a"), function (a) {
                return !s.inManualPlaylist(a) && !s.inContainerPlaylist(a)
            }), g = this.filterPlaylistLinkCandidates(b.elem.allBetween(i, m, "a"), function (a) {
                return !s.inManualPlaylist(a) && !s.inContainerPlaylist(a)
            }), c === k && (h.length > 0 ? (b.info("EmbedLink @_firstHandleHasLinksBefore = true"), this._firstHandleHasLinksBefore = !0) : (b.info("EmbedLink @_firstHandleHasLinksBefore = false"), this._firstHandleHasLinksBefore = !1)), this._firstHandleHasLinksBefore ? h.length > 0 ? h : g : g.length > 0 ? g : h;
            if (c._opts.playlistLinks === "manual") {
                f = b.util.aps(document.getElementsByTagName("a")), o = [];
                for (p = 0, q = f.length; p < q; p++)e = f[p], l = b.EmbedLink.hashedIdFromElem(e), j = l && b.EmbedLink.optionsFromElem(e), i = (j != null ? j.container : void 0) && document.getElementById(j.container), (i != null ? i.wistiaApi : void 0) ? j && ((r = c.container) != null ? r.id : void 0) === j.container && o.push(e) : (j != null ? j.container : void 0) && b.error("Embed Link container '" + j.container + "' not found. You must specify the DOM ID of an initialized Wistia embed on the page.");
                return o
            }
            return c._opts.playlistLinks ? (i = document.getElementById(c._opts.playlistLinks), i ? (f = b.util.aps(i.getElementsByTagName("a")), this.filterPlaylistLinkCandidates(f, function (a) {
                return !s.inManualPlaylist(a)
            })) : (b.error("Embed Link container '" + c._opts.playlistLinks + "' not found. You must specify auto, manual, or the ID of an element on the page."), [])) : []
        }, a.destroyAll = function (a) {
            var c, d, e, f, g, h, i, j, k, l;
            a == null && (a = document), b.info("EmbedLink.destroyAll", a);
            if (a === document) {
                i = this._all, k = [];
                for (f in i)e = i[f], k.push(e.destroy());
                return k
            }
            d = a.getElementsByTagName("a"), l = [];
            for (g = 0, h = d.length; g < h; g++)c = d[g], l.push((j = c._wistiaEmbedLink) != null ? j.destroy() : void 0);
            return l
        }, a.setupAll = function (a) {
            var c, d, e, f, g, h, i, j, k, l, m, n;
            a == null && (a = document), b.info("EmbedLink.setupAll", a);
            try {
                b.EmbedLink.destroyAll(a), e = b.api._apiHandles(), i = function (a, c) {
                    var d = this;
                    return c.hasData(function () {
                        var d, f, g, h, i, j, k;
                        if (!c._opts.playlistLinks)return;
                        b.info("EmbedLink setup handle", c), i = e[a - 1], g = e[a + 1], h = b.EmbedLink.playlistLinkElems(i, c, g), h = b.EmbedLink.filterPlaylistLinkCandidates(h, function (a) {
                            return !a._wistiaEmbedLink
                        });
                        if (h.length > 0) {
                            c._playlist = [];
                            for (j = 0, k = h.length; j < k; j++)d = h[j], b.EmbedLink.setup(d, c);
                            if (f = c.nextVideo())return c.bind("play", function () {
                                return c.prefetchMedia(f.hashedId, f.options), c.unbind
                            })
                        }
                    })
                };
                for (h = j = 0, m = e.length; 0 <= m ? j < m : j > m; h = 0 <= m ? ++j : --j)g = e[h], i(h, g);
                d = b.util.aps(a.getElementsByTagName("a")), n = [];
                for (k = 0, l = d.length; k < l; k++)c = d[k], b.EmbedLink.matchesElem(c) ? c._wistiaEmbedLink ? n.push(b.notice("Conflict setting up embed link", c, " already belongs to ", c._wistiaEmbedLink)) : n.push(b.EmbedLink.setup(c)) : n.push(void 0);
                return n
            } catch (o) {
                return f = o, b.error(f)
            }
        }, a
    }(), b.EmbedLink.setupAllThrottled = b.util.throttle(1e3, b.EmbedLink.setupAll), b._initializers.initEmbedLinks = function () {
        return wistiaEmbeds.bind("initembed", function () {
            return b.EmbedLink.setupAllThrottled(), b.timeout("setup_embed_links_1000", b.EmbedLink.setupAllThrottled, 1e3), b.timeout("setup_embed_links_3000", b.EmbedLink.setupAllThrottled, 3e3)
        }), b.EmbedLink.setupAllThrottled(), b.util.onDocReady(function () {
            return b.EmbedLink.setupAllThrottled(), b.timeout("setup_embed_links_5000", b.EmbedLink.setupAllThrottled, 5e3)
        })
    }, b._destructors.destroyEmbedLinks = function () {
        var a, c, d;
        if (b.EmbedLink) {
            d = b.EmbedLink._all;
            for (c in d)a = d[c], a.destroy();
            return b.EmbedLink._all = {}
        }
    }
})(Wistia);
var __slice = [].slice;
(function (a) {
    if (a.iframeInit)return;
    return a.iframeInit = function (b, c) {
        var d, e, f, g, h, i, j, k, l, m, n;
        i = a.url.parse(location.href), d = a.extend(c, i.params), d.pageUrl || (d.pageUrl = (document.referrer || "").replace(/\#.*$/, "") || i.absolute().replace(/\#.*$/, "")), d.pageTitle = document.title, a.obj.castDeep(d), d.container = "wistia_video", d.canonicalUrl || (d.canonicalUrl = d.pageUrl), d.canonicalTitle || (d.canonicalTitle = d.pageTitle), m = d.plugin || {};
        for (f in m)j = m[f], d.plugin[f].outsideIframe && (d.plugin[f] = null, delete d.plugin[f]);
        i.params.popover && (a.obj.get(i.params, "plugin.requireEmail") ? d.autoPlay = !1 : d.autoPlay = !0), i.params.twitter && (d.autoPlay = !1), d._inIframe = !0, window.wistiaEmbed = a.embed(b, d), a.timeout("" + wistiaEmbed.uuid + ".fit_later", function () {
            return window.wistiaEmbed.fit()
        }, 100), (a.detect.iphone || a.detect.ipad) && wistiaEmbed.ready(function () {
            return setInterval(function () {
                return wistiaEmbed.elem().style.zoom = "", wistiaEmbed.elem().style.zoom = 1
            }, 3e3)
        }), h = function (b) {
            var c;
            return c = {}, Wistia.obj.eachLeaf(b, function (b, d) {
                if (/^string|number|boolean$/i.test(typeof b))return a.obj.set(c, d, b)
            }), c
        };
        if (!a.detect.browser.ltie8) {
            if (parent === self)return;
            window.apiSignature = null, window.iframeUuid = Math.random().toString(36).replace(/[^a-z0-9]+/g, ""), window._allIframes = ["wistia-iframe-" + iframeUuid], parent.postMessage("new-wistia-iframe", "*");
            if (parent.frames.length <= 25) {
                n = parent.frames;
                for (k = 0, l = n.length; k < l; k++)e = n[k], e !== self && e !== parent && (e.postMessage("wistia-iframe-" + iframeUuid, "*"), e.postMessage("declare-existing-wistia-iframe", "*"))
            }
            return wistiaEmbed.postMessage = function () {
                var b, c, d;
                d = arguments[0], b = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
                if (parent === self)return;
                return c = {
                    signature: apiSignature,
                    method: d,
                    args: b
                }, c = a.JSON.stringify(c), parent.postMessage(c, "*")
            }, wistiaEmbed.ping = function () {
                var a;
                return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], wistiaEmbed.postMessage.apply(wistiaEmbed, ["pong"].concat(__slice.call(a)))
            }, wistiaEmbed.updateProperties = function (b) {
                for (f in b)j = b[f], a.obj.isObject(j) ? this[f] = a.obj.merge({}, this[f], j) : this[f] = j;
                return this.postMessage("updateProperties", h(b))
            }, wistiaEmbed.bind("down", function () {
                return wistiaEmbed.postMessage("updateProperties", {_down: !0})
            }), wistiaEmbed.bind("up", function () {
                return wistiaEmbed.postMessage("updateProperties", {_down: !1})
            }), wistiaEmbed.bind("volumechange", function (a) {
                return wistiaEmbed.postMessage("updateProperties", {_volume: a})
            }), wistiaEmbed.bind("emailchange", function (a) {
                return wistiaEmbed.postMessage("updateProperties", {_email: a, params: {trackEmail: a}})
            }), wistiaEmbed.bind("timechange", function (a) {
                return wistiaEmbed.postMessage("updateProperties", {_time: a})
            }), wistiaEmbed.bind("statechange", function (a) {
                return wistiaEmbed.postMessage("updateProperties", {_state: a})
            }), wistiaEmbed.bind("widthchange", function () {
                return wistiaEmbed.postMessage("updateProperties", {
                    _videoWidth: wistiaEmbed.videoWidth(),
                    _width: wistiaEmbed.width()
                })
            }), wistiaEmbed.bind("heightchange", function () {
                return wistiaEmbed.postMessage("updateProperties", {
                    _videoHeight: wistiaEmbed.videoHeight(),
                    _height: wistiaEmbed.height()
                })
            }), wistiaEmbed.bind("foreigndatachange", function (a) {
                return wistiaEmbed.postMessage("updateProperties", {_foreignData: a})
            }), wistiaEmbed.bind("all", function () {
                var a;
                a = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                if (a[0] === "afterremove")return wistiaEmbed.postMessage("relay.trigger", "_afterremove");
                if (!/^up|down$/.test(a[0]))return wistiaEmbed.postMessage.apply(wistiaEmbed, ["_trigger"].concat(__slice.call(a)))
            }), g = function (b) {
                var c, d, e, f;
                if (b.data === "remove") {
                    wistiaEmbed.remove();
                    return
                }
                if (/^(visitor_key|send_visitor_key|clear_visitor_key)/.test(b.data))return;
                if (/^wistia-iframe-/.test(b.data)) {
                    window._allIframes.join(" ").indexOf(b.data) < 0 && window._allIframes.push(b.data);
                    return
                }
                if (b.data === "declare-existing-wistia-iframe") {
                    b.source.postMessage("wistia-iframe-" + iframeUuid, "*");
                    return
                }
                if (typeof b.data == "string")try {
                    e = a.JSON.parse(b.data)
                } catch (g) {
                    d = g, a.notice("inside_iframe", "receiveMessage", "Could not parse message from " + b.origin), a.notice("inside_iframe", "receiveMessage", b.data), e = {}
                } else e = b.data;
                f = e.method, c = e.args;
                if (f === "startIframeHandshake") {
                    window.apiSignature = c[0];
                    if (!window.wistiaEmbed)return;
                    return wistiaEmbed.postMessage("relay.trigger", "iframebound"), wistiaEmbed.postMessage("updateProperties", {
                        options: h(wistiaEmbed.options),
                        params: h(wistiaEmbed.params),
                        _embedType: wistiaEmbed.embedType,
                        _hashedId: wistiaEmbed.hashedId(),
                        _width: wistiaEmbed.width(),
                        _height: wistiaEmbed.height(),
                        _videoWidth: wistiaEmbed.videoWidth(),
                        _videoHeight: wistiaEmbed.videoHeight()
                    }), wistiaEmbed._hasImpl(function () {
                        return wistiaEmbed.postMessage("_hasImpl", !0)
                    }), wistiaEmbed.hasData(function () {
                        return wistiaEmbed.postMessage("updateProperties", {
                            _embedType: wistiaEmbed.embedType,
                            options: h(wistiaEmbed.options),
                            params: h(wistiaEmbed.params),
                            _name: wistiaEmbed.name(),
                            _duration: wistiaEmbed.duration(),
                            _videoWidth: wistiaEmbed.videoWidth(),
                            _videoHeight: wistiaEmbed.videoHeight(),
                            _mediaData: wistiaEmbed._mediaData
                        }), wistiaEmbed.postMessage("hasData", !0)
                    }), wistiaEmbed.embedded(function () {
                        return wistiaEmbed.postMessage("updateProperties", {
                            _embedType: wistiaEmbed.embedType,
                            options: h(wistiaEmbed.options),
                            params: h(wistiaEmbed.params),
                            origAspectRatio: wistiaEmbed.aspect(),
                            origVideoHeight: wistiaEmbed.videoHeight(),
                            origVideoWidth: wistiaEmbed.videoWidth(),
                            origHeight: wistiaEmbed.height(),
                            origWidth: wistiaEmbed.width(),
                            origPluginWidth: wistiaEmbed.extraWidth(),
                            origPluginHeight: wistiaEmbed.extraHeight(),
                            _videoWidth: wistiaEmbed.videoWidth(),
                            _videoHeight: wistiaEmbed.videoHeight(),
                            _width: wistiaEmbed.width(),
                            _height: wistiaEmbed.height()
                        }), wistiaEmbed.postMessage("embedded", !0)
                    }), wistiaEmbed.ready(function () {
                        return wistiaEmbed.postMessage("updateProperties", {
                            options: h(wistiaEmbed.options),
                            params: h(wistiaEmbed.params),
                            _embedType: wistiaEmbed.embedType,
                            _visitorKey: wistiaEmbed.visitorKey(),
                            _eventKey: wistiaEmbed.eventKey(),
                            _width: wistiaEmbed.width(),
                            _height: wistiaEmbed.height(),
                            _videoWidth: wistiaEmbed.videoWidth(),
                            _videoHeight: wistiaEmbed.videoHeight(),
                            _state: wistiaEmbed.state(),
                            _time: wistiaEmbed.time(),
                            _volume: wistiaEmbed.volume()
                        }), wistiaEmbed.postMessage("relay.trigger", "videoready"), a.visitorKey.ready(function () {
                            return wistiaEmbed.postMessage("updateProperties", {_visitorKey: wistiaEmbed.visitorKey()})
                        })
                    })
                }
                if (f)return typeof wistiaEmbed != "undefined" && wistiaEmbed !== null ? wistiaEmbed[f].apply(wistiaEmbed, c) : void 0
            }, a.elem.bind(window, "message", g)
        }
    }
})(Wistia);
var __slice = [].slice, __hasProp = {}.hasOwnProperty, __extends = function (a, b) {
    function d() {
        this.constructor = a
    }

    for (var c in b)__hasProp.call(b, c) && (a[c] = b[c]);
    return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a
};
(function (a) {
    return a.IframeApi = function () {
        function b(b, c) {
            var d = this;
            this.iframe = b, c == null && (c = {}), this.enableFullscreen(), this._bindings = {}, this._injectedPlugins = {}, this._firedPlayCount = 0, this.options = this.params = c, this.plugin || (this.plugin = {}), this.container = this.iframe, this.relay = a.obj.clone(a.bindable), this.ready = new a.StopGo, this.bound = new a.StopGo, this.hasData = new a.StopGo, this._hasImpl = new a.StopGo, this.embedded = new a.StopGo, this.down = new a.StopGo, this.down(!1), this.up = new a.StopGo, this.up(!0), this.uuid = this.uuid || c.uuid || "" + (this.iframe.id || a.seqId()), this.signature = c.signature || "wistia-iframe-" + this.uuid.replace(/"/g, "__QUOTE__").replace(/\n/g, "__NEWLINE__"), this.inferParamsFromSrc(), this.monitor(), a.detect.browser.ltie8 && a.timeout("" + this.uuid + ".ie8_ready", function () {
                return d.ready(!0)
            })
        }

        return b.prototype._log = function () {
            var b, c, d;
            return c = arguments[0], b = 2 <= arguments.length ? __slice.call(arguments, 1) : [], a[c].apply(a, [this.constructor.name, this.hashedId() || "no hashedId", (d = this.container) != null ? d.id : void 0, this.uuid].concat(__slice.call(b)))
        }, b.prototype.error = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["error"].concat(__slice.call(a)))
        }, b.prototype.warn = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["notice"].concat(__slice.call(a)))
        }, b.prototype.notice = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["notice"].concat(__slice.call(a)))
        }, b.prototype.info = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["info"].concat(__slice.call(a)))
        }, b.prototype.debug = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["debug"].concat(__slice.call(a)))
        }, b.prototype.log = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["log"].concat(__slice.call(a)))
        }, b.prototype.inferParamsFromSrc = function () {
            var b, c;
            this.src = this.iframe.src, this.parsedSrc = a.url.parse(this.src), this.origWidth = parseInt(this.iframe.width || a.elem.width(this.iframe), 10), this.origHeight = parseInt(this.iframe.height || a.elem.height(this.iframe), 10), this.origVideoWidth = parseInt(this.parsedSrc.params.videoWidth || ((b = this.parsedSrc.params.videoOptions) != null ? b.videoWidth : void 0) || this.origWidth, 10), this.origVideoHeight = parseInt(this.parsedSrc.params.videoHeight || ((c = this.parsedSrc.params.videoOptions) != null ? c.videoHeight : void 0) || this.origHeight, 10), this.origPluginWidth = this.origWidth - this.origVideoWidth, this.origPluginHeight = this.origHeight - this.origVideoHeight, this.origAspectRatio = this.origVideoHeight ? this.origVideoWidth / this.origVideoHeight : 1.333;
            if (this.parsedSrc.params.videoFoam)return this._videoFoam = a.obj.cast(this.parsedSrc.params.videoFoam)
        }, b.prototype.init = function () {
            var b, c, d, e, f = this;
            if (a.detect.browser.ltie8)return this;
            this.inferParamsFromSrc(), this.relay.bind("iframebound", function () {
                return f.bound(!0)
            }), this.relay.bind("videoready", function () {
                return f.bound(function () {
                    if (!f.looksDown())return f.ready(!0)
                })
            }), a.elem.bind(this.iframe, "load", function () {
                return f.startIframeHandshake()
            }), this.startIframeHandshake(), this.ready(function () {
                if (f.state() === "playing")return f._firedSyntheticPlay = !0, f.trigger("play")
            }), d = this.parsedSrc.params.plugin || {};
            for (b in d)c = d[b], ((e = c.outsideIframe) != null ? e.toString() : void 0) === "true" && this.addPlugin(b, c);
            return this.monitor(), this
        }, b.prototype.rebuild = function () {
            var b, c, d, e, f, g = this;
            if (c = this.iframe.parentNode)this.bound(!1), this.ready(!1), d = document.createElement("span"), d.style.display = "none", b = null, f = function () {
                return g.trigger("beforerebuild"), b = g.iframe.src, c.insertBefore(d, g.iframe), c.removeChild(g.iframe), g.iframe.src = "javascript:return false;"
            }, e = function () {
                return g.iframe.src = b, c.insertBefore(g.iframe, d.nextSibling), c.removeChild(d), d = null, g._state = "beforeplay", g.trigger("afterrebuild")
            }, a.detect.browser.msie && a.detect.browser.version < 9 ? (f(), a.timeout("" + this.uuid + ".rebuild_delay", e, 50)) : (f(), e());
            return this
        }, b.prototype.remove = function () {
            var b = this;
            return this._hasImpl(!1), this.hasData(!1), this.ready(!1), this.embedded(!1), a.eventLoop.remove(this.uuid), a.clearTimeouts(this.uuid), this.bound(function () {
                var c;
                return c = function () {
                    var c;
                    return a.elem.remove(b._foamDummyElem), b.iframe && (c = b.iframe.parentNode) && (b.iframe.wistiaApi = null, c.removeChild(b.iframe), b.iframe.src = "javascript:return false;", b.iframe = b.container = null), b.trigger("down"), a.clearTimeouts(b.uuid), a.eventLoop.remove(b.uuid), b.ready.setQueue([]), b.hasData.setQueue([]), b._hasImpl.setQueue([]), b.trigger("afterremove"), b._bindings = {}, a.removeData("iframe_api." + b.signature), b.unbind
                }, b.relay.bind("_afterremove", c), b.postMessage("remove")
            })
        }, b.prototype.reinitializePlugins = function () {
            return this.postMessage("reinitializePlugins")
        }, b.prototype.monitor = function () {
            var b, c, d, e, f = this;
            return d = this.width(), e = a.elem.width(this.iframe), c = a.elem.height(this.iframe), b = !1, this.embedded(function () {
                return a.eventLoop.add("" + f.uuid + ".monitor", 500, function () {
                    var g, h, i, j, k, l, m, n, o, p, q, r;
                    if (f.up() && f.looksDown()) {
                        f._stateBeforeDown = f._state;
                        if (f.embedType() === "flash")try {
                            f.rebuild()
                        } catch (s) {
                            g = s
                        } else f.pause();
                        f.ready(!1), f.down(!0), f.up(!1), f.trigger("down")
                    } else f.down() && f.looksUp() && (f.down(!1), f.up(!0), f.embedType() === "flash" ? f.rebuild() : (f.ready(!0), f._stateBeforeDown === "playing" && f.play()), f.trigger("up"));
                    if (f.hasVideoFoam() && f.up() && f.looksUp()) {
                        f._parentBoxSizing == null && (f._parentBoxSizing = a.elem.style(f.iframe.parentNode, "box-sizing")), f._parentBoxSizing === "border-box" || a.detect.browser.msie && a.detect.browser.version < 9 ? (f._foamDummyElem || (f._foamDummyElem = a.elem.fromObject({
                            "class": "wistia_video_foam_dummy",
                            "data-source-container-id": f.container.id,
                            style: {
                                border: 0,
                                display: "block",
                                height: 0,
                                margin: 0,
                                padding: 0,
                                position: "static",
                                visibility: "hidden",
                                width: "auto"
                            }
                        }), a.elem.before(f.iframe, f._foamDummyElem)), m = a.elem.width(f._foamDummyElem)) : m = a.elem.width(f.iframe.parentNode);
                        if (d !== m || !b)b = !0, l = m, k = l - f.extraWidth(), j = f.heightForWidth(k), i = j + f.extraHeight(), ((o = f.videoFoam()) != null ? o.maxHeight : void 0) && i > f.videoFoam().maxHeight && (i = f.videoFoam().maxHeight, j = i - f.extraHeight(), k = f.widthForHeight(j), l = k + f.extraWidth()), ((p = f.videoFoam()) != null ? p.maxWidth : void 0) && l > f.videoFoam().maxWidth && (l = f.videoFoam().maxWidth, k = l - f.extraWidth(), j = f.heightForWidth(k), i = j + f.extraHeight()), ((q = f.videoFoam()) != null ? q.minHeight : void 0) && i < f.videoFoam().minHeight && (i = f.videoFoam().minHeight, j = i - f.extraHeight(), k = f.widthForHeight(j), l = k + f.extraWidth()), ((r = f.videoFoam()) != null ? r.minWidth : void 0) && l < f.videoFoam().minWidth && (l = f.videoFoam().minWidth, k = l - f.extraWidth(), j = f.heightForWidth(k), i = j + f.extraHeight()), f.width(l).height(i), a.timeout("" + f.uuid + ".delayed_resize", function () {
                            return f.width(l).height(i)
                        }, 1e3), d = m
                    }
                    if (a.detect.browser.ltie8) {
                        n = a.elem.width(f.iframe), h = a.elem.height(f.iframe), n !== e && (f.trigger("widthchange", n, e), e = n);
                        if (h !== e)return f.trigger("heightchange", h, c), c = h
                    }
                })
            })
        }, b.prototype.hasVideoFoam = function () {
            return this.videoFoam() != null ? this.videoFoam() : /videoFoam=true/.test(this.src)
        }, b.prototype.stopMonitoring = function () {
            return a.eventLoop.remove("" + this.uuid + ".monitor")
        }, b.prototype.looksDown = function () {
            return !this.iframe || !a.elem.inDom(this.iframe) || a.elem.isHidden(this.iframe)
        }, b.prototype.looksUp = function () {
            return !this.looksDown()
        }, b.prototype._trigger = function () {
            var b, c, d = this;
            c = arguments[0], b = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
            if (c === "play") {
                this._firedPlayCount += 1;
                if (this.embedType() === "flash" && this.params.autoPlay && this._firedPlayCount === 1 && this._firedSyntheticPlay)return
            }
            return a.timeout("" + this.uuid + ".trigger." + c, function () {
                return d.trigger.apply(d, [c].concat(__slice.call(b)))
            })
        }, b.prototype.play = function () {
            var a = this;
            return this.ready(function () {
                return a.postMessage("play")
            }), this
        }, b.prototype.pause = function () {
            var a = this;
            return this.ready(function () {
                return a.postMessage("pause")
            }), this
        }, b.prototype.time = function (a) {
            var b = this;
            return a != null ? (this.ready(function () {
                return b.postMessage("time", a)
            }), this) : this._time || 0
        }, b.prototype.volume = function (a) {
            var b = this;
            return a != null ? (this.ready(function () {
                return b.postMessage("volume", a)
            }), this) : this._volume || 0
        }, b.prototype.setEmail = function (a) {
            return this.email(a)
        }, b.prototype.email = function (a) {
            var b, c = this;
            return a === void 0 ? this._email || ((b = this.params) != null ? b.trackEmail : void 0) || null : (this.bound(function () {
                return c.postMessage("email", a)
            }), this._email = a)
        }, b.prototype.foreignData = function (b) {
            var c = this;
            if (!a.detect.json)return;
            if (b === void 0)return this._foreignData || null;
            if (b === null)return this.bound(function () {
                return c.postMessage("foreignData", b)
            }), this._foreignData = null;
            if (!a.obj.isObject(b))throw"foreignData can only be an Object";
            return b = a.obj.clone(b), this.bound(function () {
                return c.postMessage("foreignData", b)
            }), this._foreignData = b
        }, b.prototype.height = function (b) {
            var c = this;
            return b != null ? (b = parseInt(b, 10), this.bound(function () {
                return c.postMessage("height", b)
            }), this.iframe.style.height = "" + b + "px", this.iframe.height = b, this) : a.elem.isHidden(this.iframe) ? this.iframe.style.height != null ? parseInt(this.iframe.style.height, 10) : parseInt(this.iframe.height, 10) : a.elem.height(this.iframe)
        }, b.prototype.width = function (b) {
            var c = this;
            return b != null ? (b = parseInt(b, 10), this.bound(function () {
                return c.postMessage("width", b)
            }), this.iframe.style.width = "" + b + "px", this.iframe.width = b, this) : a.elem.isHidden(this.iframe) ? this.iframe.style.width != null ? parseInt(this.iframe.style.width, 10) : parseInt(this.iframe.width, 10) : a.elem.width(this.iframe)
        }, b.prototype.videoHeight = function (b) {
            var c, d = this;
            return b != null ? (b = parseInt(b, 10), this.bound(function () {
                return d.postMessage("videoHeight", b)
            }), this.embedded(function () {
                var c;
                d._height != null ? c = b + d._height - d._videoHeight : c = b + d.origPluginHeight, d.iframe.style.height = "" + c + "px", d.iframe.height = c;
                if (a.detect.browser.ltie8)return d._videoHeight = b
            }), this) : this._videoHeight > 0 ? this._videoHeight : (c = this.src.match(/videoHeight=(\d+)/)) ? parseInt(c[1], 10) : a.elem.height(this.iframe)
        }, b.prototype.videoWidth = function (b) {
            var c, d = this;
            return b != null ? (b = parseInt(b, 10), this.bound(function () {
                return d.postMessage("videoWidth", b)
            }), this.embedded(function () {
                var c;
                d._width != null ? c = b + d._width - d._videoWidth : c = b + d.origPluginWidth, d.iframe.style.width = "" + c + "px", d.iframe.width = c;
                if (a.detect.browser.ltie8)return d._videoWidth = b
            }), this) : this._videoWidth > 0 ? this._videoWidth : (c = this.src.match(/videoWidth=(\d+)/)) ? parseInt(c[1], 10) : a.elem.width(this.iframe)
        }, b.prototype.extraHeight = function () {
            return this.origPluginHeight ? this.origPluginHeight : this._height ? this._height - this._videoHeight : 0
        }, b.prototype.extraWidth = function () {
            return this.origPluginWidth ? this.origPluginWidth : this._width ? this._width - this._videoWidth : 0
        }, b.prototype.heightForWidth = function (a) {
            return Math.round(a / this.aspect())
        }, b.prototype.widthForHeight = function (a) {
            return Math.round(a * this.aspect())
        }, b.prototype.aspect = function () {
            return this.origAspectRatio || 1.333
        }, b.prototype.addPlugin = function (b, c) {
            var d, e = this;
            return c == null && (c = {}), c.on !== !1 && (this.injectedPlugin(b) || (c.outsideIframe ? a.plugin._inject(this, b, c) : a.detect.browser.msie ? (d = a.url.parse(this.iframe.src), a.obj.set(d.params, ["plugin", b], c), this.iframe.src = d.absolute()) : this.bound(function () {
                return e.postMessage("addPlugin", b, c)
            }), this._injectedPlugins[b] = !0)), this
        }, b.prototype.videoFoam = function (a) {
            return a != null ? this._videoFoam = a : this._videoFoam
        }, b.prototype.hasPlugin = function (a) {
            var b;
            return !!(this._injectedPlugins[a] || ((b = this.parsedSrc.params.plugin) != null ? b[a] : void 0))
        }, b.prototype.injectedPlugin = function (a) {
            return !!this._injectedPlugins[a]
        }, b.prototype.duration = function () {
            return this._duration || null
        }, b.prototype.state = function () {
            return this._state || "beforeplay"
        }, b.prototype.name = function () {
            return this._name || ""
        }, b.prototype.hashedId = function () {
            return this._hashedId || this.parsedSrc.path[this.parsedSrc.path.length - 1]
        }, b.prototype.embedType = function () {
            return this._embedType
        }, b.prototype.eventKey = function () {
            return this._eventKey || null
        }, b.prototype.visitorKey = function () {
            return this._visitorKey || null
        }, b.prototype.getEventKey = function () {
            return this.eventKey()
        }, b.prototype.getVisitorKey = function () {
            return this.visitorKey()
        }, b.prototype.startIframeHandshake = function () {
            return this.postMessage("startIframeHandshake", this.signature)
        }, b.prototype.postMessage = function () {
            var b, c, d, e;
            e = arguments[0], b = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
            if (a.detect.browser.ltie8)return;
            try {
                if (!this.iframe.contentWindow.postMessage)return
            } catch (f) {
                c = f;
                return
            }
            return d = {
                signature: this.signature,
                method: e,
                args: b
            }, d = JSON.stringify(d), this.iframe.contentWindow.postMessage(d, "*")
        }, b.prototype.updateProperties = function (b) {
            var c, d, e;
            e = [];
            for (c in b)d = b[c], a.obj.isObject(d) ? e.push(this[c] = a.obj.merge({}, this[c], d)) : e.push(this[c] = d);
            return e
        }, b.prototype.enableFullscreen = function () {
            var a, b, c, d, e, f;
            d = "allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen".split(" "), f = [];
            for (b = 0, c = d.length; b < c; b++)a = d[b], f.push((e = this.iframe) != null ? e.setAttribute(a, a) : void 0);
            return f
        }, b
    }(), a.mixin(a.IframeApi.prototype, a.bindable), a.PlaylistIframeAPI = function (b) {
        function c() {
            var b = this;
            c.__super__.constructor.apply(this, arguments), this.relay.bind("boundcurrentvideo", function () {
                return b._currentVideo = (new a.IframeApi(b.iframe, {
                    uuid: "" + b.uuid + "-current-video",
                    signature: "" + b.signature + "-current-video"
                })).init()
            })
        }

        return __extends(c, b), c.prototype.embed = function (a, b) {
            var c = this;
            return this.ready(function () {
                return c.postMessage("embed", a, b)
            })
        }, c.prototype.play = function (a, b) {
            var c = this;
            return this.ready(function () {
                return c.postMessage("play", a, b)
            })
        }, c.prototype.currentVideo = function () {
            return this._currentVideo
        }, c
    }(a.IframeApi), window.wistiaBindIframes = function () {
        var b, c, d, e, f, g, h, i, j, k;
        d = document.getElementsByTagName("iframe"), e = [];
        for (f = 0, h = d.length; f < h; f++)c = d[f], !c.wistiaApi && (/wistia_embed/.test(c.className) || c.name === "wistia_embed") ? (c.wistiaApi = new a.IframeApi(c), a.data("iframe_api." + c.wistiaApi.signature, c.wistiaApi), c.wistiaApi.init(), e.push(c.wistiaApi), window.wistiaApi = c.wistiaApi) : !c.wistiaApi && (/wistia_playlist/.test(c.className) || c.name === "wistia_playlist") && (c.wistiaApi = new a.PlaylistIframeAPI(c), a.data("iframe_api." + c.wistiaApi.signature, c.wistiaApi), c.wistiaApi.init(), e.push(c.wistiaApi), window.wistiaApi = c.wistiaApi);
        (j = window.wistiaEmbeds) != null && j.bindHandles(), k = [];
        for (g = 0, i = e.length; g < i; g++)b = e[g], k.push(b.trigger("initembed"));
        return k
    }, a._initializers.initIframeApi = function () {
        wistiaBindIframes();
        if (!window._inWistiaIframe && !window.wistiaDispatch && !window._wistiaIframeShim)return window.wistiaDispatch == null && (window.wistiaDispatch = function (b) {
            var c, d;
            if (b.data === "new-wistia-iframe")return wistiaBindIframes();
            typeof b.data == "string" && /wistia-iframe-/.test(b.data) ? d = a.JSON.parse(b.data) : d = b.data;
            if (/wistia-iframe-/.test(d.signature)) {
                if (!(c = a.data("iframe_api." + d.signature)))return typeof console != "undefined" && console !== null ? console.log("Ignored " + d.method + " call, no handle for " + d.signature) : void 0;
                if (d.method === "relay.trigger")return a.obj.get(c, d.method).apply(c.relay, d.args);
                if (d.method !== "play" || !(a.detect.iphone || a.detect.ipad || a.detect.android))return a.obj.get(c, d.method).apply(c, d.args)
            }
        }), a.elem.bind(window, "message", wistiaDispatch)
    }, a._destructors.destroyIframeApi = function () {
        return window.wistiaDispatch && a.elem.unbind(window, "message", window.wistiaDispatch), window.wistiaDispatch = null
    }
})(Wistia);
var __hasProp = {}.hasOwnProperty, __extends = function (a, b) {
    function d() {
        this.constructor = a
    }

    for (var c in b)__hasProp.call(b, c) && (a[c] = b[c]);
    return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a
}, __slice = [].slice;
(function (a) {
    if (a.EmbedListener)return;
    return a.EmbedListener = function (b) {
        function c() {
            var b = this;
            this.uuid = a.seqId(), this.bindHandles(), this.bind("down", function () {
                return b.info("got down event, prune and rebind handles"), a.timeout("prune_zombies_later", function () {
                    return b.pruneZombies(), b.bindHandles()
                })
            }), this.bind("up", function (a) {
                return b.info("got up event, set _bound=false for", a), a._bound = !1, b.bindHandles()
            })
        }

        return __extends(c, b), c.prototype._log = function () {
            var b, c;
            return c = arguments[0], b = 2 <= arguments.length ? __slice.call(arguments, 1) : [], a[c].apply(a, [this.constructor.name].concat(__slice.call(b)))
        }, c.prototype.error = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["error"].concat(__slice.call(a)))
        }, c.prototype.warn = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["notice"].concat(__slice.call(a)))
        }, c.prototype.notice = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["notice"].concat(__slice.call(a)))
        }, c.prototype.info = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["info"].concat(__slice.call(a)))
        }, c.prototype.debug = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["debug"].concat(__slice.call(a)))
        }, c.prototype.log = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["log"].concat(__slice.call(a)))
        }, c.prototype.bindHandles = function () {
            var b, c, d, e, f, g;
            this._marshalEvent || (d = this, this._marshalEvent = function () {
                var b, c;
                return c = arguments[0], b = 2 <= arguments.length ? __slice.call(arguments, 1) : [], a.obj.castDeep(b), d.trigger.apply(d, [c, this].concat(__slice.call(b)))
            }), b = this.allUnboundHandles(), this.info("bindHandles", b), g = [];
            for (e = 0, f = b.length; e < f; e++)c = b[e], this.info("bind to all events for", c), c.unbind("all", this._marshalEvent), c.bind("all", this._marshalEvent), c._bound = !0, g.push(this.push(c));
            return g
        }, c.prototype.pruneZombies = function () {
            var a, b, c, d, e, f, g, h;
            this.info("pruneZombies"), b = [], g = this.allBoundHandles();
            for (c = 0, e = g.length; c < e; c++)a = g[c], a.looksDown() ? this.info("prune zombie", a) : b.push(a);
            this.length = 0, h = [];
            for (d = 0, f = b.length; d < f; d++)a = b[d], h.push(this.push(a));
            return h
        }, c.prototype.allBoundHandles = function () {
            var a, b, c, d, e;
            b = [], e = this.allHandles();
            for (c = 0, d = e.length; c < d; c++)a = e[c], a._bound && b.push(a);
            return b
        }, c.prototype.allUnboundHandles = function () {
            var a, b, c, d, e;
            b = [], e = this.allHandles();
            for (c = 0, d = e.length; c < d; c++)a = e[c], a._bound || b.push(a);
            return b
        }, c.prototype.allHandles = function () {
            return this.apiHandles().concat(this.iframeApiHandles())
        }, c.prototype.iframeApiHandles = function () {
            var a, b, c, d, e;
            this.iframes || (this.iframes = document.getElementsByTagName("iframe")), b = [], e = this.iframes;
            for (c = 0, d = e.length; c < d; c++)a = e[c], a.wistiaApi && b.push(a.wistiaApi);
            return b
        }, c.prototype.apiHandles = function () {
            var a, b, c, d;
            b = [];
            if (window.Wistia) {
                d = Wistia.data("video");
                for (c in d)a = d[c], b.push(a)
            }
            return b
        }, c.prototype.each = function (a) {
            var b, c, d, e, f;
            e = this.allBoundHandles(), f = [];
            for (c = 0, d = e.length; c < d; c++)b = e[c], f.push(a(b));
            return f
        }, c.prototype.onFind = function (a) {
            var b, c = this;
            return b = function (b) {
                return b.up(function () {
                    return c.info("onFind", b), a(b), b.unbind
                })
            }, this.each(b), this.bind("initembed", b)
        }, c
    }(Array), a.mixin(a.EmbedListener.prototype, a.bindable), a._initializers.initEmbedShepherd = function () {
        return window.wistiaEmbeds ? (a.info("window.wistiaEmbeds already exists, call bindHandles"), typeof wistiaEmbeds.bindHandles == "function" && wistiaEmbeds.bindHandles()) : (a.info("initialize embed shepherd"), window.wistiaEmbeds = new a.EmbedListener), a.info("call window.wistiaEmbedShepherdReady()"), typeof window.wistiaEmbedShepherdReady == "function" ? window.wistiaEmbedShepherdReady() : void 0
    }, a._destructors.destroyEmbedShepherd = function () {
        var a;
        return (a = window.wistiaEmbeds) != null && a.each(function (a) {
            return a.unbind("all", window.wistiaEmbeds._marshalEvent), a._bound = !1
        }), window.wistiaEmbeds = null
    }
})(Wistia);
var __slice = [].slice;
(function (a) {
    if (a.integrations)return;
    return a.integrations = {}, a.integrations._all = {}, a.integrations.register = function (b, c) {
        var d, e, f;
        return d = function (d) {
            var e;
            return c[d] ? (e = function () {
                var e, f;
                return f = arguments[0], e = 2 <= arguments.length ? __slice.call(arguments, 1) : [], f.hasData(function () {
                    var g, h, i;
                    if (((g = f.params) != null ? g[a.util.camelCase(b)] : void 0) === !1)return;
                    if (b === "google_analytics" || ((h = f._mediaData) != null ? (i = h.integrations) != null ? i[b] : void 0 : void 0))return c[d].apply(c, [f].concat(__slice.call(e)))
                })
            }, e) : null
        }, e = function (d) {
            var e;
            return c[d] ? (c.initialized = !1, e = function () {
                var e, f;
                return f = arguments[0], e = 2 <= arguments.length ? __slice.call(arguments, 1) : [], f.hasData(function () {
                    var g, h, i;
                    if (((g = f.params) != null ? g[a.util.camelCase(b)] : void 0) === !1)return;
                    if (!c.initialized && (b === "google_analytics" || ((h = f._mediaData) != null ? (i = h.integrations) != null ? i[b] : void 0 : void 0)))return c[d].apply(c, [f].concat(__slice.call(e))), c.initialized = !0
                })
            }, e) : null
        }, f = {
            pushPercentWatchedEvent: d("pushPercentWatchedEvent"),
            pushPlayEvent: d("pushPlayEvent"),
            pushConversionEvent: d("pushConversionEvent"),
            pushConversionMidrollLinkEvent: d("pushConversionMidrollLinkEvent"),
            pushConversionPostRollEvent: d("pushConversionPostRollEvent"),
            onFind: d("onFind"),
            onInit: e("onInit")
        }, a.integrations._all[b] = f
    }, a.integrations.each = function () {
        var b, c, d, e, f, g;
        c = arguments[0], b = 2 <= arguments.length ? __slice.call(arguments, 1) : [], f = a.integrations._all, g = [];
        for (e in f)d = f[e], typeof c == "string" ? g.push(typeof d[c] == "function" ? d[c].apply(d, b) : void 0) : g.push(c(d, e));
        return g
    }, a._initializers.initIntegrations = function () {
        if (a.integrations._setup)return;
        return a.integrations.setup()
    }, a._destructors.destroyIntegrations = function () {
        return typeof wistiaEmbeds != "undefined" && wistiaEmbeds !== null && wistiaEmbeds.each(function (a) {
            return typeof a._destroyIntegrations == "function" ? a._destroyIntegrations() : void 0
        }), this._all = {}, a.integrations._setup = !1
    }, a.integrations.setup = function () {
        if (window._inWistiaIframe)return;
        return a.integrations._setup = !0, wistiaEmbeds.onFind(function (b) {
            var c, d, e, f, g, h, i, j;
            g = [], i = function () {
                var c, d, e, f, h;
                f = [.25, .5, .75, 1], h = [];
                for (d = 0, e = f.length; d < e; d++)c = f[d], h.push(function (c) {
                    var d;
                    return d = function (d) {
                        d = Math.round(d * 100) / 100;
                        if (d >= c)return a.integrations.each("pushPercentWatchedEvent", b, c), b.unbind
                    }, b.bind("percentwatchedchanged", d), g.push(d)
                }(c));
                return h
            }, d = function () {
                var c;
                return (c = a.integrations).each.apply(c, ["pushConversionEvent", b].concat(__slice.call(arguments)))
            }, e = function (c) {
                return a.integrations.each("pushConversionMidrollLinkEvent", b, c)
            }, f = function (c) {
                return a.integrations.each("pushConversionPostRollEvent", b, c)
            }, h = function () {
                return a.integrations.each("pushPlayEvent", b), b.unbind
            }, c = function () {
                return b.hasData(function () {
                    return i(), b.bind("conversion", d), b.bind("conversion-link", e), b.bind("conversion-postRoll", f), b.bind("play", h)
                })
            }, j = function () {
                var a, c, e;
                for (c = 0, e = g.length; c < e; c++)a = g[c], b.unbind("percentwatchedchanged", a);
                return g = [], b.unbind("play", h), b.unbind("conversion", d)
            }, b._initIntegrations = function () {
                return c()
            }, b._destroyIntegrations = function () {
                return j()
            }, b.bind("beforereplace", j), b.bind("afterreplace", c), c(), a.integrations.each("onInit", b), a.integrations.each("onFind", b);
            if (b.state === "playing")return h()
        })
    }
})(Wistia), function (a) {
    return a.integrations.register("google_analytics", {
        pushPercentWatchedEvent: function (a, b) {
            return this._pushEvent("" + Math.round(b * 100) + "% Watched", a.name())
        }, pushPlayEvent: function (a) {
            return this._pushEvent("Play", a.name())
        }, pushConversionEvent: function (a, b, c) {
            return this._pushEvent("Conversion", a.name())
        }, pushConversionMidrollLinkEvent: function (a, b) {
            return this._pushEvent("Clicked Link - " + b.link, a.name())
        }, pushConversionPostRollEvent: function (a, b) {
            return this._pushEvent("Clicked Link - " + b.link, a.name())
        }, _gaTrackers: function () {
            var a, b, c, d, e, f, g, h, i, j, k;
            a = [];
            if (typeof ga != "undefined" && ga !== null ? ga.getAll : void 0) {
                i = ga.getAll();
                for (c = 0, f = i.length; c < f; c++)b = i[c], a.push(b.get("name"))
            }
            if (typeof gaTracker != "undefined" && gaTracker !== null ? gaTracker.getAll : void 0) {
                j = gaTracker.getAll();
                for (d = 0, g = j.length; d < g; d++)b = j[d], a.push(b.get("name"))
            }
            if (typeof __gaTracker != "undefined" && __gaTracker !== null ? __gaTracker.getAll : void 0) {
                k = __gaTracker.getAll();
                for (e = 0, h = k.length; e < h; e++)b = k[e], a.push(b.get("name"))
            }
            return a
        }, _pushEvent: function (b, c) {
            var d, e, f, g, h, i;
            if (window[window.GoogleAnalyticsObject] != null) {
                d = window[window.GoogleAnalyticsObject], h = this._gaTrackers(), i = [];
                for (f = 0, g = h.length; f < g; f++)e = h[f], d("" + e + ".send", "event", "Video", b, c), i.push(a.info("Push to " + window.GoogleAnalyticsObject + ": " + e + ".send, event, Video, " + b + ", " + c));
                return i
            }
            if (window._gaq != null)return _gaq.push(["_trackEvent", "Video", b, c]), a.info("Push to _gaq: _trackEvent, Video, " + b + ", " + c)
        }
    })
}(Wistia);
var __slice = [].slice;
(function (a) {
    return a.integrations.register("hubspot", {
        onFind: function (a) {
            var b = this;
            return window._hsq.push(function (c) {
                return b._setForeignData(a, c)
            })
        }, onInit: function () {
            var b;
            return window._hsq == null && (window._hsq = []), b = !1, a.visitorKey.ready(function () {
                if (b)return;
                return _hsq.push(["identify", {wistia_visitor_key: a.visitorKey.value()}]), b = !0
            })
        }, pushPercentWatchedEvent: function (a, b) {
            return this._pushEvent(a.name(), "" + Math.round(b * 100) + "% Watched")
        }, pushPlayEvent: function (a) {
            return this._pushEvent(a.name(), "play")
        }, pushConversionEvent: function () {
            var a, b, c;
            return c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? __slice.call(arguments, 2) : [], this._pushEvent(c.name(), "conversion")
        }, pushConversionMidrollLinkEvent: function (a, b) {
            return this._pushEvent(a.name(), "click - " + b.link)
        }, pushConversionPostRollEvent: function (a, b) {
            return this._pushEvent(a.name(), "click - " + b.link)
        }, _pushEvent: function (a, b) {
            return _hsq.push(["trackEvent", {id: 'Video "' + a + '": ' + b}])
        }, _setForeignData: function (a, b) {
            var c, d, e;
            return d = document.location.href.split("?")[0], c = ((e = document.getElementsByTagName("title")[0]) != null ? e.innerHTML : void 0) || "", c = c.replace(/^[\n\s]+/, "").replace(/[\n\s]+$/, ""), c = c.replace(/[^\x00-\x7F]/g, ""), a.foreignData({
                hubspot_hutk: b.utk.visitor,
                wistia_visitor_key: a.visitorKey(),
                page_url: d,
                page_name: c,
                canonical_url: b.canonicalUrl,
                page_id: b.pageId,
                content_type: b.contentType
            })
        }
    })
})(Wistia), function (a) {
    return a.integrations.register("marketo", {
        onFind: function (a) {
            return this._setForeignData(a)
        }, pushPercentWatchedEvent: function (a, b) {
            return this._pushEvent(a, "" + Math.round(b * 100) + "% Watched")
        }, pushPlayEvent: function (a) {
            return this._pushEvent(a, "Played")
        }, pushConversionEvent: function (a, b, c) {
            return this._pushEvent(a, "Conversion: " + c)
        }, pushConversionMidrollLinkEvent: function (a, b) {
            return this._pushEvent(a, "Clicked Link - " + b.link)
        }, pushConversionPostRollEvent: function (a, b) {
            return this._pushEvent(a, "Clicked Link - " + b.link)
        }, _pushEvent: function (a, b) {
            if (!window.Munchkin)return;
            return this._setForeignData(a), Munchkin.munchkinFunction("visitWebPage", {url: ' - Wistia Video: "' + a.name() + '" - ' + b})
        }, _setForeignData: function (a, b) {
            return b == null && (b = ""), this._cookie || this._setCookie(), a.foreignData({marketoCookie: this._cookie})
        }, _setCookie: function () {
            return this._cookie = a.cookie("_mkto_trk")
        }
    })
}(Wistia);
var __slice = [].slice;
(function (a) {
    var b;
    b = a;
    if (b.VisitorKey)return;
    return b.DISTILLERY_COOKIE = "__distillery", b.VisitorKey = function () {
        function a() {
            this.ready = new b.StopGo, window.wistiaIframeShim === !1 || b.detect.browser.msie && (b.detect.browser.version < 8 || b.detect.browser.quirks) ? (this.savedValue() || (this._origin = "new", this.persist(b.VisitorKey.generate())), this.ready(!0)) : window._wistiaIframeShim ? this.setupInsideShim() : (this.setupOutsideShim(), this.executeShim("send_visitor_key|" + (this.savedValue() || ""), !0))
        }

        return a.prototype._log = function () {
            var a, c;
            return c = arguments[0], a = 2 <= arguments.length ? __slice.call(arguments, 1) : [], b[c].apply(b, ["visitorKey"].concat(__slice.call(a)))
        }, a.prototype.error = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["error"].concat(__slice.call(a)))
        }, a.prototype.warn = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["notice"].concat(__slice.call(a)))
        }, a.prototype.notice = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["notice"].concat(__slice.call(a)))
        }, a.prototype.info = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["info"].concat(__slice.call(a)))
        }, a.prototype.debug = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["debug"].concat(__slice.call(a)))
        }, a.prototype.log = function () {
            var a;
            return a = 1 <= arguments.length ? __slice.call(arguments, 0) : [], this._log.apply(this, ["log"].concat(__slice.call(a)))
        }, a.prototype.setupInsideShim = function () {
            var a = this;
            return this.info("@setupInsideShim"), this._insideShim == null && (this._insideShim = function (c) {
                var d, e, f, g, h;
                if (typeof c.data == "string" && /^send_visitor_key/.test(c.data))return h = c.data.split("|"), d = h[0], g = h[1], a.isValid() ? (e = b.localStorage(b.DISTILLERY_COOKIE) ? (a.info("post up visitor key from localStorage", a.value()), "localstorage") : b.cookie(b.DISTILLERY_COOKIE) ? (a.info("post up visitor key from cookie", a.value()), "cookie") : (a.notice("post up visitor key from memory", a.value()), "memory"), g && g !== a.value() && (a.notice("suggestedKey provided, but has a different value than shim:", g, "vs", a.value()), e += "-conflict"), parent.postMessage("visitor_key|" + a.value() + "|" + e, "*")) : b.VisitorKey.isValid(g) ? (a.info("post up suggested visitor key from parent", g), a.persist(g), parent.postMessage("visitor_key|" + g + "|suggested", "*")) : (f = b.VisitorKey.generate(), a.info("post up newly generated key", f), a.persist(f), parent.postMessage("visitor_key|" + f + "|new", "*")), b.elem.unbind;
                if (typeof c.data == "string" && /^clear_visitor_key/.test(c.data))return a.info("insideShim clear visitor key"), a.clearFromCurrentDomain(), b.elem.unbind
            }), b.elem.rebind(window, "message", this._insideShim)
        }, a.prototype.setupOutsideShim = function () {
            var a = this;
            return this.info("@setupOutsideShim"), this._outsideShim == null && (this._outsideShim = function (c) {
                var d, e, f, g;
                b.clearTimeouts("shim_timeout");
                if (typeof c.data == "string" && /^visitor_key/.test(c.data))return g = c.data.split("|"), d = g[0], f = g[1], e = g[2], a._origin = e, a.info("outsideShim got message " + c.data), a.persist(f), b.timeout("remove_iframe_shim", function () {
                    return b.elem.remove(a._iframeShim)
                }, 1e3), b.timeout("visitor_key_ready", function () {
                    return a.info("visitorKey ready(true)"), a.ready(!0)
                }), b.elem.unbind
            }), b.elem.rebind(window, "message", this._outsideShim)
        }, a.prototype.executeShim = function (a, c) {
            var d, e = this;
            c == null && (c = !1), this.info("@executeShim", a, c), this._iframeShim = b.elem.fromObject({
                allowtransparency: "true",
                frameborder: 0,
                height: 1,
                scrolling: "no",
                src: "" + b.proto() + "//" + b.remote.embedHost() + "/embed/iframe_shim?" + b.url.jsonToParams(this.ev1ParamsForShim()),
                style: {height: "1px", left: "-200px", position: "absolute", top: "-200px", width: "1px"},
                tagName: "iframe",
                width: 1
            }), this._iframeShim.onload = function () {
                return e.info("post request for visitor key", a), e._iframeShim.contentWindow.postMessage(a, "*")
            }, (d = document.getElementsByTagName("script")[0]) && b.elem.after(d, this._iframeShim);
            if (c)return b.timeout("shim_timeout", function () {
                return e.notice("shim timeout for", a), b.elem.unbind(window, "message", e._outsideShim), e.savedValue() || (e._origin = "timeout", e.persist(b.VisitorKey
                    .generate())), e.ready(!0)
            }, 5e3)
        }, a.prototype.persist = function (a) {
            var c;
            if (!b.VisitorKey.isValid(a)) {
                this.error(new Error("Attempted to persist invalid visitor key '" + a + "'"));
                return
            }
            this.info("@persist", a), this._value = a, this.localStorageValue() !== this._value && b.localStorage(b.DISTILLERY_COOKIE, this._value);
            if (this.cookieValue() !== this._value)return c = new Date, c.setTime(c.getTime() + 31536e6), b.cookie(b.DISTILLERY_COOKIE, this._value, {
                expires: c,
                path: "/"
            })
        }, a.prototype.clear = function () {
            return this.info("clear"), this.clearFromCurrentDomain(), window._wistiaIframeShim || this.clearFromShimDomain(), this._value = null
        }, a.prototype.clearFromCurrentDomain = function () {
            return b.removeLocalStorage(b.DISTILLERY_COOKIE, null), b.cookie(b.DISTILLERY_COOKIE, "", {
                expires: 0,
                path: "/"
            })
        }, a.prototype.clearFromShimDomain = function () {
            return this.executeShim("clear_visitor_key")
        }, a.prototype.value = function () {
            return this._value || this.savedValue()
        }, a.prototype.savedValue = function () {
            return this.localStorageValue() || this.cookieValue()
        }, a.prototype.cookieValue = function () {
            return b.cookie(b.DISTILLERY_COOKIE)
        }, a.prototype.localStorageValue = function () {
            return b.localStorage(b.DISTILLERY_COOKIE)
        }, a.prototype.isValid = function () {
            return b.VisitorKey.isValid(this.value())
        }, a.prototype.origin = function () {
            return this._origin
        }, a.prototype.ev1ParamsForShim = function () {
            var a, c, d, e, f, g, h, i, j, k;
            h = document.getElementsByTagName("script"), e = {domain: "net"};
            for (j = 0, k = h.length; j < k; j++) {
                g = h[j];
                if (i = g.getAttribute("src")) {
                    if (!i.indexOf)continue;
                    a = i.indexOf(b.remote.embedHost()) >= 0 ? "com" : i.indexOf(b.remote.externalEmbedHost()) >= 0 ? "net" : null, c = i.indexOf("/E-v1.js") >= 0, d = i.indexOf("/static/") >= 0;
                    if (a && c)return f = {domain: a}, d && (f.legacy = !0), f
                }
            }
            return {domain: "net"}
        }, a.prototype.cancelShim = function () {
            this._iframeShim && (b.elem.remove(this._iframeShim), this._iframeShim = null);
            if (this._outsideShim)return b.elem.unbind(window, "message", this._outsideShim)
        }, a.isValid = function (a) {
            return (a != null ? a.length : void 0) > 25 && /^[a-z0-9_\-\.]+$/i.test(a)
        }, a.generate = function () {
            return b.uniqId("v20150227_")
        }, a
    }(), b._initializers.initVisitorKey = function () {
        return b.visitorKey = new b.VisitorKey
    }, b._destructors.destroyVisitorKey = function () {
        var a;
        return (a = b.visitorKey) != null && a.cancelShim(), b.visitorKey = null
    }
})(Wistia), function (a) {
    if (a.TimeHelper)return;
    return a.TimeHelper = function () {
        function d() {
        }

        var a, b, c;
        return c = function (a) {
            var c, d, e;
            return a = b(a), e = Math.floor(a), c = Math.floor(e / 3600), e -= c * 3600, d = Math.floor(e / 60), e -= d * 60, {
                hours: c,
                minutes: d,
                seconds: e
            }
        }, b = function (a) {
            return Math.abs(parseInt(a)) | 0
        }, d.secondsToIso8601 = function (a) {
            var b, d, e, f, g;
            return b = c(a), d = b.hours.toString(), e = b.minutes.toString(), f = b.seconds.toString(), g = ["00".substring(d.length) + d, "00".substring(e.length) + e, "00".substring(f.length) + f], g.join(":")
        }, d.secondsToHumanDuration = function (a) {
            var d, e, f, g, h;
            a = b(a), d = c(a), g = {
                hours: d.hours !== 0 ? "" + d.hours + "h" : void 0,
                minutes: d.minutes !== 0 || a >= 60 && d.seconds !== 0 ? "" + d.minutes + "m" : void 0,
                seconds: d.seconds !== 0 || d.minutes === 0 && a < 3600 ? "" + d.seconds + "s" : void 0
            }, f = "";
            for (e in g)h = g[e], h != null && (f += h);
            return f
        }, d.TRIM_REGEXP = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, d.isValidHumanDuration = function (a) {
            var b, c, d, e, f, g, h, i, j, k, l, m;
            if (a === void 0 || a === null || a === "")return !1;
            a = ("" + a).replace(this.TRIM_REGEXP, "");
            if (a.match(/[\dhms]+/) === null || a.match(/[hms]+/) === null)return !1;
            if (a.match(/[\dhms]+/)[0] !== a)return !1;
            l = ["h", "m", "s"];
            for (h = 0, j = l.length; h < j; h++) {
                c = l[h], f = new RegExp(c, "g");
                if (a.match(f) !== null && a.match(f).length > 1)return !1
            }
            d = a.match(/[hms]/g);
            if (d.length === 3)if (d[0] !== "h" || d[1] !== "m" || d[2] !== "s")return !1;
            if (d.length === 2) {
                b = !1, e = d.join(""), m = ["hm", "hs", "ms"];
                for (i = 0, k = m.length; i < k; i++) {
                    g = m[i];
                    if (e === g) {
                        b = !0;
                        break
                    }
                }
                if (!b)return !1
            }
            return !0
        }, a = function (a, b) {
            var c, d;
            return c = new RegExp("\\d+" + a), d = b.match(c), d ? parseInt(d[0].match(/\d+/)[0]) : 0
        }, d.humanDurationToSeconds = function (b) {
            var c, d, e, f, g;
            b = b ? b.toString() : "", e = 0;
            if (this.isValidHumanDuration(b)) {
                d = [a("h", b) * 3600, a("m", b) * 60, a("s", b)];
                for (f = 0, g = d.length; f < g; f++)c = d[f], e += c
            }
            return e
        }, d.isValidIso8601 = function (a) {
            return a === void 0 || a === null || a === "" ? !1 : typeof a != "string" ? !1 : (a = a.replace(this.TRIM_REGEXP, ""), a.match(/[\d:]+/) === null ? !1 : a.match(/[\d:]+/)[0] !== a ? !1 : !0)
        }, d.iso8601ToSeconds = function (a) {
            var c, d, e, f, g, h, i;
            a = a ? a.toString() : "", g = 0, f = [1, 60, 3600], d = a.split(":").reverse();
            for (e = h = 0, i = d.length; h < i; e = ++h)c = d[e], g += c * f[e];
            return b(g)
        }, d
    }()
}(Wistia), function (a) {
    return a._initializers.initSpecificTime = function () {
        var b, c, d;
        try {
            if (a.detect.iphone || a.detect.ipad)return;
            if (parent !== self)return;
            d = location.href.match(/[\?&]wtime=([\dhms]*)/);
            if ((d != null ? d.length : void 0) >= 2) {
                if (a._specificTimeInitiated)return;
                return a._specificTimeInitiated = !0, c = !1, wistiaEmbeds.onFind(function (a) {
                    if (!c)return c = !0, a.time(d[1]).play()
                })
            }
            return
        } catch (e) {
            return b = e, a.error(b), a._specificTimeInitiated = !1
        }
    }
}(Wistia), function (a) {
    var b;
    if (a.channel != null)return;
    return b = a._wistiaChannelMain || a, a.channelName || (a.channelName = "main"), a.channels = b.channels || {main: b}, a.channel = b.channel || {
            _channelCallbacks: {},
            withChannel: function (c, d) {
                var e;
                return d == null && (d = function () {
                }), b.channels[c] != null || b.channels[c] === null ? d(b.channels[c]) : b.channel._channelCallbacks[c] == null ? (b.channel._channelCallbacks[c] = [d], e = "" + a.proto() + "//" + a.remote.embedHost() + "/assets/external/E-v1/channels/" + c + ".js", b.remote.script(e, function () {
                    var d;
                    return d = function () {
                        return b.channels[c] || (a.error("Failed to load channel '" + c + "'"), b.channels[c] = null), b.channel._flushChannelCallbacks(c)
                    }, a.timeout("fireChannelCallbacks_" + c, d, 1e3)
                }, 8e3, {id: "channel-script-" + c})) : b.channel._channelCallbacks[c].push(d)
            },
            _loadedChannel: function (c, d) {
                if (typeof b.channels[c] != "undefined")return;
                return a.info("Loaded channel '" + c + "'"), b.channels[c] = d, b.channel._flushChannelCallbacks(c)
            },
            _flushChannelCallbacks: function (c) {
                var d, e, f;
                if (b.channel._channelCallbacks[c] == null)return;
                f = b.channels[c];
                while (e = b.channel._channelCallbacks[c].pop())try {
                    e(f)
                } catch (g) {
                    d = g, a.error("Channel callback for '" + c + "' channel failed", d)
                }
                return b.channel._channelCallbacks[c] = null
            },
            rootChannelName: function (b) {
                var c, d;
                return b == null && (b = location.href), ((c = a.url.parse(b)) != null ? (d = c.params) != null ? d.wchannel : void 0 : void 0) || "main"
            },
            withRootChannel: function (b) {
                var c;
                return c = a.channel.rootChannelName(), a.info("requesting channel '" + c + "' as new root"), a.channel.withChannel(c, function (c) {
                    var d;
                    return d = c || a, a.info("swapping root channel to '" + d.channelName + "'"), window.Wistia = d, b(window.Wistia)
                })
            }
        }, a._initializers.initRegisterLoadedChannel = function () {
        return a.channel._loadedChannel(a.channelName, a)
    }
}(Wistia), function (a) {
    var b, c;
    return c = a.initializeOnce = function () {
        return a._initializers.initDetect(), a._initializers.initLocalStorage(), a._initializers.initWLog(), a._initializers.initVisitorKey(), a._initializers.initEventLoop(), a._initializers.initFullscreenTriggers()
    }, b = a.initializeEveryTime = function () {
        return a._initializers.initEmbedShepherd(), a.channel.withRootChannel(function (b) {
            var c;
            if (b !== a)return;
            return a._initializers.initAsyncEmbeds(), a._initializers.initIframeApi(), a._initializers.initEmbedLinks(), a._initializers.initSpecificTime(), a._initializers.initIntegrations(), (c = a.eventLoop) != null ? c.resync() : void 0
        }), a._initializers.initRegisterLoadedChannel()
    }, a.destroy = function () {
        return a._destructors.destroyAsyncEmbeds(), a._destructors.destroyIframeApi(), a._destructors.destroyEmbedShepherd(), a._destructors.destroyEmbedLinks(), a._destructors.destroyFullscreenTriggers(), a._destructors.destroyEventLoop(), a._destructors.destroyVisitorKey(), a._destructors.destroyWLog(), a._destructors.destroyIntegrations()
    }, a.destroyGlobals = function () {
        var a, b, c;
        window.Wistia = null, window.wistiaApi = null, window.wistiaDispatch = null, window.wistiaBindIframes = null, window.wistiaEmbeds = null, window._wistiaElemId = null, window.wistiaInitQueue = null, window.wistiaInit = null, window.wistiaEmbedShepherdReady = null, c = [];
        for (a in window)b = window[a], /^wistiajson/.test(a) ? c.push(window[a] = null) : c.push(void 0);
        return c
    }, a.reinitialize = function () {
        return a.destroy(), a.initializeOnce(), a.initializeEveryTime()
    }, a._initialized || (a._initialized = !0, a.initializeOnce()), a.initializeEveryTime()
}(Wistia)
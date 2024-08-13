(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
    8350: function(e, t, s) {
        Promise.resolve().then(s.bind(s, 537))
    },
    537: function(e, t, s) {
        "use strict";
        let i;
        s.r(t),
        s.d(t, {
            default: function() {
                return D
            }
        });
        var n = s(7437)
          , r = s(2265);
        class o extends Error {
            constructor(e) {
                super("ClientResponseError"),
                this.url = "",
                this.status = 0,
                this.response = {},
                this.isAbort = !1,
                this.originalError = null,
                Object.setPrototypeOf(this, o.prototype),
                null !== e && "object" == typeof e && (this.url = "string" == typeof e.url ? e.url : "",
                this.status = "number" == typeof e.status ? e.status : 0,
                this.isAbort = !!e.isAbort,
                this.originalError = e.originalError,
                null !== e.response && "object" == typeof e.response ? this.response = e.response : null !== e.data && "object" == typeof e.data ? this.response = e.data : this.response = {}),
                this.originalError || e instanceof o || (this.originalError = e),
                "undefined" != typeof DOMException && e instanceof DOMException && (this.isAbort = !0),
                this.name = "ClientResponseError " + this.status,
                this.message = this.response?.message,
                this.message || (this.isAbort ? this.message = "The request was autocancelled. You can find more info in https://github.com/pocketbase/js-sdk#auto-cancellation." : this.originalError?.cause?.message?.includes("ECONNREFUSED ::1") ? this.message = "Failed to connect to the PocketBase server. Try changing the SDK URL from localhost to 127.0.0.1 (https://github.com/pocketbase/js-sdk/issues/21)." : this.message = "Something went wrong while processing your request.")
            }
            get data() {
                return this.response
            }
            toJSON() {
                return {
                    ...this
                }
            }
        }
        let a = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        function c(e, t, s) {
            let i = Object.assign({}, s || {})
              , n = i.encode || h;
            if (!a.test(e))
                throw TypeError("argument name is invalid");
            let r = n(t);
            if (r && !a.test(r))
                throw TypeError("argument val is invalid");
            let o = e + "=" + r;
            if (null != i.maxAge) {
                let e = i.maxAge - 0;
                if (isNaN(e) || !isFinite(e))
                    throw TypeError("option maxAge is invalid");
                o += "; Max-Age=" + Math.floor(e)
            }
            if (i.domain) {
                if (!a.test(i.domain))
                    throw TypeError("option domain is invalid");
                o += "; Domain=" + i.domain
            }
            if (i.path) {
                if (!a.test(i.path))
                    throw TypeError("option path is invalid");
                o += "; Path=" + i.path
            }
            if (i.expires) {
                var c;
                if (c = i.expires,
                "[object Date]" !== Object.prototype.toString.call(c) && !(c instanceof Date) || isNaN(i.expires.valueOf()))
                    throw TypeError("option expires is invalid");
                o += "; Expires=" + i.expires.toUTCString()
            }
            if (i.httpOnly && (o += "; HttpOnly"),
            i.secure && (o += "; Secure"),
            i.priority)
                switch ("string" == typeof i.priority ? i.priority.toLowerCase() : i.priority) {
                case "low":
                    o += "; Priority=Low";
                    break;
                case "medium":
                    o += "; Priority=Medium";
                    break;
                case "high":
                    o += "; Priority=High";
                    break;
                default:
                    throw TypeError("option priority is invalid")
                }
            if (i.sameSite)
                switch ("string" == typeof i.sameSite ? i.sameSite.toLowerCase() : i.sameSite) {
                case !0:
                case "strict":
                    o += "; SameSite=Strict";
                    break;
                case "lax":
                    o += "; SameSite=Lax";
                    break;
                case "none":
                    o += "; SameSite=None";
                    break;
                default:
                    throw TypeError("option sameSite is invalid")
                }
            return o
        }
        function l(e) {
            return -1 !== e.indexOf("%") ? decodeURIComponent(e) : e
        }
        function h(e) {
            return encodeURIComponent(e)
        }
        let d = "undefined" != typeof navigator && "ReactNative" === navigator.product || "undefined" != typeof global && global.HermesInternal;
        function u(e) {
            if (e)
                try {
                    let t = decodeURIComponent(i(e.split(".")[1]).split("").map(function(e) {
                        return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                    }).join(""));
                    return JSON.parse(t) || {}
                } catch (e) {}
            return {}
        }
        function p(e, t=0) {
            let s = u(e);
            return !(Object.keys(s).length > 0 && (!s.exp || s.exp - t > Date.now() / 1e3))
        }
        i = "function" != typeof atob || d ? e=>{
            let t = String(e).replace(/=+$/, "");
            if (t.length % 4 == 1)
                throw Error("'atob' failed: The string to be decoded is not correctly encoded.");
            for (var s, i, n = 0, r = 0, o = ""; i = t.charAt(r++); ~i && (s = n % 4 ? 64 * s + i : i,
            n++ % 4) && (o += String.fromCharCode(255 & s >> (-2 * n & 6))))
                i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(i);
            return o
        }
        : atob;
        let m = "pb_auth";
        class f {
            constructor() {
                this.baseToken = "",
                this.baseModel = null,
                this._onChangeCallbacks = []
            }
            get token() {
                return this.baseToken
            }
            get model() {
                return this.baseModel
            }
            get isValid() {
                return !p(this.token)
            }
            get isAdmin() {
                return "admin" === u(this.token).type
            }
            get isAuthRecord() {
                return "authRecord" === u(this.token).type
            }
            save(e, t) {
                this.baseToken = e || "",
                this.baseModel = t || null,
                this.triggerChange()
            }
            clear() {
                this.baseToken = "",
                this.baseModel = null,
                this.triggerChange()
            }
            loadFromCookie(e, t=m) {
                let s = function(e, t) {
                    let s = {};
                    if ("string" != typeof e)
                        return s;
                    let i = Object.assign({}, {}).decode || l
                      , n = 0;
                    for (; n < e.length; ) {
                        let t = e.indexOf("=", n);
                        if (-1 === t)
                            break;
                        let r = e.indexOf(";", n);
                        if (-1 === r)
                            r = e.length;
                        else if (r < t) {
                            n = e.lastIndexOf(";", t - 1) + 1;
                            continue
                        }
                        let o = e.slice(n, t).trim();
                        if (void 0 === s[o]) {
                            let n = e.slice(t + 1, r).trim();
                            34 === n.charCodeAt(0) && (n = n.slice(1, -1));
                            try {
                                s[o] = i(n)
                            } catch (e) {
                                s[o] = n
                            }
                        }
                        n = r + 1
                    }
                    return s
                }(e || "")[t] || ""
                  , i = {};
                try {
                    i = JSON.parse(s),
                    ("object" != typeof i || Array.isArray(i)) && (i = {})
                } catch (e) {}
                this.save(i.token || "", i.model || null)
            }
            exportToCookie(e, t=m) {
                let s = {
                    secure: !0,
                    sameSite: !0,
                    httpOnly: !0,
                    path: "/"
                }
                  , i = u(this.token);
                s.expires = new Date(i?.exp ? 1e3 * i.exp : "1970-01-01"),
                e = Object.assign({}, s, e);
                let n = {
                    token: this.token,
                    model: this.model ? JSON.parse(JSON.stringify(this.model)) : null
                }
                  , r = c(t, JSON.stringify(n), e)
                  , o = "undefined" != typeof Blob ? new Blob([r]).size : r.length;
                if (n.model && o > 4096) {
                    n.model = {
                        id: n?.model?.id,
                        email: n?.model?.email
                    };
                    let s = ["collectionId", "username", "verified"];
                    for (let e in this.model)
                        s.includes(e) && (n.model[e] = this.model[e]);
                    r = c(t, JSON.stringify(n), e)
                }
                return r
            }
            onChange(e, t=!1) {
                return this._onChangeCallbacks.push(e),
                t && e(this.token, this.model),
                ()=>{
                    for (let t = this._onChangeCallbacks.length - 1; t >= 0; t--)
                        if (this._onChangeCallbacks[t] == e)
                            return delete this._onChangeCallbacks[t],
                            void this._onChangeCallbacks.splice(t, 1)
                }
            }
            triggerChange() {
                for (let e of this._onChangeCallbacks)
                    e && e(this.token, this.model)
            }
        }
        class b extends f {
            constructor(e="pocketbase_auth") {
                super(),
                this.storageFallback = {},
                this.storageKey = e,
                this._bindStorageEvent()
            }
            get token() {
                return (this._storageGet(this.storageKey) || {}).token || ""
            }
            get model() {
                return (this._storageGet(this.storageKey) || {}).model || null
            }
            save(e, t) {
                this._storageSet(this.storageKey, {
                    token: e,
                    model: t
                }),
                super.save(e, t)
            }
            clear() {
                this._storageRemove(this.storageKey),
                super.clear()
            }
            _storageGet(e) {
                if ("undefined" != typeof window && window?.localStorage) {
                    let t = window.localStorage.getItem(e) || "";
                    try {
                        return JSON.parse(t)
                    } catch (e) {
                        return t
                    }
                }
                return this.storageFallback[e]
            }
            _storageSet(e, t) {
                if ("undefined" != typeof window && window?.localStorage) {
                    let s = t;
                    "string" != typeof t && (s = JSON.stringify(t)),
                    window.localStorage.setItem(e, s)
                } else
                    this.storageFallback[e] = t
            }
            _storageRemove(e) {
                "undefined" != typeof window && window?.localStorage && window.localStorage?.removeItem(e),
                delete this.storageFallback[e]
            }
            _bindStorageEvent() {
                "undefined" != typeof window && window?.localStorage && window.addEventListener && window.addEventListener("storage", e=>{
                    if (e.key != this.storageKey)
                        return;
                    let t = this._storageGet(this.storageKey) || {};
                    super.save(t.token || "", t.model || null)
                }
                )
            }
        }
        class g {
            constructor(e) {
                this.client = e
            }
        }
        class y extends g {
            async getAll(e) {
                return e = Object.assign({
                    method: "GET"
                }, e),
                this.client.send("/api/settings", e)
            }
            async update(e, t) {
                return t = Object.assign({
                    method: "PATCH",
                    body: e
                }, t),
                this.client.send("/api/settings", t)
            }
            async testS3(e="storage", t) {
                return t = Object.assign({
                    method: "POST",
                    body: {
                        filesystem: e
                    }
                }, t),
                this.client.send("/api/settings/test/s3", t).then(()=>!0)
            }
            async testEmail(e, t, s) {
                return s = Object.assign({
                    method: "POST",
                    body: {
                        email: e,
                        template: t
                    }
                }, s),
                this.client.send("/api/settings/test/email", s).then(()=>!0)
            }
            async generateAppleClientSecret(e, t, s, i, n, r) {
                return r = Object.assign({
                    method: "POST",
                    body: {
                        clientId: e,
                        teamId: t,
                        keyId: s,
                        privateKey: i,
                        duration: n
                    }
                }, r),
                this.client.send("/api/settings/apple/generate-client-secret", r)
            }
        }
        class w extends g {
            decode(e) {
                return e
            }
            async getFullList(e, t) {
                if ("number" == typeof e)
                    return this._getFullList(e, t);
                let s = 500;
                return (t = Object.assign({}, e, t)).batch && (s = t.batch,
                delete t.batch),
                this._getFullList(s, t)
            }
            async getList(e=1, t=30, s) {
                return (s = Object.assign({
                    method: "GET"
                }, s)).query = Object.assign({
                    page: e,
                    perPage: t
                }, s.query),
                this.client.send(this.baseCrudPath, s).then(e=>(e.items = e.items?.map(e=>this.decode(e)) || [],
                e))
            }
            async getFirstListItem(e, t) {
                return (t = Object.assign({
                    requestKey: "one_by_filter_" + this.baseCrudPath + "_" + e
                }, t)).query = Object.assign({
                    filter: e,
                    skipTotal: 1
                }, t.query),
                this.getList(1, 1, t).then(e=>{
                    if (!e?.items?.length)
                        throw new o({
                            status: 404,
                            response: {
                                code: 404,
                                message: "The requested resource wasn't found.",
                                data: {}
                            }
                        });
                    return e.items[0]
                }
                )
            }
            async getOne(e, t) {
                if (!e)
                    throw new o({
                        url: this.client.buildUrl(this.baseCrudPath + "/"),
                        status: 404,
                        response: {
                            code: 404,
                            message: "Missing required record id.",
                            data: {}
                        }
                    });
                return t = Object.assign({
                    method: "GET"
                }, t),
                this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e), t).then(e=>this.decode(e))
            }
            async create(e, t) {
                return t = Object.assign({
                    method: "POST",
                    body: e
                }, t),
                this.client.send(this.baseCrudPath, t).then(e=>this.decode(e))
            }
            async update(e, t, s) {
                return s = Object.assign({
                    method: "PATCH",
                    body: t
                }, s),
                this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e), s).then(e=>this.decode(e))
            }
            async delete(e, t) {
                return t = Object.assign({
                    method: "DELETE"
                }, t),
                this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e), t).then(()=>!0)
            }
            _getFullList(e=500, t) {
                (t = t || {}).query = Object.assign({
                    skipTotal: 1
                }, t.query);
                let s = []
                  , i = async n=>this.getList(n, e || 500, t).then(e=>{
                    let t = e.items;
                    return s = s.concat(t),
                    t.length == e.perPage ? i(n + 1) : s
                }
                );
                return i(1)
            }
        }
        function S(e, t, s, i) {
            let n = void 0 !== i;
            return n || void 0 !== s ? n ? (console.warn(e),
            t.body = Object.assign({}, t.body, s),
            t.query = Object.assign({}, t.query, i),
            t) : Object.assign(t, s) : t
        }
        function C(e) {
            e._resetAutoRefresh?.()
        }
        class O extends w {
            get baseCrudPath() {
                return "/api/admins"
            }
            async update(e, t, s) {
                return super.update(e, t, s).then(e=>(this.client.authStore.model?.id === e.id && void 0 === this.client.authStore.model?.collectionId && this.client.authStore.save(this.client.authStore.token, e),
                e))
            }
            async delete(e, t) {
                return super.delete(e, t).then(t=>(t && this.client.authStore.model?.id === e && void 0 === this.client.authStore.model?.collectionId && this.client.authStore.clear(),
                t))
            }
            authResponse(e) {
                let t = this.decode(e?.admin || {});
                return e?.token && e?.admin && this.client.authStore.save(e.token, t),
                Object.assign({}, e, {
                    token: e?.token || "",
                    admin: t
                })
            }
            async authWithPassword(e, t, s, i) {
                let n = {
                    method: "POST",
                    body: {
                        identity: e,
                        password: t
                    }
                }
                  , r = (n = S("This form of authWithPassword(email, pass, body?, query?) is deprecated. Consider replacing it with authWithPassword(email, pass, options?).", n, s, i)).autoRefreshThreshold;
                delete n.autoRefreshThreshold,
                n.autoRefresh || C(this.client);
                let o = await this.client.send(this.baseCrudPath + "/auth-with-password", n);
                return o = this.authResponse(o),
                r && function(e, t, s, i) {
                    C(e);
                    let n = e.beforeSend
                      , r = e.authStore.model
                      , o = e.authStore.onChange((t,s)=>{
                        (!t || s?.id != r?.id || (s?.collectionId || r?.collectionId) && s?.collectionId != r?.collectionId) && C(e)
                    }
                    );
                    e._resetAutoRefresh = function() {
                        o(),
                        e.beforeSend = n,
                        delete e._resetAutoRefresh
                    }
                    ,
                    e.beforeSend = async(r,o)=>{
                        let a = e.authStore.token;
                        if (o.query?.autoRefresh)
                            return n ? n(r, o) : {
                                url: r,
                                sendOptions: o
                            };
                        let c = e.authStore.isValid;
                        if (c && p(e.authStore.token, t))
                            try {
                                await s()
                            } catch (e) {
                                c = !1
                            }
                        c || await i();
                        let l = o.headers || {};
                        for (let t in l)
                            if ("authorization" == t.toLowerCase() && a == l[t] && e.authStore.token) {
                                l[t] = e.authStore.token;
                                break
                            }
                        return o.headers = l,
                        n ? n(r, o) : {
                            url: r,
                            sendOptions: o
                        }
                    }
                }(this.client, r, ()=>this.authRefresh({
                    autoRefresh: !0
                }), ()=>this.authWithPassword(e, t, Object.assign({
                    autoRefresh: !0
                }, n))),
                o
            }
            async authRefresh(e, t) {
                let s = {
                    method: "POST"
                };
                return s = S("This form of authRefresh(body?, query?) is deprecated. Consider replacing it with authRefresh(options?).", s, e, t),
                this.client.send(this.baseCrudPath + "/auth-refresh", s).then(this.authResponse.bind(this))
            }
            async requestPasswordReset(e, t, s) {
                let i = {
                    method: "POST",
                    body: {
                        email: e
                    }
                };
                return i = S("This form of requestPasswordReset(email, body?, query?) is deprecated. Consider replacing it with requestPasswordReset(email, options?).", i, t, s),
                this.client.send(this.baseCrudPath + "/request-password-reset", i).then(()=>!0)
            }
            async confirmPasswordReset(e, t, s, i, n) {
                let r = {
                    method: "POST",
                    body: {
                        token: e,
                        password: t,
                        passwordConfirm: s
                    }
                };
                return r = S("This form of confirmPasswordReset(resetToken, password, passwordConfirm, body?, query?) is deprecated. Consider replacing it with confirmPasswordReset(resetToken, password, passwordConfirm, options?).", r, i, n),
                this.client.send(this.baseCrudPath + "/confirm-password-reset", r).then(()=>!0)
            }
        }
        let v = ["requestKey", "$cancelKey", "$autoCancel", "fetch", "headers", "body", "query", "params", "cache", "credentials", "headers", "integrity", "keepalive", "method", "mode", "redirect", "referrer", "referrerPolicy", "signal", "window"];
        function T(e) {
            if (e)
                for (let t in e.query = e.query || {},
                e)
                    v.includes(t) || (e.query[t] = e[t],
                    delete e[t])
        }
        class E extends g {
            constructor() {
                super(...arguments),
                this.clientId = "",
                this.eventSource = null,
                this.subscriptions = {},
                this.lastSentSubscriptions = [],
                this.maxConnectTimeout = 15e3,
                this.reconnectAttempts = 0,
                this.maxReconnectAttempts = 1 / 0,
                this.predefinedReconnectIntervals = [200, 300, 500, 1e3, 1200, 1500, 2e3],
                this.pendingConnects = []
            }
            get isConnected() {
                return !!this.eventSource && !!this.clientId && !this.pendingConnects.length
            }
            async subscribe(e, t, s) {
                if (!e)
                    throw Error("topic must be set.");
                let i = e;
                if (s) {
                    T(s);
                    let e = "options=" + encodeURIComponent(JSON.stringify({
                        query: s.query,
                        headers: s.headers
                    }));
                    i += (i.includes("?") ? "&" : "?") + e
                }
                let n = function(e) {
                    let s;
                    try {
                        s = JSON.parse(e?.data)
                    } catch {}
                    t(s || {})
                };
                return this.subscriptions[i] || (this.subscriptions[i] = []),
                this.subscriptions[i].push(n),
                this.isConnected ? 1 === this.subscriptions[i].length ? await this.submitSubscriptions() : this.eventSource?.addEventListener(i, n) : await this.connect(),
                async()=>this.unsubscribeByTopicAndListener(e, n)
            }
            async unsubscribe(e) {
                let t = !1;
                if (e) {
                    let s = this.getSubscriptionsByTopic(e);
                    for (let e in s)
                        if (this.hasSubscriptionListeners(e)) {
                            for (let t of this.subscriptions[e])
                                this.eventSource?.removeEventListener(e, t);
                            delete this.subscriptions[e],
                            t || (t = !0)
                        }
                } else
                    this.subscriptions = {};
                this.hasSubscriptionListeners() ? t && await this.submitSubscriptions() : this.disconnect()
            }
            async unsubscribeByPrefix(e) {
                let t = !1;
                for (let s in this.subscriptions)
                    if ((s + "?").startsWith(e)) {
                        for (let e of (t = !0,
                        this.subscriptions[s]))
                            this.eventSource?.removeEventListener(s, e);
                        delete this.subscriptions[s]
                    }
                t && (this.hasSubscriptionListeners() ? await this.submitSubscriptions() : this.disconnect())
            }
            async unsubscribeByTopicAndListener(e, t) {
                let s = !1
                  , i = this.getSubscriptionsByTopic(e);
                for (let e in i) {
                    if (!Array.isArray(this.subscriptions[e]) || !this.subscriptions[e].length)
                        continue;
                    let i = !1;
                    for (let s = this.subscriptions[e].length - 1; s >= 0; s--)
                        this.subscriptions[e][s] === t && (i = !0,
                        delete this.subscriptions[e][s],
                        this.subscriptions[e].splice(s, 1),
                        this.eventSource?.removeEventListener(e, t));
                    i && (this.subscriptions[e].length || delete this.subscriptions[e],
                    s || this.hasSubscriptionListeners(e) || (s = !0))
                }
                this.hasSubscriptionListeners() ? s && await this.submitSubscriptions() : this.disconnect()
            }
            hasSubscriptionListeners(e) {
                if (this.subscriptions = this.subscriptions || {},
                e)
                    return !!this.subscriptions[e]?.length;
                for (let e in this.subscriptions)
                    if (this.subscriptions[e]?.length)
                        return !0;
                return !1
            }
            async submitSubscriptions() {
                if (this.clientId)
                    return this.addAllSubscriptionListeners(),
                    this.lastSentSubscriptions = this.getNonEmptySubscriptionKeys(),
                    this.client.send("/api/realtime", {
                        method: "POST",
                        body: {
                            clientId: this.clientId,
                            subscriptions: this.lastSentSubscriptions
                        },
                        requestKey: this.getSubscriptionsCancelKey()
                    }).catch(e=>{
                        if (!e?.isAbort)
                            throw e
                    }
                    )
            }
            getSubscriptionsCancelKey() {
                return "realtime_" + this.clientId
            }
            getSubscriptionsByTopic(e) {
                let t = {};
                for (let s in e = e.includes("?") ? e : e + "?",
                this.subscriptions)
                    (s + "?").startsWith(e) && (t[s] = this.subscriptions[s]);
                return t
            }
            getNonEmptySubscriptionKeys() {
                let e = [];
                for (let t in this.subscriptions)
                    this.subscriptions[t].length && e.push(t);
                return e
            }
            addAllSubscriptionListeners() {
                if (this.eventSource)
                    for (let e in this.removeAllSubscriptionListeners(),
                    this.subscriptions)
                        for (let t of this.subscriptions[e])
                            this.eventSource.addEventListener(e, t)
            }
            removeAllSubscriptionListeners() {
                if (this.eventSource)
                    for (let e in this.subscriptions)
                        for (let t of this.subscriptions[e])
                            this.eventSource.removeEventListener(e, t)
            }
            async connect() {
                if (!(this.reconnectAttempts > 0))
                    return new Promise((e,t)=>{
                        this.pendingConnects.push({
                            resolve: e,
                            reject: t
                        }),
                        this.pendingConnects.length > 1 || this.initConnect()
                    }
                    )
            }
            initConnect() {
                this.disconnect(!0),
                clearTimeout(this.connectTimeoutId),
                this.connectTimeoutId = setTimeout(()=>{
                    this.connectErrorHandler(Error("EventSource connect took too long."))
                }
                , this.maxConnectTimeout),
                this.eventSource = new EventSource(this.client.buildUrl("/api/realtime")),
                this.eventSource.onerror = e=>{
                    this.connectErrorHandler(Error("Failed to establish realtime connection."))
                }
                ,
                this.eventSource.addEventListener("PB_CONNECT", e=>{
                    this.clientId = e?.lastEventId,
                    this.submitSubscriptions().then(async()=>{
                        let e = 3;
                        for (; this.hasUnsentSubscriptions() && e > 0; )
                            e--,
                            await this.submitSubscriptions()
                    }
                    ).then(()=>{
                        for (let e of this.pendingConnects)
                            e.resolve();
                        this.pendingConnects = [],
                        this.reconnectAttempts = 0,
                        clearTimeout(this.reconnectTimeoutId),
                        clearTimeout(this.connectTimeoutId);
                        let t = this.getSubscriptionsByTopic("PB_CONNECT");
                        for (let s in t)
                            for (let i of t[s])
                                i(e)
                    }
                    ).catch(e=>{
                        this.clientId = "",
                        this.connectErrorHandler(e)
                    }
                    )
                }
                )
            }
            hasUnsentSubscriptions() {
                let e = this.getNonEmptySubscriptionKeys();
                if (e.length != this.lastSentSubscriptions.length)
                    return !0;
                for (let t of e)
                    if (!this.lastSentSubscriptions.includes(t))
                        return !0;
                return !1
            }
            connectErrorHandler(e) {
                if (clearTimeout(this.connectTimeoutId),
                clearTimeout(this.reconnectTimeoutId),
                !this.clientId && !this.reconnectAttempts || this.reconnectAttempts > this.maxReconnectAttempts) {
                    for (let t of this.pendingConnects)
                        t.reject(new o(e));
                    return this.pendingConnects = [],
                    void this.disconnect()
                }
                this.disconnect(!0);
                let t = this.predefinedReconnectIntervals[this.reconnectAttempts] || this.predefinedReconnectIntervals[this.predefinedReconnectIntervals.length - 1];
                this.reconnectAttempts++,
                this.reconnectTimeoutId = setTimeout(()=>{
                    this.initConnect()
                }
                , t)
            }
            disconnect(e=!1) {
                if (clearTimeout(this.connectTimeoutId),
                clearTimeout(this.reconnectTimeoutId),
                this.removeAllSubscriptionListeners(),
                this.client.cancelRequest(this.getSubscriptionsCancelKey()),
                this.eventSource?.close(),
                this.eventSource = null,
                this.clientId = "",
                !e) {
                    for (let e of (this.reconnectAttempts = 0,
                    this.pendingConnects))
                        e.resolve();
                    this.pendingConnects = []
                }
            }
        }
        class k extends w {
            constructor(e, t) {
                super(e),
                this.collectionIdOrName = t
            }
            get baseCrudPath() {
                return this.baseCollectionPath + "/records"
            }
            get baseCollectionPath() {
                return "/api/collections/" + encodeURIComponent(this.collectionIdOrName)
            }
            async subscribe(e, t, s) {
                if (!e)
                    throw Error("Missing topic.");
                if (!t)
                    throw Error("Missing subscription callback.");
                return this.client.realtime.subscribe(this.collectionIdOrName + "/" + e, t, s)
            }
            async unsubscribe(e) {
                return e ? this.client.realtime.unsubscribe(this.collectionIdOrName + "/" + e) : this.client.realtime.unsubscribeByPrefix(this.collectionIdOrName)
            }
            async getFullList(e, t) {
                if ("number" == typeof e)
                    return super.getFullList(e, t);
                let s = Object.assign({}, e, t);
                return super.getFullList(s)
            }
            async getList(e=1, t=30, s) {
                return super.getList(e, t, s)
            }
            async getFirstListItem(e, t) {
                return super.getFirstListItem(e, t)
            }
            async getOne(e, t) {
                return super.getOne(e, t)
            }
            async create(e, t) {
                return super.create(e, t)
            }
            async update(e, t, s) {
                return super.update(e, t, s).then(e=>(this.client.authStore.model?.id !== e?.id || this.client.authStore.model?.collectionId !== this.collectionIdOrName && this.client.authStore.model?.collectionName !== this.collectionIdOrName || this.client.authStore.save(this.client.authStore.token, e),
                e))
            }
            async delete(e, t) {
                return super.delete(e, t).then(t=>(t && this.client.authStore.model?.id === e && (this.client.authStore.model?.collectionId === this.collectionIdOrName || this.client.authStore.model?.collectionName === this.collectionIdOrName) && this.client.authStore.clear(),
                t))
            }
            authResponse(e) {
                let t = this.decode(e?.record || {});
                return this.client.authStore.save(e?.token, t),
                Object.assign({}, e, {
                    token: e?.token || "",
                    record: t
                })
            }
            async listAuthMethods(e) {
                return e = Object.assign({
                    method: "GET"
                }, e),
                this.client.send(this.baseCollectionPath + "/auth-methods", e).then(e=>Object.assign({}, e, {
                    usernamePassword: !!e?.usernamePassword,
                    emailPassword: !!e?.emailPassword,
                    authProviders: Array.isArray(e?.authProviders) ? e?.authProviders : []
                }))
            }
            async authWithPassword(e, t, s, i) {
                let n = {
                    method: "POST",
                    body: {
                        identity: e,
                        password: t
                    }
                };
                return n = S("This form of authWithPassword(usernameOrEmail, pass, body?, query?) is deprecated. Consider replacing it with authWithPassword(usernameOrEmail, pass, options?).", n, s, i),
                this.client.send(this.baseCollectionPath + "/auth-with-password", n).then(e=>this.authResponse(e))
            }
            async authWithOAuth2Code(e, t, s, i, n, r, o) {
                let a = {
                    method: "POST",
                    body: {
                        provider: e,
                        code: t,
                        codeVerifier: s,
                        redirectUrl: i,
                        createData: n
                    }
                };
                return a = S("This form of authWithOAuth2Code(provider, code, codeVerifier, redirectUrl, createData?, body?, query?) is deprecated. Consider replacing it with authWithOAuth2Code(provider, code, codeVerifier, redirectUrl, createData?, options?).", a, r, o),
                this.client.send(this.baseCollectionPath + "/auth-with-oauth2", a).then(e=>this.authResponse(e))
            }
            authWithOAuth2(...e) {
                if (e.length > 1 || "string" == typeof e?.[0])
                    return console.warn("PocketBase: This form of authWithOAuth2() is deprecated and may get removed in the future. Please replace with authWithOAuth2Code() OR use the authWithOAuth2() realtime form as shown in https://pocketbase.io/docs/authentication/#oauth2-integration."),
                    this.authWithOAuth2Code(e?.[0] || "", e?.[1] || "", e?.[2] || "", e?.[3] || "", e?.[4] || {}, e?.[5] || {}, e?.[6] || {});
                let t = e?.[0] || {}
                  , s = null;
                t.urlCallback || (s = P(void 0));
                let i = new E(this.client);
                function n() {
                    s?.close(),
                    i.unsubscribe()
                }
                let r = {}
                  , a = t.requestKey;
                return a && (r.requestKey = a),
                this.listAuthMethods(r).then(e=>{
                    let r = e.authProviders.find(e=>e.name === t.provider);
                    if (!r)
                        throw new o(Error(`Missing or invalid provider "${t.provider}".`));
                    let c = this.client.buildUrl("/api/oauth2-redirect")
                      , l = a ? this.client.cancelControllers?.[a] : void 0;
                    return l && (l.signal.onabort = ()=>{
                        n()
                    }
                    ),
                    new Promise(async(e,a)=>{
                        try {
                            await i.subscribe("@oauth2", async s=>{
                                let h = i.clientId;
                                try {
                                    if (!s.state || h !== s.state)
                                        throw Error("State parameters don't match.");
                                    if (s.error || !s.code)
                                        throw Error("OAuth2 redirect error or missing code: " + s.error);
                                    let i = Object.assign({}, t);
                                    delete i.provider,
                                    delete i.scopes,
                                    delete i.createData,
                                    delete i.urlCallback,
                                    l?.signal?.onabort && (l.signal.onabort = null);
                                    let n = await this.authWithOAuth2Code(r.name, s.code, r.codeVerifier, c, t.createData, i);
                                    e(n)
                                } catch (e) {
                                    a(new o(e))
                                }
                                n()
                            }
                            );
                            let h = {
                                state: i.clientId
                            };
                            t.scopes?.length && (h.scope = t.scopes.join(" "));
                            let d = this._replaceQueryParams(r.authUrl + c, h)
                              , u = t.urlCallback || function(e) {
                                s ? s.location.href = e : s = P(e)
                            }
                            ;
                            await u(d)
                        } catch (e) {
                            n(),
                            a(new o(e))
                        }
                    }
                    )
                }
                ).catch(e=>{
                    throw n(),
                    e
                }
                )
            }
            async authRefresh(e, t) {
                let s = {
                    method: "POST"
                };
                return s = S("This form of authRefresh(body?, query?) is deprecated. Consider replacing it with authRefresh(options?).", s, e, t),
                this.client.send(this.baseCollectionPath + "/auth-refresh", s).then(e=>this.authResponse(e))
            }
            async requestPasswordReset(e, t, s) {
                let i = {
                    method: "POST",
                    body: {
                        email: e
                    }
                };
                return i = S("This form of requestPasswordReset(email, body?, query?) is deprecated. Consider replacing it with requestPasswordReset(email, options?).", i, t, s),
                this.client.send(this.baseCollectionPath + "/request-password-reset", i).then(()=>!0)
            }
            async confirmPasswordReset(e, t, s, i, n) {
                let r = {
                    method: "POST",
                    body: {
                        token: e,
                        password: t,
                        passwordConfirm: s
                    }
                };
                return r = S("This form of confirmPasswordReset(token, password, passwordConfirm, body?, query?) is deprecated. Consider replacing it with confirmPasswordReset(token, password, passwordConfirm, options?).", r, i, n),
                this.client.send(this.baseCollectionPath + "/confirm-password-reset", r).then(()=>!0)
            }
            async requestVerification(e, t, s) {
                let i = {
                    method: "POST",
                    body: {
                        email: e
                    }
                };
                return i = S("This form of requestVerification(email, body?, query?) is deprecated. Consider replacing it with requestVerification(email, options?).", i, t, s),
                this.client.send(this.baseCollectionPath + "/request-verification", i).then(()=>!0)
            }
            async confirmVerification(e, t, s) {
                let i = {
                    method: "POST",
                    body: {
                        token: e
                    }
                };
                return i = S("This form of confirmVerification(token, body?, query?) is deprecated. Consider replacing it with confirmVerification(token, options?).", i, t, s),
                this.client.send(this.baseCollectionPath + "/confirm-verification", i).then(()=>{
                    let t = u(e)
                      , s = this.client.authStore.model;
                    return s && !s.verified && s.id === t.id && s.collectionId === t.collectionId && (s.verified = !0,
                    this.client.authStore.save(this.client.authStore.token, s)),
                    !0
                }
                )
            }
            async requestEmailChange(e, t, s) {
                let i = {
                    method: "POST",
                    body: {
                        newEmail: e
                    }
                };
                return i = S("This form of requestEmailChange(newEmail, body?, query?) is deprecated. Consider replacing it with requestEmailChange(newEmail, options?).", i, t, s),
                this.client.send(this.baseCollectionPath + "/request-email-change", i).then(()=>!0)
            }
            async confirmEmailChange(e, t, s, i) {
                let n = {
                    method: "POST",
                    body: {
                        token: e,
                        password: t
                    }
                };
                return n = S("This form of confirmEmailChange(token, password, body?, query?) is deprecated. Consider replacing it with confirmEmailChange(token, password, options?).", n, s, i),
                this.client.send(this.baseCollectionPath + "/confirm-email-change", n).then(()=>{
                    let t = u(e)
                      , s = this.client.authStore.model;
                    return s && s.id === t.id && s.collectionId === t.collectionId && this.client.authStore.clear(),
                    !0
                }
                )
            }
            async listExternalAuths(e, t) {
                return t = Object.assign({
                    method: "GET"
                }, t),
                this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e) + "/external-auths", t)
            }
            async unlinkExternalAuth(e, t, s) {
                return s = Object.assign({
                    method: "DELETE"
                }, s),
                this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e) + "/external-auths/" + encodeURIComponent(t), s).then(()=>!0)
            }
            _replaceQueryParams(e, t={}) {
                let s = e
                  , i = "";
                e.indexOf("?") >= 0 && (s = e.substring(0, e.indexOf("?")),
                i = e.substring(e.indexOf("?") + 1));
                let n = {};
                for (let e of i.split("&")) {
                    if ("" == e)
                        continue;
                    let t = e.split("=");
                    n[decodeURIComponent(t[0].replace(/\+/g, " "))] = decodeURIComponent((t[1] || "").replace(/\+/g, " "))
                }
                for (let e in t)
                    t.hasOwnProperty(e) && (null == t[e] ? delete n[e] : n[e] = t[e]);
                for (let e in i = "",
                n)
                    n.hasOwnProperty(e) && ("" != i && (i += "&"),
                    i += encodeURIComponent(e.replace(/%20/g, "+")) + "=" + encodeURIComponent(n[e].replace(/%20/g, "+")));
                return "" != i ? s + "?" + i : s
            }
        }
        function P(e) {
            if ("undefined" == typeof window || !window?.open)
                throw new o(Error("Not in a browser context - please pass a custom urlCallback function."));
            let t = 1024
              , s = 768
              , i = window.innerWidth
              , n = window.innerHeight;
            t = t > i ? i : t,
            s = s > n ? n : s;
            let r = i / 2 - t / 2
              , a = n / 2 - s / 2;
            return window.open(e, "popup_window", "width=" + t + ",height=" + s + ",top=" + a + ",left=" + r + ",resizable,menubar=no")
        }
        class R extends w {
            get baseCrudPath() {
                return "/api/collections"
            }
            async import(e, t=!1, s) {
                return s = Object.assign({
                    method: "PUT",
                    body: {
                        collections: e,
                        deleteMissing: t
                    }
                }, s),
                this.client.send(this.baseCrudPath + "/import", s).then(()=>!0)
            }
        }
        class I extends g {
            async getList(e=1, t=30, s) {
                return (s = Object.assign({
                    method: "GET"
                }, s)).query = Object.assign({
                    page: e,
                    perPage: t
                }, s.query),
                this.client.send("/api/logs", s)
            }
            async getOne(e, t) {
                if (!e)
                    throw new o({
                        url: this.client.buildUrl("/api/logs/"),
                        status: 404,
                        response: {
                            code: 404,
                            message: "Missing required log id.",
                            data: {}
                        }
                    });
                return t = Object.assign({
                    method: "GET"
                }, t),
                this.client.send("/api/logs/" + encodeURIComponent(e), t)
            }
            async getStats(e) {
                return e = Object.assign({
                    method: "GET"
                }, e),
                this.client.send("/api/logs/stats", e)
            }
        }
        class j extends g {
            async check(e) {
                return e = Object.assign({
                    method: "GET"
                }, e),
                this.client.send("/api/health", e)
            }
        }
        class A extends g {
            getUrl(e, t, s={}) {
                if (!t || !e?.id || !e?.collectionId && !e?.collectionName)
                    return "";
                let i = [];
                i.push("api"),
                i.push("files"),
                i.push(encodeURIComponent(e.collectionId || e.collectionName)),
                i.push(encodeURIComponent(e.id)),
                i.push(encodeURIComponent(t));
                let n = this.client.buildUrl(i.join("/"));
                if (Object.keys(s).length) {
                    !1 === s.download && delete s.download;
                    let e = new URLSearchParams(s);
                    n += (n.includes("?") ? "&" : "?") + e
                }
                return n
            }
            async getToken(e) {
                return e = Object.assign({
                    method: "POST"
                }, e),
                this.client.send("/api/files/token", e).then(e=>e?.token || "")
            }
        }
        class q extends g {
            async getFullList(e) {
                return e = Object.assign({
                    method: "GET"
                }, e),
                this.client.send("/api/backups", e)
            }
            async create(e, t) {
                return t = Object.assign({
                    method: "POST",
                    body: {
                        name: e
                    }
                }, t),
                this.client.send("/api/backups", t).then(()=>!0)
            }
            async upload(e, t) {
                return t = Object.assign({
                    method: "POST",
                    body: e
                }, t),
                this.client.send("/api/backups/upload", t).then(()=>!0)
            }
            async delete(e, t) {
                return t = Object.assign({
                    method: "DELETE"
                }, t),
                this.client.send(`/api/backups/${encodeURIComponent(e)}`, t).then(()=>!0)
            }
            async restore(e, t) {
                return t = Object.assign({
                    method: "POST"
                }, t),
                this.client.send(`/api/backups/${encodeURIComponent(e)}/restore`, t).then(()=>!0)
            }
            getDownloadUrl(e, t) {
                return this.client.buildUrl(`/api/backups/${encodeURIComponent(t)}?token=${encodeURIComponent(e)}`)
            }
        }
        class x {
            constructor(e="/", t, s="en-US") {
                this.cancelControllers = {},
                this.recordServices = {},
                this.enableAutoCancellation = !0,
                this.baseUrl = e,
                this.lang = s,
                this.authStore = t || new b,
                this.admins = new O(this),
                this.collections = new R(this),
                this.files = new A(this),
                this.logs = new I(this),
                this.settings = new y(this),
                this.realtime = new E(this),
                this.health = new j(this),
                this.backups = new q(this)
            }
            collection(e) {
                return this.recordServices[e] || (this.recordServices[e] = new k(this,e)),
                this.recordServices[e]
            }
            autoCancellation(e) {
                return this.enableAutoCancellation = !!e,
                this
            }
            cancelRequest(e) {
                return this.cancelControllers[e] && (this.cancelControllers[e].abort(),
                delete this.cancelControllers[e]),
                this
            }
            cancelAllRequests() {
                for (let e in this.cancelControllers)
                    this.cancelControllers[e].abort();
                return this.cancelControllers = {},
                this
            }
            filter(e, t) {
                if (!t)
                    return e;
                for (let s in t) {
                    let i = t[s];
                    switch (typeof i) {
                    case "boolean":
                    case "number":
                        i = "" + i;
                        break;
                    case "string":
                        i = "'" + i.replace(/'/g, "\\'") + "'";
                        break;
                    default:
                        i = null === i ? "null" : i instanceof Date ? "'" + i.toISOString().replace("T", " ") + "'" : "'" + JSON.stringify(i).replace(/'/g, "\\'") + "'"
                    }
                    e = e.replaceAll("{:" + s + "}", i)
                }
                return e
            }
            getFileUrl(e, t, s={}) {
                return this.files.getUrl(e, t, s)
            }
            buildUrl(e) {
                let t = this.baseUrl;
                return "undefined" == typeof window || !window.location || t.startsWith("https://") || t.startsWith("http://") || (t = window.location.origin?.endsWith("/") ? window.location.origin.substring(0, window.location.origin.length - 1) : window.location.origin || "",
                this.baseUrl.startsWith("/") || (t += window.location.pathname || "/",
                t += t.endsWith("/") ? "" : "/"),
                t += this.baseUrl),
                e && (t += (t.endsWith("/") ? "" : "/") + (e.startsWith("/") ? e.substring(1) : e)),
                t
            }
            async send(e, t) {
                t = this.initSendOptions(e, t);
                let s = this.buildUrl(e);
                if (this.beforeSend) {
                    let e = Object.assign({}, await this.beforeSend(s, t));
                    void 0 !== e.url || void 0 !== e.options ? (s = e.url || s,
                    t = e.options || t) : Object.keys(e).length && (t = e,
                    console?.warn && console.warn("Deprecated format of beforeSend return: please use `return { url, options }`, instead of `return options`."))
                }
                if (void 0 !== t.query) {
                    let e = this.serializeQueryParams(t.query);
                    e && (s += (s.includes("?") ? "&" : "?") + e),
                    delete t.query
                }
                return "application/json" == this.getHeader(t.headers, "Content-Type") && t.body && "string" != typeof t.body && (t.body = JSON.stringify(t.body)),
                (t.fetch || fetch)(s, t).then(async e=>{
                    let t = {};
                    try {
                        t = await e.json()
                    } catch (e) {}
                    if (this.afterSend && (t = await this.afterSend(e, t)),
                    e.status >= 400)
                        throw new o({
                            url: e.url,
                            status: e.status,
                            data: t
                        });
                    return t
                }
                ).catch(e=>{
                    throw new o(e)
                }
                )
            }
            initSendOptions(e, t) {
                if ((t = Object.assign({
                    method: "GET"
                }, t)).body = this.convertToFormDataIfNeeded(t.body),
                T(t),
                t.query = Object.assign({}, t.params, t.query),
                void 0 === t.requestKey && (!1 === t.$autoCancel || !1 === t.query.$autoCancel ? t.requestKey = null : (t.$cancelKey || t.query.$cancelKey) && (t.requestKey = t.$cancelKey || t.query.$cancelKey)),
                delete t.$autoCancel,
                delete t.query.$autoCancel,
                delete t.$cancelKey,
                delete t.query.$cancelKey,
                null !== this.getHeader(t.headers, "Content-Type") || this.isFormData(t.body) || (t.headers = Object.assign({}, t.headers, {
                    "Content-Type": "application/json"
                })),
                null === this.getHeader(t.headers, "Accept-Language") && (t.headers = Object.assign({}, t.headers, {
                    "Accept-Language": this.lang
                })),
                this.authStore.token && null === this.getHeader(t.headers, "Authorization") && (t.headers = Object.assign({}, t.headers, {
                    Authorization: this.authStore.token
                })),
                this.enableAutoCancellation && null !== t.requestKey) {
                    let s = t.requestKey || (t.method || "GET") + e;
                    delete t.requestKey,
                    this.cancelRequest(s);
                    let i = new AbortController;
                    this.cancelControllers[s] = i,
                    t.signal = i.signal
                }
                return t
            }
            convertToFormDataIfNeeded(e) {
                if ("undefined" == typeof FormData || void 0 === e || "object" != typeof e || null === e || this.isFormData(e) || !this.hasBlobField(e))
                    return e;
                let t = new FormData;
                for (let s in e) {
                    let i = e[s];
                    if ("object" != typeof i || this.hasBlobField({
                        data: i
                    }))
                        for (let e of Array.isArray(i) ? i : [i])
                            t.append(s, e);
                    else {
                        let e = {};
                        e[s] = i,
                        t.append("@jsonPayload", JSON.stringify(e))
                    }
                }
                return t
            }
            hasBlobField(e) {
                for (let t in e)
                    for (let s of Array.isArray(e[t]) ? e[t] : [e[t]])
                        if ("undefined" != typeof Blob && s instanceof Blob || "undefined" != typeof File && s instanceof File)
                            return !0;
                return !1
            }
            getHeader(e, t) {
                for (let s in e = e || {},
                t = t.toLowerCase(),
                e)
                    if (s.toLowerCase() == t)
                        return e[s];
                return null
            }
            isFormData(e) {
                return e && ("FormData" === e.constructor.name || "undefined" != typeof FormData && e instanceof FormData)
            }
            serializeQueryParams(e) {
                let t = [];
                for (let s in e) {
                    if (null === e[s])
                        continue;
                    let i = e[s]
                      , n = encodeURIComponent(s);
                    if (Array.isArray(i))
                        for (let e of i)
                            t.push(n + "=" + encodeURIComponent(e));
                    else
                        i instanceof Date ? t.push(n + "=" + encodeURIComponent(i.toISOString())) : "object" == typeof i ? t.push(n + "=" + encodeURIComponent(JSON.stringify(i))) : t.push(n + "=" + encodeURIComponent(i))
                }
                return t.join("&")
            }
        }
        function N() {
            return "undefined" != typeof window
        }
        function L() {
            return (N() ? window.vam : "production") || "production"
        }
        function U() {
            return "production" === L()
        }
        s(602);
        let _ = new x("https://db.pluraldan.link");
        function D() {
            let[e,t] = (0,
            r.useState)("")
              , [s,i] = (0,
            r.useState)(0)
              , [o,a] = (0,
            r.useState)(!1)
              , [c,l] = (0,
            r.useState)(!1)
              , [h,d] = (0,
            r.useState)({
                title: "",
                content: ""
            })
              , [u,p] = (0,
            r.useState)(!1)
              , [m,f] = (0,
            r.useState)("ACCESS CONTROL")
              , [b,g] = (0,
            r.useState)("D.A.N. NETWORK SYSTEM")
              , y = (0,
            r.useRef)(null)
              , w = (0,
            r.useRef)(null)
              , [S,C] = (0,
            r.useState)([]);
            (0,
            r.useEffect)(()=>{
                let e = new Audio("/beep.wav")
                  , t = ()=>{
                    e.play()
                }
                ;
                return document.addEventListener("click", t),
                ()=>{
                    document.removeEventListener("click", t)
                }
            }
            , []),
            (0,
            r.useEffect)(()=>{
                if (o) {
                    let e = y.current;
                    if (e) {
                        let t = e.getContext("2d");
                        e.width = window.innerWidth / 3,
                        e.height = .5625 * window.innerWidth / 3;
                        let s = ()=>{
                            T(t),
                            requestAnimationFrame(s)
                        }
                        ;
                        s(),
                        setTimeout(()=>{
                            let e = document.querySelector("main");
                            e && (e.classList.add("on"),
                            e.classList.remove("off"))
                        }
                        , 1e3)
                    }
                }
            }
            , [o]),
            (0,
            r.useEffect)(()=>{
                u || (f("ACCESS CONTROL"),
                g("D.A.N. NETWORK SYSTEM"),
                t(""))
            }
            , [u]),
            (0,
            r.useEffect)(()=>{
                let e = e=>{
                    w.current && !w.current.contains(e.target) && O()
                }
                ;
                return document.addEventListener("mousedown", e),
                ()=>{
                    document.removeEventListener("mousedown", e)
                }
            }
            , []);
            let O = ()=>{
                p(!1),
                f("ACCESS CONTROL"),
                g("D.A.N. NETWORK SYSTEM"),
                t(""),
                d({
                    title: "",
                    content: ""
                });
                let e = document.querySelector(".popupmenu");
                e && (e.style.display = "none");
                let s = document.querySelector(".menu");
                s && (s.style.display = "block")
            }
              , v = async s=>{
                if ("Enter" === s.key) {
                    s.preventDefault();
                    let i = e.toLowerCase();
                    if ("off" === i)
                        a(!1),
                        g("SYSTEM TERMINATED");
                    else if ("crash" === i) {
                        g(""),
                        f("???");
                        let e = 0
                          , t = setInterval(()=>{
                            e < 100 ? (C(e=>[...e, {
                                type: "text",
                                content: .5 > Math.random() ? "ERROR" : "???",
                                top: 100 * Math.random() + "%",
                                left: 100 * Math.random() + "%"
                            }]),
                            e++) : (clearInterval(t),
                            a(!1),
                            g("SYSTEM CRASHED. REBOOTING..."),
                            C([]),
                            setTimeout(()=>{
                                window.location.reload()
                            }
                            , 3e3))
                        }
                        , 20)
                    } else
                        try {
                            !function(e, t, s) {
                                var i, n;
                                if (!N()) {
                                    let e = "[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment";
                                    if (U())
                                        console.warn(e);
                                    else
                                        throw Error(e);
                                    return
                                }
                                if (!t) {
                                    null == (i = window.va) || i.call(window, "event", {
                                        name: e,
                                        options: void 0
                                    });
                                    return
                                }
                                try {
                                    let s = function(e, t) {
                                        if (!e)
                                            return;
                                        let s = e
                                          , i = [];
                                        for (let[n,r] of Object.entries(e))
                                            "object" == typeof r && null !== r && (t.strip ? s = function(e, {[e]: t, ...s}) {
                                                return s
                                            }(n, s) : i.push(n));
                                        if (i.length > 0 && !t.strip)
                                            throw Error(`The following properties are not valid: ${i.join(", ")}. Only strings, numbers, booleans, and null are allowed.`);
                                        return s
                                    }(t, {
                                        strip: U()
                                    });
                                    null == (n = window.va) || n.call(window, "event", {
                                        name: e,
                                        data: s,
                                        options: void 0
                                    })
                                } catch (e) {
                                    e instanceof Error && "development" === L() && console.error(e)
                                }
                            }("code", {
                                usedcode: i
                            });
                            let e = await _.collection("mystery_codes").getFirstListItem('code="'.concat(i, '"'), {
                                headers: {
                                    code: i
                                }
                            });
                            g("NETWORK SYSTEM LOGS"),
                            l(!0),
                            d({
                                title: e.clue_title,
                                content: e.clue_content.replace(/\\n/g, "<br>")
                            }),
                            p(!0);
                            let t = document.querySelector(".popupmenu");
                            t && (t.style.display = "block");
                            let s = document.querySelector(".menu");
                            s && (s.style.display = "none")
                        } catch (e) {
                            404 === e.status ? (l(!1),
                            f("\nERROR. RETRY.\n")) : console.error("An error occurred", e)
                        }
                    t("")
                }
            }
              , T = e=>{
                let t = e.canvas.width
                  , s = e.canvas.height
                  , i = e.createImageData(t, s)
                  , n = new Uint32Array(i.data.buffer)
                  , r = n.length;
                for (let e = 0; e < r; e++)
                    n[e] = (255 * Math.random() | 0) << 24;
                e.putImageData(i, 0, 0)
            }
            ;
            return (0,
            r.useEffect)(()=>{
                a(!0)
            }
            , []),
            (0,
            n.jsx)("main", {
                className: "scanlines ".concat(o ? "on" : "off"),
                children: (0,
                n.jsxs)("div", {
                    className: "screen",
                    children: [(0,
                    n.jsx)("canvas", {
                        ref: y,
                        className: "picture"
                    }), (0,
                    n.jsxs)("div", {
                        className: "overlay",
                        children: [!u && (0,
                        n.jsx)("div", {
                            className: "text",
                            children: (0,
                            n.jsx)("span", {
                                children: b
                            })
                        }), !u && (0,
                        n.jsxs)("div", {
                            className: "menu",
                            children: [(0,
                            n.jsx)("header", {
                                className: "mt-5 text-center",
                                children: m
                            }), (0,
                            n.jsx)("ul", {
                                children: (0,
                                n.jsx)("li", {
                                    children: (0,
                                    n.jsx)("input", {
                                        value: e,
                                        onChange: e=>t(e.target.value.toUpperCase()),
                                        onKeyDown: v,
                                        className: "input mb-3 pl-5 text-black"
                                    })
                                }, "1")
                            })]
                        }), (0,
                        n.jsxs)("div", {
                            ref: w,
                            className: "popupmenu hidden",
                            children: [(0,
                            n.jsx)("header", {
                                className: "mt-5 text-center",
                                children: h.title
                            }), (0,
                            n.jsx)("ul", {
                                children: (0,
                                n.jsx)("li", {
                                    children: (0,
                                    n.jsx)("p", {
                                        className: "text-white",
                                        dangerouslySetInnerHTML: {
                                            __html: h.content
                                        }
                                    })
                                }, "1")
                            })]
                        }), S.map((e,t)=>"text" === e.type ? (0,
                        n.jsx)("div", {
                            className: "text-xl text",
                            style: {
                                position: "absolute",
                                top: e.top,
                                left: e.left
                            },
                            children: e.content
                        }, t) : (0,
                        n.jsx)("button", {
                            style: {
                                position: "absolute",
                                top: e.top,
                                left: e.left
                            },
                            children: e.content
                        }, t))]
                    })]
                })
            })
        }
    },
    602: function() {}
}, function(e) {
    e.O(0, [961, 971, 23, 744], function() {
        return e(e.s = 8350)
    }),
    _N_E = e.O()
}
]);

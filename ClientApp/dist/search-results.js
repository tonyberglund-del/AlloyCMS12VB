var ao = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
import Vt, { useState as me, useEffect as qr, useMemo as oo } from "react";
import so from "react-dom";
var El = ao((xl, Qr) => {
  function uo(t, e) {
    for (var r = 0; r < e.length; r++) {
      const n = e[r];
      if (typeof n != "string" && !Array.isArray(n)) {
        for (const i in n)
          if (i !== "default" && !(i in t)) {
            const a = Object.getOwnPropertyDescriptor(n, i);
            a && Object.defineProperty(t, i, a.get ? a : {
              enumerable: !0,
              get: () => n[i]
            });
          }
      }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
  }
  function xi(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  }
  var Kt = { exports: {} }, Ke = {};
  var _n;
  function co() {
    if (_n) return Ke;
    _n = 1;
    var t = Vt, e = /* @__PURE__ */ Symbol.for("react.element"), r = /* @__PURE__ */ Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
    function o(s, c, u) {
      var l, f = {}, h = null, d = null;
      u !== void 0 && (h = "" + u), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (d = c.ref);
      for (l in c) n.call(c, l) && !a.hasOwnProperty(l) && (f[l] = c[l]);
      if (s && s.defaultProps) for (l in c = s.defaultProps, c) f[l] === void 0 && (f[l] = c[l]);
      return { $$typeof: e, type: s, key: h, ref: d, props: f, _owner: i.current };
    }
    return Ke.Fragment = r, Ke.jsx = o, Ke.jsxs = o, Ke;
  }
  var En;
  function lo() {
    return En || (En = 1, Kt.exports = co()), Kt.exports;
  }
  var x = lo(), _t = {}, On;
  function fo() {
    if (On) return _t;
    On = 1;
    var t = so;
    return _t.createRoot = t.createRoot, _t.hydrateRoot = t.hydrateRoot, _t;
  }
  var ho = fo();
  const Ii = /* @__PURE__ */ xi(ho);
  var vr = function(t, e) {
    return vr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
      r.__proto__ = n;
    } || function(r, n) {
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
    }, vr(t, e);
  };
  function oe(t, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    vr(t, e);
    function r() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
  }
  var p = function() {
    return p = Object.assign || function(e) {
      for (var r, n = 1, i = arguments.length; n < i; n++) {
        r = arguments[n];
        for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
      }
      return e;
    }, p.apply(this, arguments);
  };
  function re(t, e) {
    var r = {};
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
        e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
    return r;
  }
  function de(t, e, r, n) {
    function i(a) {
      return a instanceof r ? a : new r(function(o) {
        o(a);
      });
    }
    return new (r || (r = Promise))(function(a, o) {
      function s(l) {
        try {
          u(n.next(l));
        } catch (f) {
          o(f);
        }
      }
      function c(l) {
        try {
          u(n.throw(l));
        } catch (f) {
          o(f);
        }
      }
      function u(l) {
        l.done ? a(l.value) : i(l.value).then(s, c);
      }
      u((n = n.apply(t, e || [])).next());
    });
  }
  function pe(t, e) {
    var r = { label: 0, sent: function() {
      if (a[0] & 1) throw a[1];
      return a[1];
    }, trys: [], ops: [] }, n, i, a, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
      return this;
    }), o;
    function s(u) {
      return function(l) {
        return c([u, l]);
      };
    }
    function c(u) {
      if (n) throw new TypeError("Generator is already executing.");
      for (; o && (o = 0, u[0] && (r = 0)), r; ) try {
        if (n = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done) return a;
        switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
          case 0:
          case 1:
            a = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < a[1]) {
              r.label = a[1], a = u;
              break;
            }
            if (a && r.label < a[2]) {
              r.label = a[2], r.ops.push(u);
              break;
            }
            a[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = e.call(t, r);
      } catch (l) {
        u = [6, l], i = 0;
      } finally {
        n = a = 0;
      }
      if (u[0] & 5) throw u[1];
      return { value: u[0] ? u[1] : void 0, done: !0 };
    }
  }
  function Y(t, e, r) {
    if (r || arguments.length === 2) for (var n = 0, i = e.length, a; n < i; n++)
      (a || !(n in e)) && (a || (a = Array.prototype.slice.call(e, 0, n)), a[n] = e[n]);
    return t.concat(a || Array.prototype.slice.call(e));
  }
  var Xt = "Invariant Violation", Tn = Object.setPrototypeOf, po = Tn === void 0 ? function(t, e) {
    return t.__proto__ = e, t;
  } : Tn, Ni = (
    /** @class */
    (function(t) {
      oe(e, t);
      function e(r) {
        r === void 0 && (r = Xt);
        var n = t.call(this, typeof r == "number" ? Xt + ": " + r + " (see https://github.com/apollographql/invariant-packages)" : r) || this;
        return n.framesToPop = 1, n.name = Xt, po(n, e.prototype), n;
      }
      return e;
    })(Error)
  );
  function we(t, e) {
    if (!t)
      throw new Ni(e);
  }
  var Ri = ["debug", "log", "warn", "error", "silent"], vo = Ri.indexOf("log");
  function Et(t) {
    return function() {
      if (Ri.indexOf(t) >= vo) {
        var e = console[t] || console.log;
        return e.apply(console, arguments);
      }
    };
  }
  (function(t) {
    t.debug = Et("debug"), t.log = Et("log"), t.warn = Et("warn"), t.error = Et("error");
  })(we || (we = {}));
  var Br = "3.14.0";
  function te(t) {
    try {
      return t();
    } catch {
    }
  }
  const Ft = te(function() {
    return globalThis;
  }) || te(function() {
    return window;
  }) || te(function() {
    return self;
  }) || te(function() {
    return global;
  }) || // We don't expect the Function constructor ever to be invoked at runtime, as
  // long as at least one of globalThis, window, self, or global is defined, so
  // we are under no obligation to make it easy for static analysis tools to
  // detect syntactic usage of the Function constructor. If you think you can
  // improve your static analysis to detect this obfuscation, think again. This
  // is an arms race you cannot win, at least not in JavaScript.
  te(function() {
    return te.constructor("return this")();
  });
  var wn = /* @__PURE__ */ new Map();
  function yr(t) {
    var e = wn.get(t) || 1;
    return wn.set(t, e + 1), "".concat(t, ":").concat(e, ":").concat(Math.random().toString(36).slice(2));
  }
  function Ci(t, e) {
    e === void 0 && (e = 0);
    var r = yr("stringifyForDisplay");
    return JSON.stringify(t, function(n, i) {
      return i === void 0 ? r : i;
    }, e).split(JSON.stringify(r)).join("<undefined>");
  }
  function Ot(t) {
    return function(e) {
      for (var r = [], n = 1; n < arguments.length; n++)
        r[n - 1] = arguments[n];
      if (typeof e == "number") {
        var i = e;
        e = Ur(i), e || (e = zr(i, r), r = []);
      }
      t.apply(void 0, [e].concat(r));
    };
  }
  var T = Object.assign(function(e, r) {
    for (var n = [], i = 2; i < arguments.length; i++)
      n[i - 2] = arguments[i];
    e || we(e, Ur(r, n) || zr(r, n));
  }, {
    debug: Ot(we.debug),
    log: Ot(we.log),
    warn: Ot(we.warn),
    error: Ot(we.error)
  });
  function H(t) {
    for (var e = [], r = 1; r < arguments.length; r++)
      e[r - 1] = arguments[r];
    return new Ni(Ur(t, e) || zr(t, e));
  }
  var Sn = /* @__PURE__ */ Symbol.for("ApolloErrorMessageHandler_" + Br);
  function Ai(t) {
    if (typeof t == "string")
      return t;
    try {
      return Ci(t, 2).slice(0, 1e3);
    } catch {
      return "<non-serializable>";
    }
  }
  function Ur(t, e) {
    if (e === void 0 && (e = []), !!t)
      return Ft[Sn] && Ft[Sn](t, e.map(Ai));
  }
  function zr(t, e) {
    if (e === void 0 && (e = []), !!t)
      return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({
        version: Br,
        message: t,
        args: e.map(Ai)
      })));
  }
  function St(t, e) {
    if (!!!t)
      throw new Error(e);
  }
  function yo(t) {
    return typeof t == "object" && t !== null;
  }
  function mo(t, e) {
    if (!!!t)
      throw new Error(
        "Unexpected invariant triggered."
      );
  }
  const go = /\r\n|[\n\r]/g;
  function mr(t, e) {
    let r = 0, n = 1;
    for (const i of t.body.matchAll(go)) {
      if (typeof i.index == "number" || mo(!1), i.index >= e)
        break;
      r = i.index + i[0].length, n += 1;
    }
    return {
      line: n,
      column: e + 1 - r
    };
  }
  function bo(t) {
    return Fi(
      t.source,
      mr(t.source, t.start)
    );
  }
  function Fi(t, e) {
    const r = t.locationOffset.column - 1, n = "".padStart(r) + t.body, i = e.line - 1, a = t.locationOffset.line - 1, o = e.line + a, s = e.line === 1 ? r : 0, c = e.column + s, u = `${t.name}:${o}:${c}
`, l = n.split(/\r\n|[\n\r]/g), f = l[i];
    if (f.length > 120) {
      const h = Math.floor(c / 80), d = c % 80, y = [];
      for (let m = 0; m < f.length; m += 80)
        y.push(f.slice(m, m + 80));
      return u + kn([
        [`${o} |`, y[0]],
        ...y.slice(1, h + 1).map((m) => ["|", m]),
        ["|", "^".padStart(d)],
        ["|", y[h + 1]]
      ]);
    }
    return u + kn([
      // Lines specified like this: ["prefix", "string"],
      [`${o - 1} |`, l[i - 1]],
      [`${o} |`, f],
      ["|", "^".padStart(c)],
      [`${o + 1} |`, l[i + 1]]
    ]);
  }
  function kn(t) {
    const e = t.filter(([n, i]) => i !== void 0), r = Math.max(...e.map(([n]) => n.length));
    return e.map(([n, i]) => n.padStart(r) + (i ? " " + i : "")).join(`
`);
  }
  function _o(t) {
    const e = t[0];
    return e == null || "kind" in e || "length" in e ? {
      nodes: e,
      source: t[1],
      positions: t[2],
      path: t[3],
      originalError: t[4],
      extensions: t[5]
    } : e;
  }
  class Wr extends Error {
    /**
     * An array of `{ line, column }` locations within the source GraphQL document
     * which correspond to this error.
     *
     * Errors during validation often contain multiple locations, for example to
     * point out two things with the same name. Errors during execution include a
     * single location, the field which produced the error.
     *
     * Enumerable, and appears in the result of JSON.stringify().
     */
    /**
     * An array describing the JSON-path into the execution response which
     * corresponds to this error. Only included for errors during execution.
     *
     * Enumerable, and appears in the result of JSON.stringify().
     */
    /**
     * An array of GraphQL AST Nodes corresponding to this error.
     */
    /**
     * The source GraphQL document for the first location of this error.
     *
     * Note that if this Error represents more than one node, the source may not
     * represent nodes after the first node.
     */
    /**
     * An array of character offsets within the source GraphQL document
     * which correspond to this error.
     */
    /**
     * The original error thrown from a field resolver during execution.
     */
    /**
     * Extension fields to add to the formatted error.
     */
    /**
     * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
     */
    constructor(e, ...r) {
      var n, i, a;
      const { nodes: o, source: s, positions: c, path: u, originalError: l, extensions: f } = _o(r);
      super(e), this.name = "GraphQLError", this.path = u ?? void 0, this.originalError = l ?? void 0, this.nodes = Dn(
        Array.isArray(o) ? o : o ? [o] : void 0
      );
      const h = Dn(
        (n = this.nodes) === null || n === void 0 ? void 0 : n.map((y) => y.loc).filter((y) => y != null)
      );
      this.source = s ?? (h == null || (i = h[0]) === null || i === void 0 ? void 0 : i.source), this.positions = c ?? h?.map((y) => y.start), this.locations = c && s ? c.map((y) => mr(s, y)) : h?.map((y) => mr(y.source, y.start));
      const d = yo(
        l?.extensions
      ) ? l?.extensions : void 0;
      this.extensions = (a = f ?? d) !== null && a !== void 0 ? a : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, {
        message: {
          writable: !0,
          enumerable: !0
        },
        name: {
          enumerable: !1
        },
        nodes: {
          enumerable: !1
        },
        source: {
          enumerable: !1
        },
        positions: {
          enumerable: !1
        },
        originalError: {
          enumerable: !1
        }
      }), l != null && l.stack ? Object.defineProperty(this, "stack", {
        value: l.stack,
        writable: !0,
        configurable: !0
      }) : Error.captureStackTrace ? Error.captureStackTrace(this, Wr) : Object.defineProperty(this, "stack", {
        value: Error().stack,
        writable: !0,
        configurable: !0
      });
    }
    get [Symbol.toStringTag]() {
      return "GraphQLError";
    }
    toString() {
      let e = this.message;
      if (this.nodes)
        for (const r of this.nodes)
          r.loc && (e += `

` + bo(r.loc));
      else if (this.source && this.locations)
        for (const r of this.locations)
          e += `

` + Fi(this.source, r);
      return e;
    }
    toJSON() {
      const e = {
        message: this.message
      };
      return this.locations != null && (e.locations = this.locations), this.path != null && (e.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (e.extensions = this.extensions), e;
    }
  }
  function Dn(t) {
    return t === void 0 || t.length === 0 ? void 0 : t;
  }
  function z(t, e, r) {
    return new Wr(`Syntax Error: ${r}`, {
      source: t,
      positions: [e]
    });
  }
  class Eo {
    /**
     * The character offset at which this Node begins.
     */
    /**
     * The character offset at which this Node ends.
     */
    /**
     * The Token at which this Node begins.
     */
    /**
     * The Token at which this Node ends.
     */
    /**
     * The Source document the AST represents.
     */
    constructor(e, r, n) {
      this.start = e.start, this.end = r.end, this.startToken = e, this.endToken = r, this.source = n;
    }
    get [Symbol.toStringTag]() {
      return "Location";
    }
    toJSON() {
      return {
        start: this.start,
        end: this.end
      };
    }
  }
  class Pi {
    /**
     * The kind of Token.
     */
    /**
     * The character offset at which this Node begins.
     */
    /**
     * The character offset at which this Node ends.
     */
    /**
     * The 1-indexed line number on which this Token appears.
     */
    /**
     * The 1-indexed column number at which this Token begins.
     */
    /**
     * For non-punctuation tokens, represents the interpreted value of the token.
     *
     * Note: is undefined for punctuation tokens, but typed as string for
     * convenience in the parser.
     */
    /**
     * Tokens exist as nodes in a double-linked-list amongst all tokens
     * including ignored tokens. <SOF> is always the first node and <EOF>
     * the last.
     */
    constructor(e, r, n, i, a, o) {
      this.kind = e, this.start = r, this.end = n, this.line = i, this.column = a, this.value = o, this.prev = null, this.next = null;
    }
    get [Symbol.toStringTag]() {
      return "Token";
    }
    toJSON() {
      return {
        kind: this.kind,
        value: this.value,
        line: this.line,
        column: this.column
      };
    }
  }
  const Mi = {
    Name: [],
    Document: ["definitions"],
    OperationDefinition: [
      "description",
      "name",
      "variableDefinitions",
      "directives",
      "selectionSet"
    ],
    VariableDefinition: [
      "description",
      "variable",
      "type",
      "defaultValue",
      "directives"
    ],
    Variable: ["name"],
    SelectionSet: ["selections"],
    Field: ["alias", "name", "arguments", "directives", "selectionSet"],
    Argument: ["name", "value"],
    FragmentSpread: ["name", "directives"],
    InlineFragment: ["typeCondition", "directives", "selectionSet"],
    FragmentDefinition: [
      "description",
      "name",
      // Note: fragment variable definitions are deprecated and will removed in v17.0.0
      "variableDefinitions",
      "typeCondition",
      "directives",
      "selectionSet"
    ],
    IntValue: [],
    FloatValue: [],
    StringValue: [],
    BooleanValue: [],
    NullValue: [],
    EnumValue: [],
    ListValue: ["values"],
    ObjectValue: ["fields"],
    ObjectField: ["name", "value"],
    Directive: ["name", "arguments"],
    NamedType: ["name"],
    ListType: ["type"],
    NonNullType: ["type"],
    SchemaDefinition: ["description", "directives", "operationTypes"],
    OperationTypeDefinition: ["type"],
    ScalarTypeDefinition: ["description", "name", "directives"],
    ObjectTypeDefinition: [
      "description",
      "name",
      "interfaces",
      "directives",
      "fields"
    ],
    FieldDefinition: ["description", "name", "arguments", "type", "directives"],
    InputValueDefinition: [
      "description",
      "name",
      "type",
      "defaultValue",
      "directives"
    ],
    InterfaceTypeDefinition: [
      "description",
      "name",
      "interfaces",
      "directives",
      "fields"
    ],
    UnionTypeDefinition: ["description", "name", "directives", "types"],
    EnumTypeDefinition: ["description", "name", "directives", "values"],
    EnumValueDefinition: ["description", "name", "directives"],
    InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
    DirectiveDefinition: ["description", "name", "arguments", "locations"],
    SchemaExtension: ["directives", "operationTypes"],
    ScalarTypeExtension: ["name", "directives"],
    ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
    InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
    UnionTypeExtension: ["name", "directives", "types"],
    EnumTypeExtension: ["name", "directives", "values"],
    InputObjectTypeExtension: ["name", "directives", "fields"],
    TypeCoordinate: ["name"],
    MemberCoordinate: ["name", "memberName"],
    ArgumentCoordinate: ["name", "fieldName", "argumentName"],
    DirectiveCoordinate: ["name"],
    DirectiveArgumentCoordinate: ["name", "argumentName"]
  }, Oo = new Set(Object.keys(Mi));
  function xn(t) {
    const e = t?.kind;
    return typeof e == "string" && Oo.has(e);
  }
  var Fe;
  (function(t) {
    t.QUERY = "query", t.MUTATION = "mutation", t.SUBSCRIPTION = "subscription";
  })(Fe || (Fe = {}));
  var gr;
  (function(t) {
    t.QUERY = "QUERY", t.MUTATION = "MUTATION", t.SUBSCRIPTION = "SUBSCRIPTION", t.FIELD = "FIELD", t.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", t.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", t.INLINE_FRAGMENT = "INLINE_FRAGMENT", t.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", t.SCHEMA = "SCHEMA", t.SCALAR = "SCALAR", t.OBJECT = "OBJECT", t.FIELD_DEFINITION = "FIELD_DEFINITION", t.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", t.INTERFACE = "INTERFACE", t.UNION = "UNION", t.ENUM = "ENUM", t.ENUM_VALUE = "ENUM_VALUE", t.INPUT_OBJECT = "INPUT_OBJECT", t.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
  })(gr || (gr = {}));
  var S;
  (function(t) {
    t.NAME = "Name", t.DOCUMENT = "Document", t.OPERATION_DEFINITION = "OperationDefinition", t.VARIABLE_DEFINITION = "VariableDefinition", t.SELECTION_SET = "SelectionSet", t.FIELD = "Field", t.ARGUMENT = "Argument", t.FRAGMENT_SPREAD = "FragmentSpread", t.INLINE_FRAGMENT = "InlineFragment", t.FRAGMENT_DEFINITION = "FragmentDefinition", t.VARIABLE = "Variable", t.INT = "IntValue", t.FLOAT = "FloatValue", t.STRING = "StringValue", t.BOOLEAN = "BooleanValue", t.NULL = "NullValue", t.ENUM = "EnumValue", t.LIST = "ListValue", t.OBJECT = "ObjectValue", t.OBJECT_FIELD = "ObjectField", t.DIRECTIVE = "Directive", t.NAMED_TYPE = "NamedType", t.LIST_TYPE = "ListType", t.NON_NULL_TYPE = "NonNullType", t.SCHEMA_DEFINITION = "SchemaDefinition", t.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", t.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", t.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", t.FIELD_DEFINITION = "FieldDefinition", t.INPUT_VALUE_DEFINITION = "InputValueDefinition", t.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", t.UNION_TYPE_DEFINITION = "UnionTypeDefinition", t.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", t.ENUM_VALUE_DEFINITION = "EnumValueDefinition", t.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", t.DIRECTIVE_DEFINITION = "DirectiveDefinition", t.SCHEMA_EXTENSION = "SchemaExtension", t.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", t.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", t.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", t.UNION_TYPE_EXTENSION = "UnionTypeExtension", t.ENUM_TYPE_EXTENSION = "EnumTypeExtension", t.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension", t.TYPE_COORDINATE = "TypeCoordinate", t.MEMBER_COORDINATE = "MemberCoordinate", t.ARGUMENT_COORDINATE = "ArgumentCoordinate", t.DIRECTIVE_COORDINATE = "DirectiveCoordinate", t.DIRECTIVE_ARGUMENT_COORDINATE = "DirectiveArgumentCoordinate";
  })(S || (S = {}));
  function br(t) {
    return t === 9 || t === 32;
  }
  function ht(t) {
    return t >= 48 && t <= 57;
  }
  function Li(t) {
    return t >= 97 && t <= 122 || // A-Z
    t >= 65 && t <= 90;
  }
  function ji(t) {
    return Li(t) || t === 95;
  }
  function To(t) {
    return Li(t) || ht(t) || t === 95;
  }
  function wo(t) {
    var e;
    let r = Number.MAX_SAFE_INTEGER, n = null, i = -1;
    for (let o = 0; o < t.length; ++o) {
      var a;
      const s = t[o], c = So(s);
      c !== s.length && (n = (a = n) !== null && a !== void 0 ? a : o, i = o, o !== 0 && c < r && (r = c));
    }
    return t.map((o, s) => s === 0 ? o : o.slice(r)).slice(
      (e = n) !== null && e !== void 0 ? e : 0,
      i + 1
    );
  }
  function So(t) {
    let e = 0;
    for (; e < t.length && br(t.charCodeAt(e)); )
      ++e;
    return e;
  }
  function ko(t, e) {
    const r = t.replace(/"""/g, '\\"""'), n = r.split(/\r\n|[\n\r]/g), i = n.length === 1, a = n.length > 1 && n.slice(1).every((d) => d.length === 0 || br(d.charCodeAt(0))), o = r.endsWith('\\"""'), s = t.endsWith('"') && !o, c = t.endsWith("\\"), u = s || c, l = (
      // add leading and trailing new lines only if it improves readability
      !i || t.length > 70 || u || a || o
    );
    let f = "";
    const h = i && br(t.charCodeAt(0));
    return (l && !h || a) && (f += `
`), f += r, (l || u) && (f += `
`), '"""' + f + '"""';
  }
  var _;
  (function(t) {
    t.SOF = "<SOF>", t.EOF = "<EOF>", t.BANG = "!", t.DOLLAR = "$", t.AMP = "&", t.PAREN_L = "(", t.PAREN_R = ")", t.DOT = ".", t.SPREAD = "...", t.COLON = ":", t.EQUALS = "=", t.AT = "@", t.BRACKET_L = "[", t.BRACKET_R = "]", t.BRACE_L = "{", t.PIPE = "|", t.BRACE_R = "}", t.NAME = "Name", t.INT = "Int", t.FLOAT = "Float", t.STRING = "String", t.BLOCK_STRING = "BlockString", t.COMMENT = "Comment";
  })(_ || (_ = {}));
  class Do {
    /**
     * The previously focused non-ignored token.
     */
    /**
     * The currently focused non-ignored token.
     */
    /**
     * The (1-indexed) line containing the current token.
     */
    /**
     * The character offset at which the current line begins.
     */
    constructor(e) {
      const r = new Pi(_.SOF, 0, 0, 0, 0);
      this.source = e, this.lastToken = r, this.token = r, this.line = 1, this.lineStart = 0;
    }
    get [Symbol.toStringTag]() {
      return "Lexer";
    }
    /**
     * Advances the token stream to the next non-ignored token.
     */
    advance() {
      return this.lastToken = this.token, this.token = this.lookahead();
    }
    /**
     * Looks ahead and returns the next non-ignored token, but does not change
     * the state of Lexer.
     */
    lookahead() {
      let e = this.token;
      if (e.kind !== _.EOF)
        do
          if (e.next)
            e = e.next;
          else {
            const r = Io(this, e.end);
            e.next = r, r.prev = e, e = r;
          }
        while (e.kind === _.COMMENT);
      return e;
    }
  }
  function xo(t) {
    return t === _.BANG || t === _.DOLLAR || t === _.AMP || t === _.PAREN_L || t === _.PAREN_R || t === _.DOT || t === _.SPREAD || t === _.COLON || t === _.EQUALS || t === _.AT || t === _.BRACKET_L || t === _.BRACKET_R || t === _.BRACE_L || t === _.PIPE || t === _.BRACE_R;
  }
  function Ge(t) {
    return t >= 0 && t <= 55295 || t >= 57344 && t <= 1114111;
  }
  function Qt(t, e) {
    return Vi(t.charCodeAt(e)) && Qi(t.charCodeAt(e + 1));
  }
  function Vi(t) {
    return t >= 55296 && t <= 56319;
  }
  function Qi(t) {
    return t >= 56320 && t <= 57343;
  }
  function De(t, e) {
    const r = t.source.body.codePointAt(e);
    if (r === void 0)
      return _.EOF;
    if (r >= 32 && r <= 126) {
      const n = String.fromCodePoint(r);
      return n === '"' ? `'"'` : `"${n}"`;
    }
    return "U+" + r.toString(16).toUpperCase().padStart(4, "0");
  }
  function B(t, e, r, n, i) {
    const a = t.line, o = 1 + r - t.lineStart;
    return new Pi(e, r, n, a, o, i);
  }
  function Io(t, e) {
    const r = t.source.body, n = r.length;
    let i = e;
    for (; i < n; ) {
      const a = r.charCodeAt(i);
      switch (a) {
        // Ignored ::
        //   - UnicodeBOM
        //   - WhiteSpace
        //   - LineTerminator
        //   - Comment
        //   - Comma
        //
        // UnicodeBOM :: "Byte Order Mark (U+FEFF)"
        //
        // WhiteSpace ::
        //   - "Horizontal Tab (U+0009)"
        //   - "Space (U+0020)"
        //
        // Comma :: ,
        case 65279:
        // <BOM>
        case 9:
        // \t
        case 32:
        // <space>
        case 44:
          ++i;
          continue;
        // LineTerminator ::
        //   - "New Line (U+000A)"
        //   - "Carriage Return (U+000D)" [lookahead != "New Line (U+000A)"]
        //   - "Carriage Return (U+000D)" "New Line (U+000A)"
        case 10:
          ++i, ++t.line, t.lineStart = i;
          continue;
        case 13:
          r.charCodeAt(i + 1) === 10 ? i += 2 : ++i, ++t.line, t.lineStart = i;
          continue;
        // Comment
        case 35:
          return No(t, i);
        // Token ::
        //   - Punctuator
        //   - Name
        //   - IntValue
        //   - FloatValue
        //   - StringValue
        //
        // Punctuator :: one of ! $ & ( ) ... : = @ [ ] { | }
        case 33:
          return B(t, _.BANG, i, i + 1);
        case 36:
          return B(t, _.DOLLAR, i, i + 1);
        case 38:
          return B(t, _.AMP, i, i + 1);
        case 40:
          return B(t, _.PAREN_L, i, i + 1);
        case 41:
          return B(t, _.PAREN_R, i, i + 1);
        case 46:
          if (r.charCodeAt(i + 1) === 46 && r.charCodeAt(i + 2) === 46)
            return B(t, _.SPREAD, i, i + 3);
          break;
        case 58:
          return B(t, _.COLON, i, i + 1);
        case 61:
          return B(t, _.EQUALS, i, i + 1);
        case 64:
          return B(t, _.AT, i, i + 1);
        case 91:
          return B(t, _.BRACKET_L, i, i + 1);
        case 93:
          return B(t, _.BRACKET_R, i, i + 1);
        case 123:
          return B(t, _.BRACE_L, i, i + 1);
        case 124:
          return B(t, _.PIPE, i, i + 1);
        case 125:
          return B(t, _.BRACE_R, i, i + 1);
        // StringValue
        case 34:
          return r.charCodeAt(i + 1) === 34 && r.charCodeAt(i + 2) === 34 ? Mo(t, i) : Co(t, i);
      }
      if (ht(a) || a === 45)
        return Ro(t, i, a);
      if (ji(a))
        return Lo(t, i);
      throw z(
        t.source,
        i,
        a === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : Ge(a) || Qt(r, i) ? `Unexpected character: ${De(t, i)}.` : `Invalid character: ${De(t, i)}.`
      );
    }
    return B(t, _.EOF, n, n);
  }
  function No(t, e) {
    const r = t.source.body, n = r.length;
    let i = e + 1;
    for (; i < n; ) {
      const a = r.charCodeAt(i);
      if (a === 10 || a === 13)
        break;
      if (Ge(a))
        ++i;
      else if (Qt(r, i))
        i += 2;
      else
        break;
    }
    return B(
      t,
      _.COMMENT,
      e,
      i,
      r.slice(e + 1, i)
    );
  }
  function Ro(t, e, r) {
    const n = t.source.body;
    let i = e, a = r, o = !1;
    if (a === 45 && (a = n.charCodeAt(++i)), a === 48) {
      if (a = n.charCodeAt(++i), ht(a))
        throw z(
          t.source,
          i,
          `Invalid number, unexpected digit after 0: ${De(
            t,
            i
          )}.`
        );
    } else
      i = Zt(t, i, a), a = n.charCodeAt(i);
    if (a === 46 && (o = !0, a = n.charCodeAt(++i), i = Zt(t, i, a), a = n.charCodeAt(i)), (a === 69 || a === 101) && (o = !0, a = n.charCodeAt(++i), (a === 43 || a === 45) && (a = n.charCodeAt(++i)), i = Zt(t, i, a), a = n.charCodeAt(i)), a === 46 || ji(a))
      throw z(
        t.source,
        i,
        `Invalid number, expected digit but got: ${De(
          t,
          i
        )}.`
      );
    return B(
      t,
      o ? _.FLOAT : _.INT,
      e,
      i,
      n.slice(e, i)
    );
  }
  function Zt(t, e, r) {
    if (!ht(r))
      throw z(
        t.source,
        e,
        `Invalid number, expected digit but got: ${De(
          t,
          e
        )}.`
      );
    const n = t.source.body;
    let i = e + 1;
    for (; ht(n.charCodeAt(i)); )
      ++i;
    return i;
  }
  function Co(t, e) {
    const r = t.source.body, n = r.length;
    let i = e + 1, a = i, o = "";
    for (; i < n; ) {
      const s = r.charCodeAt(i);
      if (s === 34)
        return o += r.slice(a, i), B(t, _.STRING, e, i + 1, o);
      if (s === 92) {
        o += r.slice(a, i);
        const c = r.charCodeAt(i + 1) === 117 ? r.charCodeAt(i + 2) === 123 ? Ao(t, i) : Fo(t, i) : Po(t, i);
        o += c.value, i += c.size, a = i;
        continue;
      }
      if (s === 10 || s === 13)
        break;
      if (Ge(s))
        ++i;
      else if (Qt(r, i))
        i += 2;
      else
        throw z(
          t.source,
          i,
          `Invalid character within String: ${De(
            t,
            i
          )}.`
        );
    }
    throw z(t.source, i, "Unterminated string.");
  }
  function Ao(t, e) {
    const r = t.source.body;
    let n = 0, i = 3;
    for (; i < 12; ) {
      const a = r.charCodeAt(e + i++);
      if (a === 125) {
        if (i < 5 || !Ge(n))
          break;
        return {
          value: String.fromCodePoint(n),
          size: i
        };
      }
      if (n = n << 4 | it(a), n < 0)
        break;
    }
    throw z(
      t.source,
      e,
      `Invalid Unicode escape sequence: "${r.slice(
        e,
        e + i
      )}".`
    );
  }
  function Fo(t, e) {
    const r = t.source.body, n = In(r, e + 2);
    if (Ge(n))
      return {
        value: String.fromCodePoint(n),
        size: 6
      };
    if (Vi(n) && r.charCodeAt(e + 6) === 92 && r.charCodeAt(e + 7) === 117) {
      const i = In(r, e + 8);
      if (Qi(i))
        return {
          value: String.fromCodePoint(n, i),
          size: 12
        };
    }
    throw z(
      t.source,
      e,
      `Invalid Unicode escape sequence: "${r.slice(e, e + 6)}".`
    );
  }
  function In(t, e) {
    return it(t.charCodeAt(e)) << 12 | it(t.charCodeAt(e + 1)) << 8 | it(t.charCodeAt(e + 2)) << 4 | it(t.charCodeAt(e + 3));
  }
  function it(t) {
    return t >= 48 && t <= 57 ? t - 48 : t >= 65 && t <= 70 ? t - 55 : t >= 97 && t <= 102 ? t - 87 : -1;
  }
  function Po(t, e) {
    const r = t.source.body;
    switch (r.charCodeAt(e + 1)) {
      case 34:
        return {
          value: '"',
          size: 2
        };
      case 92:
        return {
          value: "\\",
          size: 2
        };
      case 47:
        return {
          value: "/",
          size: 2
        };
      case 98:
        return {
          value: "\b",
          size: 2
        };
      case 102:
        return {
          value: "\f",
          size: 2
        };
      case 110:
        return {
          value: `
`,
          size: 2
        };
      case 114:
        return {
          value: "\r",
          size: 2
        };
      case 116:
        return {
          value: "	",
          size: 2
        };
    }
    throw z(
      t.source,
      e,
      `Invalid character escape sequence: "${r.slice(
        e,
        e + 2
      )}".`
    );
  }
  function Mo(t, e) {
    const r = t.source.body, n = r.length;
    let i = t.lineStart, a = e + 3, o = a, s = "";
    const c = [];
    for (; a < n; ) {
      const u = r.charCodeAt(a);
      if (u === 34 && r.charCodeAt(a + 1) === 34 && r.charCodeAt(a + 2) === 34) {
        s += r.slice(o, a), c.push(s);
        const l = B(
          t,
          _.BLOCK_STRING,
          e,
          a + 3,
          // Return a string of the lines joined with U+000A.
          wo(c).join(`
`)
        );
        return t.line += c.length - 1, t.lineStart = i, l;
      }
      if (u === 92 && r.charCodeAt(a + 1) === 34 && r.charCodeAt(a + 2) === 34 && r.charCodeAt(a + 3) === 34) {
        s += r.slice(o, a), o = a + 1, a += 4;
        continue;
      }
      if (u === 10 || u === 13) {
        s += r.slice(o, a), c.push(s), u === 13 && r.charCodeAt(a + 1) === 10 ? a += 2 : ++a, s = "", o = a, i = a;
        continue;
      }
      if (Ge(u))
        ++a;
      else if (Qt(r, a))
        a += 2;
      else
        throw z(
          t.source,
          a,
          `Invalid character within String: ${De(
            t,
            a
          )}.`
        );
    }
    throw z(t.source, a, "Unterminated string.");
  }
  function Lo(t, e) {
    const r = t.source.body, n = r.length;
    let i = e + 1;
    for (; i < n; ) {
      const a = r.charCodeAt(i);
      if (To(a))
        ++i;
      else
        break;
    }
    return B(
      t,
      _.NAME,
      e,
      i,
      r.slice(e, i)
    );
  }
  const jo = 10, qi = 2;
  function Gr(t) {
    return qt(t, []);
  }
  function qt(t, e) {
    switch (typeof t) {
      case "string":
        return JSON.stringify(t);
      case "function":
        return t.name ? `[function ${t.name}]` : "[function]";
      case "object":
        return Vo(t, e);
      default:
        return String(t);
    }
  }
  function Vo(t, e) {
    if (t === null)
      return "null";
    if (e.includes(t))
      return "[Circular]";
    const r = [...e, t];
    if (Qo(t)) {
      const n = t.toJSON();
      if (n !== t)
        return typeof n == "string" ? n : qt(n, r);
    } else if (Array.isArray(t))
      return Bo(t, r);
    return qo(t, r);
  }
  function Qo(t) {
    return typeof t.toJSON == "function";
  }
  function qo(t, e) {
    const r = Object.entries(t);
    return r.length === 0 ? "{}" : e.length > qi ? "[" + Uo(t) + "]" : "{ " + r.map(
      ([i, a]) => i + ": " + qt(a, e)
    ).join(", ") + " }";
  }
  function Bo(t, e) {
    if (t.length === 0)
      return "[]";
    if (e.length > qi)
      return "[Array]";
    const r = Math.min(jo, t.length), n = t.length - r, i = [];
    for (let a = 0; a < r; ++a)
      i.push(qt(t[a], e));
    return n === 1 ? i.push("... 1 more item") : n > 1 && i.push(`... ${n} more items`), "[" + i.join(", ") + "]";
  }
  function Uo(t) {
    const e = Object.prototype.toString.call(t).replace(/^\[object /, "").replace(/]$/, "");
    if (e === "Object" && typeof t.constructor == "function") {
      const r = t.constructor.name;
      if (typeof r == "string" && r !== "")
        return r;
    }
    return e;
  }
  const zo = globalThis.process && // eslint-disable-next-line no-undef
  !0, Wo = (
    /* c8 ignore next 6 */
    // FIXME: https://github.com/graphql/graphql-js/issues/2317
    zo ? function(e, r) {
      return e instanceof r;
    } : function(e, r) {
      if (e instanceof r)
        return !0;
      if (typeof e == "object" && e !== null) {
        var n;
        const i = r.prototype[Symbol.toStringTag], a = (
          // We still need to support constructor's name to detect conflicts with older versions of this library.
          Symbol.toStringTag in e ? e[Symbol.toStringTag] : (n = e.constructor) === null || n === void 0 ? void 0 : n.name
        );
        if (i === a) {
          const o = Gr(e);
          throw new Error(`Cannot use ${i} "${o}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
        }
      }
      return !1;
    }
  );
  class Bi {
    constructor(e, r = "GraphQL request", n = {
      line: 1,
      column: 1
    }) {
      typeof e == "string" || St(!1, `Body must be a string. Received: ${Gr(e)}.`), this.body = e, this.name = r, this.locationOffset = n, this.locationOffset.line > 0 || St(
        !1,
        "line in locationOffset is 1-indexed and must be positive."
      ), this.locationOffset.column > 0 || St(
        !1,
        "column in locationOffset is 1-indexed and must be positive."
      );
    }
    get [Symbol.toStringTag]() {
      return "Source";
    }
  }
  function Go(t) {
    return Wo(t, Bi);
  }
  function $o(t, e) {
    const r = new Yo(t, e), n = r.parseDocument();
    return Object.defineProperty(n, "tokenCount", {
      enumerable: !1,
      value: r.tokenCount
    }), n;
  }
  class Yo {
    constructor(e, r = {}) {
      const { lexer: n, ...i } = r;
      if (n)
        this._lexer = n;
      else {
        const a = Go(e) ? e : new Bi(e);
        this._lexer = new Do(a);
      }
      this._options = i, this._tokenCounter = 0;
    }
    get tokenCount() {
      return this._tokenCounter;
    }
    /**
     * Converts a name lex token into a name parse node.
     */
    parseName() {
      const e = this.expectToken(_.NAME);
      return this.node(e, {
        kind: S.NAME,
        value: e.value
      });
    }
    // Implements the parsing rules in the Document section.
    /**
     * Document : Definition+
     */
    parseDocument() {
      return this.node(this._lexer.token, {
        kind: S.DOCUMENT,
        definitions: this.many(
          _.SOF,
          this.parseDefinition,
          _.EOF
        )
      });
    }
    /**
     * Definition :
     *   - ExecutableDefinition
     *   - TypeSystemDefinition
     *   - TypeSystemExtension
     *
     * ExecutableDefinition :
     *   - OperationDefinition
     *   - FragmentDefinition
     *
     * TypeSystemDefinition :
     *   - SchemaDefinition
     *   - TypeDefinition
     *   - DirectiveDefinition
     *
     * TypeDefinition :
     *   - ScalarTypeDefinition
     *   - ObjectTypeDefinition
     *   - InterfaceTypeDefinition
     *   - UnionTypeDefinition
     *   - EnumTypeDefinition
     *   - InputObjectTypeDefinition
     */
    parseDefinition() {
      if (this.peek(_.BRACE_L))
        return this.parseOperationDefinition();
      const e = this.peekDescription(), r = e ? this._lexer.lookahead() : this._lexer.token;
      if (e && r.kind === _.BRACE_L)
        throw z(
          this._lexer.source,
          this._lexer.token.start,
          "Unexpected description, descriptions are not supported on shorthand queries."
        );
      if (r.kind === _.NAME) {
        switch (r.value) {
          case "schema":
            return this.parseSchemaDefinition();
          case "scalar":
            return this.parseScalarTypeDefinition();
          case "type":
            return this.parseObjectTypeDefinition();
          case "interface":
            return this.parseInterfaceTypeDefinition();
          case "union":
            return this.parseUnionTypeDefinition();
          case "enum":
            return this.parseEnumTypeDefinition();
          case "input":
            return this.parseInputObjectTypeDefinition();
          case "directive":
            return this.parseDirectiveDefinition();
        }
        switch (r.value) {
          case "query":
          case "mutation":
          case "subscription":
            return this.parseOperationDefinition();
          case "fragment":
            return this.parseFragmentDefinition();
        }
        if (e)
          throw z(
            this._lexer.source,
            this._lexer.token.start,
            "Unexpected description, only GraphQL definitions support descriptions."
          );
        if (r.value === "extend")
          return this.parseTypeSystemExtension();
      }
      throw this.unexpected(r);
    }
    // Implements the parsing rules in the Operations section.
    /**
     * OperationDefinition :
     *  - SelectionSet
     *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
     */
    parseOperationDefinition() {
      const e = this._lexer.token;
      if (this.peek(_.BRACE_L))
        return this.node(e, {
          kind: S.OPERATION_DEFINITION,
          operation: Fe.QUERY,
          description: void 0,
          name: void 0,
          variableDefinitions: [],
          directives: [],
          selectionSet: this.parseSelectionSet()
        });
      const r = this.parseDescription(), n = this.parseOperationType();
      let i;
      return this.peek(_.NAME) && (i = this.parseName()), this.node(e, {
        kind: S.OPERATION_DEFINITION,
        operation: n,
        description: r,
        name: i,
        variableDefinitions: this.parseVariableDefinitions(),
        directives: this.parseDirectives(!1),
        selectionSet: this.parseSelectionSet()
      });
    }
    /**
     * OperationType : one of query mutation subscription
     */
    parseOperationType() {
      const e = this.expectToken(_.NAME);
      switch (e.value) {
        case "query":
          return Fe.QUERY;
        case "mutation":
          return Fe.MUTATION;
        case "subscription":
          return Fe.SUBSCRIPTION;
      }
      throw this.unexpected(e);
    }
    /**
     * VariableDefinitions : ( VariableDefinition+ )
     */
    parseVariableDefinitions() {
      return this.optionalMany(
        _.PAREN_L,
        this.parseVariableDefinition,
        _.PAREN_R
      );
    }
    /**
     * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
     */
    parseVariableDefinition() {
      return this.node(this._lexer.token, {
        kind: S.VARIABLE_DEFINITION,
        description: this.parseDescription(),
        variable: this.parseVariable(),
        type: (this.expectToken(_.COLON), this.parseTypeReference()),
        defaultValue: this.expectOptionalToken(_.EQUALS) ? this.parseConstValueLiteral() : void 0,
        directives: this.parseConstDirectives()
      });
    }
    /**
     * Variable : $ Name
     */
    parseVariable() {
      const e = this._lexer.token;
      return this.expectToken(_.DOLLAR), this.node(e, {
        kind: S.VARIABLE,
        name: this.parseName()
      });
    }
    /**
     * ```
     * SelectionSet : { Selection+ }
     * ```
     */
    parseSelectionSet() {
      return this.node(this._lexer.token, {
        kind: S.SELECTION_SET,
        selections: this.many(
          _.BRACE_L,
          this.parseSelection,
          _.BRACE_R
        )
      });
    }
    /**
     * Selection :
     *   - Field
     *   - FragmentSpread
     *   - InlineFragment
     */
    parseSelection() {
      return this.peek(_.SPREAD) ? this.parseFragment() : this.parseField();
    }
    /**
     * Field : Alias? Name Arguments? Directives? SelectionSet?
     *
     * Alias : Name :
     */
    parseField() {
      const e = this._lexer.token, r = this.parseName();
      let n, i;
      return this.expectOptionalToken(_.COLON) ? (n = r, i = this.parseName()) : i = r, this.node(e, {
        kind: S.FIELD,
        alias: n,
        name: i,
        arguments: this.parseArguments(!1),
        directives: this.parseDirectives(!1),
        selectionSet: this.peek(_.BRACE_L) ? this.parseSelectionSet() : void 0
      });
    }
    /**
     * Arguments[Const] : ( Argument[?Const]+ )
     */
    parseArguments(e) {
      const r = e ? this.parseConstArgument : this.parseArgument;
      return this.optionalMany(_.PAREN_L, r, _.PAREN_R);
    }
    /**
     * Argument[Const] : Name : Value[?Const]
     */
    parseArgument(e = !1) {
      const r = this._lexer.token, n = this.parseName();
      return this.expectToken(_.COLON), this.node(r, {
        kind: S.ARGUMENT,
        name: n,
        value: this.parseValueLiteral(e)
      });
    }
    parseConstArgument() {
      return this.parseArgument(!0);
    }
    // Implements the parsing rules in the Fragments section.
    /**
     * Corresponds to both FragmentSpread and InlineFragment in the spec.
     *
     * FragmentSpread : ... FragmentName Directives?
     *
     * InlineFragment : ... TypeCondition? Directives? SelectionSet
     */
    parseFragment() {
      const e = this._lexer.token;
      this.expectToken(_.SPREAD);
      const r = this.expectOptionalKeyword("on");
      return !r && this.peek(_.NAME) ? this.node(e, {
        kind: S.FRAGMENT_SPREAD,
        name: this.parseFragmentName(),
        directives: this.parseDirectives(!1)
      }) : this.node(e, {
        kind: S.INLINE_FRAGMENT,
        typeCondition: r ? this.parseNamedType() : void 0,
        directives: this.parseDirectives(!1),
        selectionSet: this.parseSelectionSet()
      });
    }
    /**
     * FragmentDefinition :
     *   - fragment FragmentName on TypeCondition Directives? SelectionSet
     *
     * TypeCondition : NamedType
     */
    parseFragmentDefinition() {
      const e = this._lexer.token, r = this.parseDescription();
      return this.expectKeyword("fragment"), this._options.allowLegacyFragmentVariables === !0 ? this.node(e, {
        kind: S.FRAGMENT_DEFINITION,
        description: r,
        name: this.parseFragmentName(),
        variableDefinitions: this.parseVariableDefinitions(),
        typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
        directives: this.parseDirectives(!1),
        selectionSet: this.parseSelectionSet()
      }) : this.node(e, {
        kind: S.FRAGMENT_DEFINITION,
        description: r,
        name: this.parseFragmentName(),
        typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
        directives: this.parseDirectives(!1),
        selectionSet: this.parseSelectionSet()
      });
    }
    /**
     * FragmentName : Name but not `on`
     */
    parseFragmentName() {
      if (this._lexer.token.value === "on")
        throw this.unexpected();
      return this.parseName();
    }
    // Implements the parsing rules in the Values section.
    /**
     * Value[Const] :
     *   - [~Const] Variable
     *   - IntValue
     *   - FloatValue
     *   - StringValue
     *   - BooleanValue
     *   - NullValue
     *   - EnumValue
     *   - ListValue[?Const]
     *   - ObjectValue[?Const]
     *
     * BooleanValue : one of `true` `false`
     *
     * NullValue : `null`
     *
     * EnumValue : Name but not `true`, `false` or `null`
     */
    parseValueLiteral(e) {
      const r = this._lexer.token;
      switch (r.kind) {
        case _.BRACKET_L:
          return this.parseList(e);
        case _.BRACE_L:
          return this.parseObject(e);
        case _.INT:
          return this.advanceLexer(), this.node(r, {
            kind: S.INT,
            value: r.value
          });
        case _.FLOAT:
          return this.advanceLexer(), this.node(r, {
            kind: S.FLOAT,
            value: r.value
          });
        case _.STRING:
        case _.BLOCK_STRING:
          return this.parseStringLiteral();
        case _.NAME:
          switch (this.advanceLexer(), r.value) {
            case "true":
              return this.node(r, {
                kind: S.BOOLEAN,
                value: !0
              });
            case "false":
              return this.node(r, {
                kind: S.BOOLEAN,
                value: !1
              });
            case "null":
              return this.node(r, {
                kind: S.NULL
              });
            default:
              return this.node(r, {
                kind: S.ENUM,
                value: r.value
              });
          }
        case _.DOLLAR:
          if (e)
            if (this.expectToken(_.DOLLAR), this._lexer.token.kind === _.NAME) {
              const n = this._lexer.token.value;
              throw z(
                this._lexer.source,
                r.start,
                `Unexpected variable "$${n}" in constant value.`
              );
            } else
              throw this.unexpected(r);
          return this.parseVariable();
        default:
          throw this.unexpected();
      }
    }
    parseConstValueLiteral() {
      return this.parseValueLiteral(!0);
    }
    parseStringLiteral() {
      const e = this._lexer.token;
      return this.advanceLexer(), this.node(e, {
        kind: S.STRING,
        value: e.value,
        block: e.kind === _.BLOCK_STRING
      });
    }
    /**
     * ListValue[Const] :
     *   - [ ]
     *   - [ Value[?Const]+ ]
     */
    parseList(e) {
      const r = () => this.parseValueLiteral(e);
      return this.node(this._lexer.token, {
        kind: S.LIST,
        values: this.any(_.BRACKET_L, r, _.BRACKET_R)
      });
    }
    /**
     * ```
     * ObjectValue[Const] :
     *   - { }
     *   - { ObjectField[?Const]+ }
     * ```
     */
    parseObject(e) {
      const r = () => this.parseObjectField(e);
      return this.node(this._lexer.token, {
        kind: S.OBJECT,
        fields: this.any(_.BRACE_L, r, _.BRACE_R)
      });
    }
    /**
     * ObjectField[Const] : Name : Value[?Const]
     */
    parseObjectField(e) {
      const r = this._lexer.token, n = this.parseName();
      return this.expectToken(_.COLON), this.node(r, {
        kind: S.OBJECT_FIELD,
        name: n,
        value: this.parseValueLiteral(e)
      });
    }
    // Implements the parsing rules in the Directives section.
    /**
     * Directives[Const] : Directive[?Const]+
     */
    parseDirectives(e) {
      const r = [];
      for (; this.peek(_.AT); )
        r.push(this.parseDirective(e));
      return r;
    }
    parseConstDirectives() {
      return this.parseDirectives(!0);
    }
    /**
     * ```
     * Directive[Const] : @ Name Arguments[?Const]?
     * ```
     */
    parseDirective(e) {
      const r = this._lexer.token;
      return this.expectToken(_.AT), this.node(r, {
        kind: S.DIRECTIVE,
        name: this.parseName(),
        arguments: this.parseArguments(e)
      });
    }
    // Implements the parsing rules in the Types section.
    /**
     * Type :
     *   - NamedType
     *   - ListType
     *   - NonNullType
     */
    parseTypeReference() {
      const e = this._lexer.token;
      let r;
      if (this.expectOptionalToken(_.BRACKET_L)) {
        const n = this.parseTypeReference();
        this.expectToken(_.BRACKET_R), r = this.node(e, {
          kind: S.LIST_TYPE,
          type: n
        });
      } else
        r = this.parseNamedType();
      return this.expectOptionalToken(_.BANG) ? this.node(e, {
        kind: S.NON_NULL_TYPE,
        type: r
      }) : r;
    }
    /**
     * NamedType : Name
     */
    parseNamedType() {
      return this.node(this._lexer.token, {
        kind: S.NAMED_TYPE,
        name: this.parseName()
      });
    }
    // Implements the parsing rules in the Type Definition section.
    peekDescription() {
      return this.peek(_.STRING) || this.peek(_.BLOCK_STRING);
    }
    /**
     * Description : StringValue
     */
    parseDescription() {
      if (this.peekDescription())
        return this.parseStringLiteral();
    }
    /**
     * ```
     * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
     * ```
     */
    parseSchemaDefinition() {
      const e = this._lexer.token, r = this.parseDescription();
      this.expectKeyword("schema");
      const n = this.parseConstDirectives(), i = this.many(
        _.BRACE_L,
        this.parseOperationTypeDefinition,
        _.BRACE_R
      );
      return this.node(e, {
        kind: S.SCHEMA_DEFINITION,
        description: r,
        directives: n,
        operationTypes: i
      });
    }
    /**
     * OperationTypeDefinition : OperationType : NamedType
     */
    parseOperationTypeDefinition() {
      const e = this._lexer.token, r = this.parseOperationType();
      this.expectToken(_.COLON);
      const n = this.parseNamedType();
      return this.node(e, {
        kind: S.OPERATION_TYPE_DEFINITION,
        operation: r,
        type: n
      });
    }
    /**
     * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
     */
    parseScalarTypeDefinition() {
      const e = this._lexer.token, r = this.parseDescription();
      this.expectKeyword("scalar");
      const n = this.parseName(), i = this.parseConstDirectives();
      return this.node(e, {
        kind: S.SCALAR_TYPE_DEFINITION,
        description: r,
        name: n,
        directives: i
      });
    }
    /**
     * ObjectTypeDefinition :
     *   Description?
     *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
     */
    parseObjectTypeDefinition() {
      const e = this._lexer.token, r = this.parseDescription();
      this.expectKeyword("type");
      const n = this.parseName(), i = this.parseImplementsInterfaces(), a = this.parseConstDirectives(), o = this.parseFieldsDefinition();
      return this.node(e, {
        kind: S.OBJECT_TYPE_DEFINITION,
        description: r,
        name: n,
        interfaces: i,
        directives: a,
        fields: o
      });
    }
    /**
     * ImplementsInterfaces :
     *   - implements `&`? NamedType
     *   - ImplementsInterfaces & NamedType
     */
    parseImplementsInterfaces() {
      return this.expectOptionalKeyword("implements") ? this.delimitedMany(_.AMP, this.parseNamedType) : [];
    }
    /**
     * ```
     * FieldsDefinition : { FieldDefinition+ }
     * ```
     */
    parseFieldsDefinition() {
      return this.optionalMany(
        _.BRACE_L,
        this.parseFieldDefinition,
        _.BRACE_R
      );
    }
    /**
     * FieldDefinition :
     *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
     */
    parseFieldDefinition() {
      const e = this._lexer.token, r = this.parseDescription(), n = this.parseName(), i = this.parseArgumentDefs();
      this.expectToken(_.COLON);
      const a = this.parseTypeReference(), o = this.parseConstDirectives();
      return this.node(e, {
        kind: S.FIELD_DEFINITION,
        description: r,
        name: n,
        arguments: i,
        type: a,
        directives: o
      });
    }
    /**
     * ArgumentsDefinition : ( InputValueDefinition+ )
     */
    parseArgumentDefs() {
      return this.optionalMany(
        _.PAREN_L,
        this.parseInputValueDef,
        _.PAREN_R
      );
    }
    /**
     * InputValueDefinition :
     *   - Description? Name : Type DefaultValue? Directives[Const]?
     */
    parseInputValueDef() {
      const e = this._lexer.token, r = this.parseDescription(), n = this.parseName();
      this.expectToken(_.COLON);
      const i = this.parseTypeReference();
      let a;
      this.expectOptionalToken(_.EQUALS) && (a = this.parseConstValueLiteral());
      const o = this.parseConstDirectives();
      return this.node(e, {
        kind: S.INPUT_VALUE_DEFINITION,
        description: r,
        name: n,
        type: i,
        defaultValue: a,
        directives: o
      });
    }
    /**
     * InterfaceTypeDefinition :
     *   - Description? interface Name Directives[Const]? FieldsDefinition?
     */
    parseInterfaceTypeDefinition() {
      const e = this._lexer.token, r = this.parseDescription();
      this.expectKeyword("interface");
      const n = this.parseName(), i = this.parseImplementsInterfaces(), a = this.parseConstDirectives(), o = this.parseFieldsDefinition();
      return this.node(e, {
        kind: S.INTERFACE_TYPE_DEFINITION,
        description: r,
        name: n,
        interfaces: i,
        directives: a,
        fields: o
      });
    }
    /**
     * UnionTypeDefinition :
     *   - Description? union Name Directives[Const]? UnionMemberTypes?
     */
    parseUnionTypeDefinition() {
      const e = this._lexer.token, r = this.parseDescription();
      this.expectKeyword("union");
      const n = this.parseName(), i = this.parseConstDirectives(), a = this.parseUnionMemberTypes();
      return this.node(e, {
        kind: S.UNION_TYPE_DEFINITION,
        description: r,
        name: n,
        directives: i,
        types: a
      });
    }
    /**
     * UnionMemberTypes :
     *   - = `|`? NamedType
     *   - UnionMemberTypes | NamedType
     */
    parseUnionMemberTypes() {
      return this.expectOptionalToken(_.EQUALS) ? this.delimitedMany(_.PIPE, this.parseNamedType) : [];
    }
    /**
     * EnumTypeDefinition :
     *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
     */
    parseEnumTypeDefinition() {
      const e = this._lexer.token, r = this.parseDescription();
      this.expectKeyword("enum");
      const n = this.parseName(), i = this.parseConstDirectives(), a = this.parseEnumValuesDefinition();
      return this.node(e, {
        kind: S.ENUM_TYPE_DEFINITION,
        description: r,
        name: n,
        directives: i,
        values: a
      });
    }
    /**
     * ```
     * EnumValuesDefinition : { EnumValueDefinition+ }
     * ```
     */
    parseEnumValuesDefinition() {
      return this.optionalMany(
        _.BRACE_L,
        this.parseEnumValueDefinition,
        _.BRACE_R
      );
    }
    /**
     * EnumValueDefinition : Description? EnumValue Directives[Const]?
     */
    parseEnumValueDefinition() {
      const e = this._lexer.token, r = this.parseDescription(), n = this.parseEnumValueName(), i = this.parseConstDirectives();
      return this.node(e, {
        kind: S.ENUM_VALUE_DEFINITION,
        description: r,
        name: n,
        directives: i
      });
    }
    /**
     * EnumValue : Name but not `true`, `false` or `null`
     */
    parseEnumValueName() {
      if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null")
        throw z(
          this._lexer.source,
          this._lexer.token.start,
          `${Tt(
            this._lexer.token
          )} is reserved and cannot be used for an enum value.`
        );
      return this.parseName();
    }
    /**
     * InputObjectTypeDefinition :
     *   - Description? input Name Directives[Const]? InputFieldsDefinition?
     */
    parseInputObjectTypeDefinition() {
      const e = this._lexer.token, r = this.parseDescription();
      this.expectKeyword("input");
      const n = this.parseName(), i = this.parseConstDirectives(), a = this.parseInputFieldsDefinition();
      return this.node(e, {
        kind: S.INPUT_OBJECT_TYPE_DEFINITION,
        description: r,
        name: n,
        directives: i,
        fields: a
      });
    }
    /**
     * ```
     * InputFieldsDefinition : { InputValueDefinition+ }
     * ```
     */
    parseInputFieldsDefinition() {
      return this.optionalMany(
        _.BRACE_L,
        this.parseInputValueDef,
        _.BRACE_R
      );
    }
    /**
     * TypeSystemExtension :
     *   - SchemaExtension
     *   - TypeExtension
     *
     * TypeExtension :
     *   - ScalarTypeExtension
     *   - ObjectTypeExtension
     *   - InterfaceTypeExtension
     *   - UnionTypeExtension
     *   - EnumTypeExtension
     *   - InputObjectTypeDefinition
     */
    parseTypeSystemExtension() {
      const e = this._lexer.lookahead();
      if (e.kind === _.NAME)
        switch (e.value) {
          case "schema":
            return this.parseSchemaExtension();
          case "scalar":
            return this.parseScalarTypeExtension();
          case "type":
            return this.parseObjectTypeExtension();
          case "interface":
            return this.parseInterfaceTypeExtension();
          case "union":
            return this.parseUnionTypeExtension();
          case "enum":
            return this.parseEnumTypeExtension();
          case "input":
            return this.parseInputObjectTypeExtension();
        }
      throw this.unexpected(e);
    }
    /**
     * ```
     * SchemaExtension :
     *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
     *  - extend schema Directives[Const]
     * ```
     */
    parseSchemaExtension() {
      const e = this._lexer.token;
      this.expectKeyword("extend"), this.expectKeyword("schema");
      const r = this.parseConstDirectives(), n = this.optionalMany(
        _.BRACE_L,
        this.parseOperationTypeDefinition,
        _.BRACE_R
      );
      if (r.length === 0 && n.length === 0)
        throw this.unexpected();
      return this.node(e, {
        kind: S.SCHEMA_EXTENSION,
        directives: r,
        operationTypes: n
      });
    }
    /**
     * ScalarTypeExtension :
     *   - extend scalar Name Directives[Const]
     */
    parseScalarTypeExtension() {
      const e = this._lexer.token;
      this.expectKeyword("extend"), this.expectKeyword("scalar");
      const r = this.parseName(), n = this.parseConstDirectives();
      if (n.length === 0)
        throw this.unexpected();
      return this.node(e, {
        kind: S.SCALAR_TYPE_EXTENSION,
        name: r,
        directives: n
      });
    }
    /**
     * ObjectTypeExtension :
     *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
     *  - extend type Name ImplementsInterfaces? Directives[Const]
     *  - extend type Name ImplementsInterfaces
     */
    parseObjectTypeExtension() {
      const e = this._lexer.token;
      this.expectKeyword("extend"), this.expectKeyword("type");
      const r = this.parseName(), n = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), a = this.parseFieldsDefinition();
      if (n.length === 0 && i.length === 0 && a.length === 0)
        throw this.unexpected();
      return this.node(e, {
        kind: S.OBJECT_TYPE_EXTENSION,
        name: r,
        interfaces: n,
        directives: i,
        fields: a
      });
    }
    /**
     * InterfaceTypeExtension :
     *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
     *  - extend interface Name ImplementsInterfaces? Directives[Const]
     *  - extend interface Name ImplementsInterfaces
     */
    parseInterfaceTypeExtension() {
      const e = this._lexer.token;
      this.expectKeyword("extend"), this.expectKeyword("interface");
      const r = this.parseName(), n = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), a = this.parseFieldsDefinition();
      if (n.length === 0 && i.length === 0 && a.length === 0)
        throw this.unexpected();
      return this.node(e, {
        kind: S.INTERFACE_TYPE_EXTENSION,
        name: r,
        interfaces: n,
        directives: i,
        fields: a
      });
    }
    /**
     * UnionTypeExtension :
     *   - extend union Name Directives[Const]? UnionMemberTypes
     *   - extend union Name Directives[Const]
     */
    parseUnionTypeExtension() {
      const e = this._lexer.token;
      this.expectKeyword("extend"), this.expectKeyword("union");
      const r = this.parseName(), n = this.parseConstDirectives(), i = this.parseUnionMemberTypes();
      if (n.length === 0 && i.length === 0)
        throw this.unexpected();
      return this.node(e, {
        kind: S.UNION_TYPE_EXTENSION,
        name: r,
        directives: n,
        types: i
      });
    }
    /**
     * EnumTypeExtension :
     *   - extend enum Name Directives[Const]? EnumValuesDefinition
     *   - extend enum Name Directives[Const]
     */
    parseEnumTypeExtension() {
      const e = this._lexer.token;
      this.expectKeyword("extend"), this.expectKeyword("enum");
      const r = this.parseName(), n = this.parseConstDirectives(), i = this.parseEnumValuesDefinition();
      if (n.length === 0 && i.length === 0)
        throw this.unexpected();
      return this.node(e, {
        kind: S.ENUM_TYPE_EXTENSION,
        name: r,
        directives: n,
        values: i
      });
    }
    /**
     * InputObjectTypeExtension :
     *   - extend input Name Directives[Const]? InputFieldsDefinition
     *   - extend input Name Directives[Const]
     */
    parseInputObjectTypeExtension() {
      const e = this._lexer.token;
      this.expectKeyword("extend"), this.expectKeyword("input");
      const r = this.parseName(), n = this.parseConstDirectives(), i = this.parseInputFieldsDefinition();
      if (n.length === 0 && i.length === 0)
        throw this.unexpected();
      return this.node(e, {
        kind: S.INPUT_OBJECT_TYPE_EXTENSION,
        name: r,
        directives: n,
        fields: i
      });
    }
    /**
     * ```
     * DirectiveDefinition :
     *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
     * ```
     */
    parseDirectiveDefinition() {
      const e = this._lexer.token, r = this.parseDescription();
      this.expectKeyword("directive"), this.expectToken(_.AT);
      const n = this.parseName(), i = this.parseArgumentDefs(), a = this.expectOptionalKeyword("repeatable");
      this.expectKeyword("on");
      const o = this.parseDirectiveLocations();
      return this.node(e, {
        kind: S.DIRECTIVE_DEFINITION,
        description: r,
        name: n,
        arguments: i,
        repeatable: a,
        locations: o
      });
    }
    /**
     * DirectiveLocations :
     *   - `|`? DirectiveLocation
     *   - DirectiveLocations | DirectiveLocation
     */
    parseDirectiveLocations() {
      return this.delimitedMany(_.PIPE, this.parseDirectiveLocation);
    }
    /*
     * DirectiveLocation :
     *   - ExecutableDirectiveLocation
     *   - TypeSystemDirectiveLocation
     *
     * ExecutableDirectiveLocation : one of
     *   `QUERY`
     *   `MUTATION`
     *   `SUBSCRIPTION`
     *   `FIELD`
     *   `FRAGMENT_DEFINITION`
     *   `FRAGMENT_SPREAD`
     *   `INLINE_FRAGMENT`
     *
     * TypeSystemDirectiveLocation : one of
     *   `SCHEMA`
     *   `SCALAR`
     *   `OBJECT`
     *   `FIELD_DEFINITION`
     *   `ARGUMENT_DEFINITION`
     *   `INTERFACE`
     *   `UNION`
     *   `ENUM`
     *   `ENUM_VALUE`
     *   `INPUT_OBJECT`
     *   `INPUT_FIELD_DEFINITION`
     */
    parseDirectiveLocation() {
      const e = this._lexer.token, r = this.parseName();
      if (Object.prototype.hasOwnProperty.call(gr, r.value))
        return r;
      throw this.unexpected(e);
    }
    // Schema Coordinates
    /**
     * SchemaCoordinate :
     *   - Name
     *   - Name . Name
     *   - Name . Name ( Name : )
     *   - \@ Name
     *   - \@ Name ( Name : )
     */
    parseSchemaCoordinate() {
      const e = this._lexer.token, r = this.expectOptionalToken(_.AT), n = this.parseName();
      let i;
      !r && this.expectOptionalToken(_.DOT) && (i = this.parseName());
      let a;
      return (r || i) && this.expectOptionalToken(_.PAREN_L) && (a = this.parseName(), this.expectToken(_.COLON), this.expectToken(_.PAREN_R)), r ? a ? this.node(e, {
        kind: S.DIRECTIVE_ARGUMENT_COORDINATE,
        name: n,
        argumentName: a
      }) : this.node(e, {
        kind: S.DIRECTIVE_COORDINATE,
        name: n
      }) : i ? a ? this.node(e, {
        kind: S.ARGUMENT_COORDINATE,
        name: n,
        fieldName: i,
        argumentName: a
      }) : this.node(e, {
        kind: S.MEMBER_COORDINATE,
        name: n,
        memberName: i
      }) : this.node(e, {
        kind: S.TYPE_COORDINATE,
        name: n
      });
    }
    // Core parsing utility functions
    /**
     * Returns a node that, if configured to do so, sets a "loc" field as a
     * location object, used to identify the place in the source that created a
     * given parsed object.
     */
    node(e, r) {
      return this._options.noLocation !== !0 && (r.loc = new Eo(
        e,
        this._lexer.lastToken,
        this._lexer.source
      )), r;
    }
    /**
     * Determines if the next token is of a given kind
     */
    peek(e) {
      return this._lexer.token.kind === e;
    }
    /**
     * If the next token is of the given kind, return that token after advancing the lexer.
     * Otherwise, do not change the parser state and throw an error.
     */
    expectToken(e) {
      const r = this._lexer.token;
      if (r.kind === e)
        return this.advanceLexer(), r;
      throw z(
        this._lexer.source,
        r.start,
        `Expected ${Ui(e)}, found ${Tt(r)}.`
      );
    }
    /**
     * If the next token is of the given kind, return "true" after advancing the lexer.
     * Otherwise, do not change the parser state and return "false".
     */
    expectOptionalToken(e) {
      return this._lexer.token.kind === e ? (this.advanceLexer(), !0) : !1;
    }
    /**
     * If the next token is a given keyword, advance the lexer.
     * Otherwise, do not change the parser state and throw an error.
     */
    expectKeyword(e) {
      const r = this._lexer.token;
      if (r.kind === _.NAME && r.value === e)
        this.advanceLexer();
      else
        throw z(
          this._lexer.source,
          r.start,
          `Expected "${e}", found ${Tt(r)}.`
        );
    }
    /**
     * If the next token is a given keyword, return "true" after advancing the lexer.
     * Otherwise, do not change the parser state and return "false".
     */
    expectOptionalKeyword(e) {
      const r = this._lexer.token;
      return r.kind === _.NAME && r.value === e ? (this.advanceLexer(), !0) : !1;
    }
    /**
     * Helper function for creating an error when an unexpected lexed token is encountered.
     */
    unexpected(e) {
      const r = e ?? this._lexer.token;
      return z(
        this._lexer.source,
        r.start,
        `Unexpected ${Tt(r)}.`
      );
    }
    /**
     * Returns a possibly empty list of parse nodes, determined by the parseFn.
     * This list begins with a lex token of openKind and ends with a lex token of closeKind.
     * Advances the parser to the next lex token after the closing token.
     */
    any(e, r, n) {
      this.expectToken(e);
      const i = [];
      for (; !this.expectOptionalToken(n); )
        i.push(r.call(this));
      return i;
    }
    /**
     * Returns a list of parse nodes, determined by the parseFn.
     * It can be empty only if open token is missing otherwise it will always return non-empty list
     * that begins with a lex token of openKind and ends with a lex token of closeKind.
     * Advances the parser to the next lex token after the closing token.
     */
    optionalMany(e, r, n) {
      if (this.expectOptionalToken(e)) {
        const i = [];
        do
          i.push(r.call(this));
        while (!this.expectOptionalToken(n));
        return i;
      }
      return [];
    }
    /**
     * Returns a non-empty list of parse nodes, determined by the parseFn.
     * This list begins with a lex token of openKind and ends with a lex token of closeKind.
     * Advances the parser to the next lex token after the closing token.
     */
    many(e, r, n) {
      this.expectToken(e);
      const i = [];
      do
        i.push(r.call(this));
      while (!this.expectOptionalToken(n));
      return i;
    }
    /**
     * Returns a non-empty list of parse nodes, determined by the parseFn.
     * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
     * Advances the parser to the next lex token after last item in the list.
     */
    delimitedMany(e, r) {
      this.expectOptionalToken(e);
      const n = [];
      do
        n.push(r.call(this));
      while (this.expectOptionalToken(e));
      return n;
    }
    advanceLexer() {
      const { maxTokens: e } = this._options, r = this._lexer.advance();
      if (r.kind !== _.EOF && (++this._tokenCounter, e !== void 0 && this._tokenCounter > e))
        throw z(
          this._lexer.source,
          r.start,
          `Document contains more that ${e} tokens. Parsing aborted.`
        );
    }
  }
  function Tt(t) {
    const e = t.value;
    return Ui(t.kind) + (e != null ? ` "${e}"` : "");
  }
  function Ui(t) {
    return xo(t) ? `"${t}"` : t;
  }
  function Ho(t) {
    return `"${t.replace(Jo, Ko)}"`;
  }
  const Jo = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
  function Ko(t) {
    return Xo[t.charCodeAt(0)];
  }
  const Xo = [
    "\\u0000",
    "\\u0001",
    "\\u0002",
    "\\u0003",
    "\\u0004",
    "\\u0005",
    "\\u0006",
    "\\u0007",
    "\\b",
    "\\t",
    "\\n",
    "\\u000B",
    "\\f",
    "\\r",
    "\\u000E",
    "\\u000F",
    "\\u0010",
    "\\u0011",
    "\\u0012",
    "\\u0013",
    "\\u0014",
    "\\u0015",
    "\\u0016",
    "\\u0017",
    "\\u0018",
    "\\u0019",
    "\\u001A",
    "\\u001B",
    "\\u001C",
    "\\u001D",
    "\\u001E",
    "\\u001F",
    "",
    "",
    '\\"',
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    // 2F
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    // 3F
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    // 4F
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "\\\\",
    "",
    "",
    "",
    // 5F
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    // 6F
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "\\u007F",
    "\\u0080",
    "\\u0081",
    "\\u0082",
    "\\u0083",
    "\\u0084",
    "\\u0085",
    "\\u0086",
    "\\u0087",
    "\\u0088",
    "\\u0089",
    "\\u008A",
    "\\u008B",
    "\\u008C",
    "\\u008D",
    "\\u008E",
    "\\u008F",
    "\\u0090",
    "\\u0091",
    "\\u0092",
    "\\u0093",
    "\\u0094",
    "\\u0095",
    "\\u0096",
    "\\u0097",
    "\\u0098",
    "\\u0099",
    "\\u009A",
    "\\u009B",
    "\\u009C",
    "\\u009D",
    "\\u009E",
    "\\u009F"
  ], Bt = Object.freeze({});
  function ne(t, e, r = Mi) {
    const n = /* @__PURE__ */ new Map();
    for (const v of Object.values(S))
      n.set(v, Zo(e, v));
    let i, a = Array.isArray(t), o = [t], s = -1, c = [], u = t, l, f;
    const h = [], d = [];
    do {
      s++;
      const v = s === o.length, b = v && c.length !== 0;
      if (v) {
        if (l = d.length === 0 ? void 0 : h[h.length - 1], u = f, f = d.pop(), b)
          if (a) {
            u = u.slice();
            let O = 0;
            for (const [w, D] of c) {
              const N = w - O;
              D === null ? (u.splice(N, 1), O++) : u[N] = D;
            }
          } else {
            u = { ...u };
            for (const [O, w] of c)
              u[O] = w;
          }
        s = i.index, o = i.keys, c = i.edits, a = i.inArray, i = i.prev;
      } else if (f) {
        if (l = a ? s : o[s], u = f[l], u == null)
          continue;
        h.push(l);
      }
      let E;
      if (!Array.isArray(u)) {
        var y, m;
        xn(u) || St(!1, `Invalid AST Node: ${Gr(u)}.`);
        const O = v ? (y = n.get(u.kind)) === null || y === void 0 ? void 0 : y.leave : (m = n.get(u.kind)) === null || m === void 0 ? void 0 : m.enter;
        if (E = O?.call(e, u, l, f, h, d), E === Bt)
          break;
        if (E === !1) {
          if (!v) {
            h.pop();
            continue;
          }
        } else if (E !== void 0 && (c.push([l, E]), !v))
          if (xn(E))
            u = E;
          else {
            h.pop();
            continue;
          }
      }
      if (E === void 0 && b && c.push([l, u]), v)
        h.pop();
      else {
        var g;
        i = {
          inArray: a,
          index: s,
          keys: o,
          edits: c,
          prev: i
        }, a = Array.isArray(u), o = a ? u : (g = r[u.kind]) !== null && g !== void 0 ? g : [], s = -1, c = [], f && d.push(f), f = u;
      }
    } while (i !== void 0);
    return c.length !== 0 ? c[c.length - 1][1] : t;
  }
  function Zo(t, e) {
    const r = t[e];
    return typeof r == "object" ? r : typeof r == "function" ? {
      enter: r,
      leave: void 0
    } : {
      enter: t.enter,
      leave: t.leave
    };
  }
  function es(t) {
    return ne(t, rs);
  }
  const ts = 80, rs = {
    Name: {
      leave: (t) => t.value
    },
    Variable: {
      leave: (t) => "$" + t.name
    },
    // Document
    Document: {
      leave: (t) => k(t.definitions, `

`)
    },
    OperationDefinition: {
      leave(t) {
        const e = er(t.variableDefinitions) ? I(`(
`, k(t.variableDefinitions, `
`), `
)`) : I("(", k(t.variableDefinitions, ", "), ")"), r = I("", t.description, `
`) + k(
          [
            t.operation,
            k([t.name, e]),
            k(t.directives, " ")
          ],
          " "
        );
        return (r === "query" ? "" : r + " ") + t.selectionSet;
      }
    },
    VariableDefinition: {
      leave: ({ variable: t, type: e, defaultValue: r, directives: n, description: i }) => I("", i, `
`) + t + ": " + e + I(" = ", r) + I(" ", k(n, " "))
    },
    SelectionSet: {
      leave: ({ selections: t }) => ee(t)
    },
    Field: {
      leave({ alias: t, name: e, arguments: r, directives: n, selectionSet: i }) {
        const a = I("", t, ": ") + e;
        let o = a + I("(", k(r, ", "), ")");
        return o.length > ts && (o = a + I(`(
`, kt(k(r, `
`)), `
)`)), k([o, k(n, " "), i], " ");
      }
    },
    Argument: {
      leave: ({ name: t, value: e }) => t + ": " + e
    },
    // Fragments
    FragmentSpread: {
      leave: ({ name: t, directives: e }) => "..." + t + I(" ", k(e, " "))
    },
    InlineFragment: {
      leave: ({ typeCondition: t, directives: e, selectionSet: r }) => k(
        [
          "...",
          I("on ", t),
          k(e, " "),
          r
        ],
        " "
      )
    },
    FragmentDefinition: {
      leave: ({
        name: t,
        typeCondition: e,
        variableDefinitions: r,
        directives: n,
        selectionSet: i,
        description: a
      }) => I("", a, `
`) + // Note: fragment variable definitions are experimental and may be changed
      // or removed in the future.
      `fragment ${t}${I("(", k(r, ", "), ")")} on ${e} ${I("", k(n, " "), " ")}` + i
    },
    // Value
    IntValue: {
      leave: ({ value: t }) => t
    },
    FloatValue: {
      leave: ({ value: t }) => t
    },
    StringValue: {
      leave: ({ value: t, block: e }) => e ? ko(t) : Ho(t)
    },
    BooleanValue: {
      leave: ({ value: t }) => t ? "true" : "false"
    },
    NullValue: {
      leave: () => "null"
    },
    EnumValue: {
      leave: ({ value: t }) => t
    },
    ListValue: {
      leave: ({ values: t }) => "[" + k(t, ", ") + "]"
    },
    ObjectValue: {
      leave: ({ fields: t }) => "{" + k(t, ", ") + "}"
    },
    ObjectField: {
      leave: ({ name: t, value: e }) => t + ": " + e
    },
    // Directive
    Directive: {
      leave: ({ name: t, arguments: e }) => "@" + t + I("(", k(e, ", "), ")")
    },
    // Type
    NamedType: {
      leave: ({ name: t }) => t
    },
    ListType: {
      leave: ({ type: t }) => "[" + t + "]"
    },
    NonNullType: {
      leave: ({ type: t }) => t + "!"
    },
    // Type System Definitions
    SchemaDefinition: {
      leave: ({ description: t, directives: e, operationTypes: r }) => I("", t, `
`) + k(["schema", k(e, " "), ee(r)], " ")
    },
    OperationTypeDefinition: {
      leave: ({ operation: t, type: e }) => t + ": " + e
    },
    ScalarTypeDefinition: {
      leave: ({ description: t, name: e, directives: r }) => I("", t, `
`) + k(["scalar", e, k(r, " ")], " ")
    },
    ObjectTypeDefinition: {
      leave: ({ description: t, name: e, interfaces: r, directives: n, fields: i }) => I("", t, `
`) + k(
        [
          "type",
          e,
          I("implements ", k(r, " & ")),
          k(n, " "),
          ee(i)
        ],
        " "
      )
    },
    FieldDefinition: {
      leave: ({ description: t, name: e, arguments: r, type: n, directives: i }) => I("", t, `
`) + e + (er(r) ? I(`(
`, kt(k(r, `
`)), `
)`) : I("(", k(r, ", "), ")")) + ": " + n + I(" ", k(i, " "))
    },
    InputValueDefinition: {
      leave: ({ description: t, name: e, type: r, defaultValue: n, directives: i }) => I("", t, `
`) + k(
        [e + ": " + r, I("= ", n), k(i, " ")],
        " "
      )
    },
    InterfaceTypeDefinition: {
      leave: ({ description: t, name: e, interfaces: r, directives: n, fields: i }) => I("", t, `
`) + k(
        [
          "interface",
          e,
          I("implements ", k(r, " & ")),
          k(n, " "),
          ee(i)
        ],
        " "
      )
    },
    UnionTypeDefinition: {
      leave: ({ description: t, name: e, directives: r, types: n }) => I("", t, `
`) + k(
        ["union", e, k(r, " "), I("= ", k(n, " | "))],
        " "
      )
    },
    EnumTypeDefinition: {
      leave: ({ description: t, name: e, directives: r, values: n }) => I("", t, `
`) + k(["enum", e, k(r, " "), ee(n)], " ")
    },
    EnumValueDefinition: {
      leave: ({ description: t, name: e, directives: r }) => I("", t, `
`) + k([e, k(r, " ")], " ")
    },
    InputObjectTypeDefinition: {
      leave: ({ description: t, name: e, directives: r, fields: n }) => I("", t, `
`) + k(["input", e, k(r, " "), ee(n)], " ")
    },
    DirectiveDefinition: {
      leave: ({ description: t, name: e, arguments: r, repeatable: n, locations: i }) => I("", t, `
`) + "directive @" + e + (er(r) ? I(`(
`, kt(k(r, `
`)), `
)`) : I("(", k(r, ", "), ")")) + (n ? " repeatable" : "") + " on " + k(i, " | ")
    },
    SchemaExtension: {
      leave: ({ directives: t, operationTypes: e }) => k(
        ["extend schema", k(t, " "), ee(e)],
        " "
      )
    },
    ScalarTypeExtension: {
      leave: ({ name: t, directives: e }) => k(["extend scalar", t, k(e, " ")], " ")
    },
    ObjectTypeExtension: {
      leave: ({ name: t, interfaces: e, directives: r, fields: n }) => k(
        [
          "extend type",
          t,
          I("implements ", k(e, " & ")),
          k(r, " "),
          ee(n)
        ],
        " "
      )
    },
    InterfaceTypeExtension: {
      leave: ({ name: t, interfaces: e, directives: r, fields: n }) => k(
        [
          "extend interface",
          t,
          I("implements ", k(e, " & ")),
          k(r, " "),
          ee(n)
        ],
        " "
      )
    },
    UnionTypeExtension: {
      leave: ({ name: t, directives: e, types: r }) => k(
        [
          "extend union",
          t,
          k(e, " "),
          I("= ", k(r, " | "))
        ],
        " "
      )
    },
    EnumTypeExtension: {
      leave: ({ name: t, directives: e, values: r }) => k(["extend enum", t, k(e, " "), ee(r)], " ")
    },
    InputObjectTypeExtension: {
      leave: ({ name: t, directives: e, fields: r }) => k(["extend input", t, k(e, " "), ee(r)], " ")
    },
    // Schema Coordinates
    TypeCoordinate: {
      leave: ({ name: t }) => t
    },
    MemberCoordinate: {
      leave: ({ name: t, memberName: e }) => k([t, I(".", e)])
    },
    ArgumentCoordinate: {
      leave: ({ name: t, fieldName: e, argumentName: r }) => k([t, I(".", e), I("(", r, ":)")])
    },
    DirectiveCoordinate: {
      leave: ({ name: t }) => k(["@", t])
    },
    DirectiveArgumentCoordinate: {
      leave: ({ name: t, argumentName: e }) => k(["@", t, I("(", e, ":)")])
    }
  };
  function k(t, e = "") {
    var r;
    return (r = t?.filter((n) => n).join(e)) !== null && r !== void 0 ? r : "";
  }
  function ee(t) {
    return I(`{
`, kt(k(t, `
`)), `
}`);
  }
  function I(t, e, r = "") {
    return e != null && e !== "" ? t + e + r : "";
  }
  function kt(t) {
    return I("  ", t.replace(/\n/g, `
  `));
  }
  function er(t) {
    var e;
    return (e = t?.some((r) => r.includes(`
`))) !== null && e !== void 0 ? e : !1;
  }
  function Nn(t) {
    return t.kind === S.FIELD || t.kind === S.FRAGMENT_SPREAD || t.kind === S.INLINE_FRAGMENT;
  }
  function mt(t, e) {
    var r = t.directives;
    return !r || !r.length ? !0 : as(r).every(function(n) {
      var i = n.directive, a = n.ifArgument, o = !1;
      return a.value.kind === "Variable" ? (o = e && e[a.value.name.value], T(o !== void 0, 106, i.name.value)) : o = a.value.value, i.name.value === "skip" ? !o : o;
    });
  }
  function dt(t, e, r) {
    var n = new Set(t), i = n.size;
    return ne(e, {
      Directive: function(a) {
        if (n.delete(a.name.value) && (!r || !n.size))
          return Bt;
      }
    }), r ? !n.size : n.size < i;
  }
  function ns(t) {
    return t && dt(["client", "export"], t, !0);
  }
  function is(t) {
    var e = t.name.value;
    return e === "skip" || e === "include";
  }
  function as(t) {
    var e = [];
    return t && t.length && t.forEach(function(r) {
      if (is(r)) {
        var n = r.arguments, i = r.name.value;
        T(n && n.length === 1, 107, i);
        var a = n[0];
        T(a.name && a.name.value === "if", 108, i);
        var o = a.value;
        T(o && (o.kind === "Variable" || o.kind === "BooleanValue"), 109, i), e.push({ directive: r, ifArgument: a });
      }
    }), e;
  }
  function os(t) {
    var e, r, n = (e = t.directives) === null || e === void 0 ? void 0 : e.find(function(a) {
      var o = a.name;
      return o.value === "unmask";
    });
    if (!n)
      return "mask";
    var i = (r = n.arguments) === null || r === void 0 ? void 0 : r.find(function(a) {
      var o = a.name;
      return o.value === "mode";
    });
    return globalThis.__DEV__ !== !1 && i && (i.value.kind === S.VARIABLE ? globalThis.__DEV__ !== !1 && T.warn(110) : i.value.kind !== S.STRING ? globalThis.__DEV__ !== !1 && T.warn(111) : i.value.value !== "migrate" && globalThis.__DEV__ !== !1 && T.warn(112, i.value.value)), i && "value" in i.value && i.value.value === "migrate" ? "migrate" : "unmask";
  }
  const ss = () => /* @__PURE__ */ Object.create(null), { forEach: us, slice: Rn } = Array.prototype, { hasOwnProperty: cs } = Object.prototype;
  class le {
    constructor(e = !0, r = ss) {
      this.weakness = e, this.makeData = r;
    }
    lookup() {
      return this.lookupArray(arguments);
    }
    lookupArray(e) {
      let r = this;
      return us.call(e, (n) => r = r.getChildTrie(n)), cs.call(r, "data") ? r.data : r.data = this.makeData(Rn.call(e));
    }
    peek() {
      return this.peekArray(arguments);
    }
    peekArray(e) {
      let r = this;
      for (let n = 0, i = e.length; r && n < i; ++n) {
        const a = r.mapFor(e[n], !1);
        r = a && a.get(e[n]);
      }
      return r && r.data;
    }
    remove() {
      return this.removeArray(arguments);
    }
    removeArray(e) {
      let r;
      if (e.length) {
        const n = e[0], i = this.mapFor(n, !1), a = i && i.get(n);
        a && (r = a.removeArray(Rn.call(e, 1)), !a.data && !a.weak && !(a.strong && a.strong.size) && i.delete(n));
      } else
        r = this.data, delete this.data;
      return r;
    }
    getChildTrie(e) {
      const r = this.mapFor(e, !0);
      let n = r.get(e);
      return n || r.set(e, n = new le(this.weakness, this.makeData)), n;
    }
    mapFor(e, r) {
      return this.weakness && ls(e) ? this.weak || (r ? this.weak = /* @__PURE__ */ new WeakMap() : void 0) : this.strong || (r ? this.strong = /* @__PURE__ */ new Map() : void 0);
    }
  }
  function ls(t) {
    switch (typeof t) {
      case "object":
        if (t === null)
          break;
      // Fall through to return true...
      case "function":
        return !0;
    }
    return !1;
  }
  var zi = te(function() {
    return navigator.product;
  }) == "ReactNative", Ne = typeof WeakMap == "function" && !(zi && !global.HermesInternal), $r = typeof WeakSet == "function", Yr = typeof Symbol == "function" && typeof Symbol.for == "function", Ut = Yr && Symbol.asyncIterator, fs = typeof te(function() {
    return window.document.createElement;
  }) == "function", hs = (
    // Following advice found in this comment from @domenic (maintainer of jsdom):
    // https://github.com/jsdom/jsdom/issues/1537#issuecomment-229405327
    //
    // Since we control the version of Jest and jsdom used when running Apollo
    // Client tests, and that version is recent enought to include " jsdom/x.y.z"
    // at the end of the user agent string, I believe this case is all we need to
    // check. Testing for "Node.js" was recommended for backwards compatibility
    // with older version of jsdom, but we don't have that problem.
    te(function() {
      return navigator.userAgent.indexOf("jsdom") >= 0;
    }) || !1
  ), ds = (fs || zi) && !hs;
  function L(t) {
    return t !== null && typeof t == "object";
  }
  function ps(t, e) {
    var r = e, n = [];
    t.definitions.forEach(function(a) {
      if (a.kind === "OperationDefinition")
        throw H(
          113,
          a.operation,
          a.name ? " named '".concat(a.name.value, "'") : ""
        );
      a.kind === "FragmentDefinition" && n.push(a);
    }), typeof r > "u" && (T(n.length === 1, 114, n.length), r = n[0].name.value);
    var i = p(p({}, t), { definitions: Y([
      {
        kind: "OperationDefinition",
        // OperationTypeNode is an enum
        operation: "query",
        selectionSet: {
          kind: "SelectionSet",
          selections: [
            {
              kind: "FragmentSpread",
              name: {
                kind: "Name",
                value: r
              }
            }
          ]
        }
      }
    ], t.definitions, !0) });
    return i;
  }
  function $e(t) {
    t === void 0 && (t = []);
    var e = {};
    return t.forEach(function(r) {
      e[r.name.value] = r;
    }), e;
  }
  function zt(t, e) {
    switch (t.kind) {
      case "InlineFragment":
        return t;
      case "FragmentSpread": {
        var r = t.name.value;
        if (typeof e == "function")
          return e(r);
        var n = e && e[r];
        return T(n, 115, r), n || null;
      }
      default:
        return null;
    }
  }
  function vs(t) {
    var e = !0;
    return ne(t, {
      FragmentSpread: function(r) {
        if (e = !!r.directives && r.directives.some(function(n) {
          return n.name.value === "unmask";
        }), !e)
          return Bt;
      }
    }), e;
  }
  function ys() {
  }
  class _r {
    constructor(e = 1 / 0, r = ys) {
      this.max = e, this.dispose = r, this.map = /* @__PURE__ */ new Map(), this.newest = null, this.oldest = null;
    }
    has(e) {
      return this.map.has(e);
    }
    get(e) {
      const r = this.getNode(e);
      return r && r.value;
    }
    get size() {
      return this.map.size;
    }
    getNode(e) {
      const r = this.map.get(e);
      if (r && r !== this.newest) {
        const { older: n, newer: i } = r;
        i && (i.older = n), n && (n.newer = i), r.older = this.newest, r.older.newer = r, r.newer = null, this.newest = r, r === this.oldest && (this.oldest = i);
      }
      return r;
    }
    set(e, r) {
      let n = this.getNode(e);
      return n ? n.value = r : (n = {
        key: e,
        value: r,
        newer: null,
        older: this.newest
      }, this.newest && (this.newest.newer = n), this.newest = n, this.oldest = this.oldest || n, this.map.set(e, n), n.value);
    }
    clean() {
      for (; this.oldest && this.map.size > this.max; )
        this.delete(this.oldest.key);
    }
    delete(e) {
      const r = this.map.get(e);
      return r ? (r === this.newest && (this.newest = r.older), r === this.oldest && (this.oldest = r.newer), r.newer && (r.newer.older = r.older), r.older && (r.older.newer = r.newer), this.map.delete(e), this.dispose(r.value, e), !0) : !1;
    }
  }
  function Er() {
  }
  const ms = Er, gs = typeof WeakRef < "u" ? WeakRef : function(t) {
    return { deref: () => t };
  }, bs = typeof WeakMap < "u" ? WeakMap : Map, _s = typeof FinalizationRegistry < "u" ? FinalizationRegistry : function() {
    return {
      register: Er,
      unregister: Er
    };
  }, Es = 10024;
  class Pt {
    constructor(e = 1 / 0, r = ms) {
      this.max = e, this.dispose = r, this.map = new bs(), this.newest = null, this.oldest = null, this.unfinalizedNodes = /* @__PURE__ */ new Set(), this.finalizationScheduled = !1, this.size = 0, this.finalize = () => {
        const n = this.unfinalizedNodes.values();
        for (let i = 0; i < Es; i++) {
          const a = n.next().value;
          if (!a)
            break;
          this.unfinalizedNodes.delete(a);
          const o = a.key;
          delete a.key, a.keyRef = new gs(o), this.registry.register(o, a, a);
        }
        this.unfinalizedNodes.size > 0 ? queueMicrotask(this.finalize) : this.finalizationScheduled = !1;
      }, this.registry = new _s(this.deleteNode.bind(this));
    }
    has(e) {
      return this.map.has(e);
    }
    get(e) {
      const r = this.getNode(e);
      return r && r.value;
    }
    getNode(e) {
      const r = this.map.get(e);
      if (r && r !== this.newest) {
        const { older: n, newer: i } = r;
        i && (i.older = n), n && (n.newer = i), r.older = this.newest, r.older.newer = r, r.newer = null, this.newest = r, r === this.oldest && (this.oldest = i);
      }
      return r;
    }
    set(e, r) {
      let n = this.getNode(e);
      return n ? n.value = r : (n = {
        key: e,
        value: r,
        newer: null,
        older: this.newest
      }, this.newest && (this.newest.newer = n), this.newest = n, this.oldest = this.oldest || n, this.scheduleFinalization(n), this.map.set(e, n), this.size++, n.value);
    }
    clean() {
      for (; this.oldest && this.size > this.max; )
        this.deleteNode(this.oldest);
    }
    deleteNode(e) {
      e === this.newest && (this.newest = e.older), e === this.oldest && (this.oldest = e.newer), e.newer && (e.newer.older = e.older), e.older && (e.older.newer = e.newer), this.size--;
      const r = e.key || e.keyRef && e.keyRef.deref();
      this.dispose(e.value, r), e.keyRef ? this.registry.unregister(e) : this.unfinalizedNodes.delete(e), r && this.map.delete(r);
    }
    delete(e) {
      const r = this.map.get(e);
      return r ? (this.deleteNode(r), !0) : !1;
    }
    scheduleFinalization(e) {
      this.unfinalizedNodes.add(e), this.finalizationScheduled || (this.finalizationScheduled = !0, queueMicrotask(this.finalize));
    }
  }
  var tr = /* @__PURE__ */ new WeakSet();
  function Wi(t) {
    t.size <= (t.max || -1) || tr.has(t) || (tr.add(t), setTimeout(function() {
      t.clean(), tr.delete(t);
    }, 100));
  }
  var Hr = function(t, e) {
    var r = new Pt(t, e);
    return r.set = function(n, i) {
      var a = Pt.prototype.set.call(this, n, i);
      return Wi(this), a;
    }, r;
  }, Os = function(t, e) {
    var r = new _r(t, e);
    return r.set = function(n, i) {
      var a = _r.prototype.set.call(this, n, i);
      return Wi(this), a;
    }, r;
  }, Ts = /* @__PURE__ */ Symbol.for("apollo.cacheSize"), ie = p({}, Ft[Ts]), Te = {};
  function Jr(t, e) {
    Te[t] = e;
  }
  var ws = globalThis.__DEV__ !== !1 ? xs : void 0, Ss = globalThis.__DEV__ !== !1 ? Is : void 0, ks = globalThis.__DEV__ !== !1 ? Gi : void 0;
  function Ds() {
    var t = {
      parser: 1e3,
      canonicalStringify: 1e3,
      print: 2e3,
      "documentTransform.cache": 2e3,
      "queryManager.getDocumentInfo": 2e3,
      "PersistedQueryLink.persistedQueryHashes": 2e3,
      "fragmentRegistry.transform": 2e3,
      "fragmentRegistry.lookup": 1e3,
      "fragmentRegistry.findFragmentSpreads": 4e3,
      "cache.fragmentQueryDocuments": 1e3,
      "removeTypenameFromVariables.getVariableDefinitions": 2e3,
      "inMemoryCache.maybeBroadcastWatch": 5e3,
      "inMemoryCache.executeSelectionSet": 5e4,
      "inMemoryCache.executeSubSelectedArray": 1e4
    };
    return Object.fromEntries(Object.entries(t).map(function(e) {
      var r = e[0], n = e[1];
      return [
        r,
        ie[r] || n
      ];
    }));
  }
  function xs() {
    var t, e, r, n, i;
    if (globalThis.__DEV__ === !1)
      throw new Error("only supported in development mode");
    return {
      limits: Ds(),
      sizes: p({ print: (t = Te.print) === null || t === void 0 ? void 0 : t.call(Te), parser: (e = Te.parser) === null || e === void 0 ? void 0 : e.call(Te), canonicalStringify: (r = Te.canonicalStringify) === null || r === void 0 ? void 0 : r.call(Te), links: Tr(this.link), queryManager: {
        getDocumentInfo: this.queryManager.transformCache.size,
        documentTransforms: Yi(this.queryManager.documentTransform)
      } }, (i = (n = this.cache).getMemoryInternals) === null || i === void 0 ? void 0 : i.call(n))
    };
  }
  function Gi() {
    return {
      cache: {
        fragmentQueryDocuments: ve(this.getFragmentDoc)
      }
    };
  }
  function Is() {
    var t = this.config.fragments;
    return p(p({}, Gi.apply(this)), { addTypenameDocumentTransform: Yi(this.addTypenameTransform), inMemoryCache: {
      executeSelectionSet: ve(this.storeReader.executeSelectionSet),
      executeSubSelectedArray: ve(this.storeReader.executeSubSelectedArray),
      maybeBroadcastWatch: ve(this.maybeBroadcastWatch)
    }, fragmentRegistry: {
      findFragmentSpreads: ve(t?.findFragmentSpreads),
      lookup: ve(t?.lookup),
      transform: ve(t?.transform)
    } });
  }
  function Ns(t) {
    return !!t && "dirtyKey" in t;
  }
  function ve(t) {
    return Ns(t) ? t.size : void 0;
  }
  function $i(t) {
    return t != null;
  }
  function Yi(t) {
    return Or(t).map(function(e) {
      return { cache: e };
    });
  }
  function Or(t) {
    return t ? Y(Y([
      ve(t?.performWork)
    ], Or(t?.left), !0), Or(t?.right), !0).filter($i) : [];
  }
  function Tr(t) {
    var e;
    return t ? Y(Y([
      (e = t?.getMemoryInternals) === null || e === void 0 ? void 0 : e.call(t)
    ], Tr(t?.left), !0), Tr(t?.right), !0).filter($i) : [];
  }
  var ge = Object.assign(function(e) {
    return JSON.stringify(e, Rs);
  }, {
    reset: function() {
      Pe = new Os(
        ie.canonicalStringify || 1e3
        /* defaultCacheSizes.canonicalStringify */
      );
    }
  });
  globalThis.__DEV__ !== !1 && Jr("canonicalStringify", function() {
    return Pe.size;
  });
  var Pe;
  ge.reset();
  function Rs(t, e) {
    if (e && typeof e == "object") {
      var r = Object.getPrototypeOf(e);
      if (r === Object.prototype || r === null) {
        var n = Object.keys(e);
        if (n.every(Cs))
          return e;
        var i = JSON.stringify(n), a = Pe.get(i);
        if (!a) {
          n.sort();
          var o = JSON.stringify(n);
          a = Pe.get(o) || n, Pe.set(i, a), Pe.set(o, a);
        }
        var s = Object.create(r);
        return a.forEach(function(c) {
          s[c] = e[c];
        }), s;
      }
    }
    return e;
  }
  function Cs(t, e, r) {
    return e === 0 || r[e - 1] <= t;
  }
  function Ve(t) {
    return { __ref: String(t) };
  }
  function A(t) {
    return !!(t && typeof t == "object" && typeof t.__ref == "string");
  }
  function As(t) {
    return L(t) && t.kind === "Document" && Array.isArray(t.definitions);
  }
  function Fs(t) {
    return t.kind === "StringValue";
  }
  function Ps(t) {
    return t.kind === "BooleanValue";
  }
  function Ms(t) {
    return t.kind === "IntValue";
  }
  function Ls(t) {
    return t.kind === "FloatValue";
  }
  function js(t) {
    return t.kind === "Variable";
  }
  function Vs(t) {
    return t.kind === "ObjectValue";
  }
  function Qs(t) {
    return t.kind === "ListValue";
  }
  function qs(t) {
    return t.kind === "EnumValue";
  }
  function Bs(t) {
    return t.kind === "NullValue";
  }
  function Be(t, e, r, n) {
    if (Ms(r) || Ls(r))
      t[e.value] = Number(r.value);
    else if (Ps(r) || Fs(r))
      t[e.value] = r.value;
    else if (Vs(r)) {
      var i = {};
      r.fields.map(function(o) {
        return Be(i, o.name, o.value, n);
      }), t[e.value] = i;
    } else if (js(r)) {
      var a = (n || {})[r.name.value];
      t[e.value] = a;
    } else if (Qs(r))
      t[e.value] = r.values.map(function(o) {
        var s = {};
        return Be(s, e, o, n), s[e.value];
      });
    else if (qs(r))
      t[e.value] = r.value;
    else if (Bs(r))
      t[e.value] = null;
    else
      throw H(124, e.value, r.kind);
  }
  function Us(t, e) {
    var r = null;
    t.directives && (r = {}, t.directives.forEach(function(i) {
      r[i.name.value] = {}, i.arguments && i.arguments.forEach(function(a) {
        var o = a.name, s = a.value;
        return Be(r[i.name.value], o, s, e);
      });
    }));
    var n = null;
    return t.arguments && t.arguments.length && (n = {}, t.arguments.forEach(function(i) {
      var a = i.name, o = i.value;
      return Be(n, a, o, e);
    })), Hi(t.name.value, n, r);
  }
  var zs = [
    "connection",
    "include",
    "skip",
    "client",
    "rest",
    "export",
    "nonreactive"
  ], Xe = ge, Hi = Object.assign(function(t, e, r) {
    if (e && r && r.connection && r.connection.key)
      if (r.connection.filter && r.connection.filter.length > 0) {
        var n = r.connection.filter ? r.connection.filter : [];
        n.sort();
        var i = {};
        return n.forEach(function(s) {
          i[s] = e[s];
        }), "".concat(r.connection.key, "(").concat(Xe(i), ")");
      } else
        return r.connection.key;
    var a = t;
    if (e) {
      var o = Xe(e);
      a += "(".concat(o, ")");
    }
    return r && Object.keys(r).forEach(function(s) {
      zs.indexOf(s) === -1 && (r[s] && Object.keys(r[s]).length ? a += "@".concat(s, "(").concat(Xe(r[s]), ")") : a += "@".concat(s));
    }), a;
  }, {
    setStringify: function(t) {
      var e = Xe;
      return Xe = t, e;
    }
  });
  function Wt(t, e) {
    if (t.arguments && t.arguments.length) {
      var r = {};
      return t.arguments.forEach(function(n) {
        var i = n.name, a = n.value;
        return Be(r, i, a, e);
      }), r;
    }
    return null;
  }
  function ce(t) {
    return t.alias ? t.alias.value : t.name.value;
  }
  function wr(t, e, r) {
    for (var n, i = 0, a = e.selections; i < a.length; i++) {
      var o = a[i];
      if (be(o)) {
        if (o.name.value === "__typename")
          return t[ce(o)];
      } else n ? n.push(o) : n = [o];
    }
    if (typeof t.__typename == "string")
      return t.__typename;
    if (n)
      for (var s = 0, c = n; s < c.length; s++) {
        var o = c[s], u = wr(t, zt(o, r).selectionSet, r);
        if (typeof u == "string")
          return u;
      }
  }
  function be(t) {
    return t.kind === "Field";
  }
  function Ws(t) {
    return t.kind === "InlineFragment";
  }
  function Ye(t) {
    T(t && t.kind === "Document", 116);
    var e = t.definitions.filter(function(r) {
      return r.kind !== "FragmentDefinition";
    }).map(function(r) {
      if (r.kind !== "OperationDefinition")
        throw H(117, r.kind);
      return r;
    });
    return T(e.length <= 1, 118, e.length), t;
  }
  function xe(t) {
    return Ye(t), t.definitions.filter(function(e) {
      return e.kind === "OperationDefinition";
    })[0];
  }
  function at(t) {
    return t.definitions.filter(function(e) {
      return e.kind === "OperationDefinition" && !!e.name;
    }).map(function(e) {
      return e.name.value;
    })[0] || null;
  }
  function He(t) {
    return t.definitions.filter(function(e) {
      return e.kind === "FragmentDefinition";
    });
  }
  function Ji(t) {
    var e = xe(t);
    return T(e && e.operation === "query", 119), e;
  }
  function Ki(t) {
    T(t.kind === "Document", 120), T(t.definitions.length <= 1, 121);
    var e = t.definitions[0];
    return T(e.kind === "FragmentDefinition", 122), e;
  }
  function gt(t) {
    Ye(t);
    for (var e, r = 0, n = t.definitions; r < n.length; r++) {
      var i = n[r];
      if (i.kind === "OperationDefinition") {
        var a = i.operation;
        if (a === "query" || a === "mutation" || a === "subscription")
          return i;
      }
      i.kind === "FragmentDefinition" && !e && (e = i);
    }
    if (e)
      return e;
    throw H(123);
  }
  function Kr(t) {
    var e = /* @__PURE__ */ Object.create(null), r = t && t.variableDefinitions;
    return r && r.length && r.forEach(function(n) {
      n.defaultValue && Be(e, n.variable.name, n.defaultValue);
    }), e;
  }
  let $ = null;
  const Cn = {};
  let Gs = 1;
  const $s = () => class {
    constructor() {
      this.id = [
        "slot",
        Gs++,
        Date.now(),
        Math.random().toString(36).slice(2)
      ].join(":");
    }
    hasValue() {
      for (let e = $; e; e = e.parent)
        if (this.id in e.slots) {
          const r = e.slots[this.id];
          if (r === Cn)
            break;
          return e !== $ && ($.slots[this.id] = r), !0;
        }
      return $ && ($.slots[this.id] = Cn), !1;
    }
    getValue() {
      if (this.hasValue())
        return $.slots[this.id];
    }
    withValue(e, r, n, i) {
      const a = {
        __proto__: null,
        [this.id]: e
      }, o = $;
      $ = { parent: o, slots: a };
      try {
        return r.apply(i, n);
      } finally {
        $ = o;
      }
    }
    // Capture the current context and wrap a callback function so that it
    // reestablishes the captured context when called.
    static bind(e) {
      const r = $;
      return function() {
        const n = $;
        try {
          return $ = r, e.apply(this, arguments);
        } finally {
          $ = n;
        }
      };
    }
    // Immediately run a callback function without any captured context.
    static noContext(e, r, n) {
      if ($) {
        const i = $;
        try {
          return $ = null, e.apply(n, r);
        } finally {
          $ = i;
        }
      } else
        return e.apply(n, r);
    }
  };
  function An(t) {
    try {
      return t();
    } catch {
    }
  }
  const rr = "@wry/context:Slot", Ys = (
    // Prefer globalThis when available.
    // https://github.com/benjamn/wryware/issues/347
    An(() => globalThis) || // Fall back to global, which works in Node.js and may be converted by some
    // bundlers to the appropriate identifier (window, self, ...) depending on the
    // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
    An(() => global) || // Otherwise, use a dummy host that's local to this module. We used to fall
    // back to using the Array constructor as a namespace, but that was flagged in
    // https://github.com/benjamn/wryware/issues/347, and can be avoided.
    /* @__PURE__ */ Object.create(null)
  ), Fn = Ys, Je = Fn[rr] || // Earlier versions of this package stored the globalKey property on the Array
  // constructor, so we check there as well, to prevent Slot class duplication.
  Array[rr] || (function(t) {
    try {
      Object.defineProperty(Fn, rr, {
        value: t,
        enumerable: !1,
        writable: !1,
        // When it was possible for globalHost to be the Array constructor (a
        // legacy Slot dedup strategy), it was important for the property to be
        // configurable:true so it could be deleted. That does not seem to be as
        // important when globalHost is the global object, but I don't want to
        // cause similar problems again, and configurable:true seems safest.
        // https://github.com/endojs/endo/issues/576#issuecomment-1178274008
        configurable: !0
      });
    } finally {
      return t;
    }
  })($s()), { bind: kl, noContext: Dl } = Je, Gt = new Je(), { hasOwnProperty: Hs } = Object.prototype, Xr = Array.from || function(t) {
    const e = [];
    return t.forEach((r) => e.push(r)), e;
  };
  function Zr(t) {
    const { unsubscribe: e } = t;
    typeof e == "function" && (t.unsubscribe = void 0, e());
  }
  const pt = [], Js = 100;
  function Ue(t, e) {
    if (!t)
      throw new Error(e || "assertion failure");
  }
  function Xi(t, e) {
    const r = t.length;
    return (
      // Unknown values are not equal to each other.
      r > 0 && // Both values must be ordinary (or both exceptional) to be equal.
      r === e.length && // The underlying value or exception must be the same.
      t[r - 1] === e[r - 1]
    );
  }
  function Zi(t) {
    switch (t.length) {
      case 0:
        throw new Error("unknown value");
      case 1:
        return t[0];
      case 2:
        throw t[1];
    }
  }
  function ea(t) {
    return t.slice(0);
  }
  class $t {
    constructor(e) {
      this.fn = e, this.parents = /* @__PURE__ */ new Set(), this.childValues = /* @__PURE__ */ new Map(), this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++$t.count;
    }
    peek() {
      if (this.value.length === 1 && !_e(this))
        return Pn(this), this.value[0];
    }
    // This is the most important method of the Entry API, because it
    // determines whether the cached this.value can be returned immediately,
    // or must be recomputed. The overall performance of the caching system
    // depends on the truth of the following observations: (1) this.dirty is
    // usually false, (2) this.dirtyChildren is usually null/empty, and thus
    // (3) valueGet(this.value) is usually returned without recomputation.
    recompute(e) {
      return Ue(!this.recomputing, "already recomputing"), Pn(this), _e(this) ? Ks(this, e) : Zi(this.value);
    }
    setDirty() {
      this.dirty || (this.dirty = !0, ta(this), Zr(this));
    }
    dispose() {
      this.setDirty(), oa(this), en(this, (e, r) => {
        e.setDirty(), sa(e, this);
      });
    }
    forget() {
      this.dispose();
    }
    dependOn(e) {
      e.add(this), this.deps || (this.deps = pt.pop() || /* @__PURE__ */ new Set()), this.deps.add(e);
    }
    forgetDeps() {
      this.deps && (Xr(this.deps).forEach((e) => e.delete(this)), this.deps.clear(), pt.push(this.deps), this.deps = null);
    }
  }
  $t.count = 0;
  function Pn(t) {
    const e = Gt.getValue();
    if (e)
      return t.parents.add(e), e.childValues.has(t) || e.childValues.set(t, []), _e(t) ? na(e, t) : ia(e, t), e;
  }
  function Ks(t, e) {
    return oa(t), Gt.withValue(t, Xs, [t, e]), eu(t, e) && Zs(t), Zi(t.value);
  }
  function Xs(t, e) {
    t.recomputing = !0;
    const { normalizeResult: r } = t;
    let n;
    r && t.value.length === 1 && (n = ea(t.value)), t.value.length = 0;
    try {
      if (t.value[0] = t.fn.apply(null, e), r && n && !Xi(n, t.value))
        try {
          t.value[0] = r(t.value[0], n[0]);
        } catch {
        }
    } catch (i) {
      t.value[1] = i;
    }
    t.recomputing = !1;
  }
  function _e(t) {
    return t.dirty || !!(t.dirtyChildren && t.dirtyChildren.size);
  }
  function Zs(t) {
    t.dirty = !1, !_e(t) && ra(t);
  }
  function ta(t) {
    en(t, na);
  }
  function ra(t) {
    en(t, ia);
  }
  function en(t, e) {
    const r = t.parents.size;
    if (r) {
      const n = Xr(t.parents);
      for (let i = 0; i < r; ++i)
        e(n[i], t);
    }
  }
  function na(t, e) {
    Ue(t.childValues.has(e)), Ue(_e(e));
    const r = !_e(t);
    if (!t.dirtyChildren)
      t.dirtyChildren = pt.pop() || /* @__PURE__ */ new Set();
    else if (t.dirtyChildren.has(e))
      return;
    t.dirtyChildren.add(e), r && ta(t);
  }
  function ia(t, e) {
    Ue(t.childValues.has(e)), Ue(!_e(e));
    const r = t.childValues.get(e);
    r.length === 0 ? t.childValues.set(e, ea(e.value)) : Xi(r, e.value) || t.setDirty(), aa(t, e), !_e(t) && ra(t);
  }
  function aa(t, e) {
    const r = t.dirtyChildren;
    r && (r.delete(e), r.size === 0 && (pt.length < Js && pt.push(r), t.dirtyChildren = null));
  }
  function oa(t) {
    t.childValues.size > 0 && t.childValues.forEach((e, r) => {
      sa(t, r);
    }), t.forgetDeps(), Ue(t.dirtyChildren === null);
  }
  function sa(t, e) {
    e.parents.delete(t), t.childValues.delete(e), aa(t, e);
  }
  function eu(t, e) {
    if (typeof t.subscribe == "function")
      try {
        Zr(t), t.unsubscribe = t.subscribe.apply(null, e);
      } catch {
        return t.setDirty(), !1;
      }
    return !0;
  }
  const tu = {
    setDirty: !0,
    dispose: !0,
    forget: !0
    // Fully remove parent Entry from LRU cache and computation graph
  };
  function ua(t) {
    const e = /* @__PURE__ */ new Map();
    function r(n) {
      const i = Gt.getValue();
      if (i) {
        let a = e.get(n);
        a || e.set(n, a = /* @__PURE__ */ new Set()), i.dependOn(a);
      }
    }
    return r.dirty = function(i, a) {
      const o = e.get(i);
      if (o) {
        const s = a && Hs.call(tu, a) ? a : "setDirty";
        Xr(o).forEach((c) => c[s]()), e.delete(i), Zr(o);
      }
    }, r;
  }
  let Mn;
  function ru(...t) {
    return (Mn || (Mn = new le(typeof WeakMap == "function"))).lookupArray(t);
  }
  const nr = /* @__PURE__ */ new Set();
  function vt(t, { max: e = Math.pow(2, 16), keyArgs: r, makeCacheKey: n = ru, normalizeResult: i, subscribe: a, cache: o = _r } = /* @__PURE__ */ Object.create(null)) {
    const s = typeof o == "function" ? new o(e, (h) => h.dispose()) : o, c = function() {
      const h = n.apply(null, r ? r.apply(null, arguments) : arguments);
      if (h === void 0)
        return t.apply(null, arguments);
      let d = s.get(h);
      d || (s.set(h, d = new $t(t)), d.normalizeResult = i, d.subscribe = a, d.forget = () => s.delete(h));
      const y = d.recompute(Array.prototype.slice.call(arguments));
      return s.set(h, d), nr.add(s), Gt.hasValue() || (nr.forEach((m) => m.clean()), nr.clear()), y;
    };
    Object.defineProperty(c, "size", {
      get: () => s.size,
      configurable: !1,
      enumerable: !1
    }), Object.freeze(c.options = {
      max: e,
      keyArgs: r,
      makeCacheKey: n,
      normalizeResult: i,
      subscribe: a,
      cache: s
    });
    function u(h) {
      const d = h && s.get(h);
      d && d.setDirty();
    }
    c.dirtyKey = u, c.dirty = function() {
      u(n.apply(null, arguments));
    };
    function l(h) {
      const d = h && s.get(h);
      if (d)
        return d.peek();
    }
    c.peekKey = l, c.peek = function() {
      return l(n.apply(null, arguments));
    };
    function f(h) {
      return h ? s.delete(h) : !1;
    }
    return c.forgetKey = f, c.forget = function() {
      return f(n.apply(null, arguments));
    }, c.makeCacheKey = n, c.getKey = r ? function() {
      return n.apply(null, r.apply(null, arguments));
    } : n, Object.freeze(c);
  }
  function nu(t) {
    return t;
  }
  var ca = (
    /** @class */
    (function() {
      function t(e, r) {
        r === void 0 && (r = /* @__PURE__ */ Object.create(null)), this.resultCache = $r ? /* @__PURE__ */ new WeakSet() : /* @__PURE__ */ new Set(), this.transform = e, r.getCacheKey && (this.getCacheKey = r.getCacheKey), this.cached = r.cache !== !1, this.resetCache();
      }
      return t.prototype.getCacheKey = function(e) {
        return [e];
      }, t.identity = function() {
        return new t(nu, { cache: !1 });
      }, t.split = function(e, r, n) {
        return n === void 0 && (n = t.identity()), Object.assign(new t(
          function(i) {
            var a = e(i) ? r : n;
            return a.transformDocument(i);
          },
          // Reasonably assume both `left` and `right` transforms handle their own caching
          { cache: !1 }
        ), { left: r, right: n });
      }, t.prototype.resetCache = function() {
        var e = this;
        if (this.cached) {
          var r = new le(Ne);
          this.performWork = vt(t.prototype.performWork.bind(this), {
            makeCacheKey: function(n) {
              var i = e.getCacheKey(n);
              if (i)
                return T(Array.isArray(i), 105), r.lookupArray(i);
            },
            max: ie["documentTransform.cache"],
            cache: Pt
          });
        }
      }, t.prototype.performWork = function(e) {
        return Ye(e), this.transform(e);
      }, t.prototype.transformDocument = function(e) {
        if (this.resultCache.has(e))
          return e;
        var r = this.performWork(e);
        return this.resultCache.add(r), r;
      }, t.prototype.concat = function(e) {
        var r = this;
        return Object.assign(new t(
          function(n) {
            return e.transformDocument(r.transformDocument(n));
          },
          // Reasonably assume both transforms handle their own caching
          { cache: !1 }
        ), {
          left: this,
          right: e
        });
      }, t;
    })()
  ), st, Se = Object.assign(function(t) {
    var e = st.get(t);
    return e || (e = es(t), st.set(t, e)), e;
  }, {
    reset: function() {
      st = new Hr(
        ie.print || 2e3
        /* defaultCacheSizes.print */
      );
    }
  });
  Se.reset();
  globalThis.__DEV__ !== !1 && Jr("print", function() {
    return st ? st.size : 0;
  });
  var j = Array.isArray;
  function X(t) {
    return Array.isArray(t) && t.length > 0;
  }
  var Ln = {
    kind: S.FIELD,
    name: {
      kind: S.NAME,
      value: "__typename"
    }
  };
  function la(t, e) {
    return !t || t.selectionSet.selections.every(function(r) {
      return r.kind === S.FRAGMENT_SPREAD && la(e[r.name.value], e);
    });
  }
  function iu(t) {
    return la(xe(t) || Ki(t), $e(He(t))) ? null : t;
  }
  function au(t) {
    var e = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
    return t.forEach(function(n) {
      n && (n.name ? e.set(n.name, n) : n.test && r.set(n.test, n));
    }), function(n) {
      var i = e.get(n.name.value);
      return !i && r.size && r.forEach(function(a, o) {
        o(n) && (i = a);
      }), i;
    };
  }
  function jn(t) {
    var e = /* @__PURE__ */ new Map();
    return function(n) {
      n === void 0 && (n = t);
      var i = e.get(n);
      return i || e.set(n, i = {
        // Variable and fragment spread names used directly within this
        // operation or fragment definition, as identified by key. These sets
        // will be populated during the first traversal of the document in
        // removeDirectivesFromDocument below.
        variables: /* @__PURE__ */ new Set(),
        fragmentSpreads: /* @__PURE__ */ new Set()
      }), i;
    };
  }
  function fa(t, e) {
    Ye(e);
    for (var r = jn(""), n = jn(""), i = function(v) {
      for (var b = 0, E = void 0; b < v.length && (E = v[b]); ++b)
        if (!j(E)) {
          if (E.kind === S.OPERATION_DEFINITION)
            return r(E.name && E.name.value);
          if (E.kind === S.FRAGMENT_DEFINITION)
            return n(E.name.value);
        }
      return globalThis.__DEV__ !== !1 && T.error(125), null;
    }, a = 0, o = e.definitions.length - 1; o >= 0; --o)
      e.definitions[o].kind === S.OPERATION_DEFINITION && ++a;
    var s = au(t), c = function(v) {
      return X(v) && v.map(s).some(function(b) {
        return b && b.remove;
      });
    }, u = /* @__PURE__ */ new Map(), l = !1, f = {
      enter: function(v) {
        if (c(v.directives))
          return l = !0, null;
      }
    }, h = ne(e, {
      // These two AST node types share the same implementation, defined above.
      Field: f,
      InlineFragment: f,
      VariableDefinition: {
        enter: function() {
          return !1;
        }
      },
      Variable: {
        enter: function(v, b, E, O, w) {
          var D = i(w);
          D && D.variables.add(v.name.value);
        }
      },
      FragmentSpread: {
        enter: function(v, b, E, O, w) {
          if (c(v.directives))
            return l = !0, null;
          var D = i(w);
          D && D.fragmentSpreads.add(v.name.value);
        }
      },
      FragmentDefinition: {
        enter: function(v, b, E, O) {
          u.set(JSON.stringify(O), v);
        },
        leave: function(v, b, E, O) {
          var w = u.get(JSON.stringify(O));
          if (v === w)
            return v;
          if (
            // This logic applies only if the document contains one or more
            // operations, since removing all fragments from a document containing
            // only fragments makes the document useless.
            a > 0 && v.selectionSet.selections.every(function(D) {
              return D.kind === S.FIELD && D.name.value === "__typename";
            })
          )
            return n(v.name.value).removed = !0, l = !0, null;
        }
      },
      Directive: {
        leave: function(v) {
          if (s(v))
            return l = !0, null;
        }
      }
    });
    if (!l)
      return e;
    var d = function(v) {
      return v.transitiveVars || (v.transitiveVars = new Set(v.variables), v.removed || v.fragmentSpreads.forEach(function(b) {
        d(n(b)).transitiveVars.forEach(function(E) {
          v.transitiveVars.add(E);
        });
      })), v;
    }, y = /* @__PURE__ */ new Set();
    h.definitions.forEach(function(v) {
      v.kind === S.OPERATION_DEFINITION ? d(r(v.name && v.name.value)).fragmentSpreads.forEach(function(b) {
        y.add(b);
      }) : v.kind === S.FRAGMENT_DEFINITION && // If there are no operations in the document, then all fragment
      // definitions count as usages of their own fragment names. This heuristic
      // prevents accidentally removing all fragment definitions from the
      // document just because it contains no operations that use the fragments.
      a === 0 && !n(v.name.value).removed && y.add(v.name.value);
    }), y.forEach(function(v) {
      d(n(v)).fragmentSpreads.forEach(function(b) {
        y.add(b);
      });
    });
    var m = function(v) {
      return !!// A fragment definition will be removed if there are no spreads that refer
      // to it, or the fragment was explicitly removed because it had no fields
      // other than __typename.
      (!y.has(v) || n(v).removed);
    }, g = {
      enter: function(v) {
        if (m(v.name.value))
          return null;
      }
    };
    return iu(ne(h, {
      // If the fragment is going to be removed, then leaving any dangling
      // FragmentSpread nodes with the same name would be a mistake.
      FragmentSpread: g,
      // This is where the fragment definition is actually removed.
      FragmentDefinition: g,
      OperationDefinition: {
        leave: function(v) {
          if (v.variableDefinitions) {
            var b = d(
              // If an operation is anonymous, we use the empty string as its key.
              r(v.name && v.name.value)
            ).transitiveVars;
            if (b.size < v.variableDefinitions.length)
              return p(p({}, v), { variableDefinitions: v.variableDefinitions.filter(function(E) {
                return b.has(E.variable.name.value);
              }) });
          }
        }
      }
    }));
  }
  var tn = Object.assign(function(t) {
    return ne(t, {
      SelectionSet: {
        enter: function(e, r, n) {
          if (!(n && n.kind === S.OPERATION_DEFINITION)) {
            var i = e.selections;
            if (i) {
              var a = i.some(function(s) {
                return be(s) && (s.name.value === "__typename" || s.name.value.lastIndexOf("__", 0) === 0);
              });
              if (!a) {
                var o = n;
                if (!(be(o) && o.directives && o.directives.some(function(s) {
                  return s.name.value === "export";
                })))
                  return p(p({}, e), { selections: Y(Y([], i, !0), [Ln], !1) });
              }
            }
          }
        }
      }
    });
  }, {
    added: function(t) {
      return t === Ln;
    }
  });
  function ou(t) {
    var e = gt(t), r = e.operation;
    if (r === "query")
      return t;
    var n = ne(t, {
      OperationDefinition: {
        enter: function(i) {
          return p(p({}, i), { operation: "query" });
        }
      }
    });
    return n;
  }
  function ha(t) {
    Ye(t);
    var e = fa([
      {
        test: function(r) {
          return r.name.value === "client";
        },
        remove: !0
      }
    ], t);
    return e;
  }
  function su(t) {
    return Ye(t), ne(t, {
      FragmentSpread: function(e) {
        var r;
        if (!(!((r = e.directives) === null || r === void 0) && r.some(function(n) {
          return n.name.value === "unmask";
        })))
          return p(p({}, e), { directives: Y(Y([], e.directives || [], !0), [
            {
              kind: S.DIRECTIVE,
              name: { kind: S.NAME, value: "nonreactive" }
            }
          ], !1) });
      }
    });
  }
  var uu = Object.prototype.hasOwnProperty;
  function Vn() {
    for (var t = [], e = 0; e < arguments.length; e++)
      t[e] = arguments[e];
    return Yt(t);
  }
  function Yt(t) {
    var e = t[0] || {}, r = t.length;
    if (r > 1)
      for (var n = new Ee(), i = 1; i < r; ++i)
        e = n.merge(e, t[i]);
    return e;
  }
  var cu = function(t, e, r) {
    return this.merge(t[r], e[r]);
  }, Ee = (
    /** @class */
    (function() {
      function t(e) {
        e === void 0 && (e = cu), this.reconciler = e, this.isObject = L, this.pastCopies = /* @__PURE__ */ new Set();
      }
      return t.prototype.merge = function(e, r) {
        for (var n = this, i = [], a = 2; a < arguments.length; a++)
          i[a - 2] = arguments[a];
        return L(r) && L(e) ? (Object.keys(r).forEach(function(o) {
          if (uu.call(e, o)) {
            var s = e[o];
            if (r[o] !== s) {
              var c = n.reconciler.apply(n, Y([
                e,
                r,
                o
              ], i, !1));
              c !== s && (e = n.shallowCopyForMerge(e), e[o] = c);
            }
          } else
            e = n.shallowCopyForMerge(e), e[o] = r[o];
        }), e) : r;
      }, t.prototype.shallowCopyForMerge = function(e) {
        return L(e) && (this.pastCopies.has(e) || (Array.isArray(e) ? e = e.slice(0) : e = p({ __proto__: Object.getPrototypeOf(e) }, e), this.pastCopies.add(e))), e;
      }, t;
    })()
  );
  function lu(t, e) {
    var r = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
    if (r) return (r = r.call(t)).next.bind(r);
    if (Array.isArray(t) || (r = fu(t)) || e) {
      r && (t = r);
      var n = 0;
      return function() {
        return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function fu(t, e) {
    if (t) {
      if (typeof t == "string") return Qn(t, e);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
      if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Qn(t, e);
    }
  }
  function Qn(t, e) {
    (e == null || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++)
      n[r] = t[r];
    return n;
  }
  function qn(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
  }
  function rn(t, e, r) {
    return e && qn(t.prototype, e), r && qn(t, r), Object.defineProperty(t, "prototype", { writable: !1 }), t;
  }
  var nn = function() {
    return typeof Symbol == "function";
  }, an = function(t) {
    return nn() && !!Symbol[t];
  }, on = function(t) {
    return an(t) ? Symbol[t] : "@@" + t;
  };
  nn() && !an("observable") && (Symbol.observable = /* @__PURE__ */ Symbol("observable"));
  var hu = on("iterator"), Sr = on("observable"), da = on("species");
  function Mt(t, e) {
    var r = t[e];
    if (r != null) {
      if (typeof r != "function") throw new TypeError(r + " is not a function");
      return r;
    }
  }
  function Ze(t) {
    var e = t.constructor;
    return e !== void 0 && (e = e[da], e === null && (e = void 0)), e !== void 0 ? e : M;
  }
  function du(t) {
    return t instanceof M;
  }
  function ze(t) {
    ze.log ? ze.log(t) : setTimeout(function() {
      throw t;
    });
  }
  function Dt(t) {
    Promise.resolve().then(function() {
      try {
        t();
      } catch (e) {
        ze(e);
      }
    });
  }
  function pa(t) {
    var e = t._cleanup;
    if (e !== void 0 && (t._cleanup = void 0, !!e))
      try {
        if (typeof e == "function")
          e();
        else {
          var r = Mt(e, "unsubscribe");
          r && r.call(e);
        }
      } catch (n) {
        ze(n);
      }
  }
  function kr(t) {
    t._observer = void 0, t._queue = void 0, t._state = "closed";
  }
  function pu(t) {
    var e = t._queue;
    if (e) {
      t._queue = void 0, t._state = "ready";
      for (var r = 0; r < e.length && (va(t, e[r].type, e[r].value), t._state !== "closed"); ++r)
        ;
    }
  }
  function va(t, e, r) {
    t._state = "running";
    var n = t._observer;
    try {
      var i = Mt(n, e);
      switch (e) {
        case "next":
          i && i.call(n, r);
          break;
        case "error":
          if (kr(t), i) i.call(n, r);
          else throw r;
          break;
        case "complete":
          kr(t), i && i.call(n);
          break;
      }
    } catch (a) {
      ze(a);
    }
    t._state === "closed" ? pa(t) : t._state === "running" && (t._state = "ready");
  }
  function ir(t, e, r) {
    if (t._state !== "closed") {
      if (t._state === "buffering") {
        t._queue.push({
          type: e,
          value: r
        });
        return;
      }
      if (t._state !== "ready") {
        t._state = "buffering", t._queue = [{
          type: e,
          value: r
        }], Dt(function() {
          return pu(t);
        });
        return;
      }
      va(t, e, r);
    }
  }
  var vu = /* @__PURE__ */ (function() {
    function t(r, n) {
      this._cleanup = void 0, this._observer = r, this._queue = void 0, this._state = "initializing";
      var i = new yu(this);
      try {
        this._cleanup = n.call(void 0, i);
      } catch (a) {
        i.error(a);
      }
      this._state === "initializing" && (this._state = "ready");
    }
    var e = t.prototype;
    return e.unsubscribe = function() {
      this._state !== "closed" && (kr(this), pa(this));
    }, rn(t, [{
      key: "closed",
      get: function() {
        return this._state === "closed";
      }
    }]), t;
  })(), yu = /* @__PURE__ */ (function() {
    function t(r) {
      this._subscription = r;
    }
    var e = t.prototype;
    return e.next = function(n) {
      ir(this._subscription, "next", n);
    }, e.error = function(n) {
      ir(this._subscription, "error", n);
    }, e.complete = function() {
      ir(this._subscription, "complete");
    }, rn(t, [{
      key: "closed",
      get: function() {
        return this._subscription._state === "closed";
      }
    }]), t;
  })(), M = /* @__PURE__ */ (function() {
    function t(r) {
      if (!(this instanceof t)) throw new TypeError("Observable cannot be called as a function");
      if (typeof r != "function") throw new TypeError("Observable initializer must be a function");
      this._subscriber = r;
    }
    var e = t.prototype;
    return e.subscribe = function(n) {
      return (typeof n != "object" || n === null) && (n = {
        next: n,
        error: arguments[1],
        complete: arguments[2]
      }), new vu(n, this._subscriber);
    }, e.forEach = function(n) {
      var i = this;
      return new Promise(function(a, o) {
        if (typeof n != "function") {
          o(new TypeError(n + " is not a function"));
          return;
        }
        function s() {
          c.unsubscribe(), a();
        }
        var c = i.subscribe({
          next: function(u) {
            try {
              n(u, s);
            } catch (l) {
              o(l), c.unsubscribe();
            }
          },
          error: o,
          complete: a
        });
      });
    }, e.map = function(n) {
      var i = this;
      if (typeof n != "function") throw new TypeError(n + " is not a function");
      var a = Ze(this);
      return new a(function(o) {
        return i.subscribe({
          next: function(s) {
            try {
              s = n(s);
            } catch (c) {
              return o.error(c);
            }
            o.next(s);
          },
          error: function(s) {
            o.error(s);
          },
          complete: function() {
            o.complete();
          }
        });
      });
    }, e.filter = function(n) {
      var i = this;
      if (typeof n != "function") throw new TypeError(n + " is not a function");
      var a = Ze(this);
      return new a(function(o) {
        return i.subscribe({
          next: function(s) {
            try {
              if (!n(s)) return;
            } catch (c) {
              return o.error(c);
            }
            o.next(s);
          },
          error: function(s) {
            o.error(s);
          },
          complete: function() {
            o.complete();
          }
        });
      });
    }, e.reduce = function(n) {
      var i = this;
      if (typeof n != "function") throw new TypeError(n + " is not a function");
      var a = Ze(this), o = arguments.length > 1, s = !1, c = arguments[1], u = c;
      return new a(function(l) {
        return i.subscribe({
          next: function(f) {
            var h = !s;
            if (s = !0, !h || o)
              try {
                u = n(u, f);
              } catch (d) {
                return l.error(d);
              }
            else
              u = f;
          },
          error: function(f) {
            l.error(f);
          },
          complete: function() {
            if (!s && !o) return l.error(new TypeError("Cannot reduce an empty sequence"));
            l.next(u), l.complete();
          }
        });
      });
    }, e.concat = function() {
      for (var n = this, i = arguments.length, a = new Array(i), o = 0; o < i; o++)
        a[o] = arguments[o];
      var s = Ze(this);
      return new s(function(c) {
        var u, l = 0;
        function f(h) {
          u = h.subscribe({
            next: function(d) {
              c.next(d);
            },
            error: function(d) {
              c.error(d);
            },
            complete: function() {
              l === a.length ? (u = void 0, c.complete()) : f(s.from(a[l++]));
            }
          });
        }
        return f(n), function() {
          u && (u.unsubscribe(), u = void 0);
        };
      });
    }, e.flatMap = function(n) {
      var i = this;
      if (typeof n != "function") throw new TypeError(n + " is not a function");
      var a = Ze(this);
      return new a(function(o) {
        var s = [], c = i.subscribe({
          next: function(l) {
            if (n)
              try {
                l = n(l);
              } catch (h) {
                return o.error(h);
              }
            var f = a.from(l).subscribe({
              next: function(h) {
                o.next(h);
              },
              error: function(h) {
                o.error(h);
              },
              complete: function() {
                var h = s.indexOf(f);
                h >= 0 && s.splice(h, 1), u();
              }
            });
            s.push(f);
          },
          error: function(l) {
            o.error(l);
          },
          complete: function() {
            u();
          }
        });
        function u() {
          c.closed && s.length === 0 && o.complete();
        }
        return function() {
          s.forEach(function(l) {
            return l.unsubscribe();
          }), c.unsubscribe();
        };
      });
    }, e[Sr] = function() {
      return this;
    }, t.from = function(n) {
      var i = typeof this == "function" ? this : t;
      if (n == null) throw new TypeError(n + " is not an object");
      var a = Mt(n, Sr);
      if (a) {
        var o = a.call(n);
        if (Object(o) !== o) throw new TypeError(o + " is not an object");
        return du(o) && o.constructor === i ? o : new i(function(s) {
          return o.subscribe(s);
        });
      }
      if (an("iterator") && (a = Mt(n, hu), a))
        return new i(function(s) {
          Dt(function() {
            if (!s.closed) {
              for (var c = lu(a.call(n)), u; !(u = c()).done; ) {
                var l = u.value;
                if (s.next(l), s.closed) return;
              }
              s.complete();
            }
          });
        });
      if (Array.isArray(n))
        return new i(function(s) {
          Dt(function() {
            if (!s.closed) {
              for (var c = 0; c < n.length; ++c)
                if (s.next(n[c]), s.closed) return;
              s.complete();
            }
          });
        });
      throw new TypeError(n + " is not observable");
    }, t.of = function() {
      for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
        i[a] = arguments[a];
      var o = typeof this == "function" ? this : t;
      return new o(function(s) {
        Dt(function() {
          if (!s.closed) {
            for (var c = 0; c < i.length; ++c)
              if (s.next(i[c]), s.closed) return;
            s.complete();
          }
        });
      });
    }, rn(t, null, [{
      key: da,
      get: function() {
        return this;
      }
    }]), t;
  })();
  nn() && Object.defineProperty(M, /* @__PURE__ */ Symbol("extensions"), {
    value: {
      symbol: Sr,
      hostReportError: ze
    },
    configurable: !0
  });
  function mu(t) {
    var e, r = t.Symbol;
    if (typeof r == "function")
      if (r.observable)
        e = r.observable;
      else {
        typeof r.for == "function" ? e = r.for("https://github.com/benlesh/symbol-observable") : e = r("https://github.com/benlesh/symbol-observable");
        try {
          r.observable = e;
        } catch {
        }
      }
    else
      e = "@@observable";
    return e;
  }
  var Ce;
  typeof self < "u" ? Ce = self : typeof window < "u" ? Ce = window : typeof global < "u" ? Ce = global : typeof Qr < "u" ? Ce = Qr : Ce = Function("return this")();
  mu(Ce);
  var Bn = M.prototype, Un = "@@observable";
  Bn[Un] || (Bn[Un] = function() {
    return this;
  });
  function gu(t) {
    return t.catch(function() {
    }), t;
  }
  var bu = Object.prototype.toString;
  function ya(t) {
    return Dr(t);
  }
  function Dr(t, e) {
    switch (bu.call(t)) {
      case "[object Array]": {
        if (e = e || /* @__PURE__ */ new Map(), e.has(t))
          return e.get(t);
        var r = t.slice(0);
        return e.set(t, r), r.forEach(function(i, a) {
          r[a] = Dr(i, e);
        }), r;
      }
      case "[object Object]": {
        if (e = e || /* @__PURE__ */ new Map(), e.has(t))
          return e.get(t);
        var n = Object.create(Object.getPrototypeOf(t));
        return e.set(t, n), Object.keys(t).forEach(function(i) {
          n[i] = Dr(t[i], e);
        }), n;
      }
      default:
        return t;
    }
  }
  function _u(t) {
    var e = /* @__PURE__ */ new Set([t]);
    return e.forEach(function(r) {
      L(r) && Eu(r) === r && Object.getOwnPropertyNames(r).forEach(function(n) {
        L(r[n]) && e.add(r[n]);
      });
    }), t;
  }
  function Eu(t) {
    if (globalThis.__DEV__ !== !1 && !Object.isFrozen(t))
      try {
        Object.freeze(t);
      } catch (e) {
        if (e instanceof TypeError)
          return null;
        throw e;
      }
    return t;
  }
  function We(t) {
    return globalThis.__DEV__ !== !1 && _u(t), t;
  }
  function ut(t, e, r) {
    var n = [];
    t.forEach(function(i) {
      return i[e] && n.push(i);
    }), n.forEach(function(i) {
      return i[e](r);
    });
  }
  function ar(t, e, r) {
    return new M(function(n) {
      var i = {
        // Normally we would initialize promiseQueue to Promise.resolve(), but
        // in this case, for backwards compatibility, we need to be careful to
        // invoke the first callback synchronously.
        then: function(c) {
          return new Promise(function(u) {
            return u(c());
          });
        }
      };
      function a(c, u) {
        return function(l) {
          if (c) {
            var f = function() {
              return n.closed ? (
                /* will be swallowed */
                0
              ) : c(l);
            };
            i = i.then(f, f).then(function(h) {
              return n.next(h);
            }, function(h) {
              return n.error(h);
            });
          } else
            n[u](l);
        };
      }
      var o = {
        next: a(e, "next"),
        error: a(r, "error"),
        complete: function() {
          i.then(function() {
            return n.complete();
          });
        }
      }, s = t.subscribe(o);
      return function() {
        return s.unsubscribe();
      };
    });
  }
  function ma(t) {
    function e(r) {
      Object.defineProperty(t, r, { value: M });
    }
    return Yr && Symbol.species && e(Symbol.species), e("@@species"), t;
  }
  function zn(t) {
    return t && typeof t.then == "function";
  }
  var Ae = (
    /** @class */
    (function(t) {
      oe(e, t);
      function e(r) {
        var n = t.call(this, function(i) {
          return n.addObserver(i), function() {
            return n.removeObserver(i);
          };
        }) || this;
        return n.observers = /* @__PURE__ */ new Set(), n.promise = new Promise(function(i, a) {
          n.resolve = i, n.reject = a;
        }), n.handlers = {
          next: function(i) {
            n.sub !== null && (n.latest = ["next", i], n.notify("next", i), ut(n.observers, "next", i));
          },
          error: function(i) {
            var a = n.sub;
            a !== null && (a && setTimeout(function() {
              return a.unsubscribe();
            }), n.sub = null, n.latest = ["error", i], n.reject(i), n.notify("error", i), ut(n.observers, "error", i));
          },
          complete: function() {
            var i = n, a = i.sub, o = i.sources, s = o === void 0 ? [] : o;
            if (a !== null) {
              var c = s.shift();
              c ? zn(c) ? c.then(function(u) {
                return n.sub = u.subscribe(n.handlers);
              }, n.handlers.error) : n.sub = c.subscribe(n.handlers) : (a && setTimeout(function() {
                return a.unsubscribe();
              }), n.sub = null, n.latest && n.latest[0] === "next" ? n.resolve(n.latest[1]) : n.resolve(), n.notify("complete"), ut(n.observers, "complete"));
            }
          }
        }, n.nextResultListeners = /* @__PURE__ */ new Set(), n.cancel = function(i) {
          n.reject(i), n.sources = [], n.handlers.error(i);
        }, n.promise.catch(function(i) {
        }), typeof r == "function" && (r = [new M(r)]), zn(r) ? r.then(function(i) {
          return n.start(i);
        }, n.handlers.error) : n.start(r), n;
      }
      return e.prototype.start = function(r) {
        this.sub === void 0 && (this.sources = Array.from(r), this.handlers.complete());
      }, e.prototype.deliverLastMessage = function(r) {
        if (this.latest) {
          var n = this.latest[0], i = r[n];
          i && i.call(r, this.latest[1]), this.sub === null && n === "next" && r.complete && r.complete();
        }
      }, e.prototype.addObserver = function(r) {
        this.observers.has(r) || (this.deliverLastMessage(r), this.observers.add(r));
      }, e.prototype.removeObserver = function(r) {
        this.observers.delete(r) && this.observers.size < 1 && this.handlers.complete();
      }, e.prototype.notify = function(r, n) {
        var i = this.nextResultListeners;
        i.size && (this.nextResultListeners = /* @__PURE__ */ new Set(), i.forEach(function(a) {
          return a(r, n);
        }));
      }, e.prototype.beforeNext = function(r) {
        var n = !1;
        this.nextResultListeners.add(function(i, a) {
          n || (n = !0, r(i, a));
        });
      }, e;
    })(M)
  );
  ma(Ae);
  function Qe(t) {
    return "incremental" in t;
  }
  function Ou(t) {
    return "hasNext" in t && "data" in t;
  }
  function Tu(t) {
    return Qe(t) || Ou(t);
  }
  function wu(t) {
    return L(t) && "payload" in t;
  }
  function ga(t, e) {
    var r = t, n = new Ee();
    return Qe(e) && X(e.incremental) && e.incremental.forEach(function(i) {
      for (var a = i.data, o = i.path, s = o.length - 1; s >= 0; --s) {
        var c = o[s], u = !isNaN(+c), l = u ? [] : {};
        l[c] = a, a = l;
      }
      r = n.merge(r, a);
    }), r;
  }
  function xt(t) {
    var e = xr(t);
    return X(e);
  }
  function xr(t) {
    var e = X(t.errors) ? t.errors.slice(0) : [];
    return Qe(t) && X(t.incremental) && t.incremental.forEach(function(r) {
      r.errors && e.push.apply(e, r.errors);
    }), e;
  }
  function Ie() {
    for (var t = [], e = 0; e < arguments.length; e++)
      t[e] = arguments[e];
    var r = /* @__PURE__ */ Object.create(null);
    return t.forEach(function(n) {
      n && Object.keys(n).forEach(function(i) {
        var a = n[i];
        a !== void 0 && (r[i] = a);
      });
    }), r;
  }
  function It(t, e) {
    return Ie(t, e, e.variables && {
      variables: Ie(p(p({}, t && t.variables), e.variables))
    });
  }
  function or(t) {
    return new M(function(e) {
      e.error(t);
    });
  }
  var ba = function(t, e, r) {
    var n = new Error(r);
    throw n.name = "ServerError", n.response = t, n.statusCode = t.status, n.result = e, n;
  };
  function Su(t) {
    for (var e = [
      "query",
      "operationName",
      "variables",
      "extensions",
      "context"
    ], r = 0, n = Object.keys(t); r < n.length; r++) {
      var i = n[r];
      if (e.indexOf(i) < 0)
        throw H(58, i);
    }
    return t;
  }
  function ku(t, e) {
    var r = p({}, t), n = function(a) {
      typeof a == "function" ? r = p(p({}, r), a(r)) : r = p(p({}, r), a);
    }, i = function() {
      return p({}, r);
    };
    return Object.defineProperty(e, "setContext", {
      enumerable: !1,
      value: n
    }), Object.defineProperty(e, "getContext", {
      enumerable: !1,
      value: i
    }), e;
  }
  function Du(t) {
    var e = {
      variables: t.variables || {},
      extensions: t.extensions || {},
      operationName: t.operationName,
      query: t.query
    };
    return e.operationName || (e.operationName = typeof e.query != "string" ? at(e.query) || void 0 : ""), e;
  }
  function xu(t, e) {
    var r = p({}, t), n = new Set(Object.keys(t));
    return ne(e, {
      Variable: function(i, a, o) {
        o && o.kind !== "VariableDefinition" && n.delete(i.name.value);
      }
    }), n.forEach(function(i) {
      delete r[i];
    }), r;
  }
  var Iu = /* @__PURE__ */ Symbol.for("apollo.deprecations"), Nu = Ft, Ir = new Je();
  function Ru(t) {
    return Nu[Iu] || (Ir.getValue() || []).includes(t);
  }
  function G(t) {
    for (var e = [], r = 1; r < arguments.length; r++)
      e[r - 1] = arguments[r];
    return Ir.withValue.apply(Ir, Y([Array.isArray(t) ? t : [t]], e, !1));
  }
  function Q(t, e, r, n) {
    n === void 0 && (n = "Please remove this option."), ye(e, function() {
      e in t && globalThis.__DEV__ !== !1 && T.warn(104, r, e, n);
    });
  }
  function ye(t, e) {
    Ru(t) || e();
  }
  function Wn(t, e) {
    return e ? e(t) : M.of();
  }
  function et(t) {
    return typeof t == "function" ? new bt(t) : t;
  }
  function wt(t) {
    return t.request.length <= 1;
  }
  var bt = (
    /** @class */
    (function() {
      function t(e) {
        e && (this.request = e);
      }
      return t.empty = function() {
        return new t(function() {
          return M.of();
        });
      }, t.from = function(e) {
        return e.length === 0 ? t.empty() : e.map(et).reduce(function(r, n) {
          return r.concat(n);
        });
      }, t.split = function(e, r, n) {
        var i = et(r), a = et(n || new t(Wn)), o;
        return wt(i) && wt(a) ? o = new t(function(s) {
          return e(s) ? i.request(s) || M.of() : a.request(s) || M.of();
        }) : o = new t(function(s, c) {
          return e(s) ? i.request(s, c) || M.of() : a.request(s, c) || M.of();
        }), Object.assign(o, { left: i, right: a });
      }, t.execute = function(e, r) {
        return e.request(ku(r.context, Du(Su(r)))) || M.of();
      }, t.concat = function(e, r) {
        var n = et(e);
        if (wt(n))
          return globalThis.__DEV__ !== !1 && T.warn(47, n), n;
        var i = et(r), a;
        return wt(i) ? a = new t(function(o) {
          return n.request(o, function(s) {
            return i.request(s) || M.of();
          }) || M.of();
        }) : a = new t(function(o, s) {
          return n.request(o, function(c) {
            return i.request(c, s) || M.of();
          }) || M.of();
        }), Object.assign(a, { left: n, right: i });
      }, t.prototype.split = function(e, r, n) {
        return this.concat(t.split(e, r, n || new t(Wn)));
      }, t.prototype.concat = function(e) {
        return t.concat(this, e);
      }, t.prototype.request = function(e, r) {
        throw H(48);
      }, t.prototype.onError = function(e, r) {
        if (globalThis.__DEV__ !== !1 && ye("onError", function() {
          globalThis.__DEV__ !== !1 && T.warn(49);
        }), r && r.error)
          return r.error(e), !1;
        throw e;
      }, t.prototype.setOnError = function(e) {
        return globalThis.__DEV__ !== !1 && globalThis.__DEV__ !== !1 && T.warn(50), this.onError = e, this;
      }, t;
    })()
  ), Nr = bt.execute;
  function Cu(t) {
    var e, r = t[Symbol.asyncIterator]();
    return e = {
      next: function() {
        return r.next();
      }
    }, e[Symbol.asyncIterator] = function() {
      return this;
    }, e;
  }
  function Au(t) {
    var e = null, r = null, n = !1, i = [], a = [];
    function o(f) {
      if (!r) {
        if (a.length) {
          var h = a.shift();
          if (Array.isArray(h) && h[0])
            return h[0]({ value: f, done: !1 });
        }
        i.push(f);
      }
    }
    function s(f) {
      r = f;
      var h = a.slice();
      h.forEach(function(d) {
        d[1](f);
      }), !e || e();
    }
    function c() {
      n = !0;
      var f = a.slice();
      f.forEach(function(h) {
        h[0]({ value: void 0, done: !0 });
      }), !e || e();
    }
    e = function() {
      e = null, t.removeListener("data", o), t.removeListener("error", s), t.removeListener("end", c), t.removeListener("finish", c), t.removeListener("close", c);
    }, t.on("data", o), t.on("error", s), t.on("end", c), t.on("finish", c), t.on("close", c);
    function u() {
      return new Promise(function(f, h) {
        if (r)
          return h(r);
        if (i.length)
          return f({ value: i.shift(), done: !1 });
        if (n)
          return f({ value: void 0, done: !0 });
        a.push([f, h]);
      });
    }
    var l = {
      next: function() {
        return u();
      }
    };
    return Ut && (l[Symbol.asyncIterator] = function() {
      return this;
    }), l;
  }
  function Fu(t) {
    var e = !1, r = {
      next: function() {
        return e ? Promise.resolve({
          value: void 0,
          done: !0
        }) : (e = !0, new Promise(function(n, i) {
          t.then(function(a) {
            n({ value: a, done: !1 });
          }).catch(i);
        }));
      }
    };
    return Ut && (r[Symbol.asyncIterator] = function() {
      return this;
    }), r;
  }
  function Gn(t) {
    var e = {
      next: function() {
        return t.read();
      }
    };
    return Ut && (e[Symbol.asyncIterator] = function() {
      return this;
    }), e;
  }
  function Pu(t) {
    return !!t.body;
  }
  function Mu(t) {
    return !!t.getReader;
  }
  function Lu(t) {
    return !!(Ut && t[Symbol.asyncIterator]);
  }
  function ju(t) {
    return !!t.stream;
  }
  function Vu(t) {
    return !!t.arrayBuffer;
  }
  function Qu(t) {
    return !!t.pipe;
  }
  function qu(t) {
    var e = t;
    if (Pu(t) && (e = t.body), Lu(e))
      return Cu(e);
    if (Mu(e))
      return Gn(e.getReader());
    if (ju(e))
      return Gn(e.stream().getReader());
    if (Vu(e))
      return Fu(e.arrayBuffer());
    if (Qu(e))
      return Au(e);
    throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
  }
  var sn = /* @__PURE__ */ Symbol();
  function Bu(t) {
    return t.extensions ? Array.isArray(t.extensions[sn]) : !1;
  }
  function _a(t) {
    return t.hasOwnProperty("graphQLErrors");
  }
  var Uu = function(t) {
    var e = Y(Y(Y([], t.graphQLErrors, !0), t.clientErrors, !0), t.protocolErrors, !0);
    return t.networkError && e.push(t.networkError), e.map(function(r) {
      return L(r) && r.message || "Error message not found.";
    }).join(`
`);
  }, se = (
    /** @class */
    (function(t) {
      oe(e, t);
      function e(r) {
        var n = r.graphQLErrors, i = r.protocolErrors, a = r.clientErrors, o = r.networkError, s = r.errorMessage, c = r.extraInfo, u = t.call(this, s) || this;
        return u.name = "ApolloError", u.graphQLErrors = n || [], u.protocolErrors = i || [], u.clientErrors = a || [], u.networkError = o || null, u.message = s || Uu(u), u.extraInfo = c, u.cause = Y(Y(Y([
          o
        ], n || [], !0), i || [], !0), a || [], !0).find(function(l) {
          return !!l;
        }) || null, u.__proto__ = e.prototype, u;
      }
      return e;
    })(Error)
  ), $n = Object.prototype.hasOwnProperty;
  function zu(t, e) {
    return de(this, void 0, void 0, function() {
      var r, n, i, a, o, s, c, u, l, f, h, d, y, m, g, v, b, E, O, w, D, N, R, P;
      return pe(this, function(V) {
        switch (V.label) {
          case 0:
            if (TextDecoder === void 0)
              throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
            r = new TextDecoder("utf-8"), n = (P = t.headers) === null || P === void 0 ? void 0 : P.get("content-type"), i = "boundary=", a = n?.includes(i) ? n?.substring(n?.indexOf(i) + i.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", o = `\r
--`.concat(a), s = "", c = qu(t), u = !0, V.label = 1;
          case 1:
            return u ? [4, c.next()] : [3, 3];
          case 2:
            for (l = V.sent(), f = l.value, h = l.done, d = typeof f == "string" ? f : r.decode(f), y = s.length - o.length + 1, u = !h, s += d, m = s.indexOf(o, y); m > -1; ) {
              if (g = void 0, N = [
                s.slice(0, m),
                s.slice(m + o.length)
              ], g = N[0], s = N[1], v = g.indexOf(`\r
\r
`), b = Wu(g.slice(0, v)), E = b["content-type"], E && E.toLowerCase().indexOf("application/json") === -1)
                throw new Error("Unsupported patch content type: application/json is required.");
              if (O = g.slice(v), O) {
                if (w = Ea(t, O), Object.keys(w).length > 1 || "data" in w || "incremental" in w || "errors" in w || "payload" in w)
                  if (wu(w)) {
                    if (D = {}, "payload" in w) {
                      if (Object.keys(w).length === 1 && w.payload === null)
                        return [
                          2
                          /*return*/
                        ];
                      D = p({}, w.payload);
                    }
                    "errors" in w && (D = p(p({}, D), { extensions: p(p({}, "extensions" in D ? D.extensions : null), (R = {}, R[sn] = w.errors, R)) })), e(D);
                  } else
                    e(w);
                else if (
                  // If the chunk contains only a "hasNext: false", we can call
                  // observer.complete() immediately.
                  Object.keys(w).length === 1 && "hasNext" in w && !w.hasNext
                )
                  return [
                    2
                    /*return*/
                  ];
              }
              m = s.indexOf(o);
            }
            return [3, 1];
          case 3:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }
  function Wu(t) {
    var e = {};
    return t.split(`
`).forEach(function(r) {
      var n = r.indexOf(":");
      if (n > -1) {
        var i = r.slice(0, n).trim().toLowerCase(), a = r.slice(n + 1).trim();
        e[i] = a;
      }
    }), e;
  }
  function Ea(t, e) {
    if (t.status >= 300) {
      var r = function() {
        try {
          return JSON.parse(e);
        } catch {
          return e;
        }
      };
      ba(t, r(), "Response not successful: Received status code ".concat(t.status));
    }
    try {
      return JSON.parse(e);
    } catch (i) {
      var n = i;
      throw n.name = "ServerParseError", n.response = t, n.statusCode = t.status, n.bodyText = e, n;
    }
  }
  function Gu(t, e) {
    t.result && t.result.errors && t.result.data && e.next(t.result), e.error(t);
  }
  function $u(t) {
    return function(e) {
      return e.text().then(function(r) {
        return Ea(e, r);
      }).then(function(r) {
        return !Array.isArray(r) && !$n.call(r, "data") && !$n.call(r, "errors") && ba(e, r, "Server response was missing for query '".concat(Array.isArray(t) ? t.map(function(n) {
          return n.operationName;
        }) : t.operationName, "'.")), r;
      });
    };
  }
  var Rr = function(t, e) {
    var r;
    try {
      r = JSON.stringify(t);
    } catch (i) {
      var n = H(54, e, i.message);
      throw n.parseError = i, n;
    }
    return r;
  }, Yu = {
    includeQuery: !0,
    includeExtensions: !1,
    preserveHeaderCase: !1
  }, Hu = {
    // headers are case insensitive (https://stackoverflow.com/a/5259004)
    accept: "*/*",
    // The content-type header describes the type of the body of the request, and
    // so it typically only is sent with requests that actually have bodies. One
    // could imagine that Apollo Client would remove this header when constructing
    // a GET request (which has no body), but we historically have not done that.
    // This means that browsers will preflight all Apollo Client requests (even
    // GET requests). Apollo Server's CSRF prevention feature (introduced in
    // AS3.7) takes advantage of this fact and does not block requests with this
    // header. If you want to drop this header from GET requests, then you should
    // probably replace it with a `apollo-require-preflight` header, or servers
    // with CSRF prevention enabled might block your GET request. See
    // https://www.apollographql.com/docs/apollo-server/security/cors/#preventing-cross-site-request-forgery-csrf
    // for more details.
    "content-type": "application/json"
  }, Ju = {
    method: "POST"
  }, Ku = {
    http: Yu,
    headers: Hu,
    options: Ju
  }, Xu = function(t, e) {
    return e(t);
  };
  function Zu(t, e) {
    for (var r = [], n = 2; n < arguments.length; n++)
      r[n - 2] = arguments[n];
    var i = {}, a = {};
    r.forEach(function(f) {
      i = p(p(p({}, i), f.options), { headers: p(p({}, i.headers), f.headers) }), f.credentials && (i.credentials = f.credentials), a = p(p({}, a), f.http);
    }), i.headers && (i.headers = ec(i.headers, a.preserveHeaderCase));
    var o = t.operationName, s = t.extensions, c = t.variables, u = t.query, l = { operationName: o, variables: c };
    return a.includeExtensions && (l.extensions = s), a.includeQuery && (l.query = e(u, Se)), {
      options: i,
      body: l
    };
  }
  function ec(t, e) {
    if (!e) {
      var r = {};
      return Object.keys(Object(t)).forEach(function(a) {
        r[a.toLowerCase()] = t[a];
      }), r;
    }
    var n = {};
    Object.keys(Object(t)).forEach(function(a) {
      n[a.toLowerCase()] = {
        originalName: a,
        value: t[a]
      };
    });
    var i = {};
    return Object.keys(n).forEach(function(a) {
      i[n[a].originalName] = n[a].value;
    }), i;
  }
  var tc = function(t) {
    if (!t && typeof fetch > "u")
      throw H(51);
  }, rc = function(t, e) {
    var r = t.getContext(), n = r.uri;
    return n || (typeof e == "function" ? e(t) : e || "/graphql");
  };
  function nc(t, e) {
    var r = [], n = function(f, h) {
      r.push("".concat(f, "=").concat(encodeURIComponent(h)));
    };
    if ("query" in e && n("query", e.query), e.operationName && n("operationName", e.operationName), e.variables) {
      var i = void 0;
      try {
        i = Rr(e.variables, "Variables map");
      } catch (f) {
        return { parseError: f };
      }
      n("variables", i);
    }
    if (e.extensions) {
      var a = void 0;
      try {
        a = Rr(e.extensions, "Extensions map");
      } catch (f) {
        return { parseError: f };
      }
      n("extensions", a);
    }
    var o = "", s = t, c = t.indexOf("#");
    c !== -1 && (o = t.substr(c), s = t.substr(0, c));
    var u = s.indexOf("?") === -1 ? "?" : "&", l = s + u + r.join("&") + o;
    return { newURI: l };
  }
  var Yn = te(function() {
    return fetch;
  }), ic = function(t) {
    t === void 0 && (t = {});
    var e = t.uri, r = e === void 0 ? "/graphql" : e, n = t.fetch, i = t.print, a = i === void 0 ? Xu : i, o = t.includeExtensions, s = t.preserveHeaderCase, c = t.useGETForQueries, u = t.includeUnusedVariables, l = u === void 0 ? !1 : u, f = re(t, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
    globalThis.__DEV__ !== !1 && tc(n || Yn);
    var h = {
      http: { includeExtensions: o, preserveHeaderCase: s },
      options: f.fetchOptions,
      credentials: f.credentials,
      headers: f.headers
    };
    return new bt(function(d) {
      var y = rc(d, r), m = d.getContext(), g = {};
      if (m.clientAwareness) {
        var v = m.clientAwareness, b = v.name, E = v.version;
        b && (g["apollographql-client-name"] = b), E && (g["apollographql-client-version"] = E);
      }
      var O = p(p({}, g), m.headers), w = {
        http: m.http,
        options: m.fetchOptions,
        credentials: m.credentials,
        headers: O
      };
      if (dt(["client"], d.query)) {
        globalThis.__DEV__ !== !1 && globalThis.__DEV__ !== !1 && T.warn(52);
        var D = ha(d.query);
        if (!D)
          return or(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
        d.query = D;
      }
      var N = Zu(d, a, Ku, h, w), R = N.options, P = N.body;
      P.variables && !l && (P.variables = xu(P.variables, d.query));
      var V;
      !R.signal && typeof AbortController < "u" && (V = new AbortController(), R.signal = V.signal);
      var fe = function(K) {
        return K.kind === "OperationDefinition" && K.operation === "mutation";
      }, Z = function(K) {
        return K.kind === "OperationDefinition" && K.operation === "subscription";
      }, U = Z(gt(d.query)), J = dt(["defer"], d.query);
      if (c && !d.query.definitions.some(fe) && (R.method = "GET"), J || U) {
        R.headers = R.headers || {};
        var Ht = "multipart/mixed;";
        U && J && globalThis.__DEV__ !== !1 && T.warn(53), U ? Ht += "boundary=graphql;subscriptionSpec=1.0,application/json" : J && (Ht += "deferSpec=20220824,application/json"), R.headers.accept = Ht;
      }
      if (R.method === "GET") {
        var yn = nc(y, P), no = yn.newURI, mn = yn.parseError;
        if (mn)
          return or(mn);
        y = no;
      } else
        try {
          R.body = Rr(P, "Payload");
        } catch (K) {
          return or(K);
        }
      return new M(function(K) {
        var io = n || te(function() {
          return fetch;
        }) || Yn, gn = K.next.bind(K);
        return io(y, R).then(function(Re) {
          var Jt;
          d.setContext({ response: Re });
          var bn = (Jt = Re.headers) === null || Jt === void 0 ? void 0 : Jt.get("content-type");
          return bn !== null && /^multipart\/mixed/i.test(bn) ? zu(Re, gn) : $u(d)(Re).then(gn);
        }).then(function() {
          V = void 0, K.complete();
        }).catch(function(Re) {
          V = void 0, Gu(Re, K);
        }), function() {
          V && V.abort();
        };
      });
    });
  }, Oa = (
    /** @class */
    (function(t) {
      oe(e, t);
      function e(r) {
        r === void 0 && (r = {});
        var n = t.call(this, ic(r).request) || this;
        return n.options = r, n;
      }
      return e;
    })(bt)
  );
  const { toString: Hn, hasOwnProperty: ac } = Object.prototype, Jn = Function.prototype.toString, Cr = /* @__PURE__ */ new Map();
  function F(t, e) {
    try {
      return Ar(t, e);
    } finally {
      Cr.clear();
    }
  }
  function Ar(t, e) {
    if (t === e)
      return !0;
    const r = Hn.call(t), n = Hn.call(e);
    if (r !== n)
      return !1;
    switch (r) {
      case "[object Array]":
        if (t.length !== e.length)
          return !1;
      // Fall through to object case...
      case "[object Object]": {
        if (Xn(t, e))
          return !0;
        const i = Kn(t), a = Kn(e), o = i.length;
        if (o !== a.length)
          return !1;
        for (let s = 0; s < o; ++s)
          if (!ac.call(e, i[s]))
            return !1;
        for (let s = 0; s < o; ++s) {
          const c = i[s];
          if (!Ar(t[c], e[c]))
            return !1;
        }
        return !0;
      }
      case "[object Error]":
        return t.name === e.name && t.message === e.message;
      case "[object Number]":
        if (t !== t)
          return e !== e;
      // Fall through to shared +a === +b case...
      case "[object Boolean]":
      case "[object Date]":
        return +t == +e;
      case "[object RegExp]":
      case "[object String]":
        return t == `${e}`;
      case "[object Map]":
      case "[object Set]": {
        if (t.size !== e.size)
          return !1;
        if (Xn(t, e))
          return !0;
        const i = t.entries(), a = r === "[object Map]";
        for (; ; ) {
          const o = i.next();
          if (o.done)
            break;
          const [s, c] = o.value;
          if (!e.has(s) || a && !Ar(c, e.get(s)))
            return !1;
        }
        return !0;
      }
      case "[object Uint16Array]":
      case "[object Uint8Array]":
      // Buffer, in Node.js.
      case "[object Uint32Array]":
      case "[object Int32Array]":
      case "[object Int8Array]":
      case "[object Int16Array]":
      case "[object ArrayBuffer]":
        t = new Uint8Array(t), e = new Uint8Array(e);
      // Fall through...
      case "[object DataView]": {
        let i = t.byteLength;
        if (i === e.byteLength)
          for (; i-- && t[i] === e[i]; )
            ;
        return i === -1;
      }
      case "[object AsyncFunction]":
      case "[object GeneratorFunction]":
      case "[object AsyncGeneratorFunction]":
      case "[object Function]": {
        const i = Jn.call(t);
        return i !== Jn.call(e) ? !1 : !uc(i, sc);
      }
    }
    return !1;
  }
  function Kn(t) {
    return Object.keys(t).filter(oc, t);
  }
  function oc(t) {
    return this[t] !== void 0;
  }
  const sc = "{ [native code] }";
  function uc(t, e) {
    const r = t.length - e.length;
    return r >= 0 && t.indexOf(e, r) === r;
  }
  function Xn(t, e) {
    let r = Cr.get(t);
    if (r) {
      if (r.has(e))
        return !0;
    } else
      Cr.set(t, r = /* @__PURE__ */ new Set());
    return r.add(e), !1;
  }
  function Ta(t, e, r, n) {
    var i = e.data, a = re(e, ["data"]), o = r.data, s = re(r, ["data"]);
    return F(a, s) && Nt(gt(t).selectionSet, i, o, {
      fragmentMap: $e(He(t)),
      variables: n
    });
  }
  function Nt(t, e, r, n) {
    if (e === r)
      return !0;
    var i = /* @__PURE__ */ new Set();
    return t.selections.every(function(a) {
      if (i.has(a) || (i.add(a), !mt(a, n.variables)) || Zn(a))
        return !0;
      if (be(a)) {
        var o = ce(a), s = e && e[o], c = r && r[o], u = a.selectionSet;
        if (!u)
          return F(s, c);
        var l = Array.isArray(s), f = Array.isArray(c);
        if (l !== f)
          return !1;
        if (l && f) {
          var h = s.length;
          if (c.length !== h)
            return !1;
          for (var d = 0; d < h; ++d)
            if (!Nt(u, s[d], c[d], n))
              return !1;
          return !0;
        }
        return Nt(u, s, c, n);
      } else {
        var y = zt(a, n.fragmentMap);
        if (y)
          return Zn(y) ? !0 : Nt(
            y.selectionSet,
            // Notice that we reuse the same aResult and bResult values here,
            // since the fragment ...spread does not specify a field name, but
            // consists of multiple fields (within the fragment's selection set)
            // that should be applied to the current result value(s).
            e,
            r,
            n
          );
      }
    });
  }
  function Zn(t) {
    return !!t.directives && t.directives.some(cc);
  }
  function cc(t) {
    return t.name.value === "nonreactive";
  }
  var wa = Ne ? WeakMap : Map, Sa = $r ? WeakSet : Set, un = new Je(), ei = !1;
  function ka() {
    ei || (ei = !0, globalThis.__DEV__ !== !1 && T.warn(64));
  }
  function Da(t, e, r) {
    return un.withValue(!0, function() {
      var n = ot(t, e, r, !1);
      return Object.isFrozen(t) && We(n), n;
    });
  }
  function lc(t, e) {
    if (e.has(t))
      return e.get(t);
    var r = Array.isArray(t) ? [] : /* @__PURE__ */ Object.create(null);
    return e.set(t, r), r;
  }
  function ot(t, e, r, n, i) {
    var a, o = r.knownChanged, s = lc(t, r.mutableTargets);
    if (Array.isArray(t)) {
      for (var c = 0, u = Array.from(t.entries()); c < u.length; c++) {
        var l = u[c], f = l[0], h = l[1];
        if (h === null) {
          s[f] = null;
          continue;
        }
        var d = ot(h, e, r, n, globalThis.__DEV__ !== !1 ? "".concat(i || "", "[").concat(f, "]") : void 0);
        o.has(d) && o.add(s), s[f] = d;
      }
      return o.has(s) ? s : t;
    }
    for (var y = 0, m = e.selections; y < m.length; y++) {
      var g = m[y], v = void 0;
      if (n && o.add(s), g.kind === S.FIELD) {
        var b = ce(g), E = g.selectionSet;
        if (v = s[b] || t[b], v === void 0)
          continue;
        if (E && v !== null) {
          var d = ot(t[b], E, r, n, globalThis.__DEV__ !== !1 ? "".concat(i || "", ".").concat(b) : void 0);
          o.has(d) && (v = d);
        }
        globalThis.__DEV__ === !1 && (s[b] = v), globalThis.__DEV__ !== !1 && (n && b !== "__typename" && // either the field is not present in the memo object
        // or it has a `get` descriptor, not a `value` descriptor
        // => it is a warning accessor and we can overwrite it
        // with another accessor
        !(!((a = Object.getOwnPropertyDescriptor(s, b)) === null || a === void 0) && a.value) ? Object.defineProperty(s, b, fc(b, v, i || "", r.operationName, r.operationType)) : (delete s[b], s[b] = v));
      }
      if (g.kind === S.INLINE_FRAGMENT && (!g.typeCondition || r.cache.fragmentMatches(g, t.__typename)) && (v = ot(t, g.selectionSet, r, n, i)), g.kind === S.FRAGMENT_SPREAD) {
        var O = g.name.value, w = r.fragmentMap[O] || (r.fragmentMap[O] = r.cache.lookupFragment(O));
        T(w, 59, O);
        var D = os(g);
        D !== "mask" && (v = ot(t, w.selectionSet, r, D === "migrate", i));
      }
      o.has(v) && o.add(s);
    }
    return "__typename" in t && !("__typename" in s) && (s.__typename = t.__typename), Object.keys(s).length !== Object.keys(t).length && o.add(s), o.has(s) ? s : t;
  }
  function fc(t, e, r, n, i) {
    var a = function() {
      return un.getValue() || (globalThis.__DEV__ !== !1 && T.warn(60, n ? "".concat(i, " '").concat(n, "'") : "anonymous ".concat(i), "".concat(r, ".").concat(t).replace(/^\./, "")), a = function() {
        return e;
      }), e;
    };
    return {
      get: function() {
        return a();
      },
      set: function(o) {
        a = function() {
          return o;
        };
      },
      enumerable: !0,
      configurable: !0
    };
  }
  function xa(t, e, r, n) {
    if (!r.fragmentMatches)
      return globalThis.__DEV__ !== !1 && ka(), t;
    var i = e.definitions.filter(function(o) {
      return o.kind === S.FRAGMENT_DEFINITION;
    });
    typeof n > "u" && (T(i.length === 1, 61, i.length), n = i[0].name.value);
    var a = i.find(function(o) {
      return o.name.value === n;
    });
    return T(!!a, 62, n), t == null || F(t, {}) ? t : Da(t, a.selectionSet, {
      operationType: "fragment",
      operationName: a.name.value,
      fragmentMap: $e(He(e)),
      cache: r,
      mutableTargets: new wa(),
      knownChanged: new Sa()
    });
  }
  function hc(t, e, r) {
    var n;
    if (!r.fragmentMatches)
      return globalThis.__DEV__ !== !1 && ka(), t;
    var i = xe(e);
    return T(i, 63), t == null ? t : Da(t, i.selectionSet, {
      operationType: i.operation,
      operationName: (n = i.name) === null || n === void 0 ? void 0 : n.value,
      fragmentMap: $e(He(e)),
      cache: r,
      mutableTargets: new wa(),
      knownChanged: new Sa()
    });
  }
  var Ia = (
    /** @class */
    (function() {
      function t() {
        this.assumeImmutableResults = !1, this.getFragmentDoc = vt(ps, {
          max: ie["cache.fragmentQueryDocuments"] || 1e3,
          cache: Pt
        });
      }
      return t.prototype.lookupFragment = function(e) {
        return null;
      }, t.prototype.batch = function(e) {
        var r = this, n = typeof e.optimistic == "string" ? e.optimistic : e.optimistic === !1 ? null : void 0, i;
        return this.performTransaction(function() {
          return i = e.update(r);
        }, n), i;
      }, t.prototype.recordOptimisticTransaction = function(e, r) {
        this.performTransaction(e, r);
      }, t.prototype.transformDocument = function(e) {
        return e;
      }, t.prototype.transformForLink = function(e) {
        return e;
      }, t.prototype.identify = function(e) {
      }, t.prototype.gc = function() {
        return [];
      }, t.prototype.modify = function(e) {
        return !1;
      }, t.prototype.readQuery = function(e, r) {
        var n = this;
        return r === void 0 && (r = !!e.optimistic), globalThis.__DEV__ !== !1 && Q(e, "canonizeResults", "cache.readQuery"), G("canonizeResults", function() {
          return n.read(p(p({}, e), { rootId: e.id || "ROOT_QUERY", optimistic: r }));
        });
      }, t.prototype.watchFragment = function(e) {
        var r = this, n = e.fragment, i = e.fragmentName, a = e.from, o = e.optimistic, s = o === void 0 ? !0 : o, c = re(e, ["fragment", "fragmentName", "from", "optimistic"]), u = this.getFragmentDoc(n, i), l = typeof a > "u" || typeof a == "string" ? a : this.identify(a), f = !!e[/* @__PURE__ */ Symbol.for("apollo.dataMasking")];
        if (globalThis.__DEV__ !== !1) {
          var h = i || Ki(n).name.value;
          l || globalThis.__DEV__ !== !1 && T.warn(1, h);
        }
        var d = p(p({}, c), { returnPartialData: !0, id: l, query: u, optimistic: s }), y;
        return new M(function(m) {
          return r.watch(p(p({}, d), { immediate: !0, callback: function(g) {
            var v = f ? xa(g.result, n, r, i) : g.result;
            if (
              // Always ensure we deliver the first result
              !(y && Ta(
                u,
                { data: y.result },
                { data: v },
                // TODO: Fix the type on WatchFragmentOptions so that TVars
                // extends OperationVariables
                e.variables
              ))
            ) {
              var b = {
                data: v,
                complete: !!g.complete
              };
              g.missing && (b.missing = Yt(g.missing.map(function(E) {
                return E.missing;
              }))), y = p(p({}, g), { result: v }), m.next(b);
            }
          } }));
        });
      }, t.prototype.readFragment = function(e, r) {
        var n = this;
        return r === void 0 && (r = !!e.optimistic), globalThis.__DEV__ !== !1 && Q(e, "canonizeResults", "cache.readFragment"), G("canonizeResults", function() {
          return n.read(p(p({}, e), { query: n.getFragmentDoc(e.fragment, e.fragmentName), rootId: e.id, optimistic: r }));
        });
      }, t.prototype.writeQuery = function(e) {
        var r = e.id, n = e.data, i = re(e, ["id", "data"]);
        return this.write(Object.assign(i, {
          dataId: r || "ROOT_QUERY",
          result: n
        }));
      }, t.prototype.writeFragment = function(e) {
        var r = e.id, n = e.data, i = e.fragment, a = e.fragmentName, o = re(e, ["id", "data", "fragment", "fragmentName"]);
        return this.write(Object.assign(o, {
          query: this.getFragmentDoc(i, a),
          dataId: r,
          result: n
        }));
      }, t.prototype.updateQuery = function(e, r) {
        return globalThis.__DEV__ !== !1 && Q(e, "canonizeResults", "cache.updateQuery"), this.batch({
          update: function(n) {
            var i = G("canonizeResults", function() {
              return n.readQuery(e);
            }), a = r(i);
            return a == null ? i : (n.writeQuery(p(p({}, e), { data: a })), a);
          }
        });
      }, t.prototype.updateFragment = function(e, r) {
        return globalThis.__DEV__ !== !1 && Q(e, "canonizeResults", "cache.updateFragment"), this.batch({
          update: function(n) {
            var i = G("canonizeResults", function() {
              return n.readFragment(e);
            }), a = r(i);
            return a == null ? i : (n.writeFragment(p(p({}, e), { data: a })), a);
          }
        });
      }, t;
    })()
  );
  globalThis.__DEV__ !== !1 && (Ia.prototype.getMemoryInternals = ks);
  var Na = (
    /** @class */
    (function(t) {
      oe(e, t);
      function e(r, n, i, a) {
        var o, s = t.call(this, r) || this;
        if (s.message = r, s.path = n, s.query = i, s.variables = a, Array.isArray(s.path)) {
          s.missing = s.message;
          for (var c = s.path.length - 1; c >= 0; --c)
            s.missing = (o = {}, o[s.path[c]] = s.missing, o);
        } else
          s.missing = s.path;
        return s.__proto__ = e.prototype, s;
      }
      return e;
    })(Error)
  ), W = Object.prototype.hasOwnProperty;
  function tt(t) {
    return t == null;
  }
  function Ra(t, e) {
    var r = t.__typename, n = t.id, i = t._id;
    if (typeof r == "string" && (e && (e.keyObject = tt(n) ? tt(i) ? void 0 : { _id: i } : { id: n }), tt(n) && !tt(i) && (n = i), !tt(n)))
      return "".concat(r, ":").concat(typeof n == "number" || typeof n == "string" ? n : JSON.stringify(n));
  }
  var Ca = {
    dataIdFromObject: Ra,
    addTypename: !0,
    resultCaching: !0,
    // Thanks to the shouldCanonizeResults helper, this should be the only line
    // you have to change to reenable canonization by default in the future.
    canonizeResults: !1
  };
  function dc(t) {
    return Ie(Ca, t);
  }
  function Aa(t) {
    var e = t.canonizeResults;
    return e === void 0 ? Ca.canonizeResults : e;
  }
  function pc(t, e) {
    return A(e) ? t.get(e.__ref, "__typename") : e && e.__typename;
  }
  var Fa = /^[_a-z][_0-9a-z]*/i;
  function Oe(t) {
    var e = t.match(Fa);
    return e ? e[0] : t;
  }
  function Fr(t, e, r) {
    return L(e) ? j(e) ? e.every(function(n) {
      return Fr(t, n, r);
    }) : t.selections.every(function(n) {
      if (be(n) && mt(n, r)) {
        var i = ce(n);
        return W.call(e, i) && (!n.selectionSet || Fr(n.selectionSet, e[i], r));
      }
      return !0;
    }) : !1;
  }
  function Me(t) {
    return L(t) && !A(t) && !j(t);
  }
  function vc() {
    return new Ee();
  }
  function Pa(t, e) {
    var r = $e(He(t));
    return {
      fragmentMap: r,
      lookupFragment: function(n) {
        var i = r[n];
        return !i && e && (i = e.lookup(n)), i || null;
      }
    };
  }
  var Rt = /* @__PURE__ */ Object.create(null), sr = function() {
    return Rt;
  }, ti = /* @__PURE__ */ Object.create(null), yt = (
    /** @class */
    (function() {
      function t(e, r) {
        var n = this;
        this.policies = e, this.group = r, this.data = /* @__PURE__ */ Object.create(null), this.rootIds = /* @__PURE__ */ Object.create(null), this.refs = /* @__PURE__ */ Object.create(null), this.getFieldValue = function(i, a) {
          return We(A(i) ? n.get(i.__ref, a) : i && i[a]);
        }, this.canRead = function(i) {
          return A(i) ? n.has(i.__ref) : typeof i == "object";
        }, this.toReference = function(i, a) {
          if (typeof i == "string")
            return Ve(i);
          if (A(i))
            return i;
          var o = n.policies.identify(i)[0];
          if (o) {
            var s = Ve(o);
            return a && n.merge(o, i), s;
          }
        };
      }
      return t.prototype.toObject = function() {
        return p({}, this.data);
      }, t.prototype.has = function(e) {
        return this.lookup(e, !0) !== void 0;
      }, t.prototype.get = function(e, r) {
        if (this.group.depend(e, r), W.call(this.data, e)) {
          var n = this.data[e];
          if (n && W.call(n, r))
            return n[r];
        }
        if (r === "__typename" && W.call(this.policies.rootTypenamesById, e))
          return this.policies.rootTypenamesById[e];
        if (this instanceof he)
          return this.parent.get(e, r);
      }, t.prototype.lookup = function(e, r) {
        if (r && this.group.depend(e, "__exists"), W.call(this.data, e))
          return this.data[e];
        if (this instanceof he)
          return this.parent.lookup(e, r);
        if (this.policies.rootTypenamesById[e])
          return /* @__PURE__ */ Object.create(null);
      }, t.prototype.merge = function(e, r) {
        var n = this, i;
        A(e) && (e = e.__ref), A(r) && (r = r.__ref);
        var a = typeof e == "string" ? this.lookup(i = e) : e, o = typeof r == "string" ? this.lookup(i = r) : r;
        if (o) {
          T(typeof i == "string", 2);
          var s = new Ee(mc).merge(a, o);
          if (this.data[i] = s, s !== a && (delete this.refs[i], this.group.caching)) {
            var c = /* @__PURE__ */ Object.create(null);
            a || (c.__exists = 1), Object.keys(o).forEach(function(u) {
              if (!a || a[u] !== s[u]) {
                c[u] = 1;
                var l = Oe(u);
                l !== u && !n.policies.hasKeyArgs(s.__typename, l) && (c[l] = 1), s[u] === void 0 && !(n instanceof he) && delete s[u];
              }
            }), c.__typename && !(a && a.__typename) && // Since we return default root __typename strings
            // automatically from store.get, we don't need to dirty the
            // ROOT_QUERY.__typename field if merged.__typename is equal
            // to the default string (usually "Query").
            this.policies.rootTypenamesById[i] === s.__typename && delete c.__typename, Object.keys(c).forEach(function(u) {
              return n.group.dirty(i, u);
            });
          }
        }
      }, t.prototype.modify = function(e, r) {
        var n = this, i = this.lookup(e);
        if (i) {
          var a = /* @__PURE__ */ Object.create(null), o = !1, s = !0, c = {
            DELETE: Rt,
            INVALIDATE: ti,
            isReference: A,
            toReference: this.toReference,
            canRead: this.canRead,
            readField: function(u, l) {
              return n.policies.readField(typeof u == "string" ? {
                fieldName: u,
                from: l || Ve(e)
              } : u, { store: n });
            }
          };
          if (Object.keys(i).forEach(function(u) {
            var l = Oe(u), f = i[u];
            if (f !== void 0) {
              var h = typeof r == "function" ? r : r[u] || r[l];
              if (h) {
                var d = h === sr ? Rt : h(We(f), p(p({}, c), { fieldName: l, storeFieldName: u, storage: n.getStorage(e, u) }));
                if (d === ti)
                  n.group.dirty(e, u);
                else if (d === Rt && (d = void 0), d !== f && (a[u] = d, o = !0, f = d, globalThis.__DEV__ !== !1)) {
                  var y = function(w) {
                    if (n.lookup(w.__ref) === void 0)
                      return globalThis.__DEV__ !== !1 && T.warn(3, w), !0;
                  };
                  if (A(d))
                    y(d);
                  else if (Array.isArray(d))
                    for (var m = !1, g = void 0, v = 0, b = d; v < b.length; v++) {
                      var E = b[v];
                      if (A(E)) {
                        if (m = !0, y(E))
                          break;
                      } else if (typeof E == "object" && E) {
                        var O = n.policies.identify(E)[0];
                        O && (g = E);
                      }
                      if (m && g !== void 0) {
                        globalThis.__DEV__ !== !1 && T.warn(4, g);
                        break;
                      }
                    }
                }
              }
              f !== void 0 && (s = !1);
            }
          }), o)
            return this.merge(e, a), s && (this instanceof he ? this.data[e] = void 0 : delete this.data[e], this.group.dirty(e, "__exists")), !0;
        }
        return !1;
      }, t.prototype.delete = function(e, r, n) {
        var i, a = this.lookup(e);
        if (a) {
          var o = this.getFieldValue(a, "__typename"), s = r && n ? this.policies.getStoreFieldName({ typename: o, fieldName: r, args: n }) : r;
          return this.modify(e, s ? (i = {}, i[s] = sr, i) : sr);
        }
        return !1;
      }, t.prototype.evict = function(e, r) {
        var n = !1;
        return e.id && (W.call(this.data, e.id) && (n = this.delete(e.id, e.fieldName, e.args)), this instanceof he && this !== r && (n = this.parent.evict(e, r) || n), (e.fieldName || n) && this.group.dirty(e.id, e.fieldName || "__exists")), n;
      }, t.prototype.clear = function() {
        this.replace(null);
      }, t.prototype.extract = function() {
        var e = this, r = this.toObject(), n = [];
        return this.getRootIdSet().forEach(function(i) {
          W.call(e.policies.rootTypenamesById, i) || n.push(i);
        }), n.length && (r.__META = { extraRootIds: n.sort() }), r;
      }, t.prototype.replace = function(e) {
        var r = this;
        if (Object.keys(this.data).forEach(function(a) {
          e && W.call(e, a) || r.delete(a);
        }), e) {
          var n = e.__META, i = re(e, ["__META"]);
          Object.keys(i).forEach(function(a) {
            r.merge(a, i[a]);
          }), n && n.extraRootIds.forEach(this.retain, this);
        }
      }, t.prototype.retain = function(e) {
        return this.rootIds[e] = (this.rootIds[e] || 0) + 1;
      }, t.prototype.release = function(e) {
        if (this.rootIds[e] > 0) {
          var r = --this.rootIds[e];
          return r || delete this.rootIds[e], r;
        }
        return 0;
      }, t.prototype.getRootIdSet = function(e) {
        return e === void 0 && (e = /* @__PURE__ */ new Set()), Object.keys(this.rootIds).forEach(e.add, e), this instanceof he ? this.parent.getRootIdSet(e) : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e), e;
      }, t.prototype.gc = function() {
        var e = this, r = this.getRootIdSet(), n = this.toObject();
        r.forEach(function(o) {
          W.call(n, o) && (Object.keys(e.findChildRefIds(o)).forEach(r.add, r), delete n[o]);
        });
        var i = Object.keys(n);
        if (i.length) {
          for (var a = this; a instanceof he; )
            a = a.parent;
          i.forEach(function(o) {
            return a.delete(o);
          });
        }
        return i;
      }, t.prototype.findChildRefIds = function(e) {
        if (!W.call(this.refs, e)) {
          var r = this.refs[e] = /* @__PURE__ */ Object.create(null), n = this.data[e];
          if (!n)
            return r;
          var i = /* @__PURE__ */ new Set([n]);
          i.forEach(function(a) {
            A(a) && (r[a.__ref] = !0), L(a) && Object.keys(a).forEach(function(o) {
              var s = a[o];
              L(s) && i.add(s);
            });
          });
        }
        return this.refs[e];
      }, t.prototype.makeCacheKey = function() {
        return this.group.keyMaker.lookupArray(arguments);
      }, t;
    })()
  ), Ma = (
    /** @class */
    (function() {
      function t(e, r) {
        r === void 0 && (r = null), this.caching = e, this.parent = r, this.d = null, this.resetCaching();
      }
      return t.prototype.resetCaching = function() {
        this.d = this.caching ? ua() : null, this.keyMaker = new le(Ne);
      }, t.prototype.depend = function(e, r) {
        if (this.d) {
          this.d(ur(e, r));
          var n = Oe(r);
          n !== r && this.d(ur(e, n)), this.parent && this.parent.depend(e, r);
        }
      }, t.prototype.dirty = function(e, r) {
        this.d && this.d.dirty(
          ur(e, r),
          // When storeFieldName === "__exists", that means the entity identified
          // by dataId has either disappeared from the cache or was newly added,
          // so the result caching system would do well to "forget everything it
          // knows" about that object. To achieve that kind of invalidation, we
          // not only dirty the associated result cache entry, but also remove it
          // completely from the dependency graph. For the optimism implementation
          // details, see https://github.com/benjamn/optimism/pull/195.
          r === "__exists" ? "forget" : "setDirty"
        );
      }, t;
    })()
  );
  function ur(t, e) {
    return e + "#" + t;
  }
  function ri(t, e) {
    ct(t) && t.group.depend(e, "__exists");
  }
  (function(t) {
    var e = (
      /** @class */
      (function(r) {
        oe(n, r);
        function n(i) {
          var a = i.policies, o = i.resultCaching, s = o === void 0 ? !0 : o, c = i.seed, u = r.call(this, a, new Ma(s)) || this;
          return u.stump = new yc(u), u.storageTrie = new le(Ne), c && u.replace(c), u;
        }
        return n.prototype.addLayer = function(i, a) {
          return this.stump.addLayer(i, a);
        }, n.prototype.removeLayer = function() {
          return this;
        }, n.prototype.getStorage = function() {
          return this.storageTrie.lookupArray(arguments);
        }, n;
      })(t)
    );
    t.Root = e;
  })(yt || (yt = {}));
  var he = (
    /** @class */
    (function(t) {
      oe(e, t);
      function e(r, n, i, a) {
        var o = t.call(this, n.policies, a) || this;
        return o.id = r, o.parent = n, o.replay = i, o.group = a, i(o), o;
      }
      return e.prototype.addLayer = function(r, n) {
        return new e(r, this, n, this.group);
      }, e.prototype.removeLayer = function(r) {
        var n = this, i = this.parent.removeLayer(r);
        return r === this.id ? (this.group.caching && Object.keys(this.data).forEach(function(a) {
          var o = n.data[a], s = i.lookup(a);
          s ? o ? o !== s && Object.keys(o).forEach(function(c) {
            F(o[c], s[c]) || n.group.dirty(a, c);
          }) : (n.group.dirty(a, "__exists"), Object.keys(s).forEach(function(c) {
            n.group.dirty(a, c);
          })) : n.delete(a);
        }), i) : i === this.parent ? this : i.addLayer(this.id, this.replay);
      }, e.prototype.toObject = function() {
        return p(p({}, this.parent.toObject()), this.data);
      }, e.prototype.findChildRefIds = function(r) {
        var n = this.parent.findChildRefIds(r);
        return W.call(this.data, r) ? p(p({}, n), t.prototype.findChildRefIds.call(this, r)) : n;
      }, e.prototype.getStorage = function() {
        for (var r = this.parent; r.parent; )
          r = r.parent;
        return r.getStorage.apply(
          r,
          // @ts-expect-error
          arguments
        );
      }, e;
    })(yt)
  ), yc = (
    /** @class */
    (function(t) {
      oe(e, t);
      function e(r) {
        return t.call(this, "EntityStore.Stump", r, function() {
        }, new Ma(r.group.caching, r.group)) || this;
      }
      return e.prototype.removeLayer = function() {
        return this;
      }, e.prototype.merge = function(r, n) {
        return this.parent.merge(r, n);
      }, e;
    })(he)
  );
  function mc(t, e, r) {
    var n = t[r], i = e[r];
    return F(n, i) ? n : i;
  }
  function ct(t) {
    return !!(t instanceof yt && t.group.caching);
  }
  function gc(t) {
    return L(t) ? j(t) ? t.slice(0) : p({ __proto__: Object.getPrototypeOf(t) }, t) : t;
  }
  var ni = (
    /** @class */
    (function() {
      function t() {
        this.known = new ($r ? WeakSet : Set)(), this.pool = new le(Ne), this.passes = /* @__PURE__ */ new WeakMap(), this.keysByJSON = /* @__PURE__ */ new Map(), this.empty = this.admit({});
      }
      return t.prototype.isKnown = function(e) {
        return L(e) && this.known.has(e);
      }, t.prototype.pass = function(e) {
        if (L(e)) {
          var r = gc(e);
          return this.passes.set(r, e), r;
        }
        return e;
      }, t.prototype.admit = function(e) {
        var r = this;
        if (L(e)) {
          var n = this.passes.get(e);
          if (n)
            return n;
          var i = Object.getPrototypeOf(e);
          switch (i) {
            case Array.prototype: {
              if (this.known.has(e))
                return e;
              var a = e.map(this.admit, this), o = this.pool.lookupArray(a);
              return o.array || (this.known.add(o.array = a), globalThis.__DEV__ !== !1 && Object.freeze(a)), o.array;
            }
            case null:
            case Object.prototype: {
              if (this.known.has(e))
                return e;
              var s = Object.getPrototypeOf(e), c = [s], u = this.sortedKeys(e);
              c.push(u.json);
              var l = c.length;
              u.sorted.forEach(function(d) {
                c.push(r.admit(e[d]));
              });
              var o = this.pool.lookupArray(c);
              if (!o.object) {
                var f = o.object = Object.create(s);
                this.known.add(f), u.sorted.forEach(function(d, y) {
                  f[d] = c[l + y];
                }), globalThis.__DEV__ !== !1 && Object.freeze(f);
              }
              return o.object;
            }
          }
        }
        return e;
      }, t.prototype.sortedKeys = function(e) {
        var r = Object.keys(e), n = this.pool.lookupArray(r);
        if (!n.keys) {
          r.sort();
          var i = JSON.stringify(r);
          (n.keys = this.keysByJSON.get(i)) || this.keysByJSON.set(i, n.keys = { sorted: r, json: i });
        }
        return n.keys;
      }, t;
    })()
  );
  function ii(t) {
    return [
      t.selectionSet,
      t.objectOrReference,
      t.context,
      // We split out this property so we can pass different values
      // independently without modifying options.context itself.
      t.context.canonizeResults
    ];
  }
  var bc = (
    /** @class */
    (function() {
      function t(e) {
        var r = this;
        this.knownResults = new (Ne ? WeakMap : Map)(), this.config = Ie(e, {
          addTypename: e.addTypename !== !1,
          canonizeResults: Aa(e)
        }), this.canon = e.canon || new ni(), this.executeSelectionSet = vt(function(n) {
          var i, a = n.context.canonizeResults, o = ii(n);
          o[3] = !a;
          var s = (i = r.executeSelectionSet).peek.apply(i, o);
          return s ? a ? p(p({}, s), {
            // If we previously read this result without canonizing it, we can
            // reuse that result simply by canonizing it now.
            result: r.canon.admit(s.result)
          }) : s : (ri(n.context.store, n.enclosingRef.__ref), r.execSelectionSetImpl(n));
        }, {
          max: this.config.resultCacheMaxSize || ie["inMemoryCache.executeSelectionSet"] || 5e4,
          keyArgs: ii,
          // Note that the parameters of makeCacheKey are determined by the
          // array returned by keyArgs.
          makeCacheKey: function(n, i, a, o) {
            if (ct(a.store))
              return a.store.makeCacheKey(n, A(i) ? i.__ref : i, a.varString, o);
          }
        }), this.executeSubSelectedArray = vt(function(n) {
          return ri(n.context.store, n.enclosingRef.__ref), r.execSubSelectedArrayImpl(n);
        }, {
          max: this.config.resultCacheMaxSize || ie["inMemoryCache.executeSubSelectedArray"] || 1e4,
          makeCacheKey: function(n) {
            var i = n.field, a = n.array, o = n.context;
            if (ct(o.store))
              return o.store.makeCacheKey(i, a, o.varString);
          }
        });
      }
      return t.prototype.resetCanon = function() {
        this.canon = new ni();
      }, t.prototype.diffQueryAgainstStore = function(e) {
        var r = e.store, n = e.query, i = e.rootId, a = i === void 0 ? "ROOT_QUERY" : i, o = e.variables, s = e.returnPartialData, c = s === void 0 ? !0 : s, u = e.canonizeResults, l = u === void 0 ? this.config.canonizeResults : u, f = this.config.cache.policies;
        o = p(p({}, Kr(Ji(n))), o);
        var h = Ve(a), d = this.executeSelectionSet({
          selectionSet: gt(n).selectionSet,
          objectOrReference: h,
          enclosingRef: h,
          context: p({ store: r, query: n, policies: f, variables: o, varString: ge(o), canonizeResults: l }, Pa(n, this.config.fragments))
        }), y;
        if (d.missing && (y = [
          new Na(_c(d.missing), d.missing, n, o)
        ], !c))
          throw y[0];
        return {
          result: d.result,
          complete: !y,
          missing: y
        };
      }, t.prototype.isFresh = function(e, r, n, i) {
        if (ct(i.store) && this.knownResults.get(e) === n) {
          var a = this.executeSelectionSet.peek(
            n,
            r,
            i,
            // If result is canonical, then it could only have been previously
            // cached by the canonizing version of executeSelectionSet, so we can
            // avoid checking both possibilities here.
            this.canon.isKnown(e)
          );
          if (a && e === a.result)
            return !0;
        }
        return !1;
      }, t.prototype.execSelectionSetImpl = function(e) {
        var r = this, n = e.selectionSet, i = e.objectOrReference, a = e.enclosingRef, o = e.context;
        if (A(i) && !o.policies.rootTypenamesById[i.__ref] && !o.store.has(i.__ref))
          return {
            result: this.canon.empty,
            missing: "Dangling reference to missing ".concat(i.__ref, " object")
          };
        var s = o.variables, c = o.policies, u = o.store, l = u.getFieldValue(i, "__typename"), f = [], h, d = new Ee();
        this.config.addTypename && typeof l == "string" && !c.rootIdsByTypename[l] && f.push({ __typename: l });
        function y(E, O) {
          var w;
          return E.missing && (h = d.merge(h, (w = {}, w[O] = E.missing, w))), E.result;
        }
        var m = new Set(n.selections);
        m.forEach(function(E) {
          var O, w;
          if (mt(E, s))
            if (be(E)) {
              var D = c.readField({
                fieldName: E.name.value,
                field: E,
                variables: o.variables,
                from: i
              }, o), N = ce(E);
              D === void 0 ? tn.added(E) || (h = d.merge(h, (O = {}, O[N] = "Can't find field '".concat(E.name.value, "' on ").concat(A(i) ? i.__ref + " object" : "object " + JSON.stringify(i, null, 2)), O))) : j(D) ? D.length > 0 && (D = y(r.executeSubSelectedArray({
                field: E,
                array: D,
                enclosingRef: a,
                context: o
              }), N)) : E.selectionSet ? D != null && (D = y(r.executeSelectionSet({
                selectionSet: E.selectionSet,
                objectOrReference: D,
                enclosingRef: A(D) ? D : a,
                context: o
              }), N)) : o.canonizeResults && (D = r.canon.pass(D)), D !== void 0 && f.push((w = {}, w[N] = D, w));
            } else {
              var R = zt(E, o.lookupFragment);
              if (!R && E.kind === S.FRAGMENT_SPREAD)
                throw H(10, E.name.value);
              R && c.fragmentMatches(R, l) && R.selectionSet.selections.forEach(m.add, m);
            }
        });
        var g = Yt(f), v = { result: g, missing: h }, b = o.canonizeResults ? this.canon.admit(v) : We(v);
        return b.result && this.knownResults.set(b.result, n), b;
      }, t.prototype.execSubSelectedArrayImpl = function(e) {
        var r = this, n = e.field, i = e.array, a = e.enclosingRef, o = e.context, s, c = new Ee();
        function u(l, f) {
          var h;
          return l.missing && (s = c.merge(s, (h = {}, h[f] = l.missing, h))), l.result;
        }
        return n.selectionSet && (i = i.filter(o.store.canRead)), i = i.map(function(l, f) {
          return l === null ? null : j(l) ? u(r.executeSubSelectedArray({
            field: n,
            array: l,
            enclosingRef: a,
            context: o
          }), f) : n.selectionSet ? u(r.executeSelectionSet({
            selectionSet: n.selectionSet,
            objectOrReference: l,
            enclosingRef: A(l) ? l : a,
            context: o
          }), f) : (globalThis.__DEV__ !== !1 && Ec(o.store, n, l), l);
        }), {
          result: o.canonizeResults ? this.canon.admit(i) : i,
          missing: s
        };
      }, t;
    })()
  );
  function _c(t) {
    try {
      JSON.stringify(t, function(e, r) {
        if (typeof r == "string")
          throw r;
        return r;
      });
    } catch (e) {
      return e;
    }
  }
  function Ec(t, e, r) {
    if (!e.selectionSet) {
      var n = /* @__PURE__ */ new Set([r]);
      n.forEach(function(i) {
        L(i) && (T(
          !A(i),
          11,
          pc(t, i),
          e.name.value
        ), Object.values(i).forEach(n.add, n));
      });
    }
  }
  var cn = new Je(), ai = /* @__PURE__ */ new WeakMap();
  function lt(t) {
    var e = ai.get(t);
    return e || ai.set(t, e = {
      vars: /* @__PURE__ */ new Set(),
      dep: ua()
    }), e;
  }
  function oi(t) {
    lt(t).vars.forEach(function(e) {
      return e.forgetCache(t);
    });
  }
  function Oc(t) {
    lt(t).vars.forEach(function(e) {
      return e.attachCache(t);
    });
  }
  function Tc(t) {
    var e = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), n = function(a) {
      if (arguments.length > 0) {
        if (t !== a) {
          t = a, e.forEach(function(c) {
            lt(c).dep.dirty(n), wc(c);
          });
          var o = Array.from(r);
          r.clear(), o.forEach(function(c) {
            return c(t);
          });
        }
      } else {
        var s = cn.getValue();
        s && (i(s), lt(s).dep(n));
      }
      return t;
    };
    n.onNextChange = function(a) {
      return r.add(a), function() {
        r.delete(a);
      };
    };
    var i = n.attachCache = function(a) {
      return e.add(a), lt(a).vars.add(n), n;
    };
    return n.forgetCache = function(a) {
      return e.delete(a);
    }, n;
  }
  function wc(t) {
    t.broadcastWatches && t.broadcastWatches();
  }
  var si = /* @__PURE__ */ Object.create(null);
  function ln(t) {
    var e = JSON.stringify(t);
    return si[e] || (si[e] = /* @__PURE__ */ Object.create(null));
  }
  function ui(t) {
    var e = ln(t);
    return e.keyFieldsFn || (e.keyFieldsFn = function(r, n) {
      var i = function(o, s) {
        return n.readField(s, o);
      }, a = n.keyObject = fn(t, function(o) {
        var s = qe(
          n.storeObject,
          o,
          // Using context.readField to extract paths from context.storeObject
          // allows the extraction to see through Reference objects and respect
          // custom read functions.
          i
        );
        return s === void 0 && r !== n.storeObject && W.call(r, o[0]) && (s = qe(r, o, ja)), T(s !== void 0, 5, o.join("."), r), s;
      });
      return "".concat(n.typename, ":").concat(JSON.stringify(a));
    });
  }
  function ci(t) {
    var e = ln(t);
    return e.keyArgsFn || (e.keyArgsFn = function(r, n) {
      var i = n.field, a = n.variables, o = n.fieldName, s = fn(t, function(u) {
        var l = u[0], f = l.charAt(0);
        if (f === "@") {
          if (i && X(i.directives)) {
            var h = l.slice(1), d = i.directives.find(function(v) {
              return v.name.value === h;
            }), y = d && Wt(d, a);
            return y && qe(
              y,
              // If keyPath.length === 1, this code calls extractKeyPath with an
              // empty path, which works because it uses directiveArgs as the
              // extracted value.
              u.slice(1)
            );
          }
          return;
        }
        if (f === "$") {
          var m = l.slice(1);
          if (a && W.call(a, m)) {
            var g = u.slice(0);
            return g[0] = m, qe(a, g);
          }
          return;
        }
        if (r)
          return qe(r, u);
      }), c = JSON.stringify(s);
      return (r || c !== "{}") && (o += ":" + c), o;
    });
  }
  function fn(t, e) {
    var r = new Ee();
    return La(t).reduce(function(n, i) {
      var a, o = e(i);
      if (o !== void 0) {
        for (var s = i.length - 1; s >= 0; --s)
          o = (a = {}, a[i[s]] = o, a);
        n = r.merge(n, o);
      }
      return n;
    }, /* @__PURE__ */ Object.create(null));
  }
  function La(t) {
    var e = ln(t);
    if (!e.paths) {
      var r = e.paths = [], n = [];
      t.forEach(function(i, a) {
        j(i) ? (La(i).forEach(function(o) {
          return r.push(n.concat(o));
        }), n.length = 0) : (n.push(i), j(t[a + 1]) || (r.push(n.slice(0)), n.length = 0));
      });
    }
    return e.paths;
  }
  function ja(t, e) {
    return t[e];
  }
  function qe(t, e, r) {
    return r = r || ja, Va(e.reduce(function n(i, a) {
      return j(i) ? i.map(function(o) {
        return n(o, a);
      }) : i && r(i, a);
    }, t));
  }
  function Va(t) {
    return L(t) ? j(t) ? t.map(Va) : fn(Object.keys(t).sort(), function(e) {
      return qe(t, e);
    }) : t;
  }
  function Pr(t) {
    return t.args !== void 0 ? t.args : t.field ? Wt(t.field, t.variables) : null;
  }
  var Sc = function() {
  }, li = function(t, e) {
    return e.fieldName;
  }, fi = function(t, e, r) {
    var n = r.mergeObjects;
    return n(t, e);
  }, hi = function(t, e) {
    return e;
  }, kc = (
    /** @class */
    (function() {
      function t(e) {
        this.config = e, this.typePolicies = /* @__PURE__ */ Object.create(null), this.toBeAdded = /* @__PURE__ */ Object.create(null), this.supertypeMap = /* @__PURE__ */ new Map(), this.fuzzySubtypes = /* @__PURE__ */ new Map(), this.rootIdsByTypename = /* @__PURE__ */ Object.create(null), this.rootTypenamesById = /* @__PURE__ */ Object.create(null), this.usingPossibleTypes = !1, this.config = p({ dataIdFromObject: Ra }, e), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), e.possibleTypes && this.addPossibleTypes(e.possibleTypes), e.typePolicies && this.addTypePolicies(e.typePolicies);
      }
      return t.prototype.identify = function(e, r) {
        var n, i = this, a = r && (r.typename || ((n = r.storeObject) === null || n === void 0 ? void 0 : n.__typename)) || e.__typename;
        if (a === this.rootTypenamesById.ROOT_QUERY)
          return ["ROOT_QUERY"];
        var o = r && r.storeObject || e, s = p(p({}, r), { typename: a, storeObject: o, readField: r && r.readField || function() {
          var f = hn(arguments, o);
          return i.readField(f, {
            store: i.cache.data,
            variables: f.variables
          });
        } }), c, u = a && this.getTypePolicy(a), l = u && u.keyFn || this.config.dataIdFromObject;
        return un.withValue(!0, function() {
          for (; l; ) {
            var f = l(p(p({}, e), o), s);
            if (j(f))
              l = ui(f);
            else {
              c = f;
              break;
            }
          }
        }), c = c ? String(c) : void 0, s.keyObject ? [c, s.keyObject] : [c];
      }, t.prototype.addTypePolicies = function(e) {
        var r = this;
        Object.keys(e).forEach(function(n) {
          var i = e[n], a = i.queryType, o = i.mutationType, s = i.subscriptionType, c = re(i, ["queryType", "mutationType", "subscriptionType"]);
          a && r.setRootTypename("Query", n), o && r.setRootTypename("Mutation", n), s && r.setRootTypename("Subscription", n), W.call(r.toBeAdded, n) ? r.toBeAdded[n].push(c) : r.toBeAdded[n] = [c];
        });
      }, t.prototype.updateTypePolicy = function(e, r, n) {
        var i = this.getTypePolicy(e), a = r.keyFields, o = r.fields;
        function s(c, u) {
          c.merge = typeof u == "function" ? u : u === !0 ? fi : u === !1 ? hi : c.merge;
        }
        s(i, r.merge), i.keyFn = // Pass false to disable normalization for this typename.
        a === !1 ? Sc : j(a) ? ui(a) : typeof a == "function" ? a : i.keyFn, o && Object.keys(o).forEach(function(c) {
          var u = n[c];
          (!u || u?.typename !== e) && (u = n[c] = { typename: e });
          var l = o[c];
          if (typeof l == "function")
            u.read = l;
          else {
            var f = l.keyArgs, h = l.read, d = l.merge;
            u.keyFn = // Pass false to disable argument-based differentiation of
            // field identities.
            f === !1 ? li : j(f) ? ci(f) : typeof f == "function" ? f : u.keyFn, typeof h == "function" && (u.read = h), s(u, d);
          }
          u.read && u.merge && (u.keyFn = u.keyFn || li);
        });
      }, t.prototype.setRootTypename = function(e, r) {
        r === void 0 && (r = e);
        var n = "ROOT_" + e.toUpperCase(), i = this.rootTypenamesById[n];
        r !== i && (T(!i || i === e, 6, e), i && delete this.rootIdsByTypename[i], this.rootIdsByTypename[r] = n, this.rootTypenamesById[n] = r);
      }, t.prototype.addPossibleTypes = function(e) {
        var r = this;
        this.usingPossibleTypes = !0, Object.keys(e).forEach(function(n) {
          r.getSupertypeSet(n, !0), e[n].forEach(function(i) {
            r.getSupertypeSet(i, !0).add(n);
            var a = i.match(Fa);
            (!a || a[0] !== i) && r.fuzzySubtypes.set(i, new RegExp(i));
          });
        });
      }, t.prototype.getTypePolicy = function(e) {
        var r = this;
        if (!W.call(this.typePolicies, e)) {
          var n = this.typePolicies[e] = /* @__PURE__ */ Object.create(null);
          n.fields = /* @__PURE__ */ Object.create(null);
          var i = this.supertypeMap.get(e);
          !i && this.fuzzySubtypes.size && (i = this.getSupertypeSet(e, !0), this.fuzzySubtypes.forEach(function(o, s) {
            if (o.test(e)) {
              var c = r.supertypeMap.get(s);
              c && c.forEach(function(u) {
                return i.add(u);
              });
            }
          })), i && i.size && i.forEach(function(o) {
            var s = r.getTypePolicy(o), c = s.fields, u = re(s, ["fields"]);
            Object.assign(n, u), Object.assign(n.fields, c);
          });
        }
        var a = this.toBeAdded[e];
        return a && a.length && a.splice(0).forEach(function(o) {
          r.updateTypePolicy(e, o, r.typePolicies[e].fields);
        }), this.typePolicies[e];
      }, t.prototype.getFieldPolicy = function(e, r) {
        if (e)
          return this.getTypePolicy(e).fields[r];
      }, t.prototype.getSupertypeSet = function(e, r) {
        var n = this.supertypeMap.get(e);
        return !n && r && this.supertypeMap.set(e, n = /* @__PURE__ */ new Set()), n;
      }, t.prototype.fragmentMatches = function(e, r, n, i) {
        var a = this;
        if (!e.typeCondition)
          return !0;
        if (!r)
          return !1;
        var o = e.typeCondition.name.value;
        if (r === o)
          return !0;
        if (this.usingPossibleTypes && this.supertypeMap.has(o))
          for (var s = this.getSupertypeSet(r, !0), c = [s], u = function(y) {
            var m = a.getSupertypeSet(y, !1);
            m && m.size && c.indexOf(m) < 0 && c.push(m);
          }, l = !!(n && this.fuzzySubtypes.size), f = !1, h = 0; h < c.length; ++h) {
            var d = c[h];
            if (d.has(o))
              return s.has(o) || (f && globalThis.__DEV__ !== !1 && T.warn(7, r, o), s.add(o)), !0;
            d.forEach(u), l && // Start checking fuzzy subtypes only after exhausting all
            // non-fuzzy subtypes (after the final iteration of the loop).
            h === c.length - 1 && // We could wait to compare fragment.selectionSet to result
            // after we verify the supertype, but this check is often less
            // expensive than that search, and we will have to do the
            // comparison anyway whenever we find a potential match.
            Fr(e.selectionSet, n, i) && (l = !1, f = !0, this.fuzzySubtypes.forEach(function(y, m) {
              var g = r.match(y);
              g && g[0] === r && u(m);
            }));
          }
        return !1;
      }, t.prototype.hasKeyArgs = function(e, r) {
        var n = this.getFieldPolicy(e, r);
        return !!(n && n.keyFn);
      }, t.prototype.getStoreFieldName = function(e) {
        var r = e.typename, n = e.fieldName, i = this.getFieldPolicy(r, n), a, o = i && i.keyFn;
        if (o && r)
          for (var s = {
            typename: r,
            fieldName: n,
            field: e.field || null,
            variables: e.variables
          }, c = Pr(e); o; ) {
            var u = o(c, s);
            if (j(u))
              o = ci(u);
            else {
              a = u || n;
              break;
            }
          }
        return a === void 0 && (a = e.field ? Us(e.field, e.variables) : Hi(n, Pr(e))), a === !1 ? n : n === Oe(a) ? a : n + ":" + a;
      }, t.prototype.readField = function(e, r) {
        var n = e.from;
        if (n) {
          var i = e.field || e.fieldName;
          if (i) {
            if (e.typename === void 0) {
              var a = r.store.getFieldValue(n, "__typename");
              a && (e.typename = a);
            }
            var o = this.getStoreFieldName(e), s = Oe(o), c = r.store.getFieldValue(n, o), u = this.getFieldPolicy(e.typename, s), l = u && u.read;
            if (l) {
              var f = di(this, n, e, r, r.store.getStorage(A(n) ? n.__ref : n, o));
              return cn.withValue(this.cache, l, [
                c,
                f
              ]);
            }
            return c;
          }
        }
      }, t.prototype.getReadFunction = function(e, r) {
        var n = this.getFieldPolicy(e, r);
        return n && n.read;
      }, t.prototype.getMergeFunction = function(e, r, n) {
        var i = this.getFieldPolicy(e, r), a = i && i.merge;
        return !a && n && (i = this.getTypePolicy(n), a = i && i.merge), a;
      }, t.prototype.runMergeFunction = function(e, r, n, i, a) {
        var o = n.field, s = n.typename, c = n.merge;
        return c === fi ? Qa(i.store)(e, r) : c === hi ? r : (i.overwrite && (e = void 0), c(e, r, di(
          this,
          // Unlike options.readField for read functions, we do not fall
          // back to the current object if no foreignObjOrRef is provided,
          // because it's not clear what the current object should be for
          // merge functions: the (possibly undefined) existing object, or
          // the incoming object? If you think your merge function needs
          // to read sibling fields in order to produce a new value for
          // the current field, you might want to rethink your strategy,
          // because that's a recipe for making merge behavior sensitive
          // to the order in which fields are written into the cache.
          // However, readField(name, ref) is useful for merge functions
          // that need to deduplicate child objects and references.
          void 0,
          {
            typename: s,
            fieldName: o.name.value,
            field: o,
            variables: i.variables
          },
          i,
          a || /* @__PURE__ */ Object.create(null)
        )));
      }, t;
    })()
  );
  function di(t, e, r, n, i) {
    var a = t.getStoreFieldName(r), o = Oe(a), s = r.variables || n.variables, c = n.store, u = c.toReference, l = c.canRead;
    return {
      args: Pr(r),
      field: r.field || null,
      fieldName: o,
      storeFieldName: a,
      variables: s,
      isReference: A,
      toReference: u,
      storage: i,
      cache: t.cache,
      canRead: l,
      readField: function() {
        return t.readField(hn(arguments, e, s), n);
      },
      mergeObjects: Qa(n.store)
    };
  }
  function hn(t, e, r) {
    var n = t[0], i = t[1], a = t.length, o;
    return typeof n == "string" ? o = {
      fieldName: n,
      // Default to objectOrReference only when no second argument was
      // passed for the from parameter, not when undefined is explicitly
      // passed as the second argument.
      from: a > 1 ? i : e
    } : (o = p({}, n), W.call(o, "from") || (o.from = e)), globalThis.__DEV__ !== !1 && o.from === void 0 && globalThis.__DEV__ !== !1 && T.warn(8, Ci(Array.from(t))), o.variables === void 0 && (o.variables = r), o;
  }
  function Qa(t) {
    return function(r, n) {
      if (j(r) || j(n))
        throw H(9);
      if (L(r) && L(n)) {
        var i = t.getFieldValue(r, "__typename"), a = t.getFieldValue(n, "__typename"), o = i && a && i !== a;
        if (o)
          return n;
        if (A(r) && Me(n))
          return t.merge(r.__ref, n), r;
        if (Me(r) && A(n))
          return t.merge(r, n.__ref), n;
        if (Me(r) && Me(n))
          return p(p({}, r), n);
      }
      return n;
    };
  }
  function cr(t, e, r) {
    var n = "".concat(e).concat(r), i = t.flavors.get(n);
    return i || t.flavors.set(n, i = t.clientOnly === e && t.deferred === r ? t : p(p({}, t), { clientOnly: e, deferred: r })), i;
  }
  var Dc = (
    /** @class */
    (function() {
      function t(e, r, n) {
        this.cache = e, this.reader = r, this.fragments = n;
      }
      return t.prototype.writeToStore = function(e, r) {
        var n = this, i = r.query, a = r.result, o = r.dataId, s = r.variables, c = r.overwrite, u = xe(i), l = vc();
        s = p(p({}, Kr(u)), s);
        var f = p(p({ store: e, written: /* @__PURE__ */ Object.create(null), merge: function(d, y) {
          return l.merge(d, y);
        }, variables: s, varString: ge(s) }, Pa(i, this.fragments)), { overwrite: !!c, incomingById: /* @__PURE__ */ new Map(), clientOnly: !1, deferred: !1, flavors: /* @__PURE__ */ new Map() }), h = this.processSelectionSet({
          result: a || /* @__PURE__ */ Object.create(null),
          dataId: o,
          selectionSet: u.selectionSet,
          mergeTree: { map: /* @__PURE__ */ new Map() },
          context: f
        });
        if (!A(h))
          throw H(12, a);
        return f.incomingById.forEach(function(d, y) {
          var m = d.storeObject, g = d.mergeTree, v = d.fieldNodeSet, b = Ve(y);
          if (g && g.map.size) {
            var E = n.applyMerges(g, b, m, f);
            if (A(E))
              return;
            m = E;
          }
          if (globalThis.__DEV__ !== !1 && !f.overwrite) {
            var O = /* @__PURE__ */ Object.create(null);
            v.forEach(function(N) {
              N.selectionSet && (O[N.name.value] = !0);
            });
            var w = function(N) {
              return O[Oe(N)] === !0;
            }, D = function(N) {
              var R = g && g.map.get(N);
              return !!(R && R.info && R.info.merge);
            };
            Object.keys(m).forEach(function(N) {
              w(N) && !D(N) && xc(b, m, N, f.store);
            });
          }
          e.merge(y, m);
        }), e.retain(h.__ref), h;
      }, t.prototype.processSelectionSet = function(e) {
        var r = this, n = e.dataId, i = e.result, a = e.selectionSet, o = e.context, s = e.mergeTree, c = this.cache.policies, u = /* @__PURE__ */ Object.create(null), l = n && c.rootTypenamesById[n] || wr(i, a, o.fragmentMap) || n && o.store.get(n, "__typename");
        typeof l == "string" && (u.__typename = l);
        var f = function() {
          var E = hn(arguments, u, o.variables);
          if (A(E.from)) {
            var O = o.incomingById.get(E.from.__ref);
            if (O) {
              var w = c.readField(p(p({}, E), { from: O.storeObject }), o);
              if (w !== void 0)
                return w;
            }
          }
          return c.readField(E, o);
        }, h = /* @__PURE__ */ new Set();
        this.flattenFields(
          a,
          i,
          // This WriteContext will be the default context value for fields returned
          // by the flattenFields method, but some fields may be assigned a modified
          // context, depending on the presence of @client and other directives.
          o,
          l
        ).forEach(function(E, O) {
          var w, D = ce(O), N = i[D];
          if (h.add(O), N !== void 0) {
            var R = c.getStoreFieldName({
              typename: l,
              fieldName: O.name.value,
              field: O,
              variables: E.variables
            }), P = pi(s, R), V = r.processFieldValue(
              N,
              O,
              // Reset context.clientOnly and context.deferred to their default
              // values before processing nested selection sets.
              O.selectionSet ? cr(E, !1, !1) : E,
              P
            ), fe = void 0;
            O.selectionSet && (A(V) || Me(V)) && (fe = f("__typename", V));
            var Z = c.getMergeFunction(l, O.name.value, fe);
            Z ? P.info = {
              // TODO Check compatibility against any existing childTree.field?
              field: O,
              typename: l,
              merge: Z
            } : vi(s, R), u = E.merge(u, (w = {}, w[R] = V, w));
          } else globalThis.__DEV__ !== !1 && !E.clientOnly && !E.deferred && !tn.added(O) && // If the field has a read function, it may be a synthetic field or
          // provide a default value, so its absence from the written data should
          // not be cause for alarm.
          !c.getReadFunction(l, O.name.value) && globalThis.__DEV__ !== !1 && T.error(13, ce(O), i);
        });
        try {
          var d = c.identify(i, {
            typename: l,
            selectionSet: a,
            fragmentMap: o.fragmentMap,
            storeObject: u,
            readField: f
          }), y = d[0], m = d[1];
          n = n || y, m && (u = o.merge(u, m));
        } catch (E) {
          if (!n)
            throw E;
        }
        if (typeof n == "string") {
          var g = Ve(n), v = o.written[n] || (o.written[n] = []);
          if (v.indexOf(a) >= 0 || (v.push(a), this.reader && this.reader.isFresh(i, g, a, o)))
            return g;
          var b = o.incomingById.get(n);
          return b ? (b.storeObject = o.merge(b.storeObject, u), b.mergeTree = Mr(b.mergeTree, s), h.forEach(function(E) {
            return b.fieldNodeSet.add(E);
          })) : o.incomingById.set(n, {
            storeObject: u,
            // Save a reference to mergeTree only if it is not empty, because
            // empty MergeTrees may be recycled by maybeRecycleChildMergeTree and
            // reused for entirely different parts of the result tree.
            mergeTree: Lt(s) ? void 0 : s,
            fieldNodeSet: h
          }), g;
        }
        return u;
      }, t.prototype.processFieldValue = function(e, r, n, i) {
        var a = this;
        return !r.selectionSet || e === null ? globalThis.__DEV__ !== !1 ? ya(e) : e : j(e) ? e.map(function(o, s) {
          var c = a.processFieldValue(o, r, n, pi(i, s));
          return vi(i, s), c;
        }) : this.processSelectionSet({
          result: e,
          selectionSet: r.selectionSet,
          context: n,
          mergeTree: i
        });
      }, t.prototype.flattenFields = function(e, r, n, i) {
        i === void 0 && (i = wr(r, e, n.fragmentMap));
        var a = /* @__PURE__ */ new Map(), o = this.cache.policies, s = new le(!1);
        return (function c(u, l) {
          var f = s.lookup(
            u,
            // Because we take inheritedClientOnly and inheritedDeferred into
            // consideration here (in addition to selectionSet), it's possible for
            // the same selection set to be flattened more than once, if it appears
            // in the query with different @client and/or @directive configurations.
            l.clientOnly,
            l.deferred
          );
          f.visited || (f.visited = !0, u.selections.forEach(function(h) {
            if (mt(h, n.variables)) {
              var d = l.clientOnly, y = l.deferred;
              if (
                // Since the presence of @client or @defer on this field can only
                // cause clientOnly or deferred to become true, we can skip the
                // forEach loop if both clientOnly and deferred are already true.
                !(d && y) && X(h.directives) && h.directives.forEach(function(v) {
                  var b = v.name.value;
                  if (b === "client" && (d = !0), b === "defer") {
                    var E = Wt(v, n.variables);
                    (!E || E.if !== !1) && (y = !0);
                  }
                }), be(h)
              ) {
                var m = a.get(h);
                m && (d = d && m.clientOnly, y = y && m.deferred), a.set(h, cr(n, d, y));
              } else {
                var g = zt(h, n.lookupFragment);
                if (!g && h.kind === S.FRAGMENT_SPREAD)
                  throw H(14, h.name.value);
                g && o.fragmentMatches(g, i, r, n.variables) && c(g.selectionSet, cr(n, d, y));
              }
            }
          }));
        })(e, n), a;
      }, t.prototype.applyMerges = function(e, r, n, i, a) {
        var o, s = this;
        if (e.map.size && !A(n)) {
          var c = (
            // Items in the same position in different arrays are not
            // necessarily related to each other, so when incoming is an array
            // we process its elements as if there was no existing data.
            !j(n) && // Likewise, existing must be either a Reference or a StoreObject
            // in order for its fields to be safe to merge with the fields of
            // the incoming object.
            (A(r) || Me(r)) ? r : void 0
          ), u = n;
          c && !a && (a = [A(c) ? c.__ref : c]);
          var l, f = function(h, d) {
            return j(h) ? typeof d == "number" ? h[d] : void 0 : i.store.getFieldValue(h, String(d));
          };
          e.map.forEach(function(h, d) {
            var y = f(c, d), m = f(u, d);
            if (m !== void 0) {
              a && a.push(d);
              var g = s.applyMerges(h, y, m, i, a);
              g !== m && (l = l || /* @__PURE__ */ new Map(), l.set(d, g)), a && T(a.pop() === d);
            }
          }), l && (n = j(u) ? u.slice(0) : p({}, u), l.forEach(function(h, d) {
            n[d] = h;
          }));
        }
        return e.info ? this.cache.policies.runMergeFunction(r, n, e.info, i, a && (o = i.store).getStorage.apply(o, a)) : n;
      }, t;
    })()
  ), qa = [];
  function pi(t, e) {
    var r = t.map;
    return r.has(e) || r.set(e, qa.pop() || { map: /* @__PURE__ */ new Map() }), r.get(e);
  }
  function Mr(t, e) {
    if (t === e || !e || Lt(e))
      return t;
    if (!t || Lt(t))
      return e;
    var r = t.info && e.info ? p(p({}, t.info), e.info) : t.info || e.info, n = t.map.size && e.map.size, i = n ? /* @__PURE__ */ new Map() : t.map.size ? t.map : e.map, a = { info: r, map: i };
    if (n) {
      var o = new Set(e.map.keys());
      t.map.forEach(function(s, c) {
        a.map.set(c, Mr(s, e.map.get(c))), o.delete(c);
      }), o.forEach(function(s) {
        a.map.set(s, Mr(e.map.get(s), t.map.get(s)));
      });
    }
    return a;
  }
  function Lt(t) {
    return !t || !(t.info || t.map.size);
  }
  function vi(t, e) {
    var r = t.map, n = r.get(e);
    n && Lt(n) && (qa.push(n), r.delete(e));
  }
  var yi = /* @__PURE__ */ new Set();
  function xc(t, e, r, n) {
    var i = function(f) {
      var h = n.getFieldValue(f, r);
      return typeof h == "object" && h;
    }, a = i(t);
    if (a) {
      var o = i(e);
      if (o && !A(a) && !F(a, o) && !Object.keys(a).every(function(f) {
        return n.getFieldValue(o, f) !== void 0;
      })) {
        var s = n.getFieldValue(t, "__typename") || n.getFieldValue(e, "__typename"), c = Oe(r), u = "".concat(s, ".").concat(c);
        if (!yi.has(u)) {
          yi.add(u);
          var l = [];
          !j(a) && !j(o) && [a, o].forEach(function(f) {
            var h = n.getFieldValue(f, "__typename");
            typeof h == "string" && !l.includes(h) && l.push(h);
          }), globalThis.__DEV__ !== !1 && T.warn(15, c, s, l.length ? "either ensure all objects of type " + l.join(" and ") + " have an ID or a custom merge function, or " : "", u, p({}, a), p({}, o));
        }
      }
    }
  }
  var Ba = (
    /** @class */
    (function(t) {
      oe(e, t);
      function e(r) {
        r === void 0 && (r = {});
        var n = t.call(this) || this;
        return n.watches = /* @__PURE__ */ new Set(), n.addTypenameTransform = new ca(tn), n.assumeImmutableResults = !0, n.makeVar = Tc, n.txCount = 0, globalThis.__DEV__ !== !1 && (Q(r, "addTypename", "InMemoryCache", "Please remove the `addTypename` option when initializing `InMemoryCache`."), Q(r, "canonizeResults", "InMemoryCache", "Please remove the `canonizeResults` option when initializing `InMemoryCache`.")), n.config = dc(r), n.addTypename = !!n.config.addTypename, n.policies = new kc({
          cache: n,
          dataIdFromObject: n.config.dataIdFromObject,
          possibleTypes: n.config.possibleTypes,
          typePolicies: n.config.typePolicies
        }), n.init(), n;
      }
      return e.prototype.init = function() {
        var r = this.data = new yt.Root({
          policies: this.policies,
          resultCaching: this.config.resultCaching
        });
        this.optimisticData = r.stump, this.resetResultCache();
      }, e.prototype.resetResultCache = function(r) {
        var n = this, i = this.storeReader, a = this.config.fragments;
        this.addTypenameTransform.resetCache(), a?.resetCaches(), this.storeWriter = new Dc(this, this.storeReader = new bc({
          cache: this,
          addTypename: this.addTypename,
          resultCacheMaxSize: this.config.resultCacheMaxSize,
          canonizeResults: Aa(this.config),
          canon: r ? void 0 : i && i.canon,
          fragments: a
        }), a), this.maybeBroadcastWatch = vt(function(o, s) {
          return n.broadcastWatch(o, s);
        }, {
          max: this.config.resultCacheMaxSize || ie["inMemoryCache.maybeBroadcastWatch"] || 5e3,
          makeCacheKey: function(o) {
            var s = o.optimistic ? n.optimisticData : n.data;
            if (ct(s)) {
              var c = o.optimistic, u = o.id, l = o.variables;
              return s.makeCacheKey(
                o.query,
                // Different watches can have the same query, optimistic
                // status, rootId, and variables, but if their callbacks are
                // different, the (identical) result needs to be delivered to
                // each distinct callback. The easiest way to achieve that
                // separation is to include c.callback in the cache key for
                // maybeBroadcastWatch calls. See issue #5733.
                o.callback,
                ge({ optimistic: c, id: u, variables: l })
              );
            }
          }
        }), (/* @__PURE__ */ new Set([this.data.group, this.optimisticData.group])).forEach(function(o) {
          return o.resetCaching();
        });
      }, e.prototype.restore = function(r) {
        return this.init(), r && this.data.replace(r), this;
      }, e.prototype.extract = function(r) {
        return r === void 0 && (r = !1), (r ? this.optimisticData : this.data).extract();
      }, e.prototype.read = function(r) {
        globalThis.__DEV__ !== !1 && Q(r, "canonizeResults", "cache.read");
        var n = r.returnPartialData, i = n === void 0 ? !1 : n;
        try {
          return this.storeReader.diffQueryAgainstStore(p(p({}, r), { store: r.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: i })).result || null;
        } catch (a) {
          if (a instanceof Na)
            return null;
          throw a;
        }
      }, e.prototype.write = function(r) {
        try {
          return ++this.txCount, this.storeWriter.writeToStore(this.data, r);
        } finally {
          !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
        }
      }, e.prototype.modify = function(r) {
        if (W.call(r, "id") && !r.id)
          return !1;
        var n = r.optimistic ? this.optimisticData : this.data;
        try {
          return ++this.txCount, n.modify(r.id || "ROOT_QUERY", r.fields);
        } finally {
          !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
        }
      }, e.prototype.diff = function(r) {
        return globalThis.__DEV__ !== !1 && Q(r, "canonizeResults", "cache.diff"), this.storeReader.diffQueryAgainstStore(p(p({}, r), { store: r.optimistic ? this.optimisticData : this.data, rootId: r.id || "ROOT_QUERY", config: this.config }));
      }, e.prototype.watch = function(r) {
        var n = this;
        return this.watches.size || Oc(this), this.watches.add(r), r.immediate && this.maybeBroadcastWatch(r), function() {
          n.watches.delete(r) && !n.watches.size && oi(n), n.maybeBroadcastWatch.forget(r);
        };
      }, e.prototype.gc = function(r) {
        globalThis.__DEV__ !== !1 && Q(r || {}, "resetResultIdentities", "cache.gc", "First ensure all usages of `canonizeResults` are removed, then remove this option."), ge.reset(), Se.reset();
        var n = this.optimisticData.gc();
        return r && !this.txCount && (r.resetResultCache ? this.resetResultCache(r.resetResultIdentities) : r.resetResultIdentities && this.storeReader.resetCanon()), n;
      }, e.prototype.retain = function(r, n) {
        return (n ? this.optimisticData : this.data).retain(r);
      }, e.prototype.release = function(r, n) {
        return (n ? this.optimisticData : this.data).release(r);
      }, e.prototype.identify = function(r) {
        if (A(r))
          return r.__ref;
        try {
          return this.policies.identify(r)[0];
        } catch (n) {
          globalThis.__DEV__ !== !1 && T.warn(n);
        }
      }, e.prototype.evict = function(r) {
        if (!r.id) {
          if (W.call(r, "id"))
            return !1;
          r = p(p({}, r), { id: "ROOT_QUERY" });
        }
        try {
          return ++this.txCount, this.optimisticData.evict(r, this.data);
        } finally {
          !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
        }
      }, e.prototype.reset = function(r) {
        var n = this;
        return this.init(), ge.reset(), r && r.discardWatches ? (this.watches.forEach(function(i) {
          return n.maybeBroadcastWatch.forget(i);
        }), this.watches.clear(), oi(this)) : this.broadcastWatches(), Promise.resolve();
      }, e.prototype.removeOptimistic = function(r) {
        var n = this.optimisticData.removeLayer(r);
        n !== this.optimisticData && (this.optimisticData = n, this.broadcastWatches());
      }, e.prototype.batch = function(r) {
        var n = this, i = r.update, a = r.optimistic, o = a === void 0 ? !0 : a, s = r.removeOptimistic, c = r.onWatchUpdated, u, l = function(h) {
          var d = n, y = d.data, m = d.optimisticData;
          ++n.txCount, h && (n.data = n.optimisticData = h);
          try {
            return u = i(n);
          } finally {
            --n.txCount, n.data = y, n.optimisticData = m;
          }
        }, f = /* @__PURE__ */ new Set();
        return c && !this.txCount && this.broadcastWatches(p(p({}, r), { onWatchUpdated: function(h) {
          return f.add(h), !1;
        } })), typeof o == "string" ? this.optimisticData = this.optimisticData.addLayer(o, l) : o === !1 ? l(this.data) : l(), typeof s == "string" && (this.optimisticData = this.optimisticData.removeLayer(s)), c && f.size ? (this.broadcastWatches(p(p({}, r), { onWatchUpdated: function(h, d) {
          var y = c.call(this, h, d);
          return y !== !1 && f.delete(h), y;
        } })), f.size && f.forEach(function(h) {
          return n.maybeBroadcastWatch.dirty(h);
        })) : this.broadcastWatches(r), u;
      }, e.prototype.performTransaction = function(r, n) {
        return this.batch({
          update: r,
          optimistic: n || n !== null
        });
      }, e.prototype.transformDocument = function(r) {
        return this.addTypenameToDocument(this.addFragmentsToDocument(r));
      }, e.prototype.fragmentMatches = function(r, n) {
        return this.policies.fragmentMatches(r, n);
      }, e.prototype.lookupFragment = function(r) {
        var n;
        return ((n = this.config.fragments) === null || n === void 0 ? void 0 : n.lookup(r)) || null;
      }, e.prototype.broadcastWatches = function(r) {
        var n = this;
        this.txCount || this.watches.forEach(function(i) {
          return n.maybeBroadcastWatch(i, r);
        });
      }, e.prototype.addFragmentsToDocument = function(r) {
        var n = this.config.fragments;
        return n ? n.transform(r) : r;
      }, e.prototype.addTypenameToDocument = function(r) {
        return this.addTypename ? this.addTypenameTransform.transformDocument(r) : r;
      }, e.prototype.broadcastWatch = function(r, n) {
        var i = this, a = r.lastDiff, o = G("canonizeResults", function() {
          return i.diff(r);
        });
        n && (r.optimistic && typeof n.optimistic == "string" && (o.fromOptimisticTransaction = !0), n.onWatchUpdated && n.onWatchUpdated.call(this, r, o, a) === !1) || (!a || !F(a.result, o.result)) && r.callback(r.lastDiff = o, a);
      }, e;
    })(Ia)
  );
  globalThis.__DEV__ !== !1 && (Ba.prototype.getMemoryInternals = Ss);
  var C;
  (function(t) {
    t[t.loading = 1] = "loading", t[t.setVariables = 2] = "setVariables", t[t.fetchMore = 3] = "fetchMore", t[t.refetch = 4] = "refetch", t[t.poll = 6] = "poll", t[t.ready = 7] = "ready", t[t.error = 8] = "error";
  })(C || (C = {}));
  function Le(t) {
    return t ? t < 7 : !1;
  }
  var mi = Object.assign, Ic = Object.hasOwnProperty, ft = (
    /** @class */
    (function(t) {
      oe(e, t);
      function e(r) {
        var n = r.queryManager, i = r.queryInfo, a = r.options, o = this, s = e.inactiveOnCreation.getValue();
        o = t.call(this, function(v) {
          o._getOrCreateQuery();
          try {
            var b = v._subscription._observer;
            b && !b.error && (b.error = Nc);
          } catch {
          }
          var E = !o.observers.size;
          o.observers.add(v);
          var O = o.last;
          return O && O.error ? v.error && v.error(O.error) : O && O.result && v.next && v.next(o.maskResult(O.result)), E && o.reobserve().catch(function() {
          }), function() {
            o.observers.delete(v) && !o.observers.size && o.tearDownQuery();
          };
        }) || this, o.observers = /* @__PURE__ */ new Set(), o.subscriptions = /* @__PURE__ */ new Set(), o.dirty = !1, o._getOrCreateQuery = function() {
          return s && (n.queries.set(o.queryId, i), s = !1), o.queryManager.getOrCreateQuery(o.queryId);
        }, o.queryInfo = i, o.queryManager = n, o.waitForOwnResult = lr(a.fetchPolicy), o.isTornDown = !1, o.subscribeToMore = o.subscribeToMore.bind(o), o.maskResult = o.maskResult.bind(o);
        var c = n.defaultOptions.watchQuery, u = c === void 0 ? {} : c, l = u.fetchPolicy, f = l === void 0 ? "cache-first" : l, h = a.fetchPolicy, d = h === void 0 ? f : h, y = a.initialFetchPolicy, m = y === void 0 ? d === "standby" ? f : d : y;
        o.options = p(p({}, a), {
          // Remember the initial options.fetchPolicy so we can revert back to this
          // policy when variables change. This information can also be specified
          // (or overridden) by providing options.initialFetchPolicy explicitly.
          initialFetchPolicy: m,
          // This ensures this.options.fetchPolicy always has a string value, in
          // case options.fetchPolicy was not provided.
          fetchPolicy: d
        }), o.queryId = i.queryId || n.generateQueryId();
        var g = xe(o.query);
        return o.queryName = g && g.name && g.name.value, o;
      }
      return Object.defineProperty(e.prototype, "query", {
        // The `query` computed property will always reflect the document transformed
        // by the last run query. `this.options.query` will always reflect the raw
        // untransformed query to ensure document transforms with runtime conditionals
        // are run on the original document.
        get: function() {
          return this.lastQuery || this.options.query;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "variables", {
        // Computed shorthand for this.options.variables, preserved for
        // backwards compatibility.
        /**
         * An object containing the variables that were provided for the query.
         */
        get: function() {
          return this.options.variables;
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.result = function() {
        var r = this;
        return globalThis.__DEV__ !== !1 && ye("observableQuery.result", function() {
          globalThis.__DEV__ !== !1 && T.warn(23);
        }), new Promise(function(n, i) {
          var a = {
            next: function(s) {
              n(s), r.observers.delete(a), r.observers.size || r.queryManager.removeQuery(r.queryId), setTimeout(function() {
                o.unsubscribe();
              }, 0);
            },
            error: i
          }, o = r.subscribe(a);
        });
      }, e.prototype.resetDiff = function() {
        this.queryInfo.resetDiff();
      }, e.prototype.getCurrentFullResult = function(r) {
        var n = this;
        r === void 0 && (r = !0);
        var i = G("getLastResult", function() {
          return n.getLastResult(!0);
        }), a = this.queryInfo.networkStatus || i && i.networkStatus || C.ready, o = p(p({}, i), { loading: Le(a), networkStatus: a }), s = this.options.fetchPolicy, c = s === void 0 ? "cache-first" : s;
        if (
          // These fetch policies should never deliver data from the cache, unless
          // redelivering a previously delivered result.
          !(lr(c) || // If this.options.query has @client(always: true) fields, we cannot
          // trust diff.result, since it was read from the cache without running
          // local resolvers (and it's too late to run resolvers now, since we must
          // return a result synchronously).
          this.queryManager.getDocumentInfo(this.query).hasForcedResolvers)
        ) if (this.waitForOwnResult)
          this.queryInfo.updateWatch();
        else {
          var u = this.queryInfo.getDiff();
          (u.complete || this.options.returnPartialData) && (o.data = u.result), F(o.data, {}) && (o.data = void 0), u.complete ? (delete o.partial, u.complete && o.networkStatus === C.loading && (c === "cache-first" || c === "cache-only") && (o.networkStatus = C.ready, o.loading = !1)) : o.partial = !0, o.networkStatus === C.ready && (o.error || o.errors) && (o.networkStatus = C.error), globalThis.__DEV__ !== !1 && !u.complete && !this.options.partialRefetch && !o.loading && !o.data && !o.error && Ua(u.missing);
        }
        return r && this.updateLastResult(o), o;
      }, e.prototype.getCurrentResult = function(r) {
        return r === void 0 && (r = !0), this.maskResult(this.getCurrentFullResult(r));
      }, e.prototype.isDifferentFromLastResult = function(r, n) {
        if (!this.last)
          return !0;
        var i = this.queryManager.getDocumentInfo(this.query), a = this.queryManager.dataMasking, o = a ? i.nonReactiveQuery : this.query, s = a || i.hasNonreactiveDirective ? !Ta(o, this.last.result, r, this.variables) : !F(this.last.result, r);
        return s || n && !F(this.last.variables, n);
      }, e.prototype.getLast = function(r, n) {
        var i = this.last;
        if (i && i[r] && (!n || F(i.variables, this.variables)))
          return i[r];
      }, e.prototype.getLastResult = function(r) {
        return globalThis.__DEV__ !== !1 && ye("getLastResult", function() {
          globalThis.__DEV__ !== !1 && T.warn(24);
        }), this.getLast("result", r);
      }, e.prototype.getLastError = function(r) {
        return globalThis.__DEV__ !== !1 && ye("getLastError", function() {
          globalThis.__DEV__ !== !1 && T.warn(25);
        }), this.getLast("error", r);
      }, e.prototype.resetLastResults = function() {
        globalThis.__DEV__ !== !1 && ye("resetLastResults", function() {
          globalThis.__DEV__ !== !1 && T.warn(26);
        }), delete this.last, this.isTornDown = !1;
      }, e.prototype.resetQueryStoreErrors = function() {
        globalThis.__DEV__ !== !1 && globalThis.__DEV__ !== !1 && T.warn(27), this.queryManager.resetErrors(this.queryId);
      }, e.prototype.refetch = function(r) {
        var n, i = {
          // Always disable polling for refetches.
          pollInterval: 0
        }, a = this.options.fetchPolicy;
        if (a === "no-cache" ? i.fetchPolicy = "no-cache" : i.fetchPolicy = "network-only", globalThis.__DEV__ !== !1 && r && Ic.call(r, "variables")) {
          var o = Ji(this.query), s = o.variableDefinitions;
          (!s || !s.some(function(c) {
            return c.variable.name.value === "variables";
          })) && globalThis.__DEV__ !== !1 && T.warn(
            28,
            r,
            ((n = o.name) === null || n === void 0 ? void 0 : n.value) || o
          );
        }
        return r && !F(this.options.variables, r) && (i.variables = this.options.variables = p(p({}, this.options.variables), r)), this.queryInfo.resetLastWrite(), this.reobserve(i, C.refetch);
      }, e.prototype.fetchMore = function(r) {
        var n = this, i = p(p({}, r.query ? r : p(p(p(p({}, this.options), { query: this.options.query }), r), { variables: p(p({}, this.options.variables), r.variables) })), {
          // The fetchMore request goes immediately to the network and does
          // not automatically write its result to the cache (hence no-cache
          // instead of network-only), because we allow the caller of
          // fetchMore to provide an updateQuery callback that determines how
          // the data gets written to the cache.
          fetchPolicy: "no-cache"
        });
        i.query = this.transformDocument(i.query);
        var a = this.queryManager.generateQueryId();
        this.lastQuery = r.query ? this.transformDocument(this.options.query) : i.query;
        var o = this.queryInfo, s = o.networkStatus;
        o.networkStatus = C.fetchMore, i.notifyOnNetworkStatusChange && this.observe();
        var c = /* @__PURE__ */ new Set(), u = r?.updateQuery, l = this.options.fetchPolicy !== "no-cache";
        return l || T(u, 29), this.queryManager.fetchQuery(a, i, C.fetchMore).then(function(f) {
          if (n.queryManager.removeQuery(a), o.networkStatus === C.fetchMore && (o.networkStatus = s), l)
            n.queryManager.cache.batch({
              update: function(y) {
                var m = r.updateQuery;
                m ? y.updateQuery({
                  query: n.query,
                  variables: n.variables,
                  returnPartialData: !0,
                  optimistic: !1
                }, function(g) {
                  return m(g, {
                    fetchMoreResult: f.data,
                    variables: i.variables
                  });
                }) : y.writeQuery({
                  query: i.query,
                  variables: i.variables,
                  data: f.data
                });
              },
              onWatchUpdated: function(y) {
                c.add(y.query);
              }
            });
          else {
            var h = n.getLast("result"), d = u(h.data, {
              fetchMoreResult: f.data,
              variables: i.variables
            });
            n.reportResult(p(p({}, h), { networkStatus: s, loading: Le(s), data: d }), n.variables);
          }
          return n.maskResult(f);
        }).finally(function() {
          l && !c.has(n.query) && n.reobserveCacheFirst();
        });
      }, e.prototype.subscribeToMore = function(r) {
        var n = this, i = this.queryManager.startGraphQLSubscription({
          query: r.document,
          variables: r.variables,
          context: r.context
        }).subscribe({
          next: function(a) {
            var o = r.updateQuery;
            o && n.updateQuery(function(s, c) {
              return o(s, p({ subscriptionData: a }, c));
            });
          },
          error: function(a) {
            if (r.onError) {
              r.onError(a);
              return;
            }
            globalThis.__DEV__ !== !1 && T.error(30, a);
          }
        });
        return this.subscriptions.add(i), function() {
          n.subscriptions.delete(i) && i.unsubscribe();
        };
      }, e.prototype.setOptions = function(r) {
        return globalThis.__DEV__ !== !1 && (Q(r, "canonizeResults", "setOptions"), ye("setOptions", function() {
          globalThis.__DEV__ !== !1 && T.warn(31);
        })), this.reobserve(r);
      }, e.prototype.silentSetOptions = function(r) {
        var n = Ie(this.options, r || {});
        mi(this.options, n);
      }, e.prototype.setVariables = function(r) {
        var n = this;
        return F(this.variables, r) ? this.observers.size ? G("observableQuery.result", function() {
          return n.result();
        }) : Promise.resolve() : (this.options.variables = r, this.observers.size ? this.reobserve({
          // Reset options.fetchPolicy to its original value.
          fetchPolicy: this.options.initialFetchPolicy,
          variables: r
        }, C.setVariables) : Promise.resolve());
      }, e.prototype.updateQuery = function(r) {
        var n = this.queryManager, i = n.cache.diff({
          query: this.options.query,
          variables: this.variables,
          returnPartialData: !0,
          optimistic: !1
        }), a = i.result, o = i.complete, s = r(a, {
          variables: this.variables,
          complete: !!o,
          previousData: a
        });
        s && (n.cache.writeQuery({
          query: this.options.query,
          data: s,
          variables: this.variables
        }), n.broadcastQueries());
      }, e.prototype.startPolling = function(r) {
        this.options.pollInterval = r, this.updatePolling();
      }, e.prototype.stopPolling = function() {
        this.options.pollInterval = 0, this.updatePolling();
      }, e.prototype.applyNextFetchPolicy = function(r, n) {
        if (n.nextFetchPolicy) {
          var i = n.fetchPolicy, a = i === void 0 ? "cache-first" : i, o = n.initialFetchPolicy, s = o === void 0 ? a : o;
          a === "standby" || (typeof n.nextFetchPolicy == "function" ? n.fetchPolicy = n.nextFetchPolicy(a, {
            reason: r,
            options: n,
            observable: this,
            initialFetchPolicy: s
          }) : r === "variables-changed" ? n.fetchPolicy = s : n.fetchPolicy = n.nextFetchPolicy);
        }
        return n.fetchPolicy;
      }, e.prototype.fetch = function(r, n, i) {
        var a = this._getOrCreateQuery();
        return a.setObservableQuery(this), this.queryManager.fetchConcastWithInfo(a, r, n, i);
      }, e.prototype.updatePolling = function() {
        var r = this;
        if (!this.queryManager.ssrMode) {
          var n = this, i = n.pollingInfo, a = n.options.pollInterval;
          if (!a || !this.hasObservers()) {
            i && (clearTimeout(i.timeout), delete this.pollingInfo);
            return;
          }
          if (!(i && i.interval === a)) {
            T(a, 32);
            var o = i || (this.pollingInfo = {});
            o.interval = a;
            var s = function() {
              var u, l;
              r.pollingInfo && (!Le(r.queryInfo.networkStatus) && !(!((l = (u = r.options).skipPollAttempt) === null || l === void 0) && l.call(u)) ? r.reobserve({
                // Most fetchPolicy options don't make sense to use in a polling context, as
                // users wouldn't want to be polling the cache directly. However, network-only and
                // no-cache are both useful for when the user wants to control whether or not the
                // polled results are written to the cache.
                fetchPolicy: r.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
              }, C.poll).then(c, c) : c());
            }, c = function() {
              var u = r.pollingInfo;
              u && (clearTimeout(u.timeout), u.timeout = setTimeout(s, u.interval));
            };
            c();
          }
        }
      }, e.prototype.updateLastResult = function(r, n) {
        var i = this;
        n === void 0 && (n = this.variables);
        var a = G("getLastError", function() {
          return i.getLastError();
        });
        return a && this.last && !F(n, this.last.variables) && (a = void 0), this.last = p({ result: this.queryManager.assumeImmutableResults ? r : ya(r), variables: n }, a ? { error: a } : null);
      }, e.prototype.reobserveAsConcast = function(r, n) {
        var i = this;
        this.isTornDown = !1;
        var a = (
          // Refetching uses a disposable Concast to allow refetches using different
          // options/variables, without permanently altering the options of the
          // original ObservableQuery.
          n === C.refetch || // The fetchMore method does not actually call the reobserve method, but,
          // if it did, it would definitely use a disposable Concast.
          n === C.fetchMore || // Polling uses a disposable Concast so the polling options (which force
          // fetchPolicy to be "network-only" or "no-cache") won't override the original options.
          n === C.poll
        ), o = this.options.variables, s = this.options.fetchPolicy, c = Ie(this.options, r || {}), u = a ? (
          // Disposable Concast fetches receive a shallow copy of this.options
          // (merged with newOptions), leaving this.options unmodified.
          c
        ) : mi(this.options, c), l = this.transformDocument(u.query);
        this.lastQuery = l, a || (this.updatePolling(), r && r.variables && !F(r.variables, o) && // Don't mess with the fetchPolicy if it's currently "standby".
        u.fetchPolicy !== "standby" && // If we're changing the fetchPolicy anyway, don't try to change it here
        // using applyNextFetchPolicy. The explicit options.fetchPolicy wins.
        (u.fetchPolicy === s || // A `nextFetchPolicy` function has even higher priority, though,
        // so in that case `applyNextFetchPolicy` must be called.
        typeof u.nextFetchPolicy == "function") && (this.applyNextFetchPolicy("variables-changed", u), n === void 0 && (n = C.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = lr(u.fetchPolicy));
        var f = function() {
          i.concast === y && (i.waitForOwnResult = !1);
        }, h = u.variables && p({}, u.variables), d = this.fetch(u, n, l), y = d.concast, m = d.fromLink, g = {
          next: function(v) {
            F(i.variables, h) && (f(), i.reportResult(v, h));
          },
          error: function(v) {
            F(i.variables, h) && (_a(v) || (v = new se({ networkError: v })), f(), i.reportError(v, h));
          }
        };
        return !a && (m || !this.concast) && (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = y, this.observer = g), y.addObserver(g), y;
      }, e.prototype.reobserve = function(r, n) {
        return gu(this.reobserveAsConcast(r, n).promise.then(this.maskResult));
      }, e.prototype.resubscribeAfterError = function() {
        for (var r = this, n = [], i = 0; i < arguments.length; i++)
          n[i] = arguments[i];
        var a = this.last;
        G("resetLastResults", function() {
          return r.resetLastResults();
        });
        var o = this.subscribe.apply(this, n);
        return this.last = a, o;
      }, e.prototype.observe = function() {
        this.reportResult(
          // Passing false is important so that this.getCurrentResult doesn't
          // save the fetchMore result as this.lastResult, causing it to be
          // ignored due to the this.isDifferentFromLastResult check in
          // this.reportResult.
          this.getCurrentFullResult(!1),
          this.variables
        );
      }, e.prototype.reportResult = function(r, n) {
        var i = this, a = G("getLastError", function() {
          return i.getLastError();
        }), o = this.isDifferentFromLastResult(r, n);
        (a || !r.partial || this.options.returnPartialData) && this.updateLastResult(r, n), (a || o) && ut(this.observers, "next", this.maskResult(r));
      }, e.prototype.reportError = function(r, n) {
        var i = this, a = p(p({}, G("getLastResult", function() {
          return i.getLastResult();
        })), { error: r, errors: r.graphQLErrors, networkStatus: C.error, loading: !1 });
        this.updateLastResult(a, n), ut(this.observers, "error", this.last.error = r);
      }, e.prototype.hasObservers = function() {
        return this.observers.size > 0;
      }, e.prototype.tearDownQuery = function() {
        this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach(function(r) {
          return r.unsubscribe();
        }), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0);
      }, e.prototype.transformDocument = function(r) {
        return this.queryManager.transform(r);
      }, e.prototype.maskResult = function(r) {
        return r && "data" in r ? p(p({}, r), { data: this.queryManager.maskOperation({
          document: this.query,
          data: r.data,
          fetchPolicy: this.options.fetchPolicy,
          id: this.queryId
        }) }) : r;
      }, e.prototype.resetNotifications = function() {
        this.cancelNotifyTimeout(), this.dirty = !1;
      }, e.prototype.cancelNotifyTimeout = function() {
        this.notifyTimeout && (clearTimeout(this.notifyTimeout), this.notifyTimeout = void 0);
      }, e.prototype.scheduleNotify = function() {
        var r = this;
        this.dirty || (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout(function() {
          return r.notify();
        }, 0)));
      }, e.prototype.notify = function() {
        if (this.cancelNotifyTimeout(), this.dirty && (this.options.fetchPolicy == "cache-only" || this.options.fetchPolicy == "cache-and-network" || !Le(this.queryInfo.networkStatus))) {
          var r = this.queryInfo.getDiff();
          r.fromOptimisticTransaction ? this.observe() : this.reobserveCacheFirst();
        }
        this.dirty = !1;
      }, e.prototype.reobserveCacheFirst = function() {
        var r = this.options, n = r.fetchPolicy, i = r.nextFetchPolicy;
        return n === "cache-and-network" || n === "network-only" ? this.reobserve({
          fetchPolicy: "cache-first",
          // Use a temporary nextFetchPolicy function that replaces itself with the
          // previous nextFetchPolicy value and returns the original fetchPolicy.
          nextFetchPolicy: function(a, o) {
            return this.nextFetchPolicy = i, typeof this.nextFetchPolicy == "function" ? this.nextFetchPolicy(a, o) : n;
          }
        }) : this.reobserve();
      }, e.inactiveOnCreation = new Je(), e;
    })(M)
  );
  ma(ft);
  function Nc(t) {
    globalThis.__DEV__ !== !1 && T.error(33, t.message, t.stack);
  }
  function Ua(t) {
    globalThis.__DEV__ !== !1 && t && globalThis.__DEV__ !== !1 && T.debug(34, t);
  }
  function lr(t) {
    return t === "network-only" || t === "no-cache" || t === "standby";
  }
  var je = new (Ne ? WeakMap : Map)();
  function fr(t, e) {
    var r = t[e];
    typeof r == "function" && (t[e] = function() {
      return je.set(
        t,
        // The %1e15 allows the count to wrap around to 0 safely every
        // quadrillion evictions, so there's no risk of overflow. To be
        // clear, this is more of a pedantic principle than something
        // that matters in any conceivable practical scenario.
        (je.get(t) + 1) % 1e15
      ), r.apply(this, arguments);
    });
  }
  var hr = (
    /** @class */
    (function() {
      function t(e, r) {
        r === void 0 && (r = e.generateQueryId()), this.queryId = r, this.document = null, this.lastRequestId = 1, this.stopped = !1, this.observableQuery = null;
        var n = this.cache = e.cache;
        je.has(n) || (je.set(n, 0), fr(n, "evict"), fr(n, "modify"), fr(n, "reset"));
      }
      return t.prototype.init = function(e) {
        var r = e.networkStatus || C.loading;
        return this.variables && this.networkStatus !== C.loading && !F(this.variables, e.variables) && (r = C.setVariables), F(e.variables, this.variables) || (this.lastDiff = void 0, this.cancel()), Object.assign(this, {
          document: e.document,
          variables: e.variables,
          networkError: null,
          graphQLErrors: this.graphQLErrors || [],
          networkStatus: r
        }), e.observableQuery && this.setObservableQuery(e.observableQuery), e.lastRequestId && (this.lastRequestId = e.lastRequestId), this;
      }, t.prototype.resetDiff = function() {
        this.lastDiff = void 0;
      }, t.prototype.getDiff = function() {
        var e = this, r = this.getDiffOptions();
        if (this.lastDiff && F(r, this.lastDiff.options))
          return this.lastDiff.diff;
        this.updateWatch(this.variables);
        var n = this.observableQuery;
        if (n && n.options.fetchPolicy === "no-cache")
          return { complete: !1 };
        var i = G("canonizeResults", function() {
          return e.cache.diff(r);
        });
        return this.updateLastDiff(i, r), i;
      }, t.prototype.updateLastDiff = function(e, r) {
        this.lastDiff = e ? {
          diff: e,
          options: r || this.getDiffOptions()
        } : void 0;
      }, t.prototype.getDiffOptions = function(e) {
        var r;
        return e === void 0 && (e = this.variables), {
          query: this.document,
          variables: e,
          returnPartialData: !0,
          optimistic: !0,
          canonizeResults: (r = this.observableQuery) === null || r === void 0 ? void 0 : r.options.canonizeResults
        };
      }, t.prototype.setDiff = function(e) {
        var r = this, n, i = this.lastDiff && this.lastDiff.diff;
        e && !e.complete && G("getLastError", function() {
          var a;
          return (a = r.observableQuery) === null || a === void 0 ? void 0 : a.getLastError();
        }) || (this.updateLastDiff(e), F(i && i.result, e && e.result) || (n = this.observableQuery) === null || n === void 0 || n.scheduleNotify());
      }, t.prototype.setObservableQuery = function(e) {
        e !== this.observableQuery && (this.observableQuery = e, e && (e.queryInfo = this));
      }, t.prototype.stop = function() {
        var e;
        if (!this.stopped) {
          this.stopped = !0, (e = this.observableQuery) === null || e === void 0 || e.resetNotifications(), this.cancel();
          var r = this.observableQuery;
          r && r.stopPolling();
        }
      }, t.prototype.cancel = function() {
        var e;
        (e = this.cancelWatch) === null || e === void 0 || e.call(this), this.cancelWatch = void 0;
      }, t.prototype.updateWatch = function(e) {
        var r = this;
        e === void 0 && (e = this.variables);
        var n = this.observableQuery;
        if (!(n && n.options.fetchPolicy === "no-cache")) {
          var i = p(p({}, this.getDiffOptions(e)), { watcher: this, callback: function(a) {
            return r.setDiff(a);
          } });
          (!this.lastWatch || !F(i, this.lastWatch)) && (this.cancel(), this.cancelWatch = this.cache.watch(this.lastWatch = i));
        }
      }, t.prototype.resetLastWrite = function() {
        this.lastWrite = void 0;
      }, t.prototype.shouldWrite = function(e, r) {
        var n = this.lastWrite;
        return !(n && // If cache.evict has been called since the last time we wrote this
        // data into the cache, there's a chance writing this result into
        // the cache will repair what was evicted.
        n.dmCount === je.get(this.cache) && F(r, n.variables) && F(e.data, n.result.data));
      }, t.prototype.markResult = function(e, r, n, i) {
        var a = this, o, s = new Ee(), c = X(e.errors) ? e.errors.slice(0) : [];
        if ((o = this.observableQuery) === null || o === void 0 || o.resetNotifications(), "incremental" in e && X(e.incremental)) {
          var u = ga(this.getDiff().result, e);
          e.data = u;
        } else if ("hasNext" in e && e.hasNext) {
          var l = this.getDiff();
          e.data = s.merge(l.result, e.data);
        }
        this.graphQLErrors = c, n.fetchPolicy === "no-cache" ? this.updateLastDiff({ result: e.data, complete: !0 }, this.getDiffOptions(n.variables)) : i !== 0 && (Lr(e, n.errorPolicy) ? this.cache.performTransaction(function(f) {
          if (a.shouldWrite(e, n.variables))
            f.writeQuery({
              query: r,
              data: e.data,
              variables: n.variables,
              overwrite: i === 1
            }), a.lastWrite = {
              result: e,
              variables: n.variables,
              dmCount: je.get(a.cache)
            };
          else if (a.lastDiff && a.lastDiff.diff.complete) {
            e.data = a.lastDiff.diff.result;
            return;
          }
          var h = a.getDiffOptions(n.variables), d = G("canonizeResults", function() {
            return f.diff(h);
          });
          !a.stopped && F(a.variables, n.variables) && a.updateWatch(n.variables), a.updateLastDiff(d, h), d.complete && (e.data = d.result);
        }) : this.lastWrite = void 0);
      }, t.prototype.markReady = function() {
        return this.networkError = null, this.networkStatus = C.ready;
      }, t.prototype.markError = function(e) {
        var r;
        return this.networkStatus = C.error, this.lastWrite = void 0, (r = this.observableQuery) === null || r === void 0 || r.resetNotifications(), e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors), e.networkError && (this.networkError = e.networkError), e;
      }, t;
    })()
  );
  function Lr(t, e) {
    e === void 0 && (e = "none");
    var r = e === "ignore" || e === "all", n = !xt(t);
    return !n && r && t.data && (n = !0), n;
  }
  var Rc = Object.prototype.hasOwnProperty, gi = /* @__PURE__ */ Object.create(null), Cc = (
    /** @class */
    (function() {
      function t(e) {
        var r = this;
        this.clientAwareness = {}, this.queries = /* @__PURE__ */ new Map(), this.fetchCancelFns = /* @__PURE__ */ new Map(), this.transformCache = new Hr(
          ie["queryManager.getDocumentInfo"] || 2e3
          /* defaultCacheSizes["queryManager.getDocumentInfo"] */
        ), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = new le(!1), this.noCacheWarningsByQueryId = /* @__PURE__ */ new Set();
        var n = new ca(
          function(a) {
            return r.cache.transformDocument(a);
          },
          // Allow the apollo cache to manage its own transform caches
          { cache: !1 }
        );
        this.cache = e.cache, this.link = e.link, this.defaultOptions = e.defaultOptions, this.queryDeduplication = e.queryDeduplication, this.clientAwareness = e.clientAwareness, this.localState = e.localState, this.ssrMode = e.ssrMode, this.assumeImmutableResults = e.assumeImmutableResults, this.dataMasking = e.dataMasking;
        var i = e.documentTransform;
        this.documentTransform = i ? n.concat(i).concat(n) : n, this.defaultContext = e.defaultContext || /* @__PURE__ */ Object.create(null), (this.onBroadcast = e.onBroadcast) && (this.mutationStore = /* @__PURE__ */ Object.create(null));
      }
      return t.prototype.stop = function() {
        var e = this;
        this.queries.forEach(function(r, n) {
          e.stopQueryNoBroadcast(n);
        }), this.cancelPendingFetches(H(35));
      }, t.prototype.cancelPendingFetches = function(e) {
        this.fetchCancelFns.forEach(function(r) {
          return r(e);
        }), this.fetchCancelFns.clear();
      }, t.prototype.mutate = function(e) {
        return de(this, arguments, void 0, function(r) {
          var n, i, a, o, s, c, u, l = r.mutation, f = r.variables, h = r.optimisticResponse, d = r.updateQueries, y = r.refetchQueries, m = y === void 0 ? [] : y, g = r.awaitRefetchQueries, v = g === void 0 ? !1 : g, b = r.update, E = r.onQueryUpdated, O = r.fetchPolicy, w = O === void 0 ? ((c = this.defaultOptions.mutate) === null || c === void 0 ? void 0 : c.fetchPolicy) || "network-only" : O, D = r.errorPolicy, N = D === void 0 ? ((u = this.defaultOptions.mutate) === null || u === void 0 ? void 0 : u.errorPolicy) || "none" : D, R = r.keepRootFields, P = r.context;
          return pe(this, function(V) {
            switch (V.label) {
              case 0:
                return T(l, 36), T(w === "network-only" || w === "no-cache", 37), n = this.generateMutationId(), l = this.cache.transformForLink(this.transform(l)), i = this.getDocumentInfo(l).hasClientExports, f = this.getVariables(l, f), i ? [4, this.localState.addExportedVariables(l, f, P)] : [3, 2];
              case 1:
                f = V.sent(), V.label = 2;
              case 2:
                return a = this.mutationStore && (this.mutationStore[n] = {
                  mutation: l,
                  variables: f,
                  loading: !0,
                  error: null
                }), o = h && this.markMutationOptimistic(h, {
                  mutationId: n,
                  document: l,
                  variables: f,
                  fetchPolicy: w,
                  errorPolicy: N,
                  context: P,
                  updateQueries: d,
                  update: b,
                  keepRootFields: R
                }), this.broadcastQueries(), s = this, [2, new Promise(function(fe, Z) {
                  return ar(s.getObservableFromLink(l, p(p({}, P), { optimisticResponse: o ? h : void 0 }), f, {}, !1), function(U) {
                    if (xt(U) && N === "none")
                      throw new se({
                        graphQLErrors: xr(U)
                      });
                    a && (a.loading = !1, a.error = null);
                    var J = p({}, U);
                    return typeof m == "function" && (m = m(J)), N === "ignore" && xt(J) && delete J.errors, s.markMutationResult({
                      mutationId: n,
                      result: J,
                      document: l,
                      variables: f,
                      fetchPolicy: w,
                      errorPolicy: N,
                      context: P,
                      update: b,
                      updateQueries: d,
                      awaitRefetchQueries: v,
                      refetchQueries: m,
                      removeOptimistic: o ? n : void 0,
                      onQueryUpdated: E,
                      keepRootFields: R
                    });
                  }).subscribe({
                    next: function(U) {
                      s.broadcastQueries(), (!("hasNext" in U) || U.hasNext === !1) && fe(p(p({}, U), { data: s.maskOperation({
                        document: l,
                        data: U.data,
                        fetchPolicy: w,
                        id: n
                      }) }));
                    },
                    error: function(U) {
                      a && (a.loading = !1, a.error = U), o && s.cache.removeOptimistic(n), s.broadcastQueries(), Z(U instanceof se ? U : new se({
                        networkError: U
                      }));
                    }
                  });
                })];
            }
          });
        });
      }, t.prototype.markMutationResult = function(e, r) {
        var n = this;
        r === void 0 && (r = this.cache);
        var i = e.result, a = [], o = e.fetchPolicy === "no-cache";
        if (!o && Lr(i, e.errorPolicy)) {
          if (Qe(i) || a.push({
            result: i.data,
            dataId: "ROOT_MUTATION",
            query: e.document,
            variables: e.variables
          }), Qe(i) && X(i.incremental)) {
            var s = r.diff({
              id: "ROOT_MUTATION",
              // The cache complains if passed a mutation where it expects a
              // query, so we transform mutations and subscriptions to queries
              // (only once, thanks to this.transformCache).
              query: this.getDocumentInfo(e.document).asQuery,
              variables: e.variables,
              optimistic: !1,
              returnPartialData: !0
            }), c = void 0;
            s.result && (c = ga(s.result, i)), typeof c < "u" && (i.data = c, a.push({
              result: c,
              dataId: "ROOT_MUTATION",
              query: e.document,
              variables: e.variables
            }));
          }
          var u = e.updateQueries;
          u && this.queries.forEach(function(f, h) {
            var d = f.observableQuery, y = d && d.queryName;
            if (!(!y || !Rc.call(u, y))) {
              var m = u[y], g = n.queries.get(h), v = g.document, b = g.variables, E = r.diff({
                query: v,
                variables: b,
                returnPartialData: !0,
                optimistic: !1
              }), O = E.result, w = E.complete;
              if (w && O) {
                var D = m(O, {
                  mutationResult: i,
                  queryName: v && at(v) || void 0,
                  queryVariables: b
                });
                D && a.push({
                  result: D,
                  dataId: "ROOT_QUERY",
                  query: v,
                  variables: b
                });
              }
            }
          });
        }
        if (a.length > 0 || (e.refetchQueries || "").length > 0 || e.update || e.onQueryUpdated || e.removeOptimistic) {
          var l = [];
          if (this.refetchQueries({
            updateCache: function(f) {
              o || a.forEach(function(m) {
                return f.write(m);
              });
              var h = e.update, d = !Tu(i) || Qe(i) && !i.hasNext;
              if (h) {
                if (!o) {
                  var y = f.diff({
                    id: "ROOT_MUTATION",
                    // The cache complains if passed a mutation where it expects a
                    // query, so we transform mutations and subscriptions to queries
                    // (only once, thanks to this.transformCache).
                    query: n.getDocumentInfo(e.document).asQuery,
                    variables: e.variables,
                    optimistic: !1,
                    returnPartialData: !0
                  });
                  y.complete && (i = p(p({}, i), { data: y.result }), "incremental" in i && delete i.incremental, "hasNext" in i && delete i.hasNext);
                }
                d && h(f, i, {
                  context: e.context,
                  variables: e.variables
                });
              }
              !o && !e.keepRootFields && d && f.modify({
                id: "ROOT_MUTATION",
                fields: function(m, g) {
                  var v = g.fieldName, b = g.DELETE;
                  return v === "__typename" ? m : b;
                }
              });
            },
            include: e.refetchQueries,
            // Write the final mutation.result to the root layer of the cache.
            optimistic: !1,
            // Remove the corresponding optimistic layer at the same time as we
            // write the final non-optimistic result.
            removeOptimistic: e.removeOptimistic,
            // Let the caller of client.mutate optionally determine the refetching
            // behavior for watched queries after the mutation.update function runs.
            // If no onQueryUpdated function was provided for this mutation, pass
            // null instead of undefined to disable the default refetching behavior.
            onQueryUpdated: e.onQueryUpdated || null
          }).forEach(function(f) {
            return l.push(f);
          }), e.awaitRefetchQueries || e.onQueryUpdated)
            return Promise.all(l).then(function() {
              return i;
            });
        }
        return Promise.resolve(i);
      }, t.prototype.markMutationOptimistic = function(e, r) {
        var n = this, i = typeof e == "function" ? e(r.variables, { IGNORE: gi }) : e;
        return i === gi ? !1 : (this.cache.recordOptimisticTransaction(function(a) {
          try {
            n.markMutationResult(p(p({}, r), { result: { data: i } }), a);
          } catch (o) {
            globalThis.__DEV__ !== !1 && T.error(o);
          }
        }, r.mutationId), !0);
      }, t.prototype.fetchQuery = function(e, r, n) {
        return this.fetchConcastWithInfo(this.getOrCreateQuery(e), r, n).concast.promise;
      }, t.prototype.getQueryStore = function() {
        var e = /* @__PURE__ */ Object.create(null);
        return this.queries.forEach(function(r, n) {
          e[n] = {
            variables: r.variables,
            networkStatus: r.networkStatus,
            networkError: r.networkError,
            graphQLErrors: r.graphQLErrors
          };
        }), e;
      }, t.prototype.resetErrors = function(e) {
        var r = this.queries.get(e);
        r && (r.networkError = void 0, r.graphQLErrors = []);
      }, t.prototype.transform = function(e) {
        return this.documentTransform.transformDocument(e);
      }, t.prototype.getDocumentInfo = function(e) {
        var r = this.transformCache;
        if (!r.has(e)) {
          var n = {
            // TODO These three calls (hasClientExports, shouldForceResolvers, and
            // usesNonreactiveDirective) are performing independent full traversals
            // of the transformed document. We should consider merging these
            // traversals into a single pass in the future, though the work is
            // cached after the first time.
            hasClientExports: ns(e),
            hasForcedResolvers: this.localState.shouldForceResolvers(e),
            hasNonreactiveDirective: dt(["nonreactive"], e),
            nonReactiveQuery: su(e),
            clientQuery: this.localState.clientQuery(e),
            serverQuery: fa([
              { name: "client", remove: !0 },
              { name: "connection" },
              { name: "nonreactive" },
              { name: "unmask" }
            ], e),
            defaultVars: Kr(xe(e)),
            // Transform any mutation or subscription operations to query operations
            // so we can read/write them from/to the cache.
            asQuery: p(p({}, e), { definitions: e.definitions.map(function(i) {
              return i.kind === "OperationDefinition" && i.operation !== "query" ? p(p({}, i), { operation: "query" }) : i;
            }) })
          };
          r.set(e, n);
        }
        return r.get(e);
      }, t.prototype.getVariables = function(e, r) {
        return p(p({}, this.getDocumentInfo(e).defaultVars), r);
      }, t.prototype.watchQuery = function(e) {
        var r = this.transform(e.query);
        e = p(p({}, e), { variables: this.getVariables(r, e.variables) }), typeof e.notifyOnNetworkStatusChange > "u" && (e.notifyOnNetworkStatusChange = !1);
        var n = new hr(this), i = new ft({
          queryManager: this,
          queryInfo: n,
          options: e
        });
        return i.lastQuery = r, ft.inactiveOnCreation.getValue() || this.queries.set(i.queryId, n), n.init({
          document: r,
          observableQuery: i,
          variables: i.variables
        }), i;
      }, t.prototype.query = function(e, r) {
        var n = this;
        r === void 0 && (r = this.generateQueryId()), T(e.query, 38), T(e.query.kind === "Document", 39), T(!e.returnPartialData, 40), T(!e.pollInterval, 41);
        var i = this.transform(e.query);
        return this.fetchQuery(r, p(p({}, e), { query: i })).then(function(a) {
          return a && p(p({}, a), { data: n.maskOperation({
            document: i,
            data: a.data,
            fetchPolicy: e.fetchPolicy,
            id: r
          }) });
        }).finally(function() {
          return n.stopQuery(r);
        });
      }, t.prototype.generateQueryId = function() {
        return String(this.queryIdCounter++);
      }, t.prototype.generateRequestId = function() {
        return this.requestIdCounter++;
      }, t.prototype.generateMutationId = function() {
        return String(this.mutationIdCounter++);
      }, t.prototype.stopQueryInStore = function(e) {
        this.stopQueryInStoreNoBroadcast(e), this.broadcastQueries();
      }, t.prototype.stopQueryInStoreNoBroadcast = function(e) {
        var r = this.queries.get(e);
        r && r.stop();
      }, t.prototype.clearStore = function(e) {
        return e === void 0 && (e = {
          discardWatches: !0
        }), this.cancelPendingFetches(H(42)), this.queries.forEach(function(r) {
          r.observableQuery ? r.networkStatus = C.loading : r.stop();
        }), this.mutationStore && (this.mutationStore = /* @__PURE__ */ Object.create(null)), this.cache.reset(e);
      }, t.prototype.getObservableQueries = function(e) {
        var r = this;
        e === void 0 && (e = "active");
        var n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
        return Array.isArray(e) && e.forEach(function(s) {
          if (typeof s == "string")
            i.set(s, s), a.set(s, !1);
          else if (As(s)) {
            var c = Se(r.transform(s));
            i.set(c, at(s)), a.set(c, !1);
          } else L(s) && s.query && o.add(s);
        }), this.queries.forEach(function(s, c) {
          var u = s.observableQuery, l = s.document;
          if (u) {
            if (e === "all") {
              n.set(c, u);
              return;
            }
            var f = u.queryName, h = u.options.fetchPolicy;
            if (h === "standby" || e === "active" && !u.hasObservers())
              return;
            (e === "active" || f && a.has(f) || l && a.has(Se(l))) && (n.set(c, u), f && a.set(f, !0), l && a.set(Se(l), !0));
          }
        }), o.size && o.forEach(function(s) {
          var c = yr("legacyOneTimeQuery"), u = r.getOrCreateQuery(c).init({
            document: s.query,
            variables: s.variables
          }), l = new ft({
            queryManager: r,
            queryInfo: u,
            options: p(p({}, s), { fetchPolicy: "network-only" })
          });
          T(l.queryId === c), u.setObservableQuery(l), n.set(c, l);
        }), globalThis.__DEV__ !== !1 && a.size && a.forEach(function(s, c) {
          if (!s) {
            var u = i.get(c);
            u ? globalThis.__DEV__ !== !1 && T.warn(43, u) : globalThis.__DEV__ !== !1 && T.warn(44);
          }
        }), n;
      }, t.prototype.reFetchObservableQueries = function(e) {
        var r = this;
        e === void 0 && (e = !1);
        var n = [];
        return this.getObservableQueries(e ? "all" : "active").forEach(function(i, a) {
          var o = i.options.fetchPolicy;
          G("resetLastResults", function() {
            return i.resetLastResults();
          }), (e || o !== "standby" && o !== "cache-only") && n.push(i.refetch()), (r.queries.get(a) || i.queryInfo).setDiff(null);
        }), this.broadcastQueries(), Promise.all(n);
      }, t.prototype.startGraphQLSubscription = function(e) {
        var r = this, n = e.query, i = e.variables, a = e.fetchPolicy, o = e.errorPolicy, s = o === void 0 ? "none" : o, c = e.context, u = c === void 0 ? {} : c, l = e.extensions, f = l === void 0 ? {} : l;
        n = this.transform(n), i = this.getVariables(n, i);
        var h = function(y) {
          return r.getObservableFromLink(n, u, y, f).map(function(m) {
            a !== "no-cache" && (Lr(m, s) && r.cache.write({
              query: n,
              result: m.data,
              dataId: "ROOT_SUBSCRIPTION",
              variables: y
            }), r.broadcastQueries());
            var g = xt(m), v = Bu(m);
            if (g || v) {
              var b = {};
              if (g && (b.graphQLErrors = m.errors), v && (b.protocolErrors = m.extensions[sn]), s === "none" || v)
                throw new se(b);
            }
            return s === "ignore" && delete m.errors, m;
          });
        };
        if (this.getDocumentInfo(n).hasClientExports) {
          var d = this.localState.addExportedVariables(n, i, u).then(h);
          return new M(function(y) {
            var m = null;
            return d.then(function(g) {
              return m = g.subscribe(y);
            }, y.error), function() {
              return m && m.unsubscribe();
            };
          });
        }
        return h(i);
      }, t.prototype.stopQuery = function(e) {
        this.stopQueryNoBroadcast(e), this.broadcastQueries();
      }, t.prototype.stopQueryNoBroadcast = function(e) {
        this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e);
      }, t.prototype.removeQuery = function(e) {
        var r;
        this.fetchCancelFns.delete(e), this.queries.has(e) && ((r = this.queries.get(e)) === null || r === void 0 || r.stop(), this.queries.delete(e));
      }, t.prototype.broadcastQueries = function() {
        this.onBroadcast && this.onBroadcast(), this.queries.forEach(function(e) {
          var r;
          return (r = e.observableQuery) === null || r === void 0 ? void 0 : r.notify();
        });
      }, t.prototype.getLocalState = function() {
        return this.localState;
      }, t.prototype.getObservableFromLink = function(e, r, n, i, a) {
        var o = this, s;
        a === void 0 && (a = (s = r?.queryDeduplication) !== null && s !== void 0 ? s : this.queryDeduplication);
        var c, u = this.getDocumentInfo(e), l = u.serverQuery, f = u.clientQuery;
        if (l) {
          var h = this, d = h.inFlightLinkObservables, y = h.link, m = {
            query: l,
            variables: n,
            operationName: at(l) || void 0,
            context: this.prepareContext(p(p({}, r), { forceFetch: !a })),
            extensions: i
          };
          if (r = m.context, a) {
            var g = Se(l), v = ge(n), b = d.lookup(g, v);
            if (c = b.observable, !c) {
              var E = new Ae([
                Nr(y, m)
              ]);
              c = b.observable = E, E.beforeNext(function O(w, D) {
                w === "next" && "hasNext" in D && D.hasNext ? E.beforeNext(O) : d.remove(g, v);
              });
            }
          } else
            c = new Ae([
              Nr(y, m)
            ]);
        } else
          c = new Ae([M.of({ data: {} })]), r = this.prepareContext(r);
        return f && (c = ar(c, function(O) {
          return o.localState.runResolvers({
            document: f,
            remoteResult: O,
            context: r,
            variables: n
          });
        })), c;
      }, t.prototype.getResultsFromLink = function(e, r, n) {
        var i = e.lastRequestId = this.generateRequestId(), a = this.cache.transformForLink(n.query);
        return ar(this.getObservableFromLink(a, n.context, n.variables), function(o) {
          var s = xr(o), c = s.length > 0, u = n.errorPolicy;
          if (i >= e.lastRequestId) {
            if (c && u === "none")
              throw e.markError(new se({
                graphQLErrors: s
              }));
            e.markResult(o, a, n, r), e.markReady();
          }
          var l = {
            data: o.data,
            loading: !1,
            networkStatus: C.ready
          };
          return c && u === "none" && (l.data = void 0), c && u !== "ignore" && (l.errors = s, l.networkStatus = C.error), l;
        }, function(o) {
          var s = _a(o) ? o : new se({ networkError: o });
          throw i >= e.lastRequestId && e.markError(s), s;
        });
      }, t.prototype.fetchConcastWithInfo = function(e, r, n, i) {
        var a = this;
        n === void 0 && (n = C.loading), i === void 0 && (i = r.query);
        var o = this.getVariables(i, r.variables), s = this.defaultOptions.watchQuery, c = r.fetchPolicy, u = c === void 0 ? s && s.fetchPolicy || "cache-first" : c, l = r.errorPolicy, f = l === void 0 ? s && s.errorPolicy || "none" : l, h = r.returnPartialData, d = h === void 0 ? !1 : h, y = r.notifyOnNetworkStatusChange, m = y === void 0 ? !1 : y, g = r.context, v = g === void 0 ? {} : g, b = Object.assign({}, r, {
          query: i,
          variables: o,
          fetchPolicy: u,
          errorPolicy: f,
          returnPartialData: d,
          notifyOnNetworkStatusChange: m,
          context: v
        }), E = function(R) {
          b.variables = R;
          var P = a.fetchQueryByPolicy(e, b, n);
          return (
            // If we're in standby, postpone advancing options.fetchPolicy using
            // applyNextFetchPolicy.
            b.fetchPolicy !== "standby" && // The "standby" policy currently returns [] from fetchQueryByPolicy, so
            // this is another way to detect when nothing was done/fetched.
            P.sources.length > 0 && e.observableQuery && e.observableQuery.applyNextFetchPolicy("after-fetch", r), P
          );
        }, O = function() {
          return a.fetchCancelFns.delete(e.queryId);
        };
        this.fetchCancelFns.set(e.queryId, function(R) {
          O(), setTimeout(function() {
            return w.cancel(R);
          });
        });
        var w, D;
        if (this.getDocumentInfo(b.query).hasClientExports)
          w = new Ae(this.localState.addExportedVariables(b.query, b.variables, b.context).then(E).then(function(R) {
            return R.sources;
          })), D = !0;
        else {
          var N = E(b.variables);
          D = N.fromLink, w = new Ae(N.sources);
        }
        return w.promise.then(O, O), {
          concast: w,
          fromLink: D
        };
      }, t.prototype.refetchQueries = function(e) {
        var r = this, n = e.updateCache, i = e.include, a = e.optimistic, o = a === void 0 ? !1 : a, s = e.removeOptimistic, c = s === void 0 ? o ? yr("refetchQueries") : void 0 : s, u = e.onQueryUpdated, l = /* @__PURE__ */ new Map();
        i && this.getObservableQueries(i).forEach(function(h, d) {
          l.set(d, {
            oq: h,
            lastDiff: (r.queries.get(d) || h.queryInfo).getDiff()
          });
        });
        var f = /* @__PURE__ */ new Map();
        return n && this.cache.batch({
          update: n,
          // Since you can perform any combination of cache reads and/or writes in
          // the cache.batch update function, its optimistic option can be either
          // a boolean or a string, representing three distinct modes of
          // operation:
          //
          // * false: read/write only the root layer
          // * true: read/write the topmost layer
          // * string: read/write a fresh optimistic layer with that ID string
          //
          // When typeof optimistic === "string", a new optimistic layer will be
          // temporarily created within cache.batch with that string as its ID. If
          // we then pass that same string as the removeOptimistic option, we can
          // make cache.batch immediately remove the optimistic layer after
          // running the updateCache function, triggering only one broadcast.
          //
          // However, the refetchQueries method accepts only true or false for its
          // optimistic option (not string). We interpret true to mean a temporary
          // optimistic layer should be created, to allow efficiently rolling back
          // the effect of the updateCache function, which involves passing a
          // string instead of true as the optimistic option to cache.batch, when
          // refetchQueries receives optimistic: true.
          //
          // In other words, we are deliberately not supporting the use case of
          // writing to an *existing* optimistic layer (using the refetchQueries
          // updateCache function), since that would potentially interfere with
          // other optimistic updates in progress. Instead, you can read/write
          // only the root layer by passing optimistic: false to refetchQueries,
          // or you can read/write a brand new optimistic layer that will be
          // automatically removed by passing optimistic: true.
          optimistic: o && c || !1,
          // The removeOptimistic option can also be provided by itself, even if
          // optimistic === false, to remove some previously-added optimistic
          // layer safely and efficiently, like we do in markMutationResult.
          //
          // If an explicit removeOptimistic string is provided with optimistic:
          // true, the removeOptimistic string will determine the ID of the
          // temporary optimistic layer, in case that ever matters.
          removeOptimistic: c,
          onWatchUpdated: function(h, d, y) {
            var m = h.watcher instanceof hr && h.watcher.observableQuery;
            if (m) {
              if (u) {
                l.delete(m.queryId);
                var g = u(m, d, y);
                return g === !0 && (g = m.refetch()), g !== !1 && f.set(m, g), g;
              }
              u !== null && l.set(m.queryId, { oq: m, lastDiff: y, diff: d });
            }
          }
        }), l.size && l.forEach(function(h, d) {
          var y = h.oq, m = h.lastDiff, g = h.diff, v;
          u && (g || (g = G("canonizeResults", function() {
            return r.cache.diff(y.queryInfo.getDiffOptions());
          })), v = u(y, g, m)), (!u || v === !0) && (v = y.refetch()), v !== !1 && f.set(y, v), d.indexOf("legacyOneTimeQuery") >= 0 && r.stopQueryNoBroadcast(d);
        }), c && this.cache.removeOptimistic(c), f;
      }, t.prototype.maskOperation = function(e) {
        var r, n, i, a = e.document, o = e.data;
        if (globalThis.__DEV__ !== !1) {
          var s = e.fetchPolicy, c = e.id, u = (r = xe(a)) === null || r === void 0 ? void 0 : r.operation, l = ((n = u?.[0]) !== null && n !== void 0 ? n : "o") + c;
          this.dataMasking && s === "no-cache" && !vs(a) && !this.noCacheWarningsByQueryId.has(l) && (this.noCacheWarningsByQueryId.add(l), globalThis.__DEV__ !== !1 && T.warn(
            45,
            (i = at(a)) !== null && i !== void 0 ? i : "Unnamed ".concat(u ?? "operation")
          ));
        }
        return this.dataMasking ? hc(o, a, this.cache) : o;
      }, t.prototype.maskFragment = function(e) {
        var r = e.data, n = e.fragment, i = e.fragmentName;
        return this.dataMasking ? xa(r, n, this.cache, i) : r;
      }, t.prototype.fetchQueryByPolicy = function(e, r, n) {
        var i = this, a = r.query, o = r.variables, s = r.fetchPolicy, c = r.refetchWritePolicy, u = r.errorPolicy, l = r.returnPartialData, f = r.context, h = r.notifyOnNetworkStatusChange, d = e.networkStatus;
        e.init({
          document: a,
          variables: o,
          networkStatus: n
        });
        var y = function() {
          return e.getDiff();
        }, m = function(O, w) {
          w === void 0 && (w = e.networkStatus || C.loading);
          var D = O.result;
          globalThis.__DEV__ !== !1 && !l && !F(D, {}) && Ua(O.missing);
          var N = function(R) {
            return M.of(p({ data: R, loading: Le(w), networkStatus: w }, O.complete ? null : { partial: !0 }));
          };
          return D && i.getDocumentInfo(a).hasForcedResolvers ? i.localState.runResolvers({
            document: a,
            remoteResult: { data: D },
            context: f,
            variables: o,
            onlyRunForcedResolvers: !0
          }).then(function(R) {
            return N(R.data || void 0);
          }) : u === "none" && w === C.refetch && Array.isArray(O.missing) ? N(void 0) : N(D);
        }, g = s === "no-cache" ? 0 : n === C.refetch && c !== "merge" ? 1 : 2, v = function() {
          return i.getResultsFromLink(e, g, {
            query: a,
            variables: o,
            context: f,
            fetchPolicy: s,
            errorPolicy: u
          });
        }, b = h && typeof d == "number" && d !== n && Le(n);
        switch (s) {
          default:
          case "cache-first": {
            var E = y();
            return E.complete ? {
              fromLink: !1,
              sources: [m(E, e.markReady())]
            } : l || b ? {
              fromLink: !0,
              sources: [m(E), v()]
            } : { fromLink: !0, sources: [v()] };
          }
          case "cache-and-network": {
            var E = y();
            return E.complete || l || b ? {
              fromLink: !0,
              sources: [m(E), v()]
            } : { fromLink: !0, sources: [v()] };
          }
          case "cache-only":
            return {
              fromLink: !1,
              sources: [m(y(), e.markReady())]
            };
          case "network-only":
            return b ? {
              fromLink: !0,
              sources: [m(y()), v()]
            } : { fromLink: !0, sources: [v()] };
          case "no-cache":
            return b ? {
              fromLink: !0,
              // Note that queryInfo.getDiff() for no-cache queries does not call
              // cache.diff, but instead returns a { complete: false } stub result
              // when there is no queryInfo.diff already defined.
              sources: [m(e.getDiff()), v()]
            } : { fromLink: !0, sources: [v()] };
          case "standby":
            return { fromLink: !1, sources: [] };
        }
      }, t.prototype.getOrCreateQuery = function(e) {
        return e && !this.queries.has(e) && this.queries.set(e, new hr(this, e)), this.queries.get(e);
      }, t.prototype.prepareContext = function(e) {
        e === void 0 && (e = {});
        var r = this.localState.prepareContext(e);
        return p(p(p({}, this.defaultContext), r), { clientAwareness: this.clientAwareness });
      }, t;
    })()
  ), Ac = (
    /** @class */
    (function() {
      function t(e) {
        var r = e.cache, n = e.client, i = e.resolvers, a = e.fragmentMatcher;
        this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap(), this.cache = r, n && (this.client = n), i && this.addResolvers(i), a && this.setFragmentMatcher(a);
      }
      return t.prototype.addResolvers = function(e) {
        var r = this;
        this.resolvers = this.resolvers || {}, Array.isArray(e) ? e.forEach(function(n) {
          r.resolvers = Vn(r.resolvers, n);
        }) : this.resolvers = Vn(this.resolvers, e);
      }, t.prototype.setResolvers = function(e) {
        this.resolvers = {}, this.addResolvers(e);
      }, t.prototype.getResolvers = function() {
        return this.resolvers || {};
      }, t.prototype.runResolvers = function(e) {
        return de(this, arguments, void 0, function(r) {
          var n = r.document, i = r.remoteResult, a = r.context, o = r.variables, s = r.onlyRunForcedResolvers, c = s === void 0 ? !1 : s;
          return pe(this, function(u) {
            return n ? [2, this.resolveDocument(n, i.data, a, o, this.fragmentMatcher, c).then(function(l) {
              return p(p({}, i), { data: l.result });
            })] : [2, i];
          });
        });
      }, t.prototype.setFragmentMatcher = function(e) {
        this.fragmentMatcher = e;
      }, t.prototype.getFragmentMatcher = function() {
        return this.fragmentMatcher;
      }, t.prototype.clientQuery = function(e) {
        return dt(["client"], e) && this.resolvers ? e : null;
      }, t.prototype.serverQuery = function(e) {
        return ha(e);
      }, t.prototype.prepareContext = function(e) {
        var r = this.cache;
        return p(p({}, e), {
          cache: r,
          // Getting an entry's cache key is useful for local state resolvers.
          getCacheKey: function(n) {
            return r.identify(n);
          }
        });
      }, t.prototype.addExportedVariables = function(e) {
        return de(this, arguments, void 0, function(r, n, i) {
          return n === void 0 && (n = {}), i === void 0 && (i = {}), pe(this, function(a) {
            return r ? [2, this.resolveDocument(r, this.buildRootValueFromCache(r, n) || {}, this.prepareContext(i), n).then(function(o) {
              return p(p({}, n), o.exportedVariables);
            })] : [2, p({}, n)];
          });
        });
      }, t.prototype.shouldForceResolvers = function(e) {
        var r = !1;
        return ne(e, {
          Directive: {
            enter: function(n) {
              if (n.name.value === "client" && n.arguments && (r = n.arguments.some(function(i) {
                return i.name.value === "always" && i.value.kind === "BooleanValue" && i.value.value === !0;
              }), r))
                return Bt;
            }
          }
        }), r;
      }, t.prototype.buildRootValueFromCache = function(e, r) {
        return this.cache.diff({
          query: ou(e),
          variables: r,
          returnPartialData: !0,
          optimistic: !1
        }).result;
      }, t.prototype.resolveDocument = function(e, r) {
        return de(this, arguments, void 0, function(n, i, a, o, s, c) {
          var u, l, f, h, d, y, m, g, v, b, E;
          return a === void 0 && (a = {}), o === void 0 && (o = {}), s === void 0 && (s = function() {
            return !0;
          }), c === void 0 && (c = !1), pe(this, function(O) {
            return u = gt(n), l = He(n), f = $e(l), h = this.collectSelectionsToResolve(u, f), d = u.operation, y = d ? d.charAt(0).toUpperCase() + d.slice(1) : "Query", m = this, g = m.cache, v = m.client, b = {
              fragmentMap: f,
              context: p(p({}, a), { cache: g, client: v }),
              variables: o,
              fragmentMatcher: s,
              defaultOperationType: y,
              exportedVariables: {},
              selectionsToResolve: h,
              onlyRunForcedResolvers: c
            }, E = !1, [2, this.resolveSelectionSet(u.selectionSet, E, i, b).then(function(w) {
              return {
                result: w,
                exportedVariables: b.exportedVariables
              };
            })];
          });
        });
      }, t.prototype.resolveSelectionSet = function(e, r, n, i) {
        return de(this, void 0, void 0, function() {
          var a, o, s, c, u, l = this;
          return pe(this, function(f) {
            return a = i.fragmentMap, o = i.context, s = i.variables, c = [n], u = function(h) {
              return de(l, void 0, void 0, function() {
                var d, y;
                return pe(this, function(m) {
                  return !r && !i.selectionsToResolve.has(h) ? [
                    2
                    /*return*/
                  ] : mt(h, s) ? be(h) ? [2, this.resolveField(h, r, n, i).then(function(g) {
                    var v;
                    typeof g < "u" && c.push((v = {}, v[ce(h)] = g, v));
                  })] : (Ws(h) ? d = h : (d = a[h.name.value], T(d, 21, h.name.value)), d && d.typeCondition && (y = d.typeCondition.name.value, i.fragmentMatcher(n, y, o)) ? [2, this.resolveSelectionSet(d.selectionSet, r, n, i).then(function(g) {
                    c.push(g);
                  })] : [
                    2
                    /*return*/
                  ]) : [
                    2
                    /*return*/
                  ];
                });
              });
            }, [2, Promise.all(e.selections.map(u)).then(function() {
              return Yt(c);
            })];
          });
        });
      }, t.prototype.resolveField = function(e, r, n, i) {
        return de(this, void 0, void 0, function() {
          var a, o, s, c, u, l, f, h, d, y = this;
          return pe(this, function(m) {
            return n ? (a = i.variables, o = e.name.value, s = ce(e), c = o !== s, u = n[s] || n[o], l = Promise.resolve(u), (!i.onlyRunForcedResolvers || this.shouldForceResolvers(e)) && (f = n.__typename || i.defaultOperationType, h = this.resolvers && this.resolvers[f], h && (d = h[c ? o : s], d && (l = Promise.resolve(
              // In case the resolve function accesses reactive variables,
              // set cacheSlot to the current cache instance.
              cn.withValue(this.cache, d, [
                n,
                Wt(e, a),
                i.context,
                { field: e, fragmentMap: i.fragmentMap }
              ])
            )))), [2, l.then(function(g) {
              var v, b;
              if (g === void 0 && (g = u), e.directives && e.directives.forEach(function(O) {
                O.name.value === "export" && O.arguments && O.arguments.forEach(function(w) {
                  w.name.value === "as" && w.value.kind === "StringValue" && (i.exportedVariables[w.value.value] = g);
                });
              }), !e.selectionSet || g == null)
                return g;
              var E = (b = (v = e.directives) === null || v === void 0 ? void 0 : v.some(function(O) {
                return O.name.value === "client";
              })) !== null && b !== void 0 ? b : !1;
              if (Array.isArray(g))
                return y.resolveSubSelectedArray(e, r || E, g, i);
              if (e.selectionSet)
                return y.resolveSelectionSet(e.selectionSet, r || E, g, i);
            })]) : [2, null];
          });
        });
      }, t.prototype.resolveSubSelectedArray = function(e, r, n, i) {
        var a = this;
        return Promise.all(n.map(function(o) {
          if (o === null)
            return null;
          if (Array.isArray(o))
            return a.resolveSubSelectedArray(e, r, o, i);
          if (e.selectionSet)
            return a.resolveSelectionSet(e.selectionSet, r, o, i);
        }));
      }, t.prototype.collectSelectionsToResolve = function(e, r) {
        var n = function(o) {
          return !Array.isArray(o);
        }, i = this.selectionsToResolveCache;
        function a(o) {
          if (!i.has(o)) {
            var s = /* @__PURE__ */ new Set();
            i.set(o, s), ne(o, {
              Directive: function(c, u, l, f, h) {
                c.name.value === "client" && h.forEach(function(d) {
                  n(d) && Nn(d) && s.add(d);
                });
              },
              FragmentSpread: function(c, u, l, f, h) {
                var d = r[c.name.value];
                T(d, 22, c.name.value);
                var y = a(d);
                y.size > 0 && (h.forEach(function(m) {
                  n(m) && Nn(m) && s.add(m);
                }), s.add(c), y.forEach(function(m) {
                  s.add(m);
                }));
              }
            });
          }
          return i.get(o);
        }
        return a(e);
      }, t;
    })()
  ), bi = !1, za = (
    /** @class */
    (function() {
      function t(e) {
        var r = this, n, i, a;
        if (this.resetStoreCallbacks = [], this.clearStoreCallbacks = [], !e.cache)
          throw H(16);
        var o = e.uri, s = e.credentials, c = e.headers, u = e.cache, l = e.documentTransform, f = e.ssrMode, h = f === void 0 ? !1 : f, d = e.ssrForceFetchDelay, y = d === void 0 ? 0 : d, m = e.connectToDevTools, g = e.queryDeduplication, v = g === void 0 ? !0 : g, b = e.defaultOptions, E = e.defaultContext, O = e.assumeImmutableResults, w = O === void 0 ? u.assumeImmutableResults : O, D = e.resolvers, N = e.typeDefs, R = e.fragmentMatcher, P = e.clientAwareness, V = e.name, fe = e.version, Z = e.devtools, U = e.dataMasking;
        globalThis.__DEV__ !== !1 && (Q(e, "connectToDevTools", "ApolloClient", "Please use `devtools.enabled` instead."), Q(e, "uri", "ApolloClient", "Please initialize an instance of `HttpLink` with `uri` instead."), Q(e, "credentials", "ApolloClient", "Please initialize an instance of `HttpLink` with `credentials` instead."), Q(e, "headers", "ApolloClient", "Please initialize an instance of `HttpLink` with `headers` instead."), Q(e, "name", "ApolloClient", "Please use the `clientAwareness.name` option instead."), Q(e, "version", "ApolloClient", "Please use the `clientAwareness.version` option instead."), Q(e, "typeDefs", "ApolloClient"), e.link || globalThis.__DEV__ !== !1 && T.warn(17));
        var J = e.link;
        J || (J = o ? new Oa({ uri: o, credentials: s, headers: c }) : bt.empty()), this.link = J, this.cache = u, this.disableNetworkFetches = h || y > 0, this.queryDeduplication = v, this.defaultOptions = b || /* @__PURE__ */ Object.create(null), this.typeDefs = N, this.devtoolsConfig = p(p({}, Z), { enabled: (n = Z?.enabled) !== null && n !== void 0 ? n : m }), this.devtoolsConfig.enabled === void 0 && (this.devtoolsConfig.enabled = globalThis.__DEV__ !== !1), y && setTimeout(function() {
          return r.disableNetworkFetches = !1;
        }, y), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.watchFragment = this.watchFragment.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), this.version = Br, this.localState = new Ac({
          cache: u,
          client: this,
          resolvers: D,
          fragmentMatcher: R
        }), this.queryManager = new Cc({
          cache: this.cache,
          link: this.link,
          defaultOptions: this.defaultOptions,
          defaultContext: E,
          documentTransform: l,
          queryDeduplication: v,
          ssrMode: h,
          dataMasking: !!U,
          clientAwareness: {
            name: (i = P?.name) !== null && i !== void 0 ? i : V,
            version: (a = P?.version) !== null && a !== void 0 ? a : fe
          },
          localState: this.localState,
          assumeImmutableResults: w,
          onBroadcast: this.devtoolsConfig.enabled ? function() {
            r.devToolsHookCb && r.devToolsHookCb({
              action: {},
              state: {
                queries: r.queryManager.getQueryStore(),
                mutations: r.queryManager.mutationStore || {}
              },
              dataWithOptimisticResults: r.cache.extract(!0)
            });
          } : void 0
        }), this.devtoolsConfig.enabled && this.connectToDevTools();
      }
      return Object.defineProperty(t.prototype, "prioritizeCacheValues", {
        /**
         * Whether to prioritize cache values over network results when `query` or `watchQuery` is called.
         * This will essentially turn a `"network-only"` or `"cache-and-network"` fetchPolicy into a `"cache-first"` fetchPolicy,
         * but without influencing the `fetchPolicy` of the created `ObservableQuery` long-term.
         *
         * This can e.g. be used to prioritize the cache during the first render after SSR.
         */
        get: function() {
          return this.disableNetworkFetches;
        },
        set: function(e) {
          this.disableNetworkFetches = e;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.connectToDevTools = function() {
        if (!(typeof window > "u")) {
          var e = window, r = /* @__PURE__ */ Symbol.for("apollo.devtools");
          (e[r] = e[r] || []).push(this), e.__APOLLO_CLIENT__ = this, !bi && globalThis.__DEV__ !== !1 && (bi = !0, window.document && window.top === window.self && /^(https?|file):$/.test(window.location.protocol) && setTimeout(function() {
            if (!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
              var n = window.navigator, i = n && n.userAgent, a = void 0;
              typeof i == "string" && (i.indexOf("Chrome/") > -1 ? a = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : i.indexOf("Firefox/") > -1 && (a = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), a && globalThis.__DEV__ !== !1 && T.log("Download the Apollo DevTools for a better development experience: %s", a);
            }
          }, 1e4));
        }
      }, Object.defineProperty(t.prototype, "documentTransform", {
        /**
         * The `DocumentTransform` used to modify GraphQL documents before a request
         * is made. If a custom `DocumentTransform` is not provided, this will be the
         * default document transform.
         */
        get: function() {
          return this.queryManager.documentTransform;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.stop = function() {
        this.queryManager.stop();
      }, t.prototype.watchQuery = function(e) {
        return this.defaultOptions.watchQuery && (e = It(this.defaultOptions.watchQuery, e)), this.disableNetworkFetches && (e.fetchPolicy === "network-only" || e.fetchPolicy === "cache-and-network") && (e = p(p({}, e), { fetchPolicy: "cache-first" })), globalThis.__DEV__ !== !1 && (Q(e, "canonizeResults", "client.watchQuery"), Q(e, "partialRefetch", "client.watchQuery")), this.queryManager.watchQuery(e);
      }, t.prototype.query = function(e) {
        return this.defaultOptions.query && (e = It(this.defaultOptions.query, e)), T(e.fetchPolicy !== "cache-and-network", 18), this.disableNetworkFetches && e.fetchPolicy === "network-only" && (e = p(p({}, e), { fetchPolicy: "cache-first" })), globalThis.__DEV__ !== !1 && (Q(e, "canonizeResults", "client.query"), Q(e, "notifyOnNetworkStatusChange", "client.query", "This option does not affect `client.query` and can be safely removed."), e.fetchPolicy === "standby" && globalThis.__DEV__ !== !1 && T.warn(19)), this.queryManager.query(e);
      }, t.prototype.mutate = function(e) {
        return this.defaultOptions.mutate && (e = It(this.defaultOptions.mutate, e)), this.queryManager.mutate(e);
      }, t.prototype.subscribe = function(e) {
        var r = this, n = this.queryManager.generateQueryId();
        return this.queryManager.startGraphQLSubscription(e).map(function(i) {
          return p(p({}, i), { data: r.queryManager.maskOperation({
            document: e.query,
            data: i.data,
            fetchPolicy: e.fetchPolicy,
            id: n
          }) });
        });
      }, t.prototype.readQuery = function(e, r) {
        return r === void 0 && (r = !1), this.cache.readQuery(e, r);
      }, t.prototype.watchFragment = function(e) {
        var r;
        return this.cache.watchFragment(p(p({}, e), (r = {}, r[/* @__PURE__ */ Symbol.for("apollo.dataMasking")] = this.queryManager.dataMasking, r)));
      }, t.prototype.readFragment = function(e, r) {
        return r === void 0 && (r = !1), this.cache.readFragment(e, r);
      }, t.prototype.writeQuery = function(e) {
        var r = this.cache.writeQuery(e);
        return e.broadcast !== !1 && this.queryManager.broadcastQueries(), r;
      }, t.prototype.writeFragment = function(e) {
        var r = this.cache.writeFragment(e);
        return e.broadcast !== !1 && this.queryManager.broadcastQueries(), r;
      }, t.prototype.__actionHookForDevTools = function(e) {
        this.devToolsHookCb = e;
      }, t.prototype.__requestRaw = function(e) {
        return Nr(this.link, e);
      }, t.prototype.resetStore = function() {
        var e = this;
        return Promise.resolve().then(function() {
          return e.queryManager.clearStore({
            discardWatches: !1
          });
        }).then(function() {
          return Promise.all(e.resetStoreCallbacks.map(function(r) {
            return r();
          }));
        }).then(function() {
          return e.reFetchObservableQueries();
        });
      }, t.prototype.clearStore = function() {
        var e = this;
        return Promise.resolve().then(function() {
          return e.queryManager.clearStore({
            discardWatches: !0
          });
        }).then(function() {
          return Promise.all(e.clearStoreCallbacks.map(function(r) {
            return r();
          }));
        });
      }, t.prototype.onResetStore = function(e) {
        var r = this;
        return this.resetStoreCallbacks.push(e), function() {
          r.resetStoreCallbacks = r.resetStoreCallbacks.filter(function(n) {
            return n !== e;
          });
        };
      }, t.prototype.onClearStore = function(e) {
        var r = this;
        return this.clearStoreCallbacks.push(e), function() {
          r.clearStoreCallbacks = r.clearStoreCallbacks.filter(function(n) {
            return n !== e;
          });
        };
      }, t.prototype.reFetchObservableQueries = function(e) {
        return this.queryManager.reFetchObservableQueries(e);
      }, t.prototype.refetchQueries = function(e) {
        var r = this.queryManager.refetchQueries(e), n = [], i = [];
        r.forEach(function(o, s) {
          n.push(s), i.push(o);
        });
        var a = Promise.all(i);
        return a.queries = n, a.results = i, a.catch(function(o) {
          globalThis.__DEV__ !== !1 && T.debug(20, o);
        }), a;
      }, t.prototype.getObservableQueries = function(e) {
        return e === void 0 && (e = "active"), this.queryManager.getObservableQueries(e);
      }, t.prototype.extract = function(e) {
        return this.cache.extract(e);
      }, t.prototype.restore = function(e) {
        return this.cache.restore(e);
      }, t.prototype.addResolvers = function(e) {
        this.localState.addResolvers(e);
      }, t.prototype.setResolvers = function(e) {
        this.localState.setResolvers(e);
      }, t.prototype.getResolvers = function() {
        return this.localState.getResolvers();
      }, t.prototype.setLocalStateFragmentMatcher = function(e) {
        this.localState.setFragmentMatcher(e);
      }, t.prototype.setLink = function(e) {
        this.link = this.queryManager.link = e;
      }, Object.defineProperty(t.prototype, "defaultContext", {
        get: function() {
          return this.queryManager.defaultContext;
        },
        enumerable: !1,
        configurable: !0
      }), t;
    })()
  );
  globalThis.__DEV__ !== !1 && (za.prototype.getMemoryInternals = ws);
  var Ct = /* @__PURE__ */ new Map(), jr = /* @__PURE__ */ new Map(), Wa = !0, jt = !1;
  function Ga(t) {
    return t.replace(/[\s,]+/g, " ").trim();
  }
  function Fc(t) {
    return Ga(t.source.body.substring(t.start, t.end));
  }
  function Pc(t) {
    var e = /* @__PURE__ */ new Set(), r = [];
    return t.definitions.forEach(function(n) {
      if (n.kind === "FragmentDefinition") {
        var i = n.name.value, a = Fc(n.loc), o = jr.get(i);
        o && !o.has(a) ? Wa && console.warn("Warning: fragment with name " + i + ` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`) : o || jr.set(i, o = /* @__PURE__ */ new Set()), o.add(a), e.has(a) || (e.add(a), r.push(n));
      } else
        r.push(n);
    }), p(p({}, t), { definitions: r });
  }
  function Mc(t) {
    var e = new Set(t.definitions);
    e.forEach(function(n) {
      n.loc && delete n.loc, Object.keys(n).forEach(function(i) {
        var a = n[i];
        a && typeof a == "object" && e.add(a);
      });
    });
    var r = t.loc;
    return r && (delete r.startToken, delete r.endToken), t;
  }
  function Lc(t) {
    var e = Ga(t);
    if (!Ct.has(e)) {
      var r = $o(t, {
        experimentalFragmentVariables: jt,
        allowLegacyFragmentVariables: jt
      });
      if (!r || r.kind !== "Document")
        throw new Error("Not a valid GraphQL document.");
      Ct.set(e, Mc(Pc(r)));
    }
    return Ct.get(e);
  }
  function ae(t) {
    for (var e = [], r = 1; r < arguments.length; r++)
      e[r - 1] = arguments[r];
    typeof t == "string" && (t = [t]);
    var n = t[0];
    return e.forEach(function(i, a) {
      i && i.kind === "Document" ? n += i.loc.source.body : n += i, n += t[a + 1];
    }), Lc(n);
  }
  function jc() {
    Ct.clear(), jr.clear();
  }
  function Vc() {
    Wa = !1;
  }
  function Qc() {
    jt = !0;
  }
  function qc() {
    jt = !1;
  }
  var rt = {
    gql: ae,
    resetCaches: jc,
    disableFragmentWarnings: Vc,
    enableExperimentalFragmentVariables: Qc,
    disableExperimentalFragmentVariables: qc
  };
  (function(t) {
    t.gql = rt.gql, t.resetCaches = rt.resetCaches, t.disableFragmentWarnings = rt.disableFragmentWarnings, t.enableExperimentalFragmentVariables = rt.enableExperimentalFragmentVariables, t.disableExperimentalFragmentVariables = rt.disableExperimentalFragmentVariables;
  })(ae || (ae = {}));
  ae.default = ae;
  var dr = { exports: {} }, _i;
  function Bc() {
    return _i || (_i = 1, (function(t) {
      t.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = void 0, t.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, t.exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, Object.assign(t.exports, Vt);
    })(dr)), dr.exports;
  }
  var q = Bc();
  const Uc = /* @__PURE__ */ xi(q), $a = /* @__PURE__ */ uo({
    __proto__: null,
    default: Uc
  }, [q]);
  var Ei = Yr ? /* @__PURE__ */ Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";
  function dn() {
    T("createContext" in $a, 69);
    var t = q.createContext[Ei];
    return t || (Object.defineProperty(q.createContext, Ei, {
      value: t = q.createContext({}),
      enumerable: !1,
      writable: !1,
      configurable: !0
    }), t.displayName = "ApolloContext"), t;
  }
  var Ya = function(t) {
    var e = t.client, r = t.children, n = dn(), i = q.useContext(n), a = q.useMemo(function() {
      return p(p({}, i), { client: e || i.client });
    }, [i, e]);
    return T(a.client, 71), q.createElement(n.Provider, { value: a }, r);
  };
  function Ha(t) {
    var e = q.useContext(dn()), r = t || e.client;
    return T(!!r, 79), r;
  }
  var Oi = !1, zc = "useSyncExternalStore", Wc = $a[zc], Gc = Wc || (function(t, e, r) {
    var n = e();
    // DEVIATION: Using __DEV__
    globalThis.__DEV__ !== !1 && !Oi && // DEVIATION: Not using Object.is because we know our snapshots will never
    // be exotic primitive values like NaN, which is !== itself.
    n !== e() && (Oi = !0, globalThis.__DEV__ !== !1 && T.error(92));
    var i = q.useState({
      inst: { value: n, getSnapshot: e }
    }), a = i[0].inst, o = i[1];
    return ds ? q.useLayoutEffect(function() {
      Object.assign(a, { value: n, getSnapshot: e }), pr(a) && o({ inst: a });
    }, [t, n, e]) : Object.assign(a, { value: n, getSnapshot: e }), q.useEffect(function() {
      return pr(a) && o({ inst: a }), t(function() {
        pr(a) && o({ inst: a });
      });
    }, [t]), n;
  });
  function pr(t) {
    var e = t.value, r = t.getSnapshot;
    try {
      return e !== r();
    } catch {
      return !0;
    }
  }
  var ue;
  (function(t) {
    t[t.Query = 0] = "Query", t[t.Mutation = 1] = "Mutation", t[t.Subscription = 2] = "Subscription";
  })(ue || (ue = {}));
  var ke;
  function Ti(t) {
    var e;
    switch (t) {
      case ue.Query:
        e = "Query";
        break;
      case ue.Mutation:
        e = "Mutation";
        break;
      case ue.Subscription:
        e = "Subscription";
        break;
    }
    return e;
  }
  function Ja(t) {
    ye("parser", function() {
      globalThis.__DEV__ !== !1 && T.warn(94);
    }), ke || (ke = new Hr(
      ie.parser || 1e3
      /* defaultCacheSizes.parser */
    ));
    var e = ke.get(t);
    if (e)
      return e;
    var r, n, i;
    T(!!t && !!t.kind, 95, t);
    for (var a = [], o = [], s = [], c = [], u = 0, l = t.definitions; u < l.length; u++) {
      var f = l[u];
      if (f.kind === "FragmentDefinition") {
        a.push(f);
        continue;
      }
      if (f.kind === "OperationDefinition")
        switch (f.operation) {
          case "query":
            o.push(f);
            break;
          case "mutation":
            s.push(f);
            break;
          case "subscription":
            c.push(f);
            break;
        }
    }
    T(!a.length || o.length || s.length || c.length, 96), T(
      o.length + s.length + c.length <= 1,
      97,
      t,
      o.length,
      c.length,
      s.length
    ), n = o.length ? ue.Query : ue.Mutation, !o.length && !s.length && (n = ue.Subscription);
    var h = o.length ? o : s.length ? s : c;
    T(h.length === 1, 98, t, h.length);
    var d = h[0];
    r = d.variableDefinitions || [], d.name && d.name.kind === "Name" ? i = d.name.value : i = "data";
    var y = { name: i, type: n, variables: r };
    return ke.set(t, y), y;
  }
  Ja.resetCache = function() {
    ke = void 0;
  };
  globalThis.__DEV__ !== !1 && Jr("parser", function() {
    return ke ? ke.size : 0;
  });
  function $c(t, e) {
    var r = G("parser", Ja, [t]), n = Ti(e), i = Ti(r.type);
    T(
      r.type === e,
      99,
      n,
      n,
      i
    );
  }
  function nt(t, e, r, n) {
    "use no memo";
    n === void 0 && (n = "Please remove this option.");
    var i = q.useRef(!1);
    e in t && !i.current && (globalThis.__DEV__ !== !1 && T.warn(78, r, e, n), i.current = !0);
  }
  var Yc = /* @__PURE__ */ Symbol.for("apollo.hook.wrappers");
  function Hc(t, e, r) {
    var n = r.queryManager, i = n && n[Yc], a = i && i[t];
    return a ? a(e) : e;
  }
  var Jc = Object.prototype.hasOwnProperty;
  function wi() {
  }
  var At = /* @__PURE__ */ Symbol();
  function pn(t, e) {
    return e === void 0 && (e = /* @__PURE__ */ Object.create(null)), Hc("useQuery", Kc, Ha(e && e.client))(t, e);
  }
  function Kc(t, e) {
    globalThis.__DEV__ !== !1 && (nt(e, "canonizeResults", "useQuery"), nt(e, "partialRefetch", "useQuery"), nt(e, "defaultOptions", "useQuery", "Pass the options directly to the hook instead."), nt(e, "onCompleted", "useQuery", "If your `onCompleted` callback sets local state, switch to use derived state using `data` returned from the hook instead. Use `useEffect` to perform side-effects as a result of updates to `data`."), nt(e, "onError", "useQuery", "If your `onError` callback sets local state, switch to use derived state using `data`, `error` or `errors` returned from the hook instead. Use `useEffect` if you need to perform side-effects as a result of updates to `data`, `error` or `errors`."));
    var r = Zc(t, e), n = r.result, i = r.obsQueryFields;
    return q.useMemo(function() {
      return p(p({}, n), i);
    }, [n, i]);
  }
  function Xc(t, e, r, n, i) {
    function a(f) {
      var h;
      $c(e, ue.Query);
      var d = {
        client: t,
        query: e,
        observable: (
          // See if there is an existing observable that was used to fetch the same
          // data and if so, use it instead since it will contain the proper queryId
          // to fetch the result set. This is used during SSR.
          n && n.getSSRObservable(i()) || ft.inactiveOnCreation.withValue(!n, function() {
            return G("canonizeResults", function() {
              return t.watchQuery(Ka(void 0, t, r, i()));
            });
          })
        ),
        resultData: {
          // Reuse previousData from previous InternalState (if any) to provide
          // continuity of previousData even if/when the query or client changes.
          previousData: (h = f?.resultData.current) === null || h === void 0 ? void 0 : h.data
        }
      };
      return d;
    }
    var o = q.useState(a), s = o[0], c = o[1];
    function u(f) {
      var h, d;
      Object.assign(s.observable, (h = {}, h[At] = f, h));
      var y = s.resultData;
      c(p(p({}, s), {
        // might be a different query
        query: f.query,
        resultData: Object.assign(y, {
          // We need to modify the previous `resultData` object as we rely on the
          // object reference in other places
          previousData: ((d = y.current) === null || d === void 0 ? void 0 : d.data) || y.previousData,
          current: void 0
        })
      }));
    }
    if (t !== s.client || e !== s.query) {
      var l = a(s);
      return c(l), [l, u];
    }
    return [s, u];
  }
  function Zc(t, e) {
    var r = Ha(e.client), n = q.useContext(dn()).renderPromises, i = !!n, a = r.disableNetworkFetches, o = e.ssr !== !1 && !e.skip, s = e.partialRefetch, c = nl(r, t, e, i), u = Xc(r, t, e, n, c), l = u[0], f = l.observable, h = l.resultData, d = u[1], y = c(f);
    rl(
      h,
      // might get mutated during render
      f,
      // might get mutated during render
      r,
      e,
      y
    );
    var m = q.useMemo(function() {
      return sl(f);
    }, [f]);
    tl(f, n, o);
    var g = el(h, f, r, e, y, a, s, i, {
      onCompleted: e.onCompleted || wi,
      onError: e.onError || wi
    });
    return {
      result: g,
      obsQueryFields: m,
      observable: f,
      resultData: h,
      client: r,
      onQueryExecuted: d
    };
  }
  function el(t, e, r, n, i, a, o, s, c) {
    var u = q.useRef(c);
    q.useEffect(function() {
      u.current = c;
    });
    var l = (s || a) && n.ssr === !1 && !n.skip ? (
      // If SSR has been explicitly disabled, and this function has been called
      // on the server side, return the default loading state.
      Za
    ) : n.skip || i.fetchPolicy === "standby" ? (
      // When skipping a query (ie. we're not querying for data but still want to
      // render children), make sure the `data` is cleared out and `loading` is
      // set to `false` (since we aren't loading anything).
      //
      // NOTE: We no longer think this is the correct behavior. Skipping should
      // not automatically set `data` to `undefined`, but instead leave the
      // previous data in place. In other words, skipping should not mandate that
      // previously received data is all of a sudden removed. Unfortunately,
      // changing this is breaking, so we'll have to wait until Apollo Client 4.0
      // to address this.
      eo
    ) : void 0, f = t.previousData, h = q.useMemo(function() {
      return l && Xa(l, f, e, r);
    }, [r, e, l, f]);
    return Gc(q.useCallback(function(d) {
      if (s)
        return function() {
        };
      var y = function() {
        var v = t.current, b = e.getCurrentResult();
        v && v.loading === b.loading && v.networkStatus === b.networkStatus && F(v.data, b.data) || Vr(b, t, e, r, o, d, u.current);
      }, m = function(v) {
        if (g.current.unsubscribe(), g.current = e.resubscribeAfterError(y, m), !Jc.call(v, "graphQLErrors"))
          throw v;
        var b = t.current;
        (!b || b && b.loading || !F(v, b.error)) && Vr({
          data: b && b.data,
          error: v,
          loading: !1,
          networkStatus: C.error
        }, t, e, r, o, d, u.current);
      }, g = { current: e.subscribe(y, m) };
      return function() {
        setTimeout(function() {
          return g.current.unsubscribe();
        });
      };
    }, [
      a,
      s,
      e,
      t,
      o,
      r
    ]), function() {
      return h || Si(t, e, u.current, o, r);
    }, function() {
      return h || Si(t, e, u.current, o, r);
    });
  }
  function tl(t, e, r) {
    e && r && (e.registerSSRObservable(t), t.getCurrentResult().loading && e.addObservableQueryPromise(t));
  }
  function rl(t, e, r, n, i) {
    var a;
    e[At] && !F(e[At], i) && (e.reobserve(Ka(e, r, n, i)), t.previousData = ((a = t.current) === null || a === void 0 ? void 0 : a.data) || t.previousData, t.current = void 0), e[At] = i;
  }
  function nl(t, e, r, n) {
    r === void 0 && (r = {});
    var i = r.skip;
    r.ssr, r.onCompleted, r.onError;
    var a = r.defaultOptions, o = re(r, ["skip", "ssr", "onCompleted", "onError", "defaultOptions"]);
    return function(s) {
      var c = Object.assign(o, { query: e });
      return n && (c.fetchPolicy === "network-only" || c.fetchPolicy === "cache-and-network") && (c.fetchPolicy = "cache-first"), c.variables || (c.variables = {}), i ? (c.initialFetchPolicy = c.initialFetchPolicy || c.fetchPolicy || ki(a, t.defaultOptions), c.fetchPolicy = "standby") : c.fetchPolicy || (c.fetchPolicy = s?.options.initialFetchPolicy || ki(a, t.defaultOptions)), c;
    };
  }
  function Ka(t, e, r, n) {
    var i = [], a = e.defaultOptions.watchQuery;
    return a && i.push(a), r.defaultOptions && i.push(r.defaultOptions), i.push(Ie(t && t.options, n)), i.reduce(It);
  }
  function Vr(t, e, r, n, i, a, o) {
    var s = e.current;
    s && s.data && (e.previousData = s.data), !t.error && X(t.errors) && (t.error = new se({ graphQLErrors: t.errors })), e.current = Xa(ol(t, r, i), e.previousData, r, n), a(), il(t, s?.networkStatus, o);
  }
  function il(t, e, r) {
    if (!t.loading) {
      var n = al(t);
      Promise.resolve().then(function() {
        n ? r.onError(n) : t.data && e !== t.networkStatus && t.networkStatus === C.ready && r.onCompleted(t.data);
      }).catch(function(i) {
        globalThis.__DEV__ !== !1 && T.warn(i);
      });
    }
  }
  function Si(t, e, r, n, i) {
    return t.current || Vr(e.getCurrentResult(), t, e, i, n, function() {
    }, r), t.current;
  }
  function ki(t, e) {
    var r;
    return t?.fetchPolicy || ((r = e?.watchQuery) === null || r === void 0 ? void 0 : r.fetchPolicy) || "cache-first";
  }
  function al(t) {
    return X(t.errors) ? new se({ graphQLErrors: t.errors }) : t.error;
  }
  function Xa(t, e, r, n) {
    var i = t.data;
    t.partial;
    var a = re(t, ["data", "partial"]), o = p(p({ data: i }, a), { client: n, observable: r, variables: r.variables, called: t !== Za && t !== eo, previousData: e });
    return o;
  }
  function ol(t, e, r) {
    return t.partial && r && !t.loading && (!t.data || Object.keys(t.data).length === 0) && e.options.fetchPolicy !== "cache-only" ? (e.refetch(), p(p({}, t), { loading: !0, networkStatus: C.refetch })) : t;
  }
  var Za = We({
    loading: !0,
    data: void 0,
    error: void 0,
    networkStatus: C.loading
  }), eo = We({
    loading: !1,
    data: void 0,
    error: void 0,
    networkStatus: C.ready
  });
  function sl(t) {
    return {
      refetch: t.refetch.bind(t),
      reobserve: function() {
        for (var e = [], r = 0; r < arguments.length; r++)
          e[r] = arguments[r];
        return globalThis.__DEV__ !== !1 && globalThis.__DEV__ !== !1 && T.warn(84), t.reobserve.apply(t, e);
      },
      fetchMore: t.fetchMore.bind(t),
      updateQuery: t.updateQuery.bind(t),
      startPolling: t.startPolling.bind(t),
      stopPolling: t.stopPolling.bind(t),
      subscribeToMore: t.subscribeToMore.bind(t)
    };
  }
  const ul = "/api/graphql", cl = "https://latest.cg.optimizely.com/content/v2?auth=bUebySzn1VGAOWvSyTuNHsRcfuWRQTJ05cVIAbQeauSZGFqa";
  console.log("Using GRAPH_URL:", ul);
  const ll = new Oa({
    uri: cl,
    credentials: "omit",
    headers: {
      "Content-Type": "application/json"
    },
    fetch: async (t, e) => {
      console.log("GraphQL Request:", t), console.log("GraphQL Body:", e?.body);
      const r = await fetch(t, e);
      if (console.log("GraphQL Response status:", r.status), !r.ok) {
        const n = await r.clone().text();
        console.error("GraphQL Error Response:", n);
      }
      return r;
    }
  }), fl = new Ba(), to = new za({
    link: ll,
    cache: fl,
    defaultOptions: {
      watchQuery: {
        errorPolicy: "all"
      },
      query: {
        errorPolicy: "all"
      }
    }
  }), vn = {}, hl = ae`
    query GetAllContentData($limit: Int, $skip: Int) {
  ContentData(limit: $limit, skip: $skip) {
    total
    items {
      SearchTitle
      SearchDescription
      RelativePath
      Url
    }
  }
}
    `;
  function dl(t) {
    const e = { ...vn, ...t };
    return pn(hl, e);
  }
  const pl = ae`
    query GetAllArticles($limit: Int, $skip: Int) {
  ArticlePage(limit: $limit, skip: $skip) {
    total
    items {
      _id
      Name
      RelativePath
    }
  }
}
    `;
  function vl(t) {
    const e = { ...vn, ...t };
    return pn(pl, e);
  }
  ae`
    query SearchArticles($search: String, $limit: Int, $skip: Int) {
  ArticlePage(where: {Name: {contains: $search}}, limit: $limit, skip: $skip) {
    total
    items {
      _id
      Name
      RelativePath
    }
  }
}
    `;
  ae`
    query GetAllNews($limit: Int, $skip: Int) {
  NewsPage(limit: $limit, skip: $skip) {
    total
    items {
      Name
      SearchTitle
      SearchDescription
      RelativePath
    }
  }
}
    `;
  const yl = ae`
    query SearchNews($search: String, $limit: Int, $skip: Int) {
  NewsPage(where: {SearchTitle: {contains: $search}}, limit: $limit, skip: $skip) {
    total
    items {
      Name
      SearchTitle
      SearchDescription
      RelativePath
    }
  }
}
    `;
  function ml(t) {
    const e = { ...vn, ...t };
    return pn(yl, e);
  }
  const gl = ({ initialQuery: t }) => {
    const [e, r] = me(t || ""), [n, i] = me(e);
    qr(() => {
      const u = setTimeout(() => i(e), 400);
      return () => clearTimeout(u);
    }, [e]);
    const { data: a, loading: o, error: s } = dl({ variables: { limit: 100, skip: 0 } }), c = a?.ContentData?.items?.filter((u) => u != null).filter(
      (u) => n ? u.SearchTitle?.toLowerCase().includes(n.toLowerCase()) : !0
    ) ?? [];
    return /* @__PURE__ */ x.jsxs("div", { children: [
      /* @__PURE__ */ x.jsx("h2", { children: "Content Search" }),
      /* @__PURE__ */ x.jsx(
        "input",
        {
          type: "text",
          placeholder: "Search content...",
          value: e,
          onChange: (u) => r(u.target.value)
        }
      ),
      o && /* @__PURE__ */ x.jsx("p", { children: "Loading..." }),
      s && /* @__PURE__ */ x.jsxs("p", { children: [
        "Error: ",
        s.message
      ] }),
      c.length > 0 ? /* @__PURE__ */ x.jsx("ul", { children: c.map((u) => /* @__PURE__ */ x.jsx("li", { children: /* @__PURE__ */ x.jsxs("a", { href: u.RelativePath ?? "#", children: [
        /* @__PURE__ */ x.jsx("h3", { children: u.SearchTitle }),
        /* @__PURE__ */ x.jsx("p", { children: u.SearchDescription })
      ] }) }, u.RelativePath ?? u.SearchTitle)) }) : !o && n && /* @__PURE__ */ x.jsxs("p", { children: [
        'No results found for "',
        n,
        '"'
      ] })
    ] });
  }, bl = ({ initialQuery: t }) => {
    const [e, r] = me(t || ""), [n, i] = me(e);
    qr(() => {
      const u = setTimeout(() => i(e), 400);
      return () => clearTimeout(u);
    }, [e]);
    const { data: a, loading: o, error: s } = vl({ variables: { limit: 100, skip: 0 } }), c = a?.ArticlePage?.items?.filter((u) => u != null).filter((u) => n ? u.Name?.toLowerCase().includes(n.toLowerCase()) : !0) ?? [];
    return /* @__PURE__ */ x.jsxs("div", { children: [
      /* @__PURE__ */ x.jsx("h2", { children: "Article Search" }),
      /* @__PURE__ */ x.jsx(
        "input",
        {
          type: "text",
          placeholder: "Search articles...",
          value: e,
          onChange: (u) => r(u.target.value)
        }
      ),
      o && /* @__PURE__ */ x.jsx("p", { children: "Loading..." }),
      s && /* @__PURE__ */ x.jsxs("p", { children: [
        "Error: ",
        s.message
      ] }),
      c.length > 0 ? /* @__PURE__ */ x.jsx("ul", { children: c.map((u) => /* @__PURE__ */ x.jsx("li", { children: /* @__PURE__ */ x.jsx("a", { href: u.RelativePath ?? "#", children: /* @__PURE__ */ x.jsx("h3", { children: u.Name }) }) }, u._id)) }) : !o && n && /* @__PURE__ */ x.jsxs("p", { children: [
        'No results found for "',
        n,
        '"'
      ] })
    ] });
  }, _l = ({ initialQuery: t }) => {
    const [e, r] = me(t || ""), [n, i] = me(e), [a, o] = me([]);
    qr(() => {
      const d = setTimeout(() => i(e), 400);
      return () => clearTimeout(d);
    }, [e]);
    const { data: s, loading: c, error: u } = ml({
      variables: {
        search: n || "",
        limit: 100,
        skip: 0
      }
    });
    console.log("GraphQL response:", s), console.log("Facets:", s?.NewsPage?.facets), console.log("SearchKeywords:", s?.NewsPage?.facets?.SearchKeywords);
    const l = s?.NewsPage?.items ?? [], f = s?.NewsPage?.facets?.SearchKeywords ?? [], h = oo(() => a.length === 0 ? l : l.filter((d) => !d.SearchKeywords || d.SearchKeywords.length === 0 ? !1 : d.SearchKeywords.some((y) => a.includes(y))), [l, a]);
    return /* @__PURE__ */ x.jsxs("div", { children: [
      /* @__PURE__ */ x.jsx("h2", { children: "News Search" }),
      /* @__PURE__ */ x.jsx(
        "input",
        {
          type: "text",
          placeholder: "Search news...",
          value: e,
          onChange: (d) => r(d.target.value)
        }
      ),
      f.length > 0 && /* @__PURE__ */ x.jsxs("div", { style: { marginTop: "20px", padding: "10px", border: "1px solid #ddd" }, children: [
        /* @__PURE__ */ x.jsx("h3", { children: "Filter by Keywords" }),
        f.map((d) => /* @__PURE__ */ x.jsx("div", { children: /* @__PURE__ */ x.jsxs("label", { children: [
          /* @__PURE__ */ x.jsx(
            "input",
            {
              type: "checkbox",
              checked: a.includes(d?.name || ""),
              onChange: (y) => {
                y.target.checked ? o([...a, d?.name || ""]) : o(a.filter((m) => m !== d?.name));
              }
            }
          ),
          d?.name,
          " ",
          /* @__PURE__ */ x.jsxs("strong", { children: [
            "(",
            d?.count,
            ")"
          ] })
        ] }) }, d?.name))
      ] }),
      c && /* @__PURE__ */ x.jsx("p", { children: "Loading..." }),
      u && /* @__PURE__ */ x.jsxs("p", { children: [
        "Error: ",
        u.message
      ] }),
      h.length > 0 ? /* @__PURE__ */ x.jsx("ul", { children: h.map((d, y) => /* @__PURE__ */ x.jsx("li", { children: /* @__PURE__ */ x.jsxs("a", { href: d.RelativePath ?? "#", children: [
        /* @__PURE__ */ x.jsx("h3", { children: d.SearchTitle }),
        /* @__PURE__ */ x.jsx("p", { children: d.SearchDescription })
      ] }) }, y)) }) : !c && /* @__PURE__ */ x.jsxs("p", { children: [
        "No results found",
        n ? ` for "${n}"` : ""
      ] })
    ] });
  }, ro = ({ initialQuery: t }) => {
    const [e, r] = me("content"), n = (i) => {
      (i === "content" || i === "article" || i === "news") && r(i);
    };
    return /* @__PURE__ */ x.jsxs("div", { children: [
      /* @__PURE__ */ x.jsx("h1", { children: "Search System" }),
      /* @__PURE__ */ x.jsxs(
        "select",
        {
          value: e,
          onChange: (i) => n(i.target.value),
          children: [
            /* @__PURE__ */ x.jsx("option", { value: "content", children: "All Content" }),
            /* @__PURE__ */ x.jsx("option", { value: "article", children: "Article Pages" }),
            /* @__PURE__ */ x.jsx("option", { value: "news", children: "News Pages" })
          ]
        }
      ),
      /* @__PURE__ */ x.jsx("hr", {}),
      e === "content" && /* @__PURE__ */ x.jsx(gl, { initialQuery: t }),
      e === "article" && /* @__PURE__ */ x.jsx(bl, { initialQuery: t }),
      e === "news" && /* @__PURE__ */ x.jsx(_l, { initialQuery: t })
    ] });
  };
  window.mountSearchResults = (t, e) => {
    const r = document.getElementById(t);
    if (!r) {
      console.error(`Container with id "${t}" not found`);
      return;
    }
    Ii.createRoot(r).render(
      /* @__PURE__ */ x.jsx(Vt.StrictMode, { children: /* @__PURE__ */ x.jsx(Ya, { client: to, children: /* @__PURE__ */ x.jsx(ro, { initialQuery: e }) }) })
    );
  };
  const Di = document.getElementById("root");
  Di && Ii.createRoot(Di).render(
    /* @__PURE__ */ x.jsx(Vt.StrictMode, { children: /* @__PURE__ */ x.jsx(Ya, { client: to, children: /* @__PURE__ */ x.jsx(ro, {}) }) })
  );
});
export default El();

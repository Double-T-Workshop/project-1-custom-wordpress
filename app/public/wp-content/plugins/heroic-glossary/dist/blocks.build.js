!(function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var i = (n[r] = { i: r, l: !1, exports: {} });
      return e[r].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
    }
    var n = {};
    (t.m = e),
      (t.c = n),
      (t.d = function (e, n, r) {
        t.o(e, n) ||
          Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r,
          });
      }),
      (t.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(n, "a", n), n;
      }),
      (t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ""),
      t((t.s = 12));
  })([
    function (e, t) {
      e.exports = React;
    },
    function (e, t) {
      e.exports = wp.components;
    },
    function (e, t) {
      e.exports = lodash;
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        return e.replace(/^\s+/g, "");
      }
      function i(e) {
        var t = !1;
        return (
          Object(d.forEach)(f, function (n, i) {
            r(n).split("").includes(e) && (t = !0);
          }),
          t
        );
      }
      function a(e) {
        var t = "";
        return (
          Object(d.forEachRight)(f, function (n, i) {
            r(n).split("").includes(e) && (t = i);
          }),
          t
        );
      }
      function o(e) {
        return /\w/.test(e);
      }
      function s(e) {
        if ("" === e) return "";
        var t = r(e).replace(/<[^>]*>/g, ""),
          n = t.match(/./)[0].toUpperCase();
        return isNaN(+n) ? (o(n) ? n : i(n) ? a(n) : void 0) : "0-9";
      }
      function c(e) {
        return r(e).match(/./gi).join("");
      }
      function l(e) {
        var t = {};
        return (
          e.forEach(function (e, n) {
            var r = s(e.title);
            t[r] ? t[r].push(e) : (t[r] = [e]);
          }),
          t
        );
      }
      function u(e) {
        return Object(d.mapValues)(e, function (e, t) {
          return Object(d.sortBy)(e, function (e) {
            return e.title;
          });
        });
      }
      (t.a = s), (t.b = c), (t.c = l), (t.d = u);
      var d = n(2),
        f =
          (n.n(d),
          {
            A: "\xc1\xe1 \xc0\xe0 \xc2\xe2 \u01cd\u01ce \u0102\u0103 \xc3\xe3 \u1ea2\u1ea3 \u0226\u0227 \u1ea0\u1ea1 \xc4\xe4 \xc5\xe5 \u1e00\u1e01 \u0100\u0101 \u0104\u0105 \u1d8f \u023a\u2c65 \u0200\u0201 \u1ea4\u1ea5 \u1ea6\u1ea7 \u1eaa\u1eab \u1ea8\u1ea9 \u1eac\u1ead \u1eae\u1eaf \u1eb0\u1eb1 \u1eb4\u1eb5 \u1eb2\u1eb3 \u1eb6\u1eb7 \u01fa\u01fb \u01e0\u01e1 \u01de\u01df \u0200\u0201 \u0202\u0203 \u2c6d\u0251 \u1d00 \u2c6f\u0250 \u0252 \uff21\uff41 \xc6\xe6 \u1d01 \u1d2d \u1d46 \u01fc\u01fd \u01e2\u01e3 \u1d02",
            B: "\u1e02\u1e03 \u1e04\u1e05 \u1e06\u1e07 \u0243\u0180 \u0181\u0253 \u0182\u0183 \u1d6c \u1d80 \u0299 \uff22\uff42 \u0238",
            C: "\u0106\u0107 \u0108\u0109 \u010c\u010d \u010a\u010b C\u0304c\u0304 \xc7\xe7 \u1e08\u1e09 \u023b\u023c \u0187\u0188 \u0255 \u1d04 \uff23\uff43",
            D: "\u010e\u010f \u1e0a\u1e0b \u1e10\u1e11 \u1e0c\u1e0d \u1e12\u1e13 \u1e0e\u1e0f \u0110\u0111 \xd0\xf0 D\u0326d\u0326 \u0189\u0256 \u018a\u0257 \u018b\u018c \u1d6d \u1d81 \u1d91 \u0221 \u1d05 \uff24\uff44 \xde\xfe \u0238 DZDzdz \u01f1\u01f2\u01f3 D\u017dD\u017ed\u017e \u01c4\u01c5\u01c6",
            E: "\xc9\xe9 \xc8\xe8 \xca\xea \u1e18\u1e19 \u011a\u011b \u0114\u0115 \u1ebc\u1ebd \u1e1a\u1e1b \u1eba\u1ebb \u0116\u0117 \xcb\xeb \u0112\u0113 \u0228\u0229 \u0118\u0119 \u1d92 \u0246\u0247 \u0204\u0205 \u1ebe\u1ebf \u1ec0\u1ec1 \u1ec4\u1ec5 \u1ec2\u1ec3 \u1e1c\u1e1d \u1e16\u1e17 \u1e14\u1e15 \u0206\u0207 \u1eb8\u1eb9 \u1ec6\u1ec7 \u2c78 \u1d07 \u018f\u0259 \u018e\u01dd \u0190\u025b \uff25\uff45 \u1d02 \u1d14 \xc6\xe6 \u1d01 \u1d2d \u1d46 \u01fc\u01fd \u01e2\u01e3 \u0152\u0153 \u1d6b",
            F: "\u1e1e\u1e1f \u0191\u0192 \u1d6e \u1d82 \ua730 \uff26\uff46 \ufb00 \ufb01 \ufb02",
            G: "\u01f4\u01f5 \u011e\u011f \u011c\u011d \u01e6\u01e7 \u0120\u0121 \u0122\u0123 \u1e20\u1e21 \u01e4\u01e5 \u0193\u0260 \u1d83 \u0262 \u021c\u021d \uff27\uff47 \u014a\u014b",
            H: "\u0124\u0125 \u021e\u021f \u1e26\u1e27 \u1e22\u1e23 \u1e28\u1e29 \u1e24\u1e25 \u1e2a\u1e2b H\u0331\u1e96 \u0126\u0127 \u2c67\u2c68 \u0266 \u02b0 \u029c \uff28\uff48",
            I: "\xcd\xed \xcc\xec \u012c\u012d \xce\xee \u01cf\u01d0 \xcf\xef \u1e2e\u1e2f \u0128\u0129 \u012e\u012f \u012a\u012b \u1ec8\u1ec9 \u0208\u0209 \u020a\u020b \u1eca\u1ecb \u1e2c\u1e2d \u0197\u0268 \u1d7b \u1d96 \u0130i I\u0131 \u026a \u0196\u0269 \uff29\uff49 \ufb01 IJij \u0132\u0133",
            J: "\u0134\u0135 \u0248\u0249 J\u030c\u01f0 \u0237 \u029d \u025f \u0284 \u1d0a \uff2a\uff4a IJij \u0132\u0133 LJLjlj \u01c7\u01c8\u01c9 NJNjnj \u01ca\u01cb\u01cc",
            K: "\u1e30\u1e31 \u01e8\u01e9 \u0136\u0137 \u1e32\u1e33 \u1e34\u1e35 \u0198\u0199 \u2c69\u2c6a \u1d84\u1d84 \ua740\ua741 \u1d0b \uff2b\uff4b",
            L: "\u0139\u013a \u013d\u013e \u013b\u013c \u1e36\u1e37 \u1e38\u1e39 \u1e3c\u1e3d \u1e3a\u1e3b \u0141\u0142 \u013f\u0140 \u023d\u019a \u2c60\u2c61 \u2c62\u026b \u026c \u1d85 \u026d \u0234 \u029f \uff2c\uff4c \ufb02 LJLjlj \u01c7\u01c8\u01c9",
            M: "\u1e3e\u1e3f \u1e40\u1e41 \u1e42\u1e43 \u1d6f \u1d86 \u2c6e\u0271 \u1d0d \uff2d\uff4d",
            N: "\u0143\u0144 \u01f8\u01f9 \u0147\u0148 \xd1\xf1 \u1e44\u1e45 \u0145\u0146 \u1e46\u1e47 \u1e4a\u1e4b \u1e48\u1e49 N\u0308n\u0308 \u019d\u0272 \u0220\u019e \u1d70 \u1d87 \u0273 \u0235 \u0274 \uff2e\uff4e \u014a\u014b NJNjnj \u01ca\u01cb\u01cc",
            O: "\xd3\xf3 \xd2\xf2 \u014e\u014f \xd4\xf4 \u1ed0\u1ed1 \u1ed2\u1ed3 \u1ed6\u1ed7 \u1ed4\u1ed5 \u01d1\u01d2 \xd6\xf6 \u022a\u022b \u0150\u0151 \xd5\xf5 \u1e4c\u1e4d \u1e4e\u1e4f \u022c\u022d \u022e\u022f \u0230\u0231 \xd8\xf8 \u01fe\u01ff \u01ea\u01eb \u01ec\u01ed \u014c\u014d \u1e52\u1e53 \u1e50\u1e51 \u1ece\u1ecf \u020c\u020d \u020e\u020f \u01a0\u01a1 \u1eda\u1edb \u1edc\u1edd \u1ee0\u1ee1 \u1ede\u1edf \u1ee2\u1ee3 \u1ecc\u1ecd \u1ed8\u1ed9 \u019f\u0275 \u0186\u0254 \u0222\u0223 \u2c7a \u1d0f \uff2f\uff4f \u0152\u0153 \u1d14",
            P: "\u1e54\u1e55 \u1e56\u1e57 \u2c63\u1d7d \u01a4\u01a5 P\u0303p\u0303 \u1d71 \u1d88 \u1d18 \u01f7\u01bf \uff30\uff50 \u0239",
            Q: "\u024a\u024b \u01a2\u01a3 \u02a0 \uff31\uff51 \u0239",
            R: "\u0154\u0155 \u0158\u0159 \u1e58\u1e59 \u0156\u0157 \u0210\u0211 \u0212\u0213 \u1e5a\u1e5b \u1e5c\u1e5d \u1e5e\u1e5f \u024c\u024d \u2c64\u027d \ua75a\ua75b \u1d72 \u1d89 \u027c \u027e \u1d73 \u0280 \uff32\uff52",
            S: "\u017f \u1e9e\xdf \u015a\u015b \u1e64\u1e65 \u015c\u015d \u0160\u0161 \u1e66\u1e67 \u1e60\u1e61\u1e9b \u015e\u015f \u1e62\u1e63 \u1e68\u1e69 \u0218\u0219 S\u0329s\u0329 \u1d74 \u1d8a \u0282 \u023f \ua731 \u01a9\u0283 \uff33\uff53",
            T: "\u0164\u0165 \u1e6a\u1e6b \u0162\u0163 \u1e6c\u1e6d \u021a\u021b \u1e70\u1e71 \u1e6e\u1e6f \u0166\u0167 \u023e\u2c66 \u01ac\u01ad \u01ae\u0288 T\u0308\u1e97 \u1d75 \u01ab \u0236 \u1d99 \u1d1b \uff34\uff54",
            U: "\xda\xfa \xd9\xf9 \u016c\u016d \xdb\xfb \u01d3\u01d4 \u016e\u016f \xdc\xfc \u01d7\u01d8 \u01db\u01dc \u01d9\u01da \u01d5\u01d6 \u0170\u0171 \u0168\u0169 \u1e78\u1e79 \u0172\u0173 \u016a\u016b \u1e7a\u1e7b \u1ee6\u1ee7 \u0214\u0215 \u0216\u0217 \u01af\u01b0 \u1ee8\u1ee9 \u1eea\u1eeb \u1eee\u1eef \u1eec\u1eed \u1ef0\u1ef1 \u1ee4\u1ee5 \u1e72\u1e73 \u1e76\u1e77 \u1e74\u1e75 \u0244\u0289 \u01b1\u028a \u0222\u0223 \u1d7e \u1d99 \u1d1c \uff35\uff55 \u1d6b",
            V: "\u1e7c\u1e7d \u1e7e\u1e7f \u01b2\u028b \u1d8c\u1d8c \u2c71 \u2c74 \u1d20 \u0245\u028c \uff36\uff56",
            W: "\u1e82\u1e83 \u1e80\u1e81 \u0174\u0175 \u1e84\u1e85 \u1e86\u1e87 \u1e88\u1e89 \u1e98\u1e98 \u2c72\u2c73 \u1d21 \uff37\uff57",
            X: "\u1e8c\u1e8d \u1e8a\u1e8b \u1d8d \uff38\uff58",
            Y: "\xdd\xfd \u1ef2\u1ef3 \u0176\u0177 \u1e99 \u0178\xff \u1ef8\u1ef9 \u1e8e\u1e8f \u0232\u0233 \u1ef6\u1ef7 \u1ef4\u1ef5 \u024e\u024f \u01b3\u01b4 \u028f \uff39\uff59",
            Z: "\u0179\u017a \u1e90\u1e91 \u017d\u017e \u017b\u017c \u1e92\u1e93 \u1e94\u1e95 \u01b5\u01b6 \u0224\u0225 \u2c6b\u2c6c \u1d76 \u1d8e \u0290 \u0291 \u0240 \u1d22 \u01b7\u0292 \u01b8\u01b9 \uff3a\uff5a DZDzdz \u01f1\u01f2\u01f3 D\u017dD\u017ed\u017e \u01c4\u01c5\u01c6",
            Ä: "\u00c4\u00e4",
          });
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(24);
      Object.defineProperty(t, "AllSubstringsIndexStrategy", {
        enumerable: !0,
        get: function () {
          return r.AllSubstringsIndexStrategy;
        },
      });
      var i = n(25);
      Object.defineProperty(t, "ExactWordIndexStrategy", {
        enumerable: !0,
        get: function () {
          return i.ExactWordIndexStrategy;
        },
      });
      var a = n(26);
      Object.defineProperty(t, "PrefixIndexStrategy", {
        enumerable: !0,
        get: function () {
          return a.PrefixIndexStrategy;
        },
      });
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(27);
      Object.defineProperty(t, "CaseSensitiveSanitizer", {
        enumerable: !0,
        get: function () {
          return r.CaseSensitiveSanitizer;
        },
      });
      var i = n(28);
      Object.defineProperty(t, "LowerCaseSanitizer", {
        enumerable: !0,
        get: function () {
          return i.LowerCaseSanitizer;
        },
      });
    },
    function (e, t, n) {
      var r, i;
      !(function () {
        "use strict";
        function n() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var r = arguments[t];
            if (r) {
              var i = typeof r;
              if ("string" === i || "number" === i) e.push(r);
              else if (Array.isArray(r) && r.length) {
                var o = n.apply(null, r);
                o && e.push(o);
              } else if ("object" === i)
                for (var s in r) a.call(r, s) && r[s] && e.push(s);
            }
          }
          return e.join(" ");
        }
        var a = {}.hasOwnProperty;
        "undefined" !== typeof e && e.exports
          ? ((n.default = n), (e.exports = n))
          : ((r = []),
            void 0 !==
              (i = function () {
                return n;
              }.apply(t, r)) && (e.exports = i));
      })();
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "a", function () {
          return i;
        });
      var r = {
          "0-9": [],
          A: [{ title: "Apple", description: "A green fruit" }],
          B: [{ title: "Banana", description: "A yellow fruit" }],
          C: [{ title: "Cabbage", description: "A white and green vegetable" }],
          D: [],
          E: [],
          F: [],
          G: [],
          H: [],
          I: [],
          J: [],
          K: [],
          L: [],
          M: [],
          N: [],
          O: [],
          P: [],
          Q: [],
          R: [],
          S: [],
          T: [],
          U: [],
          V: [],
          W: [],
          X: [],
          Y: [],
          Z: [],
          Ä: [],
        },
        i = {
          "0-9": [],
          A: [
            {
              title: "AJAX",
              description:
                "Ajax is a technique that web pages use to have the server perform certain processing without reloading the web page.",
            },
            {
              title: "Action",
              description:
                "In WordPress; an Action is a PHP function that is executed at specific points throughout the WordPress Core.",
            },
            {
              title: "Admin Bar",
              description:
                " An area of the screen just above your site that gives you quick access to features such as adding a new post or editing your profile. It is only visible if you are logged in.",
            },
          ],
          B: [],
          C: [
            {
              title: "CSS",
              description:
                "CSS, or Cascading Style Sheets, is a W3C open standards programming language for specifying how a web page is presented.",
            },
            {
              title: "Category",
              description:
                "Each post in WordPress can be filed under one or more categories. Thoughtful categorization allows posts to be grouped with others of similar content and aids in the navigation of a site.",
            },
          ],
          D: [
            {
              title: "DNS",
              description:
                "DNS, the domain name system, is the system that maps domain names to IP addresses. ",
            },
            {
              title: "Database",
              description:
                "A database in computing terms is software used to manage information in an organized fashion. WordPress uses the MySQL or MariaDB relational databases management system for storing and retrieving the content of your blog, such as posts, comments, and so on.",
            },
          ],
          E: [],
          F: [
            {
              title: "FTP",
              description:
                "FTP, or File Transfer Protocol, is a client-server protocol for transferring files. It is one way to download files, and the most common way to upload files to a server. ",
            },
            {
              title: "Filter",
              description:
                "In WordPress, a Filter is a function that is associated with an existing Action by specifying any existing Hook. ",
            },
          ],
          G: [
            {
              title: "Gutenberg",
              description:
                "Gutenberg is newly developed, block-oriented editor. It uses blocks to create all types of content, replacing a half-dozen inconsistent ways of customizing WordPress, bringing it in line with modern coding standards, and aligning with open web initiatives.",
            },
          ],
          H: [
            {
              title: "HTML",
              description:
                "HTML, or Hypertext Markup Language, is a markup language used to describe the semantic content of web pages.",
            },
          ],
          I: [],
          J: [
            {
              title: "JavaScript",
              description:
                "JavaScript (JS) is a programming language that WordPress uses to make certain processing occur in your web browser when it is inconvenient or impossible for the server to do that processing.",
            },
          ],
          K: [],
          L: [],
          M: [
            {
              title: "Multisite",
              description:
                "Multisite is a feature of WordPress 3.0 and later versions that allows multiple virtual sites to share a single WordPress installation.",
            },
          ],
          N: [],
          O: [],
          P: [
            { title: "PHP", description: "" },
            {
              title: "Post Type",
              description:
                "PHP is a recursive acronym for PHP: Hypertext Preprocessor. It is a popular server-side scripting language designed specifically for integration with HTML, and is used (often in conjunction with MySQL or MariaDB) in Content Management Systems and other web applications. ",
            },
          ],
          Q: [],
          R: [
            {
              title: "RTL",
              description:
                "A written language is Right-to-left when its script flows from the right side of the page to the left. ",
            },
            {
              title: "Robots.txt",
              description:
                "Web Robots are programs which traverse the Web automatically. They are also called Web Wanderers, Web Crawlers, and Spiders. Search Engines are the main Web Robots. Some Web Robots look for a file named robots.txt on your web server to see what and where they should look for content and files on your web server. Some Web Robots ignore this file. ",
            },
          ],
          S: [
            {
              title: "SSH",
              description:
                "SSH stands for Secure Shell. It is a communication protocol for connecting to remote computers over TCP/IP. Various authentication methods can be used which make SSH more secure than Telnet.",
            },
            {
              title: "SSL",
              description:
                "SSL stands for Secure Sockets Layer and is the predecessor to Transport Layer Security. These are cryptographic protocols for secure communications across an unsecured network like the Internet. ",
            },
            {
              title: "Slug",
              description:
                "A slug is a few words that describe a post or a page. Slugs are usually a URL friendly version of the post title (which has been automatically generated by WordPress), but a slug can be anything you like.",
            },
            {
              title: "Subversion",
              description:
                "Subversion is an open-source version control software tool used by the WordPress Developers to maintain and track the changes and updates to the various WordPress versions.",
            },
          ],
          T: [
            {
              title: "Tag",
              description:
                "A Tag is a keyword which describes all or part of a Post. Think of it like a Category, but smaller in scope. ",
            },
            {
              title: "Taxonomy",
              description:
                "A taxonomy allows for the classification of things. In WordPress, there are two built-in taxonomies, categories and tags. These taxonomies help further classify posts and custom post types.",
            },
            {
              title: "Transient",
              description:
                "A Transient is temporal data identified by a custom name, stored in the web server database or memory for fast access. This temporal nature and use of fast memory caching is their primary distinction from Options.",
            },
          ],
          U: [
            {
              title: "URL",
              description:
                "An address of a specific Web site or file on the Internet.",
            },
          ],
          V: [],
          W: [],
          X: [
            {
              title: "XML",
              description:
                "An address of a specific Web site or file on the Internet. ",
            },
          ],
          Y: [],
          Z: [],
          Ä: [],
        };
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(29);
      Object.defineProperty(t, "TfIdfSearchIndex", {
        enumerable: !0,
        get: function () {
          return r.TfIdfSearchIndex;
        },
      });
      var i = n(30);
      Object.defineProperty(t, "UnorderedSearchIndex", {
        enumerable: !0,
        get: function () {
          return i.UnorderedSearchIndex;
        },
      });
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        (t = t || []), (e = e || {});
        for (var n = e, r = 0; r < t.length; r++)
          if (null == (n = n[t[r]])) return null;
        return n;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(31);
      Object.defineProperty(t, "SimpleTokenizer", {
        enumerable: !0,
        get: function () {
          return r.SimpleTokenizer;
        },
      });
      var i = n(32);
      Object.defineProperty(t, "StemmingTokenizer", {
        enumerable: !0,
        get: function () {
          return i.StemmingTokenizer;
        },
      });
      var a = n(33);
      Object.defineProperty(t, "StopWordsTokenizer", {
        enumerable: !0,
        get: function () {
          return a.StopWordsTokenizer;
        },
      });
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (t.StopWordsMap = {
        a: !0,
        able: !0,
        about: !0,
        across: !0,
        after: !0,
        all: !0,
        almost: !0,
        also: !0,
        am: !0,
        among: !0,
        an: !0,
        and: !0,
        any: !0,
        are: !0,
        as: !0,
        at: !0,
        be: !0,
        because: !0,
        been: !0,
        but: !0,
        by: !0,
        can: !0,
        cannot: !0,
        could: !0,
        dear: !0,
        did: !0,
        do: !0,
        does: !0,
        either: !0,
        else: !0,
        ever: !0,
        every: !0,
        for: !0,
        from: !0,
        get: !0,
        got: !0,
        had: !0,
        has: !0,
        have: !0,
        he: !0,
        her: !0,
        hers: !0,
        him: !0,
        his: !0,
        how: !0,
        however: !0,
        i: !0,
        if: !0,
        in: !0,
        into: !0,
        is: !0,
        it: !0,
        its: !0,
        just: !0,
        least: !0,
        let: !0,
        like: !0,
        likely: !0,
        may: !0,
        me: !0,
        might: !0,
        most: !0,
        must: !0,
        my: !0,
        neither: !0,
        no: !0,
        nor: !0,
        not: !0,
        of: !0,
        off: !0,
        often: !0,
        on: !0,
        only: !0,
        or: !0,
        other: !0,
        our: !0,
        own: !0,
        rather: !0,
        said: !0,
        say: !0,
        says: !0,
        she: !0,
        should: !0,
        since: !0,
        so: !0,
        some: !0,
        than: !0,
        that: !0,
        the: !0,
        their: !0,
        them: !0,
        then: !0,
        there: !0,
        these: !0,
        they: !0,
        this: !0,
        tis: !0,
        to: !0,
        too: !0,
        twas: !0,
        us: !0,
        wants: !0,
        was: !0,
        we: !0,
        were: !0,
        what: !0,
        when: !0,
        where: !0,
        which: !0,
        while: !0,
        who: !0,
        whom: !0,
        why: !0,
        will: !0,
        with: !0,
        would: !0,
        yet: !0,
        you: !0,
        your: !0,
      });
      (r.constructor = !1),
        (r.hasOwnProperty = !1),
        (r.isPrototypeOf = !1),
        (r.propertyIsEnumerable = !1),
        (r.toLocaleString = !1),
        (r.toString = !1),
        (r.valueOf = !1);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      n(13);
    },
    function (e, t, n) {
      "use strict";
      var r = n(14),
        i = (n.n(r), n(15)),
        a = (n.n(i), n(16)),
        o = n(17),
        s = n(7),
        __ = wp.i18n.__,
        c = wp.blocks,
        l = c.registerBlockType,
        u = c.registerBlockStyle,
        d = {
          "0-9": [],
          A: [],
          B: [],
          C: [],
          D: [],
          E: [],
          F: [],
          G: [],
          H: [],
          I: [],
          J: [],
          K: [],
          L: [],
          M: [],
          N: [],
          O: [],
          P: [],
          Q: [],
          R: [],
          S: [],
          T: [],
          U: [],
          V: [],
          W: [],
          X: [],
          Y: [],
          Z: [],
          Ä: [],
        },
        f = JSON.stringify(d),
        h = JSON.stringify(s.b),
        p = wp.element.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            x: "0",
            y: "0",
            width: "20",
            height: "20",
            viewBox: "0 0 100 100",
          },
          wp.element.createElement("path", {
            fill: "#715781",
            d: "M24 62a38 38 0 0159-32V16c0-8-7-14-15-14H14C6 2 0 8 0 16v54c0 8 6 15 14 15v13c0 2 2 2 3 1l15-14c-5-7-8-15-8-23z",
          }),
          wp.element.createElement("path", {
            fill: "#715781",
            d: "M99 91L85 77c3-4 5-9 5-15a28 28 0 10-13 23l14 13 4 2 4-2c2-2 2-5 0-7z",
          })
        );
      l("htgb/block-glossary", {
        title: __("Heroic Glossary", "ht-glossary"),
        icon: { src: p, foreground: "auto" },
        category: "common",
        keywords: [
          __("glossary", "ht-glossary"),
          __("heroic glossary", "ht-glossary"),
          __("heroic", "ht-glossary"),
        ],
        example: { attributes: { entries: h, emptySections: !0 } },
        attributes: {
          entries: { type: "string", default: f },
          add: { type: "boolean", default: !0 },
          title: { type: "string", default: "" },
          description: { type: "string", default: "" },
          searchBar: { type: "boolean", default: !0 },
          filterBar: { type: "boolean", default: !0 },
          editIndex: { type: "number", default: -1 },
          editLetter: { type: "string", default: "" },
          emptySections: { type: "boolean", default: !1 },
          adding: { type: "boolean", default: !1 },
        },
        edit: o.a,
        save: a.a,
      }),
        wp.domReady(function () {
          u("htgb/block-glossary", [
            { name: "default", label: "Default", isDefault: !0 },
            { name: "boxed", label: "Boxed" },
          ]);
        });
    },
    function (e, t) {},
    function (e, t) {},
    function (e, t, n) {
      "use strict";
      function r(e) {
        var t = e.attributes,
          n = t.searchBar,
          r = t.filterBar,
          i = t.emptySections,
          a = t.className,
          c = JSON.parse(e.attributes.entries),
          l = function (e) {
            return i
              ? Object(s.omitBy)(e, function (e) {
                  return !e.length;
                })
              : e;
          };
        return wp.element.createElement(
          "div",
          { id: "hg-uid", className: o()(a, "hg-glossary") },
          wp.element.createElement(
            "div",
            { className: "hg-glossary__header" },
            n &&
              wp.element.createElement(
                "div",
                { className: "hg-search" },
                wp.element.createElement("input", {
                  "data-role": "hg-search-input",
                  placeholder: __("Search the Glossary...", "ht-glossary"),
                })
              ),
            r &&
              wp.element.createElement(
                "div",
                { className: "hg-nav" },
                wp.element.createElement(
                  "a",
                  {
                    className: "htgb_active_nav",
                    "data-role": "hg-nav-selectable",
                    href: "#all",
                    "data-name": "all",
                  },
                  __("All")
                ),
                Object(s.map)(c, function (e, t) {
                  var n = 0 === c[t].length ? "htgb_disabled" : "",
                    r = wp.element.createElement(
                      "a",
                      {
                        href: "#" + t,
                        key: t,
                        "data-name": t,
                        "data-role": "hg-nav-selectable",
                        className: n,
                      },
                      t
                    );
                  return i ? (Object(s.has)(l(c), t) ? r : "") : r;
                })
              )
          ),
          wp.element.createElement(
            "div",
            { className: "hg-content" },
            (function () {
              var e = l(c);
              return Object(s.map)(e, function (e, t) {
                return wp.element.createElement(
                  "div",
                  {
                    key: t,
                    className: "hg-letter-section",
                    "data-role": "hg-section",
                  },
                  wp.element.createElement(
                    "span",
                    {
                      className: "hg-content__letter",
                      "data-role": "hg-section-letter",
                    },
                    t
                  ),
                  e &&
                    e.map(function (e, t) {
                      return wp.element.createElement(
                        "dl",
                        { key: t, className: "hg-item", "data-role": "hg-item" },
                        wp.element.createElement("dt", {
                          className: "hg-item-title",
                          "data-role": "hg-item-title",
                          dangerouslySetInnerHTML: { __html: e.title },
                        }),
                        wp.element.createElement("dd", {
                          className: "hg-item-description",
                          "data-role": "hg-item-description",
                          dangerouslySetInnerHTML: { __html: e.description },
                        })
                      );
                    })
                );
              });
            })()
          )
        );
      }
      var i = n(0),
        a = (n.n(i), n(6)),
        o = n.n(a),
        s = n(2),
        __ = (n.n(s), wp.blockEditor.RichText, wp.i18n.__);
      t.a = r;
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        var t = e.attributes.adding;
        return [
          e.isSelected && wp.element.createElement(a.a, { key: 0, data: e }),
          e.isSelected && wp.element.createElement(o.a, { key: 1, data: e }),
          wp.element.createElement(
            u,
            { key: "htgb-block" },
            wp.element.createElement(l.a, { data: e }),
            t
              ? wp.element.createElement(c.a, { data: e })
              : wp.element.createElement(s.a, { data: e })
          ),
        ];
      }
      var i = n(0),
        a = (n.n(i), n(18)),
        o = n(19),
        s = n(20),
        c = n(37),
        l = n(38),
        u = wp.element.Fragment;
      t.a = r;
    },
    function (e, t, n) {
      "use strict";
      var r = wp,
        i = r.components,
        a = i.PanelBody,
        o = i.PanelRow,
        s = i.FormToggle,
        c = r.blockEditor.InspectorControls,
        __ = r.i18n.__,
        l = function (e) {
          var t = e.data.attributes,
            n = e.data.setAttributes,
            r = t.searchBar,
            i = t.filterBar,
            l = t.emptySections;
          return wp.element.createElement(
            c,
            null,
            wp.element.createElement(
              a,
              { title: __("Glossary Settings", "ht-glossary") },
              wp.element.createElement(
                o,
                null,
                wp.element.createElement("h4", null, "Search"),
                wp.element.createElement(s, {
                  checked: r,
                  onChange: function () {
                    return n({ searchBar: !r });
                  },
                })
              ),
              wp.element.createElement(
                o,
                null,
                wp.element.createElement("h4", null, "Filter Bar"),
                wp.element.createElement(s, {
                  checked: i,
                  onChange: function () {
                    return n({ filterBar: !i });
                  },
                })
              ),
              wp.element.createElement(
                o,
                null,
                wp.element.createElement("h4", null, "Disable Empty Sections"),
                wp.element.createElement(s, {
                  checked: l,
                  onChange: function () {
                    return n({ emptySections: !l });
                  },
                })
              )
            )
          );
        };
      t.a = l;
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        i = (n.n(r), n(7)),
        a = wp,
        o = a.components,
        s = o.ToolbarButton,
        c = o.ToolbarGroup,
        l = o.Tooltip,
        u = a.blockEditor,
        d = u.BlockControls,
        f = u.BlockIcon,
        h = a.editPost.PluginBlockSettingsMenuItem,
        __ = a.i18n.__,
        p = function (e) {
          function t() {
            confirm(
              __(
                "Are you sure you wish to import sample content? This will overwrite and delete any existing entries."
              )
            ) && a({ entries: u });
          }
          var n = e.data,
            r = n.attributes,
            a = n.setAttributes,
            o = r.adding,
            u = JSON.stringify(i.a);
          return wp.element.createElement(
            d,
            null,
            wp.element.createElement(
              c,
              null,
              wp.element.createElement(
                l,
                {
                  text: o
                    ? __("Cancel", "ht-glossary")
                    : __("Add Glossary Item", "ht-glossary"),
                },
                wp.element.createElement(
                  s,
                  {
                    onClick: function () {
                      return a({ adding: !o });
                    },
                  },
                  wp.element.createElement(f, {
                    className: "htgb-action",
                    icon: o ? "no" : "plus",
                    showColors: !0,
                  })
                )
              ),
              wp.element.createElement(h, {
                allowedBlocks: ["htgb/block-glossary"],
                icon: "welcome-add-page",
                label: __("Import sample content", "ht-glossary"),
                onClick: t,
              })
            )
          );
        };
      t.a = p;
    },
    function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var i = n(0),
        a = (n.n(i), n(6)),
        o = n.n(a),
        s = n(2),
        c = (n.n(s), n(3)),
        l = n(21),
        u = n(22),
        d = n(1),
        f = (n.n(d), n(36)),
        h =
          (n.n(f),
          (function () {
            function e(e, t) {
              var n = [],
                _n = !0,
                r = !1,
                i = void 0;
              try {
                for (
                  var a, o = e[Symbol.iterator]();
                  !(_n = (a = o.next()).done) &&
                  (n.push(a.value), !t || n.length !== t);
                  _n = !0
                );
              } catch (e) {
                (r = !0), (i = e);
              } finally {
                try {
                  !_n && o.return && o.return();
                } finally {
                  if (r) throw i;
                }
              }
              return n;
            }
            return function (t, n) {
              if (Array.isArray(t)) return t;
              if (Symbol.iterator in Object(t)) return e(t, n);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            };
          })()),
        __ = wp.i18n.__,
        p = function (e) {
          var t = JSON.parse(e.data.attributes.entries),
            n = e.data.attributes,
            a = n.editIndex,
            p = n.editLetter,
            m = n.searchBar,
            g = n.filterBar,
            y = n.emptySections,
            b = Object(i.useState)({ currentSearch: "", content: {} }),
            v = h(b, 2),
            w = v[0],
            S = v[1],
            k = Object(i.useState)({ pop: !1 }),
            _ = h(k, 2),
            O = _[0],
            x = _[1],
            E = Object(i.useState)({ toggle: null }),
            T = h(E, 2),
            j = T[0],
            P = T[1],
            I = j.toggle,
            z = function () {
              P({ toggle: null }), S({ currentSearch: "", content: {} });
            },
            C = function (e) {
              P({ toggle: e });
            };
          Object(i.useEffect)(function () {
            e.data.setAttributes({ entries: JSON.stringify(Object(c.d)(t)) });
          });
          var M =
              "" !== w.currentSearch
                ? w.content
                : (function () {
                    return null === I ? t : r({}, I, Object(s.get)(t, I));
                  })(),
            N = function (n, r) {
              var i = t,
                a = i[r].filter(function (e) {
                  return e.title !== i[r][n].title;
                });
              (i[r] = a), e.data.setAttributes({ entries: JSON.stringify(i) });
            },
            A = function (e) {
              return y
                ? Object(s.omitBy)(e, function (e) {
                    return !e.length;
                  })
                : e;
            },
            D = function (n, r) {
              return wp.element.createElement(
                "div",
                { className: "hg_controls" },
                wp.element.createElement(
                  d.Button,
                  {
                    onClick: function () {
                      "" !== n &&
                        -1 !== r &&
                        e.data.setAttributes({
                          title: t[n][r].title,
                          description: t[n][r].description,
                        }),
                        e.data.setAttributes({
                          editIndex: r,
                          editLetter: n,
                          adding: !0,
                        });
                    },
                    isPrimary: !0,
                  },
                  wp.element.createElement(d.Dashicon, { icon: "edit" })
                ),
                wp.element.createElement(
                  d.Button,
                  {
                    isPrimary: !0,
                    onClick: function () {
                      return x({ pop: !0, index: r, section: n });
                    },
                  },
                  wp.element.createElement(d.Dashicon, { icon: "trash" })
                )
              );
            };
          return wp.element.createElement(
            "div",
            { className: "hg-glossary-wrapper" },
            e.data.isSelected &&
              wp.element.createElement(
                "div",
                { className: "hg-add-item" },
                wp.element.createElement(
                  "div",
                  { className: "hg-add-item__content" },
                  __("Click", "ht-glossary"),
                  wp.element.createElement(
                    d.Tooltip,
                    {
                      text: e.data.attributes.adding
                        ? __("Cancel", "ht-glossary")
                        : __("Add Glossary Item", "ht-glossary"),
                    },
                    wp.element.createElement(
                      d.Button,
                      {
                        onClick: function () {
                          return e.data.setAttributes({
                            adding: !e.data.attributes.adding,
                          });
                        },
                      },
                      wp.element.createElement(f.BlockIcon, {
                        className: "htgb-action",
                        icon: e.data.attributes.adding ? "no" : "plus",
                        showColors: !0,
                      })
                    )
                  ),
                  __("to add a new Glossary Item", "ht-glossary")
                )
              ),
            O.pop &&
              wp.element.createElement(
                d.Modal,
                {
                  onRequestClose: function () {
                    return x({ pop: !1 });
                  },
                  title: __("Delete Glossary Item?", "ht-glossary"),
                },
                wp.element.createElement(
                  d.Button,
                  {
                    isPrimary: !0,
                    onClick: function () {
                      N(O.index, O.section), x({ pop: !1 });
                    },
                  },
                  __("Delete Item", "ht-glossary")
                )
              ),
            wp.element.createElement(
              "div",
              { id: "hg-uid", className: o()(e.data.className, "hg-glossary") },
              wp.element.createElement(
                "div",
                { className: "hg-glossary__header" },
                wp.element.createElement(
                  "div",
                  { className: "hg-search" },
                  !0 === m &&
                    wp.element.createElement(l.a, {
                      "data-role": "hg-search-input",
                      onChange: function (e) {
                        return Object(u.a)(e, w, S, t);
                      },
                    })
                ),
                (function () {
                  return (
                    g &&
                    wp.element.createElement(
                      "div",
                      { className: "hg-nav" },
                      wp.element.createElement(
                        "a",
                        {
                          onClick: function () {
                            return z();
                          },
                          href: "#all",
                          "data-name": "all",
                          "data-role": "hg-nav-selectable",
                          className: null === j.toggle ? "htgb_active_nav" : "",
                        },
                        __("All")
                      ),
                      Object(s.map)(t, function (e, n) {
                        var r = j.toggle === n ? "htgb_active_nav" : "",
                          i = 0 === t[n].length ? "htgb_disabled" : "",
                          a = wp.element.createElement(
                            "a",
                            {
                              onClick: function () {
                                return C(n);
                              },
                              href: "#" + n,
                              key: n,
                              "data-name": n,
                              "data-role": "hg-nav-selectable",
                              className: r + " " + i,
                            },
                            n
                          );
                        return y && 0 === t[n].length ? null : a;
                      })
                    )
                  );
                })()
              ),
              wp.element.createElement(
                "div",
                { className: "hg-content" },
                (function () {
                  return Object(s.map)(A(M), function (e, t) {
                    return wp.element.createElement(
                      "div",
                      {
                        key: t,
                        className: "hg-letter-section",
                        "data-role": "hg-section",
                      },
                      wp.element.createElement(
                        "span",
                        {
                          className: "hg-content__letter",
                          "data-role": "hg-section-letter",
                        },
                        t
                      ),
                      e &&
                        e.map(function (e, n) {
                          var r = a === n && p === t;
                          return wp.element.createElement(
                            "dl",
                            {
                              key: n,
                              className: r ? "hg-edititem" : "hg-item",
                              "data-role": "hg-item",
                            },
                            wp.element.createElement("dt", {
                              className: "hg-item-title",
                              "data-role": "hg-item-title",
                              dangerouslySetInnerHTML: { __html: e.title },
                            }),
                            wp.element.createElement("dd", {
                              className: "hg-item-description",
                              "data-role": "hg-item-description",
                              dangerouslySetInnerHTML: { __html: e.description },
                            }),
                            D(t, n)
                          );
                        })
                    );
                  });
                })()
              )
            )
          );
        };
      t.a = p;
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        i = (n.n(r), n(1)),
        __ = (n.n(i), wp.i18n.__),
        a = function (e) {
          var t = e.onChange;
          return wp.element.createElement(
            "div",
            { className: "hg-search-area" },
            wp.element.createElement(i.TextControl, {
              placeholder: __("Search the Glossary", "ht-glossary"),
              "data-role": "htgb-search",
              onChange: t,
            })
          );
        };
      t.a = a;
    },
    function (e, t, n) {
      "use strict";
      function r(e, t, n, r) {
        var s = new a.Search("title");
        s.addIndex("title"),
          s.addIndex("description"),
          n(Object.assign({ currentSearch: e }, t)),
          i(s, r);
        var c = s.search(e);
        if (c.length) {
          var l = Object(o.c)(c);
          n({ content: l || {} });
        }
      }
      function i(e, t) {
        var n = [];
        for (var r in t)
          t[r].forEach(function (e) {
            n.push(e);
          });
        e.addDocuments(n);
      }
      t.a = r;
      var a = n(23),
        o = (n.n(a), n(3));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(4);
      Object.defineProperty(t, "AllSubstringsIndexStrategy", {
        enumerable: !0,
        get: function () {
          return r.AllSubstringsIndexStrategy;
        },
      }),
        Object.defineProperty(t, "ExactWordIndexStrategy", {
          enumerable: !0,
          get: function () {
            return r.ExactWordIndexStrategy;
          },
        }),
        Object.defineProperty(t, "PrefixIndexStrategy", {
          enumerable: !0,
          get: function () {
            return r.PrefixIndexStrategy;
          },
        });
      var i = n(5);
      Object.defineProperty(t, "CaseSensitiveSanitizer", {
        enumerable: !0,
        get: function () {
          return i.CaseSensitiveSanitizer;
        },
      }),
        Object.defineProperty(t, "LowerCaseSanitizer", {
          enumerable: !0,
          get: function () {
            return i.LowerCaseSanitizer;
          },
        });
      var a = n(8);
      Object.defineProperty(t, "TfIdfSearchIndex", {
        enumerable: !0,
        get: function () {
          return a.TfIdfSearchIndex;
        },
      }),
        Object.defineProperty(t, "UnorderedSearchIndex", {
          enumerable: !0,
          get: function () {
            return a.UnorderedSearchIndex;
          },
        });
      var o = n(10);
      Object.defineProperty(t, "SimpleTokenizer", {
        enumerable: !0,
        get: function () {
          return o.SimpleTokenizer;
        },
      }),
        Object.defineProperty(t, "StemmingTokenizer", {
          enumerable: !0,
          get: function () {
            return o.StemmingTokenizer;
          },
        }),
        Object.defineProperty(t, "StopWordsTokenizer", {
          enumerable: !0,
          get: function () {
            return o.StopWordsTokenizer;
          },
        });
      var s = n(34);
      Object.defineProperty(t, "Search", {
        enumerable: !0,
        get: function () {
          return s.Search;
        },
      });
      var c = n(11);
      Object.defineProperty(t, "StopWordsMap", {
        enumerable: !0,
        get: function () {
          return c.StopWordsMap;
        },
      });
      var l = n(35);
      Object.defineProperty(t, "TokenHighlighter", {
        enumerable: !0,
        get: function () {
          return l.TokenHighlighter;
        },
      });
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })();
      t.AllSubstringsIndexStrategy = (function () {
        function e() {
          r(this, e);
        }
        return (
          i(e, [
            {
              key: "expandToken",
              value: function (e) {
                for (var t, n = [], r = 0, i = e.length; r < i; ++r) {
                  t = "";
                  for (var a = r; a < i; ++a) (t += e.charAt(a)), n.push(t);
                }
                return n;
              },
            },
          ]),
          e
        );
      })();
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })();
      t.ExactWordIndexStrategy = (function () {
        function e() {
          r(this, e);
        }
        return (
          i(e, [
            {
              key: "expandToken",
              value: function (e) {
                return e ? [e] : [];
              },
            },
          ]),
          e
        );
      })();
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })();
      t.PrefixIndexStrategy = (function () {
        function e() {
          r(this, e);
        }
        return (
          i(e, [
            {
              key: "expandToken",
              value: function (e) {
                for (var t = [], n = "", r = 0, i = e.length; r < i; ++r)
                  (n += e.charAt(r)), t.push(n);
                return t;
              },
            },
          ]),
          e
        );
      })();
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })();
      t.CaseSensitiveSanitizer = (function () {
        function e() {
          r(this, e);
        }
        return (
          i(e, [
            {
              key: "sanitize",
              value: function (e) {
                return e ? e.trim() : "";
              },
            },
          ]),
          e
        );
      })();
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })();
      t.LowerCaseSanitizer = (function () {
        function e() {
          r(this, e);
        }
        return (
          i(e, [
            {
              key: "sanitize",
              value: function (e) {
                return e ? e.toLocaleLowerCase().trim() : "";
              },
            },
          ]),
          e
        );
      })();
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TfIdfSearchIndex = void 0);
      var i =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        a = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        o = n(9),
        s = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(o);
      t.TfIdfSearchIndex = (function () {
        function e(t) {
          r(this, e),
            (this._uidFieldName = t),
            (this._tokenToIdfCache = {}),
            (this._tokenMap = {});
        }
        return (
          a(e, [
            {
              key: "indexDocument",
              value: function (e, t, n) {
                this._tokenToIdfCache = {};
                var r,
                  a = this._tokenMap;
                "object" !== i(a[e])
                  ? (a[e] = r =
                      {
                        $numDocumentOccurrences: 0,
                        $totalNumOccurrences: 1,
                        $uidMap: {},
                      })
                  : ((r = a[e]), r.$totalNumOccurrences++);
                var o = r.$uidMap;
                "object" !== i(o[t])
                  ? (r.$numDocumentOccurrences++,
                    (o[t] = { $document: n, $numTokenOccurrences: 1 }))
                  : o[t].$numTokenOccurrences++;
              },
            },
            {
              key: "search",
              value: function (e, t) {
                for (var n = {}, r = 0, a = e.length; r < a; r++) {
                  var o = e[r],
                    s = this._tokenMap[o];
                  if (!s) return [];
                  if (0 === r)
                    for (
                      var c = Object.keys(s.$uidMap), l = 0, u = c.length;
                      l < u;
                      l++
                    ) {
                      var d = c[l];
                      n[d] = s.$uidMap[d].$document;
                    }
                  else
                    for (
                      var c = Object.keys(n), l = 0, u = c.length;
                      l < u;
                      l++
                    ) {
                      var d = c[l];
                      "object" !== i(s.$uidMap[d]) && delete n[d];
                    }
                }
                var f = [];
                for (var d in n) f.push(n[d]);
                var h = this._createCalculateTfIdf();
                return f.sort(function (n, r) {
                  return h(e, r, t) - h(e, n, t);
                });
              },
            },
            {
              key: "_createCalculateIdf",
              value: function () {
                var e = this._tokenMap,
                  t = this._tokenToIdfCache;
                return function (n, r) {
                  if (!t[n]) {
                    var i =
                      "undefined" !== typeof e[n]
                        ? e[n].$numDocumentOccurrences
                        : 0;
                    t[n] = 1 + Math.log(r.length / (1 + i));
                  }
                  return t[n];
                };
              },
            },
            {
              key: "_createCalculateTfIdf",
              value: function () {
                var e = this._tokenMap,
                  t = this._uidFieldName,
                  n = this._createCalculateIdf();
                return function (r, i, a) {
                  for (var o = 0, c = 0, l = r.length; c < l; ++c) {
                    var u = r[c],
                      d = n(u, a);
                    d === 1 / 0 && (d = 0);
                    var f;
                    f =
                      t instanceof Array ? i && (0, s.default)(i, t) : i && i[t];
                    o +=
                      ("undefined" !== typeof e[u] &&
                      "undefined" !== typeof e[u].$uidMap[f]
                        ? e[u].$uidMap[f].$numTokenOccurrences
                        : 0) * d;
                  }
                  return o;
                };
              },
            },
          ]),
          e
        );
      })();
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        a = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
      t.UnorderedSearchIndex = (function () {
        function e() {
          r(this, e), (this._tokenToUidToDocumentMap = {});
        }
        return (
          a(e, [
            {
              key: "indexDocument",
              value: function (e, t, n) {
                "object" !== i(this._tokenToUidToDocumentMap[e]) &&
                  (this._tokenToUidToDocumentMap[e] = {}),
                  (this._tokenToUidToDocumentMap[e][t] = n);
              },
            },
            {
              key: "search",
              value: function (e, t) {
                for (
                  var n = {},
                    r = this._tokenToUidToDocumentMap,
                    a = 0,
                    o = e.length;
                  a < o;
                  a++
                ) {
                  var s = e[a],
                    c = r[s];
                  if (!c) return [];
                  if (0 === a)
                    for (
                      var l = Object.keys(c), u = 0, d = l.length;
                      u < d;
                      u++
                    ) {
                      var f = l[u];
                      n[f] = c[f];
                    }
                  else
                    for (
                      var l = Object.keys(n), u = 0, d = l.length;
                      u < d;
                      u++
                    ) {
                      var f = l[u];
                      "object" !== i(c[f]) && delete n[f];
                    }
                }
                for (
                  var l = Object.keys(n), h = [], a = 0, d = l.length;
                  a < d;
                  a++
                ) {
                  var f = l[a];
                  h.push(n[f]);
                }
                return h;
              },
            },
          ]),
          e
        );
      })();
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        a = /[^a-z\u0430-\u044f\u04510-9\-']+/i;
      t.SimpleTokenizer = (function () {
        function e() {
          r(this, e);
        }
        return (
          i(e, [
            {
              key: "tokenize",
              value: function (e) {
                return e.split(a).filter(function (e) {
                  return e;
                });
              },
            },
          ]),
          e
        );
      })();
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })();
      t.StemmingTokenizer = (function () {
        function e(t, n) {
          r(this, e), (this._stemmingFunction = t), (this._tokenizer = n);
        }
        return (
          i(e, [
            {
              key: "tokenize",
              value: function (e) {
                return this._tokenizer.tokenize(e).map(this._stemmingFunction);
              },
            },
          ]),
          e
        );
      })();
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.StopWordsTokenizer = void 0);
      var i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        a = n(11);
      t.StopWordsTokenizer = (function () {
        function e(t) {
          r(this, e), (this._tokenizer = t);
        }
        return (
          i(e, [
            {
              key: "tokenize",
              value: function (e) {
                return this._tokenizer.tokenize(e).filter(function (e) {
                  return !a.StopWordsMap[e];
                });
              },
            },
          ]),
          e
        );
      })();
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Search = void 0);
      var i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        a = n(9),
        o = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(a),
        s = n(4),
        c = n(5),
        l = n(8),
        u = n(10);
      t.Search = (function () {
        function e(t) {
          if ((r(this, e), !t))
            throw Error(
              "js-search requires a uid field name constructor parameter"
            );
          (this._uidFieldName = t),
            (this._indexStrategy = new s.PrefixIndexStrategy()),
            (this._searchIndex = new l.TfIdfSearchIndex(t)),
            (this._sanitizer = new c.LowerCaseSanitizer()),
            (this._tokenizer = new u.SimpleTokenizer()),
            (this._documents = []),
            (this._searchableFields = []);
        }
        return (
          i(e, [
            {
              key: "addDocument",
              value: function (e) {
                this.addDocuments([e]);
              },
            },
            {
              key: "addDocuments",
              value: function (e) {
                (this._documents = this._documents.concat(e)),
                  this.indexDocuments_(e, this._searchableFields);
              },
            },
            {
              key: "addIndex",
              value: function (e) {
                this._searchableFields.push(e),
                  this.indexDocuments_(this._documents, [e]);
              },
            },
            {
              key: "search",
              value: function (e) {
                var t = this._tokenizer.tokenize(this._sanitizer.sanitize(e));
                return this._searchIndex.search(t, this._documents);
              },
            },
            {
              key: "indexDocuments_",
              value: function (e, t) {
                this._initialized = !0;
                for (
                  var n = this._indexStrategy,
                    r = this._sanitizer,
                    i = this._searchIndex,
                    a = this._tokenizer,
                    s = this._uidFieldName,
                    c = 0,
                    l = e.length;
                  c < l;
                  c++
                ) {
                  var u,
                    d = e[c];
                  u = s instanceof Array ? (0, o.default)(d, s) : d[s];
                  for (var f = 0, h = t.length; f < h; f++) {
                    var p,
                      m = t[f];
                    if (
                      ((p = m instanceof Array ? (0, o.default)(d, m) : d[m]),
                      null != p &&
                        "string" !== typeof p &&
                        p.toString &&
                        (p = p.toString()),
                      "string" === typeof p)
                    )
                      for (
                        var g = a.tokenize(r.sanitize(p)), y = 0, b = g.length;
                        y < b;
                        y++
                      )
                        for (
                          var v = g[y], w = n.expandToken(v), S = 0, k = w.length;
                          S < k;
                          S++
                        ) {
                          var _ = w[S];
                          i.indexDocument(_, u, d);
                        }
                  }
                }
              },
            },
            {
              key: "indexStrategy",
              set: function (e) {
                if (this._initialized)
                  throw Error(
                    "IIndexStrategy cannot be set after initialization"
                  );
                this._indexStrategy = e;
              },
              get: function () {
                return this._indexStrategy;
              },
            },
            {
              key: "sanitizer",
              set: function (e) {
                if (this._initialized)
                  throw Error("ISanitizer cannot be set after initialization");
                this._sanitizer = e;
              },
              get: function () {
                return this._sanitizer;
              },
            },
            {
              key: "searchIndex",
              set: function (e) {
                if (this._initialized)
                  throw Error("ISearchIndex cannot be set after initialization");
                this._searchIndex = e;
              },
              get: function () {
                return this._searchIndex;
              },
            },
            {
              key: "tokenizer",
              set: function (e) {
                if (this._initialized)
                  throw Error("ITokenizer cannot be set after initialization");
                this._tokenizer = e;
              },
              get: function () {
                return this._tokenizer;
              },
            },
          ]),
          e
        );
      })();
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TokenHighlighter = void 0);
      var i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        a = n(4),
        o = n(5);
      t.TokenHighlighter = (function () {
        function e(t, n, i) {
          r(this, e),
            (this._indexStrategy = t || new a.PrefixIndexStrategy()),
            (this._sanitizer = n || new o.LowerCaseSanitizer()),
            (this._wrapperTagName = i || "mark");
        }
        return (
          i(e, [
            {
              key: "highlight",
              value: function (e, t) {
                for (
                  var n = this._wrapText("").length,
                    r = Object.create(null),
                    i = 0,
                    a = t.length;
                  i < a;
                  i++
                )
                  for (
                    var o = this._sanitizer.sanitize(t[i]),
                      s = this._indexStrategy.expandToken(o),
                      c = 0,
                      l = s.length;
                    c < l;
                    c++
                  ) {
                    var u = s[c];
                    r[u] ? r[u].push(o) : (r[u] = [o]);
                  }
                for (var d = "", f = "", h = 0, i = 0, p = e.length; i < p; i++) {
                  var m = e.charAt(i);
                  " " === m
                    ? ((d = ""), (f = ""), (h = i + 1))
                    : ((d += m), (f += this._sanitizer.sanitize(m))),
                    r[f] &&
                      r[f].indexOf(f) >= 0 &&
                      ((d = this._wrapText(d)),
                      (e = e.substring(0, h) + d + e.substring(i + 1)),
                      (i += n),
                      (p += n));
                }
                return e;
              },
            },
            {
              key: "_wrapText",
              value: function (e) {
                var t = this._wrapperTagName;
                return "<" + t + ">" + e + "</" + t + ">";
              },
            },
          ]),
          e
        );
      })();
    },
    function (e, t) {
      e.exports = wp.blockEditor;
    },
    function (e, t, n) {
      "use strict";
      var r = n(3),
        i = n(1),
        a = (n.n(i), n(0)),
        o =
          (n.n(a),
          (function () {
            function e(e, t) {
              var n = [],
                _n = !0,
                r = !1,
                i = void 0;
              try {
                for (
                  var a, o = e[Symbol.iterator]();
                  !(_n = (a = o.next()).done) &&
                  (n.push(a.value), !t || n.length !== t);
                  _n = !0
                );
              } catch (e) {
                (r = !0), (i = e);
              } finally {
                try {
                  !_n && o.return && o.return();
                } finally {
                  if (r) throw i;
                }
              }
              return n;
            }
            return function (t, n) {
              if (Array.isArray(t)) return t;
              if (Symbol.iterator in Object(t)) return e(t, n);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            };
          })()),
        s = wp.blockEditor.RichText,
        c = wp.i18n,
        __ = c.__,
        l =
          (c.printf,
          function (e) {
            var t = e.data.attributes,
              n = t.title,
              c = t.description,
              l = t.entries,
              u = t.editIndex,
              d = t.editLetter,
              f = e.data.setAttributes,
              h = Object(a.useState)({
                added: !1,
                updated: !1,
                titleSelected: !1,
                descriptionSelected: !1,
              }),
              p = o(h, 2),
              m = (p[0], p[1]),
              g = JSON.parse(l),
              y = Object(a.useRef)(),
              b = Object(a.useRef)(),
              v = null,
              w = null,
              S = function () {
                k(!0), f({ adding: !1 });
              },
              k = function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (n && c) {
                  var t = Object(r.b)(n),
                    i = { title: t, description: c },
                    a = -1 !== u,
                    o = Object(r.a)(t),
                    s = Object(r.a)(d);
                  a
                    ? a &&
                      (s === o
                        ? (g[d][u] = { title: t, description: c })
                        : (g[d].splice(u, u + 1), g[o].push(i)),
                      f({
                        entries: JSON.stringify(g),
                        title: "",
                        description: "",
                        editIndex: -1,
                        editLetter: "",
                        message: sprintf(
                          __("Glossary item %s updated", "ht-glossary"),
                          n
                        ),
                      }),
                      m({
                        updated: !0,
                        titleSelected: !0,
                        descriptionSelected: !1,
                      }))
                    : (g[o] ? g[o].push(i) : g["0-9"].push(i),
                      f({
                        entries: JSON.stringify(g),
                        title: "",
                        description: "",
                        message: sprintf(
                          __("Glossary item %s added", "ht-glossary"),
                          n
                        ),
                      }),
                      m({
                        added: !0,
                        titleSelected: !0,
                        descriptionSelected: !1,
                      })),
                    e || _();
                }
              },
              _ = function () {
                setTimeout(function () {
                  m({ updated: !1, added: !1 });
                }, 2500);
              },
              O = function () {
                f({
                  title: "",
                  description: "",
                  editIndex: -1,
                  editLetter: "",
                  adding: !1,
                }),
                  m({ updated: !1, added: !1, titleSelected: !0 });
              };
            return (
              Object(a.useEffect)(function () {
                (v = y.current),
                  (w = b.current),
                  ("" != n && "" != c) || v.focus();
              }),
              wp.element.createElement(
                "div",
                { className: "htgb-addView" },
                wp.element.createElement(s, {
                  identifier: __("Title", "ht-glossary"),
                  className: "htgb_richText",
                  value: n,
                  keepPlaceholderOnFocus: !1,
                  placeholder: __("Enter Title here...", "ht-glossary"),
                  onChange: function (e) {
                    m({ titleSelected: !1 });
                    var t = e.replace(/<\/?[^>]+(>|$)/g, "");
                    f({ title: t });
                  },
                  allowedFormats: [],
                  ref: y,
                }),
                wp.element.createElement(s, {
                  className: "htgb_richText",
                  identifier: __("Description", "ht-glossary"),
                  placeholder: __("Enter Description here..", "ht-glossary"),
                  value: c,
                  onChange: function (e) {
                    f({ description: e });
                  },
                  ref: b,
                }),
                wp.element.createElement(
                  i.Button,
                  {
                    isPrimary: !0,
                    onClick: function () {
                      S();
                    },
                  },
                  (function () {
                    return -1 !== u && "" !== d
                      ? __("Update", "ht-glossary")
                      : __("Insert", "ht-glossary");
                  })()
                ),
                wp.element.createElement(
                  i.Button,
                  {
                    isPrimary: !0,
                    className: "htgb_add_more",
                    onClick: function () {
                      return k(!1);
                    },
                  },
                  __("Insert and add another", "ht-glossary")
                ),
                wp.element.createElement(
                  i.Button,
                  {
                    onClick: function () {
                      O();
                    },
                  },
                  __("Cancel", "ht-glossary")
                )
              )
            );
          });
      t.a = l;
    },
    function (e, t, n) {
      "use strict";
      var r = n(1),
        i = (n.n(r), n(39)),
        a = (n.n(i), n(0)),
        o =
          (n.n(a),
          function (e) {
            var t = e.data.attributes.message,
              n = e.data.setAttributes,
              o = function () {
                setTimeout(function () {
                  n({ message: "" });
                }, 3500);
              };
            return (
              Object(a.useEffect)(function () {
                "" != t && o();
              }),
              wp.element.createElement(
                i.Fragment,
                null,
                t && wp.element.createElement(r.Notice, { status: "info" }, t)
              )
            );
          });
      t.a = o;
    },
    function (e, t) {
      e.exports = wp.element;
    },
  ]);
  
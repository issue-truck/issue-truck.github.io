exports.id = 544;
exports.ids = [544];
exports.modules = {

/***/ 3508:
/***/ ((module) => {

// Exports
module.exports = {
	"section_title": "CustomHead_section_title__QQBnD"
};


/***/ }),

/***/ 3708:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__Z8PUO",
	"inner": "Header_inner__tfr0u",
	"title": "Header_title__Otn70",
	"nav_area": "Header_nav_area__6KVpk"
};


/***/ }),

/***/ 9622:
/***/ ((module) => {

// Exports
module.exports = {
	"post_list": "PostList_post_list__or0rl",
	"post_item": "PostList_post_item__gAdVi",
	"title": "PostList_title__loLkl",
	"thumbnail_wrap": "PostList_thumbnail_wrap__YuxdB",
	"thumbnail": "PostList_thumbnail__6_oQk",
	"text_area": "PostList_text_area__Hzd11",
	"profile_area": "PostList_profile_area___aTjn",
	"profile_image_wrap": "PostList_profile_image_wrap__tCTuE",
	"profile": "PostList_profile__VGF_a",
	"description": "PostList_description__4f3RM",
	"tag_list": "PostList_tag_list__esmQD",
	"tag_link": "PostList_tag_link__Uoytb",
	"reaction_area": "PostList_reaction_area__wPga2",
	"reaction_list": "PostList_reaction_list__OMkQv",
	"reaction_item": "PostList_reaction_item__skpHM",
	"reaction_text": "PostList_reaction_text__ZARah",
	"hide": "PostList_hide__o3Um5",
	"comment": "PostList_comment__bIrwL",
	"meta": "PostList_meta__VCFLX",
	"reading_time": "PostList_reading_time__6CBMQ",
	"bookmark": "PostList_bookmark__PCpOK"
};


/***/ }),

/***/ 2776:
/***/ ((module) => {

// Exports
module.exports = {
	"section_title": "SectionTitle_section_title__HS_xr"
};


/***/ }),

/***/ 3037:
/***/ ((module) => {

// Exports
module.exports = {
	"post_content": "posts_post_content__wH2Ce",
	"container": "posts_container__s9Z_H",
	"-list": "posts_-list__bsl0U",
	"inner": "posts_inner__HIBjT",
	"project_list": "posts_project_list__oDV_y",
	"ifram_wrap": "posts_ifram_wrap__P_ew9",
	"iframe": "posts_iframe__gpxHG",
	"meta": "posts_meta__8YunI",
	"date": "posts_date__vuNf0",
	"post_title": "posts_post_title__lWpp0",
	"tag_area": "posts_tag_area__BghHa",
	"tag": "posts_tag__ZKXGK",
	"view_badge": "posts_view_badge__OHBm0",
	"pagination": "posts_pagination__R_03T",
	"-active": "posts_-active__YVJEi"
};


/***/ }),

/***/ 2862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export CustomHead */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CustomHead_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3508);
/* harmony import */ var _CustomHead_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_CustomHead_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3284);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4696);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);







const cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default().bind((_CustomHead_module_scss__WEBPACK_IMPORTED_MODULE_6___default()));
const CustomHead = ({ type , post , project  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    let lang = "en";
    if (type === "post" && post) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: `${post.title} | ${_lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .SITE_NAME */ .px}`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "description",
                    content: post.description
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:url",
                    content: `${_lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .SITE_URL */ ._O}/${router.asPath}`,
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:type",
                    content: "website",
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:site_name",
                    content: `${post.title} | ${_lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .SITE_NAME */ .px}`,
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:title",
                    content: `${post.title} | ${_lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .SITE_NAME */ .px}`,
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:description",
                    content: post.description,
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:image",
                    content: post.ogImage.url,
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:locale",
                    content: _lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .LANG_LOCALE */ .l$[lang],
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "twitter:card",
                    content: "summary_large_image",
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "twitter:domain",
                    content: `https://${_lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .SITE_NAME */ .px}.github.io/`,
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "twitter:url",
                    content: `${_lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .SITE_URL */ ._O}/${router.asPath}`,
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "twitter:title",
                    content: `${post.title} | ${_lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .SITE_NAME */ .px}`,
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "twitter:description",
                    content: post.description,
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "twitter:image",
                    content: post.ogImage.url,
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "twitter:data1",
                    content: `Dev | ${_lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .SITE_NAME */ .px}`,
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "article:published_time",
                    content: post.date,
                    "data-gatsby-head": "true"
                })
            ]
        });
    } else if (type === "project" && project) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: `${project.title} | ${_lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .SITE_NAME */ .px}`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "description",
                    content: project.description
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:url",
                    content: `${_lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .SITE_URL */ ._O}/${router.asPath}`,
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:type",
                    content: "website",
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:site_name",
                    content: `${project.title} | ${_lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .SITE_NAME */ .px}`,
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:title",
                    content: `${project.title} | ${_lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .SITE_NAME */ .px}`,
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:description",
                    content: project.description,
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:image",
                    content: project.ogImage.url,
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:locale",
                    content: _lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .LANG_LOCALE */ .l$[lang],
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "twitter:card",
                    content: "summary_large_image",
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "twitter:domain",
                    content: `https://${_lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .SITE_NAME */ .px}.github.io/`,
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "twitter:url",
                    content: `${_lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .SITE_URL */ ._O}/${router.asPath}`,
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "twitter:title",
                    content: `${project.title} | ${_lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .SITE_NAME */ .px}`,
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "twitter:description",
                    content: project.description,
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "twitter:image",
                    content: project.ogImage.url,
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "article:published_time",
                    content: project.date,
                    "data-gatsby-head": "true"
                })
            ]
        });
    } else {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: _lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .SITE_NAME */ .px
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "description",
                    content: _lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .SITE_DESCRIPTION */ .vk[lang]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:url",
                    content: `${_lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .SITE_URL */ ._O}/${router.asPath}`,
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:type",
                    content: "website",
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:site_name",
                    content: _lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .SITE_NAME */ .px,
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:title",
                    content: _lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .SITE_NAME */ .px,
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:description",
                    content: _lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .SITE_DESCRIPTION */ .vk[lang],
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:image",
                    content: "/favicons/ms-icon-310x310.png",
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:locale",
                    content: _lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .LANG_LOCALE */ .l$[lang],
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "twitter:card",
                    content: "summary_large_image",
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "twitter:domain",
                    content: `https://${_lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .SITE_NAME */ .px}.github.io/`,
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "twitter:url",
                    content: `${_lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .SITE_URL */ ._O}/${router.asPath}`,
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "twitter:title",
                    content: _lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .SITE_NAME */ .px,
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "twitter:description",
                    content: _lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .SITE_DESCRIPTION */ .vk[lang],
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "twitter:image",
                    content: "/favicons/ms-icon-310x310.png",
                    "data-gatsby-head": "true"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "twitter:data1",
                    content: `Dev | ${_lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .SITE_NAME */ .px}`,
                    "data-gatsby-head": "true"
                })
            ]
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomHead);


/***/ }),

/***/ 6853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3708);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3284);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4696);







const cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default().bind((_Header_module_scss__WEBPACK_IMPORTED_MODULE_6___default()));
const Header = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: cx("header"),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: cx("inner"),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                    className: cx("title"),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: `/`,
                        children: _lib_constants__WEBPACK_IMPORTED_MODULE_5__/* .AUTHOR */ .S7
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                    className: cx("nav_area"),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: `/posts/1`,
                        className: cx("nav_item"),
                        children: "Posts"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 7354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export PostList */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3284);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PostList_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9622);
/* harmony import */ var _PostList_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_PostList_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4696);








// import Fire from "./assets/fire.svg";
const cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default().bind((_PostList_module_scss__WEBPACK_IMPORTED_MODULE_7___default()));
const PostList = ({ postList  })=>{
    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const generateRandomReaction = ()=>{
        const reactionList = [];
        for(let i = 0; i < 5; i++){
            reactionList.push(Math.random() < 0.5 ? 0 : Math.floor(Math.random() * 10) + 1);
        }
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                reactionList.map((reaction, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: cx("reaction_item", {
                            hide: reaction === 0
                        })
                    }, i)),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: cx("reaction_text"),
                    children: [
                        sumArray(reactionList),
                        " reactions"
                    ]
                })
            ]
        });
    };
    const randomCommentCount = ()=>{
        return Math.floor(Math.random() * 10);
    };
    function sumArray(arr) {
        let sum = 0;
        for(let i = 0; i < arr.length; i++){
            sum += arr[i];
        }
        return sum;
    }
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setIsClient(true);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: cx("post_list"),
            children: postList.map((post, i)=>{
                const fromNow = moment__WEBPACK_IMPORTED_MODULE_5___default()(post.date, "YYYYMMDD-HH:mm:ss").fromNow();
                const date = String(fromNow).includes("hours") ? fromNow : moment__WEBPACK_IMPORTED_MODULE_5___default()(post.date).format("MMM D, YYYY");
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    className: cx("post_item"),
                    href: `/post/${post.slug}`,
                    "aria-label": post.title,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: cx("thumbnail_wrap"),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                src: post.coverImage ? post.coverImage : `https://source.unsplash.com/random/?programming`,
                                className: cx("thumbnail"),
                                alt: post.title,
                                width: 100,
                                height: 100
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: cx("text_area"),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: cx("profile_area"),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: cx("profile_image_wrap"),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                src: "/favicons/apple-icon-114x114.png",
                                                className: cx("profile"),
                                                alt: post.title,
                                                width: 20,
                                                height: 20
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: cx("writer"),
                                            children: _lib_constants__WEBPACK_IMPORTED_MODULE_6__/* .AUTHOR */ .S7
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    className: cx("title"),
                                    children: post.title
                                }),
                                isClient && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: cx("reaction_area"),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: cx("reaction_list"),
                                            children: generateRandomReaction()
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: cx("comment"),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "24",
                                                    height: "24",
                                                    role: "img",
                                                    "aria-labelledby": "a9r26cjkehaw9aroeeenqzf7sqj1obph",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                                            id: "a9r26cjkehaw9aroeeenqzf7sqj1obph",
                                                            children: "Comments"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"
                                                        })
                                                    ]
                                                }),
                                                randomCommentCount(),
                                                " comment"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: cx("meta"),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: cx("date"),
                                            children: date
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: cx("reading_time"),
                                            children: [
                                                post.readingTime,
                                                " min read"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: cx("bookmark"),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "24",
                                                height: "24",
                                                "aria-hidden": "true",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }, i);
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostList);


/***/ }),

/***/ 6457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export SectionTitle */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SectionTitle_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2776);
/* harmony import */ var _SectionTitle_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SectionTitle_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3284);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__);




const cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default().bind((_SectionTitle_module_scss__WEBPACK_IMPORTED_MODULE_3___default()));
const SectionTitle = ({ title  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: cx("section_title"),
        children: title
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionTitle);


/***/ }),

/***/ 4011:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jq": () => (/* binding */ getPosts)
/* harmony export */ });
/* unused harmony exports getPostBySlug, getPostByFile */
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var globby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3059);
/* harmony import */ var globby__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(globby__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_posts_page___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8010);





const postsDirectory = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(process.cwd(), "_posts");
function getPostBySlug(slug, fields = []) {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data , content  } = matter(fileContents);
    const items = {};
    // Ensure only the minimal needed data is exposed
    fields.forEach((field)=>{
        if (field === "slug") {
            items[field] = realSlug;
        }
        if (field === "content") {
            items[field] = content;
        }
        if (typeof data[field] !== "undefined") {
            items[field] = data[field];
        }
    });
    return items;
}
function getPostByFile(file, fields = []) {
    let fileNameText = file.split("/");
    let fileName = fileNameText[fileNameText.length - 1];
    const realSlug = fileName.replace(/\.md$/, "");
    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(file, "utf8");
    const { data , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
    const items = {};
    // Ensure only the minimal needed data is exposed
    fields.forEach((field)=>{
        if (field === "slug") {
            items[field] = realSlug;
        }
        if (field === "content") {
            items[field] = content;
        }
        if (field === "readingTime") {
            items[field] = Math.ceil(content.length / 1000);
        }
        if (field === "tag") {
            if (data[field]) {
                items[field] = [
                    ...data[field].split(", ")
                ];
            }
            return;
        }
        if (typeof data[field] !== "undefined") {
            items[field] = data[field];
        }
    });
    return items;
}
async function getPosts({ tag , file ="**" , fields =[] , count , page  }) {
    const files = await globby__WEBPACK_IMPORTED_MODULE_3___default()([
        `_posts/${file}.md`
    ]);
    let posts = files.map((file)=>getPostByFile(file, fields)).sort((post1, post2)=>post1.date > post2.date ? -1 : 1);
    if (tag) posts = posts.filter((post)=>post.tag.includes(tag));
    if (page) {
        const totalPageCount = Math.ceil(posts.length / _pages_posts_page___WEBPACK_IMPORTED_MODULE_4__.PAGE_SIZE);
        const totalPageGroupCount = Math.ceil(Math.ceil(posts.length / _pages_posts_page___WEBPACK_IMPORTED_MODULE_4__.PAGE_SIZE) / _pages_posts_page___WEBPACK_IMPORTED_MODULE_4__.PER_PAGE_SIZE);
        const currentPageGroup = Math.floor((+page - 1) / _pages_posts_page___WEBPACK_IMPORTED_MODULE_4__.PER_PAGE_SIZE);
        let lastPageGroup;
        const num = Math.floor(Math.ceil(posts.length / _pages_posts_page___WEBPACK_IMPORTED_MODULE_4__.PAGE_SIZE) / _pages_posts_page___WEBPACK_IMPORTED_MODULE_4__.PER_PAGE_SIZE);
        if (currentPageGroup === num) {
            lastPageGroup = Math.ceil(posts.length / _pages_posts_page___WEBPACK_IMPORTED_MODULE_4__.PAGE_SIZE) % _pages_posts_page___WEBPACK_IMPORTED_MODULE_4__.PER_PAGE_SIZE;
        } else {
            lastPageGroup = _pages_posts_page___WEBPACK_IMPORTED_MODULE_4__.PER_PAGE_SIZE;
        }
        const start = (+page - 1) * _pages_posts_page___WEBPACK_IMPORTED_MODULE_4__.PAGE_SIZE;
        const end = start + _pages_posts_page___WEBPACK_IMPORTED_MODULE_4__.PAGE_SIZE;
        const currentPostList = posts.slice(start, end);
        return {
            posts: currentPostList,
            page,
            totalPageCount,
            totalPageGroupCount,
            lastPageGroup,
            currentPageGroup
        };
    }
    return count ? posts.slice(0, count) : posts;
}


/***/ }),

/***/ 4696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S7": () => (/* binding */ AUTHOR),
/* harmony export */   "_O": () => (/* binding */ SITE_URL),
/* harmony export */   "l$": () => (/* binding */ LANG_LOCALE),
/* harmony export */   "px": () => (/* binding */ SITE_NAME),
/* harmony export */   "vk": () => (/* binding */ SITE_DESCRIPTION)
/* harmony export */ });
/* unused harmony exports EXAMPLE_PATH, CMS_NAME, HOME_OG_IMAGE_URL */
const EXAMPLE_PATH = "blog-starter";
const CMS_NAME = "Markdown";
const HOME_OG_IMAGE_URL = "https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg";
const LANG_LOCALE = {
    ko: "ko_KR",
    en: "en_US",
    ja: "ja_JP"
};
const SITE_NAME = "issue-truck";
const SITE_URL = "https://issue-truck.github.io/";
const AUTHOR = "Issue Truck";
const SITE_DESCRIPTION = {
    ko: "HTML, CSS, JS로 웹사이트, 게임, 앱을 만들고 있습니다.",
    en: "I develop websites, games and apps with HTML, CSS and JS.",
    ja: "HTML、CSS、JSでウェブサイト、ゲーム、アプリを開発しています。"
};


/***/ }),

/***/ 8010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PAGEGROUP_KEY": () => (/* binding */ PAGEGROUP_KEY),
/* harmony export */   "PAGE_KEY": () => (/* binding */ PAGE_KEY),
/* harmony export */   "PAGE_SIZE": () => (/* binding */ PAGE_SIZE),
/* harmony export */   "PER_PAGE_SIZE": () => (/* binding */ PER_PAGE_SIZE),
/* harmony export */   "default": () => (/* binding */ Post),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4011);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6853);
/* harmony import */ var _posts_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3037);
/* harmony import */ var _posts_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_posts_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3284);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_CustomHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2862);
/* harmony import */ var _components_PostList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7354);
/* harmony import */ var _components_SectionTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6457);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4696);












const cx = classnames_bind__WEBPACK_IMPORTED_MODULE_4___default().bind((_posts_module_scss__WEBPACK_IMPORTED_MODULE_11___default()));
const PAGE_SIZE = 10;
const PER_PAGE_SIZE = 20;
const PAGE_KEY = `__${_lib_constants__WEBPACK_IMPORTED_MODULE_10__/* .SITE_NAME */ .px}_CURRENT_PAGE__`;
const PAGEGROUP_KEY = `__${_lib_constants__WEBPACK_IMPORTED_MODULE_10__/* .SITE_NAME */ .px}_CURRENT_PAGE_GROUP__`;
function Post({ posts , page , totalPageCount , totalPageGroupCount , currentPageGroup , lastPageGroup  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const [currentPageGroupS, setCurrentPageGroupS] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(currentPageGroup);
    const [lastPageGroupS, setLastPageGroupS] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(lastPageGroup);
    const onClickPageGroup = (nextPageGroup)=>{
        nextPageGroup = nextPageGroup < 0 ? 0 : nextPageGroup;
        setCurrentPageGroupS(nextPageGroup);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        console.log(currentPageGroupS, totalPageGroupCount);
        if (currentPageGroupS + 1 === totalPageGroupCount) {
            setLastPageGroupS(totalPageCount % PER_PAGE_SIZE === 0 ? PER_PAGE_SIZE : totalPageCount % PER_PAGE_SIZE);
        } else {
            setLastPageGroupS(PER_PAGE_SIZE);
        }
    }, [
        currentPageGroupS
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{}, [
        lastPageGroupS
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: router.isFallback ? " Loading…" : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomHead__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    type: "post"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: cx("container", "-list"),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: cx("inner"),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SectionTitle__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                            title: "Posts"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: cx("project_list"),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PostList__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                postList: posts
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: cx("pagination"),
                                    children: [
                                        currentPageGroupS > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            className: cx("page_button", "-prev"),
                                            onClick: ()=>onClickPageGroup(currentPageGroupS - 1),
                                            children: "<"
                                        }),
                                        Array.from({
                                            length: lastPageGroupS
                                        }, (_, i)=>{
                                            const pageNum = PER_PAGE_SIZE * currentPageGroupS + (i + 1);
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                className: cx("link", {
                                                    "-active": pageNum === +page
                                                }),
                                                href: `/posts/${PER_PAGE_SIZE * currentPageGroupS + (i + 1)}`,
                                                children: pageNum
                                            }, i);
                                        }),
                                        currentPageGroupS + 1 < totalPageGroupCount && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            className: cx("page_button", "-prev"),
                                            onClick: ()=>onClickPageGroup(currentPageGroupS + 1),
                                            children: ">"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
async function getStaticProps({ params  }) {
    const res = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__/* .getPosts */ .Jq)({
        fields: [
            "title",
            "description",
            "date",
            "slug",
            "author",
            "content",
            "ogImage",
            "coverImage",
            "date",
            "tag",
            "readingTime"
        ],
        page: params.page
    });
    return {
        props: {
            ...res,
            page: params.page
        }
    };
}
async function getStaticPaths() {
    const posts = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__/* .getPosts */ .Jq)({
        fields: [
            "slug"
        ]
    });
    const totalPageCount = Math.ceil(posts.length / PAGE_SIZE);
    let paths = [];
    for(let i = 0; i < totalPageCount; i++){
        paths.push({
            params: {
                page: String(i + 1)
            }
        });
    }
    return {
        paths,
        fallback: false
    };
}


/***/ })

};
;
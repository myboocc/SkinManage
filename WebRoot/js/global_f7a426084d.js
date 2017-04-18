Z.define("footer/footer", {
	initialize: function() {
		this.$wrap = $(".global_footer"), this.bindEvent()
	},
	bindEvent: function() {
		var t = this,
			i = $(document),
			e = $(".side_btn"),
			a = e.find(".to_up");
		$(window).scroll(function() {
			i.scrollTop() > 30 ? e.css("bottom", "40px") : e.css("bottom", "-180px")
		}), a.click(function() {
			F.ga("button", "click", "to_up"), $("body,html").animate({
				scrollTop: 0
			}, 300)
		});
		var n = $(".side_btn .contect_btn"),
			s = $(".content_writer"),
			o = $(".bg_writer"),
			r = $(".user_reply"),
			c = new Dialog({
				content: r.show(),
				close: function() {
					o.hide()
				}
			}),
			l = c.$wrap;
		l.on("click", ".pop_close", function() {
			c.hide()
		}), l.find(".dialog_inner").css({
			width: "460px",
			height: "220px",
			"margin-top": "-110px",
			"margin-left": "-230px"
		}).addClass("contect_dialog");
		var h = r.find(".bg_content");
		n.on("click", function() {
			islogin ? (F.ga("button", "click", "user_feedback"), c.show(), o.show()) : window.location.href = WWW_HOST + "/login/index?redirect=" + encodeURIComponent(window.location.href)
		});
		var d = !1,
			p = h.find("textarea");
		p.on("focus", function() {
			$(this).html("")
		}), h.on("click", ".contect_btn", function() {
			if(!d) {
				{
					$(this)
				}
				if($(this).html("\u63d0\u4ea4\u4e2d"), "\u8bf7\u8f93\u5165\u60a8\u7684\u53cd\u9988\u5185\u5bb9..." == p.val() || !p.val()) return alert("\u8bf7\u586b\u5199\u5185\u5bb9"), !1;
				d = !0;
				var t = "<p>\u611f\u8c22\u60a8\u7684\u5efa\u8bae\u548c\u53cd\u9988\uff01</p><p>\u6211\u4eec\u4f1a\u8003\u8651\u60a8\u7684\u5efa\u8bae\uff0c\u4e5f\u6b22\u8fce\u60a8\u6301\u7eed\u5730\u76d1\u7763\u6211\u4eec~</p>";
				l.find(".dialog_inner").fadeOut(600), s.html(t).animate({
					"margin-top": "-100px"
				}, 600), o.addClass("bg_writer_perspective");
				var i = "writer 1s ease-in 0s 1 normal forwards";
				$.get("/index/sendMessage", {
					content: p.val()
				}, function(t) {
					200 == t.status ? (s.css({
						animation: i,
						"-webkit-animation": i,
						"-moz-animation": i,
						"-o-animation": i
					}), setTimeout(function() {
						location.reload()
					}, 1e3)) : alert(t.message), d = !1
				}, "json")
			}
		});
		var u = t.$wrap.find(".wechat_btn"),
			g = t.$wrap.find(".wechat_img");
		u.on("mouseenter", function() {
			g.stop().show()
		}), u.on("mouseleave", function() {
			g.stop().hide()
		})
	}
});
var labDialog = function(t) {
	this.opts = $.extend({
		content: "",
		popClose: !1,
		close: function() {},
		height: "",
		width: ""
	}, t), this.init()
};
labDialog.prototype = {
	init: function() {
		this.createDom(), this.bindEvent()
	},
	createDom: function() {
		var t = [],
			i = this;
		t.push('<div class="global_lab_dialog">'), t.push('<div class="dialog_lab_closebg">'), t.push("</div>"), t.push('<div class="dialog_lab_inner">'), i.opts.popClose && (t.push('<div class="dialog_lab_close">'), t.push("</div>")), t.push('<div class="dialog_lab_content">'), t.push("</div>"), t.push("</div>"), t.push("</div>"), this.$wrap = $(t.join("")), this.$wrap.find(".dialog_lab_content").append(this.opts.content), $("body").append(this.$wrap), this.$close = this.$wrap.find(".dialog_lab_close"), this.$closebg = this.$wrap.find(".dialog_lab_closebg")
	},
	setStyle: function(t, i) {
		$wrapinnerWidth = t || this.opts.width, $wrapinnerHeight = i || this.opts.height;
		var e = 0 == $wrapinnerHeight ? "autoHeight" : "";
		this.$close.css({
			left: $wrapinnerWidth + 40
		}), this.$wrap.find(".dialog_lab_inner").addClass(e).css({
			width: $wrapinnerWidth,
			height: $wrapinnerHeight,
			"margin-left": -($wrapinnerWidth / 2),
			"margin-top": -($wrapinnerHeight / 2)
		})
	},
	bindEvent: function() {
		var t = this;
		this.$close.on("click", function(i) {
			t.opts.close && t.opts.close(i), t.hide()
		}), this.$closebg.on("click", function(i) {
			t.opts.close && t.opts.close(i), t.hide()
		})
	},
	show: function() {
		this.$wrap.show()
	},
	hide: function() {
		this.$wrap.hide()
	},
	setContent: function(t) {
		this.$wrap.find(".dialog_content").html(t)
	},
	on: function() {
		this.$wrap.on.apply(this.$wrap, arguments)
	},
	find: function() {
		return this.$wrap.find.apply(this.$wrap, arguments)
	}
};
var Dialog = function(t) {
	this.opts = $.extend({
		content: "",
		ok: ["\u786e\u8ba4", function() {}],
		cancel: ["\u53d6\u6d88", function() {}],
		close: function() {},
		height: "",
		width: ""
	}, t), this.init()
};
Dialog.prototype = {
	init: function() {
		this.createDom(), this.bindEvent()
	},
	createDom: function() {
		var t = [];
		t.push('<div class="global_dialog">'), t.push('<div class="dialog_closebg">'), t.push("</div>"), t.push('<div class="dialog_inner">'), t.push('<div class="dialog_content">'), t.push("</div>"), t.push("</div>"), t.push("</div>"), this.$wrap = $(t.join("")), $wrapinnerWidth = 800, $wrapinnerHeight = 410, this.$wrap.find(".dialog_inner").css({
			"margin-left": -($wrapinnerWidth / 2),
			"margin-top": -($wrapinnerHeight / 2)
		}), this.$close = this.$wrap.find(".dialog_closebg"), this.$wrap.find(".dialog_content").append(this.opts.content), $("body").append(this.$wrap)
	},
	bindEvent: function() {
		var t = this;
		this.$close.on("click", function(i) {
			t.opts.close && t.opts.close(i), t.hide()
		})
	},
	show: function() {
		this.$wrap.show()
	},
	hide: function() {
		this.$wrap.hide()
	},
	setContent: function(t) {
		this.$wrap.find(".dialog_content").html(t)
	}
};
var Drawer = function(t) {
	this.opts = $.extend({
		wrap: "",
		onSelect: function() {}
	}, t), this.init()
};
Drawer.prototype = {
	init: function() {
		this.$wrap = $(this.opts.wrap), this.$drawer = this.$wrap.find("ul.drawer_list"), this.bindEvent()
	},
	bindEvent: function() {
		var t = this;
		this.$wrap.on("mouseenter", function() {
			t.$drawer.show()
		}), this.$wrap.on("mouseleave", function() {
			t.$drawer.hide()
		}), this.$drawer.on("click", "li", function(i) {
			var e = $(this);
			t.opts.onSelect && t.opts.onSelect(e), i.stopPropagation()
		})
	}
};
var PageHtml = function(t) {
	this.opts = $.extend({
		wrap: "",
		num: 3,
		currentPage: 1,
		totalPage: 0,
		next: !0,
		prev: !0
	}, t), this.init()
};
PageHtml.prototype = {
	init: function() {
		this.setStyle(this.opts.currentPage)
	},
	setStyle: function(t) {
		this.currentPage = t, this.totalPage = this.opts.totalPage;
		var i = "",
			e = 1,
			a = this.opts.totalPage,
			n = this.opts.num,
			s = 2 * n + 3,
			o = (s + 1) / 2;
		this.currentPage = parseInt(this.currentPage);
		var r = function(t) {
			var i = F.parseURL().source,
				e = /page=([0-9]*)/;
			if(e.test(i)) {
				{
					parseInt(RegExp.$1)
				}
				i = i.replace(e, "page=" + t)
			} else i = F.parseURL().path + "?page=" + t;
			return i
		};
		this.opts.prev && this.currentPage > 1 && (i += '<a class="prev"  data-value=' + this.currentPage + ' href="' + r(this.currentPage - 1) + '"> &lt;</a>');
		var c = function(t, i) {
				return i = i || "", "current" == i ? '<a href="' + r(t) + '" class="curr page">' + t + "</a>" : "dot" == i ? "<span>&nbsp;</span>" : '<a href="' + r(t) + '" class="page" title="\u7b2c' + t + '\u9875">' + t + "</a>"
			},
			l = c("", "dot"),
			h = c("", "dot") + c(this.totalPage);
		if(this.totalPage <= s)
			for(var d = 1; d <= this.totalPage; d++) i += this.currentPage == d ? c(d, "current") : c(d);
		else if(this.currentPage <= o) {
			for(var d = 1; s - 1 >= d; d++) i += this.currentPage == d ? c(d, "current") : c(d);
			i += h
		} else {
			i += c(1), i += l, e = this.currentPage - n, a = this.currentPage + n, this.totalPage - this.currentPage <= n + 1 && (a = this.totalPage, e = this.totalPage - (2 * n + 1));
			for(var d = e; a >= d; d++) i += this.currentPage == d ? c(d, "current") : c(d);
			a != this.totalPage && (i += h)
		}
		this.$wrap = $(this.opts.wrap), this.$page = $('<div class="global_page">'), this.opts.next && this.currentPage < this.totalPage && (i += '<a class="next" data-value=' + this.currentPage + ' href="' + r(this.currentPage + 1) + '">&gt; </a>'), (this.totalPage <= 1 || isNaN(this.totalPage)) && (i = ""), this.$page.html(i), this.$wrap.empty().append(this.$page)
	}
};
var Page = function(t) {
	this.opts = $.extend({
		wrap: "",
		num: 3,
		currentPage: 1,
		totalPage: 0,
		data: {},
		url: "/content/article",
		type: "json",
		next: !0,
		prev: !0,
		loadWrap: "",
		callback: function() {}
	}, t), this.init()
};
Page.prototype = {
	init: function() {
		this.dataCache = {}, this.setStyle(this.opts.currentPage)
	},
	setStyle: function(t) {
		this.currentPage = t, this.totalPage = this.opts.totalPage;
		var i = "",
			e = 1,
			a = this.opts.totalPage,
			n = this.opts.num,
			s = 2 * n + 3,
			o = (s + 1) / 2,
			r = F.parseURL().query,
			c = r.search(/page=/);
		r = r.slice(c + 5), this.opts.prev && (i += '<a class="prev" style="display: none;color:#abb0bc" data-value=' + this.currentPage + ' href="javascript:;"> &lt;</a>', r && r > 1 && $(".global_page").find(".prev").show().data("value", r));
		var l = function(t, i) {
				return i = i || "", "current" == i ? '<a href="javascript:;" class="curr page">' + t + "</a>" : "dot" == i ? "<span>&nbsp;</span>" : '<a href="javascript:;" class="page" title="\u7b2c' + t + '\u9875">' + t + "</a>"
			},
			h = l("", "dot"),
			d = l("", "dot") + l(this.totalPage);
		if(this.totalPage <= s)
			for(var c = 1; c <= this.totalPage; c++) i += this.currentPage == c ? l(c, "current") : l(c);
		else if(this.currentPage <= o) {
			for(var c = 1; s - 1 >= c; c++) i += this.currentPage == c ? l(c, "current") : l(c);
			i += d
		} else {
			i += l(1), i += h, e = this.currentPage - n, a = this.currentPage + n, this.totalPage - this.currentPage <= n + 1 && (a = this.totalPage, e = this.totalPage - (2 * n + 1));
			for(var c = e; a >= c; c++) i += this.currentPage == c ? l(c, "current") : l(c);
			a != this.totalPage && (i += d)
		}
		this.$wrap = $(this.opts.wrap), this.$page = $('<div class="global_page">'), this.opts.next && (i += '<a class="next" style="color:#abb0bc" data-value=' + this.currentPage + ' href="javascript:;">&gt; </a>'), this.totalPage <= 1 && (i = ""), this.$page.html(i), this.$wrap.empty().append(this.$page), this.$pageNum = this.$page.find("a"), this.bindEvent()
	},
	bindEvent: function() {
		var t = this;
		this.$page.on("click", ".page", function() {
			var i = $(this);
			if(i.hasClass("curr")) return !1;
			this.currentPage = parseInt(i.text()), t.setStyle(this.currentPage), t.getData(this.currentPage), 1 == this.currentPage ? $(".global_page").find(".prev").hide() : $(".global_page").find(".prev").show(), this.currentPage >= t.opts.totalPage && $(".global_page").find(".next").hide();
			var e = F.parseURL().query.replace(/[?&]page=(\d)*/, ""),
				a = e + (e.indexOf("?") > -1 ? "&" : "?") + "page=" + this.currentPage,
				n = "" === e ? "all" : e.split("=")[1];
			return window.history.pushState && window.history.pushState({
				page: this.currentPage,
				type: n
			}, "", a), !1
		}), this.$page.on("click", ".prev", function() {
			var i = $(this),
				e = i.data("value") - 1;
			e >= 1 && (t.setStyle(e), t.getData(e)), 1 == e ? $(".global_page").find(".prev").hide() : $(".global_page").find(".prev").show(), window.history.pushState && window.history.pushState({
				page: e
			}, "", "?page=" + e)
		}), this.$page.on("click", ".next", function() {
			var i = $(this),
				e = i.data("value") + 1;
			e <= t.opts.totalPage && (t.setStyle(e), t.getData(e)), $(".global_page").find(".prev").show(), e >= t.opts.totalPage && $(".global_page").find(".next").hide(), window.history.pushState && window.history.pushState({
				page: e
			}, "", "?page=" + e)
		})
	},
	getData: function(t) {
		var i = this;
		return this.currentPage = t, this.opts.loadWrap && this.opts.loadWrap.html('<div class="load_wrap"><span class="loading"></span></div>'), this.dataCache[this.currentPage] ? (this.opts.callback && this.opts.callback(this.dataCache[this.currentPage], this.currentPage, !0), void 0) : ("html" == this.opts.type ? $.get(this.opts.url, $.extend({
			page: i.currentPage
		}, this.opts.data), function(t) {
			i.dataCache[i.currentPage] = t, i.opts.callback && i.opts.callback(t, i.currentPage, !1)
		}) : $.get(this.opts.url, $.extend({
			page: i.currentPage
		}, this.opts.data), function(t) {
			200 == t.status ? (i.dataCache[i.currentPage] = t, i.opts.callback && i.opts.callback(t, i.currentPage, !1)) : alert(t.message)
		}, "json"), void 0)
	}
}, Z.define("global/header", {
	initialize: function() {
		this.$container = $("body"), this.$wrap = $(".wrap_phone"), this.showUser(), this.goSearch(), this.$postUser = this.$container.find(".user_card"), this.companyList(), this.labList()
	},
	showUser: function() {
		function t(t) {
			var e = /\/24\/24/;
			i.$postUser && i.$postUser.find("img").attr("src", t.imgURL.replace(e, "/50/50")), i.bigNav(t)
		}
		var i = this,
			e = i.$container.find(".global_header"),
			a = i.$container.find(".page_header"),
			n = e.find(".app_download"),
			s = e.find(".app_area");
		n.hover(function() {
			s.show()
		}, function() {
			s.hide()
		}), $.get("/index/showUser", function(i) {
			if(200 == i.status) {
				var n = i.message;
				window.islogin = !0, t(n);
				for(var s in loginFn) loginFn[s]()
			} else e.is(":visible") ? e.find(".inner_login").show() : a.find(".inner_login").show()
		}, "json")
	},
	goSearch: function() {
		var t = this,
			i = t.$container.find(".global_header"),
			e = i.find(".inner_search input"),
			a = i.find(".inner_search .search_btn"),
			n = function() {
				var t = e.val();
				window.location.href = "/search?kw=" + t
			};
		e.keydown(function(t) {
			$(this);
			13 == t.which && n()
		}), a.on("click", function() {
			n()
		})
	},
	bigNav: function(t) {
		var i = this,
			e = i.$container.find(".global_header .inner_account"),
			a = (e.find(".account_message"), e.find(".account_letter"), e.find(".message_list"), e.find(".sms_list"), e.find(".account_user")),
			n = a.find(".user_img");
		n.attr("src", t.imgURL), a.find(".active_name").html(t.username);
		var s = i.$container.find(".inner_login");
		s.hide(), e.show(), e.on("click", ".account_message", function() {
			F.ga("button", "click", "header_message")
		}), e.on("click", ".account_letter", function() {
			F.ga("button", "click", "header_letter")
		});
		var o = e.find(".account_user"),
			r = o.find(".user_active");
		o.on("mouseenter", function() {
			r.show()
		}), o.on("mouseleave", function() {
			r.hide()
		}), o.on("click", ".img_link", function() {
			F.ga("button", "click", "header_user_img")
		}), r.on("click", "a", function() {
			var t = $(this).index() ? "logout" : "user_name";
			F.ga("button", "click", "header_" + t)
		})
	},
	labList: function() {
		var t = $(".global_header"),
			i = t.find(".inner_nav .nav_each"),
			e = t.find(".inner_nav .nav_lab"),
			a = (e.find("span"), 0);
		i.on("click", "a", function() {
			F.ga("button", "click", "header_" + $(this).text())
		});
		var n = F.parseURL().segments[0];
		a = "list" == n || "post" == n || "detail" == n ? 1 : "component" == n || "interest" == n ? 2 : "lab" == n || "content" == n || "consult" == n || "abstract" == n || "testing" == n || "article" == n ? 3 : 0, a && i.eq(a).find("a").eq(0).addClass("active"), i.on("mouseenter", function() {
			$(this).index();
			i.find("a").removeClass("active"), $(this).find("a").eq(0).addClass("active")
		}), i.on("mouseleave", function() {
			i.find("a").removeClass("active"), a && i.eq(a).find("a").eq(0).addClass("active")
		})
	},
	companyList: function() {
		var t = $(".global_header"),
			i = t.find(".inner_nav .nav_company"),
			e = i.find("span"),
			a = i.find(".inner_company"),
			n = a.find(".box_list"),
			s = n.find(".list_ul"),
			o = a.find(".box_scroll"),
			r = o.find(".scroll_bar"),
			c = a.find(".company_phone"),
			l = c.find("ul"),
			h = 140,
			d = {};
		n.on("scroll", function() {
			var t = s.height(),
				i = n.height(),
				e = r.height(),
				a = t - i,
				o = i - e,
				c = $(this).scrollTop(),
				l = c / a * o;
			l >= o && (l = o), r.css("top", l)
		});
		var p = 0;
		s.on("mouseenter", "li", function() {
			var t = $(this).data("id"),
				i = "c_" + t;
			return c.show(), l.html(""), p = t, d[i] ? d[i].html ? (F.unloading(c), a.css("width", (d[i].num + 1) * h + 30), c.css("width", d[i].num * h), l.html(d[i].html)) : (a.css("width", 310), F.loading(c, "blackNew", !0)) : (a.css("width", 310), F.loading(c, "blackNew", !0), c.show(), d[i] = {}, $.get("/data/searchPhone", {
				company: t
			}, function(e) {
				if(e = JSON.parse(e), 200 == e.status) {
					var n = "<li>",
						s = 1;
					$.each(e.message.list, function(t, i) {
						if((t + 1) % 10 == 0) n += "</li>", t < e.message.list.length - 1 && (n += "<li>", s++);
						else {
							var a = i.name;
							a.length > 16 && (a = a.substr(0, 16) + "..."), n += '<a href="/post/' + i.id + '">' + a + "</a>"
						}
					}), d[i] = {
						num: s,
						html: n
					}, p == t && (a.css("width", (s + 1) * h + 30), c.css("width", s * h), l.html(n), F.unloading(c))
				}
			})), !1
		}), c.on("mouseleave", function() {
			$(this).hide()
		}), i.on("mouseenter", function() {
			return e.addClass("active"), a.css("width", h).show(), !1
		}), i.on("mouseleave", function() {
			return e.removeClass("active"), c.hide(), a.hide(), !1
		})
	},
	defineFn: function(t) {
		var i = t,
			e = "\u53d6\u6d88\u5bf9\u6bd4",
			a = "\u52a0\u5165\u5bf9\u6bd4";
		i.id_1 = "", i.id_2 = "", i.name_1 = "", i.name_2 = "", i.img_1 = "", i.img_2 = "", i.$box_1 = null, i.$box_2 = null; {
			var n = i.$wrap.find(".phone_compare"),
				s = i.$wrap.find(".phone_list");
			n.find(".compare_clear")
		}
		s.on("click", ".list_li", function() {
			F.ga("button", "click", "list_to_post")
		}), i.getCookie = function() {
			var t = document.cookie.split("; "),
				i = {};
			return $.each(t, function(t, e) {
				var a = e.split("=");
				i[a[0]] = a[1]
			}), i
		}, i.makeCookie = function() {
			document.cookie = "current=" + i.id_1 + ";path=/", document.cookie = "curname=" + i.name_1 + ";path=/", document.cookie = "curcover=" + i.img_1 + ";path=/", document.cookie = "compare=" + i.id_2 + ";path=/", document.cookie = "comname=" + i.name_2 + ";path=/", document.cookie = "comcover=" + i.img_2 + ";path=/"
		}, i.makeChosen = function(t) {
			var n = t.find("li .li_checkbox");
			i.id_1 && i.id_1 == i.id_2 && (i.id_2 = "", i.img_2 = ""), $.each(n, function(t, n) {
				var s = $(n).data("id");
				s == i.id_1 ? i.$box_1 = $(n).html(e).addClass("list_icons").show() : s == i.id_2 ? i.$box_2 = $(n).html(e).addClass("list_icons").show() : $(n).html(a).removeClass("list_icons").hide()
			}), i.noChoose(t)
		}, i.cancelCompare = function(t) {
			0 == t ? (i.$box_1 && i.$box_1.html(a).removeClass("list_icons").hide(), i.id_2 ? (i.id_1 = i.id_2, i.name_1 = i.name_2, i.img_1 = i.img_2, i.$box_2 && (i.$box_1 = i.$box_2), i.id_2 = "", i.name_2 = "", i.img_2 = "", i.$box_2 = null, n.find("img").eq(0).attr("src", i.img_1), n.find("div").eq(0).addClass("active").html(i.name_1), n.find("img").eq(1).attr("src", i.img_2).hide(), n.find("div").eq(1).removeClass("active").html("\u65b0\u589e\u624b\u673a")) : (i.id_1 = "", i.name_1 = "", i.img_1 = "", i.$box_1 = null, n.find("img").eq(0).attr("src", i.img_1).hide(), n.find("div").eq(0).removeClass("active").html("\u65b0\u589e\u624b\u673a"), n.stop().animate({
				right: "-157px"
			}, 600))) : 1 == t && (i.$box_2 && i.$box_2.html(a).removeClass("list_icons").hide(), i.id_2 = "", i.name_2 = "", i.img_2 = "", i.$box_2 = null, n.find("img").eq(1).attr("src", i.img_2).hide(), n.find("div").eq(1).removeClass("active").html("\u65b0\u589e\u624b\u673a")), i.makeCookie(), n.find(".compare_go").removeClass("active").attr("href", "javascript:;"), i.noChoose(s)
		}, i.noChoose = function(t) {
			i.id_1 && i.id_2 ? (t.find(".li_checkbox").addClass("checkbox_no"), i.$box_1 && i.$box_2 && (i.$box_1.removeClass("checkbox_no"), i.$box_2.removeClass("checkbox_no"))) : t.find(".li_checkbox").removeClass("checkbox_no")
		}, i.requestData = function(t) {
			var e = i.url,
				a = "",
				n = i.$wrap.find(".phone_load"),
				s = i.$wrap.find(".phone_list"),
				o = i.$wrap.find(".content_sort"),
				r = o.find(".sort_num span").text();
			i.loading || (i.loading = !0, $.post(e, i.data, function(e) {
				if(200 == e.status) {
					var o = $("<ul>" + e.message + "</ul>");
					n.hide(), t && (a = s.html()), s.show().html(a + o.html()), i.makeChosen(s), i.loading = o.html() && s.find(".list_li").length != r ? !1 : !0, i.changeTab = !0
				} else alert(e.message), i.changeTab = !0
			}, "json"))
		}
	},
	compareInit: function(t) {
		var i = t,
			e = i.getCookie();
		e.current && (i.id_1 = e.current, i.name_1 = e.curname, i.img_1 = e.curcover, e.compare && (i.id_2 = e.compare, i.name_2 = e.comname, i.img_2 = e.comcover))
	},
	listEvent: function(t) {
		var i = t,
			e = "\u53d6\u6d88\u5bf9\u6bd4",
			a = i.$wrap.find(".content_sort"),
			n = i.$wrap.find(".phone_list"),
			s = i.$wrap.find(".phone_load"),
			o = i.$wrap.find(".phone_compare");
		F.loading(s, "white", !0);
		var r = t.data.sort,
			c = 1,
			l = 5,
			h = a.find(".sort_num span").text();
		i.cacheData = {}, i.loading = !1, i.changeTab = !0, i.id_1 && (i.makeChosen(n), o.stop().animate({
			right: 0
		}, 600), o.find("img").eq(0).attr("src", i.img_1).show(), o.find("div").eq(0).addClass("active").html(i.name_1), i.id_1 && i.id_2 && (o.find(".compare_go").addClass("active").attr("href", "/detail/" + i.id_1 + "?compid=" + i.id_2), o.find("img").eq(1).attr("src", i.img_2).show(), o.find("div").eq(1).addClass("active").html(i.name_2))), n.on("click", ".li_checkbox", function() {
			var t = $(this),
				a = $(this).data("id");
			return F.ga("button", "click", "add_compare"), a == i.id_1 || a == i.id_2 ? a == i.id_1 ? i.cancelCompare(0) : i.cancelCompare(1) : i.id_1 && i.id_2 || (i.id_1 ? (i.id_2 = a, i.name_2 = $(this).siblings(".list_content").data("name"), i.img_2 = $(this).siblings(".list_content").data("case"), i.$box_2 = t.html(e).addClass("list_icons"), o.find("img").eq(1).attr("src", i.img_2).show(), o.find("div").eq(1).addClass("active").html(i.name_2), i.noChoose(n), o.find(".compare_go").addClass("active").attr("href", "/detail/" + i.id_1 + "?compid=" + i.id_2)) : (o.stop().animate({
				right: 0
			}, 600), i.id_1 = a, i.name_1 = $(this).siblings(".list_content").data("name"), i.img_1 = $(this).siblings(".list_content").data("case"), i.$box_1 = t.html(e).addClass("list_icons"), o.find("img").eq(0).attr("src", i.img_1).show(), o.find("div").eq(0).addClass("active").html(i.name_1))), i.makeCookie(), !1
		}), o.find(".compare_go").on("click", function() {
			"javascript:;" != $(this).attr("href") && F.ga("button", "click", "go_compare")
		}), a.on("click", "li", function() {
			if(i.changeTab) {
				i.changeTab = !1, i.cacheData[r] = n.html();
				var t = $(this).data("order");
				if(a.find("li").removeClass(), c == $(this).index() ? ("desc" == t ? (t = "asc", $(this).addClass("sort_up")) : (t = "desc", $(this).addClass("sort_down")), $(this).data("order", t)) : "desc" == t ? $(this).addClass("sort_down") : $(this).addClass("sort_up"), c = $(this).index(), r = $(this).data("type") + " " + t, i.data.sort = r, F.ga("button", "click", r), i.cacheData[r]) {
					n.html(i.cacheData[r]);
					var e = n.find(".list_li").length;
					i.loading = h > e ? !1 : !0, i.data.page = Math.ceil(e / l), i.makeChosen(n), i.changeTab = !0
				} else i.loading = !1, i.data.page = 1, n.hide(), s.show(), i.requestData()
			}
		}), n.on("mouseenter", ".list_li", function() {
			var t = $(this).find(".li_checkbox");
			return i.id_1 && i.id_2 || t.hasClass("list_icons") || t.show(), !1
		}), n.on("mouseleave", ".list_li", function() {
			var t = $(this).find(".li_checkbox");
			t.hasClass("list_icons") || t.hide()
		}), n.on("mouseenter", ".list_li .tip_btn", function() {
			$(this).siblings(".tip_content").fadeIn()
		}), n.on("mouseleave", ".list_li .tip_content", function() {
			$(this).fadeOut()
		}), $(window).scroll(function() {
			$(document).height() - $(window).scrollTop() - $(window).innerHeight() < 270 && !i.loading && n.find(".list_li").length < h && (s.show(), i.data.page++, i.requestData(!0))
		})
	},
	postEvent: function(t) {
		var i = t;
		i.widthCompare()
	},
	clickCompare: function(t, i) {
		var e = t,
			a = (e.$wrap.find(".phone_list"), e.$wrap.find(".phone_compare")),
			n = a.find(".compare_clear"),
			s = a.find("ul li .compare_del");
		a.on("click", "ul li .compare_del", function() {
			var t = $(this).parent().index();
			0 == t && e.id_1 ? e.cancelCompare(t) : 1 == t && e.id_2 && (e.cancelCompare(t), $(this).hide()), i && i()
		}), a.on("mouseenter", "ul li", function() {
			var t = $(this).index();
			0 == t && e.id_1 ? $(this).find(".compare_del").show() : 1 == t && e.id_2 && $(this).find(".compare_del").show()
		}), a.on("mouseleave", "ul li", function() {
			$(this).index();
			$(this).find(".compare_del").hide()
		}), n.on("click", function() {
			s.eq(0).trigger("click"), s.eq(0).trigger("click")
		})
	}
});
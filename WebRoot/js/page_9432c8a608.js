Z.define("index/banner", {
	initialize: function() {
		this.$wrap = $(".wrap"), this.bannerScroll()
	},
	bannerScroll: function() {
		function t() {
			n(), i(s, ".show_moving", r, u, g), a.resize(function() {
				n()
			})
		}

		function i(t, i, n, e, a) {
			function c() {
				f.stop(!0, !0), h = parseInt(f.find("li").width()), f.css({
					left: -m * h
				}), m == u && (f.append(d.eq(0).clone()), s()), m++, f.animate({
					left: -(m * h)
				}, v, "easeOutQuint", function() {
					m == r && (m = 0, f.css({
						left: "0"
					}), f.find("li").length > r && f.find("li").last().remove(), s()), l()
				})
			}

			function s() {
				f.css("width", f.find("li").length * parseInt(d.width()))
			}

			function l() {
				a.removeClass("active"), a.eq(m).addClass("active")
			}

			function o() {
				a.click(function() {
					f.stop(!0, !0), clearInterval(w), m = $(this).index(), f.animate({
						left: -m * h
					}, v, "easeOutQuint"), l(), w = setInterval(function() {
						c()
					}, p)
				})
			}
			var f = t.find(i).eq(0),
				d = f.find("li"),
				h = parseInt(d.width()),
				r = d.length,
				u = d.length - 1;
			s(), m > u ? m = 0 : 0 > m && (m = u), l(), o(), w = setInterval(function() {
				c()
			}, p), e.click(function() {
				f.stop(!0, !0), clearInterval(w), c(), w = setInterval(function() {
					c()
				}, p)
			}), n.click(function() {
				f.stop(!0, !0), clearInterval(w), 0 == m ? (d.eq(d.length - 1).clone().insertBefore(d.eq(0)), s(), f.css("left", -h), m = 0, f.animate({
					left: -m * h
				}, v, "easeOutQuint", function() {
					m = u, f.css("left", -m * h), f.find("li").length > r && f.find("li").first().remove(), s(), l(), w = setInterval(function() {
						c()
					}, p)
				})) : (m--, f.animate({
					left: -m * h
				}, v, "easeOutQuint", function() {
					l(), w = setInterval(function() {
						c()
					}, p)
				}))
			})
		}

		function n() {
			l.stop(!0, !0);
			var t = document.documentElement.clientWidth || document.body.clientWidth,
				i = document.documentElement.clientHeight || document.body.clientHeight,
				n = 1e3,
				e = 800;
			t > n ? (c.css({
				width: t,
				height: i,
				"margin-left": -t / 2
			}), i = $(window).height(), c.css({
				width: t,
				height: i,
				"margin-left": -t / 2
			}), o.css({
				width: t
			}), l.css({
				left: -m * parseInt(o.width()),
				width: t * d
			}), i <= f.height() && f.width() > 0 && t >= f.width() ? f.css({
				width: t,
				height: "auto",
				"margin-left": -t / 2
			}) : f.width() > 0 && f.height() > 0 && f.css({
				height: i,
				width: "auto",
				left: "50%",
				"margin-left": -f.width() / 2
			})) : (c.css({
				width: n,
				height: i,
				"margin-left": -n / 2
			}), i = document.documentElement.clientHeight || document.body.clientHeight, c.css({
				width: n,
				height: i,
				"margin-left": -n / 2
			}), o.css({
				width: n
			}), l.css({
				left: -m * parseInt(o.width()),
				width: n * d
			}), e >= i ? f.css({
				height: e,
				width: "auto",
				"margin-left": -960
			}) : f.css({
				height: i,
				width: "auto",
				left: "50%",
				"margin-left": -f.width() / 2
			})), h.css({
				"padding-top": i + 7
			})
		}
		var e = this,
			a = $(window),
			c = e.$wrap.find(".lab_slider"),
			s = c.find(".slider_show"),
			l = s.find(".show_moving"),
			o = l.find("li"),
			f = o.find(".big_img"),
			d = o.length,
			h = e.$wrap.find(".lab_main"),
			r = e.$wrap.find(".arrow_left"),
			u = e.$wrap.find(".arrow_right"),
			g = e.$wrap.find(".slider_point li"),
			m = 0,
			w = null,
			p = 4e3,
			v = 1700,
			_ = e.$wrap.find(".slider_tip");
		a.scroll(function() {
			_.fadeOut(600)
		});
		var x = 0;
		$.each(f, function(i) {
			f.eq(i).get(0).complete ? (x++, x >= d && t()) : f.eq(i).get(0).onload = function() {
				x++, x >= d && t()
			}
		})
	}
}), Z.define("index/page", {
	initialize: function() {
		this.$wrap = $(".wrap"), this.numChange(), this.imgScale()
	},
	imgScale: function() {
		function t() {
			e.mouseenter(function() {
				var t = $(this).find(".pic_cover");
				t.siblings("img").stop(!0, !0), t.stop(!0, !0);
				var i = t.siblings("img");
				i.css({
					transform: "scale(1.1, 1.1)"
				}), t.animate({
					opacity: 0
				})
			}), e.mouseleave(function() {
				var t = $(this).find(".pic_cover");
				t.siblings("img").stop(!0, !0), t.stop(!0, !0);
				var i = t.siblings("img");
				i.css({
					transform: "scale(1, 1)"
				}), t.animate({
					opacity: .4
				})
			})
		}
		var i = this,
			n = i.$wrap.find(".content_pic"),
			e = n.find("li"),
			a = (e.find(".pic_cover"), e.find("a img")),
			c = !1;
		$.each(a, function(i) {
			a.eq(i).get(0).complete && !c && (t(), c = !0), a.eq(i).get(0).onload = function() {
				c || (t(), c = !0)
			}
		})
	},
	numChange: function() {
		var t = this,
			i = t.$wrap.find(".content_data .data_each li"),
			n = i.find("h3"),
			e = n.eq(0),
			a = n.eq(1),
			c = n.eq(2),
			s = n.eq(3),
			l = null,
			o = 205,
			f = 3,
			d = 23,
			h = 13,
			r = 0,
			u = 0,
			g = 0,
			m = 0,
			w = !0,
			p = $(window).height();
		$(window).scroll(function() {
			$(document).scrollTop() >= 2372 - p && w && (l = setInterval(function() {
				e.text() >= 11400 ? (e.text(11400), clearInterval(l)) : e.text(r += o), a.text() >= 120 ? a.text(120) : a.text(u += f), c.text() >= 1e3 ? c.text(1e3) : c.text(g += d), s.text() >= 152 ? s.text(152) : s.text(m += h)
			}, 80), w = !1)
		})
	}
});
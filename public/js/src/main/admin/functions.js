$(document).ready(function() {
	$("body").on("click", "[data-ma-action]", function(e) {
		function launchIntoFullscreen(element) {
			element.requestFullscreen ? element.requestFullscreen() : element.mozRequestFullScreen ? element.mozRequestFullScreen() : element.webkitRequestFullscreen ? element.webkitRequestFullscreen() : element.msRequestFullscreen && element.msRequestFullscreen()
		}
		e.preventDefault();
		var $this = $(this),
			action = $(this).data("ma-action");
		switch (action) {
			case "sidebar-open":
				var target = $this.data("ma-target"),
					backdrop = '<div data-ma-action="sidebar-close" class="ma-backdrop" />';
				$("body").addClass("sidebar-toggled"), $("#header, #header-alt, #main").append(backdrop), $this.addClass("toggled"), $(target).addClass("toggled");
				break;
			case "sidebar-close":
				$("body").removeClass("sidebar-toggled"), $(".ma-backdrop").remove(), $(".sidebar, .ma-trigger").removeClass("toggled");
				break;
			case "profile-menu-toggle":
				$this.parent().toggleClass("toggled"), $this.next().slideToggle(200);
				break;
			case "submenu-toggle":
				$this.next().slideToggle(200), $this.parent().toggleClass("toggled");
				break;
			case "search-open":
				$("#header").addClass("search-toggled"), $("#top-search-wrap input").focus();
				break;
			case "search-close":
				$("#header").removeClass("search-toggled");
				break;
			case "clear-notification":
				var x = $this.closest(".list-group"),
					y = x.find(".list-group-item"),
					z = y.size();
				$this.parent().fadeOut(), x.find(".list-group").prepend('<i class="grid-loading hide-it"></i>'), x.find(".grid-loading").fadeIn(1500);
				var w = 0;
				y.each(function() {
					var z = $(this);
					setTimeout(function() {
						z.addClass("animated fadeOutRightBig").delay(1e3).queue(function() {
							z.remove()
						})
					}, w += 150)
				}), setTimeout(function() {
					$(".him-notification").addClass("empty")
				}, 150 * z + 200);
				break;
			case "fullscreen":
				launchIntoFullscreen(document.documentElement);
				break;
			case "clear-localstorage":
				swal({
					title: "Are you sure?",
					text: "All your saved localStorage values will be removed",
					type: "warning",
					showCancelButton: !0,
					confirmButtonText: "Yes, delete it!",
					closeOnConfirm: !1
				}, function() {
					localStorage.clear(), swal("Done!", "localStorage is cleared", "success")
				});
				break;
			case "print":
				window.print();
				break;
			case "login-switch":
				var loginblock = $this.data("ma-block"),
					loginParent = $this.closest(".lc-block");
				loginParent.removeClass("toggled"), setTimeout(function() {
					$(loginblock).addClass("toggled")
				});
				break;
			case "profile-edit":
				$this.closest(".pmb-block").toggleClass("toggled");
				break;
			case "profile-edit-cancel":
				$(this).closest(".pmb-block").removeClass("toggled");
				break;
			case "action-header-open":
				ahParent = $this.closest(".action-header").find(".ah-search"), ahParent.fadeIn(300), ahParent.find(".ahs-input").focus();
				break;
			case "action-header-close":
				ahParent.fadeOut(300), setTimeout(function() {
					ahParent.find(".ahs-input").val("")
				}, 350);
				break;
			case "wall-comment-open":
				$this.closest(".wic-form").hasClass("toggled") || $this.closest(".wic-form").addClass("toggled");
				break;
			case "wall-comment-close":
				$this.closest(".wic-form").find("textarea").val(""), $this.closest(".wic-form").removeClass("toggled");
				break;
			case "todo-form-open":
				$this.closest(".t-add").addClass("toggled");
				break;
			case "todo-form-close":
				$this.closest(".t-add").removeClass("toggled"), $this.closest(".t-add").find("textarea").val("");
				break;
			case "change-skin":
				var skin = $this.data("ma-skin");
				$("[data-ma-theme]").attr("data-ma-theme", skin)
		}
	})
}), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $("html").addClass("ismobile"), $(window).load(function() {
	$("html").hasClass("ismobile") || $(".page-loader")[0] && setTimeout(function() {
		$(".page-loader").fadeOut()
	}, 500)
}), $(document).ready(function() {
	function scrollBar(selector, theme, mousewheelaxis) {
		$(selector).mCustomScrollbar({
			theme: theme,
			scrollInertia: 100,
			axis: "yx",
			mouseWheel: {
				enable: !0,
				axis: mousewheelaxis,
				preventDefault: !0
			}
		})
	}
	if ($("input-mask")[0] && $(".input-mask").mask(), $(".color-picker")[0] && $(".color-picker").each(function() {
			var colorOutput = $(this).closest(".cp-container").find(".cp-value");
			$(this).farbtastic(colorOutput)
		}), $(".html-editor")[0] && $(".html-editor").summernote({
			height: 150
		}), $(".html-editor-click")[0] && ($("body").on("click", ".hec-button", function() {
			$(".html-editor-click").summernote({
				focus: !0
			}), $(".hec-save").show()
		}), $("body").on("click", ".hec-save", function() {
			$(".html-editor-click").code(), $(".html-editor-click").destroy(), $(".hec-save").hide(), notify("Content Saved Successfully!", "success")
		})), $(".html-editor-airmod")[0] && $(".html-editor-airmod").summernote({
			airMode: !0
		}), $(".date-time-picker")[0] && $(".date-time-picker").datetimepicker(), $(".time-picker")[0] && $(".time-picker").datetimepicker({
			format: "LT"
		}), $(".date-picker")[0] && $(".date-picker").datetimepicker({
			format: "DD/MM/YYYY"
		}), $(".date-picker").on("dp.hide", function() {
			$(this).closest(".dtp-container").removeClass("fg-toggled"), $(this).blur()
		}), $(".form-wizard-basic")[0] && $(".form-wizard-basic").bootstrapWizard({
			tabClass: "fw-nav",
			nextSelector: ".next",
			previousSelector: ".previous"
		}), function() {
			Waves.attach(".btn:not(.btn-icon):not(.btn-float)"), Waves.attach(".btn-icon, .btn-float", ["waves-circle", "waves-float"]), Waves.init()
		}(), $(".lightbox")[0] && $(".lightbox").lightGallery({
			enableTouch: !0
		}), $("body").on("click", ".a-prevent", function(e) {
			e.preventDefault()
		}), $(".collapse")[0] && ($(".collapse").on("show.bs.collapse", function(e) {
			$(this).closest(".panel").find(".panel-heading").addClass("active")
		}), $(".collapse").on("hide.bs.collapse", function(e) {
			$(this).closest(".panel").find(".panel-heading").removeClass("active")
		}), $(".collapse.in").each(function() {
			$(this).closest(".panel").find(".panel-heading").addClass("active")
		})), $('[data-toggle="tooltip"]')[0] && $('[data-toggle="tooltip"]').tooltip(), $('[data-toggle="popover"]')[0] && $('[data-toggle="popover"]').popover(), $("html").hasClass("ie9") && $("input, textarea").placeholder({
			customClass: "ie9-placeholder"
		}), $(".typeahead")[0]) {
		var statesArray = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"],
			states = new Bloodhound({
				datumTokenizer: Bloodhound.tokenizers.whitespace,
				queryTokenizer: Bloodhound.tokenizers.whitespace,
				local: statesArray
			});
		$(".typeahead").typeahead({
			hint: !0,
			highlight: !0,
			minLength: 1
		}, {
			name: "states",
			source: states
		})
	}
});

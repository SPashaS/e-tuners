(() => {
  var e = {
      807: (e) => {
        var t = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
        e.exports = t;
      },
    },
    t = {};
  function s(i) {
    var a = t[i];
    if (void 0 !== a) return a.exports;
    var l = (t[i] = { exports: {} });
    return e[i](l, l.exports, s), l.exports;
  }
  (() => {
    "use strict";
    const e = {};
    function t() {
      let e = document.querySelector(".submenu-open");
      e && e.classList.remove("submenu-open");
    }
    document.querySelector(".header").addEventListener("click", function (e) {
      let s = e.target,
        i = s.classList.contains("menu-item__item-title"),
        a = s.closest(".submenu-open");
      i && !a
        ? (t(), s.closest(".menu-item").classList.add("submenu-open"))
        : i && a && s.closest(".menu-item").classList.remove("submenu-open");
    });
    let i = (e, t = 500, s = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !s),
              !s && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !s && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide"),
              document.dispatchEvent(
                new CustomEvent("slideUpDone", { detail: { target: e } }),
              );
          }, t));
      },
      a = (e, t = 500, s = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            s && e.style.removeProperty("height");
          let i = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = s ? `${s}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = i + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide"),
                document.dispatchEvent(
                  new CustomEvent("slideDownDone", { detail: { target: e } }),
                );
            }, t);
        }
      },
      l = (e, t = 500) => (e.hidden ? a(e, t) : i(e, t)),
      n = !0,
      r = (e = 500) => {
        document.documentElement.classList.contains("lock") ? o(e) : c(e);
      },
      o = (e = 500) => {
        let t = document.querySelector("body");
        if (n) {
          let s = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (n = !1),
            setTimeout(function () {
              n = !0;
            }, e);
        }
      },
      c = (e = 500) => {
        let t = document.querySelector("body");
        if (n) {
          let s = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (n = !1),
            setTimeout(function () {
              n = !0;
            }, e);
        }
      };
    function d(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    function p(e, t) {
      const s = Array.from(e).filter(function (e, s, i) {
        if (e.dataset[t]) return e.dataset[t].split(",")[0];
      });
      if (s.length) {
        const e = [];
        s.forEach((s) => {
          const i = {},
            a = s.dataset[t].split(",");
          (i.value = a[0]),
            (i.type = a[1] ? a[1].trim() : "max"),
            (i.item = s),
            e.push(i);
        });
        let i = e.map(function (e) {
          return (
            "(" +
            e.type +
            "-width: " +
            e.value +
            "px)," +
            e.value +
            "," +
            e.type
          );
        });
        i = (function (e) {
          return e.filter(function (e, t, s) {
            return s.indexOf(e) === t;
          });
        })(i);
        const a = [];
        if (i.length)
          return (
            i.forEach((t) => {
              const s = t.split(","),
                i = s[1],
                l = s[2],
                n = window.matchMedia(s[0]),
                r = e.filter(function (e) {
                  if (e.value === i && e.type === l) return !0;
                });
              a.push({ itemsArray: r, matchMedia: n });
            }),
            a
          );
      }
    }
    e.popup = new (class {
      constructor(e) {
        let t = {
          logging: !0,
          init: !0,
          attributeOpenButton: "data-popup",
          attributeCloseButton: "data-close",
          fixElementSelector: "[data-lp]",
          youtubeAttribute: "data-youtube",
          youtubePlaceAttribute: "data-youtube-place",
          setAutoplayYoutube: !0,
          classes: {
            popup: "popup",
            popupContent: "popup__content",
            popupActive: "popup_show",
            bodyActive: "popup-show",
          },
          focusCatch: !0,
          closeEsc: !0,
          bodyLock: !0,
          bodyLockDelay: 500,
          hashSettings: { location: !0, goHash: !0 },
          on: {
            beforeOpen: function () {},
            afterOpen: function () {},
            beforeClose: function () {},
            afterClose: function () {},
          },
        };
        (this.isOpen = !1),
          (this.targetOpen = { selector: !1, element: !1 }),
          (this.previousOpen = { selector: !1, element: !1 }),
          (this.lastClosed = { selector: !1, element: !1 }),
          (this._dataValue = !1),
          (this.hash = !1),
          (this._reopen = !1),
          (this._selectorOpen = !1),
          (this.lastFocusEl = !1),
          (this._focusEl = [
            "a[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "button:not([disabled]):not([aria-hidden])",
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "area[href]",
            "iframe",
            "object",
            "embed",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"])',
          ]),
          (this.options = {
            ...t,
            ...e,
            classes: { ...t.classes, ...e?.classes },
            hashSettings: { ...t.hashSettings, ...e?.hashSettings },
            on: { ...t.on, ...e?.on },
          }),
          this.options.init && this.initPopups();
      }
      initPopups() {
        this.popupLogging("Проснулся"), this.eventsPopup();
      }
      eventsPopup() {
        document.addEventListener(
          "click",
          function (e) {
            const t = e.target.closest(`[${this.options.attributeOpenButton}]`);
            if (t)
              return (
                e.preventDefault(),
                (this._dataValue = t.getAttribute(
                  this.options.attributeOpenButton,
                )
                  ? t.getAttribute(this.options.attributeOpenButton)
                  : "error"),
                "error" !== this._dataValue
                  ? (this.isOpen || (this.lastFocusEl = t),
                    (this.targetOpen.selector = `${this._dataValue}`),
                    (this._selectorOpen = !0),
                    void this.open())
                  : void this.popupLogging(
                      `Ой ой, не заполнен атрибут у ${t.classList}`,
                    )
              );
            return e.target.closest(`[${this.options.attributeCloseButton}]`) ||
              (!e.target.closest(`.${this.options.classes.popupContent}`) &&
                this.isOpen)
              ? (e.preventDefault(), void this.close())
              : void 0;
          }.bind(this),
        ),
          document.addEventListener(
            "keydown",
            function (e) {
              if (
                this.options.closeEsc &&
                27 == e.which &&
                "Escape" === e.code &&
                this.isOpen
              )
                return e.preventDefault(), void this.close();
              this.options.focusCatch &&
                9 == e.which &&
                this.isOpen &&
                this._focusCatch(e);
            }.bind(this),
          ),
          this.options.hashSettings.goHash &&
            (window.addEventListener(
              "hashchange",
              function () {
                window.location.hash
                  ? this._openToHash()
                  : this.close(this.targetOpen.selector);
              }.bind(this),
            ),
            window.addEventListener(
              "load",
              function () {
                window.location.hash && this._openToHash();
              }.bind(this),
            ));
      }
      open(e) {
        if (
          (e &&
            "string" == typeof e &&
            "" !== e.trim() &&
            ((this.targetOpen.selector = e), (this._selectorOpen = !0)),
          this.isOpen && ((this._reopen = !0), this.close()),
          this._selectorOpen ||
            (this.targetOpen.selector = this.lastClosed.selector),
          this._reopen || (this.previousActiveElement = document.activeElement),
          (this.targetOpen.element = document.querySelector(
            this.targetOpen.selector,
          )),
          this.targetOpen.element)
        ) {
          if (
            this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)
          ) {
            const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                this.options.youtubeAttribute,
              )}?rel=0&showinfo=0&autoplay=1`,
              t = document.createElement("iframe");
            t.setAttribute("allowfullscreen", "");
            const s = this.options.setAutoplayYoutube ? "autoplay;" : "";
            t.setAttribute("allow", `${s}; encrypted-media`),
              t.setAttribute("src", e),
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`,
              ) &&
                this.targetOpen.element
                  .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                  .appendChild(t);
          }
          this.options.hashSettings.location &&
            (this._getHash(), this._setHash()),
            this.options.on.beforeOpen(this),
            this.targetOpen.element.classList.add(
              this.options.classes.popupActive,
            ),
            document.body.classList.add(this.options.classes.bodyActive),
            this._reopen ? (this._reopen = !1) : r(),
            this.targetOpen.element.setAttribute("aria-hidden", "false"),
            (this.previousOpen.selector = this.targetOpen.selector),
            (this.previousOpen.element = this.targetOpen.element),
            (this._selectorOpen = !1),
            (this.isOpen = !0),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            document.dispatchEvent(
              new CustomEvent("afterPopupOpen", { detail: { popup: this } }),
            ),
            this.popupLogging("Открыл попап");
        } else
          this.popupLogging(
            "Ой ой, такого попапа нет. Проверьте корректность ввода. ",
          );
      }
      close(e) {
        e &&
          "string" == typeof e &&
          "" !== e.trim() &&
          (this.previousOpen.selector = e),
          this.isOpen &&
            n &&
            (this.options.on.beforeClose(this),
            this.targetOpen.element.hasAttribute(
              this.options.youtubeAttribute,
            ) &&
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`,
              ) &&
              (this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`,
              ).innerHTML = ""),
            this.previousOpen.element.classList.remove(
              this.options.classes.popupActive,
            ),
            this.previousOpen.element.setAttribute("aria-hidden", "true"),
            this._reopen ||
              (document.body.classList.remove(this.options.classes.bodyActive),
              r(),
              (this.isOpen = !1)),
            this._removeHash(),
            this._selectorOpen &&
              ((this.lastClosed.selector = this.previousOpen.selector),
              (this.lastClosed.element = this.previousOpen.element)),
            this.options.on.afterClose(this),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            this.popupLogging("Закрыл попап"));
      }
      _getHash() {
        this.options.hashSettings.location &&
          (this.hash = this.targetOpen.selector.includes("#")
            ? this.targetOpen.selector
            : this.targetOpen.selector.replace(".", "#"));
      }
      _openToHash() {
        let e = document.querySelector(
          `.${window.location.hash.replace("#", "")}`,
        )
          ? `.${window.location.hash.replace("#", "")}`
          : document.querySelector(`${window.location.hash}`)
          ? `${window.location.hash}`
          : null;
        document.querySelector(
          `[${this.options.attributeOpenButton}="${e}"]`,
        ) &&
          e &&
          this.open(e);
      }
      _setHash() {
        history.pushState("", "", this.hash);
      }
      _removeHash() {
        history.pushState("", "", window.location.href.split("#")[0]);
      }
      _focusCatch(e) {
        const t = this.targetOpen.element.querySelectorAll(this._focusEl),
          s = Array.prototype.slice.call(t),
          i = s.indexOf(document.activeElement);
        e.shiftKey && 0 === i && (s[s.length - 1].focus(), e.preventDefault()),
          e.shiftKey ||
            i !== s.length - 1 ||
            (s[0].focus(), e.preventDefault());
      }
      _focusTrap() {
        const e = this.previousOpen.element.querySelectorAll(this._focusEl);
        !this.isOpen && this.lastFocusEl
          ? this.lastFocusEl.focus()
          : e[0].focus();
      }
      popupLogging(e) {
        this.options.logging && d(`[Попапос]: ${e}`);
      }
    })({});
    let u = (e, t = !1, s = 500, i = 0) => {
      const a = "string" == typeof e ? document.querySelector(e) : e;
      if (a) {
        let l = "",
          n = 0;
        t &&
          ((l = "header.header"), (n = document.querySelector(l).offsetHeight));
        let r = {
          speedAsDuration: !0,
          speed: s,
          header: l,
          offset: i,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (o(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(a, "", r);
        else {
          let e = a.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: n ? e - n : e, behavior: "smooth" });
        }
        d(`[gotoBlock]: Юхуу...едем к ${e}`);
      } else d(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
    };
    let h = {
      getErrors(e) {
        let t = 0,
          s = e.querySelectorAll("*[data-required]");
        return (
          s.length &&
            s.forEach((e) => {
              (null === e.offsetParent && "SELECT" !== e.tagName) ||
                e.disabled ||
                (t += this.validateInput(e));
            }),
          t
        );
      },
      validateInput(e) {
        let t = 0;
        return (
          "email" === e.dataset.required
            ? ((e.value = e.value.replace(" ", "")),
              this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
            : ("checkbox" !== e.type || e.checked) && e.value
            ? this.removeError(e)
            : (this.addError(e), t++),
          t
        );
      },
      addError(e) {
        e.classList.add("_form-error"),
          e.closest(".form__row").classList.add("_form-error");
        let t = e.parentElement.querySelector(".form__error");
        t && e.parentElement.removeChild(t),
          e.dataset.error &&
            e.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${e.dataset.error}</div>`,
            );
      },
      removeError(e) {
        e.classList.remove("_form-error"),
          e.parentElement.classList.remove("_form-error"),
          e.parentElement.querySelector(".form__error") &&
            e.parentElement.removeChild(
              e.parentElement.querySelector(".form__error"),
            );
      },
      formClean(t) {
        t.reset(),
          setTimeout(() => {
            let s = t.querySelectorAll("input,textarea");
            for (let e = 0; e < s.length; e++) {
              const t = s[e];
              t.parentElement.classList.remove("_form-focus"),
                t.classList.remove("_form-focus"),
                h.removeError(t);
            }
            let i = t.querySelectorAll(".checkbox__input");
            if (i.length > 0)
              for (let e = 0; e < i.length; e++) {
                i[e].checked = !1;
              }
            if (e.select) {
              let s = t.querySelectorAll(".select");
              if (s.length)
                for (let t = 0; t < s.length; t++) {
                  const i = s[t].querySelector("select");
                  e.select.selectBuild(i);
                }
            }
          }, 0);
      },
      emailTest: (e) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
    };
    function m(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function f(e, t) {
      void 0 === e && (e = {}),
        void 0 === t && (t = {}),
        Object.keys(t).forEach((s) => {
          void 0 === e[s]
            ? (e[s] = t[s])
            : m(t[s]) &&
              m(e[s]) &&
              Object.keys(t[s]).length > 0 &&
              f(e[s], t[s]);
        });
    }
    e.select = new (class {
      constructor(e, t = null) {
        if (
          ((this.config = Object.assign({ init: !0, logging: !0 }, e)),
          (this.selectClasses = {
            classSelect: "select",
            classSelectBody: "select__body",
            classSelectTitle: "select__title",
            classSelectValue: "select__value",
            classSelectLabel: "select__label",
            classSelectInput: "select__input",
            classSelectText: "select__text",
            classSelectLink: "select__link",
            classSelectOptions: "select__options",
            classSelectOptionsScroll: "select__scroll",
            classSelectOption: "select__option",
            classSelectContent: "select__content",
            classSelectRow: "select__row",
            classSelectData: "select__asset",
            classSelectDisabled: "_select-disabled",
            classSelectTag: "_select-tag",
            classSelectOpen: "_select-open",
            classSelectActive: "_select-active",
            classSelectFocus: "_select-focus",
            classSelectMultiple: "_select-multiple",
            classSelectCheckBox: "_select-checkbox",
            classSelectOptionSelected: "_select-selected",
          }),
          (this._this = this),
          this.config.init)
        ) {
          const e = t
            ? document.querySelectorAll(t)
            : document.querySelectorAll("select");
          e.length
            ? (this.selectsInit(e),
              this.setLogging(`Проснулся, построил селектов: (${e.length})`))
            : this.setLogging("Сплю, нет ни одного select zzZZZzZZz");
        }
      }
      getSelectClass(e) {
        return `.${e}`;
      }
      getSelectElement(e, t) {
        return {
          originalSelect: e.querySelector("select"),
          selectElement: e.querySelector(this.getSelectClass(t)),
        };
      }
      selectsInit(e) {
        e.forEach((e, t) => {
          this.selectInit(e, t + 1);
        }),
          document.addEventListener(
            "click",
            function (e) {
              this.selectsActions(e);
            }.bind(this),
          ),
          document.addEventListener(
            "keydown",
            function (e) {
              this.selectsActions(e);
            }.bind(this),
          ),
          document.addEventListener(
            "focusin",
            function (e) {
              this.selectsActions(e);
            }.bind(this),
          ),
          document.addEventListener(
            "focusout",
            function (e) {
              this.selectsActions(e);
            }.bind(this),
          );
      }
      selectInit(e, t) {
        const s = this;
        let i = document.createElement("div");
        if (
          (i.classList.add(this.selectClasses.classSelect),
          e.parentNode.insertBefore(i, e),
          i.appendChild(e),
          (e.hidden = !0),
          t && (e.dataset.id = t),
          i.insertAdjacentHTML(
            "beforeend",
            `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`,
          ),
          this.selectBuild(e),
          this.getSelectPlaceholder(e) &&
            ((e.dataset.placeholder = this.getSelectPlaceholder(e).value),
            this.getSelectPlaceholder(e).label.show))
        ) {
          this.getSelectElement(
            i,
            this.selectClasses.classSelectTitle,
          ).selectElement.insertAdjacentHTML(
            "afterbegin",
            `<span class="${this.selectClasses.classSelectLabel}">${
              this.getSelectPlaceholder(e).label.text
                ? this.getSelectPlaceholder(e).label.text
                : this.getSelectPlaceholder(e).value
            }</span>`,
          );
        }
        (e.dataset.speed = e.dataset.speed ? e.dataset.speed : "150"),
          e.addEventListener("change", function (e) {
            s.selectChange(e);
          });
      }
      selectBuild(e) {
        const t = e.parentElement;
        (t.dataset.id = e.dataset.id),
          t.classList.add(
            e.getAttribute("class") ? `select_${e.getAttribute("class")}` : "",
          ),
          e.multiple
            ? t.classList.add(this.selectClasses.classSelectMultiple)
            : t.classList.remove(this.selectClasses.classSelectMultiple),
          e.hasAttribute("data-checkbox") && e.multiple
            ? t.classList.add(this.selectClasses.classSelectCheckBox)
            : t.classList.remove(this.selectClasses.classSelectCheckBox),
          this.setSelectTitleValue(t, e),
          this.setOptions(t, e),
          e.hasAttribute("data-search") && this.searchActions(t),
          e.hasAttribute("data-open") && this.selectAction(t),
          this.selectDisabled(t, e);
      }
      selectsActions(e) {
        const t = e.target,
          s = e.type;
        if (
          t.closest(this.getSelectClass(this.selectClasses.classSelect)) ||
          t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
        ) {
          const i = t.closest(".select")
              ? t.closest(".select")
              : document.querySelector(
                  `.${this.selectClasses.classSelect}[data-id="${
                    t.closest(
                      this.getSelectClass(this.selectClasses.classSelectTag),
                    ).dataset.selectId
                  }"]`,
                ),
            a = this.getSelectElement(i).originalSelect;
          if ("click" === s) {
            if (!a.disabled)
              if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag),
                )
              ) {
                const e = t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag),
                  ),
                  s = document.querySelector(
                    `.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`,
                  );
                this.optionAction(i, a, s);
              } else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTitle),
                )
              )
                this.selectsСlose(), this.selectAction(i);
              else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption),
                )
              ) {
                const e = t.closest(
                    this.getSelectClass(this.selectClasses.classSelectOption),
                  ),
                  s = e.closest(".select").dataset.id;
                this.setDisableAfterSelectsForSend(s),
                  this.optionAction(i, a, e);
              }
          } else
            "focusin" === s || "focusout" === s
              ? t.closest(
                  this.getSelectClass(this.selectClasses.classSelect),
                ) &&
                ("focusin" === s
                  ? i.classList.add(this.selectClasses.classSelectFocus)
                  : i.classList.remove(this.selectClasses.classSelectFocus))
              : "keydown" === s && "Escape" === e.code && this.selectsСlose();
        } else this.selectsСlose();
      }
      setDisableAfterSelectsForSend(e) {
        const t = document.querySelectorAll(".filter__select");
        if (e < t.length)
          for (let s = e; s < t.length; s++) {
            const e = t[s];
            e.setAttribute("disabled", "disabled"),
              e.closest(".select").classList.add("_select-disabled"),
              (e
                .closest(".select")
                .querySelector(".select__content").innerHTML = e[0].innerHTML);
          }
      }
      selectsСlose() {
        const e = document.querySelectorAll(
          `${this.getSelectClass(
            this.selectClasses.classSelect,
          )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`,
        );
        e.length &&
          e.forEach((e) => {
            this.selectAction(e);
          });
      }
      selectAction(e) {
        const t = this.getSelectElement(e).originalSelect,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions,
          ).selectElement;
        s.classList.contains("_slide") ||
          (e.classList.toggle(this.selectClasses.classSelectOpen),
          l(s, t.dataset.speed));
      }
      setSelectTitleValue(e, t) {
        const s = this.getSelectElement(
            e,
            this.selectClasses.classSelectBody,
          ).selectElement,
          i = this.getSelectElement(
            e,
            this.selectClasses.classSelectTitle,
          ).selectElement;
        i && i.remove(),
          s.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t));
      }
      getSelectTitleValue(e, t) {
        let s = this.getSelectedOptionsData(t, 2).html;
        if (
          (window.matchMedia("(min-width: 992px)").matches &&
            s[0].length > 6 &&
            (s[0] = `${s[0].slice(0, 6)}...`),
          t.multiple &&
            t.hasAttribute("data-tags") &&
            ((s = this.getSelectedOptionsData(t)
              .elements.map(
                (t) =>
                  `<span role="button" data-select-id="${
                    e.dataset.id
                  }" data-value="${
                    t.value
                  }" class="_select-tag">${this.getSelectElementContent(
                    t,
                  )}</span>`,
              )
              .join("")),
            t.dataset.tags &&
              document.querySelector(t.dataset.tags) &&
              ((document.querySelector(t.dataset.tags).innerHTML = s),
              t.hasAttribute("data-search") && (s = !1))),
          (s = s.length ? s : t.dataset.placeholder),
          this.getSelectedOptionsData(t).values.length
            ? e.classList.add(this.selectClasses.classSelectActive)
            : e.classList.remove(this.selectClasses.classSelectActive),
          t.hasAttribute("data-search"))
        )
          return `<div class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${s}" data-placeholder="${s}" class="${this.selectClasses.classSelectInput}"></span></div>`;
        {
          const e =
            this.getSelectedOptionsData(t).elements.length &&
            this.getSelectedOptionsData(t).elements[0].dataset.class
              ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}`
              : "";
          return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><span class="${this.selectClasses.classSelectContent}${e}">${s}</span></span></button>`;
        }
      }
      getSelectElementContent(e) {
        const t = e.dataset.asset ? `${e.dataset.asset}` : "",
          s = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
        let i = "";
        return (
          (i += t ? `<span class="${this.selectClasses.classSelectRow}">` : ""),
          (i += t
            ? `<span class="${this.selectClasses.classSelectData}">`
            : ""),
          (i += t ? s : ""),
          (i += t ? "</span>" : ""),
          (i += t
            ? `<span class="${this.selectClasses.classSelectText}">`
            : ""),
          (i += e.textContent),
          (i += t ? "</span>" : ""),
          (i += t ? "</span>" : ""),
          i
        );
      }
      getSelectPlaceholder(e) {
        const t = Array.from(e.options).find((e) => !e.value);
        if (t)
          return {
            value: t.textContent,
            show: t.hasAttribute("data-show"),
            label: {
              show: t.hasAttribute("data-label"),
              text: t.dataset.label,
            },
          };
      }
      getSelectedOptionsData(e, t) {
        let s = [];
        return (
          e.multiple
            ? (s = Array.from(e.options)
                .filter((e) => e.value)
                .filter((e) => e.selected))
            : s.push(e.options[e.selectedIndex]),
          {
            elements: s.map((e) => e),
            values: s.filter((e) => e.value).map((e) => e.value),
            html: s.map((e) => this.getSelectElementContent(e)),
          }
        );
      }
      getOptions(e) {
        let t = e.hasAttribute("data-scroll") ? "data-simplebar" : "",
          s = e.dataset.scroll
            ? `style="max-height:${e.dataset.scroll}px"`
            : "",
          i = Array.from(e.options);
        if (i.length > 0) {
          let a = "";
          return (
            ((this.getSelectPlaceholder(e) &&
              !this.getSelectPlaceholder(e).show) ||
              e.multiple) &&
              (i = i.filter((e) => e.value)),
            (a += t
              ? `<div ${t} ${s} class="${this.selectClasses.classSelectOptionsScroll}">`
              : ""),
            i.forEach((t) => {
              a += this.getOption(t, e);
            }),
            (a += t ? "</div>" : ""),
            a
          );
        }
      }
      getOption(e, t) {
        const s =
            e.selected && t.multiple
              ? ` ${this.selectClasses.classSelectOptionSelected}`
              : "",
          i =
            e.selected && !t.hasAttribute("data-show-selected") ? "hidden" : "",
          a = e.dataset.class ? ` ${e.dataset.class}` : "",
          l = !!e.dataset.href && e.dataset.href,
          n = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
        let r = "";
        return (
          (r += l
            ? `<a ${n} ${i} href="${l}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${a}${s}">`
            : `<button ${i} class="${this.selectClasses.classSelectOption}${a}${s}" data-value="${e.value}" type="button">`),
          (r += this.getSelectElementContent(e)),
          (r += l ? "</a>" : "</button>"),
          r
        );
      }
      setOptions(e, t) {
        this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions,
        ).selectElement.innerHTML = this.getOptions(t);
      }
      optionAction(e, t, s) {
        if (t.multiple) {
          s.classList.toggle(this.selectClasses.classSelectOptionSelected);
          this.getSelectedOptionsData(t).elements.forEach((e) => {
            e.removeAttribute("selected");
          });
          e.querySelectorAll(
            this.getSelectClass(this.selectClasses.classSelectOptionSelected),
          ).forEach((e) => {
            t.querySelector(`option[value="${e.dataset.value}"]`).setAttribute(
              "selected",
              "selected",
            );
          });
        } else
          t.hasAttribute("data-show-selected") ||
            (e.querySelector(
              `${this.getSelectClass(
                this.selectClasses.classSelectOption,
              )}[hidden]`,
            ) &&
              (e.querySelector(
                `${this.getSelectClass(
                  this.selectClasses.classSelectOption,
                )}[hidden]`,
              ).hidden = !1),
            (s.hidden = !0)),
            (t.value = s.hasAttribute("data-value")
              ? s.dataset.value
              : s.textContent),
            this.selectAction(e);
        this.setSelectTitleValue(e, t), this.setSelectChange(t);
      }
      selectChange(e) {
        const t = e.target;
        this.selectBuild(t), this.setSelectChange(t);
      }
      setSelectChange(e) {
        if (
          (e.hasAttribute("data-validate") && h.validateInput(e),
          e.hasAttribute("data-submit") && e.value)
        ) {
          let t = document.createElement("button");
          (t.type = "submit"),
            e.closest("form").append(t),
            t.click(),
            t.remove();
        }
        const t = e.parentElement;
        this.selectCallback(t, e);
      }
      selectDisabled(e, t) {
        t.disabled
          ? (e.classList.add(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle,
            ).selectElement.disabled = !0),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle,
            ).selectElement.disabled = "disabled"))
          : (e.classList.remove(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle,
            ).selectElement.disabled = !1));
      }
      searchActions(e) {
        this.getSelectElement(e).originalSelect;
        const t = this.getSelectElement(
            e,
            this.selectClasses.classSelectInput,
          ).selectElement,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions,
          ).selectElement,
          i = s.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
          a = this;
        t.addEventListener("input", function () {
          i.forEach((e) => {
            e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
              ? (e.hidden = !1)
              : (e.hidden = !0);
          }),
            !0 === s.hidden && a.selectAction(e);
        });
      }
      selectCallback(e, t) {
        document.dispatchEvent(
          new CustomEvent("selectCallback", { detail: { select: t } }),
        );
      }
      setLogging(e) {
        this.config.logging && d(`[select]: ${e}`);
      }
    })({});
    const v = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function g() {
      const e = "undefined" != typeof document ? document : {};
      return f(e, v), e;
    }
    const b = {
      document: v,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function y() {
      const e = "undefined" != typeof window ? window : {};
      return f(e, b), e;
    }
    function S(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function w() {
      return Date.now();
    }
    function E(e, t) {
      void 0 === t && (t = "x");
      const s = y();
      let i, a, l;
      const n = (function (e) {
        const t = y();
        let s;
        return (
          t.getComputedStyle && (s = t.getComputedStyle(e, null)),
          !s && e.currentStyle && (s = e.currentStyle),
          s || (s = e.style),
          s
        );
      })(e);
      return (
        s.WebKitCSSMatrix
          ? ((a = n.transform || n.webkitTransform),
            a.split(",").length > 6 &&
              (a = a
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (l = new s.WebKitCSSMatrix("none" === a ? "" : a)))
          : ((l =
              n.MozTransform ||
              n.OTransform ||
              n.MsTransform ||
              n.msTransform ||
              n.transform ||
              n
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (i = l.toString().split(","))),
        "x" === t &&
          (a = s.WebKitCSSMatrix
            ? l.m41
            : 16 === i.length
            ? parseFloat(i[12])
            : parseFloat(i[4])),
        "y" === t &&
          (a = s.WebKitCSSMatrix
            ? l.m42
            : 16 === i.length
            ? parseFloat(i[13])
            : parseFloat(i[5])),
        a || 0
      );
    }
    function x(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function T() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
      for (let i = 1; i < arguments.length; i += 1) {
        const a = i < 0 || arguments.length <= i ? void 0 : arguments[i];
        if (
          null != a &&
          ((s = a),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? s instanceof HTMLElement
            : s && (1 === s.nodeType || 11 === s.nodeType)))
        ) {
          const s = Object.keys(Object(a)).filter((e) => t.indexOf(e) < 0);
          for (let t = 0, i = s.length; t < i; t += 1) {
            const i = s[t],
              l = Object.getOwnPropertyDescriptor(a, i);
            void 0 !== l &&
              l.enumerable &&
              (x(e[i]) && x(a[i])
                ? a[i].__swiper__
                  ? (e[i] = a[i])
                  : T(e[i], a[i])
                : !x(e[i]) && x(a[i])
                ? ((e[i] = {}), a[i].__swiper__ ? (e[i] = a[i]) : T(e[i], a[i]))
                : (e[i] = a[i]));
          }
        }
      }
      var s;
      return e;
    }
    function C(e, t, s) {
      e.style.setProperty(t, s);
    }
    function A(e) {
      let { swiper: t, targetPosition: s, side: i } = e;
      const a = y(),
        l = -t.translate;
      let n,
        r = null;
      const o = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = "none"),
        a.cancelAnimationFrame(t.cssModeFrameID);
      const c = s > l ? "next" : "prev",
        d = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
        p = () => {
          (n = new Date().getTime()), null === r && (r = n);
          const e = Math.max(Math.min((n - r) / o, 1), 0),
            c = 0.5 - Math.cos(e * Math.PI) / 2;
          let u = l + c * (s - l);
          if ((d(u, s) && (u = s), t.wrapperEl.scrollTo({ [i]: u }), d(u, s)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [i]: u });
              }),
              void a.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = a.requestAnimationFrame(p);
        };
      p();
    }
    function O(e, t) {
      return (
        void 0 === t && (t = ""), [...e.children].filter((e) => e.matches(t))
      );
    }
    function L(e, t) {
      void 0 === t && (t = []);
      const s = document.createElement(e);
      return s.classList.add(...(Array.isArray(t) ? t : [t])), s;
    }
    function M(e, t) {
      return y().getComputedStyle(e, null).getPropertyValue(t);
    }
    function k(e) {
      let t,
        s = e;
      if (s) {
        for (t = 0; null !== (s = s.previousSibling); )
          1 === s.nodeType && (t += 1);
        return t;
      }
    }
    function P(e, t) {
      const s = [];
      let i = e.parentElement;
      for (; i; )
        t ? i.matches(t) && s.push(i) : s.push(i), (i = i.parentElement);
      return s;
    }
    function _(e, t, s) {
      const i = y();
      return s
        ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
            parseFloat(
              i
                .getComputedStyle(e, null)
                .getPropertyValue(
                  "width" === t ? "margin-right" : "margin-top",
                ),
            ) +
            parseFloat(
              i
                .getComputedStyle(e, null)
                .getPropertyValue(
                  "width" === t ? "margin-left" : "margin-bottom",
                ),
            )
        : e.offsetWidth;
    }
    let z, I, $;
    function D() {
      return (
        z ||
          (z = (function () {
            const e = y(),
              t = g();
            return {
              smoothScroll:
                t.documentElement &&
                t.documentElement.style &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
            };
          })()),
        z
      );
    }
    function N(e) {
      return (
        void 0 === e && (e = {}),
        I ||
          (I = (function (e) {
            let { userAgent: t } = void 0 === e ? {} : e;
            const s = D(),
              i = y(),
              a = i.navigator.platform,
              l = t || i.navigator.userAgent,
              n = { ios: !1, android: !1 },
              r = i.screen.width,
              o = i.screen.height,
              c = l.match(/(Android);?[\s\/]+([\d.]+)?/);
            let d = l.match(/(iPad).*OS\s([\d_]+)/);
            const p = l.match(/(iPod)(.*OS\s([\d_]+))?/),
              u = !d && l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              h = "Win32" === a;
            let m = "MacIntel" === a;
            return (
              !d &&
                m &&
                s.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${r}x${o}`) >= 0 &&
                ((d = l.match(/(Version)\/([\d.]+)/)),
                d || (d = [0, 1, "13_0_0"]),
                (m = !1)),
              c && !h && ((n.os = "android"), (n.android = !0)),
              (d || u || p) && ((n.os = "ios"), (n.ios = !0)),
              n
            );
          })(e)),
        I
      );
    }
    function q() {
      return (
        $ ||
          ($ = (function () {
            const e = y();
            let t = !1;
            function s() {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            }
            if (s()) {
              const s = String(e.navigator.userAgent);
              if (s.includes("Version/")) {
                const [e, i] = s
                  .split("Version/")[1]
                  .split(" ")[0]
                  .split(".")
                  .map((e) => Number(e));
                t = e < 16 || (16 === e && i < 2);
              }
            }
            return {
              isSafari: t || s(),
              needPerspectiveFix: t,
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent,
              ),
            };
          })()),
        $
      );
    }
    var B = {
      on(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        const a = s ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []),
              i.eventsListeners[e][a](t);
          }),
          i
        );
      },
      once(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        function a() {
          i.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
          for (var s = arguments.length, l = new Array(s), n = 0; n < s; n++)
            l[n] = arguments[n];
          t.apply(i, l);
        }
        return (a.__emitterProxy = t), i.on(e, a, s);
      },
      onAny(e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof e) return s;
        const i = t ? "unshift" : "push";
        return (
          s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
      },
      off(e, t) {
        const s = this;
        return !s.eventsListeners || s.destroyed
          ? s
          : s.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (s.eventsListeners[e] = [])
                : s.eventsListeners[e] &&
                  s.eventsListeners[e].forEach((i, a) => {
                    (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                      s.eventsListeners[e].splice(a, 1);
                  });
            }),
            s)
          : s;
      },
      emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed) return e;
        if (!e.eventsListeners) return e;
        let t, s, i;
        for (var a = arguments.length, l = new Array(a), n = 0; n < a; n++)
          l[n] = arguments[n];
        "string" == typeof l[0] || Array.isArray(l[0])
          ? ((t = l[0]), (s = l.slice(1, l.length)), (i = e))
          : ((t = l[0].events), (s = l[0].data), (i = l[0].context || e)),
          s.unshift(i);
        return (
          (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
            e.eventsAnyListeners &&
              e.eventsAnyListeners.length &&
              e.eventsAnyListeners.forEach((e) => {
                e.apply(i, [t, ...s]);
              }),
              e.eventsListeners &&
                e.eventsListeners[t] &&
                e.eventsListeners[t].forEach((e) => {
                  e.apply(i, s);
                });
          }),
          e
        );
      },
    };
    const W = (e, t) => {
        if (!e || e.destroyed || !e.params) return;
        const s = t.closest(
          e.isElement ? "swiper-slide" : `.${e.params.slideClass}`,
        );
        if (s) {
          let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
          !t &&
            e.isElement &&
            (s.shadowRoot
              ? (t = s.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`,
                ))
              : requestAnimationFrame(() => {
                  s.shadowRoot &&
                    ((t = s.shadowRoot.querySelector(
                      `.${e.params.lazyPreloaderClass}`,
                    )),
                    t && t.remove());
                })),
            t && t.remove();
        }
      },
      V = (e, t) => {
        if (!e.slides[t]) return;
        const s = e.slides[t].querySelector('[loading="lazy"]');
        s && s.removeAttribute("loading");
      },
      H = (e) => {
        if (!e || e.destroyed || !e.params) return;
        let t = e.params.lazyPreloadPrevNext;
        const s = e.slides.length;
        if (!s || !t || t < 0) return;
        t = Math.min(t, s);
        const i =
            "auto" === e.params.slidesPerView
              ? e.slidesPerViewDynamic()
              : Math.ceil(e.params.slidesPerView),
          a = e.activeIndex;
        if (e.params.grid && e.params.grid.rows > 1) {
          const s = a,
            l = [s - t];
          return (
            l.push(...Array.from({ length: t }).map((e, t) => s + i + t)),
            void e.slides.forEach((t, s) => {
              l.includes(t.column) && V(e, s);
            })
          );
        }
        const l = a + i - 1;
        if (e.params.rewind || e.params.loop)
          for (let i = a - t; i <= l + t; i += 1) {
            const t = ((i % s) + s) % s;
            (t < a || t > l) && V(e, t);
          }
        else
          for (let i = Math.max(a - t, 0); i <= Math.min(l + t, s - 1); i += 1)
            i !== a && (i > l || i < a) && V(e, i);
      };
    var G = {
      updateSize: function () {
        const e = this;
        let t, s;
        const i = e.el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : i.clientWidth),
          (s =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : i.clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === s && e.isVertical()) ||
            ((t =
              t -
              parseInt(M(i, "padding-left") || 0, 10) -
              parseInt(M(i, "padding-right") || 0, 10)),
            (s =
              s -
              parseInt(M(i, "padding-top") || 0, 10) -
              parseInt(M(i, "padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
              width: t,
              height: s,
              size: e.isHorizontal() ? t : s,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function s(e, s) {
          return parseFloat(e.getPropertyValue(t(s)) || 0);
        }
        const i = e.params,
          {
            wrapperEl: a,
            slidesEl: l,
            size: n,
            rtlTranslate: r,
            wrongRTL: o,
          } = e,
          c = e.virtual && i.virtual.enabled,
          d = c ? e.virtual.slides.length : e.slides.length,
          p = O(l, `.${e.params.slideClass}, swiper-slide`),
          u = c ? e.virtual.slides.length : p.length;
        let h = [];
        const m = [],
          f = [];
        let v = i.slidesOffsetBefore;
        "function" == typeof v && (v = i.slidesOffsetBefore.call(e));
        let g = i.slidesOffsetAfter;
        "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
        const b = e.snapGrid.length,
          y = e.slidesGrid.length;
        let S = i.spaceBetween,
          w = -v,
          E = 0,
          x = 0;
        if (void 0 === n) return;
        "string" == typeof S && S.indexOf("%") >= 0
          ? (S = (parseFloat(S.replace("%", "")) / 100) * n)
          : "string" == typeof S && (S = parseFloat(S)),
          (e.virtualSize = -S),
          p.forEach((e) => {
            r ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
              (e.style.marginBottom = ""),
              (e.style.marginTop = "");
          }),
          i.centeredSlides &&
            i.cssMode &&
            (C(a, "--swiper-centered-offset-before", ""),
            C(a, "--swiper-centered-offset-after", ""));
        const T = i.grid && i.grid.rows > 1 && e.grid;
        let A;
        T && e.grid.initSlides(u);
        const L =
          "auto" === i.slidesPerView &&
          i.breakpoints &&
          Object.keys(i.breakpoints).filter(
            (e) => void 0 !== i.breakpoints[e].slidesPerView,
          ).length > 0;
        for (let a = 0; a < u; a += 1) {
          let l;
          if (
            ((A = 0),
            p[a] && (l = p[a]),
            T && e.grid.updateSlide(a, l, u, t),
            !p[a] || "none" !== M(l, "display"))
          ) {
            if ("auto" === i.slidesPerView) {
              L && (p[a].style[t("width")] = "");
              const n = getComputedStyle(l),
                r = l.style.transform,
                o = l.style.webkitTransform;
              if (
                (r && (l.style.transform = "none"),
                o && (l.style.webkitTransform = "none"),
                i.roundLengths)
              )
                A = e.isHorizontal() ? _(l, "width", !0) : _(l, "height", !0);
              else {
                const e = s(n, "width"),
                  t = s(n, "padding-left"),
                  i = s(n, "padding-right"),
                  a = s(n, "margin-left"),
                  r = s(n, "margin-right"),
                  o = n.getPropertyValue("box-sizing");
                if (o && "border-box" === o) A = e + a + r;
                else {
                  const { clientWidth: s, offsetWidth: n } = l;
                  A = e + t + i + a + r + (n - s);
                }
              }
              r && (l.style.transform = r),
                o && (l.style.webkitTransform = o),
                i.roundLengths && (A = Math.floor(A));
            } else
              (A = (n - (i.slidesPerView - 1) * S) / i.slidesPerView),
                i.roundLengths && (A = Math.floor(A)),
                p[a] && (p[a].style[t("width")] = `${A}px`);
            p[a] && (p[a].swiperSlideSize = A),
              f.push(A),
              i.centeredSlides
                ? ((w = w + A / 2 + E / 2 + S),
                  0 === E && 0 !== a && (w = w - n / 2 - S),
                  0 === a && (w = w - n / 2 - S),
                  Math.abs(w) < 0.001 && (w = 0),
                  i.roundLengths && (w = Math.floor(w)),
                  x % i.slidesPerGroup == 0 && h.push(w),
                  m.push(w))
                : (i.roundLengths && (w = Math.floor(w)),
                  (x - Math.min(e.params.slidesPerGroupSkip, x)) %
                    e.params.slidesPerGroup ==
                    0 && h.push(w),
                  m.push(w),
                  (w = w + A + S)),
              (e.virtualSize += A + S),
              (E = A),
              (x += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, n) + g),
          r &&
            o &&
            ("slide" === i.effect || "coverflow" === i.effect) &&
            (a.style.width = `${e.virtualSize + S}px`),
          i.setWrapperSize && (a.style[t("width")] = `${e.virtualSize + S}px`),
          T && e.grid.updateWrapperSize(A, h, t),
          !i.centeredSlides)
        ) {
          const t = [];
          for (let s = 0; s < h.length; s += 1) {
            let a = h[s];
            i.roundLengths && (a = Math.floor(a)),
              h[s] <= e.virtualSize - n && t.push(a);
          }
          (h = t),
            Math.floor(e.virtualSize - n) - Math.floor(h[h.length - 1]) > 1 &&
              h.push(e.virtualSize - n);
        }
        if (c && i.loop) {
          const t = f[0] + S;
          if (i.slidesPerGroup > 1) {
            const s = Math.ceil(
                (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                  i.slidesPerGroup,
              ),
              a = t * i.slidesPerGroup;
            for (let e = 0; e < s; e += 1) h.push(h[h.length - 1] + a);
          }
          for (
            let s = 0;
            s < e.virtual.slidesBefore + e.virtual.slidesAfter;
            s += 1
          )
            1 === i.slidesPerGroup && h.push(h[h.length - 1] + t),
              m.push(m[m.length - 1] + t),
              (e.virtualSize += t);
        }
        if ((0 === h.length && (h = [0]), 0 !== S)) {
          const s = e.isHorizontal() && r ? "marginLeft" : t("marginRight");
          p.filter(
            (e, t) => !(i.cssMode && !i.loop) || t !== p.length - 1,
          ).forEach((e) => {
            e.style[s] = `${S}px`;
          });
        }
        if (i.centeredSlides && i.centeredSlidesBounds) {
          let e = 0;
          f.forEach((t) => {
            e += t + (S || 0);
          }),
            (e -= S);
          const t = e - n;
          h = h.map((e) => (e <= 0 ? -v : e > t ? t + g : e));
        }
        if (i.centerInsufficientSlides) {
          let e = 0;
          if (
            (f.forEach((t) => {
              e += t + (S || 0);
            }),
            (e -= S),
            e < n)
          ) {
            const t = (n - e) / 2;
            h.forEach((e, s) => {
              h[s] = e - t;
            }),
              m.forEach((e, s) => {
                m[s] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: p,
            snapGrid: h,
            slidesGrid: m,
            slidesSizesGrid: f,
          }),
          i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
        ) {
          C(a, "--swiper-centered-offset-before", -h[0] + "px"),
            C(
              a,
              "--swiper-centered-offset-after",
              e.size / 2 - f[f.length - 1] / 2 + "px",
            );
          const t = -e.snapGrid[0],
            s = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + s));
        }
        if (
          (u !== d && e.emit("slidesLengthChange"),
          h.length !== b &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          m.length !== y && e.emit("slidesGridLengthChange"),
          i.watchSlidesProgress && e.updateSlidesOffset(),
          !(c || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
        ) {
          const t = `${i.containerModifierClass}backface-hidden`,
            s = e.el.classList.contains(t);
          u <= i.maxBackfaceHiddenSlides
            ? s || e.el.classList.add(t)
            : s && e.el.classList.remove(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          s = [],
          i = t.virtual && t.params.virtual.enabled;
        let a,
          l = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const n = (e) => (i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || []).forEach((e) => {
              s.push(e);
            });
          else
            for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
              const e = t.activeIndex + a;
              if (e > t.slides.length && !i) break;
              s.push(n(e));
            }
        else s.push(n(t.activeIndex));
        for (a = 0; a < s.length; a += 1)
          if (void 0 !== s[a]) {
            const e = s[a].offsetHeight;
            l = e > l ? e : l;
          }
        (l || 0 === l) && (t.wrapperEl.style.height = `${l}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides,
          s = e.isElement
            ? e.isHorizontal()
              ? e.wrapperEl.offsetLeft
              : e.wrapperEl.offsetTop
            : 0;
        for (let i = 0; i < t.length; i += 1)
          t[i].swiperSlideOffset =
            (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) -
            s -
            e.cssOverflowAdjustment();
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = (this && this.translate) || 0);
        const t = this,
          s = t.params,
          { slides: i, rtlTranslate: a, snapGrid: l } = t;
        if (0 === i.length) return;
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        let n = -e;
        a && (n = e),
          i.forEach((e) => {
            e.classList.remove(s.slideVisibleClass);
          }),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        let r = s.spaceBetween;
        "string" == typeof r && r.indexOf("%") >= 0
          ? (r = (parseFloat(r.replace("%", "")) / 100) * t.size)
          : "string" == typeof r && (r = parseFloat(r));
        for (let e = 0; e < i.length; e += 1) {
          const o = i[e];
          let c = o.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (c -= i[0].swiperSlideOffset);
          const d =
              (n + (s.centeredSlides ? t.minTranslate() : 0) - c) /
              (o.swiperSlideSize + r),
            p =
              (n - l[0] + (s.centeredSlides ? t.minTranslate() : 0) - c) /
              (o.swiperSlideSize + r),
            u = -(n - c),
            h = u + t.slidesSizesGrid[e];
          ((u >= 0 && u < t.size - 1) ||
            (h > 1 && h <= t.size) ||
            (u <= 0 && h >= t.size)) &&
            (t.visibleSlides.push(o),
            t.visibleSlidesIndexes.push(e),
            i[e].classList.add(s.slideVisibleClass)),
            (o.progress = a ? -d : d),
            (o.originalProgress = a ? -p : p);
        }
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const s = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * s) || 0;
        }
        const s = t.params,
          i = t.maxTranslate() - t.minTranslate();
        let { progress: a, isBeginning: l, isEnd: n, progressLoop: r } = t;
        const o = l,
          c = n;
        if (0 === i) (a = 0), (l = !0), (n = !0);
        else {
          a = (e - t.minTranslate()) / i;
          const s = Math.abs(e - t.minTranslate()) < 1,
            r = Math.abs(e - t.maxTranslate()) < 1;
          (l = s || a <= 0), (n = r || a >= 1), s && (a = 0), r && (a = 1);
        }
        if (s.loop) {
          const s = t.getSlideIndexByData(0),
            i = t.getSlideIndexByData(t.slides.length - 1),
            a = t.slidesGrid[s],
            l = t.slidesGrid[i],
            n = t.slidesGrid[t.slidesGrid.length - 1],
            o = Math.abs(e);
          (r = o >= a ? (o - a) / n : (o + n - l) / n), r > 1 && (r -= 1);
        }
        Object.assign(t, {
          progress: a,
          progressLoop: r,
          isBeginning: l,
          isEnd: n,
        }),
          (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
            t.updateSlidesProgress(e),
          l && !o && t.emit("reachBeginning toEdge"),
          n && !c && t.emit("reachEnd toEdge"),
          ((o && !l) || (c && !n)) && t.emit("fromEdge"),
          t.emit("progress", a);
      },
      updateSlidesClasses: function () {
        const e = this,
          { slides: t, params: s, slidesEl: i, activeIndex: a } = e,
          l = e.virtual && s.virtual.enabled,
          n = (e) => O(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
        let r;
        if (
          (t.forEach((e) => {
            e.classList.remove(
              s.slideActiveClass,
              s.slideNextClass,
              s.slidePrevClass,
            );
          }),
          l)
        )
          if (s.loop) {
            let t = a - e.virtual.slidesBefore;
            t < 0 && (t = e.virtual.slides.length + t),
              t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
              (r = n(`[data-swiper-slide-index="${t}"]`));
          } else r = n(`[data-swiper-slide-index="${a}"]`);
        else r = t[a];
        if (r) {
          r.classList.add(s.slideActiveClass);
          let e = (function (e, t) {
            const s = [];
            for (; e.nextElementSibling; ) {
              const i = e.nextElementSibling;
              t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
            }
            return s;
          })(r, `.${s.slideClass}, swiper-slide`)[0];
          s.loop && !e && (e = t[0]), e && e.classList.add(s.slideNextClass);
          let i = (function (e, t) {
            const s = [];
            for (; e.previousElementSibling; ) {
              const i = e.previousElementSibling;
              t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
            }
            return s;
          })(r, `.${s.slideClass}, swiper-slide`)[0];
          s.loop && 0 === !i && (i = t[t.length - 1]),
            i && i.classList.add(s.slidePrevClass);
        }
        e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          {
            snapGrid: i,
            params: a,
            activeIndex: l,
            realIndex: n,
            snapIndex: r,
          } = t;
        let o,
          c = e;
        const d = (e) => {
          let s = e - t.virtual.slidesBefore;
          return (
            s < 0 && (s = t.virtual.slides.length + s),
            s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
            s
          );
        };
        if (
          (void 0 === c &&
            (c = (function (e) {
              const { slidesGrid: t, params: s } = e,
                i = e.rtlTranslate ? e.translate : -e.translate;
              let a;
              for (let e = 0; e < t.length; e += 1)
                void 0 !== t[e + 1]
                  ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2
                    ? (a = e)
                    : i >= t[e] && i < t[e + 1] && (a = e + 1)
                  : i >= t[e] && (a = e);
              return (
                s.normalizeSlideIndex && (a < 0 || void 0 === a) && (a = 0), a
              );
            })(t)),
          i.indexOf(s) >= 0)
        )
          o = i.indexOf(s);
        else {
          const e = Math.min(a.slidesPerGroupSkip, c);
          o = e + Math.floor((c - e) / a.slidesPerGroup);
        }
        if ((o >= i.length && (o = i.length - 1), c === l))
          return (
            o !== r && ((t.snapIndex = o), t.emit("snapIndexChange")),
            void (
              t.params.loop &&
              t.virtual &&
              t.params.virtual.enabled &&
              (t.realIndex = d(c))
            )
          );
        let p;
        (p =
          t.virtual && a.virtual.enabled && a.loop
            ? d(c)
            : t.slides[c]
            ? parseInt(
                t.slides[c].getAttribute("data-swiper-slide-index") || c,
                10,
              )
            : c),
          Object.assign(t, {
            previousSnapIndex: r,
            snapIndex: o,
            previousRealIndex: n,
            realIndex: p,
            previousIndex: l,
            activeIndex: c,
          }),
          t.initialized && H(t),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            (n !== p && t.emit("realIndexChange"), t.emit("slideChange"));
      },
      updateClickedSlide: function (e, t) {
        const s = this,
          i = s.params;
        let a = e.closest(`.${i.slideClass}, swiper-slide`);
        !a &&
          s.isElement &&
          t &&
          t.length > 1 &&
          t.includes(e) &&
          [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
            !a &&
              e.matches &&
              e.matches(`.${i.slideClass}, swiper-slide`) &&
              (a = e);
          });
        let l,
          n = !1;
        if (a)
          for (let e = 0; e < s.slides.length; e += 1)
            if (s.slides[e] === a) {
              (n = !0), (l = e);
              break;
            }
        if (!a || !n)
          return (s.clickedSlide = void 0), void (s.clickedIndex = void 0);
        (s.clickedSlide = a),
          s.virtual && s.params.virtual.enabled
            ? (s.clickedIndex = parseInt(
                a.getAttribute("data-swiper-slide-index"),
                10,
              ))
            : (s.clickedIndex = l),
          i.slideToClickedSlide &&
            void 0 !== s.clickedIndex &&
            s.clickedIndex !== s.activeIndex &&
            s.slideToClickedSlide();
      },
    };
    var F = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        const { params: t, rtlTranslate: s, translate: i, wrapperEl: a } = this;
        if (t.virtualTranslate) return s ? -i : i;
        if (t.cssMode) return i;
        let l = E(a, e);
        return (l += this.cssOverflowAdjustment()), s && (l = -l), l || 0;
      },
      setTranslate: function (e, t) {
        const s = this,
          { rtlTranslate: i, params: a, wrapperEl: l, progress: n } = s;
        let r,
          o = 0,
          c = 0;
        s.isHorizontal() ? (o = i ? -e : e) : (c = e),
          a.roundLengths && ((o = Math.floor(o)), (c = Math.floor(c))),
          (s.previousTranslate = s.translate),
          (s.translate = s.isHorizontal() ? o : c),
          a.cssMode
            ? (l[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                s.isHorizontal() ? -o : -c)
            : a.virtualTranslate ||
              (s.isHorizontal()
                ? (o -= s.cssOverflowAdjustment())
                : (c -= s.cssOverflowAdjustment()),
              (l.style.transform = `translate3d(${o}px, ${c}px, 0px)`));
        const d = s.maxTranslate() - s.minTranslate();
        (r = 0 === d ? 0 : (e - s.minTranslate()) / d),
          r !== n && s.updateProgress(e),
          s.emit("setTranslate", s.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e, t, s, i, a) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          void 0 === i && (i = !0);
        const l = this,
          { params: n, wrapperEl: r } = l;
        if (l.animating && n.preventInteractionOnTransition) return !1;
        const o = l.minTranslate(),
          c = l.maxTranslate();
        let d;
        if (
          ((d = i && e > o ? o : i && e < c ? c : e),
          l.updateProgress(d),
          n.cssMode)
        ) {
          const e = l.isHorizontal();
          if (0 === t) r[e ? "scrollLeft" : "scrollTop"] = -d;
          else {
            if (!l.support.smoothScroll)
              return (
                A({ swiper: l, targetPosition: -d, side: e ? "left" : "top" }),
                !0
              );
            r.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (l.setTransition(0),
              l.setTranslate(d),
              s &&
                (l.emit("beforeTransitionStart", t, a),
                l.emit("transitionEnd")))
            : (l.setTransition(t),
              l.setTranslate(d),
              s &&
                (l.emit("beforeTransitionStart", t, a),
                l.emit("transitionStart")),
              l.animating ||
                ((l.animating = !0),
                l.onTranslateToWrapperTransitionEnd ||
                  (l.onTranslateToWrapperTransitionEnd = function (e) {
                    l &&
                      !l.destroyed &&
                      e.target === this &&
                      (l.wrapperEl.removeEventListener(
                        "transitionend",
                        l.onTranslateToWrapperTransitionEnd,
                      ),
                      (l.onTranslateToWrapperTransitionEnd = null),
                      delete l.onTranslateToWrapperTransitionEnd,
                      s && l.emit("transitionEnd"));
                  }),
                l.wrapperEl.addEventListener(
                  "transitionend",
                  l.onTranslateToWrapperTransitionEnd,
                ))),
          !0
        );
      },
    };
    function R(e) {
      let { swiper: t, runCallbacks: s, direction: i, step: a } = e;
      const { activeIndex: l, previousIndex: n } = t;
      let r = i;
      if (
        (r || (r = l > n ? "next" : l < n ? "prev" : "reset"),
        t.emit(`transition${a}`),
        s && l !== n)
      ) {
        if ("reset" === r) return void t.emit(`slideResetTransition${a}`);
        t.emit(`slideChangeTransition${a}`),
          "next" === r
            ? t.emit(`slideNextTransition${a}`)
            : t.emit(`slidePrevTransition${a}`);
      }
    }
    var j = {
      slideTo: function (e, t, s, i, a) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          "string" == typeof e && (e = parseInt(e, 10));
        const l = this;
        let n = e;
        n < 0 && (n = 0);
        const {
          params: r,
          snapGrid: o,
          slidesGrid: c,
          previousIndex: d,
          activeIndex: p,
          rtlTranslate: u,
          wrapperEl: h,
          enabled: m,
        } = l;
        if (
          (l.animating && r.preventInteractionOnTransition) ||
          (!m && !i && !a)
        )
          return !1;
        const f = Math.min(l.params.slidesPerGroupSkip, n);
        let v = f + Math.floor((n - f) / l.params.slidesPerGroup);
        v >= o.length && (v = o.length - 1);
        const g = -o[v];
        if (r.normalizeSlideIndex)
          for (let e = 0; e < c.length; e += 1) {
            const t = -Math.floor(100 * g),
              s = Math.floor(100 * c[e]),
              i = Math.floor(100 * c[e + 1]);
            void 0 !== c[e + 1]
              ? t >= s && t < i - (i - s) / 2
                ? (n = e)
                : t >= s && t < i && (n = e + 1)
              : t >= s && (n = e);
          }
        if (l.initialized && n !== p) {
          if (
            !l.allowSlideNext &&
            (u
              ? g > l.translate && g > l.minTranslate()
              : g < l.translate && g < l.minTranslate())
          )
            return !1;
          if (
            !l.allowSlidePrev &&
            g > l.translate &&
            g > l.maxTranslate() &&
            (p || 0) !== n
          )
            return !1;
        }
        let b;
        if (
          (n !== (d || 0) && s && l.emit("beforeSlideChangeStart"),
          l.updateProgress(g),
          (b = n > p ? "next" : n < p ? "prev" : "reset"),
          (u && -g === l.translate) || (!u && g === l.translate))
        )
          return (
            l.updateActiveIndex(n),
            r.autoHeight && l.updateAutoHeight(),
            l.updateSlidesClasses(),
            "slide" !== r.effect && l.setTranslate(g),
            "reset" !== b && (l.transitionStart(s, b), l.transitionEnd(s, b)),
            !1
          );
        if (r.cssMode) {
          const e = l.isHorizontal(),
            s = u ? g : -g;
          if (0 === t) {
            const t = l.virtual && l.params.virtual.enabled;
            t &&
              ((l.wrapperEl.style.scrollSnapType = "none"),
              (l._immediateVirtual = !0)),
              t && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0
                ? ((l._cssModeVirtualInitialSet = !0),
                  requestAnimationFrame(() => {
                    h[e ? "scrollLeft" : "scrollTop"] = s;
                  }))
                : (h[e ? "scrollLeft" : "scrollTop"] = s),
              t &&
                requestAnimationFrame(() => {
                  (l.wrapperEl.style.scrollSnapType = ""),
                    (l._immediateVirtual = !1);
                });
          } else {
            if (!l.support.smoothScroll)
              return (
                A({ swiper: l, targetPosition: s, side: e ? "left" : "top" }),
                !0
              );
            h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
          }
          return !0;
        }
        return (
          l.setTransition(t),
          l.setTranslate(g),
          l.updateActiveIndex(n),
          l.updateSlidesClasses(),
          l.emit("beforeTransitionStart", t, i),
          l.transitionStart(s, b),
          0 === t
            ? l.transitionEnd(s, b)
            : l.animating ||
              ((l.animating = !0),
              l.onSlideToWrapperTransitionEnd ||
                (l.onSlideToWrapperTransitionEnd = function (e) {
                  l &&
                    !l.destroyed &&
                    e.target === this &&
                    (l.wrapperEl.removeEventListener(
                      "transitionend",
                      l.onSlideToWrapperTransitionEnd,
                    ),
                    (l.onSlideToWrapperTransitionEnd = null),
                    delete l.onSlideToWrapperTransitionEnd,
                    l.transitionEnd(s, b));
                }),
              l.wrapperEl.addEventListener(
                "transitionend",
                l.onSlideToWrapperTransitionEnd,
              )),
          !0
        );
      },
      slideToLoop: function (e, t, s, i) {
        if (
          (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          "string" == typeof e)
        ) {
          e = parseInt(e, 10);
        }
        const a = this;
        let l = e;
        return (
          a.params.loop &&
            (a.virtual && a.params.virtual.enabled
              ? (l += a.virtual.slidesBefore)
              : (l = a.getSlideIndexByData(l))),
          a.slideTo(l, t, s, i)
        );
      },
      slideNext: function (e, t, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const i = this,
          { enabled: a, params: l, animating: n } = i;
        if (!a) return i;
        let r = l.slidesPerGroup;
        "auto" === l.slidesPerView &&
          1 === l.slidesPerGroup &&
          l.slidesPerGroupAuto &&
          (r = Math.max(i.slidesPerViewDynamic("current", !0), 1));
        const o = i.activeIndex < l.slidesPerGroupSkip ? 1 : r,
          c = i.virtual && l.virtual.enabled;
        if (l.loop) {
          if (n && !c && l.loopPreventsSliding) return !1;
          if (
            (i.loopFix({ direction: "next" }),
            (i._clientLeft = i.wrapperEl.clientLeft),
            i.activeIndex === i.slides.length - 1 && l.cssMode)
          )
            return (
              requestAnimationFrame(() => {
                i.slideTo(i.activeIndex + o, e, t, s);
              }),
              !0
            );
        }
        return l.rewind && i.isEnd
          ? i.slideTo(0, e, t, s)
          : i.slideTo(i.activeIndex + o, e, t, s);
      },
      slidePrev: function (e, t, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const i = this,
          {
            params: a,
            snapGrid: l,
            slidesGrid: n,
            rtlTranslate: r,
            enabled: o,
            animating: c,
          } = i;
        if (!o) return i;
        const d = i.virtual && a.virtual.enabled;
        if (a.loop) {
          if (c && !d && a.loopPreventsSliding) return !1;
          i.loopFix({ direction: "prev" }),
            (i._clientLeft = i.wrapperEl.clientLeft);
        }
        function p(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const u = p(r ? i.translate : -i.translate),
          h = l.map((e) => p(e));
        let m = l[h.indexOf(u) - 1];
        if (void 0 === m && a.cssMode) {
          let e;
          l.forEach((t, s) => {
            u >= t && (e = s);
          }),
            void 0 !== e && (m = l[e > 0 ? e - 1 : e]);
        }
        let f = 0;
        if (
          (void 0 !== m &&
            ((f = n.indexOf(m)),
            f < 0 && (f = i.activeIndex - 1),
            "auto" === a.slidesPerView &&
              1 === a.slidesPerGroup &&
              a.slidesPerGroupAuto &&
              ((f = f - i.slidesPerViewDynamic("previous", !0) + 1),
              (f = Math.max(f, 0)))),
          a.rewind && i.isBeginning)
        ) {
          const a =
            i.params.virtual && i.params.virtual.enabled && i.virtual
              ? i.virtual.slides.length - 1
              : i.slides.length - 1;
          return i.slideTo(a, e, t, s);
        }
        return a.loop && 0 === i.activeIndex && a.cssMode
          ? (requestAnimationFrame(() => {
              i.slideTo(f, e, t, s);
            }),
            !0)
          : i.slideTo(f, e, t, s);
      },
      slideReset: function (e, t, s) {
        return (
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          this.slideTo(this.activeIndex, e, t, s)
        );
      },
      slideToClosest: function (e, t, s, i) {
        void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          void 0 === i && (i = 0.5);
        const a = this;
        let l = a.activeIndex;
        const n = Math.min(a.params.slidesPerGroupSkip, l),
          r = n + Math.floor((l - n) / a.params.slidesPerGroup),
          o = a.rtlTranslate ? a.translate : -a.translate;
        if (o >= a.snapGrid[r]) {
          const e = a.snapGrid[r];
          o - e > (a.snapGrid[r + 1] - e) * i && (l += a.params.slidesPerGroup);
        } else {
          const e = a.snapGrid[r - 1];
          o - e <= (a.snapGrid[r] - e) * i && (l -= a.params.slidesPerGroup);
        }
        return (
          (l = Math.max(l, 0)),
          (l = Math.min(l, a.slidesGrid.length - 1)),
          a.slideTo(l, e, t, s)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, slidesEl: s } = e,
          i =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let a,
          l = e.clickedIndex;
        const n = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
        if (t.loop) {
          if (e.animating) return;
          (a = parseInt(
            e.clickedSlide.getAttribute("data-swiper-slide-index"),
            10,
          )),
            t.centeredSlides
              ? l < e.loopedSlides - i / 2 ||
                l > e.slides.length - e.loopedSlides + i / 2
                ? (e.loopFix(),
                  (l = e.getSlideIndex(
                    O(s, `${n}[data-swiper-slide-index="${a}"]`)[0],
                  )),
                  S(() => {
                    e.slideTo(l);
                  }))
                : e.slideTo(l)
              : l > e.slides.length - i
              ? (e.loopFix(),
                (l = e.getSlideIndex(
                  O(s, `${n}[data-swiper-slide-index="${a}"]`)[0],
                )),
                S(() => {
                  e.slideTo(l);
                }))
              : e.slideTo(l);
        } else e.slideTo(l);
      },
    };
    var Y = {
      loopCreate: function (e) {
        const t = this,
          { params: s, slidesEl: i } = t;
        if (!s.loop || (t.virtual && t.params.virtual.enabled)) return;
        O(i, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
          e.setAttribute("data-swiper-slide-index", t);
        }),
          t.loopFix({
            slideRealIndex: e,
            direction: s.centeredSlides ? void 0 : "next",
          });
      },
      loopFix: function (e) {
        let {
          slideRealIndex: t,
          slideTo: s = !0,
          direction: i,
          setTranslate: a,
          activeSlideIndex: l,
          byController: n,
          byMousewheel: r,
        } = void 0 === e ? {} : e;
        const o = this;
        if (!o.params.loop) return;
        o.emit("beforeLoopFix");
        const {
          slides: c,
          allowSlidePrev: d,
          allowSlideNext: p,
          slidesEl: u,
          params: h,
        } = o;
        if (
          ((o.allowSlidePrev = !0),
          (o.allowSlideNext = !0),
          o.virtual && h.virtual.enabled)
        )
          return (
            s &&
              (h.centeredSlides || 0 !== o.snapIndex
                ? h.centeredSlides && o.snapIndex < h.slidesPerView
                  ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
                  : o.snapIndex === o.snapGrid.length - 1 &&
                    o.slideTo(o.virtual.slidesBefore, 0, !1, !0)
                : o.slideTo(o.virtual.slides.length, 0, !1, !0)),
            (o.allowSlidePrev = d),
            (o.allowSlideNext = p),
            void o.emit("loopFix")
          );
        const m =
          "auto" === h.slidesPerView
            ? o.slidesPerViewDynamic()
            : Math.ceil(parseFloat(h.slidesPerView, 10));
        let f = h.loopedSlides || m;
        f % h.slidesPerGroup != 0 &&
          (f += h.slidesPerGroup - (f % h.slidesPerGroup)),
          (o.loopedSlides = f);
        const v = [],
          g = [];
        let b = o.activeIndex;
        void 0 === l
          ? (l = o.getSlideIndex(
              o.slides.filter((e) =>
                e.classList.contains(h.slideActiveClass),
              )[0],
            ))
          : (b = l);
        const y = "next" === i || !i,
          S = "prev" === i || !i;
        let w = 0,
          E = 0;
        if (l < f) {
          w = Math.max(f - l, h.slidesPerGroup);
          for (let e = 0; e < f - l; e += 1) {
            const t = e - Math.floor(e / c.length) * c.length;
            v.push(c.length - t - 1);
          }
        } else if (l > o.slides.length - 2 * f) {
          E = Math.max(l - (o.slides.length - 2 * f), h.slidesPerGroup);
          for (let e = 0; e < E; e += 1) {
            const t = e - Math.floor(e / c.length) * c.length;
            g.push(t);
          }
        }
        if (
          (S &&
            v.forEach((e) => {
              (o.slides[e].swiperLoopMoveDOM = !0),
                u.prepend(o.slides[e]),
                (o.slides[e].swiperLoopMoveDOM = !1);
            }),
          y &&
            g.forEach((e) => {
              (o.slides[e].swiperLoopMoveDOM = !0),
                u.append(o.slides[e]),
                (o.slides[e].swiperLoopMoveDOM = !1);
            }),
          o.recalcSlides(),
          "auto" === h.slidesPerView && o.updateSlides(),
          h.watchSlidesProgress && o.updateSlidesOffset(),
          s)
        )
          if (v.length > 0 && S)
            if (void 0 === t) {
              const e = o.slidesGrid[b],
                t = o.slidesGrid[b + w] - e;
              r
                ? o.setTranslate(o.translate - t)
                : (o.slideTo(b + w, 0, !1, !0),
                  a &&
                    ((o.touches[o.isHorizontal() ? "startX" : "startY"] += t),
                    (o.touchEventsData.currentTranslate = o.translate)));
            } else
              a &&
                (o.slideToLoop(t, 0, !1, !0),
                (o.touchEventsData.currentTranslate = o.translate));
          else if (g.length > 0 && y)
            if (void 0 === t) {
              const e = o.slidesGrid[b],
                t = o.slidesGrid[b - E] - e;
              r
                ? o.setTranslate(o.translate - t)
                : (o.slideTo(b - E, 0, !1, !0),
                  a &&
                    ((o.touches[o.isHorizontal() ? "startX" : "startY"] += t),
                    (o.touchEventsData.currentTranslate = o.translate)));
            } else o.slideToLoop(t, 0, !1, !0);
        if (
          ((o.allowSlidePrev = d),
          (o.allowSlideNext = p),
          o.controller && o.controller.control && !n)
        ) {
          const e = {
            slideRealIndex: t,
            direction: i,
            setTranslate: a,
            activeSlideIndex: l,
            byController: !0,
          };
          Array.isArray(o.controller.control)
            ? o.controller.control.forEach((t) => {
                !t.destroyed &&
                  t.params.loop &&
                  t.loopFix({
                    ...e,
                    slideTo: t.params.slidesPerView === h.slidesPerView && s,
                  });
              })
            : o.controller.control instanceof o.constructor &&
              o.controller.control.params.loop &&
              o.controller.control.loopFix({
                ...e,
                slideTo:
                  o.controller.control.params.slidesPerView ===
                    h.slidesPerView && s,
              });
        }
        o.emit("loopFix");
      },
      loopDestroy: function () {
        const e = this,
          { params: t, slidesEl: s } = e;
        if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
        e.recalcSlides();
        const i = [];
        e.slides.forEach((e) => {
          const t =
            void 0 === e.swiperSlideIndex
              ? 1 * e.getAttribute("data-swiper-slide-index")
              : e.swiperSlideIndex;
          i[t] = e;
        }),
          e.slides.forEach((e) => {
            e.removeAttribute("data-swiper-slide-index");
          }),
          i.forEach((e) => {
            s.append(e);
          }),
          e.recalcSlides(),
          e.slideTo(e.realIndex, 0);
      },
    };
    function X(e) {
      const t = this,
        s = g(),
        i = y(),
        a = t.touchEventsData;
      a.evCache.push(e);
      const { params: l, touches: n, enabled: r } = t;
      if (!r) return;
      if (!l.simulateTouch && "mouse" === e.pointerType) return;
      if (t.animating && l.preventInteractionOnTransition) return;
      !t.animating && l.cssMode && l.loop && t.loopFix();
      let o = e;
      o.originalEvent && (o = o.originalEvent);
      let c = o.target;
      if ("wrapper" === l.touchEventsTarget && !t.wrapperEl.contains(c)) return;
      if ("which" in o && 3 === o.which) return;
      if ("button" in o && o.button > 0) return;
      if (a.isTouched && a.isMoved) return;
      const d = !!l.noSwipingClass && "" !== l.noSwipingClass,
        p = e.composedPath ? e.composedPath() : e.path;
      d && o.target && o.target.shadowRoot && p && (c = p[0]);
      const u = l.noSwipingSelector
          ? l.noSwipingSelector
          : `.${l.noSwipingClass}`,
        h = !(!o.target || !o.target.shadowRoot);
      if (
        l.noSwiping &&
        (h
          ? (function (e, t) {
              return (
                void 0 === t && (t = this),
                (function t(s) {
                  if (!s || s === g() || s === y()) return null;
                  s.assignedSlot && (s = s.assignedSlot);
                  const i = s.closest(e);
                  return i || s.getRootNode
                    ? i || t(s.getRootNode().host)
                    : null;
                })(t)
              );
            })(u, c)
          : c.closest(u))
      )
        return void (t.allowClick = !0);
      if (l.swipeHandler && !c.closest(l.swipeHandler)) return;
      (n.currentX = o.pageX), (n.currentY = o.pageY);
      const m = n.currentX,
        f = n.currentY,
        v = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
        b = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
      if (v && (m <= b || m >= i.innerWidth - b)) {
        if ("prevent" !== v) return;
        e.preventDefault();
      }
      Object.assign(a, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
        (n.startX = m),
        (n.startY = f),
        (a.touchStartTime = w()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        l.threshold > 0 && (a.allowThresholdMove = !1);
      let S = !0;
      c.matches(a.focusableElements) &&
        ((S = !1), "SELECT" === c.nodeName && (a.isTouched = !1)),
        s.activeElement &&
          s.activeElement.matches(a.focusableElements) &&
          s.activeElement !== c &&
          s.activeElement.blur();
      const E = S && t.allowTouchMove && l.touchStartPreventDefault;
      (!l.touchStartForcePreventDefault && !E) ||
        c.isContentEditable ||
        o.preventDefault(),
        l.freeMode &&
          l.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !l.cssMode &&
          t.freeMode.onTouchStart(),
        t.emit("touchStart", o);
    }
    function U(e) {
      const t = g(),
        s = this,
        i = s.touchEventsData,
        { params: a, touches: l, rtlTranslate: n, enabled: r } = s;
      if (!r) return;
      if (!a.simulateTouch && "mouse" === e.pointerType) return;
      let o = e;
      if ((o.originalEvent && (o = o.originalEvent), !i.isTouched))
        return void (
          i.startMoving &&
          i.isScrolling &&
          s.emit("touchMoveOpposite", o)
        );
      const c = i.evCache.findIndex((e) => e.pointerId === o.pointerId);
      c >= 0 && (i.evCache[c] = o);
      const d = i.evCache.length > 1 ? i.evCache[0] : o,
        p = d.pageX,
        u = d.pageY;
      if (o.preventedByNestedSwiper) return (l.startX = p), void (l.startY = u);
      if (!s.allowTouchMove)
        return (
          o.target.matches(i.focusableElements) || (s.allowClick = !1),
          void (
            i.isTouched &&
            (Object.assign(l, {
              startX: p,
              startY: u,
              prevX: s.touches.currentX,
              prevY: s.touches.currentY,
              currentX: p,
              currentY: u,
            }),
            (i.touchStartTime = w()))
          )
        );
      if (a.touchReleaseOnEdges && !a.loop)
        if (s.isVertical()) {
          if (
            (u < l.startY && s.translate <= s.maxTranslate()) ||
            (u > l.startY && s.translate >= s.minTranslate())
          )
            return (i.isTouched = !1), void (i.isMoved = !1);
        } else if (
          (p < l.startX && s.translate <= s.maxTranslate()) ||
          (p > l.startX && s.translate >= s.minTranslate())
        )
          return;
      if (
        t.activeElement &&
        o.target === t.activeElement &&
        o.target.matches(i.focusableElements)
      )
        return (i.isMoved = !0), void (s.allowClick = !1);
      if (
        (i.allowTouchCallbacks && s.emit("touchMove", o),
        o.targetTouches && o.targetTouches.length > 1)
      )
        return;
      (l.currentX = p), (l.currentY = u);
      const h = l.currentX - l.startX,
        m = l.currentY - l.startY;
      if (s.params.threshold && Math.sqrt(h ** 2 + m ** 2) < s.params.threshold)
        return;
      if (void 0 === i.isScrolling) {
        let e;
        (s.isHorizontal() && l.currentY === l.startY) ||
        (s.isVertical() && l.currentX === l.startX)
          ? (i.isScrolling = !1)
          : h * h + m * m >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(m), Math.abs(h))) / Math.PI),
            (i.isScrolling = s.isHorizontal()
              ? e > a.touchAngle
              : 90 - e > a.touchAngle));
      }
      if (
        (i.isScrolling && s.emit("touchMoveOpposite", o),
        void 0 === i.startMoving &&
          ((l.currentX === l.startX && l.currentY === l.startY) ||
            (i.startMoving = !0)),
        i.isScrolling ||
          (s.zoom &&
            s.params.zoom &&
            s.params.zoom.enabled &&
            i.evCache.length > 1))
      )
        return void (i.isTouched = !1);
      if (!i.startMoving) return;
      (s.allowClick = !1),
        !a.cssMode && o.cancelable && o.preventDefault(),
        a.touchMoveStopPropagation && !a.nested && o.stopPropagation();
      let f = s.isHorizontal() ? h : m,
        v = s.isHorizontal()
          ? l.currentX - l.previousX
          : l.currentY - l.previousY;
      a.oneWayMovement &&
        ((f = Math.abs(f) * (n ? 1 : -1)), (v = Math.abs(v) * (n ? 1 : -1))),
        (l.diff = f),
        (f *= a.touchRatio),
        n && ((f = -f), (v = -v));
      const b = s.touchesDirection;
      (s.swipeDirection = f > 0 ? "prev" : "next"),
        (s.touchesDirection = v > 0 ? "prev" : "next");
      const y = s.params.loop && !a.cssMode,
        S =
          ("next" === s.swipeDirection && s.allowSlideNext) ||
          ("prev" === s.swipeDirection && s.allowSlidePrev);
      if (!i.isMoved) {
        if (
          (y && S && s.loopFix({ direction: s.swipeDirection }),
          (i.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating)
        ) {
          const e = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0,
          });
          s.wrapperEl.dispatchEvent(e);
        }
        (i.allowMomentumBounce = !1),
          !a.grabCursor ||
            (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
            s.setGrabCursor(!0),
          s.emit("sliderFirstMove", o);
      }
      let E;
      i.isMoved &&
        b !== s.touchesDirection &&
        y &&
        S &&
        Math.abs(f) >= 1 &&
        (s.loopFix({ direction: s.swipeDirection, setTranslate: !0 }),
        (E = !0)),
        s.emit("sliderMove", o),
        (i.isMoved = !0),
        (i.currentTranslate = f + i.startTranslate);
      let x = !0,
        T = a.resistanceRatio;
      if (
        (a.touchReleaseOnEdges && (T = 0),
        f > 0
          ? (y &&
              S &&
              !E &&
              i.currentTranslate >
                (a.centeredSlides
                  ? s.minTranslate() - s.size / 2
                  : s.minTranslate()) &&
              s.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0,
              }),
            i.currentTranslate > s.minTranslate() &&
              ((x = !1),
              a.resistance &&
                (i.currentTranslate =
                  s.minTranslate() -
                  1 +
                  (-s.minTranslate() + i.startTranslate + f) ** T)))
          : f < 0 &&
            (y &&
              S &&
              !E &&
              i.currentTranslate <
                (a.centeredSlides
                  ? s.maxTranslate() + s.size / 2
                  : s.maxTranslate()) &&
              s.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex:
                  s.slides.length -
                  ("auto" === a.slidesPerView
                    ? s.slidesPerViewDynamic()
                    : Math.ceil(parseFloat(a.slidesPerView, 10))),
              }),
            i.currentTranslate < s.maxTranslate() &&
              ((x = !1),
              a.resistance &&
                (i.currentTranslate =
                  s.maxTranslate() +
                  1 -
                  (s.maxTranslate() - i.startTranslate - f) ** T))),
        x && (o.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
          "next" === s.swipeDirection &&
          i.currentTranslate < i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        !s.allowSlidePrev &&
          "prev" === s.swipeDirection &&
          i.currentTranslate > i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        s.allowSlidePrev ||
          s.allowSlideNext ||
          (i.currentTranslate = i.startTranslate),
        a.threshold > 0)
      ) {
        if (!(Math.abs(f) > a.threshold || i.allowThresholdMove))
          return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove)
          return (
            (i.allowThresholdMove = !0),
            (l.startX = l.currentX),
            (l.startY = l.currentY),
            (i.currentTranslate = i.startTranslate),
            void (l.diff = s.isHorizontal()
              ? l.currentX - l.startX
              : l.currentY - l.startY)
          );
      }
      a.followFinger &&
        !a.cssMode &&
        (((a.freeMode && a.freeMode.enabled && s.freeMode) ||
          a.watchSlidesProgress) &&
          (s.updateActiveIndex(), s.updateSlidesClasses()),
        a.freeMode &&
          a.freeMode.enabled &&
          s.freeMode &&
          s.freeMode.onTouchMove(),
        s.updateProgress(i.currentTranslate),
        s.setTranslate(i.currentTranslate));
    }
    function Q(e) {
      const t = this,
        s = t.touchEventsData,
        i = s.evCache.findIndex((t) => t.pointerId === e.pointerId);
      if (
        (i >= 0 && s.evCache.splice(i, 1),
        ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
          e.type,
        ))
      ) {
        if (
          !(
            ["pointercancel", "contextmenu"].includes(e.type) &&
            (t.browser.isSafari || t.browser.isWebView)
          )
        )
          return;
      }
      const {
        params: a,
        touches: l,
        rtlTranslate: n,
        slidesGrid: r,
        enabled: o,
      } = t;
      if (!o) return;
      if (!a.simulateTouch && "mouse" === e.pointerType) return;
      let c = e;
      if (
        (c.originalEvent && (c = c.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", c),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
      )
        return (
          s.isMoved && a.grabCursor && t.setGrabCursor(!1),
          (s.isMoved = !1),
          void (s.startMoving = !1)
        );
      a.grabCursor &&
        s.isMoved &&
        s.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const d = w(),
        p = d - s.touchStartTime;
      if (t.allowClick) {
        const e = c.path || (c.composedPath && c.composedPath());
        t.updateClickedSlide((e && e[0]) || c.target, e),
          t.emit("tap click", c),
          p < 300 &&
            d - s.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", c);
      }
      if (
        ((s.lastClickTime = w()),
        S(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
          !s.isMoved ||
          !t.swipeDirection ||
          0 === l.diff ||
          s.currentTranslate === s.startTranslate)
      )
        return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
      let u;
      if (
        ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (u = a.followFinger
          ? n
            ? t.translate
            : -t.translate
          : -s.currentTranslate),
        a.cssMode)
      )
        return;
      if (a.freeMode && a.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: u });
      let h = 0,
        m = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < r.length;
        e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
      ) {
        const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        void 0 !== r[e + t]
          ? u >= r[e] && u < r[e + t] && ((h = e), (m = r[e + t] - r[e]))
          : u >= r[e] && ((h = e), (m = r[r.length - 1] - r[r.length - 2]));
      }
      let f = null,
        v = null;
      a.rewind &&
        (t.isBeginning
          ? (v =
              a.virtual && a.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (f = 0));
      const g = (u - r[h]) / m,
        b = h < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
      if (p > a.longSwipesMs) {
        if (!a.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (g >= a.longSwipesRatio
            ? t.slideTo(a.rewind && t.isEnd ? f : h + b)
            : t.slideTo(h)),
          "prev" === t.swipeDirection &&
            (g > 1 - a.longSwipesRatio
              ? t.slideTo(h + b)
              : null !== v && g < 0 && Math.abs(g) > a.longSwipesRatio
              ? t.slideTo(v)
              : t.slideTo(h));
      } else {
        if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (c.target === t.navigation.nextEl || c.target === t.navigation.prevEl)
          ? c.target === t.navigation.nextEl
            ? t.slideTo(h + b)
            : t.slideTo(h)
          : ("next" === t.swipeDirection && t.slideTo(null !== f ? f : h + b),
            "prev" === t.swipeDirection && t.slideTo(null !== v ? v : h));
      }
    }
    function K() {
      const e = this,
        { params: t, el: s } = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: i, allowSlidePrev: a, snapGrid: l } = e,
        n = e.virtual && e.params.virtual.enabled;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses();
      const r = n && t.loop;
      !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
      !e.isEnd ||
      e.isBeginning ||
      e.params.centeredSlides ||
      r
        ? e.params.loop && !n
          ? e.slideToLoop(e.realIndex, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0)
        : e.slideTo(e.slides.length - 1, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          (clearTimeout(e.autoplay.resizeTimeout),
          (e.autoplay.resizeTimeout = setTimeout(() => {
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              e.autoplay.resume();
          }, 500))),
        (e.allowSlidePrev = a),
        (e.allowSlideNext = i),
        e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow();
    }
    function Z(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function J() {
      const e = this,
        { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
      if (!i) return;
      let a;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const l = e.maxTranslate() - e.minTranslate();
      (a = 0 === l ? 0 : (e.translate - e.minTranslate()) / l),
        a !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    function ee(e) {
      const t = this;
      W(t, e.target),
        t.params.cssMode ||
          ("auto" !== t.params.slidesPerView && !t.params.autoHeight) ||
          t.update();
    }
    let te = !1;
    function se() {}
    const ie = (e, t) => {
      const s = g(),
        { params: i, el: a, wrapperEl: l, device: n } = e,
        r = !!i.nested,
        o = "on" === t ? "addEventListener" : "removeEventListener",
        c = t;
      a[o]("pointerdown", e.onTouchStart, { passive: !1 }),
        s[o]("pointermove", e.onTouchMove, { passive: !1, capture: r }),
        s[o]("pointerup", e.onTouchEnd, { passive: !0 }),
        s[o]("pointercancel", e.onTouchEnd, { passive: !0 }),
        s[o]("pointerout", e.onTouchEnd, { passive: !0 }),
        s[o]("pointerleave", e.onTouchEnd, { passive: !0 }),
        s[o]("contextmenu", e.onTouchEnd, { passive: !0 }),
        (i.preventClicks || i.preventClicksPropagation) &&
          a[o]("click", e.onClick, !0),
        i.cssMode && l[o]("scroll", e.onScroll),
        i.updateOnWindowResize
          ? e[c](
              n.ios || n.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              K,
              !0,
            )
          : e[c]("observerUpdate", K, !0),
        a[o]("load", e.onLoad, { capture: !0 });
    };
    const ae = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var le = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopedSlides: null,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function ne(e, t) {
      return function (s) {
        void 0 === s && (s = {});
        const i = Object.keys(s)[0],
          a = s[i];
        "object" == typeof a && null !== a
          ? (!0 === e[i] && (e[i] = { enabled: !0 }),
            "navigation" === i &&
              e[i] &&
              e[i].enabled &&
              !e[i].prevEl &&
              !e[i].nextEl &&
              (e[i].auto = !0),
            ["pagination", "scrollbar"].indexOf(i) >= 0 &&
              e[i] &&
              e[i].enabled &&
              !e[i].el &&
              (e[i].auto = !0),
            i in e && "enabled" in a
              ? ("object" != typeof e[i] ||
                  "enabled" in e[i] ||
                  (e[i].enabled = !0),
                e[i] || (e[i] = { enabled: !1 }),
                T(t, s))
              : T(t, s))
          : T(t, s);
      };
    }
    const re = {
        eventsEmitter: B,
        update: G,
        translate: F,
        transition: {
          setTransition: function (e, t) {
            const s = this;
            s.params.cssMode ||
              ((s.wrapperEl.style.transitionDuration = `${e}ms`),
              (s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
              s.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            const s = this,
              { params: i } = s;
            i.cssMode ||
              (i.autoHeight && s.updateAutoHeight(),
              R({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            const s = this,
              { params: i } = s;
            (s.animating = !1),
              i.cssMode ||
                (s.setTransition(0),
                R({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: j,
        loop: Y,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const s =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            t.isElement && (t.__preventObserver__ = !0),
              (s.style.cursor = "move"),
              (s.style.cursor = e ? "grabbing" : "grab"),
              t.isElement &&
                requestAnimationFrame(() => {
                  t.__preventObserver__ = !1;
                });
          },
          unsetGrabCursor: function () {
            const e = this;
            (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e.isElement && (e.__preventObserver__ = !0),
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = ""),
              e.isElement &&
                requestAnimationFrame(() => {
                  e.__preventObserver__ = !1;
                }));
          },
        },
        events: {
          attachEvents: function () {
            const e = this,
              t = g(),
              { params: s } = e;
            (e.onTouchStart = X.bind(e)),
              (e.onTouchMove = U.bind(e)),
              (e.onTouchEnd = Q.bind(e)),
              s.cssMode && (e.onScroll = J.bind(e)),
              (e.onClick = Z.bind(e)),
              (e.onLoad = ee.bind(e)),
              te || (t.addEventListener("touchstart", se), (te = !0)),
              ie(e, "on");
          },
          detachEvents: function () {
            ie(this, "off");
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            const e = this,
              { realIndex: t, initialized: s, params: i, el: a } = e,
              l = i.breakpoints;
            if (!l || (l && 0 === Object.keys(l).length)) return;
            const n = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
            if (!n || e.currentBreakpoint === n) return;
            const r = (n in l ? l[n] : void 0) || e.originalParams,
              o = ae(e, i),
              c = ae(e, r),
              d = i.enabled;
            o && !c
              ? (a.classList.remove(
                  `${i.containerModifierClass}grid`,
                  `${i.containerModifierClass}grid-column`,
                ),
                e.emitContainerClasses())
              : !o &&
                c &&
                (a.classList.add(`${i.containerModifierClass}grid`),
                ((r.grid.fill && "column" === r.grid.fill) ||
                  (!r.grid.fill && "column" === i.grid.fill)) &&
                  a.classList.add(`${i.containerModifierClass}grid-column`),
                e.emitContainerClasses()),
              ["navigation", "pagination", "scrollbar"].forEach((t) => {
                if (void 0 === r[t]) return;
                const s = i[t] && i[t].enabled,
                  a = r[t] && r[t].enabled;
                s && !a && e[t].disable(), !s && a && e[t].enable();
              });
            const p = r.direction && r.direction !== i.direction,
              u = i.loop && (r.slidesPerView !== i.slidesPerView || p),
              h = i.loop;
            p && s && e.changeDirection(), T(e.params, r);
            const m = e.params.enabled,
              f = e.params.loop;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              d && !m ? e.disable() : !d && m && e.enable(),
              (e.currentBreakpoint = n),
              e.emit("_beforeBreakpoint", r),
              s &&
                (u
                  ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
                  : !h && f
                  ? (e.loopCreate(t), e.updateSlides())
                  : h && !f && e.loopDestroy()),
              e.emit("breakpoint", r);
          },
          getBreakpoint: function (e, t, s) {
            if (
              (void 0 === t && (t = "window"), !e || ("container" === t && !s))
            )
              return;
            let i = !1;
            const a = y(),
              l = "window" === t ? a.innerHeight : s.clientHeight,
              n = Object.keys(e).map((e) => {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  const t = parseFloat(e.substr(1));
                  return { value: l * t, point: e };
                }
                return { value: e, point: e };
              });
            n.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < n.length; e += 1) {
              const { point: l, value: r } = n[e];
              "window" === t
                ? a.matchMedia(`(min-width: ${r}px)`).matches && (i = l)
                : r <= s.clientWidth && (i = l);
            }
            return i || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: s } = e,
              { slidesOffsetBefore: i } = s;
            if (i) {
              const t = e.slides.length - 1,
                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
              e.isLocked = e.size > s;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: {
          addClasses: function () {
            const e = this,
              { classNames: t, params: s, rtl: i, el: a, device: l } = e,
              n = (function (e, t) {
                const s = [];
                return (
                  e.forEach((e) => {
                    "object" == typeof e
                      ? Object.keys(e).forEach((i) => {
                          e[i] && s.push(t + i);
                        })
                      : "string" == typeof e && s.push(t + e);
                  }),
                  s
                );
              })(
                [
                  "initialized",
                  s.direction,
                  { "free-mode": e.params.freeMode && s.freeMode.enabled },
                  { autoheight: s.autoHeight },
                  { rtl: i },
                  { grid: s.grid && s.grid.rows > 1 },
                  {
                    "grid-column":
                      s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
                  },
                  { android: l.android },
                  { ios: l.ios },
                  { "css-mode": s.cssMode },
                  { centered: s.cssMode && s.centeredSlides },
                  { "watch-progress": s.watchSlidesProgress },
                ],
                s.containerModifierClass,
              );
            t.push(...n), a.classList.add(...t), e.emitContainerClasses();
          },
          removeClasses: function () {
            const { el: e, classNames: t } = this;
            e.classList.remove(...t), this.emitContainerClasses();
          },
        },
      },
      oe = {};
    class ce {
      constructor() {
        let e, t;
        for (var s = arguments.length, i = new Array(s), a = 0; a < s; a++)
          i[a] = arguments[a];
        1 === i.length &&
        i[0].constructor &&
        "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
          ? (t = i[0])
          : ([e, t] = i),
          t || (t = {}),
          (t = T({}, t)),
          e && !t.el && (t.el = e);
        const l = g();
        if (
          t.el &&
          "string" == typeof t.el &&
          l.querySelectorAll(t.el).length > 1
        ) {
          const e = [];
          return (
            l.querySelectorAll(t.el).forEach((s) => {
              const i = T({}, t, { el: s });
              e.push(new ce(i));
            }),
            e
          );
        }
        const n = this;
        (n.__swiper__ = !0),
          (n.support = D()),
          (n.device = N({ userAgent: t.userAgent })),
          (n.browser = q()),
          (n.eventsListeners = {}),
          (n.eventsAnyListeners = []),
          (n.modules = [...n.__modules__]),
          t.modules && Array.isArray(t.modules) && n.modules.push(...t.modules);
        const r = {};
        n.modules.forEach((e) => {
          e({
            params: t,
            swiper: n,
            extendParams: ne(t, r),
            on: n.on.bind(n),
            once: n.once.bind(n),
            off: n.off.bind(n),
            emit: n.emit.bind(n),
          });
        });
        const o = T({}, le, r);
        return (
          (n.params = T({}, o, oe, t)),
          (n.originalParams = T({}, n.params)),
          (n.passedParams = T({}, t)),
          n.params &&
            n.params.on &&
            Object.keys(n.params.on).forEach((e) => {
              n.on(e, n.params.on[e]);
            }),
          n.params && n.params.onAny && n.onAny(n.params.onAny),
          Object.assign(n, {
            enabled: n.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === n.params.direction,
            isVertical: () => "vertical" === n.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
              return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
            },
            allowSlideNext: n.params.allowSlideNext,
            allowSlidePrev: n.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: n.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              evCache: [],
            },
            allowClick: !0,
            allowTouchMove: n.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          n.emit("_swiper"),
          n.params.init && n.init(),
          n
        );
      }
      getSlideIndex(e) {
        const { slidesEl: t, params: s } = this,
          i = k(O(t, `.${s.slideClass}, swiper-slide`)[0]);
        return k(e) - i;
      }
      getSlideIndexByData(e) {
        return this.getSlideIndex(
          this.slides.filter(
            (t) => 1 * t.getAttribute("data-swiper-slide-index") === e,
          )[0],
        );
      }
      recalcSlides() {
        const { slidesEl: e, params: t } = this;
        this.slides = O(e, `.${t.slideClass}, swiper-slide`);
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const i = s.minTranslate(),
          a = (s.maxTranslate() - i) * e + i;
        s.translateTo(a, void 0 === t ? 0 : t),
          s.updateActiveIndex(),
          s.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass),
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass),
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.forEach((s) => {
          const i = e.getSlideClasses(s);
          t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const {
          params: s,
          slides: i,
          slidesGrid: a,
          slidesSizesGrid: l,
          size: n,
          activeIndex: r,
        } = this;
        let o = 1;
        if ("number" == typeof s.slidesPerView) return s.slidesPerView;
        if (s.centeredSlides) {
          let e,
            t = i[r] ? i[r].swiperSlideSize : 0;
          for (let s = r + 1; s < i.length; s += 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (o += 1), t > n && (e = !0));
          for (let s = r - 1; s >= 0; s -= 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (o += 1), t > n && (e = !0));
        } else if ("current" === e)
          for (let e = r + 1; e < i.length; e += 1) {
            (t ? a[e] + l[e] - a[r] < n : a[e] - a[r] < n) && (o += 1);
          }
        else
          for (let e = r - 1; e >= 0; e -= 1) {
            a[r] - a[e] < n && (o += 1);
          }
        return o;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function i() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let a;
        if (
          (s.breakpoints && e.setBreakpoint(),
          [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
            t.complete && W(e, t);
          }),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          s.freeMode && s.freeMode.enabled && !s.cssMode)
        )
          i(), s.autoHeight && e.updateAutoHeight();
        else {
          if (
            ("auto" === s.slidesPerView || s.slidesPerView > 1) &&
            e.isEnd &&
            !s.centeredSlides
          ) {
            const t =
              e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
            a = e.slideTo(t.length - 1, 0, !1, !0);
          } else a = e.slideTo(e.activeIndex, 0, !1, !0);
          a || i();
        }
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const s = this,
          i = s.params.direction;
        return (
          e || (e = "horizontal" === i ? "vertical" : "horizontal"),
          e === i ||
            ("horizontal" !== e && "vertical" !== e) ||
            (s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
            s.el.classList.add(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            (s.params.direction = e),
            s.slides.forEach((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            s.emit("changeDirection"),
            t && s.update()),
          s
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "rtl"))
            : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        let s = e || t.params.el;
        if (("string" == typeof s && (s = document.querySelector(s)), !s))
          return !1;
        (s.swiper = t),
          s.parentNode &&
            s.parentNode.host &&
            "SWIPER-CONTAINER" === s.parentNode.host.nodeName &&
            (t.isElement = !0);
        const i = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let a = (() => {
          if (s && s.shadowRoot && s.shadowRoot.querySelector) {
            return s.shadowRoot.querySelector(i());
          }
          return O(s, i())[0];
        })();
        return (
          !a &&
            t.params.createElements &&
            ((a = L("div", t.params.wrapperClass)),
            s.append(a),
            O(s, `.${t.params.slideClass}`).forEach((e) => {
              a.append(e);
            })),
          Object.assign(t, {
            el: s,
            wrapperEl: a,
            slidesEl:
              t.isElement && !s.parentNode.host.slideSlots
                ? s.parentNode.host
                : a,
            hostEl: t.isElement ? s.parentNode.host : s,
            mounted: !0,
            rtl: "rtl" === s.dir.toLowerCase() || "rtl" === M(s, "direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === s.dir.toLowerCase() || "rtl" === M(s, "direction")),
            wrongRTL: "-webkit-box" === M(a, "display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        if (!1 === t.mount(e)) return t;
        t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.loop && t.virtual && t.params.virtual.enabled
            ? t.slideTo(
                t.params.initialSlide + t.virtual.slidesBefore,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0,
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0,
              ),
          t.params.loop && t.loopCreate(),
          t.attachEvents();
        const s = [...t.el.querySelectorAll('[loading="lazy"]')];
        return (
          t.isElement &&
            s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
          s.forEach((e) => {
            e.complete
              ? W(t, e)
              : e.addEventListener("load", (e) => {
                  W(t, e.target);
                });
          }),
          H(t),
          (t.initialized = !0),
          H(t),
          t.emit("init"),
          t.emit("afterInit"),
          t
        );
      }
      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const s = this,
          { params: i, el: a, wrapperEl: l, slides: n } = s;
        return (
          void 0 === s.params ||
            s.destroyed ||
            (s.emit("beforeDestroy"),
            (s.initialized = !1),
            s.detachEvents(),
            i.loop && s.loopDestroy(),
            t &&
              (s.removeClasses(),
              a.removeAttribute("style"),
              l.removeAttribute("style"),
              n &&
                n.length &&
                n.forEach((e) => {
                  e.classList.remove(
                    i.slideVisibleClass,
                    i.slideActiveClass,
                    i.slideNextClass,
                    i.slidePrevClass,
                  ),
                    e.removeAttribute("style"),
                    e.removeAttribute("data-swiper-slide-index");
                })),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e) => {
              s.off(e);
            }),
            !1 !== e &&
              ((s.el.swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(s)),
            (s.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        T(oe, e);
      }
      static get extendedDefaults() {
        return oe;
      }
      static get defaults() {
        return le;
      }
      static installModule(e) {
        ce.prototype.__modules__ || (ce.prototype.__modules__ = []);
        const t = ce.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => ce.installModule(e)), ce)
          : (ce.installModule(e), ce);
      }
    }
    function de(e, t, s, i) {
      return (
        e.params.createElements &&
          Object.keys(i).forEach((a) => {
            if (!s[a] && !0 === s.auto) {
              let l = O(e.el, `.${i[a]}`)[0];
              l || ((l = L("div", i[a])), (l.className = i[a]), e.el.append(l)),
                (s[a] = l),
                (t[a] = l);
            }
          }),
        s
      );
    }
    function pe(e) {
      let { swiper: t, extendParams: s, on: i, emit: a } = e;
      s({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
          navigationDisabledClass: "swiper-navigation-disabled",
        },
      }),
        (t.navigation = { nextEl: null, prevEl: null });
      const l = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      function n(e) {
        let s;
        return e &&
          "string" == typeof e &&
          t.isElement &&
          ((s = t.el.querySelector(e)), s)
          ? s
          : (e &&
              ("string" == typeof e && (s = [...document.querySelectorAll(e)]),
              t.params.uniqueNavElements &&
                "string" == typeof e &&
                s.length > 1 &&
                1 === t.el.querySelectorAll(e).length &&
                (s = t.el.querySelector(e))),
            e && !s ? e : s);
      }
      function r(e, s) {
        const i = t.params.navigation;
        (e = l(e)).forEach((e) => {
          e &&
            (e.classList[s ? "add" : "remove"](...i.disabledClass.split(" ")),
            "BUTTON" === e.tagName && (e.disabled = s),
            t.params.watchOverflow &&
              t.enabled &&
              e.classList[t.isLocked ? "add" : "remove"](i.lockClass));
        });
      }
      function o() {
        const { nextEl: e, prevEl: s } = t.navigation;
        if (t.params.loop) return r(s, !1), void r(e, !1);
        r(s, t.isBeginning && !t.params.rewind),
          r(e, t.isEnd && !t.params.rewind);
      }
      function c(e) {
        e.preventDefault(),
          (!t.isBeginning || t.params.loop || t.params.rewind) &&
            (t.slidePrev(), a("navigationPrev"));
      }
      function d(e) {
        e.preventDefault(),
          (!t.isEnd || t.params.loop || t.params.rewind) &&
            (t.slideNext(), a("navigationNext"));
      }
      function p() {
        const e = t.params.navigation;
        if (
          ((t.params.navigation = de(
            t,
            t.originalParams.navigation,
            t.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" },
          )),
          !e.nextEl && !e.prevEl)
        )
          return;
        let s = n(e.nextEl),
          i = n(e.prevEl);
        Object.assign(t.navigation, { nextEl: s, prevEl: i }),
          (s = l(s)),
          (i = l(i));
        const a = (s, i) => {
          s && s.addEventListener("click", "next" === i ? d : c),
            !t.enabled && s && s.classList.add(...e.lockClass.split(" "));
        };
        s.forEach((e) => a(e, "next")), i.forEach((e) => a(e, "prev"));
      }
      function u() {
        let { nextEl: e, prevEl: s } = t.navigation;
        (e = l(e)), (s = l(s));
        const i = (e, s) => {
          e.removeEventListener("click", "next" === s ? d : c),
            e.classList.remove(...t.params.navigation.disabledClass.split(" "));
        };
        e.forEach((e) => i(e, "next")), s.forEach((e) => i(e, "prev"));
      }
      i("init", () => {
        !1 === t.params.navigation.enabled ? h() : (p(), o());
      }),
        i("toEdge fromEdge lock unlock", () => {
          o();
        }),
        i("destroy", () => {
          u();
        }),
        i("enable disable", () => {
          let { nextEl: e, prevEl: s } = t.navigation;
          (e = l(e)),
            (s = l(s)),
            t.enabled
              ? o()
              : [...e, ...s]
                  .filter((e) => !!e)
                  .forEach((e) =>
                    e.classList.add(t.params.navigation.lockClass),
                  );
        }),
        i("click", (e, s) => {
          let { nextEl: i, prevEl: n } = t.navigation;
          (i = l(i)), (n = l(n));
          const r = s.target;
          if (
            t.params.navigation.hideOnClick &&
            !n.includes(r) &&
            !i.includes(r)
          ) {
            if (
              t.pagination &&
              t.params.pagination &&
              t.params.pagination.clickable &&
              (t.pagination.el === r || t.pagination.el.contains(r))
            )
              return;
            let e;
            i.length
              ? (e = i[0].classList.contains(t.params.navigation.hiddenClass))
              : n.length &&
                (e = n[0].classList.contains(t.params.navigation.hiddenClass)),
              a(!0 === e ? "navigationShow" : "navigationHide"),
              [...i, ...n]
                .filter((e) => !!e)
                .forEach((e) =>
                  e.classList.toggle(t.params.navigation.hiddenClass),
                );
          }
        });
      const h = () => {
        t.el.classList.add(
          ...t.params.navigation.navigationDisabledClass.split(" "),
        ),
          u();
      };
      Object.assign(t.navigation, {
        enable: () => {
          t.el.classList.remove(
            ...t.params.navigation.navigationDisabledClass.split(" "),
          ),
            p(),
            o();
        },
        disable: h,
        update: o,
        init: p,
        destroy: u,
      });
    }
    function ue(e) {
      return (
        void 0 === e && (e = ""),
        `.${e
          .trim()
          .replace(/([\.:!+\/])/g, "\\$1")
          .replace(/ /g, ".")}`
      );
    }
    function he(e) {
      let { swiper: t, extendParams: s, on: i, emit: a } = e;
      const l = "swiper-pagination";
      let n;
      s({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${l}-bullet`,
          bulletActiveClass: `${l}-bullet-active`,
          modifierClass: `${l}-`,
          currentClass: `${l}-current`,
          totalClass: `${l}-total`,
          hiddenClass: `${l}-hidden`,
          progressbarFillClass: `${l}-progressbar-fill`,
          progressbarOppositeClass: `${l}-progressbar-opposite`,
          clickableClass: `${l}-clickable`,
          lockClass: `${l}-lock`,
          horizontalClass: `${l}-horizontal`,
          verticalClass: `${l}-vertical`,
          paginationDisabledClass: `${l}-disabled`,
        },
      }),
        (t.pagination = { el: null, bullets: [] });
      let r = 0;
      const o = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      function c() {
        return (
          !t.params.pagination.el ||
          !t.pagination.el ||
          (Array.isArray(t.pagination.el) && 0 === t.pagination.el.length)
        );
      }
      function d(e, s) {
        const { bulletActiveClass: i } = t.params.pagination;
        e &&
          (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
          (e.classList.add(`${i}-${s}`),
          (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
            e.classList.add(`${i}-${s}-${s}`));
      }
      function p(e) {
        const s = e.target.closest(ue(t.params.pagination.bulletClass));
        if (!s) return;
        e.preventDefault();
        const i = k(s) * t.params.slidesPerGroup;
        if (t.params.loop) {
          if (t.realIndex === i) return;
          const e = t.realIndex,
            s = t.getSlideIndexByData(i),
            a = t.getSlideIndexByData(t.realIndex),
            l = (i) => {
              const a = t.activeIndex;
              t.loopFix({ direction: i, activeSlideIndex: s, slideTo: !1 });
              a === t.activeIndex && t.slideToLoop(e, 0, !1, !0);
            };
          if (s > t.slides.length - t.loopedSlides) l(s > a ? "next" : "prev");
          else if (t.params.centeredSlides) {
            const e =
              "auto" === t.params.slidesPerView
                ? t.slidesPerViewDynamic()
                : Math.ceil(parseFloat(t.params.slidesPerView, 10));
            s < Math.floor(e / 2) && l("prev");
          }
          t.slideToLoop(i);
        } else t.slideTo(i);
      }
      function u() {
        const e = t.rtl,
          s = t.params.pagination;
        if (c()) return;
        let i,
          l,
          p = t.pagination.el;
        p = o(p);
        const u =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          h = t.params.loop
            ? Math.ceil(u / t.params.slidesPerGroup)
            : t.snapGrid.length;
        if (
          (t.params.loop
            ? ((l = t.previousRealIndex || 0),
              (i =
                t.params.slidesPerGroup > 1
                  ? Math.floor(t.realIndex / t.params.slidesPerGroup)
                  : t.realIndex))
            : void 0 !== t.snapIndex
            ? ((i = t.snapIndex), (l = t.previousSnapIndex))
            : ((l = t.previousIndex || 0), (i = t.activeIndex || 0)),
          "bullets" === s.type &&
            t.pagination.bullets &&
            t.pagination.bullets.length > 0)
        ) {
          const a = t.pagination.bullets;
          let o, c, u;
          if (
            (s.dynamicBullets &&
              ((n = _(a[0], t.isHorizontal() ? "width" : "height", !0)),
              p.forEach((e) => {
                e.style[t.isHorizontal() ? "width" : "height"] =
                  n * (s.dynamicMainBullets + 4) + "px";
              }),
              s.dynamicMainBullets > 1 &&
                void 0 !== l &&
                ((r += i - (l || 0)),
                r > s.dynamicMainBullets - 1
                  ? (r = s.dynamicMainBullets - 1)
                  : r < 0 && (r = 0)),
              (o = Math.max(i - r, 0)),
              (c = o + (Math.min(a.length, s.dynamicMainBullets) - 1)),
              (u = (c + o) / 2)),
            a.forEach((e) => {
              const t = [
                ...[
                  "",
                  "-next",
                  "-next-next",
                  "-prev",
                  "-prev-prev",
                  "-main",
                ].map((e) => `${s.bulletActiveClass}${e}`),
              ]
                .map((e) =>
                  "string" == typeof e && e.includes(" ") ? e.split(" ") : e,
                )
                .flat();
              e.classList.remove(...t);
            }),
            p.length > 1)
          )
            a.forEach((e) => {
              const a = k(e);
              a === i
                ? e.classList.add(...s.bulletActiveClass.split(" "))
                : t.isElement && e.setAttribute("part", "bullet"),
                s.dynamicBullets &&
                  (a >= o &&
                    a <= c &&
                    e.classList.add(
                      ...`${s.bulletActiveClass}-main`.split(" "),
                    ),
                  a === o && d(e, "prev"),
                  a === c && d(e, "next"));
            });
          else {
            const e = a[i];
            if (
              (e && e.classList.add(...s.bulletActiveClass.split(" ")),
              t.isElement &&
                a.forEach((e, t) => {
                  e.setAttribute("part", t === i ? "bullet-active" : "bullet");
                }),
              s.dynamicBullets)
            ) {
              const e = a[o],
                t = a[c];
              for (let e = o; e <= c; e += 1)
                a[e] &&
                  a[e].classList.add(
                    ...`${s.bulletActiveClass}-main`.split(" "),
                  );
              d(e, "prev"), d(t, "next");
            }
          }
          if (s.dynamicBullets) {
            const i = Math.min(a.length, s.dynamicMainBullets + 4),
              l = (n * i - n) / 2 - u * n,
              r = e ? "right" : "left";
            a.forEach((e) => {
              e.style[t.isHorizontal() ? r : "top"] = `${l}px`;
            });
          }
        }
        p.forEach((e, l) => {
          if (
            ("fraction" === s.type &&
              (e.querySelectorAll(ue(s.currentClass)).forEach((e) => {
                e.textContent = s.formatFractionCurrent(i + 1);
              }),
              e.querySelectorAll(ue(s.totalClass)).forEach((e) => {
                e.textContent = s.formatFractionTotal(h);
              })),
            "progressbar" === s.type)
          ) {
            let a;
            a = s.progressbarOpposite
              ? t.isHorizontal()
                ? "vertical"
                : "horizontal"
              : t.isHorizontal()
              ? "horizontal"
              : "vertical";
            const l = (i + 1) / h;
            let n = 1,
              r = 1;
            "horizontal" === a ? (n = l) : (r = l),
              e.querySelectorAll(ue(s.progressbarFillClass)).forEach((e) => {
                (e.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${r})`),
                  (e.style.transitionDuration = `${t.params.speed}ms`);
              });
          }
          "custom" === s.type && s.renderCustom
            ? ((e.innerHTML = s.renderCustom(t, i + 1, h)),
              0 === l && a("paginationRender", e))
            : (0 === l && a("paginationRender", e), a("paginationUpdate", e)),
            t.params.watchOverflow &&
              t.enabled &&
              e.classList[t.isLocked ? "add" : "remove"](s.lockClass);
        });
      }
      function h() {
        const e = t.params.pagination;
        if (c()) return;
        const s =
          t.virtual && t.params.virtual.enabled
            ? t.virtual.slides.length
            : t.slides.length;
        let i = t.pagination.el;
        i = o(i);
        let l = "";
        if ("bullets" === e.type) {
          let i = t.params.loop
            ? Math.ceil(s / t.params.slidesPerGroup)
            : t.snapGrid.length;
          t.params.freeMode && t.params.freeMode.enabled && i > s && (i = s);
          for (let s = 0; s < i; s += 1)
            e.renderBullet
              ? (l += e.renderBullet.call(t, s, e.bulletClass))
              : (l += `<${e.bulletElement} ${
                  t.isElement ? 'part="bullet"' : ""
                } class="${e.bulletClass}"></${e.bulletElement}>`);
        }
        "fraction" === e.type &&
          (l = e.renderFraction
            ? e.renderFraction.call(t, e.currentClass, e.totalClass)
            : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
          "progressbar" === e.type &&
            (l = e.renderProgressbar
              ? e.renderProgressbar.call(t, e.progressbarFillClass)
              : `<span class="${e.progressbarFillClass}"></span>`),
          (t.pagination.bullets = []),
          i.forEach((s) => {
            "custom" !== e.type && (s.innerHTML = l || ""),
              "bullets" === e.type &&
                t.pagination.bullets.push(
                  ...s.querySelectorAll(ue(e.bulletClass)),
                );
          }),
          "custom" !== e.type && a("paginationRender", i[0]);
      }
      function m() {
        t.params.pagination = de(
          t,
          t.originalParams.pagination,
          t.params.pagination,
          { el: "swiper-pagination" },
        );
        const e = t.params.pagination;
        if (!e.el) return;
        let s;
        "string" == typeof e.el &&
          t.isElement &&
          (s = t.el.querySelector(e.el)),
          s ||
            "string" != typeof e.el ||
            (s = [...document.querySelectorAll(e.el)]),
          s || (s = e.el),
          s &&
            0 !== s.length &&
            (t.params.uniqueNavElements &&
              "string" == typeof e.el &&
              Array.isArray(s) &&
              s.length > 1 &&
              ((s = [...t.el.querySelectorAll(e.el)]),
              s.length > 1 &&
                (s = s.filter((e) => P(e, ".swiper")[0] === t.el)[0])),
            Array.isArray(s) && 1 === s.length && (s = s[0]),
            Object.assign(t.pagination, { el: s }),
            (s = o(s)),
            s.forEach((s) => {
              "bullets" === e.type &&
                e.clickable &&
                s.classList.add(...(e.clickableClass || "").split(" ")),
                s.classList.add(e.modifierClass + e.type),
                s.classList.add(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass,
                ),
                "bullets" === e.type &&
                  e.dynamicBullets &&
                  (s.classList.add(`${e.modifierClass}${e.type}-dynamic`),
                  (r = 0),
                  e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                "progressbar" === e.type &&
                  e.progressbarOpposite &&
                  s.classList.add(e.progressbarOppositeClass),
                e.clickable && s.addEventListener("click", p),
                t.enabled || s.classList.add(e.lockClass);
            }));
      }
      function f() {
        const e = t.params.pagination;
        if (c()) return;
        let s = t.pagination.el;
        s &&
          ((s = o(s)),
          s.forEach((s) => {
            s.classList.remove(e.hiddenClass),
              s.classList.remove(e.modifierClass + e.type),
              s.classList.remove(
                t.isHorizontal() ? e.horizontalClass : e.verticalClass,
              ),
              e.clickable &&
                (s.classList.remove(...(e.clickableClass || "").split(" ")),
                s.removeEventListener("click", p));
          })),
          t.pagination.bullets &&
            t.pagination.bullets.forEach((t) =>
              t.classList.remove(...e.bulletActiveClass.split(" ")),
            );
      }
      i("changeDirection", () => {
        if (!t.pagination || !t.pagination.el) return;
        const e = t.params.pagination;
        let { el: s } = t.pagination;
        (s = o(s)),
          s.forEach((s) => {
            s.classList.remove(e.horizontalClass, e.verticalClass),
              s.classList.add(
                t.isHorizontal() ? e.horizontalClass : e.verticalClass,
              );
          });
      }),
        i("init", () => {
          !1 === t.params.pagination.enabled ? v() : (m(), h(), u());
        }),
        i("activeIndexChange", () => {
          void 0 === t.snapIndex && u();
        }),
        i("snapIndexChange", () => {
          u();
        }),
        i("snapGridLengthChange", () => {
          h(), u();
        }),
        i("destroy", () => {
          f();
        }),
        i("enable disable", () => {
          let { el: e } = t.pagination;
          e &&
            ((e = o(e)),
            e.forEach((e) =>
              e.classList[t.enabled ? "remove" : "add"](
                t.params.pagination.lockClass,
              ),
            ));
        }),
        i("lock unlock", () => {
          u();
        }),
        i("click", (e, s) => {
          const i = s.target,
            l = o(t.pagination.el);
          if (
            t.params.pagination.el &&
            t.params.pagination.hideOnClick &&
            l &&
            l.length > 0 &&
            !i.classList.contains(t.params.pagination.bulletClass)
          ) {
            if (
              t.navigation &&
              ((t.navigation.nextEl && i === t.navigation.nextEl) ||
                (t.navigation.prevEl && i === t.navigation.prevEl))
            )
              return;
            const e = l[0].classList.contains(t.params.pagination.hiddenClass);
            a(!0 === e ? "paginationShow" : "paginationHide"),
              l.forEach((e) =>
                e.classList.toggle(t.params.pagination.hiddenClass),
              );
          }
        });
      const v = () => {
        t.el.classList.add(t.params.pagination.paginationDisabledClass);
        let { el: e } = t.pagination;
        e &&
          ((e = o(e)),
          e.forEach((e) =>
            e.classList.add(t.params.pagination.paginationDisabledClass),
          )),
          f();
      };
      Object.assign(t.pagination, {
        enable: () => {
          t.el.classList.remove(t.params.pagination.paginationDisabledClass);
          let { el: e } = t.pagination;
          e &&
            ((e = o(e)),
            e.forEach((e) =>
              e.classList.remove(t.params.pagination.paginationDisabledClass),
            )),
            m(),
            h(),
            u();
        },
        disable: v,
        render: h,
        update: u,
        init: m,
        destroy: f,
      });
    }
    function me(e) {
      let t,
        s,
        { swiper: i, extendParams: a, on: l, emit: n, params: r } = e;
      (i.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
        a({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        });
      let o,
        c,
        d,
        p,
        u,
        h,
        m,
        f = r && r.autoplay ? r.autoplay.delay : 3e3,
        v = r && r.autoplay ? r.autoplay.delay : 3e3,
        b = new Date().getTime;
      function y(e) {
        i &&
          !i.destroyed &&
          i.wrapperEl &&
          e.target === i.wrapperEl &&
          (i.wrapperEl.removeEventListener("transitionend", y), C());
      }
      const S = () => {
          if (i.destroyed || !i.autoplay.running) return;
          i.autoplay.paused ? (c = !0) : c && ((v = o), (c = !1));
          const e = i.autoplay.paused ? o : b + v - new Date().getTime();
          (i.autoplay.timeLeft = e),
            n("autoplayTimeLeft", e, e / f),
            (s = requestAnimationFrame(() => {
              S();
            }));
        },
        w = (e) => {
          if (i.destroyed || !i.autoplay.running) return;
          cancelAnimationFrame(s), S();
          let a = void 0 === e ? i.params.autoplay.delay : e;
          (f = i.params.autoplay.delay), (v = i.params.autoplay.delay);
          const l = (() => {
            let e;
            if (
              ((e =
                i.virtual && i.params.virtual.enabled
                  ? i.slides.filter((e) =>
                      e.classList.contains("swiper-slide-active"),
                    )[0]
                  : i.slides[i.activeIndex]),
              !e)
            )
              return;
            return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
          })();
          !Number.isNaN(l) &&
            l > 0 &&
            void 0 === e &&
            ((a = l), (f = l), (v = l)),
            (o = a);
          const r = i.params.speed,
            c = () => {
              i &&
                !i.destroyed &&
                (i.params.autoplay.reverseDirection
                  ? !i.isBeginning || i.params.loop || i.params.rewind
                    ? (i.slidePrev(r, !0, !0), n("autoplay"))
                    : i.params.autoplay.stopOnLastSlide ||
                      (i.slideTo(i.slides.length - 1, r, !0, !0), n("autoplay"))
                  : !i.isEnd || i.params.loop || i.params.rewind
                  ? (i.slideNext(r, !0, !0), n("autoplay"))
                  : i.params.autoplay.stopOnLastSlide ||
                    (i.slideTo(0, r, !0, !0), n("autoplay")),
                i.params.cssMode &&
                  ((b = new Date().getTime()),
                  requestAnimationFrame(() => {
                    w();
                  })));
            };
          return (
            a > 0
              ? (clearTimeout(t),
                (t = setTimeout(() => {
                  c();
                }, a)))
              : requestAnimationFrame(() => {
                  c();
                }),
            a
          );
        },
        E = () => {
          (i.autoplay.running = !0), w(), n("autoplayStart");
        },
        x = () => {
          (i.autoplay.running = !1),
            clearTimeout(t),
            cancelAnimationFrame(s),
            n("autoplayStop");
        },
        T = (e, s) => {
          if (i.destroyed || !i.autoplay.running) return;
          clearTimeout(t), e || (m = !0);
          const a = () => {
            n("autoplayPause"),
              i.params.autoplay.waitForTransition
                ? i.wrapperEl.addEventListener("transitionend", y)
                : C();
          };
          if (((i.autoplay.paused = !0), s))
            return h && (o = i.params.autoplay.delay), (h = !1), void a();
          const l = o || i.params.autoplay.delay;
          (o = l - (new Date().getTime() - b)),
            (i.isEnd && o < 0 && !i.params.loop) || (o < 0 && (o = 0), a());
        },
        C = () => {
          (i.isEnd && o < 0 && !i.params.loop) ||
            i.destroyed ||
            !i.autoplay.running ||
            ((b = new Date().getTime()),
            m ? ((m = !1), w(o)) : w(),
            (i.autoplay.paused = !1),
            n("autoplayResume"));
        },
        A = () => {
          if (i.destroyed || !i.autoplay.running) return;
          const e = g();
          "hidden" === e.visibilityState && ((m = !0), T(!0)),
            "visible" === e.visibilityState && C();
        },
        O = (e) => {
          "mouse" === e.pointerType &&
            ((m = !0), i.animating || i.autoplay.paused || T(!0));
        },
        L = (e) => {
          "mouse" === e.pointerType && i.autoplay.paused && C();
        };
      l("init", () => {
        i.params.autoplay.enabled &&
          (i.params.autoplay.pauseOnMouseEnter &&
            (i.el.addEventListener("pointerenter", O),
            i.el.addEventListener("pointerleave", L)),
          g().addEventListener("visibilitychange", A),
          (b = new Date().getTime()),
          E());
      }),
        l("destroy", () => {
          i.el.removeEventListener("pointerenter", O),
            i.el.removeEventListener("pointerleave", L),
            g().removeEventListener("visibilitychange", A),
            i.autoplay.running && x();
        }),
        l("beforeTransitionStart", (e, t, s) => {
          !i.destroyed &&
            i.autoplay.running &&
            (s || !i.params.autoplay.disableOnInteraction ? T(!0, !0) : x());
        }),
        l("sliderFirstMove", () => {
          !i.destroyed &&
            i.autoplay.running &&
            (i.params.autoplay.disableOnInteraction
              ? x()
              : ((d = !0),
                (p = !1),
                (m = !1),
                (u = setTimeout(() => {
                  (m = !0), (p = !0), T(!0);
                }, 200))));
        }),
        l("touchEnd", () => {
          if (!i.destroyed && i.autoplay.running && d) {
            if (
              (clearTimeout(u),
              clearTimeout(t),
              i.params.autoplay.disableOnInteraction)
            )
              return (p = !1), void (d = !1);
            p && i.params.cssMode && C(), (p = !1), (d = !1);
          }
        }),
        l("slideChange", () => {
          !i.destroyed && i.autoplay.running && (h = !0);
        }),
        Object.assign(i.autoplay, { start: E, stop: x, pause: T, resume: C });
    }
    function fe() {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)',
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    }
    Object.keys(re).forEach((e) => {
      Object.keys(re[e]).forEach((t) => {
        ce.prototype[t] = re[e][t];
      });
    }),
      ce.use([
        function (e) {
          let { swiper: t, on: s, emit: i } = e;
          const a = y();
          let l = null,
            n = null;
          const r = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (i("beforeResize"), i("resize"));
            },
            o = () => {
              t && !t.destroyed && t.initialized && i("orientationchange");
            };
          s("init", () => {
            t.params.resizeObserver && void 0 !== a.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((l = new ResizeObserver((e) => {
                  n = a.requestAnimationFrame(() => {
                    const { width: s, height: i } = t;
                    let a = s,
                      l = i;
                    e.forEach((e) => {
                      let { contentBoxSize: s, contentRect: i, target: n } = e;
                      (n && n !== t.el) ||
                        ((a = i ? i.width : (s[0] || s).inlineSize),
                        (l = i ? i.height : (s[0] || s).blockSize));
                    }),
                      (a === s && l === i) || r();
                  });
                })),
                l.observe(t.el))
              : (a.addEventListener("resize", r),
                a.addEventListener("orientationchange", o));
          }),
            s("destroy", () => {
              n && a.cancelAnimationFrame(n),
                l && l.unobserve && t.el && (l.unobserve(t.el), (l = null)),
                a.removeEventListener("resize", r),
                a.removeEventListener("orientationchange", o);
            });
        },
        function (e) {
          let { swiper: t, extendParams: s, on: i, emit: a } = e;
          const l = [],
            n = y(),
            r = function (e, s) {
              void 0 === s && (s = {});
              const i = new (n.MutationObserver || n.WebkitMutationObserver)(
                (e) => {
                  if (t.__preventObserver__) return;
                  if (1 === e.length) return void a("observerUpdate", e[0]);
                  const s = function () {
                    a("observerUpdate", e[0]);
                  };
                  n.requestAnimationFrame
                    ? n.requestAnimationFrame(s)
                    : n.setTimeout(s, 0);
                },
              );
              i.observe(e, {
                attributes: void 0 === s.attributes || s.attributes,
                childList: void 0 === s.childList || s.childList,
                characterData: void 0 === s.characterData || s.characterData,
              }),
                l.push(i);
            };
          s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            i("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = P(t.hostEl);
                  for (let t = 0; t < e.length; t += 1) r(e[t]);
                }
                r(t.hostEl, { childList: t.params.observeSlideChildren }),
                  r(t.wrapperEl, { attributes: !1 });
              }
            }),
            i("destroy", () => {
              l.forEach((e) => {
                e.disconnect();
              }),
                l.splice(0, l.length);
            });
        },
      ]);
    const ve = (e, t, s, i) => {
      let a;
      e = window.matchMedia(e);
      const l = function () {
        return e.matches
          ? ((a = new ce(t, s)), void (i && i(a)))
          : void (void 0 !== a && a.destroy(!0, !0));
      };
      e.addEventListener("change", l), l();
    };
    window.addEventListener("load", function (e) {
      fe(),
        document.querySelector(".promo__swiper") &&
          new ce(".promo__slider", {
            modules: [he, me],
            autoplay: { delay: 3500, disableOnInteraction: !1 },
            slidesPerView: 1,
            speed: 800,
            pagination: { el: ".promo__slider-pagination", clickable: !0 },
            on: {},
          }),
        ve("(max-width: 1280px)", ".why-we__slider", {
          modules: [he],
          slidesPerView: 1,
          speed: 800,
          pagination: { el: ".why-we__slider-pagination", clickable: !0 },
          on: {},
        }),
        ve("(max-width: 768px)", ".desc__slider", {
          modules: [he],
          slidesPerView: 1,
          autoHeight: !0,
          speed: 800,
          pagination: { el: ".desc__slider-pagination", clickable: !0 },
          on: {},
        }),
        document.querySelector(".brends__swiper") &&
          new ce(".brends__slider", {
            modules: [pe],
            spaceBetween: 20,
            speed: 800,
            navigation: {
              nextEl: ".slider-navigation .slider-navigation__arrow_next",
              prevEl: ".slider-navigation .slider-navigation__arrow_prev",
            },
            breakpoints: {
              0: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              992: { slidesPerView: "auto", spaceBetween: 20 },
            },
            on: {},
          }),
        ve("(max-width: 768px)", ".connect__slider", {
          modules: [he],
          slidesPerView: 1,
          spaceBetween: 20,
          speed: 800,
          pagination: { el: ".connect__slider-pagination", clickable: !0 },
          on: {},
        });
    });
    var ge = s(807);
    const be = function (e) {
      var t = typeof e;
      return null != e && ("object" == t || "function" == t);
    };
    const ye =
      "object" == typeof global && global && global.Object === Object && global;
    var Se = "object" == typeof self && self && self.Object === Object && self;
    const we = ye || Se || Function("return this")();
    const Ee = function () {
      return we.Date.now();
    };
    var xe = /\s/;
    const Te = function (e) {
      for (var t = e.length; t-- && xe.test(e.charAt(t)); );
      return t;
    };
    var Ce = /^\s+/;
    const Ae = function (e) {
      return e ? e.slice(0, Te(e) + 1).replace(Ce, "") : e;
    };
    const Oe = we.Symbol;
    var Le = Object.prototype,
      Me = Le.hasOwnProperty,
      ke = Le.toString,
      Pe = Oe ? Oe.toStringTag : void 0;
    const _e = function (e) {
      var t = Me.call(e, Pe),
        s = e[Pe];
      try {
        e[Pe] = void 0;
        var i = !0;
      } catch (e) {}
      var a = ke.call(e);
      return i && (t ? (e[Pe] = s) : delete e[Pe]), a;
    };
    var ze = Object.prototype.toString;
    const Ie = function (e) {
      return ze.call(e);
    };
    var $e = Oe ? Oe.toStringTag : void 0;
    const De = function (e) {
      return null == e
        ? void 0 === e
          ? "[object Undefined]"
          : "[object Null]"
        : $e && $e in Object(e)
        ? _e(e)
        : Ie(e);
    };
    const Ne = function (e) {
      return null != e && "object" == typeof e;
    };
    const qe = function (e) {
      return "symbol" == typeof e || (Ne(e) && "[object Symbol]" == De(e));
    };
    var Be = /^[-+]0x[0-9a-f]+$/i,
      We = /^0b[01]+$/i,
      Ve = /^0o[0-7]+$/i,
      He = parseInt;
    const Ge = function (e) {
      if ("number" == typeof e) return e;
      if (qe(e)) return NaN;
      if (be(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = be(t) ? t + "" : t;
      }
      if ("string" != typeof e) return 0 === e ? e : +e;
      e = Ae(e);
      var s = We.test(e);
      return s || Ve.test(e)
        ? He(e.slice(2), s ? 2 : 8)
        : Be.test(e)
        ? NaN
        : +e;
    };
    var Fe = Math.max,
      Re = Math.min;
    const je = function (e, t, s) {
      var i,
        a,
        l,
        n,
        r,
        o,
        c = 0,
        d = !1,
        p = !1,
        u = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");
      function h(t) {
        var s = i,
          l = a;
        return (i = a = void 0), (c = t), (n = e.apply(l, s));
      }
      function m(e) {
        var s = e - o;
        return void 0 === o || s >= t || s < 0 || (p && e - c >= l);
      }
      function f() {
        var e = Ee();
        if (m(e)) return v(e);
        r = setTimeout(
          f,
          (function (e) {
            var s = t - (e - o);
            return p ? Re(s, l - (e - c)) : s;
          })(e),
        );
      }
      function v(e) {
        return (r = void 0), u && i ? h(e) : ((i = a = void 0), n);
      }
      function g() {
        var e = Ee(),
          s = m(e);
        if (((i = arguments), (a = this), (o = e), s)) {
          if (void 0 === r)
            return (function (e) {
              return (c = e), (r = setTimeout(f, t)), d ? h(e) : n;
            })(o);
          if (p) return clearTimeout(r), (r = setTimeout(f, t)), h(o);
        }
        return void 0 === r && (r = setTimeout(f, t)), n;
      }
      return (
        (t = Ge(t) || 0),
        be(s) &&
          ((d = !!s.leading),
          (l = (p = "maxWait" in s) ? Fe(Ge(s.maxWait) || 0, t) : l),
          (u = "trailing" in s ? !!s.trailing : u)),
        (g.cancel = function () {
          void 0 !== r && clearTimeout(r), (c = 0), (i = o = a = r = void 0);
        }),
        (g.flush = function () {
          return void 0 === r ? n : v(Ee());
        }),
        g
      );
    };
    const Ye = function (e, t, s) {
      var i = !0,
        a = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");
      return (
        be(s) &&
          ((i = "leading" in s ? !!s.leading : i),
          (a = "trailing" in s ? !!s.trailing : a)),
        je(e, t, { leading: i, maxWait: t, trailing: a })
      );
    };
    var Xe = function () {
        return (
          (Xe =
            Object.assign ||
            function (e) {
              for (var t, s = 1, i = arguments.length; s < i; s++)
                for (var a in (t = arguments[s]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }),
          Xe.apply(this, arguments)
        );
      },
      Ue = null,
      Qe = null;
    function Ke() {
      if (null === Ue) {
        if ("undefined" == typeof document) return (Ue = 0);
        var e = document.body,
          t = document.createElement("div");
        t.classList.add("simplebar-hide-scrollbar"), e.appendChild(t);
        var s = t.getBoundingClientRect().right;
        e.removeChild(t), (Ue = s);
      }
      return Ue;
    }
    function Ze(e) {
      return e && e.ownerDocument && e.ownerDocument.defaultView
        ? e.ownerDocument.defaultView
        : window;
    }
    function Je(e) {
      return e && e.ownerDocument ? e.ownerDocument : document;
    }
    ge &&
      window.addEventListener("resize", function () {
        Qe !== window.devicePixelRatio &&
          ((Qe = window.devicePixelRatio), (Ue = null));
      });
    var et = function (e) {
      return Array.prototype.reduce.call(
        e,
        function (e, t) {
          var s = t.name.match(/data-simplebar-(.+)/);
          if (s) {
            var i = s[1].replace(/\W+(.)/g, function (e, t) {
              return t.toUpperCase();
            });
            switch (t.value) {
              case "true":
                e[i] = !0;
                break;
              case "false":
                e[i] = !1;
                break;
              case void 0:
                e[i] = !0;
                break;
              default:
                e[i] = t.value;
            }
          }
          return e;
        },
        {},
      );
    };
    function tt(e, t) {
      var s;
      e && (s = e.classList).add.apply(s, t.split(" "));
    }
    function st(e, t) {
      e &&
        t.split(" ").forEach(function (t) {
          e.classList.remove(t);
        });
    }
    function it(e) {
      return ".".concat(e.split(" ").join("."));
    }
    var at = Object.freeze({
        __proto__: null,
        getElementWindow: Ze,
        getElementDocument: Je,
        getOptions: et,
        addClasses: tt,
        removeClasses: st,
        classNamesToQuery: it,
      }),
      lt = Ze,
      nt = Je,
      rt = et,
      ot = tt,
      ct = st,
      dt = it,
      pt = (function () {
        function e(t, s) {
          void 0 === s && (s = {});
          var i = this;
          if (
            ((this.removePreventClickId = null),
            (this.minScrollbarWidth = 20),
            (this.stopScrollDelay = 175),
            (this.isScrolling = !1),
            (this.isMouseEntering = !1),
            (this.scrollXTicking = !1),
            (this.scrollYTicking = !1),
            (this.wrapperEl = null),
            (this.contentWrapperEl = null),
            (this.contentEl = null),
            (this.offsetEl = null),
            (this.maskEl = null),
            (this.placeholderEl = null),
            (this.heightAutoObserverWrapperEl = null),
            (this.heightAutoObserverEl = null),
            (this.rtlHelpers = null),
            (this.scrollbarWidth = 0),
            (this.resizeObserver = null),
            (this.mutationObserver = null),
            (this.elStyles = null),
            (this.isRtl = null),
            (this.mouseX = 0),
            (this.mouseY = 0),
            (this.onMouseMove = function () {}),
            (this.onWindowResize = function () {}),
            (this.onStopScrolling = function () {}),
            (this.onMouseEntered = function () {}),
            (this.onScroll = function () {
              var e = lt(i.el);
              i.scrollXTicking ||
                (e.requestAnimationFrame(i.scrollX), (i.scrollXTicking = !0)),
                i.scrollYTicking ||
                  (e.requestAnimationFrame(i.scrollY), (i.scrollYTicking = !0)),
                i.isScrolling ||
                  ((i.isScrolling = !0), ot(i.el, i.classNames.scrolling)),
                i.showScrollbar("x"),
                i.showScrollbar("y"),
                i.onStopScrolling();
            }),
            (this.scrollX = function () {
              i.axis.x.isOverflowing && i.positionScrollbar("x"),
                (i.scrollXTicking = !1);
            }),
            (this.scrollY = function () {
              i.axis.y.isOverflowing && i.positionScrollbar("y"),
                (i.scrollYTicking = !1);
            }),
            (this._onStopScrolling = function () {
              ct(i.el, i.classNames.scrolling),
                i.options.autoHide &&
                  (i.hideScrollbar("x"), i.hideScrollbar("y")),
                (i.isScrolling = !1);
            }),
            (this.onMouseEnter = function () {
              i.isMouseEntering ||
                (ot(i.el, i.classNames.mouseEntered),
                i.showScrollbar("x"),
                i.showScrollbar("y"),
                (i.isMouseEntering = !0)),
                i.onMouseEntered();
            }),
            (this._onMouseEntered = function () {
              ct(i.el, i.classNames.mouseEntered),
                i.options.autoHide &&
                  (i.hideScrollbar("x"), i.hideScrollbar("y")),
                (i.isMouseEntering = !1);
            }),
            (this._onMouseMove = function (e) {
              (i.mouseX = e.clientX),
                (i.mouseY = e.clientY),
                (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
                  i.onMouseMoveForAxis("x"),
                (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
                  i.onMouseMoveForAxis("y");
            }),
            (this.onMouseLeave = function () {
              i.onMouseMove.cancel(),
                (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
                  i.onMouseLeaveForAxis("x"),
                (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
                  i.onMouseLeaveForAxis("y"),
                (i.mouseX = -1),
                (i.mouseY = -1);
            }),
            (this._onWindowResize = function () {
              (i.scrollbarWidth = i.getScrollbarWidth()),
                i.hideNativeScrollbar();
            }),
            (this.onPointerEvent = function (e) {
              var t, s;
              i.axis.x.track.el &&
                i.axis.y.track.el &&
                i.axis.x.scrollbar.el &&
                i.axis.y.scrollbar.el &&
                ((i.axis.x.track.rect =
                  i.axis.x.track.el.getBoundingClientRect()),
                (i.axis.y.track.rect =
                  i.axis.y.track.el.getBoundingClientRect()),
                (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
                  (t = i.isWithinBounds(i.axis.x.track.rect)),
                (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
                  (s = i.isWithinBounds(i.axis.y.track.rect)),
                (t || s) &&
                  (e.stopPropagation(),
                  "pointerdown" === e.type &&
                    "touch" !== e.pointerType &&
                    (t &&
                      ((i.axis.x.scrollbar.rect =
                        i.axis.x.scrollbar.el.getBoundingClientRect()),
                      i.isWithinBounds(i.axis.x.scrollbar.rect)
                        ? i.onDragStart(e, "x")
                        : i.onTrackClick(e, "x")),
                    s &&
                      ((i.axis.y.scrollbar.rect =
                        i.axis.y.scrollbar.el.getBoundingClientRect()),
                      i.isWithinBounds(i.axis.y.scrollbar.rect)
                        ? i.onDragStart(e, "y")
                        : i.onTrackClick(e, "y")))));
            }),
            (this.drag = function (t) {
              var s, a, l, n, r, o, c, d, p, u, h;
              if (i.draggedAxis && i.contentWrapperEl) {
                var m = i.axis[i.draggedAxis].track,
                  f =
                    null !==
                      (a =
                        null === (s = m.rect) || void 0 === s
                          ? void 0
                          : s[i.axis[i.draggedAxis].sizeAttr]) && void 0 !== a
                      ? a
                      : 0,
                  v = i.axis[i.draggedAxis].scrollbar,
                  g =
                    null !==
                      (n =
                        null === (l = i.contentWrapperEl) || void 0 === l
                          ? void 0
                          : l[i.axis[i.draggedAxis].scrollSizeAttr]) &&
                    void 0 !== n
                      ? n
                      : 0,
                  b = parseInt(
                    null !==
                      (o =
                        null === (r = i.elStyles) || void 0 === r
                          ? void 0
                          : r[i.axis[i.draggedAxis].sizeAttr]) && void 0 !== o
                      ? o
                      : "0px",
                    10,
                  );
                t.preventDefault(), t.stopPropagation();
                var y =
                    ("y" === i.draggedAxis ? t.pageY : t.pageX) -
                    (null !==
                      (d =
                        null === (c = m.rect) || void 0 === c
                          ? void 0
                          : c[i.axis[i.draggedAxis].offsetAttr]) && void 0 !== d
                      ? d
                      : 0) -
                    i.axis[i.draggedAxis].dragOffset,
                  S =
                    ((y =
                      "x" === i.draggedAxis && i.isRtl
                        ? (null !==
                            (u =
                              null === (p = m.rect) || void 0 === p
                                ? void 0
                                : p[i.axis[i.draggedAxis].sizeAttr]) &&
                          void 0 !== u
                            ? u
                            : 0) -
                          v.size -
                          y
                        : y) /
                      (f - v.size)) *
                    (g - b);
                "x" === i.draggedAxis &&
                  i.isRtl &&
                  (S = (
                    null === (h = e.getRtlHelpers()) || void 0 === h
                      ? void 0
                      : h.isScrollingToNegative
                  )
                    ? -S
                    : S),
                  (i.contentWrapperEl[i.axis[i.draggedAxis].scrollOffsetAttr] =
                    S);
              }
            }),
            (this.onEndDrag = function (e) {
              var t = nt(i.el),
                s = lt(i.el);
              e.preventDefault(),
                e.stopPropagation(),
                ct(i.el, i.classNames.dragging),
                t.removeEventListener("mousemove", i.drag, !0),
                t.removeEventListener("mouseup", i.onEndDrag, !0),
                (i.removePreventClickId = s.setTimeout(function () {
                  t.removeEventListener("click", i.preventClick, !0),
                    t.removeEventListener("dblclick", i.preventClick, !0),
                    (i.removePreventClickId = null);
                }));
            }),
            (this.preventClick = function (e) {
              e.preventDefault(), e.stopPropagation();
            }),
            (this.el = t),
            (this.options = Xe(Xe({}, e.defaultOptions), s)),
            (this.classNames = Xe(
              Xe({}, e.defaultOptions.classNames),
              s.classNames,
            )),
            (this.axis = {
              x: {
                scrollOffsetAttr: "scrollLeft",
                sizeAttr: "width",
                scrollSizeAttr: "scrollWidth",
                offsetSizeAttr: "offsetWidth",
                offsetAttr: "left",
                overflowAttr: "overflowX",
                dragOffset: 0,
                isOverflowing: !0,
                forceVisible: !1,
                track: { size: null, el: null, rect: null, isVisible: !1 },
                scrollbar: { size: null, el: null, rect: null, isVisible: !1 },
              },
              y: {
                scrollOffsetAttr: "scrollTop",
                sizeAttr: "height",
                scrollSizeAttr: "scrollHeight",
                offsetSizeAttr: "offsetHeight",
                offsetAttr: "top",
                overflowAttr: "overflowY",
                dragOffset: 0,
                isOverflowing: !0,
                forceVisible: !1,
                track: { size: null, el: null, rect: null, isVisible: !1 },
                scrollbar: { size: null, el: null, rect: null, isVisible: !1 },
              },
            }),
            "object" != typeof this.el || !this.el.nodeName)
          )
            throw new Error(
              "Argument passed to SimpleBar must be an HTML element instead of ".concat(
                this.el,
              ),
            );
          (this.onMouseMove = Ye(this._onMouseMove, 64)),
            (this.onWindowResize = je(this._onWindowResize, 64, {
              leading: !0,
            })),
            (this.onStopScrolling = je(
              this._onStopScrolling,
              this.stopScrollDelay,
            )),
            (this.onMouseEntered = je(
              this._onMouseEntered,
              this.stopScrollDelay,
            )),
            this.init();
        }
        return (
          (e.getRtlHelpers = function () {
            if (e.rtlHelpers) return e.rtlHelpers;
            var t = document.createElement("div");
            t.innerHTML =
              '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
            var s = t.firstElementChild,
              i = null == s ? void 0 : s.firstElementChild;
            if (!i) return null;
            document.body.appendChild(s), (s.scrollLeft = 0);
            var a = e.getOffset(s),
              l = e.getOffset(i);
            s.scrollLeft = -999;
            var n = e.getOffset(i);
            return (
              document.body.removeChild(s),
              (e.rtlHelpers = {
                isScrollOriginAtZero: a.left !== l.left,
                isScrollingToNegative: l.left !== n.left,
              }),
              e.rtlHelpers
            );
          }),
          (e.prototype.getScrollbarWidth = function () {
            try {
              return (this.contentWrapperEl &&
                "none" ===
                  getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar")
                    .display) ||
                "scrollbarWidth" in document.documentElement.style ||
                "-ms-overflow-style" in document.documentElement.style
                ? 0
                : Ke();
            } catch (e) {
              return Ke();
            }
          }),
          (e.getOffset = function (e) {
            var t = e.getBoundingClientRect(),
              s = nt(e),
              i = lt(e);
            return {
              top: t.top + (i.pageYOffset || s.documentElement.scrollTop),
              left: t.left + (i.pageXOffset || s.documentElement.scrollLeft),
            };
          }),
          (e.prototype.init = function () {
            ge &&
              (this.initDOM(),
              (this.rtlHelpers = e.getRtlHelpers()),
              (this.scrollbarWidth = this.getScrollbarWidth()),
              this.recalculate(),
              this.initListeners());
          }),
          (e.prototype.initDOM = function () {
            var e, t;
            (this.wrapperEl = this.el.querySelector(
              dt(this.classNames.wrapper),
            )),
              (this.contentWrapperEl =
                this.options.scrollableNode ||
                this.el.querySelector(dt(this.classNames.contentWrapper))),
              (this.contentEl =
                this.options.contentNode ||
                this.el.querySelector(dt(this.classNames.contentEl))),
              (this.offsetEl = this.el.querySelector(
                dt(this.classNames.offset),
              )),
              (this.maskEl = this.el.querySelector(dt(this.classNames.mask))),
              (this.placeholderEl = this.findChild(
                this.wrapperEl,
                dt(this.classNames.placeholder),
              )),
              (this.heightAutoObserverWrapperEl = this.el.querySelector(
                dt(this.classNames.heightAutoObserverWrapperEl),
              )),
              (this.heightAutoObserverEl = this.el.querySelector(
                dt(this.classNames.heightAutoObserverEl),
              )),
              (this.axis.x.track.el = this.findChild(
                this.el,
                ""
                  .concat(dt(this.classNames.track))
                  .concat(dt(this.classNames.horizontal)),
              )),
              (this.axis.y.track.el = this.findChild(
                this.el,
                ""
                  .concat(dt(this.classNames.track))
                  .concat(dt(this.classNames.vertical)),
              )),
              (this.axis.x.scrollbar.el =
                (null === (e = this.axis.x.track.el) || void 0 === e
                  ? void 0
                  : e.querySelector(dt(this.classNames.scrollbar))) || null),
              (this.axis.y.scrollbar.el =
                (null === (t = this.axis.y.track.el) || void 0 === t
                  ? void 0
                  : t.querySelector(dt(this.classNames.scrollbar))) || null),
              this.options.autoHide ||
                (ot(this.axis.x.scrollbar.el, this.classNames.visible),
                ot(this.axis.y.scrollbar.el, this.classNames.visible));
          }),
          (e.prototype.initListeners = function () {
            var e,
              t = this,
              s = lt(this.el);
            if (
              (this.el.addEventListener("mouseenter", this.onMouseEnter),
              this.el.addEventListener("pointerdown", this.onPointerEvent, !0),
              this.el.addEventListener("mousemove", this.onMouseMove),
              this.el.addEventListener("mouseleave", this.onMouseLeave),
              null === (e = this.contentWrapperEl) ||
                void 0 === e ||
                e.addEventListener("scroll", this.onScroll),
              s.addEventListener("resize", this.onWindowResize),
              this.contentEl)
            ) {
              if (window.ResizeObserver) {
                var i = !1,
                  a = s.ResizeObserver || ResizeObserver;
                (this.resizeObserver = new a(function () {
                  i &&
                    s.requestAnimationFrame(function () {
                      t.recalculate();
                    });
                })),
                  this.resizeObserver.observe(this.el),
                  this.resizeObserver.observe(this.contentEl),
                  s.requestAnimationFrame(function () {
                    i = !0;
                  });
              }
              (this.mutationObserver = new s.MutationObserver(function () {
                s.requestAnimationFrame(function () {
                  t.recalculate();
                });
              })),
                this.mutationObserver.observe(this.contentEl, {
                  childList: !0,
                  subtree: !0,
                  characterData: !0,
                });
            }
          }),
          (e.prototype.recalculate = function () {
            if (
              this.heightAutoObserverEl &&
              this.contentEl &&
              this.contentWrapperEl &&
              this.wrapperEl &&
              this.placeholderEl
            ) {
              var e = lt(this.el);
              (this.elStyles = e.getComputedStyle(this.el)),
                (this.isRtl = "rtl" === this.elStyles.direction);
              var t = this.contentEl.offsetWidth,
                s = this.heightAutoObserverEl.offsetHeight <= 1,
                i = this.heightAutoObserverEl.offsetWidth <= 1 || t > 0,
                a = this.contentWrapperEl.offsetWidth,
                l = this.elStyles.overflowX,
                n = this.elStyles.overflowY;
              (this.contentEl.style.padding = ""
                .concat(this.elStyles.paddingTop, " ")
                .concat(this.elStyles.paddingRight, " ")
                .concat(this.elStyles.paddingBottom, " ")
                .concat(this.elStyles.paddingLeft)),
                (this.wrapperEl.style.margin = "-"
                  .concat(this.elStyles.paddingTop, " -")
                  .concat(this.elStyles.paddingRight, " -")
                  .concat(this.elStyles.paddingBottom, " -")
                  .concat(this.elStyles.paddingLeft));
              var r = this.contentEl.scrollHeight,
                o = this.contentEl.scrollWidth;
              (this.contentWrapperEl.style.height = s ? "auto" : "100%"),
                (this.placeholderEl.style.width = i
                  ? "".concat(t || o, "px")
                  : "auto"),
                (this.placeholderEl.style.height = "".concat(r, "px"));
              var c = this.contentWrapperEl.offsetHeight;
              (this.axis.x.isOverflowing = 0 !== t && o > t),
                (this.axis.y.isOverflowing = r > c),
                (this.axis.x.isOverflowing =
                  "hidden" !== l && this.axis.x.isOverflowing),
                (this.axis.y.isOverflowing =
                  "hidden" !== n && this.axis.y.isOverflowing),
                (this.axis.x.forceVisible =
                  "x" === this.options.forceVisible ||
                  !0 === this.options.forceVisible),
                (this.axis.y.forceVisible =
                  "y" === this.options.forceVisible ||
                  !0 === this.options.forceVisible),
                this.hideNativeScrollbar();
              var d = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
                p = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
              (this.axis.x.isOverflowing =
                this.axis.x.isOverflowing && o > a - p),
                (this.axis.y.isOverflowing =
                  this.axis.y.isOverflowing && r > c - d),
                (this.axis.x.scrollbar.size = this.getScrollbarSize("x")),
                (this.axis.y.scrollbar.size = this.getScrollbarSize("y")),
                this.axis.x.scrollbar.el &&
                  (this.axis.x.scrollbar.el.style.width = "".concat(
                    this.axis.x.scrollbar.size,
                    "px",
                  )),
                this.axis.y.scrollbar.el &&
                  (this.axis.y.scrollbar.el.style.height = "".concat(
                    this.axis.y.scrollbar.size,
                    "px",
                  )),
                this.positionScrollbar("x"),
                this.positionScrollbar("y"),
                this.toggleTrackVisibility("x"),
                this.toggleTrackVisibility("y");
            }
          }),
          (e.prototype.getScrollbarSize = function (e) {
            var t, s;
            if (
              (void 0 === e && (e = "y"),
              !this.axis[e].isOverflowing || !this.contentEl)
            )
              return 0;
            var i,
              a = this.contentEl[this.axis[e].scrollSizeAttr],
              l =
                null !==
                  (s =
                    null === (t = this.axis[e].track.el) || void 0 === t
                      ? void 0
                      : t[this.axis[e].offsetSizeAttr]) && void 0 !== s
                  ? s
                  : 0,
              n = l / a;
            return (
              (i = Math.max(~~(n * l), this.options.scrollbarMinSize)),
              this.options.scrollbarMaxSize &&
                (i = Math.min(i, this.options.scrollbarMaxSize)),
              i
            );
          }),
          (e.prototype.positionScrollbar = function (t) {
            var s, i, a;
            void 0 === t && (t = "y");
            var l = this.axis[t].scrollbar;
            if (
              this.axis[t].isOverflowing &&
              this.contentWrapperEl &&
              l.el &&
              this.elStyles
            ) {
              var n = this.contentWrapperEl[this.axis[t].scrollSizeAttr],
                r =
                  (null === (s = this.axis[t].track.el) || void 0 === s
                    ? void 0
                    : s[this.axis[t].offsetSizeAttr]) || 0,
                o = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                c = this.contentWrapperEl[this.axis[t].scrollOffsetAttr];
              (c =
                "x" === t &&
                this.isRtl &&
                (null === (i = e.getRtlHelpers()) || void 0 === i
                  ? void 0
                  : i.isScrollOriginAtZero)
                  ? -c
                  : c),
                "x" === t &&
                  this.isRtl &&
                  (c = (
                    null === (a = e.getRtlHelpers()) || void 0 === a
                      ? void 0
                      : a.isScrollingToNegative
                  )
                    ? c
                    : -c);
              var d = c / (n - o),
                p = ~~((r - l.size) * d);
              (p = "x" === t && this.isRtl ? -p + (r - l.size) : p),
                (l.el.style.transform =
                  "x" === t
                    ? "translate3d(".concat(p, "px, 0, 0)")
                    : "translate3d(0, ".concat(p, "px, 0)"));
            }
          }),
          (e.prototype.toggleTrackVisibility = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e].track.el,
              s = this.axis[e].scrollbar.el;
            t &&
              s &&
              this.contentWrapperEl &&
              (this.axis[e].isOverflowing || this.axis[e].forceVisible
                ? ((t.style.visibility = "visible"),
                  (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                    "scroll"),
                  this.el.classList.add(
                    "".concat(this.classNames.scrollable, "-").concat(e),
                  ))
                : ((t.style.visibility = "hidden"),
                  (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                    "hidden"),
                  this.el.classList.remove(
                    "".concat(this.classNames.scrollable, "-").concat(e),
                  )),
              this.axis[e].isOverflowing
                ? (s.style.display = "block")
                : (s.style.display = "none"));
          }),
          (e.prototype.showScrollbar = function (e) {
            void 0 === e && (e = "y"),
              this.axis[e].isOverflowing &&
                !this.axis[e].scrollbar.isVisible &&
                (ot(this.axis[e].scrollbar.el, this.classNames.visible),
                (this.axis[e].scrollbar.isVisible = !0));
          }),
          (e.prototype.hideScrollbar = function (e) {
            void 0 === e && (e = "y"),
              this.axis[e].isOverflowing &&
                this.axis[e].scrollbar.isVisible &&
                (ct(this.axis[e].scrollbar.el, this.classNames.visible),
                (this.axis[e].scrollbar.isVisible = !1));
          }),
          (e.prototype.hideNativeScrollbar = function () {
            this.offsetEl &&
              ((this.offsetEl.style[this.isRtl ? "left" : "right"] =
                this.axis.y.isOverflowing || this.axis.y.forceVisible
                  ? "-".concat(this.scrollbarWidth, "px")
                  : "0px"),
              (this.offsetEl.style.bottom =
                this.axis.x.isOverflowing || this.axis.x.forceVisible
                  ? "-".concat(this.scrollbarWidth, "px")
                  : "0px"));
          }),
          (e.prototype.onMouseMoveForAxis = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e];
            t.track.el &&
              t.scrollbar.el &&
              ((t.track.rect = t.track.el.getBoundingClientRect()),
              (t.scrollbar.rect = t.scrollbar.el.getBoundingClientRect()),
              this.isWithinBounds(t.track.rect)
                ? (this.showScrollbar(e),
                  ot(t.track.el, this.classNames.hover),
                  this.isWithinBounds(t.scrollbar.rect)
                    ? ot(t.scrollbar.el, this.classNames.hover)
                    : ct(t.scrollbar.el, this.classNames.hover))
                : (ct(t.track.el, this.classNames.hover),
                  this.options.autoHide && this.hideScrollbar(e)));
          }),
          (e.prototype.onMouseLeaveForAxis = function (e) {
            void 0 === e && (e = "y"),
              ct(this.axis[e].track.el, this.classNames.hover),
              ct(this.axis[e].scrollbar.el, this.classNames.hover),
              this.options.autoHide && this.hideScrollbar(e);
          }),
          (e.prototype.onDragStart = function (e, t) {
            var s;
            void 0 === t && (t = "y");
            var i = nt(this.el),
              a = lt(this.el),
              l = this.axis[t].scrollbar,
              n = "y" === t ? e.pageY : e.pageX;
            (this.axis[t].dragOffset =
              n -
              ((null === (s = l.rect) || void 0 === s
                ? void 0
                : s[this.axis[t].offsetAttr]) || 0)),
              (this.draggedAxis = t),
              ot(this.el, this.classNames.dragging),
              i.addEventListener("mousemove", this.drag, !0),
              i.addEventListener("mouseup", this.onEndDrag, !0),
              null === this.removePreventClickId
                ? (i.addEventListener("click", this.preventClick, !0),
                  i.addEventListener("dblclick", this.preventClick, !0))
                : (a.clearTimeout(this.removePreventClickId),
                  (this.removePreventClickId = null));
          }),
          (e.prototype.onTrackClick = function (e, t) {
            var s,
              i,
              a,
              l,
              n = this;
            void 0 === t && (t = "y");
            var r = this.axis[t];
            if (
              this.options.clickOnTrack &&
              r.scrollbar.el &&
              this.contentWrapperEl
            ) {
              e.preventDefault();
              var o = lt(this.el);
              this.axis[t].scrollbar.rect =
                r.scrollbar.el.getBoundingClientRect();
              var c =
                  null !==
                    (i =
                      null === (s = this.axis[t].scrollbar.rect) || void 0 === s
                        ? void 0
                        : s[this.axis[t].offsetAttr]) && void 0 !== i
                    ? i
                    : 0,
                d = parseInt(
                  null !==
                    (l =
                      null === (a = this.elStyles) || void 0 === a
                        ? void 0
                        : a[this.axis[t].sizeAttr]) && void 0 !== l
                    ? l
                    : "0px",
                  10,
                ),
                p = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                u =
                  ("y" === t ? this.mouseY - c : this.mouseX - c) < 0 ? -1 : 1,
                h = -1 === u ? p - d : p + d,
                m = function () {
                  n.contentWrapperEl &&
                    (-1 === u
                      ? p > h &&
                        ((p -= 40),
                        (n.contentWrapperEl[n.axis[t].scrollOffsetAttr] = p),
                        o.requestAnimationFrame(m))
                      : p < h &&
                        ((p += 40),
                        (n.contentWrapperEl[n.axis[t].scrollOffsetAttr] = p),
                        o.requestAnimationFrame(m)));
                };
              m();
            }
          }),
          (e.prototype.getContentElement = function () {
            return this.contentEl;
          }),
          (e.prototype.getScrollElement = function () {
            return this.contentWrapperEl;
          }),
          (e.prototype.removeListeners = function () {
            var e = lt(this.el);
            this.el.removeEventListener("mouseenter", this.onMouseEnter),
              this.el.removeEventListener(
                "pointerdown",
                this.onPointerEvent,
                !0,
              ),
              this.el.removeEventListener("mousemove", this.onMouseMove),
              this.el.removeEventListener("mouseleave", this.onMouseLeave),
              this.contentWrapperEl &&
                this.contentWrapperEl.removeEventListener(
                  "scroll",
                  this.onScroll,
                ),
              e.removeEventListener("resize", this.onWindowResize),
              this.mutationObserver && this.mutationObserver.disconnect(),
              this.resizeObserver && this.resizeObserver.disconnect(),
              this.onMouseMove.cancel(),
              this.onWindowResize.cancel(),
              this.onStopScrolling.cancel(),
              this.onMouseEntered.cancel();
          }),
          (e.prototype.unMount = function () {
            this.removeListeners();
          }),
          (e.prototype.isWithinBounds = function (e) {
            return (
              this.mouseX >= e.left &&
              this.mouseX <= e.left + e.width &&
              this.mouseY >= e.top &&
              this.mouseY <= e.top + e.height
            );
          }),
          (e.prototype.findChild = function (e, t) {
            var s =
              e.matches ||
              e.webkitMatchesSelector ||
              e.mozMatchesSelector ||
              e.msMatchesSelector;
            return Array.prototype.filter.call(e.children, function (e) {
              return s.call(e, t);
            })[0];
          }),
          (e.rtlHelpers = null),
          (e.defaultOptions = {
            forceVisible: !1,
            clickOnTrack: !0,
            scrollbarMinSize: 25,
            scrollbarMaxSize: 0,
            ariaLabel: "scrollable content",
            classNames: {
              contentEl: "simplebar-content",
              contentWrapper: "simplebar-content-wrapper",
              offset: "simplebar-offset",
              mask: "simplebar-mask",
              wrapper: "simplebar-wrapper",
              placeholder: "simplebar-placeholder",
              scrollbar: "simplebar-scrollbar",
              track: "simplebar-track",
              heightAutoObserverWrapperEl:
                "simplebar-height-auto-observer-wrapper",
              heightAutoObserverEl: "simplebar-height-auto-observer",
              visible: "simplebar-visible",
              horizontal: "simplebar-horizontal",
              vertical: "simplebar-vertical",
              hover: "simplebar-hover",
              dragging: "simplebar-dragging",
              scrolling: "simplebar-scrolling",
              scrollable: "simplebar-scrollable",
              mouseEntered: "simplebar-mouse-entered",
            },
            scrollableNode: null,
            contentNode: null,
            autoHide: !0,
          }),
          (e.getOptions = rt),
          (e.helpers = at),
          e
        );
      })(),
      ut = function (e, t) {
        return (
          (ut =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var s in t)
                Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            }),
          ut(e, t)
        );
      };
    var ht = pt.helpers,
      mt = ht.getOptions,
      ft = ht.addClasses,
      vt = (function (e) {
        function t() {
          for (var s = [], i = 0; i < arguments.length; i++)
            s[i] = arguments[i];
          var a = e.apply(this, s) || this;
          return t.instances.set(s[0], a), a;
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null",
              );
            function s() {
              this.constructor = e;
            }
            ut(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((s.prototype = t.prototype), new s()));
          })(t, e),
          (t.initDOMLoadedElements = function () {
            document.removeEventListener(
              "DOMContentLoaded",
              this.initDOMLoadedElements,
            ),
              window.removeEventListener("load", this.initDOMLoadedElements),
              Array.prototype.forEach.call(
                document.querySelectorAll("[data-simplebar]"),
                function (e) {
                  "init" === e.getAttribute("data-simplebar") ||
                    t.instances.has(e) ||
                    new t(e, mt(e.attributes));
                },
              );
          }),
          (t.removeObserver = function () {
            var e;
            null === (e = t.globalObserver) || void 0 === e || e.disconnect();
          }),
          (t.prototype.initDOM = function () {
            var e,
              t,
              s,
              i = this;
            if (
              !Array.prototype.filter.call(this.el.children, function (e) {
                return e.classList.contains(i.classNames.wrapper);
              }).length
            ) {
              for (
                this.wrapperEl = document.createElement("div"),
                  this.contentWrapperEl = document.createElement("div"),
                  this.offsetEl = document.createElement("div"),
                  this.maskEl = document.createElement("div"),
                  this.contentEl = document.createElement("div"),
                  this.placeholderEl = document.createElement("div"),
                  this.heightAutoObserverWrapperEl =
                    document.createElement("div"),
                  this.heightAutoObserverEl = document.createElement("div"),
                  ft(this.wrapperEl, this.classNames.wrapper),
                  ft(this.contentWrapperEl, this.classNames.contentWrapper),
                  ft(this.offsetEl, this.classNames.offset),
                  ft(this.maskEl, this.classNames.mask),
                  ft(this.contentEl, this.classNames.contentEl),
                  ft(this.placeholderEl, this.classNames.placeholder),
                  ft(
                    this.heightAutoObserverWrapperEl,
                    this.classNames.heightAutoObserverWrapperEl,
                  ),
                  ft(
                    this.heightAutoObserverEl,
                    this.classNames.heightAutoObserverEl,
                  );
                this.el.firstChild;

              )
                this.contentEl.appendChild(this.el.firstChild);
              this.contentWrapperEl.appendChild(this.contentEl),
                this.offsetEl.appendChild(this.contentWrapperEl),
                this.maskEl.appendChild(this.offsetEl),
                this.heightAutoObserverWrapperEl.appendChild(
                  this.heightAutoObserverEl,
                ),
                this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
                this.wrapperEl.appendChild(this.maskEl),
                this.wrapperEl.appendChild(this.placeholderEl),
                this.el.appendChild(this.wrapperEl),
                null === (e = this.contentWrapperEl) ||
                  void 0 === e ||
                  e.setAttribute("tabindex", "0"),
                null === (t = this.contentWrapperEl) ||
                  void 0 === t ||
                  t.setAttribute("role", "region"),
                null === (s = this.contentWrapperEl) ||
                  void 0 === s ||
                  s.setAttribute("aria-label", this.options.ariaLabel);
            }
            if (!this.axis.x.track.el || !this.axis.y.track.el) {
              var a = document.createElement("div"),
                l = document.createElement("div");
              ft(a, this.classNames.track),
                ft(l, this.classNames.scrollbar),
                a.appendChild(l),
                (this.axis.x.track.el = a.cloneNode(!0)),
                ft(this.axis.x.track.el, this.classNames.horizontal),
                (this.axis.y.track.el = a.cloneNode(!0)),
                ft(this.axis.y.track.el, this.classNames.vertical),
                this.el.appendChild(this.axis.x.track.el),
                this.el.appendChild(this.axis.y.track.el);
            }
            pt.prototype.initDOM.call(this),
              this.el.setAttribute("data-simplebar", "init");
          }),
          (t.prototype.unMount = function () {
            pt.prototype.unMount.call(this), t.instances.delete(this.el);
          }),
          (t.initHtmlApi = function () {
            (this.initDOMLoadedElements =
              this.initDOMLoadedElements.bind(this)),
              "undefined" != typeof MutationObserver &&
                ((this.globalObserver = new MutationObserver(
                  t.handleMutations,
                )),
                this.globalObserver.observe(document, {
                  childList: !0,
                  subtree: !0,
                })),
              "complete" === document.readyState ||
              ("loading" !== document.readyState &&
                !document.documentElement.doScroll)
                ? window.setTimeout(this.initDOMLoadedElements)
                : (document.addEventListener(
                    "DOMContentLoaded",
                    this.initDOMLoadedElements,
                  ),
                  window.addEventListener("load", this.initDOMLoadedElements));
          }),
          (t.handleMutations = function (e) {
            e.forEach(function (e) {
              e.addedNodes.forEach(function (e) {
                1 === e.nodeType &&
                  (e.hasAttribute("data-simplebar")
                    ? !t.instances.has(e) &&
                      document.documentElement.contains(e) &&
                      new t(e, mt(e.attributes))
                    : e
                        .querySelectorAll("[data-simplebar]")
                        .forEach(function (e) {
                          "init" !== e.getAttribute("data-simplebar") &&
                            !t.instances.has(e) &&
                            document.documentElement.contains(e) &&
                            new t(e, mt(e.attributes));
                        }));
              }),
                e.removedNodes.forEach(function (e) {
                  1 === e.nodeType &&
                    ("init" === e.getAttribute("data-simplebar")
                      ? t.instances.has(e) &&
                        !document.documentElement.contains(e) &&
                        t.instances.get(e).unMount()
                      : Array.prototype.forEach.call(
                          e.querySelectorAll('[data-simplebar="init"]'),
                          function (e) {
                            t.instances.has(e) &&
                              !document.documentElement.contains(e) &&
                              t.instances.get(e).unMount();
                          },
                        ));
                });
            });
          }),
          (t.instances = new WeakMap()),
          t
        );
      })(pt);
    function gt(e) {
      this.type = e;
    }
    ge && vt.initHtmlApi(),
      document.querySelectorAll("[data-simplebar]").length &&
        document.querySelectorAll("[data-simplebar]").forEach((e) => {
          new vt(e, { autoHide: !1 });
        }),
      (gt.prototype.init = function () {
        const e = this;
        (this.оbjects = []),
          (this.daClassname = "_dynamic_adapt_"),
          (this.nodes = document.querySelectorAll("[data-da]"));
        for (let e = 0; e < this.nodes.length; e++) {
          const t = this.nodes[e],
            s = t.dataset.da.trim().split(","),
            i = {};
          (i.element = t),
            (i.parent = t.parentNode),
            (i.destination = document.querySelector(s[0].trim())),
            (i.breakpoint = s[1] ? s[1].trim() : "767"),
            (i.place = s[2] ? s[2].trim() : "last"),
            (i.index = this.indexInParent(i.parent, i.element)),
            this.оbjects.push(i);
        }
        this.arraySort(this.оbjects),
          (this.mediaQueries = Array.prototype.map.call(
            this.оbjects,
            function (e) {
              return (
                "(" +
                this.type +
                "-width: " +
                e.breakpoint +
                "px)," +
                e.breakpoint
              );
            },
            this,
          )),
          (this.mediaQueries = Array.prototype.filter.call(
            this.mediaQueries,
            function (e, t, s) {
              return Array.prototype.indexOf.call(s, e) === t;
            },
          ));
        for (let t = 0; t < this.mediaQueries.length; t++) {
          const s = this.mediaQueries[t],
            i = String.prototype.split.call(s, ","),
            a = window.matchMedia(i[0]),
            l = i[1],
            n = Array.prototype.filter.call(this.оbjects, function (e) {
              return e.breakpoint === l;
            });
          a.addListener(function () {
            e.mediaHandler(a, n);
          }),
            this.mediaHandler(a, n);
        }
      }),
      (gt.prototype.mediaHandler = function (e, t) {
        if (e.matches)
          for (let e = 0; e < t.length; e++) {
            const s = t[e];
            (s.index = this.indexInParent(s.parent, s.element)),
              this.moveTo(s.place, s.element, s.destination);
          }
        else
          for (let e = t.length - 1; e >= 0; e--) {
            const s = t[e];
            s.element.classList.contains(this.daClassname) &&
              this.moveBack(s.parent, s.element, s.index);
          }
      }),
      (gt.prototype.moveTo = function (e, t, s) {
        t.classList.add(this.daClassname),
          "last" === e || e >= s.children.length
            ? s.insertAdjacentElement("beforeend", t)
            : "first" !== e
            ? s.children[e].insertAdjacentElement("beforebegin", t)
            : s.insertAdjacentElement("afterbegin", t);
      }),
      (gt.prototype.moveBack = function (e, t, s) {
        t.classList.remove(this.daClassname),
          void 0 !== e.children[s]
            ? e.children[s].insertAdjacentElement("beforebegin", t)
            : e.insertAdjacentElement("beforeend", t);
      }),
      (gt.prototype.indexInParent = function (e, t) {
        const s = Array.prototype.slice.call(e.children);
        return Array.prototype.indexOf.call(s, t);
      }),
      (gt.prototype.arraySort = function (e) {
        "min" === this.type
          ? Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? -1
                  : "last" === e.place || "first" === t.place
                  ? 1
                  : e.place - t.place
                : e.breakpoint - t.breakpoint;
            })
          : Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? 1
                  : "last" === e.place || "first" === t.place
                  ? -1
                  : t.place - e.place
                : t.breakpoint - e.breakpoint;
            });
      });
    new gt("min").init(),
      (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      (function () {
        let e = document.querySelector(".burger");
        e &&
          e.addEventListener("click", function (e) {
            n && (t(), document.documentElement.classList.toggle("menu-open"));
          });
      })(),
      (function () {
        const e = document.querySelectorAll("[data-tabs]");
        let t = [];
        if (e.length > 0) {
          const i = (function () {
            if (location.hash) return location.hash.replace("#", "");
          })();
          i && i.startsWith("tab-") && (t = i.replace("tab-", "").split("-")),
            e.forEach((e, s) => {
              e.classList.add("_tab-init"),
                e.setAttribute("data-tabs-index", s),
                e.addEventListener("click", n),
                (function (e) {
                  let s = e.querySelectorAll("[data-tabs-titles]>*"),
                    i = e.querySelectorAll("[data-tabs-body]>*");
                  const a = e.dataset.tabsIndex,
                    l = t[0] == a;
                  if (l) {
                    const t = e.querySelector(
                      "[data-tabs-titles]>._tab-active",
                    );
                    t && t.classList.remove("_tab-active");
                  }
                  i.length &&
                    ((i = Array.from(i).filter(
                      (t) => t.closest("[data-tabs]") === e,
                    )),
                    (s = Array.from(s).filter(
                      (t) => t.closest("[data-tabs]") === e,
                    )),
                    i.forEach((e, i) => {
                      s[i].setAttribute("data-tabs-title", ""),
                        e.setAttribute("data-tabs-item", ""),
                        l && i == t[1] && s[i].classList.add("_tab-active"),
                        (e.hidden = !s[i].classList.contains("_tab-active"));
                    }));
                })(e);
            });
          let a = p(e, "tabs");
          a &&
            a.length &&
            a.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                s(e.itemsArray, e.matchMedia);
              }),
                s(e.itemsArray, e.matchMedia);
            });
        }
        function s(e, t) {
          e.forEach((e) => {
            let s = (e = e.item).querySelector("[data-tabs-titles]"),
              i = e.querySelectorAll("[data-tabs-title]"),
              a = e.querySelector("[data-tabs-body]"),
              l = e.querySelectorAll("[data-tabs-item]");
            (i = Array.from(i).filter((t) => t.closest("[data-tabs]") === e)),
              (l = Array.from(l).filter((t) => t.closest("[data-tabs]") === e)),
              l.forEach((l, n) => {
                t.matches
                  ? (a.append(i[n]),
                    a.append(l),
                    e.classList.add("_tab-spoller"))
                  : (s.append(i[n]), e.classList.remove("_tab-spoller"));
              });
          });
        }
        function l(e) {
          let t = e.querySelectorAll("[data-tabs-title]"),
            s = e.querySelectorAll("[data-tabs-item]");
          const l = e.dataset.tabsIndex;
          const n = (function (e) {
            if (e.hasAttribute("data-tabs-animate"))
              return e.dataset.tabsAnimate > 0
                ? Number(e.dataset.tabsAnimate)
                : 500;
          })(e);
          if (s.length > 0) {
            const r = e.hasAttribute("data-tabs-hash");
            (s = Array.from(s).filter((t) => t.closest("[data-tabs]") === e)),
              (t = Array.from(t).filter((t) => t.closest("[data-tabs]") === e)),
              s.forEach((e, s) => {
                var o;
                t[s].classList.contains("_tab-active")
                  ? (n ? a(e, n) : (e.hidden = !1),
                    r &&
                      !e.closest(".popup") &&
                      ((o = (o = `tab-${l}-${s}`)
                        ? `#${o}`
                        : window.location.href.split("#")[0]),
                      history.pushState("", "", o)))
                  : n
                  ? i(e, n)
                  : (e.hidden = !0);
              });
          }
        }
        function n(e) {
          const t = e.target;
          if (t.closest("[data-tabs-title]")) {
            const s = t.closest("[data-tabs-title]"),
              i = s.closest("[data-tabs]");
            if (
              !s.classList.contains("_tab-active") &&
              !i.querySelector("._slide")
            ) {
              let e = i.querySelectorAll("[data-tabs-title]._tab-active");
              e.length &&
                (e = Array.from(e).filter(
                  (e) => e.closest("[data-tabs]") === i,
                )),
                e.length && e[0].classList.remove("_tab-active"),
                s.classList.add("_tab-active"),
                l(i);
            }
            e.preventDefault();
          }
        }
      })(),
      (function () {
        const e = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]",
        );
        e.length &&
          e.forEach((e) => {
            e.dataset.placeholder = e.placeholder;
          }),
          document.body.addEventListener("focusin", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = ""),
              t.classList.add("_form-focus"),
              t.parentElement.classList.add("_form-focus"),
              h.removeError(t));
          }),
          document.body.addEventListener("focusout", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
              t.classList.remove("_form-focus"),
              t.parentElement.classList.remove("_form-focus"),
              t.hasAttribute("data-validate") && h.validateInput(t));
          });
      })(),
      (function (t) {
        e.popup && e.popup.open("some");
        const s = document.forms;
        if (s.length)
          for (const e of s)
            e.addEventListener("submit", function (e) {
              i(e.target, e);
            }),
              e.addEventListener("reset", function (e) {
                const t = e.target;
                h.formClean(t);
              });
        async function i(e, s) {
          if (0 === (t ? h.getErrors(e) : 0)) {
            if (e.hasAttribute("data-ajax")) {
              s.preventDefault();
              const t = e.getAttribute("action")
                  ? e.getAttribute("action").trim()
                  : "#",
                i = e.getAttribute("method")
                  ? e.getAttribute("method").trim()
                  : "GET",
                l = new FormData(e);
              e.classList.add("_sending");
              const n = await fetch(t, { method: i, body: l });
              if (n.ok) {
                await n.json();
                e.classList.remove("_sending"), a(e);
              } else alert("Ошибка"), e.classList.remove("_sending");
            } else e.hasAttribute("data-dev") && (s.preventDefault(), a(e));
          } else {
            s.preventDefault();
            const t = e.querySelector("._form-error");
            t && e.hasAttribute("data-goto-error") && u(t, !0, 1e3);
          }
        }
        function a(t) {
          document.dispatchEvent(
            new CustomEvent("formSent", { detail: { form: t } }),
          ),
            setTimeout(() => {
              if (e.popup) {
                const s = t.dataset.popupMessage;
                s && e.popup.open(s);
              }
            }, 0),
            h.formClean(t),
            d(`[Формы]: ${"Форма отправлена!"}`);
        }
      })(!0);
  })();
})();

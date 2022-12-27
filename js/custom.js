var percentFlag = false; // 节流阀
function essayScroll() {
  let a = document.documentElement.scrollTop || window.pageYOffset; // 卷去高度
  const waterfallResult = a % document.documentElement.clientHeight; // 卷去一个视口
  result <= 99 || (result = 99);

  if (
    !percentFlag &&
    waterfallResult + 100 >= document.documentElement.clientHeight &&
    document.querySelector("#waterfall")
  ) {
    // console.info(waterfallResult, document.documentElement.clientHeight);
    setTimeout(() => {
      waterfall("#waterfall");
    }, 500);
  } else {
    setTimeout(() => {
      document.querySelector("#waterfall") && waterfall("#waterfall");
    }, 500);
  }

  const r = window.scrollY + document.documentElement.clientHeight;

  let p = document.getElementById("post-comment") || document.getElementById("footer");

  (p.offsetTop + p.offsetHeight / 2 < r || 90 < result) && (percentFlag = true);
}
function replaceAll(e, n, t) {
  return e.split(n).join(t);
}
var wangxi = {
  diffDate: function (d, more = false) {
    const dateNow = new Date();
    const datePost = new Date(d);
    const dateDiff = dateNow.getTime() - datePost.getTime();
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;

    let result;
    if (more) {
      const monthCount = dateDiff / month;
      const dayCount = dateDiff / day;
      const hourCount = dateDiff / hour;
      const minuteCount = dateDiff / minute;

      if (monthCount >= 1) {
        result = datePost.toLocaleDateString().replace(/\//g, "-");
      } else if (dayCount >= 1) {
        result = parseInt(dayCount) + " " + GLOBAL_CONFIG.date_suffix.day;
      } else if (hourCount >= 1) {
        result = parseInt(hourCount) + " " + GLOBAL_CONFIG.date_suffix.hour;
      } else if (minuteCount >= 1) {
        result = parseInt(minuteCount) + " " + GLOBAL_CONFIG.date_suffix.min;
      } else {
        result = GLOBAL_CONFIG.date_suffix.just;
      }
    } else {
      result = parseInt(dateDiff / day);
    }
    return result;
  },
  changeTimeInEssay: function () {
    document.querySelector("#bber") &&
      document.querySelectorAll("#bber time").forEach(function (e) {
        var t = e,
          datetime = t.getAttribute("datetime");
        (t.innerText = wangxi.diffDate(datetime, true)), (t.style.display = "inline");
      });
  },
  reflashEssayWaterFall: function () {
    document.querySelector("#waterfall") &&
      setTimeout(function () {
        waterfall("#waterfall");
        document.getElementById("waterfall").classList.add("show");
      }, 500);
  },
  commentText: function (e) {
    var n = document.getElementsByClassName("el-textarea__inner")[0],
      t = document.createEvent("HTMLEvents");
    if (!n) return;
    t.initEvent("input", !0, !0);
    var o = replaceAll(e, "\n", "\n> ");
    (n.value = "> " + o + "\n\n"), n.dispatchEvent(t);
    var i = document.querySelector("#post-comment").offsetTop;
    window.scrollTo(0, i - 80),
      n.focus(),
      n.setSelectionRange(-1, -1),
      document.getElementById("comment-tips") && document.getElementById("comment-tips").classList.add("show");
  },
  initIndexEssay: function () {
    setTimeout(() => {
      let essay_bar_swiper = new Swiper(".essay_bar_swiper_container", {
        passiveListeners: true,
        direction: "vertical",
        loop: true,
        autoplay: {
          disableOnInteraction: true,
          delay: 3000,
        },
        mousewheel: true,
      });

      let essay_bar_comtainer = document.getElementById("bbtalk");
      if (essay_bar_comtainer !== null) {
        essay_bar_comtainer.onmouseenter = function () {
          essay_bar_swiper.autoplay.stop();
        };
        essay_bar_comtainer.onmouseleave = function () {
          essay_bar_swiper.autoplay.start();
        };
      }
    }, 100);
  },
};

wangxi.initIndexEssay();
wangxi.changeTimeInEssay();
wangxi.reflashEssayWaterFall();

if (document.querySelector('#bber-talk')) {
      var swiper = new Swiper('.swiper-container', {
        direction: 'vertical', // 垂直切换选项
        loop: true,
        autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true
      },
      });
    }
    
function addFriendLink() {
  // Select the element with the class `el-textarea__inner`
  let textarea = document.querySelector('.el-textarea__inner');
  // Set the value of the textarea
  textarea.value = "昵称（请勿包含博客等字样）：\n网站地址（要求博客地址，请勿提交个人主页）：\n头像图片url（请提供尽可能清晰的图片，我会上传到我自己的图床）：\n描述：\n站点截图（可选）：";
}


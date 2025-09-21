/**
 * 解析url参数
 * @example ?id=12345&a=b
 * @return Object {id:12345,a:b}
 */
function urlParse(url) {
  let obj = {};
  let reg = /[?&][^?&]+=[^?&]+/g;
  let arr = url.match(reg);
  if (arr) {
    arr.forEach(item => {
      let tempArr = item.substring(1).split("=");
      let key = decodeURIComponent(tempArr[0]);
      let val = decodeURIComponent(tempArr.splice(1).join("="));
      obj[key] = val;
    });
  }
  return obj;
}

const getNetworkType = () => {
  uni.getNetworkType({
    success: res => {
      if (res.networkType === "none") {
        uni.showToast({
          title: "网络好像有点问题,请检查后重试！",
          duration: 2000,
          icon: "none"
        });
        let pages = getCurrentPages();
        if (pages.length) {
          let route = pages[pages.length - 1].route;
          if (route !== "pages/empty/empty") {
            uni.navigateTo({
              url: `/pages/empty/empty?type=wifi`
            });
          }
        } else {
          uni.navigateTo({
            url: `/pages/empty/empty?type=wifi`
          });
        }
      }
    }
  });
};

const throttle = (fn, that, gapTime) => {
  // export function throttle(fn, gapTime) {
  if (gapTime == null || gapTime == undefined) {
    gapTime = 1800;
  }
  let _lastTime = that.lastTime;
  let _nowTime = +new Date();
  if (_nowTime - _lastTime > gapTime || !_lastTime) {
    fn.apply(that, arguments); //将this和参数传给原函数
    that.lastTime = _nowTime;
  }
};

/**
 * 计算传秒数的倒计时【天、时、分、秒】
 * @param seconds
 * @returns {{day : *, hours : *, minutes : *, seconds : *}}
 */
const countTimeDown = seconds => {
  const leftTime = time => {
    if (time < 10) time = "0" + time;
    return time + "";
  };
  return {
    day: leftTime(parseInt(seconds / 60 / 60 / 24, 10)),
    hours: leftTime(parseInt((seconds / 60 / 60) % 24, 10)),
    minutes: leftTime(parseInt((seconds / 60) % 60, 10)),
    seconds: leftTime(parseInt(seconds % 60, 10))
  };
};

/**
 * 计算当前时间到第二天0点的倒计时[秒]
 * @returns {number}
 */
const theNextDayTime = () => {
  const nowDate = new Date();
  const time =
    new Date(
      nowDate.getFullYear(),
      nowDate.getMonth(),
      nowDate.getDate() + 1,
      0,
      0,
      0
    ).getTime() - nowDate.getTime();
  return parseInt(time / 1000);
};
// 防抖
const debounce = (fn, delay) => {
  // 时间期限
  var delays = delay || 200;
  var timer;
  // 闭包
  return function() {
    // 考虑作用域，上下文环境，apply需要用到this对象
    var th = this;
    // 接收的参数用 ES6 中的 rest 参数统一存储到变量 args 中。arguments就是传入的参数数组,而且个数可以不确定的传回给fn（不确定函数到底有多少个参数，用arguments来接收）
    var args = arguments;
    // 判断还在定时，说明当前正在一个计时过程中，并且又触发了相同事件。所以要取消当前的计时，重新开始计时
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      timer = null;
      // 执行方法
      fn.apply(th, args);
    }, delays);
  };
};


// 计算距离
function calculateHaversineDistance(lat1, lon1, lat2, lon2) {
		const R = 6371; // 地球半径，单位：千米
		const dLat = (lat2 - lat1) * (Math.PI / 180);
		const dLon = (lon2 - lon1) * (Math.PI / 180);
		const a =
				Math.sin(dLat / 2) * Math.sin(dLat / 2) +
				Math.cos(lat1 * (Math.PI / 180)) *
				Math.cos(lat2 * (Math.PI / 180)) *
				Math.sin(dLon / 2) * Math.sin(dLon / 2);
		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		return R * c;
}

// 处理商品列表当前距离商铺位置
function distanceList(list, cityInfo) {
	let newList = list.map(item => {
		let distance = ''
		// 当前位置存在
		if (cityInfo.lat) {
			let storeCenterList = item.storeCenter.split(',')
			distance = calculateHaversineDistance(
					cityInfo.lat,
					cityInfo.lng,
					Number(storeCenterList[0]),
					Number(storeCenterList[1])
			);
		}
		return {
			...item,
			distance: distance > 1 ? `${distance.toFixed(2)}km` : distance ? `${parseInt(distance * 1000)}m` : '1m',
		}
	})
	return newList;
}
// 语言分类
 function backLang(obj){
	 if(!obj){
		 return
	 }
  const langObj = typeof obj === 'string' ? JSON.parse(obj) : obj;
  const lang = this.$store.state.lang;
  if (lang && langObj[lang]) {
    return langObj[lang];

  }
  return langObj['zh-CN'];
 
}
function sortAddress (wallet){
  return `${wallet.slice(0, 7)}***${wallet.slice(-7)}`
   
};
function sortEmail (email){
  return `***${email.slice(-12)}`
   
};

export { sortEmail,sortAddress,backLang,getNetworkType, throttle, countTimeDown, theNextDayTime, debounce, calculateHaversineDistance, distanceList };

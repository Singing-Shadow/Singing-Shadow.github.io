// 切换到新一张图片
function goToNewImage(i) {
  // 获取当前图片的索引
  let currentIndex = getCurrentIndex();
  // 计算新一张图片的索引
  let newIndex = currentIndex + i;

  // 如果是第一张图片之前，则循环到最后一张图片
  if (newIndex < 0) {
    newIndex = JSONFolder.length - 1;
  }
  // 如果是最后一张图片之后，则循环到第一张图片
  else if (newIndex >= JSONFolder.length) {
    newIndex = 0;
  }

  updateImage(newIndex);
}

// 获取当前图片的索引
function getCurrentIndex() {
  // 解析URL中的查询参数
  const params = getQueryParams();
  // 并从json文件中找到对应的图片序号
  return params.id - 1;
}

// 更新图片
function updateImage(index) {
  // 获取图片元素
  const imgElement = document.querySelector('#image img');

  // 更新图片的 src 和 alt 属性
  imgElement.src = JSONFolder[index].href;
  imgElement.alt = JSONFolder[index].name;

  // 更新图片名称元素
  const imgNameElement = document.getElementById('name');
  imgNameElement.textContent = JSONFolder[index].name;

  // 更新图片作者元素
  const imgAuthorElement = document.getElementById('author');
  imgAuthorElement.textContent = JSONFolder[index].author;

  // 更新图片标签元素
  const imgLabelElement = document.getElementById('label');
  imgLabelElement.innerHTML = ''; // 清空原有标签
  JSONFolder[index].label.forEach(label => {
    const spanElement = document.createElement('span');
    spanElement.textContent = "#" + label;
    imgLabelElement.appendChild(spanElement);
  });

  // 更新当前图片的索引到 URL 中
  history.replaceState({}, '', `?id=${index + 1}`);
}

// 读取键盘
document.addEventListener('keydown', (event) => {
  // 获取按下的键码
  const key = event.key;

  // 如果按下的是左箭头键
  if (key === 'ArrowLeft') {
    goToNewImage(-1);
    console.log("left");
  }
  // 如果按下的是右箭头键
  else if (key === 'ArrowRight') {
    goToNewImage(1);
    console.log("right");
  }
});

// 左右滑动切换图片
document.addEventListener('DOMContentLoaded', (event) => {
  // 初始化触摸事件相关变量
  let startX;
  let startY;
  let endX;
  let endY;

  // 处理触摸开始事件
  function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];
    startX = firstTouch.clientX;
    startY = firstTouch.clientY;
    // 获取触摸开始时间
    startTime = new Date().getTime();
  }
  // 处理触摸移动事件
  function handleTouchMove(evt) {
    if (!startX || !startY) {
      return;
    }
    endX = evt.touches[0].clientX;
    endY = evt.touches[0].clientY;
  }
  // 处理触摸结束事件
  function handleTouchEnd() {
    // 如果触摸开始和结束位置存在
    if (!startX || !startY || !endX || !endY) {
      return;
    }

    // 获取触摸结束时间
    const endTime = new Date().getTime();
    // 计算触摸持续时间
    const elapsedTime = endTime - startTime;

    // 如果触摸持续时间在1秒以内
    if (elapsedTime <= 1000) {
      // 计算触摸移动距离
      const diffX = endX - startX;
      const diffY = endY - startY;

      // 如果水平移动距离大于垂直移动距离的1.5倍，则判定为左右滑动
      if (Math.abs(diffX) > Math.abs(diffY) * 1.5) {
        if (diffX > 0) {
          // 右滑动作
          goToNewImage(-1);
        }
        else {
          // 左滑动作
          goToNewImage(1);
        }
      }
    }

    // 重置触摸事件相关变量
    startX = null;
    startY = null;
    endX = null;
    endY = null;
  }

  // 添加触摸事件监听器
  document.addEventListener('touchstart', handleTouchStart, false);
  document.addEventListener('touchmove', handleTouchMove, false);
  document.addEventListener('touchend', handleTouchEnd, false);
});
import { JSONconfig } from './constants.js';
import { index, updateImage, changeIndex } from '../js/imageInfo.js';

// 切换到新一张图片
async function goToNewImage(i) {
  // 计算新一张图片的索引
  let newIndex = index + i;

  // 如果是第一张图片之前，则循环到最后一张图片
  if (newIndex < 0) {
    changeIndex(JSONconfig.dataNum - 1);
  }
  // 如果是最后一张图片之后，则循环到第一张图片
  else if (newIndex >= JSONconfig.dataNum) {
    changeIndex(0);
  }
  else {
    changeIndex(newIndex);
  }

  updateImage();
}

// 添加切换图片监听器
export function addChangeImageListener() {
  // 左右箭头键切换图片
  window.addEventListener('keydown', (event) => {
    // 获取按下的键码
    const key = event.key;

    // 如果按下的是左箭头键
    if (key === 'ArrowLeft') {
      goToNewImage(-1);
      console.log('left');
    }
    // 如果按下的是右箭头键
    else if (key === 'ArrowRight') {
      goToNewImage(1);
      console.log('right');
    }
  });

  // 左右滑动切换图片
  window.addEventListener('DOMContentLoaded', () => {
    // 初始化触摸事件相关变量
    let startX;
    let startY;
    let endX;
    let endY;
    let startTime;

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
      startTime = null;
    }

    // 添加触摸事件监听器
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);
    document.addEventListener('touchend', handleTouchEnd, false);
  });
}

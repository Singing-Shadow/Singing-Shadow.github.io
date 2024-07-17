import { JSONconfig, pictureconfig } from './constants.js'
let currentIndex = pictureconfig.currentIndex;
let N = pictureconfig.n;

// 修改当前索引
export function changeCurrentIndex(index) {
  currentIndex = index;
}

// 修改每次需加载的内容数量
export function changeN(n) {
  N = n;
}

// 加载更多内容
export async function loadMoreStuff(Path, createPathElement, judgePicture) {
  const stuffPath = document.getElementById(Path);
  const JSONFolder = await JSONconfig.JSONFolder;

  // 加载接下来的 n 项内容
  for (let i = 0; i < N && currentIndex < JSONFolder.length; currentIndex++) {
    const path = JSONFolder[currentIndex];
    // 跳过 pictureFolder 数组中不合条件的元素
    if (!judgePicture(path)) {
      continue;
    }
    console.log('loading');
    // 创建新内容元素并添加到指定容器中
    const imgElement = createPathElement(path);
    stuffPath.appendChild(imgElement);
    // 更新当前索引
    i++;
  }
}

// 添加懒加载监听器
export function addLazyLoadListener(Path, createPathElement, judgePicture) {
  // 当页面滚动时尝试加载更多内容
  window.addEventListener('scroll', () => {
    const footer = document.getElementById('footer');
    const rect = footer.getBoundingClientRect();
    // 检查页脚是否可见
    const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

    // 如果页脚可见，则加载更多内容
    if (isVisible) {
      loadMoreStuff(Path, createPathElement, judgePicture);
    }
  });
}
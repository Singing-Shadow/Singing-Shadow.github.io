// 懒加载：加载更多内容
function loadMoreStuff(Path, N) {
    const stuffPath = document.getElementById(Path);

    // 加载接下来的 n 项内容
    for (let i = 0; i < N && currentIndex < JSONFolder.length; currentIndex++) {
        const path = JSONFolder[currentIndex];
        // 跳过 pictureFolder 数组中作者不是 "MiyU" 的元素
        if (judgePicture(path)) {
            currentIndex++;
            continue;
        }
        console.log("loading");
        // 创建新内容元素并添加到指定容器中
        const imgElement = createPathElement(path);
        stuffPath.appendChild(imgElement);
        // 更新当前索引
        i++;
    }
}

// 懒加载：添加滚动事件监听器，当页面滚动时调用 handleScroll 函数
document.addEventListener('scroll', () => {
    const footer = document.getElementById("footer");
    const rect = footer.getBoundingClientRect();
    // 检查页脚是否可见
    const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

    // 如果页脚可见，则加载更多图片
    if (isVisible) {
        loadMoreStuff(Path, N);
    }
});
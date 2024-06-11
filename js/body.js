// header
document.getElementById("header").innerHTML = `
    <b class="title">画廊</b>
`
// nav
document.getElementById("nav").innerHTML = `
    <ul class="numberList">
        <li class="number">
            <a href="main.html">首页</a>
        </li>
        <li class="number">
            分类
            <ul class="menu">
                <li> <a href="gallery.html">总画廊</a> </li>
                <li> <a href="https://www.pixiv.net">pixiv</a> </li>
                <li> <a href="MiyU.html">MiyU专栏</a> </li>
                <li> <a href="imageList.html">插画列表</a> </li>
                <li> <a href="">教程</a> </li>
                <li> <a href="">其它</a> </li>
            </ul>
        </li>
        <li class="number">
            我的
            <ul class="menu">
                <li> <a href="https://dylanyu233.rbind.io">友情链接1</a> </li>
                <li> <a href="https://github.com/MrRightXingYue">友情链接2</a> </li>
                <li> <a href="home.html">我的</a> </li>
            </ul>
        </li>
    </ul>
`
// footer
document.getElementById("footer").innerHTML = `
    <p>&copy; 2024 画廊</p>
`

// 禁止拖动
document.addEventListener('dragstart', function (event) {
    event.preventDefault();
});

// 禁止右键菜单
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});
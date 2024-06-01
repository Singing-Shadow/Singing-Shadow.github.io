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
                <li> <a href="gallery.html">我的图廊</a> </li>
                <li> <a href="https://www.pixiv.net">pixiv</a> </li>
                <li> <a href="">教程</a> </li>
                <li> <a href="">插画列表</a> </li>
                <li> <a href="https://www.pixiv.net/users/25782197">MiyU专栏</a> </li>
                <li> <a href="">其它</a> </li>
            </ul>
        </li>
        <li class="number">
            我的
            <ul class="menu">
                <li> <a href="https://github.com/Singing-Shadow">我的GitHub</a> </li>
                <li> <a href="https://dylanyu233.rbind.io/">好友博客</a> </li>
                <li> <a href="https://github.com/MrRightXingYue">好友GitHub</a> </li>
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
document.addEventListener('dragstart', function(event) {
    event.preventDefault();
});

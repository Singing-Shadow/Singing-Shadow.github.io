// ------------constants------------

// 图片信息文件的相对路径
export const filePath = '../json/image.json';
// 侧边栏列表选项
export const asideListItems = [
  [
    { href: 'main.html', text: '首页' },
    { href: 'gallery.html', text: 'Pising' },
    { href: 'imageList.html', text: '插画列表' },
    { href: 'MiyU.html', text: 'MiyU专栏' }
  ],
  [
    { href: 'https://www.pixiv.net', text: 'Pixiv' },
    { href: 'https://arcwiki.mcd.blue', text: 'Arcaea' }
  ],
  [
    { href: 'https://dylanyu233.rbind.io', text: '友情链接1' },
    { href: 'https://github.com/MrRightXingYue', text: '友情链接2' },
    { href: 'home.html', text: '我的' }
  ]
];
// ------------config------------

// JSON文件配置
export const JSONconfig = {
  // 存储读取到的图片数据
  JSONFolder: fetchJSON(),
  // 图片数量
  dataNum: 60
};
// 内容加载配置
export const pictureconfig = {
  // 每次需加载的内容数量
  n: 8,
  // 当前加载到的内容索引
  currentIndex: 0,
  // 内容选择判断条件
  flag: `MiyU`,
  // 符合条件内容数目
  count: 0
};
// 搜索配置
export const searchconfig = {
  // 搜索框输入值
  searchContest: ``
};
// ------------function------------

// 获取图片信息文件
async function fetchJSON() {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error('网络响应不正常');
    }
    const pictureFolder = await response.json();
    return pictureFolder;
  } catch (error) {
    console.error('Error fetching JSON:', error);
    return null;
  }
}

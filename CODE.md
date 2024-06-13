# 变量、函数、监听器、注释统一总结管理

[toc]

## 变量

### filePath：

- 作用：定义 JSON 文件的相对路径。
- 数据类型：string
- 所在文件：gallery.js、imageInfo.js、imageList.js、MiyU.js

### JSONFolder：

- 作用：存储从 JSON 文件中获取的图片数据。
- 数据类型：object
- 所在文件：gallery.js、imageInfo.js、imageList.js、MiyU.js

### currentIndex：

- 作用：当前加载到的图片索引。
- 数据类型：number
- 所在文件：gallery.js、imageInfo.js、imageList.js、MiyU.js

### Path：

- 作用：指定加载图片展示区域的 ID。
- 数据类型：string
- 所在文件：gallery.js、imageList.js、MiyU.js

### N：

- 作用：每页加载的图片数量。
- 数据类型：number
- 所在文件：gallery.js、imageList.js、MiyU.js

## 函数
### fetch(filePath)：

- 作用：使用 Fetch API 获取 JSON 文件。

- 输入参数：

  > - 'filePath'：字符串，指定监视选择起点

- 返回值：

  > - 'Promise'：对象，不知道

- 所在文件：gallery.js、imageList.js、MiyU.js

### response.json()：

- 作用：将 Fetch API 的响应解析为 JSON 数据。

- 输入参数：

  > - 'void'：无

- 返回值：

  > - 'Promise<any>'：不知道，不知道

- 所在文件：gallery.js、imageList.js、MiyU.js

### createPathElement(picture)：

- 作用：创建并返回包含图片信息的容器元素。

- 输入参数：

  > - 'picture'：对象，表示图片的相关信息

- 返回值：

  > - 'HTMLElement'：对象，包含图片信息的容器元素

- 所在文件：gallery.js、imageList.js、MiyU.js

### judgePicture(picture)：

- 作用：判断图片是否符合条件。

- 输入参数：

  > - 'picture'：对象，表示图片的相关信息

- 返回值：

  > - 'True\False'：布尔值，判断图片是否符合条件

- 所在文件：gallery.js、imageList.js、MiyU.js

### getQueryParams()：

- 作用：解析 URL 中的查询参数。

- 输入参数：

  > - 'void'：无

- 返回值：

  > - 'params'：对象，不知道

- 所在文件：imageInfo.js

### loading(picture)：

- 作用：创建并返回包含图片信息的容器元素。

- 输入参数：

  > - 'picture'：对象，表示图片的信息

- 返回值：

  > - 'HTMLElement'：对象，不知道

- 所在文件：imageInfo.js

### goToNewImage(i)：

- 作用：切换到新的图片。

- 输入参数：

  > - 'i'：数值，表示图片索引的增量

- 返回值：

  > - 'void'：无

- 所在文件：imageInfo.js

### getCurrentIndex()：

- 作用：获取当前图片的索引。

- 输入参数：

  > - 'void'：无

- 返回值：

  > - 'params.id - 1'：数值，表示图片索引的增量

- 所在文件：imageInfo.js

### updateImage(index)：

- 作用：更新图片信息。

- 输入参数：

  > - 'index'：数值，表示图片的新索引

- 返回值：

  > - 'void'：无

- 所在文件：imageInfo.js

### createElement()：

- 作用：创建图片列表展示区域的 HTML 结构。

- 输入参数：

  > - 'void'：无

- 返回值：

  > - 'void'：无

- 所在文件：imageList.js

### loadMoreStuff(Path, N)：

- 作用：初始化加载指定数量的图片。

- 输入参数：

  > - 'Path'：字符串，表示图片展示区域的 ID
  > - 'N'：数值，表示每页加载的图片数量

- 返回值：

  > - 'void'：无

- 所在文件：lazyLoad.js

## 监听器

### document.addEventListener('DOMContentLoaded', (event) => { ... })：

- 作用：加载页眉、导航栏和页尾。

- 所在文件：body.js

### document.addEventListener('dragstart', (event) => { ... })：

- 作用：阻止拖动事件。

- 所在文件：body.js

### document.addEventListener('contextmenu', (event) => { ... })：

- 作用：阻止右键菜单事件。

- 所在文件：body.js

### document.addEventListener('selectstart', (event) => { ... })：

- 作用：阻止文本选择事件（被注释掉了）。
- 所在文件：body.js

### document.addEventListener('keydown', (event) => { ... })：

- 作用：监听键盘事件，左右箭头键切换图片。

- 所在文件：imageInfo.js

### document.addEventListener('DOMContentLoaded', (event) => { ... })：

- 作用：监听键盘事件，左右箭头键切换图片。

- 所在文件：imageInfo.js

### document.addEventListener('scroll', () => {...})：

- 作用：该监听器在页面滚动时触发。它会检查页脚 (`footer`) 元素是否在视口内，如果在视口内，则调用 `loadMoreStuff(Path, N)` 函数加载更多图片。

- 所在文件：lazyLoad.js
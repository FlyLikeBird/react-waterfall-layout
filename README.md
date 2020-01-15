# 基于react实现的一个瀑布流卡片布局
## 安装步骤
    
    # 克隆项目仓库到本地
    git clone git@github.com:FlyLikeBird/react-waterfall-layout.git
    
    # 安装项目依赖
    npm i (or yarn)
    
    # 开启本地服务http://localhost:3000即可运行
    npm start
## 组件介绍
  - 将想要瀑布流展示的视图以data=[`<div><JSX/></div>`,...]（`<JSX/>`指任何符合规范的组件都行)的格式以props的形式传递给`<Waterfall data={data}/>`组件即可
  - 支持列数切换功能，可展示6列/4列/2列
  - 支持加载功能
## 组件预览
* 瀑布流6列
![瀑布流6列](./record/waterfall1.png)
* 瀑布流4列
![瀑布流4列](./record/waterfall2.png)
  

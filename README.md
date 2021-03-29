#### 介绍

# HOMEWORK1

![img](./public/logo512.png)

react-lesson。 gitee page: http://citos.gitee.io/react-lesson/

#### 从脚手架工程做起

npm install -g create-react-app
cd C:\Project\gitee  
create-react-app react-lesson

#### 从 git 工程做起

- 下载 git 工程
  C:\Project\gitee  
  git clone git@gitee.com:citos/react-lesson.git

- 安装  
  cd react-lesson  
  npm install

- 启动  
  在.env 文件指定端口，例如：PORT=9000  
  npm start

- 打包  
  npm run build  
  生成文件位于 C:\Project\gitee\react-lesson\build

#### 创建 gh-pages 分支

在 gitee 页面[https://gitee.com/citos/react-lesson/branches](https://gitee.com/citos/react-lesson/branches)新建分支 gh-pages
或命令行  
cd C:\Project\gitee\react-lesson  
git branch gh-pages  
git checkout gh-pages  
git push origin gh-pages

#### 提交 gh-pages 分支

C:\Project\gitee\react-lesson\build  
git init  
git add -A  
git commit -m "deploy pages"  
git push -f git@gitee.com:citos/react-lesson.git master:gh-pages

#### 设置 Gitee Pages 服务

在 git 页面[https://gitee.com/citos/react-lesson/pages](http://gitee.com/citos/react-lesson/pages)选择部署分支 gh-pages  
访问地址： http://citos.gitee.io/react-lesson

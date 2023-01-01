---
title: Hexo博客搭建教程（1）
abbrlink: 3b9ae59c
date: 2022-12-23 12:30:02
tags: hexo
categories: hexo搭建
cover: https://cdn.wangxi.online/postimg/wangxitest.github.io.png
---
# 前言

我于今年10月末开始接触Hexo博客，我一眼就看中了Butterfly主题，嘻嘻嘻，有很多同学问我是怎么搭建的，现在我来写个教程，嘻嘻嘻。这部分有参考[Fomalhaut🥝](https://www.fomal.cc/)大佬的教程。

# 必要环境的安装

{% radio green, 操作系统：Windows10 or Linux %}
{% radio green, Node %}
{% radio green, Git %}
{% radio green, Hexo %}
{% radio green, 文本编辑器(强烈推荐Vscode和Typora) %}
{% radio green, GitHub帐号 or Vercel账号 or 腾讯云账号 %}
{% radio green, 一个域名（强烈推荐买个域名） %}
{% radio green, 云服务器（可选） %}
{% tabs test4 %}
<!-- tab Windows系统 -->

# Node的安装

打开Node官网，下载和自己系统相配的Node的安装程序，否则会出现安装问题。下载地址：https://nodejs.org/en/download/ 我个人的版本是v16.18.1![](https://cdn.wangxi.online/postimg/node.png)

下载后安装，安装的目录可以使用默认目录【C:/Program Files/nodejs/】，也可以自定义路径。

安装完成后，检查是否安装成功。在键盘按下win + R键，输入CMD，然后回车，打开CMD窗口，执行node -v命令，看到版本信息，则说明安装成功。

修改npm源。npm下载各种模块，默认是从国外服务器下载，速度较慢，建议配置成淘宝镜像。打开CMD窗口，运行如下命令:

``` markdown
npm config set registry https://registry.npm.taobao.org
```

# Git安装

进入官网：https://git-scm.com/downloads ，由于官网下载太慢可以通过淘宝的开源镜像下载 网址：https://registry.npmmirror.com/binary.html?path=git-for-windows/v2.36.1.windows.1/ ，下载版本更具自己的需求选择即可。

![](https://cdn.wangxi.online/postimg/git%20install.png)

下载后傻瓜式安装Git即可，安装的目录可以使用默认目录【C:/Program Files/Git】，也可以自定义路径。

一共安装了三个软件

- `Git CMD` 是windows 命令行的指令风格
- `Git Bash` 是linux系统的指令风格（建议使用）
- `Git GUI`是图形化界面（新手学习不建议使用）

常用命令

```shell
git config -l  //查看所有配置
git config --system --list //查看系统配置
git config --global --list //查看用户（全局）配置
```

配置用户名和邮箱

```shell
git config --global user.name "你的用户名"
git config --global user.email "你的邮箱"
```

通过`git config -l` 检查是否配置成功，至此git安装及配置全部完成。

![](https://cdn.wangxi.online/postimg/gitconfig.png)

# 安装Hexo

在您想要存放博客的位置新建一个Hexo文件夹，并在文件夹里右键`Git BASH`输入如下命令安装Hexo

```markdown
   npm install -g hexo-cli
```

安装完后输入hexo -v验证是否安装成功。

![](https://cdn.wangxi.online/postimg/hexo%20-v.png)

# Github注册与创建仓库

进入官网 https://github.com/

![](https://cdn.wangxi.online/postimg/githubregister.png)

点击右上角的 Sign up(注册)
![](https://bu.dusays.com/2022/05/12/627d2c05ee628.png)

填写自己的邮箱、密码、用户名等信息，然后用邮箱验证即可完成。

注册完成后，点击右上角的`+`按钮，选择`New repository`，创建一个`<用户名>.github.io`的仓库。

![](https://cdn.wangxi.online/postimg/newrepo.png)

- 仓库的格式必须为：<用户名>.github.io

- Description：为描述仓库（选填）

- 勾选 Initialize this repository with a README 初始化一个 [README.md](http://readme.md/) 文件

- 点击 Creat repository 进行创建

![](https://cdn.wangxi.online/postimg/io.png)

# 连接至Github

执行以下命令生成ssh公钥，此公钥用于你的计算机连接Github

```shell
ssh-keygen -t rsa -C "你的邮箱"
```

之后打开C盘下用户文件夹下的.ssh的文件夹，会看到 id_rsa.pub

![](https://cdn.wangxi.online/postimg/idssh.png)

用记事本打开上述图片中的公钥（id_rsa.pub），复制里面的内容，然后开始在github中配置ssh密钥。

![](https://cdn.wangxi.online/postimg/id%20pub.png)

将 SSH KEY 配置到 GitHub，进入github，点击右上角头像 选择`settings`，进入设置页后选择 `SSH and GPG keys`，名字随便起，公钥填到`Key`那一栏。

![](https://cdn.wangxi.online/postimg/settingsgit.png)

![](https://cdn.wangxi.online/postimg/ssh%20keys.png)

![](https://cdn.wangxi.online/postimg/paste.png)

测试连接，输入以下命令

```shell
ssh -T git@github.com
```

![](https://cdn.wangxi.online/postimg/successlogin.png)

出现连接到账户的信息，说明已经大功告成，至此完成了环境准备工作。

# 初始化 Hexo 项目

在目标路径（我这里选的路径为【D:\Hexo】）打开Git Bash命令窗口，执行`hexo init`初始化项目。

```shell
hexo init
```

随后输入npm i 安装相关依赖

```shell
npm i
```

![](https://cdn.wangxi.online/postimg/npm%20i.png)

初始化项目后，`Hexo`有如下结构：

![](https://cdn.wangxi.online/postimg/newhexo.png)【node_modules】：依赖包
【scaffolds】：生成文章的一些模板
【source】：用来存放你的文章
【themes】：主题
【.npmignore】：发布时忽略的文件（可忽略)
【_config.landscape.yml】：主题的配置文件
【config.yml】：博客的配置文件
【package.json】：项目名称、描述、版本、运行和开发等信息

输入hexo server或者hexo s 启动项目

![](https://cdn.wangxi.online/postimg/hexo%20s.png)

打开浏览器，输入地址：http://localhost:4000/ ，看到下面的效果，说明你的博客已经构建成功了。

![](https://cdn.wangxi.online/postimg/defalthexo.png)

# 将静态博客挂载到 GitHub Pages

安装 hexo-deployer-git

```shell
npm install hexo-deployer-git --save
```

修改 _config.yml 文件
在Hexo目录下的_config.yml，就是整个Hexo框架的配置文件了。可以在里面修改大部分的配置。详细可参考官方的[配置描述](https://hexo.io/zh-cn/docs/configuration)。
修改最后一行的配置，将repository修改为你自己的github项目地址即可，还有分支要改为`main`代表主分支（注意缩进）。

```yaml
deploy:
  type: git
  repository: git@github.com:wangxiTest/wangxiTest.github.io.git
  branch: main
```

修改好配置后，运行如下命令，将代码部署到 GitHub（Hexo三连）。

```shell
hexo clean && hexo generate && hexo deploy 
```

- hexo clean：删除之前生成的文件，若未生成过静态文件，可忽略此命令。

- hexo generate：生成静态文章，可以用`hexo g`缩写

- hexo deploy：部署文章，可以用`hexo d`缩写

![](https://cdn.wangxi.online/postimg/hexo3%E8%BF%9E.png)

{% note info simple %}注意：deploy时可能要你输入 username 和 password。{% endnote %}

如果出现`Deploy done: git`，则说明部署成功了。

![](https://cdn.wangxi.online/postimg/deploygit.png)

稍等两分钟，打开浏览器访问: https://wangxiTest.github.io/，这时候我们就可以看到博客内容了。

![](https://cdn.wangxi.online/postimg/wangxitest.github.io.png)

# 无法连接至Github的解决方案

{% note danger flat %}注意：当你在与Github进行ssh通信时候出现超时或者是连接被关闭的情况，可以尝试以下解决方案。{% endnote %}

1. 挂代理和换网络（这个就不用多说了）

2. [Git问题：解决“ssh:connect to host github.com port 22: Connection timed out”](https://blog.csdn.net/weixin_41287260/article/details/124368189)

3. 开源项目[Github520](https://github.com/521xueweihan/GitHub520)

   通过修改Host文件的方法解决访问速度慢的问题

连接有效性检验：

```bash
# 任选其一即可
ping github.com
ssh -T git@github.com
```

<!-- endtab -->

<!-- tab 服务器Linux -->
**正在撰写**
<!-- endtab -->
{% endtabs %}
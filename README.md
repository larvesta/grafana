[Grafana]
================

Grafana is an open source, feature rich metrics dashboard and graph editor for
Graphite, Elasticsearch, OpenTSDB, Prometheus and InfluxDB.

![](http://grafana.org/assets/img/start_page_bg.png)

### 依赖库

- Go 1.6
- NodeJS v4+
- sqlite3

#### GO 环境搭建
```bash
vi /etc/profile
export GOPATH="/root/go"
export GOROOT="/usr/local/go"
export PATH=$GOROOT/bin:$PATH
export PATH=$GOPATH/bin:$PATH
```

#### NodeJS 环境搭建

从https://nodejs.org/en/下载node源码包
```bash
cd /usr/local
tar -zxvf node-v4.5.0-linux-x64.tar
chmod -R 755 node
vi /etc/profile
export NODE=/usr/local/node
export PATH=${NODE}/bin:$PATH
```

### 编译安装前准备

创建$GOPATH/src/github.com/grafana/grafana目录,然后git最新的代码到此目录.
```bash
mkdir $GOPATH/src/github.com/grafana/grafana
```

### 编译后端源码步骤
```bash
cd $GOPATH/src/github.com/grafana/grafana
go run build.go setup
go run build.go build
```

### 编译前端源码步骤
```bash
cd $GOPATH/src/github.com/grafana/grafana
npm install --registry=http://registry.npm.taobao.org
npm install -g grunt-cli --registry=http://registry.npm.taobao.org
grunt
```

### 运行
```bash
./bin/grafana-server
```

- 打开浏览器 (默认 http://localhost:3000   匿名方式登录<部分功能存在权限限制>)
- 打开登陆页面 (默认 http://localhost:3000/login 用户名/密码 = admin/admin  功能没有权限限制).

### 配置

#### 启动项配置
在/etc/grafana/目录:

1. grafana.ini
2. dev.ini (if found)
3. custom.ini

#### 基本权限配置
在/usr/share/grafana/conf

1.defaults.ini
2.sample.ini

### 程序发布各平台安装包

发布安装包依赖FPM工具.

####安装GEM
```bash
sudo apt-get install ruby
sudo apt-get install ruby-dev
```

####安装FPM
```bash
gem install fpm
```

#### 编译发布
发布后的安装包(.tar .deb .rpm文件)都存在在$GOPATH/src/github.com/grafana/grafana/dist目录下面,
部分临时文件都存在在/tmp目录下面
```bash
go run build.go build package
```

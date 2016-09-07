[Grafana]
================

Grafana is an open source, feature rich metrics dashboard and graph editor for
Graphite, Elasticsearch, OpenTSDB, Prometheus and InfluxDB.

![](http://grafana.org/assets/img/start_page_bg.png)

## Features
### Graphite Target Editor
- Graphite target expression parser
- Feature rich query composer
- Quickly add and edit functions & parameters
- Templated queries
- [See it in action](http://docs.grafana.org/datasources/graphite/)

### Graphing
- Fast rendering, even over large timespans
- Click and drag to zoom
- Multiple Y-axis, logarithmic scales
- Bars, Lines, Points
- Smart Y-axis formatting
- Series toggles & color selector
- Legend values, and formatting options
- Grid thresholds, axis labels
- [Annotations](http://docs.grafana.org/reference/annotations/)
- Any panel can be rendered to PNG (server side using phantomjs)

### Dashboards
- Create, edit, save & search dashboards
- Change column spans and row heights
- Drag and drop panels to rearrange
- [Templating](http://docs.grafana.org/reference/templating/)
- [Scripted dashboards](http://docs.grafana.org/reference/scripting/)
- [Dashboard playlists](http://docs.grafana.org/reference/playlist/)
- [Time range controls](http://docs.grafana.org/reference/timerange/)
- [Share snapshots publicly](http://docs.grafana.org/v2.0/reference/sharing/)

### Elasticsearch
- Feature rich query editor UI

### InfluxDB
- Use InfluxDB as a metric data source, annotation source
- Query editor with series and column typeahead, easy group by and function selection

### OpenTSDB
- Use as metric data source
- Query editor with metric name typeahead and tag filtering

## Requirements
There are no dependencies except an external time series data store. For dashboards and user accounts Grafana can use an embedded
database (sqlite3) or you can use an external SQL data base like MySQL or Postgres.

## Installation
Head to [grafana.org](http://docs.grafana.org/installation/) and [download](http://grafana.org/download/)
the latest release.

If you have any problems please read the [troubleshooting guide](http://docs.grafana.org/installation/troubleshooting/).

## Documentation & Support
Be sure to read the [getting started guide](http://docs.grafana.org/guides/gettingstarted/) and the other feature guides.

## Run from master
If you want to build a package yourself, or contribute. Here is a guide for how to do that. You can always find
the latest master builds [here](http://grafana.org/download/builds)

### Dependencies

- Go 1.6
- NodeJS v4+
- [Godep](https://github.com/tools/godep)

#### GO configuration
```bash
vi /etc/profile
export GOPATH="/root/go"
export GOROOT="/usr/local/go"
export PATH=$GOROOT/bin:$PATH
export PATH=$GOPATH/bin:$PATH
```

#### NodeJS configuration

Download node-v4.5.0-linux-x64.tar from https://nodejs.org/en/
```bash
cd /usr/local
tar -zxvf node-v4.5.0-linux-x64.tar
chmod -R 755 node
vi /etc/profile
export NODE=/usr/local/node
export PATH=${NODE}/bin:$PATH
```

### Get Code

Since imports of dependencies use the absolute path github.com/grafana/grafana within the $GOPATH,
you will need to put your version of the code in $GOPATH/src/github.com/grafana/grafana to be able
to develop and build grafana on a cloned repository. To do so, you can clone your forked repository
directly to $GOPATH/src/github.com/grafana or you can create a symbolic link from your version
of the code to $GOPATH/src/github.com/grafana/grafana. The last options makes it possible to change
easily the grafana repository you want to build.
```bash
mkdir $GOPATH/src/github.com/grafana/grafana
```

### Building the backend
```bash
cd $GOPATH/src/github.com/grafana/grafana
go run build.go setup
go run build.go build
```

### Building frontend assets

To build less to css for the frontend you will need a recent version of of **node (v4+)**,
npm (v2.5.0) and grunt (v0.4.5). Run the following:

```bash
cd $GOPATH/src/github.com/grafana/grafana
npm install --registry=http://registry.npm.taobao.org
npm install -g grunt-cli --registry=http://registry.npm.taobao.org
grunt
```

### Running
```bash
./bin/grafana-server
```

Open grafana in your browser (default http://localhost:3000) and login with admin user (default user/pass = admin/admin).

### Dev config

Create a custom.ini in the conf directory to override default configuration options.
You only need to add the options you want to override. Config files are applied in the order of:

1. grafana.ini
2. dev.ini (if found)
3. custom.ini

### Creating optimized release packages

This step builds linux packages and requires that fpm is installed. Install fpm via gem install fpm.
```bash
sudo apt-get install ruby
sudo apt-get install ruby-dev
gem install fpm
go run build.go build package
```

## Create a pull request
Before or after you create a pull request, sign the [contributor license agreement](http://grafana.org/docs/contributing/cla.html).


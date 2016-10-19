///<reference path="headers/common.d.ts" />

import 'bootstrap';
import 'vendor/filesaver';
import 'lodash-src';
import 'angular-strap';
import 'angular-route';
import 'angular-sanitize';
import 'angular-dragdrop';
import 'angular-bindonce';
import 'angular-ui';
import 'angular-translate';

import $ from 'jquery';
import angular from 'angular';
import config from 'app/core/config';
import _ from 'lodash';
import moment from 'moment';
import {coreModule} from './core/core';


var TRANSLATE_EN = {
  'Server Administration': 'Server Administration',
  'Manage Users': 'Manage Users',
  'Manage Organizations': 'Manage Organizations',
  'View Server Settings': 'View Server Settings',
  'View Server Stats': 'View Server Stats',
  'Style guide': 'Style guide',
  'Orgs': 'Orgs',
  'Edit Organization': 'Edit Organization',
  'Name': 'Name',
  'Update': 'Update',
  'Organization Users': 'Organization Users',
  'Username': 'Username',
  'Email': 'Email',
  'Role': 'Role',
  'Users': 'Users',
  'User': 'User',
  'Edit User': 'Edit User',
  'Password': 'Password',
  'Change password': 'Change password',
  'Old password': 'Old password',
  'New password': 'New password',
  'Confirm password': 'Confirm password',
  'Permissions': 'Permissions',
  'Organizations': 'Organizations',
  'Add organization': 'Add organization',
  'Add': 'Add',
  'Current': 'Current',
  'Add new user': 'Add new user',
  'Id': 'Id',
  'Edit': 'Edit',
  'Server settings': 'Server settings',
  'Stats': 'Stats',
  'Value': 'Value',
  'Total dashboards': 'Total dashboards',
  'Total users': 'Total users',
  'Total organizations': 'Total organizations',
  'Total datasources': 'Total datasources',
  'Total playlists': 'Total playlists',
  'Total snapshots': 'Total snapshots',
  'Total dashboard tags': 'Total dashboard tags',
  'Total starred dashboards': 'Total starred dashboards',
  'Login': 'Login',
  'Admin': 'Admin',
  'Adding an Alert': 'Adding an Alert',
  'Go to Home Dashboard': 'Go to Home Dashboard',
  'How to add an alert': 'How to add an alert',
  'Filter by state': 'Filter by state',
  'Alert List': 'Alert List',
  'Alert Config': 'Alert Config',
  'Notifications': 'Notifications',
  'Alert History': 'Alert History',
  'Delete': 'Delete',
  'Evaluate every': 'Evaluate every',
  'Severity': 'Severity',
  'Conditions': 'Conditions',
  'AND': 'AND',
  'WHEN': 'WHEN',
  'Reducer': 'Reducer',
  'Test Rule': 'Test Rule',
  'Evaluating rule': 'Evaluating rule',
  'Send to': 'Send to',
  'Message': 'Message',
  'Alert notification': 'Alert notification',
  'Type': 'Type',
  'Webhook settings': 'Webhook settings',
  'Url': 'Url',
  'Slack settings': 'Slack settings',
  'Save': 'Save',
  'Annotations': 'Annotations',
  'Datasource': 'Datasource',
  'Color': 'Color',
  'Snapshot': 'Snapshot',
  'Link to Dashboard': 'Link to Dashboard',
  'Export': 'Export',
  'Templating': 'Templating',
  'JSON TEXT': 'JSON TEXT',
  'JSON FILE': 'JSON FILE',
  'View JSON': 'View JSON',
  'Save As': 'Save As',
  'Hide or Show controls': 'Hide or Show controls',
  'Back to dashboard': 'Back to dashboard',
  'Cancel': 'Cancel',
  'Import Dashboard': 'Import Dashboard',
  'Load': 'Load',
  'Global Alerts': 'Global Alerts',
  'Filters': 'Filters',
  'Alert State': 'Alert State',
  'All': 'All',
  'Update notifications': 'Update notifications',
  'Settings': 'Settings',
  'Description': 'Description',
  'Tags': 'Tags',
  'Timezone': 'Timezone',
  'Toggles': 'Toggles',
  'Rows settings': 'Rows settings',
  'Row editor': 'Row editor',
  'Delete row': 'Delete row',
  'ADD ROW': 'ADD ROW',
  'Title': 'Title',
  'Dashboard info': 'Dashboard info',
  'Last updated at': 'Last updated at',
  'Last updated by': 'Last updated by',
  'Created at': 'Created at',
  'Created by': 'Created by',
  'Current version': 'Current version',
  'New name': 'New name',
  'Import': 'Import',
  'Migrate dashboards': 'Migrate dashboards',
  'List dashboards': 'List dashboards',
  'Load dashboard from Graphite-Web': 'Load dashboard from Graphite-Web',
  'Online': 'Online',
  'Time range': 'Time range',
  'From': 'From',
  'To': 'To',
  'Refreshing every': 'Refreshing every',
  'Apply': 'Apply',
  'Auto-refresh': 'Auto-refresh',
  'Zoom Out': 'Zoom Out',
  'Links and Dash Navigation': 'Links and Dash Navigation',
  'Tooltip': 'Tooltip',
  'Icon': 'Icon',
  'Include': 'Include',
  'API Key Created': 'API Key Created',
  'Invite Users': 'Invite Users',
  'Invite another': 'Invite another',
  'Existing Keys': 'Existing Keys',
  'Org Preferences': 'Org Preferences',
  'General': 'General',
  'Address': 'Address',
  'City': 'City',
  'Postal code': 'Postal code',
  'State': 'State',
  'Country': 'Country',
  'Admin Pages': 'Admin Pages',
  'Invite': 'Invite',
  'Invited': 'Invited',
  'Pending Invitations': 'Pending Invitations',
  'Details': 'Details',
  'Copy': 'Copy',
  'Revoke': 'Revoke',
  'Profile': 'Profile',
  'Select': 'Select',
  'Override ': 'Override ',
  'relative time': 'relative time',
  'time shift': 'time shift',
  'Amount': 'Amount',
  'Toggle Edit Mode': 'Toggle Edit Mode',
  'Move up': 'Move up',
  'Move down': 'Move down',
  'Move to top': 'Move to top',
  'Move to bottom': 'Move to bottom',
  'Url params': 'Url params',
  'Request parameters': 'Request parameters',
  'Add to playlist': 'Add to playlist',
  'Available': 'Available',
  'Interval': 'Interval',
  'New Playlist': 'New Playlist',
  'Edit Playlist': 'Edit Playlist',
  'starred': 'starred',
  'Play': 'Play',
  'Revision': 'Revision',
  'Test': 'Test',
  'Add data source': 'Add data source',
  'Edit data source': 'Edit data source',
  'Http settings': 'Http settings',
  'Http Auth': 'Http Auth',
  'default': 'default',
  'Enable': 'Enable',
  'Disable': 'Disable',
  'Version': 'Version',
  'Dependencies': 'Dependencies',
  'Links': 'Links',
  'Plugins': 'Plugins',
  'Panels': 'Panels',
  'Data sources': 'Data sources',
  'Apps': 'Apps',
  'Find plugins on': 'Find plugins on',
  'View': 'View',
  'Switch theme': 'Switch theme',
  'Reload': 'Reload',
  'Variables': 'Variables',
  'Variable': 'Variable',
  'Preview of values (shows max 20)': 'Preview of values (shows max 20)',
  'Selection Options': 'Selection Options',
  'Refresh': 'Refresh',
  'Query': 'Query',
  'Press enter to add a tag': 'Press enter to add a tag',
  'Shared Crosshair': 'Shared Crosshair',
  'Find dashboards on': 'Find dashboards on',
  'Sign in': 'Sign in',
  'Sign up': 'Sign up',
  'Pin': 'Pin',
  'Add Panel': 'Add Panel',
  'Set height': 'Set height',
  'Move': 'Move',
  'Drop': 'Drop',
  'Keyboard shortcuts': 'Keyboard shortcuts',
  'Exit fullscreen edit/view mode, close search or any editor view': 'Exit fullscreen edit/view mode, close search or any editor view',
  'Open dashboard search view': 'Open dashboard search view',
  'Shift time backward': 'Shift time backward',
  'Shift time forward': 'Shift time forward',
  'Stack trace': 'Stack trace',
  'Inspector': 'Inspector',
  'Method': 'Method',
  'Forgot your password': 'Forgot your password',
  'Close': 'Close',
  'Span': 'Span',
  'Height': 'Height',
  'Repeat Panel': 'Repeat Panel',
  'Min span': 'Min span',
  'Reset password': 'Reset password',
  'Send reset instructions': 'Send reset instructions',
  'An email with a reset link as been sent to the email': 'An email with a reset link as been sent to the email',
  'Back to login': 'Back to login',
  'Templating options': 'Templating options',
  'Repeat Row': 'Repeat Row',
  'Continue': 'Continue',
  'Ignore': 'Ignore',
  'Manage dashboard': 'Manage dashboard',
  'Open editView of dashboard': 'Open editView of dashboard',
  'Save dashboard': 'Save dashboard',
  'Open original dashboard': 'Open original dashboard',
  'No matching': 'No matching',
  'Max shown': 'Max shown',
  'Edit': 'Edit'
};

var TRANSLATE_ZH = {
  'Server Administration': '服务器管理',
  'Manage Users': '用户管理',
  'Manage Organizations': '用户组管理',
  'View Server Settings': '服务器性能参数视图',
  'View Server Stats': '服务器统计概述',
  'Style guide': '样式指南',
  'Orgs': '用户组',
  'Edit Organization': '编辑用户组',
  'Name': '名称',
  'Update': '更新',
  'Organization Users': '组用户',
  'Username': '用户名',
  'Email': '邮箱',
  'Role': '角色',
  'Users': '用户',
  'User': '用户',
  'Edit User': '编辑用户',
  'Password': '密码',
  'Change password': '更改密码',
  'Old password': '原始密码',
  'New password': '新密码',
  'Confirm password': '确认密码',
  'Permissions': '许可',
  'Organizations': '用户组',
  'Add organization': '添加用户组',
  'Add': '添加',
  'Current': '当前',
  'Add new user': '添加用户',
  'Id': '编号',
  'Edit': '编辑',
  'Server settings': '服务器性能参数',
  'Stats': '统计概述',
  'Value': '值',
  'Total dashboards': 'dashboards数量',
  'Total users': '用户数量',
  'Total organizations': '用户组数量',
  'Total datasources': '数据源数量',
  'Total playlists': 'dashboards列表数量',
  'Total snapshots': '快照数量',
  'Total dashboard tags': 'dashboards标签数量',
  'Total starred dashboards': '受关注dashboards数量',
  'Login': '登录号',
  'Admin': '管理员',
  'Adding an Alert': '添加告警',
  'Go to Home Dashboard': '跳转到HOME页面',
  'How to add an alert': '怎样添加一条告警',
  'Filter by state': '依据状态进行筛选',
  'Alert List': '告警列表',
  'Alert Config': '告警配置',
  'Notifications': '通知',
  'Alert History': '告警记录',
  'Delete': '删除',
  'Evaluate every': '告警检测频率',
  'Severity': '严重等级',
  'Conditions': '条件',
  'AND': '与',
  'WHEN': '当',
  'Reducer': '告警事件',
  'Test Rule': '测试准则',
  'Evaluating rule': '评估准则',
  'Send to': '发送给',
  'Message': '消息',
  'Alert notification': '告警通知',
  'Type': '类型',
  'Webhook settings': 'Webhook配置',
  'Url': 'Url链接',
  'Slack settings': 'Slack配置',
  'Save': '保存',
  'Annotations': '注解',
  'Datasource': '数据源',
  'Color': '颜色',
  'Snapshot': '快照',
  'Link to Dashboard': '跳转到Dashboard',
  'Export': '导出',
  'Templating': '模板',
  'JSON TEXT': '方式2:JSON文本',
  'JSON FILE': '方式1:JSON文件',
  'View JSON': 'JSON视图',
  'Save As': '另存为',
  'Hide or Show controls': '显示/隐藏控制窗',
  'Back to dashboard': '回到dashboard',
  'Cancel': '取消',
  'Import Dashboard': '导入Dashboard',
  'Load': '加载',
  'Global Alerts': '全局告警',
  'Filters': '筛选',
  'Alert State': '告警状态',
  'All': '全部',
  'Update notifications': '更新告警通知',
  'Settings': '配置',
  'Description': '描述',
  'Tags': '标签',
  'Timezone': '时区',
  'Toggles': '状态切换',
  'Rows settings': '行配置',
  'Row editor': '行编辑',
  'Delete row': '删除行',
  'ADD ROW': '添加行',
  'Title': '标题',
  'Dashboard info': 'Dashboard信息',
  'Last updated at': '上次更新时间',
  'Last updated by': '上次更新者',
  'Created at': '创建于',
  'Created by': '创建者',
  'Current version': '当前版本',
  'New name': '新名称',
  'Import': '导入',
  'Migrate dashboards': '数据源迁移dashboards',
  'List dashboards': 'dashboards列表',
  'Load dashboard from Graphite-Web': '从Graphite-Web加载dashboard',
  'Online': '上线',
  'Time range': '时间范围',
  'From': '开始',
  'To': '结束',
  'Refreshing every': '刷新频率',
  'Apply': '申请',
  'Auto-refresh': '自动刷新',
  'Zoom Out': '放大',
  'Links and Dash Navigation': '链接与导航',
  'Tooltip': '提示信息',
  'Icon': '图标',
  'Include': '复选',
  'API Key Created': '创建API Key',
  'Invite Users': '邀请用户',
  'Invite another': '邀请其他用户',
  'Existing Keys': 'Keys列表',
  'Org Preferences': '用户组概述',
  'General': '概述',
  'Address': '地址',
  'City': '城市',
  'Postal code': '邮政编码',
  'State': '国家',
  'Country': '地区',
  'Admin Pages': '管理员页面',
  'Invite': '邀请',
  'Invited': '受邀',
  'Pending Invitations': '未处理邀请',
  'Details': '详情',
  'Copy': '拷贝',
  'Revoke': '撤销',
  'Profile': '简介',
  'Select': '选择',
  'Override ': '覆盖 ',
  'relative time': '相对时间',
  'time shift': '时间因子',
  'Amount': '数量',
  'Toggle Edit Mode': '切换编辑模式',
  'Move up': '上移',
  'Move down': '下移',
  'Move to top': '移到顶部',
  'Move to bottom': '移动底部',
  'Url params': 'Url参数',
  'Request parameters': '请求参数',
  'Add to playlist': '添加到列表',
  'Available': '可用项目',
  'Interval': '区间',
  'New Playlist': '新建列表',
  'Edit Playlist': '编辑列表',
  'starred': '受关注',
  'Play': '播放',
  'Revision': '修订版',
  'Test': '测试',
  'Add data source': '添加数据源',
  'Edit data source': '编辑数据源',
  'Http settings': 'Http 配置',
  'Http Auth': 'Http 认证',
  'default': '默认',
  'Enable': '允许',
  'Disable': '禁用',
  'Version': '版本',
  'Dependencies': '依赖项',
  'Links': '链接',
  'Plugins': '插件',
  'Panels': '面板',
  'Data sources': '数据源',
  'Apps': '应用',
  'Find plugins on': '查找插件',
  'View': '查看',
  'Switch theme': '切换主题',
  'Reload': '重新加载',
  'Variables': '变量',
  'Variable': '变量',
  'Preview of values (shows max 20)': '最大显示 20 条目',
  'Selection Options': '选项',
  'Refresh': '刷新',
  'Query': '查询',
  'Press enter to add a tag': '回车添加标签',
  'Shared Crosshair': '共享的准星',
  'Find dashboards on': '查找dashboards',
  'Sign in': '登陆',
  'Sign up': '注册',
  'Pin': '锁定侧边栏',
  'Add Panel': '创建面板',
  'Set height': '设置高度',
  'Move': '移动',
  'Drop': '放弃',
  'Keyboard shortcuts': '快捷键',
  'Exit fullscreen edit/view mode, close search or any editor view': '退出全屏编辑/查看模式，关闭搜索或编辑视图',
  'Open dashboard search view': '打开dashboard搜索视图',
  'Shift time backward': '向后调整时间',
  'Shift time forward': '向前调整时间',
  'Stack trace': '堆栈跟踪',
  'Inspector': '检测',
  'Method': '方式',
  'Forgot your password': '忘记密码',
  'Close': '关闭',
  'Span': '跨度',
  'Height': '高度',
  'Repeat Panel': '重复面板',
  'Min span': '最小跨度',
  'Reset password': '重置密码',
  'Send reset instructions': '发送重置密码指令',
  'An email with a reset link as been sent to the email address, you should receive it shortly': '已发送到电子邮件地址的一个重置链接的电子邮件，你应该很快收到',
  'Back to login': '回到登陆页面',
  'Templating options': '模板化选项',
  'Repeat Row': '重复行',
  'Continue': '继续',
  'Ignore': '忽略',
  'Manage dashboard': 'dashboard管理',
  'Open editView of dashboard': '打开dashboard编辑视图',
  'Save dashboard': '保存dashboard',
  'Open original dashboard': '打开原始dashboard',
  'No matching': '无符合记录',
  'Max shown': '最大显示',
  'Edit': '編輯'
};

export class GrafanaApp {
  registerFunctions: any;
  ngModuleDependencies: any[];
  preBootModules: any[];

  constructor() {
    this.preBootModules = [];
    this.registerFunctions = {};
    this.ngModuleDependencies = [];
  }

  useModule(module) {
    if (this.preBootModules) {
      this.preBootModules.push(module);
    } else {
      _.extend(module, this.registerFunctions);
    }
    this.ngModuleDependencies.push(module.name);
    return module;
  }

  init() {
    var app = angular.module('grafana', ['pascalprecht.translate']);
    app.constant('grafanaVersion', "@grafanaVersion@");

    moment.locale(config.bootData.user.locale);

    app.config(($translateProvider,$locationProvider, $controllerProvider, $compileProvider, $filterProvider, $httpProvider, $provide) => {

      if (config.buildInfo.env !== 'development') {
        $compileProvider.debugInfoEnabled(false);
      }

      $httpProvider.useApplyAsync(true);

      this.registerFunctions.controller = $controllerProvider.register;
      this.registerFunctions.directive  = $compileProvider.directive;
      this.registerFunctions.factory    = $provide.factory;
      this.registerFunctions.service    = $provide.service;
      this.registerFunctions.filter     = $filterProvider.register;

      $provide.decorator("$http", ["$delegate", "$templateCache", function($delegate, $templateCache) {
        var get = $delegate.get;
        $delegate.get = function(url, config) {
          if (url.match(/\.html$/)) {
            // some template's already exist in the cache
            if (!$templateCache.get(url)) {
              url += "?v=" + new Date().getTime();
            }
          }
          return get(url, config);
        };
        return $delegate;
      }]);
      $translateProvider.translations('translate-zh', TRANSLATE_ZH);
      $translateProvider.translations('translate-en', TRANSLATE_EN);
      $translateProvider.preferredLanguage('translate-zh');
    });

    this.ngModuleDependencies = [
      'grafana.core',
      'ngRoute',
      'ngSanitize',
      '$strap.directives',
      'ang-drag-drop',
      'grafana',
      'pasvaz.bindonce',
      'ui.bootstrap',
      'ui.bootstrap.tpls',
    ];

    var module_types = ['controllers', 'directives', 'factories', 'services', 'filters', 'routes'];

    _.each(module_types, type => {
      var moduleName = 'grafana.' + type;
      this.useModule(angular.module(moduleName, []));
    });

    // makes it possible to add dynamic stuff
    this.useModule(coreModule);

    var preBootRequires = [System.import('app/features/all')];

    Promise.all(preBootRequires).then(() => {
      // disable tool tip animation
      $.fn.tooltip.defaults.animation = false;
      // bootstrap the app
      angular.bootstrap(document, this.ngModuleDependencies).invoke(() => {
        _.each(this.preBootModules, module => {
          _.extend(module, this.registerFunctions);
        });

        this.preBootModules = null;
      });
    }).catch(function(err) {
      console.log('Application boot failed:', err);
    });
  }
}

export default new GrafanaApp();

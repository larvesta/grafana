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
  'Edit User': 'Edit User',
  'Password': 'Password',
  'Change password': 'Change password',
  'New password': 'New password',
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
  'Grafana Admin': 'Grafana Admin',
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
  'Load': 'Load'
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
  'Edit User': '编辑用户',
  'Password': '密码',
  'Change password': '更改密码',
  'New password': '新密码',
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
  'Total dashboards': '视图模板数量',
  'Total users': '用户数量',
  'Total organizations': '用户组数量',
  'Total datasources': '数据源数量',
  'Total playlists': '视图模板列表数量',
  'Total snapshots': '快照数量',
  'Total dashboard tags': '视图模板标签数量',
  'Total starred dashboards': '受关注视图模板数量',
  'Login': '登录号',
  'Grafana Admin': '管理员',
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
  'Load': '加载'
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

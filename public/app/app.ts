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
  'Grafana Admin': 'Grafana Admin'
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
  'Grafana Admin': '管理员'
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

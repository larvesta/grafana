///<reference path="../../headers/common.d.ts" />

import angular from 'angular';
import _ from 'lodash';
import coreModule from '../../core/core_module';
import appEvents from '../../core/app_events';
import moment from 'moment';
import alertDef from './alert_def';

export class AlertListCtrl {

  alerts: any;
  stateFilters = [
    {text: '所有', value: null},
    {text: '正常', value: 'ok'},
    {text: '未决', value: 'pending'},
    {text: '警告', value: 'warning'},
    {text: '严重', value: 'critical'},
    {text: '执行错误', value: 'execution_error'},
  ];

  filters = {
    state: 'ALL'
  };

  /** @ngInject */
  constructor(private backendSrv, private $location) {
    var params = $location.search();
    this.filters.state = params.state || null;
    this.loadAlerts();
  }

  filtersChanged() {
    this.$location.search(this.filters);
  }

  loadAlerts() {
    this.backendSrv.get('/api/alerts', this.filters).then(result => {
      this.alerts = _.map(result, alert => {
        alert.stateModel = alertDef.getStateDisplayModel(alert.state);
        alert.newStateDateAgo = moment(alert.newStateDate).fromNow().replace(" ago", "");
        return alert;
      });
    });
  }

  openHowTo() {
    appEvents.emit('show-modal', {
      src: 'public/app/features/alerting/partials/alert_howto.html',
      modalClass: 'confirm-modal',
      model: {}
    });
  }
}

coreModule.controller('AlertListCtrl', AlertListCtrl);


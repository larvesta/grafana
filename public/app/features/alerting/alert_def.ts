///<reference path="../../headers/common.d.ts" />


import {
  QueryPartDef,
  QueryPart,
} from 'app/core/components/query_part/query_part';

var alertQueryDef = new QueryPartDef({
  type: 'query',
  params: [
    {name: "queryRefId", type: 'string', dynamicLookup: true},
    {name: "from", type: "string", options: ['1s', '10s', '1m', '5m', '10m', '15m', '1h']},
    {name: "to", type: "string", options: ['now']},
  ],
  defaultParams: ['#A', '5m', 'now', 'avg']
});

var conditionTypes = [
  {text: 'Query', value: 'query'},
];

var evalFunctions = [
  {text: 'IS ABOVE', value: 'gt'},
  {text: 'IS BELOW', value: 'lt'},
  {text: 'IS OUTSIDE RANGE', value: 'outside_range'},
  {text: 'IS WITHIN RANGE', value: 'within_range'},
  {text: 'HAS NO VALUE' , value: 'no_value'}
];

var reducerTypes = [
  {text: 'avg()', value: 'avg'},
  {text: 'min()', value: 'min'},
  {text: 'max()', value: 'max'},
  {text: 'sum()' , value: 'sum'},
  {text: 'count()', value: 'count'},
];

function createReducerPart(model) {
  var def = new QueryPartDef({type: model.type, defaultParams: []});
  return new QueryPart(model, def);
}

var severityLevels = {
  'critical': {text: '严重', iconClass: 'icon-gf icon-gf-critical', stateClass: 'alert-state-critical'},
  'warning': {text: '警告', iconClass: 'icon-gf icon-gf-warning', stateClass: 'alert-state-warning'},
};

function getStateDisplayModel(state) {
  switch (state) {
    case 'ok': {
      return {
        text: '正常',
        iconClass: 'icon-gf icon-gf-online',
        stateClass: 'alert-state-ok'
      };
    }
    case 'critical': {
      return {
        text: '严重',
        iconClass: 'icon-gf icon-gf-critical',
        stateClass: 'alert-state-critical'
      };
    }
    case 'warning': {
      return {
        text: '警告',
        iconClass: 'icon-gf icon-gf-warning',
        stateClass: 'alert-state-warning'
      };
    }
    case 'pending': {
      return {
        text: '未决',
        iconClass: "fa fa-question",
        stateClass: 'alert-state-warning'
      };
    }
    case 'execution_error': {
      return {
        text: '执行错误',
        iconClass: 'icon-gf icon-gf-critical',
        stateClass: 'alert-state-critical'
      };
    }

    case 'paused': {
      return {
        text: '暂停',
        iconClass: "fa fa-pause",
        stateClass: 'alert-state-paused'
      };
    }
  }
}

export default {
  alertQueryDef: alertQueryDef,
  getStateDisplayModel: getStateDisplayModel,
  conditionTypes: conditionTypes,
  evalFunctions: evalFunctions,
  severityLevels: severityLevels,
  reducerTypes: reducerTypes,
  createReducerPart: createReducerPart,
};

import angular from 'angular';
import {CommonController} from './common.ctrl';
import {commonFactory} from './common.srv';

export var common = angular.module('common', []);

common.controller(CommonController.name, CommonController);
common.factory('commonFactory', commonFactory);

common.config(()=>{
    console.log('config...');
});

common.run(($log)=>{
    $log.log('run...');
});
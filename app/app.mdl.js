import angular from 'angular';
import {mainController} from './main.ctrl';
import {common} from './common/common.mdl';

var app = angular.module('app', [common.name]);

app.controller(mainController.name, mainController);

app.config(()=>{
    console.log('config...');
});

app.run(($log)=>{
    $log.log('run...');
});
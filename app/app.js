import angular from 'angular';
import {mainController} from './main.ctrl'


angular.module('app', []).controller(mainController.name, mainController);

//_app.controller(mainController.name, mainController);

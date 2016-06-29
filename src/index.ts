/// <reference path="../typings/index.d.ts"/>

import 'reflect-metadata';
import 'zone.js/dist/zone';
import {bootstrap} from '@angular/platform-browser-dynamic';
import 'todomvc-app-css/index.css!';
import {provideStore, combineReducers} from '@ngrx/store';

import {todos, visibility, initialTodo, initialVisibility} from './app/reducers/todos.ts';

import {enableProdMode, provide} from '@angular/core';
import {UIRouterConfig, UIROUTER_PROVIDERS, UiView} from 'ui-router-ng2';
import {LocationStrategy, PathLocationStrategy, PlatformLocation} from '@angular/common';
import {BrowserPlatformLocation} from '@angular/platform-browser';
import {MyUIRouterConfig} from './routes.ts';

import {production} from '@system-env';

if (production) {
  enableProdMode();
}

bootstrap(UiView, [
  ...UIROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: PathLocationStrategy}),
  provide(PlatformLocation, {useClass: BrowserPlatformLocation}),
  provide(UIRouterConfig, {useClass: MyUIRouterConfig}),
  provideStore(combineReducers({todos, visibility}), {todos: [initialTodo], visibility: initialVisibility})
]);

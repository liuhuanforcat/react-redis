import { RouteObject } from 'react-router-dom';
import LayoutBase from '../layout';
import Home from '../pages/home';
import Login from '../pages/login';
import Redis from '../pages/redis';
import IndexDB from '../pages/indexDB';
import BigFile from '../pages/bigFile';
import LongList from '../pages/longList';
import NodeLoad from '../pages/nodeLoad';
import Observer from '../pages/observer';
import React from 'react';
import { HomeOutlined, CloudOutlined, FlagOutlined, WomanOutlined, UngroupOutlined, CopyrightOutlined, CompassOutlined } from '@ant-design/icons';

export type CustomRouteObject = RouteObject & {
  meta?: {
    title?: string;
    icon?: React.ReactNode;
    hidden?: boolean;
    roles?: string[];
  };
  children?: CustomRouteObject[];
};
const routes: CustomRouteObject[] = [
  {
    path: '/login',
    element: React.createElement(Login),
    children: [],
    meta: {
      title: '登录',
      hidden: true,
    },
  },
  {
    path: '/',
    element: React.createElement(LayoutBase),
    meta: {
      title: '主页',
      icon: React.createElement(HomeOutlined),
      hidden: true,
    },
    children: [
      {
        path: 'home',
        element: React.createElement(Home),
        meta: {
          title: '首页',
          icon: React.createElement(HomeOutlined),
        },
      },
      {
        path: 'redis',
        element: React.createElement(Redis),
        meta: {
          title: '模拟redis',
          icon: React.createElement(CloudOutlined),
        },
      },
      {
        path: 'index-db',
        element: React.createElement(IndexDB),
        meta: {
          title: 'IndexDB',
          icon: React.createElement(FlagOutlined),
        },
      },
      {
        path: 'big-file',
        element: React.createElement(BigFile),
        meta: {
          title: '大文件上传',
          icon: React.createElement(WomanOutlined),
        },
      },
      {
        path: 'long-list',
        element: React.createElement(LongList),
        meta: {
          title: '长列表优化',
          icon: React.createElement(UngroupOutlined),
        },
      },
      {
        path: 'node-load',
        element: React.createElement(NodeLoad),
        meta: {
          title: '懒加载',
          icon: React.createElement(CompassOutlined),
        },
      },
      {
        path: 'observer',
        element: React.createElement(Observer),
        meta: {
          title: '发布订阅模式',
          icon: React.createElement(CopyrightOutlined),
        },
      },
    ],
  },

];

export default routes;
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import Header from './doc/components/header/Header'
import Main from './doc/components/main/Main'
import Footer from './doc/components/footer/Footer'
import NavBar from './doc/components/navbar/NavBar'

import InstallPage from './doc/pages/InstallPage'
import StartPage from './doc/pages/StartPage'
import ButtonPage from './doc/pages/ButtonPage'
import GridPage from './doc/pages/GridPage'
import AffixPage from './doc/pages/AffixPage'
import PagerPage from './doc/pages/PagerPage'
import CascaderPage from './doc/pages/CascaderPage'
import CheckBoxPage from './doc/pages/CheckBoxPage'
import DatePickerPage from './doc/pages/DatePickerPage'
import SwitchPage from './doc/pages/SwitchPage'
import CollapsePage from './doc/pages/CollapsePage'
import PopoverPage from './doc/pages/PopoverPage'
import TabsPage from './doc/pages/TabsPage'
import MessagePage from './doc/pages/MessagePage'
import ModalPage from './doc/pages/ModalPage'
import SpinPage from './doc/pages/SpinPage'
import TransitionPage from './doc/pages/TransitionPage'

import { Icon } from 'spike-react'
import logo from './logo.svg'
import './doc/style/App.css'
import 'spike-react/lib/spike-react.css'

import { Provider } from './doc/Context'

interface IRouteOption {
  path: string // 路由路径，唯一标志
  content: string | React.ReactNode // 在导航栏中显示的内容
  page?: any // 路由对应的页面，如果有 children 属性，此属性可不设置
  className?: string // 自定义类名
  style?: React.CSSProperties // 自定义样式
  itemGroup?: boolean // SubMenu 分组模式
  showArrow?: boolean // SubMenu 箭头图标
  children?: IRouteOption[]
}

interface IAppState {

  routes: IRouteOption[]
}
class App extends React.Component<{}, IAppState> {

  public state = {
    routes: [
      {
        path: '/install',
        content: 'Install',
        page: InstallPage
      },
      {
        path: '/start',
        content: 'Start',
        page: StartPage
      },
      {
        path: '/components',
        content: (
          <div
            style={{
              height: '40px',
              fontSize: '14px',
              lineHeight: '40px',
              fontWeight: 600,
              color: 'rgba(0, 0, 0, 0.65)'
            }}
          >
            Components
          </div>
        ),
        itemGroup: true,
        showArrow: false,
        children: [
          {
            path: '/common',
            content: '通用',
            itemGroup: true,
            showArrow: false,
            children: [
              {
                path: '/button',
                content: 'Button',
                page: ButtonPage
              }
            ]
          },
          {
            path: '/layout',
            content: '布局',
            itemGroup: true,
            showArrow: false,
            children: [
              {
                path: '/grid',
                content: 'Grid',
                page: GridPage
              }
            ]
          },
          {
            path: '/navigation',
            content: '导航',
            itemGroup: true,
            showArrow: false,
            children: [
              {
                path: '/affix',
                content: 'Affix',
                page: AffixPage
              },
              {
                path: '/pager',
                content: 'Pager',
                page: PagerPage
              }
            ]
          },
          {
            path: '/dataWrite',
            content: '数据录入',
            itemGroup: true,
            showArrow: false,
            children: [
              {
                path: '/cascader',
                content: 'Cascader',
                page: CascaderPage
              },
              {
                path: '/checkBox',
                content: 'CheckBox',
                page: CheckBoxPage
              },
              {
                path: '/datePicker',
                content: 'DatePicker',
                page: DatePickerPage
              },
              {
                path: '/switch',
                content: 'Switch',
                page: SwitchPage
              }
            ]
          },
          {
            path: '/dataShow',
            content: '数据展示',
            itemGroup: true,
            showArrow: false,
            children: [
              {
                path: '/collapse',
                content: 'Collapse',
                page: CollapsePage
              },
              {
                path: '/popover',
                content: 'Popover',
                page: PopoverPage
              },
              {
                path: '/tabs',
                content: 'Tabs',
                page: TabsPage
              }
            ]
          },
          {
            path: '/info',
            content: '信息反馈',
            itemGroup: true,
            showArrow: false,
            children: [
              {
                path: '/message',
                content: 'Message',
                page: MessagePage
              },
              {
                path: '/modal',
                content: 'Modal',
                page: ModalPage
              },
              {
                path: '/spin',
                content: 'Spin',
                page: SpinPage
              }
            ]
          },
          {
            path: '/other',
            content: '其他',
            itemGroup: true,
            showArrow: false,
            children: [
              {
                path: '/transition',
                content: 'Transition',
                page: TransitionPage
              }
            ]
          }
        ]
      }
    ]
  }

  public renderRoute = (routes: IRouteOption[]): any => {
    return routes.map(route => {
      if (route.children && route.children.length) {
        return this.renderRoute(route.children)
      } else {
        return (
          <Route key={route.path} path={route.path} component={route.page} />
        )
      }
    })
  }

  public render() {
    const { routes } = this.state
    return (
      <Provider value={routes}>


        <Router>
          <div className="App">
            <Header>
              <div
                style={{
                  height: '60px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', paddingLeft: 30 }}>
                  <img style={{ width: 30, height: 30 }} src={logo} alt="" />
                  <span style={{ fontSize: 20, fontWeight: 700 }}>Spike-react</span>
                </div>

                <div style={{ paddingRight: '20px' }}>
                  <Icon
                    name="github"
                    style={{ cursor: 'pointer', marginRight: '10px' }}
                    size={24}
                    onClick={() =>
                      window.open(
                        'https://github.com/yzlvbk/sipke-react-ui',
                        '_blank'
                      )
                    }
                  />
                </div>
              </div>
            </Header>

            <Main>
              <Route path="/" component={NavBar} />
              <div style={{ padding: '20px', flexGrow: 1 }}>
                {this.renderRoute(routes)}
              </div>
            </Main>

            {/* <Footer>Footer 内容自行替换</Footer> */}
          </div>
        </Router>
      </Provider>
    )
  }

}

export default App;

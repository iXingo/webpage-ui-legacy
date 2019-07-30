import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import './index.css'

class NavHeader extends Component {

    render() {
        return (
        <div>
            <Nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
            <div className="container">
                <a className="py-2" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="d-block mx-auto">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
                        <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                        <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                        <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                        <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                        <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
                    </svg>
                </a>
                <a className="navbar-brand js-scroll-trigger mx-1" href="#page-top">星狗网</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger text-light" href="/index">首页</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger text-light" href="/topics">观点</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger text-light" href="/blogs">博客</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger text-light" href="/tweets">说说</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger text-light" href="/activities">活动</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger text-light" href="/lives">生活</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger text-light" href="/service/index">服务</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger text-light" href="/users/messages">私信</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger text-light" href="/users/friends">好友</a>
                        </li>
                        <li className="nav-item" style={{paddingRight: '80px'}}>
                            <a className="nav-link js-scroll-trigger text-light" href="/about">关于</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger text-warning" href="/login">登录</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger text-warning" href="/register">注册</a>
                        </li>
                    </ul>
                </div>
            </div>
            </Nav>
        </div>
        );
    }
}

export default NavHeader;
import React from 'react'
import  './index.css'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()

    const pathname = window.location.pathname

    const list = [
        {
            key: '/first',
            name: '首页',
        },
        {
            key: '/jisuanqi',
            name: '计算器',
        },
        {
            key: '/bbbb',
            name: 'bbb',
        },        {
            key: '/aaaa',
            name: 'aaaa',
        }
    ]

  return (
    <div className='home'>
        <div className='nav'>
            <div className='header'>导航</div>
            <div className='list'>
                {/* <div className={`item ${pathname.includes('/first') ? 'active' : ''}`} onClick={() => navigate('/home/first')}>首页</div>
                <div className={`item ${pathname.includes('/jisuanqi') ? 'active' : ''}`} onClick={() => navigate('/home/jisuanqi')}>计算器</div>
                <div className='item' onClick={() => navigate('/home/abc')}>bbbbbbb</div>
                <div className='item' onClick={() => navigate('/home/vvvsa')}>ccc</div>
                <div className='item' onClick={() => navigate('/home/etat')}>ddddd</div>
                <div className='item'>eeee</div> */}
                {
                    list.map((item) => <div className={`item ${pathname.includes(item.key) ? 'active' : ''}`} key={item.key} onClick={() => navigate(`/home${item.key}`)}>{item.name}</div>)
                }
            </div>
        </div>
        <div className='content'>
            <Outlet />
        </div>
    </div>
  )
}
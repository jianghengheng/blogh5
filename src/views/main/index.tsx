
import { useState, useEffect, memo, useRef } from 'react'
import avator from '@/assets/avatar.jpg'
import './index.scss'
import '../../assets/iconfont/iconfont.css'
import { Input, Avatar } from '@nutui/nutui-react';
import { Notice } from '@nutui/icons-react';
function Main() {



    return (
        <>
            <div className='w-100% flex justify-around items-center'>
                <div>首页</div> <div> <Input placeholder="请输入文本" /></div><div className='flex  items-center'>
                    <Notice  ></Notice>
                    <Avatar
                    className='ml-10px'
                        size="small"
                        src={avator}
                    />
                </div>
            </div>
            <div className='h-10px bg-#f2f3f5 w-100%'>
            </div>
            
            <div className='userInfo'>
            <video data-scroll data-scroll-direction data-scroll-speed autoPlay loop muted playsInline className='trm-banner-cover trm-active-el'>
                        <source src="//cdn.moji.com/websrc/video/autumn20190924.mp4" type="video/mp4; " />
                    </video>
        
                <div className='trm-mc-header'>
                    <div className='trm-avatar' >
                   
                        <img className='avatar' src={avator} alt="" />
                    </div>
                    <h5>衡衡蒋</h5>
                    <div className='trm-label'>
                        <span className='trm-typed-text'>前端工程师</span>
                    </div>
                    <div className='point'></div>
                    <div className='trm-social'>
                        <a className="iconfont icon-github-fill" target='_blank' href="https://github.com/jianghengheng/" />

                        <a className="iconfont icon-weixin" href="weixin://"
                            onClick={() => { 'PIWI_SUBMIT.Weixin_Open()' }} ></a>
                        <a className="iconfont icon-youxiang" href="mailto:wsjiangheng@163.com"></a>
                        <a className="iconfont icon-phone" title='16622136952' href="tel:16622136952">

                        </a>


                    </div>
                    <div className='point'></div>
                    <div className='Info'>
                        <ul>
                            <li>
                                <div>居住地</div>
                                <div>Earth</div>
                            </li>
                            <li>
                                <div>城市</div>
                                <div>chengdu</div>
                            </li>
                            <li>
                                <div>年龄</div>
                                <div>25</div>
                            </li>
                            <li>
                                <div>联系方式</div>
                                <div>16622136952</div>
                            </li>
                            <li>
                                <div>邮箱</div>
                                <div>wsjiangheng@163.com</div>
                            </li>

                        </ul>
                    </div>
                    <div className='point'></div>
                    <div>
                        <a href="mailto:wsjiangheng@163.com" className='button '>联系我
                            <i className='iconfont icon-youxiang'></i></a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default memo(Main)

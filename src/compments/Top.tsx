
import { useState, useEffect, memo, useRef } from 'react'
import avator from '@/assets/avatar.jpg'
import { Input, Avatar } from '@nutui/nutui-react';
import {useNavigate} from 'react-router-dom'
import { Notice, ArrowDown2 } from '@nutui/icons-react';
function Top(props) {
    const {currentMenuType=0 } =props
    const Navigation=useNavigate()
    const menu = [
        {
            id: 0,
            name: '首页',
            path: '/'

        },
        {
            id: 1,
            name: '文章',
            path: "/article"

        },
        {
            id: 2,
            name: '留言板',
            path: "/message"

        },
    ]
    const [currentMenu, setcurrentMenu] = useState<number>(currentMenuType)
    const [openMenu, setopenMenu] = useState<boolean>(false)
    const openMneu = () => {
        setopenMenu(!openMenu)
    }
    const changemenu = (id: number,path:string) => {
        setcurrentMenu(id)
        setopenMenu(false)
        Navigation(path)

    }
    return (
        <>
            <div className='w-100% flex justify-around items-center position-relative '>
                <div className='flex items-center cursor-pointer' onClick={openMneu}>
                    <div className='text-13px'>
                        {menu[currentMenu].name}
                    </div>
                    <ArrowDown2></ArrowDown2>
                </div>
                <div> <Input placeholder="请输入文本" /></div>
                <div className='flex  items-center'>
                    <Notice  ></Notice>
                    <Avatar
                        className='ml-10px'
                        size="small"
                        src={avator}
                    />


                </div>
                {openMenu ? <div className='position-absolute w-100px h-250px bg-#fff z-999 left-0px top-40px text-center'>
                    {
                        menu.map((res: { id: number, name: string ,path:string}) => {
                            return <div onClick={() => changemenu(res.id,res.path)} key={res.id} className={'text-12px mt-10px color-#515767'} style={{ color: currentMenu == res.id ? '#1e80ff' : '' }}>{res.name}</div>

                        })}
                </div> : <></>}

            </div>
            {props.children}
        </>
    )
}

export default Top

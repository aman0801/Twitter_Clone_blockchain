
// import { profile } from 'console';

import { FiMoreHorizontal } from 'react-icons/fi' //2.3K (gzipped:1K)
import { VscTwitter } from 'react-icons/vsc'  //3.1K (gzipped:1.5K)
import  SidebarOption  from './SidebarOption';
import { useState } from 'react';
import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from 'react-icons/ri'
import { BiHash } from 'react-icons/bi'
import { FiBell } from 'react-icons/fi'
import { HiOutlineMail, HiMail } from 'react-icons/hi'
import {CgMoreO} from 'react-icons/cg' 
import { FaRegListAlt, FaHashtag, FaBell } from 'react-icons/fa'
import{

    BsBookmark,
    BsBookmarkFill,
    BsPerson,
    BsPersonFill
} from 'react-icons/bs'



// ! Change Color


const style = {
    wrapper: 'flex-[0.7] px-8 flex flex-col',
    twitterIconContainer: 'text-3xl m-4',
    tweetButton: ' bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer',
    navContainer: 'flex-1',
    profileButton: 'flex items-center mb-6 cursor-pointer hover:bg-[#333c45] rounded-[100px] p-2',
    profileLeft: 'flex item-center justify-center mr-4',
    profileImage: 'height-12 w-12 rounded-full',
    profileRight: 'flex-1 flex',
    details: 'flex-1',
    name: 'text-lg',
    handle: 'text-[#8899a6]',
    moreContainer: 'flex items-center mr-2',
}

function Sidebar({initialSelectedIcon = 'Home'}) {
    const[Selected, setSelected] = useState(initialSelectedIcon)
    return (
        <div className={style.wrapper}>
            <div className={style.twitterIconContainer}>
                <VscTwitter />
            </div>
            <div className={style.navContainer}>
                <SidebarOption 
                Icon={Selected === 'Home' ? RiHome7Fill : RiHome7Line}
                text='Home'
                isActive={Boolean(Selected==='Home')}
                setSelected={setSelected}
                redirect={'/'}
                
                />
                <SidebarOption
          Icon={Selected === 'Explore' ? FaHashtag : BiHash}
          text='Explore'
          isActive={Boolean(Selected === 'Explore')}
          setSelected={setSelected}
        />
        <SidebarOption
          Icon={Selected === 'Notifications' ? FaBell : FiBell}
          text='Notifications'
          isActive={Boolean(Selected === 'Notifications')}
          setSelected={setSelected}
        />
        <SidebarOption
          Icon={Selected === 'Messages' ? HiMail : HiOutlineMail}
          text='Messages'
          isActive={Boolean(Selected === 'Messages')}
          setSelected={setSelected}
        />
        <SidebarOption
          Icon={Selected === 'Bookmarks' ? BsBookmarkFill : BsBookmark}
          text='Bookmarks'
          isActive={Boolean(Selected === 'Bookmarks')}
          setSelected={setSelected}
        />
        <SidebarOption
          Icon={Selected === 'Lists' ? RiFileList2Fill : FaRegListAlt}
          text='Lists'
          isActive={Boolean(Selected === 'Lists')}
          setSelected={setSelected}
        />
        <SidebarOption
          Icon={Selected === 'Profile' ? BsPersonFill : BsPerson}
          text='Profile'
          isActive={Boolean(Selected === 'Profile')}
          setSelected={setSelected}
          redirect={'/profile'}
        />
                <SidebarOption Icon={CgMoreO} text="More" />
                <div className={style.tweetButton}>Mint</div>
            </div>
            <div className={style.profileButton}>
                <div className={style.profileLeft}></div>
                <div className={style.profileRight}>
                    <div className={style.details}>
                        <div className={style.name}>Mr Aghori</div>
                        <div className={style.handle}>
                            @0x22dF...5xf2df
                        </div>
                    </div>
                    <div className={style.moreContainer}>
                        <FiMoreHorizontal />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Sidebar
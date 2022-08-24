// import { timeStamp } from 'console';
import { BsStars } from 'react-icons/bs';
import  TweetBox  from './TweetBox';
import  Post  from './Post';

const style={
    wrapper:'flex-[2] border-r border-l border-[#38444d]',
    header:'sticky top-0 z-10 p-4 flex justify-between items-center', //bg-[#15202b]
    headerTitle:'text-xl font-bold'
}

const tweets=[
    {
    displayName: 'Aghori',
    userName: '0x64fE09840B92EE36Baa76A7B261c52F08A4ffeC9',
    avatar: 'http://janskwara.com/wp-content/uploads/2020/03/5-aghori-with-human-body-1200x1798.jpg',
    text: 'lets go',
    isProfileImageNFT: false,
    timeStamp:'2022-08-01T12:00:00.000Z',
    },

    {
        displayName: 'Aghori',
        userName: '0x64fE09840B92EE36Baa76A7B261c52F08A4ffeC9',
        avatar: 'http://janskwara.com/wp-content/uploads/2020/03/5-aghori-with-human-body-1200x1798.jpg',
        text: 'lets go',
        isProfileImageNFT: false,
        timeStamp:'2022-08-01T12:00:00.000Z',
    },

    {
        displayName: 'Aghori',
        userName: '0x64fE09840B92EE36Baa76A7B261c52F08A4ffeC9',
        avatar: 'http://janskwara.com/wp-content/uploads/2020/03/5-aghori-with-human-body-1200x1798.jpg',
        text: 'lets go',
        isProfileImageNFT: false,
        timeStamp:'2022-08-01T12:00:00.000Z',
    },

    {
        displayName: 'Aghori',
        userName: '0x64fE09840B92EE36Baa76A7B261c52F08A4ffeC9',
        avatar: 'http://janskwara.com/wp-content/uploads/2020/03/5-aghori-with-human-body-1200x1798.jpg',
        text: 'lets go',
        isProfileImageNFT: false,
        timeStamp:'2022-08-01T12:00:00.000Z',
    },
]

function Feed(){
    return(
        <div className={style.wrapper}>
            <div className={style.header}>
                <div className={style.headerTitle}>Home</div>
                <BsStars />
            </div>
            <TweetBox />
            {
                tweets.map((tweet,index)=>(
                    <Post
                    key={index}
                    displayName={tweet.displayName}
                    userName={`${tweet.userName.slice(0,4)}...${tweet.userName.slice(-4)}`}
                    // userName={tweet.userName}
                    avatar={tweet.avatar}
                    text={tweet.text}
                    isProfileImageNFT={tweet.isProfileImageNFT}
                    timeStamp={tweet.timeStamp}
                    />
                ))
            }
        </div>
    )
}

export default Feed
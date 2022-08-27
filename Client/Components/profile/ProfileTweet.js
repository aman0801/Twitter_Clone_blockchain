//import { react } from react;
import Post from '../home/Post'

const style = {
    wrapper: `no-scrollbar`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}

const tweets = [
    {
        displayName: 'Aghori',
        userName: '0x64fE09840B92EE36Baa76A7B261c52F08A4ffeC9',
        avatar: 'http://janskwara.com/wp-content/uploads/2020/03/5-aghori-with-human-body-1200x1798.jpg',
        text: 'lets go',
        isProfileImageNFT: false,
        timeStamp: '2022-08-01T12:00:00.000Z',
    },

    {
        displayName: 'Aghori',
        userName: '0x64fE09840B92EE36Baa76A7B261c52F08A4ffeC9',
        avatar: 'http://janskwara.com/wp-content/uploads/2020/03/5-aghori-with-human-body-1200x1798.jpg',
        text: 'lets go',
        isProfileImageNFT: false,
        timeStamp: '2022-08-01T12:00:00.000Z',
    },

    {
        displayName: 'Aghori',
        userName: '0x64fE09840B92EE36Baa76A7B261c52F08A4ffeC9',
        avatar: 'http://janskwara.com/wp-content/uploads/2020/03/5-aghori-with-human-body-1200x1798.jpg',
        text: 'lets go',
        isProfileImageNFT: false,
        timeStamp: '2022-08-01T12:00:00.000Z',
    },

    {
        displayName: 'Aghori',
        userName: '0x64fE09840B92EE36Baa76A7B261c52F08A4ffeC9',
        avatar: 'http://janskwara.com/wp-content/uploads/2020/03/5-aghori-with-human-body-1200x1798.jpg',
        text: 'lets go',
        isProfileImageNFT: false,
        timeStamp: '2022-08-01T12:00:00.000Z',
    },
]

const ProfileTweet = () => {
    return (
        <div className={style.wrapper}>
            {tweets?.map((tweet, index) => (
                <Post
                    key={index}
                    displayName="Aghori"
                    userName={`${tweet.userName.slice(0, 4)}...${tweet.userName.slice(-4)}`}
                    text={tweet.tweet}
                    avatar={tweet.profileImage}
                    timestamp={tweet.timeStamp}
                    isProfileImageNft={tweet.isProfileImageNFT}
                />
            ))}
        </div>
    )
}

export default ProfileTweet
import Sidebar from '../Components/Sidebar'
import  Feed  from '../Components/home/Feed';
import  Widgets  from '../Components/Widgets';

const style = {
  wrapper:'flex justify-center h-screen w-screen select-none bg-[#1502b] text white',
  content:'max-w-[1400px] w-2/3 flex justify-between'
}
export default function Home(){
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
      <Sidebar/>
      <Feed /> 
      <Widgets />
      </div>
    </div>
  )
}



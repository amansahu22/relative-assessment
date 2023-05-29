import {Button} from '../components'
import {profile,cycle} from '../assets'
import './Home.css'

type HomeProps = {
    open: () => void
}

const Home = ({open}:HomeProps) => {
    return (
        <div className='home__container flex flex-col w-1/3 p-6'>
            <div className='w-full  flex flex-row justify-between items-center'>
                <p className='px-4 py-2 bg-[#14172B] rounded-2xl text-white text-opacity-90 font-jamjuree font-bold text-sm'>Most Played</p>
                <p className='question-mark'>?</p>
            </div>
            <div className='flex flex-row justify-between items-center mt-5'>
                <img src={profile} alt="user" />
                <img src={cycle} alt="cycle" />
                <img src={profile} alt="user" />
            </div>
            <div className='my-6 mb-10 flex flex-col gap-2'>
                <h2 className='font-tomorrow font-semibold text-base text-white text-opacity-90'>Multi-user Lot</h2>
                <p className='font-tomorrow text-sm font-normal text-white text-opacity-70 opacity-80 self-stretch '>In this lot multiple people will bet against you. The condition for the lot to start is both sides should have equal funds.</p>
            </div>
            <Button onClick={open} >Create Lot</Button>
        </div>
    )
}

export default Home
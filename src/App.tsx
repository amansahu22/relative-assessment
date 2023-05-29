import {useState} from 'react'
import {Home,ModalOne,ModalTwo,ModalThree,Modal} from './components';
import {crypto1,crypto2} from './assets'

const asset1={
  id:'001',
  url:crypto1,
  name:'Ethereum'
}

const asset2={
  id:'002',
  url:crypto2,
  name:'Avalanche'
}

import './App.css'
function App() {

  const openModalHandler = () => {
    setOpenModal(true);
  }

  const closeModalHandler = () => {
    setCurrentStep(1);
    setOpenModal(false);
  }

  const setCurrentStepHandler = (val:number) =>{
    setCurrentStep(val);
  } 

  const [ openModal, setOpenModal] = useState<true | false>(false);
  const [currentStep,setCurrentStep] = useState(1);

  return (
    <div className='container m-0 p-0 flex justify-center items-center bg-background'>
      {
        !openModal && <Home open={openModalHandler} />
      }
      {
        openModal && <Modal>

          { currentStep === 1 && <ModalOne closeModal={closeModalHandler} current={currentStep} setCurrent={setCurrentStepHandler}/>}
          
          { currentStep === 2 && <ModalTwo closeModal={closeModalHandler} current={currentStep} setCurrent={setCurrentStepHandler} />}
          
          { currentStep === 3 && <ModalThree yourAsset={asset1} opposingAsset={asset2} closeModal={closeModalHandler} current={currentStep} setCurrent={setCurrentStepHandler} />}
          
        </Modal>
      }      
    </div>
  )
}

export default App

import './Progress.css';

type ProgressProps={
    current:1|2|3
}


const Progress = ({current}:ProgressProps) => {

    let classOne;
    let classTwo;
    let classThree;

    switch(current){
        case 1:
            classOne="progress__rounded progress__rounded__active";
            classTwo="progress__rounded progress__rounded__inactive";
            classThree="progress__rounded progress__rounded__inactive";
            break;
        case 2:
            classOne="progress__rounded progress__rounded__completed";
            classTwo="progress__rounded progress__rounded__active";
            classThree="progress__rounded progress__rounded__inactive";
            break;
        case 3:
            classOne="progress__rounded progress__rounded__completed";
            classTwo="progress__rounded progress__rounded__completed";
            classThree="progress__rounded progress__rounded__active";
            break;
    }

  return (
    <div className="my-5 flex justify-between items-center">
        <div className={classOne}>1</div>
        <div className='progress__bar'></div>
        <div className={classTwo}>2</div>
        <div className='progress__bar'></div>
        <div className={classThree}>3</div>
    </div>
  )
}

export default Progress
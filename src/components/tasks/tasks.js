import React from 'react';
import './tasks.css';

import Button from '../button'



const Tasks = ({tasks,closeWindow}) =>    {
    
    return (
        <div className="tasks window">
            <TasksView myTasks={tasks}  closeWindow={closeWindow}/>
        </div>
    );
}



const TasksView = ({ myTasks,closeWindow }) => {
    const elements = myTasks.map((task) => {
        switch(task.type) {
            case 'kings': 
                task.text = 'Выйграть три игры, разложив всех королей	'
                break;
            case'time': 
                task.text = 'Выйграть три игры, каждую менее чем за 3 минуты	'
                break;
            case'tournaments': 
                task.text = 'Выйграть пять турниров подряд	'
                break;
            default:
                task.text = ''
                break;
        }
        const { type, progress, text } = task;

        return (
            <div key={type} className="tasks__item">
                <div className="tasks__block">
                    <div className="tasks__image">
                        <img src={`/task-${type}.png`}  alt="" />
                    </div>
                    <div>
                        <div className="tasks__text">
                            {text}
                        </div>
                        <div className="tasks__progressbar">
                            <div className="inner" style={{width: `${progress}%`}}>

                            </div>
                        </div>
                    </div>
                </div>
                
                <Button progress={progress} closeWindow={() => closeWindow()}/>
            </div>
        );
    });

    
    return (
      <React.Fragment>
          {elements}
      </React.Fragment>
    );
  };

  export default Tasks
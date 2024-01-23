import React, {useState} from 'react';

import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';


const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    {id: 'cg1', text: 'Finish the Course'},
    {id: 'cg2', text: 'Learn all about the Course Main Topic'},
    {id: 'cg3', text: 'Help other student in the Course Q&A'},
  ]);
  


const addNewGoalHandler = newGoal =>{
  // setCourseGoals(courseGoals.concat(newGoal));
  setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
};

  return (
    <div className='course-goals'>
      <h2>Course Goals</h2>
      <GoalList goals={courseGoals} />
      <NewGoal  onAddGoal={addNewGoalHandler} />
    </div>
  );
};



export default App;

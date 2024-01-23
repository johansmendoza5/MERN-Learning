import React, {useState} from 'react';

import './NewGoal.css'

const NewGoal = props => {
    const [eneteredText, setEnteredText] = useState('');
    // let eneteredText = "";

    const addGoalHandler = event => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: eneteredText
        };

        // console.log(eneteredText);
        // eneteredText = '';
        setEnteredText('');

        props.onAddGoal(newGoal);
    };

    const textChangeHandler = event => {
      setEnteredText(event.target.value);
    }

    return (
      <form className='new-goal' onSubmit={addGoalHandler}>
        <input type="text" value={eneteredText} onChange={textChangeHandler} />
        <button type='submit'>Add Goal</button>
      </form> 
    )
};

export default NewGoal;
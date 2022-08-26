import { useRef, useState } from 'react';

const SimpleInput = (props) => {
    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState('');

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        // exit function if user input is empty on submit
        if (enteredName.trim() === '') {
            return;
        }

        console.log('enteredName', enteredName);
        console.log('nameInputRef', nameInputRef);
        const enteredValue = nameInputRef.current.value;
        console.log('enteredValue', enteredValue);
        // reset name value
        setEnteredName('');
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label htmlFor="name">Your Name</label>
                <input
                    ref={nameInputRef}
                    type="text"
                    id="name"
                    onChange={nameInputChangeHandler}
                />
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;

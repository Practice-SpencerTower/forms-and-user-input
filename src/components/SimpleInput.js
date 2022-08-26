import { useRef, useState } from 'react';

const SimpleInput = (props) => {
    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameValid, setEnteredNameValid] = useState(false);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);

        if (enteredName.trim() !== '') {
            setEnteredNameValid(true);
        }
    };

    const nameInputBlurHandler = (event) => {
        setEnteredNameTouched(true);
        if (enteredName.trim() === '') {
            setEnteredNameValid(false);
        }
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        setEnteredNameTouched(true);

        // exit function if user input is empty on submit
        if (enteredName.trim() === '') {
            setEnteredNameValid(false);
            return;
        }

        setEnteredNameValid(true);

        console.log('enteredName', enteredName);
        console.log('nameInputRef', nameInputRef);
        const enteredValue = nameInputRef.current.value;
        console.log('enteredValue', enteredValue);
        // reset name value
        setEnteredName('');
    };

    const nameInputInvalid = !enteredNameValid && enteredNameTouched;
    const nameInputClasses = nameInputInvalid
        ? 'form-control invalid'
        : 'form-control';

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    ref={nameInputRef}
                    type="text"
                    id="name"
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                />
                {nameInputInvalid && (
                    <p className={'error-text'}>Name must not be empty.</p>
                )}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;

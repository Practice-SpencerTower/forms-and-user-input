import { useEffect, useState } from 'react';

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputInvalid = !enteredNameIsValid && enteredNameTouched;

    useEffect(() => {
        if (enteredNameIsValid) {
            setFormIsValid(true);
        } else {
            setFormIsValid(false);
        }
    }, [enteredNameIsValid]);

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);

        if (enteredName.trim() !== '') {
            setEnteredName(event.target.value);
        }
    };

    const nameInputBlurHandler = (event) => {
        setEnteredNameTouched(true);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        setEnteredNameTouched(true);

        // exit function if user input is empty on submit
        if (!enteredNameIsValid) {
            return;
        }

        setEnteredName(true);
        setEnteredNameTouched(false);

        console.log('enteredName', enteredName);
        // reset name value
        setEnteredName('');
    };

    const nameInputClasses = nameInputInvalid
        ? 'form-control invalid'
        : 'form-control';

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
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
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;

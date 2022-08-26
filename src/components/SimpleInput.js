import { useEffect, useState } from 'react';

const SimpleInput = (props) => {
    // *********** NAME ***********
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputInvalid = !enteredNameIsValid && enteredNameTouched;

    // *********** EMAIL ***********
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

    const enteredEmailIsValid = enteredEmail.includes('@');
    const emailInputInvalid = !enteredEmailIsValid && enteredEmailTouched;

    // Validate entire form

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    // NAME

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
        setEnteredEmailTouched(true);

        // exit function if user input is empty on submit
        if (!enteredNameIsValid || !enteredEmailIsValid) {
            return;
        }

        setEnteredName(true);
        setEnteredNameTouched(false);

        setEnteredEmail(true);
        setEnteredEmailTouched(false);

        console.log('enteredName', enteredName);
        console.log('enteredEmail', enteredEmail);
        // reset name value
        setEnteredName('');
        setEnteredEmail('');
    };

    const nameInputClasses = nameInputInvalid
        ? 'form-control invalid'
        : 'form-control';

    // EMAIL

    const emailInputChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
        if (enteredEmail.trim() !== '') {
            setEnteredEmail(event.target.value);
        }
    };

    const emailInputBlurHandler = (event) => {
        setEnteredEmailTouched(true);
    };

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

                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputBlurHandler}
                />
                {emailInputInvalid && (
                    <p className={'error-text'}>Email invalid.</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;

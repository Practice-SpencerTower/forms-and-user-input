import { useEffect, useState } from 'react';

import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputError,
        valueChangedHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput,
    } = useInput((value) => value.includes('@'));

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputError,
        valueChangedHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInput((value) => value.trim() !== '');

    // Validate entire form

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    // FORM

    const formSubmitHandler = (event) => {
        event.preventDefault();

        setEnteredNameTouched(true);
        setEnteredEmailTouched(true);

        // exit function if user input is empty on submit
        if (!enteredNameIsValid || !enteredEmailIsValid) {
            return;
        }

        resetNameInput();

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

    const emailInputClasses = emailInputInvalid
        ? 'form-control invalid'
        : 'form-control';

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                />
                {nameInputError && (
                    <p className={'error-text'}>Name must not be empty.</p>
                )}
            </div>
            <div className={emailInputClasses}>
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

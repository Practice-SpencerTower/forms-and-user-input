import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput,
    } = useInput((value) => value.trim() !== '');

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInput((value) => value.includes('@'));

    // Validate entire form

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    // FORM

    const formSubmitHandler = (event) => {
        event.preventDefault();

        // exit function if user input is empty on submit
        if (!enteredNameIsValid || !enteredEmailIsValid) {
            return;
        }

        console.log('enteredName', enteredName);
        console.log('enteredEmail', enteredEmail);

        resetNameInput();
        resetEmailInput();
    };

    const nameInputClasses = nameInputError
        ? 'form-control invalid'
        : 'form-control';

    const emailInputClasses = emailInputError
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
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                />
                {emailInputError && (
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

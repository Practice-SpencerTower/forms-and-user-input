import useInput from '../hooks/use-input';

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

const BasicForm = (props) => {
    const {
        value: firstNameValue,
        isValid: firstNameValid,
        hasError: firstNameHasError,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstName,
    } = useInput(isNotEmpty);
    const {
        value: lastNameValue,
        isValid: lastNameValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: resetLastName,
    } = useInput(isNotEmpty);
    const {
        value: emailValue,
        isValid: emailValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailName,
    } = useInput(isNotEmpty);

    // dynamically assign classes depending on error status
    const firstNameClasses = firstNameHasError
        ? 'form-control invalid'
        : 'form-control';
    const lastNameClasses = lastNameHasError
        ? 'form-control invalid'
        : 'form-control';
    const emailClasses = emailHasError
        ? 'form-control invalid'
        : 'form-control';

    return (
        <form>
            <div className="control-group">
                <div className="form-control">
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        id="name"
                        value={firstNameValue}
                        onChange={firstNameChangeHandler}
                        onBlur={firstNameBlurHandler}
                    />
                    {firstNameHasError && <p>Please enter first name.</p>}
                </div>
                <div className="form-control">
                    <label htmlFor="name">Last Name</label>
                    <input
                        type="text"
                        id="name"
                        value={lastNameValue}
                        onChange={lastNameChangeHandler}
                        onBlur={lastNameBlurHandler}
                    />
                    {lastNameHasError && <p>Please enter last name.</p>}
                </div>
            </div>
            <div className="form-control">
                <label htmlFor="name">E-Mail Address</label>
                <input
                    type="text"
                    id="name"
                    value={emailValue}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                />
                {emailHasError && <p>Please enter email.</p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;

import { useState } from 'react'
// import IconCheckBoxCheck from './assets/icon-checkbox-check.svg?react';
// import IconRadioSelected from './assets/icon-radio-selected.svg?react';
import IconSuccessCheck from './assets/icon-success-check.svg?react';
import { useForm } from "react-hook-form"
import ErrorMessage from './components/ErrorMessage';
import './App.scss'

function App() {
  const {
    register,
    watch,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm()

  const [isSubmited, setIsSubmited] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const watchRadio = watch("radio");

  const queryTypes = [
    { id: "GeneralEnquiry", text: "General Enquiry" },
    { id: "SupportRequest", text: "Support Request" }
  ];

  const onSubmit = (data) => {
    console.log(data)
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setIsSubmited(true)
    }, "1000");

    setTimeout(() => {
      reset()
      setIsSubmited(false)
    }, "5000");
  }

  return (
    <main>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='wrapper-columns'>
          <div className='form-group'>
            <label htmlFor="firstName">First Name <span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
            <input
              type="text"
              id="firstName"
              aria-required="true"
              aria-invalid={errors.firstName ? "true" : "false"}
              {...register("firstName", {
                required: true
              })}
              className={errors.firstName ? "error" : ""}
            />
            <ErrorMessage errors={errors} fieldName="firstName" />
          </div>

          <div className='form-group'>
            <label htmlFor="lastName">Last Name <span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
            <input
              type="text"
              id="lastName"
              aria-required="true"
              aria-invalid={errors.lastName ? "true" : "false"}
              {...register("lastName", {
                required: true
              })}
              className={errors.lastName ? "error" : ""}
            />
            <ErrorMessage errors={errors} fieldName="lastName" />
          </div>
        </div>

        <div className='form-group'>
          <label htmlFor="email">Email Address <span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
          <input
            type="text"
            id="email"
            aria-required="true"
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email adress"
              }
            })}
            className={errors.email ? "error" : ""}
          />
          <ErrorMessage errors={errors} fieldName="email" />
        </div>

        <div className='form-group'>
          <p>Query Type <span aria-hidden="true">*</span><span className="sr-only">(required)</span></p>
          <div className='wrapper-columns wrapper-radio'>
            {queryTypes.map((query) => (
              <label key={query.id} htmlFor={query.id} className={watchRadio === query.id ? "active" : ""}>
                <input
                  type="radio"
                  id={query.id}
                  value={query.id}
                  {...register("radio", {
                    required: true
                  })} />
                {query.text}
              </label>
            ))}
          </div>
          <ErrorMessage errors={errors} fieldName="radio" />
        </div>

        <div className='form-group'>
          <label htmlFor="message">Message <span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
          <textarea
            id="message"
            name="message"
            aria-required="true"
            aria-invalid={errors.message ? "true" : "false"}
            {...register("message", {
              required: true
            })}
            className={errors.message ? "error" : ""}
          />
          <ErrorMessage errors={errors} fieldName="message" />
        </div>

        <div className='form-group consent'>
          <label>
            <input
              type="checkbox"
              name="consent"
              aria-required="true"
              aria-invalid={errors.consent ? "true" : "false"}
              {...register("consent", {
                required: true
              })}
            />
            I consent to being contacted by the team <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
          </label>
          <ErrorMessage errors={errors} fieldName="consent" />
        </div>

        <button type="submit" onClick={() => clearErrors()}>
          {isLoading ? <div class="loader"></div> : 'Submit'}
        </button>
      </form>
      {isSubmited &&
        <div className='popup'>
          <h4><IconSuccessCheck /> Message Sent!</h4>
          <p>Thanks for completing the form. We'll be in touch soon!</p>
        </div>}
    </main>
  )
}

export default App

import { useState } from 'react'
// import IconCheckBoxCheck from './assets/icon-checkbox-check.svg?react';
// import IconRadioSelected from './assets/icon-radio-selected.svg?react';
// import IconSuccessCheck from './assets/icon-success-check.svg?react';
import { useForm } from "react-hook-form"
import './App.scss'

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

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
            />
            {errors.firstName && errors.firstName.type === "required" && (
              <span role="alert">This field is required</span>
            )}
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
            />
            {errors.lastName && errors.lastName.type === "required" && (
              <span role="alert">This field is required</span>
            )}
          </div>
        </div>

        <div className='form-group'>
          <label htmlFor="email">Email Address <span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
          <input
            type="email"
            id="email"
            aria-required="true"
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email", {
              required: true
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <span role="alert">This field is required</span>
          )}
        </div>

        <div className='form-group'>
          <p>Query Type <span aria-hidden="true">*</span><span className="sr-only">(required)</span></p>
          <div className='wrapper-columns wrapper-radio'>
            <label className='active'>
              <input
                type="radio"
                value="GeneralEnquiry"
                {...register("radio", {
                  required: true
                })} />
              General Enquiry
            </label>
            <label>
              <input
                type="radio"
                value="SupportRequest"
                {...register("radio", {
                  required: true
                })}
              />
              Support Request
            </label>
          </div>
          {errors.radio && errors.radio.type === "required" && (
            <span role="alert">This field is required</span>
          )}
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
          />
          {errors.message && errors.message.type === "required" && (
            <span role="alert">This field is required</span>
          )}
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
          {errors.message && errors.message.type === "required" && (
            <span role="alert">This field is required</span>
          )}
        </div>

        <button type="submit">
          Submit
        </button>
      </form>
    </main>
  )
}

export default App

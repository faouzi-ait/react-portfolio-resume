import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';

import Input from '../Input';

import {
  Title,
  HomeContainer,
  HomeContainerLayout,
} from '../styled-components-styles/ExpertiseStyles';

import { resetMessage } from '../../utils/utilities';

// import { t } from '../../i18n/translate';

function Contact() {
  // const { register, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const sendPostRequest = (url, body) =>
    axios.post(url, body).then((result) => result);

  const setErrorStyle = (name) => {
    return {
      borderColor: name ? 'red' : '',
      boxShadow: name ? '0 0 1.5px 1px red' : '',
    };
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    await sendPostRequest(
      // 'http://localhost:5000/api/v1/contact/message',
      'https://powerful-pink-antelope.cyclic.app/api/v1/contact/message',
      {
        name: data.name,
        lastname: '',
        email: data.email,
        message: data.message,
      }
    )
      .then((result) => {
        setConfirmation(result.data.message);
        setIsLoading(false);
        resetMessage(setConfirmation);
        setValue('message', '');
        reset();
      })
      .catch((error) => {
        console.log(error.message);
        setError('The message could not be sent, please try again...');
        resetMessage(setError);
      });
  };

  return (
    <HomeContainer id="contact">
      <HomeContainerLayout>
        <Title>Contact me</Title>
      </HomeContainerLayout>
      <div className="contact-display">
        <div className="contact-layout" id="contact-left">
          <div>
            <h1 className="h1">
              Let's chat.
              <br />
              <span className="subheader">Tell me about your project</span>
            </h1>
            <span className="contact-font">
              Let's build something together{' '}
              <span role="img" aria-label="together">
                🤟
              </span>
            </span>
          </div>
          <div className="border-separation"></div>
          <div className="contact-linkedin">
            Take a look at my LinkedIn profile{' '}
            <a
              href="https://www.linkedin.com/in/faouzia/"
              target="_blank"
              rel="noopener noreferrer">
              here
            </a>
          </div>
          <div className="contact-linkedin">
            Here is my GitHub repositories{' '}
            <a
              href="https://github.com/faouzi-ait"
              target="_blank"
              rel="noopener noreferrer">
              here
            </a>
          </div>
          <div className="contact-linkedin">
            Feel free to download my resume in a PDF format{' '}
            <a href="./resume.pdf" target="_blank" rel="noopener noreferrer">
              here
            </a>
          </div>
          <div className="border-separation"></div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="form" noValidate>
          <div>
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field: { ref, ...field } }) => (
                <Input
                  {...field}
                  type="text"
                  name="name"
                  label=""
                  aria-invalid={!!errors.name}
                  containerClass="input"
                  labelClassName="label"
                  className="field"
                  style={setErrorStyle(errors?.name)}
                  errorMessage={errors?.name ? 'Please enter your name' : ''}
                  placeholder="Please enter your full name"
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field: { ref, ...field } }) => (
                <Input
                  {...field}
                  type="text"
                  name="email"
                  label=""
                  aria-invalid={!!errors.email}
                  containerClass="input"
                  labelClassName="label"
                  className="field"
                  style={setErrorStyle(errors?.email)}
                  errorMessage={errors?.email ? 'Please enter your email' : ''}
                  placeholder="Please enter your email"
                />
              )}
            />
            <p style={{ fontWeight: 'bold', margin: '1.5rem 0 .5rem' }}>
              Tell me about you & your project*
            </p>
            <Controller
              name="message"
              control={control}
              rules={{ required: true }}
              render={({ field: { ref, ...field } }) => (
                <textarea
                  {...field}
                  type="textarea"
                  name="message"
                  rows="5"
                  cols="53"
                  aria-invalid={!!errors.message}
                  className="field"
                  style={setErrorStyle(errors?.message)}
                  placeholder="Please enter your message"></textarea>
              )}
            />
            {errors?.message && (
              <div
                style={{
                  color: 'red',
                  marginBottom: '.5rem',
                  fontWeight: 'bold',
                }}>
                Please enter your message
              </div>
            )}
          </div>
          {confirmation && <div className="confirm">{confirmation}</div>}
          {error && <div className="confirm-error">{error}</div>}
          <button
            type="submit"
            disabled={isLoading ? true : false}
            className="submit-btn">
            {isLoading ? 'Sending your message...' : 'Send'}
          </button>
        </form>
      </div>
      <div className="copyright">
        <span>
          Copyright (c) {new Date().getFullYear()} Built with ❤️ by Faouzi
          Aitelhara
        </span>
      </div>
    </HomeContainer>
  );
}

export default Contact;

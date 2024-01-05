"use client";

import {
  Typography,
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
} from "@material-tailwind/react";

import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-regular-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

config.autoAddCss = false;


export function ContactForm() {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_2yy14b5', 'template_4yvpa49', form.current, 'Ar107ncBy5pCEc_zV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
    });
    e.target.reset();
  }
  return (
    <section className="px-8 py-16" id="ContactSection">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Contact Me
        </Typography>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-gray/50">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <Typography variant="h4" color="white" className="mb-2">
                Contact Information
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-gray-500"
              >
                Feel free to reach out by filling out the contact form
                or through my socials. 
              </Typography>
              <a id="btn btn-primary" className="flex my-2 gap-5 hover:opacity-25" 
                href="https://www.linkedin.com/in/anthonychen02/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                <Typography variant="h6" color="white" className="my-auto ml-1">
                  LinkedIn
                </Typography>
              </a>
              <a className="btn btn-primary flex my-2 gap-5 hover:opacity-25"
                href="https://github.com/achen200" target="_blank">
                <FontAwesomeIcon icon={faGithubSquare} size="2x"/>
                <Typography variant="h6" color="white" className="my-auto ml-1">
                  GitHub
                </Typography>
              </a>
              <a className="btn btn-primary flex gap-4 hover:opacity-25"
                href="mailto:anthonychen2002@gmail.com" target="_blank">
                <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                <Typography variant="h6" color="white" className="my-auto ml-1">
                  Email
                </Typography>
              </a>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <form ref={form} action="#" onSubmit={sendEmail}>
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  {/* @ts-ignore */}
                  <Input
                    required
                    color="gray"
                    size="lg"
                    variant="static"
                    label="First Name"
                    name="first-name"
                    placeholder="eg. Lucas"
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }}
                  />
                  {/* @ts-ignore */}
                  <Input
                    required
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Last Name"
                    name="last-name"
                    placeholder="eg. Jones"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                </div>
                {/* @ts-ignore */}
                <Input
                  required
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Email"
                  type="email"
                  name="user-email"
                  placeholder="eg. lucas@mail.com"
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />

                {/* @ts-ignore */}
                <Textarea
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Your Message"
                  name="message"
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                <div className="w-full flex justify-end">
                  <Button className="w-full md:w-fit" color="gray" size="md" type="submit">
                    Send message
                  </Button>
                </div>
              </form>
            </div>
          </CardBody>
          
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;

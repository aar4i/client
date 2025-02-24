"use client";

import { sendMessage } from "../../api/telegram";
import { Button, Checkbox, Group, TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useState } from "react";
import '../styles/BannerSection.css';

export const Form = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
      phone: '',
      description: '',
      termsOfService: false,
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      phone: (value) => (/^\+?[0-9]{7,15}$/.test(value) ? null : 'Invalid phone number'),
    },
  });

  const handleSubmit = async (values) => {
    try {
      setIsLoading(true);
      console.log('Form submitted:', values);
      alert('Thank you for your submission!');
      
      const message = `Name: ${values.name}\n,Email: ${values.email}\n,Phone: ${values.phone}\n,Description: ${values.description}\n,Terms: ${values.termsOfService}`;
      await sendMessage(message);

      form.reset();
    } catch (e) {
      console.error(e);
      form.setFieldError("email", e as string);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="banner-section">
    <form onSubmit={form.onSubmit(handleSubmit)} className='banner-form'>
      <TextInput
        withAsterisk
        label="Your Name"
        placeholder="Your name"
        {...form.getInputProps('name')}
      />
      
      <TextInput
        withAsterisk
        label="Your Email"
        placeholder="your@email.com"
        {...form.getInputProps('email')}
      />

      <TextInput
        withAsterisk
        label="Your Phone Number"
        placeholder="+123456789"
        {...form.getInputProps('phone')}
      />
      
      <Textarea
        withAsterisk
        label="Describe what you'd like to do"
        placeholder="Your message here"
        {...form.getInputProps('description')}
      />

      <Group justify="flex-end" mt="md">
        <Button loading={isLoading} type="submit">Submit</Button>
      </Group>
    </form>
    </section>
  );
};

export default Form;

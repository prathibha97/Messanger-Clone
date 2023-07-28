'use client';
import useConversation from '@/app/hooks/use-conversation';
import axios from 'axios';
import { FC } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { HiPaperAirplane, HiPhoto } from 'react-icons/hi2';
import MessegeInput from './MessegeInput';

interface FormProps {}

const Form: FC<FormProps> = ({}) => {
  const { conversationId } = useConversation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      messege: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setValue('message', '', { shouldValidate: true });

    await axios.post(`/api/messages`, {
      ...data,
      conversationId,
    });
  };

  return (
    <div className='py-4 px-4 bg-white border-t flex items-center gap-2 lg:gap-4 w-full'>
      <HiPhoto size={30} className='text-sky-500' />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex items-center gap-2 lg:gap-4 w-full'
      >
        <MessegeInput
          id='message'
          register={register}
          errors={errors}
          placeholder='Write a messege'
          required
        />

        <button type='submit' className='rounded-full p-2 bg-sky-500 hover:bg-sky-600 cursor-pointer transition'>
          <HiPaperAirplane size={18} className='text-white'/>
        </button>
      </form>
    </div>
  );
};

export default Form;

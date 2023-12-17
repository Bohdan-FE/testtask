'use client'
import { FormData, Position } from '@/lib/types'
import style from './RegistrationForm.module.scss'
import { useState } from 'react'
import { SubmitBtn } from '../Buttons/Buttons'
import { SubmitHandler, useForm } from 'react-hook-form'
import { emailValidation, nameValidation, phoneValidation, photoValidation, positionValidation } from '@/lib/useFormValidation'



const resolver = async (data: FormData) => {
    return {
        values: data,
        errors: await validateAllFieldsAsync(data),
    };
};


function RegistrationForm({ positions }: { positions: Position[] }) {
    const [fileName, setFileName] = useState<String>('Upload your photo')
    const [values, setValues] = useState({ name: '', phone: '', email: '' })
    const { setValue, register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>();

    const inputFileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFileName(e.target.files[0].name)
            setValue('photo', e.target.files, { shouldValidate: true })
        }
    }


    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data)
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        let newValue: string
        switch (name) {
            case 'phone':
                newValue = value.replace(/[^0-9+]/g, ''); //дозволяє вводити лише цифри та +
                break
            case 'name':
                newValue = /^[A-Za-z]\s/.test(value) ? value.slice(0, 1) : value.replace(/^\s/, '') //забороня вводити першим та другим символом пробіл
                break
            case 'email':
                newValue = value.replace(/\s/, '') //забороняє вводити пробіли
                break
        }
        setValues(prev => ({ ...prev, [name]: newValue }))
    }
    console.log(errors)
    return (
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>

            <div className={style.inputContainer} >
                <input type="text" id="name" placeholder=''
                    style={errors?.name?.message ? { border: '2px solid var(--error-color)' } : {}}
                    {...register("name", nameValidation)} onChange={onChangeHandler} value={values.name} />
                <label htmlFor="name" style={errors?.name?.message ? { color: 'var(--error-color)' } : {}}>Your name</label>
                {errors?.name?.message && <span className={style.errorMessage}>{errors?.name?.message}</span>}
            </div>

            <div className={style.inputContainer}>
                <input type="email" id="email" placeholder=' '
                    style={errors?.email?.message ? { border: '2px solid var(--error-color)' } : {}}
                    {...register("email", emailValidation)} onChange={onChangeHandler} value={values.email} />
                <label htmlFor="email" style={errors?.email?.message ? { color: 'var(--error-color)' } : {}}>Email</label>
                {errors?.email?.message && <span className={style.errorMessage}>{errors?.email?.message}</span>}
            </div>

            <div className={style.inputContainer}>
                <input type="text" id='phone' placeholder=' '
                    style={errors?.phone?.message ? { border: '2px solid var(--error-color)' } : {}}
                    {...register("phone", phoneValidation)} onChange={onChangeHandler} value={values.phone} />
                <label htmlFor="phone" style={errors?.phone?.message ? { color: 'var(--error-color)' } : {}}>Phone</label>
                {errors?.phone?.message && <span className={style.errorMessage}>{errors?.phone?.message}</span>}
            </div>

            <div className={style.radio}>
                <legend>Select your position</legend>
                {positions.map(position =>
                    <div key={position.id}>
                        <input type="radio" id={position.name} value={position.id}
                            {...register("position_id", positionValidation)} />
                        <label htmlFor={position.name}>{position.name}</label>
                    </div>)}
            </div>

            <div className={style.file}>
                <label htmlFor="file" style={errors?.photo?.message ? { border: '2px solid var(--error-color)' } : {}}>Upload</label>
                <p style={errors?.photo?.message ? { borderColor: 'var(--error-color)' } : {}}>{fileName}</p>
                <input type="file" id='file' accept='.jpg, .jpeg' onChange={inputFileHandler} />
                {errors?.photo?.message && <span className={style.errorMessage}>{errors?.photo?.message}</span>}
            </div>
            <input type="text" {...register("photo", photoValidation)} />
            <SubmitBtn disabled={false} />
        </form>
    );
}

export default RegistrationForm;

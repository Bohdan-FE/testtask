'use client'
import { FormData, Position } from '@/lib/types'
import style from './RegistrationForm.module.scss'
import { useState } from 'react'
import { SubmitBtn } from '../Buttons/Buttons'
import { SubmitHandler, useForm } from 'react-hook-form'


function RegistrationForm({ positions }: { positions: Position[] }) {
    const [fileName, setFileName] = useState('Upload your photo')
    const [disabled, setDisabled] = useState(true)
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const inputFileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFileName(e.target.files[0].name)
        }
    }
    const onSubmit: SubmitHandler<FormData> = (data) => {
        alert('eveveveve')
    }
    return (
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>

            <div className={style.inputContainer}>
                <input type="text" id="name" placeholder=' '
                    {...register("name", { required: true, minLength: 2, maxLength: 60 })} />
                <label htmlFor="name">Your name</label>
            </div>

            <div className={style.inputContainer}>
                <input type="email" id="email" placeholder=' ' />
                <label htmlFor="email">Email</label>
            </div>

            <div className={style.inputContainer}>
                <input type="number" id='phone' placeholder=' ' />
                <label htmlFor="phone">Phone</label>
            </div>



            <div className={style.radio}>
                <legend>Select your position</legend>
                {positions.map(position =>
                    <div key={position.id}>
                        <input type="radio" id={position.name} value={position.id} name='position' />
                        <label htmlFor={position.name}>{position.name}</label>
                    </div>)}
            </div>

            <div className={style.file}>
                <label htmlFor="file">Upload</label>
                <span>{fileName}</span>
                <input type="file" id='file' onChange={inputFileHandler} />
            </div>
            <input type="submit" />
            <button type='submit'>eveveveve</button>
            <SubmitBtn disabled={!disabled} />
        </form>
    );
}

export default RegistrationForm;
'use client'
import { Form, PhotoDetails, Position } from '@/lib/types'
import { useContext, useEffect, useState } from 'react'
import { SubmitBtn } from '../Buttons/Buttons'
import { SubmitHandler, useForm } from 'react-hook-form'
import { emailValidation, nameValidation, phoneValidation, photoValidation, positionValidation } from '@/lib/useFormValidation'
import { getPhotoWidthHeight } from '@/lib/getPhotoDetails'
import { signUp } from '@/lib/registration'
import { getPositions } from '@/lib/getPositions'
import { getUsers } from '@/lib/getUsers'
import { usersContext } from '@/app/context'
import style from './RegistrationForm.module.scss'

function RegistrationForm() {
    const [fileName, setFileName] = useState<String>('Upload your photo')
    const [values, setValues] = useState({ name: '', phone: '', email: '' })
    const { setValue, register, handleSubmit, formState: { errors, isValid } } = useForm<Form>({
        mode: 'onBlur'
    });
    const [positions, setPositions] = useState<Position[] | []>([])
    const { setUsersData, setRegister } = useContext(usersContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPositions()
                if (data) setPositions(data.positions)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    const inputFileHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFileName(e.target.files[0].name)
            try {
                const photoResolution = await getPhotoWidthHeight(e.target.files)
                const photoDetails: PhotoDetails = { ...photoResolution, file: e.target.files[0] }
                setValue('photo', photoDetails, { shouldValidate: true })
            }
            catch (error) {
                throw new Error('Coudnt upload file')
            }
        }
    }

    const onSubmit: SubmitHandler<Form> = async (data) => {
        try {
            const registration = await signUp(data)
            if (registration.success) setRegister(registration)
            const newUsers = await getUsers(1, 6)
            setUsersData(newUsers)
        } catch (error) {
            console.log(error)
        }
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

    if (!positions) return

    return (<>
        <h2 className='title'>Working with POST request</h2>

        <form className={style.form} onSubmit={handleSubmit(onSubmit)} >

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
                {positions.map((position, index) =>
                    <div key={position.id}>
                        <input type="radio" id={position.name} value={position.id}
                            {...register("position_id", positionValidation)}
                            defaultChecked={index === 0} />
                        <label htmlFor={position.name}>{position.name}</label>
                    </div>)}
            </div>

            <div className={style.fileInput}>
                <label htmlFor="file" style={errors?.photo?.message ? { border: '2px solid var(--error-color)' } : {}}>Upload</label>
                <p style={errors?.photo?.message ? { border: '2px solid var(--error-color)', borderLeft: 'none' } : {}}>{fileName}</p>
                <input type="file" id='file' accept='.jpg, .jpeg' onChange={inputFileHandler} />
                {errors?.photo?.message && <span className={style.errorMessage}>{errors?.photo?.message}</span>}
            </div>
            <input type="text" hidden {...register("photo", photoValidation)} />

            <SubmitBtn disabled={!isValid} />
        </form>
    </>
    )
}

export default RegistrationForm;

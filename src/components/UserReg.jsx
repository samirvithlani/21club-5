import React from 'react'
import { useForm } from 'react-hook-form';

export const UserReg = () => {

    //register is an array of objects
    //handle submit is a function
    //formState is an object
    const {register, handleSubmit, formState: { errors }} = useForm({
        mode:"onTouched"
    });
    console.log("error...",errors);

    const submitHandler = (data) => {
        console.log(data);
    }

    const validationSchema = {
        name:{
            required:{
                value:true,
                message:"name is required..."
            }
        },
        email:{
            required:{
                value:true,
                message:"email is required..."
            },
            maxLength:{
                value:20,
                message:"email should not exceed 20 characters..."
            }
        },
        contact:{
            required:{
                value:true,
                message:"contact is required..."
            },
            pattern:{
                value:/^[6-9]{1}[0-9]{9}$/,
                message:"contact is not valid..."
            }
        }
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label htmlFor="firstName">Name</label>
                {/* <input type="text" {...register("name",{required:{value:true,message:"name is required..."}})}></input> */}
                <input type="text" {...register("name",validationSchema.name)}></input>
                {errors.name && <p style={{color:"red"}}>{errors.name.message}</p>}
            </div>
            <div>
                <label htmlFor="contact">Contact</label>
                <input type="text" {...register("contact",validationSchema.contact)}></input>
                {errors.contact && <p style={{color:"red"}}>{errors.contact.message}</p>}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" {...register("email",validationSchema.email)}></input>
                {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" {...register("password")}></input>
            </div>
            <div>
                <label htmlFor='gender'>GENDER</label>
                MALE : <input type="radio" value="male" name="gender" {...register("gender")}></input>
                FEMALE : <input type="radio" value="female" name="gender" {...register("gender")}></input>
            </div>
            <div>
                <label htmlFor="country">Country</label>
                <select  {...register("country")}>
                    <option value="india">INDIA</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                </select>
            </div>
            <div>
                <label htmlFor="skills">skills</label>
                <select multiple {...register("skills")}>
                    <option value="react">REACT</option>
                    <option value="angular">ANGULAR</option>
                    <option value="vue">VUE</option>
                </select>

            </div>
            <div>
                <label>Hobbies</label>
                CRICKET : <input type="checkbox" value="cricket" {...register("hobbies")}></input>
                FootBall: <input type="checkbox" value="football" {...register("hobbies")}></input>
                Badminton : <input type="checkbox" value="badminton" {...register("hobbies")}></input>

            </div>
            <div>
                <input type="submit" value="SUBMIT"></input>
            </div>

        </form>
    </div>
  )
}

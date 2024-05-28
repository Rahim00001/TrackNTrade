import {
    FormControl,
    FormLabel,
    Card,
    Input,
    CardBody,
} from '@chakra-ui/react'
// import { useContext } from "react";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // const { createUser, updateUserProfile } = useContext(AuthContext);
    // const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data)
        reset()
        // createUser(data.email, data.password)
        //     .then(result => {
        //         const loggedUser = result.user;
        //         console.log(loggedUser);
        //         updateUserProfile(data.name, data.photoURL)
        //             .then(() => {
        //                 console.log('user profile updated');
        //                 reset();
        //                 Swal.fire({
        //                     title: "Success",
        //                     text: "User Created Successfully",
        //                     icon: "success"
        //                 });
        //                 navigate('/')
        //             })
        //             .catch(error => console.log(error))
        //     })
    };
    return (
        <div className='w-full h-[85vh] flex justify-center items-center'>
            <Card maxW='sm' variant={'filled'} className='ml-5 p-5 w-full'>
                <CardBody>
                    <h1 className='text-center text-4xl font-bold mb-7'>Please Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <FormControl isRequired className='mb-3'>
                            <FormLabel>Your Email</FormLabel>
                            <Input type="email" focusBorderColor='lime' {...register("email", { required: true })} name="email" placeholder="email" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/
                            })} focusBorderColor='lime' name="password" placeholder='Password' />
                            {errors.password?.type === "required" && (
                                <p className="text-red-600">Password is required</p>
                            )}
                            {errors.password?.type === "minLength" && (
                                <p className="text-red-600">Password must be atleast 6 characters</p>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <p className="text-red-600">Password must be below 21 characters</p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className="text-red-600">Password must have one upperCase, one LowerCase, one Number and one Special characters</p>
                            )}
                        </FormControl>
                        <FormControl className="form-control mt-6">
                            <Input type="submit" value="Login" className="btn btn-primary" />
                        </FormControl>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
};

export default Login;
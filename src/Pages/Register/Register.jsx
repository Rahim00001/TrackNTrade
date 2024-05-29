import { Card, CardBody, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);
    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Registerd Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    };
    return (
        <div className='w-full h-[85vh] flex justify-center items-center'>
            <Card maxW='sm' variant={'filled'} className='ml-5 p-5 w-full'>
                <CardBody>
                    <h1 className='text-center text-4xl font-bold mb-7'>Please Register</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl isRequired className='mb-3'>
                            <FormLabel>Your Name</FormLabel>
                            <Input type="text" {...register("name", { required: true })} name="name" placeholder="name" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </FormControl>
                        <FormControl className='mb-3'>
                            <FormLabel>Photo URL</FormLabel>
                            <Input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" />
                            {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                        </FormControl>
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
                            <Input type="submit" value="Register" colorScheme='teal' variant='solid' />
                        </FormControl>
                    </form>
                    <p><small>Already have an acoount? <Link to="/login">Login</Link></small></p>
                </CardBody>
            </Card>
        </div>
    );
};

export default Register;
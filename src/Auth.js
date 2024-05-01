import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon  from "@mui/icons-material/HowToRegOutlined";


const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    // define value of state value define with empty string
    const [input, setInput] = useState({
        name:"",
        email: "",
        password: "",
    });
    // define handleChange - define constant change will be equal to the function (e) as the parameter which is an event - now need to update the values of the input so we need to update the state of the input as well. Add setInput grab prevState have the callback function inside then return prevState inside then have the obj. inside that. have prevState inside that obj. after that need to add the name of the property of the text fields - grab the name property of the event.target.value of every text field then grab the value of the text field as well - this is how we update this state inside that. 
    // target the name property of that ext field - name is the same name we defined in the input - then we will just dynamically update the value of that name only

    //  spread syntax or spread operator. It allows an iterable (such as an array) to be expanded into individual elements. It is commonly used for concatenating arrays, passing arguments to functions, or copying array or object properties.

    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }));
    }
    
    // now we need to declare the handleSubmit call to the function. have the event as the parameter, then have handleSubmit here - first thing we want to do is prevent the default behavior - because the form data sends a new http request whenever submit button is clicked. need to prevent that also. now event default is now called and now we can log the values inside. grab values of input 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input)
    }

    // declare new function the resetState change the state of the setIsSignup so it will equal to the previous value of the signUp after that need to reset the state of the input. setInput so by default value of the input will be there. so the input will have the value as the name, email, and password to equal empty again.

    const resetState = () => {
        setIsSignup(!isSignup);
        setInput({
                name:"", 
                email: "", 
                password: ""
            });
    };


    return (
        <div>
            {/* define onSubmit so when submitted function will be called, save handleSubmit here  */}
            <form onSubmit={handleSubmit} >
                <Box
                    display="flex"
                    flexDirection={"column"}
                    maxWidth={400}
                    alignItems="center"
                    justifyContent={"center"}
                    margin="auto"
                    marginTop={5}
                    padding={3}
                    borderRadius={5}
                    boxShadow={"5px 5px 10px #ccc"}
                    sx={{
                        ":hover": {
                            boxShadow: "10px 10px 10px #ccc",
                        },
                    }}
                >
                    <Typography 
                        variant="h2" 
                        padding={3} 
                        textAlign="center"
                    >
                        {/* -remove Login (update the state of this typography) assign property will equals to true add signup or else if login will be false then add login */}

                        {isSignup ? "SignUp" : "Login" }
                    </Typography>

                        {/* The logical AND ( && ) (logical conjunction) operator for a set of boolean operands will be true if and only if all the operands are true . Otherwise it will be false . */}

                    { isSignup && <TextField 
                        // handle the state of this text field (for now cannot get values) define some identifiers with name and define value
                        name="name"
                        value={input.name}
                        // cannot be edited/changed because value is defined as empty string
                            // add onChange function
                            onChange={handleChange}
                        margin="normal"
                        type={"text"} 
                        variant="outlined" 
                        placeholder="Name" 
                    />}

                        {/*add condition only need to show first text field whenever the isSignup is true*/}

                    <TextField
                        name="email"
                        value={input.email}
                            onChange={handleChange}
                        margin="normal" 
                        type={"email"} 
                        variant="outlined" 
                        placeholder="Email" 
                    />
                    <TextField
                        name="password"
                        value={input.password}
                            onChange={handleChange}
                        margin="normal"
                        type={"password"}
                        variant="outlined"
                        placeholder="Password"
                    />
                    <Button 
                        // when sign up equals true need to handle different icons - if signup is false then need to handle the login - if we assign a property equals true shows HowToRegOutlinedIcon if sign up is false then show LoginOutlinedIcon

                        endIcon={isSignup ? <HowToRegOutlinedIcon /> : <LoginOutlinedIcon />
                        }
                        // need to get all the values of this form (add type="submit") enter form after defining move on to form and define onSubmit
                        type="submit"
                        sx={{
                            marginTop:3, 
                            borderRadius: 3
                        }}

                        variant="contained" 
                        color="warning"
                    >
                        {/* -(remove Login) if Signup is true show Signup else show Login */}
                        
                        {isSignup ? "Signup": "Login"}
                    </Button>

                    {/* That's the logical "not" operator. It means "the opposite of". So if the variable contains "false", then putting "!" in front will make the result "true". */}

                    {/* The "not" operator just inverts the value. An empty string by itself is considered to be "falsey", and one with content is considered "truthy". */}

                    <Button 
                        // reverse order 
                        endIcon={isSignup ? <LoginOutlinedIcon />  : <HowToRegOutlinedIcon /> 
                    }
                        // onClick  have the setSignup can wrap inside the function remove it from here then have the function as the reset
                        // onClick={()=>setIsSignup(!isSignup)}
                        onClick={resetState}

                        sx={{
                            marginTop:3, 
                            borderRadius: 3
                        }}

                    >
                    
                        {/* The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is falsy. */}

                        {/* - remove (Change to Signup) Add condition (if the signup property equals to true then add the text login. if the assign property will be close to false add the text signup. */}

                       Change To {isSignup ? "Login" : "Signup" }
                    </Button>
                </Box>
            </form>
        </div>
    );
};

export default Auth;

# Password Generator

## Purpose
Generates a password of a length between 8 and 128 characters


## Tools used
Program is written in Javascript with supplied html

## Features
* Takes an input for password length
* Validates the password length is valid and that a valid number is being supplied
* Provides prompts to the user to include numbers, symbols and upper case letters


## Notes
I used princples borrowe from Python work to create this program.  Rather than type out two full lists of letters, I utilized the Javascript map function ,which genereates a new array using a supplied function.  

I opted to concat each array of characters onto the password options array, and used random numbers to generate an integer between 0 and the length of the array.  
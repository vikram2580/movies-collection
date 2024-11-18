import jwt from 'jsonwebtoken';
import db from '../Config/db';

interface UserDocument extends Document {
    _id: string;
    displayname: string;
    username: string;
    emailAddress: string;

    // Add other fields as per your schema
}

/**
* This function is use to sanitize the array
* @param unsanitizedArray 
* @returns 
*/
export function SanitizeArray(inputString: string | string[]): string[]
{

    if (Array.isArray(inputString))
    {
            return inputString.map((value) => value.trim());

    }
   else if (typeof inputString == 'string')
   {
        return inputString.split(",").map((value) => value.trim());

   }
   else
   {
    console.error("Invalid input type")
    return[];
   }
}

/**
 * 
 * @param user 
 * @returns 
 */
export function GeneratorToken(user: UserDocument): string
{
    const paylod ={
        id: user._id,
        DisplayName: user.displayname,
        username: user.username,
        EmailAddress: user.emailAddress
    }

    const jwtOptions = 
    {
        expiresIn: 604800 //1 week
        //Note: this may be a security risk,as the token will be vaild for a week
    }
    return jwt.sign(paylod, "SomeSecret", jwtOptions);

}
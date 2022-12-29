import jwt_decode from "jwt-decode";


export const getUserFromResponse = (response) => {
    const decoded = jwt_decode(response.credential);
    const { name, picture, sub } = decoded;

    const user = {
        _id: sub,
        _type: 'user',
        username: name,
        image: picture,
    }
    return user;
}
class AuthService {

    saveUser(user = undefined) {
        if (!user) return; 
        localStorage.setItem("user", JSON.stringify(user))
    }

    getUser(){
        try{
            return JSON.parse(localStorage.getItem("user"))
        }catch{
            return {};
        }
    }
}

export const authService = new AuthService();
// const re = /<input class="btn" id="[0-9]*" placeholder="\$Var" name="[\w]*" style="background-color: rgb\([0-9, ]*\); color: white; width: [\w\(\) \.\+]*;" value="[\w]*">/gm
const re = /<(input .+?)>/gm

const userInfoTemplate = {
    username: '',
    password: '',
    id: '',
    emailAddress: '',
    emailPassword: '',
}

export { re, userInfoTemplate }

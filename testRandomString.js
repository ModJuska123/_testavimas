console.log(createRandomString(10));

function createRandomString(stringlength){
    let randomString = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxwz123456789';
    for(let i = 0; i < stringlength; i++) {
        randomString += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return randomString;
    }

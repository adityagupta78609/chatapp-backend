import {faker} from '@faker-js/faker'
import {User} from "../models/user.js"

const createUser = async(numUsers) => {
    try{
        const usersPromise = [];
        for(let i = 0; i < numUsers; i++){
            const tempUser = User.create({
                name:faker.person.fullName(),
                username: faker.internet.userName(),
                bio:faker.lorem.sentence(10),
                password:"kuttekamine",
                avatar:{
                    url:faker.image.avatar(),
                    public_id:faker.system.fileName()
                },
            })

            usersPromise.push(tempUser);
            console.log("user created", numUsers);
        }

        await Promise.all(usersPromise);
    }
    catch(error){
        console.error(error);
        process.exit(1);
    }
}






export {createUser};
const User = require("../models/User.js");

async function createUser() {
    const someUser = new User({
        name: "孙笑川258",
        email: "sun@dog.com",
        password: "4396",
        description:
            "我是一个男性黑人出生于一个也门MSL家庭，后来我支持了LGBT选择变性嫁给一个男人育有一子。但战事动荡男人战死，我虽用rpg自卫但还是失去了双腿成了残疾人，后来孩子也去世了，有了心理障碍。为躲避战乱选择成为国际难民避难，并加入了环保协会，大自然保护协会，动物保护协会并成为了素食主义者",
        teams: ["someTeamid"],
        projects: ["projectid"],
        tasks: ["taskId"]
    });
    console.log("shit!");
    const result = await someUser.save();
    console.log(result);
}
module.exports = {
    createUser: createUser
}
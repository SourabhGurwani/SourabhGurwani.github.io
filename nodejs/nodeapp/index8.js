import bcrypt from "bcrypt";

// const pwd = "pass1242"
// const hashedpwd =await bcrypt.hash(pwd,10)
// console.log(hashedpwd)

const check = await bcrypt.compare("pass1242","$2b$10$j4roV4u96HJCNnOLSwxI.OGAHBdzWIBt2eHYj.291T0AGFwKidCaC")
console.log(check)
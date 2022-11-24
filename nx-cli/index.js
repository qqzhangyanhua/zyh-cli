const sade = require("sade");

//创建控制台对象实列
const prog = sade("nx");
//定义命令
prog
  .version(1.0)
  .command("create <pkg>")
  .option("--template")
  .describe("choose template").example('nx create nice-project --template ts-react').action((pkg,args) => {
      console.log('🚀===',pkg);
  })
  prog.parse(process.argv)


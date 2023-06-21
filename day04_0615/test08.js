// 비동기처리: async(에이싱크)
// try{ }catch()finally{}

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const fileOptions = async()=>{
    try{
        const data = await fs.readFile('./datas/lorem.txt', "utf-8")
        console.log("1. readFile: ", data);
        console.log("2. console.log ");

        await fsPromises.writeFile("./datas/newWrite.txt", data);
        console.log('3. wirte complete');

        await fsPromises.appendFile("./datas/newWrite.txt", "append txt");
        console.log('4. appendFile');

        await fsPromises.rename("./datas/newWrite.txt", "./datas/rename.txt", err=>{if(err)throw err});
        console.log('5. rename');

        if(!fsPromises.existsSync("./model")){
            await fsPromises.mkdir('./model', err=>{if(err)throw err});
        }

        console.log('6. mkdir')
        // await fs.readdir('./', (err, filelist)=>{
        //     console.log(filelist);
        // })
        const filelist = await fsPromises.readdir('./',err=>{if(err)throw err});
        console.log("7. ", filelist);

        await fsPromises.unlink(path.join(__dirname, "datas", "rename.txt"));
        console.log("8. unlink");
    }catch(err){
        console.log(err);
    }finally{
        // try 코드에서 에러 없이도 반드시 처리
        // catch 구문이 실행되도 반드시 처리
        console.log("finally 반드시 실행");
        // db.close
    }
}

fileOptions();
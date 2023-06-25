import express from 'express';


const app = express();


app.get('/', (_req, res)=> {
    res.json({
        message: 'App is running'
    })
})


app/listen(8080, () =>{
    console.log(`App is running`);
})
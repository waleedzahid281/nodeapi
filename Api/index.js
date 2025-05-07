const express=require('express');
const cors=require('cors');
const pool=require('./db');
require('dotenv').config();

const app=express();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    try{
        res.json(`welcome to hr api`);
    }catch(err){
        res.status(500).json({Error:err.message})
    }
});
app.get('/region',async(req,res)=>{
    try{
        const result=await pool.query('select count(employee_id) from employees');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message})
    }
});



app.get('/employee',async(req,res)=>{
    try{
        const result=await pool.query('Select * from employees');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});


app.get('/job',async(req,res)=>{
    try{
        const result=await pool.query('Select * from jobs');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});



app.get('/department',async(req,res)=>{
    try{
        const result=await pool.query('Select * from departments');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});


app.get('/location',async(req,res)=>{
    try{
        const result=await pool.query('Select * from locations');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});


app.get('/totalemp',async(req,res)=>{
    try{
        const result=await pool.query('Select count(*) from employees');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});


app.get('/countrycount',async(req,res)=>{
    try{
        const result=await pool.query('Select count(*) from countries');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});


app.get('/totaljobs',async(req,res)=>{
    try{
        const result=await pool.query('Select count(*) from jobs');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});


app.get('/totaljobjistory',async(req,res)=>{
    try{
        const result=await pool.query('Select count(*) from jobhistory');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});



app.get('/totallocation',async(req,res)=>{
    try{
        const result=await pool.query('Select count(*) as location_count from locations');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});


app.get('/totalregion',async(req,res)=>{
    try{
        const result=await pool.query('Select count(*) from regions');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});

app.get('/country',async(req,res)=>{
    try{
        const result=await pool.query('Select * from countries');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});


const PORT=process.env.port;
app.listen(PORT,()=>{
    console.log(`Connected sucessfully.... on port ${PORT}`)
});

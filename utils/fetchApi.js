import axios from "axios";


export const baseUrl='https://bayut.p.rapidapi.com'


export const fetchApi=async(url)=>{
    const {data}=await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '0aaa072f75msh458dc52784cf495p1f8f76jsnd1df551404f2',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });
    return data;
}
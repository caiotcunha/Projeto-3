import api from '../../Service/api'


export default function Logar(body){
   api.post('/usuarios/login', body)
    .then((res) =>{
        console.log("Res: ", res);
    })
    .catch((err) =>{
        console.log("Err: ", err);
        console.log(body)
    })
} 
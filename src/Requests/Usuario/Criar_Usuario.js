import api from '../../Service/api'


export default function Criar_Usuario(body){
   api.post('/usuarios/', body)
   .then((res) =>{
      console.log(res);
   })
   .catch((err) =>{
      console.log(err);
      console.log(body);
   });
}

import { useAuth0, User, type RedirectLoginOptions, type Auth0VueClient } from '@auth0/auth0-vue';
import type { computed, Ref } from 'vue';

export interface UserDetails {
  id: number;
  userUuid: string;
  createdAt: string;
  username: string;
  fullName: string;
}

export interface UserDetailsResponse{
  status_code: number,
  body: UserDetails | null
}

export interface UserRegistrationDTO{
  userName: string;
  fullName: string;
}

export interface RegistrationResponse {
  success: boolean;
  statusCode: number;
  message: string;
}

const BASE_URL:string = 'http://localhost:8088/api';


async function fetchUser(auth0 :Auth0VueClient): Promise<UserDetailsResponse> {
  try{
  const accessToken:string = await auth0.getAccessTokenSilently();
  const result:Response = await fetch(BASE_URL+'/user/status',{
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + accessToken,
      'Accept': 'application/json'
    }
  });
  if(!result.ok){
    console.error('Error: '+result.statusText)
    return {status_code: result.status, body: null};
  }

  if(result.status === 204){
    console.info('User not registered');
    return {status_code: result.status, body: null};
  }

  const data:UserDetails = await result.json();
  return {status_code: result.status, body: data};

  }catch(error:any){
  if (error && error.error) {
    console.error('Código de Erro (ex: Auth0):', error.error);
    console.error('Descrição do Erro (ex: Auth0):', error.error_description);
  }
    console.error('Error: '+error.error);
    return { status_code: 500, body: null };
  }
}

async function createUser(auth0 :Auth0VueClient, userDTO: UserRegistrationDTO): Promise<RegistrationResponse>{
  try{
    const accessToken:string = await auth0.getAccessTokenSilently();
    const result:Response = await fetch(BASE_URL+'/user/register',{
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + accessToken,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(userDTO)
  });

  const responseMessage = await result.text();

  if (response.status === 201) { // 201 Created - Sucesso
    return { success: true, statusCode: response.status, message: responseMessage };
  } else { // Trata outros casos como 409 (conflito) ou 500 (erro no servidor).
    return { success: false, statusCode: response.status, message: responseMessage };
  }

  }catch(error:any){
    console.error("Erro na função registerUser:", error);
    if (error && error.error) {
      console.error('Erro do Auth0:', error.error_description);
      return { success: false, statusCode: 500, message: `Erro de autenticação: ${error.error_description}` };
    }
    return { success: false, statusCode: 500, message: 'Ocorreu um erro no frontend ao tentar registrar.' };
  }
}


export {fetchUser,createUser};
import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import _ from "lodash"
import {Core} from '@/vuexes/core'
import {Web} from '@/vuexes/web'
import axios from  '@/plugins/axios'
@Module({generateMutationSetters: true})
class AuthModule extends VuexModule {
  private  token:any =  localStorage.getItem('token')
  public user:any = null
  public kyc :any = null
  public point:any = null 
  public tier:any = null

  public async setUser(){
    let user = await Core.getHttp(`/api/auth/v2/profile/`)
    this.user = user;
    if(this.user.id){
      await this.getMyKyc();
      await this.getMypoint();
      await this.getMyTier();
      await this.checkTier()
    }

    return user;
  }

  async getMyKyc() {
    let kyc = await Core.getHttp(`/api/account/kyc/?user=${this.user.id}`);
    if (kyc.length > 0) {
        this.kyc = kyc[kyc.length - 1];
    }
}

async getMypoint() {
  let point = await Core.getHttp(`/api/account/userpoint/?user=${this.user.id}`);
  if (point.length > 0) {
      this.point = point[point.length - 1];
  }
}

async getMyTier(){
  this.tier = await Core.getHttp(`/api/account/tier/${this.point.tier}/`);
}


private async checkTier(){
  let listTier = await Core.getHttp(`/api/account/tier/`)
  let tier = await _.filter(listTier,(r)=>{
       return this.point.total >= r.length
  })
 
  let currentTier:any = (tier.length>0)?tier[tier.length - 1]:this.tier 
  if(this.tier.id == currentTier.id){
   // alert("Point not update")
  }else{
    await this.updateMyTier(currentTier);
  } 
}


private async updateMyTier(currentTier:any){
    let tier = await Core.putHttp(`/api/account/userpoint/${this.point.id}/`,{tier:currentTier.id})
    await this.getMypoint();
    await Web.alert(`Your Point Update to ${currentTier.name}`)
    location.reload()
  }

 
  public async getUser(){
    let user = await Core.getHttp(`/api/auth/v2/profile/`)
    return user;
  }

  public async login(form:any){
    await this.reToken();
    let user = await Core.postHttp(`/api/auth/v1/login/`, form)
    return user 
  }

  public async register(form:any){
    await this.reToken();
    let user = await Core.postHttp(`/api/auth/v2/register/`, form)
    return user 
  }



  public async reToken(){
    axios.defaults.headers.common['Authorization'] = '';
  }

  public async storeToken(token:any){
    console.log(token);
    axios.defaults.headers.common['Authorization'] = (token != null )?`Token ${token}`:'';
  }

  public async storeTokenToStorage(token:any){
    localStorage.setItem('token',token )
  }

  public async checkToken(){
    if(this.token != null){
      await this.storeToken(this.token);
    }
  }

  public async checkUser(){
    let user = await this.getUser(); 
    if(this.token){
      if(!user.id){
        alert('Session หมดอายุ')
        await this.reToken();
        await this.logout(); 
        location.reload();
      }
    }
  
    // if(!this.user.id){
    //   await window.location.replace("/auth/login");
    // }
  }


  public async logout(){
    localStorage.clear();
    return await Core.postHttp('/auth/logout/',{})
  }







}

import store from "@/vuexes"
export const Auth = new AuthModule({store, name: "Auth"})
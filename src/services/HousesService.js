import { AppState } from "../AppState"
import { sandbox } from "./AxiosService"
class HousesService {
  async getHouses() {
    let res = await sandbox.get("/houses")
    AppState.houses = res.data
  }
  async getHouseById(id){
    let res = await sandbox.get(`/houses/${id}`)
    AppState.activeCar = res.data
  }
  async createHouse(car){
    let res = await sandbox.post('/houses', car)
    console.log(res.data)
    AppState.houses.push(res.data)
    return res.data.id
  }
  // async destroy(id){
  //   await sandbox.delete(`/houses/${id}`)
  //   AppState.houses = AppState.houses.filter(car => car.id !== id)
  // }
}

export const housesService = new HousesService()
import { AppState } from "../AppState"
import router from "../router"
import { sandbox } from "./AxiosService"
class HousesService {
  async getHouses() {
    let res = await sandbox.get("/houses")
    AppState.houses = res.data
  }
  async getHouseById(id){
    let res = await sandbox.get(`/houses/${id}`)
    console.log(res.data)
    AppState.activeHouse = res.data
  }
  async createHouse(car){
    let res = await sandbox.post('/houses', car)
    console.log(res.data)
    AppState.houses.push(res.data)
    return res.data.id
  }
  async destroy(id){
    await sandbox.delete(`/houses/${id}`)
    AppState.houses = AppState.houses.filter(car => car.id !== id)
    AppState.activeHouse = {}
    router.push({name: 'Home'})
  }
}

export const housesService = new HousesService()
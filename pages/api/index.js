export default async function getEvents(req, res){
    // request and response


    // getting the api key from environment
    const app_id = process.env.BANDS_IN_TOWN_API_KEY;
    const band = 'Sunday Mourners'
    
    const byID=`https://rest.bandsintown.com/artists/${band}/events/?app_id=${app_id}&date=all`
    


    const response= await fetch(byID)
    var data = await response.json()
    res.status(200).json(data)
  }
  
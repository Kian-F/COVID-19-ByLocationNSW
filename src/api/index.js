
import axios from 'axios'

// const url ='https://data.nsw.gov.au/data/dataset/97ea2424-abaf-4f3e-a9f2-b5c883f42b6a/resource/2776dbb8-f807-4fb2-b1ed-184a6fc2c8aa/download/covid-19-cases-by-notification-date-location-and-likely-source-of-infection.csv';
const url ='https://data.nsw.gov.au/data/api/3/action/datastore_search?resource_id=21304414-1ff1-4243-a5d2-f52778048b29'
export const fetchData  = async (postcode) =>{
    try {

        const data  = await axios.get(url)
        //const myObjStr = JSON.stringify(data)
            
          
          console.log(data.data.result.records)

        
        
    } catch (error) {
        console.log(error)
    }

}

 
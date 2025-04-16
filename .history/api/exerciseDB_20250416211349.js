import axios from 'axios'
import {rapidApiKey} from '../constants'

const baseUrl='https://exercisedb.p.rapidapi.com'

const apiCall = async (URL,params)={
    try {
        const options={
            method:'GET',
            URL,
        }
    } catch (err) {
        console.log('error:',err.message)
        
    }
}
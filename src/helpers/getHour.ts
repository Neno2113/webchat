import moment from "moment";



export const getHour = ( date: string ) => {

    const hour = moment( date );

    return hour.format('hh:mm A | MMMM Do');

}
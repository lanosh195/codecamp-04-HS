export function getDate(myDate){
    const date=new Date(myDate)
    const year=date.getFullYear()
    const month=date.getMonth()
    const day= date.getDate()

    return `${year}-${month}-${day}`
}
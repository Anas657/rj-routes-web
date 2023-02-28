export default function DateComp() {
    const date = new Date ();
    const getDate = date.getDate();
    const getMonth = date.getMonth();
    const getFullYear = date.getFullYear();
    const getDay = date.getDay();

    const setHourNew = date.setHours(15, 20, 11);
    const dateStr = "July 19, 2001 02:45:52";
    const strToDate = Date.parse(dateStr);
    
    
    console.log("00012 date", date);
    console.log("00012 getDate", getDate);
    console.log("00012 getMonth", getMonth);
    console.log("00012 getFullYear", getFullYear);
    console.log("00012 getDay", getDay);
    
    console.log("00012 setHours", new Date(setHourNew));
    console.log("00012 dateStr", dateStr);
    console.log("00012 strToDate", new Date(strToDate));
    
    
    
    
    
    return (
    <div>
        <h1>Date</h1>
    </div>
    );
} 
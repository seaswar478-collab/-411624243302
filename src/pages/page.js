import Blueprint from "../templates/blueprint.js";
import Card from "../organisms/card.js";
function Page(){
    return(
        <>
         <Blueprint name = "easwar"/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
        </>
    )
}

export default Page;
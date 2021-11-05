import { useRouter } from "next/router"

export default function DynamicRoutedNumberPage(){
    const router= useRouter()

    

    console.log(router)

    return(
        <>
            <div>{router.query.aaa}번 게시물</div>
            
        </>
    )

}
import style from "./style/cardTags.module.css"

const Tags = (tagging) =>{
    console.log(tagging);
    

        for (let i = 0; i < tagging.length; i++){
        let curTag = tagging[i]
        return(
        <div className={style.tag}>
            <span>{curTag}</span>
        </div>
        )
        }
        

}

export default Tags
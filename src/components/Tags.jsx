import style from "./style/cardTags.module.css"

const Tags = ({tagging}) =>{
    console.log(tagging);
    
    return tagging.map((curTag, index) => 
        <div className={`${style.tag} ${style[curTag] || ""}`} key={index}>
            <span>{curTag.toUpperCase()}</span>
        </div>
    )


}

export default Tags
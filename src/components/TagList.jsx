import style from "./style/cardTags.module.css"

const TagList = ({ list }) => {
    let result = []

    list.forEach(element => {
        element.tags.forEach((curEl) => {
            !result.includes(curEl) && result.push(curEl)
        })
    });

    return result.map((curTag, index) =>

        <div className={`${style.tag} ${style[curTag] || ""}`} key={index}>
            <span>{curTag.toUpperCase()}</span>
        </div>

    )

}

export default TagList
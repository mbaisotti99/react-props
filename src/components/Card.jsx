
import Butt from "./Button.jsx"
import Tags from "./Tags.jsx"

import style from "./style/card.module.css"

const Card = (
    {
        title,
        img,
        content,
        tags,
        publish,
        id
    }
) => {
    return (
        <>
            {publish &&
                <div className={style.card} key={id}>
                    <div className="card-img">
                        <img src={`/images/${img}`} />
                    </div>
                    <div className={style.cardBody}>
                        <h2>{title}</h2>
                        <p>{content}</p>
                        <div className="tagsDiv">
                            <Tags
                                tagging={tags}
                            />
                        </div>
                        <Butt />
                    </div>
                </div>}
        </>
    )
}

export default Card
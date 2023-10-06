import { Link } from "react-router-dom";

const Category = ({ category }) => {
    const { id, image, category_name, title, category_bg, card_bg, text_bg, } = category;

    
    return (
        <div>
            <Link to={`/category/${id}`}>
                <img className="w-72 h-40" src={image} alt="" />
                <div className="p-3 w-72 lg:w-full" style={{ backgroundColor: card_bg }}>
                    <h2 className="w-20 px-1 rounded-md" style={{ backgroundColor: category_bg, color: text_bg }}>{category_name}</h2>
                    <h2 style={{ color: text_bg }}>{title}</h2>
                </div>
            </Link>
        </div>
    );
};

export default Category;
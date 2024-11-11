import React from "react";
import CategoryItem from "../directory-item/directory-item";
import { CategoryMenu } from './category-menu.styles.jsx';


function CategoryMenu ({categories}) {

    return(
        <CategoryMenu>
            {categories.map((category) => {
                return (
                    <CategoryItem key={category.id} category={category} /> 
                );
                })}
        </CategoryMenu>
    );
}

export default CategoryMenu;
import Post from './post.js';
import Category from './category.js';

const relations = () => {

    Post.belongsTo(Category);
    Category.hasMany(Post);
    
}

export { relations };
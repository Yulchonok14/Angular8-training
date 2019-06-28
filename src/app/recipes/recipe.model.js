var Recipe = (function () {
    function Recipe(id, name, desc, imagePath, ingredients) {
        this.id = id;
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
    return Recipe;
})();
exports.Recipe = Recipe;
//# sourceMappingURL=recipe.model.js.map
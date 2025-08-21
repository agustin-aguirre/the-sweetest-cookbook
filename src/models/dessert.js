export { Dessert, DessertThumbnail }


function Dessert(id, name, ingredients, steps, imgUrl) {
    this.id = id ?? 0;
    this.name = name ?? "";
    this.ingredients = ingredients ?? [];
    this.steps = steps ?? [];
    this.imgUrl = imgUrl ?? "";
}


function DessertThumbnail(id, name, imgUrl) {
    this.id = id ?? 0;
    this.name = name ?? "";
    this.imgUrl = imgUrl ?? "";
}

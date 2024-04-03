import mongoose, { Schema } from "mongoose";

export const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "categories",
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
    },
    gallery: {
      type: Array,
    },
    quantity: {
      type: Number,
      default: 0,
    },
    discount: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
    },
    color: {
      type: Array,
    },
    size: {
      type: Array,
    },
    featured: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
// {
//     "name": "Gourmet Cat Food",
//     "price": 1.99,
//     "quantity": 75,
//     "discount": 5,
//     "gallery" : [
//       "https://demo.templatesjungle.com/waggy/images/item2.jpg",
//       "https://demo.templatesjungle.com/waggy/images/item2.jpg",
//       "https://demo.templatesjungle.com/waggy/images/item2.jpg",
//       "https://demo.templatesjungle.com/waggy/images/item2.jpg"
//     ],
//     "description": "Justo, cum feugiat imperdiet nulla molestie ac vulputate scelerisque amet. Bibendum adipiscing platea blandit sit sed quam semper rhoncus. Diam ultrices maecenas consequat eu tortor orci, cras lectus mauris, cras egestas quam venenatis neque.",
//     "image": "https://demo.templatesjungle.com/waggy/images/item2.jpg",
//     "featured": false
//   }
export default mongoose.model("Products", ProductSchema);

// src/pages/shop/merchData.js

const merchItems = [
    {
      id: 1,
      name: "EmpowerHer Hoodie",
      price: 49.99,
      image: "/assets/hood.png",
      category: "hoodie",
      isBestseller: true,
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Navy", "Burgundy"],
      description: "Premium cotton blend hoodie with empowering embroidery",
      features: ["80% Cotton, 20% Polyester", "Front pocket", "Adjustable drawstring"]
    },
    {
      id: 2,
      name: "Rise Together Tee",
      price: 29.99,
      image: "/assets/t1.png",
      category: "tshirt",
      isBestseller: true,
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["White", "Black", "Heather Gray"],
      description: "Classic fit t-shirt with inspirational typography",
      features: ["100% Organic Cotton", "Regular fit", "Machine washable"]
    },
    {
      id: 3,
      name: "Growth Diary",
      price: 24.99,
      image: "/assets/not2.png",
      category: "journal",
      isBestseller: false,
      colors: ["Deep Blue", "Sage Green", "Dusty Pink"],
      description: "Hardcover journal with guided prompts for personal growth",
      features: ["192 pages", "Lined paper", "Ribbon bookmark"]
    },
    {
      id: 4,
      name: "Note Book",
      price: 14.99,
      image: "/assets/not1.png",
      category: "journal",
      isBestseller: false,
      colors: ["Black", "Ivory"],
      description: "Compact notebook for daily reflections and ideas",
      features: ["120 pages", "Dot grid", "Elastic closure"]
    },
    {
      id: 5,
      name: "Unstoppable Sweater",
      price: 54.99,
      image: "/assets/sweat.png",
      category: "hoodie",
      isBestseller: true,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Charcoal", "Forest Green", "Deep Purple"],
      description: "Premium oversized hoodie with bold typography",
      features: ["Fleece interior", "Kangaroo pocket", "Ribbed cuffs"]
    },
    {
      id: 6,
      name: "Bold T-shirt",
      price: 27.99,
      image: "/assets/t2.png",
      category: "tshirt",
      isBestseller: false,
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["White", "Navy", "Rose"],
      description: "Fitted crewneck tee with minimalist design",
      features: ["100% Combed Cotton", "Modern fit", "Tagless"]
    },
    {
      id: 7,
      name: "Thriving Backpack",
      price: 27.99,
      image: "/assets/pack.png",
      category: "accessory",
      isBestseller: true,
      colors: ["Black", "Camel", "Olive"],
      description: "Durable backpack with laptop compartment and organization",
      features: ["15\" laptop sleeve", "Multiple pockets", "Padded straps"]
    },
    {
      id: 8,
      name: "Hand Bag",
      price: 20.99,
      image: "/assets/carr.png",
      category: "accessory",
      isBestseller: false,
      colors: ["Natural", "Black", "Denim"],
      description: "Eco-friendly tote bag for everyday use",
      features: ["Canvas material", "Reinforced handles", "Inner pocket"]
    },
    {
      id: 9,
      name: "Empower Cap",
      price: 9.99,
      image: "/assets/cap.png",
      category: "accessory",
      isBestseller: false,
      sizes: ["One Size", "Adjustable"],
      colors: ["Black", "Navy", "White"],
      description: "Structured cap with embroidered logo",
      features: ["Cotton twill", "Adjustable strap", "Curved brim"]
    },
  ];
  
  export default merchItems;
  
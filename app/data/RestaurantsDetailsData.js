export const restaurantDetails = {
  name: "Mostaza San Rafael",
  image: "localhost:8080/static/",
  hours: "Lunes a Domingo: 10:00 AM - 11:00 PM",
  description: "Deliciosa comida casera con ingredientes frescos.",
  address: "Hipolito Yrigoyen 1530, San Rafael, Argentina",
  phone: "+54 123 456 7890",
  latitude: -34.6019, 
  longitude: -58.3816, 
  menu: [
    { name: "Plato 1", price: "$10", description: "Descripción del plato 1." },
    { name: "Plato 2", price: "$15", description: "Descripción del plato 2." },
    { name: "Plato 3", price: "$12", description: "Descripción del plato 3." },
  ],
  ratings: 4.5,
  reviews: [
    { user: "Usuario 1", comment: "Excelente servicio y comida deliciosa." },
    { user: "Usuario 2", comment: "Recomiendo el plato 2, es increíble." },
  ],
};

export default restaurantDetails;

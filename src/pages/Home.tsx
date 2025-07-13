export function Home() {
  return (
    <div className="text-center mt-5">
      <h1>Welcome to the Pet Supplies Store!</h1>
      <p className="lead mt-3">
        Your one-stop shop for all your pet's needs. Browse our selection of food, treats, bowls, leashes, and more!
      </p>
      <p>
        Enjoy fast shipping, great prices, and a shopping experience designed for pet lovers by pet lovers.
      </p>
      <img 
        src="/imgs/homepage.png" 
        alt="Pet Supplies Store" 
        className="mt-4"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  )
}

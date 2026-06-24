import "./Compare.css";

const compareProducts = [
  {
    id: 1,
    title: "Sports Shoes",
    price: 2499,
    rating: 4.5,
    category: "Shoes",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 3999,
    rating: 4.8,
    category: "Electronics",
  },
];

function Compare() {
  return (
    <div className="compare">
      <h1>⚖️ Product Comparison</h1>

      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>{compareProducts[0].title}</th>
            <th>{compareProducts[1].title}</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Price</td>
            <td>
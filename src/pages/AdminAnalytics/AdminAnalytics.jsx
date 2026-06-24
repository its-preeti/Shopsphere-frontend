import "./AdminAnalytics.css";

function AdminAnalytics() {

  const analytics = [

    {
      title: "Total Orders",
      value: 1280,
      icon: "📦",
    },

    {
      title: "Total Revenue",
      value: "₹4,50,000",
      icon: "💰",
    },

    {
      title: "Products",
      value: 320,
      icon: "🛍️",
    },

    {
      title: "Users",
      value: 890,
      icon: "👤",
    },

  ];

  return (

    <div className="analytics">

      <h1>
        📊 Admin Analytics
      </h1>

      <div className="analytics-container">

        {analytics.map((item, index) => (

          <div
            className="analytics-card"
            key={index}
          >

            <div className="icon">
              {item.icon}
            </div>

            <h2>
              {item.title}
            </h2>

            <h3>
              {item.value}
            </h3>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AdminAnalytics;
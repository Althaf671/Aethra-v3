
//========== DASHBOARD COMPONENT ==========//

import LogoutBtn from "@/app/client/profile/logout-btn";
import Link from "next/link";

export default function AdminDashboard() {
  // Dummy data analytics
  const totalUsers = 0;
  const totalRevenue = 0;
  const activeOrders = 0;
  const completedOrders = 0;

  return (
    <section className="admin__dashboard">
      <div className="admin__header">
        <h1 className="admin__title">Admin Dashboard</h1>
        <p className="admin__subtitle">Manage all user orders from here.</p>
      </div>

      {/* Analytics Cards */}
      <div className="admin__analytics">
        <div className="analytics__card">
          <h3>Total Users</h3>
          <p>{totalUsers}</p>
        </div>
        <div className="analytics__card">
          <h3>Total Revenue</h3>
          <p>$ {totalRevenue.toLocaleString("id-ID")}</p>
        </div>
        <div className="analytics__card">
          <h3>Active Orders</h3>
          <p>{activeOrders}</p>
        </div>
        <div className="analytics__card">
          <h3>Completed Orders</h3>
          <p>{completedOrders}</p>
        </div>
      </div>

      {/* Orders Table */}
      <div className="admin__card">
        <h2 className="section__title">User Orders</h2>
        <div className="admin__table-wrapper">
          <table className="admin__table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>User</th>
                <th>Email</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={7} className="empty-row">No orders available.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="profile__logout">
            <Link href='/'>Return</Link>
            <LogoutBtn />
      </div>
    </section>
  );
}